# RIESGOS-DEPLOY.md

Documento de análisis de riesgos para el despliegue de la rama `bestseo` a producción (`main`).

---

## 1. Contexto

- Rama actual de trabajo: `bestseo`.
- Cadena de ramas: `main` → `admin` (2 commits) → `bestseo` (8 commits).
- El merge `admin → main` y `bestseo → admin` es **totalmente lineal** (fast-forward puro), por lo que **no hay conflictos de merge posibles**.
- Alcance del diff: 9 commits, ~597 inserciones / 399 eliminaciones, centrado en SEO, categorías indexables, FAQ centralizadas y optimización de imágenes.

---

## 2. Riesgos críticos (pueden fallar el build / el deploy)

### R1 — Categorías servidas por la API vs. constantes estáticas

- **Archivo:** `src/pages/categoria/[slug].astro` (líneas 11-16, 30-31, 78-79, 116).
- **Problema:** Los slugs de las páginas `/categoria/*` se derivan de la API en tiempo de build:

```ts
const products = await fetchProducts();
const categories = [...new Set(generalProducts.map((p) => p.category))] as ProductCategory[];
```

Pero el contenido se busca en constantes estáticas de `src/data/constants.ts` (`categorySEO` y `categoryLabels`), indexadas por el union type `ProductCategory` (tazas, fotos, cuadros, festivos, alcancia, llaveros, otros).

- **Escenario de fallo:** Si la API devuelve un producto con una `category` que no está en el union type ni en `categorySEO` (p. ej. una categoría nueva agregada al backend sin actualizar el frontend), `seo` queda `undefined` y `seo.title` lanza un `TypeError` **en build**.
- **Impacto:** El deploy de Vercel falla. La web actual **no se rompe** (Vercel no publica un build fallido), pero el deploy se cae silenciosamente hasta que se corrija.
- **Mitigación sugerida:**
  ```ts
  const seo = categorySEO[category] ?? categorySEO.otros;
  const label = categoryLabels[category] ?? 'Otros';
  ```

### R2 — `return new Response()` en una página prerendered

- **Archivo:** `src/pages/categoria/[slug].astro` (líneas 26-28).
- **Problema:** La página tiene `export const prerender = true` y usa:

```ts
if (products.length === 0) {
  return new Response('Not Found', { status: 404 });
}
```

Astro lanza un error en build si una página prerendered devuelve un `Response`.

- **Escenario de fallo:** Hoy es **inalcanzable** porque `getStaticPaths` solo genera slugs que tienen al menos un producto. Pero cualquier cambio futuro en la lógica o datos inconsistentes de la API lo activarían.
- **Impacto:** Fallo de build (deploy bloqueado).
- **Mitigación sugerida:** Eliminar el bloque o reemplazarlo por un `Astro.redirect()` / validación temprana que devuelva `[]` en `getStaticPaths`.

### R3 — Dependencia de la API en tiempo de build

- **Archivos:** `src/pages/categoria/[slug].astro`, `src/pages/producto/[slug].astro`, `src/data/products.ts`, `src/data/api.ts`.
- **Problema:** Las páginas prerendered llaman `fetchProducts()`, que usa `safeFetch()`.

```ts
// src/data/api.ts
export async function safeFetch<T>(endpoint: string): Promise<T[]> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API error ${res.status}`);
    return res.json();
  } catch (err) {
    console.warn(`[API] Error fetching ${endpoint}:`, err);
    return [];
  }
}
```

- **Escenario de fallo:** Si la API está caída durante el build, `safeFetch` devuelve `[]` → no se genera ninguna página de `/categoria/*` ni `/producto/*` (solo se genera `/catalogo` como SSR on-demand).
- **Impacto:** El build pasa, pero hay páginas desaparecidas hasta que la API vuelva y se re-depliegue.
- **Nota:** Este patrón ya existía en `main` para `/producto/*`, no es una regresión, pero conviene tenerlo en cuenta.

---

## 3. Riesgos medios

### R4 — `trailingSlash: 'never'`

- **Archivo:** `astro.config.mjs` (línea 10).
- **Problema:** Cambia la semántica de URLs. URLs antiguas o referencias externas con slash final (p. ej. `/producto/xyz/`) podrían dar 404 o requerir redirect.
- **Impacto:** Pérdida de tráfico/SEO si hay backlinks con slash.
- **Nota:** Los links internos y canónicos ya están sin slash (consistente).

### R5 — `lastmod: new Date()` en el sitemap

- **Archivo:** `astro.config.mjs` (línea 22).
- **Problema:** El timestamp cambia en cada build → churn del sitemap y posibles re-crawls innecesarios.
- **Impacto:** Ninguno funcional, solo ruido en crawlers.

### R6 — `optimizeImage` con `force: true`

- **Archivo:** `src/utils/cloudinary.ts` (línea 48).
- **Problema:** Al reconstruir la URL se descarta el segmento de versión `v<num>` de Cloudinary y cualquier transform existente:

```ts
return `${url.slice(0, idx)}${transforms}/${after.slice(slashIdx + 1)}`;
```

- **Impacto:** Cloudinary resuelve URLs sin versión (posible redirect extra). Si la URL no tiene la estructura esperada (`/image/upload/<transforms>/<public_id>`), la URL resultante se altera.
- **Afecta a:** og:image de producto (1200×630 jpg) y galerías en `src/pages/producto/[slug].astro`.

---

## 4. Riesgos bajos / observaciones

### R7 — Links de home a categorías hardcodeadas

- **Archivo:** `src/components/home/ProductCategories.astro`.
- **Problema:** Los 5 links apuntan a `/categoria/{fotos, tazas, festivos, alcancias, llaveros}`, pero esas páginas solo existen si la API devuelve al menos un producto en esa categoría.
- **Impacto:** Si una categoría no tiene productos disponibles para público general, el link da **404**.

### R8 — `og:image:width/height` fijos en 1200×630

- **Archivo:** `src/layouts/MainLayout.astro` (líneas 89-90).
- **Problema:** Los metadatos de tamaño son fijos para cualquier `og:image`. Correcto para `og-image.png` y para las URLs de Cloudinary redimensionadas a 1200×630, pero si en el futuro se pasa otra imagen con otras dimensiones, los metadatos no coincidirían.
- **Impacto:** Nulo hoy; latente.

### R9 — `ogImageType` inferido por extensión

- **Archivo:** `src/layouts/MainLayout.astro` (líneas 38-44).
- **Problema:** El MIME se infiere de la extensión del pathname de la URL. Con `force: true` y `f_jpg` el pathname termina en `.jpg` → correcto. Si la URL no tiene extensión clara, no se emite `og:image:type` (no rompe).

### R10 — Variable de entorno `PUBLIC_API_URL`

- **Archivo:** `src/data/api.ts` (línea 1).
- **Problema:** Si `PUBLIC_API_URL` no está definida en producción, se usa el fallback hardcodeado `https://api-recuerdos.vercel.app`.
- **Impacto:** Riesgo de apuntar al entorno equivocado si la env no está configurada en Vercel.

### R11 — Componentes SEO eliminados

- **Archivos:** `src/components/seo/SEO.astro` y `src/components/seo/StructuredData.astro` fueron eliminados.
- **Verificado:** No hay imports colgantes en el código. Riesgo bajo de que un PR futuro reintroduzca el import.

### R12 — robots.txt: se eliminó `Crawl-delay: 1`

- **Archivo:** `public/robots.txt`.
- **Impacto:** Menor; cambia el ritmo de rastreo.

---

## 5. Checklist de verificación previa a producción

1. `npm run build` — debe pasar sin errores.
2. `npx astro check` (validación de TypeScript/Astro).
3. Tras el deploy, verificar que responden **200**:
   - `/categoria/tazas`, `/categoria/fotos`, `/categoria/cuadros`, `/categoria/festivos`, `/categoria/alcancias`, `/categoria/llaveros`, `/categoria/otros`
   - `/producto/<slug>` de algunos productos.
4. Verificar `/sitemap-index.xml` (nuevas URLs de categoría, canonical sin slash).
5. Monitorear Google Search Console post-deploy: 404 por `trailingSlash` y categorías nuevas.

---

## 6. Fixes recomendados

Aplicar antes del deploy elimina los riesgos críticos:

- **R1:** fallback `const seo = categorySEO[category] ?? categorySEO.otros;` y `const label = categoryLabels[category] ?? 'Otros';`
- **R2:** eliminar el bloque `if (products.length === 0) { return new Response(...); }` (es inalcanzable dada la lógica de `getStaticPaths`) o reemplazarlo por una validación temprana.

> Nota: este documento es solo guía. No modifica código.

# Recuerdos Compartidos - Catálogo de Regalos Personalizados

> Catálogo web moderno de regalos personalizados con lista de interés vía WhatsApp. Ubicado en Santa Cruz de la Sierra, Bolivia.

**Sitio Web**: https://www.recuerdoscompartidos.sarl

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Arquitectura de Datos](#arquitectura-de-datos)
- [Categorías Dinámicas](#categorías-dinámicas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Comandos Disponibles](#comandos-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Lista de Interés por WhatsApp](#lista-de-interés-por-whatsapp)
- [WhatsApp como Canal de Venta](#whatsapp-como-canal-de-venta)
- [Optimización de Imágenes](#optimización-de-imágenes)
- [SEO y Datos Estructurados](#seo-y-datos-estructurados)
- [Despliegue](#despliegue)
- [Testing y Validación](#testing-y-validación)
- [Contribución](#contribución)
- [Roadmap Futuro](#roadmap-futuro)

## Características Principales

- Catálogo dinámico con filtrado por categorías
- **Categorías 100% dinámicas servidas por la API** (`GET /api/categorias`) — sin constantes estáticas que rompan el build
- Lista de interés con envío por WhatsApp (sin carrito de compras ni checkout)
- Modo Dual: compras personales y para empresas
- Datos obtenidos desde API remota en tiempo de build
- Página de servicios empresariales B2B con planes por volumen
- Sección de preguntas frecuentes organizada por temas
- Documentos legales (privacidad, términos, entregas)
- Portafolio de trabajos realizados
- Productos destacados en la página principal
- SEO avanzado con JSON-LD y datos estructurados
- WhatsApp como canal principal de venta y cotización
- Arquitectura híbrida SSG + SSR desplegada en Vercel
- Optimización de imágenes vía Cloudinary (formato automático, calidad y tamaño responsivo)
- Diseño responsivo y accesible

## Arquitectura de Datos

El proyecto obtiene todos sus datos dinámicos desde una API REST externa en tiempo de build:

```
[API Remota]                [Frontend (Astro)]
api-recuerdos.vercel.app    ─build-time─►  src/data/api.ts
  GET /api/productos           ──safeFetch──►  products.ts
  GET /api/categorias          ──safeFetch──►  categories.ts
  GET /api/trabajos            ──safeFetch──►  trabajos.ts
                                                 │
                                   ┌─────────────┘
                                   ▼
                               Páginas .astro
                               (pasan datos como props)
                                   │
                                   ▼
                           Componentes React/Astro
```

- **Capa API** (`src/data/api.ts`): wrapper genérico `fetchApi<T>()` y `safeFetch<T>()` que tolera fallos y retorna arrays vacíos.
- **Productos** (`src/data/products.ts`): funciones `fetchProducts()`, `getProductBySlug()`, `getFeaturedProducts()`, `getBusinessProducts()`, `getGeneralProducts()`, `getRelatedProducts()`. El campo `Product.category` es `string` libre (sin union type cerrado).
- **Categorías** (`src/data/categories.ts`): `fetchCategories()`, `getCategoryBySlug()`, `getCategoryLabel()`, `getCategorySEO()`, `humanizeCategorySlug()`, `defaultCategorySEO()`. Ver [Categorías Dinámicas](#categorías-dinámicas).
- **Trabajos** (`src/data/trabajos.ts`): funciones `fetchTrabajos()`, `getTrabajos()`, `getTrabajosByCategory()`, `getTrabajosById()`.
- **Cache en memoria**: las funciones fetch cachean el resultado para evitar llamadas repetidas durante el build.
- **Normalización**: `normalizeProduct()` convierte campos booleanos (acepta `true`, `'true'`, `'TRUE'`, `1`).

> **Nota:** No hay escritura hacia el backend desde el frontend. El sitio es 100% catálogo + consulta por WhatsApp.

## Categorías Dinámicas

Las categorías **no viven en el frontend**: la API las deriva en tiempo real agrupando los productos por su columna `category` (normalizada a slug) y las sirve en `GET /api/categorias` con `name`, `count`, `image` y metadata SEO (`seo.title`, `seo.description`, `seo.intro`). Este proyecto consume ese endpoint de forma 100% dinámica, eliminando la dependencia de constantes estáticas que podía romper el deploy ante una categoría desconocida.

### Flujo de datos

```
GET /api/categorias ──►  src/data/categories.ts (fetchCategories, caché en módulo)
                              │
            ┌─────────────────┼──────────────────┐
            ▼                 ▼                  ▼
   /categoria/[slug].astro   catalogo.astro    index.astro
   (getStaticPaths + SEO)    (mapa de labels)  (sección home)
            │                                    │
            ▼                                    ▼
   producto/[slug].astro            ProductCategories.astro
   (breadcrumb + schema)            (tarjetas dinámicas)
            │
            ▼
   ProductGrid.tsx / ProductDetail.tsx  (labels vía props)
```

### Capa de datos (`src/data/categories.ts`)

| Función | Descripción |
|---------|-------------|
| `fetchCategories()` | Obtiene `Category[]` desde `/api/categorias` con caché en memoria. Usa `safeFetch`, así que ante una API caída devuelve `[]` sin romper el build. |
| `getCategoryBySlug(categories, slug)` | Busca una categoría por slug. |
| `getCategoryLabel(categories, slug)` | Devuelve `category.name`; si no existe, genera un nombre legible del slug (`humanizeCategorySlug`). **Nunca `undefined`**. |
| `getCategorySEO(categories, slug)` | Devuelve `category.seo`; si no existe, genera un SEO por defecto (`defaultCategorySEO`). **Nunca `undefined`**. |
| `humanizeCategorySlug(slug)` | Convierte un slug en nombre legible: `'tazas-personalizadas'` → `'Tazas Personalizadas'`. |
| `defaultCategorySEO(name)` | Genera `title`/`description`/`intro` siguiendo el patrón de la API ("… Personalizados en Santa Cruz de la Sierra"). |

Interfaces:

```typescript
interface CategorySEO {
  title: string;
  description: string;
  intro: string;
}

interface Category {
  slug: string;
  name: string;
  count: number;
  image: string;
  seo?: CategorySEO;
}
```

### Generación de páginas `/categoria/:slug`

`src/pages/categoria/[slug].astro` genera una página estática por cada categoría:

1. `getStaticPaths()` obtiene `fetchProducts()` + `fetchCategories()`.
2. Calcula el conjunto de categorías que tienen **al menos un producto visible al público general** (`audience.general.available`).
3. Genera solo esos slugs → nunca se crean páginas vacías ni 404 internos.
4. En el cuerpo de la página, `label` y `seo` salen de `getCategoryLabel()` / `getCategorySEO()` con fallback automático.

### Resolución de riesgos de deploy

| Riesgo | Resolución |
|--------|------------|
| **R1** — Categoría desconocida rompía el build (`TypeError` sobre `undefined`). | `Product.category` es `string` (sin union type cerrado) y todo label/SEO se resuelve con fallback. |
| **R2** — `return new Response(...)` en páginas prerendered rompía el build. | Se eliminó ese patrón de `categoria/[slug].astro` y `producto/[slug].astro`. El guard de producto usa `Astro.redirect('/404')` (genera meta-refresh, válido en build estático). |
| **R3** — API caída durante el build. | `safeFetch` devuelve `[]`; el build **pasa** y solo no se generan páginas dinámicas. |
| **R7** — Links de home a categorías sin productos daban 404. | `ProductCategories.astro` solo lista categorías que tienen productos públicos, con link al slug real de la API. |

### Labels y SEO en componentes

- **Páginas prerendered** (`categoria/[slug].astro`, `producto/[slug].astro`, `catalogo.astro`, `index.astro`): consumen `fetchCategories()` y pasan los datos como props.
- **Componentes React** (client-side, no pueden hacer fetch en build):
  - `ProductGrid` recibe `categoryLabels?: Record<string, string>` (mapa `slug → name`). Sin prop, usa `humanizeCategorySlug`.
  - `ProductDetail` recibe `categoryName?: string`. Sin prop, usa `humanizeCategorySlug`.
- **Sección home** (`ProductCategories.astro`): recibe `categories` + `products` y muestra tarjetas con `name`, imagen (`category.image` o placeholder) y descripción. Los textos cortos de tarjeta están **curados por slug** (mapa `CURATED_COPY`) con fallback a `seo.intro` / `seo.description`. Máximo 8 tarjetas.

### Agregar una categoría nueva

No hace falta tocar el frontend:

1. Crea un producto con esa categoría en el admin (o directo en Google Sheets / `POST /api/productos`).
2. La categoría aparece en `GET /api/categorias` con nombre y SEO generados por defecto.
3. **Redesplegá el sitio** para que las páginas estáticas `/categoria/:slug` se regeneren.

> **Importante:** por ser un sitio prerendered, las categorías nuevas necesitan un **redeploy** para aparecer en producción (la API las sirve en runtime, pero Astro genera los HTML en build). Detalle en `readme-api.md` §Categorías.

## Tecnologías Utilizadas

### Frameworks y Librerías
- **Astro 4.16** - Meta-framework híbrido (SSG + SSR con Vercel)
- **React 18.3** - Componentes interactivos (islas)
- **Tailwind CSS 3.4** - Framework de estilos
- **TypeScript 5.9** - Lenguaje tipado
- **Zustand 5.0** - Gestión de estado (lista de interés)

### Integraciones
- @astrojs/react - Soporte de componentes React
- @astrojs/tailwind - Integración de Tailwind
- @astrojs/sitemap - Generación de sitemap
- @astrojs/vercel - Adaptador para despliegue en Vercel (Node.js 20.x)

## Instalación y Configuración

### Requisitos Previos
- Node.js 18.0.0 o superior
- npm o pnpm
- Git

### Pasos de Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/recuerdos-compartidos.git
   cd recuerdos-compartidos
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variable de entorno (opcional, por defecto apunta a producción):
   ```bash
   # .env
   PUBLIC_API_URL=http://localhost:3001
   ```

4. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

El sitio estará disponible en `http://localhost:4321`

## Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción en `.vercel/output/` |
| `npm run preview` | Visualiza la build de producción |
| `npm start` | Alias de npm run dev |
| `npm run astro` | Ejecuta CLI de Astro (ej: `npm run astro -- check`) |

## Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── carrito/            # Lista de interés (CartButton, CartItemRow, CartPanel)
│   ├── faq/                # Preguntas frecuentes (FAQEmpresas, FAQEntregas, FAQGarantia, FAQPagos, FAQPersonalizacion)
│   ├── home/               # Componentes de inicio (Hero, FeaturedProducts, ProductCategories, Stats, AboutUs, WhyChooseUs, TrustBadges, WorkPreview, PersonalizationProcess, ProductCarousel)
│   ├── layout/             # Header y Footer
│   ├── legal/              # Documentos legales (TerminosCondiciones, PoliticaPrivacidad, PoliticaEntregas)
│   ├── productos/          # Grid, Card, Detail (ProductCard, ProductGrid, ProductDetail)
│   ├── servicios-empresariales/  # Página B2B completa
│   ├── trabajos/           # Portafolio de trabajos (GaleriaTrabajos, CasoExitoCard)
│   └── ui/                # Componentes genéricos (SectionTitle)
├── pages/                  # Rutas (SSG con prerender)
│   ├── index.astro        # Página principal
│   ├── catalogo.astro     # Catálogo general
│   ├── categoria/[slug].astro  # Detalle de categoría (ruta dinámica, derivada de la API)
│   ├── producto/[slug].astro   # Detalle de producto (ruta dinámica)
│   ├── faq.astro          # Preguntas frecuentes
│   ├── legal.astro        # Documentos legales
│   ├── servicios-empresariales.astro  # Servicios B2B
│   ├── trabajos-previos.astro         # Portafolio
│   └── 404.astro          # Página no encontrada
├── store/                  # Zustand store (lista de interés persistida en localStorage)
├── data/                   # Capa de datos
│   ├── api.ts             # Cliente HTTP genérico (fetchApi, safeFetch)
│   ├── products.ts        # Funciones de obtención/consulta de productos
│   ├── categories.ts      # Funciones de categorías dinámicas (fetchCategories + fallbacks)
│   ├── trabajos.ts        # Funciones de obtención/consulta de trabajos
│   ├── faq.ts             # Contenido de preguntas frecuentes
│   └── constants.ts       # Colores de categorías de trabajos (categoryColors)
├── layouts/                # MainLayout.astro
├── styles/                 # Estilos globales (globals.css)
├── utils/                  # Funciones helper
│   ├── cloudinary.ts      # Optimización de imágenes Cloudinary
│   ├── whatsapp.ts        # Generación de mensajes y enlaces WhatsApp
│   └── formatters.ts      # Formateo de precios, truncado, capitalización
└── env.d.ts               # Tipos de entorno (Astro)

## Desarrollo

### Agregar un Nuevo Componente

Ejemplo de componente Astro:
```astro
---
// src/components/MiComponente.astro
interface Props {
  titulo: string;
}
const { titulo } = Astro.props;
---

<section className="py-10">
  <h2 className="text-3xl font-bold">{titulo}</h2>
</section>
```

### Agregar una Nueva Página

```astro
---
// src/pages/nueva-pagina.astro
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout title="Mi Nueva Página">
  <h1>Contenido aquí</h1>
</MainLayout>
```

La página estará disponible en `/nueva-pagina`

### Agregar un Nuevo Producto

Los productos no se definen en el frontend. Se obtienen desde la API remota en tiempo de build:

1. Agrega el producto en el backend (`https://api-recuerdos-seven.vercel.app/api/productos`)
2. El producto aparecerá automáticamente en el catálogo al re-buildear

> Si el producto trae una **categoría nueva**, se crea implícitamente y aparecerá en `/categoria/:slug` al redesplegar. Ver [Categorías Dinámicas](#categorías-dinámicas).

## Lista de Interés por WhatsApp

El proyecto no implementa un carrito de compras ni checkout. En su lugar, usa una **lista de interés** que se envía por WhatsApp:

```typescript
import { useCart } from '../store/useCart';

// En componentes React
const { items, addItem, openCart } = useCart();
```

Características:
- Agregar/remover artículos (solo id, nombre, cantidad y personalización — sin precios)
- Actualizar cantidades
- Personalización por producto
- Cambio entre modos (general/business)
- Persistencia automática en localStorage
- Envío de la lista completa por WhatsApp (`buildCartWhatsAppLink()`)

> El store usa Zustand con middleware `persist` (clave: `'regalos-cart'`). Solo persiste `items` y `mode`.

## SEO y Datos Estructurados

El proyecto incluye:
- Meta tags optimizados
- JSON-LD estructurado
- Sitemap dinámico
- Open Graph para redes sociales
- Robots.txt configurado

## WhatsApp como Canal de Venta

WhatsApp es el canal principal de venta del proyecto. No hay pasarela de pago ni checkout — toda transacción se concreta vía WhatsApp.

### Número
`+591 62699702` (definido en `src/utils/whatsapp.ts`)

### Tipos de mensaje

| Tipo | Función | Descripción |
|------|---------|-------------|
| Lista de interés | `buildCartWhatsAppLink()` | Envía todos los items de la lista con cantidades y personalización |
| Consulta de producto | `buildProductWhatsAppLink()` | Consulta directa sobre un producto específico |
| Empresarial | `generateWhatsAppMessage('business')` | Mensaje adaptado para clientes B2B |

### Puntos de entrada
- Detalle de producto ("Consultar por WhatsApp")
- Panel de lista de interés ("Enviar lista por WhatsApp")
- Catálogo general (modal/cards)
- Página de servicios empresariales

## Optimización de Imágenes

Las imágenes del catálogo se optimizan automáticamente mediante la función `optimizeImage()` en `src/utils/cloudinary.ts`. Si la URL proviene de Cloudinary, se le inyectan parámetros de transformación; si no, se devuelve intacta.

```typescript
import { optimizeImage } from '../utils/cloudinary';

optimizeImage('https://res.cloudinary.com/.../image/upload/v12345/imagen.png', {
  width: 400,
  quality: 'auto',
  format: 'auto',
});
// → https://res.cloudinary.com/.../image/upload/f_auto,q_auto,w_400,c_limit/v12345/imagen.png
```

### Parámetros de la URL resultante

| Parámetro | Valor | Efecto |
|-----------|-------|--------|
| `f_auto` | auto | Cloudinary sirve el mejor formato según el navegador (WebP, AVIF, etc.) |
| `q_auto` | auto | Compresión inteligente sin pérdida visible de calidad |
| `w_NNN` | según componente | Ancho máximo en píxeles (400, 600, 700, etc.) |
| `c_limit` | — | Escala manteniendo proporción sin recortar |
| `c_fill` | — | Recorta para llenar el tamaño exacto (si se especifican ancho y alto) |

### Tamaños por componente

| Componente | Ancho | Contexto |
|-----------|-------|----------|
| `ProductCard` | 400px | Grid de catálogo |
| `ProductDetail` (principal) | 700px | Vista detalle |
| `ProductDetail` (thumbnail) | 200px | Miniaturas de galería |
| `ProductCarousel` | 600px | Carrusel de inicio |
| `ProductCategories` | 400px | Cards de categoría |
| `CasoExitoCard` | 700px | Casos de éxito |
| `GaleriaTrabajos` | 700px | Grid de trabajos |

### Comportamiento

- **URL de Cloudinary** → se inyectan `f_auto,q_auto,w_NNN[,h_NNN,c_fill\|c_limit]`
- **URL con transformaciones existentes** → se devuelve sin cambios
- **URL externa (no Cloudinary)** → se devuelve sin cambios

## Despliegue

El proyecto está configurado para desplegarse en **Vercel** con Node.js 20.x:

### Configuración
- **Adapter**: `@astrojs/vercel` con runtime `nodejs20.x`
- **Output**: `hybrid` (SSG + SSR según la página)
- **Build command**: `npm run build`
- **Output directory**: `.vercel/output/` (generado por el adapter de Vercel)

### Variables de entorno en producción
| Variable | Valor |
|----------|-------|
| `PUBLIC_API_URL` | `https://api-recuerdos-seven.vercel.app` (default) |

### Dependencia de la API en tiempo de build

El sitio es **prerendered**: los HTML de productos y categorías se generan en el build leyendo la API.

- **API caída durante el build** → el build **no falla** (`safeFetch` devuelve `[]`), pero no se generan las páginas dinámicas.
- **Datos nuevos (productos o categorías)** → hay que **redesplegar** el sitio para regenerar las páginas estáticas. La API los sirve en runtime, pero Astro genera los HTML en build.

## Testing y Validación

```bash
# Crear build
npm run build

# Preview local de la build
npm run preview

# Validar TypeScript/Astro
npm run astro -- check
```

### Prueba de resiliencia (categorías dinámicas)

Para verificar que el build no rompe cuando la API está caída:

```bash
# Windows (PowerShell)
$env:PUBLIC_API_URL = 'http://localhost:59999'; npm run build

# Devolver el entorno a la normalidad
Remove-Item Env:PUBLIC_API_URL
```

El build debe **completar sin errores** (solo warnings de `safeFetch`) y no generar páginas de categoría/producto. Este comportamiento está documentado en `RIESGOS-DEPLOY.md` (R3).

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código
- Usa TypeScript para type safety
- Mantén componentes pequeños y reutilizables
- Documenta código complejo
- Asegura accesibilidad (ARIA labels)

## Licencia

Este proyecto está bajo licencia MIT. Ver archivo LICENSE para detalles.

## Contacto

**Recuerdos Compartidos**
- Sitio Web: https://www.recuerdoscompartidos.sarl
- WhatsApp: https://wa.me/59162699702
- Ubicación: Santa Cruz de la Sierra, Bolivia
- Email: contacto@recuerdoscompartidos.sarl

## Recursos Útiles

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Zustand](https://github.com/pmndrs/zustand)

## Roadmap Futuro

- Integración de pasarela de pagos (Stripe/PayPal)
- Panel de administración
- Autenticación de usuarios
- Historial de pedidos
- Blog y tutoriales
- Multi-idioma (ES/EN)
- Dark mode

---

Hecho con amor en Santa Cruz de la Sierra, Bolivia

Última actualización: Agosto 2026

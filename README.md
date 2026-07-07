# Recuerdos Compartidos - Catálogo de Regalos Personalizados

> Catálogo web moderno de regalos personalizados con lista de interés vía WhatsApp. Ubicado en Santa Cruz de la Sierra, Bolivia.

**Sitio Web**: https://www.recuerdoscompartidos.sarl

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Arquitectura de Datos](#arquitectura-de-datos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Comandos Disponibles](#comandos-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Lista de Interés por WhatsApp](#lista-de-interés-por-whatsapp)
- [WhatsApp como Canal de Venta](#whatsapp-como-canal-de-venta)
- [SEO y Datos Estructurados](#seo-y-datos-estructurados)
- [Despliegue](#despliegue)
- [Testing y Validación](#testing-y-validación)
- [Contribución](#contribución)
- [Roadmap Futuro](#roadmap-futuro)

## Características Principales

- Catálogo dinámico con filtrado por categorías
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
- Diseño responsivo y accesible

## Arquitectura de Datos

El proyecto obtiene todos sus datos dinámicos desde una API REST externa en tiempo de build:

```
[API Remota]                [Frontend (Astro)]
api-recuerdos.onrender.com  ─build-time─►  src/data/api.ts
  GET /api/productos           ──safeFetch──►  products.ts
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
- **Productos** (`src/data/products.ts`): funciones `fetchProducts()`, `getProductBySlug()`, `getFeaturedProducts()`, `getBusinessProducts()`, `getGeneralProducts()`, `getRelatedProducts()`.
- **Trabajos** (`src/data/trabajos.ts`): funciones `fetchTrabajos()`, `getTrabajos()`, `getTrabajosByCategory()`, `getTrabajosById()`.
- **Cache en memoria**: las funciones fetch cachean el resultado para evitar llamadas repetidas durante el build.
- **Normalización**: `normalizeProduct()` convierte campos booleanos (acepta `true`, `'true'`, `'TRUE'`, `1`).

> **Nota:** No hay escritura hacia el backend desde el frontend. El sitio es 100% catálogo + consulta por WhatsApp.

## Tecnologías Utilizadas

### Frameworks y Librerías
- **Astro 4.16.0** - Meta-framework híbrido (SSG + SSR con Vercel)
- **React 18.3.1** - Componentes interactivos (islas)
- **Tailwind CSS 3.4.14** - Framework de estilos
- **TypeScript 5.6.3** - Lenguaje tipado
- **Zustand 5.0.0** - Gestión de estado (lista de interés)

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
| `npm run build` | Compila para producción en ./dist/ |
| `npm run preview` | Visualiza la build de producción |
| `npm start` | Alias de npm run dev |
| `npm run astro` | Ejecuta CLI de Astro (ej: `npm run astro -- check`) |

## Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── carrito/            # Lista de interés (CartPanel, CartButton, CartItemRow, CartModeSync)
│   ├── empresas/           # Componente introductorio B2B
│   ├── faq/                # Preguntas frecuentes
│   ├── home/               # Componentes de inicio (Hero, FeaturedProducts)
│   ├── layout/             # Header y Footer
│   ├── legal/              # Documentos legales
│   ├── productos/          # Grid, Card, Detail (ProductCard, ProductGrid, ProductDetail)
│   ├── seo/               # SEO y datos estructurados (JSON-LD)
│   ├── servicios-empresariales/  # Página B2B completa
│   ├── trabajos/           # Portafolio de trabajos (ProjectsGrid, CasoExitoCard)
│   └── ui/                # Componentes genéricos (SectionTitle, WhatsAppButton, etc.)
├── pages/                  # Rutas (SSG con prerender)
│   ├── index.astro        # Página principal
│   ├── catalogo.astro     # Catálogo general
│   ├── faq.astro          # Preguntas frecuentes
│   ├── legal.astro        # Documentos legales
│   ├── servicios-empresariales.astro  # Servicios B2B
│   ├── trabajos-previos.astro         # Portafolio
│   ├── 404.astro          # Página no encontrada
│   └── producto/[slug].astro  # Detalle de producto (ruta dinámica)
├── store/                  # Zustand store (lista de interés persistida en localStorage)
├── data/                   # Capa de datos
│   ├── api.ts             # Cliente HTTP genérico (fetchApi, safeFetch)
│   ├── products.ts        # Funciones de obtención/consulta de productos
│   ├── trabajos.ts        # Funciones de obtención/consulta de trabajos
│   └── constants.ts       # Labels y colores de categorías
├── styles/                 # Estilos globales (globals.css)
├── utils/                  # Funciones helper
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

1. Agrega el producto en el backend (`https://api-recuerdos.onrender.com/api/productos`)
2. El producto aparecerá automáticamente en el catálogo al re-buildear

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

## Despliegue

El proyecto está configurado para desplegarse en **Vercel** con Node.js 20.x:

### Configuración
- **Adapter**: `@astrojs/vercel` con runtime `nodejs20.x`
- **Output**: `hybrid` (SSG + SSR según la página)
- **Build command**: `npm run build`
- **Output directory**: `dist/`

### Variables de entorno en producción
| Variable | Valor |
|----------|-------|
| `PUBLIC_API_URL` | `https://api-recuerdos.onrender.com` (default) |

## Testing y Validación

```bash
# Crear build
npm run build

# Preview local de la build
npm run preview

# Validar TypeScript
npm run astro -- check
```

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

Última actualización: Julio 2026

# Recuerdos Compartidos - Tienda de Regalos Personalizados

> Tienda en línea moderna de regalos personalizados ubicada en Santa Cruz de la Sierra, Bolivia.

**Sitio Web**: https://www.recuerdoscompartidos.sarl

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Comandos Disponibles](#comandos-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Características Principales

- Catálogo dinámico con filtrado por categorías
- Carrito de compras interactivo con persistencia
- Modo Dual: Compras personales y para empresas
- Galería de productos con imágenes de Cloudinary
- SEO avanzado con JSON-LD
- Integración con WhatsApp
- Diseño responsivo y accesible

## Tecnologías Utilizadas

### Frameworks y Librerías
- **Astro 4.16.0** - Meta-framework para sitios estáticos
- **React 18.3.1** - Componentes interactivos
- **Tailwind CSS 3.4.14** - Framework de estilos
- **TypeScript 5.6.3** - Lenguaje tipado
- **Zustand 5.0.0** - Gestión de estado

### Integraciones
- @astrojs/react - Soporte de componentes React
- @astrojs/tailwind - Integración de Tailwind
- @astrojs/sitemap - Generación de sitemap

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

3. Iniciar servidor de desarrollo:
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

## Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── carrito/            # Sistema de carrito
│   ├── home/               # Componentes de inicio
│   ├── layout/             # Header y Footer
│   ├── productos/          # Grid, Card, Detail
│   ├── seo/               # SEO y datos estructurados
│   └── ui/                # Componentes genéricos
├── pages/                  # Rutas (Astro SSG)
├── store/                  # Zustand store (carrito)
├── data/                   # Datos estáticos
├── styles/                 # Estilos globales
└── utils/                  # Funciones helpers
```

### Directorios Clave

- **pages/**: Define rutas automáticamente. Cada archivo .astro = ruta
- **components/**: Componentes reutilizables (Astro y React)
- **store/**: Gestión de estado con Zustand
- **data/**: Catálogo de productos en TypeScript

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

1. Abre `src/data/products.ts`
2. Agrega un nuevo objeto al array `products`
3. El producto aparecerá automáticamente en el catálogo

## Gestión de Estado (Carrito)

El estado del carrito se gestiona con Zustand y persiste automáticamente:

```typescript
import { useCart } from '../store/useCart';

// En componentes React
const { items, addItem, openCart } = useCart();
```

Características:
- Agregar/remover artículos
- Actualizar cantidades
- Personalización de productos
- Cambio entre modos (general/business)
- Persistencia automática en localStorage

## SEO y Datos Estructurados

El proyecto incluye:
- Meta tags optimizados
- JSON-LD estructurado
- Sitemap dinámico
- Open Graph para redes sociales
- Robots.txt configurado

## Integración WhatsApp

Facilita contacto directo desde:
- Página de detalles de productos
- Carrito de compras
- Página de contacto

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

- Sistema de pagos (Stripe/PayPal)
- Panel de administración
- Sistema de autenticación
- Historial de órdenes
- Blog y tutoriales
- Multi-idioma (ES/EN)
- Dark mode

---

Hecho con amor en Santa Cruz de la Sierra, Bolivia

Última actualización: Abril 2026

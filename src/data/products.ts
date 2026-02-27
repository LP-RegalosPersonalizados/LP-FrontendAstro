// ============================================================
// DATA MODEL
// ============================================================

export type ProductCategory = 'tazas' | 'albumes' | 'cuadros' | 'festivos';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price?: number;
  image: string;
  description: string;
  isBusinessAvailable: boolean;
  customizable: boolean;
  tags?: string[];
  featured?: boolean;
}

// ============================================================
// SAMPLE PRODUCTS (replace images with real ones)
// ============================================================

export const products: Product[] = [
  {
    id: '1',
    name: 'Taza Mágica Personalizada',
    slug: 'taza-magica-personalizada',
    category: 'tazas',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
    description: 'Taza mágica que revela tu foto o mensaje al calentarse. Perfecta para regalar en cualquier ocasión. Material de alta calidad, apta para microondas.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['popular', 'regalo'],
    featured: true,
  },
  {
    id: '2',
    name: 'Taza Clásica con Foto',
    slug: 'taza-clasica-foto',
    category: 'tazas',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&q=80',
    description: 'Taza de cerámica blanca con tu foto impresa en alta resolución. Resistente al lavavajillas.',
    isBusinessAvailable: true,
    customizable: true,
    featured: false,
  },
  {
    id: '3',
    name: 'Álbum de Fotos Premium',
    slug: 'album-fotos-premium',
    category: 'albumes',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=600&q=80',
    description: 'Álbum personalizado de tapa dura con hasta 40 fotos. Ideal para bodas, cumpleaños, egresados o viajes. Papel fotográfico de alta calidad.',
    isBusinessAvailable: false,
    customizable: true,
    tags: ['premium'],
    featured: true,
  },
  {
    id: '4',
    name: 'Mini Álbum Romántico',
    slug: 'mini-album-romantico',
    category: 'albumes',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=600&q=80',
    description: 'Álbum pequeño formato con 20 fotos. Diseño romántico, ideal para parejas o recuerdos especiales.',
    isBusinessAvailable: false,
    customizable: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Cuadro Familiar Canvas',
    slug: 'cuadro-familiar-canvas',
    category: 'cuadros',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
    description: 'Cuadro en lienzo canvas de alta definición. Disponible en múltiples tamaños. Perfecto para decorar hogares o como regalo especial.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['popular'],
    featured: true,
  },
  {
    id: '6',
    name: 'Cuadro Collage Múltiple',
    slug: 'cuadro-collage-multiple',
    category: 'cuadros',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    description: 'Cuadro collage con diseño para múltiples fotos. Disponible en 4, 6 u 8 fotos. Material de alta calidad con impresión UV.',
    isBusinessAvailable: true,
    customizable: true,
    featured: false,
  },
  {
    id: '7',
    name: 'Kit Navideño Personalizado',
    slug: 'kit-navideno-personalizado',
    category: 'festivos',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&q=80',
    description: 'Kit navideño que incluye taza mágica + tarjeta personalizada + caja regalo. Ideal para regalar en Navidad.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['navidad', 'kit'],
    featured: true,
  },
  {
    id: '8',
    name: 'Regalo Día de la Madre',
    slug: 'regalo-dia-madre',
    category: 'festivos',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=600&q=80',
    description: 'Set especial Día de la Madre con taza + álbum mini. Presentación con caja y lazo incluido.',
    isBusinessAvailable: false,
    customizable: true,
    tags: ['dia-madre', 'kit'],
    featured: true,
  },
  {
    id: '9',
    name: 'Set Corporativo Logo',
    slug: 'set-corporativo-logo',
    category: 'tazas',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80',
    description: 'Taza corporativa con logo de empresa impreso en alta resolución. Disponible a partir de 20 unidades. Ideal para regalar a empleados o clientes.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['corporativo', 'mayorista'],
    featured: false,
  },
];

// ============================================================
// HELPERS
// ============================================================

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: ProductCategory): Product[] =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);

export const getBusinessProducts = (): Product[] =>
  products.filter((p) => p.isBusinessAvailable);

export const getRelatedProducts = (product: Product, limit = 3): Product[] =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);

export const categoryLabels: Record<ProductCategory, string> = {
  tazas: 'Tazas',
  albumes: 'Álbumes',
  cuadros: 'Cuadros',
  festivos: 'Regalos Festivos',
};

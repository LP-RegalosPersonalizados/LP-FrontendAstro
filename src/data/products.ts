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
    price: 150,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401228/IMG_20251124_093901_k0sz2e.jpg',
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
    price: 120,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401230/TAZAS_SAN_VALENTIN_ug8xb3.png',
    description: 'Taza de cerámica blanca con tu foto impresa en alta resolución. Resistente al lavavajillas.',
    isBusinessAvailable: true,
    customizable: true,
    featured: false,
  },
  {
    id: '4',
    name: 'Mini Álbum Romántico',
    slug: 'mini-album-romantico',
    category: 'albumes',
    price: 220,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401172/IMG-20260203-WA0028_c2ipii.jpg',
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
    price: 400,
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
    price: 320,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401170/IMG-20260211-WA0050_qm4s2p.jpg',
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
    price: 280,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401162/IMG-20251220-WA0024_mb5qfr.jpg',
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
    price: 350,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401242/1771977619993_edit_892912116716359_iagqsk.png',
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
    price: 180,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401254/IMG-20260205-WA0106_pxztzu.jpg',
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

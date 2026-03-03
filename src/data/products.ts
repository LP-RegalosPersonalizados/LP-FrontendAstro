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
  gallery?: string[];
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
    name: 'Taza Clásica con Foto',
    slug: 'taza-clasica-foto',
    category: 'tazas',
    price: 120,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499256/1771980234317_edit_896491491895046_itofsi.png',
    description: 'Taza de cerámica blanca con tu foto impresa en alta resolución. Resistente al lavavajillas.',
    isBusinessAvailable: true,
    customizable: true,
    featured: false,
  },
  {
    id: '2',
    name: 'Mini Álbum Romántico',
    slug: 'mini-album-romantico',
    category: 'albumes',
    price: 220,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772401172/IMG-20260203-WA0028_c2ipii.jpg',
    description: 'Álbum pequeño formato con 20 fotos. Diseño romántico, ideal para parejas o recuerdos especiales.',
    isBusinessAvailable: false,
    customizable: true,
    featured: true,
  },
  {
    id: '3',
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
    id: '4',
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
    id: '5',
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

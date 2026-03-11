// ============================================================
// DATA MODEL
// ============================================================

export type ProductCategory = 'tazas' | 'albumes' | 'cuadros' | 'festivos';

export interface ProductAudience {
  available: boolean;
  customizable: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price?: number;
  image: string;
  gallery?: string[];
  description: string;
  audience: {
    general: ProductAudience;
    business: ProductAudience;
  };
  tags?: string[];
  featured?: boolean;
}

// ============================================================
// PRODUCTS
// ============================================================

export const products: Product[] = [
  {
    id: '1',
    name: 'Fotos Polaroid Personalizadas',
    slug: 'fotos-polaroid-personalizadas',
    category: 'albumes',
    price: 25,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499246/IMG-20260131-WA0043_xeh2bv.jpg',
    description:
      'Fotos estilo Polaroid con acabado mate y excelente calidad. Perfectas para decorar, guardar recuerdos o regalar. Disponibles en diferentes cantidades.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['fotos', 'polaroid', 'impresiones', 'fotografia', 'recuerdos'],
    featured: true,
  },

  {
    id: '2',
    name: 'Tazas Cerámicas Personalizadas',
    slug: 'tazas-ceramicas-personalizadas',
    category: 'tazas',
    price: 35,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499255/1771979978916_edit_896506792213842_uex2sy.png',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499335/IMG-20260205-WA0106_jlrngi.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499336/IMG-20260205-WA0112_kwvuy6.jpg',
    ],
    description:
      'Tazas de cerámica personalizadas con fotos, diseños o logos. Ideales para regalos, eventos o empresas. Disponibles por unidad o pedidos por cantidad.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: true, customizable: true },
    },
    tags: ['ceramica', 'tazas', 'personalizadas', 'regalos', 'corporativo'],
    featured: true,
  },

  {
    id: '3',
    name: 'Taza Metálica Personalizada',
    slug: 'taza-metalica-personalizada',
    category: 'tazas',
    price: 45,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499276/IMG-20260116-WA0028_exkret.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499276/1771979776328_edit_896519787370295_ncvzvj.png',
    ],
    description:
      'Taza metálica resistente y reutilizable, ideal para uso diario o regalo. Se puede personalizar con nombres, fotos o logos. Disponible por unidad o en pedidos por cantidad.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: true, customizable: true },
    },
    tags: ['metalica', 'acero', 'termica', 'personalizada'],
    featured: true,
  },

  {
    id: '4',
    name: 'Pack de Regalo Personalizado',
    slug: 'pack-regalo-personalizado',
    category: 'festivos',
    price: 150,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499248/IMG-20260203-WA0028_cd2lh7.jpg',
    description:
      'Pack especial con 2 tazas personalizadas, 2 llaveros con foto y 1 alcancía personalizada. Incluye presentación en caja de regalo.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['pack', 'regalo', 'combo', 'tazas', 'llaveros', 'alcancia'],
    featured: true,
  },

  {
    id: '5',
    name: 'Pack Día del Padre',
    slug: 'pack-regalo-dia-padre',
    category: 'festivos',
    price: 150,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772658612/pack4_kq2mhm.png',
    description:
      'Pack especial con vaso chopero 16 oz, taza metálica y llavero personalizado. Incluye empaque listo para regalo.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['pack', 'regalo', 'personalizado', 'vaso chopero', 'taza metalica'],
    featured: true,
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
  products.filter((p) => p.audience.business.available);

export const getGeneralProducts = (): Product[] =>
  products.filter((p) => p.audience.general.available);

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
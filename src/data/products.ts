// ============================================================
// DATA MODEL
// ============================================================

export type ProductCategory = 'tazas' | 'fotos' | 'cuadros' | 'festivos' | 'alcancia'| 'llaveros' | 'otros';

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
    category: 'fotos',
    price: 20,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499246/IMG-20260211-WA0061_i3znlz.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777268082/IMG-20260223-WA0017_edit_888430219849058_qd9cze.jpg',
    ],
    description:
      'Fotos estilo Polaroid con acabado mate y excelente calidad. Manejamos distintos tamaños y formatos para adaptarnos a tus necesidades. El precio puede variar según el tamaño y la cantidad de fotos. Escribenos para cotizar tu pedido personalizado. ',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['fotos', 'polaroid', 'impresiones', 'fotografia', 'recuerdos'],
    featured: false,
  },

  {
    id: '2',
    name: 'Tazas Cerámicas Personalizadas',
    slug: 'tazas-ceramicas-personalizadas',
    category: 'tazas',
    price: 35,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/a_auto,q_auto,w_475/v1777274106/IMG-20260117-WA0015_wpl5kg.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499257/IMG-20260117-WA0009_rkpedn.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777274107/IMG-20260117-WA0019_jgja7u.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499275/TAZAS_SAN_VALENTIN_soe5xy.png',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499273/IMG-20260108-WA0057_kc9uaf.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1777274104/IMG-20260108-WA0051_xvwplt.jpg',

    ],
    description:
      'Tazas de cerámica personalizadas con fotos, diseños o logos. Ideales para regalos, eventos o empresas. Disponibles por unidad o pedidos por cantidad.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['ceramica', 'tazas', 'personalizadas', 'regalos', 'corporativo'],
    featured: false,
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
      business: { available: false, customizable: false },
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
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777269465/20260413_145112_gr8usm.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777269459/IMG-20260214-WA0019_edit_377783090900314_vasx5h.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777269459/IMG-20260307-WA0063_dp57bc.jpg'
    ],
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
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777268153/IMG_20260314_184915_302_fohc3i.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777269229/IMG_20260314_185058_938_cxl7wz.jpg'
    ],
    description:
      'Pack especial con vaso chopero 16 oz, taza metálica y llavero personalizado. Incluye empaque listo para regalo.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['pack', 'regalo', 'personalizado', 'vaso chopero', 'taza metalica'],
    featured: false,
  },
  {
    id: '7',
    name: 'Alcancías Personalizadas',
    slug: 'alcancias-personalizadas',
    category: 'alcancia',
    price: 35,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777272479/IMG_20260227_213613_907_bz93if.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777272498/IMG_20260407_144407_861_wy0k0o.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777272483/IMG_20260227_213627_911_vfhtth.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777272495/IMG_20260407_144402_491_jdwtdn.jpg'
    ],
    description:
      'Alcancías personalizadas de madera con diseños únicos y materiales de calidad. Perfectas para regalos o uso personal. Disponibles en diferentes tamaños y colores.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['alcancias', 'personalizada', 'regalo', 'diseño único'],
    featured: true,
  },
  {
    id: '8',
    name : 'Vaso Chopero Personalizados',
    slug: 'vaso-chopero-personalizados',
    category: 'tazas',
    price: 45,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777272887/IMG-20260317-WA0307_gsvduu.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777269280/IMG_20260307_175039_694_uekpz9.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1777269293/IMG-20260312-WA0026_rwjktk.jpg',
    ],
    description:
      'Vasos choperos personalizados con diseños únicos y materiales de calidad. Perfectos para regalos o uso personal.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['vaso', 'chopero', 'personalizado', 'regalo', 'diseño único', 'vidrio'],
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
  fotos: 'Fotos',
  cuadros: 'Cuadros',
  festivos: 'Regalos Festivos',
  alcancia: 'Alcancias',
  llaveros: 'Llaveros',
  otros: 'Otros',
};
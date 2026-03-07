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
// SAMPLE PRODUCTS (replace images with real ones)
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
      'Impresiones fotográficas estilo Polaroid con acabado mate y calidad profesional. Perfectas para conservar tus recuerdos favoritos, decorar espacios o regalar en ocasiones especiales. Disponibles en diferentes tamaños y cantidades.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['fotos', 'polaroid', 'impresiones', 'fotografia', 'recuerdos'],
    featured: false,
  },
  {
    id: '3',
    name: 'Tazas Cerámicas Personalizadas por Cantidad',
    slug: 'tazas-ceramicas-personalizadas-cantidad',
    category: 'tazas',
    price: 35,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499257/IMG-20260117-WA0009_rkpedn.jpg',
    description:
      'Tazas de cerámica de alta calidad disponibles para pedidos al por mayor. Pueden personalizarse con logos, diseños corporativos o mensajes especiales. Ideales para empresas, eventos promocionales, campañas de marketing o regalos empresariales. Consulta precios especiales por volumen.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: true, customizable: true },
    },
    tags: ['ceramica', 'mayorista', 'corporativo', 'empresarial', 'tazas personalizadas'],
    featured: false,
  },
  {
    id: '4',
    name: 'Tazas con Logo para Empresas',
    slug: 'tazas-logo-empresas',
    category: 'tazas',
    price: 35,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499335/IMG-20260205-WA0106_jlrngi.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499336/IMG-20260205-WA0112_kwvuy6.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499334/IMG-20260205-WA0009_aemyll.jpg',
    ],
    description:
      'Servicio de personalización de tazas y artículos promocionales con el logo de tu empresa. Incluye asesoría en diseño, impresión de alta calidad y entrega puntual. Ideal para campañas de branding, merchandising y regalos corporativos.',
    audience: {
      general: { available: false, customizable: false },
      business: { available: true, customizable: true },
    },
    tags: ['corporativo', 'logo', 'empresa', 'branding', 'merchandising'],
    featured: false,
  },
  {
    id: '5',
    name: 'Taza Metálica Personalizable',
    slug: 'taza-metalica-personalizable',
    category: 'tazas',
    price: 45,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499337/1771977619993_edit_892912116716359_ka1sud.png',
    description:
      'Taza metálica de acero inoxidable con doble pared que ayuda a mantener la temperatura por más tiempo. Puede personalizarse con fotos, nombres, diseños o logos. Resistente, reutilizable y ecológica, ideal para uso diario, oficina o como regalo especial.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['metalica', 'acero', 'termica', 'personalizada', 'ecologica'],
    featured: true,
  },
  {
    id: '6',
    name: 'Taza Cerámica con Diseño Personalizado',
    slug: 'taza-ceramica-diseno-personalizado',
    category: 'tazas',
    price: 40,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499275/TAZAS_SAN_VALENTIN_soe5xy.png',
    description:
      'Taza de cerámica con variedad de diseños disponibles. También aceptamos pedidos personalizados para clientes individuales. Ideal para cumpleaños, aniversarios, eventos especiales o para disfrutar tu bebida favorita con un diseño único.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['ceramica', 'diseños', 'personalizado', 'regalos', 'tazas con foto'],
    featured: false,
  },
  {
    id: '7',
    name: 'Taza Metálica Térmica con Diseños Exclusivos',
    slug: 'taza-metalica-termica-disenos-exclusivos',
    category: 'tazas',
    price: 40,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,w_700/v1772499276/1771979776328_edit_896519787370295_ncvzvj.png',
    description:
      'Taza metálica térmica con diseños exclusivos y acabado premium. Mantiene bebidas calientes hasta 6 horas y frías hasta 12 horas. Ideal para quienes buscan estilo, durabilidad y funcionalidad en su día a día.',
    audience: {
      general: { available: true, customizable: false },
      business: { available: false, customizable: false },
    },
    tags: ['metalica', 'termica', 'premium', 'exclusivo'],
    featured: false,
  },
  {
    id: '8',
    name: 'Pack de Regalo Personalizado',
    slug: 'pack-regalo-personalizado',
    category: 'festivos',
    price: 150,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772499248/IMG-20260203-WA0028_cd2lh7.jpg',
    description:
      'Pack especial que incluye: 2 tazas personalizadas con diseños a elección, 2 llaveros con fotos impresas y 1 alcancía pequeña personalizada. Un set ideal para parejas, aniversarios, cumpleaños o regalos especiales. Incluye presentación en caja de regalo con lazo.',
    audience: {
      general: { available: true, customizable: true },
      business: { available: false, customizable: false },
    },
    tags: ['pack', 'regalo', 'combo', 'tazas', 'llaveros', 'alcancia'],
    featured: true,
  },
{
  id: '9',
  name: 'Pack de Regalo Premium Personalizado',
  slug: 'pack-regalo-premium-personalizado',
  category: 'festivos',
  price: 150,
  image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/f_auto,q_auto,c_limit,w_475/v1772658612/pack4_kq2mhm.png',
  description: 'Pack exclusivo que incluye un vaso chopero de 16 oz, una taza metálica y un llavero, todos personalizados con el diseño de tu preferencia. Ideal para celebrar ocasiones especiales como cumpleaños, aniversarios, eventos deportivos o reuniones con amigos. Cada pieza está elaborada con materiales de alta calidad: el vaso chopero mantiene la temperatura ideal de tus bebidas, la taza metálica es resistente y perfecta para el día a día, y el llavero personalizado añade un detalle único. Incluye empaque tipo regalo listo para sorprender.',
  audience: {
    general: { available: true, customizable: true },
    business: { available: false, customizable: false },
  },
  tags: ['pack', 'regalo', 'personalizado', 'combo', 'vaso chopero', 'taza metálica', 'llavero'],
  featured: true,
}
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

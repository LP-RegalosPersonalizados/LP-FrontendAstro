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
    name: 'Set Corporativo Logo',
    slug: 'set-corporativo-logo',
    category: 'tazas',
    price: 180,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499335/IMG-20260205-WA0106_jlrngi.jpg',
    gallery: [
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499336/IMG-20260205-WA0112_kwvuy6.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499335/IMG-20260205-WA0010_qhmreu.jpg',
    ],
    description: 'Taza corporativa con logo de empresa impreso en alta resolución. Disponible a partir de 20 unidades. Ideal para regalar a empleados o clientes.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['corporativo', 'mayorista'],
    featured: false,
  },
  {
    id: '8',
    name: 'Taza Cerámica Diseños Personalizados',
    slug: 'taza-ceramica-disenos-personalizados',
    category: 'tazas',
    price: 120,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499275/TAZAS_SAN_VALENTIN_soe5xy.png',
    description: 'Taza de cerámica con amplia variedad de diseños disponibles. Aceptamos pedidos personalizados tanto para clientes individuales como para empresas. Ideal para cumpleaños, aniversarios, promociones, eventos especiales o para uso diario con tu estilo único.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['ceramica', 'diseños', 'personalizado', 'eventos'],
    featured: false,
  },
  {
    id: '3',
    name: 'Fotos Polaroid Impresas',
    slug: 'fotos-polaroid-impresas',
    category: 'albumes',
    price: 25,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499246/IMG-20260131-WA0043_xeh2bv.jpg',
    description: 'Impresiones fotográficas estilo Polaroid con calidad profesional y acabado mate. Imágenes impresas a pedido con la durabilidad que tus recuerdos merecen. Disponibles en diferentes tamaños y cantidades, ideales para álbumes, decoración o regalos.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['fotos', 'polaroid', 'impresiones', 'fotografia'],
    featured: false,
  },
  {
    id: '4',
    name: 'Esferas de Navidad Personalizadas',
    slug: 'esferas-navidad-personalizadas',
    category: 'festivos',
    price: 45,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499241/IMG-20251220-WA0023_mhzwyg.jpg',
    description: 'Esferas navideñas personalizadas con diseños exclusivos para decorar tu árbol. Ideales para empresas que buscan detalles únicos para sus empleados o clientes. Pedidos por cantidad disponibles con posibilidad de incluir logos corporativos.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['navidad', 'esferas', 'decoracion', 'temporada'],
    featured: true,
  },
  {
    id: '5',
    name: 'Tazas Cerámicas por Cantidad',
    slug: 'tazas-ceramicas-cantidad',
    category: 'tazas',
    price: 95,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499257/IMG-20260117-WA0009_rkpedn.jpg',
    description: 'Tazas de cerámica de alta calidad para pedidos al por mayor. Disponibles con diseños generales o personalización completa con logos y diseños corporativos. Ideales para empresas, eventos promocionales, campañas de marketing y regalos empresariales. Consulta por precios especiales por volumen.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['ceramica', 'mayorista', 'corporativo', 'empresarial'],
    featured: false,
  },
  {
    id: '6',
    name: 'Logo Empresa Coffee Bolivia',
    slug: 'logo-empresa-coffee-bolivia',
    category: 'tazas',
    price: 250,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499335/IMG-20260205-WA0106_jlrngi.jpg',
    gallery:[
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499336/IMG-20260205-WA0112_kwvuy6.jpg',
      'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499334/IMG-20260205-WA0009_aemyll.jpg',
    ],
    description: 'Servicio especializado para empresas: personalización de tazas y artículos promocionales con el logo de Coffee Bolivia. Incluye asesoría en diseño, impresión de alta calidad y entrega oportuna. Ideal para campañas de branding, merchandising y regalos corporativos.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['corporativo', 'logo', 'coffee', 'bolivia', 'branding'],
    featured: true,
  },
  {
    id: '7',
    name: 'Taza Metálica Personalizada',
    slug: 'taza-metalica-personalizada',
    category: 'tazas',
    price: 180,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499337/1771977619993_edit_892912116716359_ka1sud.png',
    description: 'Taza metálica de acero inoxidable con tecnología de doble pared que mantiene la temperatura por horas. Personalizable con fotos, nombres, diseños o logos empresariales. Resistente, reutilizable y ecológica, perfecta para uso diario, oficina o como regalo promocional.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['metalica', 'termica', 'acero', 'ecologica'],
    featured: false,
  },

  {
    id: '9',
    name: 'Taza Metálica Diseños Exclusivos',
    slug: 'taza-metalica-disenos-exclusivos',
    category: 'tazas',
    price: 50,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499276/1771979776328_edit_896519787370295_ncvzvj.png',
    description: 'Taza metálica térmica con diseños exclusivos y acabado premium. Disponible para personalización individual y pedidos empresariales. Mantiene bebidas calientes por 6 horas y frías por 12 horas. Ideal para empresas que buscan regalos promocionales de alta calidad y durabilidad.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['metalica', 'termica', 'exclusivo', 'premium'],
    featured: true,
  },
  {
    id: '10',
    name: 'Pack de Regalos Personalizado',
    slug: 'pack-regalos-personalizado',
    category: 'festivos',
    price: 150,
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499248/IMG-20260203-WA0028_cd2lh7.jpg',
    description: 'Pack especial que incluye: 2 tazas personalizadas con diseños a elección, 2 llaveros con fotos impresas y 1 alcancía pequeña con imagen personalizada. Set completo ideal para parejas, aniversarios, cumpleaños o regalos especiales. Incluye presentación en caja de regalo con lazo.',
    isBusinessAvailable: true,
    customizable: true,
    tags: ['pack', 'set', 'tazas', 'llaveros', 'alcancia', 'combo'],
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

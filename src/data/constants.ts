import type { ProductCategory } from './products';
import type { TrabajoCategory } from './trabajos';

export const categoryLabels: Record<ProductCategory, string> = {
  tazas: 'Tazas',
  fotos: 'Fotos',
  cuadros: 'Cuadros',
  festivos: 'Regalos Festivos',
  alcancia: 'Alcancias',
  llaveros: 'Llaveros',
  otros: 'Otros',
};

export interface CategorySEO {
  title: string;
  description: string;
  intro: string;
}

export const categorySEO: Record<ProductCategory, CategorySEO> = {
  tazas: {
    title: 'Tazas Personalizadas en Santa Cruz de la Sierra',
    description: 'Tazas cerámicas y metálicas personalizadas con fotos, nombres o logos en Santa Cruz de la Sierra. Ideales para regalar o para tu empresa. Cotizá por WhatsApp.',
    intro: 'Las tazas personalizadas son el regalo ideal para cualquier ocasión: cumpleaños, aniversarios, empresas y eventos. En Recuerdos Compartidos las personalizamos con fotos, nombres, frases o tu logo, en versiones cerámicas y metálicas con excelente calidad de impresión.',
  },
  fotos: {
    title: 'Fotos Polaroid Personalizadas en Santa Cruz de la Sierra',
    description: 'Fotos estilo Polaroid con acabado mate personalizadas con tus recuerdos en Santa Cruz de la Sierra. Distintos tamaños y formatos. Cotizá por WhatsApp.',
    intro: 'Convierte tus recuerdos en fotos estilo Polaroid con acabado mate y alta definición. En Recuerdos Compartidos manejamos distintos tamaños y formatos para que tu momento especial quede plasmado con la mejor calidad.',
  },
  cuadros: {
    title: 'Cuadros Personalizados en Santa Cruz de la Sierra',
    description: 'Cuadros decorativos personalizados con tus fotos y diseños en Santa Cruz de la Sierra. Perfectos para regalar o decorar tu hogar. Cotizá por WhatsApp.',
    intro: 'Cuadros personalizados con tus fotos y recuerdos más especiales. Diseños únicos que combinan funcionalidad y estética para decorar tu hogar, oficina o regalar en ocasiones especiales.',
  },
  festivos: {
    title: 'Packs y Regalos Festivos Personalizados en Santa Cruz de la Sierra',
    description: 'Packs de regalo y obsequios festivos personalizados en Santa Cruz de la Sierra: Día del Padre, de la Madre, San Valentín y más. Cotizá por WhatsApp.',
    intro: 'Packs temáticos y regalos festivos coordinados para cada celebración: Día del Padre, de la Madre, San Valentín, Navidad y más. Combinamos múltiples productos personalizados en presentaciones listas para regalar.',
  },
  alcancia: {
    title: 'Alcancias Personalizadas en Santa Cruz de la Sierra',
    description: 'Alcancias de madera personalizadas con diseños únicos en Santa Cruz de la Sierra. Perfectas como regalo para niños, adultos o decoración. Cotizá por WhatsApp.',
    intro: 'Alcancias decorativas de madera con diseño personalizado. Combinan funcionalidad y estética, perfectas como regalo para niños, adultos o como elemento decorativo único en tu hogar.',
  },
  llaveros: {
    title: 'Llaveros Personalizados en Santa Cruz de la Sierra',
    description: 'Llaveros personalizados a pedido con cualquier tipo de diseño en Santa Cruz de la Sierra. Ideales para empresas y regalos. Cotizá por WhatsApp.',
    intro: 'Llaveros personalizados a pedido con cualquier tipo de diseño: fotos, logos, nombres y más. El detalle perfecto para regalar o para tu empresa, con impresión de alta calidad.',
  },
  otros: {
    title: 'Regalos Personalizados en Santa Cruz de la Sierra',
    description: 'Descubrí todos nuestros regalos personalizados en Santa Cruz de la Sierra: tazas, fotos, cuadros, alcancias, llaveros y más. Cotizá por WhatsApp.',
    intro: 'En Recuerdos Compartidos creamos regalos únicos y memorables. Explorá todos nuestros productos personalizados hechos a tu medida en Santa Cruz de la Sierra, Bolivia.',
  },
};

export const categoryColors: Record<TrabajoCategory, string> = {
  Corporativo: 'bg-primary text-white',
  Educativo: 'bg-accent text-white',
  Decoración: 'bg-secondary text-primary',
  Particular: 'bg-neutral-light text-gray-700',
};

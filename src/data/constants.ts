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

export const categoryColors: Record<TrabajoCategory, string> = {
  Corporativo: 'bg-primary text-white',
  Educativo: 'bg-accent text-white',
  Decoración: 'bg-secondary text-primary',
  Particular: 'bg-neutral-light text-gray-700',
};

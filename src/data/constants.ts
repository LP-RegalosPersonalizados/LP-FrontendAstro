import type { TrabajoCategory } from './trabajos';

export const categoryColors: Record<TrabajoCategory, string> = {
  Corporativo: 'bg-primary text-white',
  Educativo: 'bg-accent text-white',
  Decoración: 'bg-secondary text-primary',
  Particular: 'bg-neutral-light text-gray-700',
};

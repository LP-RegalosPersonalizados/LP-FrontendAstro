export type TrabajoCategory = 'Corporativo' | 'Educativo' | 'Decoración' | 'Particular';

export interface Trabajo {
  id: string;
  title: string;
  description: string;
  image: string;
  category: TrabajoCategory;
  quantity: string;
}

export const trabajos: Trabajo[] = [
  {
    id: '1',
    title: 'Sets corporativos para Cofee Bolivia',
    description: 'Producción de 80 tazas metalicas con logo y diseño personalizado a sus trabajadores por fin de año.',
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499335/IMG-20260205-WA0106_jlrngi.jpg',
    category: 'Corporativo',
    quantity: '80 unidades',
  },
  {
    id: '2',
    title: 'Esferas de Navidad Personalizadas',
    description: 'Esferas navideñas personalizadas con diseños exclusivos para decorar tu árbol. Pedidos por cantidad disponibles durante la festividad con posibilidad de incluir logos corporativos.',
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772499241/IMG-20251220-WA0023_mhzwyg.jpg',
    category: 'Corporativo',
    quantity: '200 unidades',
  },
  {
    id: '3',
    title: 'Tazas Con Logo Empresarial Para La Politécnica SC',
    description: 'Producción de tazas metalicas con logo y diseño personalizado',
    image: 'https://res.cloudinary.com/dzbp7mkvj/image/upload/v1772891741/taza_UAGRM_mxjuvw.jpg',
    category: 'Corporativo',
    quantity: '4 unidades',
  },
];

export const categoryColors: Record<TrabajoCategory, string> = {
  Corporativo: 'bg-primary text-white',
  Educativo: 'bg-accent text-white',
  Decoración: 'bg-secondary text-primary',
  Particular: 'bg-neutral-light text-gray-700',
};

export const getTrabajos = (): Trabajo[] => trabajos;

export const getTrabajosByCategory = (category: TrabajoCategory): Trabajo[] =>
  trabajos.filter((t) => t.category === category);

export const getTrabajosById = (id: string): Trabajo | undefined =>
  trabajos.find((t) => t.id === id);
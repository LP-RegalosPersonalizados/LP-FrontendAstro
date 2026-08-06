import { safeFetch } from './api';

export interface CategorySEO {
  title: string;
  description: string;
  intro: string;
}

export interface Category {
  slug: string;
  name: string;
  count: number;
  image: string;
  seo?: CategorySEO;
}

let cachedCategories: Category[] | null = null;

export async function fetchCategories(): Promise<Category[]> {
  if (cachedCategories) return cachedCategories;
  cachedCategories = await safeFetch<Category>('/api/categorias');
  return cachedCategories;
}

export function humanizeCategorySlug(slug: string): string {
  if (!slug) return 'Otros';
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function defaultCategorySEO(name: string): CategorySEO {
  const label = name || 'Otros';
  const lower = label.toLowerCase();
  return {
    title: `${label} Personalizados en Santa Cruz de la Sierra`,
    description: `Descubrí ${lower} personalizados en Santa Cruz de la Sierra. Recuerdos únicos hechos a tu medida. Cotizá por WhatsApp.`,
    intro: `En Recuerdos Compartidos creamos ${lower} personalizados a tu medida. Explorá nuestras opciones y cotizá tu pedido por WhatsApp.`,
  };
}

export function getCategoryBySlug(
  categories: Category[],
  slug: string
): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryLabel(categories: Category[], slug: string): string {
  return getCategoryBySlug(categories, slug)?.name ?? humanizeCategorySlug(slug);
}

export function getCategorySEO(categories: Category[], slug: string): CategorySEO {
  const category = getCategoryBySlug(categories, slug);
  return category?.seo ?? defaultCategorySEO(category?.name ?? humanizeCategorySlug(slug));
}

import { safeFetch } from './api';

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

function normalizeProduct(p: any): Product {
  return {
    ...p,
    featured: p.featured === true || p.featured === 'true' || p.featured === 'TRUE' || p.featured === 1,
    audience: {
      general: {
        available: p.audience?.general?.available === true || p.audience?.general?.available === 'TRUE',
        customizable: p.audience?.general?.customizable === true || p.audience?.general?.customizable === 'TRUE',
      },
      business: {
        available: p.audience?.business?.available === true || p.audience?.business?.available === 'TRUE',
        customizable: p.audience?.business?.customizable === true || p.audience?.business?.customizable === 'TRUE',
      },
    },
  };
}

let cachedProducts: Product[] | null = null;

export async function fetchProducts(): Promise<Product[]> {
  if (cachedProducts) return cachedProducts;
  const data = await safeFetch<Product>('/api/productos');
  cachedProducts = data.map(normalizeProduct);
  return cachedProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products.find((p) => p.slug === slug);
}

export async function getProductsByCategory(category: ProductCategory): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.category === category);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.featured === true);
}

export async function getBusinessProducts(): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.audience?.business?.available === true);
}

export async function getGeneralProducts(): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.audience?.general?.available === true);
}

export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  const products = await fetchProducts();
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

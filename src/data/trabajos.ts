import { safeFetch } from './api';

export type TrabajoCategory = 'Corporativo' | 'Educativo' | 'Decoración' | 'Particular';

export interface Trabajo {
  id: string;
  title: string;
  description: string;
  image: string;
  category: TrabajoCategory;
  quantity: string;
}

let cachedTrabajos: Trabajo[] | null = null;

async function fetchTrabajos(): Promise<Trabajo[]> {
  if (cachedTrabajos) return cachedTrabajos;
  cachedTrabajos = await safeFetch<Trabajo>('/api/trabajos');
  return cachedTrabajos;
}

export async function getTrabajos(): Promise<Trabajo[]> {
  return fetchTrabajos();
}

export async function getTrabajosByCategory(category: TrabajoCategory): Promise<Trabajo[]> {
  const t = await fetchTrabajos();
  return t.filter((trabajo) => trabajo.category === category);
}

export async function getTrabajosById(id: string): Promise<Trabajo | undefined> {
  const t = await fetchTrabajos();
  return t.find((trabajo) => trabajo.id === id);
}

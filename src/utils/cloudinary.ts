const CLOUDINARY_DOMAIN = 'res.cloudinary.com';

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'png' | 'jpg';
  fetchFormat?: boolean;
  /** Reemplaza los transforms existentes de la URL (p. ej. para og:image con medidas exactas) */
  force?: boolean;
}

function isCloudinaryUrl(url: string): boolean {
  try {
    const u = new URL(url, 'https://res.cloudinary.com');
    return u.hostname === CLOUDINARY_DOMAIN && u.pathname.includes('/image/upload/');
  } catch {
    return false;
  }
}

export function optimizeImage(url: string, options?: CloudinaryOptions): string {
  if (!url || !isCloudinaryUrl(url)) return url;

  const { width, height, quality = 'auto', format = 'auto', force = false } = options ?? {};

  const parts: string[] = [];
  parts.push(`f_${format}`);
  parts.push(`q_${quality}`);

  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (width && height) {
    parts.push('c_fill');
  } else if (width || height) {
    parts.push('c_limit');
  }

  const transforms = parts.join(',');

  const idx = url.indexOf('/image/upload/') + '/image/upload/'.length;
  const after = url.slice(idx);

  const slashIdx = after.indexOf('/');
  if (slashIdx === -1) return url;
  if (/^[a-z]+_/.test(after.slice(0, slashIdx)) && !force) return url;

  return `${url.slice(0, idx)}${transforms}/${after.slice(slashIdx + 1)}`;
}
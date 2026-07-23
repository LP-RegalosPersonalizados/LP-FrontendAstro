const CLOUDINARY_DOMAIN = 'res.cloudinary.com';
const CLOUDINARY_REGEX = /^(https?:)?\/\/res\.cloudinary\.com\/(?<cloud>[^/]+)\/image\/upload\/(?<transforms>[^/]+)\/v?(?<version>[^/]+)\/(?<publicId>.+)$/;
const CLOUDINARY_SIMPLE_UPLOAD = /^(https?:)?\/\/res\.cloudinary\.com\/(?<cloud>[^/]+)\/image\/upload\/(?<rest>v?\d+\/.+)$/;

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'png' | 'jpg';
  fetchFormat?: boolean;
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

  const { width, height, quality = 'auto', format = 'auto' } = options ?? {};

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

  const match = url.match(CLOUDINARY_SIMPLE_UPLOAD);
  if (!match?.groups) return url;

  const { cloud, rest } = match.groups;

  const existingPath = `/image/upload/`;
  const idx = url.indexOf(existingPath) + existingPath.length;

  const before = url.slice(0, idx);
  const after = url.slice(idx);

  if (/^(f_|q_|w_|h_|c_)/.test(after)) return url;

  return `${before}${transforms}/${after}`;
}
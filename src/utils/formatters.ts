// ============================================================
// FORMATTERS
// ============================================================

type CurrencyCode = 'BOB' | 'USD' | 'ARS';

export function formatPrice(
  price: number,
  currency: CurrencyCode = 'BOB'
): string {
  const localeMap: Record<CurrencyCode, string> = {
    BOB: 'es-BO',
    USD: 'en-US',
    ARS: 'es-AR',
  };

  return new Intl.NumberFormat(localeMap[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(price);
}

/*MODO DE USO EN COMPONENTE:
import { formatPrice } from '../utils/formatters';

const price = 150;
const formattedPrice = formatPrice(price, 'BOB'); // "Bs. 150,00"

formatPrice(1500); // BOB por defecto
formatPrice(1500, 'USD');
formatPrice(1500, 'ARS');

*/

/**
 * Truncate a string to a given length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

import type { CartItem } from '../store/useCart';

// ============================================================
// CONFIG — replace with real number
// ============================================================

export const WHATSAPP_NUMBER = '5491100000000'; // Format: country code + number, no +

// ============================================================
// MESSAGE GENERATORS
// ============================================================

export function generateWhatsAppMessage(
  type: 'general' | 'business',
  items: CartItem[]
): string {
  if (items.length === 0) return '';

  const itemLines = items
    .map((item) => {
      const base = `- ${item.name} (${item.quantity}u)`;
      const extra = item.personalization
        ? ` — Personalización: "${item.personalization}"`
        : '';
      return base + extra;
    })
    .join('\n');

  if (type === 'general') {
    return (
      `Hola! Me interesa cotizar los siguientes productos:\n\n` +
      itemLines +
      `\n\nQuedo atento/a a tu respuesta. Muchas gracias! 😊`
    );
  }

  return (
    `Hola! Me contacto desde la web para solicitar una cotización al por mayor de:\n\n` +
    itemLines +
    `\n\nQuedo atento/a a disponibilidad y precios. Gracias!`
  );
}

export function generateProductInquiry(
  productName: string,
  type: 'general' | 'business' = 'general'
): string {
  if (type === 'business') {
    return (
      `Hola! Me contacto desde la web. Me interesa el producto "${productName}" ` +
      `para mi empresa/evento. Quisiera consultar por personalización y precios al por mayor. Gracias!`
    );
  }
  return (
    `Hola! Me interesa el producto "${productName}". ` +
    `¿Podés darme más información sobre opciones de personalización y precios? Gracias!`
  );
}

// ============================================================
// LINK BUILDER
// ============================================================

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCartWhatsAppLink(
  type: 'general' | 'business',
  items: CartItem[]
): string {
  const message = generateWhatsAppMessage(type, items);
  return buildWhatsAppLink(message);
}

export function buildProductWhatsAppLink(
  productName: string,
  type: 'general' | 'business' = 'general'
): string {
  const message = generateProductInquiry(productName, type);
  return buildWhatsAppLink(message);
}

import { useCart } from '../../store/useCart';
import { buildCartWhatsAppLink } from '../../utils/whatsapp';
import CartItemRow from './CartItemRow';

export default function CartPanel() {
  const { items, isOpen, mode, closeCart, clearCart, getItemCount } = useCart();
  const count = getItemCount();

  const handleWhatsApp = () => {
    if (items.length === 0) return;
    const link = buildCartWhatsAppLink(mode, items);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col
          transform transition-transform duration-350 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Tu lista de interés"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-light bg-secondary/30">
          <div>
            <h2 className="font-display font-semibold text-primary text-lg">
              Tu Lista de Interés
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {count === 0 ? 'Sin productos seleccionados' : `${count} producto${count !== 1 ? 's' : ''}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-neutral-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Cerrar lista"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <div className="w-16 h-16 rounded-full bg-secondary/40 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-primary text-lg">Lista vacía</p>
                <p className="text-sm text-gray-500 mt-1">
                  Explorá el catálogo y seleccioná los productos que te interesen
                </p>
              </div>
              <a
                href="/catalogo"
                onClick={closeCart}
                className="btn-primary text-sm py-2 px-5"
              >
                Ver catálogo
              </a>
            </div>
          ) : (
            <ul className="space-y-3" aria-label="Productos en tu lista">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="px-4 py-4 border-t border-neutral-light bg-white space-y-3">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3.5 px-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Enviar lista por WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar lista por WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full text-sm text-gray-400 hover:text-red-500 transition-colors duration-200 py-1 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded"
              aria-label="Limpiar lista completa"
            >
              Limpiar lista
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

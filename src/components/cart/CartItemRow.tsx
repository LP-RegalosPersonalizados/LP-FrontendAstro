import { useCart, type CartItem } from '../../store/useCart';

interface Props {
  item: CartItem;
}

export default function CartItemRow({ item }: Props) {
  const { removeItem, updateQuantity, updatePersonalization } = useCart();

  return (
    <li className="bg-neutral-light/30 rounded-xl p-3 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <p className="font-medium text-sm text-gray-800 leading-snug flex-1">
          {item.name}
        </p>
        <button
          onClick={() => removeItem(item.id)}
          className="shrink-0 p-1 rounded-full hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-400"
          aria-label={`Quitar ${item.name} de la lista`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Quantity control - siempre con botones */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Cantidad:</span>

        <div className="flex items-center gap-1">
          <button
          disabled={item.quantity === 1}
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className={`w-6 h-6 rounded-full bg-white border flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary text-gray-700
                    ${
                      item.quantity === 1
                        ? "border-neutral-light opacity-40 cursor-not-allowed"
                        : "border-neutral-light hover:bg-primary hover:text-white hover:border-primary"
                      }`}
                      aria-label="Disminuir cantidad"
                    >
                    <span className="text-sm leading-none">−</span>
          </button>

          <span className="w-6 text-center text-sm font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-6 h-6 rounded-full bg-white border border-neutral-light flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary text-gray-700"
            aria-label="Aumentar cantidad"
          >
            <span className="text-sm leading-none">+</span>
          </button>
        </div>
      </div>

      {/* Personalization */}
      <input
        type="text"
        placeholder="Texto de personalización (opcional)"
        value={item.personalization ?? ''}
        onChange={(e) =>
          updatePersonalization(item.id, e.target.value)
        }
        className="w-full text-xs border border-neutral-light rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
        aria-label={`Personalización para ${item.name}`}
      />
    </li>
  );
}
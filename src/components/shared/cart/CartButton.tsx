import { useCart } from '../../../store/useCart';

export default function CartButton() {
  const { getItemCount, toggleCart } = useCart();
  const count = getItemCount();

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 rounded-full hover:bg-neutral-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`Abrir lista de interés${count > 0 ? ` (${count} productos)` : ''}`}
    >
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
        />
      </svg>
      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          aria-live="polite"
        >
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  );
}

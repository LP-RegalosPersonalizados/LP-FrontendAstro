import { useState } from 'react';
import { useCart } from '../../store/useCart';
import type { Product } from '../../data/products';
import { formatPrice } from '../../utils/formatters';
import { buildProductWhatsAppLink } from '../../utils/whatsapp';

interface Props {
  product: Product;
  showBusinessBadge?: boolean;
  /** When true, shows quantity controls and "Consultar para personalizar" */
  businessMode?: boolean;
}

export default function ProductCard({ product, showBusinessBadge, businessMode }: Props) {
  const { addItem, hasItem } = useCart();
  const [added, setAdded] = useState(false);
  const isInCart = hasItem(product.id);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleConsult = () => {
    const link = buildProductWhatsAppLink(product.name, 'business');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="card group flex flex-col overflow-hidden h-full">
      {/* Image */}
      <a
        href={`/producto/${product.slug}`}
        className="block relative overflow-hidden aspect-square bg-neutral-light/40"
        aria-label={`Ver detalle de ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          fetchPriority="high"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {showBusinessBadge && product.audience.business.available && (
            <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
              Venta por Mayor
            </span>
          )}
          {(businessMode ? product.audience.business.customizable : product.audience.general.customizable) && (
            <span className="bg-accent text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
              Personalizable
            </span>
          )}
        </div>
      </a>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex-1">
          <a href={`/producto/${product.slug}`} className="hover:text-primary transition-colors duration-200">
            <h3 className="font-display font-semibold text-gray-800 text-base leading-snug">
              {product.name}
            </h3>
          </a>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
          {product.price && (
            <p className="text-primary font-semibold mt-2 font-mono text-sm">
              {formatPrice(product.price)}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleAdd}
            className={`w-full text-sm font-medium py-2.5 px-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${isInCart || added
                ? 'bg-secondary text-primary border-2 border-primary/20 focus:ring-primary'
                : 'btn-primary py-2.5'
              }`}
            aria-label={`${isInCart ? 'Ya en lista: ' : 'Agregar a lista: '}${product.name}`}
          >
            {added ? '✓ Agregado' : isInCart ? '✓ En tu lista' : 'Agregar a lista'}
          </button>

          {businessMode && (
            <button
              onClick={handleConsult}
              className="w-full btn-outline text-sm py-2"
              aria-label={`Consultar personalización para ${product.name}`}
            >
              Consultar personalización
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

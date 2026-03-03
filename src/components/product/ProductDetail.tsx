import { useState } from 'react';
import type { Product } from '../../data/products';
import { useCart } from '../../store/useCart';
import { formatPrice } from '../../utils/formatters';
import { buildProductWhatsAppLink } from '../../utils/whatsapp';
import { categoryLabels } from '../../data/products';

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addItem, hasItem, openCart } = useCart();
  const [personalization, setPersonalization] = useState('');
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);
  const isInCart = hasItem(product.id);

  // Crear un array de todas las imágenes (principal + galería)
  const allImages = product.gallery && product.gallery.length > 0 
    ? [product.image, ...product.gallery]
    : [product.image];

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, personalization: personalization || undefined });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDirectWhatsApp = () => {
    const link = buildProductWhatsAppLink(product.name);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* Image */}
      <div className="space-y-4">
        {/* Main Image with transition */}
        <div className="rounded-2xl overflow-hidden bg-neutral-light/30 aspect-square">
          <img
            src={activeImage}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Thumbnails Gallery */}
        {allImages.length > 1 && (
          <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide pb-2">
            {allImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={
                  'w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ' +
                  (activeImage === img
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-transparent hover:border-primary/50')
                }
                aria-label={`Ver imagen ${index + 1}`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`${product.name} - Vista ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-6">
        {/* Category + badges */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-secondary text-primary px-3 py-1 rounded-full font-medium">
            {categoryLabels[product.category]}
          </span>
          {product.customizable && (
            <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium border border-accent/20">
              Personalizable
            </span>
          )}
          {product.isBusinessAvailable && (
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20">
              Disponible para empresas
            </span>
          )}
        </div>

        <div>
          <h1 className="font-display font-bold text-primary text-3xl md:text-4xl leading-tight">
            {product.name}
          </h1>
          {product.price && (
            <p className="text-2xl font-bold text-accent font-mono mt-2">
              {formatPrice(product.price)}
            </p>
          )}
        </div>

        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {/* Personalization field */}
        {product.customizable && (
          <div>
            <label
              htmlFor="personalization"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              ¿Qué quisieras personalizar?
            </label>
            <textarea
              id="personalization"
              rows={3}
              value={personalization}
              onChange={(e) => setPersonalization(e.target.value)}
              placeholder="Ej: Nombre 'Juan', fecha 15/04, frase 'Con amor'..."
              className="w-full border border-neutral-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-gray-400"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAdd}
            className={`flex-1 py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${added || isInCart
                ? 'bg-secondary border-2 border-primary/20 text-primary focus:ring-primary'
                : 'btn-primary'
              }`}
            aria-label={`${isInCart ? 'Ya en tu lista' : 'Agregar a tu lista'}: ${product.name}`}
          >
            {added ? '✓ Agregado a tu lista' : isInCart ? '✓ Ya en tu lista' : 'Agregar a mi lista'}
          </button>
          <button
            onClick={handleDirectWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label={`Consultar por ${product.name} en WhatsApp`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </button>
        </div>

        {isInCart && (
          <button
            onClick={openCart}
            className="text-sm text-primary underline underline-offset-4 hover:text-accent transition-colors duration-200 focus:outline-none"
            aria-label="Ver tu lista de interés"
          >
            Ver mi lista →
          </button>
        )}
      </div>
    </div>
  );
}

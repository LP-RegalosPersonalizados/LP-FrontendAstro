import { useState, useEffect, useRef } from 'react';
import type { Product } from '../../data/products';
import { optimizeImage } from '../../utils/cloudinary';

interface ProductCarouselProps {
  products: Product[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function ProductCarousel({
  products,
  autoplay = true,
  autoplayInterval = 5000,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isAutoplay || products.length === 0) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, autoplayInterval);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [isAutoplay, products.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    setIsAutoplay(false);
    timeoutRef.current = window.setTimeout(() => setIsAutoplay(autoplay), 10000);
  };

  if (products.length === 0) return null;

  const currentProduct = products[currentIndex];

  return (
    <div className="flex flex-col items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      {/* Main Carousel Container */}
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
        {/* Carousel Content */}
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <a
                href={`/producto/${product.slug}`}
                className="block w-full h-full"
                aria-label={`Ver detalle de ${product.name}`}
              >
                <img
                  src={optimizeImage(product.image, { width: 400 })}
                  srcSet={`${optimizeImage(product.image, { width: 330 })} 330w, ${optimizeImage(product.image, { width: 400 })} 400w, ${optimizeImage(product.image, { width: 600 })} 600w`}
                  sizes="(max-width: 1024px) 382px, 400px"
                  alt={product.name}
                  className="w-full h-full object-cover"
                  width="400"
                  height="400"
                  decoding={index === 0 ? "sync" : "async"}
                  loading={index === 0 ? "eager" : "lazy"}
                  {...({ fetchpriority: index === 0 ? "high" : "low" } as any)}
                  crossOrigin="anonymous"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
      </div>

      {/* Product Title */}
      <div className="w-full max-w-md text-center px-2" aria-live="polite" aria-atomic="true">
        <p className="text-white font-bold text-base">{currentProduct.name}</p>
      </div>

      {/* Indicators */}
      <div className="flex gap-1 justify-center">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="min-w-6 min-h-6 p-2 flex items-center justify-center transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Ir a producto ${index + 1}: ${products[index].name}`}
            aria-current={index === currentIndex}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-secondary w-3 h-3' : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'}`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

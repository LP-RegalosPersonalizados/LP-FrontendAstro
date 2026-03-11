import { useState, useEffect } from 'react';
import type { Product } from '../../data/products';

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

  useEffect(() => {
    if (!isAutoplay || products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isAutoplay, products.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
    // Reinicia el autoplay después de 10 segundos de inactividad
    const timeout = setTimeout(() => setIsAutoplay(autoplay), 10000);
    return () => clearTimeout(timeout);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoplay(false);
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
                href="/catalogo"
                className="block w-full h-full"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
      </div>

      {/* Product Title */}
      <div className="w-full max-w-md text-center px-2">
        <h3 className="text-white font-bold text-base">{currentProduct.name}</h3>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 justify-center">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-secondary w-3 h-3'
                : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
            }`}
            aria-label={`Ir a producto ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

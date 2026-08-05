import { useState } from 'react';
import type { Trabajo } from '../../data/trabajos';
import { optimizeImage } from '../../utils/cloudinary';

interface Props {
  caso: Trabajo;
  index?: number;
}

export default function CasoExitoCard({ caso, index = 0 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group"
      style={{
        animation: `slideInUp 0.6s ease-out forwards`,
        opacity: 0,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {!isExpanded ? (
        // Collapsed view - Solo imagen, categoría, título y botón
        <div className="bg-white rounded-xl overflow-hidden border border-neutral-light hover:border-accent hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          {caso.image && (
            <div className="relative h-56 overflow-hidden bg-gray-200">
              <img
                src={optimizeImage(caso.image, { width: 700 })}
                alt={caso.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {caso.category && (
              <p className="text-sm font-semibold text-accent mb-2">
                {caso.category}
              </p>
            )}

            <h3 className="font-display text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors flex-grow">
              {caso.title}
            </h3>

            {/* Button - Ver detalles */}
            <button
              onClick={() => setIsExpanded(true)}
              type="button"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 mt-auto text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label={`Ver detalles de ${caso.title}`}
            >
              Ver detalles
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        // Expanded view - Imagen, categoría, título, descripción completa y cantidad
        <div className="bg-white rounded-xl overflow-hidden border border-2 border-accent shadow-2xl transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          {caso.image && (
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <img
                src={optimizeImage(caso.image, { width: 700 })}
                alt={caso.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {caso.category && (
              <p className="text-sm font-semibold text-accent mb-3">
                {caso.category}
              </p>
            )}

            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              {caso.title}
            </h3>

            {/* Description */}
            {caso.description && (
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                {caso.description}
              </p>
            )}

            {/* Quantity badge */}
            {caso.quantity && (
              <div className="inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full mb-4 w-fit">
                {caso.quantity}
              </div>
            )}

            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              type="button"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={`Cerrar detalles de ${caso.title}`}
            >
              Cerrar
              <svg
                className="w-4 h-4 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

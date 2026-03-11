import { useState } from 'react';
import type { Product, ProductCategory } from '../../../data/products';
import { categoryLabels } from '../../../data/products';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  showBusinessBadge?: boolean;
  businessMode?: boolean;
  initialCategory?: ProductCategory | 'todos';
}

export default function ProductGrid({
  products,
  showBusinessBadge,
  businessMode,
  initialCategory = 'todos',
}: Props) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'todos'>(initialCategory);

  const categories: Array<ProductCategory | 'todos'> = [
    'todos',
    ...([...new Set(products.map((p) => p.category))] as ProductCategory[]),
  ];

  const filtered =
    activeCategory === 'todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter pills */}
      {categories.length > 2 && (
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Filtrar por categoría"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${activeCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-secondary/50 text-primary hover:bg-secondary'
                }`}
            >
              {cat === 'todos' ? 'Todos' : categoryLabels[cat]}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          role="list"
          aria-label="Productos"
        >
          {filtered.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard
                product={product}
                showBusinessBadge={showBusinessBadge}
                businessMode={businessMode}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="font-display text-lg">No hay productos en esta categoría</p>
        </div>
      )}
    </div>
  );
}

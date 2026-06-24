import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { u as useCart, b as buildProductWhatsAppLink } from './MainLayout_D-vvBga1.mjs';
import { s as safeFetch } from './api_Bb64BhKY.mjs';

function formatPrice(price, currency = "BOB") {
  const localeMap = {
    BOB: "es-BO",
    USD: "en-US",
    ARS: "es-AR"
  };
  return new Intl.NumberFormat(localeMap[currency], {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  }).format(price);
}

function ProductCard({ product, showBusinessBadge, businessMode }) {
  const { addItem, hasItem } = useCart();
  const [added, setAdded] = useState(false);
  const isInCart = hasItem(product.id);
  const handleAdd = () => {
    addItem({ id: product.id, name: product.name });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };
  const handleConsult = () => {
    const link = buildProductWhatsAppLink(product.name, "business");
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsxs("article", { className: "card group flex flex-col overflow-hidden h-full", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/producto/${product.slug}`,
        className: "block relative overflow-hidden aspect-square bg-neutral-light/40",
        "aria-label": `Ver detalle de ${product.name}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              loading: "lazy",
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-2 left-2 flex flex-col gap-1", children: [
            showBusinessBadge && product.audience.business.available && /* @__PURE__ */ jsx("span", { className: "bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm", children: "Venta por Mayor" }),
            (businessMode ? product.audience.business.customizable : product.audience.general.customizable) && /* @__PURE__ */ jsx("span", { className: "bg-accent text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm", children: "Personalizable" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-4 gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("a", { href: `/producto/${product.slug}`, className: "hover:text-primary transition-colors duration-200", children: /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-gray-800 text-base leading-snug", children: product.name }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1 line-clamp-2", children: product.description }),
        product.price && /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold mt-2 font-mono text-sm", children: formatPrice(product.price) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAdd,
            className: `w-full text-sm font-medium py-2.5 px-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${isInCart || added ? "bg-secondary text-primary border-2 border-primary/20 focus:ring-primary" : "btn-primary py-2.5"}`,
            "aria-label": `${isInCart ? "Ya en lista: " : "Agregar a lista: "}${product.name}`,
            children: added ? "✓ Agregado" : isInCart ? "✓ En tu lista" : "Agregar a lista"
          }
        ),
        businessMode && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleConsult,
            className: "w-full btn-outline text-sm py-2",
            "aria-label": `Consultar personalización para ${product.name}`,
            children: "Consultar personalización"
          }
        )
      ] })
    ] })
  ] });
}

function normalizeProduct(p) {
  return {
    ...p,
    featured: p.featured === true || p.featured === "true" || p.featured === "TRUE" || p.featured === 1,
    audience: {
      general: {
        available: p.audience?.general?.available === true || p.audience?.general?.available === "TRUE",
        customizable: p.audience?.general?.customizable === true || p.audience?.general?.customizable === "TRUE"
      },
      business: {
        available: p.audience?.business?.available === true || p.audience?.business?.available === "TRUE",
        customizable: p.audience?.business?.customizable === true || p.audience?.business?.customizable === "TRUE"
      }
    }
  };
}
async function fetchProducts() {
  const data = await safeFetch("/api/productos");
  return data.map(normalizeProduct);
}
async function getProductBySlug(slug) {
  const products = await fetchProducts();
  return products.find((p) => p.slug === slug);
}
async function getFeaturedProducts() {
  const products = await fetchProducts();
  return products.filter((p) => p.featured === true);
}
async function getGeneralProducts() {
  const products = await fetchProducts();
  return products.filter((p) => p.audience?.general?.available === true);
}
async function getRelatedProducts(product, limit = 3) {
  const products = await fetchProducts();
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

export { ProductCard as P, getProductBySlug as a, getRelatedProducts as b, getFeaturedProducts as c, formatPrice as f, getGeneralProducts as g };

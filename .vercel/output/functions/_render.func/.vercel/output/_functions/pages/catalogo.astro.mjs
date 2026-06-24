import { d as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bxn4HeXv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_D-vvBga1.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_SYlFDj3D.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { c as categoryLabels } from '../chunks/constants_BQ0XufNh.mjs';
import { P as ProductCard, g as getGeneralProducts } from '../chunks/products_EMbHKk61.mjs';
export { renderers } from '../renderers.mjs';

function ProductGrid({
  products,
  showBusinessBadge,
  businessMode,
  initialCategory = "todos"
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const categories = [
    "todos",
    ...[...new Set(products.map((p) => p.category))]
  ];
  const filtered = activeCategory === "todos" ? products : products.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ jsxs("div", { children: [
    categories.length > 2 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex flex-wrap gap-2 mb-8",
        role: "tablist",
        "aria-label": "Filtrar por categoría",
        children: categories.map((cat) => /* @__PURE__ */ jsx(
          "button",
          {
            role: "tab",
            "aria-selected": activeCategory === cat,
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${activeCategory === cat ? "bg-primary text-white shadow-sm" : "bg-secondary/50 text-primary hover:bg-secondary"}`,
            children: cat === "todos" ? "Todos" : categoryLabels[cat]
          },
          cat
        ))
      }
    ),
    filtered.length > 0 ? /* @__PURE__ */ jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
        role: "list",
        "aria-label": "Productos",
        children: filtered.map((product) => /* @__PURE__ */ jsx("div", { role: "listitem", children: /* @__PURE__ */ jsx(
          ProductCard,
          {
            product,
            showBusinessBadge,
            businessMode
          }
        ) }, product.id))
      }
    ) : /* @__PURE__ */ jsx("div", { className: "text-center py-16 text-gray-400", children: /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: "No hay productos en esta categoría" }) })
  ] });
}

const prerender = false;
const $$Catalogo = createComponent(async ($$result, $$props, $$slots) => {
  const generalProducts = await getGeneralProducts();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Cat\xE1logo de Recuerdos Compartidos", "description": "Cat\xE1logo de recuerdos compartidos personalizados en Santa Cruz de la Sierra. Tazas, fotos Polaroid, alcancias y regalos \xFAnicos. Cotiz\xE1 por WhatsApp.", "keywords": "cat\xE1logo recuerdos compartidos Santa Cruz, regalos personalizados Bolivia, tazas personalizadas SCZ, fotos polaroid Santa Cruz de la Sierra", "author": "Recuerdos Compartidos", "robots": "index, follow", "canonical": "https://www.recuerdoscompartidos.sarl/catalogo", "ogImage": "/og-image.png" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-padding"> <div class="container-main"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Cat\xE1logo General", "subtitle": "Seleccion\xE1 los productos que te interesan y generamos un mensaje de WhatsApp para cotizar", "align": "left" })} <!-- Info banner --> <div class="flex items-center gap-3 bg-secondary/30 border border-secondary rounded-xl px-5 py-4 mb-8 max-w-2xl"> <span class="text-2xl shrink-0" aria-hidden="true">💡</span> <p class="text-sm text-gray-700">
Hacé clic en <strong>Agregar a lista</strong> en los productos que te gusten. 
          Luego abrí tu lista y mandanoslá por WhatsApp para cotizar todo de una vez.
</p> </div> ${renderComponent($$result2, "ProductGrid", ProductGrid, { "products": generalProducts, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductGrid", "client:component-export": "default" })} </div> </section> ` })}`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/catalogo.astro", void 0);

const $$file = "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

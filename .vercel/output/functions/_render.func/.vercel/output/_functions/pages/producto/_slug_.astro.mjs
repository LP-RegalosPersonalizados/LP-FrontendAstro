import { c as createAstro, d as createComponent, f as renderComponent, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_Bxn4HeXv.mjs';
import 'kleur/colors';
import { u as useCart, b as buildProductWhatsAppLink, $ as $$MainLayout } from '../../chunks/MainLayout_D-vvBga1.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { f as formatPrice, a as getProductBySlug, b as getRelatedProducts, P as ProductCard } from '../../chunks/products_EMbHKk61.mjs';
import { c as categoryLabels } from '../../chunks/constants_BQ0XufNh.mjs';
export { renderers } from '../../renderers.mjs';

function ProductDetail({ product }) {
  const { addItem, hasItem, openCart } = useCart();
  const [personalization, setPersonalization] = useState("");
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);
  const isInCart = hasItem(product.id);
  const allImages = product.gallery && product.gallery.length > 0 ? [product.image, ...product.gallery] : [product.image];
  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, personalization: personalization || void 0 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  };
  const handleDirectWhatsApp = () => {
    const link = buildProductWhatsAppLink(product.name);
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden bg-neutral-light/30 aspect-square", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: activeImage,
          alt: product.name,
          className: "w-full h-full object-cover transition-opacity duration-300"
        }
      ) }),
      allImages.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-3 overflow-x-auto scrollbar-hide pb-2", children: allImages.map((img, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveImage(img),
          className: "w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all " + (activeImage === img ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-primary/50"),
          "aria-label": `Ver imagen ${index + 1}`,
          children: /* @__PURE__ */ jsx("img", { src: img, className: "w-full h-full object-cover", alt: `${product.name} - Vista ${index + 1}` })
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs bg-secondary text-primary px-3 py-1 rounded-full font-medium", children: categoryLabels[product.category] }),
        product.audience.general.customizable && /* @__PURE__ */ jsx("span", { className: "text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium border border-accent/20", children: "Personalizable" }),
        product.audience.business.available && /* @__PURE__ */ jsx("span", { className: "text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20", children: "Disponible para empresas" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display font-bold text-primary text-3xl md:text-4xl leading-tight", children: product.name }),
        product.price && /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent font-mono mt-2", children: formatPrice(product.price) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: product.description }),
      product.audience.general.customizable && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "personalization",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "¿Qué quisieras personalizar?"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "personalization",
            rows: 3,
            value: personalization,
            onChange: (e) => setPersonalization(e.target.value),
            placeholder: "Ej: Nombre 'Juan', fecha 15/04, frase 'Con amor'...",
            className: "w-full border border-neutral-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-gray-400"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAdd,
            className: `flex-1 py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${added || isInCart ? "bg-secondary border-2 border-primary/20 text-primary focus:ring-primary" : "btn-primary"}`,
            "aria-label": `${isInCart ? "Ya en tu lista" : "Agregar a tu lista"}: ${product.name}`,
            children: added ? "✓ Agregado a tu lista" : isInCart ? "✓ Ya en tu lista" : "Agregar a mi lista"
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleDirectWhatsApp,
            className: "flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 px-6 rounded-full font-medium text-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
            "aria-label": `Consultar por ${product.name} en WhatsApp`,
            children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
              "Consultar por WhatsApp"
            ]
          }
        )
      ] }),
      isInCart && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: openCart,
          className: "text-sm text-primary underline underline-offset-4 hover:text-accent transition-colors duration-200 focus:outline-none",
          "aria-label": "Ver tu lista de interés",
          children: "Ver mi lista →"
        }
      )
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.recuerdoscompartidos.sarl");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return new Response("Not Found", { status: 404 });
  }
  const related = await getRelatedProducts(product, 3);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "url": `https://www.recuerdoscompartidos.sarl/producto/${slug}`,
    "brand": {
      "@type": "Brand",
      "name": "Recuerdos Compartidos"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://wa.me/59162699702?text=${encodeURIComponent(`Hola, me interesa el producto ${product.name}`)}`,
      "priceCurrency": "BOB",
      "price": product.price ? product.price.toString() : "0",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Recuerdos Compartidos"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Bolivia"
      }
    },
    "category": product.category
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.recuerdoscompartidos.sarl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cat\xE1logo",
        "item": "https://www.recuerdoscompartidos.sarl/catalogo"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://www.recuerdoscompartidos.sarl/producto/${slug}`
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${product.name} | Recuerdos Compartidos`, "description": `${product.description} Personalizado y hecho a tu medida en Santa Cruz de la Sierra. Cotiz\xE1 por WhatsApp.`, "keywords": `${product.name}, recuerdos compartidos Santa Cruz, ${product.category}, regalo personalizado Bolivia`, "author": "Recuerdos Compartidos", "robots": "index, follow", "canonical": `https://www.recuerdoscompartidos.sarl/producto/${slug}`, "ogImage": product.image }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="section-padding"> <div class="container-main"> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-sm text-gray-400 mb-10" aria-label="Navegaci\xF3n de migas de pan"> <a href="/" class="hover:text-primary transition-colors duration-200">Inicio</a> <span aria-hidden="true">/</span> <a href="/catalogo" class="hover:text-primary transition-colors duration-200">Cat\xE1logo</a> <span aria-hidden="true">/</span> <span class="text-gray-700 font-medium" aria-current="page">', "</span> </nav> <!-- Product detail --> ", " <!-- Related products --> ", ' </div> </section>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), product.name, renderComponent($$result2, "ProductDetail", ProductDetail, { "product": product, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductDetail", "client:component-export": "default" }), related.length > 0 && renderTemplate`<div class="mt-20"> <h2 class="font-display font-bold text-primary text-2xl mb-8">
También te puede gustar
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${related.map((p) => renderTemplate`${renderComponent($$result2, "ProductCard", ProductCard, { "product": p, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductCard", "client:component-export": "default" })}`)} </div> </div>`, unescapeHTML(JSON.stringify(productSchema)), unescapeHTML(JSON.stringify(breadcrumbSchema))) })}`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/producto/[slug].astro", void 0);

const $$file = "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/producto/[slug].astro";
const $$url = "/producto/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

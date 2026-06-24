import { c as createAstro, d as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate, f as renderComponent, h as renderSlot, i as renderHead } from './astro/server_Bxn4HeXv.mjs';
import 'kleur/colors';
/* empty css                            */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import 'clsx';
import { useState, useEffect } from 'react';

const useCart = create()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      mode: "general",
      addItem: (newItem) => {
        const existing = get().items.find((i) => i.id === newItem.id);
        if (existing) {
          set((state) => ({
            items: state.items.map(
              (i) => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isOpen: true
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...newItem, quantity: 1 }],
            isOpen: true
          }));
        }
      },
      removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id)
      })),
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map(
            (i) => i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          )
        }));
      },
      updatePersonalization: (id, text) => set((state) => ({
        items: state.items.map(
          (i) => i.id === id ? { ...i, personalization: text } : i
        )
      })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      setMode: (mode) => set({ mode }),
      getItemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      hasItem: (id) => get().items.some((i) => i.id === id)
    }),
    {
      name: "regalos-cart",
      partialize: (state) => ({ items: state.items, mode: state.mode })
    }
  )
);

function CartButton() {
  const { getItemCount, toggleCart } = useCart();
  const count = getItemCount();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggleCart,
      className: "relative p-2 rounded-full hover:bg-neutral-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      "aria-label": `Abrir lista de interés${count > 0 ? ` (${count} productos)` : ""}`,
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6 text-primary",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
              }
            )
          }
        ),
        count > 0 && /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute -top-0.5 -right-0.5 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center",
            "aria-live": "polite",
            children: count > 9 ? "9+" : count
          }
        )
      ]
    }
  );
}

const $$Astro$1 = createAstro("https://www.recuerdoscompartidos.sarl");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/catalogo", label: "Cat\xE1logo" },
    { href: "/servicios-empresariales", label: "Para Empresas" },
    { href: "/faq", label: "FAQ" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-light shadow-sm" role="banner"> <div class="container-main"> <div class="flex items-center justify-between h-16 md:h-20"> <!-- Logo --> <a href="/" class="flex items-center gap-2 group" aria-label="Recuerdos Compartidos — Ir al inicio"> <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-lg group-hover:bg-accent transition-colors duration-300" aria-hidden="true">
R
</div> <span class="font-display font-semibold text-primary text-lg leading-tight">
Recuerdos<br class="hidden sm:block"> <span class="text-accent">Compartidos</span> </span> </a> <!-- Desktop nav --> <nav class="hidden md:flex items-center gap-1" aria-label="Navegación principal"> ${navLinks.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200
                ${currentPath === href ? "bg-primary text-white" : "text-gray-700 hover:text-primary hover:bg-secondary/50"}`, "class")}${addAttribute(currentPath === href ? "page" : void 0, "aria-current")}> ${label} </a>`)} </nav> <!-- Actions --> <div class="flex items-center gap-3"> <!-- WhatsApp icon --> <!-- Nro de wpp cambiado --> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors duration-200" aria-label="Contactar por WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> <span class="hidden lg:inline">WhatsApp</span> </a> <!-- Cart button (React island) --> ${renderComponent($$result, "CartButton", CartButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/carrito/CartButton", "client:component-export": "default" })} <!-- Mobile menu button --> <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-lg hover:bg-neutral-light transition-colors duration-200" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="mobile-menu"> <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile nav --> <div id="mobile-menu" class="md:hidden hidden border-t border-neutral-light py-3" role="navigation" aria-label="Navegación móvil"> <nav class="flex flex-col gap-1"> ${navLinks.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`px-4 py-2.5 rounded-lg font-body text-sm font-medium transition-colors duration-200
                ${currentPath === href ? "bg-primary text-white" : "text-gray-700 hover:text-primary hover:bg-secondary/50"}`, "class")}${addAttribute(currentPath === href ? "page" : void 0, "aria-current")}> ${label} </a>`)} <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 flex items-center gap-2 rounded-lg font-body text-sm font-medium text-green-700 hover:bg-green-50 transition-colors duration-200"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
WhatsApp
</a> </nav> </div> </div> </header> `;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-white" role="contentinfo"> <div class="container-main py-14"> <div class="grid grid-cols-1 md:grid-cols-4 gap-10"> <!-- Brand --> <div> <a href="/" class="flex items-center gap-2 mb-4 group" aria-label="Inicio"> <div class="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-display font-bold text-xl">
R
</div> <span class="font-display font-semibold text-lg">
Recuerdos<br> <span class="text-secondary">Compartidos</span> </span> </a> <p class="text-white/70 text-sm leading-relaxed max-w-xs">
Creamos regalos únicos y memorables para los momentos más especiales de tu vida y tu empresa.
</p> <!-- Social links --> <div class="flex gap-3 mt-5"> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors duration-200" aria-label="WhatsApp"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> </a> </div> </div> <!-- Quick links --> <div> <h3 class="font-display font-semibold text-lg mb-4">Navegación</h3> <nav aria-label="Links rápidos del footer"> <ul class="space-y-2.5"> ${[
    { href: "/catalogo", label: "Cat\xE1logo General" },
    { href: "/servicios-empresariales", label: "Para Empresas" },
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "https://wa.me/59162699702", label: "Contacto por WhatsApp", external: true }
  ].map(({ href, label, external }) => renderTemplate`<li> <a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : void 0, "target")}${addAttribute(external ? "noopener noreferrer" : void 0, "rel")} class="text-white/70 hover:text-secondary text-sm transition-colors duration-200"> ${label} </a> </li>`)} </ul> </nav> </div> <!-- Legal --> <div> <h3 class="font-display font-semibold text-lg mb-4">Legal</h3> <nav aria-label="Links legales del footer"> <ul class="space-y-2.5"> ${[
    { href: "/legal#privacidad", label: "Privacidad" },
    { href: "/legal#terminos", label: "T\xE9rminos" },
    { href: "/legal#entregas", label: "Entregas" }
  ].map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-white/70 hover:text-secondary text-sm transition-colors duration-200"> ${label} </a> </li>`)} </ul> </nav> </div> <!-- Contact --> <div> <h3 class="font-display font-semibold text-lg mb-4">Contacto</h3> <ul class="space-y-3"> <li class="flex items-start gap-2.5 text-white/70 text-sm"> <svg class="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="hover:text-secondary transition-colors duration-200">
+591 62699702
</a> </li> </ul> </div> </div> <div class="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"> <p class="text-white/50 text-sm">
© ${year} Recuerdos Compartidos. Todos los derechos reservados.
</p> <p class="text-white/30 text-xs">
Hecho con el ❤️
</p> </div> </div> </footer>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/layout/Footer.astro", void 0);

const WHATSAPP_NUMBER = "59162699702";
function generateWhatsAppMessage(type, items) {
  if (items.length === 0) return "";
  const itemLines = items.map((item) => {
    const base = `- ${item.name} (${item.quantity}u)`;
    const extra = item.personalization ? ` — Personalización: "${item.personalization}"` : "";
    return base + extra;
  }).join("\n");
  if (type === "general") {
    return `Hola! Me interesa cotizar los siguientes productos:

` + itemLines + `

Quedo atento/a a tu respuesta. Muchas gracias! 😊`;
  }
  return `Hola! Me contacto desde la web para solicitar una cotización al por mayor de:

` + itemLines + `

Quedo atento/a a disponibilidad y precios. Gracias!`;
}
function generateProductInquiry(productName, type = "general") {
  if (type === "business") {
    return `Hola! Me contacto desde la web. Me interesa el producto "${productName}" para mi empresa/evento. Quisiera consultar por personalización y precios al por mayor. Gracias!`;
  }
  return `Hola! Me interesa el producto "${productName}". ¿Podés darme más información sobre opciones de personalización y precios? Gracias!`;
}
function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function buildCartWhatsAppLink(type, items) {
  const message = generateWhatsAppMessage(type, items);
  return buildWhatsAppLink(message);
}
function buildProductWhatsAppLink(productName, type = "general") {
  const message = generateProductInquiry(productName, type);
  return buildWhatsAppLink(message);
}

function CartItemRow({ item }) {
  const { removeItem, updateQuantity, updatePersonalization } = useCart();
  const isMin = item.quantity === 1;
  const [localQuantity, setLocalQuantity] = useState(String(item.quantity));
  useEffect(() => {
    setLocalQuantity(String(item.quantity));
  }, [item.quantity]);
  const handleQuantityChange = (value) => {
    if (value === "") {
      setLocalQuantity("");
      return;
    }
    const number = parseInt(value, 10);
    if (!isNaN(number) && number > 0) {
      setLocalQuantity(String(number));
      updateQuantity(item.id, number);
    }
  };
  const handleBlur = () => {
    if (localQuantity === "") {
      setLocalQuantity("1");
      updateQuantity(item.id, 1);
    }
  };
  return /* @__PURE__ */ jsxs("li", { className: "bg-neutral-light/30 rounded-xl p-3 space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-gray-800 leading-snug flex-1", children: item.name }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => removeItem(item.id),
          className: "shrink-0 p-1.5 rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-400",
          "aria-label": `Quitar ${item.name} de la lista`,
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Cantidad:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: isMin,
            onClick: () => updateQuantity(item.id, item.quantity - 1),
            className: `
              w-8 h-8 rounded-full bg-white border flex items-center justify-center
              transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary text-gray-700
              ${isMin ? "border-neutral-light opacity-40 cursor-not-allowed" : "border-neutral-light hover:bg-primary hover:text-white hover:border-primary"}`,
            "aria-label": "Disminuir cantidad",
            children: /* @__PURE__ */ jsx("span", { className: "text-base leading-none", children: "−" })
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: localQuantity,
            onChange: (e) => handleQuantityChange(e.target.value),
            onBlur: handleBlur,
            className: `w-12 text-center text-sm font-medium border rounded-md px-1 py-0.5
              ${isMin ? "text-gray-400 border-neutral-light" : "text-gray-800 border-gray-300"}
            `,
            "aria-label": "Cantidad editable"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => updateQuantity(item.id, item.quantity + 1),
            className: "\r\n              w-8 h-8 rounded-full bg-white border border-neutral-light\r\n              flex items-center justify-center\r\n              hover:bg-primary hover:text-white hover:border-primary\r\n              transition-all duration-200\r\n              focus:outline-none focus:ring-1 focus:ring-primary\r\n              text-gray-700\r\n            ",
            "aria-label": "Aumentar cantidad",
            children: /* @__PURE__ */ jsx("span", { className: "text-base leading-none", children: "+" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "Texto de personalización (opcional)",
        value: item.personalization ?? "",
        onChange: (e) => updatePersonalization(item.id, e.target.value),
        className: "\r\n          w-full text-xs border border-neutral-light rounded-lg px-2.5 py-1.5\r\n          focus:outline-none focus:ring-2 focus:ring-primary\r\n          placeholder-gray-400\r\n        ",
        "aria-label": `Personalización para ${item.name}`
      }
    )
  ] });
}

function CartPanel() {
  const { items, isOpen, mode, closeCart, clearCart, getItemCount } = useCart();
  const count = getItemCount();
  const handleWhatsApp = () => {
    if (items.length === 0) return;
    const link = buildCartWhatsAppLink(mode, items);
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/40 z-40 backdrop-blur-sm",
        onClick: closeCart,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col
          transform transition-transform duration-350 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Tu lista de interés",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-neutral-light bg-secondary/30", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-display font-semibold text-primary text-lg", children: "Tu Lista de Interés" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: count === 0 ? "Sin productos seleccionados" : `${count} producto${count !== 1 ? "s" : ""}` })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: closeCart,
                className: "p-2 rounded-full hover:bg-neutral-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary",
                "aria-label": "Cerrar lista",
                children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full text-center gap-4 py-12", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-secondary/40 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-primary/40", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-display font-semibold text-primary text-lg", children: "Lista vacía" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Explorá el catálogo y seleccioná los productos que te interesen" })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/catalogo",
                onClick: closeCart,
                className: "btn-primary text-sm py-2 px-5",
                children: "Ver catálogo"
              }
            )
          ] }) : /* @__PURE__ */ jsx("ul", { className: "space-y-3", "aria-label": "Productos en tu lista", children: items.map((item) => /* @__PURE__ */ jsx(CartItemRow, { item }, item.id)) }) }),
          items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 border-t border-neutral-light bg-white space-y-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleWhatsApp,
                className: "w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3.5 px-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
                "aria-label": "Enviar lista por WhatsApp",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
                  "Enviar lista por WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: clearCart,
                className: "w-full text-sm text-gray-400 hover:text-red-500 transition-colors duration-200 py-1 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded",
                "aria-label": "Limpiar lista completa",
                children: "Limpiar lista"
              }
            )
          ] })
        ]
      }
    )
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.recuerdoscompartidos.sarl");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title,
    description = "Recuerdos personalizados para momentos especiales en Santa Cruz de la Sierra. Tazas, \xE1lbumes, cuadros y m\xE1s.",
    keywords = "recuerdos compartidos Santa Cruz, regalos personalizados Bolivia, tazas personalizadas, \xE1lbumes fotos",
    ogImage = "/og-image.png",
    canonical,
    robots = "index, follow",
    author = "Recuerdos Compartidos"
  } = Astro2.props;
  const siteUrl = Astro2.site ?? "https://www.recuerdoscompartidos.sarl";
  const canonicalURL = canonical ? new URL(canonical, siteUrl) : new URL(Astro2.url.pathname, siteUrl);
  const fullOgImageUrl = new URL(ogImage, siteUrl);
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><!-- BASIC META TAGS --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><!-- GOOGLE SITE VERIFICATION --><meta name="google-site-verification" content="VEAqz0lcY8TAH0941wwqQQy6RGdS1MzVqcH1n9em65Y"><!-- FAVICON --><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- SEO FUNDAMENTALS --><title>', ' | Recuerdos Compartidos</title><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="robots"', '><meta name="language" content="Spanish"><meta name="revisit-after" content="3 days"><!-- GEO TAGS (Local SEO - Santa Cruz de la Sierra, Bolivia) --><meta name="geo.region" content="BO-CR"><meta name="geo.placename" content="Santa Cruz de la Sierra"><meta name="geo.position" content="-17.7833;-63.1821"><meta name="ICBM" content="-17.7833, -63.1821"><!-- CANONICAL URL --><link rel="canonical"', '><link rel="alternate" hreflang="es"', '><!-- OPEN GRAPH (SOCIAL SHARING) --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:site_name" content="Recuerdos Compartidos"><meta property="og:locale" content="es_BO"><!-- TWITTER CARDS --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><meta name="twitter:creator" content="@recuerdoscompartidos"><!-- PERFORMANCE HINTS --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com"><!-- STRUCTURED DATA (JSON-LD) --><script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "LocalBusiness",\n      "@id": "https://www.recuerdoscompartidos.sarl/#localbusiness",\n      "name": "Recuerdos Compartidos",\n      "image": "https://www.recuerdoscompartidos.sarl/og-image.png",\n      "url": "https://www.recuerdoscompartidos.sarl",\n      "logo": "https://www.recuerdoscompartidos.sarl/logo.png",\n      "description": "Recuerdos compartidos personalizados en Santa Cruz de la Sierra, Bolivia. Tazas m\xE1gicas, \xE1lbumes de fotos, cuadros canvas y regalos \xFAnicos para momentos especiales.",\n      "priceRange": "$$",\n      "telephone": "+591 62699702",\n      "currenciesAccepted": "BOB",\n      "paymentAccepted": "Cash, Transfer",\n      "address": {\n        "@type": "PostalAddress",\n        "addressLocality": "Santa Cruz de la Sierra",\n        "addressRegion": "Santa Cruz",\n        "addressCountry": {\n          "@type": "Country",\n          "name": "Bolivia"\n        }\n      },\n      "geo": {\n        "@type": "GeoCoordinates",\n        "latitude": -17.7833,\n        "longitude": -63.1821\n      },\n      "areaServed": {\n        "@type": "City",\n        "name": "Santa Cruz de la Sierra",\n        "containedInPlace": {\n          "@type": "Country",\n          "name": "Bolivia"\n        }\n      },\n      "sameAs": [\n        "https://wa.me/59162699702"\n      ],\n      "contactPoint": {\n        "@type": "ContactPoint",\n        "telephone": "+591 62699702",\n        "contactType": "customer service",\n        "areaServed": "BO",\n        "availableLanguage": ["Spanish"]\n      }\n    }\n    <\/script>', '</head> <body class="bg-white text-gray-900 font-body antialiased"> ', ' <main id="main-content"> ', " </main> ", " <!-- Cart panel rendered as React island --> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(author, "content"), addAttribute(robots, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImageUrl, "content"), addAttribute(title, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImageUrl, "content"), addAttribute(title, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CartPanel", CartPanel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/carrito/CartPanel", "client:component-export": "default" }));
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, buildProductWhatsAppLink as b, useCart as u };

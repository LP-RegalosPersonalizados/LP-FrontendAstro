import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as safeFetch } from './api_Bb64BhKY.mjs';

function CasoExitoCard({ caso, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group",
      style: {
        animation: `slideInUp 0.6s ease-out forwards`,
        opacity: 0,
        animationDelay: `${index * 0.1}s`
      },
      children: [
        !isExpanded ? (
          // Collapsed view - Solo imagen, categoría, título y botón
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl overflow-hidden border border-neutral-light hover:border-accent hover:shadow-xl transition-all duration-300 h-full flex flex-col", children: [
            caso.image && /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden bg-gray-200", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: caso.image,
                  alt: caso.title,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
              caso.category && /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-accent mb-2", children: caso.category }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors flex-grow", children: caso.title }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setIsExpanded(true),
                  type: "button",
                  className: "inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 mt-auto text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50",
                  "aria-label": `Ver detalles de ${caso.title}`,
                  children: [
                    "Ver detalles",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-4 h-4",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 12H5m14 0-4 4m4-4-4-4"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        ) : (
          // Expanded view - Imagen, categoría, título, descripción completa y cantidad
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl overflow-hidden border border-2 border-accent shadow-2xl transition-all duration-300 h-full flex flex-col", children: [
            caso.image && /* @__PURE__ */ jsxs("div", { className: "relative h-64 overflow-hidden bg-gray-200", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: caso.image,
                  alt: caso.title,
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
              caso.category && /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-accent mb-3", children: caso.category }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-primary mb-4", children: caso.title }),
              caso.description && /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm leading-relaxed mb-4 flex-grow", children: caso.description }),
              caso.quantity && /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-accent/15 text-accent text-xs font-semibold rounded-full mb-4 w-fit", children: caso.quantity }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setIsExpanded(false),
                  type: "button",
                  className: "inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50",
                  "aria-label": `Cerrar detalles de ${caso.title}`,
                  children: [
                    "Cerrar",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-4 h-4 rotate-180",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 12H5m14 0-4 4m4-4-4-4"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        ),
        /* @__PURE__ */ jsx("style", { children: `
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
      ` })
      ]
    }
  );
}

async function fetchTrabajos() {
  return safeFetch("/api/trabajos");
}
async function getTrabajos() {
  return fetchTrabajos();
}

export { CasoExitoCard as C, getTrabajos as g };

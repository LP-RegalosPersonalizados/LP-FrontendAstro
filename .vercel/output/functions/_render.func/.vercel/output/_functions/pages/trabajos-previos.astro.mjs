import { c as createAstro, d as createComponent, m as maybeRenderHead, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_Bxn4HeXv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_D-vvBga1.mjs';
import { C as CasoExitoCard, g as getTrabajos } from '../chunks/trabajos_B8HpOng5.mjs';
/* empty css                                            */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.recuerdoscompartidos.sarl");
const $$GaleriaTrabajos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GaleriaTrabajos;
  const { items, showTitle = true } = Astro2.props;
  return renderTemplate`${showTitle && renderTemplate`${maybeRenderHead()}<div class="text-center mb-16" data-astro-cid-6xzfw3wm><h2 class="font-display text-4xl md:text-5xl font-bold text-primary mb-4" data-astro-cid-6xzfw3wm>
Galería de Casos de Éxito
</h2><p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-6xzfw3wm>
Descubre todos los proyectos que hemos realizado. Empresas y clientes que confiaron en nosotros. Resultados que hablan por sí solos.
</p></div>`}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-6xzfw3wm> ${items.map((caso, idx) => renderTemplate`${renderComponent($$result, "CasoExitoCard", CasoExitoCard, { "client:load": true, "caso": caso, "index": idx, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/trabajos/CasoExitoCard", "client:component-export": "default", "data-astro-cid-6xzfw3wm": true })}`)} </div> `;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/trabajos/GaleriaTrabajos.astro", void 0);

const prerender = false;
const $$TrabajosPrevios = createComponent(async ($$result, $$props, $$slots) => {
  const trabajos = await getTrabajos();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Casos de \xC9xito y Trabajos Previos | Recuerdos Compartidos", "description": "Galer\xEDa completa de nuestros casos de \xE9xito. Proyectos corporativos, educativos y personalizados realizados con \xE9xito.", "keywords": "casos de \xE9xito, trabajos previos, galer\xEDas de proyectos, regalos corporativos realizados, portafolio de trabajos" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-b from-primary/5 to-transparent pt-24 pb-12"> <div class="container-main"> <div class="text-center mb-4"> <a href="/servicios-empresariales#casos-exito" class="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium mb-6" aria-label="Volver a servicios empresariales">
← Volver a Servicios Empresariales
</a> </div> </div> </section>  <section class="section-padding"> <div class="container-main"> ${renderComponent($$result2, "GaleriaTrabajos", $$GaleriaTrabajos, { "items": trabajos, "showTitle": true })} </div> </section>  <section class="bg-gradient-to-br from-primary to-primary/80 text-white py-16"> <div class="container-main text-center"> <h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
¿Tu empresa es el siguiente caso de éxito?
</h2> <p class="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
Contáctanos para conocer más sobre nuestros servicios personalizados y presupuestos sin costo.
</p> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105">
Solicitar Información
</a> </div> </section> ` })}`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/trabajos-previos.astro", void 0);

const $$file = "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/trabajos-previos.astro";
const $$url = "/trabajos-previos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TrabajosPrevios,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

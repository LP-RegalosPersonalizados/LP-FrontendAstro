import { c as createAstro, d as createComponent, m as maybeRenderHead, f as renderComponent, r as renderTemplate, e as addAttribute } from '../chunks/astro/server_Bxn4HeXv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_D-vvBga1.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_SYlFDj3D.mjs';
import { P as ProductCard, c as getFeaturedProducts, g as getGeneralProducts } from '../chunks/products_EMbHKk61.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

function ProductCarousel({
  products,
  autoplay = true,
  autoplayInterval = 5e3
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  useEffect(() => {
    if (!isAutoplay || products.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [isAutoplay, products.length, autoplayInterval]);
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
    const timeout = setTimeout(() => setIsAutoplay(autoplay), 1e4);
    return () => clearTimeout(timeout);
  };
  if (products.length === 0) return null;
  const currentProduct = products[currentIndex];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 animate-fade-in-up", style: { animationDelay: "0.3s" }, children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-sm overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10", children: /* @__PURE__ */ jsx("div", { className: "aspect-square relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950", children: products.map((product, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute inset-0 transition-opacity duration-600 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`,
        children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/catalogo",
            className: "block w-full h-full",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-full object-cover",
                loading: "eager"
              }
            )
          }
        )
      },
      product.id
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-md text-center px-2", children: /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-base", children: currentProduct.name }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-center", children: products.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => goToSlide(index),
        className: `transition-all duration-300 rounded-full ${index === currentIndex ? "bg-secondary w-3 h-3" : "bg-white/30 hover:bg-white/50 w-2.5 h-2.5"}`,
        "aria-label": `Ir a producto ${index + 1}`,
        "aria-current": index === currentIndex
      },
      index
    )) })
  ] });
}

const $$Astro$2 = createAstro("https://www.recuerdoscompartidos.sarl");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { products } = Astro2.props;
  return renderTemplate`<!-- ============ HERO ============ -->${maybeRenderHead()}<section class="relative min-h-[90vh] bg-primary overflow-hidden flex items-center" aria-label="Sección principal"> <!-- Background decoration --> <div class="absolute inset-0 bg-texture opacity-30" aria-hidden="true"></div> <div class="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" aria-hidden="true"></div> <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true"></div> <div class="container-main relative z-10 py-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"> <!-- Copy --> <div class="animate-fade-in-up"> <span class="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-accent/30"> <span class="w-2 h-2 bg-accent rounded-full inline-block"></span>
Regalos que se recuerdan
</span> <h1 class="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
Regalos Personalizados para
<span class="text-secondary"> Momentos Especiales</span> </h1> <p class="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
Regalos con diseños personalizados. Cada regalo es único, creado especialmente para vos.
</p> <div class="flex flex-wrap gap-4"> <a href="/catalogo" class="btn-accent text-base px-8 py-4" aria-label="Ver catálogo de regalos personalizados">
Quiero un Regalo Único
</a> <a href="/servicios-empresariales" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-base border border-white/20" aria-label="Ver catálogo para empresas">
Para mi Empresa →
</a> </div> </div> <!-- Hero Carousel --> ${renderComponent($$result, "ProductCarousel", ProductCarousel, { "client:load": true, "products": products, "client:component-hydration": "load", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/ProductCarousel", "client:component-export": "default" })} </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://www.recuerdoscompartidos.sarl");
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const { products } = Astro2.props;
  return renderTemplate`<!-- ============ FEATURED PRODUCTS ============ -->${maybeRenderHead()}<section class="section-padding" aria-labelledby="destacados-title"> <div class="container-main"> <div class="flex items-end justify-between mb-10 flex-wrap gap-4"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Productos Destacados", "subtitle": "Los m\xE1s elegidos por nuestros clientes", "align": "left" })} <a href="/catalogo" class="btn-outline text-sm py-2.5 shrink-0">
Ver catálogo completo →
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children"> ${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", ProductCard, { "product": product, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductCard", "client:component-export": "default" })}`)} </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/FeaturedProducts.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-padding bg-white" aria-labelledby="about-title"> <div class="container-main"> <div class="max-w-3xl mx-auto"> <!-- Texto - Contenido SEO Centrado --> <div class="animate-fade-in-up"> <div class="text-center mb-12"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Sobre Recuerdos Compartidos", "subtitle": "Creando momentos que perduran en el tiempo", "accentColor": "primary", "align": "center" })} </div> <div class="space-y-6 text-gray-600 leading-relaxed text-center"> <p>
Somos <strong>Recuerdos Compartidos</strong>, un emprendimiento <strong>Santa Cruz de la Sierra, Bolivia</strong> dedicada a crear <strong>regalos personalizados únicos y memorables</strong>. Nos especializamos en transformar tus momentos especiales en objetos tangibles que perduran en el tiempo.
</p> <p>
Nuestro enfoque va más allá de simplemente vender productos. Cada <strong>regalo personalizado</strong> que creamos lleva consigo la <strong>magia de un momento especial</strong>, diseñado con cariño y dedicación para ti, tu familia o tu empresa. Creemos que los mejores regalos son aquellos que cuentan una historia.
</p> <p>
Nuestra misión es ser tu aliado en momentos importantes: cumpleaños, aniversarios, compromisos, despedidas, regalos corporativos y cualquier ocasión especial que merezca un toque personalizado. Entendemos que cada cliente es único, por eso ofrecemos <strong>soluciones completamente personalizables</strong> adaptadas a tus necesidades específicas.
</p> <p>
Ya seas una persona buscando un regalo memorable para alguien especial, una empresa que necesita <strong>regalos corporativos y merchandise personalizado</strong>, o alguien que quiere crear algo verdaderamente único, estamos aquí para hacerlo realidad. Tu satisfacción es nuestro éxito.
</p> </div> <div class="flex flex-wrap justify-center gap-4 mt-12"> <a href="/faq" class="btn-primary py-3 px-6 text-base">
Preguntas Frecuentes
</a> <a href="/legal" class="btn-outline py-3 px-6 text-base">
Términos y Políticas
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/AboutUs.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-padding bg-secondary/20 " aria-labelledby="elegirnos-id"> <div class="container-main "> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "id": "elegirnos-id", "title": "\xBFPor Qu\xE9 Elegirnos?", "subtitle": "Lo que nos diferencia en el mercado de regalos personalizados" })} <div class="mb-12"> <p class="text-center max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed ">
En <strong>Recuerdos Compartidos</strong>, nos destacamos por ofrecer soluciones integrales de regalos personalizados 
        de alta calidad en Santa Cruz, Bolivia. Nuestro compromiso es transformar tus ideas en realidad con
<strong>profesionalismo, creatividad y atención al detalle</strong>.
</p> </div> <!-- Contenido adicional SEO --> <div class="mt-16 bg-white rounded-2xl p-8 shadow-card"> <h3 class="font-display font-bold text-primary text-2xl mb-6 text-center">
Comprometidos con tu Satisfacción
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3 flex items-center gap-2"> <span class="text-accent text-xl">✓</span>
Proceso Transparente
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Te enviamos vista previa del diseño antes de producir cualquier pedido. Junto con nuestro equipo, revisan cada detalle y ajusta hasta que esté perfecto. Tu aprobación es nuestro punto de partida para la producción final.
</p> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3 flex items-center gap-2"> <span class="text-accent text-xl">✓</span>
Flexibilidad de Pagos
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Aceptamos múltiples formas de pago. Normalmente solicita el 50% para comenzar la producción y 50% al momento de 
            la entrega. Trabajamos con transferencias bancarias y efectivo para tu comodidad.
</p> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3 flex items-center gap-2"> <span class="text-accent text-xl">✓</span>
Experiencia Personalizada
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Nos enfocamos en brindarte una atención cercana y adaptada a tus necesidades, para que disfrutes de una experiencia de compra 
    cómoda, agradable y hecha a tu medida. Cada detalle está pensado para que te sientas bien en todo momento.
</p> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3 flex items-center gap-2"> <span class="text-accent text-xl">✓</span>
Experiencia Local
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Somos un emprendimiento 100% local de Santa Cruz de la Sierra, con profundo conocimiento del mercado boliviano y las necesidades específicas de nuestros clientes. Trabajamos con valores locales y compromiso comunitario.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/WhyChooseUs.astro", void 0);

const $$Astro = createAstro("https://www.recuerdoscompartidos.sarl");
const $$ProductCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCategories;
  const { products } = Astro2.props;
  const getImageOrPlaceholder = (slug) => {
    const categoryMap = {
      "tazas-magicas": { category: "tazas", filter: (name2) => name2.includes("Cer\xE1mica") },
      "tazas-metalicas": { category: "tazas", filter: (name2) => name2.includes("Met\xE1lica") },
      "tazas-ceramicas-personalizadas": { category: "tazas", filter: (name2) => name2.includes("Cer\xE1mica") },
      "fotos": { category: "fotos" },
      "alcancias": { category: "alcancia" },
      "packs": { category: "festivos" },
      "empresas": { category: "festivos" }
    };
    const cat = categorias.find((c) => c.slug === slug);
    const name = cat?.nombre || slug;
    const config = categoryMap[slug];
    if (!config) return { type: "placeholder", name };
    const product = products.find((p) => {
      if (p.category !== config.category) return false;
      return config.filter ? config.filter(p.name) : true;
    });
    if (product?.image) return { type: "image", src: product.image, name };
    return { type: "placeholder", name };
  };
  const categorias = [
    {
      nombre: "Tazas Met\xE1licas",
      descripcion: "Tazas de acero inoxidable con impresi\xF3n personalizada. Ideales para mantener bebidas calientes. Resistentes y duraderas. Excelentes para regalos corporativos y promocionales.",
      slug: "tazas-metalicas"
    },
    {
      nombre: "Fotos Polaroid",
      descripcion: "Fotos estilo Polaroid personalizadas con acabado mate y excelente calidad. Distintos tama\xF1os y formatos para adaptarse a tus necesidades. Im\xE1genes duraderas y de alta definici\xF3n.",
      slug: "fotos"
    },
    {
      nombre: "Tazas Cer\xE1micas",
      descripcion: "Tazas de cer\xE1mica con impresi\xF3n personalizada. Perfectas para caf\xE9, t\xE9 o bebidas fr\xEDas. Regalo ideal para oficina, hogar o empresa.",
      slug: "tazas-ceramicas-personalizadas"
    },
    {
      nombre: "Alcancias Personalizadas",
      descripcion: "Alcancias decorativas con dise\xF1o personalizado. Combinan funcionalidad y est\xE9tica. Perfectas como regalo para ni\xF1os, adultos o como elemento decorativo \xFAnico en el hogar.",
      slug: "alcancias"
    },
    {
      nombre: "Packs Especiales",
      descripcion: "Combina m\xFAltiples productos en packs tem\xE1ticos. Regalos completos y coordinados para ocasiones especiales como cumplea\xF1os, aniversarios o sorpresas corporativas.",
      slug: "packs"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-padding" aria-labelledby="categorias-id"> <div class="container-main"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "id": "categorias-id", "title": "Nuestras Categor\xEDas", "subtitle": "Encontr\xE1 el regalo perfecto entre nuestra variada selecci\xF3n" })} <div class="mb-12"> <p class="text-center max-w-3xl mx-auto text-gray-600 text-base leading-relaxed">
En <strong>Recuerdos Compartidos</strong>, ofrecemos una amplia variedad de productos personalizables para todas las ocasiones. 
        Cada categoría ha sido cuidadosamente seleccionada para garantizar calidad y opciones creativas sin límites. 
        Desde <strong>regalos personalizados para particulares</strong> hasta <strong>soluciones empresariales y merchandise</strong>, tenemos todo lo que necesitas.
</p> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children"> ${categorias.map(({ nombre, descripcion, slug }) => {
    const media = getImageOrPlaceholder(slug);
    return renderTemplate`<a${addAttribute(`/catalogo#${slug}`, "href")} class="group relative overflow-hidden rounded-xl aspect-square shadow-card hover:shadow-card-hover transition-all duration-300"${addAttribute(`Ver categor\xEDa: ${nombre}. ${descripcion}`, "aria-label")}> ${media.type === "image" ? renderTemplate`<img${addAttribute(media.src, "src")}${addAttribute(nombre, "alt")} class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" loading="lazy">` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center"> <span class="text-white font-display font-bold text-lg md:text-xl px-4 text-center leading-snug"> ${nombre} </span> </div>`} <div class="absolute inset-0 bg-primary/60 group-hover:bg-primary/75 transition-colors flex items-center justify-center"> <div class="text-center px-4"> <h3 class="text-white font-display font-semibold text-sm md:text-base leading-snug"> ${nombre} </h3> </div> </div> </a>`;
  })} </div> <!-- Contenido SEO adicional --> <div class="mt-16 bg-secondary/10 rounded-2xl p-8"> <h3 class="font-display font-bold text-primary text-2xl mb-6 text-center">
¿Por Qué Nuestras Categorías?
</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3">Variedad Premium</h4> <p class="text-gray-600 text-sm leading-relaxed">
Nuestras categorías principales cubren todas las necesidades de regalos personalizados. Cada producto 
            es seleccionado por calidad, durabilidad y potencial creativo de personalización.
</p> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3">Opciones Ilimitadas</h4> <p class="text-gray-600 text-sm leading-relaxed">
Dentro de cada categoría, tienes acceso a personalizaciones ilimitadas. Colores, tamaños, diseños, 
            textos: tú eres quien decide cómo será tu regalo perfecto.
</p> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-3">Para Cada Ocasión</h4> <p class="text-gray-600 text-sm leading-relaxed">
Ya sea para cumpleaños, bodas, aniversarios, eventos corporativos o cualquier momento especial, 
            en nuestras categorías encontrarás la solución ideal para celebrar.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/ProductCategories.astro", void 0);

const $$Stats = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    {
      numero: "2+",
      label: "A\xF1os en el Mercado",
      descripcion: "M\xE1s de 2 a\xF1os de experiencia creando regalos personalizados en Santa Cruz de la Sierra",
      icon: "calendar"
    },
    {
      numero: "5+",
      label: "Categor\xEDas de Productos",
      descripcion: "Ofrecemos un portafolio completo de regalos personalizados para todas las ocasiones",
      icon: "cube"
    },
    {
      numero: "500+",
      label: "Productos Entregados",
      descripcion: "Cientos de regalos personalizados satisfaciendo clientes en todo Santa Cruz y Bolivia",
      icon: "gift"
    },
    {
      numero: "24h",
      label: "Respuesta R\xE1pida",
      descripcion: "Atenci\xF3n personalizada disponible por WhatsApp en menos de 24 horas",
      icon: "bolt"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-padding bg-primary text-white" aria-label="Estadísticas de Recuerdos Compartidos"> <div class="container-main"> <div class="mb-12"> <h2 class="font-display font-bold text-3xl md:text-4xl text-center mb-4">
Números que Hablan por Nosotros
</h2> <p class="text-center max-w-2xl mx-auto text-white/70 text-base leading-relaxed">
Desde nuestro inicio, <strong>Recuerdos Compartidos</strong> ha crecido gracias a la confianza de nuestros clientes. 
        Cada número representa historias de regalos que han generado emociones, sonrisas y recuerdos perdurables.
</p> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children"> ${stats.map(({ numero, label, descripcion, icon }) => renderTemplate`<div class="text-center group hover:-translate-y-1 transition-all duration-300"> <div class="flex justify-center mb-3"> ${icon === "calendar" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary" aria-hidden="true"> <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12zM12 15h.008v.008H12zm0 2.25h.008v.008H12zM9.75 15h.008v.008H9.75zm0 2.25h.008v.008H9.75zM7.5 15h.008v.008H7.5zm0 2.25h.008v.008H7.5zm6.75-4.5h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.25-4.5h.008v.008H16.5zm0 2.25h.008v.008H16.5z"></path> </svg>`} ${icon === "cube" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary" aria-hidden="true"> <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6m-3-3v6"></path> </svg>`} ${icon === "gift" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor" class="text-secondary" aria-hidden="true"> <path d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"></path> </svg>`} ${icon === "bolt" && renderTemplate`<svg class="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>`} </div> <div class="font-display font-bold text-4xl md:text-5xl text-secondary mb-2"> ${numero} </div> <h3 class="font-display font-semibold text-white text-sm md:text-base mb-2"> ${label} </h3> <p class="text-white/60 text-xs md:text-sm leading-relaxed"> ${descripcion} </p> </div>`)} </div> <!-- Contenido SEO adicional --> <div class="mt-16 pt-12 border-t border-white/20"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm"> <h3 class="font-display font-semibold text-secondary text-lg mb-3">
✓ Nuestro Crecimiento Continuo
</h3> <p class="text-white/70 text-sm leading-relaxed">
Desde su fundación, <strong>Recuerdos Compartidos</strong> ha experimentado un crecimiento sostenido. 
            Comenzamos como un pequeño emprendimiento local en Santa Cruz de la Sierra y hoy somos referentes en 
            regalos personalizados de calidad premium en Bolivia.
</p> </div> <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm"> <h3 class="font-display font-semibold text-secondary text-lg mb-3">
✓ Compromiso con la Excelencia
</h3> <p class="text-white/70 text-sm leading-relaxed">
Cada producto que sale de nuestro taller en Santa Cruz es resultado de nuestro comprometimiento 
            con la calidad, la creatividad y la satisfacción del cliente. No es solo un número, es la 
            confianza depositada en nosotros.
</p> </div> </div> <div class="mt-8 text-center"> <p class="text-white/80 text-base mb-6">
¿Querés ser parte de nuestra historia? Sumá tu regalo personalizado a nuestros miles de clientes satisfechos.
</p> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" aria-label="Comenzar tu pedido por WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Hacé tu Primer Pedido
</a> </div> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/Stats.astro", void 0);

const $$PersonalizationProcess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-padding" aria-labelledby="proceso-id"> <div class="container-main"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "id": "proceso-id", "title": "C\xF3mo Personalizamos tu Regalo", "subtitle": "Un proceso simple en 5 pasos dise\xF1ado para tu tranquilidad" })} <div class="mb-12"> <p class="text-center max-w-3xl mx-auto text-gray-600 text-base leading-relaxed">
En <strong>Recuerdos Compartidos</strong>, creemos en la transparencia. Por eso nuestro proceso de personalización 
        es simple, claro y controlado por vos. Desde que envías tu foto hasta que recibís tu regalo, te acompañamos en cada paso.
</p> </div> <!-- Timeline visual description para SEO --> <div class="mt-16 bg-secondary/10 rounded-2xl p-8"> <h3 class="font-display font-bold text-primary text-2xl mb-8 text-center">
Tu Viaje de Personalización
</h3> <div class="space-y-6"> <div class="flex gap-6 items-start"> <div class="flex-shrink-0"> <div class="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"> <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13zm12-7V5.825L16.4 7.4L15 6l4-4l4 4l-1.4 1.4L20 5.825V10z"></path> </svg> </div> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-2">
Paso 1: Elige tu Producto y Carga tu Foto
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Primero, explora nuestro catálogo y selecciona el producto que más te guste. ¿Una taza mágica? ¿Llaveros personalizados? Luego, eligí la foto y diseño que querés personalizar. Asegurate de que sea de alta calidad para obtener el mejor resultado.
              Luego envíale a nuestro equipo tu foto de alta calidad. Podés usar múltiples fotos si lo deseas.
</p> </div> </div> <div class="flex gap-6 items-start"> <div class="flex-shrink-0"> <div class="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"> <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path> <path d="M19.708 17.293a1 1 0 0 1 0 1.414l-1.5 1.5a3.12 3.12 0 0 1-4.415 0a1.12 1.12 0 0 0-1.585 0l-.5.5a1.001 1.001 0 0 1-1.415-1.414l.5-.5a3.123 3.123 0 0 1 4.271-.135l.144.135a1.12 1.12 0 0 0 1.585 0l1.5-1.5c.39-.39 1.025-.39 1.415 0m.31-13.31a2.5 2.5 0 0 1 0 3.536L8.444 19.095c-.18.18-.405.312-.65.382l-2.84.807a1 1 0 0 1-1.235-1.235l.807-2.84a1.5 1.5 0 0 1 .382-.65L16.482 3.983a2.5 2.5 0 0 1 3.537 0m-2.12 1.414L6.413 16.88l-.281.99l.988-.282L18.605 6.104a.5.5 0 0 0-.707-.707M6 1a1 1 0 0 1 .946.677l.13.378c.3.879.99 1.57 1.87 1.87l.377.129a1 1 0 0 1 0 1.892l-.378.13c-.879.3-1.57.99-1.87 1.87l-.129.377a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.87-1.87l-.377-.129a1 1 0 0 1 0-1.892l.378-.13c.879-.3 1.57-.99 1.87-1.87l.129-.377l.062-.146A1 1 0 0 1 6 1m0 3.196A5 5 0 0 1 5.196 5q.449.355.804.803q.356-.447.803-.803A5 5 0 0 1 6 4.196"></path> </svg> </div> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-2">
Paso 2-3: Personalización y Revisión de Diseño
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Indica qué texto quieres agregar, el color deseado, tamaño y ubicación exacta. Nuestro equipo de diseño 
              crea una vista previa HD que te enviamos para que revises. ¿Necesita cambios? Hacemos los ajustes que requieras, 
              sin costos adicionales.
</p> </div> </div> <div class="flex gap-6 items-start"> <div class="flex-shrink-0"> <div class="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true"> <path d="M20 10h-8V8h8zm-3 18H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v15h2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4c0 1.1.9 2 2 2h11zm3-13h-8v2h8zm3.4 9.3l-3.7.5l2.7 2.6l-.7 3.6l3.4-1.7l3.2 1.7l-.7-3.6l2.7-2.6l-3.6-.5L25 21z"></path> </svg> </div> </div> <div> <h4 class="font-display font-semibold text-primary text-lg mb-2">
Paso 4-5: Producción de Calidad y Entrega
</h4> <p class="text-gray-600 text-sm leading-relaxed">
Una vez que apruebas el diseño, producimos tu regalo en nuestro taller con tecnología de punta y materiales premium. 
                Luego, lo empacamos cuidadosamente y lo entregamos. Pedís que sea en tu domicilio, oficina o lo retirás 
                personalmente en nuestro local en Santa Cruz.
</p> </div> </div> </div> </div> <div class="text-center mt-12"> <p class="text-gray-600 text-base mb-6 max-w-2xl mx-auto">
¿Querés saber más acerca del proceso? <strong>Nuestro equipo está disponible por WhatsApp</strong> para responder todas tus preguntas 
        y guiarte en cada etapa. Tu satisfacción es nuestro objetivo principal.
</p> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="btn-accent py-3 px-8 text-base inline-flex items-center gap-2" aria-label="Consultar proceso por WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Comenzar Mi Pedido ya
</a> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/PersonalizationProcess.astro", void 0);

const $$WorkPreview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-padding" aria-labelledby="trabajos-id"> <div class="container-main"> <div class="flex justify-center mb-10"> <div> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "id": "trabajos-id", "title": "Trabajos Realizados", "subtitle": "Trabajos  ya realizados para particulares y empresas", "align": "center" })} </div> </div> <!-- Contenido SEO adicional --> <div class="bg-primary text-white rounded-2xl p-8 mt-10"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h3 class="font-display font-bold text-secondary text-2xl mb-4">
Diversidad de Proyectos Realizados
</h3> <p class="text-white/80 text-sm leading-relaxed mb-6">
Desde tazas mágicas personalizadas para regales familiares, hasta álbumes de fotos artesanales, 
            cuadros canvas para decoración especial y merchandise corporativo: nuestro portafolio demuestra 
            nuestra capacidad de adaptarnos a cualquier necesidad de personalización.
</p> <ul class="space-y-2 text-sm text-white/70"> <li>✓ Regalos para particulares en Santa Cruz</li> <li>✓ Packages corporativos para empresas</li> <li>✓ Compromisos, bodas y eventos especiales</li> <li>✓ Personalizaciones creativas y únicas</li> </ul> </div> <div class="flex flex-col justify-between"> <div> <h3 class="font-display font-bold text-secondary text-2xl mb-4">
Historias de Clientes Satisfechos
</h3> <p class="text-white/80 text-sm leading-relaxed mb-6">
Cada trabajo es una historia. Clientes que nos confiaron sus momentos más especiales y recibieron 
              un regalo que superó sus expectativas. Son historias de familias sorprendidas, empleados valorados, 
              y momentos que quedaron grabados gracias a nuestro compromiso con la calidad.
</p> </div> <div class="flex justify-end"> <a href="/servicios-empresariales#casos-exito" class="btn-outline text-sm py-2 px-6 shrink-0 bg-white text-primary hover:bg-secondary hover:text-black" aria-label="Ver casos de éxito y trabajos realizados">
Ver Detalles →
</a> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/WorkPreview.astro", void 0);

const $$TrustBadges = createComponent(($$result, $$props, $$slots) => {
  const garantias = [
    {
      icon: "quality",
      titulo: "Calidad Garantizada",
      descripcion: "Materiales premium revisados. Todos nuestros productos pasan control de calidad antes de entrega."
    },
    {
      icon: "payment",
      titulo: "Pago Seguro",
      descripcion: "Transferencia bancaria o efectivo. 50% para comenzar, 50% al entregar. Proceso transparente y seguro."
    },
    {
      icon: "bolivia",
      emoji: "\u{1F1E7}\u{1F1F4}",
      titulo: "100% Local Santa Cruz",
      descripcion: "Emprendimiento boliviana de Santa Cruz de la Sierra. Atenci\xF3n personalizada, entrega r\xE1pida y compromiso local."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section-padding bg-neutral-light/40" aria-label="Garantías y confianza"> <div class="container-main"> <div class="text-center mb-12"> <h2 class="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
Tu Confianza es Nuestra Prioridad
</h2> <p class="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
En <strong>Recuerdos Compartidos</strong>, entendemos que adquirir un regalo personalizado es confiar en nosotros 
        para un momento importante. Por eso ofrecemos garantías claras y un proceso transparente que te protege.
</p> </div> <div class="flex flex-wrap justify-center gap-6 mb-12"> ${garantias.map(({ icon, emoji, titulo, descripcion }) => renderTemplate`<div class="card p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 hover:shadow-card-hover max-w-[320px] "> <div class="mb-3" aria-hidden="true"> ${icon === "quality" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" style="opacity:1;"><g fill="none"><path fill="url(#SVG3u7HFbEC)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></path><path fill="url(#SVG6gyMbb1m)" d="m15.22 8.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06"></path><defs><linearGradient id="SVG3u7HFbEC" x1="2.714" x2="16.517" y1="5.75" y2="20.09" gradientUnits="userSpaceOnUse"><stop stop-color="#52d17c"></stop><stop offset="1" stop-color="#22918b"></stop></linearGradient><linearGradient id="SVG6gyMbb1m" x1="9.188" x2="10.681" y1="9.413" y2="16.713" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#e3ffd9"></stop></linearGradient></defs></g></svg>`} ${icon === "payment" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="48" height="48" style="opacity:1;"><g fill="none"><path fill="url(#SVGsfI0Rddh)" d="M11 3.5v1h-1v-1a2 2 0 1 0-4 0v1H5v-1a3 3 0 0 1 6 0"></path><path fill="url(#SVGbTQINdJb)" d="M14 6.5A2.5 2.5 0 0 0 11.5 4h-7A2.5 2.5 0 0 0 2 6.5v5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5z"></path><path fill="url(#SVGAWAl77FK)" d="M9 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path><path fill="url(#SVGzKJRbcbh)" d="M14 6.5A2.5 2.5 0 0 0 11.5 4h-7A2.5 2.5 0 0 0 2 6.5v5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5z"></path><path fill="url(#SVGLotQ6dhT)" d="M12.88 7.16c.508.532 1.484 1.379 2.684 1.552a.5.5 0 0 1 .436.482v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.228 0C11.785 15.772 9 14.64 9 11.517V9.194a.5.5 0 0 1 .436-.482c1.2-.173 2.175-1.02 2.683-1.553a.535.535 0 0 1 .762 0"></path><defs><linearGradient id="SVGsfI0Rddh" x1="6.286" x2="10.672" y1="-.264" y2="7.206" gradientUnits="userSpaceOnUse"><stop stop-color="#ffc205"></stop><stop offset="1" stop-color="#fb5937"></stop></linearGradient><linearGradient id="SVGbTQINdJb" x1="14.857" x2="4.404" y1="14.625" y2="4.404" gradientUnits="userSpaceOnUse"><stop stop-color="#ff6f47"></stop><stop offset="1" stop-color="#ffcd0f"></stop></linearGradient><linearGradient id="SVGLotQ6dhT" x1="10.313" x2="17.166" y1="7" y2="14.648" gradientUnits="userSpaceOnUse"><stop stop-color="#62be55"></stop><stop offset="1" stop-color="#1e794a"></stop></linearGradient><radialGradient id="SVGAWAl77FK" cx="0" cy="0" r="1" gradientTransform="matrix(-.99997 -3.5 4.85626 -1.38747 8.5 10)" gradientUnits="userSpaceOnUse"><stop stop-color="#944600"></stop><stop offset="1" stop-color="#cd8e02"></stop></radialGradient><radialGradient id="SVGzKJRbcbh" cx="0" cy="0" r="1" gradientTransform="rotate(157.947 4.768 7.114)scale(5.54881 5.87385)" gradientUnits="userSpaceOnUse"><stop stop-color="#eb4824"></stop><stop offset=".99" stop-color="#eb4824" stop-opacity="0"></stop></radialGradient></defs></g></svg>`} ${icon === "bolivia" && renderTemplate`<span class="text-4xl">${emoji}</span>`} </div> <h3 class="font-display font-semibold text-primary text-lg mb-2"> ${titulo} </h3> <p class="text-gray-500 text-sm leading-relaxed"> ${descripcion} </p> </div>`)} </div> <!-- Contenido SEO adicional - Políticas de confianza --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-white rounded-2xl p-8 shadow-card"> <h3 class="font-display font-bold text-primary text-xl mb-6 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" style="opacity:1;"><g fill="none"><path fill="url(#SVGbChFDdLR)" d="M5 19h15.281S20 19.5 20 20s.281 1 .281 1H6a1 1 0 0 1-1-1z"></path><path fill="url(#SVGHFzDzbfN)" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"></path><path fill="url(#SVGjIsQMb2N)" fill-opacity=".3" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"></path><path fill="url(#SVG3rBAjehL)" fill-opacity=".3" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"></path><path fill="url(#SVGU9r91d0v)" fill-opacity=".3" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"></path><path fill="url(#SVGsPk59cWZ)" d="m10.542 8.608l1.1-2.23a.678.678 0 0 1 1.216 0l1.1 2.23l2.461.357c.556.08.778.764.376 1.157l-1.78 1.735l.42 2.45a.678.678 0 0 1-.984.716l-2.201-1.157l-2.2 1.157a.678.678 0 0 1-.985-.715l.42-2.45l-1.78-1.736a.678.678 0 0 1 .376-1.157z"></path><defs><radialGradient id="SVGjIsQMb2N" cx="0" cy="0" r="1" gradientTransform="matrix(4 3.5 -1.30282 1.48894 12 12.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#171155"></stop><stop offset="1" stop-color="#4a43cb" stop-opacity="0"></stop></radialGradient><radialGradient id="SVG3rBAjehL" cx="0" cy="0" r="1" gradientTransform="matrix(4.4375 -3.75 2.09822 2.4829 14 12)" gradientUnits="userSpaceOnUse"><stop stop-color="#171155"></stop><stop offset="1" stop-color="#4a43cb" stop-opacity="0"></stop></radialGradient><radialGradient id="SVGU9r91d0v" cx="0" cy="0" r="1" gradientTransform="rotate(139.399 3.596 8.72)scale(4.60977 2.09909)" gradientUnits="userSpaceOnUse"><stop stop-color="#171155"></stop><stop offset="1" stop-color="#4a43cb" stop-opacity="0"></stop></radialGradient><linearGradient id="SVGbChFDdLR" x1="12.174" x2="12.174" y1="20.4" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#9deaff"></stop><stop offset=".716" stop-color="#58aafe"></stop></linearGradient><linearGradient id="SVGHFzDzbfN" x1="9.693" x2="12.681" y1="5.742" y2="27.308" gradientUnits="userSpaceOnUse"><stop stop-color="#20ac9d"></stop><stop offset="1" stop-color="#2052cb"></stop></linearGradient><linearGradient id="SVGsPk59cWZ" x1="10.893" x2="13.647" y1="7.655" y2="17.289" gradientUnits="userSpaceOnUse"><stop stop-color="#ffe06b"></stop><stop offset="1" stop-color="#ff835c"></stop></linearGradient></defs></g></svg>
Política de Cambios y Devoluciones
</h3> <ul class="space-y-4 text-sm text-gray-600 leading-relaxed"> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>Vista previa sin costo:</strong> Antes de producir, enviamos un diseño visual para que apruebes. 
              Cambios limitados se hacen sin cargo.
</span> </li> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>Daño en transporte:</strong> Si el producto llega dañado, nos hacemos cargo del reemplazo sin costo.
</span> </li> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>Transparencia total:</strong> Tu satisfacción es nuestro objetivo. Cada paso es comunicado claramente.
</span> </li> </ul> </div> <div class="bg-white rounded-2xl p-8 shadow-card"> <h3 class="font-display font-bold text-primary text-xl mb-6 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"> <g fill="none"> <!-- Tarjeta (ligeramente más grande) --> <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" fill="url(#cardGradient)"></rect> <!-- Banda superior --> <rect x="2.5" y="6.8" width="19" height="2.6" fill="url(#stripeGradient)" opacity="0.95"></rect> <!-- Chip --> <rect x="5" y="11" width="2.6" height="2.1" rx="0.4" fill="#ffd36b"></rect> <rect x="5.3" y="11.3" width="2" height="1.5" rx="0.2" fill="#ffecb3" opacity="0.6"></rect> <!-- Números --> <g fill="#ffffff" opacity="0.85"> <rect x="8.5" y="11.2" width="2.3" height="0.8" rx="0.3"></rect> <rect x="11.3" y="11.2" width="2.3" height="0.8" rx="0.3"></rect> <rect x="14.1" y="11.2" width="2.3" height="0.8" rx="0.3"></rect> <rect x="16.9" y="11.2" width="2.3" height="0.8" rx="0.3"></rect> </g> <!-- Nombre --> <rect x="5" y="15" width="6.5" height="1" rx="0.4" fill="#ffffff" opacity="0.7"></rect> <!-- Fecha --> <rect x="5" y="16.8" width="3.8" height="0.8" rx="0.3" fill="#ffffff" opacity="0.5"></rect> <!-- CHECK (escalado correctamente) --> <g transform="translate(3 3) scale(0.8)"> <path fill="url(#checkBg)" d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11"></path> <path fill="url(#checkIcon)" fill-rule="evenodd" d="M20.854 15.146a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647l3.646-3.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></path> </g> <defs> <!-- Azul más profundo --> <linearGradient id="cardGradient" x1="2.5" y1="4.5" x2="21.5" y2="19.5"> <stop stop-color="#60a5fa"></stop> <stop offset="1" stop-color="#1e3a8a"></stop> </linearGradient> <!-- Banda más fuerte --> <linearGradient id="stripeGradient" x1="2.5" y1="7" x2="21.5" y2="10"> <stop stop-color="#1d4ed8"></stop> <stop offset="1" stop-color="#1e40af"></stop> </linearGradient> <!-- Check --> <linearGradient id="checkBg" x1="12.393" x2="19.984" y1="14.063" y2="21.95"> <stop stop-color="#52d17c"></stop> <stop offset="1" stop-color="#22918b"></stop> </linearGradient> <linearGradient id="checkIcon" x1="15.313" x2="16.45" y1="15.51" y2="21.13"> <stop stop-color="#fff"></stop> <stop offset="1" stop-color="#e3ffd9"></stop> </linearGradient> </defs> </g> </svg>
Proceso de Pagos Seguro
</h3> <ul class="space-y-4 text-sm text-gray-600 leading-relaxed"> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>Plan de pagos:</strong> 50% al confirmar el pedido, 50% al momento de la entrega. Sin sorpresas.
</span> </li> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>Múltiples formas de pago:</strong> Transferencia bancaria, depósito a cuenta o efectivo. Elige la que más cómoda.
</span> </li> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>Comprobantes:</strong> Recibís comprobantes de cada transacción. Registro completo de tu pedido en todo moment.
</span> </li> <li class="flex gap-3"> <span class="text-accent font-bold text-lg shrink-0">✓</span> <span> <strong>No hay cargos ocultos:</strong> El presupuesto inicial es final. Sin sorpresas ni cargos adicionales.
</span> </li> </ul> </div> </div> <!-- CTA final --> <div class="text-center mt-12"> <p class="text-gray-600 text-base mb-6">
¿Más preguntas sobre nuestras garantías? Nuestro equipo está disponible por WhatsApp para resolver todas tus dudas.
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="https://wa.me/59162699702" target="_blank" rel="noopener noreferrer" class="btn-accent py-3 px-8 flex items-center gap-2" aria-label="Preguntar sobre garantías por WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Más Información
</a> <a href="/catalogo" class="btn-outline py-3 px-8">
Explorar Catálogo
</a> </div> </div> </div> </section>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/TrustBadges.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuredProducts = await getFeaturedProducts();
  const allProducts = await getGeneralProducts();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Recuerdos Compartidos - Regalos Personalizados", "description": "Recuerdos compartidos personalizados en Santa Cruz de la Sierra, Bolivia. Tazas m\xE1gicas, \xE1lbumes de fotos y regalos \xFAnicos para momentos especiales.", "keywords": "recuerdos compartidos sc, recuerdos compartidos, regalos personalizados sc, regalos personalizados, regalos bolivia, regalos santa cruz, regalos sc,recuerdos compartidos Santa Cruz, regalos personalizados Bolivia, tazas personalizadas SCZ, \xE1lbumes fotos Santa Cruz de la Sierra, regalos \xFAnicos Bolivia, regalos personalizados Santa Cruz, recuerdos compartidos Bolivia, regalos personalizados Santa Cruz de la Sierra", "author": "Recuerdos Compartidos", "robots": "index, follow", "canonical": "https://www.recuerdoscompartidos.sarl/", "ogImage": "/og-image.png" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "products": featuredProducts })}  ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "products": featuredProducts })}  ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})}  ${renderComponent($$result2, "PersonalizationProcess", $$PersonalizationProcess, {})}  ${renderComponent($$result2, "ProductCategories", $$ProductCategories, { "products": allProducts })}  ${renderComponent($$result2, "Stats", $$Stats, {})}  ${renderComponent($$result2, "WorkPreview", $$WorkPreview, {})}  ${renderComponent($$result2, "TrustBadges", $$TrustBadges, {})}  ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ` })}`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/index.astro", void 0);

const $$file = "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

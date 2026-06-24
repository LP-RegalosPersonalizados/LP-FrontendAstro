import { c as createAstro, d as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_Bxn4HeXv.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.recuerdoscompartidos.sarl");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const {
    title,
    subtitle,
    align = "center",
    accentColor = "primary",
    id
  } = Astro2.props;
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  }[align];
  const accentClass = {
    primary: "text-primary",
    accent: "text-accent"
  }[accentColor];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-2xl ${alignClass} mb-12`, "class")}> <h2${addAttribute(id, "id")}${addAttribute(`font-display font-bold text-3xl md:text-4xl ${accentClass} leading-tight`, "class")}> ${title} </h2> ${subtitle && renderTemplate`<p class="mt-4 text-gray-500 text-lg leading-relaxed"> ${subtitle} </p>`} </div>`;
}, "C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/ui/SectionTitle.astro", void 0);

export { $$SectionTitle as $ };

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_wPIOV04s.mjs';
import { manifest } from './manifest_CKO6fSKw.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/catalogo.astro.mjs');
const _page3 = () => import('./pages/faq.astro.mjs');
const _page4 = () => import('./pages/legal.astro.mjs');
const _page5 = () => import('./pages/producto/_slug_.astro.mjs');
const _page6 = () => import('./pages/servicios-empresariales.astro.mjs');
const _page7 = () => import('./pages/trabajos-previos.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/catalogo.astro", _page2],
    ["src/pages/faq.astro", _page3],
    ["src/pages/legal.astro", _page4],
    ["src/pages/producto/[slug].astro", _page5],
    ["src/pages/servicios-empresariales.astro", _page6],
    ["src/pages/trabajos-previos.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1be770a1-2604-43a9-854a-c9b4fc056861",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

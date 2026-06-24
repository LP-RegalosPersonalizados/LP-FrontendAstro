import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D4rts8vx.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Bxn4HeXv.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"legal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/legal","isIndex":false,"type":"page","pattern":"^\\/legal\\/?$","segments":[[{"content":"legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legal.astro","pathname":"/legal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"mobile-menu-toggle\"),n=document.getElementById(\"mobile-menu\");t?.addEventListener(\"click\",()=>{const e=!n?.classList.contains(\"hidden\");n?.classList.toggle(\"hidden\",e),t.setAttribute(\"aria-expanded\",String(!e)),t.setAttribute(\"aria-label\",e?\"Abrir menú\":\"Cerrar menú\")});\n"}],"styles":[{"type":"external","src":"/_astro/catalogo.C206FjKG.css"}],"routeData":{"route":"/catalogo","isIndex":false,"type":"page","pattern":"^\\/catalogo\\/?$","segments":[[{"content":"catalogo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalogo.astro","pathname":"/catalogo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"mobile-menu-toggle\"),n=document.getElementById(\"mobile-menu\");t?.addEventListener(\"click\",()=>{const e=!n?.classList.contains(\"hidden\");n?.classList.toggle(\"hidden\",e),t.setAttribute(\"aria-expanded\",String(!e)),t.setAttribute(\"aria-label\",e?\"Abrir menú\":\"Cerrar menú\")});\n"}],"styles":[{"type":"external","src":"/_astro/catalogo.C206FjKG.css"}],"routeData":{"route":"/producto/[slug]","isIndex":false,"type":"page","pattern":"^\\/producto\\/([^/]+?)\\/?$","segments":[[{"content":"producto","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/producto/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"mobile-menu-toggle\"),n=document.getElementById(\"mobile-menu\");t?.addEventListener(\"click\",()=>{const e=!n?.classList.contains(\"hidden\");n?.classList.toggle(\"hidden\",e),t.setAttribute(\"aria-expanded\",String(!e)),t.setAttribute(\"aria-label\",e?\"Abrir menú\":\"Cerrar menú\")});\n"}],"styles":[{"type":"external","src":"/_astro/catalogo.C206FjKG.css"},{"type":"inline","content":"div[data-astro-cid-f3lfb2ad][style]{animation:slideInUp .6s ease-out forwards;opacity:0}div[data-astro-cid-3nxv7gbd][style]{animation:slideInUp .6s ease-out forwards;opacity:0}@keyframes slideInStep{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}div[data-astro-cid-7xhkg6q2][class*=grid-cols-5]>div[data-astro-cid-7xhkg6q2]{animation:slideInStep .6s ease-out forwards}div[data-astro-cid-7xhkg6q2][class*=grid-cols-5]>div[data-astro-cid-7xhkg6q2]:nth-child(1){animation-delay:.1s}div[data-astro-cid-7xhkg6q2][class*=grid-cols-5]>div[data-astro-cid-7xhkg6q2]:nth-child(2){animation-delay:.2s}div[data-astro-cid-7xhkg6q2][class*=grid-cols-5]>div[data-astro-cid-7xhkg6q2]:nth-child(3){animation-delay:.3s}div[data-astro-cid-7xhkg6q2][class*=grid-cols-5]>div[data-astro-cid-7xhkg6q2]:nth-child(4){animation-delay:.4s}div[data-astro-cid-7xhkg6q2][class*=grid-cols-5]>div[data-astro-cid-7xhkg6q2]:nth-child(5){animation-delay:.5s}.text-accent[data-astro-cid-mbqqkmu5]{color:#da9928}.text-energy[data-astro-cid-mbqqkmu5]{color:#99d98e}.text-information[data-astro-cid-mbqqkmu5]{color:#4b7ba7}div[data-astro-cid-7crz3xef][style]{animation:slideInUp .6s ease-out forwards;opacity:0}@keyframes slideInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}div[data-astro-cid-lful2ww3][style]{animation:slideInUp .6s ease-out forwards;opacity:0}@keyframes slideInUp{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}details[data-astro-cid-lful2ww3] summary[data-astro-cid-lful2ww3]::-webkit-details-marker{display:none}details[data-astro-cid-lful2ww3][open] summary[data-astro-cid-lful2ww3]{color:#da9928}details[data-astro-cid-lful2ww3][open] p[data-astro-cid-lful2ww3]{animation:slideInUp .3s ease-out}\n"}],"routeData":{"route":"/servicios-empresariales","isIndex":false,"type":"page","pattern":"^\\/servicios-empresariales\\/?$","segments":[[{"content":"servicios-empresariales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios-empresariales.astro","pathname":"/servicios-empresariales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"mobile-menu-toggle\"),n=document.getElementById(\"mobile-menu\");t?.addEventListener(\"click\",()=>{const e=!n?.classList.contains(\"hidden\");n?.classList.toggle(\"hidden\",e),t.setAttribute(\"aria-expanded\",String(!e)),t.setAttribute(\"aria-label\",e?\"Abrir menú\":\"Cerrar menú\")});\n"}],"styles":[{"type":"external","src":"/_astro/catalogo.C206FjKG.css"},{"type":"inline","content":"div[data-astro-cid-6xzfw3wm][style]{animation:slideInUp .6s ease-out forwards;opacity:0}@keyframes slideInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}\n"}],"routeData":{"route":"/trabajos-previos","isIndex":false,"type":"page","pattern":"^\\/trabajos-previos\\/?$","segments":[[{"content":"trabajos-previos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/trabajos-previos.astro","pathname":"/trabajos-previos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"mobile-menu-toggle\"),n=document.getElementById(\"mobile-menu\");t?.addEventListener(\"click\",()=>{const e=!n?.classList.contains(\"hidden\");n?.classList.toggle(\"hidden\",e),t.setAttribute(\"aria-expanded\",String(!e)),t.setAttribute(\"aria-label\",e?\"Abrir menú\":\"Cerrar menú\")});\n"}],"styles":[{"type":"external","src":"/_astro/catalogo.C206FjKG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.recuerdoscompartidos.sarl","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/catalogo.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/legal.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/producto/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/servicios-empresariales.astro",{"propagation":"none","containsHead":true}],["C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/pages/trabajos-previos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/catalogo@_@astro":"pages/catalogo.astro.mjs","\u0000@astro-page:src/pages/producto/[slug]@_@astro":"pages/producto/_slug_.astro.mjs","\u0000@astro-page:src/pages/trabajos-previos@_@astro":"pages/trabajos-previos.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/legal@_@astro":"pages/legal.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/servicios-empresariales@_@astro":"pages/servicios-empresariales.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_CKO6fSKw.mjs","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductGrid":"_astro/ProductGrid.BTxnfze-.js","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductDetail":"_astro/ProductDetail.7LbQR7N6.js","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/trabajos/CasoExitoCard":"_astro/CasoExitoCard.B_33K91B.js","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/home/ProductCarousel":"_astro/ProductCarousel.DRFil58S.js","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/carrito/CartButton":"_astro/CartButton.Bw6EOTET.js","/astro/hoisted.js?q=0":"_astro/hoisted.CES0U2Ox.js","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/carrito/CartPanel":"_astro/CartPanel.BVWk38Yv.js","@astrojs/react/client.js":"_astro/client.D_stodH5.js","C:/Users/ASUS/Desktop/MAINWEB/LandingAstro/src/components/productos/ProductCard":"_astro/ProductCard.BDyFgYEt.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/catalogo.C206FjKG.css","/favicon.ico","/favicon.svg","/og-image.svg","/robots.txt","/site.webmanifest","/_astro/CartButton.Bw6EOTET.js","/_astro/CartPanel.BVWk38Yv.js","/_astro/CasoExitoCard.B_33K91B.js","/_astro/client.D_stodH5.js","/_astro/constants.orJug4ve.js","/_astro/formatters.0199avoe.js","/_astro/index.B52nOzfP.js","/_astro/jsx-runtime.C9eWo9jt.js","/_astro/ProductCard.BDyFgYEt.js","/_astro/ProductCarousel.DRFil58S.js","/_astro/ProductDetail.7LbQR7N6.js","/_astro/ProductGrid.BTxnfze-.js","/_astro/useCart.DV-72cjF.js","/_astro/whatsapp.WDbckT3w.js","/404.html","/faq/index.html","/legal/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"B41VotZGJZMP4wloEWkpBZrFVWON2Ype6B6qQrBsgmo=","experimentalEnvGetSecretEnabled":false});

export { manifest };

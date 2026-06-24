const i="59162699702";function c(e,a){if(a.length===0)return"";const n=a.map(o=>{const t=`- ${o.name} (${o.quantity}u)`,s=o.personalization?` — Personalización: "${o.personalization}"`:"";return t+s}).join(`
`);return e==="general"?`Hola! Me interesa cotizar los siguientes productos:

`+n+`

Quedo atento/a a tu respuesta. Muchas gracias! 😊`:`Hola! Me contacto desde la web para solicitar una cotización al por mayor de:

`+n+`

Quedo atento/a a disponibilidad y precios. Gracias!`}function u(e,a="general"){return a==="business"?`Hola! Me contacto desde la web. Me interesa el producto "${e}" para mi empresa/evento. Quisiera consultar por personalización y precios al por mayor. Gracias!`:`Hola! Me interesa el producto "${e}". ¿Podés darme más información sobre opciones de personalización y precios? Gracias!`}function r(e){return`https://wa.me/${i}?text=${encodeURIComponent(e)}`}function p(e,a){const n=c(e,a);return r(n)}function l(e,a="general"){const n=u(e,a);return r(n)}export{p as a,l as b};

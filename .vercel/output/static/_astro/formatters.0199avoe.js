function r(e,t="BOB"){const n={BOB:"es-BO",USD:"en-US",ARS:"es-AR"};return new Intl.NumberFormat(n[t],{style:"currency",currency:t,minimumFractionDigits:2}).format(e)}export{r as f};

import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_eab83225.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"carrito/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/carrito","type":"page","pattern":"^\\/carrito\\/?$","segments":[[{"content":"carrito","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carrito.astro","pathname":"/carrito","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"cita/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cita","type":"page","pattern":"^\\/cita\\/?$","segments":[[{"content":"cita","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cita.astro","pathname":"/cita","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carrito.c2192280.css"}],"routeData":{"route":"/respuesta-pago","type":"page","pattern":"^\\/respuesta-pago\\/?$","segments":[[{"content":"respuesta-pago","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/respuesta-pago.astro","pathname":"/respuesta-pago","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/pages/carrito.astro",{"propagation":"none","containsHead":true}],["C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/pages/cita.astro",{"propagation":"none","containsHead":true}],["C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/pages/respuesta-pago.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_f0eca682.mjs","\u0000@astrojs-manifest":"manifest_4fbf15fd.mjs","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_e96f1d58.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_8531e07c.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_8b092c78.mjs","\u0000@astro-page:src/pages/respuesta-pago@_@astro":"chunks/respuesta-pago_55d4fbe2.mjs","\u0000@astro-page:src/pages/carrito@_@astro":"chunks/carrito_f691dcc2.mjs","\u0000@astro-page:src/pages/cita@_@astro":"chunks/cita_b028f069.mjs","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Pay":"_astro/Pay.2f1e0b01.js","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Shop":"_astro/Shop.10518e4f.js","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Products":"_astro/Products.20b04e91.js","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/OpenWsDialog.tsx":"_astro/OpenWsDialog.d05a8338.js","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Navbar":"_astro/Navbar.88d041a1.js","C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Slide.tsx":"_astro/Slide.a93704c5.js","@astrojs/react/client.js":"_astro/client.acff2d6b.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/BLUE LIFE.f6414c60.webp","/_astro/PATROCINADORESd.a8d0a052.webp","/_astro/video 4.c5742c9c.mp4","/_astro/5.2db318bd.webp","/_astro/3.92bc2866.webp","/_astro/1.d8f8da18.webp","/_astro/6.ab317d6d.webp","/_astro/2.297de82b.webp","/_astro/benedict_regular-webfont.c150a119.woff","/_astro/icon.daf95c99.webp","/_astro/video 1.ec967e95.mp4","/_astro/logo.134da5a2.svg","/_astro/video 2.535a1791.mp4","/_astro/benedict_regular-webfont.fb788316.woff2","/_astro/video 3.d94b2d86.mp4","/_astro/VIDEO.a4efd3f3.mp4","/_astro/carrito.c2192280.css","/_astro/index.d66ac298.css","/favicon.svg","/_astro/client.acff2d6b.js","/_astro/index.6460afdd.js","/_astro/jsx-runtime.51014c9d.js","/_astro/Navbar.88d041a1.js","/_astro/OpenWsDialog.d05a8338.js","/_astro/Pay.2f1e0b01.js","/_astro/Products.20b04e91.js","/_astro/Shop.10518e4f.js","/_astro/Slide.a93704c5.js","/index.html","/carrito/index.html","/cita/index.html"]});

export { manifest };

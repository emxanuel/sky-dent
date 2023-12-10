import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_4fbf15fd.mjs';

const _page0  = () => import('./chunks/generic_8531e07c.mjs');
const _page1  = () => import('./chunks/index_8b092c78.mjs');
const _page2  = () => import('./chunks/respuesta-pago_55d4fbe2.mjs');
const _page3  = () => import('./chunks/carrito_f691dcc2.mjs');
const _page4  = () => import('./chunks/cita_b028f069.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/respuesta-pago.astro", _page2],["src/pages/carrito.astro", _page3],["src/pages/cita.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

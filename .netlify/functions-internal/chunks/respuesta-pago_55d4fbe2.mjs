export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/respuesta-pago_e90961a7.mjs').then(n => n.r);

export { page };

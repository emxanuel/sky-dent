/* empty css                             */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_eab83225.mjs';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@iconify/tailwind';

const toggleShowElement = (element) => {
  element.classList.toggle("-mt-96");
};
const scrollElement = (id) => {
  let element = document.getElementById(id);
  if (window.location.pathname !== "/") {
    window.location.href = `${window.location.origin}/#${id}`;
    setTimeout(() => {
      element = document.getElementById(id);
      window.scroll({
        top: element.offsetTop + 96
      });
    }, 300);
  } else {
    window.scroll({
      top: element.offsetTop - 96
    });
  }
};
const scrollZero = () => {
  window.scroll({
    top: 0
  });
};

const NavbarMenu = () => {
  return /* @__PURE__ */ jsxs("ul", { className: "flex -mt-96 duration-300 flex-col fixed w-full text-white z-10 bgBlue items-center text-lg gap-2", id: "menu", onClick: () => {
    const element = document.getElementById("menu");
    toggleShowElement(element);
  }, children: [
    /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("home"), children: "Inicio" }) }),
    /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("about"), children: "Quienes Somos" }) }),
    /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("blueLife"), children: "Resp. Soc." }) }),
    /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("a", { href: "/cita", onClick: scrollZero, children: "Crea una Cita" }) }),
    /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("a", { href: "/carrito", onClick: scrollZero, children: "Carrito" }) }),
    /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("contact"), children: "Contacto" }) })
  ] });
};

const logo = new Proxy({"src":"/_astro/logo.134da5a2.svg","width":1080,"height":1080,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const Navbar = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex justify-between px-3 bgBlue text-white py-5 w-full items-center fixed z-20 md:shadow-lg shadow-current h-24 top-0", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("img", { className: "w-32 lg:w-48", src: logo.src, alt: "" }) }),
      /* @__PURE__ */ jsxs("ul", { className: "hidden md:flex gap-10 text-sm lg:text-lg", children: [
        /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("home"), children: "Inicio" }) }),
        /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("about"), children: "Quienes Somos" }) }),
        /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("blueLife"), children: "Resp. Soc." }) }),
        /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("a", { href: "/cita", onClick: scrollZero, children: "Crea una Cita" }) }),
        /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("a", { href: "/carrito", onClick: scrollZero, children: "Carrito" }) }),
        /* @__PURE__ */ jsx("li", { className: "duration-300 hover:scale-110 ", children: /* @__PURE__ */ jsx("button", { onClick: () => scrollElement("contact"), children: "Contacto" }) })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        const element = document.getElementById("menu");
        toggleShowElement(element);
      }, className: "md:hidden", children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBars, className: "text-2xl" }) })
    ] }),
    /* @__PURE__ */ jsx(NavbarMenu, {})
  ] });
};

const $$Astro$3 = createAstro();
const $$GlobalStyles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GlobalStyles;
  return renderTemplate``;
}, "C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/GlobalStyles.astro", void 0);

const offices = [
  {
    id: 1,
    name: "Santo Domingo",
    phone: "(849) 633-8938",
    location: "Av. Núñez de Cáceres 5, Santo Domingo, DN. RD."
  },
  {
    id: 2,
    name: "Punta Cana",
    phone: "(829) 712-3647",
    location: "Edificio Aqua Business Center, Blvd. 1ro. de Noviembre 801, Punta Cana."
  },
  {
    id: 3,
    name: "Santiago",
    phone: "(829) 965-8785",
    location: "Calle Dr. Arturo Grullón No. 20. Módulo 2. Jardines Metropolitanos. Santiago."
  },
  {
    id: 4,
    name: "Constanza",
    phone: "(809) 322-2674",
    location: "Calle Antonio María García No. 76. Constanza, La Vega."
  }
];

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center flex-col items-center w-full py-10 gap-10" id="contact"> <h2 class="text-center text-2xl md:text-5xl py-10 font-bold textBlue">
Contáctanos
</h2> <div class="flex justify-evenly w-full textBlue flex-col md:flex-row items-center md:items-start gap-10 md:gap-10 md:px-5 lg:gap-0 lg:px-0"> ${offices.map((o) => renderTemplate`<div class="w-10/12 md:w-56 text-lg"> <h3 class="font-extrabold text-lg">${o.name}</h3> <p>${o.phone}</p> <p class="text-justify pt-2 md:pt-6">${o.location}</p> </div>`)} </div> <a href="https://instagram.com/skydentrd" target="_blank" class="flex gap-3 items-center text-lg hover:text-neutral-500 textBlue font-bold duration-200"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path> </svg> <span>skydentrd</span> </a> </div>`;
}, "C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Footer.astro", void 0);

const icon = new Proxy({"src":"/_astro/icon.daf95c99.webp","width":283,"height":246,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(icon.src, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative mt-24"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/components/Navbar", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} <link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css"> </body></html>`;
}, "C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$RespuestaPago = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RespuestaPago;
  const response = await Astro2.request.formData();
  const object = {};
  for (const [key, value] of response.entries()) {
    object[key] = value;
  }
  let message;
  const code = object.ResponseCode;
  message = code === "00" ? "Aprobada" : code === "01" ? "Llamar al Banco" : code === "02" ? "Llamar al Banco" : code === "03" ? "Comercio Invalido" : code === "04" ? "Rechazada" : code === "05" ? "Rechazada" : code === "06" ? "Error en Mensaje" : code === "07" ? "Tarjeta Rechazada" : code === "08" ? "Llamar al Banco" : code === "09" ? "Request in progress" : code === "10" ? "Aprobaci\xF3n Parcial" : code === "11" ? "Approved VIP" : code === "12" ? "Transacci\xF3n Invalida" : code === "13" ? "Monto Invalido" : code === "14" ? "Cuenta Invalida" : code === "15" ? "No such issuer" : code === "16" ? "Approved update track 3" : code === "17" ? "Customer cancellation" : code === "18" ? "Customer dispute" : code === "19" ? "Reintentar Transacci\xF3n" : code === "20" ? "No tomo acci\xF3n" : code === "21" ? "No tomo acci\xF3n" : code === "22" ? "Transacci\xF3n No Aprobada" : code === "23" ? "Transacci\xF3n No Aceptada" : code === "24" ? "File update not supported" : code === "25" ? "Unable to locate record" : code === "26" ? "Duplicate record" : code === "27" ? "File update edit error" : code === "28" ? "File update file locked" : code === "30" ? "File update failed" : code === "31" ? "Bin no soportado" : code === "32" ? "Tx. Completada Parcialmente" : code === "33" ? "Tarjeta Expirada" : code === "34" ? "Transacci\xF3n No Aprobada" : code === "35" ? "Transacci\xF3n No Aprobada" : code === "36" ? "Transacci\xF3n No Aprobada" : code === "37" ? "Transacci\xF3n No Aprobada" : code === "38" ? "Transacci\xF3n No Aprobada" : code === "39" ? "Tarjeta Invalida" : code === "40" ? "Funci\xF3n no Soportada" : code === "41" ? "Transacci\xF3n No Aprobada" : code === "42" ? "Cuenta Invalida" : code === "43" ? "Transacci\xF3n No Aprobada" : code === "44" ? "No investment account" : code === "51" ? "Fondos insuficientes" : code === "52" ? "Cuenta Invalidad" : code === "53" ? "Cuenta Invalidad" : code === "54" ? "Tarjeta vencida" : code === "56" ? "Cuenta Invalidad" : code === "57" ? "Transacci\xF3n no permitida" : code === "58" ? "Transacci\xF3n no permitida en terminal" : code === "60" ? "Contactar Adquirente" : code === "61" ? "Excedi\xF3 Limte de Retiro" : code === "62" ? "Tarjeta Restringida" : code === "65" ? "Excedi\xF3 Cantidad de Intento" : code === "66" ? "Contactar Adquirente" : code === "67" ? "Hard capture" : code === "68" ? "Response received too late" : code === "75" ? "Pin excedio Limte de Intentos" : code === "77" ? "Captura de Lote Invalida" : code === "78" ? "Intervenci\xF3n del Banco Requerida" : code === "79" ? "Rechazada" : code === "81" ? "Pin invalido" : code === "82" ? "PIN Required" : code === "85" ? "Llaves no disponibles" : code === "89" ? "Terminal Invalida" : code === "90" ? "Cierre en proceso" : code === "91" ? "Host No Disponible" : code === "92" ? "Error de Ruteo" : code === "94" ? "Duplicate Transaction" : code === "95" ? "Error de Reconciliaci\xF3n" : code === "96" ? "Error de Sistema" : code === "97" ? "Emisor no Disponible" : code === "98" ? "Excede Limete de Efectivo" : code === "99" ? "CVV or CVC Error response" : code === "TF" ? "Solicitud de autenticaci\xF3n rechazada o no completada." : "C\xF3digo no reconocido";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pago realizado | SKYDENT RD" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex md:flex-row items-center justify-around py-10"> <div class="hidden md:flex"> <img src="https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_1280.png" alt="compra-skydent" width="420"> </div> <div class="flex flex-col items-center gap-10 py-10"> <h3 class="text-4xl text-center"> <span class="text-blue-700">Gracias</span> por preferirnos!
</h3> <h2 class="text-3xl font-bold text-center">
Transacción completada
</h2> <p class="text-center text-xl">
Mensaje: <span class="font-bold">${message}</span> </p> <a href="/" class="text-center flex justify-center text-blue-500 hover:text-black duration-200">Seguir navegando en la pagina</a> </div> </div> ` })}`;
}, "C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/pages/respuesta-pago.astro", void 0);

const $$file = "C:/Users/ealg2/OneDrive/Documentos/Programming/Job/Richard Acevedo/skydent/src/pages/respuesta-pago.astro";
const $$url = "/respuesta-pago";

const respuestaPago = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$RespuestaPago,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, icon as i, respuestaPago as r };

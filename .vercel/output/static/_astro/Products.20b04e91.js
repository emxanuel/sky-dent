import{j as t}from"./jsx-runtime.51014c9d.js";import"./index.6460afdd.js";const d=[{id:1,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""},{id:2,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""},{id:3,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""},{id:4,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""},{id:5,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""},{id:6,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""},{id:7,name:"Diseño de sonrisa con resina (20 Resin Veeners)",price:2e3,imageUrl:""}];let i=[],f=(n,u)=>{let l=[],s={get(){return s.lc||s.listen(()=>{})(),s.value},l:u||0,lc:0,listen(r,a){return s.lc=l.push(r,a||s.l)/2,()=>{let e=l.indexOf(r);~e&&(l.splice(e,2),--s.lc)}},notify(r){let a=!i.length;for(let e=0;e<l.length;e+=2)i.push(l[e],l[e+1],s.value,r);if(a){for(let e=0;e<i.length;e+=4){let c;for(let m=e+1;!c&&(m+=4)<i.length;)i[m]<i[e+1]&&(c=i.push(i[e],i[e+1],i[e+2],i[e+3]));c||i[e](i[e+2],i[e+3])}i.length=0}},off(){},set(r){s.value!==r&&(s.value=r,s.notify())},subscribe(r,a){let e=s.listen(r,a);return r(s.value),e},value:n};return s};const o=f([]);function g(n){o.set([...o.get(),n]),localStorage.setItem("car",JSON.stringify(o.get()))}const h=()=>t.jsx("div",{className:"flex flex-wrap gap-3 items-center justify-center",children:d.map(n=>t.jsxs("div",{className:"flex flex-col items-center w-72",children:[t.jsx("h2",{children:n.name}),t.jsx("img",{src:n.imageUrl,alt:`imagen ${n.name}`,className:"w-full aspect-square flex justify-center items-center h-full border border-current"}),t.jsx("p",{children:n.price}),t.jsx("button",{onClick:()=>{g(n)},className:"bg-blue-500 text-white rounded-md px-6 py-1",children:"Agregar al carrito"})]},n.id))});export{h as default};
(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(32),r=a.n(n),i=(a(38),a(4)),o=(a(39),a(12)),l=a(2),j=a(22),b=(a(40),a.p+"static/media/surprised_pikachu.2226ec24.jpg"),p=a(16),d=a.n(p),u=(a(41),a(0));function x(e){var t=e.item,a=e.style;return Object(u.jsxs)("div",{className:d()("pokemon-card",t.types[0].type.name&&"".concat(t.types[0].type.name)),style:a,children:[Object(u.jsxs)("div",{className:"pokemon-id",children:["#",t.id]}),Object(u.jsx)("div",{className:"pokemon-img-wrapper",children:Object(u.jsx)("img",{className:"pokemon-img",src:t.sprites.other["official-artwork"].front_default,alt:t.name})}),Object(u.jsx)("div",{className:"pokemon-name",children:t.name.charAt(0).toUpperCase()+t.name.slice(1)}),Object(u.jsxs)("div",{children:["Type: ",t.types[0].type.name]})]},t.id)}a(43);var m=function(e){var t=e.onChange,a=e.onSubmit;return Object(u.jsxs)("form",{className:"search-bar-wrapper",onSubmit:a,onChange:t,children:[Object(u.jsx)("div",{className:"logo",children:"PokeDex"}),Object(u.jsxs)("div",{className:"searchArea",children:[Object(u.jsx)("label",{htmlFor:"pokemonSearch",children:"Search: "}),Object(u.jsx)("input",{type:"text",id:"pokemonSearch",autoComplete:"off",name:"search"})]})]})},h=function(e){var t=e.imgSrc;return Object(u.jsxs)("div",{className:"isLoading-wrapper",children:[Object(u.jsx)("span",{children:"Loading..."}),Object(u.jsx)("img",{className:"surprised-pikachu",src:t,alt:"Very surprised pikachu"})]})},O=a(10),f=a.n(O),v=a(17),g=a(11),k=a.n(g);var N=function(){var e=Object(c.useContext)(D),t=e.pokemonDataPage,a=e.setPokemonDataPage,s=Boolean(t),n=Object(c.useState)(t),r=Object(i.a)(n,2),l=r[0],p=r[1],d=Object(c.useState)(""),O=Object(i.a)(d,2),g=O[0],N=O[1],y=Object(c.useState)([]),w=Object(i.a)(y,2),S=w[0],C=w[1],P=function(e){var t=e.url,a=e.options,s=void 0===a?{disable:!1}:a,n=Object(c.useState)(null),r=Object(i.a)(n,2),o=r[0],l=r[1],j=Object(c.useState)(!0),b=Object(i.a)(j,2),p=b[0],d=b[1],u=Object(c.useState)(null),x=Object(i.a)(u,2),m=x[0],h=x[1],O=s.disable,g=Object(c.useCallback)(function(){var e=Object(v.a)(f.a.mark((function e(t){var a,c,s,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(t);case 3:return a=e.sent,c=a.data.next,s=a.data.results,e.next=8,Promise.all(s.map((function(e){return k.a.get(e.url)})));case 8:n=e.sent,r=n.map((function(e){return e.data})),l({next:c,results:r}),d(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),d(!1),h(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){O?d(!1):g(t)}),[g,O,t]),{data:o,isLoading:p,hasError:m,refetch:g}}({url:"https://pokeapi.co/api/v2/pokemon/",options:{disable:s}}),F=P.isLoading,L=P.hasError,_=P.data,A=P.refetch;return Object(c.useEffect)((function(){if(_&&s){var e={next:_.next,results:[].concat(Object(j.a)(l.results),Object(j.a)(_.results))};p(e),a(e)}else _&&(p(_),a(_))}),[_]),Object(c.useEffect)((function(){C(null===l||void 0===l?void 0:l.results.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})))}),[g,null===l||void 0===l?void 0:l.results]),F?Object(u.jsx)(h,{imgSrc:b}):(L&&console.log(L),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{onChange:function(e){e.preventDefault(),N(e.target.value)}}),Object(u.jsx)("div",{className:"pokemonList",children:null===S||void 0===S?void 0:S.map((function(e,t){return Object(u.jsx)(o.b,{to:"".concat(e.id),style:{textDecoration:"none",color:"inherit"},children:Object(u.jsx)(x,{item:e,style:{animationDelay:"".concat(.001*t,"s")}})},e.id)}))}),Object(u.jsx)("button",{style:{padding:"10px",marginBottom:"10px"},onClick:function(){return A(l.next)},children:"Load More"})]}))},y=(a(68),a(69),function(e){var t=e.name,a=e.level;return Object(u.jsxs)("div",{className:"skill-bar-wrapper",children:[Object(u.jsx)("div",{className:"skill-bar-name",children:t}),Object(u.jsxs)("div",{className:"skill-bar-body",children:[Object(u.jsx)("div",{className:"skill-bar-body-fil",style:{width:a}}),Object(u.jsx)("div",{className:"skill-bar-body-stat",children:Object(u.jsx)("span",{children:a})})]})]})}),w=(a(70),function(e){var t=e.type;return Object(u.jsx)("span",{className:d()("type",t&&"".concat(t)),children:t})}),S=function(e){var t=e.w,a=e.h,c=e.bcolor,s=e.border,n=e.radius,r=e.margin;return Object(u.jsx)("div",{style:{width:t,height:a,backgroundColor:c,border:s,borderRadius:n,margin:r}})},C=function(){return Object(u.jsxs)("div",{className:"bars-wrapper",children:[Object(u.jsx)("div",{className:"bar"}),Object(u.jsx)("div",{className:"bar"}),Object(u.jsx)("div",{className:"bar"})]})},P=Object(l.f)((function(e){var t=e.match,a=e.history,s=Object(c.useState)({}),n=Object(i.a)(s,2),r=n[0],o=n[1],l=Object(c.useState)(!0),j=Object(i.a)(l,2),p=j[0],d=j[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),O=m[0],g=m[1],N=Object(c.useState)(""),P=Object(i.a)(N,2),D=P[0],F=P[1],L=Object(c.useState)([]),_=Object(i.a)(L,2),A=_[0],E=_[1];return Object(c.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var a,c,s,n,r,i,l,j;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.data;case 5:return c=e.sent,console.log(c),e.next=9,k.a.get(c.species.url);case 9:s=e.sent,n=s.data,r=n.flavor_text_entries[9].flavor_text,i=c.stats,l=c.types.map((function(e){return e.type.name})),console.log(l),j=i.map((function(e){return{type:e.stat.name,level:e.base_stat}})),E(l),g(r),o(c),F(j),d(!1);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id]),p?Object(u.jsx)(h,{imgSrc:b}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"poke-screen__wrapper",children:[Object(u.jsx)("button",{onClick:function(){return a.goBack()},className:"to-home-page",children:"To Home Page"}),Object(u.jsxs)("section",{className:"screen-wrapper",children:[Object(u.jsxs)("div",{className:"screen-leds",children:[Object(u.jsx)(S,{w:"11px",h:"11px",bcolor:"#FA0707",border:"",radius:"50%",margin:"0px 10px "}),Object(u.jsx)(S,{w:"11px",h:"11px",bcolor:"#FA0707",border:"",radius:"50%",margin:"0px 10px "})]}),Object(u.jsxs)("div",{className:"beeboop-leds",children:[Object(u.jsx)(S,{w:"80px",h:"80px",bcolor:"#1198D1",border:"2px solid #fff",radius:"50%",margin:""}),Object(u.jsx)(S,{w:"21px",h:"21px",bcolor:"#FA0707",border:"",radius:"50%",margin:"-10px 6px 0px"}),Object(u.jsx)(S,{w:"21px",h:"21px",bcolor:"#D8DC13",border:"",radius:"50%",margin:"-10px 6px 0px"}),Object(u.jsx)(S,{w:"21px",h:"21px",bcolor:"#25FA02",border:"",radius:"50%",margin:"-10px 6px 0px"})]}),Object(u.jsx)("div",{className:"screen",children:Object(u.jsx)("img",{src:r.sprites.other["official-artwork"].front_default,alt:""})}),Object(u.jsxs)("div",{className:"vents-wrapper",children:[Object(u.jsx)(C,{}),Object(u.jsx)(C,{})]})]}),Object(u.jsxs)("section",{className:"stats-wrapper",children:[Object(u.jsx)("h1",{className:"pokeScreen-name",children:r.name.charAt(0).toUpperCase()+r.name.slice(1)}),Object(u.jsx)("div",{className:"type-tags",children:A.map((function(e){return Object(u.jsx)(w,{type:e},e)}))}),Object(u.jsx)("h3",{className:"pokemonScreen-description",children:O}),Object(u.jsxs)("h3",{className:"pokeScreen-exp",children:["Base Experience: ",r.base_experience]}),Object(u.jsx)("h3",{className:"pokeScreen-height",children:"Height "+(parseInt(r.height)/10).toFixed(1)+"m"}),Object(u.jsxs)("h3",{className:"pokeScreen-weight",children:["Weight: ",parseInt(r.weight)/10," kg "]}),Object(u.jsx)("div",{className:"skill-bars",children:D.map((function(e,t){return Object(u.jsx)(y,{name:e.type,level:e.level},t)}))})]})]})})})),D=Object(c.createContext)();var F=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a={pokemonDataPage:t[0],setPokemonDataPage:t[1]};return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(D.Provider,{value:a,children:Object(u.jsx)(o.a,{basename:"/Pokedex",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(u.jsx)(l.a,{exact:!0,path:"/:id",component:P})]})})})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),L()}},[[71,1,2]]]);
//# sourceMappingURL=main.a6ce4fba.chunk.js.map
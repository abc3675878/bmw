(function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function c(t){return s.p+"js/"+({about:"about",checkout:"checkout",kith:"kith",login:"login",m3:"m3",m4:"m4",member:"member",register:"register"}[t]||t)+"."+{about:"1d06bfb7",checkout:"b2931239",kith:"f0d6f1f0",login:"4fb41fc4",m3:"ceafdc28",m4:"020f1f3c",member:"b2960a9d",register:"15954f7d"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={checkout:1,kith:1,login:1,member:1,register:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({about:"about",checkout:"checkout",kith:"kith",login:"login",m3:"m3",m4:"m4",member:"member",register:"register"}[t]||t)+"."+{about:"31d6cfe0",checkout:"7af6a1c2",kith:"e46d9078",login:"12057501",m3:"31d6cfe0",m4:"31d6cfe0",member:"e771dbc6",register:"00be4833"}[t]+".css",r=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20ce":function(t,e,n){},"31bb":function(t,e,n){t.exports=n.p+"img/logo_bmw_white.1d6c51f7.png"},"3db4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"hidden"},[o("vs-navbar",{attrs:{square:"","center-collapsed":"",fixed:""},scopedSlots:t._u([{key:"left",fn:function(){return[o("box-icon",{staticClass:"menuBtn",attrs:{name:"menu",color:"#ffffff",size:"md"},on:{click:function(e){t.activeSidebar=!t.activeSidebar}}})]},proxy:!0},{key:"right",fn:function(){return[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("b257"),width:"50px"}})]),o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("31bb"),width:"50px"}})])]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}}),o("vs-sidebar",{attrs:{background:"dark",fixed:"",textWhite:"",absolute:"",open:t.activeSidebar},on:{"update:open":function(e){t.activeSidebar=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("vs-row",{attrs:{justify:"flex-end"}},[o("vs-avatar",[o("router-link",{staticClass:"login",attrs:{to:"/login"}},[o("box-icon",{attrs:{name:"user"}})],1)],1)],1)]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[[o("div",{staticClass:"sideBarLogo"},[o("img",{attrs:{src:n("31bb"),width:"50px",height:"50px"}})])],o("vs-sidebar-item",{attrs:{id:"home"}},[o("router-link",{attrs:{to:"/"}},[o("button",{staticStyle:{width:"100%",height:"100%","text-align":"left",background:"transparent","font-weight":"700"},on:{click:t.openLoading}},[t._v(" HOME ")])])],1),o("vs-sidebar-item",{attrs:{id:"kith"}},[o("router-link",{attrs:{to:"/kith"}},[o("button",{staticStyle:{width:"100%",height:"100%","text-align":"left",background:"transparent","font-weight":"700"},on:{click:t.openLoading}},[t._v(" M4 COMPETITION X KITH ")])])],1)],2)],1),o("router-view")],1)},r=[],a={name:"app",data:function(){return{active:"home",activeSidebar:!1}},computed:{user:function(){return this.$store.state.user}},methods:{openLoading:function(){var t=this.$vs.loading({color:"#0066b1"});setTimeout((function(){t.close()}),1e3)}},mounted:function(){var t=this;this.heartbeat(),setInterval((function(){t.heartbeat()}),5e3)}},c=a,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,i,r,!1,null,null,null),l=u.exports,d=(n("b0c0"),n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[n("div",{staticClass:"section",attrs:{id:"page1"}},[n("div",{staticClass:"m4_kith"},[n("div",{staticClass:"group1"},[n("div",{staticClass:"text"},[n("h1",[t._v("M4 COMPETITION X KITH")]),n("p",[t._v("預約試駕")])]),n("div",{staticClass:"btn"},[n("router-link",{attrs:{to:"/kith"}},[n("button",{on:{click:t.openLoading}},[t._v("更多詳情")])]),n("router-link",{attrs:{to:"/checkout"}},[n("button",{staticClass:"orderBtn",on:{click:t.openLoading}},[t._v("立即訂購")])])],1)])])]),n("div",{staticClass:"section",attrs:{id:"page2"}},[n("div",{staticClass:"m4"},[n("div",{staticClass:"group2"},[n("div",{staticClass:"text"},[n("h1",[t._v("THE ALL-NEW M4")]),n("p",[t._v("預約試駕")])]),n("div",{staticClass:"btn"},[n("button",{on:{click:t.openLoading}},[t._v("更多詳情")]),n("button",{staticClass:"orderBtn",on:{click:t.openLoading}},[t._v("立即訂購")])])])])]),n("div",{staticClass:"section",attrs:{id:"page3"}},[n("div",{staticClass:"m3"},[n("div",{staticClass:"group3"},[n("div",{staticClass:"text"},[n("h1",[t._v("THE ALL-NEW M3")]),n("p",[t._v("預約試駕")])]),n("div",{staticClass:"btn"},[n("button",{on:{click:t.openLoading}},[t._v("更多詳情")]),n("button",{staticClass:"orderBtn",on:{click:t.openLoading}},[t._v("立即訂購")])])])])])])],1)},m=[],p={name:"home",methods:{openLoading:function(){var t=this.$vs.loading({color:"#0066b1"});setTimeout((function(){t.close()}),2e3)}}},h=p,b=(n("5856"),n("f553"),Object(s["a"])(h,f,m,!1,null,"764e5b5e",null)),g=b.exports,v=n("2f62"),k=n("0e44");o["default"].use(v["a"]);var y=new v["a"].Store({state:{user:{name:"",id:""}},mutations:{logout:function(t){t.user.name="",t.user.id=""},login:function(t,e){t.user.name=e.account,t.user.id=e._id}},actions:{},modules:{},plugins:[Object(k["a"])()]});o["default"].use(d["a"]);var C=[{path:"/",name:"Home",component:g,meta:{title:"BMW M",login:!1}},{path:"/about",name:"About",meta:{title:"BMW M",login:!1},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/kith",name:"Kith",meta:{title:"M4 COMPETITION X KITH",login:!1},component:function(){return n.e("kith").then(n.bind(null,"9bcb"))}},{path:"/m4",name:"M4",meta:{title:"THE ALL-NEW M4",login:!1},component:function(){return n.e("m4").then(n.bind(null,"9bbe"))}},{path:"/m3",name:"M3",meta:{title:"THE ALL-NEW M3",login:!1},component:function(){return n.e("m3").then(n.bind(null,"f119"))}},{path:"/login",name:"Login",meta:{title:"Login",login:!1},component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",meta:{title:"Register",login:!1},component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/member",name:"Member",meta:{login:!1},component:function(){return n.e("member").then(n.bind(null,"80d2"))}},{path:"/checkout",name:"Checkout",meta:{title:"Checkout Page",login:!1},component:function(){return n.e("checkout").then(n.bind(null,"7cb4"))}}],_=new d["a"]({routes:C});_.beforeEach((function(t,e,n){t.meta.login&&!StorageEvent.state.user.id?n("/login"):n()})),_.afterEach((function(t){var e="";e="Member"===t.name?y.state.user.name+" | Member Page":t.meta.title,document.title=e}));var w=_,x=n("bc3a"),E=n.n(x),L=n("2106"),M=n.n(L),T=(n("3db4"),n("3357"),n("574d")),O=n.n(T),S=(n("04f2"),n("5886")),j=(n("4413"),n("ecee")),P=n("ad3d"),N=n("c074"),A=n("f2d1");j["c"].add(N["a"],A["a"]),o["default"].component("font-awesome-icon",P["a"]),o["default"].config.productionTip=!1,E.a.defaults.withCredentials=!0,o["default"].use(M.a,E.a),o["default"].use(S["default"]),o["default"].use(O.a),new o["default"]({router:w,store:y,render:function(t){return t(l)}}).$mount("#app")},5856:function(t,e,n){"use strict";n("9c1c")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},"9c1c":function(t,e,n){},b257:function(t,e,n){t.exports=n.p+"img/logo_m.1623eb51.png"},f553:function(t,e,n){"use strict";n("20ce")}});
//# sourceMappingURL=app.99ba2686.js.map
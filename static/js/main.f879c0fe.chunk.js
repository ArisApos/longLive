(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),l=n.n(c),i=n(1),s=n(5),o=function(e){var t=function(t){return{type:e,payload:t}};return t.type=e,t},u=o("CHANGE_PRODUCT_COINTAINER"),m=o("KEY_UP"),p=n(7),d=n(6),g=n.n(d),f=[{name:"Fire-Water",type:"Downhill",brand:"Sector 9",price:"180",imageSrc:"./images/downhill1.png"},{name:"Wavey Sunset",type:"Downhill",brand:"Sector 9",price:"170",imageSrc:"./images/downhill2.png"},{name:"Nelly's",type:"Downhill",brand:"Arbor",price:"220",imageSrc:"./images/downhill3.png"},{name:"Rasta Love",type:"Downhill",brand:"Arbor",price:"170",imageSrc:"./images/downhill4.png"},{name:"EyeBall",type:"Fishtail",brand:"Sector 9",price:"160",imageSrc:"./images/fishtail1.png"},{name:"Lollipop",type:"Fishtail",brand:"Naked",price:"130",imageSrc:"./images/fishtail2.png"},{name:"Mandala",type:"Fishtail",brand:"Sector 9",price:"150",imageSrc:"./images/fishtail3.png"},{name:"Fish and Crabs",type:"Fishtail",brand:"Madrid",price:"160",imageSrc:"./images/fishtail4.png"},{name:"California Love",type:"Pintail",brand:"Sector 9",price:"180",imageSrc:"./images/pintail1.png"},{name:"Bob Marley",type:"Pintail",brand:"Sector 9",price:"170",imageSrc:"./images/pintail2.png"},{name:"Fujifilm Instax",type:"Pintail",brand:"Roxy",price:"160",imageSrc:"./images/pintail3.png"},{name:"Oceanology",type:"Pintail",brand:"Arbor",price:"230",imageSrc:"./images/pintail4.png"}],h=f.reduce(function(e,t){var n=t.type,a=t.brand,r=t.price;return{typesAll:[].concat(Object(p.a)(e.typesAll),[n]),brandsAll:[].concat(Object(p.a)(e.brandsAll),[a]),pricesAll:[].concat(Object(p.a)(e.pricesAll),[r])}},{typesAll:[],brandsAll:[],pricesAll:[]}),y=h.typesAll,E=h.brandsAll,b=h.pricesAll,v=g.a.uniq(y),S=g.a.uniq(E),N=(g.a.uniq(b),g.a.shuffle(f)),w=N.map(function(e){var t=e.name,n=e.type,a=e.brand,r=t.toLowerCase().split(/[\s-]+/);return r.push(n.toLowerCase()),r.push(a.toLowerCase()),r}),O=function(e,t,n,a){var r=a.target.value.toLowerCase().split(" ");if(!a.target.value.length)return e(N),void n({suggestedProducts:[],input:[],filters:t});var c=N.filter(function(e,t){return w[t].find(function(e){return r.find(function(t){return t===e})||e.includes(r)})}),l=P(t,c);n({suggestedProducts:l,input:r,filters:t}),"Enter"===a.key&&e(l)},P=function(e,t){return e.reduce(function(e,t){var n=Object.entries(t)[0][0],a=Object.entries(t)[0][1];return e.filter(function(e){var t=e.type,r=e.brand;return"type"===n?t===a:r===a})},t)},A=Object(i.b)(function(e){var t=e.suggestedProducts;return{suggestedProducts:t.suggestedProducts,input:t.input,filters:t.filters}},function(e){return{onEnterClick:function(t){return e(u(t))},onKeyUpD:function(t){return e(m(t))}}})(function(e){var t=e.onEnterClick,n=e.suggestedProducts,c=(e.input,e.filters),l=e.onKeyUpD,i=Object(a.useState)(!0),o=Object(s.a)(i,2),u=o[0],m=o[1],p=n.length>0?r.a.createElement("div",{className:"totalResults"},"Total results: ",n.length," "):null,d=n.length>0&&u?r.a.createElement("div",{className:"searchingResults"},n.map(function(e,t){var n=e.name,a=e.type,c=e.brand;return r.a.createElement("div",{key:t,className:"searchingResu;lt"}," ".concat(n)," ".concat(a)," ".concat(c))}),p):null;return r.a.createElement("div",{className:"center-search"},r.a.createElement("input",{type:"text",placeholder:"Search...",className:"search-bar",onKeyUp:function(e){"Enter"===e.key?m(!1):u||m(!0),O(t,c,l,e)}}),d)}),j=function(e){var t=e.name,n=e.type,c=e.brand,l=e.price,i=e.imageSrc,o=Object(a.useState)(!1),u=Object(s.a)(o,2),m=u[0],p=u[1],d=Object(a.useState)(!1),g=Object(s.a)(d,2),f=g[0],h=g[1];return r.a.createElement("div",{className:"center-text"},r.a.createElement("div",{className:"productName"},t),r.a.createElement("img",{onLoad:function(){return p(!0)},src:i,style:{display:m?"unset":"none"},alt:"img",height:"250",width:"170",className:"center"}),r.a.createElement("img",{onLoad:function(){return h(!0)},src:i.replace("images","images/lowQuality"),style:{display:f&&!m?"unset":"none"},alt:"img",height:"250",width:"170",className:"center"}),r.a.createElement("div",null,"Brand: ",c),r.a.createElement("div",null,"Style: ",n),r.a.createElement("div",null,"Price: \u20ac",l,".00"),r.a.createElement("span",{class:"progressBar",style:{width:m?"100%":f?"30%":"10%"}}))},C=function(e,t,n){e=N;var a=n.target.value;"brands"!==a&&"types"!==a?t(e.filter(function(e){var t=e.brand,r=e.type;return"brands"===n.target.options[0].value?t===a:r===a})):t(N)},_=Object(i.b)(function(e){return{searchedProducts:e.searchedProducts}},function(e){return{onSelectOption:function(t){return e(u(t))}}})(function(e){var t=e.searchedProducts,n=e.onSelectOption;return r.a.createElement("aside",{className:"mainOptions"},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"totalProducts"},N.length," total products"),r.a.createElement("p",null,"BY BRAND"),r.a.createElement("select",{onChange:function(e){C(t,n,e)}},r.a.createElement("option",{value:"brands"},"--Choose a brand--"),S.map(function(e){return r.a.createElement("option",{value:e},e)}),";"),r.a.createElement("p",null,"BY STYLE"),r.a.createElement("select",{onChange:function(e){C(t,n,e)}},r.a.createElement("option",{value:"types"},"--Choose a style--"),v.map(function(e){return r.a.createElement("option",{value:e},e)}),";")))}),D=function(e){return 0===e.length?r.a.createElement("div",null,"Sorry nothing was found in our super duper shop"):e.map(function(e,t){var n=e.name,a=e.type,c=e.brand,l=e.price,i=e.imageSrc;return r.a.createElement("li",{key:t,className:"product"},r.a.createElement(j,{name:n,type:a,brand:c,price:l,imageSrc:i}))})},L=Object(i.b)(function(e){return{searchedProducts:e.searchedProducts}},null)(function(e){var t=e.searchedProducts;return r.a.createElement("div",{className:"homePage"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:"./images/logo.png",alt:"logo",className:"logo"}),r.a.createElement("nav",null),r.a.createElement(A,null)),r.a.createElement("main",{className:"mainContent"},r.a.createElement(_,null),r.a.createElement("div",{className:"product-container"},r.a.createElement("ul",{className:"product-list"},D(t)))))}),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null))},k=n(4),B=(n(27),Object(k.b)({searchedProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.type:return t.payload;default:return e}},suggestedProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{suggestedProducts:[],input:[],filters:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.type:return t.payload;default:return e}}})),F=Object(k.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(i.a,{store:F},r.a.createElement(R,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f879c0fe.chunk.js.map
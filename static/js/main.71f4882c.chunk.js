(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),l=n(1),o=function(e){var t=function(t){return{type:e,payload:t}};return t.type=e,t},s=o("CHANGE_PRODUCT_COINTAINER"),u=o("KEY_UP"),p=n(6),m=n(5),d=n.n(m),g=[{name:"Fire-Water",type:"Downhill",brand:"Sector 9",price:"180",imageSrc:"./images/downhill1.png"},{name:"Wavey Sunset",type:"Downhill",brand:"Sector 9",price:"170",imageSrc:"./images/downhill2.png"},{name:"Nelly's",type:"Downhill",brand:"Arbor",price:"220",imageSrc:"./images/downhill3.png"},{name:"Rasta Love",type:"Downhill",brand:"Arbor",price:"170",imageSrc:"./images/downhill4.png"},{name:"EyeBall",type:"Fishtail",brand:"Sector 9",price:"160",imageSrc:"./images/fishtail1.png"},{name:"Lollipop",type:"Fishtail",brand:"Naked",price:"130",imageSrc:"./images/fishtail2.png"},{name:"Mandala",type:"Fishtail",brand:"Sector 9",price:"150",imageSrc:"./images/fishtail3.png"},{name:"Fish and Crabs",type:"Fishtail",brand:"Madrid",price:"160",imageSrc:"./images/fishtail4.png"},{name:"California Love",type:"Pintail",brand:"Sector 9",price:"180",imageSrc:"./images/pintail1.png"},{name:"Bob Marley",type:"Pintail",brand:"Sector 9",price:"170",imageSrc:"./images/pintail2.png"},{name:"Fujifilm Instax",type:"Pintail",brand:"Roxy",price:"160",imageSrc:"./images/pintail3.png"},{name:"Oceanology",type:"Pintail",brand:"Arbor",price:"230",imageSrc:"./images/pintail4.png"}],f=g.reduce(function(e,t){var n=t.type,a=t.brand,r=t.price;return{typesAll:[].concat(Object(p.a)(e.typesAll),[n]),brandsAll:[].concat(Object(p.a)(e.brandsAll),[a]),pricesAll:[].concat(Object(p.a)(e.pricesAll),[r])}},{typesAll:[],brandsAll:[],pricesAll:[]}),h=f.typesAll,y=f.brandsAll,E=f.pricesAll,b=d.a.uniq(h),v=d.a.uniq(y),S=(d.a.uniq(E),d.a.shuffle(g)),w=S.map(function(e){var t=e.name,n=e.type,a=e.brand,r=t.toLowerCase().split(/[\s-]+/);return r.push(n.toLowerCase()),r.push(a.toLowerCase()),r}),N=function(e,t,n,a){var r=a.target.value.toLowerCase().split(" ");if(console.log(r),!a.target.value.length)return e(S),void n({suggestedProducts:[],input:[],filters:t});var c=S.filter(function(e,t){return w[t].find(function(e){return r.find(function(t){return t===e})||e.includes(r)})}),i=P(t,c);n({suggestedProducts:i,input:r,filters:t}),"Enter"===a.key&&e(i)},P=function(e,t){return e.reduce(function(e,t){var n=Object.entries(t)[0][0],a=Object.entries(t)[0][1];return e.filter(function(e){var t=e.type,r=e.brand;return"type"===n?t===a:r===a})},t)},O=Object(l.b)(function(e){var t=e.suggestedProducts;return{suggestedProducts:t.suggestedProducts,input:t.input,filters:t.filters}},function(e){return{onEnterClick:function(t){return e(s(t))},onKeyUpD:function(t){return e(u(t))}}})(function(e){var t=e.onEnterClick,n=e.suggestedProducts,a=(e.input,e.filters),c=e.onKeyUpD;return r.a.createElement("div",{className:"center-search"},r.a.createElement("input",{type:"text",placeholder:"Search...",className:"search-bar",onKeyUp:function(e){return N(t,a,c,e)}}),n.map(function(e,t){var n=e.name,a=e.type,c=e.brand;return r.a.createElement("div",{key:t,className:"searching-result"}," ".concat(n)," ".concat(a)," ".concat(c))}))}),A=function(e){var t=e.name,n=e.type,a=e.brand,c=e.price,i=e.imageSrc;return r.a.createElement("div",{className:"center-text"},r.a.createElement("h2",null,t),r.a.createElement("img",{src:i,height:"250",width:"170",className:"center"}),r.a.createElement("h4",null,"Brand: ",a),r.a.createElement("h4",null,"Style: ",n),r.a.createElement("h4",null,"Price: \u20ac",c,".00"))},C=function(e,t,n){e=S;var a=n.target.value;"brands"!==a&&"types"!==a?t(e.filter(function(e){var t=e.brand,r=e.type;return"brands"===n.target.options[0].value?t===a:r===a})):t(S)},_=Object(l.b)(function(e){return{searchedProducts:e.searchedProducts}},function(e){return{onSelectOption:function(t){return e(s(t))}}})(function(e){var t=e.searchedProducts,n=e.onSelectOption;return r.a.createElement("aside",{className:"mainOptions"},r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"totalProducts"},S.length," total products"),r.a.createElement("p",null,"BY BRAND"),r.a.createElement("select",{onChange:function(e){C(t,n,e)}},r.a.createElement("option",{value:"brands"},"--Choose a brand--"),v.map(function(e){return r.a.createElement("option",{value:e},e)}),";"),r.a.createElement("p",null,"BY STYLE"),r.a.createElement("select",{onChange:function(e){C(t,n,e)}},r.a.createElement("option",{value:"types"},"--Choose a style--"),b.map(function(e){return r.a.createElement("option",{value:e},e)}),";")))}),D=function(e){return 0===e.length?r.a.createElement("div",null,"Sorry nothing was found in our super duper shop"):e.map(function(e,t){var n=e.name,a=e.type,c=e.brand,i=e.price,l=e.imageSrc;return r.a.createElement("li",{key:t,className:"product"},r.a.createElement(A,{name:n,type:a,brand:c,price:i,imageSrc:l}))})},j=Object(l.b)(function(e){return{searchedProducts:e.searchedProducts}},null)(function(e){var t=e.searchedProducts;return r.a.createElement("div",{className:"homePage"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:"./images/logo.png",alt:"logo",className:"logo"}),r.a.createElement("nav",null),r.a.createElement(O,null)),r.a.createElement("main",{className:"mainContent"},r.a.createElement(_,null),r.a.createElement("div",{className:"product-container"},r.a.createElement("ul",{className:"product-list"},D(t)))))}),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))},k=n(4),F=(n(24),Object(k.b)({searchedProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.type:return t.payload;default:return e}},suggestedProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{suggestedProducts:[],input:[],filters:[{type:"Pintail"},{brand:"Arbor"}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.type:return t.payload;default:return e}}})),B=Object(k.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(L,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.71f4882c.chunk.js.map
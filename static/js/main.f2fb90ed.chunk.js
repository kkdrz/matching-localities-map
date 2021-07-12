(this["webpackJsonpmatching-localities-map"]=this["webpackJsonpmatching-localities-map"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(26),o=n.n(a),i=(n(34),n(9)),s=(n(35),n(15)),l=n(0);var j=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),j=o[0],d=o[1],h=Object(c.useState)(!1),b=Object(i.a)(h,2),p=b[0],u=b[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),O=m[0],g=m[1],f=Object(c.useState)(!1),z=Object(i.a)(f,2),w=z[0],k=z[1],v=Object(c.useState)(""),y=Object(i.a)(v,2),L=y[0],N=y[1];function _(e){return!!e&&e.length>1}return Object(c.useEffect)((function(){k(!0),fetch("/matching-localities-map/static/cities.json").then((function(e){return e.json()})).then((function(e){r(e),k(!1),console.log("JSON file loaded")}))}),[]),Object(c.useEffect)((function(){k(!0);var e=setTimeout((function(){if(!_(O))return d([]),void k(!1);var e=function(e){return e.name.toLowerCase().includes(O)};if(p){var t=new RegExp(O,"i");e=function(e){return t.test(e.name.toLowerCase())}}var c=n.filter(e);console.log("Found "+c.length+" places"),k(!1),d(c)}),1e3);return function(){k(!1),clearTimeout(e)}}),[n,O,p]),Object(l.jsxs)("div",{className:"flex-col",children:[Object(l.jsxs)("div",{className:"flex-row",style:{padding:"10px"},children:[Object(l.jsxs)("label",{children:["Wzorzec:",Object(l.jsx)("input",{style:{marginLeft:"5px"},type:"text",minLength:2,value:O,onChange:function(e){return g(e.target.value.toLowerCase())}})]}),Object(l.jsxs)("label",{style:{marginLeft:"10px"},children:[Object(l.jsx)("input",{type:"checkbox",value:p,onClick:function(e){return u(e.target.value)}}),"Regex"]}),Object(l.jsx)("span",{hidden:!!L,style:{marginLeft:"auto"},children:Object(l.jsx)("i",{children:"Kliknij na kropk\u0119, aby sprawdzi\u0107 nazw\u0119"})}),Object(l.jsx)("span",{hidden:!L,style:{marginLeft:"auto"},children:L})]}),Object(l.jsxs)("div",{className:"flex-col",style:{textAlign:"center"},children:[Object(l.jsx)("div",{hidden:!w,children:Object(l.jsx)("h3",{children:"\u0141adowanie..."})}),Object(l.jsx)("div",{hidden:_(O)||w,children:Object(l.jsx)("h3",{children:"Podany wzorzec jest za kr\xf3tki"})}),Object(l.jsx)("div",{hidden:j.length<4e4,children:Object(l.jsxs)("h3",{children:["Podany wzorzec pasuje do zbyt du\u017cej liczby miast (",j.length,")",Object(l.jsx)("br",{}),"- wywali przegl\u0105dark\u0119"]})}),Object(l.jsxs)("div",{hidden:w||!_(O),children:[Object(l.jsxs)("h3",{children:[O," ",p?"(regex)":""]}),Object(l.jsxs)("h3",{children:[" Znaleziono "+j.length+(1===j.length?" miejscowo\u015b\u0107.":" miejscowo\u015bci.")," "]})]})]}),Object(l.jsx)("div",{className:"map flex-col flex-grow",hidden:w,children:Object(l.jsx)(s.ComposableMap,{className:"flex-col flex-grow",height:300,children:Object(l.jsxs)(s.ZoomableGroup,{minZoom:17,maxZoom:17,zoom:17,center:[19.1343786,51.9189046],children:[Object(l.jsx)(s.Geographies,{geography:"/matching-localities-map/static/gadm36_POL_1.json",children:function(e){return e.geographies.map((function(e){return Object(l.jsx)(s.Geography,{geography:e,fill:"#ddd"},e.rsmKey)}))}}),j.length<4e4&&j.map((function(e,t){return Object(l.jsx)(s.Marker,{coordinates:[e.Y,e.X],fill:"#777",children:Object(l.jsx)("circle",{className:"marker",r:.1,fill:"#F53",onClick:function(){return N(e.name)}})},t)}))]})})})]})},d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("p",{children:["Je\u017celi aplikacja si\u0119 zaci\u0119\u0142a, oznacza to, \u017ce znaleziono bardzo du\u017co miejscowo\u015bci i renderowanie tego mo\u017ce troch\u0119 potrwa\u0107.",Object(l.jsx)("br",{}),"Mo\u017cesz poczeka\u0107 lub spr\xf3bowa\u0107 innego wzorca ;)"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://kdrozd.pl/map-of-localities-matching-the-pattern/",children:"Tutaj"})," ","znajdziesz wpis na blogu na temat tej aplikacji."]}),Object(l.jsxs)("p",{children:["Dane miejscowo\u015bci pochodz\u0105 z"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://www.geoportal.gov.pl/dane/panstwowy-rejestr-nazw-geograficznych",children:"PRNG"}),". ","Model mapy pobrano z"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://gadm.org/download_country_v3.html",children:"GADM"})," ","i wyrenderowano za pomoc\u0105"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/zcreativelabs/react-simple-maps",children:"react-simple-maps"}),"."]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Konrad Drozd 2021"})," -"," ",Object(l.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://kdrozd.pl",children:"kdrozd.pl"})]})]})})};o.a.render(Object(l.jsxs)(r.a.StrictMode,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{})]}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f2fb90ed.chunk.js.map
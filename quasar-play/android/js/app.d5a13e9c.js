(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{"7oll":function(t,e,i){},84:function(t,e,i){t.exports=i("JJXq")},"8g7x":function(t,e){},"9qRz":function(t,e){},Hl11:function(t,e,i){},JJXq:function(t,e,i){"use strict";i.r(e);var a={};i.d(a,"updateDrawerState",function(){return f}),i.d(a,"updatePageMeta",function(){return v});var o={};i.d(o,"view",function(){return w});var s={};i.d(s,"setHeader",function(){return D}),i.d(s,"setHeaderReveal",function(){return z}),i.d(s,"setFooter",function(){return L}),i.d(s,"setFooterReveal",function(){return T}),i.d(s,"setLeft",function(){return O}),i.d(s,"setLeftOverlay",function(){return x}),i.d(s,"setLeftBehavior",function(){return Y}),i.d(s,"setLeftBreakpoint",function(){return S}),i.d(s,"setRight",function(){return Z}),i.d(s,"setRightOverlay",function(){return k}),i.d(s,"setRightBehavior",function(){return G}),i.d(s,"setRightBreakpoint",function(){return U}),i.d(s,"setTopLeft",function(){return R}),i.d(s,"setTopCenter",function(){return E}),i.d(s,"setTopRight",function(){return B}),i.d(s,"setMiddleLeft",function(){return W}),i.d(s,"setMiddleCenter",function(){return _}),i.d(s,"setMiddleRight",function(){return P}),i.d(s,"setBottomLeft",function(){return X}),i.d(s,"setBottomCenter",function(){return H}),i.d(s,"setBottomRight",function(){return J}),i.d(s,"setScrolling",function(){return Q});var n=i("MVZn"),c=i.n(n),l=(i("/s8p"),i("Kw5r")),r=i("5/OS");l["a"].use(r["default"],{components:r,directives:r,plugins:r});i("QBu7"),i("flf9"),i("s/Tp"),i("QQ0w"),i("OKqc"),i("KCao"),i("Hl11"),i("fm0S");var g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-app"},[i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in",duration:300},on:{leave:t.resetScroll}},[i("router-view")],1)],1)},u=[];g._withStripped=!0;var I={name:"App",methods:{resetScroll:function(t,e){document.documentElement.scrollTop=0,document.body.scrollTop=0,e()}},created:function(){this.$q.addressbarColor.set()}},h=I,p=(i("ZL7j"),i("crz2")),M=Object(p["a"])(h,g,u,!1,null,null,null),d=M.exports,C=i("jE9Z"),m=i("L2JU"),A={drawerState:!0,pageMeta:{}},b=i("9qRz"),f=function(t,e){t.drawerState=e},v=function(t,e){t.pageMeta=c()({title:"",hash:"",icon:"",iframeTabs:!1,backRoute:"/showcase",tabs:[]},e)},j=i("ey39"),y={namespaced:!0,state:A,getters:b,mutations:a,actions:j},N={header:!0,footer:!0,left:!0,right:!0,headerReveal:!1,footerReveal:!1,leftOverlay:!1,rightOverlay:!1,leftBehavior:"default",rightBehavior:"default",leftBreakpoint:992,rightBreakpoint:992,topleft:"h",topcenter:"H",topright:"h",middleleft:"L",middlecenter:"p",middleright:"r",bottomleft:"l",bottomcenter:"F",bottomright:"f",scrolling:!0},w=function(t){var e="".concat(t.topleft).concat(t.topcenter).concat(t.topright),i="".concat(t.middleleft).concat(t.middlecenter).concat(t.middleright),a="".concat(t.bottomleft).concat(t.bottomcenter).concat(t.bottomright);return"".concat(e," ").concat(i," ").concat(a)},D=function(t,e){t.header=e},z=function(t,e){t.headerReveal=e},L=function(t,e){t.footer=e},T=function(t,e){t.footerReveal=e},O=function(t,e){t.left=e},x=function(t,e){t.leftOverlay=e},Y=function(t,e){t.leftBehavior=e},S=function(t,e){t.leftBreakpoint=e},Z=function(t,e){t.right=e},k=function(t,e){t.rightOverlay=e},G=function(t,e){t.rightBehavior=e},U=function(t,e){t.rightBreakpoint=e},R=function(t,e){t.topleft=e},E=function(t,e){t.topcenter=e},B=function(t,e){t.topright=e},W=function(t,e){t.middleleft=e},_=function(t,e){t.middleleft=e},P=function(t,e){t.middleright=e},X=function(t,e){t.bottomleft=e},H=function(t,e){t.bottomcenter=e},J=function(t,e){t.bottomright=e},Q=function(t,e){t.scrolling=e},F=i("8g7x"),V={namespaced:!0,state:N,getters:o,mutations:s,actions:F};l["a"].use(m["a"]);var q=new m["a"].Store({modules:{showcase:y,layoutDemo:V}});var K=q,$=i("oeYU"),tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"Lhh lpr lFf"}},[a("q-layout-header",{attrs:{reveal:""}},[a("q-toolbar",{attrs:{inverted:"ios"===t.$q.theme}},[a("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",value:t.pageMeta.backRoute,expression:"pageMeta.backRoute",modifiers:{single:!0}}],staticClass:"cordova-only electron-only",attrs:{flat:"",round:"",dense:"",icon:"arrow_back","aria-label":"Go back"}}),t._v(" "),a("q-toolbar-title",[a("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.pageMeta.icon,expression:"pageMeta.icon"}],staticStyle:{"font-size":"2rem","margin-right":"5px"},attrs:{name:t.pageMeta.icon}}),t._v("\n        "+t._s(t.pageMeta.title)+"\n      ")],1),t._v(" "),a("q-btn",{staticClass:"within-iframe-hide",attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.drawerState=!t.drawerState}}})],1),t._v(" "),"mat"===t.$q.theme?a("showcase-tabs"):t._e()],1),t._v(" "),"ios"===t.$q.theme?a("q-layout-footer",{attrs:{reveal:""}},[a("showcase-tabs")],1):t._e(),t._v(" "),a("q-layout-drawer",{ref:"x",model:{value:t.drawerState,callback:function(e){t.drawerState=e},expression:"drawerState"}},[a("q-scroll-area",{class:"mat"===t.$q.theme?"bg-grey-3":null,staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"row flex-center bg-white",staticStyle:{height:"115px"}},[a("img",{staticStyle:{height:"75px"},attrs:{alt:"Quasar logo",src:i("KRiQ")}}),t._v(" "),a("div",{staticClass:"caption q-ml-md"},[t._v("\n          Quasar v"+t._s(t.$q.version)+"\n        ")])]),t._v(" "),a("q-list",{attrs:{"no-border":""}},[a("q-item",{attrs:{to:"/showcase",exact:"",replace:""}},[a("q-item-side",{attrs:{icon:"home"}}),t._v(" "),a("q-item-main",{attrs:{label:"Showcase home"}})],1),t._v(" "),a("q-item-separator"),t._v(" "),t._l(t.categories,function(e){return[a("q-list-header",{key:"header-"+e.title},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),t._l(e.features,function(i){return a("q-item",{key:i.hash,attrs:{to:"/showcase/"+e.hash+"/"+i.hash,replace:!e.extract}},[a("q-item-side",{attrs:{icon:i.icon}}),t._v(" "),a("q-item-main",{attrs:{label:i.title}})],1)}),t._v(" "),a("q-item-separator",{key:"separator-"+e.title})]})],2)],1)],1),t._v(" "),a("q-page-container",[a("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in",duration:300},on:{leave:t.resetScroll}},[a("router-view")],1)],1)],1)},et=[];tt._withStripped=!0;var it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pageMeta.tabs.length>0?i("q-tabs",{class:{"within-iframe-hide":!t.pageMeta.iframeTabs},style:"ios"===t.$q.theme?{background:"rgba(255,255,255,0.95"}:null,attrs:{inverted:"ios"===t.$q.theme}},t._l(t.pageMeta.tabs,function(e){return i("q-route-tab",{key:e.hash,attrs:{slot:"title",icon:e.icon,to:"/showcase"+t.pageMeta.hash+"/"+e.hash,label:e.label,exact:"",replace:"",alert:void 0!==e.status},slot:"title"})})):t._e()},at=[];it._withStripped=!0;var ot={name:"ShowcaseTabs",computed:Object(m["c"])("showcase",["pageMeta"])},st=ot,nt=Object(p["a"])(st,it,at,!1,null,null,null),ct=nt.exports,lt={components:{ShowcaseTabs:ct},data:function(){return{categories:$["a"]}},computed:c()({drawerState:{get:function(){return this.$store.state.showcase.drawerState},set:function(t){this.$store.commit("showcase/updateDrawerState",t)}}},Object(m["c"])("showcase",["pageMeta"])),methods:{resetScroll:function(t,e){document.documentElement.scrollTop=0,document.body.scrollTop=0,e()}},mounted:function(){this.$q.platform.is.desktop&&!this.drawerState&&(this.drawerState=!0)}},rt=lt,gt=Object(p["a"])(rt,tt,et,!1,null,null,null),ut=gt.exports,It=[{path:"/",component:function(){return i.e(92).then(i.bind(null,"bleu"))}}];function ht(t,e){return{path:t,meta:e,component:function(){return i("jHpM")("./"+t)}}}var pt={path:"/showcase",component:ut,children:[{path:"",meta:{title:"Quasar Showcase",hash:"/showcase",icon:"layers",backRoute:"/"},component:function(){return i.e(1).then(i.bind(null,"uO6z"))}}]};$["a"].forEach(function(t){t.extract||t.features.forEach(function(e){var i=t.hash+"/"+e.hash;e.tabs?(e.tabs.forEach(function(t){var a=i+"/"+t.hash;pt.children.push(ht(a,{title:t.title,hash:"/"+i,iframeTabs:e.iframeTabs,icon:e.icon,tabs:e.tabs}))}),It.push({path:"/showcase/"+i,redirect:"/showcase/"+i+"/"+e.tabs[0].hash})):pt.children.push(ht(i,e))})}),It.push(pt),It.push({path:"/showcase/layout-demo",component:function(){return i.e(91).then(i.bind(null,"xx7a"))},children:[{path:"play-with-layout",component:function(){return i.e(90).then(i.bind(null,"tWJl"))}},{path:"drawer-panels",component:function(){return i.e(89).then(i.bind(null,"b1Gx"))}},{path:"page-sticky",component:function(){return i.e(88).then(i.bind(null,"Iehi"))}},{path:"floating-action-button",component:function(){return i.e(87).then(i.bind(null,"sCbh"))}}]}),It.push({path:"*",component:function(){return i.e(86).then(i.bind(null,"Avmv"))}});var Mt=It;l["a"].use(C["a"]);var dt=new C["a"]({mode:"hash",base:"/",scrollBehavior:function(){return{y:0}},routes:Mt});dt.beforeEach(function(t,e,i){t.meta&&K.commit("showcase/updatePageMeta",t.meta),i()});var Ct=dt;l["a"].config.productionTip=!0;var mt=c()({el:"#q-app",router:Ct,store:K},d);new l["a"](mt)},KRiQ:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDUwLjg0MzQ2NyA1MC44NDM0NjEiCiAgIGhlaWdodD0iMTUuMzA1NzU4bW0iCiAgIHdpZHRoPSIxNS4zMDU3Nm1tIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0icXVhc2FyLWxvZ28tZmxhdC5zdmciPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE2Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwNTYiCiAgICAgaWQ9Im5hbWVkdmlldzEyIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6em9vbT0iMy4wNzcwNDE2IgogICAgIGlua3NjYXBlOmN4PSItMjYuMjcyMTMyIgogICAgIGlua3NjYXBlOmN5PSI2Ni45Nzg0NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI0IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iZzQiIC8+CiAgPGcKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjAxNzEyLDAsMCwwLjAxNzEyLC0xMTYuOTYzLDQ4LjcyNDk5OSkiCiAgICAgaWQ9Imc0Ij4KICAgIDxwYXRoCiAgICAgICBkPSJNIDg1NjAuMzgyLC0xMzYxLjMwMyIKICAgICAgIGlkPSJwYXRoOCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzdHlsZT0iZmlsbDojMjYzMjM4IiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gOTM5NS44NzYsLTE5ODQuMDI4IgogICAgICAgaWQ9InBhdGgxMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzdHlsZT0iZmlsbDojNDJhNWY1IiAvPgogICAgPGcKICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIzLjQxNjUyMjMiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMy40MTY1MjIzIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wODg3MDMxLDAsMCwxLjA4ODcwMzEsLTg3MC4wNzcxNSwyNTIuNjQyMDkpIgogICAgICAgaWQ9Imc4ODU2LTYiPgogICAgICA8Y2lyY2xlCiAgICAgICAgIHI9IjEzNjMuOTI5NiIKICAgICAgICAgY3k9Ii0xNDgyLjMyNzUiCiAgICAgICAgIGN4PSI4NDM4LjQyNzciCiAgICAgICAgIGlkPSJjaXJjbGU4ODU4LTEiCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo1MDtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxMC4wMzEzODciCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxMC4wMzEzODciIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxMC4wMzEzODciCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxMC4wMzEzODciCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojMjYzMjM4O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxMDtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gODY2MS42MzkxLC0xNDgyLjM2OTYgYSAyMjMuMTM5OCwyMjMuMTM5OCAwIDAgMSAtMjIzLjEzOTgsMjIzLjE0MDggMjIzLjEzOTgsMjIzLjEzOTggMCAwIDEgLTIyMy4xMzk4LC0yMjMuMTQwOCAyMjMuMTM5OCwyMjMuMTM5OCAwIDAgMSAyMjMuMTM5OCwtMjIzLjEzODggMjIzLjEzOTgsMjIzLjEzOTggMCAwIDEgMjIzLjEzOTgsMjIzLjEzODggeiIKICAgICAgICAgaWQ9InBhdGg4ODYwLTUiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoODg2Mi01IgogICAgICAgICBkPSJtIDk0MjkuMDE1NSwtMjA1NC4zMjQ2IGEgMTE0My44MzgyLDExNDMuODM4MiAwIDAgMCAtMTc1LjI4MjQsLTIyOS4xNTU5IGwgLTI1Ny45NjM0LDE0OC45MzUzIGMgLTgwLjQwNDgsLTY4LjY4MjkgLTE3MS43ODYyLC0xMjEuMjkyMiAtMjY5LjMzMzIsLTE1Ni4wOTY3IC04OC4wNjkyLDg5LjI1MzkgLTE1OC4wMzIzLDE4OC45ODUgLTIwOC40NjI4LDI5Ny40NDU3IDI4Ny4xNTE4LC0xOS41NDI1IDU4My43MTcyLDg0LjM4MjIgODU5LjAzNjcsMjk5LjQ4NzggbCAxNjIuMzUwMSwtOTMuNzMyOSBhIDExNDMuODM4MiwxMTQzLjgzODIgMCAwIDAgLTExMC4zNDUsLTI2Ni44ODMzIHoiCiAgICAgICAgIGNsaXAtcGF0aD0ibm9uZSIKICAgICAgICAgbWFzaz0ibm9uZSIKICAgICAgICAgc3R5bGU9ImZpbGw6IzE5NzZkMjtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSItNDcyLjEzODc1IgogICAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii00MDcuODQzODgiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMjQ0LjEzMTYxIgogICAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii02MzMuNDExOTEiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM0MmE1ZjU7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIG1hc2s9Im5vbmUiCiAgICAgICAgIGNsaXAtcGF0aD0ibm9uZSIKICAgICAgICAgZD0ibSA5NDI5LjA4MTYsLTkxMC41MzAzMyBhIDExNDMuODM4MiwxMTQzLjgzODIgMCAwIDAgMTEwLjgxMzYsLTI2Ni4zNzY5NyBsIC0yNTcuOTYzNSwtMTQ4LjkzNTMgYyAxOS4yNzg3LC0xMDMuOTc0MSAxOS4xNDkxLC0yMDkuNDE3MiAwLjUxNzEsLTMxMS4yOTc2IC0xMjEuMzMwNywtMzEuNjQzMyAtMjQyLjY4MTksLTQyLjM2NzUgLTM2MS44MjY5LC0zMS44MTEzIDE2MC41MDAyLDIzOC45MDk1IDIxOC43ODE0LDU0Ny43MDUgMTcwLjE1NDMsODkzLjY5MTUxIGwgMTYyLjM1MDEsOTMuNzMyODIgYSAxMTQzLjgzODIsMTE0My44MzgyIDAgMCAwIDE3NS45NTUzLC0yMjkuMDAzMTYgeiIKICAgICAgICAgaWQ9InBhdGg4ODY0LTQiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoODg2Ni03IgogICAgICAgICBkPSJtIDg0MzguNTU5NywtMzM4LjU3NjAyIGEgMTE0My44MzgyLDExNDMuODM4MiAwIDAgMCAyODYuMDk2LC0zNy4yMjEwNSBsIDAsLTI5Ny44NzA1NyBjIDk5LjY4MzYsLTM1LjI5MTE3IDE5MC45MzUyLC04OC4xMjUwNSAyNjkuODUwMiwtMTU1LjIwMDk3IC0zMy4yNjE1LC0xMjAuODk3MTYgLTg0LjY0OTYsLTIzMS4zNTI0OSAtMTUzLjM2NDEsLTMyOS4yNTY5OSAtMTI2LjY1MTYsMjU4LjQ1MjAyIC0zNjQuOTM1Nyw0NjMuMzIyNzggLTY4OC44ODIzLDU5NC4yMDM3NCBsIDAsMTg3LjQ2NTY4IGEgMTE0My44MzgyLDExNDMuODM4MiAwIDAgMCAyODYuMzAwMiwzNy44ODAxNiB6IgogICAgICAgICBjbGlwLXBhdGg9Im5vbmUiCiAgICAgICAgIG1hc2s9Im5vbmUiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMxOTc2ZDI7ZmlsbC1vcGFjaXR5OjEiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTEwNy45MTEyNCIKICAgICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSI1ODcuMjE1NTkiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iNDA3Ljg0MzkiCiAgICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iNDcyLjEzODc2IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBzdHlsZT0iZmlsbDojNDJhNWY1O2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBtYXNrPSJub25lIgogICAgICAgICBjbGlwLXBhdGg9Im5vbmUiCiAgICAgICAgIGQ9Im0gNzQ0Ny45NzE4LC05MTAuNDE1OTcgYSAxMTQzLjgzODIsMTE0My44MzgyIDAgMCAwIDE3NS4yODI0LDIyOS4xNTU5MiBsIDI1Ny45NjM0LC0xNDguOTM1MjkgYyA4MC40MDQ5LDY4LjY4Mjk1IDE3MS43ODYyLDEyMS4yOTIxOCAyNjkuMzMzMSwxNTYuMDk2NjUgODguMDY5MywtODkuMjUzODkgMTU4LjAzMjQsLTE4OC45ODQ5NSAyMDguNDYyOSwtMjk3LjQ0NTY4IC0yODcuMTUxOSwxOS41NDI0NCAtNTgzLjcxNzIsLTg0LjM4MjIzIC04NTkuMDM2NywtMjk5LjQ4NzczIGwgLTE2Mi4zNTAxLDkzLjczMjggYSAxMTQzLjgzODIsMTE0My44MzgyIDAgMCAwIDExMC4zNDUsMjY2Ljg4MzMzIHoiCiAgICAgICAgIGlkPSJwYXRoODg2OC02IiAvPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDg4NzAtNSIKICAgICAgICAgZD0ibSA3NDQ3LjkwNTcsLTIwNTQuMjEwMiBhIDExNDMuODM4MiwxMTQzLjgzODIgMCAwIDAgLTExMC44MTM2LDI2Ni4zNzY5IGwgMjU3Ljk2MzUsMTQ4LjkzNTMgYyAtMTkuMjc4NywxMDMuOTc0MiAtMTkuMTQ5MSwyMDkuNDE3MiAtMC41MTcxLDMxMS4yOTc2IDEyMS4zMzA3LDMxLjY0MzMgMjQyLjY4MTksNDIuMzY3NSAzNjEuODI2OSwzMS44MTEzIC0xNjAuNTAwMiwtMjM4LjkwOTUgLTIxOC43ODE0LC01NDcuNzA1IC0xNzAuMTU0MywtODkzLjY5MTQgbCAtMTYyLjM1MDEsLTkzLjczMyBhIDExNDMuODM4MiwxMTQzLjgzODIgMCAwIDAgLTE3NS45NTUzLDIyOS4wMDMzIHoiCiAgICAgICAgIGNsaXAtcGF0aD0ibm9uZSIKICAgICAgICAgbWFzaz0ibm9uZSIKICAgICAgICAgc3R5bGU9ImZpbGw6IzE5NzZkMjtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSI2MzMuNDExOTMiCiAgICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTI0NC4xMzE2NiIgLz4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNTg3LjIxNTYyIgogICAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjEwNy45MTEyMiIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgc3R5bGU9ImZpbGw6IzQyYTVmNTtmaWxsLW9wYWNpdHk6MSIKICAgICAgICAgbWFzaz0ibm9uZSIKICAgICAgICAgY2xpcC1wYXRoPSJub25lIgogICAgICAgICBkPSJtIDg0MzguNDI3NiwtMjYyNi4xNjQ2IGEgMTE0My44MzgyLDExNDMuODM4MiAwIDAgMCAtMjg2LjA5NTksMzcuMjIxIGwgLTEwZS01LDI5Ny44NzA2IGMgLTk5LjY4MzYsMzUuMjkxMiAtMTkwLjkzNTIsODguMTI1MSAtMjY5Ljg1MDIsMTU1LjIwMSAzMy4yNjE1LDEyMC44OTcyIDg0LjY0OTcsMjMxLjM1MjUgMTUzLjM2NDEsMzI5LjI1NyAxMjYuNjUxNiwtMjU4LjQ1MiAzNjQuOTM1NywtNDYzLjMyMjggNjg4Ljg4MjMsLTU5NC4yMDM3IGwgMTBlLTUsLTE4Ny40NjU4IGEgMTE0My44MzgyLDExNDMuODM4MiAwIDAgMCAtMjg2LjMwMDMsLTM3Ljg4MDEgeiIKICAgICAgICAgaWQ9InBhdGg4ODcyLTYiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},ZL7j:function(t,e,i){"use strict";var a=i("7oll"),o=i.n(a);o.a},ey39:function(t,e){},fm0S:function(t,e,i){},jHpM:function(t,e,i){var a={"./":["uO6z",1,1],"./animation/slide-transition":["MIzu",1,82],"./animation/slide-transition.vue":["MIzu",1,82],"./animation/transition":["4UPF",1,0,81],"./animation/transition.vue":["4UPF",1,0,81],"./buttons/btn":["AOYa",1,78],"./buttons/btn-dropdown":["jCBA",1,80],"./buttons/btn-dropdown.vue":["jCBA",1,80],"./buttons/btn-group":["GuRf",1,79],"./buttons/btn-group.vue":["GuRf",1,79],"./buttons/btn.vue":["AOYa",1,78],"./css-helpers/flex-css/flex-column":["iLq7",1,77],"./css-helpers/flex-css/flex-column.vue":["iLq7",1,77],"./css-helpers/flex-css/flex-gutter":["90DT",1,76],"./css-helpers/flex-css/flex-gutter.vue":["90DT",1,76],"./css-helpers/flex-css/flex-row":["ojzL",1,75],"./css-helpers/flex-css/flex-row.vue":["ojzL",1,75],"./css-helpers/shadows":["1qcI",1,74],"./css-helpers/shadows.vue":["1qcI",1,74],"./forms/autocomplete":["bsVj",1,73],"./forms/autocomplete.vue":["bsVj",1,73],"./forms/button-toggle":["jKof",1,72],"./forms/button-toggle.vue":["jKof",1,72],"./forms/checkbox":["2rOz",1,71],"./forms/checkbox.vue":["2rOz",1,71],"./forms/chips-input":["RVFa",1,70],"./forms/chips-input.vue":["RVFa",1,70],"./forms/color/color-input":["NVWU",1,0,69],"./forms/color/color-input.vue":["NVWU",1,0,69],"./forms/color/color-picker":["eFZL",1,68],"./forms/color/color-picker.vue":["eFZL",1,68],"./forms/datetime/datetime-input":["moY/",1,67],"./forms/datetime/datetime-input.vue":["moY/",1,67],"./forms/datetime/datetime-picker":["1ntC",1,66],"./forms/datetime/datetime-picker.vue":["1ntC",1,66],"./forms/docs-input.styl":["lNCw",0,85],"./forms/editor":["NJkf",1,65],"./forms/editor.vue":["NJkf",1,65],"./forms/field":["miYS",1,64],"./forms/field.vue":["miYS",1,64],"./forms/input":["lSlE",1,63],"./forms/input.vue":["lSlE",1,63],"./forms/knob":["/7IA",1,62],"./forms/knob.vue":["/7IA",1,62],"./forms/option-group":["+bv+",1,61],"./forms/option-group.vue":["+bv+",1,61],"./forms/radio":["BMPA",1,60],"./forms/radio.vue":["BMPA",1,60],"./forms/range":["lqVj",1,59],"./forms/range.vue":["lqVj",1,59],"./forms/rating":["txKi",1,58],"./forms/rating.vue":["txKi",1,58],"./forms/search":["PoK5",1,57],"./forms/search.vue":["PoK5",1,57],"./forms/select":["3rTL",1,56],"./forms/select.vue":["3rTL",1,56],"./forms/slider":["vuY9",1,55],"./forms/slider-style.styl":["flrz",0,84],"./forms/slider.vue":["vuY9",1,55],"./forms/toggle":["wbLN",1,54],"./forms/toggle.vue":["wbLN",1,54],"./forms/uploader":["5RD8",1,53],"./forms/uploader.vue":["5RD8",1,53],"./grouping/card":["lRmt",1,52],"./grouping/card.vue":["lRmt",1,52],"./grouping/collapsible":["EiLg",1,51],"./grouping/collapsible.vue":["EiLg",1,51],"./grouping/list/chat":["NWPq",1,50],"./grouping/list/chat.vue":["NWPq",1,50],"./grouping/list/email":["VesK",1,49],"./grouping/list/email.vue":["VesK",1,49],"./grouping/list/folders":["VGsH",1,48],"./grouping/list/folders.vue":["VGsH",1,48],"./grouping/list/movies":["fiuM",1,47],"./grouping/list/movies.vue":["fiuM",1,47],"./grouping/list/phonebook":["CAJv",1,46],"./grouping/list/phonebook.vue":["CAJv",1,46],"./grouping/list/settings":["+rzo",1,45],"./grouping/list/settings.vue":["+rzo",1,45],"./grouping/stepper":["+ROl",1,0,44],"./grouping/stepper.vue":["+ROl",1,0,44],"./grouping/table/table-customize":["UxbW",1,43],"./grouping/table/table-customize.vue":["UxbW",1,43],"./grouping/table/table-features":["RCDJ",1,42],"./grouping/table/table-features.vue":["RCDJ",1,42],"./grouping/table/table-server-pagination":["oTuc",1,41],"./grouping/table/table-server-pagination.vue":["oTuc",1,41],"./grouping/tree":["xZHz",1,40],"./grouping/tree.vue":["xZHz",1,40],"./index":["uO6z",1,1],"./index.vue":["uO6z",1,1],"./media/carousel":["aUZ/",1,39],"./media/carousel.vue":["aUZ/",1,39],"./media/parallax":["tS/n",1,38],"./media/parallax.vue":["tS/n",1,38],"./media/video":["JTPZ",1,37],"./media/video.vue":["JTPZ",1,37],"./misc/platform-detection":["nCW8",1,36],"./misc/platform-detection.vue":["nCW8",1,36],"./navigation/breadcrumbs":["TR2M",1,35],"./navigation/breadcrumbs.vue":["TR2M",1,35],"./navigation/context-menu":["Wc9p",1,34],"./navigation/context-menu.vue":["Wc9p",1,34],"./navigation/pagination":["UjrJ",1,33],"./navigation/pagination.vue":["UjrJ",1,33],"./navigation/pull-to-refresh":["TvYv",1,32],"./navigation/pull-to-refresh.vue":["TvYv",1,32],"./navigation/tabs/basic-tabs":["wbgt",1,31],"./navigation/tabs/basic-tabs.vue":["wbgt",1,31],"./navigation/tabs/tab-panes":["i0WM",1,30],"./navigation/tabs/tab-panes.vue":["i0WM",1,30],"./navigation/toolbar":["PFaj",1,29],"./navigation/toolbar.vue":["PFaj",1,29],"./other-components/alert":["XQtM",1,28],"./other-components/alert.vue":["XQtM",1,28],"./other-components/chat":["Fl/P",1,27],"./other-components/chat.vue":["Fl/P",1,27],"./other-components/chip":["R3+q",1,26],"./other-components/chip.vue":["R3+q",1,26],"./other-components/timeline":["Oryy",1,25],"./other-components/timeline.vue":["Oryy",1,25],"./popups/action-sheet":["g/Ra",1,24],"./popups/action-sheet.vue":["g/Ra",1,24],"./popups/dialog":["/yvf",1,0,23],"./popups/dialog.vue":["/yvf",1,0,23],"./popups/modal":["Lr4/",1,0,22],"./popups/modal.vue":["Lr4/",1,0,22],"./popups/notify":["ZfQh",1,21],"./popups/notify.vue":["ZfQh",1,21],"./popups/popover":["PnxA",1,20],"./popups/popover.vue":["PnxA",1,20],"./popups/tooltip":["6XdU",1,19],"./popups/tooltip.vue":["6XdU",1,19],"./progress/ajax-bar":["B6BM",1,18],"./progress/ajax-bar.vue":["B6BM",1,18],"./progress/inner-loading":["abWv",1,17],"./progress/inner-loading.vue":["abWv",1,17],"./progress/loading":["szHE",1,16],"./progress/loading.vue":["szHE",1,16],"./progress/progress":["ixfc",1,15],"./progress/progress.vue":["ixfc",1,15],"./progress/spinner":["y6ui",1,14],"./progress/spinner.vue":["y6ui",1,14],"./scrolling/back-to-top":["ej9s",1,13],"./scrolling/back-to-top.vue":["ej9s",1,13],"./scrolling/infinite-scroll":["B9wg",1,12],"./scrolling/infinite-scroll.vue":["B9wg",1,12],"./scrolling/scroll-area":["ehNn",1,11],"./scrolling/scroll-area.vue":["ehNn",1,11],"./scrolling/scroll-fire":["GC5h",1,10],"./scrolling/scroll-fire.vue":["GC5h",1,10],"./style-and-identity/color-palette":["rPF/",1,9],"./style-and-identity/color-palette.vue":["rPF/",1,9],"./style-and-identity/material-ripples":["t8nN",1,8],"./style-and-identity/material-ripples.vue":["t8nN",1,8],"./style-and-identity/typography":["obLy",1,7],"./style-and-identity/typography.vue":["obLy",1,7],"./touch-directives/touch-hold":["93hN",1,6],"./touch-directives/touch-hold.vue":["93hN",1,6],"./touch-directives/touch-pan":["j0rW",1,5],"./touch-directives/touch-pan.vue":["j0rW",1,5],"./touch-directives/touch-style.styl":["mT6g",0,83],"./touch-directives/touch-swipe":["SBuD",1,4],"./touch-directives/touch-swipe.vue":["SBuD",1,4],"./web-api-wrappers/app-fullscreen":["LteQ",1,3],"./web-api-wrappers/app-fullscreen.vue":["LteQ",1,3],"./web-api-wrappers/app-visibility":["P/7v",1,2],"./web-api-wrappers/app-visibility.vue":["P/7v",1,2]};function o(t){var e=a[t];return e?Promise.all(e.slice(2).map(i.e)).then(function(){var t=i(e[0]);return 1===e[1]?t:e[1]?Object.assign({},"object"===typeof t&&t,{default:t}):"object"===typeof t&&t&&t.__esModule?t:Object.assign({},"object"===typeof t&&t,{default:t})}):Promise.resolve().then(function(){var e=new Error('Cannot find module "'+t+'".');throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return Object.keys(a)},o.id="jHpM",t.exports=o},l8ur:function(t,e,i){var a={"./bounce.css":"PUmY","./bounceIn.css":"CliU","./bounceInDown.css":"pKm8","./bounceInLeft.css":"WWXe","./bounceInRight.css":"2oCq","./bounceInUp.css":"tg5a","./bounceOut.css":"853k","./bounceOutDown.css":"qbXy","./bounceOutLeft.css":"Bt10","./bounceOutRight.css":"Zrw1","./bounceOutUp.css":"kI+G","./fadeIn.css":"EHBt","./fadeInDown.css":"FiUO","./fadeInDownBig.css":"kzg4","./fadeInLeft.css":"DC5c","./fadeInLeftBig.css":"81dB","./fadeInRight.css":"74+S","./fadeInRightBig.css":"dHoL","./fadeInUp.css":"5/vb","./fadeInUpBig.css":"uK9C","./fadeOut.css":"Jc2o","./fadeOutDown.css":"k+pq","./fadeOutDownBig.css":"yIhU","./fadeOutLeft.css":"Xx1C","./fadeOutLeftBig.css":"pVV8","./fadeOutRight.css":"iTTW","./fadeOutRightBig.css":"lDgw","./fadeOutUp.css":"NRvT","./fadeOutUpBig.css":"I6Vv","./flash.css":"WKVH","./flip.css":"vaAy","./flipInX.css":"WLhn","./flipInY.css":"WQIU","./flipOutX.css":"csU/","./flipOutY.css":"uK2o","./headShake.css":"Iomn","./hinge.css":"CF6H","./jello.css":"gBTy","./lightSpeedIn.css":"632X","./lightSpeedOut.css":"0EOz","./pulse.css":"q5hK","./rollIn.css":"3HPs","./rollOut.css":"WSzb","./rotateIn.css":"SH0w","./rotateInDownLeft.css":"v2tj","./rotateInDownRight.css":"e5Zg","./rotateInUpLeft.css":"ifhg","./rotateInUpRight.css":"y4yY","./rotateOut.css":"3mUJ","./rotateOutDownLeft.css":"gTSn","./rotateOutDownRight.css":"Hqc8","./rotateOutUpLeft.css":"Y9Ea","./rotateOutUpRight.css":"/MMa","./rubberBand.css":"qrIa","./shake.css":"FfHN","./slideInDown.css":"eeoa","./slideInLeft.css":"qWPx","./slideInRight.css":"O3aI","./slideInUp.css":"IeMT","./slideOutDown.css":"q+3l","./slideOutLeft.css":"+FdI","./slideOutRight.css":"CkM9","./slideOutUp.css":"VwYb","./swing.css":"uWio","./tada.css":"M5GN","./wobble.css":"7VtN","./zoomIn.css":"OPPa","./zoomInDown.css":"JXdd","./zoomInLeft.css":"GZIC","./zoomInRight.css":"72gz","./zoomInUp.css":"l6Fa","./zoomOut.css":"zBUS","./zoomOutDown.css":"KsZc","./zoomOutLeft.css":"H9SI","./zoomOutRight.css":"+i/6","./zoomOutUp.css":"keWq"};function o(t){var e=s(t),a=i(e);return a}function s(t){var e=a[t];if(!(e+1)){var i=new Error('Cannot find module "'+t+'".');throw i.code="MODULE_NOT_FOUND",i}return e}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="l8ur"},oeYU:function(t,e,i){"use strict";e["a"]=[{title:"Style & Identity",icon:"style",hash:"style-and-identity",features:[{title:"Color Palette",icon:"style",hash:"color-palette"},{title:"Typography",icon:"format_bold",hash:"typography",status:"Update"},{title:"Material Ripples",icon:"blur_on",hash:"material-ripples"}]},{title:"CSS Helpers",icon:"layers",hash:"css-helpers",features:[{title:"Flex CSS",icon:"web",hash:"flex-css",iframeTabs:!0,status:"Update",tabs:[{title:"Row",label:"Row",icon:"web",hash:"flex-row"},{title:"Column",label:"Column",icon:"web",hash:"flex-column"},{title:"Gutter",label:"Gutter",icon:"web",hash:"flex-gutter",status:"Update"}]},{title:"Shadows",icon:"layers",hash:"shadows"}]},{title:"Layout",icon:"dashboard",hash:"layout-demo",extract:!0,features:[{title:"Play with Layout",icon:"play_circle_outline",hash:"play-with-layout",status:"Revamp"},{title:"Drawer Panels",icon:"view_array",hash:"drawer-panels",status:"Revamp"},{title:"Page Sticky",icon:"pin_drop",hash:"page-sticky",status:"Revamp"},{title:"Floating Action Button",icon:"play_for_work",hash:"floating-action-button",status:"Update"}]},{title:"Buttons",icon:"panorama_wide_angle",hash:"buttons",features:[{title:"Standard Button",icon:"panorama_wide_angle",hash:"btn",status:"Update"},{title:"Button Groups",icon:"group",hash:"btn-group",status:"New"},{title:"Dropdown Buttons",icon:"details",hash:"btn-dropdown",status:"New"}]},{title:"Navigation",icon:"rowing",hash:"navigation",features:[{title:"Toolbar",icon:"view_day",hash:"toolbar",status:"Update"},{title:"Tabs",icon:"tab",hash:"tabs",iframeTabs:!0,tabs:[{title:"Basic",label:"Basic Tabs",icon:"tab",hash:"basic-tabs"},{title:"Tab Panes",label:"Tab Panes",icon:"chrome_reader_mode",hash:"tab-panes"}]},{title:"Pull to Refresh",icon:"vertical_align_center",hash:"pull-to-refresh"},{title:"Context Menu",icon:"content_paste",hash:"context-menu"},{title:"Breadcrumbs",icon:"skip_next",hash:"breadcrumbs",status:"New"},{title:"Pagination",icon:"linear_scale",hash:"pagination",status:"Revamp"}]},{title:"Forms",icon:"assignment",hash:"forms",features:[{title:"Field",icon:"text_fields",hash:"field"},{title:"Input Textfield",label:"Textbox",hash:"input",icon:"text_format",status:"Update"},{title:"Chips Input",label:"Chips",hash:"chips-input",icon:"dns",status:"Update"},{title:"Color Picker",icon:"brush",hash:"color",status:"New",tabs:[{title:"Color Input",label:"Color Picker Input",icon:"format_color_fill",hash:"color-input"},{title:"Color Picker",label:"Color Picker",icon:"colorize",hash:"color-picker"}]},{title:"Autocomplete",icon:"more_horiz",hash:"autocomplete"},{title:"Editor (WYSIWYG)",icon:"mode_edit",hash:"editor",status:"New"},{title:"Search",icon:"search",hash:"search",status:"Update"},{title:"Slider",icon:"tune",hash:"slider",status:"Update"},{title:"Range",icon:"linear_scale",hash:"range",status:"Update"},{title:"Radio",icon:"radio_button_checked",hash:"radio",status:"Update"},{title:"Checkbox",icon:"check_box",hash:"checkbox",status:"Update"},{title:"Toggle",icon:"repeat",hash:"toggle",status:"Update"},{title:"Button Toggle",icon:"view_compact",hash:"button-toggle",status:"New"},{title:"Option Group",icon:"toc",hash:"option-group",status:"Update"},{title:"Date & Time",icon:"access_time",hash:"datetime",status:"Update",tabs:[{title:"DateTime Input",label:"Datetime Input",icon:"event",hash:"datetime-input"},{title:"DateTime Picker",label:"Datetime",icon:"event_note",hash:"datetime-picker"}]},{title:"Select",icon:"event_note",hash:"select",status:"Update"},{title:"Rating",icon:"star_half",hash:"rating"},{title:"Knob",icon:"timelapse",hash:"knob"},{title:"Uploader",icon:"cloud_upload",hash:"uploader",status:"Update"}]},{title:"Grouping",icon:"view_module",hash:"grouping",features:[{title:"Card",icon:"contact_mail",hash:"card"},{title:"Collapsible",icon:"format_line_spacing",hash:"collapsible",status:"Revamp"},{title:"Data Table",icon:"border_all",hash:"table",status:"Revamp",iframeTabs:!0,tabs:[{title:"Features",label:"Features",icon:"view_module",hash:"table-features"},{title:"Server Pagination",label:"Server Pagination",icon:"update",hash:"table-server-pagination"},{title:"Customize",label:"Customize",icon:"color_lens",hash:"table-customize"}]},{title:"List",icon:"list",hash:"list",status:"Update",iframeTabs:!0,tabs:[{title:"Email",label:"Email",hash:"email",icon:"email"},{title:"Chat",label:"Chat",hash:"chat",icon:"chat"},{title:"Folders & Files",label:"Folders & Files",hash:"folders",icon:"folder_open"},{title:"Settings",label:"Settings",hash:"settings",icon:"settings"},{title:"Movies",label:"Movies",hash:"movies",icon:"movie"},{title:"Phonebook",label:"Phonebook",hash:"phonebook",icon:"contact_phone"}]},{title:"Stepper",icon:"directions_run",hash:"stepper"},{title:"Tree",icon:"format_indent_increase",hash:"tree",status:"Revamp"}]},{title:"Popups",icon:"aspect_ratio",hash:"popups",features:[{title:"Action Sheet",icon:"assignment",hash:"action-sheet",status:"Revamp"},{title:"Dialog",icon:"question_answer",hash:"dialog",status:"Revamp"},{title:"Modal",icon:"settings_overscan",hash:"modal",status:"Update"},{title:"Notify",icon:"warning",hash:"notify",status:"New"},{title:"Popover",icon:"filter_none",hash:"popover",status:"Update"},{title:"Tooltip",icon:"speaker_notes",hash:"tooltip",status:"Update"}]},{title:"Progress",icon:"hourglass_full",hash:"progress",features:[{title:"Ajax Bar",icon:"trending_flat",hash:"ajax-bar"},{title:"Loading",icon:"hourglass_full",hash:"loading",status:"Update"},{title:"Inner Loading",icon:"hourglass_empty",hash:"inner-loading"},{title:"Progress Bar",icon:"sort",hash:"progress"},{title:"Spinner",icon:"refresh",hash:"spinner"}]},{title:"Media",icon:"wallpaper",hash:"media",features:[{title:"Carousel",icon:"vibration",hash:"carousel",status:"Revamp"},{title:"Parallax",icon:"theaters",hash:"parallax"},{title:"Video Embedding",icon:"movie",hash:"video"}]},{title:"Scrolling",icon:"format_line_spacing",hash:"scrolling",features:[{title:"Infinite Scroll",icon:"update",hash:"infinite-scroll"},{title:"Scroll Area",icon:"aspect_ratio",hash:"scroll-area"},{title:"Scroll Fire",icon:"low_priority",hash:"scroll-fire"},{title:"Back to Top",icon:"vertical_align_top",hash:"back-to-top"}]},{title:"Animation",icon:"fast_forward",hash:"animation",features:[{title:"Transition",icon:"transform",hash:"transition",status:"Update"},{title:"Slide Transition",icon:"swap_vert",hash:"slide-transition"}]},{title:"Other Components",icon:"widgets",hash:"other-components",features:[{title:"Alert",icon:"assignment_late",hash:"alert",status:"Revamp"},{title:"Chip",icon:"loyalty",hash:"chip"},{title:"Chat",icon:"chat",hash:"chat",status:"Update"},{title:"Timeline",icon:"date_range",hash:"timeline",status:"New"}]},{title:"Touch Directives",icon:"touch_app",hash:"touch-directives",features:[{title:"Swipe",icon:"touch_app",hash:"touch-swipe",status:"Update"},{title:"Pan",icon:"touch_app",hash:"touch-pan",status:"Update"},{title:"Hold",icon:"touch_app",hash:"touch-hold",status:"Update"}]},{title:"Web API Wrappers",icon:"extension",hash:"web-api-wrappers",features:[{title:"App Fullscreen",icon:"fullscreen",hash:"app-fullscreen",status:"Update"},{title:"App Visibility",icon:"visibility",hash:"app-visibility",status:"Update"}]},{title:"Misc",icon:"work",hash:"misc",features:[{title:"Platform Detection",icon:"phonelink",hash:"platform-detection"}]}]}},[[84,93,0]]]);
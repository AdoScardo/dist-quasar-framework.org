webpackJsonp([56],{NHny:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[e("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e("p",{staticClass:"caption"},[e("span",{staticClass:"desktop-only"},[t._v("\n        Move mouse over the elements below. On a mobile device,\n        you need to tap the elements.\n      ")]),t._v(" "),e("span",{staticClass:"mobile-only"},[t._v("\n        Tap on elements below. On desktop you can move the mouse\n        over the elements.\n      ")])]),t._v(" "),e("div",{staticClass:"bg-secondary text-white round-borders row flex-center",staticStyle:{"margin-top":"40px",width:"200px",height:"70px"}},[t._v("\n      One second delay\n      "),e("q-tooltip",{attrs:{delay:1e3,offset:[0,10]}},[t._v("Quasar Rulz!")])],1),t._v(" "),e("p",{staticClass:"caption"},[t._v("With offset")]),t._v(" "),e("div",{staticClass:"group"},[e("q-btn",{attrs:{color:"indigo"}},[t._v("\n        Hover\n        "),e("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[e("strong",[t._v("Tooltip")]),t._v(" on "),e("em",[t._v("top")]),t._v(" ("),e("q-icon",{attrs:{name:"keyboard_arrow_up"}}),t._v(")\n        ")],1)],1),t._v(" "),e("q-btn",{attrs:{color:"red"}},[t._v("\n        Over\n        "),e("q-tooltip",{attrs:{anchor:"center right",self:"center left",offset:[10,10]}},[e("strong",[t._v("Tooltip")]),t._v(" on "),e("em",[t._v("right")]),t._v(" ("),e("q-icon",{attrs:{name:"keyboard_arrow_right"}}),t._v(")\n        ")],1)],1),t._v(" "),e("q-btn",{attrs:{color:"purple"}},[t._v("\n        These\n        "),e("q-tooltip",{attrs:{anchor:"center left",self:"center right",offset:[10,10]}},[e("strong",[t._v("Tooltip")]),t._v(" on "),e("em",[t._v("left")]),t._v(" ("),e("q-icon",{attrs:{name:"keyboard_arrow_left"}}),t._v(")\n        ")],1)],1),t._v(" "),e("q-btn",{attrs:{color:"amber"}},[t._v("\n        Buttons\n        "),e("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle",offset:[10,10]}},[e("strong",[t._v("Tooltip")]),t._v(" on "),e("em",[t._v("bottom")]),t._v(" ("),e("q-icon",{attrs:{name:"keyboard_arrow_down"}}),t._v(")\n        ")],1)],1)],1),t._v(" "),e("q-card",{staticStyle:{"margin-top":"75px"}},[e("q-card-title",{staticClass:"bg-primary text-center"},[e("q-btn",{attrs:{push:"",color:"orange"}},[t._v("\n          Mouse Hover\n\n          "),e("q-tooltip",{attrs:{anchor:t.anchor,self:t.self}},[e("div",[t._v("Quasar is "),e("strong",[t._v("great")]),t._v("!")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v("Try it.")])])],1)],1),t._v(" "),e("p",{staticClass:"caption text-center"},[t._v("Configure the Tooltip for button above.")]),t._v(" "),e("p",{staticClass:"text-center"},[e("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('anchor="'+t._s(t.anchor)+'"')]),t._v(" "),e("q-chip",{attrs:{tag:"",color:"primary"}},[t._v('self="'+t._s(t.self)+'"')])],1),t._v(" "),e("q-card-main",{staticClass:"row"},[e("div",{staticClass:"column items-center col-6"},[e("p",{staticClass:"caption"},[t._v("Anchor Origin")]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"column group"},[e("div",[t._v("Vertical")]),t._v(" "),e("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.$set(t.anchorOrigin,"vertical",i)},expression:"anchorOrigin.vertical"}}),t._v(" "),e("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.$set(t.anchorOrigin,"vertical",i)},expression:"anchorOrigin.vertical"}}),t._v(" "),e("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.anchorOrigin.vertical,callback:function(i){t.$set(t.anchorOrigin,"vertical",i)},expression:"anchorOrigin.vertical"}})],1),t._v(" "),e("div",{staticClass:"column group"},[e("div",[t._v("Horizontal")]),t._v(" "),e("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.$set(t.anchorOrigin,"horizontal",i)},expression:"anchorOrigin.horizontal"}}),t._v(" "),e("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.$set(t.anchorOrigin,"horizontal",i)},expression:"anchorOrigin.horizontal"}}),t._v(" "),e("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.anchorOrigin.horizontal,callback:function(i){t.$set(t.anchorOrigin,"horizontal",i)},expression:"anchorOrigin.horizontal"}})],1)])]),t._v(" "),e("div",{staticClass:"column items-center col-6"},[e("p",{staticClass:"caption"},[t._v("Self Origin")]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"column group"},[e("div",[t._v("Vertical")]),t._v(" "),e("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.selfOrigin.vertical,callback:function(i){t.$set(t.selfOrigin,"vertical",i)},expression:"selfOrigin.vertical"}}),t._v(" "),e("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.selfOrigin.vertical,callback:function(i){t.$set(t.selfOrigin,"vertical",i)},expression:"selfOrigin.vertical"}}),t._v(" "),e("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.selfOrigin.vertical,callback:function(i){t.$set(t.selfOrigin,"vertical",i)},expression:"selfOrigin.vertical"}})],1),t._v(" "),e("div",{staticClass:"column group"},[e("div",[t._v("Horizontal")]),t._v(" "),e("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.$set(t.selfOrigin,"horizontal",i)},expression:"selfOrigin.horizontal"}}),t._v(" "),e("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.$set(t.selfOrigin,"horizontal",i)},expression:"selfOrigin.horizontal"}}),t._v(" "),e("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.selfOrigin.horizontal,callback:function(i){t.$set(t.selfOrigin,"horizontal",i)},expression:"selfOrigin.horizontal"}})],1)])])])],1)],1)])},o=[];a._withStripped=!0;var r=e("XyMi"),l=Object(r.a)({data:function(){return{anchorOrigin:{vertical:"bottom",horizontal:"middle"},selfOrigin:{vertical:"top",horizontal:"middle"}}},computed:{anchor:function(){return this.anchorOrigin.vertical+" "+this.anchorOrigin.horizontal},self:function(){return this.selfOrigin.vertical+" "+this.selfOrigin.horizontal}}},a,o,!1,null,null,null);l.options.__file="src/pages/showcase/popups/tooltip.vue";i.default=l.exports}});
webpackJsonp([36,86],{cSth:function(e,a,t){var n=t("t3GF");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("rjj0").default)("4674b73f",n,!1,{})},t3GF:function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])},zVXv:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("HozF"),o=(t("cSth"),new Date),i=n.date.addToDate,s=n.date.subtractFromDate,l={data:function(){return{model:"2016-10-24T10:40:14.674Z",minMaxModel:o,min:s(o,{days:5}),max:i(o,{days:4,month:1,minutes:10})}}},c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[e._v("\n      Date\n      "),t("br"),e._v(" "),t("small",{staticClass:"mat-only"},[t("span",{staticClass:"desktop-only"},[e._v("Click")]),e._v(" "),t("span",{staticClass:"mobile-only"},[e._v("Tap")]),e._v("\n        on header labels to change month, day or year.\n      ")]),e._v(" "),t("small",{staticClass:"ios-only"},[e._v("\n        Set month, day and years by\n        "),t("span",{staticClass:"desktop-only"},[e._v("\n          clicking. On a mobile device you need to pan to change date or time.\n        ")]),e._v(" "),t("span",{staticClass:"mobile-only"},[e._v("\n          panning. On a desktop device you need to click to change date or time.\n        ")])])]),e._v(" "),t("q-datetime-picker",{attrs:{type:"date"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("\n      Time\n      "),t("br"),e._v(" "),t("small",[t("span",{staticClass:"desktop-only"},[e._v("\n          Set hours and minutes by clicking and dragging (or simply clicking)\n        ")]),e._v(" "),t("span",{staticClass:"mobile-only"},[e._v("\n          Set hours and minutes by panning "),t("span",{staticClass:"mat-only"},[e._v("(or simply tapping)")])]),e._v(" "),t("span",{staticClass:"mat-only"},[e._v("inside of the clock")]),e._v(".\n      ")])]),e._v(" "),t("q-datetime-picker",{attrs:{color:"amber",type:"time"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Time 24hr format")]),e._v(" "),t("q-datetime-picker",{attrs:{color:"black",type:"time",format24h:""},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Date & Time")]),e._v(" "),t("q-datetime-picker",{attrs:{color:"secondary",type:"datetime"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("On a dark background")]),e._v(" "),t("q-datetime-picker",{attrs:{dark:"",color:"secondary",type:"datetime"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Forcing Monday as first day of week (Changing Quasar I18n automatically configures first day of the week)")]),e._v(" "),t("q-datetime-picker",{attrs:{color:"purple","first-day-of-week":1,type:"date"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Forcing Saturday as first day of week (Changing Quasar I18n automatically configures first day of the week)")]),e._v(" "),t("q-datetime-picker",{attrs:{color:"purple","first-day-of-week":6,type:"date"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disabled state")]),e._v(" "),t("q-datetime-picker",{attrs:{disable:"",type:"datetime"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Readonly state")]),e._v(" "),t("q-datetime-picker",{attrs:{color:"orange",readonly:"",type:"datetime"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Min & max")]),e._v(" "),t("q-datetime-picker",{attrs:{color:"brown",type:"datetime",min:e.min,max:e.max},model:{value:e.minMaxModel,callback:function(a){e.minMaxModel=a},expression:"minMaxModel"}})],1)])},d=[];c._withStripped=!0;var p=t("XyMi"),r=Object(p.a)(l,c,d,!1,null,null,null);r.options.__file="src/pages/showcase/forms/datetime/datetime-picker.vue";a.default=r.exports}});
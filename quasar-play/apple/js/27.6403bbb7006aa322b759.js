webpackJsonp([27,86],{cSth:function(e,t,l){var a=l("t3GF");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,l("rjj0").default)("4674b73f",a,!1,{})},nJyC:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l("cSth");var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[l("div",{staticStyle:{width:"500px","max-width":"90vw"}},[l("p",{staticClass:"caption"},[e._v("Standard")]),e._v(" "),l("q-toggle",{model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("With label")]),e._v(" "),l("q-toggle",{attrs:{color:"secondary",label:"Tick me"},model:{value:e.check2,callback:function(t){e.check2=t},expression:"check2"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("With label on left side")]),e._v(" "),l("q-toggle",{attrs:{color:"amber",label:"Tick me","left-label":""},model:{value:e.check3,callback:function(t){e.check3=t},expression:"check3"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("With custom icons")]),e._v(" "),l("q-toggle",{attrs:{"checked-icon":"sentiment very satisfied","unchecked-icon":"sentiment very dissatisfied"},model:{value:e.check4,callback:function(t){e.check4=t},expression:"check4"}}),e._v(" "),l("q-toggle",{staticStyle:{"margin-left":"25px"},attrs:{"checked-icon":"visibility","unchecked-icon":"visibility_off"},model:{value:e.check5,callback:function(t){e.check5=t},expression:"check5"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("With Array as model")]),e._v(" "),l("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("Model: "+e._s(e.checkArray))]),e._v(" "),l("br"),l("br"),e._v(" "),l("q-toggle",{attrs:{label:"One",color:"yellow",val:"one"},model:{value:e.checkArray,callback:function(t){e.checkArray=t},expression:"checkArray"}}),e._v(" "),l("q-toggle",{staticStyle:{"margin-left":"10px"},attrs:{label:"Two",val:"two",color:"secondary"},model:{value:e.checkArray,callback:function(t){e.checkArray=t},expression:"checkArray"}}),e._v(" "),l("q-toggle",{staticStyle:{"margin-left":"10px"},attrs:{label:"Three",val:"three",color:"red"},model:{value:e.checkArray,callback:function(t){e.checkArray=t},expression:"checkArray"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("\n      With custom model values\n      "),l("span",{staticClass:"chip-container"},[l("q-chip",{attrs:{square:"",color:"secondary"}},[e._v('\n          Model: "'+e._s(e.customModel)+'"\n        ')])],1)]),e._v(" "),l("q-toggle",{attrs:{color:"secondary",label:"Do you agree with the terms & conditions?","true-value":"yes","false-value":"no"},model:{value:e.customModel,callback:function(t){e.customModel=t},expression:"customModel"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Keep color for unchecked state")]),e._v(" "),l("q-toggle",{attrs:{"keep-color":"",color:"amber",label:"Keeping color"},model:{value:e.check2,callback:function(t){e.check2=t},expression:"check2"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Readonly")]),e._v(" "),l("q-toggle",{attrs:{readonly:"",label:"Readonly"},model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Disabled")]),e._v(" "),l("q-toggle",{attrs:{disable:"",label:"Disabled"},model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("As Option Group in a Field")]),e._v(" "),l("q-field",{attrs:{icon:"vibration",helper:"Select which notifications you want to receive",label:"Notifications"}},[l("q-option-group",{attrs:{type:"toggle",color:"secondary",options:[{label:"Battery too low",value:"bat"},{label:"Friend request",value:"friend"},{label:"Picture uploaded",value:"upload",color:"red"}]},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("On a dark background")]),e._v(" "),l("div",{staticClass:"dark-example"},[l("q-toggle",{staticClass:"q-my-md",attrs:{dark:"",color:"amber",label:"Toggle me"},model:{value:e.check2,callback:function(t){e.check2=t},expression:"check2"}}),e._v(" "),l("q-field",{attrs:{icon:"vibration",helper:"Select which notifications you want to receive",label:"Notifications"}},[l("q-option-group",{attrs:{dark:"",type:"toggle",color:"secondary",options:[{label:"Battery too low",value:"bat"},{label:"Friend request",value:"friend"},{label:"Picture uploaded",value:"upload",color:"red"}]},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1)],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("In a list")]),e._v(" "),l("q-list",{attrs:{link:""}},[l("q-item",{attrs:{tag:"label"}},[l("q-item-main",[l("q-item-tile",{attrs:{title:""}},[e._v("Notification")])],1),e._v(" "),l("q-item-side",{attrs:{right:""}},[l("q-toggle",{model:{value:e.list1,callback:function(t){e.list1=t},expression:"list1"}})],1)],1),e._v(" "),l("q-item",{attrs:{tag:"label"}},[l("q-item-main",[l("q-item-tile",{attrs:{label:""}},[e._v("Notification")]),e._v(" "),l("q-item-tile",{attrs:{sublabel:""}},[e._v("Allow notification")])],1),e._v(" "),l("q-item-side",{attrs:{right:""}},[l("q-toggle",{attrs:{color:"secondary"},model:{value:e.list2,callback:function(t){e.list2=t},expression:"list2"}})],1)],1),e._v(" "),l("q-item",{attrs:{multiline:"",tag:"label"}},[l("q-item-main",[l("q-item-tile",{attrs:{label:""}},[e._v("Notification")]),e._v(" "),l("q-item-tile",{attrs:{sublabel:"",lines:"2"}},[e._v("Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications")])],1),e._v(" "),l("q-item-side",{attrs:{right:""}},[l("q-toggle",{attrs:{color:"amber"},model:{value:e.list3,callback:function(t){e.list3=t},expression:"list3"}})],1)],1)],1)],1)])},c=[];a._withStripped=!0;var o=l("XyMi"),i=Object(o.a)({data:function(){return{check1:!1,check2:!0,check3:!0,check4:!0,check5:!1,checkArray:["one"],check6:!0,customModel:"no",group:["upload"],list1:!1,list2:!0,list3:!0}}},a,c,!1,null,null,null);i.options.__file="src/pages/showcase/forms/toggle.vue";t.default=i.exports},t3GF:function(e,t,l){(e.exports=l("FZ+f")(!1)).push([e.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])}});
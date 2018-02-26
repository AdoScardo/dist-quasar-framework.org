webpackJsonp([35,86],{A9Jy:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});t("cSth");var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[e._v("Field components")]),e._v(" "),t("q-field",{attrs:{count:10,helper:"Some helper"}},[t("q-input",{model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper"}},[t("q-input",{attrs:{"float-label":"Input float label"},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi","icon-color":"amber",label:"Field label",helper:"Some helper"}},[t("q-input",{attrs:{type:"email",suffix:"@email.com"},model:{value:e.email,callback:function(l){e.email=l},expression:"email"}})],1),e._v(" "),t("br"),e._v(" "),t("q-field",{attrs:{count:10,helper:"Some helper"}},[t("q-input",{attrs:{inverted:""},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper"}},[t("q-input",{attrs:{"inverted-light":"",color:"amber","stack-label":"Input stack label"},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper"}},[t("q-input",{attrs:{inverted:"",color:"secondary",type:"email",suffix:"@email.com"},model:{value:e.email,callback:function(l){e.email=l},expression:"email"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("Error/warning states")]),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(l){e.error=l},expression:"error"}}),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning,callback:function(l){e.warning=l},expression:"warning"}}),e._v(" "),t("q-field",{attrs:{count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error.",warning:e.warning,"warning-label":"Hey, we got a warning."}},[t("q-input",{model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error.",warning:e.warning,"warning-label":"Hey, we got a warning."}},[t("q-input",{attrs:{"float-label":"Input float label"},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper",error:e.error,"error-label":"Oops, we got an error.",warning:e.warning,"warning-label":"Hey, we got a warning."}},[t("q-input",{attrs:{type:"email",suffix:"@email.com","stack-label":"Email address"},model:{value:e.email,callback:function(l){e.email=l},expression:"email"}})],1),e._v(" "),t("q-field",{attrs:{count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error.",warning:e.warning,"warning-label":"Hey, we got a warning."}},[t("q-input",{attrs:{inverted:""},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error.",warning:e.warning,"warning-label":"Hey, we got a warning."}},[t("q-input",{attrs:{inverted:"",color:"purple","stack-label":"Input stack label"},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper",error:e.error,"error-label":"Oops, we got an error.",warning:e.warning,"warning-label":"Hey, we got a warning."}},[t("q-input",{attrs:{inverted:"",color:"secondary",type:"email",suffix:"@email.com","float-label":"Email address"},model:{value:e.email,callback:function(l){e.email=l},expression:"email"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("Wrapping form components")]),e._v(" "),t("q-field",{attrs:{icon:"supervisor_account",count:"",helper:"Type names"}},[t("q-chips-input",{attrs:{"float-label":"Chips Input"},model:{value:e.chips,callback:function(l){e.chips=l},expression:"chips"}})],1),e._v(" "),t("q-field",{attrs:{icon:"work",label:"Employees",count:10,helper:"Type names"}},[t("q-chips-input",{attrs:{inverted:"","float-label":"Chips Input"},model:{value:e.chips,callback:function(l){e.chips=l},expression:"chips"}})],1),e._v(" "),t("q-field",{attrs:{icon:"place",label:"Meeting city",helper:"Pick a city"}},[t("q-select",{attrs:{"float-label":"Select",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}})],1),e._v(" "),t("q-field",{attrs:{icon:"cake",label:"Desert flavor",helper:"Pick a flavor"}},[t("q-option-group",{attrs:{color:"purple",options:[{label:"Cherry",value:"cherry"},{label:"Pineapple",value:"pineapple"},{label:"Peach",value:"peach"}]},model:{value:e.group,callback:function(l){e.group=l},expression:"group"}})],1),e._v(" "),t("q-field",{attrs:{icon:"access_time",label:"Meeting time",helper:"Pick a date"}},[t("q-datetime",{attrs:{type:"date",color:"secondary","float-label":"Datetime"},model:{value:e.date,callback:function(l){e.date=l},expression:"date"}})],1),e._v(" "),t("q-field",{attrs:{icon:"rate_review",label:"Review rating",helper:"How much do you like the review?"}},[t("q-rating",{attrs:{size:"2rem",color:"primary",max:5},model:{value:e.rating,callback:function(l){e.rating=l},expression:"rating"}})],1),e._v(" "),t("q-field",{attrs:{icon:"format_color_fill",label:"Choose color",helper:"I'll fill it with this color"}},[t("q-color",{attrs:{color:"primary","float-label":"Color"},model:{value:e.color,callback:function(l){e.color=l},expression:"color"}})],1),e._v(" "),t("q-field",{attrs:{icon:"edit_location",count:"",label:"Favorite cities",helper:"Pick some you want to visit"}},[t("q-option-group",{attrs:{type:"toggle",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.group2,callback:function(l){e.group2=l},expression:"group2"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("On dark background")]),e._v(" "),t("div",{staticClass:"dark-example"},[t("q-field",{attrs:{count:10,helper:"Some helper"}},[t("q-input",{attrs:{dark:"",color:"yellow"},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{icon:"place",label:"Meeting city",helper:"Pick a city"}},[t("q-select",{attrs:{dark:"","float-label":"Select",color:"yellow",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}})],1),e._v(" "),t("q-field",{attrs:{dark:"",icon:"rate_review",label:"Review rating",helper:"How much do you like the review?"}},[t("q-rating",{attrs:{size:"2rem",max:5},model:{value:e.rating,callback:function(l){e.rating=l},expression:"rating"}})],1)],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("Orientation")]),e._v(" "),t("div",{staticClass:"dark-example"},[t("q-field",{attrs:{label:"Always vertical",orientation:"vertical",count:10,helper:"Some helper"}},[t("q-input",{attrs:{dark:"",color:"orange"},model:{value:e.text,callback:function(l){e.text=l},expression:"text"}})],1),e._v(" "),t("q-field",{attrs:{orientation:"vertical",icon:"edit_location",label:"Always vertical",count:"",helper:"Pick some you want to visit"}},[t("q-option-group",{attrs:{type:"toggle",dark:"",color:"orange",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.group2,callback:function(l){e.group2=l},expression:"group2"}})],1),e._v(" "),t("q-field",{attrs:{orientation:"horizontal",icon:"edit_location",label:"Always horizontal",count:"",helper:"And next go to"}},[t("q-option-group",{attrs:{type:"radio",dark:"",color:"orange",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.group3,callback:function(l){e.group3=l},expression:"group3"}})],1),e._v(" "),t("q-field",{attrs:{dark:"",orientation:"horizontal",label:"Always horizontal","label-width":4,helper:"How much do you like the review?"}},[t("q-rating",{attrs:{size:"2rem",color:"orange",max:3},model:{value:e.rating,callback:function(l){e.rating=l},expression:"rating"}})],1)],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("Alignment with inset (view on desktop)")]),e._v(" "),t("q-field",{attrs:{icon:"wifi",label:"Label",helper:"No inset"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("q-field",{attrs:{inset:"label",icon:"wifi",helper:"Inset label"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("q-field",{attrs:{inset:"icon",label:"Label",helper:"Icon inset"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("q-field",{attrs:{inset:"full",helper:"Full inset"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("Label width (view on desktop)")]),e._v(" "),t("q-field",{attrs:{"label-width":3,icon:"wifi",label:"Width 3/12",helper:"Some helper"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("q-field",{attrs:{"label-width":5,icon:"wifi",label:"Width 5/12",helper:"Some helper"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("q-field",{attrs:{"label-width":8,icon:"wifi",label:"Width 8/12",helper:"Some helper"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1),e._v(" "),t("q-field",{attrs:{"label-width":12,icon:"wifi",label:"Width 12/12",helper:"Some helper"}},[t("q-input",{model:{value:e.text2,callback:function(l){e.text2=l},expression:"text2"}})],1)],1)])},i=[];a._withStripped=!0;var r=t("XyMi"),o=Object(r.a)({data:function(){return{text:"",text2:"",email:"",select:"bucharest",group:"pineapple",group2:["paris"],group3:"london",chips:["Jim"],color:null,date:null,rating:0,error:!0,warning:!1}},watch:{error:function(e){e&&(this.warning=!1)},warning:function(e){e&&(this.error=!1)}}},a,i,!1,null,null,null);o.options.__file="src/pages/showcase/forms/field.vue";l.default=o.exports},cSth:function(e,l,t){var a=t("t3GF");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("rjj0").default)("4674b73f",a,!1,{})},t3GF:function(e,l,t){(e.exports=t("FZ+f")(!1)).push([e.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])}});
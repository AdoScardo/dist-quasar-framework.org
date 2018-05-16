(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57,85],{PoK5:function(e,a,l){"use strict";l.r(a);var o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[l("div",{staticStyle:{width:"500px","max-width":"90vw"}},[l("p",{staticClass:"caption"},[e._v("Works great with Autocomplete so you might want to check its page.")]),e._v(" "),l("br"),e._v(" "),l("q-search",{attrs:{"no-icon":""},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{attrs:{icon:"place",color:"amber","stack-label":"Seach for a place"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{attrs:{icon:"local_airport",color:"secondary","float-label":"Search for an airport",suffix:"@ nearby"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{attrs:{icon:"local_dining",inverted:"",clearable:"",placeholder:"Search for a nearby restaurant"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{attrs:{icon:"ev_station","inverted-light":"",color:"amber",clearable:"","stack-label":"Seach for an ev station",placeholder:"Type a name"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{attrs:{icon:"hotel",inverted:"",color:"secondary","float-label":"Search for a hotel"},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-search",{attrs:{icon:"local_movies",inverted:"",color:"black",clearable:""},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("\n      Lazy input\n      "),l("span",{staticClass:"chip-container"},[l("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("\n          Model: "+e._s(e.lazy)+"\n        ")])],1)]),e._v(" "),l("q-search",{attrs:{value:e.lazy,icon:"local_movies",inverted:"",color:"purple",loading:""},on:{change:function(a){return e.lazy=a}}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),l("q-field",{attrs:{icon:"local_hospital",label:"Local hospital",count:15,helper:"Type a name"}},[l("q-search",{attrs:{clearable:""},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}})],1),e._v(" "),l("q-field",{attrs:{icon:"local_car_wash",label:"Car wash",count:12,helper:"Type a name"}},[l("q-search",{attrs:{inverted:"",clearable:""},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("Hide the underline")]),e._v(" "),l("q-search",{attrs:{"hide-underline":""},model:{value:e.textUnderline,callback:function(a){e.textUnderline=a},expression:"textUnderline"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Readonly state")]),e._v(" "),l("q-search",{attrs:{readonly:"",icon:"local_dining",color:"orange",placeholder:"Search for a nearby restaurant"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}}),e._v(" "),l("q-search",{attrs:{readonly:"",icon:"local_dining","inverted-light":"",color:"orange",placeholder:"Search for a nearby restaurant"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Disable state")]),e._v(" "),l("q-search",{attrs:{disable:"",icon:"local_dining",color:"orange",placeholder:"Search for a nearby restaurant"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}}),e._v(" "),l("q-search",{attrs:{disable:"",icon:"local_dining","inverted-light":"",color:"orange",placeholder:"Search for a nearby restaurant"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("Error/Warning states")]),e._v(" "),l("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(a){e.error=a},expression:"error"}}),e._v(" "),l("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning,callback:function(a){e.warning=a},expression:"warning"}}),e._v(" "),l("q-search",{attrs:{error:e.error,warning:e.warning,icon:"ev_station",color:"secondary","stack-label":"Seach for an ev station",placeholder:"Type a name"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}}),e._v(" "),l("q-search",{attrs:{error:e.error,warning:e.warning,icon:"ev_station",inverted:"",color:"secondary","stack-label":"Seach for an ev station",placeholder:"Type a name"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}}),e._v(" "),l("p",{staticClass:"caption"},[e._v("On a dark background")]),e._v(" "),l("div",{staticClass:"dark-example"},[l("q-search",{attrs:{dark:"",icon:"local_airport",color:"secondary","stack-label":"Search for an airport",clearable:""},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),e._v(" "),l("q-field",{attrs:{dark:"",icon:"local_car_wash",label:"Car wash",count:"",helper:"Type a name"}},[l("q-search",{attrs:{dark:"",color:"yellow"},model:{value:e.model2,callback:function(a){e.model2=a},expression:"model2"}})],1)],1)],1)])},r=[];o._withStripped=!0;l("lNCw");var n={data:function(){return{model:"",model2:"",lazy:null,textUnderline:"No underline",error:!0,warning:!1}},watch:{error:function(e){e&&(this.warning=!1)},warning:function(e){e&&(this.error=!1)}}},c=n,t=l("crz2"),s=Object(t["a"])(c,o,r,!1,null,null,null);a["default"]=s.exports},lNCw:function(e,a,l){}}]);
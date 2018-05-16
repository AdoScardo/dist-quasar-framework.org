(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59,84],{flrz:function(a,n,s){},lqVj:function(a,n,s){"use strict";s.r(n);var e=function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("q-page",{staticClass:"docs-slider row justify-center",attrs:{padding:""}},[s("div",{staticStyle:{width:"500px","max-width":"90vw"}},[s("p",{staticClass:"caption"},[a._v("\n      Standalone\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.standard.min)+" to "+a._s(a.standard.max)+" (0 to 50)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:0,max:50},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),s("q-range",{attrs:{min:0,max:50,square:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      With Floating Point Precision\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.precision.min)+" to "+a._s(a.precision.max)+" (0.1 to 1.5)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:.1,max:1.5,step:.1,decimals:1,color:"amber"},model:{value:a.precision,callback:function(n){a.precision=n},expression:"precision"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      With Label\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label.min)+" to "+a._s(a.label.max)+" (-20 to 20, step 4)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:-20,max:20,step:4,label:"",color:"purple"},model:{value:a.label,callback:function(n){a.label=n},expression:"label"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      With Step\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.step.min)+" to "+a._s(a.step.max)+" (0 to 45, step 5)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:0,max:45,step:5,label:"",color:"deep-orange"},model:{value:a.step,callback:function(n){a.step=n},expression:"step"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Snap to Step\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.snap.min)+" to "+a._s(a.snap.max)+" (0 to 10, step 2)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:0,max:10,step:2,label:"",snap:""},model:{value:a.snap,callback:function(n){a.snap=n},expression:"snap"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      With Markers + Snap to Step\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.marker.min)+" to "+a._s(a.marker.max)+" (-6 to 10, step 2)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:-6,max:10,step:2,label:"",snap:"",markers:"",color:"orange"},model:{value:a.marker,callback:function(n){a.marker=n},expression:"marker"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Display Label Always\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label.min)+" to "+a._s(a.label.max)+" (-20 to 20, step 4)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:-20,max:20,step:4,"label-always":"",color:"brown"},model:{value:a.label,callback:function(n){a.label=n},expression:"label"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Custom Label Values\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label.min)+" to "+a._s(a.label.max)+" (-20 to 20, step 4)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{"left-label-value":a.label.min+"px","right-label-value":a.label.max+"px",min:-20,max:20,step:4,"label-always":""},model:{value:a.label,callback:function(n){a.label=n},expression:"label"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Drag Range\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.range.min)+" to "+a._s(a.range.max)+" (0 to 100, step 1)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:0,max:100,label:"","drag-range":""},model:{value:a.range,callback:function(n){a.range=n},expression:"range"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Drag Range + Snap to Step\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.rangeSnap.min)+" to "+a._s(a.rangeSnap.max)+" (0 to 100, step 5)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:0,max:100,step:5,"drag-range":"",label:"",markers:"",snap:"",color:"lime"},model:{value:a.rangeSnap,callback:function(n){a.rangeSnap=n},expression:"rangeSnap"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Drag Only Range (Fixed Interval)\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.onlyRange.min)+" to "+a._s(a.onlyRange.max)+" (0 to 100, step 5)\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{min:0,max:100,step:5,"drag-only-range":"",label:"",color:"info"},model:{value:a.onlyRange,callback:function(n){a.onlyRange=n},expression:"onlyRange"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("\n      Lazy input\n      "),s("span",{staticClass:"chip-container"},[s("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.lazy)+"\n        ")])],1)]),a._v(" "),s("q-range",{attrs:{value:a.lazy,min:0,max:50,label:""},on:{change:function(n){a.lazy=n}}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("Readonly State")]),a._v(" "),s("q-range",{attrs:{color:"secondary",min:0,max:50,readonly:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("Disabled State")]),a._v(" "),s("q-range",{attrs:{color:"secondary",min:0,max:50,disable:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("Error State")]),a._v(" "),s("div",{staticClass:"q-ma-xs q-mb-md"},[s("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:a.error,callback:function(n){a.error=n},expression:"error"}}),a._v(" "),s("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:a.warning,callback:function(n){a.warning=n},expression:"warning"}})],1),a._v(" "),s("q-range",{attrs:{error:a.error,warning:a.warning,min:0,max:50},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),s("q-range",{attrs:{error:a.error,warning:a.warning,"label-always":"",min:0,max:50},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),s("p",{staticClass:"caption"},[a._v("In a Field")]),a._v(" "),s("q-field",{attrs:{icon:"local_atm",label:"Price range",helper:"Refine price range filter (in USD)"}},[s("q-range",{staticClass:"orange",attrs:{min:0,max:50,label:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}})],1),a._v(" "),s("p",{staticClass:"caption"},[a._v("Inside of a List")]),a._v(" "),s("q-list",[s("q-item",[s("q-item-side",{attrs:{icon:"local_atm"}}),a._v(" "),s("q-item-main",[s("q-range",{attrs:{min:0,max:50,label:"",color:"secondary "},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}})],1)],1),a._v(" "),s("q-item",[s("q-item-side",{attrs:{icon:"euro symbol"}}),a._v(" "),s("q-item-main",[s("q-range",{attrs:{min:0,max:50,label:"",color:"amber"},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}})],1)],1)],1)],1)])},t=[];e._withStripped=!0;s("flrz");var r={data:function(){return{standard:{min:10,max:35},precision:{min:.2,max:.7},step:{min:10,max:20},label:{min:-12,max:8},snap:{min:2,max:6},marker:{min:6,max:8},range:{min:20,max:65},rangeSnap:{min:35,max:60},onlyRange:{min:10,max:35},lazy:{min:10,max:35},error:!0,warning:!1}},watch:{error:function(a){a&&(this.warning=!1)},warning:function(a){a&&(this.error=!1)}}},l=r,i=s("crz2"),o=Object(i["a"])(l,e,t,!1,null,null,null);n["default"]=o.exports}}]);
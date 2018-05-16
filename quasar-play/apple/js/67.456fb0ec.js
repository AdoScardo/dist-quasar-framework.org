(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67,85],{lNCw:function(t,a,e){},"moY/":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[e("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e("p",{staticClass:"caption"},[e("span",{staticClass:"desktop-only"},[t._v("\n        On a real mobile device DateTime Input opens up a Modal\n        instead of a Popover.\n      ")]),t._v(" "),e("span",{staticClass:"mobile-only"},[t._v("\n        On a desktop platform DateTime Input opens up a Popover\n        instead of a Modal.\n      ")])]),t._v(" "),e("q-datetime",{attrs:{"float-label":"Date"},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}}),t._v(" "),e("q-datetime",{attrs:{inverted:"",color:"secondary","first-day-of-week":1,"stack-label":"Date (Monday as first day)"},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}}),t._v(" "),e("q-datetime",{attrs:{inverted:"",color:"light-blue","first-day-of-week":6,"stack-label":"Date (Saturday as first day)"},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}}),t._v(" "),e("q-datetime",{attrs:{"inverted-light":"",color:"orange",type:"time","float-label":"Time"},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}}),t._v(" "),"mat"===t.$q.theme?e("q-datetime",{attrs:{color:"brown",type:"time",format24h:"","float-label":"Time (24h) format"},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}}):t._e(),t._v(" "),e("q-datetime",{attrs:{color:"purple",type:"datetime","float-label":"Date & Time"},model:{value:t.date3,callback:function(a){t.date3=a},expression:"date3"}}),t._v(" "),"mat"===t.$q.theme?[e("p",{staticClass:"caption"},[t._v("Minimal Datetime Interface (No header)")]),t._v(" "),e("q-datetime",{attrs:{minimal:"",color:"purple",type:"datetime","float-label":"Date & Time"},model:{value:t.date3,callback:function(a){t.date3=a},expression:"date3"}})]:t._e(),t._v(" "),e("p",{staticClass:"caption"},[t._v("\n      Lazy input\n    ")]),t._v(" "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[t._v("\n        Model: "+t._s(t.lazy)+"\n      ")])],1),t._v(" "),e("q-datetime",{attrs:{value:t.lazy,type:"date",color:"amber",clearable:""},on:{change:function(a){return t.lazy=a}}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("Clearable")]),t._v(" "),e("q-datetime",{attrs:{type:"date",color:"amber",clearable:""},model:{value:t.today,callback:function(a){t.today=a},expression:"today"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("With default value")]),t._v(" "),e("q-datetime",{attrs:{"default-value":t.defaultValue,type:"datetime",color:"brown",clearable:"","float-label":"With default value & placeholder",placeholder:"Start of this year as default"},model:{value:t.date4,callback:function(a){t.date4=a},expression:"date4"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("With display value")]),t._v(" "),e("q-datetime",{attrs:{"display-value":t.date5?"Picked date. Thanks!":"Pick a date, will ya?",type:"date",inverted:"",color:"brown","stack-label":"With display value"},model:{value:t.date5,callback:function(a){t.date5=a},expression:"date5"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("With custom format")]),t._v(" "),e("q-datetime",{attrs:{type:"date",color:"brown",format:"YYYY-MMMM-dddd Do Qo Q"},model:{value:t.date5,callback:function(a){t.date5=a},expression:"date5"}}),t._v(" "),"mat"===t.$q.theme?e("p",{staticClass:"caption"},[t._v("With default view")]):t._e(),t._v(" "),"mat"===t.$q.theme?e("q-datetime",{attrs:{type:"date",color:"brown","default-view":"month"},model:{value:t.date4,callback:function(a){t.date4=a},expression:"date4"}}):t._e(),t._v(" "),e("p",{staticClass:"caption"},[t._v("Force either modal or popover")]),t._v(" "),e("q-datetime",{attrs:{modal:"","stack-label":"Always open modal"},model:{value:t.today,callback:function(a){t.today=a},expression:"today"}}),t._v(" "),e("q-datetime",{attrs:{popover:"","stack-label":"Always open popover"},model:{value:t.today,callback:function(a){t.today=a},expression:"today"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("Min / max selection")]),t._v(" "),e("q-datetime",{attrs:{min:t.tomorrow,"stack-label":"Pick date starting with tomorrow"},model:{value:t.date7,callback:function(a){t.date7=a},expression:"date7"}}),t._v(" "),e("q-datetime",{attrs:{max:t.yesterday,"stack-label":"Pick a date in the past"},model:{value:t.date8,callback:function(a){t.date8=a},expression:"date8"}}),t._v(" "),e("q-datetime",{attrs:{type:"datetime",min:t.yesterday,max:t.tomorrow,"stack-label":"Pick a date & time in an interval"},model:{value:t.date9,callback:function(a){t.date9=a},expression:"date9"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("Readonly state")]),t._v(" "),e("q-datetime",{attrs:{readonly:""},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("q-datetime",{attrs:{readonly:"",inverted:""},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("Disable state")]),t._v(" "),e("q-datetime",{attrs:{disable:""},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("q-datetime",{attrs:{disable:"",inverted:""},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("Error/Warning states")]),t._v(" "),e("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:t.error,callback:function(a){t.error=a},expression:"error"}}),t._v(" "),e("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:t.warning,callback:function(a){t.warning=a},expression:"warning"}}),t._v(" "),e("q-datetime",{attrs:{error:t.error,warning:t.warning,"float-label":"Float label"},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("q-datetime",{attrs:{error:t.error,warning:t.warning,inverted:"","float-label":"Float label"},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("Hide underline")]),t._v(" "),e("q-datetime",{attrs:{"hide-underline":""},model:{value:t.state,callback:function(a){t.state=a},expression:"state"}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("In a Field")]),t._v(" "),e("q-field",{attrs:{icon:"local_movies",helper:"Pick when to schedule a movie"}},[e("q-datetime",{attrs:{min:t.today,"float-label":"Pick date"},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}})],1),t._v(" "),e("q-field",{attrs:{icon:"golf_course",label:"Golf course",helper:"Pick a date"}},[e("q-datetime",{attrs:{inverted:"",color:"purple"},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}})],1),t._v(" "),e("p",{staticClass:"caption"},[t._v("On dark background")]),t._v(" "),e("div",{staticClass:"dark-example"},[e("q-datetime",{attrs:{dark:"","stack-label":"Pick start date & time",color:"amber",type:"datetime"},model:{value:t.date6,callback:function(a){t.date6=a},expression:"date6"}}),t._v(" "),e("q-field",{attrs:{dark:"",icon:"school",label:"Javascript",helper:"Pick a start time"}},[e("q-datetime",{attrs:{dark:"",color:"secondary",type:"time"},model:{value:t.date6,callback:function(a){t.date6=a},expression:"date6"}})],1)],1),t._v(" "),e("p",{staticClass:"caption"},[t._v("In a List")]),t._v(" "),e("q-list",[e("q-list-header",[t._v("Date or Time")]),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"access_time"}}),t._v(" "),e("q-item-main",[e("q-datetime",{staticClass:"no-margin",attrs:{type:"time"},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}})],1)],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"update"}}),t._v(" "),e("q-item-main",[e("q-datetime",{staticClass:"no-margin",attrs:{type:"date"},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}})],1)],1),t._v(" "),e("q-item-separator"),t._v(" "),e("q-list-header",[t._v("Date & Time")]),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"notifications"}}),t._v(" "),e("q-item-main",[e("q-datetime",{staticClass:"no-margin",attrs:{type:"datetime"},model:{value:t.date3,callback:function(a){t.date3=a},expression:"date3"}})],1)],1)],1)],2)])},i=[];l._withStripped=!0;var o=e("W8m1"),s=(e("lNCw"),new Date),n=o["date"].startOfDate,d=o["date"].addToDate,r=o["date"].subtractFromDate,c={data:function(){return{date1:null,date2:null,date3:null,date4:null,date5:null,date6:null,date7:null,date8:null,date9:null,lazy:null,error:!0,warning:!1,today:s,tomorrow:d(s,{days:1}),yesterday:r(s,{days:1}),state:new Date,defaultValue:n(s,"year")}},watch:{error:function(t){t&&(this.warning=!1)},warning:function(t){t&&(this.error=!1)},error2:function(t){t&&(this.warning2=!1)},warning2:function(t){t&&(this.error2=!1)}}},m=c,v=e("crz2"),p=Object(v["a"])(m,l,i,!1,null,null,null);a["default"]=p.exports}}]);
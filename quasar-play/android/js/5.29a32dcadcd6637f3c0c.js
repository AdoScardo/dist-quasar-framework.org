webpackJsonp([5,86],{"2hGe":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("cSth");var t=n("HozF"),i=n("SMoZ"),r=n.n(i),o=["alarm","email","search","build","card_giftcard","perm_identity","receipt","schedule","speaker_phone","archive","weekend","battery_charging_full"];function s(){return r.a.map(function(a){return{label:a,sublabel:function(){if(Math.floor(50*Math.random())%4==0)return"UID: "+Object(t.uid)().substring(0,8)}(),icon:o[Math.floor(Math.random()*o.length)],stamp:function(){if(Math.floor(50*Math.random())%3==0)return Math.floor(10*Math.random())+" min"}(),value:a}})}var l={data:function(){return{terms:"",countries:s()}},methods:{search:function(a,e){setTimeout(function(){e(Object(t.filter)(a,{field:"value",list:s()}))},1e3)},selected:function(a){this.$q.notify('Selected suggestion "'+a.label+'"')}}},c=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[n("p",{staticClass:"caption",staticStyle:{"margin-bottom":"40px"}},[a._v("\n      These examples feature countries autocomplete."),n("br"),a._v("\n      On desktop, Escape key closes the suggestions popover and you can navigate with keyboard arrow keys. Selection is made with either mouse/finger tap or by Enter key.\n    ")]),a._v(" "),n("q-search",{attrs:{placeholder:"Start typing a country name"},model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{on:{search:a.search,selected:a.selected}})],1),a._v(" "),n("q-search",{attrs:{inverted:"",placeholder:"Start typing a country name"},model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{on:{search:a.search,selected:a.selected}})],1),a._v(" "),n("p",{staticClass:"caption"},[a._v("Maximum of 2 results at a time")]),a._v(" "),n("q-search",{attrs:{"inverted-light":"",color:"amber"},model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{attrs:{"max-results":2},on:{search:a.search,selected:a.selected}})],1),a._v(" "),n("p",{staticClass:"caption"},[a._v("Minimum 3 characters to trigger search")]),a._v(" "),n("q-input",{attrs:{color:"amber",placeholder:"Type 'fre'"},model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{attrs:{"min-characters":3},on:{search:a.search,selected:a.selected}})],1),a._v(" "),n("p",{staticClass:"caption"},[a._v("Custom debounce before triggering search")]),a._v(" "),n("q-input",{attrs:{color:"amber",placeholder:"One second debounce"},model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{attrs:{debounce:1e3},on:{search:a.search,selected:a.selected}})],1),a._v(" "),n("p",{staticClass:"caption"},[a._v("Static List")]),a._v(" "),n("q-search",{attrs:{inverted:"",color:"secondary",placeholder:"Featuring static data"},model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{attrs:{"static-data":{field:"value",list:a.countries}},on:{selected:a.selected}})],1),a._v(" "),n("p",{staticClass:"caption"},[a._v("Separator between results")]),a._v(" "),n("q-search",{model:{value:a.terms,callback:function(e){a.terms=e},expression:"terms"}},[n("q-autocomplete",{attrs:{separator:""},on:{search:a.search,selected:a.selected}})],1)],1)])},u=[];c._withStripped=!0;var d=n("XyMi"),m=Object(d.a)(l,c,u,!1,null,null,null);m.options.__file="src/pages/showcase/forms/autocomplete.vue";e.default=m.exports},SMoZ:function(a,e){a.exports=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","England","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji Islands","Finland","France","French Guiana","French Polynesia","French Southern territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Ireland","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Scotland","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","SriLanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands, British","Virgin Islands, U.S.","Wales","Wallis and Futuna","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},cSth:function(a,e,n){var t=n("t3GF");"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);(0,n("rjj0").default)("4674b73f",t,!1,{})},t3GF:function(a,e,n){(a.exports=n("FZ+f")(!1)).push([a.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"register"}},[a("b-container",{staticClass:"register-content"},[a("b-row",[a("b-col",{staticClass:"logo",attrs:{cols:"12"}},[a("b-img",{attrs:{src:r("a2eb")}})],1),a("b-col",{staticClass:"formstyle",attrs:{cols:"12"}},[a("b-form",{staticStyle:{width:"70%"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"","label-for":"input-account",state:t.state.account,description:"帳號長度限制為 4 到 20 個字","invalid-feedback":"帳號格式不正確"}},[a("b-form-input",{staticClass:"rounded-pill",attrs:{id:"input-accounts",type:"text",required:"",placeholder:"Account",state:t.state.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),a("b-form-group",{attrs:{label:"","label-for":"input-password",state:t.state.password,description:"密碼長度限制為 4 到 20 個字","invalid-feedback":"密碼格式不正確"}},[a("b-form-input",{staticClass:"rounded-pill",attrs:{id:"input-password",type:"password",required:"",placeholder:"Password",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-form-group",{attrs:{label:"","label-for":"input-email",state:t.state.email,description:"請輸入有效的信箱","invalid-feedback":"信箱格式不正確"}},[a("b-form-input",{staticClass:"rounded-pill",attrs:{id:"input-email",type:"text",required:"",placeholder:"E-mail",state:t.state.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("div",{staticClass:"text-center"},[a("b-btn",{staticClass:"rounded-pill btn-block",attrs:{variant:"info",type:"submit"}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)},n=[],o=r("1da1");r("96cf");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t){var e="string"===typeof t||t instanceof String;if(!e){var r=i(t);throw null===t?r="null":"object"===r&&(r=t.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)"undefined"===typeof t[r]&&(t[r]=e[r]);return t}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){var r,a;c(t),"object"===s(e)?(r=e.min||0,a=e.max):(r=arguments[1],a=arguments[2]);var n=encodeURI(t).split(/%..|./).length-1;return n>=r&&("undefined"===typeof a||n<=a)}var f={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function p(t,e){c(t),e=l(e,f),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var r=t.split("."),a=r[r.length-1];if(e.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(a))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(a))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(a))&&r.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}var m="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",d="(".concat(m,"[.]){3}").concat(m),b=new RegExp("^".concat(d,"$")),A="(?:[0-9a-fA-F]{1,4})",x=new RegExp("^("+"(?:".concat(A,":){7}(?:").concat(A,"|:)|")+"(?:".concat(A,":){6}(?:").concat(d,"|:").concat(A,"|:)|")+"(?:".concat(A,":){5}(?::").concat(d,"|(:").concat(A,"){1,2}|:)|")+"(?:".concat(A,":){4}(?:(:").concat(A,"){0,1}:").concat(d,"|(:").concat(A,"){1,3}|:)|")+"(?:".concat(A,":){3}(?:(:").concat(A,"){0,2}:").concat(d,"|(:").concat(A,"){1,4}|:)|")+"(?:".concat(A,":){2}(?:(:").concat(A,"){0,3}:").concat(d,"|(:").concat(A,"){1,5}|:)|")+"(?:".concat(A,":){1}(?:(:").concat(A,"){0,4}:").concat(d,"|(:").concat(A,"){1,6}|:)|")+"(?::((?::".concat(A,"){0,5}:").concat(d,"|(?::").concat(A,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(c(t),e=String(e),!e)return g(t,4)||g(t,6);if("4"===e){if(!b.test(t))return!1;var r=t.split(".").sort((function(t,e){return t-e}));return r[3]<=255}return"6"===e&&!!x.test(t)}var h={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},w=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,C=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,y=/^[a-z\d]+$/,E=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,F=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,D=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,v=254;function I(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var r=/[\.";<>]/.test(e);if(r){if(e===t)return!1;var a=e.split('"').length===e.split('\\"').length;if(!a)return!1}return!0}function k(t,e){if(c(t),e=l(e,h),e.require_display_name||e.allow_display_name){var r=t.match(w);if(r){var a=r[1];if(t=t.replace(a,"").replace(/(^<|>$)/g,""),a.endsWith(" ")&&(a=a.substr(0,a.length-1)),!I(a))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>v)return!1;var n=t.split("@"),o=n.pop(),i=n.join("@"),s=o.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===s||"googlemail.com"===s)){i=i.toLowerCase();var f=i.split("+")[0];if(!u(f.replace(".",""),{min:6,max:30}))return!1;for(var m=f.split("."),d=0;d<m.length;d++)if(!y.test(m[d]))return!1}if(!1===e.ignore_max_length&&(!u(i,{max:64})||!u(o,{max:254})))return!1;if(!p(o,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!g(o)){if(!o.startsWith("[")||!o.endsWith("]"))return!1;var b=o.substr(1,o.length-2);if(0===b.length||!g(b))return!1}}if('"'===i[0])return i=i.slice(1,i.length-1),e.allow_utf8_local_part?D.test(i):E.test(i);for(var A=e.allow_utf8_local_part?F:C,x=i.split("."),k=0;k<x.length;k++)if(!A.test(x[k]))return!1;return!e.blacklisted_chars||-1===i.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}var B={data:function(){return{form:{account:"",password:"",email:""}}},computed:{state:function(){var t=this.form.account,e=this.form.password,r=this.form.email;return{account:0===t.length?null:t.length>=4&&t.length<=20,password:0===e.length?null:e.length>=4&&e.length<=20,email:0===r.length?null:k(r)}}},methods:{submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users",t.form);case 3:t.$swal({icon:"success",title:"Success",text:"Thank you for registering"}),t.$router.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"Error",text:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},U=B,R=(r("cc3d"),r("2877")),q=Object(R["a"])(U,a,n,!1,null,"0eeb32ef",null);e["default"]=q.exports},a1b0:function(t,e,r){},a2eb:function(t,e){t.exports="data:image/png;base64,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"},cc3d:function(t,e,r){"use strict";r("a1b0")}}]);
//# sourceMappingURL=register.e21132f7.js.map
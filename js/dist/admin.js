module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=flarum.core.compat.app},,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);var a=r(3),l="alongwy-es.admin.settings.",i=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.title=function(){return o.a.translator.trans(l+"title")},a.form=function(){return[m("h3",o.a.translator.trans(l+"ESOptionsHeading")),m("hr"),m(".Form-group",[m("label",o.a.translator.trans(l+"host")),m(".helpText",o.a.translator.trans(l+"hostHelp")),m("input[type=text].FormControl",{bidi:this.setting("alongwy-es.host"),placeholder:"elasticsearch"})]),m(".Form-group",[m("label",o.a.translator.trans(l+"port")),m(".helpText",o.a.translator.trans(l+"portHelp")),m("input[type=text].FormControl",{bidi:this.setting("alongwy-es.port"),placeholder:"9200"})]),m(".Form-group",[m("label",o.a.translator.trans(l+"scheme")),m(".helpText",o.a.translator.trans(l+"schemeHelp")),m("input[type=text].FormControl",{bidi:this.setting("alongwy-es.scheme"),placeholder:"http"})])]},n}(r.n(a).a);o.a.initializers.add("alongwy-es",(function(){o.a.extensionSettings["alongwy-es"]=function(){return o.a.modal.show(new i)}}))}]);
//# sourceMappingURL=admin.js.map
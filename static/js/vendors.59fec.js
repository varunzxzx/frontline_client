(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{766:function(e,t,r){"use strict";r(533);var n=r(214),a=(r(103),r(0)),i=r.n(a),o=r(755),u=r(749),l=r(116),c={organization:o.a,individual:u.a};t.a=function(e){var t=e.value,r=e.handleChange,a=e.options;return i.a.createElement("div",null,i.a.createElement(n.a.Group,{value:t,buttonStyle:"solid",onChange:function(e){r(e.target.value)}},a.map((function(e){return i.a.createElement(n.a.Button,{key:e.id,value:e.id},(t=e.id,r=function(){return i.a.createElement("span",null)},t in c&&(r=c[t]),i.a.createElement(r,null)),i.a.createElement(l.a,null),e.value);var t,r}))))}},779:function(e,t,r){"use strict";r.r(t),r.d(t,"revFormatData",(function(){return m}));r(95),r(59),r(63),r(75),r(103),r(76),r(84),r(85),r(68),r(129),r(104),r(128),r(142),r(211),r(212),r(213);var n=r(0),a=r.n(n),i=r(771),o=r(766),u=r(201),l=r(185),c=r(77),f=r(767);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){var t={},r={};return e.forEach((function(e){var n={id:[],values:{}};e.values.forEach((function(e){var t=e.id;n.id.push(t),n.values[t]=e.attributes})),t[e.id]=n.id.map((function(t){return c.a.services[e.id][t]})),r[e.id]=n})),{services:r,meta:t}};t.default=Object(u.a)((function(e){var t=e.reset,r=e.mode,u=e.setMode,c=e.save,s=e.appeal,p=void 0===s?null:s,b=v(Object(n.useState)(!0),2),y=b[0],O=b[1],h=v(Object(n.useState)({region:["KA","5"],meta:{}}),2),g=h[0],j=h[1];Object(n.useEffect)((function(){if(p){var e=m(p.services);j(e)}O(!1)}),[p]);var E=d(d({},l.a),{},{onSubmit:function(e){e&&(e.mode=r,e.act="kind",p&&p._id&&(e.ref={appeal_id:p._id}),Object(f.a)(e),c(e))},reset:t,initialValues:g});return a.a.createElement("div",{style:{textAlign:"left"}},a.a.createElement("h2",null,"Support in Kind"),y?a.a.createElement("div",null," Loading... "):a.a.createElement("div",null,a.a.createElement(o.a,{value:r,handleChange:u,options:l.a.other.modeOptions}),a.a.createElement("div",{style:{marginTop:30}},"individual"===r?a.a.createElement(i.b,E):a.a.createElement(i.e,E))))}))}}]);
(this["webpackJsonpqventus-take-home"]=this["webpackJsonpqventus-take-home"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(4),i=n.n(a),r=(n(9),n(2)),o=function(e,t){switch(t.type){case"useValidation":return e[t.payload].isInUse=!0,e;default:throw new Error}},u={hasNumber:{desc:"Has a Number 0-9",validation:function(e){return/\d/.test(e)},isInUse:!1},hasUpperCase:{desc:"Has uppercase Letter",validation:function(e){return/[A-Z]/.test(e)},isInUse:!1},hasSpecialChar:{desc:"Has a special char !@#$%^&*",validation:function(e){return/[!@#$%^&*]/.test(e)},isInUse:!1},noConsecutiveLetters:{desc:"Has no consecutive letters",validation:function(e){for(var t=0;t<e.length;t++)if(e[t]===e[t-1]&&/[a-zA-Z]/.test(e[t]))return!1;return!0},isInUse:!1}},d=n(0),j=function(e){var t=e.isValidated;return Object(d.jsx)("div",{className:"icon-circle ".concat(t?"success":""),children:t?Object(d.jsx)("div",{children:"\u2713"}):Object(d.jsx)("div",{children:"X"})})},l=(n(11),function(e){var t=e.options,n=Object(s.useReducer)(o,u),c=Object(r.a)(n,2),a=c[0],i=c[1],l=Object(s.useState)(""),h=Object(r.a)(l,2),b=h[0],f=h[1],p=Object(s.useState)({}),O=Object(r.a)(p,2),v=O[0],x=O[1],m=Object(s.useState)([]),w=Object(r.a)(m,2),C=w[0],g=w[1];return Object(s.useEffect)((function(){t.forEach((function(e){i({type:"useValidation",payload:e})}));var e={};Object.keys(a).forEach((function(t){a[t].isInUse&&(e[t]=a[t])})),x(e)}),[]),Object(s.useEffect)((function(){if(Object.keys(v).length){var e=t.map((function(e){return Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(j,{isValidated:v[e].validation(b)}),v[e].desc]},e)}));g(e)}}),[b,v]),Object(d.jsxs)("div",{className:"pwv",children:[Object(d.jsx)("h1",{children:"Password Component"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",onChange:function(e){f(e.target.value)}}),Object(d.jsx)("ul",{children:C})]})]})});var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("section",{children:Object(d.jsx)(l,{options:["hasNumber","hasSpecialChar","hasUpperCase","noConsecutiveLetters"]})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0df3baef.chunk.js.map
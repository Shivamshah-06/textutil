(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(13),a(1));a(14);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":"true",onClick:e.toggleMode,id:"flexSwitchCheckDisabled"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDisabled"},"dark mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("label",{htmlFor:"mybox",className:"form-label"},l.a.createElement("h2",null,e.heading)),l.a.createElement("textarea",{className:"form-control",onChange:function(e){r(e.target.value)},value:c,id:"mybox",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},rows:"8"})),l.a.createElement("button",{className:"btn btn-primary ",onClick:function(){r(""),e.showAlert("Text has been cleared","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){var t=c.toLowerCase();r(t),e.showAlert("change to lowercase","success")}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-0",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("change to Uppercase","success")}},"Convert to uppercase")),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,c.split(" ").length-1," words and ",c.length," characters"),l.a.createElement("p",null,.008*(c.split(" ").length-1)," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,c)))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)}s.defaultProps={title:"hello"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),u=Object(o.a)(r,2),d=u[0],h=u[1],b=function(e,t){h({msg:e,type:t}),setTimeout(function(){h(null)},1500)},g=function(e){document.body.style.backgroundColor=e};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Textutils",mode:a,toggleMode:function(){"light"===a?(c("dark"),g("#10477e"),b("New mode has been enabled!!!!","success"),document.title="textUtil-dark"):(c("light"),document.body.style.backgroundColor="white",b("Light mode has been enabled!!!!","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:b,heading:"Enter your text here",mode:a,changeMode:g})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.8b45bb60.chunk.js.map
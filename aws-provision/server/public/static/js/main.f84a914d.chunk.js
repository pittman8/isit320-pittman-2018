(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(14),n(4)),s=n(5),l=n(7),u=n(6),d=n(8),h=n(1),f=(n(16),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).queryServer=function(){var e=Object(h.a)(Object(h.a)(t));fetch("/foo").then(function(t){return t.json()}).then(function(t){console.log("parsed json",t),e.setState(function(e){return t})}).catch(function(t){console.log("parsing failed, URL bad, network down, or similar",t)})},t.createEducate=function(){fetch("/create-educate").then(function(t){return t.json()}).then(function(t){console.log("parsed json",t)}).catch(function(t){console.log("parsing failed, URL bad, network down, or similar",t)})},t.createWithAwsStandardAccount=function(){},t.associateElasticIp=function(){},t.copyGetStarted=function(){},t.runGetStarted=function(){},t.removeKnownHost=function(){},t.state={file:"unknown",status:"waiting"},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",{className:"App-intro"},"state: ",this.state.status," file: ",this.state.file),o.a.createElement("button",{onClick:this.queryServer},"Bar"),o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("button",{onClick:this.createEducate},"Create with AWS Educate Account"),o.a.createElement("button",{onClick:this.createWithAwsStandardAccount},"Create with AWS Standard Account"),o.a.createElement("button",{onClick:this.associateElasticIp},"Associate Elastic Ip"),o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("button",{onClick:this.copyGetStarted},"Copy the GetStarted Script"),o.a.createElement("button",{onClick:this.runGetStarted},"Run the GetStarted Script"),o.a.createElement("button",{onClick:this.removeKnownHost},"Remove From KnownHost"))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.f84a914d.chunk.js.map
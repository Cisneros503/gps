(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{248:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(2),o=t(6),i=t(19),c=t(12),w=new r.a({center:[0,0],zoom:2});new a.a({layers:[new o.a({source:new c.b})],target:"map",view:w});function s(e){return document.getElementById(e)}var d=new GyroNorm;d.init().then(function(){d.start(function(e){var n=w.getCenter(),t=w.getResolution(),a=Object(i.j)(e.do.beta),r=Object(i.j)(e.do.beta),o=Object(i.j)(e.do.gamma);s("alpha").innerText=a+" [rad]",s("beta").innerText=r+" [rad]",s("gamma").innerText=o+" [rad]",n[0]-=t*o*25,n[1]+=t*r*25,w.setCenter(w.constrainCenter(n))})})}},[[248,0]]]);
//# sourceMappingURL=device-orientation.js.map
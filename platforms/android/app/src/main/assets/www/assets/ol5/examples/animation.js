(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{232:function(t,n,e){"use strict";e.r(n);var o=e(3),a=e(2),i=e(54),r=e(6),c=e(5),u=e(12),f=Object(c.f)([-.12755,51.507222]),m=Object(c.f)([37.6178,55.7517]),s=Object(c.f)([28.9744,41.0128]),l=Object(c.f)([12.5,41.9]),d=Object(c.f)([7.4458,46.95]),g=new a.a({center:s,zoom:6});new o.a({target:"map",layers:[new r.a({preload:4,source:new u.b})],loadTilesWhileAnimating:!0,view:g});function h(t){var n=7.5625,e=2.75;return t<1/e?n*t*t:t<2/e?n*(t-=1.5/e)*t+.75:t<2.5/e?n*(t-=2.25/e)*t+.9375:n*(t-=2.625/e)*t+.984375}function b(t){return Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}function w(t,n){document.getElementById(t).addEventListener("click",n)}function p(t,n){var e=g.getZoom(),o=2,a=!1;function i(t){--o,a||0!==o&&t||(a=!0,n(t))}g.animate({center:t,duration:2e3},i),g.animate({zoom:e-1,duration:1e3},{zoom:e,duration:1e3},i)}w("rotate-left",function(){g.animate({rotation:g.getRotation()+Math.PI/2})}),w("rotate-right",function(){g.animate({rotation:g.getRotation()-Math.PI/2})}),w("rotate-around-rome",function(){var t=g.getRotation();g.animate({rotation:t+Math.PI,anchor:l,easing:i.a},{rotation:t+2*Math.PI,anchor:l,easing:i.b})}),w("pan-to-london",function(){g.animate({center:f,duration:2e3})}),w("elastic-to-moscow",function(){g.animate({center:m,duration:2e3,easing:b})}),w("bounce-to-istanbul",function(){g.animate({center:s,duration:2e3,easing:h})}),w("spin-to-rome",function(){var t=g.getCenter();g.animate({center:[t[0]+(l[0]-t[0])/2,t[1]+(l[1]-t[1])/2],rotation:Math.PI,easing:i.a},{center:l,rotation:2*Math.PI,easing:i.b})}),w("fly-to-bern",function(){p(d,function(){})}),w("tour",function(){var e=[f,d,l,m,s],o=-1;!function t(n){n?++o<e.length?setTimeout(function(){p(e[o],t)},0===o?0:750):alert("Tour complete"):alert("Tour cancelled")}(!0)})}},[[232,0]]]);
//# sourceMappingURL=animation.js.map
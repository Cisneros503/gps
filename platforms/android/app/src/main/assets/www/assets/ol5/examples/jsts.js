(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{288:function(e,a,n){"use strict";n.r(a);var t=n(3),r=n(2),s=n(41),o=n(22),w=n(6),c=n(5),u=n(12),i=n(15),d=n(128),f=n(27),j=n(31),b=n(37),g=n(72),m=n(71),p=n(82),v=new i.a;fetch("data/geojson/roads-seoul.geojson").then(function(e){return e.json()}).then(function(e){var a=(new s.a).readFeatures(e,{featureProjection:"EPSG:3857"}),n=new jsts.io.OL3Parser;n.inject(f.a,j.a,d.a,b.b,g.a,m.a,p.a);for(var t=0;t<a.length;t++){var r=a[t],o=n.read(r.getGeometry()).buffer(40);r.setGeometry(n.write(o))}v.addFeatures(a)});var h=new o.a({source:v}),l=new w.a({source:new u.b});new t.a({layers:[l,h],target:document.getElementById("map"),view:new r.a({center:Object(c.f)([126.979293,37.528787]),zoom:15})})}},[[288,0]]]);
//# sourceMappingURL=jsts.js.map
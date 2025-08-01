(()=>{"use strict";var e={216:function(e,t,n){n(1);var i=n(2);let r={Angles:{Degree:[[1e3/360],"&deg;"],Arcminute:[[1e3/360/60],"&prime;"],Arcsecond:[[1e3/360/60/60],"&Prime;"],Gradian:[[2.5],"gon"],Radian:[[500*Math.PI],"rad"]},Area:{"US Acre":[[40468564.224],"ac"],Hectare:[[1e8],"ha"],"sq cm":[[1],"cm&sup2;"],"sq ft":[[929.0304],"ft&sup2;"],"sq in":[[6.4516],"in&sup2;"],"sq km":[[1e10],"km&sup2;"],"sq m":[[1e4],"m&sup2;"],"sq mile":[[25899881103.36],"mi&sup2;"],"sq mm":[[.01],"mm&sup2;"],"sq yd":[[8361.2736],"yd&sup2;"]},"Distance/Length":{Centimeter:[[1],"cm"],Inch:[[2.54],'"'],"Feet-Inch":[[2.54],'"',12,"'"],Angstrom:[[1e-8],"&Aring;"],Chain:[[2011.68],"chain"],Fathom:[[182.88],"ftm"],Feet:[[30.48],"ft"],Hand:[[10.16],""],Kilometer:[[1e5],"km"],Link:[[20.1168],"lnk."],Meter:[[100],"m"],Micron:[[1e-4],"&micro;m"],Mile:[[160934.4],"mi"],Millimeter:[[.1],"mm"],Nanometer:[[1e-7],"nm"],"Nautical Mile":[[185200],"nmi"],PICA:[[.42175176],"pc"],Rod:[[502.92],"rod"],Span:[[22.86],"span"],Yard:[[91.44],"yd"]},Energy:{"British Thermal Unit":[[1055.056],"Btu"],"IST Calorie":[[4.1868],"cal"],"Electon Volt":[[160217653e-27],"eV"],"Foot Pound":[[1.3558179483314],"ft&middot;lb"],Joule:[[1],"J"],Kilocalorie:[[4186.8],"kcal"],Kilojoule:[[1e3],"KJ"],"Kilowatt hour":[[36e5],"kWh"]},Mass:{Carat:[[2e-4],"CD"],Centigram:[[1e-5],"cg"],Decigram:[[1e-4],"dg"],Dekagram:[[.01],"dag"],Gram:[[.001],"g"],Hectogram:[[.1],"hg"],Kilogram:[[1],"kg"],"Long Ton":[[1016.0469088],"lg tn"],Milligram:[[1e-6],"mg"],Ounce:[[.028349523125],"oz"],Pound:[[.45359237],"lb"],"Short Ton":[[907.18474],"sh tn"],Stone:[[6.35029318],"st"],Tonne:[[1e3],"t"]},Power:{"BTU/Minute":[[17.5842642],"BTU/min"],"Foot-Pound/Minute":[[.0225969658055233],"ft&middot;lb/min"],Horsepower:[[745.6998715822702],"hp"],Kilowatt:[[1e3],"kW"],Watt:[[1],"W"]},Pressure:{Atmosphere:[[101325],"atm"],Bar:[[1e5],"bar"],Kilopascal:[[1e3],"kPa"],"Torr/mmHg":[[133.322387415],"mmHg"],Pascal:[[1],"Pa"],PSI:[[6894.757],"psi"]},"Speed/Velocity":{"cm/s":[[.01],"cm/s"],"ft/s":[[.3048],"ft/s"],"km/h":[[.2777777777777778],"km/h"],Knot:[[.5144444444444444],"Knot"],Mach:[[340.2933],"Ma"],"m/s":[[1],"m/s"],mph:[[.44704],"mi/h"]},Temperature:{Celsius:[[9,2458.35],"&deg;C"],Farenheit:[[5,2298.35],"&deg;F"],Kelvin:[[9],"&deg;K"]},Time:{Day:[[86400],"D"],Hour:[[3600],"H"],Microsecond:[[1e-6],"&micro;s"],Millisecond:[[.001],"ms"],Minute:[[60],"m"],Second:[[1],"s"],Week:[[604800],"W"]},Times:{"Week-Day":[[86400],"D",7,"W"],"Day-Hour":[[3600],"H",24,"D"],"Hour-Minute":[[60],"m",60,"H"],"Hour-Second":[[1],"s",3600,"H"],"Minute-Second":[[1],"s",60,"m"],Second:[[1],"s"]},Volume:{"Cubic cm":[[.001],"cm<sup>3</sup>"],"Cubic feet":[[28.316846592],"ft<sup>3</sup>"],"Cubic inch":[[.016387064],"in<sup>3</sup>"],"Cubic meter":[[1e3],"m<sup>3</sup>"],"Cubic yard":[[764.554857984],"yd<sup>3</sup>"],"Fluid Ounce (UK)":[[.0284130625],"UK oz fl"],"Fluid Ounce (US)":[[.0295735295625],"US oz fl"],"Gallon (UK)":[[4.54609],"UK gal"],"Gallon (US)":[[3.785411784],"US gal"],Liter:[[1],"L"],"Pint (UK)":[[.56826125],"UK pt"],"Pint (US)":[[.473176473],"US pt"],"Quart (UK)":[[1.1365225],"UK qt"],"Quart (US)":[[.946352946],"US qt"]}};function c(e,t,n,c){let a=Object.keys(r[i.U2M(t)]);i.t8m(n,a[0],!0),i.t8m(c,a[1],!0)}function a(e,t,n,c){let a=Object.keys(r[i.U2M(t)]);i.t8m(n,a[+(i.U2M(c)===a[0])],!0)}var o=i.M67("<option> </option>"),s=i.M67("<option> </option>"),l=i.M67("<option> </option>"),m=i.M67('<div class="row"><div class="col-sm-4 mb-2"><p>Type</p> <select class="form-select" size="12"></select></div> <div class="col-sm-4 mb-2"><p>From</p> <select class="form-select" size="12"></select></div> <div class="col-sm-4 mb-2"><p>To</p> <select class="form-select" size="12"></select></div> <div class="col-sm-6 mb-2"><div class="input-group"><input type="text" class="form-control"/> <span class="input-group-text"><!></span></div> <div><input type="text" class="form-control"/> <span class="input-group-text"><!></span></div></div> <div class="col-sm-6"><p><!></p> <p><!></p> <p><!></p></div></div>');i.clJ(["change"]);var u=n(5);let U=document.getElementById("app");(0,u.LI)(function(e,t){let n;i.VFu(t,!0);let u=Object.keys(r)[0],[U,p]=Object.keys(r[u]),M=i.SBE(i.sjz(u)),d=i.SBE(i.sjz(U)),v=i.SBE(i.sjz(p)),f=i.SBE("1337.1"),g=i.SBE("0"),h=i.nKH(()=>r[i.U2M(M)]?.[i.U2M(d)]),b=i.nKH(()=>r[i.U2M(M)]?.[i.U2M(v)]);function B(e){return e?Object.keys(e):[]}function y(e){let t=e.length;(e.includes("e")||e.includes("E"))&&(e.indexOf("e")>0?t=e.indexOf("e"):e.indexOf("E")>0&&(t=e.indexOf("E")));for(let n=0;n<e.length;n++){if("0"===e.charAt(n)||"+"===e.charAt(n)||"-"===e.charAt(n)||"."===e.charAt(n)){"."!==e.charAt(n)&&--t;continue}break}return e.includes(".")&&--t,t}function K(e,t){if(0===e)return"0";if(t<0||Number.isInteger(e))return e.toString();if(y(e+"")>t&&t>=1&&t<=21)return e.toPrecision(t);let n=Math.round(-Math.log(Math.abs(e))/Math.LN10+(t||2));return e.toFixed(Math.max(n,0))}function O(e){let t=e+"";return t.includes(".")?t.split(".")[1].length:0}let S=i.nKH(()=>{let e;if(!i.U2M(h)||!i.U2M(b))return[,,,].fill("[no unit selected]");let t=y(i.U2M(f));i.U2M(h)[2]&&(t=Math.min(t,y(i.U2M(g))));let n=O(i.U2M(f));i.U2M(h)[2]&&(n=Math.min(n,O(i.U2M(g)))),e=i.U2M(h)[2]?i.U2M(h)[0][0]*i.U2M(h)[2]*parseFloat(i.U2M(f))+i.U2M(h)[0][0]*parseFloat(i.U2M(g)):i.U2M(h)[0][0]*parseFloat(i.U2M(f)),i.U2M(h)[0][1]&&(e+=i.U2M(h)[0][1]),i.U2M(b)[0][1]&&(e-=i.U2M(b)[0][1]),e/=i.U2M(b)[0][0];let r=` (${t} significant figure${1==t?"":"s"})`,c=` (${n} decimal place${1==n?"":"s"})`,a=i.U2M(b)[1];if(i.U2M(b)[2]){let o=i.U2M(b)[3],s=Math.floor(e/i.U2M(b)[2])+" "+o+" ",l=" "+a,m=e%i.U2M(b)[2];return[s+m+l,s+K(m,t)+l+r,s+m.toFixed(n)+l+c]}{let i=" "+a;return[e+i,K(e,t)+i+r,e.toFixed(n)+i+c]}}),k=i.nKH(()=>i.AAd(i.U2M(S),3)),H=i.nKH(()=>i.U2M(k)[0]),x=i.nKH(()=>i.U2M(k)[1]),w=i.nKH(()=>i.U2M(k)[2]);var J=m(),F=i.iUc(J),P=i.J9n(i.iUc(F),2);P.__change=[c,M,d,v],i.S6b(P,21,()=>Object.keys(r),i.KzB,(e,t)=>{var n=o(),r=i.iUc(n,!0);i.mcB(n);var c={};i.OwZ(()=>{i.u7_(r,i.U2M(t)),c!==(c=i.U2M(t))&&(n.value=(n.__value=i.U2M(t))??"")}),i.R3I(e,n)}),i.mcB(P),i.mcB(F);var A=i.J9n(F,2),C=i.J9n(i.iUc(A),2);C.__change=[a,M,v,d],i.S6b(C,21,()=>B(r[i.U2M(M)]),i.KzB,(e,t)=>{var n=s(),r=i.iUc(n,!0);i.mcB(n);var c={};i.OwZ(()=>{i.u7_(r,i.U2M(t)),c!==(c=i.U2M(t))&&(n.value=(n.__value=i.U2M(t))??"")}),i.R3I(e,n)}),i.mcB(C),i.mcB(A);var j=i.J9n(A,2),I=i.J9n(i.iUc(j),2);i.S6b(I,21,()=>B(r[i.U2M(M)]),i.KzB,(e,t)=>{let n;var r=l(),c=i.iUc(r,!0);i.mcB(r);var a={};i.OwZ(e=>{n=i.u8O(r,1,"",null,n,e),i.u7_(c,i.U2M(t)),a!==(a=i.U2M(t))&&(r.value=(r.__value=i.U2M(t))??"")},[()=>({"d-none":i.U2M(t)==i.U2M(d)})]),i.R3I(e,r)}),i.mcB(I),i.mcB(j);var E=i.J9n(j,2),T=i.iUc(E),_=i.iUc(T);i.W6n(_);var z=i.J9n(_,2),W=i.iUc(z);i.dyc(W,()=>i.U2M(h)?.[i.U2M(h)?.[2]?3:1]??"units"),i.mcB(z),i.mcB(T);var D=i.J9n(T,2),q=i.iUc(D);i.W6n(q);var L=i.J9n(q,2),G=i.iUc(L);i.dyc(G,()=>i.U2M(h)?.[1]??""),i.mcB(L),i.mcB(D),i.mcB(E);var R=i.J9n(E,2),V=i.iUc(R),N=i.iUc(V);i.dyc(N,()=>i.U2M(H)),i.mcB(V);var Z=i.J9n(V,2),$=i.iUc(Z);i.dyc($,()=>i.U2M(x)),i.mcB(Z);var Q=i.J9n(Z,2),Y=i.iUc(Q);i.dyc(Y,()=>i.U2M(w)),i.mcB(Q),i.mcB(R),i.mcB(J),i.OwZ(e=>n=i.u8O(D,1,"input-group",null,n,e),[()=>({"d-none":!i.U2M(h)?.[2]})]),i.Gox(P,()=>i.U2M(M),e=>i.t8m(M,e)),i.Gox(C,()=>i.U2M(d),e=>i.t8m(d,e)),i.Gox(I,()=>i.U2M(v),e=>i.t8m(v,e)),i.WpJ(_,()=>i.U2M(f),e=>i.t8m(f,e)),i.WpJ(q,()=>i.U2M(g),e=>i.t8m(g,e)),i.R3I(e,J),i.Swx()},{target:U}),document.getElementById("appLoading")?.remove()}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var c=t[i]={exports:{}};return e[i](c,c.exports,n),c.exports}n.m=e,n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=[];n.O=(t,i,r,c)=>{if(i){c=c||0;for(var a=e.length;a>0&&e[a-1][2]>c;a--)e[a]=e[a-1];e[a]=[i,r,c];return}for(var o=1/0,a=0;a<e.length;a++){for(var[i,r,c]=e[a],s=!0,l=0;l<i.length;l++)(!1&c||o>=c)&&Object.keys(n.O).every(e=>n.O[e](i[l]))?i.splice(l--,1):(s=!1,c<o&&(o=c));if(s){e.splice(a--,1);var m=r();void 0!==m&&(t=m)}}return t}})(),n.rv=()=>"1.4.10",(()=>{var e={113:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var r,c,[a,o,s]=i,l=0;if(a.some(t=>0!==e[t])){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(s)var m=s(n)}for(t&&t(i);l<a.length;l++)c=a[l],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(m)},i=self.webpackChunkvwww=self.webpackChunkvwww||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.ruid="bundler=rspack@1.4.10";var i=n.O(void 0,["1","2","5","12","4","9","17","41","40","70"],function(){return n(216)});i=n.O(i)})();
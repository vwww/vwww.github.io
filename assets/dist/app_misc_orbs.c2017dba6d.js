(()=>{"use strict";var t={139:function(t,e,n){n(1);var i=n(2);function a(t,e,n){return Math.max(e,Math.min(t,n))}function o(t,e,n=!1){let a=i.SBE(i.sjz(e));function r(t){return"undefined"===t?void 0:JSON.parse(t)}if(window.localStorage){let o=localStorage.getItem(t);null!==o&&i.t8m(a,r(o),!0),i.JcM(()=>localStorage.setItem(t,void 0===i.U2M(a)?"undefined":JSON.stringify(i.U2M(a)))),n&&window.addEventListener("storage",n=>n.storageArea===localStorage&&n.key===t&&i.t8m(a,null==n.newValue?e:r(n.newValue),!0))}return{get value(){return i.U2M(a)},set value(newVal){i.t8m(a,newVal,!0)}}}var r=n(74),l=n(140),s=i.XKW('<label class="form-check form-check-inline"><input type="radio" class="form-check-input"> <span class="form-check-label"> </span></label>'),c=i.XKW('<label class="form-check form-check-inline"><input type="radio" class="form-check-input"> <span class="form-check-label"> </span></label>'),d=i.XKW('<tr><th scope="row"></th><td> </td><td><input type="number" class="form-control"></td><td><input type="number" class="form-control"></td><td><input type="number" class="form-control"></td><td><input type="number" class="form-control"></td><td><input type="number" class="form-control"></td></tr>'),u=i.XKW('<tr><th scope="row"></th><td> </td><td> </td><td> </td></tr>'),h=i.XKW('<div style="container-type: inline-size"><div class="my-2" style="width: min(100cqw, 200cqh); height: min(50cqw, 100cqh)"><canvas></canvas></div></div> <h2>Settings</h2> <div class="row row-cols-sm-auto g-3 align-items-center my-2"><div class="col-12"><b>Trajectories</b></div> <div class="col-12"><label class="form-check form-check-inline"><input type="checkbox" class="form-check-input"> draw path</label></div> <div class="col-12"><input type="number" class="form-control" min="0"></div></div> <div><b class="me-3">Show velocity</b> <!> <!> <!> <!></div> <div><b class="me-3">Show acceleration</b> <!> <!> <!> <!></div> <h2>Orbs</h2> <h3>Properties <button class="btn btn-outline-primary">Randomize</button></h3> <table class="table table-striped table-bordered table-hover w-auto"><thead><tr><th>Index</th><th>orbitBaseAng</th><th>distX</th><th>distYMin</th><th>distYRange</th><th>baseDistYCycleAng</th><th>distYChangeSpeed</th></tr></thead><tbody></tbody></table> <h3>Kinematics at Time</h3> <input type="number" class="form-control" step="0.1"> <input type="range" class="form-range" min="0" step="0.001"> <table class="table table-striped table-bordered table-hover w-auto"><thead><tr><th>Index</th><th>Position</th><th>Velocity</th><th>Acceleration</th></tr></thead><tbody></tbody></table> <h3>Import/Export</h3> <div class="input-group mb-3"><button class="btn btn-outline-primary">Import from JSON</button> <button class="btn btn-outline-danger">Export to JSON</button></div> <textarea class="form-control"></textarea>',1);i.clJ(["mousedown","mousemove","change","click"]);let f=document.getElementById("app");(0,r.LI)(function(t,e){let n;i.VFu(e,!0);let f=[],b=[],m=2*Math.PI,v=["#dc143c","#da70d6","#6666cd","#00bfff","#00ff7f","#ee0","#ff9912","#c67171"],M=o("misc/orbs/orbs",[]),p=o("misc/orbs/drawPaths",!0),g=o("misc/orbs/drawPathDuration",8),U=o("misc/orbs/modeV",1),y=o("misc/orbs/modeA",1),B=-1,J=i.SBE(""),S=i.SBE(void 0),w=i.SBE(0),x=Date.now(),k=Date.now(),Y=i.SBE(0),D=l.Ry({distX:l.Rx,distYMin:l.Rx,distYRange:l.Rx,baseDistYCycleAng:l.Rx,distYChangeSpeed:l.Rx}),A=l.Ry({orbitDist:D,orbitBaseAng:l.Rx,_protected:l.jt(l.O7)}),_=l.Ry({orbs:l.IX(A)});function R(t,e,n){let i=e-n/15,a=Math.abs(Math.cos(t.baseDistYCycleAng+t.distYChangeSpeed*n)),o=t.distYMin+t.distYRange*a;return[t.distX*Math.cos(i),o*Math.sin(i)]}function W(t,e,n){let i=e-n/15,a=t.baseDistYCycleAng+t.distYChangeSpeed*n,o=Math.cos(a),r=Math.abs(o),l=t.distYMin+t.distYRange*r,s=-t.distYRange*Math.sign(o)*Math.sin(a)*t.distYChangeSpeed;return[t.distX*Math.sin(i)/15,-(l*Math.cos(i)/15)+Math.sin(i)*s]}function C(t,e,n){let i=e-n/15,a=t.baseDistYCycleAng+t.distYChangeSpeed*n,o=Math.cos(a),r=Math.abs(o),l=t.distYMin+t.distYRange*r,s=-t.distYRange*Math.sign(o)*Math.sin(a)*t.distYChangeSpeed,c=-t.distYRange*r*t.distYChangeSpeed;return[-(t.distX*Math.cos(i)/225),-(s*Math.cos(i)*2/15)+-(l*Math.sin(i)/225)+Math.sin(i)*c]}function T(t,e){return[t[0]-e[0],t[1]-e[1]]}function O(t,e,n){return T(R(t,e,n+.5),R(t,e,n-.5))}function $(t,e,n){return T(O(t,e,n+.5),O(t,e,n-.5))}function P(t,e,n){return T(O(t,e,n),W(t,e,n))}function E(t,e,n){return T($(t,e,n),C(t,e,n))}function I(){M.value=Array(24).fill(void 0).map((t,e)=>({orbitDist:{distX:1200+1e3*Math.random()|0,baseDistYCycleAng:m*Math.random(),distYMin:499.98+(1314.6-499.98)*Math.random(),distYRange:103.464+(775-103.464)*Math.random(),distYChangeSpeed:.01+.01*Math.random()},orbitBaseAng:e*m/24})),B=-1,N()}function K(){i.U2M(w)||(x=Date.now()-(k-x),function t(){i.t8m(w,requestAnimationFrame(t),!0),j()}())}function X(){cancelAnimationFrame(i.U2M(w)),k=Date.now(),i.t8m(w,0),j()}function H(){i.U2M(S).width=i.U2M(S).parentElement.clientWidth,i.U2M(S).height=i.U2M(S).parentElement.clientHeight}function Z(t,e,n,i){t.beginPath(),t.arc(e,n,i,0,m),t.closePath(),t.fill()}function q(t,e,n,i,a,o,r=Math.PI/6){let l=Math.atan2(a-n,i-e);t.beginPath(),t.moveTo(e,n),t.lineTo(i,a),t.lineTo(i-o*Math.cos(l-r),a-o*Math.sin(l-r)),t.moveTo(i,a),t.lineTo(i-o*Math.cos(l+r),a-o*Math.sin(l+r)),t.closePath(),t.stroke()}let V=0;function j(){let t=n;if(!t)return X();V=z?L:((i.U2M(w)?Date.now():k)-x)/1e3;let{width:e,height:a}=i.U2M(S);t.fillStyle="#0d0d0d",t.fillRect(0,0,e,a);let o=e/8e3,r=64*o,l=e/2/o,s=a/2/o;t.lineWidth=2,t.strokeStyle="#0e0e0e";for(let n=-5*e%500-500;n<=e+1;n+=500)t.beginPath(),t.moveTo(n,0),t.lineTo(n,a),t.stroke();for(let n=-5*a%500-500;n<=a+1;n+=500)t.beginPath(),t.moveTo(0,n),t.lineTo(e,n),t.stroke();t.lineWidth=1,t.strokeStyle="#2b2b2b";for(let n=-5*e%500-25.5;n<=e+1;n+=50)t.beginPath(),t.moveTo(n,0),t.lineTo(n,a),t.stroke();for(let n=-5*a%50-25.5;n<=a+1;n+=50)t.beginPath(),t.moveTo(0,n),t.lineTo(e,n),t.stroke();if(t.fillStyle="#ff0",Z(t,.5*e,.5*a,80*o),p.value){let e=V-g.value/2;t.strokeStyle="#777",M.value.forEach(n=>{t.beginPath();for(let i=0;i<=512;i++){let[a,r]=R(n.orbitDist,n.orbitBaseAng,e+i*g.value/512);t[i?"lineTo":"moveTo"]((a+l)*o,(r+s)*o)}t.stroke()})}M.value.forEach((e,n)=>{let[i,a]=R(e.orbitDist,e.orbitBaseAng,V),c=n%3?-1:+"04361527"[n/3];t.fillStyle=c<0?"#aaa":v[c];let d=(i+l)*o,u=(a+s)*o,h=35+2/3;if(Z(t,d,u,25*o),e._protected&&(t.globalAlpha=.75,Z(t,d,u,h*o),t.globalAlpha=1),B==n){t.fillStyle="#fff";let e=h-4.5;for(let n=0;n<16;n++){let i=n/16*m+V/2;Z(t,d+e*Math.cos(i)*o,u+e*Math.sin(i)*o,4.5*o)}}if(U.value){let[n,c]=[W,O,P][U.value-1](e.orbitDist,e.orbitBaseAng,V),d=U.value>=3?16384:4;t.strokeStyle="#00f",q(t,(i+l)*o,(a+s)*o,(i+n*d+l)*o,(a+c*d+s)*o,r)}if(y.value){let[n,c]=[C,$,E][y.value-1](e.orbitDist,e.orbitBaseAng,V),d=y.value>=3?128:16;t.strokeStyle="#f00",q(t,(i+l)*o,(a+s)*o,(i+n*d+l)*o,(a+c*d+s)*o,r)}c>=0&&(t.font="11px Arial",t.textAlign="center",t.textBaseline="alphabetic",t.fillStyle="#fff",t.fillText(`player${c}`,(i+l)*o,(a+s-80)*o))});let c=.91*a|0,d=.04*e|0,u=(.05*a|0)-2,h=z?F:i.U2M(w);t.lineWidth=4,t.strokeStyle=h?"#7f0000":"#007f00",t.fillStyle="#000",t.strokeRect(2,c,d,u),t.fillRect(2,c,d,u),t.font=`${.012*e}px sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.fillText(h?"⏹️":"▶️",.02*e,.935*a),t.textAlign="start",t.fillText(`${V.toFixed(3)}`,.06*e,.935*a);let f=.96*a|0,b=.04*a|0;t.lineWidth=2,t.strokeStyle="#777",t.beginPath(),t.moveTo(0,f),t.lineTo(e,f),t.closePath(),t.stroke(),t.fillStyle="#000",t.fillRect(0,f+1,e,b),t.fillStyle="#f00",t.fillRect(0,f+1,V/600*e,b)}function N(){i.U2M(w)||j()}let z=!1,F=!1,L=0,G=0,Q=0,tt=0;(0,r.H3)(()=>{n=i.U2M(S).getContext("2d"),H(),(M.value.length?N:I)()});var te=h();i.Ba6("resize",i.u9i,function(){H(),j()}),i.Ba6("mouseup",i.u9i,function(){z&&(x=0,k=1e3*L,z=!1,F&&K())});var tn=i.VHm(te),ti=i.iUc(tn),ta=i.iUc(ti);ta.__mousedown=function(t){let e,{width:n,height:a}=i.U2M(S),o=t.x-i.U2M(S).getBoundingClientRect().left,r=t.y-i.U2M(S).getBoundingClientRect().top;if(r>.95*a)return void(z=!0,(F=!!i.U2M(w))&&X());if(r>.9*a&&o<.04*n)return void(i.U2M(w)?X:K)();let l=1/0;function s(t,n,i,a){let s=o-n,c=r-i,d=s*s+c*c;d<l&&d<=a*a&&(e=t,l=d)}let c=n/8e3,d=n/2/c,u=a/2/c;s(-1,.5*n,.5*a,80*c),M.value.forEach((t,e)=>{let[n,i]=R(t.orbitDist,t.orbitBaseAng,V);s(e,(n+d)*c,(i+u)*c,25*c)}),void 0!==e&&(B==e&&e>=0&&(M.value[e]._protected=!M.value[e]._protected),B=e,N())},ta.__mousemove=function(t){if(!z)return;let{left:e,top:n}=i.U2M(S).getBoundingClientRect(),o=a((t.x-e)/i.U2M(S).width,0,1),r=a((t.y-n)/i.U2M(S).height,0,1);if(r>.95)L=600*(tt=o),G=o,Q=1;else{let t=Math.min(r/.95,1),e=Math.pow(t,2.5);r<Q&&(tt=(L/600-G*e)/(1-e)),L=(tt+(o-tt)*e)*600,G=o,Q=t}j()},i.Z1T(ta,t=>i.t8m(S,t),()=>i.U2M(S)),i.mcB(ti),i.mcB(tn);var to=i.J9n(tn,4),tr=i.J9n(i.iUc(to),2),tl=i.iUc(tr),ts=i.iUc(tl);i.W6n(ts),ts.__change=N,i.lpx(),i.mcB(tl),i.mcB(tr);var tc=i.J9n(tr,2),td=i.iUc(tc);i.W6n(td),td.__change=N,i.mcB(tc),i.mcB(to);var tu=i.J9n(to,2);{let t=(t,e=i.ZTd,n=i.ZTd)=>{var a,o=s(),r=i.iUc(o);i.W6n(r),r.__change=N;var l=i.J9n(r,2),c=i.iUc(l,!0);i.mcB(l),i.mcB(o),i.OwZ(()=>{a!==(a=e())&&(r.value=null==(r.__value=e())?"":e()),i.u7_(c,n())}),i.As6(f,[],r,()=>(e(),U.value),t=>U.value=t),i.R3I(t,o)};var th=i.J9n(i.iUc(tu),2);t(th,()=>0,()=>"off");var tf=i.J9n(th,2);t(tf,()=>1,()=>"4 * actual");var tb=i.J9n(tf,2);t(tb,()=>2,()=>"4 * approx"),t(i.J9n(tb,2),()=>3,()=>"16384 * (actual - approx)"),i.mcB(tu)}var tm=i.J9n(tu,2);{let t=(t,e=i.ZTd,n=i.ZTd)=>{var a,o=c(),r=i.iUc(o);i.W6n(r),r.__change=N;var l=i.J9n(r,2),s=i.iUc(l,!0);i.mcB(l),i.mcB(o),i.OwZ(()=>{a!==(a=e())&&(r.value=null==(r.__value=e())?"":e()),i.u7_(s,n())}),i.As6(b,[],r,()=>(e(),y.value),t=>y.value=t),i.R3I(t,o)};var tv=i.J9n(i.iUc(tm),2);t(tv,()=>0,()=>"off");var tM=i.J9n(tv,2);t(tM,()=>1,()=>"16 * actual");var tp=i.J9n(tM,2);t(tp,()=>2,()=>"16 * approx"),t(i.J9n(tp,2),()=>3,()=>"128 * (approx - actual)"),i.mcB(tm)}var tg=i.J9n(tm,4);i.J9n(i.iUc(tg)).__click=I,i.mcB(tg);var tU=i.J9n(tg,2),ty=i.J9n(i.iUc(tU));i.S6b(ty,21,()=>M.value,i.KzB,(t,e,n)=>{var a=d(),o=i.iUc(a);o.textContent=n;var r=i.J9n(o),l=i.iUc(r);i.mcB(r);var s=i.J9n(r),c=i.iUc(s);i.W6n(c),i.mcB(s);var u=i.J9n(s),h=i.iUc(u);i.W6n(h),i.mcB(u);var f=i.J9n(u),b=i.iUc(f);i.W6n(b),i.mcB(f);var m=i.J9n(f),v=i.iUc(m);i.W6n(v),i.mcB(m);var p=i.J9n(m),g=i.iUc(p);i.W6n(g),i.mcB(p),i.mcB(a),i.OwZ(()=>i.u7_(l,`${n??""}/${M.value.length??""} τ`)),i.WpJ(c,()=>i.U2M(e).orbitDist.distX,t=>i.U2M(e).orbitDist.distX=t),i.WpJ(h,()=>i.U2M(e).orbitDist.distYMin,t=>i.U2M(e).orbitDist.distYMin=t),i.WpJ(b,()=>i.U2M(e).orbitDist.distYRange,t=>i.U2M(e).orbitDist.distYRange=t),i.WpJ(v,()=>i.U2M(e).orbitDist.baseDistYCycleAng,t=>i.U2M(e).orbitDist.baseDistYCycleAng=t),i.WpJ(g,()=>i.U2M(e).orbitDist.distYChangeSpeed,t=>i.U2M(e).orbitDist.distYChangeSpeed=t),i.R3I(t,a)}),i.mcB(ty),i.mcB(tU);var tB=i.J9n(tU,4);i.W6n(tB);var tJ=i.J9n(tB,2);i.W6n(tJ),i.qt_(tJ,"max",600);var tS=i.J9n(tJ,2),tw=i.J9n(i.iUc(tS));i.S6b(tw,21,()=>M.value,i.KzB,(t,e,n)=>{var a=u();let o=i.nKH(()=>R(i.U2M(e).orbitDist,i.U2M(e).orbitBaseAng,i.U2M(Y))),r=i.nKH(()=>W(i.U2M(e).orbitDist,i.U2M(e).orbitBaseAng,i.U2M(Y))),l=i.nKH(()=>O(i.U2M(e).orbitDist,i.U2M(e).orbitBaseAng,i.U2M(Y))),s=i.nKH(()=>T(i.U2M(l),i.U2M(r))),c=i.nKH(()=>C(i.U2M(e).orbitDist,i.U2M(e).orbitBaseAng,i.U2M(Y))),d=i.nKH(()=>$(i.U2M(e).orbitDist,i.U2M(e).orbitBaseAng,i.U2M(Y))),h=i.nKH(()=>T(i.U2M(d),i.U2M(c)));var f=i.iUc(a);f.textContent=n;var b=i.J9n(f),m=i.iUc(b);i.mcB(b);var v=i.J9n(b),M=i.iUc(v);i.mcB(v);var p=i.J9n(v),g=i.iUc(p);i.mcB(p),i.mcB(a),i.OwZ(()=>{i.u7_(m,`${i.U2M(o)[0]??""}, ${i.U2M(o)[1]??""}`),i.qt_(v,"title",`approx
(${i.U2M(l)[0]??""}, ${i.U2M(l)[1]??""})
actual
(${i.U2M(r)[0]??""}, ${i.U2M(r)[1]??""})
error
(${i.U2M(s)[0]??""}, ${i.U2M(s)[1]??""})`),i.u7_(M,`${i.U2M(r)[0]??""}, ${i.U2M(r)[1]??""}`),i.qt_(p,"title",`approx
(${i.U2M(d)[0]??""}, ${i.U2M(d)[1]??""})
actual
(${i.U2M(c)[0]??""}, ${i.U2M(c)[1]??""})
error
(${i.U2M(h)[0]??""}, ${i.U2M(h)[1]??""})`),i.u7_(g,`${i.U2M(c)[0]??""}, ${i.U2M(c)[1]??""}`)}),i.R3I(t,a)}),i.mcB(tw),i.mcB(tS);var tx=i.J9n(tS,4),tk=i.iUc(tx);tk.__click=function(){try{let t=JSON.parse(i.U2M(J));M.value=_.verify(t,l.LN).orbs,B=-1}catch(t){alert(t)}},i.J9n(tk,2).__click=function(){i.t8m(J,JSON.stringify({orbs:M.value}),!0)},i.mcB(tx);var tY=i.J9n(tx,2);i.FVM(tY),i.EoV(ts,()=>p.value,t=>p.value=t),i.WpJ(td,()=>g.value,t=>g.value=t),i.WpJ(tB,()=>i.U2M(Y),t=>i.t8m(Y,t)),i.WpJ(tJ,()=>i.U2M(Y),t=>i.t8m(Y,t)),i.WpJ(tY,()=>i.U2M(J),t=>i.t8m(J,t)),i.R3I(t,te),i.Swx()},{target:f}),document.getElementById("appLoading")?.remove()}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=[];n.O=(e,i,a,o)=>{if(i){o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[i,a,o];return}for(var l=1/0,r=0;r<t.length;r++){for(var[i,a,o]=t[r],s=!0,c=0;c<i.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every(t=>n.O[t](i[c]))?i.splice(c--,1):(s=!1,o<l&&(l=o));if(s){t.splice(r--,1);var d=a();void 0!==d&&(e=d)}}return e}})(),n.rv=()=>"1.3.2",(()=>{var t={99:0};n.O.j=e=>0===t[e];var e=(e,i)=>{var a,o,[r,l,s]=i,c=0;if(r.some(e=>0!==t[e])){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var d=s(n)}for(e&&e(i);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},i=self.webpackChunkvwww=self.webpackChunkvwww||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),n.ruid="bundler=rspack@1.3.2";var i=n.O(void 0,["1","4","3","2","7","11","35","9","54"],function(){return n(139)});i=n.O(i)})();
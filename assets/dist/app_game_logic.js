(()=>{"use strict";var t={104:function(t,e,c){c("1");var l=c("2"),n=c("91");function o(t,e){let c=function(t,e){let c=function(t,e){let{set:c,subscribe:l}=(0,n.fZ)(t,void 0);return{get:()=>t,set(e){c(t=e)},subscribe:l,update(e){c(t=e(t))}}}(e);return{...c,useLocalStorage:()=>{if(!window.localStorage)return;let e=localStorage.getItem(t);null!==e&&c.set("undefined"===e?void 0:JSON.parse(e)),c.subscribe(e=>{void 0===e?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))})}}}(t,e);return c.useLocalStorage(),c}var r=(t,e,c)=>{l.GID(c,l.sjz([...e(),""]))},s=l.XKW('<li><div class="input-group mb-3"><div class="input-group"><textarea class="form-control" rows="2"></textarea> <button class="btn btn-danger">-</button></div></div></li>'),i=l.XKW('<th scope="col"> </th>'),a=l.XKW("<td> </td>"),u=l.XKW("<tr></tr>"),d=l.XKW('<div class="mb-2"><h2>Puzzle Solution</h2> <div class="row justify-content-center"><div class="col-auto"><table class="table table-striped table-bordered table-hover table-sm table-responsive"><thead><tr></tr></thead><tbody></tbody></table></div></div></div>'),m=l.XKW('<span class="badge text-bg-secondary me-1"> </span>'),v=(t,e,c)=>e({...l.U2M(c),solution:void 0}),p=(t,e,c)=>e(l.U2M(c)),b=l.XKW('<button class="btn btn-sm btn-outline-primary">Answer</button>'),h=l.XKW('<tr><td> </td><td> <span class="badge text-bg-secondary"> </span></td><td></td><td><button class="btn btn-sm btn-outline-secondary">Puzzle Only</button> <!></td></tr>'),f=l.XKW('<table class="table table-sm table-striped table-bordered table-hover"><thead><tr><th>#</th><th>Title</th><th>Choices</th><th>Load</th></tr></thead><tbody></tbody></table>'),g=l.XKW('<div class="row"><div class="col-lg-6 mb-3"><h2>Puzzle Info</h2> <input type="text" class="form-control mb-2" placeholder="Title"> <textarea class="form-control" placeholder="Description" rows="10"></textarea></div> <div class="col-lg-6 mb-2"><h3>Clues <button class="btn btn-success mb-2">+</button></h3> <ol></ol></div></div> <!> <div class="row mb-2"><div class="col-sm-8 col-md-6"><h2>Grids</h2> TODO</div> <div class="col-sm-4 col-md-6"><h2>Rules</h2> TODO</div></div> <div><h2>Preset Puzzles</h2> <!></div>',1);l.clJ(["click"]);var U=c("71");!function(t){let e=document.getElementById("app"),c=(0,U.LI)(t,{target:e});document.getElementById("appLoading")?.remove()}(function(t,e){l.VFu(e,!0);let c=l.hyl(),n=()=>l.hPL(O,"$clues",c),U=()=>l.hPL(w,"$puzzleTypes",c),B=()=>l.hPL(j,"$solution",c),y=l.sjz([]),z=o("game/sp/logic/title",""),I=o("game/sp/logic/desc",""),O=o("game/sp/logic/clues",["","",""]),w=o("game/sp/logic/puzzleTypes",[]),J=o("game/sp/logic/puzzleRules",[]),j=o("game/sp/logic/solution",void 0);function _(t){l.GID(z,l.sjz(t.name)),l.GID(I,l.sjz(t.desc)),l.GID(O,l.sjz(t.clues.slice(0))),l.GID(w,l.sjz(t.types.map(t=>({...t})))),l.GID(J,l.sjz(t.rules.map(t=>({...t})))),l.GID(j,l.sjz(t.solution))}fetch("logic.json").then(t=>t.json()).then(t=>{for(let e of Object.keys(t).sort()){let c=t[e],l=Object.keys(c).sort((t,e)=>t.localeCompare(e,void 0,{numeric:!0})),n=[];for(let t of l){let e=c[t],l={num:t,name:e.name,desc:e.desc.trim(),clues:e.clues.map(t=>t.trim()),types:e.types||[],rules:e.rules||[],solution:e.solution};e.solution2&&(l.solution=e.solution2.map(t=>[...t].map((t,e)=>l.types[e].vals[+t]))),n.push(l)}y.push(n)}});var M=g(),K=l.VHm(M),S=l.iUc(K),W=l.J9n(l.iUc(S),2);l.W6n(W);var k=l.J9n(W,2);l.FVM(k),l.mcB(S);var D=l.J9n(S,2),x=l.iUc(D);l.J9n(l.iUc(x)).__click=[r,n,O],l.mcB(x);var P=l.J9n(x,2);l.S6b(P,5,n,l.KzB,(t,e,c)=>{var o=s(),r=l.iUc(o),i=l.iUc(r),a=l.iUc(i);l.FVM(a),l.qt_(a,"placeholder",`Clue ${(c+1)??""}`),l.J9n(a,2).__click=()=>{n().splice(c,1),l.GID(O,l.sjz(n()))},l.mcB(i),l.mcB(r),l.mcB(o),l.WpJ(a,()=>n()[c],t=>l.Oyi(O,l.Zwg(n)[c]=t,l.Zwg(n))),l.R3I(t,o)}),l.mcB(P),l.mcB(D),l.mcB(K);var R=l.J9n(K,2),G=t=>{var e=d(),c=l.J9n(l.iUc(e),2),n=l.iUc(c),o=l.iUc(n),r=l.iUc(o),s=l.iUc(r);l.S6b(s,5,U,l.KzB,(t,e)=>{var c=i(),n=l.iUc(c,!0);l.mcB(c),l.OwZ(()=>l.u7_(n,l.U2M(e).type)),l.R3I(t,c)}),l.mcB(s),l.mcB(r);var m=l.J9n(r);l.S6b(m,5,B,l.KzB,(t,e)=>{var c=u();l.S6b(c,21,()=>l.U2M(e),l.KzB,(t,e)=>{var c=a(),n=l.iUc(c,!0);l.mcB(c),l.OwZ(()=>l.u7_(n,l.U2M(e))),l.R3I(t,c)}),l.mcB(c),l.R3I(t,c)}),l.mcB(m),l.mcB(o),l.mcB(n),l.mcB(c),l.mcB(e),l.R3I(t,e)};l.if(R,t=>{B()&&t(G)});var L=l.J9n(R,4),X=l.J9n(l.iUc(L),2);l.S6b(X,17,()=>y,l.KzB,(t,e)=>{var c=f(),n=l.J9n(l.iUc(c));l.S6b(n,21,()=>l.U2M(e),l.KzB,(t,e)=>{var c=h(),n=l.iUc(c),o=l.iUc(n,!0);l.mcB(n);var r=l.J9n(n),s=l.iUc(r),i=l.J9n(s);l.OwZ(()=>l.qt_(i,"title",l.U2M(e).clues.join("\n\n")));var a=l.iUc(i);l.mcB(i),l.mcB(r);var u=l.J9n(r);l.S6b(u,21,()=>l.U2M(e).types,l.KzB,(t,e)=>{var c=m();l.OwZ(()=>l.qt_(c,"title",l.U2M(e).vals.join(", ")));var n=l.iUc(c);l.mcB(c),l.OwZ(()=>l.u7_(n,`${l.U2M(e).vals.length??""} ${l.U2M(e).type??""}`)),l.R3I(t,c)}),l.mcB(u);var d=l.J9n(u),f=l.iUc(d);f.__click=[v,_,e];var g=l.J9n(f,2),U=t=>{var c=b();c.__click=[p,_,e],l.R3I(t,c)};l.if(g,t=>{l.U2M(e).solution&&t(U)}),l.mcB(d),l.mcB(c),l.OwZ(()=>{l.u7_(o,l.U2M(e).num),l.qt_(r,"title",l.U2M(e).desc),l.u7_(s,`${l.U2M(e).name??""} `),l.u7_(a,`${l.U2M(e).clues.length??""} clues`),l.VHj(f,"btn-outline-danger",!l.U2M(e).rules.length)}),l.R3I(t,c)}),l.mcB(n),l.mcB(c),l.R3I(t,c)}),l.mcB(L),l.WpJ(W,()=>l.hPL(z,"$title",c),t=>l.GID(z,t)),l.WpJ(k,()=>l.hPL(I,"$description",c),t=>l.GID(I,t)),l.R3I(t,M),l.Swx()})}},e={};function c(l){var n=e[l];if(void 0!==n)return n.exports;var o=e[l]={exports:{}};return t[l](o,o.exports,c),o.exports}c.m=t,c.d=function(t,e){for(var l in e)c.o(e,l)&&!c.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},(()=>{var t=[];c.O=function(e,l,n,o){if(l){o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[l,n,o];return}for(var s=1/0,r=0;r<t.length;r++){for(var l=t[r][0],n=t[r][1],o=t[r][2],i=!0,a=0;a<l.length;a++)(!1&o||s>=o)&&Object.keys(c.O).every(function(t){return c.O[t](l[a])})?l.splice(a--,1):(i=!1,o<s&&(s=o));if(i){t.splice(r--,1);var u=n();void 0!==u&&(e=u)}}return e}})(),c.rv=function(){return"1.1.8"},(()=>{var t={app_game_logic:0};c.O.j=function(e){return 0===t[e]};var e=function(e,l){var n=l[0],o=l[1],r=l[2],s,i,a=0;if(n.some(function(e){return 0!==t[e]})){for(s in o)c.o(o,s)&&(c.m[s]=o[s]);if(r)var u=r(c)}for(e&&e(l);a<n.length;a++)i=n[a],c.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return c.O(u)},l=self.webpackChunkvwww=self.webpackChunkvwww||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))})(),c.ruid="bundler=rspack@1.1.8";var l=c.O(void 0,["1","3","2","22","11","30","29"],function(){return c("104")});l=c.O(l)})();
(()=>{"use strict";var e={105:function(e,t,n){n("1"),n("86");var r,s,i,a,o,u,c,l,d,m,f=n("2"),h=n("106"),I=n("108"),R=n("109"),p=n("110"),v=n("111"),U=n("112"),g=n("107"),y=n("90"),M=n("116"),T=n("117");(r=u||(u={}))[r.ROUND_WAIT=9]="ROUND_WAIT",r[r.ROUND_INTERM=10]="ROUND_INTERM",r[r.ROUND_START=11]="ROUND_START",r[r.READY=12]="READY",r[r.MOVE_CONFIRM=13]="MOVE_CONFIRM",r[r.END_ROUND=14]="END_ROUND",r[r.END_TURN=15]="END_TURN",r[r.NUM=16]="NUM",(s=c||(c={}))[s.READY=5]="READY",s[s.MOVE=6]="MOVE",s[s.MOVE_END=7]="MOVE_END",s[s.NUM=8]="NUM",(i=l||(l={}))[i.WAITING=0]="WAITING",i[i.INTERMISSION=1]="INTERMISSION",i[i.ACTIVE=2]="ACTIVE";class E extends T.R7{static DEFAULT_PLAYER={...T.R7.DEFAULT_PLAYER,ready:!1,inRound:!1};isReady=(0,y.$_)(!1);inRound=(0,y.$_)(!1);roundState=(0,y.$_)(0);roundTimerStart=(0,y.$_)(0);roundTimerEnd=(0,y.$_)(0);roundPlayers=(0,y.$_)([]);roundPlayerQueue=(0,y.$_)([]);INTERMISSION_TIME=3e4;ROUND_TIME=2e4;sendReady(e){this.room?.send(new M.T().putInt(c.READY).putBool(e).toArray())}sendMoveEnd(){this.room?.send(new M.T().putInt(c.MOVE_END).toArray())}roundWait(){this.roundState.set(l.WAITING),this.unsetReady()}roundIntermission(e){this.roundState.set(l.INTERMISSION),this.setTimer(e),this.unsetReady(),this.isReady.set(!1)}roundStart(e){this.roundState.set(l.ACTIVE),this.setTimer(e),this.unsetReady()}roundSetPlayers(e){this.roundPlayers.set(e)}roundSetPlayerQueue(e){this.roundPlayerQueue.set(e)}setTimer(e){this.roundTimerStart.set(Date.now()),this.roundTimerEnd.set(Date.now()+e)}processWelcomeGame(e){let t=e.getInt();if(0===t)this.roundWait();else if(1===t){this.roundIntermission(e.getInt());for(let t=0;t<=this.clients.size;t++){let t=e.getInt();if(t<0)break;let n=this.clients.get(t);n&&(n.ready=!0)}}else 2===t&&this.roundStart(e.getInt());let n=[];for(let t=0;t<=this.clients.size;t++){let t=e.getInt();if(t<0)break;let r=this.clients.get(t);r&&(r.inRound=!0,n.push(r))}this.roundSetPlayers(n);let r=[];for(let t=0;t<=this.clients.size;t++){let t=e.getInt();if(t<0)break;let n=this.clients.get(t);n&&r.push(n)}this.roundSetPlayerQueue(r),this.processWelcomeGame2(e)}processWelcomeGame2(e){}playerActivated(e){this.roundPlayerQueue.update(t=>[...t,e])}playerDeactivated(e){this.roundPlayers.update(t=>t.filter(t=>t!==e)),this.roundPlayerQueue.update(t=>t.filter(t=>t!==e)),e.inRound=!1,e.isMe&&this.inRound.set(!1)}processMessage2(e,t){switch(e){case u.ROUND_WAIT:this.roundWait();break;case u.ROUND_INTERM:this.roundIntermission(this.INTERMISSION_TIME);break;case u.ROUND_START:{let e=[];for(let e of this.clients.values())e.inRound=!1;for(let n=0;n<=this.clients.size;n++){let n=t.getInt();if(n<0)break;let r=this.clients.get(n);r&&(r.inRound=!0,e.push(r))}this.inRound.set(this.clients.get(this.myCn)?.inRound??!1),this.roundSetPlayers(e),this.roundSetPlayerQueue([]),this.roundStart(this.ROUND_TIME),this.processRoundStart(t);break}case u.READY:{let e=t.getInt(),n=t.getBool(),r=this.clients.get(e);r&&(r.ready=n,e===this.myCn&&this.isReady.set(n),this.updatePlayers(!0),this.roundPlayers.update(e=>e),this.roundPlayerQueue.update(e=>e));break}case u.MOVE_CONFIRM:this.processMoveConfirm(t);break;case u.END_TURN:this.processEndTurn(t);break;case u.END_ROUND:this.processEndRound(t);break;default:return this.processMessage3(e,t)}return!0}processRoundStart(e){}processMessage3(e,t){return!1}unsetReady(){for(let e of this.clients.values())e.ready=!1}}(a=d||(d={}))[a.NUM=16]="NUM",(o=m||(m={}))[o.NUM=8]="NUM";class S extends E{static DEFAULT_PLAYER=E.DEFAULT_PLAYER;INTERMISSION_TIME=5e3;ROUND_TIME=3e3;processEndTurn(e){}}class O extends S{modeIndependent=(0,y.$_)(!1);modeTeam=(0,y.$_)(0);playersSortProps=[e=>e.streak,e=>e.wins-e.losses,e=>e.wins];processMoveConfirm(e){}processEndRound(e){let t=e.getInt(),n=Array(t).fill(!1).map(()=>e.getBool()),r=Math.min(e.getInt(),this.clients.size),s={playerCount:r,wins:n.map((e,t)=>({id:t,win:e,players:[]}))};for(let i=0;i<r;i++){let r=e.getInt(),a=this.clients.get(r);if(!a)continue;let o=i%t;n[o]?(a.wins++,a.streak<0&&(a.streak=0),a.streak++):(a.losses++,a.streak>0&&(a.streak=0),a.streak--),a.total++,s.wins[o].players.push({name:a.name,cn:a.cn})}this.updatePlayers(),this.addHistory(s)}processWelcomeMode(e){this.modeIndependent.set(e.getBool()),this.modeTeam.set(e.getInt())}processWelcomePlayer(e,t){t.wins=e.getInt(),t.losses=e.getInt(),t.total=t.wins+t.losses,t.streak=e.getInt()}playerResetStats(e){e.wins=0,e.losses=0,e.total=0,e.streak=0}makePlayer(){return{...S.DEFAULT_PLAYER,wins:0,losses:0,total:0,streak:0}}}var N=f.XKW("<span> </span>"),_=f.XKW("<div>FFA: <!></div>"),w=f.XKW("<span> </span>"),D=f.XKW("<div> <!></div>"),P=f.XKW('<li class="list-group-item"><!></li>'),$=f.XKW('<li class="list-group-item">No past games!</li>'),b=f.XKW('<ul class="list-group list-group-flush overflow-auto" style="max-height: 15rem"></ul>'),A=n("113"),W=f.XKW("<span> </span>"),B=f.XKW("<span> </span>"),L=f.XKW("<div>In game: <!></div> <div>Queue: <!></div>",1);let k=[["optIndependent","b",!1,"Independent","players or teams win/lose independently of each other"],["optTeams","i",0,"Teams","number of teams players are randomly assigned to every game",0,45]];function K(e,t){return(e?"Independent ":"One-Winner ")+(t?t+" Teams":"FFA")}var V=f.XKW("<!> <!>",1),X=f.XKW("<!> <div> </div> <!>",1),J=f.XKW('<!> <!> <!> <div class="row"><div class="col-12 col-lg-8"><!> <!></div> <div class="col-12 col-lg-4 mb-3"><!></div></div>',1);(0,n("84").Z)(function(e,t){f.VFu(t,!1);let n=f.hyl(),r=()=>f.hPL(x,"$name",n),s=()=>f.hPL(m,"$inGame",n),i=()=>f.hPL(M,"$isActive",n),a=()=>f.hPL(Z,"$roundState",n),o=()=>f.hPL(T,"$isReady",n),u=()=>f.hPL(E,"$pastGames",n),c=()=>f.hPL(S,"$clientsSorted",n),l=new g.Z,d=new O(l),{inGame:m,isActive:M,isReady:T,pastGames:E,clientsSorted:S,roundState:Z}=d,x=(0,y.CR)("game/mp/_shared/name","");f.S1n();var C=J(),F=f.VHm(C);(0,p.Z)(F,{get value(){return f.I8m(),r()},set value($$value){f.GID(x,$$value)},$$legacy:!0});var G=f.J9n(F,2);(0,U.Z)(G,{gameId:"actionless-rv9luoetuchidspmvghiq",roomType:"ActionlessRoom",onJoinedRoom:e=>d.enterGame(e,r()),formatGameMode:function({optIndependent:e,optTeams:t}){return K("true"===e,+t)},roomCreateOptions:k});var z=f.J9n(G,2),H=f.UXX(()=>1===a());(0,v.Z)(z,{get inGame(){return s()},get isActive(){return i()},get canReady(){return f.U2M(H)},get isReady(){return o()},onSetActive:e=>d.sendActive(e),onSetReady:e=>d.sendReady(e),onReset:()=>d.sendReset(),onDisconnect:()=>d.leaveGame(),children:(e,t)=>{!function(e,t){f.VFu(t,!0);let n=f.hyl(),r=()=>f.hPL(l,"$roundState",n),s=()=>f.hPL(d,"$roundTimerStart",n),i=()=>f.hPL(m,"$roundTimerEnd",n),a=()=>f.hPL(R,"$modeIndependent",n),o=()=>f.hPL(p,"$modeTeam",n),u=()=>f.hPL(h,"$roundPlayers",n),c=()=>f.hPL(I,"$roundPlayerQueue",n),{roundState:l,roundTimerStart:d,roundTimerEnd:m,roundPlayers:h,roundPlayerQueue:I,modeIndependent:R,modeTeam:p}=t.gameState;var v,U,g,y,M,T,E,S=X(),O=f.VHm(S),N=e=>{var t=f.fLW("Waiting for players…");f.R3I(e,t)},_=e=>{var t=V(),n=f.VHm(t),a=e=>{var t=f.fLW("Intermission:");f.R3I(e,t)},o=e=>{var t=f.fLW("Results are coming soon:");f.R3I(e,t)};f.if(n,e=>{1===r()?e(a):e(o,!1)});var u=f.J9n(n,2);(0,A.Z)(u,{get startTime(){return s()},get endTime(){return i()}}),f.R3I(e,t)};f.if(O,e=>{0===r()?e(N):e(_,!1)});var w=f.J9n(O,2),D=f.iUc(w);f.OwZ(()=>f.u7_(D,`Game Mode: ${K(a(),o())??""}`)),f.mcB(w),v=f.J9n(w,2),U={get inGame(){return u()},get inQueue(){return c()}},g=L(),y=f.VHm(g),M=f.J9n(f.iUc(y)),f.S6b(M,17,()=>U.inGame,f.KzB,(e,t)=>{var n=W(),r=f.iUc(n);f.mcB(n),f.OwZ(()=>{f.u8O(n,`badge text-bg-${(f.U2M(t).ready?"info":"primary")??""} me-1`),f.u7_(r,`${f.U2M(t).name??""} (${f.U2M(t).cn??""})`)}),f.R3I(e,n)},e=>{f.lpx();var t=f.fLW("nobody");f.R3I(e,t)}),f.mcB(y),T=f.J9n(y,2),E=f.J9n(f.iUc(T)),f.S6b(E,17,()=>U.inQueue,f.KzB,(e,t)=>{var n=B(),r=f.iUc(n);f.mcB(n),f.OwZ(()=>{f.u8O(n,`badge text-bg-${(f.U2M(t).ready?"info":"secondary")??""} me-1`),f.u7_(r,`${f.U2M(t).name??""} (${f.U2M(t).cn??""})`)}),f.R3I(e,n)},e=>{f.lpx();var t=f.fLW("nobody");f.R3I(e,t)}),f.mcB(T),f.R3I(v,g),f.R3I(e,S),f.Swx()}(e,{gameState:d})},$$slots:{default:!0}});var Q=f.J9n(z,2),Y=f.iUc(Q),j=f.iUc(Y),q=f.UXX(()=>!u().length);(0,I.Z)(j,{get canClear(){return f.U2M(q)},onClear:()=>d.clearHistory(),children:(e,t)=>{var n,r,s;n=e,r={get results(){return u()}},s=b(),f.S6b(s,21,()=>r.results,f.KzB,(e,t)=>{var n=P(),r=f.iUc(n),s=e=>{var n=_(),r=f.J9n(f.iUc(n));f.S6b(r,17,()=>f.U2M(t).wins,f.KzB,(e,t)=>{var n=f.UI8(),r=f.VHm(n);f.S6b(r,17,()=>f.U2M(t).players,f.KzB,(e,n)=>{var r=N(),s=f.iUc(r);f.mcB(r),f.OwZ(()=>{f.u8O(r,`badge me-1 text-bg-${(f.U2M(t).win?"success":"danger")??""}`),f.u7_(s,`${f.U2M(n).name??""} (${f.U2M(n).cn??""})`)}),f.R3I(e,r)}),f.R3I(e,n)}),f.mcB(n),f.R3I(e,n)},i=e=>{var n=f.UI8(),r=f.VHm(n);f.S6b(r,17,()=>f.U2M(t).wins,f.KzB,(e,t)=>{var n=D(),r=f.iUc(n),s=f.J9n(r);f.S6b(s,17,()=>f.U2M(t).players,f.KzB,(e,n)=>{var r=w(),s=f.iUc(r);f.mcB(r),f.OwZ(()=>{f.u8O(r,`badge me-1 text-bg-${(f.U2M(t).win?"success":"danger")??""}`),f.u7_(s,`${f.U2M(n).name??""} (${f.U2M(n).cn??""})`)}),f.R3I(e,r)}),f.mcB(n),f.OwZ(()=>f.u7_(r,`Team ${f.U2M(t).id??""}: `)),f.R3I(e,n)}),f.R3I(e,n)};f.if(r,e=>{f.U2M(t).playerCount==f.U2M(t).wins.length?e(s):e(i,!1)}),f.mcB(n),f.R3I(e,n)},e=>{var t=$();f.R3I(e,t)}),f.mcB(s),f.R3I(n,s)},$$slots:{default:!0}});var ee=f.J9n(j,2),et=f.UXX(()=>[["Streak",e=>e.streak],["Score",e=>e.wins-e.losses],["Win",e=>[e.wins,e.total]],["Loss",e=>[e.losses,e.total]]]);(0,R.Z)(ee,{get players(){return c()},get columns(){return f.U2M(et)}}),f.mcB(Y);var en=f.J9n(Y,2),er=f.iUc(en);(0,h.Z)(er,{chatState:l,onInput:e=>d.processCommand(e)}),f.mcB(en),f.mcB(Q),f.R3I(e,C),f.Swx()})},25:function(){},47:function(e,t,n){n(24),n(25)},2:function(e,t,n){n.d(t,{As6:function(){return c.As},Ba6:function(){return u.B},DBn:function(){return i.DB},EoV:function(){return c.Eo},GID:function(){return v.GI},I8m:function(){return v.I8},J9n:function(){return M.J9},JcM:function(){return I.Jc},KzB:function(){return s.Kz},OwZ:function(){return I.Ow},R3I:function(){return f.R3},S1n:function(){return m.S},S6b:function(){return s.S6},SBE:function(){return R.SB},Swx:function(){return g.Sw},U2M:function(){return g.U2},UF7:function(){return a.UF},UI8:function(){return f.UI},UXX:function(){return h.UX},VFu:function(){return g.VF},VHj:function(){return o.VH},VHm:function(){return M.VH},W6n:function(){return a.W6},WpJ:function(){return c.Wp},XKW:function(){return f.XK},Z1T:function(){return l.Z},ZTd:function(){return T.ZT},clJ:function(){return u.cl},fD6:function(){return p.fD},fLW:function(){return f.fL},hPL:function(){return v.hP},hyl:function(){return v.hy},iUc:function(){return M.iU},if:function(){return r.R},lpx:function(){return d.lp},mcB:function(){return d.mc},nKH:function(){return h.nK},qt_:function(){return a.qt},sjz:function(){return y.s},t8m:function(){return R.t8},u7_:function(){return U.u7},u8O:function(){return o.u8},vgT:function(){return p.vg}}),n(3),n(4),n(25),n(26),n(27),n(22),n(35),n(15),n(36),n(37);var r=n(38);n(39),n(40);var s=n(41);n(42),n(43);var i=n(44);n(45),n(46),n(32),n(47),n(48);var a=n(49),o=n(51),u=n(29);n(31),n(52),n(55);var c=n(56);n(57),n(58),n(59),n(60),n(61);var l=n(62);n(63),n(64);var d=n(18);n(65);var m=n(66);n(67);var f=n(33),h=n(23),I=n(8),R=n(10),p=n(68),v=n(69);n(73);var U=n(28),g=n(6);n(74),n(53);var y=n(21);n(75);var M=n(17);n(50),n(16);var T=n(7);n(76),n(20),n(77)}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},(()=>{var e=[];n.O=function(t,r,s,i){if(r){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[r,s,i];return}for(var o=1/0,a=0;a<e.length;a++){for(var r=e[a][0],s=e[a][1],i=e[a][2],u=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every(function(e){return n.O[e](r[c])})?r.splice(c--,1):(u=!1,i<o&&(o=i));if(u){e.splice(a--,1);var l=s();void 0!==l&&(t=l)}}return t}})(),n.rv=function(){return"1.1.8"},(()=>{var e={app_game_mp_actionless:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s=r[0],i=r[1],a=r[2],o,u,c=0;if(s.some(function(t){return 0!==e[t]})){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(a)var l=a(n)}for(t&&t(r);c<s.length;c++)u=s[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(l)},r=self.webpackChunkvwww=self.webpackChunkvwww||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.1.8";var r=n.O(void 0,["1","3","2","15","32","34","33","31"],function(){return n("105")});r=n.O(r)})();
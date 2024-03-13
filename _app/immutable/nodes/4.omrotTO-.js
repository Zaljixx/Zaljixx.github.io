import{n as F,i as bt,r as yt,f as At,s as St,c as at,u as rt,g as ct,d as ft,h as ht}from"../chunks/scheduler.OCC62h8t.js";import{z as Ct,f as y,A as It,d as et,S as Mt,i as Et,g as B,s as N,h as L,y as Q,c as P,j as D,k as f,l as G,a as O,x as C,B as ut,t as dt,C as U,D as W}from"../chunks/index.BxzBp_Pl.js";const kt=typeof window<"u";let Tt=kt?()=>window.performance.now():()=>Date.now(),st=kt?e=>requestAnimationFrame(e):F;const z=new Set;function wt(e){z.forEach(t=>{t.c(e)||(z.delete(t),t.f())}),z.size!==0&&st(wt)}function Dt(e){let t;return z.size===0&&st(wt),{promise:new Promise(s=>{z.add(t={c:e,f:s})}),abort(){z.delete(t)}}}const X=new Map;let Y=0;function Rt(e){let t=5381,s=e.length;for(;s--;)t=(t<<5)-t^e.charCodeAt(s);return t>>>0}function Bt(e,t){const s={stylesheet:It(t),rules:{}};return X.set(e,s),s}function Lt(e,t,s,o,l,n,i,r=0){const c=16.666/o;let p=`{
`;for(let b=0;b<=1;b+=c){const A=t+(s-t)*n(b);p+=b*100+`%{${i(A,1-A)}}
`}const m=p+`100% {${i(s,1-s)}}
}`,_=`__svelte_${Rt(m)}_${r}`,h=Ct(e),{stylesheet:u,rules:v}=X.get(h)||Bt(h,e);v[_]||(v[_]=!0,u.insertRule(`@keyframes ${_} ${m}`,u.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${_} ${o}ms linear ${l}ms 1 both`,Y+=1,_}function jt(e,t){const s=(e.style.animation||"").split(", "),o=s.filter(t?n=>n.indexOf(t)<0:n=>n.indexOf("__svelte")===-1),l=s.length-o.length;l&&(e.style.animation=o.join(", "),Y-=l,Y||Ht())}function Ht(){st(()=>{Y||(X.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&y(t)}),X.clear())})}function Ot(e,t,s,o){if(!t)return F;const l=e.getBoundingClientRect();if(t.left===l.left&&t.right===l.right&&t.top===l.top&&t.bottom===l.bottom)return F;const{delay:n=0,duration:i=300,easing:r=bt,start:c=Tt()+n,end:p=c+i,tick:m=F,css:_}=s(e,{from:t,to:l},o);let h=!0,u=!1,v;function w(){_&&(v=Lt(e,0,1,i,n,r,_)),n||(u=!0)}function b(){_&&jt(e,v),h=!1}return Dt(A=>{if(!u&&A>=c&&(u=!0),u&&A>=p&&(m(1,0),b()),!h)return!1;if(u){const S=A-c,H=0+1*r(S/i);m(H,1-H)}return!0}),w(),m(0,1),b}function Vt(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:s,height:o}=t,l=e.getBoundingClientRect();e.style.position="absolute",e.style.width=s,e.style.height=o,qt(e,l)}}function qt(e,t){const s=e.getBoundingClientRect();if(t.left!==s.left||t.top!==s.top){const o=getComputedStyle(e),l=o.transform==="none"?"":o.transform;e.style.transform=`${l} translate(${t.left-s.left}px, ${t.top-s.top}px)`}}function gt(e){return e?.length!==void 0?e:Array.from(e)}function xt(e,t){e.d(1),t.delete(e.key)}function Nt(e,t){e.f(),xt(e,t)}function Pt(e,t,s,o,l,n,i,r,c,p,m,_){let h=e.length,u=n.length,v=h;const w={};for(;v--;)w[e[v].key]=v;const b=[],A=new Map,S=new Map,H=[];for(v=u;v--;){const d=_(l,n,v),I=s(d);let M=i.get(I);M?o&&H.push(()=>M.p(d,t)):(M=p(I,d),M.c()),A.set(I,b[v]=M),I in w&&S.set(I,Math.abs(v-w[I]))}const V=new Set,R=new Set;function q(d){et(d,1),d.m(r,m),i.set(d.key,d),m=d.first,u--}for(;h&&u;){const d=b[u-1],I=e[h-1],M=d.key,j=I.key;d===I?(m=d.first,h--,u--):A.has(j)?!i.has(M)||V.has(M)?q(d):R.has(j)?h--:S.get(M)>S.get(j)?(R.add(M),q(d)):(V.add(j),h--):(c(I,i),h--)}for(;h--;){const d=e[h];A.has(d.key)||c(d,i)}for(;u;)q(b[u-1]);return yt(H),b}function Gt(e){const t=e-1;return t*t*t+1}function Ut(e,{from:t,to:s},o={}){const l=getComputedStyle(e),n=l.transform==="none"?"":l.transform,[i,r]=l.transformOrigin.split(" ").map(parseFloat),c=t.left+t.width*i/s.width-(s.left+i),p=t.top+t.height*r/s.height-(s.top+r),{delay:m=0,duration:_=u=>Math.sqrt(u)*120,easing:h=Gt}=o;return{delay:m,duration:At(_)?_(Math.sqrt(c*c+p*p)):_,easing:h,css:(u,v)=>{const w=v*c,b=v*p,A=u+v*t.width/s.width,S=u+v*t.height/s.height;return`transform: ${n} translate(${w}px, ${b}px) scale(${A}, ${S});`}}}const Wt=e=>({}),_t=e=>({}),zt=e=>({}),mt=e=>({});function pt(e,t,s){const o=e.slice();return o[9]=t[s],o}function vt(e,t){let s,o,l,n,i,r,c=F;return{key:e,first:null,c(){s=B("img"),this.h()},l(p){s=L(p,"IMG",{src:!0,alt:!0,id:!0,style:!0,class:!0}),this.h()},h(){ht(s.src,o=t[9].path)||f(s,"src",o),f(s,"alt",l=t[9].id),f(s,"id",n=t[9].id),f(s,"style",i=`width:${t[1]};`),f(s,"class","svelte-137ugie"),this.first=s},m(p,m){O(p,s,m)},p(p,m){t=p,m&1&&!ht(s.src,o=t[9].path)&&f(s,"src",o),m&1&&l!==(l=t[9].id)&&f(s,"alt",l),m&1&&n!==(n=t[9].id)&&f(s,"id",n),m&2&&i!==(i=`width:${t[1]};`)&&f(s,"style",i)},r(){r=s.getBoundingClientRect()},f(){Vt(s),c()},a(){c(),c=Ot(s,r,Ut,{duration:t[2]})},d(p){p&&y(s)}}}function Ft(e){let t,s,o,l,n;return{c(){t=U("svg"),s=U("g"),o=U("path"),this.h()},l(i){t=W(i,"svg",{width:!0,height:!0,id:!0,transform:!0});var r=D(t);s=W(r,"g",{id:!0,transform:!0});var c=D(s);o=W(c,"path",{style:!0,d:!0,id:!0}),D(o).forEach(y),c.forEach(y),r.forEach(y),this.h()},h(){f(o,"style",l=`fill:none;stroke:${e[3]};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`),f(o,"d","m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"),f(o,"id","path1412"),f(s,"id","layer1"),f(s,"transform","translate(-65.605611,-95.36949)"),f(t,"width","39px"),f(t,"height","110px"),f(t,"id","svg8"),f(t,"transform",n=`scale(${e[4]})`)},m(i,r){O(i,t,r),C(t,s),C(s,o)},p(i,r){r&8&&l!==(l=`fill:none;stroke:${i[3]};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`)&&f(o,"style",l),r&16&&n!==(n=`scale(${i[4]})`)&&f(t,"transform",n)},d(i){i&&y(t)}}}function Kt(e){let t,s,o,l,n;return{c(){t=U("svg"),s=U("g"),o=U("path"),this.h()},l(i){t=W(i,"svg",{width:!0,height:!0,id:!0,transform:!0});var r=D(t);s=W(r,"g",{id:!0,transform:!0});var c=D(s);o=W(c,"path",{style:!0,d:!0,id:!0}),D(o).forEach(y),c.forEach(y),r.forEach(y),this.h()},h(){f(o,"style",l=`fill:none;stroke:${e[3]};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`),f(o,"d","m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"),f(o,"id","path1412"),f(s,"id","layer1"),f(s,"transform","translate(-65.605611,-95.36949)"),f(t,"width","39px"),f(t,"height","110px"),f(t,"id","svg8"),f(t,"transform",n=`rotate(180) scale(${e[4]})`)},m(i,r){O(i,t,r),C(t,s),C(s,o)},p(i,r){r&8&&l!==(l=`fill:none;stroke:${i[3]};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`)&&f(o,"style",l),r&16&&n!==(n=`rotate(180) scale(${i[4]})`)&&f(t,"transform",n)},d(i){i&&y(t)}}}function Jt(e){let t,s='<div class="header svelte-137ugie"><div class="logo-container svelte-137ugie"><img class="small-logo svelte-137ugie" src="/Logo_Dark_Grey_2B2D2C.svg" alt=""/></div> <div><ul class="navigation svelte-137ugie"><li class="svelte-137ugie"><a href="about" class="svelte-137ugie">About Us</a></li> <li class="svelte-137ugie"><a href="projects" class="svelte-137ugie">Projects</a></li></ul></div></div>',o,l,n,i,r,c=[],p=new Map,m,_,h,u,v,w,b=`<div><h3>Client</h3> <h3>MADARA Retail</h3>

				Interior design Anete Eglīte Marta Gaile</div> <div><h3>Furniture</h3> <h3>Plaster KOURASANIT Latvija, SIA</h3> <h3>Decors and free-standing display tables AD production, SIA</h3> <h3>Metal parts GP Services, SIA</h3> <h3>Advertising stands Colorart Media, SIA</h3> <h3>Starks Lighting Cenuklubs.lv, SIA</h3></div>`,A,S,H=`<h1>MADARA Organic Skincare</h1> <h3>Riga, 2024</h3> <h3>New concept for retail stores was created to engage with customers in a new way. Sandy
			textures for ceilings, walls and floors made by hands wraps the space to create a calming
			background for a new shopping experience gently drawing attention to MADARA products.
			Contrasting elements - puffy green tables - are introduced for promotions and a playful
			element, chanterelle, can be exchanged to go along the brand story.</h3> <img style="width: 95%;" src="/_STA3113_fotoAnsisStarks_1920x1280.png" alt=""/>`,V,R,q='<div class="info-link svelte-137ugie"><p>Instagram</p> <p class="link svelte-137ugie">studio@grafiits.com</p></div> <div><h4>2024</h4></div>',d,I,M,j=gt(e[0]);const nt=a=>a[9].id;for(let a=0;a<j.length;a+=1){let g=pt(e,j,a),k=nt(g);p.set(k,c[a]=vt(k,g))}const Z=e[8]["left-control"],K=at(Z,e,e[7],mt),E=K||Ft(e),$=e[8]["right-control"],J=at($,e,e[7],_t),T=J||Kt(e);return{c(){t=B("div"),t.innerHTML=s,o=N(),l=B("div"),n=B("div"),i=B("div"),r=B("div");for(let a=0;a<c.length;a+=1)c[a].c();m=N(),_=B("button"),E&&E.c(),h=N(),u=B("button"),T&&T.c(),v=N(),w=B("div"),w.innerHTML=b,A=N(),S=B("div"),S.innerHTML=H,V=N(),R=B("div"),R.innerHTML=q,this.h()},l(a){t=L(a,"DIV",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-bguqhe"&&(t.innerHTML=s),o=P(a),l=L(a,"DIV",{style:!0});var g=D(l);n=L(g,"DIV",{style:!0});var k=D(n);i=L(k,"DIV",{id:!0,class:!0});var x=D(i);r=L(x,"DIV",{id:!0,class:!0});var it=D(r);for(let tt=0;tt<c.length;tt+=1)c[tt].l(it);it.forEach(y),m=P(x),_=L(x,"BUTTON",{id:!0,class:!0});var lt=D(_);E&&E.l(lt),lt.forEach(y),h=P(x),u=L(x,"BUTTON",{id:!0,class:!0});var ot=D(u);T&&T.l(ot),ot.forEach(y),x.forEach(y),v=P(k),w=L(k,"DIV",{style:!0,"data-svelte-h":!0}),Q(w)!=="svelte-1ch6ksc"&&(w.innerHTML=b),k.forEach(y),A=P(g),S=L(g,"DIV",{style:!0,"data-svelte-h":!0}),Q(S)!=="svelte-7dcgcs"&&(S.innerHTML=H),g.forEach(y),V=P(a),R=L(a,"DIV",{class:!0,"data-svelte-h":!0}),Q(R)!=="svelte-u9t4hd"&&(R.innerHTML=q),this.h()},h(){f(t,"class","content-main"),f(r,"id","carousel-images"),f(r,"class","svelte-137ugie"),f(_,"id","left"),f(_,"class","svelte-137ugie"),f(u,"id","right"),f(u,"class","svelte-137ugie"),f(i,"id","carousel-container"),f(i,"class","svelte-137ugie"),G(w,"display","flex"),G(n,"width","27%"),G(S,"margin-left","50px"),G(l,"margin-left","59px"),G(l,"margin-top","59px"),G(l,"display","flex"),f(R,"class","footer svelte-137ugie")},m(a,g){O(a,t,g),O(a,o,g),O(a,l,g),C(l,n),C(n,i),C(i,r);for(let k=0;k<c.length;k+=1)c[k]&&c[k].m(r,null);C(i,m),C(i,_),E&&E.m(_,null),C(i,h),C(i,u),T&&T.m(u,null),C(n,v),C(n,w),C(l,A),C(l,S),O(a,V,g),O(a,R,g),d=!0,I||(M=[ut(_,"click",e[5]),ut(u,"click",e[6])],I=!0)},p(a,[g]){if(g&3){j=gt(a[0]);for(let k=0;k<c.length;k+=1)c[k].r();c=Pt(c,g,nt,1,a,j,p,r,Nt,vt,null,pt);for(let k=0;k<c.length;k+=1)c[k].a()}K?K.p&&(!d||g&128)&&rt(K,Z,a,a[7],d?ft(Z,a[7],g,zt):ct(a[7]),mt):E&&E.p&&(!d||g&24)&&E.p(a,d?g:-1),J?J.p&&(!d||g&128)&&rt(J,$,a,a[7],d?ft($,a[7],g,Wt):ct(a[7]),_t):T&&T.p&&(!d||g&24)&&T.p(a,d?g:-1)},i(a){d||(et(E,a),et(T,a),d=!0)},o(a){dt(E,a),dt(T,a),d=!1},d(a){a&&(y(t),y(o),y(l),y(V),y(R));for(let g=0;g<c.length;g+=1)c[g].d();E&&E.d(a),T&&T.d(a),I=!1,yt(M)}}}function Qt(e,t,s){let{$$slots:o={},$$scope:l}=t,{images:n=[{id:"1",path:"/_STA3399_fotoAnsisStarks.png"},{id:"2",path:"/_STA3615_fotoAnsisStarks.png"},{id:"3",path:"/_STA3771_fotoAnsisStarks.png"}]}=t,{imageWidth:i="31%"}=t,{speed:r=500}=t,{controlColor:c="white"}=t,{controlScale:p="0.5"}=t;const m=h=>{const u=n[n.length-1];document.getElementById(u.id).style.opacity=0,s(0,n=[n[n.length-1],...n.slice(0,n.length-1)]),setTimeout(()=>document.getElementById(u.id).style.opacity=1,r)},_=h=>{const u=n[0];document.getElementById(u.id).style.opacity=0,s(0,n=[...n.slice(1,n.length),n[0]]),setTimeout(()=>document.getElementById(u.id).style.opacity=1,r)};return e.$$set=h=>{"images"in h&&s(0,n=h.images),"imageWidth"in h&&s(1,i=h.imageWidth),"speed"in h&&s(2,r=h.speed),"controlColor"in h&&s(3,c=h.controlColor),"controlScale"in h&&s(4,p=h.controlScale),"$$scope"in h&&s(7,l=h.$$scope)},[n,i,r,c,p,m,_,l,o]}class Zt extends Mt{constructor(t){super(),Et(this,t,Qt,Jt,St,{images:0,imageWidth:1,speed:2,controlColor:3,controlScale:4})}}export{Zt as component};

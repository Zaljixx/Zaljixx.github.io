var j=Object.defineProperty;var B=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,f as v,h as D,i as S,j as I,k as N,l as L,m as P,p as b,q as R,v as T,w as q}from"./scheduler.SrBa1XSD.js";let p=!1;function H(){p=!0}function M(){p=!1}function O(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:O(1,l,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,l=Math.max(f,l)}const c=[],a=[];let u=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);u>=r;u--)a.push(t[u]);u--}for(;u>=0;u--)a.push(t[u]);c.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<c.length&&a[r].claim_order>=c[s].claim_order;)s++;const o=s<c.length?c[s]:null;e.insertBefore(a[r],o)}}function U(e,t){e.appendChild(t)}function V(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function re(e){const t=A("style");return t.textContent="/* empty */",W(V(e),t),t.sheet}function W(e,t){return U(e.head||e,t),t.sheet}function F(e,t){if(p){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function se(e,t,n){p&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function A(e){return document.createElement(e)}function J(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ae(){return x(" ")}function le(){return x("")}function ue(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ce(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function fe(e){return e.dataset.svelteH}function K(e){return Array.from(e.childNodes)}function Q(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,l=!1){Q(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),u}}for(let a=e.claim_info.last_index-1;a>=0;a--){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,u}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function C(e,t,n,i){return E(e,l=>l.nodeName===t,l=>{const c=[];for(let a=0;a<l.attributes.length;a++){const u=l.attributes[a];n[u.name]||c.push(u.name)}c.forEach(a=>l.removeAttribute(a))},()=>i(t))}function oe(e,t,n){return C(e,t,n,A)}function _e(e,t,n){return C(e,t,n,J)}function X(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function de(e){return X(e," ")}function me(e,t){t=""+t,e.data!==t&&(e.data=t)}function he(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function pe(e,t){return new e(t)}const m=new Set;let _;function $e(){_={r:0,c:[],p:_}}function ye(){_.r||h(_.c),_=_.p}function Y(e,t){e&&e.i&&(m.delete(e),e.i(t))}function xe(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ge(e){e&&e.c()}function we(e,t){e&&e.l(t)}function Z(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),N(()=>{const c=e.$$.on_mount.map(R).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),l.forEach(N)}function k(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,l,c,a=null,u=[-1]){const r=P;b(e);const s=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:l,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:v(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(f,d,...g)=>{const w=g.length?g[0]:d;return s.ctx&&l(s.ctx[f],s.ctx[f]=w)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](w),o&&ee(e,f)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){H();const f=K(t.target);s.fragment&&s.fragment.l(f),f.forEach(G)}else s.fragment&&s.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),M(),D()}b(r)}class Ne{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){k(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(te);export{V as A,re as B,J as C,_e as D,Ne as S,xe as a,x as b,oe as c,K as d,A as e,X as f,G as g,de as h,ve as i,se as j,F as k,me as l,fe as m,ce as n,he as o,ue as p,le as q,ye as r,ae as s,Y as t,$e as u,pe as v,ge as w,we as x,Z as y,k as z};

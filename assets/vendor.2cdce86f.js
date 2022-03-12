function Fc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=Fc(Km);function Ld(t){return!!t||t===""}function Vc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ue(s)?Wm(s):Vc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ue(t))return t;if(Be(t))return t}}const zm=/;(?![^(]*\))/g,Gm=/:(.+)/;function Wm(t){const e={};return t.split(zm).forEach(n=>{if(n){const s=n.split(Gm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Uc(t){let e="";if(Ue(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Uc(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const W_=t=>Ue(t)?t:t==null?"":j(t)||Be(t)&&(t.toString===Bd||!K(t.toString))?JSON.stringify(t,Fd,2):String(t),Fd=(t,e)=>e&&e.__v_isRef?Fd(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()]}:Be(e)&&!j(e)&&!$d(e)?String(e):e,te={},xs=[],It=()=>{},Qm=()=>!1,Ym=/^on[^a-z]/,Ro=t=>Ym.test(t),Bc=t=>t.startsWith("onUpdate:"),tt=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xm=Object.prototype.hasOwnProperty,Q=(t,e)=>Xm.call(t,e),j=Array.isArray,Cs=t=>Po(t)==="[object Map]",Vd=t=>Po(t)==="[object Set]",K=t=>typeof t=="function",Ue=t=>typeof t=="string",qc=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Ud=t=>Be(t)&&K(t.then)&&K(t.catch),Bd=Object.prototype.toString,Po=t=>Bd.call(t),Jm=t=>Po(t).slice(8,-1),$d=t=>Po(t)==="[object Object]",jc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gi=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zm=/-(\w)/g,ks=Mo(t=>t.replace(Zm,(e,n)=>n?n.toUpperCase():"")),ey=/\B([A-Z])/g,Xs=Mo(t=>t.replace(ey,"-$1").toLowerCase()),qd=Mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),_a=Mo(t=>t?`on${qd(t)}`:""),to=(t,e)=>!Object.is(t,e),Sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},no=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ty=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kl;const ny=()=>Kl||(Kl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Vt;class sy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Vt&&(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Vt=this,e()}finally{Vt=this.parent}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ry(t,e=Vt){e&&e.active&&e.effects.push(t)}const Kc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jd=t=>(t.w&dn)>0,Kd=t=>(t.n&dn)>0,iy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dn},oy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];jd(r)&&!Kd(r)?r.delete(t):e[n++]=r,r.w&=~dn,r.n&=~dn}e.length=n}},Wa=new WeakMap;let br=0,dn=1;const Qa=30;let Ct;const Pn=Symbol(""),Ya=Symbol("");class Hc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ry(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=an;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,an=!0,dn=1<<++br,br<=Qa?iy(this):Hl(this),this.fn()}finally{br<=Qa&&oy(this),dn=1<<--br,Ct=this.parent,an=n,this.parent=void 0}}stop(){this.active&&(Hl(this),this.onStop&&this.onStop(),this.active=!1)}}function Hl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let an=!0;const Hd=[];function Js(){Hd.push(an),an=!1}function Zs(){const t=Hd.pop();an=t===void 0?!0:t}function dt(t,e,n){if(an&&Ct){let s=Wa.get(t);s||Wa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Kc()),zd(r)}}function zd(t,e){let n=!1;br<=Qa?Kd(t)||(t.n|=dn,n=!jd(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Kt(t,e,n,s,r,i){const o=Wa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?jc(n)&&a.push(o.get("length")):(a.push(o.get(Pn)),Cs(t)&&a.push(o.get(Ya)));break;case"delete":j(t)||(a.push(o.get(Pn)),Cs(t)&&a.push(o.get(Ya)));break;case"set":Cs(t)&&a.push(o.get(Pn));break}if(a.length===1)a[0]&&Xa(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Xa(Kc(c))}}function Xa(t,e){for(const n of j(t)?t:[...t])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ay=Fc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(qc)),cy=zc(),uy=zc(!1,!0),ly=zc(!0),zl=hy();function hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Js();const s=Z(this)[e].apply(this,n);return Zs(),s}}),t}function zc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Cy:Jd:e?Xd:Yd).get(s))return s;const o=j(s);if(!t&&o&&Q(zl,r))return Reflect.get(zl,r,i);const a=Reflect.get(s,r,i);return(qc(r)?Gd.has(r):ay(r))||(t||dt(s,"get",r),e)?a:He(a)?!o||!jc(r)?a.value:a:Be(a)?t?Zd(a):Qc(a):a}}const dy=Wd(),fy=Wd(!0);function Wd(t=!1){return function(n,s,r,i){let o=n[s];if(Rr(o)&&He(o)&&!He(r))return!1;if(!t&&!Rr(r)&&(ef(r)||(r=Z(r),o=Z(o)),!j(n)&&He(o)&&!He(r)))return o.value=r,!0;const a=j(n)&&jc(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Z(i)&&(a?to(r,o)&&Kt(n,"set",s,r):Kt(n,"add",s,r)),c}}function py(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kt(t,"delete",e,void 0),s}function gy(t,e){const n=Reflect.has(t,e);return(!qc(e)||!Gd.has(e))&&dt(t,"has",e),n}function my(t){return dt(t,"iterate",j(t)?"length":Pn),Reflect.ownKeys(t)}const Qd={get:cy,set:dy,deleteProperty:py,has:gy,ownKeys:my},yy={get:ly,set(t,e){return!0},deleteProperty(t,e){return!0}},wy=tt({},Qd,{get:uy,set:fy}),Gc=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function Oi(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);e!==i&&!n&&dt(r,"get",e),!n&&dt(r,"get",i);const{has:o}=Lo(r),a=s?Gc:n?Jc:Xc;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ki(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return t!==r&&!e&&dt(s,"has",t),!e&&dt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Ri(t,e=!1){return t=t.__v_raw,!e&&dt(Z(t),"iterate",Pn),Reflect.get(t,"size",t)}function Gl(t){t=Z(t);const e=Z(this);return Lo(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function Wl(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Lo(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?to(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function Ql(t){const e=Z(this),{has:n,get:s}=Lo(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kt(e,"delete",t,void 0),i}function Yl(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function Pi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),c=e?Gc:t?Jc:Xc;return!t&&dt(a,"iterate",Pn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Mi(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=Cs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Gc:e?Jc:Xc;return!e&&dt(i,"iterate",c?Ya:Pn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function vy(){const t={get(i){return Oi(this,i)},get size(){return Ri(this)},has:ki,add:Gl,set:Wl,delete:Ql,clear:Yl,forEach:Pi(!1,!1)},e={get(i){return Oi(this,i,!1,!0)},get size(){return Ri(this)},has:ki,add:Gl,set:Wl,delete:Ql,clear:Yl,forEach:Pi(!1,!0)},n={get(i){return Oi(this,i,!0)},get size(){return Ri(this,!0)},has(i){return ki.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Pi(!0,!1)},s={get(i){return Oi(this,i,!0,!0)},get size(){return Ri(this,!0)},has(i){return ki.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:Pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mi(i,!1,!1),n[i]=Mi(i,!0,!1),e[i]=Mi(i,!1,!0),s[i]=Mi(i,!0,!0)}),[t,n,e,s]}const[by,Iy,Ey,Ty]=vy();function Wc(t,e){const n=e?t?Ty:Ey:t?Iy:by;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const _y={get:Wc(!1,!1)},Sy={get:Wc(!1,!0)},xy={get:Wc(!0,!1)},Yd=new WeakMap,Xd=new WeakMap,Jd=new WeakMap,Cy=new WeakMap;function Ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:Ay(Jm(t))}function Qc(t){return Rr(t)?t:Yc(t,!1,Qd,_y,Yd)}function Dy(t){return Yc(t,!1,wy,Sy,Xd)}function Zd(t){return Yc(t,!0,yy,xy,Jd)}function Yc(t,e,n,s,r){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ny(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function As(t){return Rr(t)?As(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function ef(t){return!!(t&&t.__v_isShallow)}function tf(t){return As(t)||Rr(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function nf(t){return no(t,"__v_skip",!0),t}const Xc=t=>Be(t)?Qc(t):t,Jc=t=>Be(t)?Zd(t):t;function Oy(t){an&&Ct&&(t=Z(t),zd(t.dep||(t.dep=Kc())))}function ky(t,e){t=Z(t),t.dep&&Xa(t.dep)}function He(t){return!!(t&&t.__v_isRef===!0)}function Ry(t){return He(t)?t.value:t}const Py={get:(t,e,n)=>Ry(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function sf(t){return As(t)?t:new Proxy(t,Py)}class My{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hc(e,()=>{this._dirty||(this._dirty=!0,ky(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return Oy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ly(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=It):(s=t.get,r=t.set),new My(s,r,i||!r,n)}Promise.resolve();function cn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Fo(i,e,n)}return r}function Et(t,e,n,s){if(K(t)){const i=cn(t,e,n,s);return i&&Ud(i)&&i.catch(o=>{Fo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function Fo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){cn(c,null,10,[t,o,a]);return}}Fy(t,n,r,s)}function Fy(t,e,n,s=!0){console.error(t)}let so=!1,Ja=!1;const ut=[];let Bt=0;const _r=[];let Ir=null,vs=0;const Sr=[];let tn=null,bs=0;const rf=Promise.resolve();let Zc=null,Za=null;function Vy(t){const e=Zc||rf;return t?e.then(this?t.bind(this):t):e}function Uy(t){let e=Bt+1,n=ut.length;for(;e<n;){const s=e+n>>>1;Pr(ut[s])<t?e=s+1:n=s}return e}function of(t){(!ut.length||!ut.includes(t,so&&t.allowRecurse?Bt+1:Bt))&&t!==Za&&(t.id==null?ut.push(t):ut.splice(Uy(t.id),0,t),af())}function af(){!so&&!Ja&&(Ja=!0,Zc=rf.then(lf))}function By(t){const e=ut.indexOf(t);e>Bt&&ut.splice(e,1)}function cf(t,e,n,s){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),af()}function $y(t){cf(t,Ir,_r,vs)}function qy(t){cf(t,tn,Sr,bs)}function eu(t,e=null){if(_r.length){for(Za=e,Ir=[...new Set(_r)],_r.length=0,vs=0;vs<Ir.length;vs++)Ir[vs]();Ir=null,vs=0,Za=null,eu(t,e)}}function uf(t){if(Sr.length){const e=[...new Set(Sr)];if(Sr.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,s)=>Pr(n)-Pr(s)),bs=0;bs<tn.length;bs++)tn[bs]();tn=null,bs=0}}const Pr=t=>t.id==null?1/0:t.id;function lf(t){Ja=!1,so=!0,eu(t),ut.sort((n,s)=>Pr(n)-Pr(s));const e=It;try{for(Bt=0;Bt<ut.length;Bt++){const n=ut[Bt];n&&n.active!==!1&&cn(n,null,14)}}finally{Bt=0,ut.length=0,uf(),so=!1,Zc=null,(ut.length||_r.length||Sr.length)&&lf(t)}}function jy(t,e,...n){const s=t.vnode.props||te;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||te;f?r=n.map(g=>g.trim()):h&&(r=n.map(ty))}let a,c=s[a=_a(e)]||s[a=_a(ks(e))];!c&&i&&(c=s[a=_a(Xs(e))]),c&&Et(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(u,t,6,r)}}function hf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const c=u=>{const l=hf(u,e,!0);l&&(a=!0,tt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):tt(o,i),s.set(t,o),o)}function tu(t,e){return!t||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Xs(e))||Q(t,e))}let $t=null,df=null;function ro(t){const e=$t;return $t=t,df=t&&t.type.__scopeId||null,e}function Ky(t,e=$t,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ih(-1);const i=ro(e),o=t(...r);return ro(i),s._d&&ih(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function xa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:v,inheritAttrs:N}=t;let D,U;const pe=ro(t);try{if(n.shapeFlag&4){const ge=r||s;D=xt(l.call(ge,ge,h,i,g,f,v)),U=c}else{const ge=e;D=xt(ge.length>1?ge(i,{attrs:c,slots:a,emit:u}):ge(i,null)),U=e.props?c:Hy(c)}}catch(ge){xr.length=0,Fo(ge,t,1),D=Dt(Vn)}let Ee=D;if(U&&N!==!1){const ge=Object.keys(U),{shapeFlag:Mt}=Ee;ge.length&&Mt&7&&(o&&ge.some(Bc)&&(U=zy(U,o)),Ee=Mr(Ee,U))}return n.dirs&&(Ee.dirs=Ee.dirs?Ee.dirs.concat(n.dirs):n.dirs),n.transition&&(Ee.transition=n.transition),D=Ee,ro(pe),D}const Hy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ro(n))&&((e||(e={}))[n]=t[n]);return e},zy=(t,e)=>{const n={};for(const s in t)(!Bc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!tu(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xl(s,o,u):!0:!!o;return!1}function Xl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!tu(n,i))return!0}return!1}function Wy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qy=t=>t.__isSuspense;function Yy(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):qy(t)}function Xy(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function Ca(t,e,n=!1){const s=je||$t;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}const Jl={};function Aa(t,e,n){return ff(t,e,n)}function ff(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=te){const a=je;let c,u=!1,l=!1;if(He(t)?(c=()=>t.value,u=ef(t)):As(t)?(c=()=>t,s=!0):j(t)?(l=!0,u=t.some(As),c=()=>t.map(U=>{if(He(U))return U.value;if(As(U))return Ts(U);if(K(U))return cn(U,a,2)})):K(t)?e?c=()=>cn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[f])}:c=It,e&&s){const U=c;c=()=>Ts(U())}let h,f=U=>{h=D.onStop=()=>{cn(U,a,4)}};if(Lr)return f=It,e?n&&Et(e,a,3,[c(),l?[]:void 0,f]):c(),It;let g=l?[]:Jl;const v=()=>{if(!!D.active)if(e){const U=D.run();(s||u||(l?U.some((pe,Ee)=>to(pe,g[Ee])):to(U,g)))&&(h&&h(),Et(e,a,3,[U,g===Jl?void 0:g,f]),g=U)}else D.run()};v.allowRecurse=!!e;let N;r==="sync"?N=v:r==="post"?N=()=>st(v,a&&a.suspense):N=()=>{!a||a.isMounted?$y(v):v()};const D=new Hc(c,N);return e?n?v():g=D.run():r==="post"?st(D.run.bind(D),a&&a.suspense):D.run(),()=>{D.stop(),a&&a.scope&&$c(a.scope.effects,D)}}function Jy(t,e,n){const s=this.proxy,r=Ue(t)?t.includes(".")?pf(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=je;Rs(this);const a=ff(r,i.bind(s),n);return o?Rs(o):Ln(),a}function pf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ts(t,e){if(!Be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Ts(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Ts(t[n],e);else if(Vd(t)||Cs(t))t.forEach(n=>{Ts(n,e)});else if($d(t))for(const n in t)Ts(t[n],e);return t}function Q_(t){return K(t)?{setup:t,name:t.name}:t}const ec=t=>!!t.type.__asyncLoader,gf=t=>t.type.__isKeepAlive;function Zy(t,e){mf(t,"a",e)}function ew(t,e){mf(t,"da",e)}function mf(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Vo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)gf(r.parent.vnode)&&tw(s,e,n,r),r=r.parent}}function tw(t,e,n,s){const r=Vo(e,t,s,!0);yf(()=>{$c(s[e],r)},n)}function Vo(t,e,n=je,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Js(),Rs(n);const a=Et(e,n,t,o);return Ln(),Zs(),a});return s?r.unshift(i):r.push(i),i}}const Wt=t=>(e,n=je)=>(!Lr||t==="sp")&&Vo(t,e,n),nw=Wt("bm"),sw=Wt("m"),rw=Wt("bu"),iw=Wt("u"),ow=Wt("bum"),yf=Wt("um"),aw=Wt("sp"),cw=Wt("rtg"),uw=Wt("rtc");function lw(t,e=je){Vo("ec",t,e)}let tc=!0;function hw(t){const e=vf(t),n=t.proxy,s=t.ctx;tc=!1,e.beforeCreate&&Zl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:v,activated:N,deactivated:D,beforeDestroy:U,beforeUnmount:pe,destroyed:Ee,unmounted:ge,render:Mt,renderTracked:hr,renderTriggered:hs,errorCaptured:Ai,serverPrefetch:En,expose:dr,inheritAttrs:ds,components:fr,directives:Ni,filters:Vl}=e;if(u&&dw(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ne=o[le];K(ne)&&(s[le]=ne.bind(n))}if(r){const le=r.call(n,n);Be(le)&&(t.data=Qc(le))}if(tc=!0,i)for(const le in i){const ne=i[le],Lt=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):It,Ia=!K(ne)&&K(ne.set)?ne.set.bind(n):It,pr=Hw({get:Lt,set:Ia});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>pr.value,set:fs=>pr.value=fs})}if(a)for(const le in a)wf(a[le],s,n,le);if(c){const le=K(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ne=>{Xy(ne,le[ne])})}l&&Zl(l,t,"c");function nt(le,ne){j(ne)?ne.forEach(Lt=>le(Lt.bind(n))):ne&&le(ne.bind(n))}if(nt(nw,h),nt(sw,f),nt(rw,g),nt(iw,v),nt(Zy,N),nt(ew,D),nt(lw,Ai),nt(uw,hr),nt(cw,hs),nt(ow,pe),nt(yf,ge),nt(aw,En),j(dr))if(dr.length){const le=t.exposed||(t.exposed={});dr.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>n[ne],set:Lt=>n[ne]=Lt})})}else t.exposed||(t.exposed={});Mt&&t.render===It&&(t.render=Mt),ds!=null&&(t.inheritAttrs=ds),fr&&(t.components=fr),Ni&&(t.directives=Ni)}function dw(t,e,n=It,s=!1){j(t)&&(t=nc(t));for(const r in t){const i=t[r];let o;Be(i)?"default"in i?o=Ca(i.from||r,i.default,!0):o=Ca(i.from||r):o=Ca(i),He(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Zl(t,e,n){Et(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wf(t,e,n,s){const r=s.includes(".")?pf(n,s):()=>n[s];if(Ue(t)){const i=e[t];K(i)&&Aa(r,i)}else if(K(t))Aa(r,t.bind(n));else if(Be(t))if(j(t))t.forEach(i=>wf(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Aa(r,i,t)}}function vf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>io(c,u,o,!0)),io(c,e,o)),i.set(e,c),c}function io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&io(t,i,n,!0),r&&r.forEach(o=>io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=fw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fw={data:eh,props:Sn,emits:Sn,methods:Sn,computed:Sn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Sn,directives:Sn,watch:gw,provide:eh,inject:pw};function eh(t,e){return e?t?function(){return tt(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function pw(t,e){return Sn(nc(t),nc(e))}function nc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?tt(tt(Object.create(null),t),e):e}function gw(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function mw(t,e,n,s=!1){const r={},i={};no(i,Uo,1),t.propsDefaults=Object.create(null),bf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Dy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function yw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];const g=e[f];if(c)if(Q(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const v=ks(f);r[v]=sc(c,a,v,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{bf(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!Q(e,h)&&((l=Xs(h))===h||!Q(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=sc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h)&&!0)&&(delete i[h],u=!0)}u&&Kt(t,"set","$attrs")}function bf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Gi(c))continue;const u=e[c];let l;r&&Q(r,l=ks(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:tu(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Z(n),u=a||te;for(let l=0;l<i.length;l++){const h=i[l];n[h]=sc(r,c,h,u[h],t,!Q(u,h))}}return o}function sc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Rs(r),s=u[n]=c.call(null,e),Ln())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xs(n))&&(s=!0))}return s}function If(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const l=h=>{c=!0;const[f,g]=If(h,e,!0);tt(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,xs),xs;if(j(i))for(let l=0;l<i.length;l++){const h=ks(i[l]);th(h)&&(o[h]=te)}else if(i)for(const l in i){const h=ks(l);if(th(h)){const f=i[l],g=o[h]=j(f)||K(f)?{type:f}:f;if(g){const v=rh(Boolean,g.type),N=rh(String,g.type);g[0]=v>-1,g[1]=N<0||v<N,(v>-1||Q(g,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function th(t){return t[0]!=="$"}function nh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function sh(t,e){return nh(t)===nh(e)}function rh(t,e){return j(e)?e.findIndex(n=>sh(n,t)):K(e)&&sh(e,t)?0:-1}const Ef=t=>t[0]==="_"||t==="$stable",nu=t=>j(t)?t.map(xt):[xt(t)],ww=(t,e,n)=>{const s=Ky((...r)=>nu(e(...r)),n);return s._c=!1,s},Tf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ef(r))continue;const i=t[r];if(K(i))e[r]=ww(r,i,s);else if(i!=null){const o=nu(i);e[r]=()=>o}}},_f=(t,e)=>{const n=nu(e);t.slots.default=()=>n},vw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),no(e,"_",n)):Tf(e,t.slots={})}else t.slots={},e&&_f(t,e);no(t.slots,Uo,1)},bw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Tf(e,r)),o=e}else e&&(_f(t,e),o={default:1});if(i)for(const a in r)!Ef(a)&&!(a in o)&&delete r[a]};function Tn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Js(),Et(c,n,8,[t.el,a,t,e]),Zs())}}function Sf(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iw=0;function Ew(t,e){return function(s,r=null){r!=null&&!Be(r)&&(r=null);const i=Sf(),o=new Set;let a=!1;const c=i.app={_uid:Iw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:zw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...l)):K(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Dt(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,iu(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function rc(t,e,n,s,r=!1){if(j(t)){t.forEach((f,g)=>rc(f,e&&(j(e)?e[g]:e),n,s,r));return}if(ec(s)&&!r)return;const i=s.shapeFlag&4?iu(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===te?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ue(u)?(l[u]=null,Q(h,u)&&(h[u]=null)):He(u)&&(u.value=null)),K(c))cn(c,a,12,[o,l]);else{const f=Ue(c),g=He(c);if(f||g){const v=()=>{if(t.f){const N=f?l[c]:c.value;r?j(N)&&$c(N,i):j(N)?N.includes(i)||N.push(i):f?l[c]=[i]:(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,Q(h,c)&&(h[c]=o)):He(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,st(v,n)):v()}}}const st=Yy;function Tw(t){return _w(t)}function _w(t,e){const n=ny();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=It,cloneNode:v,insertStaticContent:N}=t,D=(d,p,w,I=null,b=null,x=null,O=!1,S=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!mr(d,p)&&(I=Di(d),Xt(d,b,x,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:L,shapeFlag:P}=p;switch(T){case su:U(d,p,w,I);break;case Vn:pe(d,p,w,I);break;case Wi:d==null&&Ee(p,w,I,O);break;case Ut:Ni(d,p,w,I,b,x,O,S,C);break;default:P&1?hr(d,p,w,I,b,x,O,S,C):P&6?Vl(d,p,w,I,b,x,O,S,C):(P&64||P&128)&&T.process(d,p,w,I,b,x,O,S,C,ps)}L!=null&&b&&rc(L,d&&d.ref,x,p||d,!p)},U=(d,p,w,I)=>{if(d==null)s(p.el=a(p.children),w,I);else{const b=p.el=d.el;p.children!==d.children&&u(b,p.children)}},pe=(d,p,w,I)=>{d==null?s(p.el=c(p.children||""),w,I):p.el=d.el},Ee=(d,p,w,I)=>{[d.el,d.anchor]=N(d.children,p,w,I,d.el,d.anchor)},ge=({el:d,anchor:p},w,I)=>{let b;for(;d&&d!==p;)b=f(d),s(d,w,I),d=b;s(p,w,I)},Mt=({el:d,anchor:p})=>{let w;for(;d&&d!==p;)w=f(d),r(d),d=w;r(p)},hr=(d,p,w,I,b,x,O,S,C)=>{O=O||p.type==="svg",d==null?hs(p,w,I,b,x,O,S,C):dr(d,p,b,x,O,S,C)},hs=(d,p,w,I,b,x,O,S)=>{let C,T;const{type:L,props:P,shapeFlag:F,transition:q,patchFlag:G,dirs:oe}=d;if(d.el&&v!==void 0&&G===-1)C=d.el=v(d.el);else{if(C=d.el=o(d.type,x,P&&P.is,P),F&8?l(C,d.children):F&16&&En(d.children,C,null,I,b,x&&L!=="foreignObject",O,S),oe&&Tn(d,null,I,"created"),P){for(const se in P)se!=="value"&&!Gi(se)&&i(C,se,null,P[se],x,d.children,I,b,Ft);"value"in P&&i(C,"value",null,P.value),(T=P.onVnodeBeforeMount)&&St(T,I,d)}Ai(C,d,d.scopeId,O,I)}oe&&Tn(d,null,I,"beforeMount");const ee=(!b||b&&!b.pendingBranch)&&q&&!q.persisted;ee&&q.beforeEnter(C),s(C,p,w),((T=P&&P.onVnodeMounted)||ee||oe)&&st(()=>{T&&St(T,I,d),ee&&q.enter(C),oe&&Tn(d,null,I,"mounted")},b)},Ai=(d,p,w,I,b)=>{if(w&&g(d,w),I)for(let x=0;x<I.length;x++)g(d,I[x]);if(b){let x=b.subTree;if(p===x){const O=b.vnode;Ai(d,O,O.scopeId,O.slotScopeIds,b.parent)}}},En=(d,p,w,I,b,x,O,S,C=0)=>{for(let T=C;T<d.length;T++){const L=d[T]=S?nn(d[T]):xt(d[T]);D(null,L,p,w,I,b,x,O,S)}},dr=(d,p,w,I,b,x,O)=>{const S=p.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:L}=p;C|=d.patchFlag&16;const P=d.props||te,F=p.props||te;let q;w&&_n(w,!1),(q=F.onVnodeBeforeUpdate)&&St(q,w,p,d),L&&Tn(p,d,w,"beforeUpdate"),w&&_n(w,!0);const G=b&&p.type!=="foreignObject";if(T?ds(d.dynamicChildren,T,S,w,I,G,x):O||Lt(d,p,S,null,w,I,G,x,!1),C>0){if(C&16)fr(S,p,P,F,w,I,b);else if(C&2&&P.class!==F.class&&i(S,"class",null,F.class,b),C&4&&i(S,"style",P.style,F.style,b),C&8){const oe=p.dynamicProps;for(let ee=0;ee<oe.length;ee++){const se=oe[ee],vt=P[se],gs=F[se];(gs!==vt||se==="value")&&i(S,se,vt,gs,b,d.children,w,I,Ft)}}C&1&&d.children!==p.children&&l(S,p.children)}else!O&&T==null&&fr(S,p,P,F,w,I,b);((q=F.onVnodeUpdated)||L)&&st(()=>{q&&St(q,w,p,d),L&&Tn(p,d,w,"updated")},I)},ds=(d,p,w,I,b,x,O)=>{for(let S=0;S<p.length;S++){const C=d[S],T=p[S],L=C.el&&(C.type===Ut||!mr(C,T)||C.shapeFlag&70)?h(C.el):w;D(C,T,L,null,I,b,x,O,!0)}},fr=(d,p,w,I,b,x,O)=>{if(w!==I){for(const S in I){if(Gi(S))continue;const C=I[S],T=w[S];C!==T&&S!=="value"&&i(d,S,T,C,O,p.children,b,x,Ft)}if(w!==te)for(const S in w)!Gi(S)&&!(S in I)&&i(d,S,w[S],null,O,p.children,b,x,Ft);"value"in I&&i(d,"value",w.value,I.value)}},Ni=(d,p,w,I,b,x,O,S,C)=>{const T=p.el=d?d.el:a(""),L=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:q}=p;q&&(S=S?S.concat(q):q),d==null?(s(T,w,I),s(L,w,I),En(p.children,w,L,b,x,O,S,C)):P>0&&P&64&&F&&d.dynamicChildren?(ds(d.dynamicChildren,F,w,b,x,O,S),(p.key!=null||b&&p===b.subTree)&&xf(d,p,!0)):Lt(d,p,w,L,b,x,O,S,C)},Vl=(d,p,w,I,b,x,O,S,C)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?b.ctx.activate(p,w,I,O,C):ba(p,w,I,b,x,O,C):nt(d,p,C)},ba=(d,p,w,I,b,x,O)=>{const S=d.component=Uw(d,I,b);if(gf(d)&&(S.ctx.renderer=ps),Bw(S),S.asyncDep){if(b&&b.registerDep(S,le),!d.el){const C=S.subTree=Dt(Vn);pe(null,C,p,w)}return}le(S,d,p,w,b,x,O)},nt=(d,p,w)=>{const I=p.component=d.component;if(Gy(d,p,w))if(I.asyncDep&&!I.asyncResolved){ne(I,p,w);return}else I.next=p,By(I.update),I.update();else p.component=d.component,p.el=d.el,I.vnode=p},le=(d,p,w,I,b,x,O)=>{const S=()=>{if(d.isMounted){let{next:L,bu:P,u:F,parent:q,vnode:G}=d,oe=L,ee;_n(d,!1),L?(L.el=G.el,ne(d,L,O)):L=G,P&&Sa(P),(ee=L.props&&L.props.onVnodeBeforeUpdate)&&St(ee,q,L,G),_n(d,!0);const se=xa(d),vt=d.subTree;d.subTree=se,D(vt,se,h(vt.el),Di(vt),d,b,x),L.el=se.el,oe===null&&Wy(d,se.el),F&&st(F,b),(ee=L.props&&L.props.onVnodeUpdated)&&st(()=>St(ee,q,L,G),b)}else{let L;const{el:P,props:F}=p,{bm:q,m:G,parent:oe}=d,ee=ec(p);if(_n(d,!1),q&&Sa(q),!ee&&(L=F&&F.onVnodeBeforeMount)&&St(L,oe,p),_n(d,!0),P&&Ta){const se=()=>{d.subTree=xa(d),Ta(P,d.subTree,d,b,null)};ee?p.type.__asyncLoader().then(()=>!d.isUnmounted&&se()):se()}else{const se=d.subTree=xa(d);D(null,se,w,I,d,b,x),p.el=se.el}if(G&&st(G,b),!ee&&(L=F&&F.onVnodeMounted)){const se=p;st(()=>St(L,oe,se),b)}p.shapeFlag&256&&d.a&&st(d.a,b),d.isMounted=!0,p=w=I=null}},C=d.effect=new Hc(S,()=>of(d.update),d.scope),T=d.update=C.run.bind(C);T.id=d.uid,_n(d,!0),T()},ne=(d,p,w)=>{p.component=d;const I=d.vnode.props;d.vnode=p,d.next=null,yw(d,p.props,I,w),bw(d,p.children,w),Js(),eu(void 0,d.update),Zs()},Lt=(d,p,w,I,b,x,O,S,C=!1)=>{const T=d&&d.children,L=d?d.shapeFlag:0,P=p.children,{patchFlag:F,shapeFlag:q}=p;if(F>0){if(F&128){pr(T,P,w,I,b,x,O,S,C);return}else if(F&256){Ia(T,P,w,I,b,x,O,S,C);return}}q&8?(L&16&&Ft(T,b,x),P!==T&&l(w,P)):L&16?q&16?pr(T,P,w,I,b,x,O,S,C):Ft(T,b,x,!0):(L&8&&l(w,""),q&16&&En(P,w,I,b,x,O,S,C))},Ia=(d,p,w,I,b,x,O,S,C)=>{d=d||xs,p=p||xs;const T=d.length,L=p.length,P=Math.min(T,L);let F;for(F=0;F<P;F++){const q=p[F]=C?nn(p[F]):xt(p[F]);D(d[F],q,w,null,b,x,O,S,C)}T>L?Ft(d,b,x,!0,!1,P):En(p,w,I,b,x,O,S,C,P)},pr=(d,p,w,I,b,x,O,S,C)=>{let T=0;const L=p.length;let P=d.length-1,F=L-1;for(;T<=P&&T<=F;){const q=d[T],G=p[T]=C?nn(p[T]):xt(p[T]);if(mr(q,G))D(q,G,w,null,b,x,O,S,C);else break;T++}for(;T<=P&&T<=F;){const q=d[P],G=p[F]=C?nn(p[F]):xt(p[F]);if(mr(q,G))D(q,G,w,null,b,x,O,S,C);else break;P--,F--}if(T>P){if(T<=F){const q=F+1,G=q<L?p[q].el:I;for(;T<=F;)D(null,p[T]=C?nn(p[T]):xt(p[T]),w,G,b,x,O,S,C),T++}}else if(T>F)for(;T<=P;)Xt(d[T],b,x,!0),T++;else{const q=T,G=T,oe=new Map;for(T=G;T<=F;T++){const ot=p[T]=C?nn(p[T]):xt(p[T]);ot.key!=null&&oe.set(ot.key,T)}let ee,se=0;const vt=F-G+1;let gs=!1,$l=0;const gr=new Array(vt);for(T=0;T<vt;T++)gr[T]=0;for(T=q;T<=P;T++){const ot=d[T];if(se>=vt){Xt(ot,b,x,!0);continue}let _t;if(ot.key!=null)_t=oe.get(ot.key);else for(ee=G;ee<=F;ee++)if(gr[ee-G]===0&&mr(ot,p[ee])){_t=ee;break}_t===void 0?Xt(ot,b,x,!0):(gr[_t-G]=T+1,_t>=$l?$l=_t:gs=!0,D(ot,p[_t],w,null,b,x,O,S,C),se++)}const ql=gs?Sw(gr):xs;for(ee=ql.length-1,T=vt-1;T>=0;T--){const ot=G+T,_t=p[ot],jl=ot+1<L?p[ot+1].el:I;gr[T]===0?D(null,_t,w,jl,b,x,O,S,C):gs&&(ee<0||T!==ql[ee]?fs(_t,w,jl,2):ee--)}}},fs=(d,p,w,I,b=null)=>{const{el:x,type:O,transition:S,children:C,shapeFlag:T}=d;if(T&6){fs(d.component.subTree,p,w,I);return}if(T&128){d.suspense.move(p,w,I);return}if(T&64){O.move(d,p,w,ps);return}if(O===Ut){s(x,p,w);for(let P=0;P<C.length;P++)fs(C[P],p,w,I);s(d.anchor,p,w);return}if(O===Wi){ge(d,p,w);return}if(I!==2&&T&1&&S)if(I===0)S.beforeEnter(x),s(x,p,w),st(()=>S.enter(x),b);else{const{leave:P,delayLeave:F,afterLeave:q}=S,G=()=>s(x,p,w),oe=()=>{P(x,()=>{G(),q&&q()})};F?F(x,G,oe):oe()}else s(x,p,w)},Xt=(d,p,w,I=!1,b=!1)=>{const{type:x,props:O,ref:S,children:C,dynamicChildren:T,shapeFlag:L,patchFlag:P,dirs:F}=d;if(S!=null&&rc(S,null,w,d,!0),L&256){p.ctx.deactivate(d);return}const q=L&1&&F,G=!ec(d);let oe;if(G&&(oe=O&&O.onVnodeBeforeUnmount)&&St(oe,p,d),L&6)jm(d.component,w,I);else{if(L&128){d.suspense.unmount(w,I);return}q&&Tn(d,null,p,"beforeUnmount"),L&64?d.type.remove(d,p,w,b,ps,I):T&&(x!==Ut||P>0&&P&64)?Ft(T,p,w,!1,!0):(x===Ut&&P&384||!b&&L&16)&&Ft(C,p,w),I&&Ul(d)}(G&&(oe=O&&O.onVnodeUnmounted)||q)&&st(()=>{oe&&St(oe,p,d),q&&Tn(d,null,p,"unmounted")},w)},Ul=d=>{const{type:p,el:w,anchor:I,transition:b}=d;if(p===Ut){qm(w,I);return}if(p===Wi){Mt(d);return}const x=()=>{r(w),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:O,delayLeave:S}=b,C=()=>O(w,x);S?S(d.el,x,C):C()}else x()},qm=(d,p)=>{let w;for(;d!==p;)w=f(d),r(d),d=w;r(p)},jm=(d,p,w)=>{const{bum:I,scope:b,update:x,subTree:O,um:S}=d;I&&Sa(I),b.stop(),x&&(x.active=!1,Xt(O,d,p,w)),S&&st(S,p),st(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ft=(d,p,w,I=!1,b=!1,x=0)=>{for(let O=x;O<d.length;O++)Xt(d[O],p,w,I,b)},Di=d=>d.shapeFlag&6?Di(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Bl=(d,p,w)=>{d==null?p._vnode&&Xt(p._vnode,null,null,!0):D(p._vnode||null,d,p,null,null,null,w),uf(),p._vnode=d},ps={p:D,um:Xt,m:fs,r:Ul,mt:ba,mc:En,pc:Lt,pbc:ds,n:Di,o:t};let Ea,Ta;return e&&([Ea,Ta]=e(ps)),{render:Bl,hydrate:Ea,createApp:Ew(Bl,Ea)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xf(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=nn(r[i]),a.el=o.el),n||xf(o,a))}}function Sw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const xw=t=>t.__isTeleport,Cw=Symbol(),Ut=Symbol(void 0),su=Symbol(void 0),Vn=Symbol(void 0),Wi=Symbol(void 0),xr=[];let Mn=null;function Aw(t=!1){xr.push(Mn=t?null:[])}function Nw(){xr.pop(),Mn=xr[xr.length-1]||null}let oo=1;function ih(t){oo+=t}function Cf(t){return t.dynamicChildren=oo>0?Mn||xs:null,Nw(),oo>0&&Mn&&Mn.push(t),t}function Y_(t,e,n,s,r,i){return Cf(Nf(t,e,n,s,r,i,!0))}function Dw(t,e,n,s,r){return Cf(Dt(t,e,n,s,r,!0))}function Ow(t){return t?t.__v_isVNode===!0:!1}function mr(t,e){return t.type===e.type&&t.key===e.key}const Uo="__vInternal",Af=({key:t})=>t!=null?t:null,Qi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||He(t)||K(t)?{i:$t,r:t,k:e,f:!!n}:t:null;function Nf(t,e=null,n=null,s=0,r=null,i=t===Ut?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Af(e),ref:e&&Qi(e),scopeId:df,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ru(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),oo>0&&!o&&Mn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mn.push(c),c}const Dt=kw;function kw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Cw)&&(t=Vn),Ow(t)){const a=Mr(t,e,!0);return n&&ru(a,n),a}if(Kw(t)&&(t=t.__vccOpts),e){e=Rw(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=Uc(a)),Be(c)&&(tf(c)&&!j(c)&&(c=tt({},c)),e.style=Vc(c))}const o=Ue(t)?1:Qy(t)?128:xw(t)?64:Be(t)?4:K(t)?2:0;return Nf(t,e,n,s,r,o,i,!0)}function Rw(t){return t?tf(t)||Uo in t?tt({},t):t:null}function Mr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Mw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Af(a),ref:e&&e.ref?n&&r?j(r)?r.concat(Qi(e)):[r,Qi(e)]:Qi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),el:t.el,anchor:t.anchor}}function Pw(t=" ",e=0){return Dt(su,null,t,e)}function X_(t,e){const n=Dt(Wi,null,t);return n.staticCount=e,n}function J_(t="",e=!1){return e?(Aw(),Dw(Vn,null,t)):Dt(Vn,null,t)}function xt(t){return t==null||typeof t=="boolean"?Dt(Vn):j(t)?Dt(Ut,null,t.slice()):typeof t=="object"?nn(t):Dt(su,null,String(t))}function nn(t){return t.el===null||t.memo?t:Mr(t)}function ru(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ru(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Uo in e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),s&64?(n=16,e=[Pw(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Uc([e.class,s.class]));else if(r==="style")e.style=Vc([e.style,s.style]);else if(Ro(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){Et(t,e,7,[n,s])}const ic=t=>t?Df(t)?iu(t)||t.proxy:ic(t.parent):null,ao=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ic(t.parent),$root:t=>ic(t.root),$emit:t=>t.emit,$options:t=>vf(t),$forceUpdate:t=>()=>of(t.update),$nextTick:t=>Vy.bind(t.proxy),$watch:t=>Jy.bind(t)}),Lw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==te&&Q(s,e))return o[e]=1,s[e];if(r!==te&&Q(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Q(u,e))return o[e]=3,i[e];if(n!==te&&Q(n,e))return o[e]=4,n[e];tc&&(o[e]=0)}}const l=ao[e];let h,f;if(l)return e==="$attrs"&&dt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==te&&Q(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==te&&Q(r,e)?(r[e]=n,!0):s!==te&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==te&&Q(t,o)||e!==te&&Q(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(ao,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Fw=Sf();let Vw=0;function Uw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Fw,i={uid:Vw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new sy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:If(s,r),emitsOptions:hf(s,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jy.bind(null,i),t.ce&&t.ce(i),i}let je=null;const Rs=t=>{je=t,t.scope.on()},Ln=()=>{je&&je.scope.off(),je=null};function Df(t){return t.vnode.shapeFlag&4}let Lr=!1;function Bw(t,e=!1){Lr=e;const{props:n,children:s}=t.vnode,r=Df(t);mw(t,n,r,e),vw(t,s);const i=r?$w(t,e):void 0;return Lr=!1,i}function $w(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nf(new Proxy(t.ctx,Lw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?jw(t):null;Rs(t),Js();const i=cn(s,t,0,[t.props,r]);if(Zs(),Ln(),Ud(i)){if(i.then(Ln,Ln),e)return i.then(o=>{oh(t,o,e)}).catch(o=>{Fo(o,t,0)});t.asyncDep=i}else oh(t,i,e)}else Of(t,e)}function oh(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=sf(e)),Of(t,n)}let ah;function Of(t,e,n){const s=t.type;if(!t.render){if(!e&&ah&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=tt(tt({isCustomElement:i,delimiters:a},o),c);s.render=ah(r,u)}}t.render=s.render||It}Rs(t),Js(),hw(t),Zs(),Ln()}function qw(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function jw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qw(t))},slots:t.slots,emit:t.emit,expose:e}}function iu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sf(nf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)}}))}function Kw(t){return K(t)&&"__vccOpts"in t}const Hw=(t,e)=>Ly(t,e,Lr),zw="3.2.31",Gw="http://www.w3.org/2000/svg",Cn=typeof document!="undefined"?document:null,ch=Cn&&Cn.createElement("template"),Ww={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Cn.createElementNS(Gw,t):Cn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ch.innerHTML=s?`<svg>${t}</svg>`:t;const a=ch.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yw(t,e,n){const s=t.style,r=Ue(n);if(n&&!r){for(const i in n)oc(s,i,n[i]);if(e&&!Ue(e))for(const i in e)n[i]==null&&oc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const uh=/\s*!important$/;function oc(t,e,n){if(j(n))n.forEach(s=>oc(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Xw(t,e);uh.test(n)?t.setProperty(Xs(s),n.replace(uh,""),"important"):t[s]=n}}const lh=["Webkit","Moz","ms"],Na={};function Xw(t,e){const n=Na[e];if(n)return n;let s=ks(e);if(s!=="filter"&&s in t)return Na[e]=s;s=qd(s);for(let r=0;r<lh.length;r++){const i=lh[r]+s;if(i in t)return Na[e]=i}return e}const hh="http://www.w3.org/1999/xlink";function Jw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hh,e.slice(6,e.length)):t.setAttributeNS(hh,e,n);else{const i=Hm(e);n==null||i&&!Ld(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Zw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ld(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let co=Date.now,kf=!1;if(typeof window!="undefined"){co()>document.createEvent("Event").timeStamp&&(co=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);kf=!!(t&&Number(t[1])<=53)}let ac=0;const ev=Promise.resolve(),tv=()=>{ac=0},nv=()=>ac||(ev.then(tv),ac=co());function sv(t,e,n,s){t.addEventListener(e,n,s)}function rv(t,e,n,s){t.removeEventListener(e,n,s)}function iv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=ov(e);if(s){const u=i[e]=av(s,r);sv(t,a,u,c)}else o&&(rv(t,a,o,c),i[e]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function ov(t){let e;if(dh.test(t)){e={};let n;for(;n=t.match(dh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Xs(t.slice(2)),e]}function av(t,e){const n=s=>{const r=s.timeStamp||co();(kf||r>=n.attached-1)&&Et(cv(s,n.value),e,5,[s])};return n.value=t,n.attached=nv(),n}function cv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const fh=/^on[a-z]/,uv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Qw(t,s,r):e==="style"?Yw(t,n,s):Ro(e)?Bc(e)||iv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(t,e,s,r))?Zw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Jw(t,e,s,r))};function lv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&fh.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fh.test(e)&&Ue(n)?!1:e in t}const hv=tt({patchProp:uv},Ww);let ph;function dv(){return ph||(ph=Tw(hv))}const Z_=(...t)=>{const e=dv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=fv(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function fv(t){return Ue(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ou=function(t){const e=Rf(t);return gv.encodeByteArray(e,!0)},gh=function(t){return ou(t).replace(/\./g,"")};function uo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mv(n)||(t[n]=uo(t[n],e[n]));return t}function mv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gh(JSON.stringify(n)),gh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Un())}function bv(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iv(){return typeof self=="object"&&self.self===self}function Ev(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _v(){return Un().indexOf("Electron/")>=0}function Sv(){const t=Un();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xv(){return Un().indexOf("MSAppHost/")>=0}function Cv(){return!bv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pf(){return typeof indexedDB=="object"}function Av(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="FirebaseError";class ri extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Nv,Object.setPrototypeOf(this,ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Dv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ri(r,a,s)}}function Dv(t,e){return t.replace(Ov,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ov=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(yh(i)&&yh(o)){if(!cc(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yh(t){return t!==null&&typeof t=="object"}function kv(t,e){const n=new Rv(t,e);return n.subscribe.bind(n)}class Rv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Pv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Da),r.error===void 0&&(r.error=Da),r.complete===void 0&&(r.complete=Da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fv(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Lv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lv(t){return t===xn?void 0:t}function Fv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=[];var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Mf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Uv=Y.INFO,Bv={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},$v=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Bv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=Uv,this._logHandler=$v,this._userLogHandler=null,au.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}function qv(t){au.forEach(e=>{e.setLogLevel(t)})}function jv(t,e){for(const n of au){let s=null;e&&e.level&&(s=Mf[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&t({level:Y[i].toLowerCase(),message:a,args:o,type:r.name})}}}function Kv(t){return Array.prototype.slice.call(t)}function Lf(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function uu(t,e,n){var s,r=new Promise(function(i,o){s=t[e].apply(t,n),Lf(s).then(i,o)});return r.request=s,r}function Hv(t,e,n){var s=uu(t,e,n);return s.then(function(r){if(!!r)return new Fr(r,s.request)})}function er(t,e,n){n.forEach(function(s){Object.defineProperty(t.prototype,s,{get:function(){return this[e][s]},set:function(r){this[e][s]=r}})})}function lu(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return uu(this[e],r,arguments)})})}function $o(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Ff(t,e,n,s){s.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return Hv(this[e],r,arguments)})})}function es(t){this._index=t}er(es,"_index",["name","keyPath","multiEntry","unique"]);lu(es,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Ff(es,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Fr(t,e){this._cursor=t,this._request=e}er(Fr,"_cursor",["direction","key","primaryKey","value"]);lu(Fr,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Fr.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Lf(e._request).then(function(s){if(!!s)return new Fr(s,e._request)})})})});function Pt(t){this._store=t}Pt.prototype.createIndex=function(){return new es(this._store.createIndex.apply(this._store,arguments))};Pt.prototype.index=function(){return new es(this._store.index.apply(this._store,arguments))};er(Pt,"_store",["name","keyPath","indexNames","autoIncrement"]);lu(Pt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Ff(Pt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);$o(Pt,"_store",IDBObjectStore,["deleteIndex"]);function ii(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}ii.prototype.objectStore=function(){return new Pt(this._tx.objectStore.apply(this._tx,arguments))};er(ii,"_tx",["objectStoreNames","mode"]);$o(ii,"_tx",IDBTransaction,["abort"]);function qo(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new ii(n)}qo.prototype.createObjectStore=function(){return new Pt(this._db.createObjectStore.apply(this._db,arguments))};er(qo,"_db",["name","version","objectStoreNames"]);$o(qo,"_db",IDBDatabase,["deleteObjectStore","close"]);function jo(t){this._db=t}jo.prototype.transaction=function(){return new ii(this._db.transaction.apply(this._db,arguments))};er(jo,"_db",["name","version","objectStoreNames"]);$o(jo,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Pt,es].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Kv(arguments),s=n[n.length-1],r=this._store||this._index,i=r[t].apply(r,n.slice(0,-1));i.onsuccess=function(){s(i.result)}})})});[es,Pt].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var s=this,r=[];return new Promise(function(i){s.iterateCursor(e,function(o){if(!o){i(r);return}if(r.push(o.value),n!==void 0&&r.length==n){i(r);return}o.continue()})})})});function zv(t,e,n){var s=uu(indexedDB,"open",[t,e]),r=s.request;return r&&(r.onupgradeneeded=function(i){n&&n(new qo(r.result,i.oldVersion,r.transaction))}),s.then(function(i){return new jo(i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Wv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",wh="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new cu("@firebase/app"),Qv="@firebase/app-compat",Yv="@firebase/analytics-compat",Xv="@firebase/analytics",Jv="@firebase/app-check-compat",Zv="@firebase/app-check",eb="@firebase/auth",tb="@firebase/auth-compat",nb="@firebase/database",sb="@firebase/database-compat",rb="@firebase/functions",ib="@firebase/functions-compat",ob="@firebase/installations",ab="@firebase/installations-compat",cb="@firebase/messaging",ub="@firebase/messaging-compat",lb="@firebase/performance",hb="@firebase/performance-compat",db="@firebase/remote-config",fb="@firebase/remote-config-compat",pb="@firebase/storage",gb="@firebase/storage-compat",mb="@firebase/firestore",yb="@firebase/firestore-compat",wb="firebase",vb="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]",bb={[uc]:"fire-core",[Qv]:"fire-core-compat",[Xv]:"fire-analytics",[Yv]:"fire-analytics-compat",[Zv]:"fire-app-check",[Jv]:"fire-app-check-compat",[eb]:"fire-auth",[tb]:"fire-auth-compat",[nb]:"fire-rtdb",[sb]:"fire-rtdb-compat",[rb]:"fire-fn",[ib]:"fire-fn-compat",[ob]:"fire-iid",[ab]:"fire-iid-compat",[cb]:"fire-fcm",[ub]:"fire-fcm-compat",[lb]:"fire-perf",[hb]:"fire-perf-compat",[db]:"fire-rc",[fb]:"fire-rc-compat",[pb]:"fire-gcs",[gb]:"fire-gcs-compat",[mb]:"fire-fst",[yb]:"fire-fst-compat","fire-js":"fire-js",[wb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Map,Vr=new Map;function lo(t,e){try{t.container.addComponent(e)}catch(n){hu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vf(t,e){t.container.addOrOverwriteComponent(e)}function Ps(t){const e=t.name;if(Vr.has(e))return hu.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,t);for(const n of fn.values())lo(n,t);return!0}function Uf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ib(t,e,n=$n){Uf(t,e).clearInstance(n)}function Eb(){Vr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ht=new Bo("app","Firebase",Tb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=vb;function Bf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:$n,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});const r=fn.get(s);if(r){if(cc(t,r.options)&&cc(n,r.config))return r;throw Ht.create("duplicate-app",{appName:s})}const i=new Vv(s);for(const a of Vr.values())i.addComponent(a);const o=new _b(t,n,i);return fn.set(s,o),o}function Sb(t=$n){const e=fn.get(t);if(!e)throw Ht.create("no-app",{appName:t});return e}function xb(){return Array.from(fn.values())}async function $f(t){const e=t.name;fn.has(e)&&(fn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function un(t,e,n){var s;let r=(s=bb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hu.warn(a.join(" "));return}Ps(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function qf(t,e){if(t!==null&&typeof t!="function")throw Ht.create("invalid-log-argument");jv(t,e)}function jf(t){qv(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="firebase-heartbeat-database",Ab=1,qn="firebase-heartbeat-store";let Oa=null;function fu(){return Oa||(Oa=zv(Cb,Ab,t=>{switch(t.oldVersion){case 0:t.createObjectStore(qn)}}).catch(t=>{throw Ht.create("storage-open",{originalErrorMessage:t.message})})),Oa}async function Nb(t){try{return(await fu()).transaction(qn).objectStore(qn).get(pu(t))}catch(e){throw Ht.create("storage-get",{originalErrorMessage:e.message})}}async function ka(t,e){try{const s=(await fu()).transaction(qn,"readwrite");return await s.objectStore(qn).put(e,pu(t)),s.complete}catch(n){throw Ht.create("storage-set",{originalErrorMessage:n.message})}}async function Db(t){try{const n=(await fu()).transaction(qn,"readwrite");return await n.objectStore(qn).delete(pu(t)),n.complete}catch(e){throw Ht.create("storage-delete",{originalErrorMessage:e.message})}}function pu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=1024,kb=30*24*60*60*1e3;class Rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pb();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===s))return this._heartbeatsCache.push({date:s,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=kb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Mb(this._heartbeatsCache),s=ou(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),s}}function Pb(){return new Date().toISOString().substring(0,10)}function Mb(t,e=Ob){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.userAgent===r.userAgent);if(i){if(i.dates.push(r.date),vh(n)>e){i.dates.pop();break}}else if(n.push({userAgent:r.userAgent,dates:[r.date]}),vh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pf()?Av().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nb(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return ka(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ka(this.app,{heartbeats:[...s,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ka(this.app,{heartbeats:s.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Db(this.app)}}function vh(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){Ps(new Bn("platform-logger",e=>new Gv(e),"PRIVATE")),Ps(new Bn("heartbeat",e=>new Rb(e),"PRIVATE")),un(uc,wh,t),un(uc,wh,"esm2017"),un("fire-js","")}Fb("");var Vb=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:du,_DEFAULT_ENTRY_NAME:$n,_addComponent:lo,_addOrOverwriteComponent:Vf,_apps:fn,_clearComponents:Eb,_components:Vr,_getProvider:Uf,_registerComponent:Ps,_removeServiceInstance:Ib,deleteApp:$f,getApp:Sb,getApps:xb,initializeApp:Bf,onLog:qf,registerVersion:un,setLogLevel:jf,FirebaseError:ri},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this._delegate=e,this.firebase=n,lo(e,new Bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$f(this._delegate)))}_getService(e,n=$n){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=$n){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){lo(this._delegate,e)}_addOrOverwriteComponent(e){Vf(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},bh=new Bo("app-compat","Firebase",Bb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){const e={},n={__esModule:!0,initializeApp:i,app:r,registerVersion:un,setLogLevel:jf,onLog:qf,apps:null,SDK_VERSION:du,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:Vb}};n.default=n,Object.defineProperty(n,"apps",{get:o});function s(u){delete e[u]}function r(u){if(u=u||$n,!mh(e,u))throw bh.create("no-app",{appName:u});return e[u]}r.App=t;function i(u,l={}){const h=Bf(u,l);if(mh(e,h.name))return e[h.name];const f=new t(h,n);return e[h.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Ps(u)&&u.type==="PUBLIC"){const f=(g=r())=>{if(typeof g[h]!="function")throw bh.create("invalid-app-argument",{appName:l});return g[h]()};u.serviceProps!==void 0&&uo(f,u.serviceProps),n[h]=f,t.prototype[h]=function(...g){return this._getService.bind(this,l).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){const t=$b(Ub);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Kf,extendNamespace:e,createSubscribe:kv,ErrorFactory:Bo,deepExtend:uo});function e(n){uo(t,n)}return t}const qb=Kf();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new cu("@firebase/app-compat"),jb="@firebase/app-compat",Kb="0.1.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){un(jb,Kb,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Iv()&&self.firebase!==void 0){Ih.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ih.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hf=qb;Hb();var zb="firebase",Gb="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hf.registerVersion(zb,Gb,"app-compat");var Wb=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R,gu=gu||{},$=Wb||self;function ho(){}function lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Qb(t){return Object.prototype.hasOwnProperty.call(t,Ra)&&t[Ra]||(t[Ra]=++Yb)}var Ra="closure_uid_"+(1e9*Math.random()>>>0),Yb=0;function Xb(t,e,n){return t.call.apply(t.bind,arguments)}function Jb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=Xb:Fe=Jb,Fe.apply(null,arguments)}function Li(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function vn(){this.s=this.s,this.o=this.o}var Zb=0,eI={};vn.prototype.s=!1;vn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Zb!=0)){var t=Qb(this);delete eI[t]}};vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Gf=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function tI(t){e:{var e=zI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Eh(t){return Array.prototype.concat.apply([],arguments)}function mu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function fo(t){return/^[\s\xa0]*$/.test(t)}var Th=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function Pa(t,e){return t<e?-1:t>e?1:0}var Je;e:{var _h=$.navigator;if(_h){var Sh=_h.userAgent;if(Sh){Je=Sh;break e}}Je=""}function yu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Wf(t){const e={};for(const n in t)e[n]=t[n];return e}var xh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<xh.length;i++)n=xh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function wu(t){return wu[" "](t),t}wu[" "]=ho;function nI(t){var e=iI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var sI=Xe(Je,"Opera"),Ms=Xe(Je,"Trident")||Xe(Je,"MSIE"),Yf=Xe(Je,"Edge"),hc=Yf||Ms,Xf=Xe(Je,"Gecko")&&!(Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge"))&&!(Xe(Je,"Trident")||Xe(Je,"MSIE"))&&!Xe(Je,"Edge"),rI=Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge");function Jf(){var t=$.document;return t?t.documentMode:void 0}var po;e:{var Ma="",La=function(){var t=Je;if(Xf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yf)return/Edge\/([\d\.]+)/.exec(t);if(Ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rI)return/WebKit\/(\S+)/.exec(t);if(sI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(La&&(Ma=La?La[1]:""),Ms){var Fa=Jf();if(Fa!=null&&Fa>parseFloat(Ma)){po=String(Fa);break e}}po=Ma}var iI={};function oI(){return nI(function(){let t=0;const e=Th(String(po)).split("."),n=Th("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Pa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Pa(r[2].length==0,i[2].length==0)||Pa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var dc;if($.document&&Ms){var Ch=Jf();dc=Ch||parseInt(po,10)||void 0}else dc=void 0;var aI=dc,cI=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",ho,e),$.removeEventListener("test",ho,e)}catch{}return t}();function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};function Ur(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xf){e:{try{wu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ur.Z.h.call(this)}}$e(Ur,ze);var uI={2:"touch",3:"pen",4:"mouse"};Ur.prototype.h=function(){Ur.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ai="closure_listenable_"+(1e6*Math.random()|0),lI=0;function hI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++lI,this.ca=this.fa=!1}function Ko(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ho(t){this.src=t,this.g={},this.h=0}Ho.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=pc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new hI(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function fc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=zf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ko(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),Va={};function Zf(t,e,n,s,r){if(s&&s.once)return tp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zf(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[ai]?t.N(e,n,oi(s)?!!s.capture:!!s,r):ep(t,e,n,!1,s,r)}function ep(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=oi(r)?!!r.capture:!!r,a=Iu(t);if(a||(t[vu]=a=new Ho(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=dI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(sp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dI(){function t(n){return e.call(t.src,t.listener,n)}var e=fI;return t}function tp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)tp(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[ai]?t.O(e,n,oi(s)?!!s.capture:!!s,r):ep(t,e,n,!0,s,r)}function np(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)np(t,e[i],n,s,r);else s=oi(s)?!!s.capture:!!s,n=Eu(n),t&&t[ai]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=pc(i,n,s,r),-1<n&&(Ko(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Iu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pc(e,n,s,r)),(n=-1<t?e[t]:null)&&bu(n))}function bu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ai])fc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(sp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Iu(e))?(fc(n,t),n.h==0&&(n.src=null,e[vu]=null)):Ko(t)}}}function sp(t){return t in Va?Va[t]:Va[t]="on"+t}function fI(t,e){if(t.ca)t=!0;else{e=new Ur(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&bu(t),t=n.call(s,e)}return t}function Iu(t){return t=t[vu],t instanceof Ho?t:null}var Ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[Ua]||(t[Ua]=function(e){return t.handleEvent(e)}),t[Ua])}function Oe(){vn.call(this),this.i=new Ho(this),this.P=this,this.I=null}$e(Oe,vn);Oe.prototype[ai]=!0;Oe.prototype.removeEventListener=function(t,e,n,s){np(this,t,e,n,s)};function Ve(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var r=e;e=new ze(s,t),Qf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Fi(o,s,!0,e)&&r}if(o=e.g=t,r=Fi(o,s,!0,e)&&r,r=Fi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Fi(o,s,!1,e)&&r}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ko(n[s]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Oe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Fi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Tu=$.JSON.stringify;function pI(){var t=ip;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gI{constructor(){this.h=this.g=null}add(e,n){const s=rp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var rp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new mI,t=>t.reset());class mI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yI(t){$.setTimeout(()=>{throw t},0)}function _u(t,e){gc||wI(),mc||(gc(),mc=!0),ip.add(t,e)}var gc;function wI(){var t=$.Promise.resolve(void 0);gc=function(){t.then(vI)}}var mc=!1,ip=new gI;function vI(){for(var t;t=pI();){try{t.h.call(t.g)}catch(n){yI(n)}var e=rp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mc=!1}function zo(t,e){Oe.call(this),this.h=t||1,this.g=e||$,this.j=Fe(this.kb,this),this.l=Date.now()}$e(zo,Oe);R=zo.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ve(this,"tick"),this.da&&(Su(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Su(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){zo.Z.M.call(this),Su(this),delete this.g};function xu(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function op(t){t.g=xu(()=>{t.g=null,t.i&&(t.i=!1,op(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bI extends vn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:op(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(t){vn.call(this),this.h=t,this.g={}}$e(Br,vn);var Ah=[];function ap(t,e,n,s){Array.isArray(n)||(n&&(Ah[0]=n.toString()),n=Ah);for(var r=0;r<n.length;r++){var i=Zf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cp(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&bu(e)},t),t.g={}}Br.prototype.M=function(){Br.Z.M.call(this),cp(this)};Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Go(){this.g=!0}Go.prototype.Aa=function(){this.g=!1};function II(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function EI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function _s(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_I(t,n)+(s?" "+s:"")})}function TI(t,e){t.info(function(){return"TIMEOUT: "+e})}Go.prototype.info=function(){};function _I(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Tu(n)}catch{return e}}var ts={},Nh=null;function Wo(){return Nh=Nh||new Oe}ts.Ma="serverreachability";function up(t){ze.call(this,ts.Ma,t)}$e(up,ze);function $r(t){const e=Wo();Ve(e,new up(e,t))}ts.STAT_EVENT="statevent";function lp(t,e){ze.call(this,ts.STAT_EVENT,t),this.stat=e}$e(lp,ze);function Ze(t){const e=Wo();Ve(e,new lp(e,t))}ts.Na="timingevent";function hp(t,e){ze.call(this,ts.Na,t),this.size=e}$e(hp,ze);function ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Qo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Cu(){}Cu.prototype.h=null;function Dh(t){return t.h||(t.h=t.i())}function fp(){}var ui={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Au(){ze.call(this,"d")}$e(Au,ze);function Nu(){ze.call(this,"c")}$e(Nu,ze);var yc;function Yo(){}$e(Yo,Cu);Yo.prototype.g=function(){return new XMLHttpRequest};Yo.prototype.i=function(){return{}};yc=new Yo;function li(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Br(this),this.P=SI,t=hc?125:void 0,this.W=new zo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new pp}function pp(){this.i=null,this.g="",this.h=!1}var SI=45e3,wc={},go={};R=li.prototype;R.setTimeout=function(t){this.P=t};function vc(t,e,n){t.K=1,t.v=Jo(zt(e)),t.s=n,t.U=!0,gp(t,null)}function gp(t,e){t.F=Date.now(),hi(t),t.A=zt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Ep(n.h,"t",s),t.C=0,n=t.l.H,t.h=new pp,t.g=qp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new bI(Fe(t.Ia,t,t.g),t.O)),ap(t.V,t.g,"readystatechange",t.gb),e=t.H?Wf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),$r(1),II(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const l=qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||hc||this.g&&(this.h.h||this.g.ga()||Ph(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?$r(3):$r(2)),Xo(this);var n=this.g.ba();this.N=n;t:if(mp(this)){var s=Ph(this.g);t="";var r=s.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Dn(this),Cr(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,EI(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fo(a)){var u=a;break t}}u=null}if(n=u)_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bc(this,n);else{this.i=!1,this.o=3,Ze(12),Dn(this),Cr(this);break e}}this.U?(yp(this,l,o),hc&&this.i&&l==3&&(ap(this.V,this.W,"tick",this.fb),this.W.start())):(_s(this.j,this.m,o,null),bc(this,o)),l==4&&Dn(this),this.i&&!this.I&&(l==4?Vp(this.l,this):(this.i=!1,hi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Dn(this),Cr(this)}}}catch{}finally{}};function mp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function yp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=xI(t,n),r==go){e==4&&(t.o=4,Ze(14),s=!1),_s(t.j,t.m,null,"[Incomplete Response]");break}else if(r==wc){t.o=4,Ze(15),_s(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _s(t.j,t.m,r,null),bc(t,r);mp(t)&&r!=go&&r!=wc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vu(e),e.L=!0,Ze(11))):(_s(t.j,t.m,n,"[Invalid Chunked Response]"),Dn(t),Cr(t))}R.fb=function(){if(this.g){var t=qt(this.g),e=this.g.ga();this.C<e.length&&(Xo(this),yp(this,t,e),this.i&&t!=4&&hi(this))}};function xI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?go:(n=Number(e.substring(n,s)),isNaN(n)?wc:(s+=1,s+n>e.length?go:(e=e.substr(s,n),t.C=s+n,e)))}R.cancel=function(){this.I=!0,Dn(this)};function hi(t){t.Y=Date.now()+t.P,wp(t,t.P)}function wp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ci(Fe(t.eb,t),e)}function Xo(t){t.B&&($.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(TI(this.j,this.A),this.K!=2&&($r(3),Ze(17)),Dn(this),this.o=2,Cr(this)):wp(this,this.Y-t)};function Cr(t){t.l.G==0||t.I||Vp(t.l,t)}function Dn(t){Xo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Su(t.W),cp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ic(n.i,t))){if(n.I=t.N,!t.J&&Ic(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)vo(n),ta(n);else break e;Fu(n),Ze(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ci(Fe(n.ab,n),6e3));if(1>=Sp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else On(n,11)}else if((t.J||n.g==t)&&vo(n),!fo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.i;!i.g&&(Xe(v,"spdy")||Xe(v,"quic")||Xe(v,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ku(i,i.h),i.h=null))}if(s.D){const N=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,ae(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=$p(s,s.H?s.la:null,s.W),o.J){xp(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Xo(a),hi(a)),s.g=o}else Lp(s);0<n.l.length&&na(n)}else u[0]!="stop"&&u[0]!="close"||On(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?On(n,7):Lu(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}$r(4)}catch{}}function CI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(lc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Du(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lc(t)||typeof t=="string")Gf(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(lc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=CI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function tr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof tr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}R=tr.prototype;R.R=function(){Ou(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return Ou(this),this.g.concat()};function Ou(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];jn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],jn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}R.get=function(t,e){return jn(this.h,t)?this.h[t]:e};R.set=function(t,e){jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var vp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function AI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Kn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Kn){this.g=e!==void 0?e:t.g,mo(this,t.j),this.s=t.s,yo(this,t.i),wo(this,t.m),this.l=t.l,e=t.h;var n=new qr;n.i=e.i,e.g&&(n.g=new tr(e.g),n.h=e.h),Oh(this,n),this.o=t.o}else t&&(n=String(t).match(vp))?(this.g=!!e,mo(this,n[1]||"",!0),this.s=Ar(n[2]||""),yo(this,n[3]||"",!0),wo(this,n[4]),this.l=Ar(n[5]||"",!0),Oh(this,n[6]||"",!0),this.o=Ar(n[7]||"")):(this.g=!!e,this.h=new qr(null,this.g))}Kn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Er(e,kh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Er(e,kh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Er(n,n.charAt(0)=="/"?RI:kI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Er(n,MI)),t.join("")};function zt(t){return new Kn(t)}function mo(t,e,n){t.j=n?Ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yo(t,e,n){t.i=n?Ar(e,!0):e}function wo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oh(t,e,n){e instanceof qr?(t.h=e,LI(t.h,t.g)):(n||(e=Er(e,PI)),t.h=new qr(e,t.g))}function ae(t,e,n){t.h.set(e,n)}function Jo(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function NI(t){return t instanceof Kn?zt(t):new Kn(t,void 0)}function DI(t,e,n,s){var r=new Kn(null,void 0);return t&&mo(r,t),e&&yo(r,e),n&&wo(r,n),s&&(r.l=s),r}function Ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kh=/[#\/\?@]/g,kI=/[#\?:]/g,RI=/[#\?]/g,PI=/[#\?@]/g,MI=/#/g;function qr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bn(t){t.g||(t.g=new tr,t.h=0,t.i&&AI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=qr.prototype;R.add=function(t,e){bn(this),this.i=null,t=nr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bp(t,e){bn(t),e=nr(t,e),jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ou(t)))}function Ip(t,e){return bn(t),e=nr(t,e),jn(t.g.h,e)}R.forEach=function(t,e){bn(this),this.g.forEach(function(n,s){Gf(n,function(r){t.call(e,r,s,this)},this)},this)};R.T=function(){bn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};R.R=function(t){bn(this);var e=[];if(typeof t=="string")Ip(this,t)&&(e=Eh(e,this.g.get(nr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Eh(e,t[n])}return e};R.set=function(t,e){return bn(this),this.i=null,t=nr(this,t),Ip(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ep(t,e,n){bp(t,e),0<n.length&&(t.i=null,t.g.set(nr(t,e),mu(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function nr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LI(t,e){e&&!t.j&&(bn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(bp(this,s),Ep(this,r,n))},t)),t.j=e}var FI=class{constructor(t,e){this.h=t,this.g=e}};function Tp(t){this.l=t||VI,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var VI=10;function _p(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Sp(t){return t.h?1:t.g?t.g.size:0}function Ic(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ku(t,e){t.g?t.g.add(e):t.h=e}function xp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tp.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mu(t.i)}function Ru(){}Ru.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Ru.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function UI(){this.g=new Ru}function BI(t,e,n){const s=n||"";try{Du(t,function(r,i){let o=r;oi(r)&&(o=Tu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function $I(t,e){const n=new Go;if($.Image){const s=new Image;s.onload=Li(Vi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Li(Vi,n,s,"TestLoadImage: error",!1,e),s.onabort=Li(Vi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Li(Vi,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Vi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function di(t){this.l=t.$b||null,this.j=t.ib||!1}$e(di,Cu);di.prototype.g=function(){return new Zo(this.l,this.j)};di.prototype.i=function(t){return function(){return t}}({});function Zo(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Zo,Oe);var Pu=0;R=Zo.prototype;R.open=function(t,e){if(this.readyState!=Pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jr(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=Pu};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ap(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ap(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fi(this):jr(this),this.readyState==3&&Ap(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,fi(this))};R.Ta=function(t){this.g&&(this.response=t,fi(this))};R.ha=function(){this.g&&fi(this)};function fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jr(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qI=$.JSON.parse;function Ie(t){Oe.call(this),this.headers=new tr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Np,this.K=this.L=!1}$e(Ie,Oe);var Np="",jI=/^https?$/i,KI=["POST","PUT"];R=Ie.prototype;R.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yc.g(),this.C=this.u?Dh(this.u):Dh(yc),this.g.onreadystatechange=Fe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Rh(this,i);return}t=n||"";const r=new tr(this.headers);s&&Du(s,function(i,o){r.set(o,i)}),s=tI(r.T()),n=$.FormData&&t instanceof $.FormData,!(0<=zf(KI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kp(this),0<this.B&&((this.K=HI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.pa,this)):this.A=xu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Rh(this,i)}};function HI(t){return Ms&&oI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function zI(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof gu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Rh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dp(t),ea(t)}function Dp(t){t.D||(t.D=!0,Ve(t,"complete"),Ve(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),ea(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ea(this,!0)),Ie.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?Op(this):this.cb())};R.cb=function(){Op(this)};function Op(t){if(t.h&&typeof gu!="undefined"&&(!t.C[1]||qt(t)!=4||t.ba()!=2)){if(t.v&&qt(t)==4)xu(t.Fa,0,t);else if(Ve(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(vp)[1]||null;if(!r&&$.self&&$.self.location){var i=$.self.location.protocol;r=i.substr(0,i.length-1)}s=!jI.test(r?r.toLowerCase():"")}n=s}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Dp(t)}}finally{ea(t)}}}}function ea(t,e){if(t.g){kp(t);const n=t.g,s=t.C[0]?ho:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=s}catch{}}}function kp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qI(e)}};function Ph(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Np:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function GI(t){let e="";return yu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Mu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=GI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rp(t){this.za=0,this.l=[],this.h=new Go,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=yr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=yr("baseRetryDelayMs",5e3,t),this.$a=yr("retryDelaySeedMs",1e4,t),this.Ya=yr("forwardChannelMaxRetries",2,t),this.ra=yr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Tp(t&&t.concurrentRequestLimit),this.Ca=new UI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=Rp.prototype;R.ma=8;R.G=1;function Lu(t){if(Pp(t),t.G==3){var e=t.V++,n=zt(t.F);ae(n,"SID",t.J),ae(n,"RID",e),ae(n,"TYPE","terminate"),pi(t,n),e=new li(t,t.h,e,void 0),e.K=2,e.v=Jo(zt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=qp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),hi(e)}Bp(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ta(t){t.g&&(Vu(t),t.g.cancel(),t.g=null)}function Pp(t){ta(t),t.u&&($.clearTimeout(t.u),t.u=null),vo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Ba(t,e){t.l.push(new FI(t.Za++,e)),t.G==3&&na(t)}function na(t){_p(t.i)||t.m||(t.m=!0,_u(t.Ha,t),t.C=0)}function WI(t,e){return Sp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ci(Fe(t.Ha,t,e),Up(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new li(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Wf(i),Qf(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mp(this,r,e),n=zt(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),pi(this,n),this.o&&i&&Mu(n,this.o,i),ku(this.i,r),this.Ra&&ae(n,"TYPE","init"),this.ja?(ae(n,"$req",e),ae(n,"SID","null"),r.$=!0,vc(r,n,null)):vc(r,n,e),this.G=2}}else this.G==3&&(t?Mh(this,t):this.l.length==0||_p(this.i)||Mh(this))};function Mh(t,e){var n;e?n=e.m:n=t.V++;const s=zt(t.F);ae(s,"SID",t.J),ae(s,"RID",n),ae(s,"AID",t.U),pi(t,s),t.o&&t.s&&Mu(s,t.o,t.s),n=new li(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Mp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ku(t.i,n),vc(n,s,e)}function pi(t,e){t.j&&Du({},function(n,s){ae(e,s,n)})}function Mp(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Fe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{BI(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Lp(t){t.g||t.u||(t.Y=1,_u(t.Ga,t),t.A=0)}function Fu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ci(Fe(t.Ga,t),Up(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,Fp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ci(Fe(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),ta(this),Fp(this))};function Vu(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Fp(t){t.g=new li(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=zt(t.oa);ae(e,"RID","rpc"),ae(e,"SID",t.J),ae(e,"CI",t.N?"0":"1"),ae(e,"AID",t.U),pi(t,e),ae(e,"TYPE","xmlhttp"),t.o&&t.s&&Mu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Jo(zt(e)),n.s=null,n.U=!0,gp(n,t)}R.ab=function(){this.v!=null&&(this.v=null,ta(this),Fu(this),Ze(19))};function vo(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function Vp(t,e){var n=null;if(t.g==e){vo(t),Vu(t),t.g=null;var s=2}else if(Ic(t.i,e))n=e.D,xp(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Wo(),Ve(s,new hp(s,n,e,r)),na(t)}else Lp(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&WI(t,e)||s==2&&Fu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:On(t,5);break;case 4:On(t,10);break;case 3:On(t,6);break;default:On(t,2)}}}function Up(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function On(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Fe(t.jb,t);n||(n=new Kn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||mo(n,"https"),Jo(n)),$I(n.toString(),s)}else Ze(2);t.G=0,t.j&&t.j.va(e),Bp(t),Pp(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function Bp(t){t.G=0,t.I=-1,t.j&&((Cp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,mu(t.l),t.l.length=0),t.j.ua())}function $p(t,e,n){let s=NI(n);if(s.i!="")e&&yo(s,e+"."+s.i),wo(s,s.m);else{const r=$.location;s=DI(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&yu(t.aa,function(r,i){ae(s,i,r)}),e=t.D,n=t.sa,e&&n&&ae(s,e,n),ae(s,"VER",t.ma),pi(t,s),s}function qp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ie(new di({ib:!0})):new Ie(t.qa),e.L=t.H,e}function jp(){}R=jp.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function bo(){if(Ms&&!(10<=Number(aI)))throw Error("Environmental error: no available transport.")}bo.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Oe.call(this),this.g=new Rp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!fo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new sr(this)}$e(ft,Oe);ft.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),_u(Fe(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=$p(t,null,t.W),na(t)};ft.prototype.close=function(){Lu(this.g)};ft.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ba(this.g,e)}else this.v?(e={},e.__data__=Tu(t),Ba(this.g,e)):Ba(this.g,t)};ft.prototype.M=function(){this.g.j=null,delete this.j,Lu(this.g),delete this.g,ft.Z.M.call(this)};function Kp(t){Au.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(Kp,Au);function Hp(){Nu.call(this),this.status=1}$e(Hp,Nu);function sr(t){this.g=t}$e(sr,jp);sr.prototype.xa=function(){Ve(this.g,"a")};sr.prototype.wa=function(t){Ve(this.g,new Kp(t))};sr.prototype.va=function(t){Ve(this.g,new Hp(t))};sr.prototype.ua=function(){Ve(this.g,"b")};bo.prototype.createWebChannel=bo.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Qo.NO_ERROR=0;Qo.TIMEOUT=8;Qo.HTTP_ERROR=6;dp.COMPLETE="complete";fp.EventType=ui;ui.OPEN="a";ui.CLOSE="b";ui.ERROR="c";ui.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.La;Ie.prototype.getLastErrorCode=Ie.prototype.Da;Ie.prototype.getStatus=Ie.prototype.ba;Ie.prototype.getResponseJson=Ie.prototype.Qa;Ie.prototype.getResponseText=Ie.prototype.ga;Ie.prototype.send=Ie.prototype.ea;var QI=function(){return new bo},YI=function(){return Wo()},$a=Qo,XI=dp,JI=ts,Lh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ZI=di,Ui=fp,eE=Ie;const Fh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new cu("@firebase/firestore");function Ec(){return pn.logLevel}function tE(t){pn.setLogLevel(t)}function _(t,...e){if(pn.logLevel<=Y.DEBUG){const n=e.map(Uu);pn.debug(`Firestore (${rr}): ${t}`,...n)}}function we(t,...e){if(pn.logLevel<=Y.ERROR){const n=e.map(Uu);pn.error(`Firestore (${rr}): ${t}`,...n)}}function Kr(t,...e){if(pn.logLevel<=Y.WARN){const n=e.map(Uu);pn.warn(`Firestore (${rr}): ${t}`,...n)}}function Uu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+t;throw we(e),new Error(e)}function B(t,e){t||M()}function nE(t,e){t||M()}function A(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ri{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class rE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iE{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(B(typeof s.accessToken=="string"),new zp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new Pe(e)}}class oE{constructor(e,n,s){this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class aE{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new oE(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uE{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.p=n.token,new cE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.A=-1;class Gp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=lE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function H(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}function Wp(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new Ne(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,s){n===void 0?n=0:n>e.length&&M(),s===void 0?s=e.length-n:s>e.length-n&&M(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Hr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class X extends Hr{construct(e,n,s){return new X(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new E(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new X(n)}static emptyPath(){return new X([])}}const hE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends Hr{construct(e,n,s){return new xe(e,n,s)}static isValidIdentifier(e){return hE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.fields=e,e.sort(xe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Te(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Te(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const fE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(B(!!t),typeof t=="string"){let e=0;const n=fE.exec(t);if(B(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hn(t){return typeof t=="string"?Te.fromBase64String(t):Te.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yp(t){const e=t.mapValue.fields.__previous_value__;return Bu(e)?Yp(e):e}function zr(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class zn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return t==null}function Gr(t){return t===0&&1/t==-1/0}function Xp(t){return typeof t=="number"&&Number.isInteger(t)&&!Gr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.path=e}static fromPath(e){return new k(X.fromString(e))}static fromName(e){return new k(X.fromString(e).popFirst(5))}static empty(){return new k(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return X.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new k(new X(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bu(t)?4:10:M()}function Tt(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zr(t).isEqual(zr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=gn(s.timestampValue),o=gn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Hn(s.bytesValue).isEqual(Hn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return de(s.geoPointValue.latitude)===de(r.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return de(s.integerValue)===de(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=de(s.doubleValue),o=de(r.doubleValue);return i===o?Gr(i)===Gr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Vh(i)!==Vh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Tt(i[a],o[a])))return!1;return!0}(t,e);default:return M()}}function Wr(t,e){return(t.values||[]).find(n=>Tt(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Gn(t),s=Gn(e);if(n!==s)return H(n,s);switch(n){case 0:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=de(r.integerValue||r.doubleValue),a=de(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Uh(t.timestampValue,e.timestampValue);case 4:return Uh(zr(t),zr(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Hn(r),a=Hn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=H(o[c],a[c]);if(u!==0)return u}return H(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=H(de(r.latitude),de(i.latitude));return o!==0?o:H(de(r.longitude),de(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Vs(o[c],a[c]);if(u)return u}return H(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=H(a[l],u[l]);if(h!==0)return h;const f=Vs(o[a[l]],c[u[l]]);if(f!==0)return f}return H(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function Uh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=gn(t),s=gn(e),r=H(n.seconds,s.seconds);return r!==0?r:H(n.nanos,s.nanos)}function Ns(t){return Tc(t)}function Tc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=gn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,k.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Tc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Tc(s.fields[a])}`;return i+"}"}(t.mapValue):M();var e,n}function Io(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _c(t){return!!t&&"integerValue"in t}function sa(t){return!!t&&"arrayValue"in t}function Bh(t){return!!t&&"nullValue"in t}function $h(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yi(t){return!!t&&"mapValue"in t}function Nr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Nr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Nr(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nr(n)}setAll(e){let n=xe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Nr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Yi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ns(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ke(Nr(this.value))}}function Jp(t){const e=[];return ns(t.fields,(n,s)=>{const r=new xe([n]);if(Yi(s)){const i=Jp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Fs(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ue(e,0,V.min(),V.min(),Ke.empty(),0)}static newFoundDocument(e,n,s){return new ue(e,1,n,V.min(),s,0)}static newNoDocument(e,n){return new ue(e,2,n,V.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new ue(e,3,n,V.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Zp{constructor(e,n,s,r){this.indexId=e,this.collectionGroup=n,this.fields=s,this.indexState=r}}Zp.UNKNOWN_ID=-1;class mE{constructor(e,n){this.fieldPath=e,this.kind=n}}class Eo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Eo(0,ra.min())}}class ra{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ra(V.min(),k.empty(),-1)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function qh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new yE(t,e,n,s,r,i,o)}function gi(t){const e=A(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ns(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ss(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ns(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ns(s)).join(",")),e.P=n}return e.P}function wE(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ns(s.value)}`;var s}).join(", ")}]`),ss(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ns(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ns(n)).join(",")),`Target(${e})`}function ia(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!xE(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Tt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kh(t.startAt,e.startAt)&&Kh(t.endAt,e.endAt)}function To(t){return k.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,s):new vE(e,n,s):n==="array-contains"?new EE(e,s):n==="in"?new TE(e,s):n==="not-in"?new _E(e,s):n==="array-contains-any"?new SE(e,s):new et(e,n,s)}static v(e,n,s){return n==="in"?new bE(e,s):new IE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(Vs(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.V(Vs(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class vE extends et{constructor(e,n,s){super(e,n,s),this.key=k.fromName(s.referenceValue)}matches(e){const n=k.comparator(e.key,this.key);return this.V(n)}}class bE extends et{constructor(e,n){super(e,"in",n),this.keys=eg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IE extends et{constructor(e,n){super(e,"not-in",n),this.keys=eg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>k.fromName(s.referenceValue))}class EE extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sa(n)&&Wr(n.arrayValue,this.value)}}class TE extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wr(this.value.arrayValue,n)}}class _E extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wr(this.value.arrayValue,n)}}class SE extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Wr(this.value.arrayValue,s))}}class Us{constructor(e,n){this.position=e,this.inclusive=n}}class Ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function xE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=k.comparator(k.fromName(o.referenceValue),n.key):s=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function tg(t,e,n,s,r,i,o,a){return new Qt(t,e,n,s,r,i,o,a)}function ir(t){return new Qt(t)}function Xi(t){return!ss(t.limit)&&t.limitType==="F"}function _o(t){return!ss(t.limit)&&t.limitType==="L"}function $u(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qu(t){for(const e of t.filters)if(e.S())return e.field;return null}function ju(t){return t.collectionGroup!==null}function Bs(t){const e=A(t);if(e.D===null){e.D=[];const n=qu(e),s=$u(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Ds(n)),e.D.push(new Ds(xe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ds(xe.keyField(),i))}}}return e.D}function wt(t){const e=A(t);if(!e.C)if(e.limitType==="F")e.C=qh(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ds(i.field,o))}const s=e.endAt?new Us(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Us(e.startAt.position,!e.startAt.inclusive):null;e.C=qh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function ng(t,e,n){return new Qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mi(t,e){return ia(wt(t),wt(e))&&t.limitType===e.limitType}function sg(t){return`${gi(wt(t))}|lt:${t.limitType}`}function Sc(t){return`Query(target=${wE(wt(t))}; limitType=${t.limitType})`}function Ku(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):k.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=jh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Bs(n),s)||n.endAt&&!function(r,i,o){const a=jh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Bs(n),s))}(t,e)}function rg(t){return(e,n)=>{let s=!1;for(const r of Bs(t)){const i=CE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function CE(t,e,n){const s=t.field.isKeyField()?k.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Vs(a,c):M()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(e)?"-0":e}}function og(t){return{integerValue:""+t}}function ag(t,e){return Xp(e)?og(e):ig(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this._=void 0}}function AE(t,e,n){return t instanceof $s?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Wn?ug(t,e):t instanceof Qn?lg(t,e):function(s,r){const i=cg(s,r),o=Hh(i)+Hh(s.k);return _c(i)&&_c(s.k)?og(o):ig(s.O,o)}(t,e)}function NE(t,e,n){return t instanceof Wn?ug(t,e):t instanceof Qn?lg(t,e):n}function cg(t,e){return t instanceof qs?_c(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class $s extends oa{}class Wn extends oa{constructor(e){super(),this.elements=e}}function ug(t,e){const n=hg(e);for(const s of t.elements)n.some(r=>Tt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Qn extends oa{constructor(e){super(),this.elements=e}}function lg(t,e){let n=hg(e);for(const s of t.elements)n=n.filter(r=>!Tt(r,s));return{arrayValue:{values:n}}}class qs extends oa{constructor(e,n){super(),this.O=e,this.k=n}}function Hh(t){return de(t.integerValue||t.doubleValue)}function hg(t){return sa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.field=e,this.transform=n}}function DE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Wn&&s instanceof Wn||n instanceof Qn&&s instanceof Qn?Ls(n.elements,s.elements,Tt):n instanceof qs&&s instanceof qs?Tt(n.k,s.k):n instanceof $s&&s instanceof $s}(t.transform,e.transform)}class OE{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class aa{}function kE(t,e,n){t instanceof wi?function(s,r,i){const o=s.value.clone(),a=Wh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(s,r,i){if(!Ji(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Wh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(dg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function xc(t,e,n){t instanceof wi?function(s,r,i){if(!Ji(s.precondition,r))return;const o=s.value.clone(),a=Qh(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Gh(r),o).setHasLocalMutations()}(t,e,n):t instanceof rs?function(s,r,i){if(!Ji(s.precondition,r))return;const o=Qh(s.fieldTransforms,i,r),a=r.data;a.setAll(dg(s)),a.setAll(o),r.convertToFoundDocument(Gh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Ji(s.precondition,r)&&r.convertToNoDocument(V.min())}(t,e)}function RE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=cg(s.transform,r||null);i!=null&&(n==null&&(n=Ke.empty()),n.set(s.field,i))}return n||null}function zh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ls(n,s,(r,i)=>DE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Gh(t){return t.isFoundDocument()?t.version:V.min()}class wi extends aa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class rs extends aa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function dg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Wh(t,e,n){const s=new Map;B(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,NE(o,a,n[r]))}return s}function Qh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,AE(i,o,e))}return s}class vi extends aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Hu extends aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,z;function fg(t){switch(t){default:return M();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function pg(t){if(t===void 0)return we("GRPC error has no .code"),m.UNKNOWN;switch(t){case ye.OK:return m.OK;case ye.CANCELLED:return m.CANCELLED;case ye.UNKNOWN:return m.UNKNOWN;case ye.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ye.INTERNAL:return m.INTERNAL;case ye.UNAVAILABLE:return m.UNAVAILABLE;case ye.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ye.NOT_FOUND:return m.NOT_FOUND;case ye.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ye.ABORTED:return m.ABORTED;case ye.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ye.DATA_LOSS:return m.DATA_LOSS;default:return M()}}(z=ye||(ye={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Me.RED,this.left=r!=null?r:Me.EMPTY,this.right=i!=null?i:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Me(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yh(this.data.getIterator())}getIteratorFrom(e){return new Yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ce(this.comparator);return n.data=e,n}}class Yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ms(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new me(k.comparator);function yt(){return ME}const LE=new me(k.comparator);function Cc(){return LE}const FE=new me(k.comparator),VE=new ce(k.comparator);function J(...t){let e=VE;for(const n of t)e=e.add(n);return e}const UE=new ce(H);function ca(){return UE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,n)),new bi(V.min(),s,ca(),yt(),J())}}class Ii{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ii(Te.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,s,r){this.M=e,this.removedTargetIds=n,this.key=s,this.$=r}}class gg{constructor(e,n){this.targetId=e,this.F=n}}class mg{constructor(e,n,s=Te.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Xh{constructor(){this.B=0,this.L=Zh(),this.U=Te.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=J(),n=J(),s=J();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:M()}}),new Ii(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Zh()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class BE{constructor(e){this.nt=e,this.st=new Map,this.it=yt(),this.rt=Jh(),this.ot=new ce(H)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.F.count,r=this.wt(n);if(r){const i=r.target;if(To(i))if(s===0){const o=new k(i.path);this.at(n,o,ue.newNoDocument(o,V.min()))}else B(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&To(a.target)){const c=new k(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,ue.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=J();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new bi(e,n,this.ot,this.it,s);return this.it=yt(),this.rt=Jh(),this.ot=new ce(H),r}ut(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Xh,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new ce(H),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||_("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Xh),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Jh(){return new me(k.comparator)}function Zh(){return new me(k.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jE{constructor(e,n){this.databaseId=e,this.N=n}}function Qr(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yg(t,e){return t.N?e.toBase64():e.toUint8Array()}function KE(t,e){return Qr(t,e.toTimestamp())}function De(t){return B(!!t),V.fromTimestamp(function(e){const n=gn(e);return new Ne(n.seconds,n.nanos)}(t))}function zu(t,e){return function(n){return new X(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function wg(t){const e=X.fromString(t);return B(xg(e)),e}function Yr(t,e){return zu(t.databaseId,e.path)}function Ot(t,e){const n=wg(e);if(n.get(1)!==t.databaseId.projectId)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new k(bg(n))}function Ac(t,e){return zu(t.databaseId,e)}function vg(t){const e=wg(t);return e.length===4?X.emptyPath():bg(e)}function Xr(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bg(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ed(t,e,n){return{name:Yr(t,e),fields:n.value.mapValue.fields}}function Ig(t,e,n){const s=Ot(t,e.name),r=De(e.updateTime),i=new Ke({mapValue:{fields:e.fields}}),o=ue.newFoundDocument(s,r,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function HE(t,e){return"found"in e?function(n,s){B(!!s.found),s.found.name,s.found.updateTime;const r=Ot(n,s.found.name),i=De(s.found.updateTime),o=new Ke({mapValue:{fields:s.found.fields}});return ue.newFoundDocument(r,i,o)}(t,e):"missing"in e?function(n,s){B(!!s.missing),B(!!s.readTime);const r=Ot(n,s.missing),i=De(s.readTime);return ue.newNoDocument(r,i)}(t,e):M()}function zE(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.N?(B(u===void 0||typeof u=="string"),Te.fromBase64String(u||"")):(B(u===void 0||u instanceof Uint8Array),Te.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:pg(c.code);return new E(u,c.message||"")}(o);n=new mg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ot(t,s.document.name),i=De(s.document.updateTime),o=new Ke({mapValue:{fields:s.document.fields}}),a=ue.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Zi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ot(t,s.document),i=s.readTime?De(s.readTime):V.min(),o=ue.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Zi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ot(t,s.document),i=s.removedTargetIds||[];n=new Zi([],i,r,null)}else{if(!("filter"in e))return M();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new PE(r),o=s.targetId;n=new gg(o,i)}}return n}function Jr(t,e){let n;if(e instanceof wi)n={update:ed(t,e.key,e.value)};else if(e instanceof vi)n={delete:Yr(t,e.key)};else if(e instanceof rs)n={update:ed(t,e.key,e.data),updateMask:ZE(e.fieldMask)};else{if(!(e instanceof Hu))return M();n={verify:Yr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $s)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Wn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qs)return{fieldPath:i.field.canonicalString(),increment:o.k};throw M()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:KE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:M()}(t,e.precondition)),n}function Nc(t,e){const n=e.currentDocument?function(r){return r.updateTime!==void 0?ve.updateTime(De(r.updateTime)):r.exists!==void 0?ve.exists(r.exists):ve.none()}(e.currentDocument):ve.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)B(o.setToServerValue==="REQUEST_TIME"),a=new $s;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Wn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Qn(u)}else"increment"in o?a=new qs(i,o.increment):M();const c=xe.fromServerFormat(o.fieldPath);return new yi(c,a)}(t,r)):[];if(e.update){e.update.name;const r=Ot(t,e.update.name),i=new Ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Fs(c.map(u=>xe.fromServerFormat(u)))}(e.updateMask);return new rs(r,i,o,n,s)}return new wi(r,i,n,s)}if(e.delete){const r=Ot(t,e.delete);return new vi(r,n)}if(e.verify){const r=Ot(t,e.verify);return new Hu(r,n)}return M()}function GE(t,e){return t&&t.length>0?(B(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?De(s.updateTime):De(r);return i.isEqual(V.min())&&(i=De(r)),new OE(i,s.transformResults||[])}(n,e))):[]}function Eg(t,e){return{documents:[Ac(t,e.path)]}}function Tg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ac(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ac(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if($h(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NAN"}};if(Bh(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if($h(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NOT_NAN"}};if(Bh(h.value))return{unaryFilter:{field:ys(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(h.field),op:YE(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ys(l.field),direction:QE(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.N||ss(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function _g(t){let e=vg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){B(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Sg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ds(Ss(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ss(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Us(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Us(f,h)}(n.endAt)),tg(e,r,o,i,a,"F",c,u)}function WE(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sg(t){return t?t.unaryFilter!==void 0?[JE(t)]:t.fieldFilter!==void 0?[XE(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Sg(e)).reduce((e,n)=>e.concat(n)):M():[]}function QE(t){return $E[t]}function YE(t){return qE[t]}function ys(t){return{fieldPath:t.canonicalString()}}function Ss(t){return xe.fromServerFormat(t.fieldPath)}function XE(t){return et.create(Ss(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}function JE(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ss(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ss(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(t.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ss(t.unaryFilter.field);return et.create(r,"!=",{nullValue:"NULL_VALUE"});default:return M()}}function ZE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=td(e)),e=e0(t.get(n),e);return td(e)}function e0(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function td(t){return t+""}function At(t){const e=t.length;if(B(e>=2),e===2)return B(t.charAt(0)===""&&t.charAt(1)===""),X.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&M(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=t.substring(i,o),r+="\0";break;case"":r+=t.substring(i,o+1);break;default:M()}i=o+2}return new X(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class at{constructor(e,n,s){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=s}}at.store="owner",at.key="owner";class ln{constructor(e,n,s){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=s}}ln.store="mutationQueues",ln.keyPath="userId";class re{constructor(e,n,s,r,i){this.userId=e,this.batchId=n,this.localWriteTimeMs=s,this.baseMutations=r,this.mutations=i}}re.store="mutations",re.keyPath="batchId",re.userMutationsIndex="userMutationsIndex",re.userMutationsKeyPath=["userId","batchId"];class qe{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Ce(n)]}static key(e,n,s){return[e,Ce(n),s]}}qe.store="documentMutations",qe.PLACEHOLDER=new qe;class n0{constructor(e,n){this.path=e,this.readTime=n}}class s0{constructor(e,n){this.path=e,this.version=n}}class he{constructor(e,n,s,r,i,o){this.unknownDocument=e,this.noDocument=n,this.document=s,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}he.store="remoteDocuments",he.readTimeIndex="readTimeIndex",he.readTimeIndexPath="readTime",he.collectionReadTimeIndex="collectionReadTimeIndex",he.collectionReadTimeIndexPath=["parentPath","readTime"];class Nt{constructor(e){this.byteSize=e}}Nt.store="remoteDocumentGlobal",Nt.key="remoteDocumentGlobalKey";class it{constructor(e,n,s,r,i,o,a){this.targetId=e,this.canonicalId=n,this.readTime=s,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}}it.store="targets",it.keyPath="targetId",it.queryTargetsIndexName="queryTargetsIndex",it.queryTargetsKeyPath=["canonicalId","targetId"];class Le{constructor(e,n,s){this.targetId=e,this.path=n,this.sequenceNumber=s}}Le.store="targetDocuments",Le.keyPath=["targetId","path"],Le.documentTargetsIndex="documentTargetsIndex",Le.documentTargetsKeyPath=["path","targetId"];class ct{constructor(e,n,s,r){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=s,this.targetCount=r}}ct.key="targetGlobalKey",ct.store="targetGlobal";class Fn{constructor(e,n){this.collectionId=e,this.parent=n}}Fn.store="collectionParents",Fn.keyPath=["collectionId","parent"];class jt{constructor(e,n,s,r){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=s,this.inForeground=r}}jt.store="clientMetadata",jt.keyPath="clientId";class js{constructor(e,n,s){this.bundleId=e,this.createTime=n,this.version=s}}js.store="bundles",js.keyPath="bundleId";class Ks{constructor(e,n,s){this.name=e,this.readTime=n,this.bundledQuery=s}}Ks.store="namedQueries",Ks.keyPath="name";class ht{constructor(e,n,s){this.indexId=e,this.collectionGroup=n,this.fields=s}}ht.store="indexConfiguration",ht.keyPath="indexId",ht.collectionGroupIndex="collectionGroupIndex",ht.collectionGroupIndexPath="collectionGroup";class pt{constructor(e,n,s,r,i,o){this.indexId=e,this.uid=n,this.sequenceNumber=s,this.readTime=r,this.documentKey=i,this.largestBatchId=o}}pt.store="indexState",pt.keyPath=["indexId","uid"],pt.sequenceNumberIndex="sequenceNumberIndex",pt.sequenceNumberIndexPath=["uid","sequenceNumber"];class gt{constructor(e,n,s,r,i){this.indexId=e,this.uid=n,this.arrayValue=s,this.directionalValue=r,this.documentKey=i}}gt.store="indexEntries",gt.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],gt.documentKeyIndex="documentKeyIndex",gt.documentKeyIndexPath=["indexId","uid","documentKey"];class Se{constructor(e,n,s,r,i,o){this.userId=e,this.collectionPath=n,this.documentId=s,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=o}}Se.store="documentOverlays",Se.keyPath=["userId","collectionPath","documentId"],Se.collectionPathOverlayIndex="collectionPathOverlayIndex",Se.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],Se.collectionGroupOverlayIndex="collectionGroupOverlayIndex",Se.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const Cg=[ln.store,re.store,qe.store,he.store,it.store,at.store,ct.store,Le.store,jt.store,Nt.store,Fn.store,js.store,Ks.store],Ag=[...Cg,Se.store],r0=[...Ag,ht.store,pt.store,gt.store];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,s)=>{n(e)})}static reject(e){return new y((n,s)=>{s(e)})}static waitFor(e){return new y((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=y.resolve(!1);for(const s of e)n=n.next(r=>r?y.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.At=new Ae,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{n.error?this.At.reject(new Dr(e,n.error)):this.At.resolve()},this.transaction.onerror=s=>{const r=Gu(s.target.error);this.At.reject(new Dr(e,r))}}static open(e,n,s,r){try{return new ua(n,e.transaction(r,s))}catch(i){throw new Dr(n,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new o0(n)}}class bt{constructor(e,n,s){this.name=e,this.version=n,this.bt=s,bt.vt(Un())===12.2&&we("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),An(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!Pf())return!1;if(bt.St())return!0;const e=Un(),n=bt.vt(e),s=0<n&&n<10,r=bt.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static Nt(e,n){return e.store(n)}static vt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static Dt(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async xt(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;n(o)},r.onblocked=()=>{s(new Dr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new E(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new E(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Dr(e,o))},r.onupgradeneeded=i=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.bt.kt(o,r.transaction,i.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Ot&&(this.db.onversionchange=n=>this.Ot(n)),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,r){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.xt(e);const a=ua.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.Pt(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class i0{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return An(this.$t.delete())}}class Dr extends E{constructor(e,n){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function is(t){return t.name==="IndexedDbTransactionError"}class o0{constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(_("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),An(s)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),An(this.store.add(e))}get(e){return An(this.store.get(e)).next(n=>(n===void 0&&(n=null),_("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),An(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),An(this.store.count())}qt(e,n){const s=this.options(e,n);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.Kt(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new y((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}Gt(e,n){_("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.jt=!1;const r=this.cursor(s);return this.Kt(r,(i,o,a)=>a.delete())}Qt(e,n){let s;n?s=e:(s={},n=e);const r=this.cursor(s);return this.Kt(r,n)}Wt(e){const n=this.cursor({});return new y((s,r)=>{n.onerror=i=>{const o=Gu(i.target.error);r(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}Kt(e,n){const s=[];return new y((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new i0(a),u=n(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));s.push(l)}c.isDone?r():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>y.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.jt?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function An(t){return new y((e,n)=>{t.onsuccess=s=>{const r=s.target.result;e(r)},t.onerror=s=>{const r=Gu(s.target.error);n(r)}})}let nd=!1;function Gu(t){const e=bt.vt(Un());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return nd||(nd=!0,setTimeout(()=>{throw s},0)),s}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends Dg{constructor(e,n){super(),this.zt=e,this.currentSequenceNumber=n}}function ke(t,e){const n=A(t);return bt.Nt(n.zt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kE(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&xc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&xc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,s)=>zh(n,s))&&Ls(this.baseMutations,e.baseMutations,(n,s)=>zh(n,s))}}class Qu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){B(e.mutations.length===s.length);let r=FE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Qu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,s,r,i=V.min(),o=V.min(),a=Te.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.Ht=e}}function kg(t,e){let n;if(e.document)n=Ig(t.Ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=k.fromSegments(e.noDocument.path),r=Xn(e.noDocument.readTime);n=ue.newNoDocument(s,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const s=k.fromSegments(e.unknownDocument.path),r=Xn(e.unknownDocument.version);n=ue.newUnknownDocument(s,r)}}return e.readTime&&n.setReadTime(Ju(e.readTime)),n}function rd(t,e){const n=Xu(e.readTime),s=e.key.path.popLast().toArray();if(e.isFoundDocument()){const r=function(o,a){return{name:Yr(o,a.key),fields:a.data.value.mapValue.fields,updateTime:Qr(o,a.version.toTimestamp())}}(t.Ht,e),i=e.hasCommittedMutations;return new he(null,null,r,i,n,s)}if(e.isNoDocument()){const r=e.key.path.toArray(),i=Yn(e.version),o=e.hasCommittedMutations;return new he(null,new n0(r,i),null,o,n,s)}if(e.isUnknownDocument()){const r=e.key.path.toArray(),i=Yn(e.version);return new he(new s0(r,i),null,null,!0,n,s)}return M()}function Xu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ju(t){const e=new Ne(t[0],t[1]);return V.fromTimestamp(e)}function Yn(t){const e=t.toTimestamp();return new t0(e.seconds,e.nanoseconds)}function Xn(t){const e=new Ne(t.seconds,t.nanoseconds);return V.fromTimestamp(e)}function Is(t,e){const n=(e.baseMutations||[]).map(i=>Nc(t.Ht,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Nc(t.Ht,i)),r=Ne.fromMillis(e.localWriteTimeMs);return new Wu(e.batchId,r,n,s)}function Tr(t){const e=Xn(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Xn(t.lastLimboFreeSnapshotVersion):V.min();let s;var r;return t.query.documents!==void 0?(B((r=t.query).documents.length===1),s=wt(ir(vg(r.documents[0])))):s=function(i){return wt(_g(i))}(t.query),new hn(s,t.targetId,0,t.lastListenSequenceNumber,e,n,Te.fromBase64String(t.resumeToken))}function Rg(t,e){const n=Yn(e.snapshotVersion),s=Yn(e.lastLimboFreeSnapshotVersion);let r;r=To(e.target)?Eg(t.Ht,e.target):Tg(t.Ht,e.target);const i=e.resumeToken.toBase64();return new it(e.targetId,gi(e.target),n,i,e.sequenceNumber,s,r)}function Zu(t){const e=_g({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ng(e,e.limit,"L"):e}function qa(t,e){return new Yu(e.largestBatchId,Nc(t.Ht,e.overlayMutation))}function id(t,e){const n=e.path.lastSegment();return[t,Ce(e.path.popLast()),n]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{getBundleMetadata(e,n){return od(e).get(n).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Xn(r.createTime),version:r.version};var r})}saveBundleMetadata(e,n){return od(e).put({bundleId:(s=n).id,createTime:Yn(De(s.createTime)),version:s.version});var s}getNamedQuery(e,n){return ad(e).get(n).next(s=>{if(s)return{name:(r=s).name,query:Zu(r.bundledQuery),readTime:Xn(r.readTime)};var r})}saveNamedQuery(e,n){return ad(e).put(function(s){return{name:s.name,readTime:Yn(De(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function od(t){return ke(t,js.store)}function ad(t){return ke(t,Ks.store)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.O=e,this.userId=n}static Jt(e,n){const s=n.uid||"";return new el(e,s)}getOverlay(e,n){return wr(e).get(id(this.userId,n)).next(s=>s?qa(this.O,s):null)}saveOverlays(e,n,s){const r=[];return s.forEach(i=>{const o=new Yu(n,i);r.push(this.Yt(e,o))}),y.waitFor(r)}removeOverlaysForBatchId(e,n,s){const r=new Set;n.forEach(o=>r.add(Ce(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(wr(e).Gt(Se.collectionPathOverlayIndex,a))}),y.waitFor(i)}getOverlaysForCollection(e,n,s){const r=new Map,i=Ce(n),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return wr(e).qt(Se.collectionPathOverlayIndex,o).next(a=>{for(const c of a){const u=qa(this.O,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,n,s,r){const i=new Map;let o;const a=IDBKeyRange.bound([this.userId,n,s],[this.userId,n,Number.POSITIVE_INFINITY],!0);return wr(e).Qt({index:Se.collectionGroupOverlayIndex,range:a},(c,u,l)=>{const h=qa(this.O,u);i.size<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}Yt(e,n){return wr(e).put(function(s,r,i){const[o,a,c]=id(r,i.mutation.key);return new Se(r,a,c,i.mutation.key.getCollectionGroup(),i.largestBatchId,Jr(s.Ht,i.mutation))}(this.O,this.userId,n))}}function wr(t){return ke(t,Se.store)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){}Xt(e,n){this.Zt(e,n),n.te()}Zt(e,n){if("nullValue"in e)this.ee(n,5);else if("booleanValue"in e)this.ee(n,10),n.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(n,15),n.ne(de(e.integerValue));else if("doubleValue"in e){const s=de(e.doubleValue);isNaN(s)?this.ee(n,13):(this.ee(n,15),Gr(s)?n.ne(0):n.ne(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ee(n,20),typeof s=="string"?n.se(s):(n.se(`${s.seconds||""}`),n.ne(s.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,n),this.re(n);else if("bytesValue"in e)this.ee(n,30),n.oe(Hn(e.bytesValue)),this.re(n);else if("referenceValue"in e)this.ce(e.referenceValue,n);else if("geoPointValue"in e){const s=e.geoPointValue;this.ee(n,45),n.ne(s.latitude||0),n.ne(s.longitude||0)}else"mapValue"in e?Tt(e,gE)?this.ee(n,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,n),this.re(n)):"arrayValue"in e?(this.ae(e.arrayValue,n),this.re(n)):M()}ie(e,n){this.ee(n,25),this.he(e,n)}he(e,n){n.se(e)}ue(e,n){const s=e.fields||{};this.ee(n,55);for(const r of Object.keys(s))this.ie(r,n),this.Zt(s[r],n)}ae(e,n){const s=e.values||[];this.ee(n,50);for(const r of s)this.Zt(r,n)}ce(e,n){this.ee(n,37),k.fromName(e).path.forEach(s=>{this.ee(n,60),this.he(s,n)})}ee(e,n){e.ne(n)}re(e){e.ne(2)}}So.le=new So;function c0(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function cd(t){const e=64-function(n){let s=0;for(let r=0;r<8;++r){const i=c0(255&n[r]);if(s+=i,i!==8)break}return s}(t);return Math.ceil(e/8)}class u0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.de(s.value),s=n.next();this._e()}we(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.me(s.value),s=n.next();this.ge()}ye(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.de(s);else if(s<2048)this.de(960|s>>>6),this.de(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.de(480|s>>>12),this.de(128|63&s>>>6),this.de(128|63&s);else{const r=n.codePointAt(0);this.de(240|r>>>18),this.de(128|63&r>>>12),this.de(128|63&r>>>6),this.de(128|63&r)}}this._e()}pe(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.me(s);else if(s<2048)this.me(960|s>>>6),this.me(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.me(480|s>>>12),this.me(128|63&s>>>6),this.me(128|63&s);else{const r=n.codePointAt(0);this.me(240|r>>>18),this.me(128|63&r>>>12),this.me(128|63&r>>>6),this.me(128|63&r)}}this.ge()}Ie(e){const n=this.Ee(e),s=cd(n);this.Te(1+s),this.buffer[this.position++]=255&s;for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=255&n[r]}Ae(e){const n=this.Ee(e),s=cd(n);this.Te(1+s),this.buffer[this.position++]=~(255&s);for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const n=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&n[0])!=0;n[0]^=s?255:128;for(let r=1;r<n.length;++r)n[r]^=s?255:0;return n}de(e){const n=255&e;n===0?(this.Pe(0),this.Pe(255)):n===255?(this.Pe(255),this.Pe(0)):this.Pe(n)}me(e){const n=255&e;n===0?(this.ve(0),this.ve(255)):n===255?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const n=e+this.position;if(n<=this.buffer.length)return;let s=2*this.buffer.length;s<n&&(s=n);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class l0{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class h0{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class ud{constructor(){this.Se=new u0,this.De=new l0(this.Se),this.Ce=new h0(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return e===0?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,s,r){this.indexId=e,this.documentKey=n,this.arrayValue=s,this.directionalValue=r}}function Ka(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=k.comparator(t.documentKey,e.documentKey),n!==0?n:(n=ld(t.arrayValue,e.arrayValue),n!==0?n:ld(t.directionalValue,e.directionalValue)))}function ld(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(s!==0)return s}return t.length-e.length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.xe=new tl}addToCollectionParentIndex(e,n){return this.xe.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n,s){return y.resolve(J())}getFieldIndex(e,n){return y.resolve(null)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}updateCollectionGroup(e,n,s){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class tl{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ce(X.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ce(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.user=e,this.ke=new tl,this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.ke.has(n)){const s=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.ke.add(n)});const i={collectionId:s,parent:Ce(r)};return hd(e).put(i)}return y.resolve()}getCollectionParents(e,n){const s=[],r=IDBKeyRange.bound([n,""],[Wp(n),""],!1,!0);return hd(e).qt(r).next(i=>{for(const o of i){if(o.collectionId!==n)break;s.push(At(o.parent))}return s})}addFieldIndex(e,n){const s=qi(e),r=function(i){return new ht(i.indexId,i.collectionGroup,i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind]))}(n);return delete r.indexId,s.add(r).next()}deleteFieldIndex(e,n){const s=qi(e),r=ji(e),i=$i(e);return s.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n,s){return y.resolve(J())}getFieldIndex(e,n){return y.resolve(null)}Oe(e,n){const s=new ud;for(const r of function(i){return i.fields.filter(o=>o.kind!==2)}(e)){const i=n.data.field(r.fieldPath);if(i==null)return null;const o=s.Ne(r.kind);So.le.Xt(i,o)}return s.Ve()}Me(e){const n=new ud;return So.le.Xt(e,n.Ne(0)),n.Ve()}getFieldIndexes(e,n){const s=qi(e),r=ji(e);return(n?s.qt(ht.collectionGroupIndex,IDBKeyRange.bound(n,n)):s.qt()).next(i=>{const o=[];return y.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Eo(l.sequenceNumber,new ra(Xn(l.readTime),new k(At(l.documentKey)),l.largestBatchId)):Eo.empty(),f=u.fields.map(([g,v])=>new mE(xe.fromServerFormat(g),v));return new Zp(u.indexId,u.collectionGroup,f,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((s,r)=>s.indexState.sequenceNumber-r.indexState.sequenceNumber),n[0].collectionGroup))}updateCollectionGroup(e,n,s){const r=qi(e),i=ji(e);return this.$e(e).next(o=>r.qt(ht.collectionGroupIndex,IDBKeyRange.bound(n,n)).next(a=>y.forEach(a,c=>i.put(function(u,l,h,f){return new pt(u,l.uid||"",h,Yn(f.readTime),Ce(f.documentKey.path),f.largestBatchId)}(c.indexId,this.user,o,s)))))}updateIndexEntries(e,n){const s=new Map;return y.forEach(n,(r,i)=>{const o=s.get(r.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),y.forEach(a,c=>this.Fe(e,r,c).next(u=>{const l=this.Be(i,c);return u.isEqual(l)?y.resolve():this.Le(e,i,u,l)}))))})}Ue(e,n,s){return $i(e).put(new gt(s.indexId,this.uid,s.arrayValue,s.directionalValue,Ce(n.key.path)))}qe(e,n,s){return $i(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,Ce(n.key.path)])}Fe(e,n,s){const r=$i(e);let i=new ce(Ka);return r.Qt({index:gt.documentKeyIndex,range:IDBKeyRange.only([s.indexId,this.uid,Ce(n.path)])},(o,a)=>{i=i.add(new ja(s.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}Be(e,n){let s=new ce(Ka);const r=this.Oe(n,e);if(r==null)return s;const i=function(o){return o.fields.find(a=>a.kind===2)}(n);if(i!=null){const o=e.data.field(i.fieldPath);if(sa(o))for(const a of o.arrayValue.values||[])s=s.add(new ja(n.indexId,e.key,this.Me(a),r))}else s=s.add(new ja(n.indexId,e.key,new Uint8Array,r));return s}Le(e,n,s,r){_("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const i=[];return function(o,a,c,u,l){const h=o.getIterator(),f=a.getIterator();let g=ms(h),v=ms(f);for(;g||v;){let N=!1,D=!1;if(g&&v){const U=c(g,v);U<0?D=!0:U>0&&(N=!0)}else g!=null?D=!0:N=!0;N?(u(v),v=ms(f)):D?(l(g),g=ms(h)):(g=ms(h),v=ms(f))}}(s,r,Ka,o=>{i.push(this.Ue(e,n,o))},o=>{i.push(this.qe(e,n,o))}),y.waitFor(i)}$e(e){let n=1;return ji(e).Qt({index:pt.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),n=r.sequenceNumber+1}).next(()=>n)}}function hd(t){return ke(t,Fn.store)}function $i(t){return ke(t,gt.store)}function qi(t){return ke(t,ht.store)}function ji(t){return ke(t,pt.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rt{constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e,n){const s=t.store(re.store),r=t.store(qe.store),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.Qt({range:o},(l,h,f)=>(a++,f.delete()));i.push(c.next(()=>{B(a===1)}));const u=[];for(const l of n.mutations){const h=qe.key(e,l.key.path,n.batchId);i.push(r.delete(h)),u.push(l.key)}return y.waitFor(i).next(()=>u)}function xo(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw M();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(41943040,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);class nl{constructor(e,n,s,r){this.userId=e,this.O=n,this.indexManager=s,this.referenceDelegate=r,this.Ke={}}static Jt(e,n,s,r){B(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new nl(i,n,s,r)}checkEmpty(e){let n=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zt(e).Qt({index:re.userMutationsIndex,range:s},(r,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,s,r){const i=Es(e),o=Zt(e);return o.add({}).next(a=>{B(typeof a=="number");const c=new Wu(a,n,s,r),u=function(f,g,v){const N=v.baseMutations.map(U=>Jr(f.Ht,U)),D=v.mutations.map(U=>Jr(f.Ht,U));return new re(g,v.batchId,v.localWriteTime.toMillis(),N,D)}(this.O,this.userId,c),l=[];let h=new ce((f,g)=>H(f.canonicalString(),g.canonicalString()));for(const f of r){const g=qe.key(this.userId,f.key.path,a);h=h.add(f.key.path.popLast()),l.push(o.put(u)),l.push(i.put(g,qe.PLACEHOLDER))}return h.forEach(f=>{l.push(this.indexManager.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Ke[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Zt(e).get(n).next(s=>s?(B(s.userId===this.userId),Is(this.O,s)):null)}Ge(e,n){return this.Ke[n]?y.resolve(this.Ke[n]):this.lookupMutationBatch(e,n).next(s=>{if(s){const r=s.keys();return this.Ke[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Zt(e).Qt({index:re.userMutationsIndex,range:r},(o,a,c)=>{a.userId===this.userId&&(B(a.batchId>=s),i=Is(this.O,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Zt(e).Qt({index:re.userMutationsIndex,range:n,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zt(e).qt(re.userMutationsIndex,n).next(s=>s.map(r=>Is(this.O,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const s=qe.prefixForPath(this.userId,n.path),r=IDBKeyRange.lowerBound(s),i=[];return Es(e).Qt({range:r},(o,a,c)=>{const[u,l,h]=o,f=At(l);if(u===this.userId&&n.path.isEqual(f))return Zt(e).get(h).next(g=>{if(!g)throw M();B(g.userId===this.userId),i.push(Is(this.O,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ce(H);const r=[];return n.forEach(i=>{const o=qe.prefixForPath(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Es(e).Qt({range:a},(u,l,h)=>{const[f,g,v]=u,N=At(g);f===this.userId&&i.path.isEqual(N)?s=s.add(v):h.done()});r.push(c)}),y.waitFor(r).next(()=>this.je(e,s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1,i=qe.prefixForPath(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new ce(H);return Es(e).Qt({range:o},(c,u,l)=>{const[h,f,g]=c,v=At(f);h===this.userId&&s.isPrefixOf(v)?v.length===r&&(a=a.add(g)):l.done()}).next(()=>this.je(e,a))}je(e,n){const s=[],r=[];return n.forEach(i=>{r.push(Zt(e).get(i).next(o=>{if(o===null)throw M();B(o.userId===this.userId),s.push(Is(this.O,o))}))}),y.waitFor(r).next(()=>s)}removeMutationBatch(e,n){return Pg(e.zt,this.userId,n).next(s=>(e.addOnCommittedListener(()=>{this.Qe(n.batchId)}),y.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return y.resolve();const s=IDBKeyRange.lowerBound(qe.prefixForUser(this.userId)),r=[];return Es(e).Qt({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=At(i[1]);r.push(c)}else a.done()}).next(()=>{B(r.length===0)})})}containsKey(e,n){return Mg(e,this.userId,n)}We(e){return Lg(e).get(this.userId).next(n=>n||new ln(this.userId,-1,""))}}function Mg(t,e,n){const s=qe.prefixForPath(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Es(t).Qt({range:i,jt:!0},(a,c,u)=>{const[l,h,f]=a;l===e&&h===r&&(o=!0),u.done()}).next(()=>o)}function Zt(t){return ke(t,re.store)}function Es(t){return ke(t,qe.store)}function Lg(t){return ke(t,ln.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new Jn(0)}static Je(){return new Jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n){this.referenceDelegate=e,this.O=n}allocateTargetId(e){return this.Ye(e).next(n=>{const s=new Jn(n.highestTargetId);return n.highestTargetId=s.next(),this.Xe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ye(e).next(n=>V.fromTimestamp(new Ne(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ye(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,s){return this.Ye(e).next(r=>(r.highestListenSequenceNumber=n,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.Xe(e,r)))}addTargetData(e,n){return this.Ze(e,n).next(()=>this.Ye(e).next(s=>(s.targetCount+=1,this.tn(n,s),this.Xe(e,s))))}updateTargetData(e,n){return this.Ze(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ws(e).delete(n.targetId)).next(()=>this.Ye(e)).next(s=>(B(s.targetCount>0),s.targetCount-=1,this.Xe(e,s)))}removeTargets(e,n,s){let r=0;const i=[];return ws(e).Qt((o,a)=>{const c=Tr(a);c.sequenceNumber<=n&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(i)).next(()=>r)}forEachTarget(e,n){return ws(e).Qt((s,r)=>{const i=Tr(r);n(i)})}Ye(e){return fd(e).get(ct.key).next(n=>(B(n!==null),n))}Xe(e,n){return fd(e).put(ct.key,n)}Ze(e,n){return ws(e).put(Rg(this.O,n))}tn(e,n){let s=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,s=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Ye(e).next(n=>n.targetCount)}getTargetData(e,n){const s=gi(n),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return ws(e).Qt({range:r,index:it.queryTargetsIndexName},(o,a,c)=>{const u=Tr(a);ia(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,s){const r=[],i=rn(e);return n.forEach(o=>{const a=Ce(o.path);r.push(i.put(new Le(s,a))),r.push(this.referenceDelegate.addReference(e,s,o))}),y.waitFor(r)}removeMatchingKeys(e,n,s){const r=rn(e);return y.forEach(n,i=>{const o=Ce(i.path);return y.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,n){const s=rn(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,n){const s=IDBKeyRange.bound([n],[n+1],!1,!0),r=rn(e);let i=J();return r.Qt({range:s,jt:!0},(o,a,c)=>{const u=At(o[1]),l=new k(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const s=Ce(n.path),r=IDBKeyRange.bound([s],[Wp(s)],!1,!0);let i=0;return rn(e).Qt({index:Le.documentTargetsIndex,jt:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Tt(e,n){return ws(e).get(n).next(s=>s?Tr(s):null)}}function ws(t){return ke(t,it.store)}function fd(t){return ke(t,ct.store)}function rn(t){return ke(t,Le.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Ng)throw t;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd([t,e],[n,s]){const r=H(t,n);return r===0?H(e,s):r}class g0{constructor(e){this.en=e,this.buffer=new ce(pd),this.nn=0}sn(){return++this.nn}rn(e){const n=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();pd(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class m0{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.on=!1,this.cn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return this.cn!==null}un(e){const n=this.on?3e5:6e4;_("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(s){is(s)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",s):await os(s)}await this.un(e)})}}class y0{constructor(e,n){this.an=e,this.params=n}calculateTargetCount(e,n){return this.an.hn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return y.resolve(lt.A);const s=new g0(n);return this.an.forEachTarget(e,r=>s.rn(r.sequenceNumber)).next(()=>this.an.ln(e,r=>s.rn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.an.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.an.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(dd)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dd):this.fn(e,n))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,n){let s,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(u=Date.now(),Ec()<=Y.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),y.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.db=e,this.garbageCollector=function(s,r){return new y0(s,r)}(this,n)}hn(e){const n=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}dn(e){let n=0;return this.ln(e,s=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ln(e,n){return this._n(e,(s,r)=>n(r))}addReference(e,n,s){return Ki(e,s)}removeReference(e,n,s){return Ki(e,s)}removeTargets(e,n,s){return this.db.getTargetCache().removeTargets(e,n,s)}markPotentiallyOrphaned(e,n){return Ki(e,n)}wn(e,n){return function(s,r){let i=!1;return Lg(s).Wt(o=>Mg(s,o,r).next(a=>(a&&(i=!0),y.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._n(e,(o,a)=>{if(a<=n){const c=this.wn(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,V.min()),rn(e).delete([0,Ce(o.path)])))});r.push(c)}}).next(()=>y.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,n){return Ki(e,n)}_n(e,n){const s=rn(e);let r,i=lt.A;return s.Qt({index:Le.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==lt.A&&n(new k(At(r)),i),i=u,r=c):i=lt.A}).next(()=>{i!==lt.A&&n(new k(At(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ki(t,e){return rn(t).put(function(n,s){return new Le(0,Ce(n.path),s)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){ns(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Qp(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.changes=new or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?y.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,s){return sn(e).put(Hi(n),s)}removeEntry(e,n){const s=sn(e),r=Hi(n);return s.delete(r)}updateMetadata(e,n){return this.getMetadata(e).next(s=>(s.byteSize+=n,this.mn(e,s)))}getEntry(e,n){return sn(e).get(Hi(n)).next(s=>this.gn(n,s))}yn(e,n){return sn(e).get(Hi(n)).next(s=>({document:this.gn(n,s),size:xo(s)}))}getEntries(e,n){let s=yt();return this.pn(e,n,(r,i)=>{const o=this.gn(r,i);s=s.insert(r,o)}).next(()=>s)}In(e,n){let s=yt(),r=new me(k.comparator);return this.pn(e,n,(i,o)=>{const a=this.gn(i,o);s=s.insert(i,a),r=r.insert(i,xo(o))}).next(()=>({documents:s,En:r}))}pn(e,n,s){if(n.isEmpty())return y.resolve();const r=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),i=n.getIterator();let o=i.getNext();return sn(e).Qt({range:r},(a,c,u)=>{const l=k.fromSegments(a);for(;o&&k.comparator(o,l)<0;)s(o,null),o=i.getNext();o&&o.isEqual(l)&&(s(o,c),o=i.hasNext()?i.getNext():null),o?u.Ut(o.path.toArray()):u.done()}).next(()=>{for(;o;)s(o,null),o=i.hasNext()?i.getNext():null})}getAll(e,n,s){let r=yt();const i=n.length+1,o={};if(s.isEqual(V.min())){const a=n.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.toArray(),c=Xu(s);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=he.collectionReadTimeIndex}return sn(e).Qt(o,(a,c,u)=>{if(a.length!==i)return;const l=this.gn(k.fromSegments(a),c);n.isPrefixOf(l.key.path)?r=r.insert(l.key,l):u.done()}).next(()=>r)}newChangeBuffer(e){return new b0(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return gd(e).get(Nt.key).next(n=>(B(!!n),n))}mn(e,n){return gd(e).put(Nt.key,n)}gn(e,n){if(n){const s=kg(this.O,n);if(!(s.isNoDocument()&&s.version.isEqual(V.min())))return s}return ue.newInvalidDocument(e)}}class b0 extends Fg{constructor(e,n){super(),this.Tn=e,this.trackRemovals=n,this.An=new or(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const n=[];let s=0,r=new ce((i,o)=>H(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.An.get(i);if(o.isValidDocument()){const c=rd(this.Tn.O,o);r=r.add(i.path.popLast()),s+=xo(c)-a,n.push(this.Tn.addEntry(e,i,c))}else if(s-=a,this.trackRemovals){const c=rd(this.Tn.O,o.convertToNoDocument(V.min()));n.push(this.Tn.addEntry(e,i,c))}else n.push(this.Tn.removeEntry(e,i))}),r.forEach(i=>{n.push(this.Tn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Tn.updateMetadata(e,s)),y.waitFor(n)}getFromCache(e,n){return this.Tn.yn(e,n).next(s=>(this.An.set(n,s.size),s.document))}getAllFromCache(e,n){return this.Tn.In(e,n).next(({documents:s,En:r})=>(r.forEach((i,o)=>{this.An.set(i,o)}),s))}}function gd(t){return ke(t,Nt.store)}function sn(t){return ke(t,he.store)}function Hi(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.O=e}kt(e,n,s,r){const i=new ua("createOrUpgrade",n);s<1&&r>=1&&(function(a){a.createObjectStore(at.store)}(e),function(a){a.createObjectStore(ln.store,{keyPath:ln.keyPath}),a.createObjectStore(re.store,{keyPath:re.keyPath,autoIncrement:!0}).createIndex(re.userMutationsIndex,re.userMutationsKeyPath,{unique:!0}),a.createObjectStore(qe.store)}(e),md(e),function(a){a.createObjectStore(he.store)}(e));let o=y.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore(Le.store),a.deleteObjectStore(it.store),a.deleteObjectStore(ct.store)}(e),md(e)),o=o.next(()=>function(a){const c=a.store(ct.store),u=new ct(0,0,V.min().toTimestamp(),0);return c.put(ct.key,u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store(re.store).qt().next(u=>{a.deleteObjectStore(re.store),a.createObjectStore(re.store,{keyPath:re.keyPath,autoIncrement:!0}).createIndex(re.userMutationsIndex,re.userMutationsKeyPath,{unique:!0});const l=c.store(re.store),h=u.map(f=>l.put(f));return y.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore(jt.store,{keyPath:jt.keyPath})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Rn(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Nt.store)}(e),this.Pn(i)))),s<7&&r>=7&&(o=o.next(()=>this.bn(i))),s<8&&r>=8&&(o=o.next(()=>this.vn(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(he.store);c.createIndex(he.readTimeIndex,he.readTimeIndexPath,{unique:!1}),c.createIndex(he.collectionReadTimeIndex,he.collectionReadTimeIndexPath,{unique:!1})}(n)})),s<10&&r>=10&&(o=o.next(()=>this.Vn(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(js.store,{keyPath:js.keyPath})})(e),function(a){a.createObjectStore(Ks.store,{keyPath:Ks.keyPath})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore(Se.store,{keyPath:Se.keyPath});c.createIndex(Se.collectionPathOverlayIndex,Se.collectionPathOverlayIndexPath,{unique:!1}),c.createIndex(Se.collectionGroupOverlayIndex,Se.collectionGroupOverlayIndexPath,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>{(function(a){a.createObjectStore(ht.store,{keyPath:ht.keyPath,autoIncrement:!0}).createIndex(ht.collectionGroupIndex,ht.collectionGroupIndexPath,{unique:!1}),a.createObjectStore(pt.store,{keyPath:pt.keyPath}).createIndex(pt.sequenceNumberIndex,pt.sequenceNumberIndexPath,{unique:!1}),a.createObjectStore(gt.store,{keyPath:gt.keyPath}).createIndex(gt.documentKeyIndex,gt.documentKeyIndexPath,{unique:!1})})(e)})),o}Pn(e){let n=0;return e.store(he.store).Qt((s,r)=>{n+=xo(r)}).next(()=>{const s=new Nt(n);return e.store(Nt.store).put(Nt.key,s)})}Rn(e){const n=e.store(ln.store),s=e.store(re.store);return n.qt().next(r=>y.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.qt(re.userMutationsIndex,o).next(a=>y.forEach(a,c=>{B(c.userId===i.userId);const u=Is(this.O,c);return Pg(e,i.userId,u).next(()=>{})}))}))}bn(e){const n=e.store(Le.store),s=e.store(he.store);return e.store(ct.store).get(ct.key).next(r=>{const i=[];return s.Qt((o,a)=>{const c=new X(o),u=function(l){return[0,Ce(l)]}(c);i.push(n.get(u).next(l=>l?y.resolve():(h=>n.put(new Le(0,Ce(h),r.highestListenSequenceNumber)))(c)))}).next(()=>y.waitFor(i))})}vn(e,n){e.createObjectStore(Fn.store,{keyPath:Fn.keyPath});const s=n.store(Fn.store),r=new tl,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:Ce(c)})}};return n.store(he.store).Qt({jt:!0},(o,a)=>{const c=new X(o);return i(c.popLast())}).next(()=>n.store(qe.store).Qt({jt:!0},([o,a,c],u)=>{const l=At(a);return i(l.popLast())}))}Vn(e){const n=e.store(it.store);return n.Qt((s,r)=>{const i=Tr(r),o=Rg(this.O,i);return n.put(o)})}}function md(t){t.createObjectStore(Le.store,{keyPath:Le.keyPath}).createIndex(Le.documentTargetsIndex,Le.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(it.store,{keyPath:it.keyPath}).createIndex(it.queryTargetsIndexName,it.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(ct.store)}const Ha="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sl{constructor(e,n,s,r,i,o,a,c,u,l,h=12){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=s,this.Sn=i,this.window=o,this.document=a,this.Dn=u,this.Cn=l,this.schemaVersion=h,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=f=>Promise.resolve(),!sl.Vt())throw new E(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new w0(this,r),this.Bn=n+"main",this.O=new Og(c),this.Ln=new bt(this.Bn,this.schemaVersion,new I0(this.O)),this.Un=new p0(this.referenceDelegate,this.O),this.qn=function(f){return new v0(f)}(this.O),this.Kn=new a0,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,l===!1&&we("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(m.FAILED_PRECONDITION,Ha);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Un.getHighestSequenceNumber(e))}).then(e=>{this.Nn=new lt(e,this.Dn)}).then(()=>{this.xn=!0}).catch(e=>(this.Ln&&this.Ln.close(),Promise.reject(e)))}Hn(e){return this.Fn=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zi(e).put(new jt(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(e).next(n=>{n||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(e)).next(n=>this.isPrimary&&!n?this.Xn(e).next(()=>!1):!!n&&this.Zn(e).next(()=>!0))).catch(e=>{if(is(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable(()=>this.Fn(e)),this.isPrimary=e})}Jn(e){return vr(e).get(at.key).next(n=>y.resolve(this.ts(n)))}es(e){return zi(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const s=ke(n,jt.store);return s.qt().next(r=>{const i=this.rs(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return y.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Gn)for(const n of e)this.Gn.removeItem(this.os(n.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?y.resolve(!0):vr(e).get(at.key).next(n=>{if(n!==null&&this.ss(n.leaseTimestampMs,5e3)&&!this.cs(n.ownerId)){if(this.ts(n)&&this.networkEnabled)return!0;if(!this.ts(n)){if(!n.allowTabSynchronization)throw new E(m.FAILED_PRECONDITION,Ha);return!1}}return!(!this.networkEnabled||!this.inForeground)||zi(e).qt().next(s=>this.rs(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&_("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[at.store,jt.store],e=>{const n=new sd(e,lt.A);return this.Xn(n).next(()=>this.es(n))}),this.Ln.close(),this.fs()}rs(e,n){return e.filter(s=>this.ss(s.updateTimeMs,n)&&!this.cs(s.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",e=>zi(e).qt().next(n=>this.rs(n,18e5).map(s=>s.clientId)))}get started(){return this.xn}getMutationQueue(e,n){return nl.Jt(e,this.O,n,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new f0(e)}getDocumentOverlayCache(e){return el.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,n,s){_("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",i=(o=this.schemaVersion)===13?r0:o===12?Ag:o===11?Cg:void M();var o;let a;return this.Ln.runTransaction(e,r,i,c=>(a=new sd(c,this.Nn?this.Nn.next():lt.A),n==="readwrite-primary"?this.Jn(a).next(u=>!!u||this.Yn(a)).next(u=>{if(!u)throw we(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new E(m.FAILED_PRECONDITION,Ng);return s(a)}).next(u=>this.Zn(a).next(()=>u)):this._s(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}_s(e){return vr(e).get(at.key).next(n=>{if(n!==null&&this.ss(n.leaseTimestampMs,5e3)&&!this.cs(n.ownerId)&&!this.ts(n)&&!(this.Cn||this.allowTabSynchronization&&n.allowTabSynchronization))throw new E(m.FAILED_PRECONDITION,Ha)})}Zn(e){const n=new at(this.clientId,this.allowTabSynchronization,Date.now());return vr(e).put(at.key,n)}static Vt(){return bt.Vt()}Xn(e){const n=vr(e);return n.get(at.key).next(s=>this.ts(s)?(_("IndexedDbPersistence","Releasing primary lease."),n.delete(at.key)):y.resolve())}ss(e,n){const s=Date.now();return!(e<s-n)&&(!(e>s)||(we(`Detected an update time that is in the future: ${e} > ${s}`),!1))}Qn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.On=()=>{this.Sn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.jn()))},this.document.addEventListener("visibilitychange",this.On),this.inForeground=this.document.visibilityState==="visible")}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.kn=()=>{this.us(),Cv()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var n;try{const s=((n=this.Gn)===null||n===void 0?void 0:n.getItem(this.os(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return we("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(e){we("Failed to set zombie client id.",e)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch{}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function vr(t){return ke(t,at.store)}function zi(t){return ke(t,jt.store)}function rl(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.progress=e,this.ws=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,s){this.qn=e,this.gs=n,this.indexManager=s}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.ps(e,n,s))}ps(e,n,s){return this.qn.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Is(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Es(e,n){return this.qn.getEntries(e,n).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Is(n,s))}As(e,n,s){return function(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Rs(e,n.path):ju(n)?this.Ps(e,n,s):this.bs(e,n,s)}Rs(e,n){return this.ys(e,new k(n)).next(s=>{let r=Cc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ps(e,n,s){const r=n.collectionGroup;let i=Cc();return this.indexManager.getCollectionParents(e,r).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Qt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.bs(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}bs(e,n,s){let r;return this.qn.getAll(e,n.path,s).next(i=>(r=i,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=r.get(c);u==null&&(u=ue.newInvalidDocument(c),r=r.insert(c,u)),xc(a,u,o.localWriteTime),u.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Ku(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.vs=s,this.Vs=r}static Ss(e,n){let s=J(),r=J();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new il(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{Ds(e){this.Cs=e}As(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(V.min())?this.Ns(e,n):this.Cs.Es(e,r).next(i=>{const o=this.xs(n,i);return(Xi(n)||_o(n))&&this.ks(n.limitType,o,r,s)?this.Ns(e,n):(Ec()<=Y.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sc(n)),this.Cs.As(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let s=new ce(rg(e));return n.forEach((r,i)=>{Ku(e,i)&&(s=s.add(i))}),s}ks(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,n){return Ec()<=Y.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Sc(n)),this.Cs.As(e,n,V.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,s,r){this.persistence=e,this.Os=n,this.O=r,this.Ms=new me(H),this.$s=new or(i=>gi(i),ia),this.Fs=V.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new T0(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Ug(t,e,n,s){return new _0(t,e,n,s)}async function Bg(t,e){const n=A(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.gs.getAllMutationBatches(s).next(i=>(r=i,n.Ls(e),n.gs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=J();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.Us.Es(s,c).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function S0(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=y.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(v=>{const N=c.docVersions.get(g);B(N!==null),v.version.compareTo(N)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>o.gs.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.gs.performConsistencyCheck(s)).next(()=>n.Us.Es(s,r))})}function $g(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function x0(t,e){const n=A(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});r=n.Ms;const a=[];e.targetChanges.forEach((u,l)=>{const h=r.get(l);if(!h)return;a.push(n.Un.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.Un.addMatchingKeys(i,u.addedDocuments,l)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(Te.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(l,f),function(g,v,N){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(h,f,u)&&a.push(n.Un.updateTargetData(i,f))});let c=yt();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(qg(i,o,e.documentUpdates).next(u=>{c=u})),!s.isEqual(V.min())){const u=n.Un.getLastRemoteSnapshotVersion(i).next(l=>n.Un.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.Us.Ts(i,c)).next(()=>c)}).then(i=>(n.Ms=r,i))}function qg(t,e,n){let s=J();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=yt();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(V.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):_("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function C0(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(s,e)))}function Hs(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Un.getTargetData(s,e).next(i=>i?(r=i,y.resolve(r)):n.Un.allocateTargetId(s).next(o=>(r=new hn(e,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(e,s.targetId)),s})}async function zs(t,e,n){const s=A(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!is(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(r.target)}function Co(t,e,n){const s=A(t);let r=V.min(),i=J();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.$s.get(u);return h!==void 0?y.resolve(l.Ms.get(h)):l.Un.getTargetData(c,u)}(s,o,wt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Os.As(o,e,n?r:V.min(),n?i:J())).next(a=>({documents:a,Ks:i})))}function jg(t,e){const n=A(t),s=A(n.Un),r=n.Ms.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",i=>s.Tt(i,e).next(o=>o?o.target:null))}function Kg(t){const e=A(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(s,r,i){const o=A(s);let a=yt(),c=Xu(i);const u=sn(r),l=IDBKeyRange.lowerBound(c,!0);return u.Qt({index:he.readTimeIndex,range:l},(h,f)=>{const g=kg(o.O,f);a=a.insert(g.key,g),c=f.readTime}).next(()=>({ws:a,readTime:Ju(c)}))}(e.Bs,n,e.Fs)).then(({ws:n,readTime:s})=>(e.Fs=s,n))}async function A0(t){const e=A(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(s){const r=sn(s);let i=V.min();return r.Qt({index:he.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(i=Ju(a.readTime)),c.done()}).next(()=>i)}(n)).then(n=>{e.Fs=n})}async function N0(t,e,n,s){const r=A(t);let i=J(),o=yt();for(const u of n){const l=e.Gs(u.metadata.name);u.document&&(i=i.add(l));const h=e.js(u);h.setReadTime(e.Qs(u.metadata.readTime)),o=o.insert(l,h)}const a=r.Bs.newChangeBuffer({trackRemovals:!0}),c=await Hs(r,function(u){return wt(ir(X.fromString(`__bundle__/docs/${u}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>qg(u,a,o).next(l=>(a.apply(u),l)).next(l=>r.Un.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.Un.addMatchingKeys(u,i,c.targetId)).next(()=>r.Us.Ts(u,l)).next(()=>l)))}async function D0(t,e,n=J()){const s=await Hs(t,wt(Zu(e.bundledQuery))),r=A(t);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=De(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Kn.saveNamedQuery(i,e);const a=s.withResumeToken(Te.EMPTY_BYTE_STRING,o);return r.Ms=r.Ms.insert(a.targetId,a),r.Un.updateTargetData(i,a).next(()=>r.Un.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Un.addMatchingKeys(i,n,s.targetId)).next(()=>r.Kn.saveNamedQuery(i,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return y.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:De(s.createTime)}),y.resolve()}getNamedQuery(e,n){return y.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(s){return{name:s.name,query:Zu(s.bundledQuery),readTime:De(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.overlays=new me(k.comparator),this.Hs=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach(r=>{this.Yt(e,n,r)}),y.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Hs.delete(s)),y.resolve()}getOverlaysForCollection(e,n,s){const r=new Map,i=n.length+1,o=new k(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return y.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=new Map,i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=new Map,c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(l,u)),!(a.size>=r)););return y.resolve(a)}Yt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);r!==null&&this.Hs.get(r.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new Yu(n,s));let i=this.Hs.get(n);i===void 0&&(i=new Set,this.Hs.set(n,i)),i.add(s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.Js=new ce(_e.Ys),this.Xs=new ce(_e.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const s=new _e(e,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ei(new _e(e,n))}ni(e,n){e.forEach(s=>this.removeReference(s,n))}si(e){const n=new k(new X([])),s=new _e(n,e),r=new _e(n,e+1),i=[];return this.Xs.forEachInRange([s,r],o=>{this.ei(o),i.push(o.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new k(new X([])),s=new _e(n,e),r=new _e(n,e+1);let i=J();return this.Xs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new _e(e,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return k.comparator(e.key,n.key)||H(e.oi,n.oi)}static Zs(e,n){return H(e.oi,n.oi)||k.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new ce(_e.Ys)}checkEmpty(e){return y.resolve(this.gs.length===0)}addMutationBatch(e,n,s,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Wu(i,n,s,r);this.gs.push(o);for(const a of r)this.ui=this.ui.add(new _e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.hi(s),i=r<0?0:r;return y.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return y.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new _e(n,0),r=new _e(n,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([s,r],o=>{const a=this.ai(o.oi);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ce(H);return n.forEach(r=>{const i=new _e(r,0),o=new _e(r,Number.POSITIVE_INFINITY);this.ui.forEachInRange([i,o],a=>{s=s.add(a.oi)})}),y.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;k.isDocumentKey(i)||(i=i.child(""));const o=new _e(new k(i),0);let a=new ce(H);return this.ui.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.oi)),!0)},o),y.resolve(this.li(a))}li(e){const n=[];return e.forEach(s=>{const r=this.ai(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){B(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return y.forEach(n.mutations,r=>{const i=new _e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,n){const s=new _e(n,0),r=this.ui.firstAfterOrEqual(s);return y.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,y.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.di=e,this.docs=new me(k.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return y.resolve(s?s.document.mutableCopy():ue.newInvalidDocument(n))}getEntries(e,n){let s=yt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ue.newInvalidDocument(r))}),y.resolve(s)}getAll(e,n,s){let r=yt();const i=new k(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return y.resolve(r)}_i(e,n){return y.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new M0(this)}getSize(e){return y.resolve(this.size)}}class M0 extends Fg{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(s)}),y.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.persistence=e,this.wi=new or(n=>gi(n),ia),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.mi=0,this.gi=new ol,this.targetCount=0,this.yi=Jn.He()}forEachTarget(e,n){return this.wi.forEach((s,r)=>n(r)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),y.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new Jn(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.Ze(n),y.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),y.waitFor(i).next(()=>r)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const s=this.wi.get(n)||null;return y.resolve(s)}addMatchingKeys(e,n,s){return this.gi.ti(n,s),y.resolve()}removeMatchingKeys(e,n,s){this.gi.ni(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),y.resolve()}getMatchingKeysForTargetId(e,n){const s=this.gi.ri(n);return y.resolve(s)}containsKey(e,n){return y.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.pi={},this.overlays={},this.Nn=new lt(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new L0(this),this.indexManager=new d0,this.qn=function(s){return new P0(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Og(n),this.Kn=new O0(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new k0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.pi[e.toKey()];return s||(s=new R0(n,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,s){_("MemoryPersistence","Starting transaction:",e);const r=new V0(this.Nn.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.Ti(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,n){return y.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,n)))}}class V0 extends Dg{constructor(e){super(),this.currentSequenceNumber=e}}class al{constructor(e){this.persistence=e,this.Ri=new ol,this.Pi=null}static bi(e){return new al(e)}get vi(){if(this.Pi)return this.Pi;throw M()}addReference(e,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),y.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),y.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(r=>this.vi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.vi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.vi,s=>{const r=k.fromPath(s);return this.Vi(e,r).next(i=>{i||n.removeEntry(r,V.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return y.or([()=>y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t,e){return`firestore_clients_${t}_${e}`}function wd(t,e,n){let s=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function za(t,e){return`firestore_targets_${t}_${e}`}class Ao{constructor(e,n,s,r){this.user=e,this.batchId=n,this.state=s,this.error=r}static Si(e,n,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new E(r.error.code,r.error.message))),o?new Ao(e,n,r.state,i):(we("SharedClientState",`Failed to parse mutation state for ID '${n}': ${s}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Or{constructor(e,n,s){this.targetId=e,this.state=n,this.error=s}static Si(e,n){const s=JSON.parse(n);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new E(s.error.code,s.error.message))),i?new Or(e,s.state,r):(we("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class No{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Si(e,n){const s=JSON.parse(n);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=ca();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=Xp(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new No(e,i):(we("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class cl{constructor(e,n){this.clientId=e,this.onlineState=n}static Si(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new cl(n.clientId,n.onlineState):(we("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Dc{constructor(){this.activeTargetIds=ca()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ga{constructor(e,n,s,r,i){this.window=e,this.Sn=n,this.persistenceKey=s,this.xi=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ki=this.Oi.bind(this),this.Mi=new me(H),this.started=!1,this.$i=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Fi=yd(this.persistenceKey,this.xi),this.Bi=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Mi=this.Mi.insert(this.xi,new Dc),this.Li=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ui=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.qi=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ki=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Gi=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ki)}static Vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ds();for(const s of e){if(s===this.xi)continue;const r=this.getItem(yd(this.persistenceKey,s));if(r){const i=No.Si(s,r);i&&(this.Mi=this.Mi.insert(i.clientId,i))}}this.ji();const n=this.storage.getItem(this.Ki);if(n){const s=this.Qi(n);s&&this.Wi(s)}for(const s of this.$i)this.Oi(s);this.$i=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bi,JSON.stringify(e))}getAllActiveQueryTargets(){return this.zi(this.Mi)}isActiveQueryTarget(e){let n=!1;return this.Mi.forEach((s,r)=>{r.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Hi(e,"pending")}updateMutationState(e,n,s){this.Hi(e,n,s),this.Ji(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(za(this.persistenceKey,e));if(s){const r=Or.Si(e,s);r&&(n=r.state)}}return this.Yi.Ci(e),this.ji(),n}removeLocalQueryTarget(e){this.Yi.Ni(e),this.ji()}isLocalQueryTarget(e){return this.Yi.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(za(this.persistenceKey,e))}updateQueryState(e,n,s){this.Xi(e,n,s)}handleUserChange(e,n,s){n.forEach(r=>{this.Ji(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Zi(e)}notifyBundleLoaded(){this.tr()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ki),this.removeItem(this.Fi),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return _("SharedClientState","READ",e,n),n}setItem(e,n){_("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Oi(e){const n=e;if(n.storageArea===this.storage){if(_("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Fi)return void we("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Sn.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Li.test(n.key)){if(n.newValue==null){const s=this.er(n.key);return this.nr(s,null)}{const s=this.sr(n.key,n.newValue);if(s)return this.nr(s.clientId,s)}}else if(this.Ui.test(n.key)){if(n.newValue!==null){const s=this.ir(n.key,n.newValue);if(s)return this.rr(s)}}else if(this.qi.test(n.key)){if(n.newValue!==null){const s=this.cr(n.key,n.newValue);if(s)return this.ur(s)}}else if(n.key===this.Ki){if(n.newValue!==null){const s=this.Qi(n.newValue);if(s)return this.Wi(s)}}else if(n.key===this.Bi){const s=function(r){let i=lt.A;if(r!=null)try{const o=JSON.parse(r);B(typeof o=="number"),i=o}catch(o){we("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);s!==lt.A&&this.sequenceNumberHandler(s)}else if(n.key===this.Gi)return this.syncEngine.ar()}}else this.$i.push(n)})}}get Yi(){return this.Mi.get(this.xi)}ji(){this.setItem(this.Fi,this.Yi.Di())}Hi(e,n,s){const r=new Ao(this.currentUser,e,n,s),i=wd(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Di())}Ji(e){const n=wd(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Zi(e){const n={clientId:this.xi,onlineState:e};this.storage.setItem(this.Ki,JSON.stringify(n))}Xi(e,n,s){const r=za(this.persistenceKey,e),i=new Or(e,n,s);this.setItem(r,i.Di())}tr(){this.setItem(this.Gi,"value-not-used")}er(e){const n=this.Li.exec(e);return n?n[1]:null}sr(e,n){const s=this.er(e);return No.Si(s,n)}ir(e,n){const s=this.Ui.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return Ao.Si(new Pe(i),r,n)}cr(e,n){const s=this.qi.exec(e),r=Number(s[1]);return Or.Si(r,n)}Qi(e){return cl.Si(e)}async rr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.hr(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}ur(e){return this.syncEngine.lr(e.targetId,e.state,e.error)}nr(e,n){const s=n?this.Mi.insert(e,n):this.Mi.remove(e),r=this.zi(this.Mi),i=this.zi(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.dr(o,a).then(()=>{this.Mi=s})}Wi(e){this.Mi.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}zi(e){let n=ca();return e.forEach((s,r)=>{n=n.unionWith(r.activeTargetIds)}),n}}class Hg{constructor(){this._r=new Dc,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,s){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Dc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,s,r,i){const o=this.$r(e,n);_("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,r,i),this.Br(e,o,a,s).then(c=>(_("RestConnection","Received: ",c),c),c=>{throw Kr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,n,s,r,i){return this.Mr(e,n,s,r,i)}Fr(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}$r(e,n){const s=B0[e];return`${this.kr}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,s,r){return new Promise((i,o)=>{const a=new eE;a.listenOnce(XI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $a.NO_ERROR:const u=a.getResponseJson();_("Connection","XHR received:",JSON.stringify(u)),i(u);break;case $a.TIMEOUT:_("Connection",'RPC "'+e+'" timed out'),o(new E(m.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const l=a.getStatus();if(_("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(v)>=0?v:m.UNKNOWN}(h.status);o(new E(f,h.message))}else o(new E(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(m.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{_("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Ur(e,n,s){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=QI(),o=YI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ZI({})),this.Fr(a.initMessageHeaders,n,s),vv()||Tv()||_v()||Sv()||xv()||Ev()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");_("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new $0({Ar:v=>{h?_("Connection","Not sending because WebChannel is closed:",v):(l||(_("Connection","Opening WebChannel transport."),u.open(),l=!0),_("Connection","WebChannel sending:",v),u.send(v))},Rr:()=>u.close()}),g=(v,N,D)=>{v.listen(N,U=>{try{D(U)}catch(pe){setTimeout(()=>{throw pe},0)}})};return g(u,Ui.EventType.OPEN,()=>{h||_("Connection","WebChannel transport opened.")}),g(u,Ui.EventType.CLOSE,()=>{h||(h=!0,_("Connection","WebChannel transport closed"),f.Cr())}),g(u,Ui.EventType.ERROR,v=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",v),f.Cr(new E(m.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ui.EventType.MESSAGE,v=>{var N;if(!h){const D=v.data[0];B(!!D);const U=D,pe=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(pe){_("Connection","WebChannel received error:",pe);const Ee=pe.status;let ge=function(hr){const hs=ye[hr];if(hs!==void 0)return pg(hs)}(Ee),Mt=pe.message;ge===void 0&&(ge=m.INTERNAL,Mt="Unknown error status: "+Ee+" with message "+pe.message),h=!0,f.Cr(new E(ge,Mt)),u.close()}else _("Connection","WebChannel received:",D),f.Nr(D)}}),g(o,JI.STAT_EVENT,v=>{v.stat===Lh.PROXY?_("Connection","Detected buffering proxy"):v.stat===Lh.NOPROXY&&_("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){return typeof window!="undefined"?window:null}function eo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){return new jE(t,!0)}class ul{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=n,this.qr=s,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),r=Math.max(0,n-s);r>0&&_("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,s,r,i,o,a,c){this.Sn=e,this.Xr=s,this.Zr=r,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new ul(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(we(n.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.no===n&&this.po(s,r)},s=>{e(()=>{const r=new E(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(r)})})}po(e,n){const s=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(r=>{s(()=>this.Io(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j0 extends Gg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.O=i}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=zE(this.O,e),s=function(r){if(!("targetChange"in r))return V.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?V.min():i.readTime?De(i.readTime):V.min()}(e);return this.listener.To(n,s)}Ao(e){const n={};n.database=Xr(this.O),n.addTarget=function(r,i){let o;const a=i.target;return o=To(a)?{documents:Eg(r,a)}:{query:Tg(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=yg(r,i.resumeToken):i.snapshotVersion.compareTo(V.min())>0&&(o.readTime=Qr(r,i.snapshotVersion.toTimestamp())),o}(this.O,e);const s=WE(this.O,e);s&&(n.labels=s),this.fo(n)}Ro(e){const n={};n.database=Xr(this.O),n.removeTarget=e,this.fo(n)}}class K0 extends Gg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=GE(e.writeResults,e.commitTime),s=De(e.commitTime);return this.listener.Vo(s,n)}return B(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Xr(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Jr(this.O,s))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=s,this.O=r,this.Co=!1}No(){if(this.Co)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(m.UNKNOWN,r.toString())})}Lr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(m.UNKNOWN,r.toString())})}terminate(){this.Co=!0}}class z0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(we(n),this.Oo=!1):_("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(o=>{s.enqueueAndForget(async()=>{In(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.Ko.add(4),await ar(c),c.Qo.set("Unknown"),c.Ko.delete(4),await Ti(c)}(this))})}),this.Qo=new z0(s,r)}}async function Ti(t){if(In(t))for(const e of t.Go)await e(!0)}async function ar(t){for(const e of t.Go)await e(!1)}function la(t,e){const n=A(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),dl(n)?hl(n):ur(n).co()&&ll(n,e))}function Zr(t,e){const n=A(t),s=ur(n);n.qo.delete(e),s.co()&&Wg(n,e),n.qo.size===0&&(s.co()?s.ho():In(n)&&n.Qo.set("Unknown"))}function ll(t,e){t.Wo.Z(e.targetId),ur(t).Ao(e)}function Wg(t,e){t.Wo.Z(e),ur(t).Ro(e)}function hl(t){t.Wo=new BE({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),ur(t).start(),t.Qo.Mo()}function dl(t){return In(t)&&!ur(t).oo()&&t.qo.size>0}function In(t){return A(t).Ko.size===0}function Qg(t){t.Wo=void 0}async function W0(t){t.qo.forEach((e,n)=>{ll(t,e)})}async function Q0(t,e){Qg(t),dl(t)?(t.Qo.Bo(e),hl(t)):t.Qo.set("Unknown")}async function Y0(t,e,n){if(t.Qo.set("Online"),e instanceof mg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.qo.delete(o),s.Wo.removeTarget(o))}(t,e)}catch(s){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Do(t,s)}else if(e instanceof Zi?t.Wo.ct(e):e instanceof gg?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(V.min()))try{const s=await $g(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Wo.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.qo.get(c);u&&r.qo.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.qo.get(a);if(!c)return;r.qo.set(a,c.withResumeToken(Te.EMPTY_BYTE_STRING,c.snapshotVersion)),Wg(r,a);const u=new hn(c.target,a,1,c.sequenceNumber);ll(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){_("RemoteStore","Failed to raise snapshot:",s),await Do(t,s)}}async function Do(t,e,n){if(!is(e))throw e;t.Ko.add(1),await ar(t),t.Qo.set("Offline"),n||(n=()=>$g(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Ti(t)})}function Yg(t,e){return e().catch(n=>Do(t,n,e))}async function cr(t){const e=A(t),n=mn(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;X0(e);)try{const r=await C0(e.localStore,s);if(r===null){e.Uo.length===0&&n.ho();break}s=r.batchId,J0(e,r)}catch(r){await Do(e,r)}Xg(e)&&Jg(e)}function X0(t){return In(t)&&t.Uo.length<10}function J0(t,e){t.Uo.push(e);const n=mn(t);n.co()&&n.bo&&n.vo(e.mutations)}function Xg(t){return In(t)&&!mn(t).oo()&&t.Uo.length>0}function Jg(t){mn(t).start()}async function Z0(t){mn(t).Do()}async function eT(t){const e=mn(t);for(const n of t.Uo)e.vo(n.mutations)}async function tT(t,e,n){const s=t.Uo.shift(),r=Qu.from(s,e,n);await Yg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await cr(t)}async function nT(t,e){e&&mn(t).bo&&await async function(n,s){if(r=s.code,fg(r)&&r!==m.ABORTED){const i=n.Uo.shift();mn(n).ao(),await Yg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await cr(n)}var r}(t,e),Xg(t)&&Jg(t)}async function bd(t,e){const n=A(t);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const s=In(n);n.Ko.add(3),await ar(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Ti(n)}async function Oc(t,e){const n=A(t);e?(n.Ko.delete(2),await Ti(n)):e||(n.Ko.add(2),await ar(n),n.Qo.set("Unknown"))}function ur(t){return t.zo||(t.zo=function(e,n,s){const r=A(e);return r.No(),new j0(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(t.datastore,t.asyncQueue,{Pr:W0.bind(null,t),vr:Q0.bind(null,t),To:Y0.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),dl(t)?hl(t):t.Qo.set("Unknown")):(await t.zo.stop(),Qg(t))})),t.zo}function mn(t){return t.Ho||(t.Ho=function(e,n,s){const r=A(e);return r.No(),new K0(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(t.datastore,t.asyncQueue,{Pr:Z0.bind(null,t),vr:nT.bind(null,t),So:eT.bind(null,t),Vo:tT.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await cr(t)):(await t.Ho.stop(),t.Uo.length>0&&(_("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new fl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lr(t,e){if(we("AsyncQueue",`${e}: ${t}`),is(t))return new E(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.comparator=e?(n,s)=>e(n,s)||k.comparator(n.key,s.key):(n,s)=>k.comparator(n.key,s.key),this.keyedMap=Cc(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.Jo=new me(k.comparator)}track(e){const n=e.doc.key,s=this.Jo.get(n);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(n):e.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):M():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Gs(e,n,Os.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.Xo=void 0,this.listeners=[]}}class rT{constructor(){this.queries=new or(e=>sg(e),mi),this.onlineState="Unknown",this.Zo=new Set}}async function pl(t,e){const n=A(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sT),r)try{i.Xo=await n.onListen(s)}catch(o){const a=lr(o,`Initialization of query '${Sc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.tc(n.onlineState),i.Xo&&e.ec(i.Xo)&&ml(n)}async function gl(t,e){const n=A(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function iT(t,e){const n=A(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ec(r)&&(s=!0);o.Xo=r}}s&&ml(n)}function oT(t,e,n){const s=A(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ml(t){t.Zo.forEach(e=>{e.next()})}class yl{constructor(e,n,s){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this.payload=e,this.byteLength=n}ac(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.O=e}Gs(e){return Ot(this.O,e)}js(e){return e.metadata.exists?Ig(this.O,e.document,!1):ue.newNoDocument(this.Gs(e.metadata.name),this.Qs(e.metadata.readTime))}Qs(e){return De(e)}}class cT{constructor(e,n,s){this.hc=e,this.localStore=n,this.O=s,this.queries=[],this.documents=[],this.progress=Zg(e)}lc(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}fc(e){const n=new Map,s=new Ed(this.O);for(const r of e)if(r.metadata.queries){const i=s.Gs(r.metadata.name);for(const o of r.metadata.queries){const a=(n.get(o)||J()).add(i);n.set(o,a)}}return n}async complete(){const e=await N0(this.localStore,new Ed(this.O),this.documents,this.hc.id),n=this.fc(this.documents);for(const s of this.queries)await D0(this.localStore,s,n.get(s.name));return this.progress.taskState="Success",new E0(Object.assign({},this.progress),e)}}function Zg(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.key=e}}class tm{constructor(e){this.key=e}}class nm{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=J(),this.mutatedKeys=J(),this.mc=rg(e),this.gc=new Os(this.mc)}get yc(){return this.dc}Ic(e,n){const s=n?n.Ec:new Id,r=n?n.gc:this.gc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Xi(this.query)&&r.size===this.query.limit?r.last():null,u=_o(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Ku(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;f&&g?f.data.isEqual(g.data)?v!==N&&(s.track({type:3,doc:g}),D=!0):this.Tc(f,g)||(s.track({type:2,doc:g}),D=!0,(c&&this.mc(g,c)>0||u&&this.mc(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),D=!0):f&&!g&&(s.track({type:1,doc:f}),D=!0,(c||u)&&(a=!0)),D&&(g?(o=o.add(g),i=N?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Xi(this.query)||_o(this.query))for(;o.size>this.query.limit;){const l=Xi(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{gc:o,Ec:s,ks:a,mutatedKeys:i}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((u,l)=>function(h,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return g(h)-g(f)}(u.type,l.type)||this.mc(u.doc,l.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,i.length!==0||c?{snapshot:new Gs(this.query,e.gc,r,i,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Id,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=J(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return e.forEach(s=>{this.wc.has(s)||n.push(new tm(s))}),this.wc.forEach(s=>{e.has(s)||n.push(new em(s))}),n}vc(e){this.dc=e.Ks,this.wc=J();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return Gs.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class uT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class lT{constructor(e){this.key=e,this.Sc=!1}}class hT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new or(a=>sg(a),mi),this.Nc=new Map,this.xc=new Set,this.kc=new me(k.comparator),this.Oc=new Map,this.Mc=new ol,this.$c={},this.Fc=new Map,this.Bc=Jn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function dT(t,e){const n=El(t);let s,r;const i=n.Cc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Vc();else{const o=await Hs(n.localStore,wt(e));n.isPrimaryClient&&la(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await wl(n,e,s,a==="current")}return r}async function wl(t,e,n,s){t.Uc=(l,h,f)=>async function(g,v,N,D){let U=v.view.Ic(N);U.ks&&(U=await Co(g.localStore,v.query,!1).then(({documents:ge})=>v.view.Ic(ge,U)));const pe=D&&D.targetChanges.get(v.targetId),Ee=v.view.applyChanges(U,g.isPrimaryClient,pe);return kc(g,v.targetId,Ee.Pc),Ee.snapshot}(t,l,h,f);const r=await Co(t.localStore,e,!0),i=new nm(e,r.Ks),o=i.Ic(r.documents),a=Ii.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);kc(t,n,c.Pc);const u=new uT(e,n,i);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function fT(t,e){const n=A(t),s=n.Cc.get(e),r=n.Nc.get(s.targetId);if(r.length>1)return n.Nc.set(s.targetId,r.filter(i=>!mi(i,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await zs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Zr(n.remoteStore,s.targetId),Ws(n,s.targetId)}).catch(os)):(Ws(n,s.targetId),await zs(n.localStore,s.targetId,!0))}async function pT(t,e,n){const s=Tl(t);try{const r=await function(i,o){const a=A(i),c=Ne.now(),u=o.reduce((h,f)=>h.add(f.key),J());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Us.Es(h,u).next(f=>{l=f;const g=[];for(const v of o){const N=RE(v,l.get(v.key));N!=null&&g.push(new rs(v.key,N,Jp(N.value.mapValue),ve.exists(!0)))}return a.gs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.$c[i.currentUser.toKey()];c||(c=new me(H)),c=c.insert(o,a),i.$c[i.currentUser.toKey()]=c}(s,r.batchId,n),await Yt(s,r.changes),await cr(s.remoteStore)}catch(r){const i=lr(r,"Failed to persist write");n.reject(i)}}async function sm(t,e){const n=A(t);try{const s=await x0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Oc.get(i);o&&(B(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Sc=!0:r.modifiedDocuments.size>0?B(o.Sc):r.removedDocuments.size>0&&(B(o.Sc),o.Sc=!1))}),await Yt(n,s,e)}catch(s){await os(s)}}function Td(t,e,n){const s=A(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Cc.forEach((i,o)=>{const a=o.view.tc(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=A(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.tc(o)&&(c=!0)}),c&&ml(a)}(s.eventManager,e),r.length&&s.Dc.To(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gT(t,e,n){const s=A(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Oc.get(e),i=r&&r.key;if(i){let o=new me(k.comparator);o=o.insert(i,ue.newNoDocument(i,V.min()));const a=J().add(i),c=new bi(V.min(),new Map,new ce(H),o,a);await sm(s,c),s.kc=s.kc.remove(i),s.Oc.delete(e),Il(s)}else await zs(s.localStore,e,!1).then(()=>Ws(s,e,n)).catch(os)}async function mT(t,e){const n=A(t),s=e.batch.batchId;try{const r=await S0(n.localStore,e);bl(n,s,null),vl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Yt(n,r)}catch(r){await os(r)}}async function yT(t,e,n){const s=A(t);try{const r=await function(i,o){const a=A(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.gs.lookupMutationBatch(c,o).next(l=>(B(l!==null),u=l.keys(),a.gs.removeMutationBatch(c,l))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,u))})}(s.localStore,e);bl(s,e,n),vl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Yt(s,r)}catch(r){await os(r)}}async function wT(t,e){const n=A(t);In(n.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=A(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.gs.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(s===-1)return void e.resolve();const r=n.Fc.get(s)||[];r.push(e),n.Fc.set(s,r)}catch(s){const r=lr(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function vl(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function bl(t,e,n){const s=A(t);let r=s.$c[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.$c[s.currentUser.toKey()]=r}}function Ws(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(s=>{t.Mc.containsKey(s)||rm(t,s)})}function rm(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(Zr(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),Il(t))}function kc(t,e,n){for(const s of n)s instanceof em?(t.Mc.addReference(s.key,e),vT(t,s)):s instanceof tm?(_("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||rm(t,s.key)):M()}function vT(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(_("SyncEngine","New document in limbo: "+n),t.xc.add(s),Il(t))}function Il(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new k(X.fromString(e)),s=t.Bc.next();t.Oc.set(s,new lT(n)),t.kc=t.kc.insert(n,s),la(t.remoteStore,new hn(wt(ir(n.path)),s,2,lt.A))}}async function Yt(t,e,n){const s=A(t),r=[],i=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=il.Ss(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Dc.To(r),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.vs,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>y.forEach(h.Vs,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!is(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ms.get(h),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(h,v)}}}(s.localStore,i))}async function bT(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const s=await Bg(n.localStore,e);n.currentUser=e,function(r,i){r.Fc.forEach(o=>{o.forEach(a=>{a.reject(new E(m.CANCELLED,i))})}),r.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Yt(n,s.qs)}}function IT(t,e){const n=A(t),s=n.Oc.get(e);if(s&&s.Sc)return J().add(s.key);{let r=J();const i=n.Nc.get(e);if(!i)return r;for(const o of i){const a=n.Cc.get(o);r=r.unionWith(a.view.yc)}return r}}async function ET(t,e){const n=A(t),s=await Co(n.localStore,e.query,!0),r=e.view.vc(s);return n.isPrimaryClient&&kc(n,e.targetId,r.Pc),r}async function TT(t){const e=A(t);return Kg(e.localStore).then(n=>Yt(e,n))}async function _T(t,e,n,s){const r=A(t),i=await function(o,a){const c=A(o),u=A(c.gs);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Ge(l,a).next(h=>h?c.Us.Es(l,h):y.resolve(null)))}(r.localStore,e);i!==null?(n==="pending"?await cr(r.remoteStore):n==="acknowledged"||n==="rejected"?(bl(r,e,s||null),vl(r,e),function(o,a){A(A(o).gs).Qe(a)}(r.localStore,e)):M(),await Yt(r,i)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ST(t,e){const n=A(t);if(El(n),Tl(n),e===!0&&n.Lc!==!0){const s=n.sharedClientState.getAllActiveQueryTargets(),r=await _d(n,s.toArray());n.Lc=!0,await Oc(n.remoteStore,!0);for(const i of r)la(n.remoteStore,i)}else if(e===!1&&n.Lc!==!1){const s=[];let r=Promise.resolve();n.Nc.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Ws(n,o),zs(n.localStore,o,!0))),Zr(n.remoteStore,o)}),await r,await _d(n,s),function(i){const o=A(i);o.Oc.forEach((a,c)=>{Zr(o.remoteStore,c)}),o.Mc.ii(),o.Oc=new Map,o.kc=new me(k.comparator)}(n),n.Lc=!1,await Oc(n.remoteStore,!1)}}async function _d(t,e,n){const s=A(t),r=[],i=[];for(const o of e){let a;const c=s.Nc.get(o);if(c&&c.length!==0){a=await Hs(s.localStore,wt(c[0]));for(const u of c){const l=s.Cc.get(u),h=await ET(s,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await jg(s.localStore,o);a=await Hs(s.localStore,u),await wl(s,im(u),o,!1)}r.push(a)}return s.Dc.To(i),r}function im(t){return tg(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function xT(t){const e=A(t);return A(A(e.localStore).persistence).ds()}async function CT(t,e,n,s){const r=A(t);if(r.Lc)_("SyncEngine","Ignoring unexpected query state notification.");else if(r.Nc.has(e))switch(n){case"current":case"not-current":{const i=await Kg(r.localStore),o=bi.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Yt(r,i,o);break}case"rejected":await zs(r.localStore,e,!0),Ws(r,e,s);break;default:M()}}async function AT(t,e,n){const s=El(t);if(s.Lc){for(const r of e){if(s.Nc.has(r)){_("SyncEngine","Adding an already active target "+r);continue}const i=await jg(s.localStore,r),o=await Hs(s.localStore,i);await wl(s,im(i),o.targetId,!1),la(s.remoteStore,o)}for(const r of n)s.Nc.has(r)&&await zs(s.localStore,r,!1).then(()=>{Zr(s.remoteStore,r),Ws(s,r)}).catch(os)}}function El(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gT.bind(null,e),e.Dc.To=iT.bind(null,e.eventManager),e.Dc.qc=oT.bind(null,e.eventManager),e}function Tl(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yT.bind(null,e),e}function NT(t,e,n){const s=A(t);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,f){const g=A(h),v=De(f.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",N=>g.Kn.getBundleMetadata(N,f.id)).then(N=>!!N&&N.createTime.compareTo(v)>=0)}(r.localStore,a))return await i.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(Zg(a));const c=new cT(a,r.localStore,i.O);let u=await i.Kc();for(;u;){const h=await c.lc(u);h&&o._updateProgress(h),u=await i.Kc()}const l=await c.complete();await Yt(r,l.ws,void 0),await function(h,f){const g=A(h);return g.persistence.runTransaction("Save bundle","readwrite",v=>g.Kn.saveBundleMetadata(v,f))}(r.localStore,a),o._completeWith(l.progress)}catch(a){Kr("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(s,e,n).then(()=>{s.sharedClientState.notifyBundleLoaded()})}class om{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Ug(this.persistence,new Vg,e.initialUser,this.O)}jc(e){return new F0(al.bi,this.O)}Gc(e){return new Hg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class am extends om{constructor(e,n,s){super(),this.zc=e,this.cacheSizeBytes=n,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await A0(this.localStore),await this.zc.initialize(this,e),await Tl(this.zc.syncEngine),await cr(this.zc.remoteStore),await this.persistence.Hn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Wc(e){return Ug(this.persistence,new Vg,e.initialUser,this.O)}Qc(e){const n=this.persistence.referenceDelegate.garbageCollector;return new m0(n,e.asyncQueue)}jc(e){const n=rl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new sl(this.synchronizeTabs,n,e.clientId,s,e.asyncQueue,zg(),eo(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new Hg}}class DT extends am{constructor(e,n){super(e,n,!1),this.zc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.zc.syncEngine;this.sharedClientState instanceof Ga&&(this.sharedClientState.syncEngine={hr:_T.bind(null,n),lr:CT.bind(null,n),dr:AT.bind(null,n),ds:xT.bind(null,n),ar:TT.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Hn(async s=>{await ST(this.zc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):s||this.gcScheduler.stop())})}Gc(e){const n=zg();if(!Ga.Vt(n))throw new E(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=rl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ga(n,e.asyncQueue,s,e.clientId,e.initialUser)}}class _l{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Td(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bT.bind(null,this.syncEngine),await Oc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rT}createDatastore(e){const n=Ei(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new q0(r));var r;return function(i,o,a,c){return new H0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Td(this.syncEngine,a,0),o=vd.Vt()?new vd:new U0,new G0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new hT(s,r,i,o,a,c);return u&&(l.Lc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);_("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await ar(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const s={value:t.slice(n,n+e),done:!1};return n+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n){this.Yc=e,this.O=n,this.metadata=new Ae,this.buffer=new Uint8Array,this.Xc=new TextDecoder("utf-8"),this.Zc().then(s=>{s&&s.ac()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Yc.cancel()}async getMetadata(){return this.metadata.promise}async Kc(){return await this.getMetadata(),this.Zc()}async Zc(){const e=await this.tu();if(e===null)return null;const n=this.Xc.decode(e),s=Number(n);isNaN(s)&&this.eu(`length string (${n}) is not valid number`);const r=await this.nu(s);return new aT(JSON.parse(r),e.length+s)}su(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async tu(){for(;this.su()<0&&!await this.iu(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.eu("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async nu(e){for(;this.buffer.length<e;)await this.iu()&&this.eu("Reached the end of bundle when more is expected.");const n=this.Xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}eu(e){throw this.Yc.cancel(),new Error(`Invalid bundle format: ${e}`)}async iu(){const e=await this.Yc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,r){const i=A(s),o=Xr(i.O)+"/documents",a={documents:r.map(h=>Yr(i.O,h))},c=await i.Lr("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const f=HE(i.O,h);u.set(f.key.toString(),f)});const l=[];return r.forEach(h=>{const f=u.get(h.toString());B(!!f),l.push(f)}),l}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new vi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const r=k.fromPath(s);this.mutations.push(new Hu(r,this.precondition(r)))}),await async function(n,s){const r=A(n),i=Xr(r.O)+"/documents",o={writes:s.map(a=>Jr(r.O,a))};await r.Mr("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=V.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new E(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ve.updateTime(n):ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(V.min()))throw new E(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ve.updateTime(n)}return ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,s,r){this.asyncQueue=e,this.datastore=n,this.updateFunction=s,this.deferred=r,this.ru=5,this.ro=new ul(this.asyncQueue,"transaction_retry")}run(){this.ru-=1,this.ou()}ou(){this.ro.Hr(async()=>{const e=new kT(this.datastore),n=this.cu(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.uu(r)}))}).catch(s=>{this.uu(s)})})}cu(e){try{const n=this.updateFunction(e);return!ss(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}uu(e){this.ru>0&&this.au(e)?(this.ru-=1,this.asyncQueue.enqueueAndForget(()=>(this.ou(),Promise.resolve()))):this.deferred.reject(e)}au(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!fg(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Pe.UNAUTHENTICATED,this.clientId=Gp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=lr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cm(t,e){t.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Bg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function um(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sl(t);_("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>bd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bd(e.remoteStore,i)),t.onlineComponents=e}async function Sl(t){return t.offlineComponents||(_("FirestoreClient","Using default OfflineComponentProvider"),await cm(t,new om)),t.offlineComponents}async function da(t){return t.onlineComponents||(_("FirestoreClient","Using default OnlineComponentProvider"),await um(t,new _l)),t.onlineComponents}function lm(t){return Sl(t).then(e=>e.persistence)}function xl(t){return Sl(t).then(e=>e.localStore)}function hm(t){return da(t).then(e=>e.remoteStore)}function Cl(t){return da(t).then(e=>e.syncEngine)}async function Qs(t){const e=await da(t),n=e.eventManager;return n.onListen=dT.bind(null,e.syncEngine),n.onUnlisten=fT.bind(null,e.syncEngine),n}function MT(t){return t.asyncQueue.enqueue(async()=>{const e=await lm(t),n=await hm(t);return e.setNetworkEnabled(!0),function(s){const r=A(s);return r.Ko.delete(0),Ti(r)}(n)})}function LT(t){return t.asyncQueue.enqueue(async()=>{const e=await lm(t),n=await hm(t);return e.setNetworkEnabled(!1),async function(s){const r=A(s);r.Ko.add(0),await ar(r),r.Qo.set("Offline")}(n)})}function FT(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const u=A(a);return u.persistence.runTransaction("read document","readonly",l=>u.Us.ys(l,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new E(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=lr(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await xl(t),e,n)),n.promise}function dm(t,e,n={}){const s=new Ae;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new ha({next:h=>{i.enqueueAndForget(()=>gl(r,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new E(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new E(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new yl(ir(o.path),u,{includeMetadataChanges:!0,uc:!0});return pl(r,l)}(await Qs(t),t.asyncQueue,e,n,s)),s.promise}function VT(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Co(s,r,!0),a=new nm(r,o.Ks),c=a.Ic(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=lr(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await xl(t),e,n)),n.promise}function fm(t,e,n={}){const s=new Ae;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new ha({next:h=>{i.enqueueAndForget(()=>gl(r,l)),h.fromCache&&a.source==="server"?c.reject(new E(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new yl(o,u,{includeMetadataChanges:!0,uc:!0});return pl(r,l)}(await Qs(t),t.asyncQueue,e,n,s)),s.promise}function UT(t,e){const n=new ha(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,r){A(s).Zo.add(r),r.next()}(await Qs(t),n)),()=>{n.Jc(),t.asyncQueue.enqueueAndForget(async()=>function(s,r){A(s).Zo.delete(r)}(await Qs(t),n))}}function BT(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>{const s=await function(r){return da(r).then(i=>i.datastore)}(t);new RT(t.asyncQueue,s,e,n).run()}),n.promise}function $T(t,e,n,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new OT(c,u)}(function(c,u){if(c instanceof Uint8Array)return Sd(c,u);if(c instanceof ArrayBuffer)return Sd(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Ei(e));t.asyncQueue.enqueueAndForget(async()=>{NT(await Cl(t),r,s)})}function qT(t,e){return t.asyncQueue.enqueue(async()=>function(n,s){const r=A(n);return r.persistence.runTransaction("Get named query","readonly",i=>r.Kn.getNamedQuery(i,s))}(await xl(t),e))}const xd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e,n){if(!n)throw new E(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pm(t,e,n,s){if(e===!0&&s===!0)throw new E(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cd(t){if(!k.isDocumentKey(t))throw new E(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ad(t){if(k.isDocumentKey(t))throw new E(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function W(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fa(t);throw new E(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gm(t,e){if(e<=0)throw new E(m.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1,e instanceof zn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new E(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(r.options.projectId)}(e))}get app(){if(!this._app)throw new E(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sE;switch(n.type){case"gapi":const s=n.client;return B(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new aE(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xd.get(e);n&&(_("ComponentProvider","Removing Datastore"),xd.delete(e),n.terminate())}(this),Promise.resolve()}}function jT(t,e,n,s={}){var r;const i=(t=W(t,_i))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Kr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Pe.MOCK_USER;else{o=wv(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new E(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pe(c)}t._authCredentials=new rE(new zp(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}}class Ge{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ge(this.firestore,e,this._query)}}class kt extends Ge{constructor(e,n,s){super(e,n,ir(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new k(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function mm(t,e,...n){if(t=be(t),Al("collection","path",e),t instanceof _i){const s=X.fromString(e,...n);return Ad(s),new kt(t,null,s)}{if(!(t instanceof ie||t instanceof kt))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(X.fromString(e,...n));return Ad(s),new kt(t.firestore,null,s)}}function KT(t,e){if(t=W(t,_i),Al("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ge(t,null,function(n){return new Qt(X.emptyPath(),n)}(e))}function Oo(t,e,...n){if(t=be(t),arguments.length===1&&(e=Gp.R()),Al("doc","path",e),t instanceof _i){const s=X.fromString(e,...n);return Cd(s),new ie(t,null,new k(s))}{if(!(t instanceof ie||t instanceof kt))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(X.fromString(e,...n));return Cd(s),new ie(t.firestore,t instanceof kt?t.converter:null,new k(s))}}function ym(t,e){return t=be(t),e=be(e),(t instanceof ie||t instanceof kt)&&(e instanceof ie||e instanceof kt)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function wm(t,e){return t=be(t),e=be(e),t instanceof Ge&&e instanceof Ge&&t.firestore===e.firestore&&mi(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new ul(this,"async_queue_retry"),this.yu=()=>{const n=eo();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=eo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Ae;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!is(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw we("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const r=fl.createAndSchedule(this,e,n,s,i=>this.Tu(i));return this.du.push(r),r}pu(){this._u&&M()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Rc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class zT{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,s){this._progressObserver={next:e,error:n,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=-1;class fe extends _i{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new HT,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vm(this),this._firestoreClient.terminate()}}function Re(t){return t._firestoreClient||vm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new pE(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new PT(t._authCredentials,t._appCheckCredentials,t._queue,s)}function WT(t,e){Im(t=W(t,fe));const n=Re(t),s=t._freezeSettings(),r=new _l;return bm(n,r,new am(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function QT(t){Im(t=W(t,fe));const e=Re(t),n=t._freezeSettings(),s=new _l;return bm(e,s,new DT(s,n.cacheSizeBytes))}function bm(t,e,n){const s=new Ae;return t.asyncQueue.enqueue(async()=>{try{await cm(t,n),await um(t,e),s.resolve()}catch(r){if(!function(i){return i.name==="FirebaseError"?i.code===m.FAILED_PRECONDITION||i.code===m.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(r))throw r;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function YT(t){if(t._initialized&&!t._terminated)throw new E(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ae;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!bt.Vt())return Promise.resolve();const s=n+"main";await bt.delete(s)}(rl(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function XT(t){return function(e){const n=new Ae;return e.asyncQueue.enqueueAndForget(async()=>wT(await Cl(e),n)),n.promise}(Re(t=W(t,fe)))}function JT(t){return MT(Re(t=W(t,fe)))}function ZT(t){return LT(Re(t=W(t,fe)))}function e_(t,e){const n=Re(t=W(t,fe)),s=new zT;return $T(n,t._databaseId,e,s),s}function t_(t,e){return qT(Re(t=W(t,fe)),e).then(n=>n?new Ge(t,null,n.query):null)}function Im(t){if(t._initialized||t._terminated)throw new E(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Te.fromBase64String(e))}catch(n){throw new E(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=/^__.*__$/;class s_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new wi(e,this.data,n,this.fieldTransforms)}}class Em{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ga{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.O=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:s,Cu:!1});return r.Nu(e),r}xu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:s,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return ko(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Tm(this.Vu)&&n_.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class r_{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=s||Ei(e)}Fu(e,n,s,r=!1){return new ga({Vu:e,methodName:n,$u:s,path:xe.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function cs(t){const e=t._freezeSettings(),n=Ei(t._databaseId);return new r_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ma(t,e,n,s,r,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,r);kl("Data must be an object, but it was:",o,s);const a=xm(s,o);let c,u;if(i.merge)c=new Fs(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Pc(e,h,n);if(!o.contains(f))throw new E(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Am(l,f)||l.push(f)}c=new Fs(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new s_(new Ke(a),c,u)}class Si extends as{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Si}}function _m(t,e,n){return new ga({Vu:3,$u:e.settings.$u,methodName:t._methodName,Cu:n},e.databaseId,e.O,e.ignoreUndefinedProperties)}class Nl extends as{_toFieldTransform(e){return new yi(e.path,new $s)}isEqual(e){return e instanceof Nl}}class i_ extends as{constructor(e,n){super(e),this.Bu=n}_toFieldTransform(e){const n=_m(this,e,!0),s=this.Bu.map(i=>us(i,n)),r=new Wn(s);return new yi(e.path,r)}isEqual(e){return this===e}}class o_ extends as{constructor(e,n){super(e),this.Bu=n}_toFieldTransform(e){const n=_m(this,e,!0),s=this.Bu.map(i=>us(i,n)),r=new Qn(s);return new yi(e.path,r)}isEqual(e){return this===e}}class a_ extends as{constructor(e,n){super(e),this.Lu=n}_toFieldTransform(e){const n=new qs(e.O,ag(e.O,this.Lu));return new yi(e.path,n)}isEqual(e){return this===e}}function Dl(t,e,n,s){const r=t.Fu(1,e,n);kl("Data must be an object, but it was:",r,s);const i=[],o=Ke.empty();ns(s,(c,u)=>{const l=Rl(e,c,n);u=be(u);const h=r.xu(l);if(u instanceof Si)i.push(l);else{const f=us(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new Fs(i);return new Em(o,a,r.fieldTransforms)}function Ol(t,e,n,s,r,i){const o=t.Fu(1,e,n),a=[Pc(e,s,n)],c=[r];if(i.length%2!=0)throw new E(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Pc(e,i[f])),c.push(i[f+1]);const u=[],l=Ke.empty();for(let f=a.length-1;f>=0;--f)if(!Am(u,a[f])){const g=a[f];let v=c[f];v=be(v);const N=o.xu(g);if(v instanceof Si)u.push(g);else{const D=us(v,N);D!=null&&(u.push(g),l.set(g,D))}}const h=new Fs(u);return new Em(l,h,o.fieldTransforms)}function Sm(t,e,n,s=!1){return us(n,t.Fu(s?4:3,e))}function us(t,e){if(Cm(t=be(t)))return kl("Unsupported field value:",e,t),xm(t,e);if(t instanceof as)return function(n,s){if(!Tm(s.Vu))throw s.Ou(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=us(o,s.ku(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ag(s.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ne.fromDate(n);return{timestampValue:Qr(s.O,r)}}if(n instanceof Ne){const r=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qr(s.O,r)}}if(n instanceof pa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rt)return{bytesValue:yg(s.O,n._byteString)};if(n instanceof ie){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.Ou(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ou(`Unsupported field value: ${fa(n)}`)}(t,e)}function xm(t,e){const n={};return Qp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(s,r)=>{const i=us(r,e.Du(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Cm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof pa||t instanceof Rt||t instanceof ie||t instanceof as)}function kl(t,e,n){if(!Cm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=fa(n);throw s==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function Pc(t,e,n){if((e=be(e))instanceof yn)return e._internalPath;if(typeof e=="string")return Rl(t,e);throw ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const c_=new RegExp("[~\\*/\\[\\]]");function Rl(t,e,n){if(e.search(c_)>=0)throw ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yn(...e.split("."))._internalPath}catch{throw ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ko(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new E(m.INVALID_ARGUMENT,a+t+c)}function Am(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u_ extends ei{data(){return super.data()}}function ya(t,e){return typeof e=="string"?Rl(t,e):e instanceof yn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gt extends ei{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ya("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class kr extends Gt{data(e={}){return super.data(e)}}class wn{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new kn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new kr(this._firestore,this._userDataWriter,s.key,s,new kn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new kr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new kn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new kr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new kn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:l_(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function l_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function Nm(t,e){return t instanceof Gt&&e instanceof Gt?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof wn&&e instanceof wn&&t._firestore===e._firestore&&wm(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){if(_o(t)&&t.explicitOrderBy.length===0)throw new E(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xi{}function en(t,...e){for(const n of e)t=n._apply(t);return t}class h_ extends xi{constructor(e,n,s){super(),this.Uu=e,this.qu=n,this.Ku=s,this.type="where"}_apply(e){const n=cs(e.firestore),s=function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Od(l,u);const g=[];for(const v of l)g.push(Dd(a,r,v));h={arrayValue:{values:g}}}else h=Dd(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Od(l,u),h=Sm(o,i,l,u==="in"||u==="not-in");const f=et.create(c,u,h);return function(g,v){if(v.S()){const D=qu(g);if(D!==null&&!D.isEqual(v.field))throw new E(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${D.toString()}' and '${v.field.toString()}'`);const U=$u(g);U!==null&&Mm(g,v.field,U)}const N=function(D,U){for(const pe of D.filters)if(U.indexOf(pe.op)>=0)return pe.op;return null}(g,function(D){switch(D){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(N!==null)throw N===v.op?new E(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new E(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${N.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new Ge(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Qt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function d_(t,e,n){const s=e,r=ya("where",t);return new h_(r,s,n)}class f_ extends xi{constructor(e,n){super(),this.Uu=e,this.Gu=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new E(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new E(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ds(r,i);return function(a,c){if($u(a)===null){const u=qu(a);u!==null&&Mm(a,u,c.field)}}(s,o),o}(e._query,this.Uu,this.Gu);return new Ge(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Qt(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function p_(t,e="asc"){const n=e,s=ya("orderBy",t);return new f_(s,n)}class Om extends xi{constructor(e,n,s){super(),this.type=e,this.ju=n,this.Qu=s}_apply(e){return new Ge(e.firestore,e.converter,ng(e._query,this.ju,this.Qu))}}function g_(t){return gm("limit",t),new Om("limit",t,"F")}function m_(t){return gm("limitToLast",t),new Om("limitToLast",t,"L")}class km extends xi{constructor(e,n,s){super(),this.type=e,this.Wu=n,this.zu=s}_apply(e){const n=Pm(e,this.type,this.Wu,this.zu);return new Ge(e.firestore,e.converter,function(s,r){return new Qt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function y_(...t){return new km("startAt",t,!0)}function w_(...t){return new km("startAfter",t,!1)}class Rm extends xi{constructor(e,n,s){super(),this.type=e,this.Wu=n,this.zu=s}_apply(e){const n=Pm(e,this.type,this.Wu,this.zu);return new Ge(e.firestore,e.converter,function(s,r){return new Qt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function v_(...t){return new Rm("endBefore",t,!1)}function b_(...t){return new Rm("endAt",t,!0)}function Pm(t,e,n,s){if(n[0]=be(n[0]),n[0]instanceof ei)return function(r,i,o,a,c){if(!a)throw new E(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Bs(r))if(l.field.isKeyField())u.push(Io(i,a.key));else{const h=a.data.field(l.field);if(Bu(h))throw new E(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=l.field.canonicalString();throw new E(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(h)}return new Us(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=cs(t.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new E(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<u.length;g++){const v=u[g];if(h[g].field.isKeyField()){if(typeof v!="string")throw new E(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof v}`);if(!ju(i)&&v.indexOf("/")!==-1)throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${v}' contains a slash.`);const N=i.path.child(X.fromString(v));if(!k.isDocumentKey(N))throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const D=new k(N);f.push(Io(o,D))}else{const N=Sm(a,c,v);f.push(N)}}return new Us(f,l)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Dd(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new E(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ju(e)&&n.indexOf("/")!==-1)throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(X.fromString(n));if(!k.isDocumentKey(s))throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Io(t,new k(s))}if(n instanceof ie)return Io(t,n._key);throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fa(n)}.`)}function Od(t,e){if(!Array.isArray(t)||t.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Mm(t,e,n){if(!n.isEqual(e))throw new E(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const s={};return ns(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new pa(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const n=gn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=X.fromString(e);B(xg(s));const r=new zn(s.get(1),s.get(3)),i=new k(s.popFirst(5));return r.isEqual(n)||we(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class I_ extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=cs(e)}set(e,n,s){this._verifyNotCommitted();const r=on(e,this._firestore),i=wa(r.converter,n,s),o=ma(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,ve.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=on(e,this._firestore);let o;return o=typeof(n=be(n))=="string"||n instanceof yn?Ol(this._dataReader,"WriteBatch.update",i._key,n,s,r):Dl(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=on(e,this._firestore);return this._mutations=this._mutations.concat(new vi(n._key,ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function on(t,e){if((t=be(t)).firestore!==e)throw new E(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){t=W(t,ie);const e=W(t.firestore,fe);return dm(Re(e),t._key).then(n=>Ml(e,t,n))}class ls extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,n)}}function __(t){t=W(t,ie);const e=W(t.firestore,fe),n=Re(e),s=new ls(e);return FT(n,t._key).then(r=>new Gt(e,s,t._key,r,new kn(r!==null&&r.hasLocalMutations,!0),t.converter))}function S_(t){t=W(t,ie);const e=W(t.firestore,fe);return dm(Re(e),t._key,{source:"server"}).then(n=>Ml(e,t,n))}function x_(t){t=W(t,Ge);const e=W(t.firestore,fe),n=Re(e),s=new ls(e);return Dm(t._query),fm(n,t._query).then(r=>new wn(e,s,t,r))}function C_(t){t=W(t,Ge);const e=W(t.firestore,fe),n=Re(e),s=new ls(e);return VT(n,t._query).then(r=>new wn(e,s,t,r))}function A_(t){t=W(t,Ge);const e=W(t.firestore,fe),n=Re(e),s=new ls(e);return fm(n,t._query,{source:"server"}).then(r=>new wn(e,s,t,r))}function kd(t,e,n){t=W(t,ie);const s=W(t.firestore,fe),r=wa(t.converter,e,n);return Ci(s,[ma(cs(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ve.none())])}function Rd(t,e,n,...s){t=W(t,ie);const r=W(t.firestore,fe),i=cs(r);let o;return o=typeof(e=be(e))=="string"||e instanceof yn?Ol(i,"updateDoc",t._key,e,n,s):Dl(i,"updateDoc",t._key,e),Ci(r,[o.toMutation(t._key,ve.exists(!0))])}function N_(t){return Ci(W(t.firestore,fe),[new vi(t._key,ve.none())])}function D_(t,e){const n=W(t.firestore,fe),s=Oo(t),r=wa(t.converter,e);return Ci(n,[ma(cs(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,ve.exists(!1))]).then(()=>s)}function Lm(t,...e){var n,s,r;t=be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rc(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Rc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof ie)u=W(t.firestore,fe),l=ir(t._key.path),c={next:h=>{e[o]&&e[o](Ml(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=W(t,Ge);u=W(h.firestore,fe),l=h._query;const f=new ls(u);c={next:g=>{e[o]&&e[o](new wn(u,f,h,g))},error:e[o+1],complete:e[o+2]},Dm(t._query)}return function(h,f,g,v){const N=new ha(v),D=new yl(f,N,g);return h.asyncQueue.enqueueAndForget(async()=>pl(await Qs(h),D)),()=>{N.Jc(),h.asyncQueue.enqueueAndForget(async()=>gl(await Qs(h),D))}}(Re(u),l,a,c)}function O_(t,e){return UT(Re(t=W(t,fe)),Rc(e)?e:{next:e})}function Ci(t,e){return function(n,s){const r=new Ae;return n.asyncQueue.enqueueAndForget(async()=>pT(await Cl(n),s,r)),r.promise}(Re(t),e)}function Ml(t,e,n){const s=n.docs.get(e._key),r=new ls(t);return new Gt(t,r,e._key,s,new kn(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=cs(e)}get(e){const n=on(e,this._firestore),s=new I_(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return M();const i=r[0];if(i.isFoundDocument())return new ei(this._firestore,s,i.key,i,n.converter);if(i.isNoDocument())return new ei(this._firestore,s,n._key,null,n.converter);throw M()})}set(e,n,s){const r=on(e,this._firestore),i=wa(r.converter,n,s),o=ma(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,n,s,...r){const i=on(e,this._firestore);let o;return o=typeof(n=be(n))=="string"||n instanceof yn?Ol(this._dataReader,"Transaction.update",i._key,n,s,r):Dl(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=on(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=on(e,this._firestore),s=new ls(this._firestore);return super.get(e).then(r=>new Gt(this._firestore,s,n._key,r._document,new kn(!1,!1),n.converter))}}function R_(t,e){return BT(Re(t=W(t,fe)),n=>e(new k_(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(){return new Si("deleteField")}function M_(){return new Nl("serverTimestamp")}function L_(...t){return new i_("arrayUnion",t)}function F_(...t){return new o_("arrayRemove",t)}function V_(t){return new a_("increment",t)}(function(t,e=!0){(function(n){rr=n})(du),Ps(new Bn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new fe(r,new iE(n.getProvider("auth-internal")),new uE(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),un(Fh,"3.4.5",t),un(Fh,"3.4.5","esm2017")})();const U_="@firebase/firestore-compat",B_="0.1.14";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){if(typeof Uint8Array=="undefined")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function Md(){if(!dE())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ti{constructor(e){this._delegate=e}static fromBase64String(e){return Md(),new ti(Rt.fromBase64String(e))}static fromUint8Array(e){return Pd(),new ti(Rt.fromUint8Array(e))}toBase64(){return Md(),this._delegate.toBase64()}toUint8Array(){return Pd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return $_(t,["next","error","complete"])}function $_(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const s of e)if(s in n&&typeof n[s]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{enableIndexedDbPersistence(e,n){return WT(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return QT(e._delegate)}clearIndexedDbPersistence(e){return YT(e._delegate)}}class Fm{constructor(e,n,s){this._delegate=n,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof zn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Kr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,s={}){jT(this._delegate,e,n,s)}enableNetwork(){return JT(this._delegate)}disableNetwork(){return ZT(this._delegate)}enablePersistence(e){let n=!1,s=!1;return e&&(n=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,pm("synchronizeTabs",n,"experimentalForceOwningTab",s)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return XT(this._delegate)}onSnapshotsInSync(e){return O_(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ys(this,mm(this._delegate,e))}catch(n){throw Ye(n,"collection()","Firestore.collection()")}}doc(e){try{return new mt(this,Oo(this._delegate,e))}catch(n){throw Ye(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Qe(this,KT(this._delegate,e))}catch(n){throw Ye(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return R_(this._delegate,n=>e(new Vm(this,n)))}batch(){return Re(this._delegate),new Um(new E_(this._delegate,e=>Ci(this._delegate,e)))}loadBundle(e){return e_(this._delegate,e)}namedQuery(e){return t_(this._delegate,e).then(n=>n?new Qe(this,n):null)}}class va extends Pl{constructor(e){super();this.firestore=e}convertBytes(e){return new ti(new Rt(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return mt.forKey(n,this.firestore,null)}}function j_(t){tE(t)}class Vm{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new va(e)}get(e){const n=Rn(e);return this._delegate.get(n).then(s=>new ni(this._firestore,new Gt(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,n.converter)))}set(e,n,s){const r=Rn(e);return s?(Ll("Transaction.set",s),this._delegate.set(r,n,s)):this._delegate.set(r,n),this}update(e,n,s,...r){const i=Rn(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,s,...r),this}delete(e){const n=Rn(e);return this._delegate.delete(n),this}}class Um{constructor(e){this._delegate=e}set(e,n,s){const r=Rn(e);return s?(Ll("WriteBatch.set",s),this._delegate.set(r,n,s)):this._delegate.set(r,n),this}update(e,n,s,...r){const i=Rn(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,s,...r),this}delete(e){const n=Rn(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Zn{constructor(e,n,s){this._firestore=e,this._userDataWriter=n,this._delegate=s}fromFirestore(e,n){const s=new kr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new si(this._firestore,s),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const s=Zn.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(n);return i||(i=new Zn(e,new va(e),n),r.set(n,i)),i}}Zn.INSTANCES=new WeakMap;class mt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new va(e)}static forPath(e,n,s){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new mt(n,new ie(n._delegate,s,new k(e)))}static forKey(e,n,s){return new mt(n,new ie(n._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Ys(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ys(this.firestore,mm(this._delegate,e))}catch(n){throw Ye(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=be(e),e instanceof ie?ym(this._delegate,e):!1}set(e,n){n=Ll("DocumentReference.set",n);try{return n?kd(this._delegate,e,n):kd(this._delegate,e)}catch(s){throw Ye(s,"setDoc()","DocumentReference.set()")}}update(e,n,...s){try{return arguments.length===1?Rd(this._delegate,e):Rd(this._delegate,e,n,...s)}catch(r){throw Ye(r,"updateDoc()","DocumentReference.update()")}}delete(){return N_(this._delegate)}onSnapshot(...e){const n=Bm(e),s=$m(e,r=>new ni(this.firestore,new Gt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return Lm(this._delegate,n,s)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=__(this._delegate):(e==null?void 0:e.source)==="server"?n=S_(this._delegate):n=T_(this._delegate),n.then(s=>new ni(this.firestore,new Gt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new mt(this.firestore,e?this._delegate.withConverter(Zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ye(t,e,n){return t.message=t.message.replace(e,n),t}function Bm(t){for(const e of t)if(typeof e=="object"&&!Mc(e))return e;return{}}function $m(t,e){var n,s;let r;return Mc(t[0])?r=t[0]:Mc(t[1])?r=t[1]:typeof t[0]=="function"?r={next:t[0],error:t[1],complete:t[2]}:r={next:t[1],error:t[2],complete:t[3]},{next:i=>{r.next&&r.next(e(i))},error:(n=r.error)===null||n===void 0?void 0:n.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class ni{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new mt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Nm(this._delegate,e._delegate)}}class si extends ni{data(e){const n=this._delegate.data(e);return nE(n!==void 0),n}}class Qe{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new va(e)}where(e,n,s){try{return new Qe(this.firestore,en(this._delegate,d_(e,n,s)))}catch(r){throw Ye(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Qe(this.firestore,en(this._delegate,p_(e,n)))}catch(s){throw Ye(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Qe(this.firestore,en(this._delegate,g_(e)))}catch(n){throw Ye(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Qe(this.firestore,en(this._delegate,m_(e)))}catch(n){throw Ye(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Qe(this.firestore,en(this._delegate,y_(...e)))}catch(n){throw Ye(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Qe(this.firestore,en(this._delegate,w_(...e)))}catch(n){throw Ye(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Qe(this.firestore,en(this._delegate,v_(...e)))}catch(n){throw Ye(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Qe(this.firestore,en(this._delegate,b_(...e)))}catch(n){throw Ye(n,"endAt()","Query.endAt()")}}isEqual(e){return wm(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=C_(this._delegate):(e==null?void 0:e.source)==="server"?n=A_(this._delegate):n=x_(this._delegate),n.then(s=>new Lc(this.firestore,new wn(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const n=Bm(e),s=$m(e,r=>new Lc(this.firestore,new wn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return Lm(this._delegate,n,s)}withConverter(e){return new Qe(this.firestore,e?this._delegate.withConverter(Zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class K_{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new si(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Lc{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Qe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new si(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new K_(this._firestore,n))}forEach(e,n){this._delegate.forEach(s=>{e.call(n,new si(this._firestore,s))})}isEqual(e){return Nm(this._delegate,e._delegate)}}class Ys extends Qe{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new mt(this.firestore,e):null}doc(e){try{return e===void 0?new mt(this.firestore,Oo(this._delegate)):new mt(this.firestore,Oo(this._delegate,e))}catch(n){throw Ye(n,"doc()","CollectionReference.doc()")}}add(e){return D_(this._delegate,e).then(n=>new mt(this.firestore,n))}isEqual(e){return ym(this._delegate,e._delegate)}withConverter(e){return new Ys(this.firestore,e?this._delegate.withConverter(Zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Rn(t){return W(t,ie)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(...e){this._delegate=new yn(...e)}static documentId(){return new Fl(xe.keyField().canonicalString())}isEqual(e){return e=be(e),e instanceof yn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._delegate=e}static serverTimestamp(){const e=M_();return e._methodName="FieldValue.serverTimestamp",new Nn(e)}static delete(){const e=P_();return e._methodName="FieldValue.delete",new Nn(e)}static arrayUnion(...e){const n=L_(...e);return n._methodName="FieldValue.arrayUnion",new Nn(n)}static arrayRemove(...e){const n=F_(...e);return n._methodName="FieldValue.arrayRemove",new Nn(n)}static increment(e){const n=V_(e);return n._methodName="FieldValue.increment",new Nn(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_={Firestore:Fm,GeoPoint:pa,Timestamp:Ne,Blob:ti,Transaction:Vm,WriteBatch:Um,DocumentReference:mt,DocumentSnapshot:ni,Query:Qe,QueryDocumentSnapshot:si,QuerySnapshot:Lc,CollectionReference:Ys,FieldPath:Fl,FieldValue:Nn,setLogLevel:j_,CACHE_SIZE_UNLIMITED:GT};function z_(t,e){t.INTERNAL.registerComponent(new Bn("firestore-compat",n=>{const s=n.getProvider("app-compat").getImmediate(),r=n.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},H_)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){z_(t,(e,n)=>new Fm(e,n,new q_)),t.registerVersion(U_,B_)}G_(Hf);export{Ut as F,X_ as a,Nf as b,Y_ as c,Q_ as d,Pw as e,Hf as f,J_ as g,Dt as h,Z_ as i,Aw as o,W_ as t,Ry as u};

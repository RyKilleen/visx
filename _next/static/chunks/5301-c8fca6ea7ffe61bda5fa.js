"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5301],{47033:function(n,r,t){function e(n){return null==n?null:u(n)}function u(n){if("function"!==typeof n)throw new Error;return n}t.d(r,{j:function(){return e},C:function(){return u}})},35227:function(n,r,t){function e(){return 0}function u(n){return function(){return n}}t.d(r,{G:function(){return e},Z:function(){return u}})},22210:function(n,r,t){function e(n){var r=0,t=n.children,e=t&&t.length;if(e)for(;--e>=0;)r+=t[e].value;else r=1;n.value=r}function u(n,r){var t,e,u,o,c,h=new a(n),l=+n.value&&(h.value=n.value),d=[h];for(null==r&&(r=i);t=d.pop();)if(l&&(t.value=+t.data.value),(u=r(t.data))&&(c=u.length))for(t.children=new Array(c),o=c-1;o>=0;--o)d.push(e=t.children[o]=new a(u[o])),e.parent=t,e.depth=t.depth+1;return h.eachBefore(f)}function i(n){return n.children}function o(n){n.data=n.data.data}function f(n){var r=0;do{n.height=r}while((n=n.parent)&&n.height<++r)}function a(n){this.data=n,this.depth=this.height=0,this.parent=null}t.d(r,{NB:function(){return a},le:function(){return f},ZP:function(){return u}}),a.prototype=u.prototype={constructor:a,count:function(){return this.eachAfter(e)},each:function(n){var r,t,e,u,i=this,o=[i];do{for(r=o.reverse(),o=[];i=r.pop();)if(n(i),t=i.children)for(e=0,u=t.length;e<u;++e)o.push(t[e])}while(o.length);return this},eachAfter:function(n){for(var r,t,e,u=this,i=[u],o=[];u=i.pop();)if(o.push(u),r=u.children)for(t=0,e=r.length;t<e;++t)i.push(r[t]);for(;u=o.pop();)n(u);return this},eachBefore:function(n){for(var r,t,e=this,u=[e];e=u.pop();)if(n(e),r=e.children)for(t=r.length-1;t>=0;--t)u.push(r[t]);return this},sum:function(n){return this.eachAfter((function(r){for(var t=+n(r.data)||0,e=r.children,u=e&&e.length;--u>=0;)t+=e[u].value;r.value=t}))},sort:function(n){return this.eachBefore((function(r){r.children&&r.children.sort(n)}))},path:function(n){for(var r=this,t=function(n,r){if(n===r)return n;var t=n.ancestors(),e=r.ancestors(),u=null;n=t.pop(),r=e.pop();for(;n===r;)u=n,n=t.pop(),r=e.pop();return u}(r,n),e=[r];r!==t;)r=r.parent,e.push(r);for(var u=e.length;n!==t;)e.splice(u,0,n),n=n.parent;return e},ancestors:function(){for(var n=this,r=[n];n=n.parent;)r.push(n);return r},descendants:function(){var n=[];return this.each((function(r){n.push(r)})),n},leaves:function(){var n=[];return this.eachBefore((function(r){r.children||n.push(r)})),n},links:function(){var n=this,r=[];return n.each((function(t){t!==n&&r.push({source:t.parent,target:t})})),r},copy:function(){return u(this).eachBefore(o)}}},28426:function(n,r,t){t.d(r,{Z:function(){return Z}});var e=Array.prototype.slice;function u(n){for(var r,t,u=0,o=(n=function(n){for(var r,t,e=n.length;e;)t=Math.random()*e--|0,r=n[e],n[e]=n[t],n[t]=r;return n}(e.call(n))).length,a=[];u<o;)r=n[u],t&&f(t,r)?++u:(t=c(a=i(a,r)),u=0);return t}function i(n,r){var t,e;if(a(r,n))return[r];for(t=0;t<n.length;++t)if(o(r,n[t])&&a(h(n[t],r),n))return[n[t],r];for(t=0;t<n.length-1;++t)for(e=t+1;e<n.length;++e)if(o(h(n[t],n[e]),r)&&o(h(n[t],r),n[e])&&o(h(n[e],r),n[t])&&a(l(n[t],n[e],r),n))return[n[t],n[e],r];throw new Error}function o(n,r){var t=n.r-r.r,e=r.x-n.x,u=r.y-n.y;return t<0||t*t<e*e+u*u}function f(n,r){var t=n.r-r.r+1e-6,e=r.x-n.x,u=r.y-n.y;return t>0&&t*t>e*e+u*u}function a(n,r){for(var t=0;t<r.length;++t)if(!f(n,r[t]))return!1;return!0}function c(n){switch(n.length){case 1:return{x:(r=n[0]).x,y:r.y,r:r.r};case 2:return h(n[0],n[1]);case 3:return l(n[0],n[1],n[2])}var r}function h(n,r){var t=n.x,e=n.y,u=n.r,i=r.x,o=r.y,f=r.r,a=i-t,c=o-e,h=f-u,l=Math.sqrt(a*a+c*c);return{x:(t+i+a/l*h)/2,y:(e+o+c/l*h)/2,r:(l+u+f)/2}}function l(n,r,t){var e=n.x,u=n.y,i=n.r,o=r.x,f=r.y,a=r.r,c=t.x,h=t.y,l=t.r,d=e-o,p=e-c,v=u-f,s=u-h,x=a-i,y=l-i,g=e*e+u*u-i*i,w=g-o*o-f*f+a*a,Z=g-c*c-h*h+l*l,_=p*v-d*s,M=(v*Z-s*w)/(2*_)-e,B=(s*x-v*y)/_,m=(p*w-d*Z)/(2*_)-u,A=(d*y-p*x)/_,E=B*B+A*A-1,k=2*(i+M*B+m*A),q=M*M+m*m-i*i,G=-(E?(k+Math.sqrt(k*k-4*E*q))/(2*E):q/k);return{x:e+M+B*G,y:u+m+A*G,r:G}}function d(n,r,t){var e,u,i,o,f=n.x-r.x,a=n.y-r.y,c=f*f+a*a;c?(u=r.r+t.r,u*=u,o=n.r+t.r,u>(o*=o)?(e=(c+o-u)/(2*c),i=Math.sqrt(Math.max(0,o/c-e*e)),t.x=n.x-e*f-i*a,t.y=n.y-e*a+i*f):(e=(c+u-o)/(2*c),i=Math.sqrt(Math.max(0,u/c-e*e)),t.x=r.x+e*f-i*a,t.y=r.y+e*a+i*f)):(t.x=r.x+t.r,t.y=r.y)}function p(n,r){var t=n.r+r.r-1e-6,e=r.x-n.x,u=r.y-n.y;return t>0&&t*t>e*e+u*u}function v(n){var r=n._,t=n.next._,e=r.r+t.r,u=(r.x*t.r+t.x*r.r)/e,i=(r.y*t.r+t.y*r.r)/e;return u*u+i*i}function s(n){this._=n,this.next=null,this.previous=null}function x(n){if(!(i=n.length))return 0;var r,t,e,i,o,f,a,c,h,l,x;if((r=n[0]).x=0,r.y=0,!(i>1))return r.r;if(t=n[1],r.x=-t.r,t.x=r.r,t.y=0,!(i>2))return r.r+t.r;d(t,r,e=n[2]),r=new s(r),t=new s(t),e=new s(e),r.next=e.previous=t,t.next=r.previous=e,e.next=t.previous=r;n:for(a=3;a<i;++a){d(r._,t._,e=n[a]),e=new s(e),c=t.next,h=r.previous,l=t._.r,x=r._.r;do{if(l<=x){if(p(c._,e._)){t=c,r.next=t,t.previous=r,--a;continue n}l+=c._.r,c=c.next}else{if(p(h._,e._)){(r=h).next=t,t.previous=r,--a;continue n}x+=h._.r,h=h.previous}}while(c!==h.next);for(e.previous=r,e.next=t,r.next=t.previous=t=e,o=v(r);(e=e.next)!==t;)(f=v(e))<o&&(r=e,o=f);t=r.next}for(r=[t._],e=t;(e=e.next)!==t;)r.push(e._);for(e=u(r),a=0;a<i;++a)(r=n[a]).x-=e.x,r.y-=e.y;return e.r}var y=t(47033),g=t(35227);function w(n){return Math.sqrt(n.value)}function Z(){var n=null,r=1,t=1,e=g.G;function u(u){return u.x=r/2,u.y=t/2,n?u.eachBefore(_(n)).eachAfter(M(e,.5)).eachBefore(B(1)):u.eachBefore(_(w)).eachAfter(M(g.G,1)).eachAfter(M(e,u.r/Math.min(r,t))).eachBefore(B(Math.min(r,t)/(2*u.r))),u}return u.radius=function(r){return arguments.length?(n=(0,y.j)(r),u):n},u.size=function(n){return arguments.length?(r=+n[0],t=+n[1],u):[r,t]},u.padding=function(n){return arguments.length?(e="function"===typeof n?n:(0,g.Z)(+n),u):e},u}function _(n){return function(r){r.children||(r.r=Math.max(0,+n(r)||0))}}function M(n,r){return function(t){if(e=t.children){var e,u,i,o=e.length,f=n(t)*r||0;if(f)for(u=0;u<o;++u)e[u].r+=f;if(i=x(e),f)for(u=0;u<o;++u)e[u].r-=f;t.r=i+f}}}function B(n){return function(r){var t=r.parent;r.r*=n,t&&(r.x=t.x+n*r.x,r.y=t.y+n*r.y)}}},10018:function(n,r,t){t.d(r,{Z:function(){return c}});var e=t(47033),u=t(22210),i={depth:-1},o={};function f(n){return n.id}function a(n){return n.parentId}function c(){var n=f,r=a;function t(t){var e,f,a,c,h,l,d,p=t.length,v=new Array(p),s={};for(f=0;f<p;++f)e=t[f],h=v[f]=new u.NB(e),null!=(l=n(e,f,t))&&(l+="")&&(s[d="$"+(h.id=l)]=d in s?o:h);for(f=0;f<p;++f)if(h=v[f],null!=(l=r(t[f],f,t))&&(l+="")){if(!(c=s["$"+l]))throw new Error("missing: "+l);if(c===o)throw new Error("ambiguous: "+l);c.children?c.children.push(h):c.children=[h],h.parent=c}else{if(a)throw new Error("multiple roots");a=h}if(!a)throw new Error("no root");if(a.parent=i,a.eachBefore((function(n){n.depth=n.parent.depth+1,--p})).eachBefore(u.le),a.parent=null,p>0)throw new Error("cycle");return a}return t.id=function(r){return arguments.length?(n=(0,e.C)(r),t):n},t.parentId=function(n){return arguments.length?(r=(0,e.C)(n),t):r},t}},29483:function(n,r,t){function e(n,r,t,e,u){var i,o,f=n.children,a=f.length,c=new Array(a+1);for(c[0]=o=i=0;i<a;++i)c[i+1]=o+=f[i].value;!function n(r,t,e,u,i,o,a){if(r>=t-1){var h=f[r];return h.x0=u,h.y0=i,h.x1=o,void(h.y1=a)}var l=c[r],d=e/2+l,p=r+1,v=t-1;for(;p<v;){var s=p+v>>>1;c[s]<d?p=s+1:v=s}d-c[p-1]<c[p]-d&&r+1<p&&--p;var x=c[p]-l,y=e-x;if(o-u>a-i){var g=(u*y+o*x)/e;n(r,p,x,u,i,g,a),n(p,t,y,g,i,o,a)}else{var w=(i*y+a*x)/e;n(r,p,x,u,i,o,w),n(p,t,y,u,w,o,a)}}(0,a,n.value,r,t,e,u)}t.d(r,{Z:function(){return e}})},44925:function(n,r,t){function e(n,r,t,e,u){for(var i,o=n.children,f=-1,a=o.length,c=n.value&&(e-r)/n.value;++f<a;)(i=o[f]).y0=t,i.y1=u,i.x0=r,i.x1=r+=i.value*c}t.d(r,{Z:function(){return e}})},23062:function(n,r,t){t.d(r,{Z:function(){return f}});var e=t(86228),u=t(21086),i=t(47033),o=t(35227);function f(){var n=u.ZP,r=!1,t=1,f=1,a=[0],c=o.G,h=o.G,l=o.G,d=o.G,p=o.G;function v(n){return n.x0=n.y0=0,n.x1=t,n.y1=f,n.eachBefore(s),a=[0],r&&n.eachBefore(e.Z),n}function s(r){var t=a[r.depth],e=r.x0+t,u=r.y0+t,i=r.x1-t,o=r.y1-t;i<e&&(e=i=(e+i)/2),o<u&&(u=o=(u+o)/2),r.x0=e,r.y0=u,r.x1=i,r.y1=o,r.children&&(t=a[r.depth+1]=c(r)/2,e+=p(r)-t,u+=h(r)-t,(i-=l(r)-t)<e&&(e=i=(e+i)/2),(o-=d(r)-t)<u&&(u=o=(u+o)/2),n(r,e,u,i,o))}return v.round=function(n){return arguments.length?(r=!!n,v):r},v.size=function(n){return arguments.length?(t=+n[0],f=+n[1],v):[t,f]},v.tile=function(r){return arguments.length?(n=(0,i.C)(r),v):n},v.padding=function(n){return arguments.length?v.paddingInner(n).paddingOuter(n):v.paddingInner()},v.paddingInner=function(n){return arguments.length?(c="function"===typeof n?n:(0,o.Z)(+n),v):c},v.paddingOuter=function(n){return arguments.length?v.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):v.paddingTop()},v.paddingTop=function(n){return arguments.length?(h="function"===typeof n?n:(0,o.Z)(+n),v):h},v.paddingRight=function(n){return arguments.length?(l="function"===typeof n?n:(0,o.Z)(+n),v):l},v.paddingBottom=function(n){return arguments.length?(d="function"===typeof n?n:(0,o.Z)(+n),v):d},v.paddingLeft=function(n){return arguments.length?(p="function"===typeof n?n:(0,o.Z)(+n),v):p},v}},3346:function(n,r,t){var e=t(44925),u=t(12460),i=t(21086);r.Z=function n(r){function t(n,t,o,f,a){if((c=n._squarify)&&c.ratio===r)for(var c,h,l,d,p,v=-1,s=c.length,x=n.value;++v<s;){for(l=(h=c[v]).children,d=h.value=0,p=l.length;d<p;++d)h.value+=l[d].value;h.dice?(0,e.Z)(h,t,o,f,o+=(a-o)*h.value/x):(0,u.Z)(h,t,o,t+=(f-t)*h.value/x,a),x-=h.value}else n._squarify=c=(0,i.DD)(r,n,t,o,f,a),c.ratio=r}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(i.Sk)},86228:function(n,r,t){function e(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}t.d(r,{Z:function(){return e}})},12460:function(n,r,t){function e(n,r,t,e,u){for(var i,o=n.children,f=-1,a=o.length,c=n.value&&(u-t)/n.value;++f<a;)(i=o[f]).x0=r,i.x1=e,i.y0=t,i.y1=t+=i.value*c}t.d(r,{Z:function(){return e}})},44164:function(n,r,t){t.d(r,{Z:function(){return i}});var e=t(44925),u=t(12460);function i(n,r,t,i,o){(1&n.depth?u.Z:e.Z)(n,r,t,i,o)}},21086:function(n,r,t){t.d(r,{Sk:function(){return i},DD:function(){return o}});var e=t(44925),u=t(12460),i=(1+Math.sqrt(5))/2;function o(n,r,t,i,o,f){for(var a,c,h,l,d,p,v,s,x,y,g,w=[],Z=r.children,_=0,M=0,B=Z.length,m=r.value;_<B;){h=o-t,l=f-i;do{d=Z[M++].value}while(!d&&M<B);for(p=v=d,g=d*d*(y=Math.max(l/h,h/l)/(m*n)),x=Math.max(v/g,g/p);M<B;++M){if(d+=c=Z[M].value,c<p&&(p=c),c>v&&(v=c),g=d*d*y,(s=Math.max(v/g,g/p))>x){d-=c;break}x=s}w.push(a={value:d,dice:h<l,children:Z.slice(_,M)}),a.dice?(0,e.Z)(a,t,i,o,m?i+=l*d/m:f):(0,u.Z)(a,t,i,m?t+=h*d/m:o,f),m-=d,_=M}return w}r.ZP=function n(r){function t(n,t,e,u,i){o(r,n,t,e,u,i)}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(i)}}]);
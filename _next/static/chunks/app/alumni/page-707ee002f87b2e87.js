(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{5896:function(e,r,t){Promise.resolve().then(t.bind(t,1002))},1002:function(e,r,t){"use strict";t.r(r);var l=t(7437),a=t(2265),n=t(7648),s=t(6070),i=t(781),o=t(1103),d=t(598),c=t(3270),u=t(3680),m=t(9883);let f=e=>{var r,t;let{member:a}=e,f=(null==a?void 0:null===(t=a.image)||void 0===t?void 0:null===(r=t.asset)||void 0===r?void 0:r._ref)?(0,c.u)(a.image.asset._ref).url():"";return(0,l.jsx)(s.Zb,{className:"group w-full max-w-xs transition-all duration-300 hover:shadow-xl",children:(0,l.jsxs)(s.aY,{className:"relative h-[320px] p-0",children:[(0,l.jsx)("div",{className:"relative flex h-1/3 items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200",children:(0,l.jsx)("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2",children:(0,l.jsx)(o.pn,{children:(0,l.jsxs)(o.u,{children:[(0,l.jsx)(o.aJ,{asChild:!0,children:a.linkedin?(0,l.jsx)(n.default,{href:a.linkedin,target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("div",{className:"group relative",children:[(0,l.jsxs)(i.qE,{className:"h-32 w-32 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105",children:[(0,l.jsx)(i.F$,{src:f,alt:a.name,className:"object-cover"}),(0,l.jsx)(i.Q5,{children:a.name.slice(0,2).toUpperCase()})]}),(0,l.jsx)("div",{className:"absolute inset-0 flex items-center justify-center rounded-full bg-black/0 transition-all duration-300 group-hover:bg-black/20",children:(0,l.jsx)(d.Z,{className:"text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"})})]})}):(0,l.jsxs)(i.qE,{className:"h-32 w-32 border-4 border-white shadow-lg",children:[(0,l.jsx)(i.F$,{src:f,alt:a.name,className:"object-cover"}),(0,l.jsx)(i.Q5,{children:a.name.slice(0,2).toUpperCase()})]})}),a.linkedin&&(0,l.jsx)(o._v,{children:(0,l.jsx)("p",{children:"View LinkedIn Profile"})})]})})})}),(0,l.jsxs)("div",{className:"flex h-[270px] flex-col px-6 pb-6 pt-20 text-center",children:[(0,l.jsx)("h3",{className:"bg-blue-600 bg-clip-text text-2xl font-bold text-transparent",children:a.name}),(0,l.jsx)("h4",{className:"mt-2 text-lg font-medium text-blue-600",children:(0,l.jsx)(u.YI,{value:a.description,components:m.J})})]})]})})},x=e=>{let{category:r}=e;return r.alumniMembers&&0!==r.alumniMembers.length?(0,l.jsxs)("div",{className:"mb-16",children:[(0,l.jsx)("h2",{className:"mb-8 text-4xl font-bold text-blue-800",children:r.categoryName}),(0,l.jsx)("div",{className:"grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:r.alumniMembers.map((e,r)=>(0,l.jsx)(f,{member:e},r))})]}):null};r.default=()=>{let[e,r]=(0,a.useState)([]);return(0,a.useEffect)(()=>{c.Z.fetch('*[_type == "memberCategory"] | order(order asc) {\n          categoryName,\n          order,\n          "alumniMembers": alumniMembers[]-> {\n            name,\n            isAlumni,\n            image,\n            linkedin,\n            description\n          }\n        }').then(e=>{console.log(e),r(e.filter(e=>e.alumniMembers&&e.alumniMembers.length>0))}).catch(e=>{console.error("Error fetching alumni categories:",e)})},[]),(0,l.jsxs)("div",{className:"container mx-auto min-h-screen px-4 py-8",children:[(0,l.jsx)("h1",{className:"mb-16 text-center text-6xl font-bold",children:(0,l.jsx)("span",{className:"bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent",children:"Alumni"})}),e.map((e,r)=>(0,l.jsx)(x,{category:e},r))]})}},9883:function(e,r,t){"use strict";t.d(r,{J:function(){return n}});var l=t(7437),a=t(3270);let n={block:{h1:e=>{let{children:r}=e;return(0,l.jsx)("h1",{className:"mb-4 mt-8 text-4xl font-bold text-gray-900",children:r})},h2:e=>{let{children:r}=e;return(0,l.jsx)("h2",{className:"mb-3 mt-6 text-3xl font-semibold text-gray-800",children:r})},h3:e=>{let{children:r}=e;return(0,l.jsx)("h3",{className:"mb-2 mt-4 text-2xl font-medium text-gray-700",children:r})},h4:e=>{let{children:r}=e;return(0,l.jsx)("h4",{className:"mb-2 mt-3 text-xl font-medium text-gray-700",children:r})},normal:e=>{let{children:r}=e;return(0,l.jsx)("p",{className:"mb-4 leading-relaxed text-gray-600",children:r})},blockquote:e=>{let{children:r}=e;return(0,l.jsx)("blockquote",{className:"my-4 border-l-4 border-blue-500 py-2 pl-4 italic text-gray-700",children:r})}},types:{image:e=>{let{value:r}=e;return(0,l.jsx)("div",{className:"my-8",children:(0,l.jsx)("img",{src:(0,a.u)(r.asset._ref).url(),alt:r.alt||"",className:"h-auto max-w-full rounded-lg shadow-md"})})},callToAction:e=>{let{value:r,isInline:t}=e;return t?(0,l.jsx)("a",{href:r.url,className:"text-blue-600 underline underline-offset-2 hover:text-blue-800",children:r.text}):(0,l.jsx)("div",{className:"my-4 rounded-lg border border-blue-200 bg-blue-50 p-4",children:r.text})}},marks:{link:e=>{let{children:r,value:t}=e,a=(null==t?void 0:t.href.startsWith("/"))?void 0:"noreferrer noopener";return(0,l.jsx)("a",{href:null==t?void 0:t.href,rel:a,className:"text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-800",children:r})},strong:e=>{let{children:r}=e;return(0,l.jsx)("strong",{className:"font-semibold text-gray-900",children:r})},em:e=>{let{children:r}=e;return(0,l.jsx)("em",{className:"italic text-gray-800",children:r})},code:e=>{let{children:r}=e;return(0,l.jsx)("code",{className:"rounded bg-gray-100 px-1 py-0.5 font-mono text-sm",children:r})}},list:{bullet:e=>{let{children:r}=e;return(0,l.jsx)("ul",{className:"mb-4 ml-6 list-outside list-disc space-y-2 text-gray-600",children:r})},number:e=>{let{children:r}=e;return(0,l.jsx)("ol",{className:"mb-4 ml-6 list-outside list-decimal space-y-2 text-gray-600",children:r})}},listItem:{bullet:e=>{let{children:r}=e;return(0,l.jsx)("li",{className:"leading-relaxed",children:r})},number:e=>{let{children:r}=e;return(0,l.jsx)("li",{className:"leading-relaxed",children:r})}}}},781:function(e,r,t){"use strict";t.d(r,{qE:function(){return N},Q5:function(){return y},F$:function(){return v}});var l=t(7437),a=t(2265),n=t(3966),s=t(6606),i=t(1188),o=t(6840),d="Avatar",[c,u]=(0,n.b)(d),[m,f]=c(d),x=a.forwardRef((e,r)=>{let{__scopeAvatar:t,...n}=e,[s,i]=a.useState("idle");return(0,l.jsx)(m,{scope:t,imageLoadingStatus:s,onImageLoadingStatusChange:i,children:(0,l.jsx)(o.WV.span,{...n,ref:r})})});x.displayName=d;var h="AvatarImage",p=a.forwardRef((e,r)=>{let{__scopeAvatar:t,src:n,onLoadingStatusChange:d=()=>{},...c}=e,u=f(h,t),m=function(e,r){let[t,l]=a.useState("idle");return(0,i.b)(()=>{if(!e){l("error");return}let t=!0,a=new window.Image,n=e=>()=>{t&&l(e)};return l("loading"),a.onload=n("loaded"),a.onerror=n("error"),a.src=e,r&&(a.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(n,c.referrerPolicy),x=(0,s.W)(e=>{d(e),u.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==m&&x(m)},[m,x]),"loaded"===m?(0,l.jsx)(o.WV.img,{...c,ref:r,src:n}):null});p.displayName=h;var b="AvatarFallback",g=a.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:n,...s}=e,i=f(b,t),[d,c]=a.useState(void 0===n);return a.useEffect(()=>{if(void 0!==n){let e=window.setTimeout(()=>c(!0),n);return()=>window.clearTimeout(e)}},[n]),d&&"loaded"!==i.imageLoadingStatus?(0,l.jsx)(o.WV.span,{...s,ref:r}):null});g.displayName=b;var j=t(4508);let N=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)(x,{ref:r,className:(0,j.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});N.displayName=x.displayName;let v=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)(p,{ref:r,className:(0,j.cn)("aspect-square h-full w-full",t),...a})});v.displayName=p.displayName;let y=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)(g,{ref:r,className:(0,j.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});y.displayName=g.displayName},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},Zb:function(){return s},aY:function(){return d},eW:function(){return c},ll:function(){return o}});var l=t(7437),a=t(2265),n=t(4508);let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...a})});s.displayName="Card";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",t),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)("h3",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",t),...a})});o.displayName="CardTitle",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)("p",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",t),...a})});d.displayName="CardContent";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,l.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",t),...a})});c.displayName="CardFooter"},1103:function(e,r,t){"use strict";t.d(r,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var l=t(7437),a=t(2265),n=t(9249),s=t(4508);let i=n.zt,o=n.fC,d=n.xz,c=a.forwardRef((e,r)=>{let{className:t,sideOffset:a=4,...i}=e;return(0,l.jsx)(n.h_,{children:(0,l.jsx)(n.VY,{ref:r,sideOffset:a,className:(0,s.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})})});c.displayName=n.VY.displayName},3270:function(e,r,t){"use strict";t.d(r,{u:function(){return o}});var l=t(1622),a=t(3740),n=t.n(a);let s=(0,l.eI)({projectId:"951qrjzc",dataset:"production",apiVersion:"2022-03-07",useCdn:!0});s.config().perspective="published";let i=n()(s);function o(e){return i.image(e)}r.Z=s},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return n}});var l=t(1994),a=t(3335);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,l.W)(r))}}},function(e){e.O(0,[137,372,393,680,648,943,971,117,744],function(){return e(e.s=5896)}),_N_E=e.O()}]);
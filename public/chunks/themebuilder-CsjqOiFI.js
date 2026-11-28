const I=["light","dark"],S=["primary","primaryHover","onPrimary","bodyBg","bodyColor","muted","surface","border","inputBorder","danger"],j={none:"none",subtle:"0 1px 2px rgba(0, 0, 0, 0.08)",elevated:"0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",outlined:"0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px var(--bs-border-color)"},re=`.btn-primary {
  --bs-btn-color: var(--caelrik-on-primary);
  --bs-btn-bg: var(--caelrik-primary);
  --bs-btn-border-color: var(--caelrik-primary);
  --bs-btn-hover-color: var(--caelrik-on-primary);
  --bs-btn-hover-bg: var(--caelrik-primary-hover);
  --bs-btn-hover-border-color: var(--caelrik-primary-hover);
  --bs-btn-active-color: var(--caelrik-on-primary);
  --bs-btn-active-bg: var(--caelrik-primary-hover);
  --bs-btn-active-border-color: var(--caelrik-primary-hover);
  --bs-btn-disabled-color: var(--caelrik-on-primary);
  --bs-btn-disabled-bg: var(--caelrik-primary);
  --bs-btn-disabled-border-color: var(--caelrik-primary);
  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);
}

.btn-outline-primary {
  --bs-btn-color: var(--caelrik-primary);
  --bs-btn-border-color: var(--caelrik-primary);
  --bs-btn-hover-color: var(--caelrik-on-primary);
  --bs-btn-hover-bg: var(--caelrik-primary);
  --bs-btn-hover-border-color: var(--caelrik-primary);
  --bs-btn-active-color: var(--caelrik-on-primary);
  --bs-btn-active-bg: var(--caelrik-primary-hover);
  --bs-btn-active-border-color: var(--caelrik-primary-hover);
  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);
}

.form-control,
.form-select,
.form-check-input {
  border-color: var(--caelrik-input-border);
}

.form-control:focus,
.form-select:focus,
.form-check-input:focus {
  border-color: var(--caelrik-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}

.form-check-input:checked {
  background-color: var(--caelrik-primary);
  border-color: var(--caelrik-primary);
}

.nav-pills {
  --bs-nav-pills-link-active-bg: var(--caelrik-primary);
  --bs-nav-pills-link-active-color: var(--caelrik-on-primary);
}

.pagination {
  --bs-pagination-active-bg: var(--caelrik-primary);
  --bs-pagination-active-border-color: var(--caelrik-primary);
  --bs-pagination-active-color: var(--caelrik-on-primary);
  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}`;function $(e){return[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)).join(", ")}function N(e,n){return`${e} {
${Object.entries(n).map(([r,a])=>`  ${r}: ${a};
`).join("")}}
`}function R(e,n){const r=e[n];return{"--bs-primary":r.primary,"--bs-primary-rgb":$(r.primary),"--bs-link-color":r.primary,"--bs-link-color-rgb":$(r.primary),"--bs-link-hover-color":r.primaryHover,"--bs-link-hover-color-rgb":$(r.primaryHover),"--bs-primary-text-emphasis":r.primaryHover,"--bs-body-bg":r.bodyBg,"--bs-body-bg-rgb":$(r.bodyBg),"--bs-body-color":r.bodyColor,"--bs-body-color-rgb":$(r.bodyColor),"--bs-secondary-color":r.muted,"--bs-tertiary-bg":r.surface,"--bs-tertiary-bg-rgb":$(r.surface),"--bs-border-color":r.border,"--bs-focus-ring-color":`rgba(${$(r.primary)}, 0.25)`,"--bs-form-invalid-color":r.danger,"--bs-form-invalid-border-color":r.danger,"--bs-danger-text-emphasis":r.danger,"--caelrik-primary":r.primary,"--caelrik-on-primary":r.onPrimary,"--caelrik-primary-hover":r.primaryHover,"--caelrik-input-border":r.inputBorder}}function H(e){let n=`/* Caelrik UI theme "${e.name}". Load it after caelrik.css. */
`;n+=N(`:root,
[data-bs-theme=light]`,R(e,"light")),n+=`
${N("[data-bs-theme=dark]",R(e,"dark"))}`;const r={};if(e.radius!==void 0&&e.radius!==null){const a=`${Math.round(e.radius*1e3)/1e3}rem`;r["--bs-border-radius"]=a,r["--caelrik-radius"]=a}return e.fontFamily&&(r["--bs-body-font-family"]=e.fontFamily),e.shadow&&(r["--caelrik-surface-shadow"]=j[e.shadow]),Object.keys(r).length>0&&(n+=`
${N(":root",r)}`),`${n}
${re}
`}function M(e){const[n,r,a]=[1,3,5].map(i=>parseInt(e.slice(i,i+2),16)/255).map(i=>i<=.03928?i/12.92:((i+.055)/1.055)**2.4);return .2126*n+.7152*r+.0722*a}function te(e,n){const[r,a]=[M(e),M(n)].sort((i,o)=>o-i);return(r+.05)/(a+.05)}function oe(e,n){return I.flatMap(r=>n.map(a=>{const i=te(e[r][a.foreground],e[r][a.background]);return{...a,mode:r,ratio:i,passes:i>=a.minimum}}))}function ne(e){return(Math.floor(e*100)/100).toFixed(2)}const ae=/^#[0-9a-f]{6}$/i,ie=/^[\p{L}\p{N} ._-]{1,60}$/u,se=/^[A-Za-z0-9 ,'"-]{1,200}$/,ce=["name","base","light","dark","radius","fontFamily","shadow"];function F(e){return typeof e=="string"&&ae.test(e)}function _(e){if(e===null||typeof e!="object"||Array.isArray(e))return{error:"A theme must be a JSON object."};const n=Object.keys(e).filter(a=>!ce.includes(a));if(n.length)return{error:`Unknown theme keys: ${n.join(", ")}.`};if(typeof e.name!="string"||!ie.test(e.name))return{error:"A theme name has 1 to 60 letters, digits, spaces, dots, dashes or underscores."};if(e.base!==void 0&&e.base!=="bootstrap")return{error:["material","tailwind"].includes(e.base)?`The ${e.base[0].toUpperCase()}${e.base.slice(1)} look was removed in Caelrik UI 0.2.0: Caelrik UI is Bootstrap only. Use "bootstrap", and a custom theme (Theme::toCss()) for your colors, radius and font.`:'The theme base can only be "bootstrap".'};const r={name:e.name};for(const a of I){const i=e[a];if(i===null||typeof i!="object"||Array.isArray(i))return{error:`The ${a} palette must be an object.`};const o=Object.keys(i);if(o.length!==S.length||!S.every(l=>o.includes(l)))return{error:`The ${a} palette needs exactly these colors: ${S.join(", ")}.`};for(const l of S)if(!F(i[l]))return{error:`Invalid color "${i[l]}" for ${a}.${l}: use #rrggbb.`};r[a]=Object.fromEntries(S.map(l=>[l,i[l].toLowerCase()]))}if(e.radius!==void 0&&e.radius!==null){if(typeof e.radius!="number"||e.radius<0||e.radius>2)return{error:"The radius must be a number between 0 and 2 (rem)."};r.radius=Math.round(e.radius*1e3)/1e3}if(e.fontFamily!==void 0&&e.fontFamily!==null){if(typeof e.fontFamily!="string"||!se.test(e.fontFamily))return{error:"A font stack has only family names, spaces, commas, quotes and dashes."};r.fontFamily=e.fontFamily}if(e.shadow!==void 0&&e.shadow!==null){if(!Object.hasOwn(j,e.shadow))return{error:`Unknown shadow "${e.shadow}". Available: ${Object.keys(j).join(", ")}.`};r.shadow=e.shadow}return{theme:r}}const P=/^[\p{L}\p{N} ._-]{1,60}$/u,D=/^[A-Za-z0-9 ,'"-]{1,200}$/,z=50,h=e=>JSON.parse(JSON.stringify(e)),K=(e,n)=>JSON.stringify(e)===JSON.stringify(n);function le(e,n){return e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/([^{}]+)\{/g,(r,a)=>{const i=a.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o===":root"?n:o.startsWith("[data-bs-theme")?`${n}${o}`:`${n} ${o}`);return`${a.match(/^\s*/)[0]}${i.join(`,
`)} {`}).trim()}function de(e){var n;try{const r=new CSSStyleSheet;return document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],a=>r.replaceSync(a)}catch{const r=document.createElement("style"),a=(n=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content");return a&&(r.nonce=a),r.dataset.caelrikThemePreview=e,document.head.append(r),i=>{r.textContent=i}}}function me(e,n){const r=n.labels??{},a=n.pairs??[],i=_(n.theme).theme;if(!i)throw new TypeError(`Caelrik: invalid theme for #${e.id}.`);let o=h(i),l=h(o);const b=[],w=new Set,d=t=>e.querySelector(t),y=d(".caelrik-theme-builder__canvas"),p=t=>d(`[name="theme[${t}]"]`),m=p("name"),f=p("radius"),B=d(`#${e.id}-radius-value`),k=p("fontFamily"),E=p("shadow"),L=d('[data-caelrik-action="undo"]'),T=d(".caelrik-theme-builder__summary"),Z=d(".caelrik-theme-builder__report ul"),G=de(e.id),Q=`#${e.id} .caelrik-theme-builder__canvas`;function O(t,s){t.setAttribute("aria-invalid","true");let c=document.getElementById(`${t.id}-error`);c||(c=document.createElement("div"),c.id=`${t.id}-error`,c.className="invalid-feedback d-block",(t.closest(".input-group")??t).after(c),t.setAttribute("aria-describedby",`${t.getAttribute("aria-describedby")??""} ${c.id}`.trim())),c.textContent=s}function C(t){t.removeAttribute("aria-invalid");const s=document.getElementById(`${t.id}-error`);if(s){s.remove();const c=(t.getAttribute("aria-describedby")??"").split(" ").filter(u=>u&&u!==s.id);c.length?t.setAttribute("aria-describedby",c.join(" ")):t.removeAttribute("aria-describedby")}}function V(){const t=oe(o,a);Z.replaceChildren(...t.map(u=>{const g=document.createElement("li");g.className=`caelrik-theme-builder__pair ${u.passes?"is-pass":"is-fail"}`,g.dataset.caelrikPair=`${u.mode}.${u.foreground}.${u.background}`;const J=g.appendChild(document.createElement("span"));J.className=`badge ${u.passes?"text-bg-success":"text-bg-danger"}`,J.textContent=u.passes?r.pass:r.fail;const ee=u.mode==="light"?r.modeLight:r.modeDark;return g.append(` ${ee} · ${u.label}: ${ne(u.ratio)}:1 (${r.needs} ${u.minimum}:1)`),g}));const s=t.filter(u=>!u.passes).length,c=s===0?r.allPass:s===1?r.oneFails:r.manyFail.replace("{count}",String(s));T.textContent!==c&&(T.textContent=c),T.classList.toggle("text-success-emphasis",s===0),T.classList.toggle("text-danger-emphasis",s>0)}function v(){G(le(H(o),Q)),V();for(const t of w)t(h(o))}function A(){m.value=o.name,f.value=String(o.radius??.375),B.textContent=String(o.radius??.375),k.value=o.fontFamily??"",E.value=o.shadow??"";for(const t of I)for(const s of S)for(const c of e.querySelectorAll(`[data-caelrik-token="${t}.${s}"]`))c.value=o[t][s];for(const t of e.querySelectorAll('[aria-invalid="true"]'))C(t);L.disabled=b.length===0}function x(){K(o,l)||(b.push(l),b.length>z&&b.shift(),l=h(o)),L.disabled=b.length===0}function U(t){const{theme:s,error:c}=_(t);if(!s)throw new TypeError(c);K(s,o)||(b.push(h(o)),b.length>z&&b.shift()),o=s,l=h(o),A(),v()}for(const t of e.querySelectorAll("[data-caelrik-token]")){const[s,c]=t.dataset.caelrikToken.split(".");t.addEventListener("input",()=>{const u=t.value.trim();if(F(u)){o[s][c]=u.toLowerCase();for(const g of e.querySelectorAll(`[data-caelrik-token="${s}.${c}"]`))g!==t&&(g.value=o[s][c]);t.type==="text"&&C(t),v()}}),t.addEventListener("change",()=>{if(t.type==="text"&&!F(t.value.trim())){O(t,r.invalidColor);return}x()})}m.addEventListener("input",()=>{P.test(m.value)&&(o.name=m.value,C(m))}),m.addEventListener("change",()=>{if(!P.test(m.value)){O(m,m.validationMessage||r.name);return}v(),x()}),f.addEventListener("input",()=>{o.radius=Number(f.value),B.textContent=f.value,v()}),f.addEventListener("change",x),k.addEventListener("input",()=>{const t=k.value.trim();if(t==="")delete o.fontFamily;else if(D.test(t))o.fontFamily=t;else return;C(k),v()}),k.addEventListener("change",()=>{const t=k.value.trim();if(t!==""&&!D.test(t)){O(k,r.fontHelp);return}x()}),E.addEventListener("change",()=>{E.value===""?delete o.shadow:o.shadow=E.value,v(),x()}),d(".caelrik-theme-builder__history").hidden=!1,L.addEventListener("click",()=>{b.length!==0&&(o=b.pop(),l=h(o),A(),v(),b.length===0&&m.focus())}),d('[data-caelrik-action="reset"]').addEventListener("click",()=>U(h(i))),d(".caelrik-theme-builder__modes").hidden=!1;for(const t of e.querySelectorAll(`input[name="${e.id}-preview-mode"]`))t.addEventListener("change",()=>{t.checked&&(y.dataset.bsTheme=t.value)});A(),v();const q={getTheme:()=>h(o),setTheme:U,toCss:()=>H(o),onChange(t){return w.add(t),()=>w.delete(t)}};return be(e,n,q),q}function W(e,n){return`${e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"theme"}.${n}`}function Y(e){return`${JSON.stringify(e,null,4)}
`}function ue(e){return`use Caelrik\\Ui\\Theme\\Theme;

$theme = Theme::fromJson(<<<'JSON'
${Y(e)}JSON);
`}function X(e,n,r){const a=URL.createObjectURL(new Blob([r],{type:n})),i=document.createElement("a");i.href=a,i.download=e,i.hidden=!0,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}function be(e,n,r){const a=n.labels??{},i=e.querySelector(".caelrik-theme-builder__message"),o=(d,y=!1)=>{i.textContent=d,i.classList.toggle("text-danger-emphasis",y)},l=d=>e.querySelector(`[data-caelrik-action="${d}"]`);e.querySelector(".caelrik-theme-builder__export").hidden=!1,l("download-css").addEventListener("click",()=>{X(W(r.getTheme().name,"css"),"text/css",r.toCss())}),l("download-json").addEventListener("click",()=>{X(W(r.getTheme().name,"json"),"application/json",Y(r.getTheme()))}),l("copy-php").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(ue(r.getTheme())),o(a.copied)}catch{o(a.copyFailed,!0)}});const b=l("import");b.addEventListener("change",async()=>{const[d]=b.files;if(b.value="",!d)return;let y;try{y=JSON.parse(await d.text())}catch(f){o(a.importError.replace("{error}",f.message),!0);return}const{theme:p,error:m}=_(y);if(!p){o(a.importError.replace("{error}",m),!0);return}r.setTheme(p),o(a.imported)});const w=e.querySelector("form");n.saveUrl&&w.addEventListener("submit",async d=>{var m;d.preventDefault();const y={"Content-Type":"application/json",Accept:"application/json"},p=n.csrf?(m=w.querySelector(`input[name="${n.csrf.field}"]`))==null?void 0:m.value:null;p&&(y["X-CSRF-TOKEN"]=p);try{const f=await fetch(n.saveUrl,{method:"POST",headers:y,credentials:"same-origin",body:JSON.stringify({theme:r.getTheme()})});o(f.ok?a.saved:a.saveFailed,!f.ok)}catch{o(a.saveFailed,!0)}})}export{W as fileName,me as initThemeBuilder,ue as phpSnippet,le as scopeCss,Y as themeJson};

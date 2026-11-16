const I=["light","dark"],S=["primary","primaryHover","onPrimary","bodyBg","bodyColor","muted","surface","border","inputBorder","danger"],j={none:"none",subtle:"0 1px 2px rgba(0, 0, 0, 0.08)",elevated:"0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",outlined:"0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px var(--bs-border-color)"},re=`.btn-primary {
  --bs-btn-color: var(--celerik-on-primary);
  --bs-btn-bg: var(--celerik-primary);
  --bs-btn-border-color: var(--celerik-primary);
  --bs-btn-hover-color: var(--celerik-on-primary);
  --bs-btn-hover-bg: var(--celerik-primary-hover);
  --bs-btn-hover-border-color: var(--celerik-primary-hover);
  --bs-btn-active-color: var(--celerik-on-primary);
  --bs-btn-active-bg: var(--celerik-primary-hover);
  --bs-btn-active-border-color: var(--celerik-primary-hover);
  --bs-btn-disabled-color: var(--celerik-on-primary);
  --bs-btn-disabled-bg: var(--celerik-primary);
  --bs-btn-disabled-border-color: var(--celerik-primary);
  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);
}

.btn-outline-primary {
  --bs-btn-color: var(--celerik-primary);
  --bs-btn-border-color: var(--celerik-primary);
  --bs-btn-hover-color: var(--celerik-on-primary);
  --bs-btn-hover-bg: var(--celerik-primary);
  --bs-btn-hover-border-color: var(--celerik-primary);
  --bs-btn-active-color: var(--celerik-on-primary);
  --bs-btn-active-bg: var(--celerik-primary-hover);
  --bs-btn-active-border-color: var(--celerik-primary-hover);
  --bs-btn-focus-shadow-rgb: var(--bs-primary-rgb);
}

.form-control,
.form-select,
.form-check-input {
  border-color: var(--celerik-input-border);
}

.form-control:focus,
.form-select:focus,
.form-check-input:focus {
  border-color: var(--celerik-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}

.form-check-input:checked {
  background-color: var(--celerik-primary);
  border-color: var(--celerik-primary);
}

.nav-pills {
  --bs-nav-pills-link-active-bg: var(--celerik-primary);
  --bs-nav-pills-link-active-color: var(--celerik-on-primary);
}

.pagination {
  --bs-pagination-active-bg: var(--celerik-primary);
  --bs-pagination-active-border-color: var(--celerik-primary);
  --bs-pagination-active-color: var(--celerik-on-primary);
  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}

.celerik-scheduler {
  --fc-button-text-color: var(--celerik-on-primary);
  --fc-button-bg-color: var(--celerik-primary);
  --fc-button-border-color: var(--celerik-primary);
  --fc-button-hover-bg-color: var(--celerik-primary-hover);
  --fc-button-hover-border-color: var(--celerik-primary-hover);
  --fc-button-active-bg-color: var(--celerik-primary-hover);
  --fc-button-active-border-color: var(--celerik-primary-hover);
  --fc-event-bg-color: var(--celerik-primary);
  --fc-event-border-color: var(--celerik-primary);
  --fc-event-text-color: var(--celerik-on-primary);
}`;function $(e){return[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)).join(", ")}function N(e,n){return`${e} {
${Object.entries(n).map(([r,i])=>`  ${r}: ${i};
`).join("")}}
`}function R(e,n){const r=e[n];return{"--bs-primary":r.primary,"--bs-primary-rgb":$(r.primary),"--bs-link-color":r.primary,"--bs-link-color-rgb":$(r.primary),"--bs-link-hover-color":r.primaryHover,"--bs-link-hover-color-rgb":$(r.primaryHover),"--bs-primary-text-emphasis":r.primaryHover,"--bs-body-bg":r.bodyBg,"--bs-body-bg-rgb":$(r.bodyBg),"--bs-body-color":r.bodyColor,"--bs-body-color-rgb":$(r.bodyColor),"--bs-secondary-color":r.muted,"--bs-tertiary-bg":r.surface,"--bs-tertiary-bg-rgb":$(r.surface),"--bs-border-color":r.border,"--bs-focus-ring-color":`rgba(${$(r.primary)}, 0.25)`,"--bs-form-invalid-color":r.danger,"--bs-form-invalid-border-color":r.danger,"--bs-danger-text-emphasis":r.danger,"--celerik-primary":r.primary,"--celerik-on-primary":r.onPrimary,"--celerik-primary-hover":r.primaryHover,"--celerik-input-border":r.inputBorder}}function H(e){let n=`/* Celerik UI theme "${e.name}". Load it after celerik.css. */
`;n+=N(`:root,
[data-bs-theme=light]`,R(e,"light")),n+=`
${N("[data-bs-theme=dark]",R(e,"dark"))}`;const r={};if(e.radius!==void 0&&e.radius!==null){const i=`${Math.round(e.radius*1e3)/1e3}rem`;r["--bs-border-radius"]=i,r["--celerik-radius"]=i}return e.fontFamily&&(r["--bs-body-font-family"]=e.fontFamily),e.shadow&&(r["--celerik-surface-shadow"]=j[e.shadow]),Object.keys(r).length>0&&(n+=`
${N(":root",r)}`),`${n}
${re}
`}function M(e){const[n,r,i]=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255).map(a=>a<=.03928?a/12.92:((a+.055)/1.055)**2.4);return .2126*n+.7152*r+.0722*i}function te(e,n){const[r,i]=[M(e),M(n)].sort((a,o)=>o-a);return(r+.05)/(i+.05)}function oe(e,n){return I.flatMap(r=>n.map(i=>{const a=te(e[r][i.foreground],e[r][i.background]);return{...i,mode:r,ratio:a,passes:a>=i.minimum}}))}function ne(e){return(Math.floor(e*100)/100).toFixed(2)}const ie=/^#[0-9a-f]{6}$/i,ae=/^[\p{L}\p{N} ._-]{1,60}$/u,se=/^[A-Za-z0-9 ,'"-]{1,200}$/,ce=["name","base","light","dark","radius","fontFamily","shadow"];function F(e){return typeof e=="string"&&ie.test(e)}function _(e){if(e===null||typeof e!="object"||Array.isArray(e))return{error:"A theme must be a JSON object."};const n=Object.keys(e).filter(i=>!ce.includes(i));if(n.length)return{error:`Unknown theme keys: ${n.join(", ")}.`};if(typeof e.name!="string"||!ae.test(e.name))return{error:"A theme name has 1 to 60 letters, digits, spaces, dots, dashes or underscores."};if(e.base!==void 0&&e.base!=="bootstrap")return{error:["material","tailwind"].includes(e.base)?`The ${e.base[0].toUpperCase()}${e.base.slice(1)} look was removed in Celerik UI 0.2.0: Celerik UI is Bootstrap only. Use "bootstrap", and a custom theme (Theme::toCss()) for your colors, radius and font.`:'The theme base can only be "bootstrap".'};const r={name:e.name};for(const i of I){const a=e[i];if(a===null||typeof a!="object"||Array.isArray(a))return{error:`The ${i} palette must be an object.`};const o=Object.keys(a);if(o.length!==S.length||!S.every(l=>o.includes(l)))return{error:`The ${i} palette needs exactly these colors: ${S.join(", ")}.`};for(const l of S)if(!F(a[l]))return{error:`Invalid color "${a[l]}" for ${i}.${l}: use #rrggbb.`};r[i]=Object.fromEntries(S.map(l=>[l,a[l].toLowerCase()]))}if(e.radius!==void 0&&e.radius!==null){if(typeof e.radius!="number"||e.radius<0||e.radius>2)return{error:"The radius must be a number between 0 and 2 (rem)."};r.radius=Math.round(e.radius*1e3)/1e3}if(e.fontFamily!==void 0&&e.fontFamily!==null){if(typeof e.fontFamily!="string"||!se.test(e.fontFamily))return{error:"A font stack has only family names, spaces, commas, quotes and dashes."};r.fontFamily=e.fontFamily}if(e.shadow!==void 0&&e.shadow!==null){if(!Object.hasOwn(j,e.shadow))return{error:`Unknown shadow "${e.shadow}". Available: ${Object.keys(j).join(", ")}.`};r.shadow=e.shadow}return{theme:r}}const P=/^[\p{L}\p{N} ._-]{1,60}$/u,D=/^[A-Za-z0-9 ,'"-]{1,200}$/,z=50,v=e=>JSON.parse(JSON.stringify(e)),K=(e,n)=>JSON.stringify(e)===JSON.stringify(n);function le(e,n){return e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/([^{}]+)\{/g,(r,i)=>{const a=i.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o===":root"?n:o.startsWith("[data-bs-theme")?`${n}${o}`:`${n} ${o}`);return`${i.match(/^\s*/)[0]}${a.join(`,
`)} {`}).trim()}function de(e){var n;try{const r=new CSSStyleSheet;return document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],i=>r.replaceSync(i)}catch{const r=document.createElement("style"),i=(n=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content");return i&&(r.nonce=i),r.dataset.celerikThemePreview=e,document.head.append(r),a=>{r.textContent=a}}}function me(e,n){const r=n.labels??{},i=n.pairs??[],a=_(n.theme).theme;if(!a)throw new TypeError(`Celerik: invalid theme for #${e.id}.`);let o=v(a),l=v(o);const b=[],w=new Set,d=t=>e.querySelector(t),y=d(".celerik-theme-builder__canvas"),p=t=>d(`[name="theme[${t}]"]`),m=p("name"),f=p("radius"),B=d(`#${e.id}-radius-value`),k=p("fontFamily"),E=p("shadow"),L=d('[data-celerik-action="undo"]'),T=d(".celerik-theme-builder__summary"),Z=d(".celerik-theme-builder__report ul"),G=de(e.id),Q=`#${e.id} .celerik-theme-builder__canvas`;function O(t,s){t.setAttribute("aria-invalid","true");let c=document.getElementById(`${t.id}-error`);c||(c=document.createElement("div"),c.id=`${t.id}-error`,c.className="invalid-feedback d-block",(t.closest(".input-group")??t).after(c),t.setAttribute("aria-describedby",`${t.getAttribute("aria-describedby")??""} ${c.id}`.trim())),c.textContent=s}function C(t){t.removeAttribute("aria-invalid");const s=document.getElementById(`${t.id}-error`);if(s){s.remove();const c=(t.getAttribute("aria-describedby")??"").split(" ").filter(u=>u&&u!==s.id);c.length?t.setAttribute("aria-describedby",c.join(" ")):t.removeAttribute("aria-describedby")}}function V(){const t=oe(o,i);Z.replaceChildren(...t.map(u=>{const g=document.createElement("li");g.className=`celerik-theme-builder__pair ${u.passes?"is-pass":"is-fail"}`,g.dataset.celerikPair=`${u.mode}.${u.foreground}.${u.background}`;const J=g.appendChild(document.createElement("span"));J.className=`badge ${u.passes?"text-bg-success":"text-bg-danger"}`,J.textContent=u.passes?r.pass:r.fail;const ee=u.mode==="light"?r.modeLight:r.modeDark;return g.append(` ${ee} · ${u.label}: ${ne(u.ratio)}:1 (${r.needs} ${u.minimum}:1)`),g}));const s=t.filter(u=>!u.passes).length,c=s===0?r.allPass:s===1?r.oneFails:r.manyFail.replace("{count}",String(s));T.textContent!==c&&(T.textContent=c),T.classList.toggle("text-success-emphasis",s===0),T.classList.toggle("text-danger-emphasis",s>0)}function h(){G(le(H(o),Q)),V();for(const t of w)t(v(o))}function A(){m.value=o.name,f.value=String(o.radius??.375),B.textContent=String(o.radius??.375),k.value=o.fontFamily??"",E.value=o.shadow??"";for(const t of I)for(const s of S)for(const c of e.querySelectorAll(`[data-celerik-token="${t}.${s}"]`))c.value=o[t][s];for(const t of e.querySelectorAll('[aria-invalid="true"]'))C(t);L.disabled=b.length===0}function x(){K(o,l)||(b.push(l),b.length>z&&b.shift(),l=v(o)),L.disabled=b.length===0}function U(t){const{theme:s,error:c}=_(t);if(!s)throw new TypeError(c);K(s,o)||(b.push(v(o)),b.length>z&&b.shift()),o=s,l=v(o),A(),h()}for(const t of e.querySelectorAll("[data-celerik-token]")){const[s,c]=t.dataset.celerikToken.split(".");t.addEventListener("input",()=>{const u=t.value.trim();if(F(u)){o[s][c]=u.toLowerCase();for(const g of e.querySelectorAll(`[data-celerik-token="${s}.${c}"]`))g!==t&&(g.value=o[s][c]);t.type==="text"&&C(t),h()}}),t.addEventListener("change",()=>{if(t.type==="text"&&!F(t.value.trim())){O(t,r.invalidColor);return}x()})}m.addEventListener("input",()=>{P.test(m.value)&&(o.name=m.value,C(m))}),m.addEventListener("change",()=>{if(!P.test(m.value)){O(m,m.validationMessage||r.name);return}h(),x()}),f.addEventListener("input",()=>{o.radius=Number(f.value),B.textContent=f.value,h()}),f.addEventListener("change",x),k.addEventListener("input",()=>{const t=k.value.trim();if(t==="")delete o.fontFamily;else if(D.test(t))o.fontFamily=t;else return;C(k),h()}),k.addEventListener("change",()=>{const t=k.value.trim();if(t!==""&&!D.test(t)){O(k,r.fontHelp);return}x()}),E.addEventListener("change",()=>{E.value===""?delete o.shadow:o.shadow=E.value,h(),x()}),d(".celerik-theme-builder__history").hidden=!1,L.addEventListener("click",()=>{b.length!==0&&(o=b.pop(),l=v(o),A(),h(),b.length===0&&m.focus())}),d('[data-celerik-action="reset"]').addEventListener("click",()=>U(v(a))),d(".celerik-theme-builder__modes").hidden=!1;for(const t of e.querySelectorAll(`input[name="${e.id}-preview-mode"]`))t.addEventListener("change",()=>{t.checked&&(y.dataset.bsTheme=t.value)});A(),h();const q={getTheme:()=>v(o),setTheme:U,toCss:()=>H(o),onChange(t){return w.add(t),()=>w.delete(t)}};return be(e,n,q),q}function W(e,n){return`${e.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"theme"}.${n}`}function Y(e){return`${JSON.stringify(e,null,4)}
`}function ue(e){return`use Celerik\\Ui\\Theme\\Theme;

$theme = Theme::fromJson(<<<'JSON'
${Y(e)}JSON);
`}function X(e,n,r){const i=URL.createObjectURL(new Blob([r],{type:n})),a=document.createElement("a");a.href=i,a.download=e,a.hidden=!0,document.body.append(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function be(e,n,r){const i=n.labels??{},a=e.querySelector(".celerik-theme-builder__message"),o=(d,y=!1)=>{a.textContent=d,a.classList.toggle("text-danger-emphasis",y)},l=d=>e.querySelector(`[data-celerik-action="${d}"]`);e.querySelector(".celerik-theme-builder__export").hidden=!1,l("download-css").addEventListener("click",()=>{X(W(r.getTheme().name,"css"),"text/css",r.toCss())}),l("download-json").addEventListener("click",()=>{X(W(r.getTheme().name,"json"),"application/json",Y(r.getTheme()))}),l("copy-php").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(ue(r.getTheme())),o(i.copied)}catch{o(i.copyFailed,!0)}});const b=l("import");b.addEventListener("change",async()=>{const[d]=b.files;if(b.value="",!d)return;let y;try{y=JSON.parse(await d.text())}catch(f){o(i.importError.replace("{error}",f.message),!0);return}const{theme:p,error:m}=_(y);if(!p){o(i.importError.replace("{error}",m),!0);return}r.setTheme(p),o(i.imported)});const w=e.querySelector("form");n.saveUrl&&w.addEventListener("submit",async d=>{var m;d.preventDefault();const y={"Content-Type":"application/json",Accept:"application/json"},p=n.csrf?(m=w.querySelector(`input[name="${n.csrf.field}"]`))==null?void 0:m.value:null;p&&(y["X-CSRF-TOKEN"]=p);try{const f=await fetch(n.saveUrl,{method:"POST",headers:y,credentials:"same-origin",body:JSON.stringify({theme:r.getTheme()})});o(f.ok?i.saved:i.saveFailed,!f.ok)}catch{o(i.saveFailed,!0)}})}export{W as fileName,me as initThemeBuilder,ue as phpSnippet,le as scopeCss,Y as themeJson};

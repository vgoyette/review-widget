function t(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;const n=t=>new class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}("string"==typeof t?t:t+"",void 0,o),r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,d=h.trustedTypes,a=d?d.emptyScript:"",c=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},$="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var o;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;g[$]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:g}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.2");const y=window,_=y.trustedTypes,b=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,m="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,w="?"+A,S=`<${w}>`,C=document,E=()=>C.createComment(""),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,N="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,U=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,z=/"/g,O=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),W=new WeakMap,j=C.createTreeWalker(C,129,null,!1),B=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let l,h,d=-1,a=0;for(;a<i.length&&(r.lastIndex=a,h=r.exec(i),null!==h);)a=r.lastIndex,r===P?"!--"===h[1]?r=R:void 0!==h[1]?r=U:void 0!==h[2]?(O.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=null!=s?s:P,d=-1):void 0===h[1]?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?H:'"'===h[3]?z:T):r===z||r===T?r=H:r===R||r===U?r=P:(r=H,s=void 0);const c=r===H&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+S:d>=0?(o.push(l),i.slice(0,d)+m+i.slice(d)+A+c):i+A+(-2===d?(o.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,o]};class D{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,l=this.parts,[h,d]=B(t,e);if(this.el=D.createElement(h,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=j.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(m)||e.startsWith(A)){const i=d[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+m).split(A),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?G:"@"===e[1]?Q:J})}else l.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(O.test(o.tagName)){const t=o.textContent.split(A),e=t.length-1;if(e>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),j.nextNode(),l.push({type:2,index:++s});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===w)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(A,t+1));)l.push({type:7,index:s}),t+=A.length-1}s++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,o){var s,n,r,l;if(e===F)return e;let h=void 0!==o?null===(s=i._$Co)||void 0===s?void 0:s[o]:i._$Cl;const d=x(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==d&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===d?h=void 0:(h=new d(t),h._$AT(t,i,o)),void 0!==o?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[o]=h:i._$Cl=h),void 0!==h&&(e=I(t,h._$AS(t,e.values),h,o)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);j.currentNode=s;let n=j.nextNode(),r=0,l=0,h=o[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new q(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new X(n,this,t)),this._$AV.push(e),h=o[++l]}r!==(null==h?void 0:h.index)&&(n=j.nextNode(),r++)}return j.currentNode=C,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,o){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),x(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=D.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new V(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new D(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new q(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=I(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const o=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=I(this,o[i+r],e,r),l===F&&(l=this._$AH[r]),n||(n=!x(l)||l!==this._$AH[r]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}n&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const Z=_?_.emptyScript:"";class G extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends J{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:L)===F)return;const o=this._$AH,s=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==L&&(o===L||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Y=y.litHtmlPolyfillSupport;null==Y||Y(D,q),(null!==(f=y.litHtmlVersions)&&void 0!==f?f:y.litHtmlVersions=[]).push("2.7.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new q(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;class lt extends it{constructor(){super(...arguments),this.surveyResponseLink="",this.backgroundColor="",this.borderColor="",this.borderRadius=0,this.borderWidth=3,this.contentFontSize=18,this.contentFontWeight=400,this.dropShadow=!1,this.font="Barlow:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",this.fontColor="#000",this.titleFontSize=21,this.titleFontWeight=700,this.reviewContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry.",this.titleContent="Title Content",this.userTitle="Director of Marketing",this.userName="John D. ",this.edit=!1,this.development=!1,this.debug=!1,this.widgetId="api"}fetchData(t,e){fetch(e?"http://localhost:8000/demo/api.json":`https://my.g2.test/review_widget_data/${t}.json`).then((t=>t.json())).then((t=>this.handleResponse(t))).catch((t=>console.log(t)))}handleResponse(t){t&&(this.surveyResponseLink=t.data.attributes["survey-response-link"],this.titleContent=t.data.attributes["review-title"],this.reviewContent=t.data.attributes["review-content"],this.backgroundColor=t.included[0].attributes["background-color"],this.borderColor=t.included[0].attributes["border-color"],this.borderRadius=t.included[0].attributes["border-radius"],this.borderWidth=t.included[0].attributes["border-width"],this.contentFontSize=t.included[0].attributes["content-font-size"],this.contentFontWeight=t.included[0].attributes["content-font-weight"],this.dropShadow=t.included[0].attributes["drop-shadow"],this.font=t.included[0].attributes.font,this.fontColor=t.included[0].attributes["font-color"],this.titleFontSize=t.included[0].attributes["title-font-size"],this.titleFontWeight=t.included[0].attributes["title-font-weight"],this.userTitle=t.data.attributes["user-title"],this.userName=t.data.attributes["user-name"])}showDebugInfo(){return this.debug?M` <div class="development">
        <ul>
          <li>widget id: ${this.widgetId}</li>
          <li>survey response link: ${this.surveyResponseLink}</li>
          <li>title content: ${this.titleContent}</li>
          <li>review content: ${this.reviewContent}</li>
          <li>background color: ${this.backgroundColor}</li>
          <li>border color: ${this.borderColor}</li>
          <li>border radius: ${this.borderRadius}</li>
          <li>border width: ${this.borderWidth}</li>
          <li>content font size: ${this.contentFontSize}</li>
          <li>content font weight: ${this.contentFontWeight}</li>
          <li>drop shadow: ${this.dropShadow}</li>
          <li>font: ${this.font}</li>
          <li>font color: ${this.fontColor}</li>
          <li>title font size: ${this.titleFontSize}</li>
          <li>title font weight: ${this.titleFontWeight}</li>
          <li>user title: ${this.userTitle}</li>
          <li>user name: ${this.userName}</li>
        </ul>
      </div>`:M``}connectedCallback(){super.connectedCallback(),this.edit||(this.fetchData(this.widgetId,this.development),console.log("fetching data")),function(t){const e=document.createElement("link");e.rel="stylesheet",e.href=t,document.getElementsByTagName("head")[0].appendChild(e),console.log("success",e.href)}(`https://fonts.googleapis.com/css?family=${this.font.split(":")[0]}:wght@400;700;800&display=swap`)}render(){return M`
      <style>
        .card {
          display: flex;
          width: 400px;
          height: 250px;
          padding: 21px;
          border: ${this.borderWidth}px solid ${this.borderColor};
          border-radius: ${this.borderRadius}px;
          background-color: ${this.backgroundColor};
          box-shadow: ${this.dropShadow?"0 0 10px rgba(0,0,0,0.5)":"none"};
          font-family: ${this.font.split(":")[0]};
          font-size: ${this.contentFontSize}px;
          font-weight: ${this.contentFontWeight};
          color: ${this.fontColor};
        }
        a:link {
          color: ${this.fontColor};
        }
        a:visited {
          color: ${this.fontColor};
        }
        .card-header {
          margin-bottom: 10px;
        }
        .title {
          font-size: ${this.titleFontSize}px;

        }
        .title-font-weight {
          font-weight: ${this.titleFontWeight};
        }
        .content {
          font-size: ${this.contentFontSize}px;
          font-weight: ${this.contentFontWeight};
          margin-top: 10px;
        }

        .logo {
          width: 42px;
          height: 42px;
        }
        .g2-logo {
          margin-right: 15px;
        .development {
          margin-top: 50px;
        }
      </style>
      <div class="card">
        <div class="g2-logo">
          <img
            class="logo"
            alt="g2 logo"
            src="https://images.g2crowd.com/uploads/product/hd_favicon/543629e60e9e4cdf9b1179317ae7a2bd/g2-seller-solutions.svg"
          />
        </div>
        <div>
          <div class="card-header">
            <div class="title title-font-weight">${this.userTitle}</div>
            <div class="title">${this.userName}</div>
          </div>
          <div class="content">
            <div class="title">${this.titleContent}</div>
            <p>${this.reviewContent}</p>
          </div>
          <div class="card-footer">
            <a href=${this.surveyResponseLink}>Read more on g2</a>
          </div>
        </div>
      </div>
      ${this.showDebugInfo()}
    `}}t([nt({attribute:"link",type:String})],lt.prototype,"surveyResponseLink",void 0),t([nt({attribute:"background-color",type:String})],lt.prototype,"backgroundColor",void 0),t([nt({attribute:"border-color",type:String})],lt.prototype,"borderColor",void 0),t([nt({attribute:"border-radius",type:Number})],lt.prototype,"borderRadius",void 0),t([nt({attribute:"border-width",type:Number})],lt.prototype,"borderWidth",void 0),t([nt({attribute:"content-font-size",type:Number})],lt.prototype,"contentFontSize",void 0),t([nt({attribute:"content-font-weight",type:Number})],lt.prototype,"contentFontWeight",void 0),t([nt({attribute:"drop-shadow",type:Boolean})],lt.prototype,"dropShadow",void 0),t([nt({attribute:"font",type:String})],lt.prototype,"font",void 0),t([nt({attribute:"font-color",type:String})],lt.prototype,"fontColor",void 0),t([nt({attribute:"title-font-size",type:Number})],lt.prototype,"titleFontSize",void 0),t([nt({attribute:"title-font-weight",type:Number})],lt.prototype,"titleFontWeight",void 0),t([nt({attribute:"review-content",type:String})],lt.prototype,"reviewContent",void 0),t([nt({attribute:"title-content",type:String})],lt.prototype,"titleContent",void 0),t([nt({attribute:"user-title",type:String})],lt.prototype,"userTitle",void 0),t([nt({attribute:"user-name",type:String})],lt.prototype,"userName",void 0),t([nt({attribute:"edit",type:Boolean})],lt.prototype,"edit",void 0),t([nt({attribute:"development",type:Boolean})],lt.prototype,"development",void 0),t([nt({attribute:"debug",type:Boolean})],lt.prototype,"debug",void 0),t([nt({attribute:"widget-id",type:String})],lt.prototype,"widgetId",void 0),window.customElements.define("review-widget",lt);

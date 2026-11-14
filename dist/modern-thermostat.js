function t(t,e,i,a){var r,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new o(i,t,a)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",_=u.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&c(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const o=a?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{if(i)t.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of a){const a=document.createElement("style"),r=e.litNonce;void 0!==r&&a.setAttribute("nonce",r),a.textContent=i.cssText,t.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=a;const o=r.fromAttribute(e,t.type);this[a]=o??this._$Ej?.get(a)??o,this._$Em=null}}requestUpdate(t,e,i,a=!1,r){if(void 0!==t){const o=this.constructor;if(!1===a&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,_?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,k=x.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+E,M=`<${T}>`,P=document,z=()=>P.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,D=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,V=/"/g,K=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,q=P.createTreeWalker(P,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,a=[];let r,o=2===e?"<svg>":3===e?"<math>":"",s=j;for(let n=0;n<i;n++){const e=t[n];let i,l,c=-1,d=0;for(;d<e.length&&(s.lastIndex=d,l=s.exec(e),null!==l);)d=s.lastIndex,s===j?"!--"===l[1]?s=U:void 0!==l[1]?s=D:void 0!==l[2]?(K.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=L):void 0!==l[3]&&(s=L):s===L?">"===l[0]?(s=r??j,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,i=l[1],s=void 0===l[3]?L:'"'===l[3]?V:R):s===V||s===R?s=L:s===U||s===D?s=j:(s=L,r=void 0);const h=s===L&&t[n+1].startsWith("/>")?" ":"";o+=s===j?e+M:c>=0?(a.push(i),e.slice(0,c)+C+e.slice(c)+E+h):e+E+(-2===c?n:h)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class J{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let r=0,o=0;const s=t.length-1,n=this.parts,[l,c]=Y(t,e);if(this.el=J.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=q.nextNode())&&n.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(C)){const e=c[o++],i=a.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?at:tt}),a.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:r}),a.removeAttribute(t));if(K.test(a.tagName)){const t=a.textContent.split(E),e=t.length-1;if(e>0){a.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],z()),q.nextNode(),n.push({type:2,index:++r});a.append(t[e],z())}}}else if(8===a.nodeType)if(a.data===T)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=a.data.indexOf(E,t+1));)n.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,a){if(e===F)return e;let r=void 0!==a?i._$Co?.[a]:i._$Cl;const o=O(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,a)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??P).importNode(e,!0);q.currentNode=a;let r=q.nextNode(),o=0,s=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new X(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new rt(r,this,t)),this._$AV.push(e),n=i[++s]}o!==n?.index&&(r=q.nextNode(),o++)}return q.currentNode=P,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),O(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new Q(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const r of t)a===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[a],i._$AI(r),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,a){const r=this.strings;let o=!1;if(void 0===r)t=Z(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const a=t;let s,n;for(t=r[0],s=0;s<r.length-1;s++)n=Z(this,a[i+s],e,s),n===F&&(n=this._$AH[s]),o||=!O(n)||n!==this._$AH[s],n===B?t=B:t!==B&&(t+=(n??"")+r[s+1]),this._$AH[s]=n}o&&!a&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class at extends tt{constructor(t,e,i,a,r){super(t,e,i,a,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??B)===F)return;const i=this._$AH,a=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==B&&(i===B||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(J,X),(x.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;let nt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let r=a._$litPart$;if(void 0===r){const t=i?.renderBefore??null;a._$litPart$=r=new X(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};nt._$litElement$=!0,nt.finalized=!0,st.litElementHydrateSupport?.({LitElement:nt});const lt=st.litElementPolyfillSupport;lt?.({LitElement:nt}),(st.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{const a=()=>{customElements.get(t)||customElements.define(t,e)};void 0!==i?i.addInitializer(a):a()},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},ht=(t=dt,e,i)=>{const{kind:a,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,r,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];e.call(this,i),this.requestUpdate(a,r,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function mt(t){return pt({...t,state:!0,attribute:!1})}const ut=1;class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ft=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends gt{constructor(t){if(super(t),t.type!==ut||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const a of this.st)a in e||(i.remove(a),this.st.delete(a));for(const a in e){const t=!!e[a];t===this.st.has(a)||this.nt?.has(a)||(t?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return F}}),_t=s`
  /* ── Reset ────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; }

  :host {
    display: block;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    container-type: inline-size;
    --mt-radius: var(--ha-card-border-radius, 16px);
    --mt-spacing: 14px;
    --mt-tr: 200ms ease;
    --mt-heat: #ff6b35;
    --mt-cool: #4fc3f7;
    --mt-auto: #a78bfa;
    --mt-fan:  #81c784;
    --mt-dry:  #ffd54f;
    --mt-off:  #6b7280;
    --mt-warn: #f44336;
  }

  /* ── Card shell ───────────────────────────────────────── */
  /*
   * KEY LAYOUT PRINCIPLE:
   * - ha-card uses flex-column so elements stack naturally
   * - height is ALWAYS auto (content-driven, never fixed)
   * - NO min-height, NO margin-top:auto on status bar
   * - Status bar sits directly below buttons, no gap
   * - When show_graph=true, card loses bottom radius/border
   *   so it merges seamlessly with the graph wrapper below
   */
  ha-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--mt-radius);
    background: var(--ha-card-background, var(--card-background-color, #1c2128));
    border: 1px solid var(--divider-color, rgba(255,255,255,0.10));
    transition: background var(--mt-tr), border-color var(--mt-tr), box-shadow var(--mt-tr);
    padding: 0;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    /* Flex column: elements stack, height = content height */
    display: flex;
    flex-direction: column;
    /* CRITICAL: height must be auto, never fixed */
    height: auto;
  }

  /* ── Action-based card colours ────────────────────────── */
  /* Zustandsfarben werden vom .mt-unified-card-Wrapper übernommen */
  .mt-unified-card.action-drying  { background: rgba(255,213,79,0.06);  border-color: rgba(255,213,79,0.28); }
  .mt-unified-card.action-fan     { background: rgba(129,199,132,0.06); border-color: rgba(129,199,132,0.28); }
  .mt-unified-card.mode-off       { opacity: 0.82; }

  /* ── Seamless graph integration ───────────────────────── */
  /*
   * When graph is active, the card's bottom edge merges with
   * the graph wrapper: no bottom radius, transparent bottom border.
   * The graph wrapper provides the bottom radius and border.
   */
  .mt-unified-card.has-graph {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
    box-shadow: none; /* shadow handled by outer wrapper */
  }

  /* ── Header ───────────────────────────────────────────── */
  .mt-header {
    display: flex;
    align-items: flex-start;
    padding: var(--mt-spacing) var(--mt-spacing) 0;
    gap: 10px;
    /* flex-shrink:0 prevents header from collapsing */
    flex-shrink: 0;
  }

  .mt-header-icon {
    width: 38px; height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background var(--mt-tr);
  }
  .mt-header-icon ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    transition: color var(--mt-tr);
  }

  .mt-unified-card.action-heating .mt-header-icon { background: rgba(255,107,53,0.18); }
  .mt-unified-card.action-heating .mt-header-icon ha-icon { color: var(--mt-heat); }
  .mt-unified-card.action-cooling .mt-header-icon { background: rgba(79,195,247,0.18); }
  .mt-unified-card.action-cooling .mt-header-icon ha-icon { color: var(--mt-cool); }

  .mt-header-text { flex: 1; min-width: 0; }
.mt-alert-badge {
  flex: 0 1 auto;
  align-self: center;
  min-width: 0;
  max-width: 46%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  padding: 5px 8px;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 650;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: color-mix(in srgb, currentColor 10%, transparent);
}
.mt-alert-badge ha-icon { --mdc-icon-size: 15px; flex-shrink: 0; }
.mt-alert-badge span { overflow: hidden; text-overflow: ellipsis; }
.mt-alert-badge.alert-critical,
.mt-alert-badge.alert-error { color: var(--error-color, #f44336); }
.mt-alert-badge.alert-warning { color: var(--warning-color, #ff9800); }
.mt-alert-badge.alert-info { color: var(--info-color, #2196f3); }
@supports not (background: color-mix(in srgb, red 10%, transparent)) {
  .mt-alert-badge { background: rgba(255,255,255,0.06); }
}
@container (max-width: 300px) {
  .mt-alert-badge { max-width: 42%; padding: 4px 6px; font-size: 10px; }
  .mt-alert-badge ha-icon { --mdc-icon-size: 13px; }
}

  .mt-name {
    font-size: 14px; font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    letter-spacing: 0.2px;
}

.mt-status {
    font-size: 11px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--secondary-text-color);
    margin-top: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.mt-status ha-icon {
    --mdc-icon-size: 13px;
}
.mt-status.alert-error,
.mt-status.alert-error ha-icon { color: var(--error-color, #f44336); }
.mt-status.alert-warning,
.mt-status.alert-warning ha-icon { color: var(--warning-color, #ff9800); }
.mt-status.alert-info,
.mt-status.alert-info ha-icon { color: var(--info-color, #2196f3); }
.mt-status.alert-error,
.mt-status.alert-warning,
.mt-status.alert-info { font-weight: 600; }  

  /* ── Central temperature (IST, no label) ─────────────── */
  .mt-temp-center {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px var(--mt-spacing) 4px;
    flex-shrink: 0;
}

  .mt-ist {
    font-size: 62px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -3px;
    color: inherit;
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr), opacity var(--mt-tr);
  }
  .mt-unified-card.action-heating .mt-ist,
  .mt-unified-card.action-heating .mt-ist-unit { color: var(--mt-heat); }
  .mt-unified-card.action-cooling .mt-ist,
  .mt-unified-card.action-cooling .mt-ist-unit { color: var(--mt-cool); }
  .mt-unified-card.mode-off .mt-ist,
  .mt-unified-card.mode-off .mt-ist-unit { opacity: 0.35; color: var(--secondary-text-color) !important; }

  .mt-ist-unit {
    align-self: flex-start;
    margin-top: 3px;
    margin-left: 3px;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    color: inherit;
    opacity: 0.60;
  }

  .mt-humidity-row {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    width: 100%;
    padding: 0 var(--mt-spacing);
    margin-top: -15px;

    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 650;
    line-height: 1.25;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.mt-humidity-row.without-header {
    margin-top: 10px;
}

.mt-humidity-row ha-icon {
    --mdc-icon-size: 15px;
    color: var(--secondary-text-color);
    opacity: 0.75;
}
.mt-humidity-row.humidity-warning,
.mt-humidity-row.humidity-warning ha-icon,
.mt-compact-humidity.humidity-warning,
.mt-compact-humidity.humidity-warning ha-icon {
    color: var(--warning-color, #fbc02d) !important;
    opacity: 1 !important;
}
.mt-humidity-row.humidity-warning,
.mt-compact-humidity.humidity-warning {
    text-shadow: 0 0 10px rgba(251,192,45,0.22);
}

  /* ── Setpoint row (collapsed state) ──────────────────── */
  /* ── Shared panel slot (temp OR hvac) ─────────────────── */
  /*
   * max-height:0 when closed → takes NO space at all
   * max-height:160px when open → animates smoothly
   * This is the key to dynamic height: closed panels = zero height
   */
  .mt-panel-slot {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    flex-shrink: 0;
    transition:
      max-height 300ms cubic-bezier(0.4,0,0.2,1),
      opacity 220ms ease;
  }
  .mt-panel-slot.open {
    max-height: 160px;
    opacity: 1;
  }

  /* ── Temperature control (inside panel slot) ──────────── */
  .mt-temp-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px var(--mt-spacing) 10px;
  }

  .mt-temp-control.window-locked {
    margin: 4px var(--mt-spacing) 6px;
    padding: 8px 10px 10px;
    border: 1px solid rgba(255, 152, 0, 0.45);
    border-radius: 14px;
    background: rgba(255, 152, 0, 0.07);
}

.mt-window-lock-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    margin-top: 3px;

    color: var(--warning-color, #ff9800);
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;

    text-transform: uppercase;
    letter-spacing: 0.7px;
    white-space: nowrap;
}

.mt-window-lock-info ha-icon {
    --mdc-icon-size: 13px;
}

  .mt-adj-btn {
    width: 48px; height: 48px;
    border-radius: 50%; border: none;
    background: rgba(255,255,255,0.08);
    color: var(--primary-text-color);
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background var(--mt-tr), transform 80ms ease;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    flex-shrink: 0;
  }
  .mt-adj-btn ha-icon { --mdc-icon-size: 26px; pointer-events: none; }
  .mt-adj-btn:hover { background: rgba(255,255,255,0.14); }
  .mt-adj-btn:active { transform: scale(0.90); }
  .mt-adj-btn:disabled {
    opacity: 0.32;
    cursor: not-allowed;
    transform: none;
    background: rgba(255,255,255,0.035);
    color: var(--disabled-text-color);
    filter: grayscale(1);
}

  .mt-soll-display {
    display: flex; flex-direction: column; align-items: center;
    min-width: 96px; gap: 1px;
  }
  .mt-soll-big {
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    white-space: nowrap;
    font-size: 44px; font-weight: 300; line-height: 1;
    letter-spacing: -2px; color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr);
  }
  .mt-soll-big-value {
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .mt-unified-card.action-heating .mt-soll-big { color: var(--mt-heat); }
  .mt-unified-card.action-cooling .mt-soll-big { color: var(--mt-cool); }
  .mt-soll-big-unit {
    align-self: flex-start;
    margin-top: 2px;
    margin-left: 4px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    opacity: 0.68;
  }
  .compact .mt-soll-big-unit,
  :host([compact]) .mt-soll-big-unit {
    margin-top: 1px;
    font-size: 15px;
  }
  .mt-soll-sub {
    font-size: 10px; color: var(--secondary-text-color);
    text-transform: uppercase; letter-spacing: 0.9px; font-weight: 500;
  }

  /* ── HVAC mode pills (inside panel slot) ──────────────── */
  /* Zweireihiges Modusfeld v1.9.6 */
  .mt-mode-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    width: 100%;
    padding: 8px var(--mt-spacing) 10px;
  }
  .mt-mode-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 100%;
    flex-wrap: nowrap;
  }
  .mt-mode-option {
    position: relative;
    overflow: hidden;
    width: 112px;
    min-width: 0;
    max-width: 112px;
    min-height: 38px;
    padding: 6px 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.22);
    background: linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04));
    backdrop-filter: blur(14px) saturate(135%);
    -webkit-backdrop-filter: blur(14px) saturate(135%);
    color: var(--secondary-text-color);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms;
    font-family: inherit;
    white-space: nowrap;
    letter-spacing: 0.3px;
    flex-shrink: 1;
  }
  .mt-mode-option ha-icon { --mdc-icon-size: 14px; pointer-events: none; }
  .mt-mode-option:hover { border-color: rgba(255,255,255,0.38); transform: translateY(-1px); color: var(--primary-text-color); }
  .mt-mode-option:active { transform: scale(0.96); }
  .mt-mode-option:focus-visible { outline: 2px solid var(--primary-color, #ff6b35); outline-offset: 2px; }
  .mt-mode-option:disabled,
  .mt-mode-option.window-locked { opacity: 0.35; cursor: not-allowed; pointer-events: none; }
  /* Aktive Zustände */
  .mt-mode-option.active-heat { background: rgba(255,107,53,0.18); color: var(--mt-heat); border-color: rgba(255,107,53,0.45); }
  .mt-mode-option.active-cool { background: rgba(79,195,247,0.18); color: var(--mt-cool); border-color: rgba(79,195,247,0.45); }
  .mt-mode-option.active-auto { background: rgba(167,139,250,0.18); color: var(--mt-auto); border-color: rgba(167,139,250,0.45); }
  .mt-mode-option.active-manual { background: rgba(255,255,255,0.14); color: var(--primary-text-color); border-color: rgba(255,255,255,0.40); }
  .mt-mode-option.active-off { background: rgba(107,114,128,0.18); color: #9ca3af; border-color: rgba(107,114,128,0.45); }  
  .mt-mode-option.active-boost { background: rgba(255,152,0,0.18); color: #ff9800; border-color: rgba(255,152,0,0.48); }
  /* Glasreflexion */
  .mt-mode-option::before {
    content: "";
    position: absolute;
    inset: 1px 8px auto;
    height: 42%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0));
    opacity: 0.6;
    pointer-events: none;
  }
  /* Fallback ohne backdrop-filter */
  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .mt-mode-option { background: rgba(50,55,65,0.92); }
  }
  /* Responsive: bei schmalen Karten gemeinsam schmaler */
  @media (max-width: 300px) {
    .mt-mode-option { width: 90px; min-width: 0; max-width: 90px; font-size: 11px; padding: 5px 8px; }
  }

  .mt-modes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px var(--mt-spacing) 10px;
    flex-wrap: wrap;
  }

  .mt-mode-pill {
    display: flex; align-items: center; gap: 5px;
    padding: 6px 14px; border-radius: 999px;
    border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
    background: transparent; color: var(--secondary-text-color);
    font-size: 12px; font-weight: 500; cursor: pointer;
    transition: all 150ms ease; font-family: inherit;
    white-space: nowrap; letter-spacing: 0.3px;
    -webkit-tap-highlight-color: transparent;
  }
  .mt-mode-pill ha-icon { --mdc-icon-size: 14px; pointer-events: none; }
  .mt-mode-pill:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.20); }
  .mt-mode-pill:active { transform: scale(0.95); }

  .mt-mode-pill.active[data-mode="off"]       { background: rgba(107,114,128,0.15); color: #9ca3af;        border-color: rgba(107,114,128,0.40); }
  .mt-mode-pill.active[data-mode="heat"]      { background: rgba(255,107,53,0.15);  color: var(--mt-heat); border-color: rgba(255,107,53,0.40); }
  .mt-mode-pill.active[data-mode="cool"]      { background: rgba(79,195,247,0.15);  color: var(--mt-cool); border-color: rgba(79,195,247,0.40); }
  .mt-mode-pill.active[data-mode="auto"]      { background: rgba(167,139,250,0.15); color: var(--mt-auto); border-color: rgba(167,139,250,0.40); }
  .mt-mode-pill.active[data-mode="heat_cool"] { background: rgba(245,158,11,0.15);  color: #f59e0b;        border-color: rgba(245,158,11,0.40); }
  .mt-mode-pill.active[data-mode="fan_only"]  { background: rgba(129,199,132,0.15); color: var(--mt-fan);  border-color: rgba(129,199,132,0.40); }
  .mt-mode-pill.active[data-mode="dry"]       { background: rgba(255,213,79,0.15);  color: var(--mt-dry);  border-color: rgba(255,213,79,0.40); }

  /* ── Dual setpoint ────────────────────────────────────── */
  .mt-dual {
    display: flex; align-items: center; justify-content: center;
    gap: 8px; padding: 8px var(--mt-spacing) 10px;
  }
  .mt-dual-group { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
  .mt-dual-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; }
  .mt-dual-ctrl { display: flex; align-items: center; gap: 5px; }
  .mt-dual-val { font-size: 30px; font-weight: 300; min-width: 64px; text-align: center; font-variant-numeric: tabular-nums; }
  .mt-dual-btn {
    width: 34px; height: 34px; border-radius: 50%; border: none;
    background: rgba(255,255,255,0.07); color: var(--primary-text-color);
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background var(--mt-tr), transform 80ms ease;
    -webkit-tap-highlight-color: transparent;
  }
  .mt-dual-btn ha-icon { --mdc-icon-size: 18px; pointer-events: none; }
  .mt-dual-btn:active { transform: scale(0.9); }
  .mt-dual-divider { width: 1px; height: 56px; background: var(--divider-color, rgba(255,255,255,0.10)); flex-shrink: 0; }

  /* ── Main button row ──────────────────────────────────── */
  .mt-btn-row {
    display: flex;
    gap: 8px;
    /* Compact padding – buttons sit close to content above */
    padding: 6px var(--mt-spacing) 8px;
    flex-shrink: 0;
  }

  .mt-main-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 12px;
    border-radius: 999px;
    border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
    background: rgba(255,255,255,0.05);
    color: var(--secondary-text-color);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: background var(--mt-tr), border-color var(--mt-tr), color var(--mt-tr), transform 80ms ease;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    white-space: nowrap;
    font-family: inherit;
    letter-spacing: 0.3px;
    min-width: 0;
  }
  .mt-main-btn ha-icon { --mdc-icon-size: 15px; pointer-events: none; flex-shrink: 0; }
  .mt-main-btn:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.22); color: var(--primary-text-color); }
  .mt-main-btn:active { transform: scale(0.96); }

  .mt-main-btn.active-heat { background: rgba(255,107,53,0.15); border-color: rgba(255,107,53,0.40); color: var(--mt-heat); }
  .mt-main-btn.active-cool { background: rgba(79,195,247,0.15); border-color: rgba(79,195,247,0.40); color: var(--mt-cool); }
  .mt-main-btn.active-auto { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.40); color: var(--mt-auto); }
  .mt-main-btn.active-fan  { background: rgba(129,199,132,0.15); border-color: rgba(129,199,132,0.40); color: var(--mt-fan); }
  .mt-main-btn.active-dry  { background: rgba(255,213,79,0.15);  border-color: rgba(255,213,79,0.40);  color: var(--mt-dry); }
  .mt-main-btn.active-off  { background: rgba(107,114,128,0.12); border-color: rgba(107,114,128,0.35); color: #9ca3af; }
  .mt-main-btn.active-temp { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.28); color: var(--primary-text-color); }

  .mt-btn-chevron {
    --mdc-icon-size: 13px !important;
    transition: transform 220ms ease;
    flex-shrink: 0;
  }
  .mt-main-btn.open .mt-btn-chevron { transform: rotate(180deg); }

  /* ── Status bar ───────────────────────────────────────── */
  /*
   * CRITICAL: NO margin-top:auto here.
   * margin-top:auto only works when the parent has a fixed height.
   * Since ha-card height is auto (content-driven), margin-top:auto
   * would have no effect and could cause layout issues.
   * The status bar sits directly below the button row naturally.
   */
  .mt-status-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
    /* Compact padding – tight against buttons above */
    padding: 7px var(--mt-spacing);
    gap: 0;
    flex-shrink: 0;
  }

  .mt-stat {
    display: flex; align-items: center; gap: 5px;
    padding: 3px 10px;
    font-size: 12px; font-weight: 500;
    color: var(--secondary-text-color);
    position: relative; white-space: nowrap;
  }
  .mt-stat + .mt-stat::before {
    content: '';
    position: absolute; left: 0; top: 50%;
    transform: translateY(-50%);
    width: 1px; height: 12px;
    background: var(--divider-color, rgba(255,255,255,0.10));
  }
  .mt-stat ha-icon { --mdc-icon-size: 14px; opacity: 0.75; }
  .mt-stat.heating-demand ha-icon { color:var(--mt-heat,#ff6b35); opacity:1; }
  .mt-stat-val { font-variant-numeric: tabular-nums; color: var(--primary-text-color); font-weight: 600; }

  /* ── Graph wrapper – seamless unified card ────────────── */
  /*
   * The graph wrapper is the BOTTOM half of the unified card.
   * It has:
   *   - same background as ha-card
   *   - same border (left, right, bottom) as ha-card
   *   - NO top border (card's bottom border is transparent)
   *   - bottom radius only (top radius = 0)
   *   - a thin separator line between card and graph
   *
   * Together with .mt-unified-card.has-graph (no bottom radius, transparent
   * bottom border), they form one seamless visual element.
   */
  .mt-graph-wrapper {
    background: var(--ha-card-background, var(--card-background-color, #1c2128));
    border: 1px solid var(--divider-color, rgba(255,255,255,0.10));
    border-top: none;
    border-bottom-left-radius: var(--mt-radius);
    border-bottom-right-radius: var(--mt-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;
    transition: border-color var(--mt-tr), background var(--mt-tr);
  }

  /* Inherit action border colour for seamless look */
  .mt-graph-wrapper.action-heating {
    border-color: rgba(255,107,53,0.32);
    background: rgba(255,107,53,0.07);
  }
  .mt-graph-wrapper.action-cooling {
    border-color: rgba(79,195,247,0.32);
    background: rgba(79,195,247,0.07);
  }

  /* mt-graph-separator removed – no divider line between card and graph */

  
  .mt-error {
    padding: 16px; color: var(--error-color, #f44336);
    font-size: 14px; display: flex; align-items: center; gap: 8px;
  }
  .mt-unavailable {
    padding: 20px; color: var(--secondary-text-color);
    font-size: 14px; text-align: center; opacity: 0.6;
  }

  /* ── Focus ────────────────────────────────────────────── */
  .mt-adj-btn:focus-visible,
  .mt-main-btn:focus-visible,
  .mt-mode-pill:focus-visible,
  .mt-dual-btn:focus-visible {
    outline: 2px solid var(--primary-color, #ff6b35);
    outline-offset: 2px;
  }

  /* ── Compact mode ─────────────────────────────────────── */
  .mt-unified-card.compact { --mt-spacing: 10px; }
  .mt-unified-card.compact .mt-ist { font-size: 46px; }
  .mt-unified-card.compact .mt-ist-unit {
    font-size: 17px;
    margin-top: 2px;
}

.mt-unified-card.compact .mt-humidity-row {
    margin-top: -13px;
}

.mt-unified-card.compact .mt-humidity-row.without-header {
    margin-top: 8px;
}

.mt-unified-card.compact .mt-humidity-row ha-icon {
    --mdc-icon-size: 11px;
}

  .mt-unified-card.compact .mt-adj-btn { width: 40px; height: 40px; }
  .mt-unified-card.compact .mt-adj-btn ha-icon { --mdc-icon-size: 22px; }
  .mt-unified-card.compact .mt-soll-big { font-size: 36px; }
  .mt-unified-card.compact .mt-main-btn { padding: 7px 10px; font-size: 11px; }
  .mt-unified-card.compact .mt-stat { font-size: 11px; padding: 2px 8px; }
  .mt-unified-card.compact .mt-header-icon { width: 32px; height: 32px; }
  .mt-unified-card.compact .mt-header-icon ha-icon { --mdc-icon-size: 17px; }    
  .mt-unified-card.compact .mt-temp-center { padding: 8px var(--mt-spacing) 3px; }
  .mt-unified-card.compact .mt-btn-row { padding: 4px var(--mt-spacing) 6px; }
  .mt-unified-card.compact .mt-status-bar { padding: 5px var(--mt-spacing); }

  /* ── Responsive ───────────────────────────────────────── */
  @media (max-width: 320px) {
    .mt-ist { font-size: 50px; }
    .mt-main-btn { font-size: 11px; padding: 7px 8px; }
    .mt-stat { font-size: 11px; padding: 2px 6px; }
  }

  /* ── Glasartige Buttons (Ergänzung) ─────────────────────────────── */
  .mt-adj-btn {
    position: relative !important;
    overflow: hidden !important;
    border: 1px solid rgba(255,255,255,0.24) !important;
    background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.055)) !important;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.26),
      inset 0 -1px 0 rgba(255,255,255,0.05),
      0 6px 18px rgba(0,0,0,0.14) !important;
    backdrop-filter: blur(14px) saturate(135%) !important;
    -webkit-backdrop-filter: blur(14px) saturate(135%) !important;
    transition: background var(--mt-tr), border-color var(--mt-tr), transform 80ms ease, box-shadow var(--mt-tr) !important;
  }
  .mt-adj-btn::before {
    content: "";
    position: absolute;
    inset: 1px 8px auto;
    height: 42%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0));
    opacity: 0.65;
    pointer-events: none;
  }
  .mt-adj-btn:hover {
    border-color: rgba(255,255,255,0.38) !important;
    background: linear-gradient(145deg, rgba(255,255,255,0.24), rgba(255,255,255,0.09)) !important;
    transform: translateY(-1px) !important;
  }
  .mt-adj-btn:hover::before { opacity: 0.80; }
  .mt-adj-btn:active { transform: scale(0.97) !important; }
  .mt-adj-btn:active::before { opacity: 0.40; }
  .mt-adj-btn:focus-visible { outline: 2px solid var(--primary-color, #ff6b35); outline-offset: 2px; }
  .mt-adj-btn:disabled {
    background: rgba(255,255,255,0.035) !important;
    border-color: rgba(255,255,255,0.10) !important;
    box-shadow: none !important;
    filter: grayscale(1) !important;
  }
  .mt-adj-btn:disabled::before { display: none; }

  .mt-mode-pill {
    position: relative !important;
    overflow: hidden !important;
    border: 1px solid rgba(255,255,255,0.24) !important;
    background: linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04)) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 12px rgba(0,0,0,0.12) !important;
    backdrop-filter: blur(14px) saturate(135%) !important;
    -webkit-backdrop-filter: blur(14px) saturate(135%) !important;
  }
  .mt-mode-pill::before {
    content: "";
    position: absolute;
    inset: 1px 10px auto;
    height: 40%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0));
    opacity: 0.60;
    pointer-events: none;
  }
  .mt-mode-pill:hover { border-color: rgba(255,255,255,0.38) !important; transform: translateY(-1px) !important; }
  .mt-mode-pill:focus-visible { outline: 2px solid var(--primary-color, #ff6b35); outline-offset: 2px; }

  .mt-dual-btn {
    position: relative !important;
    overflow: hidden !important;
    border: 1px solid rgba(255,255,255,0.24) !important;
    background: linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05)) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 10px rgba(0,0,0,0.12) !important;
    backdrop-filter: blur(14px) saturate(135%) !important;
    -webkit-backdrop-filter: blur(14px) saturate(135%) !important;
  }
  .mt-dual-btn:hover { border-color: rgba(255,255,255,0.38) !important; transform: translateY(-1px) !important; }
  .mt-dual-btn:focus-visible { outline: 2px solid var(--primary-color, #ff6b35); outline-offset: 2px; }

  .mt-main-btn {
    position: relative !important;
    overflow: hidden !important;
    border: 1px solid rgba(255,255,255,0.24) !important;
    background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.055)) !important;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.26),
      inset 0 -1px 0 rgba(255,255,255,0.05),
      0 6px 18px rgba(0,0,0,0.14) !important;
    backdrop-filter: blur(14px) saturate(135%) !important;
    -webkit-backdrop-filter: blur(14px) saturate(135%) !important;
  }
  .mt-main-btn::before {
    content: "";
    position: absolute;
    inset: 1px 10px auto;
    height: 42%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0));
    opacity: 0.65;
    pointer-events: none;
  }
  .mt-main-btn:hover {
    border-color: rgba(255,255,255,0.38) !important;
    background: linear-gradient(145deg, rgba(255,255,255,0.24), rgba(255,255,255,0.09)) !important;
    transform: translateY(-1px) !important;
  }
  .mt-main-btn:hover::before { opacity: 0.80; }
  .mt-main-btn:active { transform: scale(0.96) !important; }
  .mt-main-btn:active::before { opacity: 0.40; }
  .mt-main-btn:focus-visible { outline: 2px solid var(--primary-color, #ff6b35); outline-offset: 2px; }
  .mt-main-btn.active-graph[aria-pressed="true"] {
    background: rgba(255,255,255,0.16) !important;
    border-color: rgba(255,255,255,0.40) !important;
    color: var(--primary-text-color) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.30), inset 0 2px 6px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.10) !important;
  }

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .mt-adj-btn, .mt-mode-pill, .mt-dual-btn, .mt-main-btn { background: rgba(50,55,65,0.92) !important; }
  }

  /* ── Min/Max Grenzen ─────────────────────────────────────────────── */
  .mt-limit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    flex-shrink: 1;
    min-width: 0;
    opacity: 0.55;
    transition: opacity var(--mt-tr);
  }
  .mt-limit.window-dimmed { opacity: 0.30; }
  .mt-limit-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .mt-limit-value {
    font-size: 11px;
    font-weight: 600;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  @media (max-width: 300px) {
    .mt-temp-control { flex-wrap: wrap; justify-content: center; }
    .mt-limit { order: 10; flex-direction: row; gap: 6px; width: 100%; justify-content: center; }
    .mt-limit-min { order: 11; }
    .mt-limit-max { order: 12; }
  }

  /* ── Graph wrapper identische Farben ─────────────────────────────── */
    /* mt-graph-wrapper Zustandsfarben entfernt (v1.9.9) */

  /* ── Compact: Header/Status/Humidity nie verkleinern ─────────────── */
  :host([compact]) .mt-name, .compact .mt-name { font-size: 14px !important; }
  :host([compact]) .mt-status, .compact .mt-status { font-size: 11px !important; }
  :host([compact]) .mt-humidity-row, .compact .mt-humidity-row { font-size: 13px !important; }

  /* ── Panel-Slot max-height erhöhen für Min/Max ───────────────────── */
  .mt-panel-slot.open { max-height: 200px; }

  /* ── Temp-Control flex-wrap für kleine Breiten ───────────────────── */
  .mt-temp-control { flex-wrap: nowrap; }
  .mt-soll-display { flex-shrink: 1; min-width: 80px; }

  /* ══════════════════════════════════════════════════════════════════
     COMPACT MODE – eigenständige platzsparende Darstellung
     Alle Regeln sind auf .mt-unified-card.compact begrenzt.
     Der Normalmodus bleibt vollständig unverändert.
     ══════════════════════════════════════════════════════════════════ */

  /* ── Compact: Header kompakter ──────────────────────────────────── */
  .mt-unified-card.compact .mt-header {
    padding: 8px var(--mt-spacing) 0;
    gap: 7px;
  }
  .mt-unified-card.compact .mt-header-icon {
    width: 30px;
    height: 30px;
  }
  .mt-unified-card.compact .mt-header-icon ha-icon {
    --mdc-icon-size: 16px;
  }
  /* Name und Status-Schrift bleiben unverändert */
  .mt-unified-card.compact .mt-name { font-size: 14px !important; }
  .mt-unified-card.compact .mt-status { font-size: 11px !important; }

  /* ── Compact: Hauptbereich (Isttemperatur + Sensorblock) ─────────── */
  .mt-unified-card.compact .mt-compact-main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    padding: 4px var(--mt-spacing) 6px;
  }

  /* ── Compact: Isttemperatur ──────────────────────────────────────── */
  .mt-unified-card.compact .mt-compact-temperature {
    display: flex;
    align-items: flex-start;
    min-width: 0;
  }
  .mt-unified-card.compact .mt-compact-ist {
    font-size: 42px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -2px;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr), opacity var(--mt-tr);
    white-space: nowrap;
  }
  .mt-unified-card.compact.action-heating .mt-compact-ist { color: var(--mt-heat); }
  .mt-unified-card.compact.action-cooling .mt-compact-ist { color: var(--mt-cool); }
  .mt-unified-card.compact.mode-off .mt-compact-ist { opacity: 0.35; color: var(--secondary-text-color) !important; }

  .mt-unified-card.compact .mt-compact-ist-unit {
    align-self: flex-start;
    margin-top: 2px;
    margin-left: 3px;
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    color: inherit;
    opacity: 0.60;
  }

  /* ── Compact: Sensorblock ────────────────────────────────────────── */
  /* Compact: Sensorblock – gemeinsames Grid für exakte Icon-Ausrichtung */
  .mt-unified-card.compact .mt-compact-sensors {
    display: grid;
    grid-template-columns: 16px max-content;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    row-gap: 3px;
    width: 100%;
    padding-bottom: 4px;
    font-size: 13px;
    font-weight: 600;
    color: var(--secondary-text-color);
  }
  .mt-unified-card.compact .mt-compact-sensor {
    display: contents;
  }
  .mt-unified-card.compact .mt-compact-sensor ha-icon {
    grid-column: 1;
    justify-self: center;
    --mdc-icon-size: 15px;
    opacity: 0.75;
  }
  .mt-unified-card.compact .mt-compact-sensor span {
    grid-column: 2;
    justify-self: start;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    line-height: 1.15;
  }
  .mt-unified-card.compact .mt-compact-battery-low ha-icon {
    opacity: 1;
    color: var(--mt-warn, #f44336);
  }
  .mt-unified-card.compact .mt-compact-battery-low span {
    color: var(--mt-warn, #f44336);
  }

  /* ── Compact: Buttonzeile – schmaler, mittig, Grid ─────────────── */
  .mt-unified-card.compact .mt-btn-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 172px));
    justify-content: center;
    gap: 6px;
    padding: 3px var(--mt-spacing) 6px;
  }
  /* Wenn nur ein Button sichtbar ist */
  .mt-unified-card.compact .mt-btn-row.single-btn {
    grid-template-columns: minmax(0, 172px);
  }
  .mt-unified-card.compact .mt-main-btn {
    width: 100%;
    min-width: 0;
    min-height: 38px;
    padding: 5px 8px;
    font-size: 11px;
    flex: none;
  }

  /* ── Compact: Panel-Slot ─────────────────────────────────────────── */
  .mt-unified-card.compact .mt-panel-slot.open {
    max-height: 180px;
  }

  /* ── Compact: Normalmodus-Elemente ausblenden ────────────────────── */
  /* Statusleiste, Trend-Button und Trendfläche werden per JS nicht gerendert */

  /* ── Compact: Controls (Werte über Buttons) ─────────────────────── */
  .mt-unified-card.compact .mt-compact-controls {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 172px));
    justify-content: center;
    gap: 6px;
    padding: 4px var(--mt-spacing) 0;
  }
  .mt-unified-card.compact .mt-compact-controls.single-col {
    grid-template-columns: minmax(0, 172px);
  }
  .mt-unified-card.compact .mt-compact-control-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 0;
  }
  .mt-unified-card.compact .mt-compact-ctrl-value {
    font-size: 11px;
    font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
  .mt-unified-card.compact .mt-compact-ctrl-label {
    font-size: 9px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.6px;
    white-space: nowrap;
    text-align: center;
  }
  /* Zustandsfarben für Werte über Buttons */
  .mt-unified-card.compact.action-heating .mt-compact-ctrl-value.hvac-value { color: var(--mt-heat); }
  .mt-unified-card.compact.action-cooling .mt-compact-ctrl-value.hvac-value { color: var(--mt-cool); }
  .mt-unified-card.compact.action-heating .mt-compact-ctrl-value.temp-value { color: var(--mt-heat); }
  .mt-unified-card.compact.action-cooling .mt-compact-ctrl-value.temp-value { color: var(--mt-cool); }

  /* ══════════════════════════════════════════════════════════════════
     COMPACT MODE – Zweispalten-Raster (v1.8.4)
     ══════════════════════════════════════════════════════════════════ */

  /* Gemeinsames Raster: zwei gleich breite Spalten, mittig */
  .mt-unified-card.compact .mt-compact-grid {
    width: min(calc(100% - 20px), 350px);
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
    padding: 4px 0 0;
  }

  /* Jede Spalte: Inhalt oben, Button unten */
  .mt-unified-card.compact .mt-compact-column {
    display: grid;
    grid-template-rows: minmax(58px, auto) auto;
    align-items: end;
    min-width: 0;
  }

  /* Linke Spalte: Isttemperatur zentriert */
  .mt-unified-card.compact .mt-compact-temperature {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    padding-bottom: 4px;
  }

  .mt-unified-card.compact .mt-compact-ist {
    font-size: 42px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -2px;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr), opacity var(--mt-tr);
    white-space: nowrap;
  }
  .mt-unified-card.compact.action-heating .mt-compact-ist { color: var(--mt-heat); }
  .mt-unified-card.compact.action-cooling .mt-compact-ist { color: var(--mt-cool); }
  .mt-unified-card.compact.mode-off .mt-compact-ist { opacity: 0.35; color: var(--secondary-text-color) !important; }

  .mt-unified-card.compact .mt-compact-ist-unit {
    align-self: flex-start;
    margin-top: 2px;
    margin-left: 3px;
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
    color: inherit;
    opacity: 0.60;
  }

  /* Rechte Spalte: Sensorblock zentriert */
  /* Compact Sensor-Grid: siehe oben (konsolidiert) */

  /* Buttons im Grid: gleich breit, gleich hoch */
  .mt-unified-card.compact .mt-compact-column .mt-main-btn {
    width: 100%;
    min-width: 0;
    min-height: 38px;
    padding: 5px 8px;
    font-size: 11px;
    flex: none;
  }

  /* Buttons bei offenem Fenster gesperrt */
  .mt-unified-card.compact .mt-main-btn.window-locked,
  .mt-main-btn.window-locked {
    opacity: 0.55;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Alte Compact-Regeln überschreiben (Kompatibilität) */
  .mt-unified-card.compact .mt-compact-main { display: none !important; }
  .mt-unified-card.compact .mt-compact-controls { display: none !important; }
  .mt-unified-card.compact .mt-btn-row { display: none !important; }

  /* Compact: Panel-Slot */
  .mt-unified-card.compact .mt-panel-slot.open { max-height: 180px; }

  /* Compact: Header kompakter */
  .mt-unified-card.compact .mt-header { padding: 8px var(--mt-spacing) 0; gap: 7px; }
  .mt-unified-card.compact .mt-header-icon { width: 30px; height: 30px; }
  .mt-unified-card.compact .mt-header-icon ha-icon { --mdc-icon-size: 16px; }
  .mt-unified-card.compact .mt-name { font-size: 14px !important; }
  .mt-unified-card.compact .mt-status { font-size: 11px !important; }

  /* ══════════════════════════════════════════════════════════════════
     COMPACT MODE: Gleichmäßiger Randabstand (v1.9.4)
     ══════════════════════════════════════════════════════════════════ */

  .mt-unified-card.compact {
    --mt-compact-edge: 10px;
  }

  .mt-unified-card.compact .mt-header {
    padding: var(--mt-compact-edge) var(--mt-compact-edge) 0;
    gap: 7px;
  }

  .mt-unified-card.compact .mt-compact-grid {
    width: min(calc(100% - 2 * var(--mt-compact-edge)), 350px);
    margin-inline: auto;
    padding: 4px 0 var(--mt-compact-edge);
  }

  /* ══════════════════════════════════════════════════════════════════
     UNIFIED CARD WRAPPER (v1.9.7) – eine einzige Außenkontur
     ══════════════════════════════════════════════════════════════════ */

  /* Einziger äußerer Container: Rahmen, Rundung, Hintergrund, Schatten */
  ha-card.mt-unified-card {
    display: flex !important;
    flex-direction: column !important;
    gap: 0 !important;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: var(--mt-radius);
    background: var(--ha-card-background, var(--card-background-color, #1c2128));
    border: 1px solid var(--divider-color, rgba(255,255,255,0.10));
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.14);
    transition: background var(--mt-tr), border-color var(--mt-tr), box-shadow var(--mt-tr);
  }

  /* Zustandsfarben NUR am äußeren ha-card.mt-unified-card */
  ha-card.mt-unified-card.action-heating {
    background: rgba(255,107,53,0.07) !important;
    border-color: rgba(255,107,53,0.32) !important;
    box-shadow: 0 0 28px rgba(255,107,53,0.09) !important;
  }
  ha-card.mt-unified-card.action-cooling {
    background: rgba(79,195,247,0.07) !important;
    border-color: rgba(79,195,247,0.32) !important;
    box-shadow: 0 0 28px rgba(79,195,247,0.09) !important;
  }
  ha-card.mt-unified-card.action-drying {
    background: rgba(255,213,79,0.06) !important;
    border-color: rgba(255,213,79,0.28) !important;
    box-shadow: none !important;
  }
  ha-card.mt-unified-card.action-fan {
    background: rgba(129,199,132,0.06) !important;
    border-color: rgba(129,199,132,0.28) !important;
    box-shadow: none !important;
  }
  ha-card.mt-unified-card.mode-off { opacity: 0.82; }
  ha-card.mt-unified-card.mode-off .mt-temp-center { color: var(--secondary-text-color); opacity: 0.35; }
  ha-card.mt-unified-card.mode-off .mt-ist,
  ha-card.mt-unified-card.mode-off .mt-ist-unit { color: var(--secondary-text-color) !important; }

  /* Thermostat-Bereich: transparent, kein eigener Rahmen */
  .mt-thermostat-content {
    width: 100%;
    margin: 0 !important;
    padding: 0;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  /* Trend-Bereich: transparent, kein Rahmen, kein Abstand */
  .mt-trend-content {
    width: 100%;
    margin: 0 !important;
    margin-top: 0 !important;
    padding: 0;
    border: 0 !important;
    border-top: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  /* Graph-Inner: transparent */
  .mt-graph-inner {
    width: 100%;
    margin: 0 !important;
    padding: 0;
    background: transparent !important;
  }

  .mt-graph-inner { width:100%; margin:0!important; padding:0; background:transparent!important; position:relative; }
  .mt-chart-readouts { display:flex; justify-content:center; flex-wrap:wrap; gap:8px 18px; padding:2px 0 5px; color:var(--secondary-text-color); font-size:11px; }
  .mt-chart-readouts span { display:flex; align-items:center; gap:5px; } .mt-chart-readouts b { color:var(--primary-text-color); font-weight:600; font-variant-numeric:tabular-nums; }
  .mt-chart-dot { width:8px; height:8px; display:inline-block; border-radius:50%; } .mt-chart-dot.temperature { background:#42a5f5; } .mt-chart-dot.setpoint { background:var(--mt-target-color); }
  .mt-chart-frame { position:relative; width:100%; height:180px; overflow:hidden; box-sizing:border-box; border:1px solid var(--divider-color,rgba(127,127,127,.24)); border-radius:12px; background:var(--card-background-color,var(--ha-card-background,transparent)); }
  .mt-chart-svg { position:relative; width:100% !important; max-width:none !important; height:178px; margin:0; display:block; overflow:hidden; }
  .mt-chart-area { fill:url(#mt-temp-fill); }
  .mt-chart-line { fill:none; stroke-linecap:round; stroke-linejoin:round; }
  .mt-chart-point { fill:transparent; stroke:transparent; pointer-events:all; } .mt-chart-point:hover { fill:var(--card-background-color,#fff); stroke:var(--primary-color,#ff6b35); stroke-width:3; }
  .mt-chart-extrema { position:absolute; z-index:2; top:16px; left:16px; right:16px; display:flex; justify-content:space-between; padding:0; color:var(--secondary-text-color); font:14px Roboto,sans-serif; line-height:1.2; pointer-events:none; }
  .mt-chart-extreme { display:flex; flex-direction:column; align-items:flex-start; gap:4px; }
  .mt-chart-extreme span { color:var(--primary-text-color); font-size:14px; font-weight:600; }
  .mt-chart-extreme strong,.mt-chart-extreme time { color:var(--secondary-text-color); font-size:14px; font-weight:500; font-style:normal; font-variant-numeric:tabular-nums; }
  .mt-chart-extreme time { font-size:14px; } .mt-chart-extreme-max { align-items:flex-end; text-align:right; }
  .mt-graph-inner { position:relative; width:100%; } .mt-chart-tooltip { position:absolute; z-index:5; transform:translate(-50%,-100%); box-sizing:border-box; max-width:calc(100% - 16px); max-height:calc(100% - 16px); overflow:auto; padding:6px 9px; border:1px solid var(--divider-color,rgba(127,127,127,.3)); border-radius:8px; background:var(--card-background-color,var(--ha-card-background,#fff)); color:var(--primary-text-color,#222); box-shadow:0 4px 16px rgba(0,0,0,.24); font:11px Roboto,sans-serif; line-height:1.45; white-space:pre-line; pointer-events:none; }
  .mt-chart-empty { min-height:150px; display:flex; align-items:center; justify-content:center; color:var(--secondary-text-color); font-size:12px; }  /* ══════════════════════════════════════════════════════════════════
     AUTOMATIK / HAND-STEUERUNG (v1.9.5)
     ══════════════════════════════════════════════════════════════════ */

  .mt-control-mode {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px var(--mt-spacing) 4px;
    flex-shrink: 0;
  }

  .mt-control-mode-option {
    position: relative;
    overflow: hidden;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.20);
    background: linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03));
    backdrop-filter: blur(14px) saturate(135%);
    -webkit-backdrop-filter: blur(14px) saturate(135%);
    color: var(--secondary-text-color);
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms ease;
    font-family: inherit;
    white-space: nowrap;
    letter-spacing: 0.3px;
    min-height: 36px;
    -webkit-tap-highlight-color: transparent;
  }
  .mt-control-mode-option ha-icon {
    --mdc-icon-size: 14px;
    pointer-events: none;
    flex-shrink: 0;
  }
  .mt-control-mode-option:hover {
    border-color: rgba(255,255,255,0.32);
    color: var(--primary-text-color);
    transform: translateY(-1px);
  }
  .mt-control-mode-option:active { transform: scale(0.96); }
  .mt-control-mode-option:focus-visible {
    outline: 2px solid var(--primary-color, #ff6b35);
    outline-offset: 2px;
  }
  .mt-control-mode-option[aria-pressed="true"] {
    background: rgba(167,139,250,0.20);
    border-color: rgba(167,139,250,0.50);
    color: var(--mt-auto, #a78bfa);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.20), 0 2px 8px rgba(0,0,0,0.10);
  }
  .mt-control-mode-option[aria-pressed="true"].manual-active {
    background: rgba(255,107,53,0.15);
    border-color: rgba(255,107,53,0.40);
    color: var(--mt-heat, #ff6b35);
  }
  .mt-control-mode-option:disabled,
  .mt-control-mode-option.window-locked {
    opacity: 0.40;
    cursor: not-allowed;
    transform: none;
    pointer-events: none;
  }

  @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .mt-control-mode-option { background: rgba(50,55,65,0.92); }
  }
  /* Responsive Darstellung fuer schmale Karten im Horizontal Stack */
  @container (max-width: 300px) {
    :host { --mt-spacing: 9px; }
    .mt-header { padding-left: 9px; padding-right: 9px; gap: 7px; }
    .mt-header-icon { width: 32px; height: 32px; }
    .mt-header-icon ha-icon { --mdc-icon-size: 17px; }
    .mt-name { font-size: 13px; }
    .mt-ist { font-size: 50px; }
    .mt-ist-unit { font-size: 18px; }
    .mt-humidity-row { padding-left: 9px; padding-right: 9px; font-size: 12px; }
    .mt-btn-row { gap: 5px; padding-left: 9px; padding-right: 9px; }
    .mt-main-btn { min-width: 0; padding: 7px 6px; gap: 4px; font-size: 10px; letter-spacing: 0; }
    .mt-main-btn ha-icon { --mdc-icon-size: 14px; }
    .mt-btn-chevron { --mdc-icon-size: 11px !important; }
    .mt-status-bar { padding-left: 6px; padding-right: 6px; }
    .mt-stat { padding: 2px 5px; font-size: 10px; }
    .mt-mode-row { gap: 5px; }
    .mt-mode-option { width: auto; max-width: none; flex: 1 1 0; padding: 6px 5px; gap: 4px; font-size: 10px; }
    .mt-temp-control { gap: 4px; padding-left: 7px; padding-right: 7px; }
    .mt-adj-btn { width: 40px; height: 40px; }
    .mt-limit-value { font-size: 10px; }
    .mt-soll-display { min-width: 68px; }
    .mt-soll-big { font-size: 34px; }
    .mt-soll-big-unit { font-size: 14px; }
  }

  /* Zustandsdarstellung: neutraler Kartenhintergrund, Farbe nur am Kopf-Icon */
  ha-card.mt-unified-card.action-heating,
  ha-card.mt-unified-card.action-cooling,
  ha-card.mt-unified-card.action-drying,
  ha-card.mt-unified-card.action-fan,
  ha-card.mt-unified-card.action-idle {
    background: var(--ha-card-background, var(--card-background-color, #1c2128)) !important;
    border-color: var(--divider-color, rgba(255,255,255,0.10)) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.14) !important;
  }
  .mt-graph-wrapper.action-heating,
  .mt-graph-wrapper.action-cooling {
    background: var(--ha-card-background, var(--card-background-color, #1c2128)) !important;
    border-color: var(--divider-color, rgba(255,255,255,0.10)) !important;
  }
  .mt-unified-card.action-heating .mt-header-icon,
  .mt-unified-card.action-cooling .mt-header-icon,
  .mt-unified-card.action-idle .mt-header-icon { background: rgba(255,255,255,0.06) !important; }
  .mt-unified-card.action-heating .mt-header-icon ha-icon { color: var(--mt-heat) !important; }
  .mt-unified-card.action-cooling .mt-header-icon ha-icon { color: var(--mt-cool) !important; }
  .mt-unified-card.action-idle .mt-header-icon ha-icon { color: var(--secondary-text-color) !important; }
  .mt-unified-card.action-heating .mt-ist,
  .mt-unified-card.action-heating .mt-ist-unit,
  .mt-unified-card.action-cooling .mt-ist,
  .mt-unified-card.action-cooling .mt-ist-unit,
  .mt-unified-card.action-heating .mt-soll-big,
  .mt-unified-card.action-cooling .mt-soll-big,
  .mt-unified-card.compact.action-heating .mt-compact-ist,
  .mt-unified-card.compact.action-cooling .mt-compact-ist,
  .mt-unified-card.compact.action-heating .mt-compact-ctrl-value,
  .mt-unified-card.compact.action-cooling .mt-compact-ctrl-value { color: var(--primary-text-color) !important; }

  .mt-unified-card { --mt-target-color:color-mix(in srgb,var(--primary-text-color,#212121) 28%,#ff9800); }
  .mt-unified-card .mt-humidity-row ha-icon,.mt-unified-card .mt-compact-humidity ha-icon { color:#29b6f6; }
  .mt-unified-card .mt-status-bar ha-icon { color:#26a69a; } .mt-unified-card ha-icon[icon="mdi:fire"] { color:#ff7043; }
  .mt-unified-card ha-icon[icon="mdi:fan"] { color:#26c6da; } .mt-unified-card ha-icon[icon="mdi:water-percent"] { color:#29b6f6; } .mt-unified-card ha-icon[icon="mdi:battery-alert"] { color:#ff7043; }
  .mt-unified-card .mt-main-btn.active-heat ha-icon,.mt-unified-card .mt-mode-option.active-heat ha-icon { color:var(--mt-heat); }
  .mt-unified-card .mt-main-btn.active-cool ha-icon,.mt-unified-card .mt-mode-option.active-cool ha-icon { color:var(--mt-cool); }
  .mt-unified-card .mt-main-btn.active-auto ha-icon,.mt-unified-card .mt-mode-option.active-auto ha-icon { color:var(--mt-auto); }
  .mt-unified-card .mt-main-btn.active-fan ha-icon { color:var(--mt-fan); } .mt-unified-card .mt-main-btn.active-dry ha-icon { color:var(--mt-dry); }
  .mt-unified-card .mt-main-btn.active-off ha-icon { color:var(--mt-off); } .mt-unified-card .mt-main-btn.active-temp ha-icon { color:var(--mt-heat); }
  .mt-unified-card .mt-main-btn.active-graph ha-icon { color:#42a5f5; } .mt-unified-card .mt-adj-btn ha-icon { color:var(--mt-heat); }
  .mt-unified-card .mt-main-btn-value.setpoint-mismatch,
  .mt-unified-card .mt-soll-big.setpoint-mismatch,
  .mt-unified-card .mt-soll-big.setpoint-mismatch .mt-soll-big-value,
  .mt-unified-card .mt-soll-big.setpoint-mismatch .mt-soll-big-unit { color:var(--mt-heat,#ff6b35)!important; }
  /* v2.3.1: kompaktere Sollwertverstellung */
  .mt-adj-btn, .mt-unified-card.compact .mt-adj-btn { width: 32px !important; height: 32px !important; }
  .mt-adj-btn ha-icon, .mt-unified-card.compact .mt-adj-btn ha-icon { --mdc-icon-size: 18px !important; }
`;const MT_TRANSLATION_LANGUAGES=new Set(["de","en","es","fr","nl","tr","ru","ar","pl"]);
const MT_TRANSLATION_CACHE=new Map();
const MT_TRANSLATION_FALLBACK={
  state:{},action:{},sensor:{},alert:{},ui:{},aria:{},state_badge:{},version:{}
};
const MT_TRANSLATION_HOVER_FALLBACK={
  de:{trend_temperature:"Temperatur",trend_setpoint:"Sollwert",trend_time:"Zeit"},
  en:{trend_temperature:"Temperature",trend_setpoint:"Setpoint",trend_time:"Time"},
  es:{trend_temperature:"Temperatura",trend_setpoint:"Consigna",trend_time:"Hora"},
  fr:{trend_temperature:"Température",trend_setpoint:"Consigne",trend_time:"Heure"},
  nl:{trend_temperature:"Temperatuur",trend_setpoint:"Instelwaarde",trend_time:"Tijd"},
  tr:{trend_temperature:"Sıcaklık",trend_setpoint:"Hedef sıcaklık",trend_time:"Saat"},
  ru:{trend_temperature:"Температура",trend_setpoint:"Заданная температура",trend_time:"Время"},
  ar:{trend_temperature:"درجة الحرارة",trend_setpoint:"درجة الحرارة المستهدفة",trend_time:"الوقت"},
  pl:{trend_temperature:"Temperatura",trend_setpoint:"Temperatura zadana",trend_time:"Czas"}
};
class At{
  constructor(hass,onChange){
    this._lang="en";
    this._hass=hass;
    this._dict=MT_TRANSLATION_FALLBACK;
    this._onChange=onChange;
    this._loadToken=0;
    this.update(hass);
  }
  update(hass){
    this._hass=hass;
    const requested=String(hass?.language??"en").toLowerCase();
    const base=requested.split("-")[0];
    const language=MT_TRANSLATION_LANGUAGES.has(base)?base:"en";
    if(language===this._lang&&this._dict!==MT_TRANSLATION_FALLBACK)return;
    this._lang=language;
    this._dict={...MT_TRANSLATION_FALLBACK,ui:{...MT_TRANSLATION_HOVER_FALLBACK[language]}};
    this._load(language);
  }
  get lang(){return this._lang}
  async _load(language){
    const token=++this._loadToken;
    try{
      let task=MT_TRANSLATION_CACHE.get(language);
      if(!task){
        const url=new URL(`./translations/${language}.json`,import.meta.url);
        task=fetch(url,{cache:"no-cache"}).then(response=>{
          if(!response.ok)throw new Error(`HTTP ${response.status}`);
          return response.json();
        });
        MT_TRANSLATION_CACHE.set(language,task);
      }
      const dict=await task;
      if(token!==this._loadToken)return;
       this._dict={...MT_TRANSLATION_FALLBACK,...dict,ui:{...MT_TRANSLATION_HOVER_FALLBACK[language],...(dict.ui??{})}};
      this._onChange?.();
    }catch(error){
      MT_TRANSLATION_CACHE.delete(language);
      console.error(`[modern-thermostat] Übersetzung translations/${language}.json konnte nicht geladen werden:`,error);
      this._dict={...MT_TRANSLATION_FALLBACK,ui:{...MT_TRANSLATION_HOVER_FALLBACK[language]}};
      this._onChange?.();
    }
  }
  _text(section,key){return this._dict?.[section]?.[key]??key}
  mode(value){return this._text("state",value)}
  action(value){return this._text("action",value)}
  alert(value){return this._text("alert",value)}
  sensor(value){return this._text("sensor",value)}
  ui(value){return this._text("ui",value)}
  aria(value){return this._text("aria",value)}
}
const kt=["critical","error","warning","info","normal"];function St(t){return kt.indexOf(t)}const Ct=new Set(["calibration","calibrating","kalibrierung","kalibrierfahrt","calibration_drive","reference_drive","referenzfahrt","valve_calibration","motor_calibration"]),Et=new Set(["valve_error","valve_blocked","valve_position_error","position_mismatch","motor_error","motor_blocked","ventilfehler","ventil_blockiert"]),Tt=new Set(["fault","error","failure","stoerung","fehler","sabotage","tamper","alarm"]),Mt=new Set(["unavailable","unknown","timeout","offline","not_reachable","communication_error"]),Pt=new Set(["update","updating","firmware_update","ota"]);const zt={off:"mdi:power",heat:"mdi:fire",cool:"mdi:snowflake",auto:"mdi:thermostat-auto",heat_cool:"mdi:autorenew",fan_only:"mdi:fan",dry:"mdi:water-off"};function Ot(t,e=1){return null==t?"—":t.toFixed(e)}function Nt(t,e,i){return Math.min(Math.max(t,e),i)}function Ht(t,e){return Math.round(t/e)*e}function jt(t){return t.startsWith("mdi:")?t:`mdi:${t}`}function Ut(t){const e=parseFloat(t);return isNaN(e)?null:e}const Dt="2.5.0";console.info(`%c MODERN-THERMOSTAT %c v${Dt} `,"background:#ff6b35;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","background:#1c2128;color:#ff6b35;font-weight:600;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards??[],window.customCards.push({type:"modern-thermostat",name:"Modern Thermostat",description:"Modern TRV thermostat card with alert system and optional temperature graph.",preview:!0});let Lt=class extends nt{constructor(){var t;super(...arguments),this._localizer=new At(t,()=>this.requestUpdate()),this._activePanel="none",this._graphVisible=!1,this._windowTimer=void 0,this._windowLastOpen=null,this._windowAutomationEnabled=false,this._windowRestoreMode=void 0,this._windowForcedMode=void 0}setConfig(t){try{!function(t){if(!t.entity)throw new Error("[modern-thermostat] Missing required field: entity");if(!t.entity.startsWith("climate."))throw new Error(`[modern-thermostat] Entity must be a climate entity, got: ${t.entity}`)}(t)}catch(ft){return void(this._error=ft.message)}this._config={show_hvac_modes:!0,show_current_temperature:!0,show_battery_warning:!0,show_graph:!1,compact:!1,step:.5,decimals:1,hours_to_show:24,graph_line_width:2,battery_warning_level:25,humidity_warning_level:70,show_version:!1,show_debug_info:!1,show_battery:!1,show_graph_button:!1,show_temperature_limits:!0,manual_on_temperature_change:!1,show_heating_demand:!1,battery_voltage_entity:"",...t,show_header:!0,show_window_status:!0,window_auto_off:!1,window_open_delay:1,window_close_delay:1,show_humidity:!0,show_target_humidity:!1,show_preset:!1,show_fan_mode:!1,show_swing_mode:!1,show_control_mode:!1},this._activePanel="none",this._graphVisible=!1,this._error=void 0}getCardSize(){if(!this._config)return 3;let t=this._config.compact?2:3;return this._config.show_graph&&(t+=2),t}static async getConfigElement(){return await Promise.resolve().then(function(){return Vt}),document.createElement("modern-thermostat-editor")}static getStubConfig(hass, entities, entitiesFallback) {
  const allEntities = [
    ...(entities ?? []),
    ...(entitiesFallback ?? [])
  ];

  const climateEntity = allEntities.find(
    entityId => entityId.startsWith("climate.")
  );

  const availableClimateEntity =
    climateEntity ??
    Object.keys(hass?.states ?? {}).find(
      entityId => entityId.startsWith("climate.")
    );

  return {  
    entity: availableClimateEntity ?? "climate.example",  
    name: "Modern Thermostat",  
    icon: "mdi:thermostat",  
    compact: false,  
    step: 0.5,  
    decimals: 1,  
    show_hvac_modes: true,  
    window_entity: "",  
    humidity_entity: "",  
    humidity_warning_level: 70,  
    valve_position_entity: "",  
    battery_entity: "",  
    battery_voltage_entity: "",  
    heating_demand_entity: "",  
    show_heating_demand: false,  
    show_battery: true,  
    show_battery_warning: true,  
    battery_warning_level: 25,  
    graph_entity: "",  
    show_graph: false,  
    show_graph_button: true,  
    hours_to_show: 24,  
    graph_line_width: 2,  
    sensors: []  
  };}getVersion(){return Dt}_refreshLocalizer(){const t=this.hass?.language;return t!==this._lastLanguage&&(this._localizer.update(this.hass),this._lastLanguage=t),this._localizer}// ══════════════════════════════════════════════════════════════════════
// ZENTRALE QUELLENLOGIK v1.9.0
// ══════════════════════════════════════════════════════════════════════

// Prüft ob ein HA-Zustand verwendbar ist
_isUsableState(state){
  return state!==null&&state!==undefined&&"unavailable"!==state&&"unknown"!==state
}

// Konvertiert einen Wert zu einer Zahl oder null
_toNumber(value){
  if(value===null||value===undefined)return null;
  const n=parseFloat(value);
  return isFinite(n)?n:null
}

// Liest das erste numerisch auswertbare Attribut aus einer Liste von Aliasnamen
_firstNumericAttribute(attrs,names){
  for(const name of names){
    const v=attrs[name];
    if(v!==null&&v!==undefined){
      const n=this._toNumber(v);
      if(n!==null)return n;
    }
  }
  return null
}

// Liest das erste vorhandene Text-Attribut aus einer Liste von Aliasnamen
_firstTextAttribute(attrs,names){
  for(const name of names){
    const v=attrs[name];
    if(v!==null&&v!==undefined&&"unavailable"!==v&&"unknown"!==v)return String(v);
  }
  return null
}

// Liest den Zustand einer externen Entität sicher aus
_getExternalState(entityId){
  if(!entityId||!this.hass)return null;
  const s=this.hass.states[entityId];
  if(!s||!this._isUsableState(s.state))return null;
  return s
}

// Zentrale Wertauflösung: Climate-Attribut hat Vorrang vor externer Entität
// Rückgabe: { value, source, available, unit }
_resolveValue({climateAttrs,climateAliases,externalEntityId,type="number"}){
  // 1. Versuch: Climate-Attribut
  if(climateAttrs&&climateAliases&&climateAliases.length>0){
    if(type==="number"){
      const v=this._firstNumericAttribute(climateAttrs,climateAliases);
      if(v!==null)return{value:v,source:"climate",available:!0,unit:null};
    }else{
      const v=this._firstTextAttribute(climateAttrs,climateAliases);
      if(v!==null)return{value:v,source:"climate",available:!0,unit:null};
    }
  }
  // 2. Fallback: externe Entität
  if(externalEntityId){
    const s=this._getExternalState(externalEntityId);
    if(s){
      if(type==="number"){
        const v=this._toNumber(s.state);
        if(v!==null)return{value:v,source:"external",available:!0,unit:s.attributes?.unit_of_measurement??null};
      }else{
        return{value:s.state,source:"external",available:!0,unit:null};
      }
    }
  }
  return{value:null,source:null,available:!1,unit:null}
}

// Löst alle Anzeigewerte für einen Render-Zyklus auf
_resolveDisplayValues(climateEntity){
  const a=climateEntity.attributes;
  const cfg=this._config;

  // Feuchtigkeit (Istwert)
  const humidity=this._resolveValue({
    climateAttrs:a,
    climateAliases:["current_humidity"],
    externalEntityId:cfg.humidity_entity,
    type:"number"
  });

  // Batterie
  const battery=this._resolveValue({
    climateAttrs:a,
    climateAliases:["battery","battery_level","battery_percent"],
    externalEntityId:cfg.battery_entity,
    type:"number"
  });

  // Batteriespannung
  const batteryVoltage=this._resolveValue({
    climateAttrs:a,
    climateAliases:["battery_voltage","voltage"],
    externalEntityId:cfg.battery_voltage_entity,
    type:"number"
  });

  // Ventilstellung / Stellgröße
  const valve=this._resolveValue({
    climateAttrs:a,
    climateAliases:["valve_position","valve","position","opening"],
    externalEntityId:cfg.valve_position_entity,
    type:"number"
  });

  // Fensterstatus
  const windowStatus=this._resolveValue({
    climateAttrs:a,
    climateAliases:["window_open","window_state","window"],
    externalEntityId:cfg.window_entity,
    type:"text"
  });

  // Wärmebedarf / Stellanforderung
  const heatingDemand=this._resolveValue({
    climateAttrs:a,
    climateAliases:["heating_demand","pi_heating_demand","pi_heat_demand","heat_demand","heating_demand_percent","heat_demand_percent"],
    externalEntityId:cfg.heating_demand_entity||cfg.demand_entity,
    type:"number"
  });

  // Ziel-Feuchtigkeit
  const targetHumidity=this._resolveValue({
    climateAttrs:a,
    climateAliases:["humidity","target_humidity"],
    externalEntityId:null,
    type:"number"
  });

  // Preset
  const preset=this._resolveValue({
    climateAttrs:a,
    climateAliases:["preset_mode"],
    externalEntityId:null,
    type:"text"
  });

  // Lüftermodus
  const fanMode=this._resolveValue({
    climateAttrs:a,
    climateAliases:["fan_mode"],
    externalEntityId:null,
    type:"text"
  });

  // Schwenkmodus
  const swingMode=this._resolveValue({
    climateAttrs:a,
    climateAliases:["swing_mode"],
    externalEntityId:null,
    type:"text"
  });

  return{humidity,battery,batteryVoltage,valve,windowStatus,heatingDemand,targetHumidity,preset,fanMode,swingMode}
}

// ══════════════════════════════════════════════════════════════════════
// AUTOMATIK / HAND-STEUERUNG v1.9.5
// ══════════════════════════════════════════════════════════════════════

// Erkennungskandidaten für Automatik-Presets
_AUTOMATIC_PRESET_CANDIDATES=["auto","automatic","schedule","program","programmed","zeitplan","programm"];
// Erkennungskandidaten für Hand-Presets
_MANUAL_PRESET_CANDIDATES=["manual","hand","none","comfort","manuell"];

// Ermittelt Automatik/Hand-Fähigkeiten des Thermostats
_resolveControlModeCapabilities(climateEntity){
  const cfg=this._config;
  const attrs=climateEntity?.attributes??{};
  const hvacModes=attrs.hvac_modes??[];
  const presetModes=attrs.preset_modes??[];
  const currentPreset=attrs.preset_mode??null;
  const currentHvac=climateEntity?.state??"off";

  // Nicht anzeigen wenn show_control_mode deaktiviert
  if(!1===cfg.show_control_mode){
    return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
  }

  // 1. Explizite Benutzerkonfiguration hat Vorrang
  const src=cfg.control_mode_source??"auto";

  if(src==="hvac"){
    const autoMode=cfg.automatic_hvac_mode??"auto";
    const manMode=cfg.manual_hvac_mode??"heat";
    const autoOk=hvacModes.includes(autoMode);
    const manOk=hvacModes.includes(manMode);
    if(!autoOk||!manOk)return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    const current=currentHvac===autoMode?"auto":currentHvac===manMode?"manual":null;
    return{available:!0,source:"hvac",current,automaticValue:autoMode,manualValue:manMode};
  }

  if(src==="preset"){
    const autoPreset=cfg.automatic_preset??null;
    const manPreset=cfg.manual_preset??null;
    if(!autoPreset||!manPreset)return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    if(!presetModes.includes(autoPreset)||!presetModes.includes(manPreset)){
      return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    }
    const current=currentPreset===autoPreset?"auto":currentPreset===manPreset?"manual":null;
    return{available:!0,source:"preset",current,automaticValue:autoPreset,manualValue:manPreset};
  }

  if(src==="external"){
    const entityId=cfg.control_mode_entity;
    if(!entityId)return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    const extState=this._getExternalState(entityId);
    if(!extState)return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    const autoVal=cfg.automatic_entity_value??"auto";
    const manVal=cfg.manual_entity_value??"manual";
    const options=extState.attributes?.options??[];
    if(!options.includes(autoVal)||!options.includes(manVal)){
      return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    }
    const current=extState.state===autoVal?"auto":extState.state===manVal?"manual":null;
    return{available:!0,source:"external",current,automaticValue:autoVal,manualValue:manVal};
  }

  if(src==="service"){
    const autoAction=cfg.automatic_action;
    const manAction=cfg.manual_action;
    if(!autoAction?.service||!manAction?.service){
      return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
    }
    return{available:!0,source:"service",current:null,automaticValue:"auto",manualValue:"manual"};
  }

  // 2. Automatische Erkennung (src === "auto")
  // 2a. Preset-Erkennung
  if(presetModes.length>=2){
    const autoPreset=this._AUTOMATIC_PRESET_CANDIDATES.find(c=>presetModes.includes(c))??null;
    const manPreset=this._MANUAL_PRESET_CANDIDATES.find(c=>presetModes.includes(c))??null;
    if(autoPreset&&manPreset){
      const current=currentPreset===autoPreset?"auto":currentPreset===manPreset?"manual":null;
      return{available:!0,source:"preset",current,automaticValue:autoPreset,manualValue:manPreset};
    }
  }

  // 2b. HVAC-Erkennung: auto + mindestens ein weiterer Modus
  if(hvacModes.includes("auto")&&hvacModes.length>=2){
    const manMode=hvacModes.find(m=>m!=="auto"&&m!=="off")??null;
    if(manMode){
      const current=currentHvac==="auto"?"auto":currentHvac===manMode?"manual":null;
      return{available:!0,source:"hvac",current,automaticValue:"auto",manualValue:manMode};
    }
  }

  return{available:!1,source:null,current:null,automaticValue:null,manualValue:null};
}

// Schaltet zwischen Automatik und Hand
async _setControlMode(targetMode,caps){
  if(!this.hass||!this._config)return;
  if(this._isWindowOpen())return;
  if(!caps.available)return;

  const cfg=this._config;
  const entityId=cfg.entity;

  try{
    if(caps.source==="hvac"){
      const hvacMode=targetMode==="auto"?caps.automaticValue:caps.manualValue;
      await this.hass.callService("climate","set_hvac_mode",{entity_id:entityId,hvac_mode:hvacMode});
    }else if(caps.source==="preset"){
      const preset=targetMode==="auto"?caps.automaticValue:caps.manualValue;
      await this.hass.callService("climate","set_preset_mode",{entity_id:entityId,preset_mode:preset});
    }else if(caps.source==="external"){
      const extEntityId=cfg.control_mode_entity;
      const value=targetMode==="auto"?caps.automaticValue:caps.manualValue;
      const extState=this.hass.states[extEntityId];
      const domain=extEntityId?.split(".")?.[0]??"select";
      const service=domain==="input_select"?"select_option":"select_option";
      await this.hass.callService(domain,service,{entity_id:extEntityId,option:value});
    }else if(caps.source==="service"){
      const action=targetMode==="auto"?cfg.automatic_action:cfg.manual_action;
      if(!action?.service)return;
      const[domain,svc]=action.service.split(".");
      const data={entity_id:entityId,...(action.data??{})};
      await this.hass.callService(domain,svc,data);
    }
  }catch(err){
    console.error("[modern-thermostat] _setControlMode Fehler:",err);
  }
}

// Rendert die Automatik/Hand-Steuerung
_renderControlMode(caps,localizer,windowOpen){
  if(!caps.available)return B;

  const isAuto=caps.current==="auto";
  const isManual=caps.current==="manual";
  const locked=windowOpen;

  return I`
    <div class="mt-control-mode" role="group" aria-label=${localizer.ui("operating_mode")}>
      <button
        class=${ft({"mt-control-mode-option":!0,"window-locked":locked})}
        type="button"
        aria-pressed=${isAuto?"true":"false"}
        ?disabled=${locked}
        @click=${()=>this._setControlMode("auto",caps)}>
        <ha-icon icon="mdi:calendar-clock"></ha-icon>
        Automatik
      </button>
      <button
        class=${ft({"mt-control-mode-option":!0,"manual-active":isManual,"window-locked":locked})}
        type="button"
        aria-pressed=${isManual?"true":"false"}
        ?disabled=${locked}
        @click=${()=>this._setControlMode("manual",caps)}>
        <ha-icon icon="mdi:hand-back-right"></ha-icon>
        Hand
      </button>
    </div>
  `
}

_resolveAlert(climateEntity){
  const attrs=climateEntity?.attributes??{};
  const normalize=value=>String(value??"").trim().toLowerCase().replace(/[\s-]+/g,"_");
  const inactive=new Set(["","none","ok","normal","clear","cleared","false","0","off","idle","ready","success"]);
  const candidates=[];
  const add=(name,value)=>{
    if(value===null||value===undefined||value===false||value===0)return;
    if(Array.isArray(value)){value.forEach(v=>add(name,v));return;}
    if(typeof value==="object"){
      for(const [key,nested] of Object.entries(value))add(`${name}_${key}`,nested);
      return;
    }
    const raw=normalize(value);
    if(inactive.has(raw))return;
    candidates.push({name:normalize(name),value:raw});
  };
  const alertAttributes=[
    "error","error_code","error_state","fault","fault_code","fault_state",
    "alarm","alarm_state","device_status","status","operating_state","operation_state",
    "calibration","calibration_state","valve_state","motor_state","communication_state",
    "connection_state","diagnostic","diagnostics","problem","problems"
  ];
  for(const name of alertAttributes)if(Object.prototype.hasOwnProperty.call(attrs,name))add(name,attrs[name]);
  const entries=candidates.map(item=>({...item,tokens:new Set(`${item.name}_${item.value}`.split(/[^a-z0-9_]+/).filter(Boolean))}));
  const contains=(entry,set)=>{
    const combined=`${entry.name}_${entry.value}`;
    for(const token of set)if(combined===token||combined.includes(token))return true;
    return false;
  };
  const make=(messageKey,icon,severity,priority)=>({messageKey,icon,severity,priority});
  const matches=[];
  const push=(messageKey,icon,severity,priority)=>matches.push(make(messageKey,icon,severity,priority));

  // 1. Kritische Alarmmeldungen: Sabotage / Manipulation
  for(const entry of entries){
    const combined=`${entry.name}_${entry.value}`;
    if(combined.includes("sabotage")||combined.includes("tamper")){
      push("sabotage","mdi:shield-alert","critical",600);
    }
  }

  // 2. Kommunikationsfehler / Gerät nicht erreichbar
  for(const entry of entries){
    if(contains(entry,Mt))push("communication_error","mdi:wifi-alert","error",500);
  }

  // 3. Konkrete Gerätefehler: Motor, blockiertes Ventil, Ventil, Sensor
  for(const entry of entries){
    const combined=`${entry.name}_${entry.value}`;
    if(combined.includes("motor_error")||combined.includes("motor_blocked")){
      push("motor_error","mdi:cog-alert","error",440);
    }else if(combined.includes("valve_blocked")||combined.includes("ventil_blockiert")||combined.includes("blocked")){
      push("valve_blocked","mdi:valve-closed","error",430);
    }else if(contains(entry,Et)){
      push("valve_error","mdi:valve","error",420);
    }
    if(combined.includes("sensor_error")||combined.includes("sensor_fault")){
      push("sensor_error","mdi:thermometer-alert","error",410);
    }
  }

  // 4. Allgemeine Störung / Alarm
  for(const entry of entries){
    const combined=`${entry.name}_${entry.value}`;
    if(contains(entry,Tt)&&!combined.includes("sabotage")&&!combined.includes("tamper")){
      push("fault","mdi:alert-circle","error",300);
    }
  }

  // 5. Warnungen: Referenzfahrt, Kalibrierfahrt, Kalibrierung
  for(const entry of entries){
    if(!contains(entry,Ct))continue;
    const combined=`${entry.name}_${entry.value}`;
    if(combined.includes("reference")||combined.includes("referenz")){
      push("operating_state_reference","mdi:sync","warning",230);
    }else if(combined.includes("drive")||combined.includes("fahrt")){
      push("operating_state_calibration","mdi:tune-vertical","warning",220);
    }else{
      push("calibration","mdi:tune-vertical","warning",210);
    }
  }

  // 6. Information: Firmware-Update
  for(const entry of entries){
    if(contains(entry,Pt))push("firmware_update","mdi:update","info",100);
  }

  if(matches.length===0)return null;
  matches.sort((a,b)=>b.priority-a.priority);
  const {priority,...highest}=matches[0];
  return highest;
  return null;
}
_windowOpenValue(value){
 if(value===true)return true;if(value===false)return false;
 const normalized=String(value??"").trim().toLowerCase();
 if(["on","open","opened","opening","closing","true","1"].includes(normalized))return true;
 if(["off","closed","close","false","0"].includes(normalized))return false;return null;
}
_getWindowOpenState(){
 const climate=this.hass?.states?.[this._config?.entity],attrs=climate?.attributes??{};
 for(const key of ["window_open","window_state","window","window_contact"]){const raw=attrs[key],state=this._windowOpenValue(raw);if(state!==null)return state;if(typeof raw==="string"&&this.hass?.states?.[raw]){const referenced=this._windowOpenValue(this.hass.states[raw].state);if(referenced!==null)return referenced;}}
 for(const candidate of [attrs.window_entity,attrs.window_contact_entity,attrs.window_sensor,this._config?.window_entity]){if(typeof candidate!=="string")continue;const referenced=this.hass?.states?.[candidate];if(!referenced)continue;const state=this._windowOpenValue(referenced.state);if(state!==null)return state;}
 return null;
}
_windowRestoreKey(){const id=this._config?.entity;return id?`modern-thermostat:window-restore:${id}`:null;}
_getSavedWindowMode(){const key=this._windowRestoreKey();try{return key?window.localStorage.getItem(key)??this._windowRestoreMode??null:this._windowRestoreMode??null;}catch{return this._windowRestoreMode??null;}}
_saveWindowMode(mode){this._windowRestoreMode=mode;const key=this._windowRestoreKey();try{if(key)window.localStorage.setItem(key,mode);}catch{}}
_clearSavedWindowMode(){this._windowRestoreMode=void 0;const key=this._windowRestoreKey();try{if(key)window.localStorage.removeItem(key);}catch{}}
_syncWindowAutomation(){
 const enabled=this._config?.window_auto_off===true;
 if(!enabled){if(this._windowTimer!==void 0){clearTimeout(this._windowTimer);this._windowTimer=void 0;}const state=this._getWindowOpenState();if(this._getSavedWindowMode()&&(state===false||this._windowAutomationEnabled))this._restoreWindowMode(true);this._windowAutomationEnabled=false;this._windowLastOpen=state;return;}
 this._windowAutomationEnabled=true;if(!this.hass||!this._config?.entity)return;
 const open=this._getWindowOpenState();if(open===null){if(this._windowTimer!==void 0){clearTimeout(this._windowTimer);this._windowTimer=void 0;}this._windowLastOpen=null;return;}
 if(open===this._windowLastOpen)return;this._windowLastOpen=open;if(this._windowTimer!==void 0)clearTimeout(this._windowTimer);
 const value=Number(open?this._config.window_open_delay??1:this._config.window_close_delay??1),delay=Math.max(0,Math.min(240,Number.isFinite(value)?value:1))*60000;
 this._windowTimer=setTimeout(()=>{this._windowTimer=void 0;if(open)this._turnOffForWindowOpen();else this._restoreWindowMode();},delay);
}
async _turnOffForWindowOpen(){
 if(this._config?.window_auto_off!==true||this._getWindowOpenState()!==true)return;
 const id=this._config?.entity,entity=this.hass?.states?.[id],mode=entity?.state;if(!entity||!mode||["off","unknown","unavailable"].includes(mode))return;
 if(!this._getSavedWindowMode())this._saveWindowMode(mode);
 try{await this.hass.callService("climate","set_hvac_mode",{entity_id:id,hvac_mode:"off"});this._windowForcedMode=mode;}catch(error){console.warn("[modern-thermostat] Could not turn thermostat off for open window",error);}
}
async _restoreWindowMode(force=false){
 const mode=this._getSavedWindowMode();if(!mode||(!force&&(this._config?.window_auto_off!==true||this._getWindowOpenState()!==false)))return;
 const id=this._config?.entity,entity=this.hass?.states?.[id];if(!entity)return;
 if(entity.state!=="off"&&entity.state!==mode){this._clearSavedWindowMode();return;}
 if(Array.isArray(entity.attributes?.hvac_modes)&&!entity.attributes.hvac_modes.includes(mode)){this._clearSavedWindowMode();return;}
 try{await this.hass.callService("climate","set_hvac_mode",{entity_id:id,hvac_mode:mode});this._clearSavedWindowMode();this._windowForcedMode=void 0;}catch(error){console.warn("[modern-thermostat] Could not restore thermostat mode after window closed",error);}
}
_isWindowOpen(){return this._getWindowOpenState()===true;}
_openMoreInfo(){
  const entityId=this._config?.entity;
  if(!entityId)return;
  const event=new Event("hass-more-info",{bubbles:true,composed:true});
  event.detail={entityId,view:"info"};
  this.dispatchEvent(event);
}
_startHeaderHold(event){
  if(event.button!==undefined&&event.button!==0)return;
  this._cancelHeaderHold();
  this._headerHoldStart={x:event.clientX,y:event.clientY};
  this._headerHoldTriggered=false;
  this._headerHoldTimer=setTimeout(()=>{
    this._headerHoldTimer=undefined;
    this._headerHoldTriggered=true;
    this._openMoreInfo();
  },500);
}
_moveHeaderHold(event){
  if(!this._headerHoldTimer||!this._headerHoldStart)return;
  const dx=event.clientX-this._headerHoldStart.x;
  const dy=event.clientY-this._headerHoldStart.y;
  if(Math.hypot(dx,dy)>10)this._cancelHeaderHold();
}
_cancelHeaderHold(){
  if(this._headerHoldTimer!==undefined){
    clearTimeout(this._headerHoldTimer);
    this._headerHoldTimer=undefined;
  }
  this._headerHoldStart=undefined;
}
_headerKeydown(event){
  if(event.key==="Enter"||event.key===" "){
    event.preventDefault();
    this._openMoreInfo();
  }
}
_togglePanel(t){
  if(this._isWindowOpen()){this._activePanel="none";return;}
  this._activePanel=this._activePanel===t?"none":t
}_toggleGraph(){this._graphVisible=!this._graphVisible,this.requestUpdate()}render(){
  if(this._error)return I`<ha-card><div class="mt-error"><ha-icon icon="mdi:alert-circle"></ha-icon>${this._error}</div></ha-card>`;
  if(!this._config||!this.hass)return B;
  const t=this._refreshLocalizer(),e=this.hass.states[this._config.entity];
  if(!e)return I`<ha-card><div class="mt-error"><ha-icon icon="mdi:help-circle"></ha-icon>${this._config.entity}</div></ha-card>`;
  if("unavailable"===e.state)return I`<div class="mt-unified-card mode-off"><ha-card><div class="mt-error"><ha-icon icon="mdi:thermometer-off"></ha-icon>${t.ui("unavailable")}: ${this._config.entity}</div></ha-card></div>`;

  const i={
    hvacMode:e.state,
    hvacAction:e.attributes.hvac_action??"idle",
    currentTemp:null!=e.attributes.current_temperature?parseFloat(e.attributes.current_temperature):null,
    targetTemp:null!=e.attributes.temperature?parseFloat(e.attributes.temperature):null,
    targetTempHigh:null!=e.attributes.target_temp_high?parseFloat(e.attributes.target_temp_high):null,
    targetTempLow:null!=e.attributes.target_temp_low?parseFloat(e.attributes.target_temp_low):null,
    minTemp:isFinite(parseFloat(e.attributes.min_temp))?parseFloat(e.attributes.min_temp):5,
    maxTemp:isFinite(parseFloat(e.attributes.max_temp))?parseFloat(e.attributes.max_temp):35,
    temperatureLimitsValid:isFinite(parseFloat(e.attributes.min_temp))&&isFinite(parseFloat(e.attributes.max_temp))&&parseFloat(e.attributes.min_temp)<parseFloat(e.attributes.max_temp),
    step:isFinite(parseFloat(e.attributes.target_temp_step))?parseFloat(e.attributes.target_temp_step):(this._config.step??0.5),
    unit:e.attributes.temperature_unit??this.hass.config?.unit_system?.temperature??"°C",
    availableModes:e.attributes.hvac_modes??[e.state],
    name:this._config.name??e.attributes.friendly_name??this._config.entity,
  };
  if(i.minTemp>=i.maxTemp){i.minTemp=5;i.maxTemp=35;}

  const _=this._config.decimals??1;
  const q=this._isWindowOpen();
  const o="heat_cool"===i.hvacMode&&null!==i.targetTempHigh&&null!==i.targetTempLow;
  const a=i.hvacAction;
  const isCompact=!0===this._config.compact;

  if(isCompact&&this._graphVisible){this._graphVisible=false;}

  // Zustandsklassen für Unified Card Wrapper
  const unifiedClass=ft({
    "mt-unified-card":!0,
    "action-heating":"heating"===a,
    "action-cooling":"cooling"===a,
    "action-idle":"idle"===a||"off"===a,
    "action-drying":"drying"===a,
    "action-fan":"fan"===a,
    "mode-off":"off"===i.hvacMode,
    "has-graph":!isCompact&&this._graphVisible,
    compact:isCompact,
  });
  // cardClass nicht mehr für ha-card verwendet (section.mt-thermostat-content hat keinen eigenen Rahmen)
  const cardClass=ft({"mt-card":!0,compact:isCompact});

  const v=zt[i.hvacMode]??"mdi:thermostat";
  // Hauptbutton-Label: Automatik/Manuell wenn erkannt, sonst HVAC-Modus
  // heat darf NIEMALS als "Manuell" ausgegeben werden
  const caps=this._resolveControlModeCapabilities(e);
  const _mainBtnLabel=(()=>{
    if(caps.available){
      if(caps.current==="auto")return t.ui("automatic");
      if(caps.current==="manual")return t.ui("manual_mode");
    }
    return t.mode(i.hvacMode);
  })();
  const _mainBtnIcon=(()=>{
    if(caps.available){
      if(caps.current==="auto")return "mdi:thermostat-auto";
      if(caps.current==="manual")return "mdi:hand-back-right";
    }
    return zt[i.hvacMode]??"mdi:thermostat";
  })();
  const b=_mainBtnLabel;
  const w=ft({
    "mt-main-btn":!0,
    open:"hvac"===this._activePanel,
    "active-heat":"heat"===i.hvacMode&&!caps.available,
    "active-cool":"cool"===i.hvacMode,
    "active-auto":"auto"===i.hvacMode||"heat_cool"===i.hvacMode||(caps.available&&caps.current==="auto"),
    "active-fan":"fan_only"===i.hvacMode,
    "active-dry":"dry"===i.hvacMode,
    "active-off":"off"===i.hvacMode,
  });

  const sollDisplay=void 0!==this._optimisticTarget?this._optimisticTarget:i.targetTemp;
  const targetMismatch=void 0!==this._optimisticTarget&&Number.isFinite(i.targetTemp)&&Math.abs(this._optimisticTarget-i.targetTemp)>0.01;
  const y=null!==sollDisplay?Ot(sollDisplay,_)+i.unit:t.ui("setpoint");
  const $=ft({
    "mt-main-btn":!0,
    open:"temp"===this._activePanel,
    "active-temp":"temp"===this._activePanel,
  });

  // Zentrale Wertauflösung
  const dv=this._resolveDisplayValues(e);
  this._dv=dv;

  const _showHumidity=!1!==this._config.show_humidity;
  let h=(_showHumidity&&dv.humidity.available)?dv.humidity.value:null;
  const humidityWarningLevel=Math.min(100,Math.max(0,Number(this._config.humidity_warning_level??70)));
  const humidityWarning=null!==h&&Number.isFinite(h)&&h>humidityWarningLevel;

  let c=dv.valve.available?dv.valve.value:null;

  const _showBattery=!1!==this._config.show_battery_warning||!1!==this._config.show_battery;
  let n={level:null,isLow:!1,unit:"%",display:""};
  if(_showBattery&&dv.battery.available&&null!==dv.battery.value){
    const bl=dv.battery.value,batteryUnit=String(dv.battery.unit??"%").trim()||"%",isPercent=batteryUnit==="%"||batteryUnit.toLowerCase()==="percent";
    n={level:bl,unit:batteryUnit,isLow:isPercent&&bl<=(this._config.battery_warning_level??25),display:Ot(bl,isPercent?0:2)+(isPercent?"%":" "+batteryUnit)};
  }
  const batteryVoltage=_showBattery&&dv.batteryVoltage?.available?dv.batteryVoltage.value:null;
  const batteryVoltageUnit=dv.batteryVoltage?.unit??"V";

  const alertMsg=this._resolveAlert(e);
  let statusMsg=null;
  if(q){
    statusMsg={messageKey:"window_open",icon:"mdi:window-open-variant",severity:"warning"};
  }

  const graphState=!isCompact&&this._config.graph_entity?this.hass.states[this._config.graph_entity]:void 0;
  const graphAvailable=!isCompact&&!!graphState&&"unavailable"!==graphState.state&&"unknown"!==graphState.state&&!Number.isNaN(Number(graphState.state));
  if(!graphAvailable&&this._graphVisible){this._graphVisible=false;}

  const u=this._config.hours_to_show??24;
  const graphBtnClass=ft({"mt-main-btn":!0,"active-graph":!0});
  const valveIcon=(r=>null===r?"mdi:valve":0===r?"mdi:valve-closed":r>=100?"mdi:valve-open":"mdi:valve");

  return I`
    <ha-card class=${unifiedClass}>
      <div class="mt-thermostat-content">

        ${this._renderHeader(i,t.action(a),statusMsg,alertMsg)}

        ${isCompact?I`
          <!-- COMPACT MODE: Zweispalten-Raster -->
          <div class="mt-compact-grid">
            <!-- Linke Spalte: Isttemperatur + HVAC-Button -->
            <div class="mt-compact-column">
              <div class="mt-compact-temperature">
                <div class="mt-compact-ist">
                  ${null!==i.currentTemp?Ot(i.currentTemp,_):I`<span style="opacity:0.35">—</span>`}
                </div>
                <span class="mt-compact-ist-unit">${i.unit}</span>
              </div>
              ${!1!==this._config.show_hvac_modes&&i.availableModes.length>1?I`
                <button class=${ft({"mt-main-btn":!0,open:"hvac"===this._activePanel,"active-heat":"heat"===i.hvacMode,"active-cool":"cool"===i.hvacMode,"active-auto":"auto"===i.hvacMode||"heat_cool"===i.hvacMode,"active-fan":"fan_only"===i.hvacMode,"active-dry":"dry"===i.hvacMode,"active-off":"off"===i.hvacMode,"window-locked":q})}
                  type="button"
                  aria-expanded=${"hvac"===this._activePanel}
                  aria-disabled=${q}
                  aria-label=${t.aria("set_mode")}
                  @click=${()=>this._togglePanel("hvac")}>
                  <ha-icon icon=${jt(_mainBtnIcon)}></ha-icon>
                  ${b}
                  <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
                </button>
              `:B}
            </div>
            <!-- Rechte Spalte: Sensorblock + Temperatur-Button -->
            <div class="mt-compact-column">
              <div class="mt-compact-sensors">
                ${null!==h?I`
                  <div class=${ft({"mt-compact-sensor":!0,"mt-compact-humidity":!0,"humidity-warning":humidityWarning})}>
                    <ha-icon icon="mdi:water-percent"></ha-icon>
                    <span>${Ot(h,0)} ${t.ui("humidity_unit")}</span>
                  </div>
                `:B}
                ${null!==n.level?I`
                  <div class=${ft({"mt-compact-sensor":!0,"mt-compact-battery":!0,"mt-compact-battery-low":n.isLow})}>
                    <ha-icon icon=${n.isLow?"mdi:battery-alert":"mdi:battery"}></ha-icon>
                    <span>${n.display}</span>
                  </div>
                `:B}
                                 ${null!==batteryVoltage?I`<div class="mt-compact-sensor mt-compact-battery-voltage" title=${t.ui("battery_voltage")}><ha-icon icon="mdi:flash"></ha-icon><span>${Ot(batteryVoltage,2)} ${batteryVoltageUnit}</span></div>`:B}
${null!==c?I`
                  <div class="mt-compact-sensor mt-compact-valve">
                    <ha-icon icon=${valveIcon(c)}></ha-icon>
                    <span>${c}%</span>
                  </div>
                `:B}
              </div>
              <button class=${ft({"mt-main-btn":!0,open:"temp"===this._activePanel,"active-temp":"temp"===this._activePanel,"window-locked":q})}
                type="button"
                aria-expanded=${"temp"===this._activePanel}
                aria-disabled=${q}
                aria-label=${t.aria("increase")}
                @click=${()=>this._togglePanel("temp")}>
                <ha-icon icon="mdi:thermometer-plus"></ha-icon>
                ${I`<span class=${ft({"mt-main-btn-value":!0,"setpoint-mismatch":targetMismatch})}>${y}</span>`}
                <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
              </button>
            </div>
          </div>
        `:I`
          <!-- NORMALMODUS: bisherige Anordnung -->
          ${null!==h?I`
            <div class=${ft({"mt-humidity-row":!0,"without-header":false,"humidity-warning":humidityWarning})}>
              <ha-icon icon="mdi:water-percent"></ha-icon>
              <span>${Ot(h,0)} ${t.ui("humidity_unit")}</span>
            </div>
          `:B}
          <div class="mt-temp-center">
            <div class="mt-ist">
              ${null!==i.currentTemp?Ot(i.currentTemp,_):I`<span style="opacity:0.35">—</span>`}
            </div>
            <span class="mt-ist-unit">${i.unit}</span>
          </div>
        `}

        <div class=${ft({"mt-panel-slot":!0,open:"none"!==this._activePanel})}>
          ${"temp"===this._activePanel?o?this._renderDualSetpoint(i,t):this._renderTempControl(i,q,_,t):B}
          ${"hvac"===this._activePanel?this._renderModes(i,t):B}
        </div>

        ${!isCompact?I`
          <div class="mt-btn-row">
            ${!1!==this._config.show_hvac_modes&&i.availableModes.length>1?I`
              <button class=${w} type="button"
                aria-expanded=${"hvac"===this._activePanel}
                aria-label=${t.aria("set_mode")}
                @click=${()=>this._togglePanel("hvac")}>
                <ha-icon icon=${jt(_mainBtnIcon)}></ha-icon>
                ${b}
                <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
              </button>
            `:B}
            <button class=${$} type="button"
              aria-expanded=${"temp"===this._activePanel}
              aria-label=${t.aria("increase")}
              @click=${()=>this._togglePanel("temp")}>
              <ha-icon icon="mdi:thermometer-plus"></ha-icon>
              ${I`<span class=${ft({"mt-main-btn-value":!0,"setpoint-mismatch":targetMismatch})}>${y}</span>`}
              <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
            </button>
            ${graphAvailable?I`
              <button class=${graphBtnClass} type="button"
                aria-pressed=${this._graphVisible?"true":"false"}
                aria-label=${t.aria("toggle_trend")}
                title=${t.ui("trend")}
                @click=${()=>this._toggleGraph()}>
                <ha-icon icon="mdi:chart-line"></ha-icon>
                ${t.ui("trend")}
              </button>
            `:B}
          </div>
          ${null!==c||null!==n.level||null!==batteryVoltage||(this._config.show_heating_demand===true&&dv.heatingDemand.available)||(this._config.sensors?.length??0)>0?this._renderStatusBar(h,c,n):B}
        `:B}

      </div>

      ${!isCompact&&graphAvailable&&this._graphVisible?I`
        <div class="mt-trend-content">
          ${this._renderGraph(u,i,t)}
        </div>
      `:B}
    </ha-card>
  `
}

_renderHeader(t,e,i,alertMsg){
  const a=this._config.icon??zt[t.hvacMode]??"mdi:thermometer";
  const statusClass=ft({"mt-status":true,"window-open":i?.messageKey==="window_open"});
  const statusIcon=i?.messageKey==="window_open"?i.icon:null;
  const visibleStatus=i?.messageKey==="window_open"?this._localizer.sensor("window_open"):e;
  const alertClass=ft({
    "mt-alert-badge":true,
    "alert-critical":alertMsg?.severity==="critical",
    "alert-error":alertMsg?.severity==="error",
    "alert-warning":alertMsg?.severity==="warning",
    "alert-info":alertMsg?.severity==="info"
  });
  const alertText=alertMsg?.messageKey?this._localizer.alert(alertMsg.messageKey):"";
  return I`
    <div class="mt-header"
      role="button" tabindex="0" aria-label=${`${t.name}: Details anzeigen`}
      @pointerdown=${event=>this._startHeaderHold(event)}
      @pointermove=${event=>this._moveHeaderHold(event)}
      @pointerup=${()=>this._cancelHeaderHold()}
      @pointercancel=${()=>this._cancelHeaderHold()}
      @pointerleave=${()=>this._cancelHeaderHold()}
      @contextmenu=${event=>event.preventDefault()}
      @keydown=${event=>this._headerKeydown(event)}>
      <div class="mt-header-icon"><ha-icon icon=${jt(a)}></ha-icon></div>
      <div class="mt-header-text">
        <div class="mt-name">${t.name}</div>
        <div class=${statusClass}>
          ${statusIcon?I`<ha-icon icon=${jt(statusIcon)}></ha-icon>`:B}
          <span>${visibleStatus}</span>
        </div>
      </div>
      ${alertMsg?I`
        <div class=${alertClass} title=${alertText} aria-label=${alertText}>
          <ha-icon icon=${jt(alertMsg.icon??"mdi:alert-circle")}></ha-icon>
          <span>${alertText}</span>
        </div>
      `:B}
    </div>
  `;
}

_renderTempControl(t,e,i,a){
  const o=void 0!==this._optimisticTarget?this._optimisticTarget:t.targetTemp;
  const safeTarget=null!==o&&isFinite(o)?o:null;
  const targetMismatch=void 0!==this._optimisticTarget&&Number.isFinite(t.targetTemp)&&Math.abs(this._optimisticTarget-t.targetTemp)>0.01;
  const minT=Math.min(t.minTemp,t.maxTemp);
  const maxT=Math.max(t.minTemp,t.maxTemp);
  return I`
    <div class=${ft({"mt-temp-control":!0,"window-locked":e})}>
      <button class="mt-adj-btn" type="button"
        aria-label=${e?a.sensor("window_open"):a.aria("decrease")}
        title=${e?a.sensor("window_open"):""}
        ?disabled=${e||!t.temperatureLimitsValid||null===safeTarget||safeTarget<=minT}
        @click=${()=>{e||this._adjustTemp(-t.step,t)}}>
        <ha-icon icon="mdi:minus"></ha-icon>
      </button>
      <div class=${ft({"mt-limit":!0,"mt-limit-min":!0,"window-dimmed":e})}>
        <span class="mt-limit-label">${a.ui("minimum")}</span>
        <span class="mt-limit-value">${Ot(minT,i)} ${t.unit}</span>
      </div>
      <div class="mt-soll-display">
        <div class=${ft({"mt-soll-big":!0,"setpoint-mismatch":targetMismatch})}>
          ${null!==safeTarget
            ?I`<span class="mt-soll-big-value">${Ot(safeTarget,i)}</span><span class="mt-soll-big-unit">${t.unit}</span>`
            :I`<span style="opacity:0.35">—</span>`}
        </div>
        ${e
          ?I`<div class="mt-window-lock-info"><ha-icon icon="mdi:window-open-variant"></ha-icon><span>${a.sensor("window_open")}</span></div>`
          :B}
      </div>
      <div class=${ft({"mt-limit":!0,"mt-limit-max":!0,"window-dimmed":e})}>
        <span class="mt-limit-label">${a.ui("maximum")}</span>
        <span class="mt-limit-value">${Ot(maxT,i)} ${t.unit}</span>
      </div>
      <button class="mt-adj-btn" type="button"
        aria-label=${e?a.sensor("window_open"):a.aria("increase")}
        title=${e?a.sensor("window_open"):""}
        ?disabled=${e||!t.temperatureLimitsValid||null===safeTarget||safeTarget>=maxT}
        @click=${()=>{e||this._adjustTemp(t.step,t)}}>
        <ha-icon icon="mdi:plus"></ha-icon>
      </button>
    </div>
  `
}
_renderDualSetpoint(t,e){const i=this._config.decimals??1,a=void 0!==this._optimisticHigh?this._optimisticHigh:t.targetTempHigh,r=void 0!==this._optimisticLow?this._optimisticLow:t.targetTempLow;return I`
      <div class="mt-dual">
        <div class="mt-dual-group">
          <div class="mt-dual-label" style="color:#4fc3f7">${e.sensor("cool_setpoint")}</div>
          <div class="mt-dual-ctrl">
            <button class="mt-dual-btn" aria-label=${e.aria("decrease")}
              @click=${()=>this._adjustDual("low",-t.step,t)}
              ?disabled=${!t.temperatureLimitsValid||null===r||r<=t.minTemp}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>
            <div class="mt-dual-val" style="color:#4fc3f7">${Ot(r,i)}</div>
            <button class="mt-dual-btn" aria-label=${e.aria("increase")}
              @click=${()=>this._adjustDual("low",t.step,t)}
              ?disabled=${!t.temperatureLimitsValid||null===r||null!==a&&r>=a-t.step}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          </div>
        </div>
        <div class="mt-dual-divider"></div>
        <div class="mt-dual-group">
          <div class="mt-dual-label" style="color:#ff6b35">${e.sensor("heat_setpoint")}</div>
          <div class="mt-dual-ctrl">
            <button class="mt-dual-btn" aria-label=${e.aria("decrease")}
              @click=${()=>this._adjustDual("high",-t.step,t)}
              ?disabled=${!t.temperatureLimitsValid||null===a||null!==r&&a<=r+t.step}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>
            <div class="mt-dual-val" style="color:#ff6b35">${Ot(a,i)}</div>
            <button class="mt-dual-btn" aria-label=${e.aria("increase")}
              @click=${()=>this._adjustDual("high",t.step,t)}
              ?disabled=${!t.temperatureLimitsValid||null===a||a>=t.maxTemp}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          </div>
        </div>
      </div>
    `}_renderModes(t,e){
  const hvacModes=t.availableModes??[];
  const locked=this._isWindowOpen();
  const climate=this.hass?.states[this._config?.entity];
  const presetModes=climate?.attributes?.preset_modes??[];
  const currentPreset=climate?.attributes?.preset_mode??null;
  const boostMode=presetModes.find(mode=>["boost","preset_boost"].includes(String(mode).toLowerCase()))??null;
  const modeButton=(mode,icon,activeClass)=>hvacModes.includes(mode)?I`
    <button class=${ft({"mt-mode-option":true,[activeClass]:t.hvacMode===mode,"window-locked":locked})}
      type="button" aria-pressed=${t.hvacMode===mode} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.mode(mode)}" @click=${()=>{if(!locked)this._setMode(mode)}}>
      <ha-icon icon=${icon}></ha-icon>${e.mode(mode)}
    </button>`:B;
  const btnHeat=modeButton("heat","mdi:fire","active-heat");
  const btnCool=modeButton("cool","mdi:snowflake","active-cool");
  const btnAuto=modeButton("auto","mdi:calendar-clock","active-auto");
  const btnOff=modeButton("off","mdi:power","active-off");
  const btnBoost=boostMode?I`
    <button class=${ft({"mt-mode-option":true,"active-boost":currentPreset===boostMode,"window-locked":locked})}
      type="button" aria-pressed=${currentPreset===boostMode} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.ui("boost")}" @click=${()=>{if(!locked)this._setPresetMode(boostMode)}}>
      <ha-icon icon="mdi:rocket-launch"></ha-icon>${e.ui("boost")}
    </button>`:B;
  const swapBoostAndHeat=Boolean(boostMode&&hvacModes.includes("heat"));
  const primaryModeButtons=(swapBoostAndHeat?[btnBoost,btnCool]:[btnHeat,btnCool]).filter(button=>button!==B);
  const secondaryModeButtons=[btnAuto,swapBoostAndHeat?btnHeat:btnBoost,btnOff].filter(button=>button!==B);
  return I`
    <div class="mt-mode-layout">
      ${primaryModeButtons.length?I`<div class="mt-mode-row mt-mode-row-primary">${primaryModeButtons}</div>`:B}
      ${secondaryModeButtons.length?I`<div class="mt-mode-row mt-mode-row-secondary">${secondaryModeButtons}</div>`:B}
    </div>`;
}
_setPresetMode(mode){
  if(!this.hass||!this._config||!mode||this._isWindowOpen())return;
  this.hass.callService("climate","set_preset_mode",{entity_id:this._config.entity,preset_mode:mode});
  setTimeout(()=>{"hvac"===this._activePanel&&(this._activePanel="none")},320);
}
_loadGraphHistory(){
 const id=this._config?.graph_entity,climateId=this._config?.entity;
 if(!this._graphVisible||!id||!climateId||!this.hass?.callWS)return;
 const hours=Math.max(1,Number(this._config.hours_to_show??24)),key=id+"|"+climateId+"|"+hours;
 if(this._graphLoading||(this._graphHistoryKey===key&&Date.now()-this._graphFetchedAt<60000))return;
 this._graphLoading=true;
 const token=this._graphRequestToken=(this._graphRequestToken??0)+1,end=new Date(),start=new Date(end.getTime()-hours*3600000);
 this.hass.callWS({type:"history/history_during_period",start_time:start.toISOString(),end_time:end.toISOString(),entity_ids:[id,climateId],minimal_response:true,significant_changes_only:false})
 .then(result=>{
  if(this._graphRequestToken!==token)return;
  const statesFor=(entityId,index)=>{
   if(result&&!Array.isArray(result)&&Array.isArray(result[entityId]))return result[entityId];
   if(Array.isArray(result)&&Array.isArray(result[0]))return result[index]??[];
   return Array.isArray(result)&&index===0?result:[];
  };
  this._graphHistory={temperature:statesFor(id,0),setpoint:statesFor(climateId,1)};
  this._graphHistoryKey=key;
  this._graphFetchedAt=Date.now();
 })
 .catch(error=>{
  if(this._graphRequestToken!==token)return;
  console.warn("[modern-thermostat] Trend history could not be loaded:",error);
  this._graphHistory={temperature:[],setpoint:[]};
  this._graphHistoryKey=key;
  this._graphFetchedAt=Date.now();
 })
 .finally(()=>{if(this._graphRequestToken===token){this._graphLoading=false;this.requestUpdate();}});
}
_updateGraphHover(event,history,targetSeries,targets,unit,localizer,chart){
 const svg=event.currentTarget,rect=svg.getBoundingClientRect(),container=svg.parentElement;if(!rect.width||!container)return;
 const svgX=(event.clientX-rect.left)/rect.width*chart.width,fraction=Math.max(0,Math.min(1,(svgX-chart.pad)/(chart.width-2*chart.pad))),time=chart.startTime+fraction*(chart.endTime-chart.startTime),pointIndex=Math.max(0,Math.min(history.length-1,Math.round(fraction*(history.length-1)))),point=history[pointIndex],setpointValues=[];
 for(const series of targetSeries.values()){let selected=series[0];for(const item of series){if(item.time<=time)selected=item;else break;}if(selected)setpointValues.push(selected.value);}
 if(!setpointValues.length)setpointValues.push(...targets);
 const decimals=this._config.decimals??1,lines=[`${localizer.ui("trend_temperature")}: ${Ot(point.value,decimals)} ${unit}`];
 if(setpointValues.length)lines.push(`${localizer.ui("trend_setpoint")}: ${setpointValues.map(value=>Ot(value,decimals)).join("–")} ${unit}`);
 lines.push(`${localizer.ui("trend_time")}: ${new Date(point.time).toLocaleString(localizer.lang)}`);
 const tip=container.querySelector(".mt-chart-tooltip");if(!tip)return;tip.textContent=lines.join("\n");tip.hidden=false;
 const bounds=container.getBoundingClientRect(),pointerX=event.clientX-bounds.left,pointerY=event.clientY-bounds.top,margin=8,width=tip.offsetWidth,height=tip.offsetHeight,halfWidth=width/2,left=Math.max(margin+halfWidth,Math.min(bounds.width-margin-halfWidth,pointerX));
 if(pointerY-height-12>=margin){tip.style.transform="translate(-50%,-100%)";tip.style.top=`${pointerY-8}px`;}else{tip.style.transform="translate(-50%,0)";tip.style.top=`${Math.max(margin,Math.min(bounds.height-height-margin,pointerY+12))}px`;}
 tip.style.left=`${left}px`;
}
_hideGraphHover(event){const tip=event.currentTarget.parentElement?.querySelector(".mt-chart-tooltip");if(tip)tip.hidden=true;}
_renderGraph(hours,climate,localizer){
 this._loadGraphHistory();
 const id=this._config.graph_entity,entity=this.hass?.states?.[id],climateEntity=this.hass?.states?.[this._config.entity],unit=entity?.attributes?.unit_of_measurement??climate.unit??"°C",end=Date.now(),hoursToShow=Math.max(1,Number(hours)||24),start=end-hoursToShow*3600000,historyData=this._graphHistory??{};
 const toTimestamp=value=>{if(typeof value==="number"&&Number.isFinite(value))return value<1e12?value*1000:value;if(typeof value==="string"){const numeric=Number(value);if(value.trim()!==""&&Number.isFinite(numeric))return numeric<1e12?numeric*1000:numeric;return Date.parse(value);}return NaN;};
 const stateTime=item=>toTimestamp(item?.lu??item?.last_updated??item?.last_changed??item?.lc),stateValue=item=>Ut(item?.s??item?.state);
 let history=(Array.isArray(historyData.temperature)?historyData.temperature:[]).map(item=>({time:stateTime(item),value:stateValue(item)})).filter(item=>Number.isFinite(item.time)&&item.time>=start&&item.time<=end&&Number.isFinite(item.value));
 const current=Ut(entity?.state);if(Number.isFinite(current))history.push({time:end,value:current});history.sort((a,b)=>a.time-b.time);
 const pointCount=Math.max(2,Math.ceil(hoursToShow*2)),bucketSize=hoursToShow*3600000/pointCount,buckets=Array.from({length:pointCount},()=>[]);for(const item of history){const index=Math.max(0,Math.min(pointCount-1,Math.floor((item.time-start)/bucketSize)));buckets[index].push(item);}const firstBucket=buckets.findIndex(bucket=>bucket.length);if(firstBucket<0)return I`<div class="mt-graph-inner"><div class="mt-chart-empty">${this._graphLoading?localizer.ui("loading"):localizer.ui("no_history")}</div></div>`;let lastValue=buckets[firstBucket].reduce((sum,item)=>sum+item.value,0)/buckets[firstBucket].length;history=buckets.map((bucket,index)=>{if(bucket.length)lastValue=bucket.reduce((sum,item)=>sum+item.value,0)/bucket.length;return{time:start+index/(pointCount-1)*(end-start),value:lastValue};});
 const targetSeries=new Map(),addTargetPoint=(name,rawValue,rawTime)=>{const value=Ut(rawValue),time=toTimestamp(rawTime);if(value===null||!Number.isFinite(time)||time>end)return;const point={time:Math.max(start,time),value},points=targetSeries.get(name)??[];if(!points.some(existing=>existing.time===point.time&&existing.value===point.value))points.push(point);targetSeries.set(name,points);};
 for(const item of Array.isArray(historyData.setpoint)?historyData.setpoint:[]){const attrs=item?.a??item?.attributes??{},time=stateTime(item);if(attrs.temperature!==undefined&&attrs.temperature!==null)addTargetPoint("target",attrs.temperature,time);else{addTargetPoint("target-low",attrs.target_temp_low,time);addTargetPoint("target-high",attrs.target_temp_high,time);}}
 const currentAttrs=climateEntity?.attributes??{},currentTargetTime=stateTime(climateEntity);if(currentAttrs.temperature!==undefined&&currentAttrs.temperature!==null)addTargetPoint("target",currentAttrs.temperature,Number.isFinite(currentTargetTime)?currentTargetTime:end);else{addTargetPoint("target-low",currentAttrs.target_temp_low,currentTargetTime);addTargetPoint("target-high",currentAttrs.target_temp_high,currentTargetTime);}
 for(const points of targetSeries.values())points.sort((a,b)=>a.time-b.time);
 const targets=[climate.targetTempLow,climate.targetTemp,climate.targetTempHigh].filter(value=>Number.isFinite(value)),tempColorStops=[[17,"#0000FF"],[18,"#2A00D4"],[19,"#5500AA"],[20,"#800080"],[21,"#AA0055"],[22,"#D4002A"],[23,"#FF0000"]];
 const colorFor=value=>{if(value<=tempColorStops[0][0])return tempColorStops[0][1];for(let index=1;index<tempColorStops.length;index++){const [upper,upperColor]=tempColorStops[index],[lower,lowerColor]=tempColorStops[index-1];if(value<=upper){const ratio=(value-lower)/(upper-lower),a=[1,3,5].map(offset=>parseInt(lowerColor.slice(offset,offset+2),16)),b=[1,3,5].map(offset=>parseInt(upperColor.slice(offset,offset+2),16));return "#"+a.map((channel,i)=>Math.round(channel+(b[i]-channel)*ratio).toString(16).padStart(2,"0")).join("");}}return tempColorStops[tempColorStops.length-1][1];};
 const w=800,h=180,pad=2,plotTop=100,plotBottom=h-3,firstTime=start,lastTime=end,span=Math.max(1,lastTime-firstTime),temperatureValues=history.map(item=>item.value),temperatureMin=Math.min(...temperatureValues),temperatureMax=Math.max(...temperatureValues),min=temperatureMin,max=temperatureMax,dy=max-min;
 const x=time=>pad+(Math.max(firstTime,Math.min(lastTime,time))-firstTime)/span*(w-2*pad),y=value=>dy>0?plotTop+(max-value)/dy*(plotBottom-plotTop):plotBottom;
 const plotPoints=history.map((item,index)=>({x:pad+index/(history.length-1)*(w-2*pad),y:y(item.value),time:item.time,value:item.value}));
 const smoothPath=points=>{if(!points.length)return"";if(points.length===1)return`M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;let d=`M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;for(let index=0;index<points.length-1;index++){const current=points[index],next=points[index+1],midX=(current.x+next.x)/2,midY=(current.y+next.y)/2;d+=` Q${current.x.toFixed(1)} ${current.y.toFixed(1)} ${midX.toFixed(1)} ${midY.toFixed(1)}`;}const last=points[points.length-1];return d+` Q${last.x.toFixed(1)} ${last.y.toFixed(1)} ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;};
 const path=smoothPath(plotPoints),firstX=plotPoints[0].x.toFixed(1),lastX=plotPoints[plotPoints.length-1].x.toFixed(1),area=path+" L"+lastX+" "+(h-1)+" L"+firstX+" "+(h-1)+" Z";
  const svgNode=(name,attributes={})=>{const node=document.createElementNS("http://www.w3.org/2000/svg",name);for(const [attribute,value] of Object.entries(attributes))if(value!==undefined&&value!==null)node.setAttribute(attribute,String(value));return node;};
   const points=plotPoints.map(point=>svgNode("circle",{class:"mt-chart-point",cx:point.x,cy:point.y,r:7}));
  const gradientMax=dy>0?max:max+1,gradientMin=dy>0?min:min,stopValues=[gradientMax,...tempColorStops.map(item=>item[0]).filter(value=>value<gradientMax&&value>gradientMin),gradientMin].sort((a,b)=>b-a).filter((value,index,array)=>index===0||value!==array[index-1]),lineWidth=Math.max(1,Math.min(10,Number(this._config.graph_line_width)||2));
   const temperatureLines=plotPoints.map((point,index)=>{const previous=plotPoints[Math.max(0,index-1)],next=plotPoints[Math.min(plotPoints.length-1,index+1)],startPoint=index===0?point:{x:(previous.x+point.x)/2,y:(previous.y+point.y)/2},endPoint=index===plotPoints.length-1?point:{x:(point.x+next.x)/2,y:(point.y+next.y)/2},d=`M${startPoint.x.toFixed(1)} ${startPoint.y.toFixed(1)} Q${point.x.toFixed(1)} ${point.y.toFixed(1)} ${endPoint.x.toFixed(1)} ${endPoint.y.toFixed(1)}`;return svgNode("path",{class:"mt-chart-line",d,stroke:colorFor(point.value),"stroke-width":lineWidth,"vector-effect":"non-scaling-stroke"});});
   const fillStops=(dy>0?stopValues:[temperatureMin]).map(value=>{const stopY=y(value),offset=Math.max(0,Math.min(100,(stopY-plotTop)/(h-plotTop)*100)),opacity=Math.max(.15,1-((stopY-plotTop)/(h-plotTop))*.85);return svgNode("stop",{offset:offset.toFixed(2)+"%","stop-color":colorFor(value),"stop-opacity":opacity.toFixed(3)});});fillStops.push(svgNode("stop",{offset:"100%","stop-color":colorFor(temperatureMin),"stop-opacity":".15"}));
 const timeLabel=new Intl.DateTimeFormat(localizer.lang,{hour:"2-digit",minute:"2-digit"}),minPoint=history.reduce((best,item)=>item.value<best.value?item:best,history[0]),maxPoint=history.reduce((best,item)=>item.value>best.value?item:best,history[0]),fmt=value=>Ot(value,this._config.decimals??1)+unit;
 const extrema=I`<div class="mt-chart-extrema"><div class="mt-chart-extreme"><span>${localizer.ui("minimum")}</span><strong>${fmt(minPoint.value)}</strong><time>${timeLabel.format(new Date(minPoint.time))}</time></div><div class="mt-chart-extreme mt-chart-extreme-max"><span>${localizer.ui("maximum")}</span><strong>${fmt(maxPoint.value)}</strong><time>${timeLabel.format(new Date(maxPoint.time))}</time></div></div>`;
  return I`<div class="mt-graph-inner"><div class="mt-chart-frame">${extrema}<svg class="mt-chart-svg" width=${w} height=${h} viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-label=${localizer.ui("trend_temperature")} @pointermove=${event=>this._updateGraphHover(event,history,targetSeries,targets,unit,localizer,{width:w,pad,startTime:start,endTime:end})} @pointerleave=${event=>this._hideGraphHover(event)}><defs><linearGradient id="mt-temp-fill" gradientUnits="userSpaceOnUse" x1="0" y1=${plotTop} x2="0" y2=${h}>${fillStops}</linearGradient></defs><path class="mt-chart-area" d=${area}></path>${temperatureLines}${points}</svg><div class="mt-chart-tooltip" hidden></div></div></div>`;
}
_renderStatusBar(t,e,i){
  const a=this._config.sensors??[];
  const cfg=this._config;
  const dv=this._dv;

  // Optionale Zusatzwerte aus _resolveDisplayValues
  const demandVal=cfg.show_heating_demand===true&&dv?.heatingDemand?.available?dv.heatingDemand.value:null;
  const demandUnit=dv?.heatingDemand?.unit??"%";
  const presetVal=(!0===cfg.show_preset&&dv?.preset?.available)?dv.preset.value:null;
  const fanVal=(!0===cfg.show_fan_mode&&dv?.fanMode?.available)?dv.fanMode.value:null;
  const swingVal=(!0===cfg.show_swing_mode&&dv?.swingMode?.available)?dv.swingMode.value:null;
  const showBattery=!1!==cfg.show_battery_warning||!1!==cfg.show_battery;
  const voltageVal=showBattery&&dv?.batteryVoltage?.available?dv.batteryVoltage.value:null,voltageUnit=dv?.batteryVoltage?.unit??"V";
  const targetHumVal=(!0===cfg.show_target_humidity&&dv?.targetHumidity?.available)?dv.targetHumidity.value:null;

  return I`
    <div class="mt-status-bar">
      ${null!==e?I`<div class="mt-stat"><ha-icon icon=${(r=>null===r?"mdi:valve":0===r?"mdi:valve-closed":r>=100?"mdi:valve-open":"mdi:valve")(e)}></ha-icon><span class="mt-stat-val">${e}%</span></div>`:B}
      ${null!==demandVal?I`<div class="mt-stat heating-demand" title=${this._localizer.ui("pi_heat_demand")}><ha-icon icon="mdi:fire"></ha-icon><span class="mt-stat-val">${Ot(demandVal,0)}${demandUnit}</span></div>`:B}
      ${null!==i.level?I`
        <div class=${ft({"mt-stat":!0,"battery-low":i.isLow})}>
          <ha-icon icon=${i.isLow?"mdi:battery-alert":"mdi:battery"}></ha-icon>
          <span class="mt-stat-val">${i.display}</span>
        </div>
      `:B}
             ${null!==voltageVal?I`<div class="mt-stat" title=${this._localizer.ui("battery_voltage")}><ha-icon icon="mdi:flash"></ha-icon><span class="mt-stat-val">${Ot(voltageVal,2)} ${voltageUnit}</span></div>`:B}
${null!==presetVal?I`<div class="mt-stat"><ha-icon icon="mdi:thermostat"></ha-icon><span class="mt-stat-val">${presetVal}</span></div>`:B}
      ${null!==fanVal?I`<div class="mt-stat"><ha-icon icon="mdi:fan"></ha-icon><span class="mt-stat-val">${fanVal}</span></div>`:B}
      ${null!==swingVal?I`<div class="mt-stat"><ha-icon icon="mdi:arrow-oscillating"></ha-icon><span class="mt-stat-val">${swingVal}</span></div>`:B}
      ${null!==targetHumVal?I`<div class="mt-stat"><ha-icon icon="mdi:water-percent"></ha-icon><span class="mt-stat-val">${Ot(targetHumVal,0)} ${this._localizer.ui("humidity_unit")}</span></div>`:B}
      ${a.map(t=>{const e=this.hass?.states[t.entity];if(!e||!this._isUsableState(e.state))return B;const i=e.state,a=t.unit??e.attributes.unit_of_measurement??"",r=t.icon??e.attributes.icon??"mdi:information-outline",o=t.decimals,s=void 0===o||isNaN(Number(i))?i:Number(i).toFixed(o);return I`<div class="mt-stat" title=${t.name??""}><ha-icon icon=${jt(r)}></ha-icon><span class="mt-stat-val">${s}${a}</span></div>`})}
    </div>
  `;var r}
_adjustTemp(t,e){
  if(!e?.temperatureLimitsValid||!Number.isFinite(e.step)||e.step<=0||!Number.isFinite(e.minTemp)||!Number.isFinite(e.maxTemp)||e.minTemp>=e.maxTemp)return;
  if(this._config.window_entity&&"on"===this.hass.states[this._config.window_entity]?.state)return;
  const i=void 0!==this._optimisticTarget?this._optimisticTarget:e.targetTemp;
  if(null===i||!isFinite(i))return;
  const minT=Math.min(e.minTemp,e.maxTemp);
  const maxT=Math.max(e.minTemp,e.maxTemp);
  const a=Nt(Ht(i+t,e.step),minT,maxT);
  if(!isFinite(a))return;
  this._optimisticTarget=a;
  this._clearOptimisticTimer();
  this._optimisticTimer=setTimeout(()=>{this._optimisticTarget=void 0},5e3);
  const serviceTemp=Nt(a,minT,maxT);
  this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:serviceTemp});
  // Optional: nach Sollwertänderung Handbetrieb aktivieren
  if(!0===this._config.manual_on_temperature_change){
    const climateEntity=this.hass.states[this._config.entity];
    if(climateEntity){
      const caps=this._resolveControlModeCapabilities(climateEntity);
      if(caps.available&&caps.current!=="manual"){
        setTimeout(()=>this._setControlMode("manual",caps),200);
      }
    }
  }
}
_adjustDual(t,e,i){
  if(!i?.temperatureLimitsValid||!Number.isFinite(i.step)||i.step<=0||!Number.isFinite(i.minTemp)||!Number.isFinite(i.maxTemp)||i.minTemp>=i.maxTemp)return;
  if(this._config.window_entity&&"on"===this.hass.states[this._config.window_entity]?.state)return;
  const a=void 0!==this._optimisticHigh?this._optimisticHigh:i.targetTempHigh;
  const r=void 0!==this._optimisticLow?this._optimisticLow:i.targetTempLow;
  if(null===a||null===r||!isFinite(a)||!isFinite(r))return;
  const minT=Math.min(i.minTemp,i.maxTemp);
  const maxT=Math.max(i.minTemp,i.maxTemp);
  let o=a,s=r;
  "high"===t?o=Nt(Ht(a+e,i.step),r+i.step,maxT):s=Nt(Ht(r+e,i.step),minT,a-i.step);
  if(!isFinite(o)||!isFinite(s))return;
  this._optimisticHigh=o;
  this._optimisticLow=s;
  this._clearOptimisticTimer();
  this._optimisticTimer=setTimeout(()=>{this._optimisticHigh=void 0;this._optimisticLow=void 0},5e3);
  const serviceHigh=Nt(o,minT,maxT);
  const serviceLow=Nt(s,minT,maxT);
  this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_high:serviceHigh,target_temp_low:serviceLow});
}
_setMode(t){
  this.hass&&this._config&&(
    this.hass.callService(
      "climate",
      "set_hvac_mode",
      {
        entity_id:this._config.entity,
        hvac_mode:t
      }
    ),
    setTimeout(()=>{
      "hvac"===this._activePanel&&(
        this._activePanel="none"
      )
    },320)
  )
}

_clearOptimisticTimer(){
  void 0!==this._optimisticTimer&&(
    clearTimeout(this._optimisticTimer),
    this._optimisticTimer=void 0
  )
}

disconnectedCallback(){
  this._cancelHeaderHold();
  super.disconnectedCallback();
  this._clearOptimisticTimer();
  if(this._windowTimer!==void 0){clearTimeout(this._windowTimer);this._windowTimer=void 0;}
}
updated(t){
  super.updated(t);
  this._syncWindowAutomation();
  if(this._isWindowOpen()&&"none"!==this._activePanel){
    this._activePanel="none";
  }
}
};

Lt.styles=_t,
t([pt({attribute:!1})],Lt.prototype,"hass",void 0),
t([mt()],Lt.prototype,"_config",void 0),
t([mt()],Lt.prototype,"_error",void 0),
t([mt()],Lt.prototype,"_optimisticTarget",void 0),
t([mt()],Lt.prototype,"_optimisticHigh",void 0),
t([mt()],Lt.prototype,"_optimisticLow",void 0),
t([mt()],Lt.prototype,"_activePanel",void 0),
t([mt()],Lt.prototype,"_graphVisible",void 0),
Lt=t([ct("modern-thermostat")],Lt);

let Rt=class extends nt{
  constructor(){super();this._localizer=new At(undefined,()=>this.requestUpdate());}
  _refreshEditorLocalizer(){const lang=this.hass?.language;if(lang!==this._lastLanguage){this._localizer.update(this.hass);this._lastLanguage=lang;}return this._localizer;}
  setConfig(t){
    this._config={...t}
  }

  render(){
    if(!this._config)return B;
    const t=this._config,l=this._refreshEditorLocalizer();
    return I`
      <div class="editor">
        <div class="section-title">${l.ui("editor_entity_section")}</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.entity??""} .includeDomains=${["climate"]} allow-custom-entity
          label=${l.ui("editor_thermostat_entity")} @value-changed=${e=>this._set("entity",e.detail.value)}></ha-entity-picker>

        <div class="switch-row"><ha-switch .checked=${true===t.show_heating_demand} @change=${e=>this._set("show_heating_demand",e.target.checked)}></ha-switch><span>${l.ui("editor_show_heating_demand")}</span></div>
        <ha-entity-picker .hass=${this.hass} .value=${t.heating_demand_entity??t.demand_entity??""} .includeDomains=${["sensor"]} allow-custom-entity label=${l.ui("editor_heating_demand")} @value-changed=${e=>this._set("heating_demand_entity",e.detail.value||void 0)}></ha-entity-picker>

        <div class="section-title">${l.ui("editor_display_section")}</div>
        <div class="row">
          <ha-input label=${l.ui("editor_name")} .value=${t.name??""} @input=${e=>this._set("name",e.target.value.trim()||void 0)}></ha-input>
          <ha-input label=${l.ui("editor_icon")} placeholder="mdi:thermostat" .value=${t.icon??""} @input=${e=>this._set("icon",e.target.value.trim()||void 0)}></ha-input>
        </div>
        <div class="row">
          <ha-textfield label=${l.ui("editor_step")} type="number" min="0.1" max="5" step="0.1" .value=${String(t.step??0.5)} @change=${e=>this._set("step",parseFloat(e.target.value)||0.5)}></ha-textfield>
          <ha-textfield label=${l.ui("editor_decimals")} type="number" min="0" max="2" step="1" .value=${String(t.decimals??1)} @change=${e=>this._set("decimals",Math.min(2,Math.max(0,parseInt(e.target.value,10)||0)))}></ha-textfield>
        </div>
        <div class="switch-row"><ha-switch .checked=${true===t.compact} @change=${e=>this._set("compact",e.target.checked)}></ha-switch><span>${l.ui("editor_compact")}</span></div>
        <div class="switch-row"><ha-switch .checked=${false!==t.show_hvac_modes} @change=${e=>this._set("show_hvac_modes",e.target.checked)}></ha-switch><span>${l.ui("editor_hvac")}</span></div>
        <div class="divider"></div>
        <div class="section-title">${l.ui("editor_auto_values")}</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.window_entity??""} .includeDomains=${["binary_sensor"]} allow-custom-entity label=${l.ui("editor_window")} @value-changed=${e=>this._set("window_entity",e.detail.value||void 0)}></ha-entity-picker>
        <div class="switch-row"><ha-switch .checked=${true===t.window_auto_off} @change=${e=>this._set("window_auto_off",e.target.checked)}></ha-switch><span>${l.ui("editor_window_auto_off")}</span></div>
        <div class="row">
          <div class="slider-field"><div class="slider-label"><span>${l.ui("editor_window_open_delay")}</span><strong>${t.window_open_delay??1} ${l.ui("minute_unit")}</strong></div><input class="window-delay-slider" type="range" min="0" max="240" step="1" .value=${String(t.window_open_delay??1)} aria-label=${l.ui("editor_window_open_delay")} @input=${e=>this._set("window_open_delay",Number(e.target.value))} @change=${e=>this._set("window_open_delay",Number(e.target.value))}></div>
          <div class="slider-field"><div class="slider-label"><span>${l.ui("editor_window_close_delay")}</span><strong>${t.window_close_delay??1} ${l.ui("minute_unit")}</strong></div><input class="window-delay-slider" type="range" min="0" max="240" step="1" .value=${String(t.window_close_delay??1)} aria-label=${l.ui("editor_window_close_delay")} @input=${e=>this._set("window_close_delay",Number(e.target.value))} @change=${e=>this._set("window_close_delay",Number(e.target.value))}></div>
        </div>
        <div class="field-help">${l.ui("editor_window_auto_off_help")}</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.humidity_entity??""} .includeDomains=${["sensor"]} allow-custom-entity label=${l.ui("editor_humidity")} @value-changed=${e=>this._set("humidity_entity",e.detail.value||void 0)}></ha-entity-picker>
        <div class="slider-field">
          <div class="slider-label"><span>${l.ui("editor_humidity_warning")}</span><strong>${t.humidity_warning_level??70} %</strong></div>
          <input class="humidity-slider" type="range" min="0" max="100" step="1" .value=${String(t.humidity_warning_level??70)}
            @input=${e=>this._set("humidity_warning_level",Math.min(100,Math.max(0,Number(e.target.value))))}
            @change=${e=>this._set("humidity_warning_level",Math.min(100,Math.max(0,Number(e.target.value))))}>
        </div>
        <div class="field-help">${l.ui("editor_humidity_help")}</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.valve_position_entity??""} .includeDomains=${["sensor"]} allow-custom-entity label=${l.ui("editor_valve")} @value-changed=${e=>this._set("valve_position_entity",e.detail.value||void 0)}></ha-entity-picker>
        <ha-entity-picker .hass=${this.hass} .value=${t.battery_entity??""} .includeDomains=${["sensor"]} allow-custom-entity label=${l.ui("editor_battery")} @value-changed=${e=>this._set("battery_entity",e.detail.value||void 0)}></ha-entity-picker>
         <ha-entity-picker .hass=${this.hass} .value=${t.battery_voltage_entity??""} .includeDomains=${["sensor"]} allow-custom-entity label=${l.ui("editor_battery_voltage")} @value-changed=${e=>this._set("battery_voltage_entity",e.detail.value||void 0)}></ha-entity-picker>
        <ha-textfield label=${l.ui("editor_battery_warning")} type="number" min="0" max="100" step="1" .value=${String(t.battery_warning_level??25)} @change=${e=>this._set("battery_warning_level",Math.min(100,Math.max(0,parseInt(e.target.value,10)||25)))}></ha-textfield>
        <div class="divider"></div>
        <div class="section-title">${l.ui("editor_trend_section")}</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.graph_entity??""} .includeDomains=${["sensor"]} allow-custom-entity label=${l.ui("editor_sensor")} @value-changed=${e=>this._set("graph_entity",e.detail.value||void 0)}></ha-entity-picker>
        <div class="row">
          <ha-textfield label=${l.ui("editor_duration")} type="number" min="1" max="168" step="1" .value=${String(t.hours_to_show??24)} @change=${e=>this._set("hours_to_show",Math.max(1,parseInt(e.target.value,10)||24))}></ha-textfield>
          <ha-textfield label=${l.ui("editor_line_width")} type="number" min="1" max="10" step="1" .value=${String(t.graph_line_width??2)} @change=${e=>this._set("graph_line_width",Math.max(1,parseInt(e.target.value,10)||2))}></ha-textfield>
        </div>
      </div>
    `}_set(t,e){this._config&&(this._config={...this._config,[t]:e},this._fire())}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};Rt.styles=s`
    .editor { padding: 16px; display: flex; flex-direction: column; gap: 14px; }
    .section-title { font-size: 12px; font-weight: 600; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: -6px; }
    .row { display: flex; align-items: center; gap: 10px; }
    .row > * { flex: 1; }
    .switch-row {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 40px;
  color: var(--primary-text-color);
  font-size: 14px;
  cursor: pointer;
}

.switch-row ha-switch {
  flex: 0 0 auto;
}

.switch-row span {
  display: block;
  flex: 1;
  line-height: 1.3;
}
.slider-field { display: flex; flex-direction: column; gap: 4px; padding: 2px 4px 6px; }
.slider-label { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: var(--primary-text-color); font-size: 14px; }
.slider-label strong { color: var(--primary-color); font-variant-numeric: tabular-nums; }
.humidity-slider { width: 100%; accent-color: var(--primary-color); cursor: pointer; } .window-delay-slider { width:100%; accent-color:var(--primary-color); cursor:pointer; }
.field-help {
  margin-top: -8px;
  padding: 0 4px 2px;
  color: var(--secondary-text-color);
  font-size: 12px;
  line-height: 1.35;
}
    .divider { height: 1px; background: var(--divider-color); }
  `,t([pt({attribute:!1})],Rt.prototype,"hass",void 0),t([mt()],Rt.prototype,"_config",void 0),Rt=t([ct("modern-thermostat-editor")],Rt);var Vt=Object.freeze({__proto__:null,get ModernThermostatEditor(){return Rt}});export{Lt as ModernThermostat};

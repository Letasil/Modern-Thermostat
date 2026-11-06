function t(t,e,i,a){var r,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o<3?r(s):o>3?r(e,i,s):r(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new o(i,t,a)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",_=u.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&c(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const o=a?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{if(i)t.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of a){const a=document.createElement("style"),r=e.litNonce;void 0!==r&&a.setAttribute("nonce",r),a.textContent=i.cssText,t.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=a;const o=r.fromAttribute(e,t.type);this[a]=o??this._$Ej?.get(a)??o,this._$Em=null}}requestUpdate(t,e,i,a=!1,r){if(void 0!==t){const o=this.constructor;if(!1===a&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,_?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,k=x.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+E,M=`<${T}>`,P=document,z=()=>P.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,D=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,V=/"/g,K=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,q=P.createTreeWalker(P,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,a=[];let r,o=2===e?"<svg>":3===e?"<math>":"",s=j;for(let n=0;n<i;n++){const e=t[n];let i,l,c=-1,d=0;for(;d<e.length&&(s.lastIndex=d,l=s.exec(e),null!==l);)d=s.lastIndex,s===j?"!--"===l[1]?s=U:void 0!==l[1]?s=D:void 0!==l[2]?(K.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=L):void 0!==l[3]&&(s=L):s===L?">"===l[0]?(s=r??j,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,i=l[1],s=void 0===l[3]?L:'"'===l[3]?V:R):s===V||s===R?s=L:s===U||s===D?s=j:(s=L,r=void 0);const h=s===L&&t[n+1].startsWith("/>")?" ":"";o+=s===j?e+M:c>=0?(a.push(i),e.slice(0,c)+C+e.slice(c)+E+h):e+E+(-2===c?n:h)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class J{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let r=0,o=0;const s=t.length-1,n=this.parts,[l,c]=Y(t,e);if(this.el=J.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=q.nextNode())&&n.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(C)){const e=c[o++],i=a.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?at:tt}),a.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:r}),a.removeAttribute(t));if(K.test(a.tagName)){const t=a.textContent.split(E),e=t.length-1;if(e>0){a.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],z()),q.nextNode(),n.push({type:2,index:++r});a.append(t[e],z())}}}else if(8===a.nodeType)if(a.data===T)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=a.data.indexOf(E,t+1));)n.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,a){if(e===F)return e;let r=void 0!==a?i._$Co?.[a]:i._$Cl;const o=O(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,a)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??P).importNode(e,!0);q.currentNode=a;let r=q.nextNode(),o=0,s=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new X(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new rt(r,this,t)),this._$AV.push(e),n=i[++s]}o!==n?.index&&(r=q.nextNode(),o++)}return q.currentNode=P,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),O(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new Q(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const r of t)a===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[a],i._$AI(r),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,a){const r=this.strings;let o=!1;if(void 0===r)t=Z(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const a=t;let s,n;for(t=r[0],s=0;s<r.length-1;s++)n=Z(this,a[i+s],e,s),n===F&&(n=this._$AH[s]),o||=!O(n)||n!==this._$AH[s],n===B?t=B:t!==B&&(t+=(n??"")+r[s+1]),this._$AH[s]=n}o&&!a&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class at extends tt{constructor(t,e,i,a,r){super(t,e,i,a,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??B)===F)return;const i=this._$AH,a=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==B&&(i===B||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(J,X),(x.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;let nt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let r=a._$litPart$;if(void 0===r){const t=i?.renderBefore??null;a._$litPart$=r=new X(e.insertBefore(z(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};nt._$litElement$=!0,nt.finalized=!0,st.litElementHydrateSupport?.({LitElement:nt});const lt=st.litElementPolyfillSupport;lt?.({LitElement:nt}),(st.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},ht=(t=dt,e,i)=>{const{kind:a,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,r,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];e.call(this,i),this.requestUpdate(a,r,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function mt(t){return pt({...t,state:!0,attribute:!1})}const ut=1;class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ft=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends gt{constructor(t){if(super(t),t.type!==ut||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const a of this.st)a in e||(i.remove(a),this.st.delete(a));for(const a in e){const t=!!e[a];t===this.st.has(a)||this.nt?.has(a)||(t?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return F}}),_t=s`
  /* ── Reset ────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; }

  :host {
    display: block;
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
    min-width: 260px;
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
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.mt-humidity-row.without-header {
    margin-top: 10px;
}

.mt-humidity-row ha-icon {
    --mdc-icon-size: 12px;
    color: var(--secondary-text-color);
    opacity: 0.75;
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
  :host([compact]) .mt-humidity-row, .compact .mt-humidity-row { font-size: 11px !important; }

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
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary-text-color);
  }
  .mt-unified-card.compact .mt-compact-sensor {
    display: contents;
  }
  .mt-unified-card.compact .mt-compact-sensor ha-icon {
    grid-column: 1;
    justify-self: center;
    --mdc-icon-size: 13px;
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

  /* mini-graph-card: vollständig transparent */
  .mt-unified-card mini-graph-card,
  .mt-unified-card mini-graph-card ha-card,
  .mt-trend-content ha-card,
  .mt-graph-inner ha-card {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  /* ══════════════════════════════════════════════════════════════════
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
`;var vt={state:{off:"Aus",heat:"Heizen",cool:"Kühlen",auto:"Automatik",heat_cool:"Heizen/Kühlen",fan_only:"Lüften",dry:"Entfeuchten"},action:{off:"Aus",idle:"Bereitschaft",heating:"Heizen",cooling:"Kühlen",drying:"Entfeuchten",fan:"Lüften"},sensor:{window_open:"Fenster offen",window_closed:"Fenster geschlossen",now:"Aktuell",cool_setpoint:"Kühlen",heat_setpoint:"Heizen"},alert:{battery_low:"Batterie schwach",calibration:"Kalibrierung läuft",valve_error:"Ventilfehler",valve_blocked:"Ventil blockiert",motor_error:"Motorfehler",sensor_error:"Sensorfehler",communication_error:"Gerät nicht erreichbar",firmware_update:"Firmware Update",sabotage:"Sabotagemeldung",fault:"Störung",operating_state_calibration:"Kalibrierfahrt",operating_state_reference:"Referenzfahrt"},ui:{set_temperature:"Temperatur",operating_mode:"Modus",setpoint:"Sollwert",valve:"Ventil",unavailable:"Nicht verfügbar",trend:"Trend",minimum:"Min",maximum:"Max",automatic:"Automatik",manual_mode:"Manuell"},aria:{decrease:"Temperatur senken",increase:"Temperatur erhöhen",set_mode:"Modus setzen",toggle_trend:"Trend ein-/ausblenden"},state_badge:{unavailable:"Nicht verfügbar"},version:{update_available:"Neue Version verfügbar",installed:"Installiert",available:"Verfügbar",version:"Version",build:"Build",commit:"Commit",up_to_date:"Aktuell"}},bt={state:{off:"Off",heat:"Heat",cool:"Cool",auto:"Auto",heat_cool:"Heat / Cool",fan_only:"Fan",dry:"Dry"},action:{off:"Off",idle:"Idle",heating:"Heating",cooling:"Cooling",drying:"Drying",fan:"Fan running"},sensor:{window_open:"Window open",window_closed:"Window closed",now:"Current",cool_setpoint:"Cool",heat_setpoint:"Heat"},alert:{battery_low:"Low battery",calibration:"Calibration running",valve_error:"Valve error",valve_blocked:"Valve blocked",motor_error:"Motor error",sensor_error:"Sensor error",communication_error:"Device unavailable",firmware_update:"Firmware update",sabotage:"Sabotage alert",fault:"Fault",operating_state_calibration:"Calibration drive",operating_state_reference:"Reference drive"},ui:{set_temperature:"Temperature",operating_mode:"Mode",setpoint:"Setpoint",valve:"Valve",unavailable:"Unavailable",trend:"Trend",minimum:"Min",maximum:"Max",automatic:"Auto",manual_mode:"Manual"},aria:{decrease:"Decrease temperature",increase:"Increase temperature",set_mode:"Set mode",toggle_trend:"Toggle trend"},state_badge:{unavailable:"Unavailable"},version:{update_available:"New version available",installed:"Installed",available:"Available",version:"Version",build:"Build",commit:"Commit",up_to_date:"Up to date"}},yt={state:{off:"Éteint",heat:"Chauffage",cool:"Climatisation",auto:"Automatique",heat_cool:"Chaud / Froid",fan_only:"Ventilateur",dry:"Déshumidification"},action:{off:"Éteint",idle:"Veille",heating:"Chauffe",cooling:"Refroidit",drying:"Déshumidifie",fan:"Ventilateur actif"},sensor:{window_open:"Fenêtre ouverte",window_closed:"Fenêtre fermée",now:"Actuel",cool_setpoint:"Froid",heat_setpoint:"Chaud"},alert:{battery_low:"Batterie faible",calibration:"Calibration en cours",valve_error:"Erreur vanne",valve_blocked:"Vanne bloquée",motor_error:"Erreur moteur",sensor_error:"Erreur capteur",communication_error:"Appareil indisponible",firmware_update:"Mise à jour firmware",sabotage:"Alerte sabotage",fault:"Défaut",operating_state_calibration:"Course de calibration",operating_state_reference:"Course de référence"},ui:{set_temperature:"Température",operating_mode:"Mode",setpoint:"Consigne",valve:"Vanne",unavailable:"Indisponible",trend:"Tendance",minimum:"Min",maximum:"Max",automatic:"Auto",manual_mode:"Manuel"},aria:{decrease:"Diminuer la température",increase:"Augmenter la température",set_mode:"Définir le mode",toggle_trend:"Afficher/masquer la tendance"},state_badge:{unavailable:"Indisponible"},version:{update_available:"Nouvelle version disponible",installed:"Installé",available:"Disponible",version:"Version",build:"Build",commit:"Commit",up_to_date:"À jour"}},wt={state:{off:"Uit",heat:"Verwarmen",cool:"Koelen",auto:"Automatisch",heat_cool:"Verwarmen/Koelen",fan_only:"Ventileren",dry:"Ontvochtigen"},action:{off:"Uit",idle:"Stand-by",heating:"Verwarmt",cooling:"Koelt",drying:"Ontvochtigt",fan:"Ventilator actief"},sensor:{window_open:"Raam geopend",window_closed:"Raam gesloten",now:"Huidig",cool_setpoint:"Koelen",heat_setpoint:"Verwarmen"},alert:{battery_low:"Batterij bijna leeg",calibration:"Kalibratie actief",valve_error:"Klepfout",valve_blocked:"Klep geblokkeerd",motor_error:"Motorfout",sensor_error:"Sensorfout",communication_error:"Apparaat niet bereikbaar",firmware_update:"Firmware update",sabotage:"Sabotagemelding",fault:"Storing",operating_state_calibration:"Kalibratieritten",operating_state_reference:"Referentieritten"},ui:{set_temperature:"Temperatuur",operating_mode:"Modus",setpoint:"Doelwaarde",valve:"Klep",unavailable:"Niet beschikbaar",trend:"Trend",minimum:"Min",maximum:"Max",automatic:"Auto",manual_mode:"Handmatig"},aria:{decrease:"Temperatuur verlagen",increase:"Temperatuur verhogen",set_mode:"Modus instellen",toggle_trend:"Trend tonen/verbergen"},state_badge:{unavailable:"Niet beschikbaar"},version:{update_available:"Nieuwe versie beschikbaar",installed:"Geïnstalleerd",available:"Beschikbaar",version:"Versie",build:"Build",commit:"Commit",up_to_date:"Actueel"}},$t={state:{off:"Apagado",heat:"Calefacción",cool:"Refrigeración",auto:"Automático",heat_cool:"Calor / Frío",fan_only:"Ventilador",dry:"Deshumidificación"},action:{off:"Apagado",idle:"En espera",heating:"Calentando",cooling:"Enfriando",drying:"Deshumidificando",fan:"Ventilador activo"},sensor:{window_open:"Ventana abierta",window_closed:"Ventana cerrada",now:"Actual",cool_setpoint:"Frío",heat_setpoint:"Calor"},alert:{battery_low:"Batería baja",calibration:"Calibración en curso",valve_error:"Error de válvula",valve_blocked:"Válvula bloqueada",motor_error:"Error de motor",sensor_error:"Error de sensor",communication_error:"Dispositivo no disponible",firmware_update:"Actualización de firmware",sabotage:"Alerta de sabotaje",fault:"Fallo",operating_state_calibration:"Carrera de calibración",operating_state_reference:"Carrera de referencia"},ui:{set_temperature:"Temperatura",operating_mode:"Modo",setpoint:"Valor objetivo",valve:"Válvula",unavailable:"No disponible",trend:"Tendencia",minimum:"Mín",maximum:"Máx",automatic:"Auto",manual_mode:"Manual"},aria:{decrease:"Bajar temperatura",increase:"Subir temperatura",set_mode:"Establecer modo",toggle_trend:"Mostrar/ocultar tendencia"},state_badge:{unavailable:"No disponible"},version:{update_available:"Nueva versión disponible",installed:"Instalado",available:"Disponible",version:"Versión",build:"Build",commit:"Commit",up_to_date:"Actualizado"}};const xt={de:vt,"de-de":vt,"de-at":vt,"de-ch":vt,en:bt,"en-us":bt,"en-gb":bt,"en-au":bt,fr:yt,"fr-fr":yt,"fr-be":yt,"fr-ch":yt,nl:wt,"nl-nl":wt,"nl-be":wt,es:$t,"es-es":$t,"es-mx":$t};class At{constructor(t){this._lang="en",this._hass=t,this._dict=this._resolveDict(t?.language),this._lang=(t?.language??"en").toLowerCase().split("-")[0]}update(t){this._hass=t,this._dict=this._resolveDict(t?.language),this._lang=(t?.language??"en").toLowerCase().split("-")[0]}get lang(){return this._lang}mode(t){const e=`component.climate.entity_component._.state.${t}`,i=this._hass?.localize(e);if(i&&i!==e)return i;const a=t;return this._dict.state[a]??t}action(t){const e=`component.climate.entity_component._.state_attributes.hvac_action.state.${t}`,i=this._hass?.localize(e);if(i&&i!==e)return i;const a=t;return this._dict.action[a]??t}alert(t){return this._dict.alert[t]??t}sensor(t){return this._dict.sensor[t]??t}ui(t){return this._dict.ui[t]??t}aria(t){return this._dict.aria[t]??t}_resolveDict(t){if(!t)return bt;const e=t.toLowerCase();if(xt[e])return xt[e];const i=e.split("-")[0];return xt[i]?xt[i]:bt}}const kt=["critical","error","warning","info","normal"];function St(t){return kt.indexOf(t)}const Ct=new Set(["calibration","calibrating","kalibrierung","kalibrierfahrt","calibration_drive","reference_drive","referenzfahrt","valve_calibration","motor_calibration"]),Et=new Set(["valve_error","valve_blocked","valve_position_error","position_mismatch","motor_error","motor_blocked","ventilfehler","ventil_blockiert"]),Tt=new Set(["fault","error","failure","stoerung","fehler","sabotage","tamper","alarm"]),Mt=new Set(["unavailable","unknown","timeout","offline","not_reachable","communication_error"]),Pt=new Set(["update","updating","firmware_update","ota"]);const zt={off:"mdi:power",heat:"mdi:fire",cool:"mdi:snowflake",auto:"mdi:thermostat-auto",heat_cool:"mdi:autorenew",fan_only:"mdi:fan",dry:"mdi:water-off"};function Ot(t,e=1){return null==t?"—":t.toFixed(e)}function Nt(t,e,i){return Math.min(Math.max(t,e),i)}function Ht(t,e){return Math.round(t/e)*e}function jt(t){return t.startsWith("mdi:")?t:`mdi:${t}`}function Ut(t){const e=parseFloat(t);return isNaN(e)?null:e}const Dt="2.0.5";console.info(`%c MODERN-THERMOSTAT %c v${Dt} `,"background:#ff6b35;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","background:#1c2128;color:#ff6b35;font-weight:600;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards??[],window.customCards.push({type:"modern-thermostat",name:"Modern Thermostat",description:"Modern TRV thermostat card with alert system and optional temperature graph.",preview:!0});let Lt=class extends nt{constructor(){var t;super(...arguments),this._localizer=new At(t),this._activePanel="none",this._graphVisible=!1}setConfig(t){try{!function(t){if(!t.entity)throw new Error("[modern-thermostat] Missing required field: entity");if(!t.entity.startsWith("climate."))throw new Error(`[modern-thermostat] Entity must be a climate entity, got: ${t.entity}`)}(t)}catch(ft){return void(this._error=ft.message)}this._config={show_hvac_modes:!0,show_header:!0,show_window_status:!0,show_valve_position:!0,show_current_temperature:!0,show_battery_warning:!0,show_graph:!1,compact:!1,step:.5,decimals:1,hours_to_show:24,graph_line_width:2,battery_warning_level:25,show_version:!1,show_debug_info:!1,show_humidity:!1,show_battery:!1,show_graph_button:!1,show_target_humidity:!1,show_preset:!1,show_fan_mode:!1,show_swing_mode:!1,show_temperature_limits:!0,show_heating_demand:!1,show_control_mode:!1,control_mode_source:"auto",manual_on_temperature_change:!1,...t},this._activePanel="none",this._graphVisible=!1,this._error=void 0}getCardSize(){if(!this._config)return 3;let t=this._config.compact?2:3;return this._config.show_graph&&(t+=2),t}static async getConfigElement(){return await Promise.resolve().then(function(){return Vt}),document.createElement("modern-thermostat-editor")}static getStubConfig(hass, entities, entitiesFallback) {
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
    step: 0.5,
    decimals: 1,
    compact: false,
    show_header: true,
    show_hvac_modes: true,
    show_window_status: true,
    show_humidity: true,
    show_valve_position: true,
    show_battery_warning: true,
    show_graph: false,
    battery_warning_level: 25
  };
}getVersion(){return Dt}_refreshLocalizer(){const t=this.hass?.language;return t!==this._lastLanguage&&(this._localizer.update(this.hass),this._lastLanguage=t),this._localizer}// ══════════════════════════════════════════════════════════════════════
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

  // Ventilstellung / Stellgröße
  const valve=this._resolveValue({
    climateAttrs:a,
    climateAliases:["valve_position","valve","position","opening","pi_heating_demand","heating_demand","heat_demand"],
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
    climateAliases:["heating_demand","pi_heating_demand","heat_demand","valve_position"],
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

  return{humidity,battery,valve,windowStatus,heatingDemand,targetHumidity,preset,fanMode,swingMode}
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

_isWindowOpen(){
  return!!(this._config?.window_entity&&"on"===this.hass?.states[this._config.window_entity]?.state)
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

  const _showValve=!1!==this._config.show_valve_position;
  let c=(_showValve&&dv.valve.available)?dv.valve.value:null;

  const _showBattery=!1!==this._config.show_battery_warning||!1!==this._config.show_battery;
  let n={level:null,isLow:!1};
  if(_showBattery&&dv.battery.available&&null!==dv.battery.value){
    const bl=dv.battery.value;
    n={level:bl,isLow:bl<=(this._config.battery_warning_level??25)};
  }

  let statusMsg=null;
  if(q&&!1!==this._config.show_window_status){
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

        ${!1!==this._config.show_header?this._renderHeader(i,t.action(a),statusMsg):B}

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
                  <div class="mt-compact-sensor mt-compact-humidity">
                    <ha-icon icon="mdi:water-percent"></ha-icon>
                    <span>${Ot(h,0)} %rF</span>
                  </div>
                `:B}
                ${null!==n.level?I`
                  <div class=${ft({"mt-compact-sensor":!0,"mt-compact-battery":!0,"mt-compact-battery-low":n.isLow})}>
                    <ha-icon icon=${n.isLow?"mdi:battery-alert":"mdi:battery"}></ha-icon>
                    <span>${n.level}%</span>
                  </div>
                `:B}
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
                ${y}
                <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
              </button>
            </div>
          </div>
        `:I`
          <!-- NORMALMODUS: bisherige Anordnung -->
          ${null!==h?I`
            <div class=${ft({"mt-humidity-row":!0,"without-header":!1===this._config.show_header})}>
              <ha-icon icon="mdi:water-percent"></ha-icon>
              <span>${Ot(h,0)} %rF</span>
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
              ${y}
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
          ${null!==c||null!==n.level||(this._config.sensors?.length??0)>0?this._renderStatusBar(h,c,n):B}
        `:B}

      </div>

      ${!isCompact&&graphAvailable&&this._graphVisible?I`
        <div class="mt-trend-content">
          ${this._renderGraph(u,a)}
        </div>
      `:B}
    </ha-card>
  `
}

_renderHeader(t,e,i){
  const a =
    this._config.icon ??
    zt[t.hvacMode] ??
    "mdi:thermometer";

  const r = ft({
    "mt-status": true,
    "alert-error":
      i?.severity === "critical" ||
      i?.severity === "error",
    "alert-warning":
      i?.severity === "warning",
    "alert-info":
      i?.severity === "info",
    "window-open":
      i?.messageKey === "window_open"
  });

  const o = i?.icon ?? null;

  const visibleStatus =
    i?.messageKey === "window_open"
      ? this._localizer.sensor("window_open")
      : e;

  return I`
    <div class="mt-header">
      <div class="mt-header-icon">
        <ha-icon icon=${jt(a)}></ha-icon>
      </div>

      <div class="mt-header-text">
        <div class="mt-name">${t.name}</div>

        <div class=${r}>
          ${o
            ? I`
                <ha-icon
                  icon=${jt(o)}
                ></ha-icon>
              `
            : B}

          <span>${visibleStatus}</span>
        </div>
      </div>
    </div>
  `;
}

_renderTempControl(t,e,i,a){
  const o=void 0!==this._optimisticTarget?this._optimisticTarget:t.targetTemp;
  const safeTarget=null!==o&&isFinite(o)?o:null;
  const minT=Math.min(t.minTemp,t.maxTemp);
  const maxT=Math.max(t.minTemp,t.maxTemp);
  return I`
    <div class=${ft({"mt-temp-control":!0,"window-locked":e})}>
      <button class="mt-adj-btn" type="button"
        aria-label=${e?a.sensor("window_open"):a.aria("decrease")}
        title=${e?a.sensor("window_open"):""}
        ?disabled=${e||null===safeTarget||safeTarget<=minT}
        @click=${()=>{e||this._adjustTemp(-t.step,t)}}>
        <ha-icon icon="mdi:minus"></ha-icon>
      </button>
      <div class=${ft({"mt-limit":!0,"mt-limit-min":!0,"window-dimmed":e})}>
        <span class="mt-limit-label">${a.ui("minimum")}</span>
        <span class="mt-limit-value">${Ot(minT,i)} ${t.unit}</span>
      </div>
      <div class="mt-soll-display">
        <div class="mt-soll-big">
          ${null!==safeTarget
            ?I`<span class="mt-soll-big-value">${Ot(safeTarget,i)}</span><span class="mt-soll-big-unit">${t.unit}</span>`
            :I`<span style="opacity:0.35">—</span>`}
        </div>
        ${e
          ?I`<div class="mt-window-lock-info"><ha-icon icon="mdi:window-open-variant"></ha-icon><span>${a.sensor("window_open")}</span></div>`
          :I`<div class="mt-soll-sub">${a.ui("setpoint")}</div>`}
      </div>
      <div class=${ft({"mt-limit":!0,"mt-limit-max":!0,"window-dimmed":e})}>
        <span class="mt-limit-label">${a.ui("maximum")}</span>
        <span class="mt-limit-value">${Ot(maxT,i)} ${t.unit}</span>
      </div>
      <button class="mt-adj-btn" type="button"
        aria-label=${e?a.sensor("window_open"):a.aria("increase")}
        title=${e?a.sensor("window_open"):""}
        ?disabled=${e||null===safeTarget||safeTarget>=maxT}
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
              ?disabled=${null===r||r<=t.minTemp}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>
            <div class="mt-dual-val" style="color:#4fc3f7">${Ot(r,i)}</div>
            <button class="mt-dual-btn" aria-label=${e.aria("increase")}
              @click=${()=>this._adjustDual("low",t.step,t)}
              ?disabled=${null===r||null!==a&&r>=a-t.step}>
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
              ?disabled=${null===a||null!==r&&a<=r+t.step}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>
            <div class="mt-dual-val" style="color:#ff6b35">${Ot(a,i)}</div>
            <button class="mt-dual-btn" aria-label=${e.aria("increase")}
              @click=${()=>this._adjustDual("high",t.step,t)}
              ?disabled=${null===a||a>=t.maxTemp}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>
          </div>
        </div>
      </div>
    `}_renderModes(t,e){
  // Caps für Automatik/Hand-Erkennung
  const caps=this._resolveControlModeCapabilities(this.hass?.states[this._config?.entity]);
  const hvacModes=t.availableModes;
  const locked=this._isWindowOpen();
  const currentHvac=t.hvacMode;
  const currentPreset=this.hass?.states[this._config?.entity]?.attributes?.preset_mode??null;

  // Bestimme aktiven Zustand für jeden Button
  // Heizen ist aktiv wenn HVAC=heat UND kein Manuell-Zustand aktiv ist
  // (verhindert dass heat-Button aktiv ist wenn Manuell-Preset aktiv ist)
  const isHeatActive=(()=>{
    if(currentHvac!=="heat")return false;
    // Wenn Manuell-Quelle Preset/External ist, ist heat-Button nicht aktiv
    if(caps.available&&caps.source!=="hvac"&&caps.current==="manual")return false;
    return true;
  })();
  const isCoolActive=currentHvac==="cool";
  const isOffActive=currentHvac==="off";

  // Auto-Zustand: HVAC auto ODER Automatik-Preset aktiv
  const isAutoActive=(()=>{
    if(caps.available&&caps.source==="preset")return caps.current==="auto";
    if(caps.available&&caps.source==="hvac")return currentHvac===caps.automaticValue;
    if(caps.available&&caps.source==="external"){
      const extState=this._getExternalState(this._config?.control_mode_entity);
      return extState?.state===caps.automaticValue;
    }
    return currentHvac==="auto";
  })();

  // Manuell-Zustand: nur wenn caps.available und current==="manual"
  const isManualActive=(()=>{
    if(!caps.available)return false;
    if(caps.source==="preset")return caps.current==="manual";
    if(caps.source==="hvac")return currentHvac===caps.manualValue&&currentHvac!=="auto";
    if(caps.source==="external"){
      const extState=this._getExternalState(this._config?.control_mode_entity);
      return extState?.state===caps.manualValue;
    }
    return false;
  })();

  // Zeige Heizen-Button: nur wenn heat in hvac_modes
  const showHeat=hvacModes.includes("heat");
  // Zeige Kühlen-Button: nur wenn cool in hvac_modes
  const showCool=hvacModes.includes("cool");
  // Zeige Auto-Button: HVAC auto ODER gültige Automatik-Quelle
  const showAuto=(()=>{
    if(hvacModes.includes("auto"))return true;
    if(caps.available&&caps.automaticValue)return true;
    return false;
  })();
  // Zeige Manuell-Button: nur bei eindeutig erkannter manueller Quelle
  // heat allein ist KEIN Nachweis für Manuell – niemals heat als Manuell verwenden
  const showManual=(()=>{
    if(!caps.available||!caps.manualValue)return false;
    // Preset-Quelle: immer gültig (manual, hand, hold, none)
    if(caps.source==="preset")return true;
    // Externe Entität: immer gültig
    if(caps.source==="external")return true;
    // Service-Konfiguration: immer gültig
    if(caps.source==="service")return true;
    // HVAC-Quelle: nur wenn manualValue nicht "heat" ist
    // AUSNAHME: wenn manualValue "heat" ist UND automaticValue auch vorhanden ist
    // (z.B. auto=auto, manual=heat) – dann ist heat als Manuell konfiguriert
    if(caps.source==="hvac"){
      if(caps.manualValue!=="heat")return true;
      // heat als manualValue nur wenn explizit konfiguriert (nicht auto-erkannt)
      const src=this._config?.control_mode_source??"auto";
      return src==="hvac"&&!!caps.automaticValue&&caps.automaticValue!=="heat";
    }
    return false;
  })();
  // Zeige Aus-Button: nur wenn off in hvac_modes
  const showOff=hvacModes.includes("off");

  // Schaltfunktionen
  const doHeat=()=>{if(!locked)this._setMode("heat");};
  const doCool=()=>{if(!locked)this._setMode("cool");};
  const doOff=()=>{if(!locked)this._setMode("off");};
  const doAuto=()=>{
    if(locked)return;
    // Wenn eine nicht-HVAC-Quelle vorhanden ist ODER HVAC-Quelle mit anderem Automatikwert als "auto"
    if(caps.available&&(caps.source!=="hvac"||(caps.source==="hvac"&&caps.automaticValue!=="auto"))){
      this._setControlMode("auto",caps);
    }else if(hvacModes.includes("auto")){
      this._setMode("auto");
    }
  };
  const doManual=()=>{
    if(locked)return;
    if(caps.available)this._setControlMode("manual",caps);
  };

  const btnHeat=showHeat?I`
    <button class=${ft({"mt-mode-option":!0,"active-heat":isHeatActive,"window-locked":locked})}
      type="button" aria-pressed=${isHeatActive} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.mode("heat")}"
      @click=${doHeat}>
      <ha-icon icon="mdi:fire"></ha-icon>${e.mode("heat")}
    </button>`:B;

  const btnCool=showCool?I`
    <button class=${ft({"mt-mode-option":!0,"active-cool":isCoolActive,"window-locked":locked})}
      type="button" aria-pressed=${isCoolActive} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.mode("cool")}"
      @click=${doCool}>
      <ha-icon icon="mdi:snowflake"></ha-icon>${e.mode("cool")}
    </button>`:B;

  const btnAuto=showAuto?I`
    <button class=${ft({"mt-mode-option":!0,"active-auto":isAutoActive,"window-locked":locked})}
      type="button" aria-pressed=${isAutoActive} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.ui("automatic")}"
      @click=${doAuto}>
      <ha-icon icon="mdi:calendar-clock"></ha-icon>${e.ui("automatic")}
    </button>`:B;

  const btnManual=showManual?I`
    <button class=${ft({"mt-mode-option":!0,"active-manual":isManualActive,"window-locked":locked})}
      type="button" aria-pressed=${isManualActive} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.ui("manual_mode")}"
      @click=${doManual}>
      <ha-icon icon="mdi:hand-back-right"></ha-icon>${e.ui("manual_mode")}
    </button>`:B;

  const btnOff=showOff?I`
    <button class=${ft({"mt-mode-option":!0,"active-off":isOffActive,"window-locked":locked})}
      type="button" aria-pressed=${isOffActive} ?disabled=${locked}
      aria-label="${e.aria("set_mode")}: ${e.mode("off")}"
      @click=${doOff}>
      <ha-icon icon="mdi:power"></ha-icon>${e.mode("off")}
    </button>`:B;

  return I`
    <div class="mt-mode-layout">
      ${(showHeat||showCool)?I`
        <div class="mt-mode-row mt-mode-row-primary">
          ${btnHeat}${btnCool}
        </div>`:B}
      ${(showAuto||showManual||showOff)?I`
        <div class="mt-mode-row mt-mode-row-secondary">
          ${btnAuto}${btnManual}${btnOff}
        </div>`:B}
    </div>
  `;
}_renderGraph(t,e){
  const i={
    type:"custom:mini-graph-card",

    entities:[{
      entity:this._config.graph_entity,
      name:"Temperatur",
      show_state:!0,
      show_legend_state:!1,
      show_points:!0
    }],

    hours_to_show:t,
    points_per_hour:10,
    line_width:this._config.graph_line_width??2,
    decimals:1,
    height:150,

    hour24:!(
      this.hass?.language??"en"
    ).toLowerCase().startsWith("en-us"),

    group:!1,
    animate:!1,

    color_thresholds:[
      {value:17,color:"#0000FF"},
      {value:18,color:"#2A00D4"},
      {value:19,color:"#5500AA"},
      {value:20,color:"#800080"},
      {value:21,color:"#AA0055"},
      {value:22,color:"#D4002A"},
      {value:23,color:"#FF0000"}
    ],

    show:{
      extrema:!0,
      fill:"fade",
      icon:!1,
      labels:!1,
      name:!1,
      state:!0,
      points:"hover"
    }
  };
  const a=JSON.stringify(i);
  if(!this._graphElement){this._graphElement=document.createElement("mini-graph-card");}
  if(this._graphConfigKey!==a&&"function"==typeof this._graphElement.setConfig){
    this._graphElement.setConfig(i);
    this._graphConfigKey=a;
  }
  this._graphElement.hass=this.hass;
  requestAnimationFrame(()=>{
    const t=this._graphElement?.shadowRoot;
    if(!t||t.querySelector("#mt-hover-style"))return;
    const e=document.createElement("style");
    e.id="mt-hover-style";
    e.textContent=`
      :host {
        display: block !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
      }
      ha-card {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: 0 !important;
        border-radius: 0 !important;
      }
      .card-content {
        padding: 0 !important;
        margin: 0 !important;
      }
      div.states {
        position: absolute !important; top: 10px !important; left: 50% !important; right: auto !important;
        width: max-content !important; max-width: calc(100% - 24px) !important; margin: 0 !important;
        transform: translateX(-50%) !important;
        display: flex !important; flex-direction: column !important; align-items: center !important;
        justify-content: center !important; text-align: center !important;
        opacity: 0; visibility: hidden; pointer-events: none; z-index: 10;
        transition: opacity 120ms ease, visibility 120ms ease;
      }
      ha-card:hover div.states {
  opacity: 1 !important;
  visibility: visible !important;
}
      div.state { justify-content: center !important; align-items: center !important; text-align: center !important; margin: 0 auto !important; }
      div.state__value { text-align: center !important; margin: 0 auto !important; }
      div.state__time { display: block !important; text-align: center !important; margin: 2px auto 0 !important; }
      div.states--secondary { margin: 0 auto !important; text-align: center !important; }
      /* Hover-Temperatur und Zeitpunkt einheitlich grau */
      div.state,
      div.state__value,
      div.state__value span,
      div.state__time,
      div.state__time span,
      div.states--secondary { color: var(--secondary-text-color, #8b949e) !important; fill: var(--secondary-text-color, #8b949e) !important; }
      /* Legende ausblenden – kein Platz belegen */
      .graph--legend, .legend { display: none !important; height: 0 !important; overflow: hidden !important; padding: 0 !important; margin: 0 !important; }
      /* Überschrift/Name ausblenden */
      .header, .name, .card-header { display: none !important; height: 0 !important; overflow: hidden !important; padding: 0 !important; margin: 0 !important; }
    `;
    t.appendChild(e);
  });
  // Kein eigener Wrapper mit Zustandsfarben – transparent im ha-card-Container
  return I`<div class="mt-graph-inner">${this._graphElement}</div>`
}
_renderStatusBar(t,e,i){
  const a=this._config.sensors??[];
  const cfg=this._config;
  const dv=this._dv;

  // Optionale Zusatzwerte aus _resolveDisplayValues
  const demandVal=(!0===cfg.show_heating_demand&&dv?.heatingDemand?.available)?dv.heatingDemand.value:null;
  const presetVal=(!0===cfg.show_preset&&dv?.preset?.available)?dv.preset.value:null;
  const fanVal=(!0===cfg.show_fan_mode&&dv?.fanMode?.available)?dv.fanMode.value:null;
  const swingVal=(!0===cfg.show_swing_mode&&dv?.swingMode?.available)?dv.swingMode.value:null;
  const targetHumVal=(!0===cfg.show_target_humidity&&dv?.targetHumidity?.available)?dv.targetHumidity.value:null;

  return I`
    <div class="mt-status-bar">
      ${null!==e&&!1!==cfg.show_valve_position?I`<div class="mt-stat"><ha-icon icon=${(r=>null===r?"mdi:valve":0===r?"mdi:valve-closed":r>=100?"mdi:valve-open":"mdi:valve")(e)}></ha-icon><span class="mt-stat-val">${e}%</span></div>`:B}
      ${null!==i.level?I`
        <div class=${ft({"mt-stat":!0,"battery-low":i.isLow})}>
          <ha-icon icon=${i.isLow?"mdi:battery-alert":"mdi:battery"}></ha-icon>
          <span class="mt-stat-val">${i.level}%</span>
        </div>
      `:B}
      ${null!==demandVal?I`<div class="mt-stat"><ha-icon icon="mdi:fire"></ha-icon><span class="mt-stat-val">${Ot(demandVal,0)}%</span></div>`:B}
      ${null!==presetVal?I`<div class="mt-stat"><ha-icon icon="mdi:thermostat"></ha-icon><span class="mt-stat-val">${presetVal}</span></div>`:B}
      ${null!==fanVal?I`<div class="mt-stat"><ha-icon icon="mdi:fan"></ha-icon><span class="mt-stat-val">${fanVal}</span></div>`:B}
      ${null!==swingVal?I`<div class="mt-stat"><ha-icon icon="mdi:arrow-oscillating"></ha-icon><span class="mt-stat-val">${swingVal}</span></div>`:B}
      ${null!==targetHumVal?I`<div class="mt-stat"><ha-icon icon="mdi:water-percent"></ha-icon><span class="mt-stat-val">${Ot(targetHumVal,0)}%</span></div>`:B}
      ${a.map(t=>{const e=this.hass?.states[t.entity];if(!e||!this._isUsableState(e.state))return B;const i=e.state,a=t.unit??e.attributes.unit_of_measurement??"",r=t.icon??e.attributes.icon??"mdi:information-outline",o=t.decimals,s=void 0===o||isNaN(Number(i))?i:Number(i).toFixed(o);return I`<div class="mt-stat" title=${t.name??""}><ha-icon icon=${jt(r)}></ha-icon><span class="mt-stat-val">${s}${a}</span></div>`})}
    </div>
  `;var r}
_adjustTemp(t,e){
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
  super.disconnectedCallback();
  this._clearOptimisticTimer()
}
updated(t){
  super.updated(t);
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
  setConfig(t){
    this._config={...t}
  }

  render(){
    if(!this._config)return B;
    const t=this._config;
    return I`
      <div class="editor">

        <div class="section-title">Entität</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.entity??""} .includeDomains=${["climate"]} allow-custom-entity
          @value-changed=${t=>this._set("entity",t.detail.value)}></ha-entity-picker>

        <div class="section-title">Anzeige</div>
        <div class="row">
          <ha-input label="Anzeigename" placeholder="Name der Thermostat-Entität" .value=${t.name??""} @input=${e=>this._set("name",e.target.value.trim()||void 0)}></ha-input>
          <ha-input label="Icon" placeholder="mdi:thermometer" .value=${t.icon??""} @input=${e=>this._set("icon",e.target.value.trim()||void 0)}></ha-input>
        </div>

        <div class="row">
          <ha-textfield label="Schrittweite" type="number" .value=${String(t.step??.5)} min="0.1" max="5" step="0.1"
            @change=${t=>this._set("step",parseFloat(t.target.value))}></ha-textfield>
          <ha-textfield label="Nachkommastellen" type="number" .value=${String(t.decimals??1)} min="0" max="2" step="1"
            @change=${t=>this._set("decimals",parseInt(t.target.value,10))}></ha-textfield>
        </div>

        <div class="section-title">Optionen</div>
        <div class="divider"></div>

        <div class="section-title">Fensterkontakt</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.window_entity??""} .includeDomains=${["binary_sensor"]} allow-custom-entity
          @value-changed=${t=>this._set("window_entity",t.detail.value||void 0)}></ha-entity-picker>
        <ha-formfield label="Fensterstatus anzeigen">
          <ha-switch .checked=${!1!==t.show_window_status} @change=${t=>this._set("show_window_status",t.target.checked)}></ha-switch>
        </ha-formfield>

        <div class="divider"></div>

        <div class="section-title">Sensoren</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.humidity_entity??""} .includeDomains=${["sensor"]} allow-custom-entity
          label="Luftfeuchtigkeit"
          @value-changed=${t=>this._set("humidity_entity",t.detail.value||void 0)}></ha-entity-picker>

        <ha-entity-picker .hass=${this.hass} .value=${t.valve_position_entity??""} .includeDomains=${["sensor"]} allow-custom-entity
          label="Ventilstellung"
          @value-changed=${t=>this._set("valve_position_entity",t.detail.value||void 0)}></ha-entity-picker>
        <ha-formfield label="Ventilstellung anzeigen">
          <ha-switch .checked=${!1!==t.show_valve_position} @change=${t=>this._set("show_valve_position",t.target.checked)}></ha-switch>
        </ha-formfield>

        <ha-entity-picker .hass=${this.hass} .value=${t.battery_entity??""} .includeDomains=${["sensor"]} allow-custom-entity
          label="Batterie"
          @value-changed=${t=>this._set("battery_entity",t.detail.value||void 0)}></ha-entity-picker>

        <div class="divider"></div>

        <div class="divider"></div>

        <div class="section-title">Automatik / Handbetrieb</div>
        <ha-formfield label="Automatik-/Hand-Umschaltung anzeigen">
          <ha-switch .checked=${!1!==t.show_control_mode} @change=${t=>this._set("show_control_mode",t.target.checked)}></ha-switch>
        </ha-formfield>
        ${!1!==t.show_control_mode?I`
          <ha-select label="Quelle" .value=${t.control_mode_source??"auto"}
            @selected=${e=>this._set("control_mode_source",e.target.value)}>
            <mwc-list-item value="auto">Automatisch erkennen</mwc-list-item>
            <mwc-list-item value="hvac">HVAC-Modus</mwc-list-item>
            <mwc-list-item value="preset">Preset-Modus</mwc-list-item>
            <mwc-list-item value="external">Externe Entität</mwc-list-item>
            <mwc-list-item value="service">Servicekonfiguration</mwc-list-item>
          </ha-select>
          ${"hvac"===t.control_mode_source?I`
            <div class="row">
              <ha-textfield label="Automatikmodus" .value=${t.automatic_hvac_mode??"auto"}
                @change=${e=>this._set("automatic_hvac_mode",e.target.value)}></ha-textfield>
              <ha-textfield label="Handmodus" .value=${t.manual_hvac_mode??"heat"}
                @change=${e=>this._set("manual_hvac_mode",e.target.value)}></ha-textfield>
            </div>
          `:B}
          ${"preset"===t.control_mode_source?I`
            <div class="row">
              <ha-textfield label="Automatik-Preset" .value=${t.automatic_preset??"auto"}
                @change=${e=>this._set("automatic_preset",e.target.value)}></ha-textfield>
              <ha-textfield label="Hand-Preset" .value=${t.manual_preset??"manual"}
                @change=${e=>this._set("manual_preset",e.target.value)}></ha-textfield>
            </div>
          `:B}
          ${"external"===t.control_mode_source?I`
            <ha-entity-picker .hass=${this.hass} .value=${t.control_mode_entity??""} .includeDomains=${["select","input_select"]} allow-custom-entity
              label="Modusentität"
              @value-changed=${t=>this._set("control_mode_entity",t.detail.value||void 0)}></ha-entity-picker>
            <div class="row">
              <ha-textfield label="Automatikwert" .value=${t.automatic_entity_value??"auto"}
                @change=${e=>this._set("automatic_entity_value",e.target.value)}></ha-textfield>
              <ha-textfield label="Handwert" .value=${t.manual_entity_value??"manual"}
                @change=${e=>this._set("manual_entity_value",e.target.value)}></ha-textfield>
            </div>
          `:B}
          <ha-formfield label="Bei Sollwertänderung Handbetrieb aktivieren">
            <ha-switch .checked=${!0===t.manual_on_temperature_change} @change=${t=>this._set("manual_on_temperature_change",t.target.checked)}></ha-switch>
          </ha-formfield>
        `:B}

        <div class="section-title">Climate-Werte anzeigen</div>
        <ha-formfield label="Feuchtigkeit (Istwert)">
          <ha-switch .checked=${!1!==t.show_humidity} @change=${t=>this._set("show_humidity",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Ziel-Feuchtigkeit">
          <ha-switch .checked=${!0===t.show_target_humidity} @change=${t=>this._set("show_target_humidity",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Preset-Modus">
          <ha-switch .checked=${!0===t.show_preset} @change=${t=>this._set("show_preset",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Lüftermodus">
          <ha-switch .checked=${!0===t.show_fan_mode} @change=${t=>this._set("show_fan_mode",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Schwenkmodus">
          <ha-switch .checked=${!0===t.show_swing_mode} @change=${t=>this._set("show_swing_mode",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Wärmebedarf / Stellanforderung">
          <ha-switch .checked=${!0===t.show_heating_demand} @change=${t=>this._set("show_heating_demand",t.target.checked)}></ha-switch>
        </ha-formfield>

        <div class="divider"></div>

        <div class="section-title">Externe Fallback-Entitäten</div>
        <ha-entity-picker .hass=${this.hass} .value=${t.heating_demand_entity??""} .includeDomains=${["sensor"]} allow-custom-entity
          label="Wärmebedarf-Sensor (Fallback)"
          @value-changed=${t=>this._set("heating_demand_entity",t.detail.value||void 0)}></ha-entity-picker>

        <div class="divider"></div>

        <div class="section-title">Trendanzeige</div>

<ha-entity-picker
  .hass=${this.hass}
  .value=${t.graph_entity??""}
  .includeDomains=${["sensor"]}
  allow-custom-entity
  label="Temperatursensor"
  @value-changed=${e=>this._set(
    "graph_entity",
    e.detail.value||void 0
  )}>
</ha-entity-picker>

<div class="row">
  <ha-textfield
    label="Anzeigedauer in Stunden"
    type="number"
    min="1"
    max="168"
    step="1"
    .value=${String(t.hours_to_show??24)}
    @change=${e=>this._set(
      "hours_to_show",
      Math.max(1,parseInt(e.target.value,10)||24)
    )}>
  </ha-textfield>

  <ha-textfield
    label="Linienbreite"
    type="number"
    min="1"
    max="10"
    step="1"
    .value=${String(t.graph_line_width??2)}
    @change=${e=>this._set(
      "graph_line_width",
      Math.max(1,parseInt(e.target.value,10)||2)
    )}>
  </ha-textfield>
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
    .divider { height: 1px; background: var(--divider-color); }
  `,t([pt({attribute:!1})],Rt.prototype,"hass",void 0),t([mt()],Rt.prototype,"_config",void 0),Rt=t([ct("modern-thermostat-editor")],Rt);var Vt=Object.freeze({__proto__:null,get ModernThermostatEditor(){return Rt}});export{Lt as ModernThermostat};

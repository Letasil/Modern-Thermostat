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
  ha-card.action-heating {
    background: rgba(255,107,53,0.07);
    border-color: rgba(255,107,53,0.32);
    box-shadow: 0 0 28px rgba(255,107,53,0.09);
  }
  ha-card.action-cooling {
    background: rgba(79,195,247,0.07);
    border-color: rgba(79,195,247,0.32);
    box-shadow: 0 0 28px rgba(79,195,247,0.09);
  }
  ha-card.action-drying  { background: rgba(255,213,79,0.06);  border-color: rgba(255,213,79,0.28); }
  ha-card.action-fan     { background: rgba(129,199,132,0.06); border-color: rgba(129,199,132,0.28); }
  ha-card.mode-off       { opacity: 0.82; }

  /* ── Seamless graph integration ───────────────────────── */
  /*
   * When graph is active, the card's bottom edge merges with
   * the graph wrapper: no bottom radius, transparent bottom border.
   * The graph wrapper provides the bottom radius and border.
   */
  ha-card.has-graph {
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

  ha-card.action-heating .mt-header-icon { background: rgba(255,107,53,0.18); }
  ha-card.action-heating .mt-header-icon ha-icon { color: var(--mt-heat); }
  ha-card.action-cooling .mt-header-icon { background: rgba(79,195,247,0.18); }
  ha-card.action-cooling .mt-header-icon ha-icon { color: var(--mt-cool); }

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
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr), opacity var(--mt-tr);
  }
  ha-card.action-heating .mt-ist { color: var(--mt-heat); }
  ha-card.action-cooling .mt-ist { color: var(--mt-cool); }
  ha-card.mode-off .mt-ist { opacity: 0.35; color: var(--secondary-text-color) !important; }

  .mt-ist-unit {
    align-self: flex-start;
    margin-top: 3px;
    margin-left: 3px;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
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
  .mt-soll-row {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 0 var(--mt-spacing) 4px;

    font-size: 13px;
    color: var(--secondary-text-color);
    font-weight: 500;
    flex-shrink: 0;
}

  .mt-soll-row ha-icon {
    --mdc-icon-size: 14px;
    opacity: 0.7;
}

  .mt-soll-val {
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
    font-weight: 600;
    text-align: center;
}

  ha-card.mode-off .mt-soll-val { opacity: 0.38; }

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
    font-size: 44px; font-weight: 300; line-height: 1;
    letter-spacing: -2px; color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr);
  }
  ha-card.action-heating .mt-soll-big { color: var(--mt-heat); }
  ha-card.action-cooling .mt-soll-big { color: var(--mt-cool); }
  .mt-soll-big-unit { font-size: 18px; font-weight: 400; opacity: 0.60; letter-spacing: 0; }
  .mt-soll-sub {
    font-size: 10px; color: var(--secondary-text-color);
    text-transform: uppercase; letter-spacing: 0.9px; font-weight: 500;
  }

  /* ── HVAC mode pills (inside panel slot) ──────────────── */
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
   * Together with ha-card.has-graph (no bottom radius, transparent
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
  ha-card.compact { --mt-spacing: 10px; }
  ha-card.compact .mt-ist { font-size: 46px; }
  ha-card.compact .mt-ist-unit {
    font-size: 17px;
    margin-top: 2px;
}

ha-card.compact .mt-humidity-row {
    margin-top: -13px;
}

ha-card.compact .mt-humidity-row.without-header {
    margin-top: 8px;
}

ha-card.compact .mt-humidity-row ha-icon {
    --mdc-icon-size: 11px;
}

  ha-card.compact .mt-adj-btn { width: 40px; height: 40px; }
  ha-card.compact .mt-adj-btn ha-icon { --mdc-icon-size: 22px; }
  ha-card.compact .mt-soll-big { font-size: 36px; }
  ha-card.compact .mt-main-btn { padding: 7px 10px; font-size: 11px; }
  ha-card.compact .mt-stat { font-size: 11px; padding: 2px 8px; }
  ha-card.compact .mt-header-icon { width: 32px; height: 32px; }
  ha-card.compact .mt-header-icon ha-icon { --mdc-icon-size: 17px; }    
  ha-card.compact .mt-temp-center { padding: 8px var(--mt-spacing) 3px; }
  ha-card.compact .mt-btn-row { padding: 4px var(--mt-spacing) 6px; }
  ha-card.compact .mt-status-bar { padding: 5px var(--mt-spacing); }

  /* ── Responsive ───────────────────────────────────────── */
  @media (max-width: 320px) {
    .mt-ist { font-size: 50px; }
    .mt-main-btn { font-size: 11px; padding: 7px 8px; }
    .mt-stat { font-size: 11px; padding: 2px 6px; }
  }
`;var vt={state:{off:"Aus",heat:"Heizen",cool:"Kühlen",auto:"Automatik",heat_cool:"Heizen/Kühlen",fan_only:"Lüften",dry:"Entfeuchten"},action:{off:"Aus",idle:"Bereitschaft",heating:"Heizen",cooling:"Kühlen",drying:"Entfeuchten",fan:"Lüften"},sensor:{window_open:"Fenster offen",window_closed:"Fenster geschlossen",now:"Aktuell",cool_setpoint:"Kühlen",heat_setpoint:"Heizen"},alert:{battery_low:"Batterie schwach",calibration:"Kalibrierung läuft",valve_error:"Ventilfehler",valve_blocked:"Ventil blockiert",motor_error:"Motorfehler",sensor_error:"Sensorfehler",communication_error:"Gerät nicht erreichbar",firmware_update:"Firmware Update",sabotage:"Sabotagemeldung",fault:"Störung",operating_state_calibration:"Kalibrierfahrt",operating_state_reference:"Referenzfahrt"},ui:{set_temperature:"Temperatur",operating_mode:"Modus",setpoint:"Sollwert",valve:"Ventil",unavailable:"Nicht verfügbar"},aria:{decrease:"Temperatur senken",increase:"Temperatur erhöhen",set_mode:"Modus setzen"},state_badge:{unavailable:"Nicht verfügbar"},version:{update_available:"Neue Version verfügbar",installed:"Installiert",available:"Verfügbar",version:"Version",build:"Build",commit:"Commit",up_to_date:"Aktuell"}},bt={state:{off:"Off",heat:"Heat",cool:"Cool",auto:"Auto",heat_cool:"Heat / Cool",fan_only:"Fan",dry:"Dry"},action:{off:"Off",idle:"Idle",heating:"Heating",cooling:"Cooling",drying:"Drying",fan:"Fan running"},sensor:{window_open:"Window open",window_closed:"Window closed",now:"Current",cool_setpoint:"Cool",heat_setpoint:"Heat"},alert:{battery_low:"Low battery",calibration:"Calibration running",valve_error:"Valve error",valve_blocked:"Valve blocked",motor_error:"Motor error",sensor_error:"Sensor error",communication_error:"Device unavailable",firmware_update:"Firmware update",sabotage:"Sabotage alert",fault:"Fault",operating_state_calibration:"Calibration drive",operating_state_reference:"Reference drive"},ui:{set_temperature:"Temperature",operating_mode:"Mode",setpoint:"Setpoint",valve:"Valve",unavailable:"Unavailable"},aria:{decrease:"Decrease temperature",increase:"Increase temperature",set_mode:"Set mode"},state_badge:{unavailable:"Unavailable"},version:{update_available:"New version available",installed:"Installed",available:"Available",version:"Version",build:"Build",commit:"Commit",up_to_date:"Up to date"}},yt={state:{off:"Éteint",heat:"Chauffage",cool:"Climatisation",auto:"Automatique",heat_cool:"Chaud / Froid",fan_only:"Ventilateur",dry:"Déshumidification"},action:{off:"Éteint",idle:"Veille",heating:"Chauffe",cooling:"Refroidit",drying:"Déshumidifie",fan:"Ventilateur actif"},sensor:{window_open:"Fenêtre ouverte",window_closed:"Fenêtre fermée",now:"Actuel",cool_setpoint:"Froid",heat_setpoint:"Chaud"},alert:{battery_low:"Batterie faible",calibration:"Calibration en cours",valve_error:"Erreur vanne",valve_blocked:"Vanne bloquée",motor_error:"Erreur moteur",sensor_error:"Erreur capteur",communication_error:"Appareil indisponible",firmware_update:"Mise à jour firmware",sabotage:"Alerte sabotage",fault:"Défaut",operating_state_calibration:"Course de calibration",operating_state_reference:"Course de référence"},ui:{set_temperature:"Température",operating_mode:"Mode",setpoint:"Consigne",valve:"Vanne",unavailable:"Indisponible"},aria:{decrease:"Diminuer la température",increase:"Augmenter la température",set_mode:"Définir le mode"},state_badge:{unavailable:"Indisponible"},version:{update_available:"Nouvelle version disponible",installed:"Installé",available:"Disponible",version:"Version",build:"Build",commit:"Commit",up_to_date:"À jour"}},wt={state:{off:"Uit",heat:"Verwarmen",cool:"Koelen",auto:"Automatisch",heat_cool:"Verwarmen/Koelen",fan_only:"Ventileren",dry:"Ontvochtigen"},action:{off:"Uit",idle:"Stand-by",heating:"Verwarmt",cooling:"Koelt",drying:"Ontvochtigt",fan:"Ventilator actief"},sensor:{window_open:"Raam geopend",window_closed:"Raam gesloten",now:"Huidig",cool_setpoint:"Koelen",heat_setpoint:"Verwarmen"},alert:{battery_low:"Batterij bijna leeg",calibration:"Kalibratie actief",valve_error:"Klepfout",valve_blocked:"Klep geblokkeerd",motor_error:"Motorfout",sensor_error:"Sensorfout",communication_error:"Apparaat niet bereikbaar",firmware_update:"Firmware update",sabotage:"Sabotagemelding",fault:"Storing",operating_state_calibration:"Kalibratieritten",operating_state_reference:"Referentieritten"},ui:{set_temperature:"Temperatuur",operating_mode:"Modus",setpoint:"Doelwaarde",valve:"Klep",unavailable:"Niet beschikbaar"},aria:{decrease:"Temperatuur verlagen",increase:"Temperatuur verhogen",set_mode:"Modus instellen"},state_badge:{unavailable:"Niet beschikbaar"},version:{update_available:"Nieuwe versie beschikbaar",installed:"Geïnstalleerd",available:"Beschikbaar",version:"Versie",build:"Build",commit:"Commit",up_to_date:"Actueel"}},$t={state:{off:"Apagado",heat:"Calefacción",cool:"Refrigeración",auto:"Automático",heat_cool:"Calor / Frío",fan_only:"Ventilador",dry:"Deshumidificación"},action:{off:"Apagado",idle:"En espera",heating:"Calentando",cooling:"Enfriando",drying:"Deshumidificando",fan:"Ventilador activo"},sensor:{window_open:"Ventana abierta",window_closed:"Ventana cerrada",now:"Actual",cool_setpoint:"Frío",heat_setpoint:"Calor"},alert:{battery_low:"Batería baja",calibration:"Calibración en curso",valve_error:"Error de válvula",valve_blocked:"Válvula bloqueada",motor_error:"Error de motor",sensor_error:"Error de sensor",communication_error:"Dispositivo no disponible",firmware_update:"Actualización de firmware",sabotage:"Alerta de sabotaje",fault:"Fallo",operating_state_calibration:"Carrera de calibración",operating_state_reference:"Carrera de referencia"},ui:{set_temperature:"Temperatura",operating_mode:"Modo",setpoint:"Valor objetivo",valve:"Válvula",unavailable:"No disponible"},aria:{decrease:"Bajar temperatura",increase:"Subir temperatura",set_mode:"Establecer modo"},state_badge:{unavailable:"No disponible"},version:{update_available:"Nueva versión disponible",installed:"Instalado",available:"Disponible",version:"Versión",build:"Build",commit:"Commit",up_to_date:"Actualizado"}};const xt={de:vt,"de-de":vt,"de-at":vt,"de-ch":vt,en:bt,"en-us":bt,"en-gb":bt,"en-au":bt,fr:yt,"fr-fr":yt,"fr-be":yt,"fr-ch":yt,nl:wt,"nl-nl":wt,"nl-be":wt,es:$t,"es-es":$t,"es-mx":$t};class At{constructor(t){this._lang="en",this._hass=t,this._dict=this._resolveDict(t?.language),this._lang=(t?.language??"en").toLowerCase().split("-")[0]}update(t){this._hass=t,this._dict=this._resolveDict(t?.language),this._lang=(t?.language??"en").toLowerCase().split("-")[0]}get lang(){return this._lang}mode(t){const e=`component.climate.entity_component._.state.${t}`,i=this._hass?.localize(e);if(i&&i!==e)return i;const a=t;return this._dict.state[a]??t}action(t){const e=`component.climate.entity_component._.state_attributes.hvac_action.state.${t}`,i=this._hass?.localize(e);if(i&&i!==e)return i;const a=t;return this._dict.action[a]??t}alert(t){return this._dict.alert[t]??t}sensor(t){return this._dict.sensor[t]??t}ui(t){return this._dict.ui[t]??t}aria(t){return this._dict.aria[t]??t}_resolveDict(t){if(!t)return bt;const e=t.toLowerCase();if(xt[e])return xt[e];const i=e.split("-")[0];return xt[i]?xt[i]:bt}}const kt=["critical","error","warning","info","normal"];function St(t){return kt.indexOf(t)}const Ct=new Set(["calibration","calibrating","kalibrierung","kalibrierfahrt","calibration_drive","reference_drive","referenzfahrt","valve_calibration","motor_calibration"]),Et=new Set(["valve_error","valve_blocked","valve_position_error","position_mismatch","motor_error","motor_blocked","ventilfehler","ventil_blockiert"]),Tt=new Set(["fault","error","failure","stoerung","fehler","sabotage","tamper","alarm"]),Mt=new Set(["unavailable","unknown","timeout","offline","not_reachable","communication_error"]),Pt=new Set(["update","updating","firmware_update","ota"]);const zt={off:"mdi:power",heat:"mdi:fire",cool:"mdi:snowflake",auto:"mdi:thermostat-auto",heat_cool:"mdi:autorenew",fan_only:"mdi:fan",dry:"mdi:water-off"};function Ot(t,e=1){return null==t?"—":t.toFixed(e)}function Nt(t,e,i){return Math.min(Math.max(t,e),i)}function Ht(t,e){return Math.round(t/e)*e}function jt(t){return t.startsWith("mdi:")?t:`mdi:${t}`}function Ut(t){const e=parseFloat(t);return isNaN(e)?null:e}const Dt="1.7.24";console.info(`%c MODERN-THERMOSTAT %c v${Dt} `,"background:#ff6b35;color:#fff;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","background:#1c2128;color:#ff6b35;font-weight:600;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards??[],window.customCards.push({type:"modern-thermostat",name:"Modern Thermostat",description:"Modern TRV thermostat card with alert system and optional temperature graph.",preview:!0});let Lt=class extends nt{constructor(){var t;super(...arguments),this._localizer=new At(t),this._activePanel="none"}setConfig(t){try{!function(t){if(!t.entity)throw new Error("[modern-thermostat] Missing required field: entity");if(!t.entity.startsWith("climate."))throw new Error(`[modern-thermostat] Entity must be a climate entity, got: ${t.entity}`)}(t)}catch(ft){return void(this._error=ft.message)}this._config={show_hvac_modes:!0,show_header:!0,show_window_status:!0,show_valve_position:!0,show_current_temperature:!0,show_battery_warning:!0,show_graph:!1,compact:!1,step:.5,decimals:1,hours_to_show:24,graph_line_width:2,battery_warning_level:25,show_version:!1,show_debug_info:!1,...t},this._activePanel="none",this._error=void 0}getCardSize(){if(!this._config)return 3;let t=this._config.compact?2:3;return this._config.show_graph&&(t+=2),t}static async getConfigElement(){return await Promise.resolve().then(function(){return Vt}),document.createElement("modern-thermostat-editor")}static getStubConfig(){return{type:"custom:modern-thermostat",entity:"climate.example",step:.5,show_hvac_modes:!0,show_window_status:!0,show_valve_position:!0,show_battery_warning:!0,battery_warning_level:25}}getVersion(){return Dt}_refreshLocalizer(){const t=this.hass?.language;return t!==this._lastLanguage&&(this._localizer.update(this.hass),this._lastLanguage=t),this._localizer}_togglePanel(t){this._activePanel=this._activePanel===t?"none":t}render(){if(this._error)return I`<ha-card><div class="mt-error"><ha-icon icon="mdi:alert-circle"></ha-icon>${this._error}</div></ha-card>`;if(!this._config||!this.hass)return B;const t=this._refreshLocalizer(),e=this.hass.states[this._config.entity];if(!e)return I`<ha-card><div class="mt-error"><ha-icon icon="mdi:help-circle"></ha-icon>${this._config.entity}</div></ha-card>`;if("unavailable"===e.state)return I`
        <ha-card>
          <div class="mt-unavailable">
            <ha-icon icon="mdi:thermometer-off"></ha-icon>
            <div>${this._config.name??e.attributes.friendly_name??this._config.entity} – ${t.ui("unavailable")}</div>
          </div>
        </ha-card>`;const i=function(t,e){const i=t.attributes;return{entity:t,currentTemp:"number"==typeof i.current_temperature?i.current_temperature:null,targetTemp:"number"==typeof i.temperature?i.temperature:null,targetTempHigh:"number"==typeof i.target_temp_high?i.target_temp_high:null,targetTempLow:"number"==typeof i.target_temp_low?i.target_temp_low:null,hvacMode:t.state??"off",hvacAction:i.hvac_action??null,availableModes:i.hvac_modes??["off","heat"],minTemp:"number"==typeof i.min_temp?i.min_temp:5,maxTemp:"number"==typeof i.max_temp?i.max_temp:35,step:e.step??("number"==typeof i.target_temp_step?i.target_temp_step:.5),name:e.name??("string"==typeof i.friendly_name?i.friendly_name:t.entity_id),unit:e.unit??("string"==typeof i.unit_of_measurement?i.unit_of_measurement:"°C")}}(e,this._config),a=i.hvacAction??"off",r="off"===i.hvacMode,o=function(t){return"heat_cool"===t.hvacMode&&null!==t.targetTempHigh&&null!==t.targetTempLow}(i),s=function(t,e,i){const a=[];if(t.fault_entity){const r=e.states[t.fault_entity];"on"===r?.state&&a.push({active:!0,severity:"error",icon:"mdi:alert-circle",messageKey:"fault",rawMessage:i.alert("fault")})}if(t.error_entity){const r=e.states[t.error_entity];if(r&&"none"!==r.state&&"ok"!==r.state&&"normal"!==r.state&&"off"!==r.state&&"0"!==r.state){const t=r.state.toLowerCase();Et.has(t)?a.push({active:!0,severity:"error",icon:"mdi:alert-circle",messageKey:"valve_error",rawMessage:i.alert("valve_error")}):Ct.has(t)?a.push({active:!0,severity:"warning",icon:"mdi:sync",messageKey:"calibration",rawMessage:i.alert("calibration")}):Mt.has(t)?a.push({active:!0,severity:"error",icon:"mdi:wifi-alert",messageKey:"communication_error",rawMessage:i.alert("communication_error")}):Pt.has(t)?a.push({active:!0,severity:"info",icon:"mdi:update",messageKey:"firmware_update",rawMessage:i.alert("firmware_update")}):a.push({active:!0,severity:"error",icon:"mdi:alert-circle",messageKey:"fault",rawMessage:r.state})}}if(t.status_entity){const r=e.states[t.status_entity];if(r&&"normal"!==r.state&&"ok"!==r.state&&"idle"!==r.state&&"off"!==r.state&&"0"!==r.state){const t=r.state.toLowerCase();Ct.has(t)||t.includes("calibrat")||t.includes("kalibrierung")?a.push({active:!0,severity:"warning",icon:"mdi:sync",messageKey:"calibration",rawMessage:i.alert("calibration")}):Et.has(t)?a.push({active:!0,severity:"error",icon:"mdi:alert-circle",messageKey:"valve_error",rawMessage:i.alert("valve_error")}):Mt.has(t)?a.push({active:!0,severity:"error",icon:"mdi:wifi-alert",messageKey:"communication_error",rawMessage:i.alert("communication_error")}):Pt.has(t)?a.push({active:!0,severity:"info",icon:"mdi:update",messageKey:"firmware_update",rawMessage:i.alert("firmware_update")}):Tt.has(t)&&a.push({active:!0,severity:"error",icon:"mdi:alert-circle",messageKey:"fault",rawMessage:i.alert("fault")})}}if(t.operating_state_entity){const r=e.states[t.operating_state_entity];if(r){const t=r.state.toLowerCase();Ct.has(t)||t.includes("calibrat")||t.includes("kalibrierung")?a.push({active:!0,severity:"warning",icon:"mdi:sync",messageKey:"operating_state_calibration",rawMessage:i.alert("operating_state_calibration")}):(t.includes("reference")||t.includes("referenz"))&&a.push({active:!0,severity:"info",icon:"mdi:sync",messageKey:"operating_state_reference",rawMessage:i.alert("operating_state_reference")})}}if(t.update_entity){const r=e.states[t.update_entity];"on"===r?.state&&a.push({active:!0,severity:"info",icon:"mdi:update",messageKey:"firmware_update",rawMessage:i.alert("firmware_update")})}if(t.window_entity&&!1!==t.show_window_status){const r=e.states[t.window_entity];"on"===r?.state&&a.push({active:!0,severity:"warning",icon:"mdi:window-open",messageKey:"window_open",rawMessage:i.sensor("window_open")})}if(t.battery_entity&&!1!==t.show_battery_warning){const r=e.states[t.battery_entity];if(r){const e=parseFloat(r.state),o=t.battery_warning_level??25;!isNaN(e)&&e<=o&&a.push({active:!0,severity:"warning",icon:"mdi:battery-alert",messageKey:"battery_low",rawMessage:i.alert("battery_low")})}}if(t.alerts?.length)for(const r of t.alerts){const t=e.states[r.entity];if(!t)continue;const o=r.state??"on";if(t.state!==o)continue;const s=r[`message_${i.lang}`]??r.message_en??r.message??r.entity;a.push({active:!0,severity:r.severity??"warning",icon:r.icon??"mdi:alert",messageKey:"fault",rawMessage:s})}return 0===a.length?null:a.reduce((t,e)=>St(e.severity)<St(t.severity)?e:t)}(this._config,this.hass,t),n=function(t,e){if(!t.battery_entity)return{level:null,isLow:!1};const i=e.states[t.battery_entity];if(!i)return{level:null,isLow:!1};const a=parseFloat(i.state);return isNaN(a)?{level:null,isLow:!1}:{level:a,isLow:a<=(t.battery_warning_level??25)}}(this._config,this.hass),l=this._config.valve_position_entity?this.hass.states[this._config.valve_position_entity]:void 0,c=l?Ut(l.state):null,d=this._config.humidity_entity?this.hass.states[this._config.humidity_entity]:void 0,
h=d?Ut(d.state):null,
q=!!this._config.window_entity&&"on"===this.hass.states[this._config.window_entity]?.state,p=s?.rawMessage??t.action(a),m=!0===this._config.show_graph&&!!this._config.graph_entity,u=this._config.hours_to_show??24,g=ft({[`action-${a}`]:!0,[`mode-${i.hvacMode}`]:!0,compact:!!this._config.compact,"has-graph":m,"has-alert":!!s}),f=void 0!==this._optimisticTarget?this._optimisticTarget:i.targetTemp,_=this._config.decimals??1,v=zt[i.hvacMode]??"mdi:thermostat",b=t.mode(i.hvacMode),y=t.ui("set_temperature"),w=ft({"mt-main-btn":!0,[`active-${"heat_cool"===i.hvacMode?"auto":i.hvacMode}`]:!0,open:"hvac"===this._activePanel}),$=ft({"mt-main-btn":!0,"active-temp":"temp"===this._activePanel,open:"temp"===this._activePanel});return I`
      <ha-card class=${g}>

        ${!1!==this._config.show_header?this._renderHeader(i,p,s):B}

      ${null!==h?I`
        <div class=${ft({
          "mt-humidity-row":!0,
          "without-header":!1===this._config.show_header
        })}>
          <ha-icon icon="mdi:water-percent"></ha-icon>
          <span>${Ot(h,0)} %rF</span>
        </div>
      `:B}

        <div class="mt-temp-center">
          <div class="mt-ist">
            ${null!==i.currentTemp
              ?Ot(i.currentTemp,_)
              :I`<span style="opacity:0.35">—</span>`}
          </div>

          <span class="mt-ist-unit">${i.unit}</span>
        </div>

        ${"none"===this._activePanel&&null!==f?I`
              <div class="mt-soll-row">
                <ha-icon icon="mdi:thermometer-chevron-up"></ha-icon>
                <span class="mt-soll-val">
                  ${r?I`<span style="opacity:0.38">${Ot(f,_)}${i.unit}</span>`:I`${Ot(f,_)}${i.unit}`}
                </span>
              </div>
            `:B}

        <div class=${ft({"mt-panel-slot":!0,open:"none"!==this._activePanel})}>
          ${"temp"===this._activePanel?o?this._renderDualSetpoint(i,t):this._renderTempControl(i,r,_,t,q):B}
          ${"hvac"===this._activePanel?this._renderModes(i,t):B}
        </div>

        <div class="mt-btn-row">
          ${!1!==this._config.show_hvac_modes&&i.availableModes.length>1?I`
                <button class=${w}
                  aria-expanded=${"hvac"===this._activePanel}
                  aria-label=${t.aria("set_mode")}
                  @click=${()=>this._togglePanel("hvac")}>
                  <ha-icon icon=${jt(v)}></ha-icon>
                  ${b}
                  <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
                </button>
              `:B}

          <button class=${$}
            aria-expanded=${"temp"===this._activePanel}
            aria-label=${t.aria("increase")}
            @click=${()=>this._togglePanel("temp")}>
            <ha-icon icon="mdi:thermometer-plus"></ha-icon>
            ${y}
            <ha-icon class="mt-btn-chevron" icon="mdi:chevron-down"></ha-icon>
          </button>
        </div>

        

      ${null!==c||null!==n.level||(this._config.sensors?.length??0)>0
        ?this._renderStatusBar(h,c,n)
        :B}

      </ha-card>

      ${m?this._renderGraph(u,a):B}
    `}_renderHeader(t,e,i){const a=this._config.icon??zt[t.hvacMode]??"mdi:thermometer",r=ft({"mt-status":!0,"alert-error":"critical"===i?.severity||"error"===i?.severity,"alert-warning":"warning"===i?.severity,"alert-info":"info"===i?.severity,"window-open":"window_open"===i?.messageKey}),o=i?.icon??null;return I`
      <div class="mt-header">
        <div class="mt-header-icon">
          <ha-icon icon=${jt(a)}></ha-icon>
        </div>

        <div class="mt-header-text">
          <div class="mt-name">${t.name}</div>

          <div class=${r}>
            ${o?I`<ha-icon icon=${jt(o)}></ha-icon>`:B}
            ${e}
          </div>
        </div>        
      </div>

    `}_renderTempControl(t,e,i,a,r){
  const o=void 0!==this._optimisticTarget
    ?this._optimisticTarget
    :t.targetTemp;

  return I`
    <div class=${ft({
      "mt-temp-control":true,
      "window-locked":r
    })}>

      <button
        class="mt-adj-btn"
        aria-label=${r?a.sensor("window_open"):a.aria("decrease")}
        title=${r?a.sensor("window_open"):""}
        ?disabled=${r||e||null===o||o<=t.minTemp}
        @click=${()=>{r||this._adjustTemp(-t.step,t)}}>
        <ha-icon icon="mdi:minus"></ha-icon>
      </button>

      <div class="mt-soll-display">
        <div class="mt-soll-big">
          ${null!==o
            ?I`
              ${Ot(o,i)}
              <span class="mt-soll-big-unit">${t.unit}</span>
            `
            :I`<span style="opacity:0.35">—</span>`}
        </div>

        ${r
          ?I`
            <div class="mt-window-lock-info">
              <ha-icon icon="mdi:window-open-variant"></ha-icon>
              <span>${a.sensor("window_open")}</span>
            </div>
          `
          :I`
            <div class="mt-soll-sub">
              ${a.ui("setpoint")}
            </div>
          `}
      </div>

      <button
        class="mt-adj-btn"
        aria-label=${r?a.sensor("window_open"):a.aria("increase")}
        title=${r?a.sensor("window_open"):""}
        ?disabled=${r||e||null===o||o>=t.maxTemp}
        @click=${()=>{r||this._adjustTemp(t.step,t)}}>
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
    `}_renderModes(t,e){const i=this._config.hvac_modes??{},a=t.availableModes.filter(t=>{const e=i[t];return!1!==e&&!0!==e?.hidden});return I`
      <div class="mt-modes">
        ${a.map(a=>{const r=i[a],o=r?.icon??zt[a]??"mdi:help",s=r?.name??e.mode(a),n=t.hvacMode===a;return I`
            <button
              class=${ft({"mt-mode-pill":!0,active:n})}
              data-mode=${a}
              aria-pressed=${n}
              aria-label="${e.aria("set_mode")}: ${s}"
              @click=${()=>this._setMode(a)}>
              <ha-icon icon=${jt(o)}></ha-icon>
              ${s}
            </button>
          `})}
      </div>
    `}_renderGraph(t,e){
  const i={
  type:"custom:mini-graph-card",

  entities:[
    {
      entity:this._config.graph_entity,
      name:"Temperatur",
      show_state:!0,
      show_legend_state:!1,
      show_points:!0
    }
  ],

  hours_to_show:t,
  points_per_hour:4,
  line_width:this._config.graph_line_width??2,
  decimals:1,

  hour24:!(this.hass?.language??"en")
    .toLowerCase()
    .startsWith("en-us"),

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

  if(!this._graphElement){
    this._graphElement=document.createElement(
      "mini-graph-card"
    );
  }

  if(
    this._graphConfigKey!==a &&
    "function"==typeof this._graphElement.setConfig
  ){
    this._graphElement.setConfig(i);
    this._graphConfigKey=a;
  }

  this._graphElement.hass=this.hass;

  requestAnimationFrame(()=>{
  const t=this._graphElement?.shadowRoot;

  if(!t||t.querySelector("#mt-hover-style")){
    return;
  }

  const e=document.createElement("style");

  e.id="mt-hover-style";

  e.textContent=`
    div.states {
      position: absolute !important;
      top: 10px !important;
      left: 50% !important;
      right: auto !important;

      width: max-content !important;
      max-width: calc(100% - 24px) !important;
      margin: 0 !important;

      transform: translateX(-50%) !important;

      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;

      text-align: center !important;

      opacity: 0;
      visibility: hidden;
      pointer-events: none;

      z-index: 10;

      transition:
        opacity 120ms ease,
        visibility 120ms ease;
    }

    ha-card:has(.line--point:hover) div.states {
      opacity: 1;
      visibility: visible;
    }

    div.state {
      justify-content: center !important;
      align-items: center !important;
      text-align: center !important;
      margin: 0 auto !important;
    }

    div.state__value {
      text-align: center !important;
      margin: 0 auto !important;
    }

    div.state__time {
      display: block !important;
      text-align: center !important;
      margin: 2px auto 0 !important;
    }

    div.states--secondary {
      margin: 0 auto !important;
      text-align: center !important;
    }
  `;

  t.appendChild(e);
});

  const r=ft({
    "mt-graph-wrapper":!0,
    "action-heating":"heating"===e,
    "action-cooling":"cooling"===e
  });

  return I`
    <div class=${r}>
      ${this._graphElement}
    </div>
  `
}

_renderStatusBar(t,e,i){
  const a=this._config.sensors??[];

  return I`

      <div class="mt-status-bar">        
        ${null!==e&&!1!==this._config.show_valve_position?I`<div class="mt-stat"><ha-icon icon=${r=e,null===r?"mdi:valve":0===r?"mdi:valve-closed":r>=100?"mdi:valve-open":"mdi:valve"}></ha-icon><span class="mt-stat-val">${e}%</span></div>`:B}
        ${null!==i.level?I`
              <div class=${ft({"mt-stat":!0,"battery-low":i.isLow})}>
                <ha-icon icon=${i.isLow?"mdi:battery-alert":"mdi:battery"}></ha-icon>
                <span class="mt-stat-val">${i.level}%</span>
              </div>
            `:B}
        ${a.map(t=>{const e=this.hass?.states[t.entity];if(!e)return B;const i=e.state,a=t.unit??e.attributes.unit_of_measurement??"",r=t.icon??e.attributes.icon??"mdi:information-outline",o=t.decimals,s=void 0===o||isNaN(Number(i))?i:Number(i).toFixed(o);return I`
            <div class="mt-stat" title=${t.name??""}>
              <ha-icon icon=${jt(r)}></ha-icon>
              <span class="mt-stat-val">${s}${a}</span>
            </div>
          `})}
      </div>
    `;var r}_adjustTemp(t,e){
  if(
    this._config.window_entity&&
    "on"===this.hass.states[this._config.window_entity]?.state
  )return;

  const i=void 0!==this._optimisticTarget
    ?this._optimisticTarget
    :e.targetTemp;

  if(null===i)return;

  const a=Nt(
    Ht(i+t,e.step),
    e.minTemp,
    e.maxTemp
  );

  this._optimisticTarget=a;
  this._clearOptimisticTimer();

  this._optimisticTimer=setTimeout(()=>{
    this._optimisticTarget=void 0
  },5e3);

  this.hass.callService(
    "climate",
    "set_temperature",
    {
      entity_id:this._config.entity,
      temperature:a
    }
  )
}

_adjustDual(t,e,i){
  if(
    this._config.window_entity&&
    "on"===this.hass.states[this._config.window_entity]?.state
  )return;

  const a=void 0!==this._optimisticHigh
    ?this._optimisticHigh
    :i.targetTempHigh;

  const r=void 0!==this._optimisticLow
    ?this._optimisticLow
    :i.targetTempLow;

  if(null===a||null===r)return;

  let o=a,s=r;

  "high"===t
    ?o=Nt(Ht(a+e,i.step),r+i.step,i.maxTemp)
    :s=Nt(Ht(r+e,i.step),i.minTemp,a-i.step);

  this._optimisticHigh=o;
  this._optimisticLow=s;
  this._clearOptimisticTimer();

  this._optimisticTimer=setTimeout(()=>{
    this._optimisticHigh=void 0;
    this._optimisticLow=void 0
  },5e3);

  this.hass.callService(
    "climate",
    "set_temperature",
    {
      entity_id:this._config.entity,
      target_temp_high:o,
      target_temp_low:s
    }
  )
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
};

Lt.styles=_t,
t([pt({attribute:!1})],Lt.prototype,"hass",void 0),
t([mt()],Lt.prototype,"_config",void 0),
t([mt()],Lt.prototype,"_error",void 0),
t([mt()],Lt.prototype,"_optimisticTarget",void 0),
t([mt()],Lt.prototype,"_optimisticHigh",void 0),
t([mt()],Lt.prototype,"_optimisticLow",void 0),
t([mt()],Lt.prototype,"_activePanel",void 0),
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
        <ha-formfield label="HVAC-Modi anzeigen">
          <ha-switch .checked=${!1!==t.show_hvac_modes} @change=${t=>this._set("show_hvac_modes",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Header anzeigen">
          <ha-switch .checked=${!1!==t.show_header} @change=${t=>this._set("show_header",t.target.checked)}></ha-switch>
        </ha-formfield>
        <ha-formfield label="Compact Mode">
          <ha-switch .checked=${!0===t.compact} @change=${t=>this._set("compact",t.target.checked)}></ha-switch>
        </ha-formfield>

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

        <div class="section-title">Trendanzeige</div>

<ha-formfield label="Trend anzeigen">
  <ha-switch
    .checked=${!0===t.show_graph}
    @change=${e=>this._set("show_graph",e.target.checked)}>
  </ha-switch>
</ha-formfield>

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
    ha-formfield { display: flex; align-items: center; }
    .divider { height: 1px; background: var(--divider-color); }
  `,t([pt({attribute:!1})],Rt.prototype,"hass",void 0),t([mt()],Rt.prototype,"_config",void 0),Rt=t([ct("modern-thermostat-editor")],Rt);var Vt=Object.freeze({__proto__:null,get ModernThermostatEditor(){return Rt}});export{Lt as ModernThermostat};

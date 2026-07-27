"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[5186],{8032(e,t,i){i.d(t,{UltraNativeCardModule:()=>m});var a=i(5183),n=i(8791),o=i(3721),r=i(1874),c=i(1001),s=i(382);const d=new Map,l=new Map,p=new Map,g=new Map,y=new Map,f=new Map;class m extends o.m{constructor(){super(...arguments),this.metadata={type:"native_card",title:"Native HA Card",description:"Native Home Assistant card",author:"Home Assistant",version:"1.0.0",icon:"mdi:home-assistant",category:"content",tags:["native","home-assistant","card"]}}createDefault(){return{id:`native-card-${Date.now()}`,type:"native_card",name:"Native Card",card_type:"hui-entities-card",card_config:{type:"entities",entities:[]},display_conditions:[]}}_attachContainerEventListeners(e){if(e.hasAttribute("data-uc-events-attached"))return;e.setAttribute("data-uc-events-attached","true");const t=e=>{e.stopPropagation()};e.addEventListener("keydown",t,!1),e.addEventListener("keyup",t,!1),e.addEventListener("keypress",t,!1),e.addEventListener("input",t,!1),e.addEventListener("change",t,!1),e.addEventListener("focus",t,!1),e.addEventListener("blur",t,!1),e.addEventListener("click",t,!1),e.addEventListener("mousedown",t,!1),e.addEventListener("mouseup",t,!1),e.addEventListener("pointerdown",t,!1),e.addEventListener("pointerup",t,!1)}renderGeneralTab(e,t,i,o){const c=r.e.getNativeCardInfo(e.card_type),s=(null==c?void 0:c.name)||e.name||"Native Card";return a.qy`
      <div class="native-card-general-tab">
        <div class="settings-section">
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--primary-color); text-transform: uppercase;"
          >
            ${s.toUpperCase()} SETTINGS
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
          >
            Configure this native Home Assistant card using its built-in editor.
          </div>
          <div class="native-editor-container" ${(0,n.K)(i=>{if(!i||!e.card_type)return;const a=`${e.id}-editor`;let n=d.get(a);const c=!n,s=n&&!i.contains(n);c?(async()=>{try{const c=r.e.elementNameToConfigType(e.card_type),s=`${e.card_type}-editor`;console.log("[UC Native Card] Creating editor for:",e.card_type,"config type:",c,"editor element:",s);let m,u=!1,v=null;try{if(customElements.get(s))console.log("[UC Native Card] Editor class found, creating directly:",s),v=document.createElement(s),u=!0;else{const t=customElements.get(e.card_type);if(t&&"function"==typeof t.getConfigElement){console.log("[UC Native Card] Getting config element from card class");const e=await Promise.resolve(t.getConfigElement());!e||e instanceof HTMLUnknownElement?console.log("[UC Native Card] getConfigElement returned invalid result:",e):(v=e,u=!0,console.log("[UC Native Card] Got direct editor from getConfigElement:",e.tagName))}}}catch(e){console.log("[UC Native Card] Could not get direct editor, falling back to wrapper:",e)}if((!v||v instanceof HTMLUnknownElement)&&(console.log("[UC Native Card] Using hui-card-element-editor wrapper"),v=document.createElement("hui-card-element-editor"),u=!1),n=v,n._ucIsDirectEditor=u,!n||n instanceof HTMLUnknownElement)return console.warn("[UC Native Card] No valid editor available"),d.delete(a),void(i.innerHTML='\n                <div style="padding: 40px; text-align: center; color: var(--secondary-text-color);">\n                  <ha-icon icon="mdi:information-outline" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n                  <p style="font-size: 14px; margin-bottom: 8px;">This card does not have a visual editor.</p>\n                  <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n                </div>\n              ');let h=null;n.addEventListener("config-changed",i=>{i.stopPropagation(),i.stopImmediatePropagation();const a=i;if(a.detail&&a.detail.config){const i=Object.assign({},a.detail.config);!i.type&&e.card_type&&(i.type=r.e.elementNameToConfigType(e.card_type));const n=JSON.stringify(i);if(p.get(e.id)===n)return;if(n===JSON.stringify(e.card_config||{}))return;p.set(e.id,n),h=Object.assign({},i),m&&clearTimeout(m),l.set(e.id,!0),m=window.setTimeout(()=>{h&&(function(e,t,i,a){const n=Object.assign({},i);n.type||(n.type=r.e.elementNameToConfigType(t)),["live","ha-preview","dashboard"].forEach(i=>{const o=`${e}-preview-${i}`;let r=g.get(o);if(!r&&"dashboard"===i){const t=`${e}-preview`;r=g.get(t),r&&(g.set(o,r),g.delete(t))}if(r)try{if(r.hass=a,r.isConnected)if("function"==typeof r.setConfig)try{r.setConfig(n)}catch(e){r.config=n}else r.config=n;else if(r.config=n,"function"==typeof r.setConfig)try{r.setConfig(n)}catch(e){}y.set(o,n),r.isConnected?f.delete(o):f.set(o,!0)}catch(e){y.delete(o),f.set(o,!0),console.warn(`[UC Native Card] Failed to update card instance for ${i}:`,e)}else{if("dashboard"===i)try{console.log(`[UC Native Card] Searching DOM for dashboard card: ${t}`);const e=document.querySelectorAll("ultra-card");for(const i of Array.from(e)){const e=i.querySelectorAll(t);for(const i of Array.from(e))try{if(i.hass=a,"function"==typeof i.setConfig)try{i.setConfig(n),console.log("[UC Native Card] Updated dashboard card via setConfig:",t)}catch(e){i.config=n,console.log("[UC Native Card] Updated dashboard card via config property:",t)}else i.config=n,console.log("[UC Native Card] Updated dashboard card via config property:",t);g.set(o,i),y.set(o,n);break}catch(e){console.warn("[UC Native Card] Failed to update card in DOM:",e)}if(g.has(o))break}g.has(o)||console.warn(`[UC Native Card] Could not find dashboard card in DOM: ${t}`)}catch(e){console.warn("[UC Native Card] DOM search failed:",e)}g.has(o)||(y.delete(o),f.delete(o))}})}(e.id,e.card_type,h,t),o({card_config:h}),h=null,setTimeout(()=>this.triggerPreviewUpdate(),50)),m=void 0,setTimeout(()=>{l.set(e.id,!1)},200)},600)}}),d.set(a,n),i.innerHTML="",i.appendChild(n),this._attachContainerEventListeners(i);const C=async()=>{await new Promise(e=>requestAnimationFrame(e));const i=n._ucIsDirectEditor;t&&(n.hass=t),t.lovelace&&(n.lovelace=t.lovelace),await new Promise(e=>setTimeout(e,50));const a=Object.assign({},e.card_config||{});if(a.type||(a.type=r.e.elementNameToConfigType(e.card_type)),console.log("[UC Native Card] Setting initial editor config (direct:",i,"):",a),i){const e=Object.assign({},a);e.entities||"entities"!==a.type&&"calendar"!==a.type||(e.entities=[]),!e.entity&&a.type;try{"function"==typeof n.setConfig?(n.setConfig(e),console.log("[UC Native Card] Direct editor setConfig succeeded with config:",e)):console.warn("[UC Native Card] Direct editor has no setConfig method")}catch(e){console.log("[UC Native Card] Direct editor setConfig error:",e.message);try{n.setConfig(a)}catch(e){console.log("[UC Native Card] Fallback setConfig also failed (expected for unconfigured cards)")}}}else{const e=Object.assign({},a);e.entities||"entities"!==a.type&&"calendar"!==a.type||(e.entities=[]),n.value=e,console.log("[UC Native Card] Set wrapper value:",e),setTimeout(()=>{const t=n;t&&(t.querySelector(":not(ha-code-editor)")||(console.log("[UC Native Card] Editor may be in YAML mode, retrying..."),t.value=Object.assign({},e)))},200)}};C();const b=e.card_config||{};if(Object.keys(b).length<=1)try{const i=customElements.get(e.card_type);i&&"function"==typeof i.getStubConfig&&Promise.resolve(i.getStubConfig(t)).then(e=>{e&&"object"==typeof e&&(console.log("[UC Native Card] Got stub config from card:",e),o({card_config:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))}).catch(e=>{console.log("[UC Native Card] Failed to get stub config:",e)})}catch(e){console.log("[UC Native Card] Error getting stub config:",e)}return}catch(e){return console.error("[UC Native Card] Failed to create editor:",e),d.delete(a),void(i.innerHTML='\n            <div style="padding: 40px; text-align: center; color: var(--error-color);">\n              <ha-icon icon="mdi:alert-circle" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n              <p style="font-size: 14px; margin-bottom: 8px;">Failed to load editor</p>\n              <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n            </div>\n          ')}})():(s&&n&&(i.innerHTML="",i.appendChild(n),this._attachContainerEventListeners(i)),l.get(e.id)||n&&((i,a)=>{try{const n=a.contains(i),o=i._ucIsDirectEditor;t.lovelace&&(i.lovelace=t.lovelace);const c=Object.assign({},e.card_config||{});c.type||(c.type=r.e.elementNameToConfigType(e.card_type));const s=o?i.config||i._config||{}:i.value||{},d=JSON.stringify(s)!==JSON.stringify(c),p=l.get(e.id);if(i.hass=t,!p&&(!n||d)){l.set(e.id,!0);try{if(o){const e=Object.assign({},c);if(e.entities||"entities"!==c.type&&"calendar"!==c.type||(e.entities=[]),"function"==typeof i.setConfig)try{i.setConfig(e)}catch(e){console.log("[UC Native Card] setConfig error (expected):",e.message)}}else{const e=Object.assign({},c);e.entities||"entities"!==c.type&&"calendar"!==c.type||(e.entities=[]),i.value=e}}finally{setTimeout(()=>l.set(e.id,!1),100)}}}catch(e){console.error("[UC Native Card] Failed to update editor properties:",e)}})(n,i))})}></div>
        </div>
      </div>
    `}renderPreview(e,t,i,o){const c=o||"dashboard",s=`${e.id}-preview-${c}`,d=this.getHoverEffectClass(e),l=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(a.qy`
      <div class="native-card-preview ${d}" style="${l}" ${(0,n.K)(i=>{if(!i||!e.card_type)return;let a=g.get(s);if(!a||a.tagName&&a.tagName.toLowerCase()===e.card_type.toLowerCase()||(console.warn("[UC Native Card] Cached card element is invalid, recreating"),g.delete(s),y.delete(s),a=void 0),a&&a.isConnected,a&&i.contains(a))try{a.hass=t;const i=Object.assign({},e.card_config||{});i.type||(i.type=r.e.elementNameToConfigType(e.card_type));const n=y.get(s),o=f.get(s),c=a.config||{};y.set(s,i);const d=n&&JSON.stringify(n)===JSON.stringify(i);if(JSON.stringify(c)!==JSON.stringify(i)&&!d||o){f.delete(s);try{"function"==typeof a.setConfig?a.setConfig(i):a.config=i}catch(e){console.warn("[UC Native Card] setConfig failed (non-critical):",e)}}else f.delete(s)}catch(e){console.error("[UC Native Card] Failed to update card:",e)}else{if(a)try{if(a.parentElement&&a.parentElement!==i&&a.parentElement.removeChild(a),!i.contains(a)){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(a)}a.hass=t;const n=Object.assign({},e.card_config||{});n.type||(n.type=r.e.elementNameToConfigType(e.card_type));try{"function"==typeof a.setConfig?a.setConfig(n):a.config=n,y.set(s,n),f.delete(s)}catch(e){console.warn("[UC Native Card] setConfig failed on remount:",e)}return}catch(e){console.error("[UC Native Card] Failed to remount card:",e)}if(!a)try{if(a=document.createElement(e.card_type),a instanceof HTMLUnknownElement)return void(i.innerHTML=`\n              <div style="padding: 16px; text-align: center; color: var(--error-color);">\n                <ha-icon icon="mdi:alert-circle"></ha-icon>\n                <p>Card not found: ${e.card_type}</p>\n              </div>\n            `);g.set(s,a)}catch(e){return console.error("[UC Native Card] Failed to create card:",e),void(i.innerHTML='\n            <div style="padding: 16px; text-align: center; color: var(--error-color);">\n              <ha-icon icon="mdi:alert-circle"></ha-icon>\n              <p>Failed to load card</p>\n            </div>\n          ')}for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(a);try{a.hass=t;const n=Object.assign({},e.card_config||{});n.type||(n.type=r.e.elementNameToConfigType(e.card_type));try{"function"==typeof a.setConfig?a.setConfig(n):a.config=n,y.set(s,n),f.delete(s)}catch(e){return console.error("[UC Native Card] Error setting card config:",e),void(i.innerHTML=`\n            <div style="padding: 16px; text-align: center; color: var(--error-color);">\n              <ha-icon icon="mdi:alert-circle"></ha-icon>\n              <p>Card configuration error</p>\n              <small>${e instanceof Error?e.message:"Unknown error"}</small>\n            </div>\n          `)}}catch(e){console.error("[UC Native Card] Failed to initialize card:",e)}}})}></div>
    `,e,t)}renderYamlTab(e,t,i,n){const o=s.Ay.dump(e.card_config||{});return a.qy`
      <div class="native-card-yaml-tab">
        <div class="settings-section">
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--primary-color);"
          >
            CARD CONFIGURATION (YAML)
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
          >
            Edit the card's configuration directly in YAML format. Changes are applied automatically.
          </div>
          <ultra-template-editor
            .value=${o}
            .hass=${t}
            .label=${"Card Configuration"}
            .mode=${"yaml"}
            @value-changed=${e=>{e.stopPropagation();try{const t=s.Ay.load(e.detail.value);n({card_config:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}catch(e){console.error("[UC Native Card] Invalid YAML:",e)}}}
          ></ultra-template-editor>
        </div>
      </div>
    `}static get styles(){return a.AH`
      /* Stacking context above UC navbar so built-in HA popups (date picker, etc.) show on top */
      .native-card-preview {
        width: 100%;
        min-height: 100px;
        display: block;
        position: relative;
        z-index: ${c.Mu.NATIVE_CARD_ABOVE_NAV};
      }
      
      .native-card-preview > * {
        display: block;
        width: 100%;
      }

      .native-card-general-tab,
      .native-card-yaml-tab {
        width: 100%;
        padding: 16px;
        overflow: visible;
        position: relative;
      }

      .native-card-general-tab .settings-section {
        overflow: visible;
        position: relative;
      }

      .native-editor-container {
        min-height: 200px;
        width: 100%;
        overflow: visible;
        position: relative;
      }
      
      /* Ensure native card editor dropdowns render above other content */
      .native-editor-container ha-select,
      .native-editor-container mwc-select,
      .native-editor-container ha-combo-box,
      .native-editor-container ha-entity-picker {
        position: relative;
        z-index: 100;
      }
      
      /* Allow dropdown menus from embedded editors to render properly */
      .native-editor-container ha-select::part(menu),
      .native-editor-container mwc-select::part(menu),
      .native-editor-container .mdc-menu-surface,
      .native-editor-container mwc-menu-surface,
      .native-editor-container mwc-menu {
        z-index: 9999 !important;
        position: fixed !important;
      }

      .settings-section {
        margin-bottom: 24px;
      }
    `}}},1874(e,t,i){i.d(t,{e:()=>a});const a=new class{getAvailableNativeCards(){return[{type:"hui-activity-card",name:"Activity",description:"Shows a list of events for entities"},{type:"hui-alarm-panel-card",name:"Alarm Panel",description:"Control alarm panel entities"},{type:"hui-area-card",name:"Area",description:"Display area information and controls"},{type:"hui-button-card",name:"Button",description:"Simple button for entity control"},{type:"hui-calendar-card",name:"Calendar",description:"Display calendar events"},{type:"hui-clock-card",name:"Clock",description:"Display a clock"},{type:"hui-conditional-card",name:"Conditional",description:"Show cards based on conditions"},{type:"hui-entities-card",name:"Entities",description:"List multiple entities"},{type:"hui-entity-card",name:"Entity",description:"Display single entity"},{type:"hui-entity-filter-card",name:"Entity Filter",description:"Filter entities based on state"},{type:"hui-gauge-card",name:"Gauge",description:"Display value as gauge"},{type:"hui-glance-card",name:"Glance",description:"Quick overview of entities"},{type:"hui-grid-card",name:"Grid",description:"Display cards in grid layout"},{type:"hui-heading-card",name:"Heading",description:"Display heading text"},{type:"hui-history-graph-card",name:"History Graph",description:"Display historical data"},{type:"hui-horizontal-stack-card",name:"Horizontal Stack",description:"Stack cards horizontally"},{type:"hui-humidifier-card",name:"Humidifier",description:"Control humidifier entities"},{type:"hui-light-card",name:"Light",description:"Control light entities"},{type:"hui-map-card",name:"Map",description:"Display map with device trackers"},{type:"hui-markdown-card",name:"Markdown",description:"Display markdown content"},{type:"hui-media-control-card",name:"Media Control",description:"Control media player entities"},{type:"hui-picture-card",name:"Picture",description:"Display static image"},{type:"hui-picture-elements-card",name:"Picture Elements",description:"Interactive image with elements"},{type:"hui-picture-entity-card",name:"Picture Entity",description:"Display entity with image"},{type:"hui-picture-glance-card",name:"Picture Glance",description:"Glance card with image"},{type:"hui-plant-status-card",name:"Plant Status",description:"Display plant information"},{type:"hui-sensor-card",name:"Sensor",description:"Display sensor entity"},{type:"hui-statistic-card",name:"Statistic",description:"Display statistic data"},{type:"hui-statistics-graph-card",name:"Statistics Graph",description:"Display statistical graph"},{type:"hui-thermostat-card",name:"Thermostat",description:"Control thermostat entities"},{type:"hui-tile-card",name:"Tile",description:"Modern tile card for entities"},{type:"hui-todo-list-card",name:"To-do List",description:"Manage to-do list items"},{type:"hui-vertical-stack-card",name:"Vertical Stack",description:"Stack cards vertically"},{type:"hui-weather-forecast-card",name:"Weather Forecast",description:"Display weather forecast"},{type:"hui-webpage-card",name:"Webpage",description:"Embed a webpage"}]}isNativeCard(e){return!!e&&e.startsWith("hui-")}getNativeCardInfo(e){return this.getAvailableNativeCards().find(t=>t.type===e)||null}elementNameToConfigType(e){if(!e||!e.startsWith("hui-"))return e;let t=e.substring(4);return t.endsWith("-card")&&(t=t.substring(0,t.length-5)),t}configTypeToElementName(e){return!e||e.startsWith("hui-")?e:`hui-${e}-card`}}}}]);
"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[5265],{527(e,t,i){i.d(t,{UltraBarModule:()=>x});var a=i(5183),n=i(8791),r=i(3721),o=i(5147),l=i(8938),s=i(9957),d=(i(7921),i(7203)),c=(i(9442),i(4276)),p=i(5096),m=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let g=class extends a.WF{constructor(){super(...arguments),this.tapAction={action:"nothing"},this.holdAction={action:"nothing"},this.doubleTapAction={action:"nothing"},this._tapAction={action:"nothing"},this._holdAction={action:"nothing"},this._doubleTapAction={action:"nothing"}}willUpdate(e){e.has("tapAction")&&(this._tapAction=this.tapAction||{action:"nothing"}),e.has("holdAction")&&(this._holdAction=this.holdAction||{action:"nothing"}),e.has("doubleTapAction")&&(this._doubleTapAction=this.doubleTapAction||{action:"nothing"})}_fireUpdate(e){this.dispatchEvent(new CustomEvent("actions-changed",{detail:{side:this.side,updates:e},bubbles:!0,composed:!0}))}_handleTapActionChanged(e){e.stopPropagation();const t=`${this.side}_tap_action`,i=e.detail.value[t];this._tapAction=i,this.requestUpdate(),this._fireUpdate({[`${this.side}_tap_action`]:i})}_handleHoldActionChanged(e){e.stopPropagation();const t=`${this.side}_hold_action`,i=e.detail.value[t];this._holdAction=i,this.requestUpdate(),this._fireUpdate({[`${this.side}_hold_action`]:i})}_handleDoubleTapActionChanged(e){e.stopPropagation();const t=`${this.side}_double_tap_action`,i=e.detail.value[t];this._doubleTapAction=i,this.requestUpdate(),this._fireUpdate({[`${this.side}_double_tap_action`]:i})}render(){var e;if(!this.hass)return a.qy``;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en",i="left"===this.side?"left":"right",n=`${this.side}_tap_action`,r=`${this.side}_hold_action`,o=`${this.side}_double_tap_action`;return a.qy`
      <div class="section-title">
        ${(0,p.kg)(`editor.bar.${i}.actions`,t,("left"===this.side?"Left":"Right")+" Side Actions")}
      </div>
      <div class="section-description">
        ${(0,p.kg)(`editor.bar.${i}.actions_desc`,t,`Configure what happens when tapping the ${this.side} side info`)}
      </div>

      <div class="action-field">
        <ha-form
          .hass=${this.hass}
          .data=${{[n]:this._tapAction}}
          .schema=${[{name:n,selector:{ui_action:{}}}]}
          .computeLabel=${()=>this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")}
          @value-changed=${this._handleTapActionChanged}
        ></ha-form>
      </div>

      <div class="action-field">
        <ha-form
          .hass=${this.hass}
          .data=${{[r]:this._holdAction}}
          .schema=${[{name:r,selector:{ui_action:{}}}]}
          .computeLabel=${()=>this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")}
          @value-changed=${this._handleHoldActionChanged}
        ></ha-form>
      </div>

      <div class="action-field">
        <ha-form
          .hass=${this.hass}
          .data=${{[o]:this._doubleTapAction}}
          .schema=${[{name:o,selector:{ui_action:{}}}]}
          .computeLabel=${()=>this.hass.localize("ui.panel.lovelace.editor.card.generic.double_tap_action")}
          @value-changed=${this._handleDoubleTapActionChanged}
        ></ha-form>
      </div>
    `}};g.styles=a.AH`
    :host {
      display: block;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--primary-color);
    }

    .section-description {
      font-size: 12px;
      margin-bottom: 12px;
      color: var(--secondary-text-color);
    }

    .action-field {
      margin-bottom: 12px;
    }

    .action-field:last-child {
      margin-bottom: 0;
    }
  `,m([(0,c.MZ)({attribute:!1})],g.prototype,"hass",void 0),m([(0,c.MZ)({attribute:!1})],g.prototype,"side",void 0),m([(0,c.MZ)({attribute:!1})],g.prototype,"tapAction",void 0),m([(0,c.MZ)({attribute:!1})],g.prototype,"holdAction",void 0),m([(0,c.MZ)({attribute:!1})],g.prototype,"doubleTapAction",void 0),m([(0,c.wk)()],g.prototype,"_tapAction",void 0),m([(0,c.wk)()],g.prototype,"_holdAction",void 0),m([(0,c.wk)()],g.prototype,"_doubleTapAction",void 0),g=m([(0,c.EM)("bar-side-actions")],g);var b=i(9760),_=i(5320),u=i(9327),h=i(5121),f=i(5155),v=i(6045),y=i(235);class x extends r.m{constructor(){super(...arguments),this.metadata={type:"bar",title:"Bars",description:"Progress bars for values",author:"WJD Designs",version:"1.0.0",icon:"mdi:chart-bar",category:"data",tags:["bar","progress","chart","value","sensor"]},this._templateInputDebounce=null,this._timeProgressInterval=null,this._timeProgressCleanup=null,this._scaleClampObservers=new WeakMap,this._scaleClampTimers=new WeakMap}normalizeBoolean(e,t){if(null==e)return t;if("boolean"==typeof e)return e;if("string"==typeof e){const t=e.trim().toLowerCase();if("true"===t)return!0;if("false"===t)return!1}return Boolean(e)}applyScaleEdgeLabelClamping(e){const t=Array.from(e.querySelectorAll('.bar-scale[data-clamp-edge-labels="true"]')),i=(e,t)=>e.left<t.right&&e.right>t.left,a=document.createElement("canvas").getContext("2d"),n=e=>{const t=(e.style.transform||"").match(/translateX\((-?\d+(?:\.\d+)?)px\)/);if(!t)return 0;const i=parseFloat(t[1]);return Number.isNaN(i)?0:i},r=(e,t)=>{const i=(e.textContent||"").trim();if(!i||!a)return 0;const n="start"===t?i.charAt(0):i.charAt(i.length-1);if(!n)return 0;const r=window.getComputedStyle(e);a.font=`${r.fontStyle} ${r.fontVariant} ${r.fontWeight} ${r.fontSize}/${r.lineHeight} ${r.fontFamily}`;const o=a.measureText(n).width;return Number.isFinite(o)&&o>0?o/2:0},o=(e,t)=>{e.style.transform=0===t?"translateX(0)":`translateX(${Math.round(t)}px)`},l=(e,t)=>(o(e,t),e.getBoundingClientRect()),s=(e,t)=>{const i=Math.max(e.left,t.left),a=Math.max(e.top,t.top),n=Math.min(e.right,t.right),r=Math.min(e.bottom,t.bottom);return n<=i||r<=a?e:Object.assign(Object.assign({},e),{left:i,top:a,right:n,bottom:r,width:n-i,height:r-a,x:i,y:a,toJSON:e.toJSON.bind(e)})};t.forEach(e=>{const t=e.getBoundingClientRect();if(!t.width)return;let a=t,d=e.parentNode,c=0;for(;d&&c<24;){if(d instanceof HTMLElement){const e=window.getComputedStyle(d),t=e.overflowX||e.overflow,i=e.overflowY||e.overflow;if((["hidden","clip","auto","scroll"].includes(t)||["hidden","clip","auto","scroll"].includes(i))&&(a=s(a,d.getBoundingClientRect())),d.classList.contains("uc-module-wrap"))break;d=d.parentNode}else d=d instanceof ShadowRoot?d.host:d.parentNode;c+=1}Array.from(e.querySelectorAll(".scale-label")).forEach(e=>{e.style.display="",e.style.transform="translateX(0)"}),Array.from(e.querySelectorAll(".scale-label.edge-start, .scale-label.edge-end")).forEach(e=>{o(e,0);const t=e.getBoundingClientRect(),i=a.left-t.left,n=t.right-a.right;let l=0;const s=e.classList.contains("edge-start")?r(e,"start"):0,d=e.classList.contains("edge-end")?r(e,"end"):0;if(i>0){const e=i-s;e>0&&(l+=e+.5)}if(n>0){const e=n-d;e>0&&(l-=e+.5)}Math.abs(l)>=.5&&o(e,l)});const p=e.querySelector(".scale-label.edge-start"),m=e.querySelector(".scale-label.edge-end"),g=t=>e.querySelector(`.scale-label[data-scale-index="${t}"]`);if(p){const e=g(Number(p.dataset.scaleIndex||"0")+1);if(e&&"none"!==e.style.display){const t=e.getBoundingClientRect(),a=n(p),r=l(p,a);i(r,t)&&(e.style.display="none")}}if(m){const e=g(Number(m.dataset.scaleIndex||"0")-1);if(e&&"none"!==e.style.display){const t=e.getBoundingClientRect(),a=n(m),r=l(m,a);i(r,t)&&(e.style.display="none")}}})}resolveActiveClampRoot(e){const t=e=>!!e&&"function"==typeof e.querySelectorAll&&e.querySelectorAll('.bar-scale[data-clamp-edge-labels="true"]').length>0;if(t(e))return e;let i=e,a=0;for(;i&&a<24;){if(i instanceof ShadowRoot){if(t(i))return i.host;i=i.host}else if(i instanceof HTMLElement){if(t(i))return i;i=i.parentNode}else i=i.parentNode;a+=1}const n=e.getRootNode();return n instanceof ShadowRoot&&t(n)?n.host:e}scheduleScaleEdgeLabelClamping(e){const t=this._scaleClampTimers.get(e);void 0!==t&&window.clearTimeout(t);const i=this.resolveActiveClampRoot(e);requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.applyScaleEdgeLabelClamping(i)})});const a=window.setTimeout(()=>{this.applyScaleEdgeLabelClamping(i),this._scaleClampTimers.delete(e)},360);this._scaleClampTimers.set(e,a)}ensureScaleClampObserver(e){if("undefined"==typeof ResizeObserver)return;const t=this._scaleClampObservers.get(e);t&&(t.disconnect(),this._scaleClampObservers.delete(e));const i=new ResizeObserver(()=>{this.scheduleScaleEdgeLabelClamping(e)});i.observe(e),Array.from(e.querySelectorAll(".bar-scale")).forEach(e=>i.observe(e));const a=new Set;let n=e.parentNode,r=0;for(;n&&r<24;)n instanceof HTMLElement?(a.has(n)||(i.observe(n),a.add(n)),n=n.parentNode):n=n instanceof ShadowRoot?n.host:n.parentNode,r+=1;this._scaleClampObservers.set(e,i)}formatMobileScaleLabel(e){const t=String(e||"").trim();if(!t)return t;const i=t.match(/^(-?\d+(?:[.,]\d+)?)\s*(.*)$/);if(!i)return t;const a=parseFloat(i[1].replace(",","."));if(Number.isNaN(a))return t;const n=(i[2]||"").trim(),r=Math.abs(a),o=(()=>{const e=a<0?"-":"";return r>=1e6?`${e}${(r/1e6).toFixed(r>=1e7?0:1)}M`:r>=1e3?`${e}${(r/1e3).toFixed(r>=1e4?0:1)}k`:Number.isInteger(a)?`${a}`:""+Math.round(10*a)/10})();return"%"===n?`${o}%`:o}createDefault(e,t){const i=this.findSuitableBatterySensor(t);return{id:e||this.generateId("bar"),type:"bar",entity:i||"",percentage_type:"entity",percentage_entity:"",percentage_attribute_entity:"",percentage_attribute_name:"",percentage_current_entity:"",percentage_total_entity:"",time_progress_start_entity:"",time_progress_end_entity:"",time_progress_direction:"forward",time_progress_update_interval:1e3,range_start_entity:"",range_start_attribute:"",range_end_entity:"",range_end_attribute:"",range_current_entity:"",range_current_attribute:"",range_current_color:"var(--accent-color)",percentage_min:void 0,percentage_max:void 0,height:20,bar_direction:"left-to-right",bar_size:"medium",bar_radius:"round",bar_style:"flat",bar_width:100,bar_alignment:"center",border_radius:10,glass_blur_amount:8,label_alignment:"space-between",show_percentage:!0,show_value:!1,percentage_text_size:14,percentage_text_alignment:"center",percentage_text_bold:!1,percentage_text_italic:!1,percentage_text_strikethrough:!1,value_position:"inside",left_title:"",left_entity:"",left_condition_type:"none",left_condition_entity:"",left_condition_state:"",left_title_size:14,left_value_size:14,left_title_color:"",left_value_color:"",left_enabled:!1,left_tap_action:{action:"nothing"},left_hold_action:{action:"nothing"},left_double_tap_action:{action:"nothing"},right_title:"",right_entity:"",right_enabled:!1,right_condition_type:"none",right_condition_entity:"",right_condition_state:"",right_title_size:14,right_value_size:14,right_title_color:"",right_value_color:"",right_tap_action:{action:"nothing"},right_hold_action:{action:"nothing"},right_double_tap_action:{action:"nothing"},bar_color:"",bar_background_color:"",bar_border_color:"var(--divider-color)",percentage_text_color:"",dot_color:"",minimal_icon_enabled:!1,minimal_icon:"",minimal_icon_mode:"icon-in-dot",minimal_icon_size:24,minimal_icon_size_auto:!0,minimal_icon_color:"",minimal_icon_use_dot_color:!0,use_gradient:!1,gradient_display_mode:"full",gradient_stops:(0,d.FB)(),limit_entity:"",limit_color:"",show_scale:!1,scale_divisions:5,scale_show_labels:!0,scale_label_size:10,scale_label_color:"",scale_tick_color:"",scale_position:"below",scale_custom_ticks:"",scale_custom_labels:"",scale_clamp_edge_labels:!0,scale_mobile_options_enabled:!1,scale_mobile_breakpoint:420,scale_mobile_reduce_label_density:!1,scale_mobile_abbreviate_labels:!1,animation:!0,unified_template_mode:!1,unified_template:"",bar_animation_enabled:!1,bar_animation_entity:"",bar_animation_trigger_type:"state",bar_animation_attribute:"",bar_animation_value:"",bar_animation_type:"none",bar_animation_direction:"normal",bar_animation_direction_entity:"",bar_animation_direction_attribute:"",bar_animation_speed_mode:"fixed",bar_animation_speed:1,bar_animation_speed_entity:"",bar_animation_speed_attribute:"",bar_animation_speed_multiplier:1,bar_animation_override_entity:"",bar_animation_override_trigger_type:"state",bar_animation_override_attribute:"",bar_animation_override_value:"",bar_animation_override_type:"none",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderLogicTab(e,t,i,a){return l.X.render(e,t,e=>a(e))}findSuitableBatterySensor(e){if(!e||!e.states)return"";const t=["battery_level","battery","charge","power_level","fuel_level","energy"],i=["battery","energy","power"],a=["sensor","binary_sensor"],n=[];return Object.keys(e.states).forEach(r=>{const o=e.states[r],l=r.split(".")[0];if(!a.includes(l))return;if("binary_sensor"===l)return;const s=o.attributes||{},d=s.friendly_name||r,c=s.device_class,p=s.unit_of_measurement,m=parseFloat(o.state);if(isNaN(m)||m<0||m>100)return;if("unavailable"===o.state||"unknown"===o.state)return;let g=0;void 0!==c&&i.includes(c)&&(g+=100),"%"===p&&(g+=80),t.forEach(e=>{r.toLowerCase().includes(e)&&(g+=50)}),t.forEach(e=>{d.toLowerCase().includes(e)&&(g+=40)}),r.includes("battery")&&"%"===p&&(g+=60),(r.includes("phone")||r.includes("mobile")||r.includes("device"))&&(r.includes("battery")||"battery"===c)&&(g+=30),g>0&&n.push({entity:r,score:g,friendlyName:d})}),n.length>0?(n.sort((e,t)=>t.score-e.score),n[0].entity):""}renderGeneralTab(e,t,i,n){var r,o,l,s,c,m,g,b;const _=e,u=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",h=this.normalizeBoolean(_.show_percentage,!0),f=this.normalizeBoolean(_.show_value,!1),v="difference"===_.percentage_type&&_.entity&&!(null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[_.entity])?"":_.entity||"",y=[this.selectField("percentage_type",[{value:"entity",label:(0,p.kg)("editor.bar.perc_type.entity",u,"Entity (0-100)")},{value:"attribute",label:(0,p.kg)("editor.bar.perc_type.attribute",u,"Entity Attribute")},{value:"difference",label:(0,p.kg)("editor.bar.perc_type.difference",u,"Difference")},{value:"time_progress",label:(0,p.kg)("editor.bar.perc_type.time_progress",u,"Time Progress (Real-time)")},{value:"range",label:(0,p.kg)("editor.bar.perc_type.range",u,"Range (Start to End)")}])];return a.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Bar Settings (single settings-section box wraps everything below
             through to just before "Bar Appearance" so the percentage type,
             configuration sub-modes, Bar Percentage Entity, and Limit Value Entity
             are all visually contained — no floating outside-the-box items). -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.bar.bar_settings.title",u,"Bar Settings")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,p.kg)("editor.bar.bar_settings.desc",u,"Configure how the bar percentage is calculated and displayed.")}
          </div>
          <div class="field-group percentage-type-group" style="margin-bottom: 16px;">
          ${this.renderFieldSection((0,p.kg)("editor.bar.percentage_type.title",u,"Percentage Type"),(0,p.kg)("editor.bar.percentage_type.desc",u,"Choose how the bar percentage is calculated"),t,{percentage_type:_.percentage_type||"entity"},y,e=>{var i,a;const r=null===(i=e.detail.value)||void 0===i?void 0:i.percentage_type;if(void 0===r||r===_.percentage_type)return;const o={percentage_type:r};"entity"!==r&&"template"!==r&&(o.percentage_template=""),"difference"===r&&_.entity&&!(null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[_.entity])&&(o.entity=""),n(o)})}
        </div>

          <!-- Entity Attribute Fields -->
          ${"attribute"===_.percentage_type?this.renderConditionalFieldsGroup((0,p.kg)("editor.bar.attr_config.title",u,"Entity Attribute Configuration"),a.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.bar.attr_config.desc",u,"Configure entity attribute settings")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"percentage_attribute_entity",_.percentage_attribute_entity||"",e=>n({percentage_attribute_entity:e}),void 0,(0,p.kg)("editor.bar.attr_config.attribute_entity",u,"Attribute Entity"))}
                    ${this.renderFieldSection((0,p.kg)("editor.bar.attr_config.attribute_name",u,"Attribute Name"),(0,p.kg)("editor.bar.attr_config.attribute_name_desc",u,'Enter the name of the attribute that contains the percentage value (e.g., "battery_level")'),t,{percentage_attribute_name:_.percentage_attribute_name||""},[this.textField("percentage_attribute_name")],e=>n({percentage_attribute_name:e.detail.value.percentage_attribute_name}))}
                  `):""}

          <!-- Difference Fields -->
          ${"difference"===_.percentage_type?this.renderConditionalFieldsGroup((0,p.kg)("editor.bar.diff_config.title",u,"Difference Calculation Configuration"),a.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.bar.diff_config.desc",u,"Configure difference calculation settings")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"percentage_current_entity",_.percentage_current_entity||"",e=>n({percentage_current_entity:e}),void 0,(0,p.kg)("editor.bar.diff_config.current_entity",u,"Current Value Entity"))}
                    ${this.renderEntityPickerWithVariables(t,i,"percentage_total_entity",_.percentage_total_entity||"",e=>n({percentage_total_entity:e}),void 0,(0,p.kg)("editor.bar.diff_config.total_entity",u,"Total Value Entity"))}
                  `):""}

          <!-- Time Progress Fields -->
          ${"time_progress"===_.percentage_type?this.renderConditionalFieldsGroup((0,p.kg)("editor.bar.time_progress_config.title",u,"Time Progress Configuration"),a.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.bar.time_progress_config.desc",u,"Configure real-time progress between two timestamp entities. Updates smoothly in the browser without backend load.")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"time_progress_start_entity",_.time_progress_start_entity||"",e=>n({time_progress_start_entity:e}),void 0,(0,p.kg)("editor.bar.time_progress_config.start_entity",u,"Start Timestamp Entity"))}
                    ${this.renderEntityPickerWithVariables(t,i,"time_progress_end_entity",_.time_progress_end_entity||"",e=>n({time_progress_end_entity:e}),void 0,(0,p.kg)("editor.bar.time_progress_config.end_entity",u,"End Timestamp Entity"))}
                    ${this.renderSettingsSection("","",[{title:(0,p.kg)("editor.bar.time_progress_config.direction",u,"Progress Direction"),description:(0,p.kg)("editor.bar.time_progress_config.direction_desc",u,"Forward shows elapsed time from start to now. Backward shows remaining time from now to end."),hass:t,data:{time_progress_direction:_.time_progress_direction||"forward"},schema:[this.selectField("time_progress_direction",[{value:"forward",label:(0,p.kg)("editor.bar.time_progress.forward",u,"Forward (Elapsed)")},{value:"backward",label:(0,p.kg)("editor.bar.time_progress.backward",u,"Backward (Remaining)")}])],onChange:e=>n(e.detail.value)}])}
                    ${this.renderSliderField((0,p.kg)("editor.bar.time_progress_config.update_interval",u,"Update Interval (ms)"),(0,p.kg)("editor.bar.time_progress_config.update_interval_desc",u,"How often to update the progress bar in milliseconds. Default: 1000 (1 second). Lower values = smoother but more CPU usage."),_.time_progress_update_interval||1e3,1e3,100,1e4,100,e=>n({time_progress_update_interval:e}),"ms")}
                  `):""}

          <!-- Range Mode Configuration -->
          ${"range"===_.percentage_type?this.renderConditionalFieldsGroup((0,p.kg)("editor.bar.range_config.title",u,"Range Configuration"),a.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.bar.range_config.desc",u,"Configure the start and end values for the range visualization.")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"range_start_entity",_.range_start_entity||"",e=>n({range_start_entity:e}),void 0,(0,p.kg)("editor.bar.range_config.start_entity",u,"Range Start Entity"))}
                    ${this.renderFieldSection((0,p.kg)("editor.bar.range_config.start_attribute",u,"Start Attribute (Optional)"),(0,p.kg)("editor.bar.range_config.start_attribute_desc",u,"If the value is in an attribute, enter the attribute name here."),t,{range_start_attribute:_.range_start_attribute||""},[this.textField("range_start_attribute")],e=>n({range_start_attribute:e.detail.value.range_start_attribute}))}
                    ${this.renderEntityPickerWithVariables(t,i,"range_end_entity",_.range_end_entity||"",e=>n({range_end_entity:e}),void 0,(0,p.kg)("editor.bar.range_config.end_entity",u,"Range End Entity"))}
                    ${this.renderFieldSection((0,p.kg)("editor.bar.range_config.end_attribute",u,"End Attribute (Optional)"),(0,p.kg)("editor.bar.range_config.end_attribute_desc",u,"If the value is in an attribute, enter the attribute name here."),t,{range_end_attribute:_.range_end_attribute||""},[this.textField("range_end_attribute")],e=>n({range_end_attribute:e.detail.value.range_end_attribute}))}

                    <!-- Current Value Marker (Optional) -->
                    <div
                      style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px; border-left: 3px solid var(--warning-color);"
                    >
                      <div
                        style="font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"
                      >
                        <ha-icon
                          icon="mdi:map-marker"
                          style="color: var(--warning-color);"
                        ></ha-icon>
                        ${(0,p.kg)("editor.bar.range_config.current_marker_title",u,"Current Value Marker (Optional)")}
                      </div>
                      <div
                        style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;"
                      >
                        ${(0,p.kg)("editor.bar.range_config.current_marker_desc",u,"Optionally show a marker indicating the current/average value within the range.")}
                      </div>

                      <div style="margin-bottom: 16px;">
                        ${this.renderEntityPickerWithVariables(t,i,"range_current_entity",_.range_current_entity||"",e=>n({range_current_entity:e}),void 0,(0,p.kg)("editor.bar.range_config.current_entity",u,"Current Value Entity"))}
                      </div>
                      ${this.renderSettingsSection("","",[{title:(0,p.kg)("editor.bar.range_config.current_attribute",u,"Current Attribute (Optional)"),description:(0,p.kg)("editor.bar.range_config.current_attribute_desc",u,"If the value is in an attribute, enter the attribute name here."),hass:t,data:{range_current_attribute:_.range_current_attribute||""},schema:[this.textField("range_current_attribute")],onChange:e=>n({range_current_attribute:e.detail.value.range_current_attribute})}])}

                      <div style="margin-top: 16px;">
                        <div
                          style="font-size: 13px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 8px;"
                        >
                          ${(0,p.kg)("editor.bar.range_config.current_color",u,"Marker Color")}
                        </div>
                        <ultra-color-picker
                          .hass=${t}
                          .value=${_.range_current_color||"var(--accent-color)"}
                          @value-changed=${e=>n({range_current_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  `):""}

          <!-- Manual Min/Max Range Configuration -->
          ${a.qy`
                  <div
                    style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px; border-left: 3px solid var(--primary-color);"
                  >
                    <div
                      style="font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"
                    >
                      <ha-icon
                        icon="mdi:arrow-expand-horizontal"
                        style="color: var(--primary-color);"
                      ></ha-icon>
                      ${(0,p.kg)("editor.bar.range.title",u,"Value Range (Min/Max)")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;"
                    >
                      ${"difference"===_.percentage_type?(0,p.kg)("editor.bar.range.desc_difference",u,"Override the visible range. Enter values in the same unit as your entities (e.g. km). Leave blank to auto-detect from the Total Entity."):(0,p.kg)("editor.bar.range.desc",u,"Override auto-detected range with numbers. For dynamic min/max or labels, enable the unified template (value_min, value_max, left_label, right_label).")}
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                      <!-- Min Value -->
                      ${this.renderFieldSection((0,p.kg)("editor.bar.range.min",u,"Minimum"),"",t,{percentage_min:void 0!==_.percentage_min?String(_.percentage_min):""},[this.textField("percentage_min")],e=>{const t=(e.detail.value.percentage_min||"").trim();clearTimeout(this._templateInputDebounce),this._templateInputDebounce=setTimeout(()=>{if(""===t)n({percentage_min:void 0});else{let e=t;e.includes(",")&&!e.includes(".")&&(e=e.replace(",","."));const i=parseFloat(e);n({percentage_min:isNaN(i)?void 0:i})}this.triggerPreviewUpdate()},300)})}

                      <!-- Max Value -->
                      ${this.renderFieldSection((0,p.kg)("editor.bar.range.max",u,"Maximum"),"",t,{percentage_max:void 0!==_.percentage_max?String(_.percentage_max):""},[this.textField("percentage_max")],e=>{const t=(e.detail.value.percentage_max||"").trim();clearTimeout(this._templateInputDebounce),this._templateInputDebounce=setTimeout(()=>{if(""===t)n({percentage_max:void 0});else{let e=t;e.includes(",")&&!e.includes(".")&&(e=e.replace(",","."));const i=parseFloat(e);n({percentage_max:isNaN(i)?void 0:i})}this.triggerPreviewUpdate()},300)})}
                    </div>
                  </div>
                `}

          <!-- Bar Percentage Entity (shown for entity mode and as optional fallback for difference mode) -->
          ${_.percentage_type&&"entity"!==_.percentage_type&&"difference"!==_.percentage_type?"":a.qy`
                  <div style="margin-top: 24px;">
                    ${this.renderEntityPickerWithVariables(t,i,"entity",v,e=>n({entity:e}),["sensor","input_number"],"difference"===_.percentage_type?(0,p.kg)("editor.bar.entity.fallback_title",u,"Fallback Entity (optional)"):(0,p.kg)("editor.bar.entity.title",u,"Bar Percentage Entity"))}
                    ${_.entity||"difference"===_.percentage_type?a.qy`
                          <div
                            class="field-description"
                            style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);"
                          >
                            ${"difference"===_.percentage_type?(0,p.kg)("editor.bar.entity.fallback_desc",u,"Optional fallback entity for text/labels. Difference mode uses Current and Total entities for bar calculation."):(0,p.kg)("editor.bar.entity.desc_present",u,"The entity that provides the percentage value for the bar.")}
                          </div>
                        `:a.qy`
                          <div
                            style="color: var(--warning-color); font-size: 12px; margin-top: 4px; font-style: italic;"
                          >
                            <ha-icon
                              icon="mdi:information-outline"
                              style="font-size: 14px; margin-right: 4px;"
                            ></ha-icon>
                            ${(0,p.kg)("editor.bar.entity.no_entity_warning",u,"No entity selected - Please choose a sensor with values between 0-100")}
                          </div>
                        `}
                  </div>
                `}

          <!-- Limit Value Entity -->
          <div style="margin-top: 24px;">
            ${this.renderEntityPickerWithVariables(t,i,"limit_entity",_.limit_entity||"",e=>n({limit_entity:e}),void 0,(0,p.kg)("editor.bar.limit_entity.title",u,"Limit Value Entity (optional)"))}
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);"
            >
              ${(0,p.kg)("editor.bar.limit_entity.desc",u,"Optional: Add a vertical indicator line on the bar (e.g. charge limit for EV battery).")}
            </div>
          </div>
        </div>
        </div>

        <!-- Bar Appearance Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.bar.appearance.title",u,"Bar Appearance")}
          </div>

          <!-- Bar Style -->
          <div class="field-group" style="margin-bottom: 16px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 4px;"
            >
              ${(0,p.kg)("editor.bar.appearance.style",u,"Bar Style")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
            >
              ${(0,p.kg)("editor.bar.appearance.style_desc",u,"Choose the visual style of the progress bar.")}
            </div>
            ${this.renderUcForm(t,{bar_style:_.bar_style||"flat"},[this.selectField("bar_style",[{value:"flat",label:(0,p.kg)("editor.bar.appearance.style_flat",u,"Flat (Default)")},{value:"glossy",label:(0,p.kg)("editor.bar.appearance.style_glossy",u,"Glossy")},{value:"embossed",label:(0,p.kg)("editor.bar.appearance.style_embossed",u,"Embossed")},{value:"inset",label:(0,p.kg)("editor.bar.appearance.style_inset",u,"Inset")},{value:"gradient-overlay",label:(0,p.kg)("editor.bar.appearance.style_gradient",u,"Gradient Overlay")},{value:"neon-glow",label:(0,p.kg)("editor.bar.appearance.style_neon",u,"Neon Glow")},{value:"outline",label:(0,p.kg)("editor.bar.appearance.style_outline",u,"Outline")},{value:"glass",label:(0,p.kg)("editor.bar.appearance.style_glass",u,"Glass")},{value:"metallic",label:(0,p.kg)("editor.bar.appearance.style_metallic",u,"Metallic")},{value:"neumorphic",label:(0,p.kg)("editor.bar.appearance.style_neumorphic",u,"Neumorphic")},{value:"dashed",label:(0,p.kg)("editor.bar.appearance.style_dashed",u,"Dashed")},{value:"dots",label:(0,p.kg)("editor.bar.appearance.style_dots",u,"Dots")},{value:"minimal",label:(0,p.kg)("editor.bar.appearance.style_minimal",u,"Minimal")}])],e=>{const t=e.detail.value.bar_style;t!==(_.bar_style||"flat")&&(n({bar_style:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
          </div>

          <!-- Bar Fill Direction -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important;"
            >
              ${(0,p.kg)("editor.bar.appearance.direction",u,"Fill Direction")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
            >
              ${(0,p.kg)("editor.bar.appearance.direction_desc",u,"Choose which direction the bar fills from as the value increases.")}
            </div>
            <div
              style="display: flex; gap: 8px; justify-content: flex-start; flex-wrap: wrap;"
            >
              <button
                type="button"
                style="padding: 8px 12px; border: 2px solid ${"left-to-right"===(_.bar_direction||"left-to-right")?"var(--primary-color)":"var(--divider-color)"}; background: ${"left-to-right"===(_.bar_direction||"left-to-right")?"var(--primary-color)":"transparent"}; color: ${"left-to-right"===(_.bar_direction||"left-to-right")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                @click=${()=>n({bar_direction:"left-to-right"})}
              >
                <ha-icon
                  icon="mdi:arrow-right"
                  style="font-size: 16px; flex-shrink: 0;"
                ></ha-icon>
                <span
                  style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                  >${(0,p.kg)("editor.bar.appearance.left_to_right",u,"Left to Right")}</span
                >
              </button>
              <button
                type="button"
                style="padding: 8px 12px; border: 2px solid ${"right-to-left"===(_.bar_direction||"left-to-right")?"var(--primary-color)":"var(--divider-color)"}; background: ${"right-to-left"===(_.bar_direction||"left-to-right")?"var(--primary-color)":"transparent"}; color: ${"right-to-left"===(_.bar_direction||"left-to-right")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                @click=${()=>n({bar_direction:"right-to-left"})}
              >
                <ha-icon
                  icon="mdi:arrow-left"
                  style="font-size: 16px; flex-shrink: 0;"
                ></ha-icon>
                <span
                  style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                  >${(0,p.kg)("editor.bar.appearance.right_to_left",u,"Right to Left")}</span
                >
              </button>
            </div>
          </div>

          <!-- Bar Height -->
          ${this.renderSliderField((0,p.kg)("editor.bar.appearance.height",u,"Bar Height"),(0,p.kg)("editor.bar.appearance.height_desc",u,"Adjust the thickness of the progress bar in pixels."),null!==(l=_.height)&&void 0!==l?l:20,20,8,60,2,e=>{n({height:e})},"px")}

          <!-- Border Radius -->
          ${this.renderSliderField((0,p.kg)("editor.bar.appearance.border_radius",u,"Border Radius"),(0,p.kg)("editor.bar.appearance.border_radius_desc",u,"Control the rounded corners of the bar."),null!==(s=_.border_radius)&&void 0!==s?s:10,10,0,50,1,e=>{n({border_radius:e})},"px")}

          <!-- Bar Width -->
          ${this.renderSliderField((0,p.kg)("editor.bar.appearance.width",u,"Bar Width"),(0,p.kg)("editor.bar.appearance.width_desc",u,"Set the width of the bar as a percentage of the container."),_.bar_width||100,100,10,100,5,e=>{n({bar_width:e})},"%")}

          <!-- Bar Alignment with Icons -->
          ${(_.bar_width||100)<100?a.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important;"
                    >
                      ${(0,p.kg)("editor.bar.appearance.alignment",u,"Bar Alignment")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,p.kg)("editor.bar.appearance.alignment_desc",u,"Choose how to align the bar when it's less than 100% width.")}
                    </div>
                    <div
                      style="display: flex; gap: 8px; justify-content: flex-start; flex-wrap: wrap;"
                    >
                      <button
                        type="button"
                        style="padding: 8px 12px; border: 2px solid ${"left"===(_.bar_alignment||"center")?"var(--primary-color)":"var(--divider-color)"}; background: ${"left"===(_.bar_alignment||"center")?"var(--primary-color)":"transparent"}; color: ${"left"===(_.bar_alignment||"center")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                        @click=${()=>n({bar_alignment:"left"})}
                      >
                        <ha-icon
                          icon="mdi:format-align-left"
                          style="font-size: 16px; flex-shrink: 0;"
                        ></ha-icon>
                        <span
                          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                          >${(0,p.kg)("editor.common.left",u,"Left")}</span
                        >
                      </button>
                      <button
                        type="button"
                        style="padding: 8px 12px; border: 2px solid ${"center"===(_.bar_alignment||"center")?"var(--primary-color)":"var(--divider-color)"}; background: ${"center"===(_.bar_alignment||"center")?"var(--primary-color)":"transparent"}; color: ${"center"===(_.bar_alignment||"center")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                        @click=${()=>n({bar_alignment:"center"})}
                      >
                        <ha-icon
                          icon="mdi:format-align-center"
                          style="font-size: 16px; flex-shrink: 0;"
                        ></ha-icon>
                        <span
                          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                          >${(0,p.kg)("editor.common.center",u,"Center")}</span
                        >
                      </button>
                      <button
                        type="button"
                        style="padding: 8px 12px; border: 2px solid ${"right"===(_.bar_alignment||"center")?"var(--primary-color)":"var(--divider-color)"}; background: ${"right"===(_.bar_alignment||"center")?"var(--primary-color)":"transparent"}; color: ${"right"===(_.bar_alignment||"center")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                        @click=${()=>n({bar_alignment:"right"})}
                      >
                        <ha-icon
                          icon="mdi:format-align-right"
                          style="font-size: 16px; flex-shrink: 0;"
                        ></ha-icon>
                        <span
                          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                          >${(0,p.kg)("editor.common.right",u,"Right")}</span
                        >
                      </button>
                    </div>
                  </div>
                `:""}

          <!-- Label Alignment -->
          ${_.left_enabled||_.right_enabled?a.qy`
                  <div class="field-group">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important;"
                    >
                      ${(0,p.kg)("editor.bar.labels.alignment",u,"Label Alignment")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,p.kg)("editor.bar.labels.alignment_desc",u,"Control how the left and right side labels are positioned.")}
                    </div>
                    ${this.renderUcForm(t,{label_alignment:_.label_alignment||"space-between"},[this.selectField("label_alignment",[{value:"left",label:(0,p.kg)("editor.common.left",u,"Left")},{value:"center",label:(0,p.kg)("editor.common.center",u,"Center")},{value:"right",label:(0,p.kg)("editor.common.right",u,"Right")},{value:"space-between",label:(0,p.kg)("editor.common.space_between",u,"Space Between")}])],e=>{const t=e.detail.value.label_alignment;t!==(_.label_alignment||"space-between")&&(n({label_alignment:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                  </div>
                `:""}

          <!-- Glass Blur Amount (only show when glass style is selected) -->
          ${"glass"===_.bar_style?a.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,p.kg)("editor.bar.appearance.glass_blur",u,"Glass Blur"),(0,p.kg)("editor.bar.appearance.glass_blur_desc",u,"Adjust the blur intensity of the glass effect."),_.glass_blur_amount||8,8,0,20,1,e=>{n({glass_blur_amount:e})},"px")}
                  </div>
                `:""}
        </div>

        <!-- Scale/Tick Marks Configuration Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.bar.scale.title",u,"Scale / Tick Marks"),(0,p.kg)("editor.bar.scale.desc",u,"Add tick marks and labels along the bar to show the scale. Useful for visualizing ranges like temperature or time."),t,{show_scale:_.show_scale||!1},[this.booleanField("show_scale")],e=>n({show_scale:e.detail.value.show_scale}))}

          ${_.show_scale?a.qy`
                  <!-- Scale Divisions -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div
                      class="field-title"
                      style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.divisions",u,"Number of Divisions")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.divisions_desc",u,"How many segments to divide the scale into (e.g., 4 = marks at 0%, 25%, 50%, 75%, 100%).")}
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <ha-slider
                        style="flex: 1;"
                        .min=${2}
                        .max=${20}
                        .step=${1}
                        .value=${_.scale_divisions||5}
                        @change=${e=>n({scale_divisions:parseInt(e.target.value,10)})}
                      ></ha-slider>
                      <span style="min-width: 30px; text-align: center; font-weight: 600;">
                        ${_.scale_divisions||5}
                      </span>
                    </div>
                  </div>

                  <!-- Show Labels Toggle -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,p.kg)("editor.bar.scale.show_labels",u,"Show Labels"),(0,p.kg)("editor.bar.scale.show_labels_desc",u,"Display numeric values at each tick mark."),t,{scale_show_labels:!1!==_.scale_show_labels},[this.booleanField("scale_show_labels")],e=>n({scale_show_labels:e.detail.value.scale_show_labels}))}

                  ${!1!==_.scale_show_labels?a.qy`
                        <!-- Label Size -->
                        <div class="field-group" style="margin-bottom: 16px;">
                          <div
                            class="field-title"
                            style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                          >
                            ${(0,p.kg)("editor.bar.scale.label_size",u,"Label Size")}
                          </div>
                          <div style="display: flex; align-items: center; gap: 12px;">
                            <ha-slider
                              style="flex: 1;"
                              .min=${8}
                              .max=${16}
                              .step=${1}
                              .value=${_.scale_label_size||10}
                              @change=${e=>n({scale_label_size:parseInt(e.target.value,10)})}
                            ></ha-slider>
                            <span style="min-width: 40px; text-align: center; font-weight: 600;">
                              ${_.scale_label_size||10}px
                            </span>
                          </div>
                        </div>

                        <!-- Label Color -->
                        <div class="field-group" style="margin-bottom: 16px;">
                          <div
                            class="field-title"
                            style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                          >
                            ${(0,p.kg)("editor.bar.scale.label_color",u,"Label Color")}
                          </div>
                          <ultra-color-picker
                            .hass=${t}
                            .value=${_.scale_label_color||""}
                            .placeholder=${"var(--secondary-text-color)"}
                            @value-changed=${e=>n({scale_label_color:e.detail.value})}
                          ></ultra-color-picker>
                        </div>
                      `:""}

                  ${this.renderFieldSection((0,p.kg)("editor.bar.scale.clamp_edge_labels",u,"Clamp Edge Labels Inward"),(0,p.kg)("editor.bar.scale.clamp_edge_labels_desc",u,"Slightly nudge the first and last labels inward to reduce clipping on tight layouts."),t,{scale_clamp_edge_labels:this.normalizeBoolean(_.scale_clamp_edge_labels,!0)},[this.booleanField("scale_clamp_edge_labels")],e=>n({scale_clamp_edge_labels:this.normalizeBoolean(e.detail.value.scale_clamp_edge_labels,!0)}))}

                  ${this.renderFieldSection((0,p.kg)("editor.bar.scale.mobile_options_enabled",u,"Enable Mobile Label Options"),(0,p.kg)("editor.bar.scale.mobile_options_enabled_desc",u,"Apply mobile-specific label behavior below the configured viewport width."),t,{scale_mobile_options_enabled:this.normalizeBoolean(_.scale_mobile_options_enabled,!1)},[this.booleanField("scale_mobile_options_enabled")],e=>n({scale_mobile_options_enabled:this.normalizeBoolean(e.detail.value.scale_mobile_options_enabled,!1)}))}

                  ${this.normalizeBoolean(_.scale_mobile_options_enabled,!1)?a.qy`
                        <div class="field-group" style="margin-bottom: 16px;">
                          <div
                            class="field-title"
                            style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                          >
                            ${(0,p.kg)("editor.bar.scale.mobile_breakpoint",u,"Mobile Breakpoint")}
                          </div>
                          <div
                            class="field-description"
                            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                          >
                            ${(0,p.kg)("editor.bar.scale.mobile_breakpoint_desc",u,"Apply mobile label options when viewport width is at or below this value.")}
                          </div>
                          <div style="display: flex; align-items: center; gap: 12px;">
                            <ha-slider
                              style="flex: 1;"
                              .min=${320}
                              .max=${640}
                              .step=${10}
                              .value=${_.scale_mobile_breakpoint||420}
                              @change=${e=>n({scale_mobile_breakpoint:parseInt(e.target.value,10)})}
                            ></ha-slider>
                            <span style="min-width: 52px; text-align: center; font-weight: 600;">
                              ${_.scale_mobile_breakpoint||420}px
                            </span>
                          </div>
                        </div>

                        ${this.renderFieldSection((0,p.kg)("editor.bar.scale.mobile_reduce_density",u,"Reduce Label Density on Mobile"),(0,p.kg)("editor.bar.scale.mobile_reduce_density_desc",u,"Hide every second label on mobile to prevent overlap while keeping all ticks."),t,{scale_mobile_reduce_label_density:this.normalizeBoolean(_.scale_mobile_reduce_label_density,!1)},[this.booleanField("scale_mobile_reduce_label_density")],e=>n({scale_mobile_reduce_label_density:this.normalizeBoolean(e.detail.value.scale_mobile_reduce_label_density,!1)}))}

                        ${this.renderFieldSection((0,p.kg)("editor.bar.scale.mobile_abbreviate_labels",u,"Abbreviate Labels on Mobile"),(0,p.kg)("editor.bar.scale.mobile_abbreviate_labels_desc",u,"Shorten numeric labels on mobile (e.g. 1200 -> 1.2k, 700 km -> 700)."),t,{scale_mobile_abbreviate_labels:this.normalizeBoolean(_.scale_mobile_abbreviate_labels,!1)},[this.booleanField("scale_mobile_abbreviate_labels")],e=>n({scale_mobile_abbreviate_labels:this.normalizeBoolean(e.detail.value.scale_mobile_abbreviate_labels,!1)}))}
                      `:""}

                  <!-- Tick Color -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div
                      class="field-title"
                      style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.tick_color",u,"Tick Color")}
                    </div>
                    <ultra-color-picker
                      .hass=${t}
                      .value=${_.scale_tick_color||""}
                      .placeholder=${"var(--divider-color)"}
                      @value-changed=${e=>n({scale_tick_color:e.detail.value})}
                    ></ultra-color-picker>
                  </div>

                  <!-- Custom Tick Positions -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div
                      class="field-title"
                      style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.custom_ticks",u,"Custom Tick Positions")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.custom_ticks_desc",u,"Comma-separated values in your entity's unit. Overrides the number of divisions (e.g. 10,20,30,40). Leave blank to use evenly spaced divisions.")}
                    </div>
                    ${this.renderUcForm(t,{scale_custom_ticks:_.scale_custom_ticks||""},[this.textField("scale_custom_ticks")],e=>n({scale_custom_ticks:e.detail.value.scale_custom_ticks}))}
                  </div>

                  <!-- Custom Tick Labels -->
                  ${(null===(c=_.scale_custom_ticks)||void 0===c?void 0:c.trim())?a.qy`
                        <div class="field-group" style="margin-bottom: 16px;">
                          <div
                            class="field-title"
                            style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                          >
                            ${(0,p.kg)("editor.bar.scale.custom_labels",u,"Custom Tick Labels")}
                          </div>
                          <div
                            class="field-description"
                            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                          >
                            ${(0,p.kg)("editor.bar.scale.custom_labels_desc",u,'Optional comma-separated labels matching each custom tick (e.g. Reserve,1/4,1/2,3/4,Full). Leave a slot empty to show that tick’s numeric value, or enter "-" (a single dash) to hide that tick’s label while keeping its tick mark.')}
                          </div>
                          ${this.renderUcForm(t,{scale_custom_labels:_.scale_custom_labels||""},[this.textField("scale_custom_labels")],e=>n({scale_custom_labels:e.detail.value.scale_custom_labels}))}
                          <div
                            style="font-size: 12px; font-style: italic; color: var(--secondary-text-color); margin-top: 6px; line-height: 1.4;"
                          >
                            ${(0,p.kg)("editor.bar.scale.custom_labels_hint",u,'Tip: use "-" in any slot to hide that tick’s label. Accepted hide tokens: -, _, none, {none}, hide.')}
                          </div>
                        </div>
                      `:""}

                  <!-- Scale Position -->
                  <div class="field-group" style="margin-bottom: 0;">
                    <div
                      class="field-title"
                      style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.position",u,"Scale Position")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,p.kg)("editor.bar.scale.position_desc",u,"Position the scale above or below the bar.")}
                    </div>
                    <div style="display: flex; gap: 8px;">
                      <button
                        type="button"
                        style="padding: 8px 16px; border: 2px solid ${"above"===_.scale_position?"var(--primary-color)":"var(--divider-color)"}; background: ${"above"===_.scale_position?"var(--primary-color)":"transparent"}; color: ${"above"===_.scale_position?"var(--text-primary-color)":"var(--primary-text-color)"}; border-radius: 8px; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 6px;"
                        @click=${()=>n({scale_position:"above"})}
                      >
                        <ha-icon icon="mdi:arrow-up" style="--mdc-icon-size: 16px;"></ha-icon>
                        ${(0,p.kg)("editor.bar.scale.position_above",u,"Above")}
                      </button>
                      <button
                        type="button"
                        style="padding: 8px 16px; border: 2px solid ${"above"!==_.scale_position?"var(--primary-color)":"var(--divider-color)"}; background: ${"above"!==_.scale_position?"var(--primary-color)":"transparent"}; color: ${"above"!==_.scale_position?"var(--text-primary-color)":"var(--primary-text-color)"}; border-radius: 8px; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 6px;"
                        @click=${()=>n({scale_position:"below"})}
                      >
                        <ha-icon icon="mdi:arrow-down" style="--mdc-icon-size: 16px;"></ha-icon>
                        ${(0,p.kg)("editor.bar.scale.position_below",u,"Below")}
                      </button>
                    </div>
                  </div>
                `:a.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,p.kg)("editor.bar.scale.enable_toggle",u,"Enable the toggle above to configure scale settings")}
                  </div>
                `}
        </div>

        <!-- Minimal Style Icon Configuration Section -->
        ${"minimal"===_.bar_style?a.qy`
                <div
                  class="settings-section"
                  style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
                >
                  <div
                    class="section-title"
                    style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
                  >
                    ${(0,p.kg)("editor.bar.minimal.icon_config",u,"Minimal Style Icon")}
                  </div>

                  <!-- Enable Icon Toggle -->
                  ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.icon_enabled",u,"Enable Icon"),(0,p.kg)("editor.bar.minimal.icon_enabled_desc",u,"Enable icon display to replace or enhance the dot indicator in minimal bar style."),t,{minimal_icon_enabled:_.minimal_icon_enabled||!1},[this.booleanField("minimal_icon_enabled")],e=>n({minimal_icon_enabled:e.detail.value.minimal_icon_enabled}))}

                  ${_.minimal_icon_enabled?a.qy`
                        ${this.renderIconField((0,p.kg)("editor.bar.minimal.icon",u,"Icon"),(0,p.kg)("editor.bar.minimal.icon_desc",u,"Select the icon to display (e.g., mdi:battery)."),t,_.minimal_icon||"",e=>n({minimal_icon:e}))}

                        <!-- Icon Display Mode -->
                        <div class="field-group" style="margin-bottom: 16px;">
                          <div
                            class="field-title"
                            style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                          >
                            ${(0,p.kg)("editor.bar.minimal.icon_mode",u,"Display Mode")}
                          </div>
                          <div
                            class="field-description"
                            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                          >
                            ${(0,p.kg)("editor.bar.minimal.icon_mode_desc",u,"Choose how the icon is displayed with the dot.")}
                          </div>
                          ${this.renderUcForm(t,{minimal_icon_mode:_.minimal_icon_mode||"icon-in-dot"},[this.selectField("minimal_icon_mode",[{value:"dot-only",label:(0,p.kg)("editor.bar.minimal.mode_dot_only",u,"Dot Only")},{value:"icon-only",label:(0,p.kg)("editor.bar.minimal.mode_icon_only",u,"Icon Only")},{value:"icon-in-dot",label:(0,p.kg)("editor.bar.minimal.mode_icon_in_dot",u,"Icon in Dot")}])],e=>{const t=e.detail.value.minimal_icon_mode;t!==(_.minimal_icon_mode||"icon-in-dot")&&(n({minimal_icon_mode:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                        </div>

                        <!-- Icon Size Auto Toggle -->
                        ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.icon_size_auto",u,"Auto Size"),(0,p.kg)("editor.bar.minimal.icon_size_auto_desc",u,"Automatically scale icon size based on bar height."),t,{minimal_icon_size_auto:!1!==_.minimal_icon_size_auto},[this.booleanField("minimal_icon_size_auto")],e=>n({minimal_icon_size_auto:e.detail.value.minimal_icon_size_auto}))}

                        <!-- Manual Icon Size (only if auto is disabled) -->
                        ${!1===_.minimal_icon_size_auto?a.qy`
                              ${this.renderSliderField((0,p.kg)("editor.bar.minimal.icon_size",u,"Icon Size"),(0,p.kg)("editor.bar.minimal.icon_size_desc",u,"Manually set the icon size in pixels."),_.minimal_icon_size||24,24,8,48,1,e=>{n({minimal_icon_size:e})},"px")}
                            `:""}

                        <!-- Use Dot Color Toggle -->
                        ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.use_dot_color",u,"Use Dot Color"),(0,p.kg)("editor.bar.minimal.use_dot_color_desc",u,"Use the dot color (including gradient colors) for the icon."),t,{minimal_icon_use_dot_color:!1!==_.minimal_icon_use_dot_color},[this.booleanField("minimal_icon_use_dot_color")],e=>n({minimal_icon_use_dot_color:e.detail.value.minimal_icon_use_dot_color}))}

                        <!-- Custom Icon Color (only if use_dot_color is false) -->
                        ${!1===_.minimal_icon_use_dot_color?a.qy`
                              <div class="field-container" style="margin-bottom: 16px;">
                                <div class="field-title">
                                  ${(0,p.kg)("editor.bar.minimal.icon_color",u,"Icon Color")}
                                </div>
                                <div class="field-description">
                                  ${(0,p.kg)("editor.bar.minimal.icon_color_desc",u,"Set a custom color for the icon.")}
                                </div>
                                <ultra-color-picker
                                  style="width: 100%;"
                                  .value=${_.minimal_icon_color||""}
                                  .defaultValue=${"var(--primary-color)"}
                                  .hass=${t}
                                  @value-changed=${e=>n({minimal_icon_color:e.detail.value})}
                                ></ultra-color-picker>
                              </div>
                            `:""}
                      `:a.qy`
                        <div
                          style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                        >
                          ${(0,p.kg)("editor.bar.minimal.enable_toggle",u,"Enable the toggle above to configure icon settings")}
                        </div>
                      `}
                </div>
              `:""}

        <!-- Percentage Text Display Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.bar.text_display.title",u,"Text Display"),(0,p.kg)("editor.bar.text_display.desc",u,"Control the visibility and appearance of text values shown directly on the bar. For difference and template modes, you can choose to display raw entity values instead of percentages."),t,{show_percentage:h},[this.booleanField("show_percentage")],e=>{const t=this.normalizeBoolean(e.detail.value.show_percentage,!0);n(Object.assign({show_percentage:t},t?{}:{show_value:!1}))})}

          ${h?a.qy`
                  <!-- Display Type Toggle - Only show for difference and template types -->
                  ${"difference"===_.percentage_type?a.qy`
                        ${this.renderFieldSection((0,p.kg)("editor.bar.text_display.show_value",u,"Show Value Instead of Percentage"),(0,p.kg)("editor.bar.text_display.show_value_desc",u,'When enabled, shows the actual entity value instead of percentage. Useful for displaying raw sensor values like "45 kWh" instead of "75%".'),t,{show_value:f},[this.booleanField("show_value")],e=>n({show_value:this.normalizeBoolean(e.detail.value.show_value,!1)}))}
                      `:""}

                  ${this.renderSliderField((0,p.kg)("editor.bar.text_display.text_size",u,"Text Size"),(0,p.kg)("editor.bar.text_display.text_size_desc",u,"Adjust the size of the text displayed on the bar."),_.percentage_text_size||14,14,8,100,1,e=>{n({percentage_text_size:e})},"px")}
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div class="field-title">
                      ${(0,p.kg)("editor.bar.text_display.text_alignment",u,"Text Alignment")}
                    </div>
                    ${this.renderUcForm(t,{percentage_text_alignment:_.percentage_text_alignment||"center"},[this.selectField("percentage_text_alignment",[{value:"left",label:(0,p.kg)("editor.common.left",u,"Left")},{value:"center",label:(0,p.kg)("editor.common.center",u,"Center")},{value:"right",label:(0,p.kg)("editor.common.right",u,"Right")},{value:"follow-fill",label:(0,p.kg)("editor.bar.text_display.follow_fill",u,"Follow Fill")}])],e=>{const t=e.detail.value.percentage_text_alignment;t!==(_.percentage_text_alignment||"center")&&(n({percentage_text_alignment:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                  </div>

                  <!-- Text Formatting -->
                  <div class="field-container" style="margin-bottom: 16px;">
                    <div class="field-title">
                      ${(0,p.kg)("editor.bar.text_display.text_formatting",u,"Text Formatting")}
                    </div>
                    <div class="field-description">
                      ${(0,p.kg)("editor.bar.text_display.text_formatting_desc",u,"Apply formatting styles to the percentage text.")}
                    </div>
                    <div class="format-buttons" style="display: flex; gap: 8px; flex-wrap: wrap;">
                      <button
                        class="format-btn ${_.percentage_text_bold?"active":""}"
                        @click=${()=>n({percentage_text_bold:!_.percentage_text_bold})}
                        style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${_.percentage_text_bold?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${_.percentage_text_bold?"var(--text-primary-color)":"var(--primary-text-color)"};"
                        title="Bold"
                      >
                        <ha-icon icon="mdi:format-bold"></ha-icon>
                      </button>
                      <button
                        class="format-btn ${_.percentage_text_italic?"active":""}"
                        @click=${()=>n({percentage_text_italic:!_.percentage_text_italic})}
                        style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${_.percentage_text_italic?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${_.percentage_text_italic?"var(--text-primary-color)":"var(--primary-text-color)"};"
                        title="Italic"
                      >
                        <ha-icon icon="mdi:format-italic"></ha-icon>
                      </button>
                      <button
                        class="format-btn ${_.percentage_text_strikethrough?"active":""}"
                        @click=${()=>n({percentage_text_strikethrough:!_.percentage_text_strikethrough})}
                        style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${_.percentage_text_strikethrough?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${_.percentage_text_strikethrough?"var(--text-primary-color)":"var(--primary-text-color)"};"
                        title="Strikethrough"
                      >
                        <ha-icon icon="mdi:format-strikethrough"></ha-icon>
                      </button>
                    </div>
                  </div>

                  <!-- Text Color -->
                  <div class="field-container" style="margin-bottom: 16px;">
                    <div class="field-title">
                      ${(0,p.kg)("editor.bar.colors.text_color",u,"Text Color")}
                    </div>
                    <div class="field-description">
                      ${(0,p.kg)("editor.bar.colors.text_color_desc",u,"Choose the color for the text displayed on the bar.")}
                    </div>
                    <ultra-color-picker
                      style="width: 100%;"
                      .value=${_.percentage_text_color||""}
                      .defaultValue=${"var(--primary-text-color)"}
                      .hass=${t}
                      @value-changed=${e=>n({percentage_text_color:e.detail.value})}
                    ></ultra-color-picker>
                  </div>
                `:""}
        </div>

        <!-- Unified Template Section (wrapped in a settings-section box so the
             title, help button, toggle and template editor are visually contained
             alongside every other module section). -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="switch-container"
            style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;"
          >
            <div
              class="switch-label-row"
              style="display:flex;align-items:center;gap:8px;"
            >
              <span class="switch-label" style="font-size:16px;font-weight:600;white-space:nowrap;">
                ${(0,p.kg)("editor.bar.unified_template.toggle",u,"Template Mode")}
              </span>
              <button
                type="button"
                class="help-btn"
                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                title="${(0,p.kg)("editor.bar.unified_template.cheatsheet",u,"Template cheatsheet")}"
                @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"bar"}}))}}
              >
                <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
              </button>
            </div>
            ${this.renderUcForm(t,{unified_template_mode:_.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>n({unified_template_mode:e.detail.value.unified_template_mode}))}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; line-height: 1.5;">
            ${(0,p.kg)("editor.bar.unified_template.desc",u,"One Jinja template returning JSON: value, label, color, left_label, right_label, value_min, value_max, container_background_color.")}
          </div>
          ${_.unified_template_mode?a.qy`
                <div
                  style="margin-top:12px;"
                  @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                  @dragstart=${e=>e.stopPropagation()}
                  @insert-snippet=${e=>{var t,i,a;const n=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==n?void 0:n.insertAtCursor)||void 0===t||t.call(n,null!==(a=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==a?a:"")}}
                >
                  <ultra-template-editor
                    .hass=${t}
                    .value=${_.unified_template||""}
                    .placeholder=${'{\n  "value": "{{ states(\'sensor.battery_level\') | float }}",\n  "label": "{{ friendly_name }}"\n}'}
                    .minHeight=${120}
                    .maxHeight=${400}
                    @value-changed=${e=>n({unified_template:e.detail.value})}
                  ></ultra-template-editor>
                </div>
              `:""}
        </div>

        <!-- Left Side Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.bar.left.title",u,"Left Side"),"",t,{left_enabled:_.left_enabled||!1},[this.booleanField("left_enabled")],e=>{const t=e.detail.value.left_enabled;n(t?{left_enabled:!0,left_title:_.left_title||"Fuel",left_entity:_.left_entity||"",left_title_size:_.left_title_size||14,left_value_size:_.left_value_size||14,left_title_color:_.left_title_color||"var(--primary-text-color)",left_value_color:_.left_value_color||"var(--primary-text-color)"}:{left_enabled:!1,left_title:"",left_entity:""})})}

          <div
            class="field-description"
            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 16px;"
          >
            ${(0,p.kg)("editor.bar.left.desc",u,"Configure the title and entity value displayed on the left side of the bar. This is useful for showing labels like 'Range' or 'Battery' along with their values.")}
          </div>

          ${_.left_enabled?a.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{left_title:_.left_title||""}}
                      .schema=${[{name:"left_title",selector:{text:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>n({left_title:e.detail.value.left_title})}
                    ></ha-form>
                  </div>

                  <!-- Left Entity (value source) -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{left_entity:_.left_entity||""}}
                      .schema=${[{name:"left_entity",selector:{entity:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>n({left_entity:e.detail.value.left_entity})}
                    ></ha-form>
                  </div>

                  ${this.renderSliderField((0,p.kg)("editor.bar.left.title_size",u,"Title Size"),"",_.left_title_size||14,14,8,32,1,e=>{n({left_title_size:e})},"px")}

                  ${this.renderSliderField((0,p.kg)("editor.bar.left.value_size",u,"Value Size"),"",_.left_value_size||14,14,8,32,1,e=>{n({left_value_size:e})},"px")}
                  <!-- Left Side Actions (isolated component) -->
                  <bar-side-actions
                    .hass=${t}
                    .side=${"left"}
                    .tapAction=${_.left_tap_action}
                    .holdAction=${_.left_hold_action}
                    .doubleTapAction=${_.left_double_tap_action}
                    @actions-changed=${e=>{e.stopPropagation(),n(e.detail.updates)}}
                  ></bar-side-actions>
                `:a.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,p.kg)("editor.bar.left.enable_toggle",u,"Enable the toggle above to configure left side settings")}
                  </div>
                `}
        </div>

        <!-- Right Side Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.bar.right.title",u,"Right Side"),"",t,{right_enabled:_.right_enabled||!1},[this.booleanField("right_enabled")],e=>{const t=e.detail.value.right_enabled;n(t?{right_enabled:!0,right_title:_.right_title||"Range",right_entity:_.right_entity||"",right_title_size:_.right_title_size||14,right_value_size:_.right_value_size||14,right_title_color:_.right_title_color||"var(--primary-text-color)",right_value_color:_.right_value_color||"var(--primary-text-color)"}:{right_enabled:!1,right_title:"",right_entity:""})})}

          <div
            class="field-description"
            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 16px;"
          >
            ${(0,p.kg)("editor.bar.right.desc",u,"Configure the title and entity value displayed on the right side of the bar. This is ideal for complementary information like 'Time to Full' or secondary measurements.")}
          </div>

          ${_.right_enabled?a.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{right_title:_.right_title||""}}
                      .schema=${[{name:"right_title",selector:{text:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>n({right_title:e.detail.value.right_title})}
                    ></ha-form>
                  </div>
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{right_entity:_.right_entity||""}}
                      .schema=${[{name:"right_entity",selector:{entity:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>n({right_entity:e.detail.value.right_entity})}
                    ></ha-form>
                  </div>

                  ${this.renderSliderField((0,p.kg)("editor.bar.right.title_size",u,"Title Size"),"",_.right_title_size||14,14,8,32,1,e=>{n({right_title_size:e})},"px")}

                  ${this.renderSliderField((0,p.kg)("editor.bar.right.value_size",u,"Value Size"),"",_.right_value_size||14,14,8,32,1,e=>{n({right_value_size:e})},"px")}
                  <!-- Right Side Actions (isolated component) -->
                  <bar-side-actions
                    .hass=${t}
                    .side=${"right"}
                    .tapAction=${_.right_tap_action}
                    .holdAction=${_.right_hold_action}
                    .doubleTapAction=${_.right_double_tap_action}
                    @actions-changed=${e=>{e.stopPropagation(),n(e.detail.updates)}}
                  ></bar-side-actions>
                `:a.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,p.kg)("editor.bar.right.enable_toggle",u,"Enable the toggle above to configure right side settings")}
                  </div>
                `}
        </div>

        <!-- Colors Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.bar.colors.title",u,"Colors")}
          </div>

          
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="colors-grid"
              style="display: grid; grid-template-columns: 1fr; gap: 16px;"
            >
              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,p.kg)("editor.bar.colors.bar_color",u,"Bar Color")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${_.bar_color||""}
                  .defaultValue=${"var(--primary-color)"}
                  .hass=${t}
                  @value-changed=${e=>n({bar_color:e.detail.value})}
                ></ultra-color-picker>
              </div>

              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,p.kg)("editor.bar.colors.background_color",u,"Background Color")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${_.bar_background_color||""}
                  .defaultValue=${"transparent"}
                  .hass=${t}
                  @value-changed=${e=>n({bar_background_color:e.detail.value})}
                ></ultra-color-picker>
              </div>

              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,p.kg)("editor.bar.colors.border_color",u,"Border Color")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${_.bar_border_color||""}
                  .defaultValue=${"var(--divider-color)"}
                  .hass=${t}
                  @value-changed=${e=>n({bar_border_color:e.detail.value})}
                ></ultra-color-picker>
              </div>

              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,p.kg)("editor.bar.colors.limit_indicator",u,"Limit Indicator")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${_.limit_color||""}
                  .defaultValue=${"var(--warning-color)"}
                  .hass=${t}
                  @value-changed=${e=>n({limit_color:e.detail.value})}
                ></ultra-color-picker>
              </div>


              ${"minimal"===_.bar_style?a.qy`
                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,p.kg)("editor.bar.colors.dot_color",u,"Dot Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${_.dot_color||""}
                          .defaultValue=${"var(--primary-color)"}
                          .hass=${t}
                          @value-changed=${e=>n({dot_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    `:""}
            </div>
          </div>

          <!-- Minimal Style Icon Configuration -->
          ${"minimal"===_.bar_style?a.qy`
                  ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.icon_enabled",u,"Enable Icon"),(0,p.kg)("editor.bar.minimal.icon_enabled_desc",u,"Show an icon on the minimal bar indicator"),t,{minimal_icon_enabled:_.minimal_icon_enabled||!1},[this.booleanField("minimal_icon_enabled")],e=>n({minimal_icon_enabled:e.detail.value.minimal_icon_enabled}))}

                  ${_.minimal_icon_enabled?a.qy`
                        <!-- Icon Selection -->
                        <div class="field-group" style="margin-top: 16px;">
                          ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.icon",u,"Icon"),(0,p.kg)("editor.bar.minimal.icon_desc",u,"Choose an icon to display (e.g., mdi:battery)"),t,{minimal_icon:_.minimal_icon||""},[this.iconField("minimal_icon")],e=>n(e.detail.value))}
                        </div>

                        <!-- Icon Display Mode -->
                        <div class="field-group" style="margin-top: 16px;">
                          ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.icon_mode",u,"Display Mode"),(0,p.kg)("editor.bar.minimal.icon_mode_desc",u,"How to display the icon"),t,{minimal_icon_mode:_.minimal_icon_mode||"icon-in-dot"},[this.selectField("minimal_icon_mode",[{value:"dot-only",label:(0,p.kg)("editor.bar.minimal.mode_dot_only",u,"Dot Only")},{value:"icon-only",label:(0,p.kg)("editor.bar.minimal.mode_icon_only",u,"Icon Only")},{value:"icon-in-dot",label:(0,p.kg)("editor.bar.minimal.mode_icon_in_dot",u,"Icon in Dot")}])],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                        </div>

                        <!-- Icon Size Controls -->
                        ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.icon_size_auto",u,"Auto-Scale Icon"),(0,p.kg)("editor.bar.minimal.icon_size_auto_desc",u,"Automatically scale icon with bar height"),t,{minimal_icon_size_auto:!1!==_.minimal_icon_size_auto},[this.booleanField("minimal_icon_size_auto")],e=>n({minimal_icon_size_auto:e.detail.value.minimal_icon_size_auto}))}

                        ${!1===_.minimal_icon_size_auto?a.qy`
                              ${this.renderSliderField((0,p.kg)("editor.bar.minimal.icon_size",u,"Icon Size"),(0,p.kg)("editor.bar.minimal.icon_size_desc",u,"Custom icon size in pixels"),_.minimal_icon_size||24,24,8,48,2,e=>{n({minimal_icon_size:e})},"px")}
                            `:""}

                        <!-- Icon Color Controls -->
                        ${this.renderFieldSection((0,p.kg)("editor.bar.minimal.use_dot_color",u,"Use Dot Color"),(0,p.kg)("editor.bar.minimal.use_dot_color_desc",u,"Use the dot color for the icon (matches gradient)"),t,{minimal_icon_use_dot_color:!1!==_.minimal_icon_use_dot_color},[this.booleanField("minimal_icon_use_dot_color")],e=>n({minimal_icon_use_dot_color:e.detail.value.minimal_icon_use_dot_color}))}

                        ${!1===_.minimal_icon_use_dot_color?a.qy`
                              <div class="field-container" style="margin-top: 16px;">
                                <div class="field-title">
                                  ${(0,p.kg)("editor.bar.minimal.icon_color",u,"Icon Color")}
                                </div>
                                <div class="field-description">
                                  ${(0,p.kg)("editor.bar.minimal.icon_color_desc",u,"Custom color for the icon")}
                                </div>
                                <ultra-color-picker
                                  style="width: 100%;"
                                  .value=${_.minimal_icon_color||""}
                                  .defaultValue=${"var(--primary-color)"}
                                  .hass=${t}
                                  @value-changed=${e=>n({minimal_icon_color:e.detail.value})}
                                ></ultra-color-picker>
                              </div>
                            `:""}
                      `:""}
                `:""}

          <!-- Left Side Colors -->
          ${_.left_enabled?a.qy`
                  <div class="field-group" style="margin-bottom: 24px;">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px; color: var(--primary-color);"
                    >
                      ${(0,p.kg)("editor.bar.colors.left_side",u,"Left Side Colors")}
                    </div>
                    <div
                      class="colors-grid"
                      style="display: grid; grid-template-columns: 1fr; gap: 16px;"
                    >
                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,p.kg)("editor.bar.colors.title_color",u,"Title Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${_.left_title_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>n({left_title_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,p.kg)("editor.bar.colors.value_color",u,"Value Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${_.left_value_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>n({left_value_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  </div>
                `:""}

          <!-- Right Side Colors -->
          ${_.right_enabled?a.qy`
                  <div class="field-group">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px; color: var(--primary-color);"
                    >
                      ${(0,p.kg)("editor.bar.colors.right_side",u,"Right Side Colors")}
                    </div>
                    <div
                      class="colors-grid"
                      style="display: grid; grid-template-columns: 1fr; gap: 16px;"
                    >
                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,p.kg)("editor.bar.colors.title_color",u,"Title Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${_.right_title_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>n({right_title_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,p.kg)("editor.bar.colors.value_color",u,"Value Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${_.right_value_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>n({right_value_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  </div>
                `:""}
        </div>

        <!-- Gradient Mode -->
        <div class="settings-section" style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px;">
          ${this.renderFieldSection((0,p.kg)("editor.bar.gradient.title",u,"Gradient Mode"),(0,p.kg)("editor.bar.gradient.desc",u,"Apply a color gradient to the bar fill. When enabled, choose how the gradient is displayed and customize the color stops below."),t,{use_gradient:_.use_gradient||!1},[this.booleanField("use_gradient")],e=>{const t=e.detail.value.use_gradient,i={use_gradient:t};!t||_.gradient_stops&&0!==_.gradient_stops.length||(i.gradient_stops=(0,d.FB)(),i.gradient_display_mode=_.gradient_display_mode||"full"),n(i)})}

          ${_.use_gradient?a.qy`
                  <div class="field-group" style="margin-bottom: 12px;">
                    ${this.renderUcForm(t,{gradient_display_mode:_.gradient_display_mode||"full"},[this.selectField("gradient_display_mode",[{value:"full",label:(0,p.kg)("editor.bar.gradient.full",u,"Full")},{value:"cropped",label:(0,p.kg)("editor.bar.gradient.cropped",u,"Cropped")},{value:"value-based",label:(0,p.kg)("editor.bar.gradient.value_based",u,"Value-Based")}])],e=>{const t=e.detail.value.gradient_display_mode;t!==(_.gradient_display_mode||"full")&&(n({gradient_display_mode:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                  </div>
                  <uc-gradient-editor
                    .stops=${_.gradient_stops||(0,d.FB)()}
                    .barSize=${this.getBarSizeFromHeight(null!==(m=_.height)&&void 0!==m?m:20)}
                    .barRadius=${this.getBarRadiusFromStyle(_.border_radius||10)}
                    .barStyle=${_.bar_style||"flat"}
                    @gradient-changed=${e=>{n({gradient_stops:e.detail.stops})}}
                  ></uc-gradient-editor>
                `:""}
        </div>

        <!-- Bar Animation -->
        <div class="settings-section" style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px;">
          ${this.renderFieldSection((0,p.kg)("editor.bar.animation.title",u,"Bar Animation"),(0,p.kg)("editor.bar.animation.desc",u,"Animate the bar fill using presets like charging stripes, pulse, shimmer, and more. You can trigger animations based on an entity's state or attribute, and optionally override the animation when another condition is met."),t,{bar_animation_enabled:_.bar_animation_enabled||!1},[this.booleanField("bar_animation_enabled")],e=>n({bar_animation_enabled:e.detail.value.bar_animation_enabled}))}
          ${_.bar_animation_enabled?a.qy`
                  <div
                    class="conditional-fields-group"
                    style="margin: 16px 0;"
                  >
                    <div class="conditional-fields-header">
                      ${(0,p.kg)("editor.bar.animation.trigger.title",u,"Animation Trigger")}
                    </div>
                    <div class="conditional-fields-content">
                      <div
                        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                      >
                        ${(0,p.kg)("editor.bar.animation.trigger.desc",u,"Select an entity to watch and define the value + animation to apply when it matches.")}
                      </div>
                      ${this.renderEntityPickerWithVariables(t,i,"bar_animation_entity",_.bar_animation_entity||"",e=>n({bar_animation_entity:e}),void 0,(0,p.kg)("editor.common.entity",u,"Entity"))}
                      ${this.renderSettingsSection("","",[{title:(0,p.kg)("editor.bar.animation.trigger.type",u,"Trigger Type"),description:(0,p.kg)("editor.bar.animation.trigger.type_desc",u,"Choose whether to compare the entity state or an attribute"),hass:t,data:{bar_animation_trigger_type:_.bar_animation_trigger_type||"state"},schema:[this.selectField("bar_animation_trigger_type",[{value:"state",label:(0,p.kg)("editor.common.state",u,"State")},{value:"attribute",label:(0,p.kg)("editor.common.attribute",u,"Attribute")}])],onChange:e=>n(e.detail.value)},..."attribute"===(_.bar_animation_trigger_type||"state")?[{title:(0,p.kg)("editor.common.attribute_name",u,"Attribute Name"),description:(0,p.kg)("editor.bar.animation.trigger.attribute_name_desc",u,"Name of the attribute to compare (e.g., charging_status)"),hass:t,data:{bar_animation_attribute:_.bar_animation_attribute||""},schema:[this.textField("bar_animation_attribute")],onChange:e=>n({bar_animation_attribute:e.detail.value.bar_animation_attribute})}]:[],...(_.bar_animation_entity||"").trim()?[{title:(0,p.kg)("editor.bar.animation.trigger.match_value",u,"Match Value"),description:(0,p.kg)("editor.bar.animation.trigger.match_value_desc",u,"Text to compare against the state or attribute (comparison is string-based)."),hass:t,data:{bar_animation_value:_.bar_animation_value||""},schema:[this.textField("bar_animation_value")],onChange:e=>n({bar_animation_value:e.detail.value.bar_animation_value})}]:[],{title:(0,p.kg)("editor.bar.animation.type",u,"Animation Type"),description:(0,p.kg)("editor.bar.animation.type_desc",u,"Select how the bar should animate when triggered."),hass:t,data:{bar_animation_type:_.bar_animation_type||"none"},schema:[this.selectField("bar_animation_type",[{value:"none",label:(0,p.kg)("editor.common.none",u,"None")},{value:"charging",label:(0,p.kg)("editor.bar.animation.types.charging",u,"Charging (Diagonal Lines)")},{value:"pulse",label:(0,p.kg)("editor.bar.animation.types.pulse",u,"Pulse")},{value:"blinking",label:(0,p.kg)("editor.bar.animation.types.blinking",u,"Blinking")},{value:"bouncing",label:(0,p.kg)("editor.bar.animation.types.bouncing",u,"Bouncing")},{value:"glow",label:(0,p.kg)("editor.bar.animation.types.glow",u,"Glow")},{value:"rainbow",label:(0,p.kg)("editor.bar.animation.types.rainbow",u,"Rainbow")},{value:"bubbles",label:(0,p.kg)("editor.bar.animation.types.bubbles",u,"Bubbles")},{value:"fill",label:(0,p.kg)("editor.bar.animation.types.fill",u,"Fill")},{value:"ripple",label:(0,p.kg)("editor.bar.animation.types.ripple",u,"Ripple")},{value:"traffic",label:(0,p.kg)("editor.bar.animation.types.traffic",u,"Traffic (Barber Pole)")},{value:"heartbeat",label:(0,p.kg)("editor.bar.animation.types.heartbeat",u,"Heartbeat")},{value:"flicker",label:(0,p.kg)("editor.bar.animation.types.flicker",u,"Flicker")},{value:"shimmer",label:(0,p.kg)("editor.bar.animation.types.shimmer",u,"Shimmer")},{value:"vibrate",label:(0,p.kg)("editor.bar.animation.types.vibrate",u,"Vibrate")}])],onChange:e=>n(e.detail.value)},{title:(0,p.kg)("editor.bar.animation.direction",u,"Animation Direction"),description:(0,p.kg)("editor.bar.animation.direction_desc",u,"Choose a fixed direction, or derive direction from a sensor value."),hass:t,data:{bar_animation_direction:_.bar_animation_direction||"normal"},schema:[this.selectField("bar_animation_direction",[{value:"normal",label:(0,p.kg)("editor.bar.animation.direction_modes.normal",u,"Normal")},{value:"reverse",label:(0,p.kg)("editor.bar.animation.direction_modes.reverse",u,"Reverse")},{value:"sensor",label:(0,p.kg)("editor.bar.animation.direction_modes.sensor",u,"From Sensor")}])],onChange:e=>n(e.detail.value)},..."sensor"===(_.bar_animation_direction||"normal")?[{title:(0,p.kg)("editor.bar.animation.direction_entity",u,"Direction Sensor"),description:(0,p.kg)("editor.bar.animation.direction_entity_desc",u,"Negative values reverse the animation. Positive values keep normal direction."),hass:t,data:{bar_animation_direction_entity:_.bar_animation_direction_entity||""},schema:[{name:"bar_animation_direction_entity",selector:{entity:{}}}],onChange:e=>n({bar_animation_direction_entity:e.detail.value.bar_animation_direction_entity})},{title:(0,p.kg)("editor.bar.animation.direction_attribute",u,"Direction Attribute (Optional)"),description:(0,p.kg)("editor.bar.animation.direction_attribute_desc",u,"Read this attribute instead of entity state when deriving direction."),hass:t,data:{bar_animation_direction_attribute:_.bar_animation_direction_attribute||""},schema:[this.textField("bar_animation_direction_attribute")],onChange:e=>n({bar_animation_direction_attribute:e.detail.value.bar_animation_direction_attribute})}]:[],{title:(0,p.kg)("editor.bar.animation.speed_mode",u,"Animation Speed Source"),description:(0,p.kg)("editor.bar.animation.speed_mode_desc",u,"Use a fixed speed value, or derive speed from a sensor."),hass:t,data:{bar_animation_speed_mode:_.bar_animation_speed_mode||"fixed"},schema:[this.selectField("bar_animation_speed_mode",[{value:"fixed",label:(0,p.kg)("editor.bar.animation.speed_modes.fixed",u,"Fixed")},{value:"sensor",label:(0,p.kg)("editor.bar.animation.speed_modes.sensor",u,"From Sensor")}])],onChange:e=>n(e.detail.value)},{title:(0,p.kg)("editor.bar.animation.speed",u,"Base Speed"),description:(0,p.kg)("editor.bar.animation.speed_desc",u,"1 = default speed. Higher values animate faster."),hass:t,data:{bar_animation_speed:Number(null!==(g=_.bar_animation_speed)&&void 0!==g?g:1)||1},schema:[this.numberField("bar_animation_speed",.1,20,.1)],onChange:e=>n({bar_animation_speed:e.detail.value.bar_animation_speed})},..."sensor"===(_.bar_animation_speed_mode||"fixed")?[{title:(0,p.kg)("editor.bar.animation.speed_entity",u,"Speed Sensor"),description:(0,p.kg)("editor.bar.animation.speed_entity_desc",u,"Entity whose numeric value controls animation speed."),hass:t,data:{bar_animation_speed_entity:_.bar_animation_speed_entity||""},schema:[{name:"bar_animation_speed_entity",selector:{entity:{}}}],onChange:e=>n({bar_animation_speed_entity:e.detail.value.bar_animation_speed_entity})},{title:(0,p.kg)("editor.bar.animation.speed_attribute",u,"Speed Attribute (Optional)"),description:(0,p.kg)("editor.bar.animation.speed_attribute_desc",u,"Read this attribute instead of entity state when deriving speed."),hass:t,data:{bar_animation_speed_attribute:_.bar_animation_speed_attribute||""},schema:[this.textField("bar_animation_speed_attribute")],onChange:e=>n({bar_animation_speed_attribute:e.detail.value.bar_animation_speed_attribute})},{title:(0,p.kg)("editor.bar.animation.speed_multiplier",u,"Sensor Multiplier"),description:(0,p.kg)("editor.bar.animation.speed_multiplier_desc",u,"Scales sensor values before converting to animation speed."),hass:t,data:{bar_animation_speed_multiplier:Number(null!==(b=_.bar_animation_speed_multiplier)&&void 0!==b?b:1)||1},schema:[this.numberField("bar_animation_speed_multiplier",0,1e3,.1)],onChange:e=>n({bar_animation_speed_multiplier:e.detail.value.bar_animation_speed_multiplier})}]:[]])}
                    </div>
                  </div>

                  <div
                    class="conditional-fields-group"
                    style="margin: 16px 0;"
                  >
                    <div class="conditional-fields-header">
                      ${(0,p.kg)("editor.bar.animation.override.title",u,"Action Animation Override")}
                    </div>
                    <div class="conditional-fields-content">
                      <div
                        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                      >
                        ${(0,p.kg)("editor.bar.animation.override.desc",u,"Select an Action Entity and state to define when this animation should override the regular animation")}
                      </div>
                      ${this.renderEntityPickerWithVariables(t,i,"bar_animation_override_entity",_.bar_animation_override_entity||"",e=>n({bar_animation_override_entity:e}),void 0,(0,p.kg)("editor.common.entity",u,"Entity"))}
                      ${this.renderSettingsSection("","",[{title:(0,p.kg)("editor.bar.animation.trigger.type",u,"Trigger Type"),description:(0,p.kg)("editor.bar.animation.override.type_desc",u,"Compare the entity state or one of its attributes"),hass:t,data:{bar_animation_override_trigger_type:_.bar_animation_override_trigger_type||"state"},schema:[this.selectField("bar_animation_override_trigger_type",[{value:"state",label:(0,p.kg)("editor.common.state",u,"State")},{value:"attribute",label:(0,p.kg)("editor.common.attribute",u,"Attribute")}])],onChange:e=>{e.detail.value.bar_animation_override_trigger_type!==(_.bar_animation_override_trigger_type||"state")&&n(e.detail.value)}},..."attribute"===(_.bar_animation_override_trigger_type||"state")?[{title:(0,p.kg)("editor.common.attribute_name",u,"Attribute Name"),description:(0,p.kg)("editor.bar.animation.override.attribute_name_desc",u,"Name of the attribute to compare"),hass:t,data:{bar_animation_override_attribute:_.bar_animation_override_attribute||""},schema:[this.textField("bar_animation_override_attribute")],onChange:e=>n({bar_animation_override_attribute:e.detail.value.bar_animation_override_attribute})}]:[],{title:(0,p.kg)("editor.bar.animation.override.match_value",u,"Override Match Value"),description:(0,p.kg)("editor.bar.animation.override.match_value_desc",u,"String comparison against state or attribute"),hass:t,data:{bar_animation_override_value:_.bar_animation_override_value||""},schema:[this.textField("bar_animation_override_value")],onChange:e=>n({bar_animation_override_value:e.detail.value.bar_animation_override_value})},{title:(0,p.kg)("editor.bar.animation.override.type",u,"Override Animation Type"),description:(0,p.kg)("editor.bar.animation.override.type_desc",u,"Animation to use when override condition matches."),hass:t,data:{bar_animation_override_type:_.bar_animation_override_type||"none"},schema:[this.selectField("bar_animation_override_type",[{value:"none",label:(0,p.kg)("editor.common.none",u,"None")},{value:"charging",label:(0,p.kg)("editor.bar.animation.types.charging",u,"Charging (Diagonal Lines)")},{value:"pulse",label:(0,p.kg)("editor.bar.animation.types.pulse",u,"Pulse")},{value:"blinking",label:(0,p.kg)("editor.bar.animation.types.blinking",u,"Blinking")},{value:"bouncing",label:(0,p.kg)("editor.bar.animation.types.bouncing",u,"Bouncing")},{value:"glow",label:(0,p.kg)("editor.bar.animation.types.glow",u,"Glow")},{value:"rainbow",label:(0,p.kg)("editor.bar.animation.types.rainbow",u,"Rainbow")},{value:"bubbles",label:(0,p.kg)("editor.bar.animation.types.bubbles",u,"Bubbles")},{value:"fill",label:(0,p.kg)("editor.bar.animation.types.fill",u,"Fill")},{value:"ripple",label:(0,p.kg)("editor.bar.animation.types.ripple",u,"Ripple")},{value:"traffic",label:(0,p.kg)("editor.bar.animation.types.traffic",u,"Traffic (Barber Pole)")},{value:"heartbeat",label:(0,p.kg)("editor.bar.animation.types.heartbeat",u,"Heartbeat")},{value:"flicker",label:(0,p.kg)("editor.bar.animation.types.flicker",u,"Flicker")},{value:"shimmer",label:(0,p.kg)("editor.bar.animation.types.shimmer",u,"Shimmer")},{value:"vibrate",label:(0,p.kg)("editor.bar.animation.types.vibrate",u,"Vibrate")}])],onChange:e=>n(e.detail.value)}])}
                    </div>
                  </div>
                `:""}
        </div>

        <!-- Action Animation Override removed as standalone: now included inside Bar Animation section above -->
      </div>
    `}renderActionsTab(e,t,i,a){return o.A.render(e,t,e=>a(e))}renderPreview(e,t,r,o){var l,c,m,g,x,k,$,w,z,S,C,F,M,A,T,E,B,I,N,P,q,L,D,R,U,O,V,W,j,H,G,X,Y,K,Z,J,Q,ee;const te=e,ie=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en",ae=te.percentage_type||"entity",ne="template"===ae?"entity":ae;if("time_progress"!==ne&&this._timeProgressInterval&&this._timeProgressCleanup&&(this._timeProgressCleanup(),this._timeProgressCleanup=null),"time_progress"!==ne&&"range"!==ne&&"difference"!==ne&&(!te.entity||""===te.entity.trim()))return this.renderGradientErrorState((0,p.kg)("editor.bar.error_no_entity",ie,"Select Entity"),(0,p.kg)("editor.bar.error_no_entity_desc",ie,"Choose an entity in the General tab"),"mdi:chart-box-outline");if("range"===ne){const e=te.range_start_entity,t=te.range_end_entity;if(!e||!t)return this.renderGradientErrorState((0,p.kg)("editor.bar.error_no_range",ie,"Configure Range"),(0,p.kg)("editor.bar.error_no_range_desc",ie,"Set range start and end entities in the General tab"),"mdi:arrow-expand-horizontal")}if("difference"===ne){const e=te.percentage_current_entity,i=te.percentage_total_entity;if(!e||!i)return this.renderGradientErrorState((0,p.kg)("editor.bar.error_no_difference",ie,"Configure Difference"),(0,p.kg)("editor.bar.error_no_difference_desc",ie,"Set current and total entities in the Difference configuration."),"mdi:swap-horizontal-bold");const a=[e,i].filter(e=>!(null==t?void 0:t.states[e]));if(a.length>0)return this.renderGradientErrorState((0,p.kg)("editor.bar.error_difference_not_found",ie,"Difference entities not found"),a.join(", "),"mdi:alert-circle-outline")}let re,oe,le,se=0,de=!1;const ce=e=>Math.min(Math.max(e,0),100);let pe,me,ge,be="",_e="";if(te.unified_template_mode&&te.unified_template&&(!this._templateService&&t?this._templateService=new _.I(t):this._templateService&&t&&this._templateService.updateHass(t),t)){t.__uvc_template_strings||(t.__uvc_template_strings={});const e=(0,f.KD)(te.unified_template,t,r),i=this._hashString(e),a=`unified_bar_${te.id}_${i}`;if(this._templateService){const i=(0,u.pL)(te.entity,t,{entity:te.entity}),n=(0,u.jh)(te.entity,t);this._templateService.subscribeToTemplate(e,a,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},i,r,n)}const n=null===(c=t.__uvc_template_strings)||void 0===c?void 0:c[a];if(n&&""!==String(n).trim()){const e=(0,h.cv)(n);if(!(0,h.HD)(e)){if("difference"!==ne&&void 0!==e.value){const t="number"==typeof e.value?e.value:(0,v.v)(String(e.value));isNaN(t)||(se=ce(t<=1?100*t:t),de=!0)}if(e.color&&(re=e.color),e.label&&(oe=e.label),void 0!==e.left_label&&""!==String(e.left_label).trim()&&(be=String(e.left_label).trim()),void 0!==e.right_label&&""!==String(e.right_label).trim()&&(_e=String(e.right_label).trim()),void 0!==e.value_min){const t="number"==typeof e.value_min?e.value_min:(0,v.v)(String(e.value_min));isNaN(t)||(pe=t)}if(void 0!==e.value_max){const t="number"==typeof e.value_max?e.value_max:(0,v.v)(String(e.value_max));isNaN(t)||(me=t)}e.ticks&&e.ticks.length>0&&(ge=e.ticks)}}}const ue=te.entity&&(null==t?void 0:t.states[te.entity]),he="difference"===ne&&te.percentage_current_entity&&te.percentage_total_entity&&(null==t?void 0:t.states[te.percentage_current_entity])&&(null==t?void 0:t.states[te.percentage_total_entity]),fe=!ue&&!he,ve=()=>{let e=te.percentage_min,t=te.percentage_max;const i=te.unified_template_mode&&"difference"!==ne;return i&&void 0!==pe&&(e=pe),i&&void 0!==me&&(t=me),{min:e,max:t}},ye=(e,t,i,a,n)=>{const r=void 0!==a?a:t,o=(void 0!==n?n:i)-r;return o<=0?0:ce((e-r)/o*100)};if(!te.unified_template_mode||!de){let e=te.percentage_type||"entity";if("template"===e&&(e="entity"),"time_progress"===e){const e=te.time_progress_start_entity,i=te.time_progress_end_entity,a=te.time_progress_direction||"forward";if(e&&i&&(null==t?void 0:t.states[e])&&(null==t?void 0:t.states[i])){const n=t.states[e],r=t.states[i],o=e=>{if(!e||"unknown"===e||"unavailable"===e)return 0;const t=new Date(e);if(!isNaN(t.getTime()))return t.getTime();const i=parseFloat(e);return isNaN(i)?0:1e3*i},l=o(n.state),s=o(r.state),d=Date.now();if(l>0&&s>0&&s>l){const e=s-l;if("backward"===a){const t=s-d;se=Math.min(100,Math.max(0,t/e*100)),le=t>0?this._formatDuration(t):"Complete"}else{const t=d-l;se=Math.min(100,Math.max(0,t/e*100)),le=t>=e?"Complete":this._formatDuration(t)}this._timeProgressInterval&&(clearInterval(this._timeProgressInterval),this._timeProgressInterval=null);const t=te.time_progress_update_interval||1e3;this._timeProgressInterval=setInterval(()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},t),this._timeProgressCleanup=()=>{this._timeProgressInterval&&(clearInterval(this._timeProgressInterval),this._timeProgressInterval=null)}}}}else if("attribute"===e){const{min:e,max:i}=ve(),a=te.percentage_attribute_entity||te.entity,n=te.percentage_attribute_name||"",r=a?null==t?void 0:t.states[a]:void 0,o=n?null===(m=null==r?void 0:r.attributes)||void 0===m?void 0:m[n]:void 0,l=(null===(g=null==r?void 0:r.attributes)||void 0===g?void 0:g.unit_of_measurement)||"",s=(0,v.v)(null!=o?o:"0");if(!isNaN(s))if(void 0!==e||void 0!==i)se=ye(s,0,100,e,i);else if("%"===l||String(o).toString().trim().endsWith("%"))se=ce(s);else if(null===(x=null==r?void 0:r.attributes)||void 0===x?void 0:x.max){const e=(0,v.v)(r.attributes.max),t=void 0!==(null===(k=null==r?void 0:r.attributes)||void 0===k?void 0:k.min)?(0,v.v)(r.attributes.min):0;se=ye(s,t,e)}else se=ce(s)}else if("difference"===e){const{min:e,max:i}=ve(),a=te.percentage_current_entity,n=te.percentage_total_entity,r=a&&(0,v.v)(null===($=null==t?void 0:t.states[a])||void 0===$?void 0:$.state)||0,o=n&&(0,v.v)(null===(w=null==t?void 0:t.states[n])||void 0===w?void 0:w.state)||0;se=void 0!==e||void 0!==i?ye(r,0,o,e,i):o>0?ce(r/o*100):0}else if("range"===e)se=0;else{const{min:e,max:i}=ve(),a=null==t?void 0:t.states[te.entity];let n=0,r=0,o=100,l="";a&&(n=(0,v.v)(a.state)||0,l=(null===(z=a.attributes)||void 0===z?void 0:z.unit_of_measurement)||"",void 0!==(null===(S=a.attributes)||void 0===S?void 0:S.min)&&(r=(0,v.v)(a.attributes.min)||0),void 0!==(null===(C=a.attributes)||void 0===C?void 0:C.max)?o=(0,v.v)(a.attributes.max)||100:("%"===l||"battery"===(null===(F=a.attributes)||void 0===F?void 0:F.device_class))&&(o=100)),se=ye(n,r,o,e,i)}}if(te.unified_template_mode&&"difference"===ne){const{min:e,max:i}=ve(),a=te.percentage_current_entity,n=te.percentage_total_entity,r=a&&(0,v.v)(null===(M=null==t?void 0:t.states[a])||void 0===M?void 0:M.state)||0,o=n&&(0,v.v)(null===(A=null==t?void 0:t.states[n])||void 0===A?void 0:A.state)||0;se=void 0!==e||void 0!==i?ye(r,0,o,e,i):o>0?ce(r/o*100):0}!fe||te.unified_template_mode&&("difference"!==ne||he)||(se=65);let xe="";if(te.unified_template_mode&&be)xe=be;else if(te.left_entity&&(null==t?void 0:t.states[te.left_entity])){const e=t.states[te.left_entity];try{xe=(0,b.formatEntityState)(t,te.left_entity,{includeUnit:!0})}catch(t){xe=`${e.state}${(null===(T=e.attributes)||void 0===T?void 0:T.unit_of_measurement)||""}`}}let ke="";if(te.unified_template_mode&&_e)ke=_e;else if(te.right_entity&&(null==t?void 0:t.states[te.right_entity])){const e=t.states[te.right_entity];try{ke=(0,b.formatEntityState)(t,te.right_entity,{includeUnit:!0})}catch(t){ke=`${e.state}${(null===(E=e.attributes)||void 0===E?void 0:E.unit_of_measurement)||""}`}}let $e=0;if(te.limit_entity&&(null==t?void 0:t.states[te.limit_entity])){const e=t.states[te.limit_entity],i=(0,v.v)(e.state)||0,a=te.percentage_type||"entity",{min:n,max:r}=ve();if("difference"===a){const e=te.percentage_total_entity,a=e&&(0,v.v)(null===(B=null==t?void 0:t.states[e])||void 0===B?void 0:B.state)||0;$e=void 0!==n||void 0!==r?ye(i,0,a,n,r):a>0?ce(i/a*100):0}else{const e=null==t?void 0:t.states[te.entity];let a=0,o=100;if(e){const t=(null===(I=e.attributes)||void 0===I?void 0:I.unit_of_measurement)||"";void 0!==(null===(N=e.attributes)||void 0===N?void 0:N.min)&&(a=(0,v.v)(e.attributes.min)||0),void 0!==(null===(P=e.attributes)||void 0===P?void 0:P.max)?o=(0,v.v)(e.attributes.max)||100:"%"!==t&&"battery"!==(null===(q=e.attributes)||void 0===q?void 0:q.device_class)||(o=100)}$e=ye(i,a,o,n,r)}}let we=0,ze=100,Se=-1,Ce=0,Fe=100;const Me=te.percentage_type||"entity";if("range"===Me){const{min:e,max:i}=ve();Ce=void 0!==e?e:0,Fe=void 0!==i?i:100;const a=Fe-Ce,n=te.range_start_entity,r=te.range_start_attribute;let o=Ce;if(n&&(null==t?void 0:t.states[n])){const e=t.states[n];o=r&&void 0!==(null===(L=e.attributes)||void 0===L?void 0:L[r])?(0,v.v)(e.attributes[r]):(0,v.v)(e.state),isNaN(o)&&(o=Ce)}const l=te.range_end_entity,s=te.range_end_attribute;let d=Fe;if(l&&(null==t?void 0:t.states[l])){const e=t.states[l];d=s&&void 0!==(null===(D=e.attributes)||void 0===D?void 0:D[s])?(0,v.v)(e.attributes[s]):(0,v.v)(e.state),isNaN(d)&&(d=Fe)}const c=te.range_current_entity,p=te.range_current_attribute;if(c&&(null==t?void 0:t.states[c])){const e=t.states[c],i=p&&void 0!==(null===(R=e.attributes)||void 0===R?void 0:R[p])?(0,v.v)(e.attributes[p]):(0,v.v)(e.state);!isNaN(i)&&a>0&&(Se=Math.min(100,Math.max(0,(i-Ce)/a*100)))}a>0&&(we=Math.min(100,Math.max(0,(o-Ce)/a*100)),ze=Math.min(100,Math.max(0,(d-Ce)/a*100)),we>ze&&([we,ze]=[ze,we])),se=ze-we}else{const{min:e,max:i}=ve();if(void 0!==e&&(Ce=e),void 0!==i&&(Fe=i),"difference"===(te.percentage_type||"entity")&&(void 0===e&&(Ce=0),void 0===i)){const e=te.percentage_total_entity,i=e&&(0,v.v)(null===(U=null==t?void 0:t.states[e])||void 0===U?void 0:U.state)||0;i>0&&(Fe=i)}}const Ae=te,Te=te.design||{},Ee=Te.background_color||Ae.background_color||"transparent",Be=Te.width||Ae.width||"100%",Ie=te.bar_background_color||"transparent";let Ne=null!==(O=te.height)&&void 0!==O?O:20;if("minimal"===te.bar_style){const e=Math.max(1,Math.floor(Ne/3)),t=Math.max(8,Math.min(24,3*e+6));Ne=Math.max(Ne,t+8)}const Pe=`${Ne}px`;let qe=Ne;(te.left_enabled||te.right_enabled)&&(qe+=Math.max(te.left_title_size||14,te.left_value_size||14,te.right_title_size||14,te.right_value_size||14)+16);const Le=`${qe}px`,De=null!==(W=null!==(V=te.border_radius)&&void 0!==V?V:Te.border_radius)&&void 0!==W?W:10,Re="string"==typeof De?parseInt(De,10)||10:De;let Ue=re||te.bar_color||Ae.color||"var(--primary-color)";const Oe=e=>{if(!e)return e;const t=String(e).trim();if(t.startsWith("#")||t.startsWith("rgb"))return t;try{const e=document.createElement("span");e.style.backgroundColor=t,document.body.appendChild(e);const i=getComputedStyle(e).backgroundColor;return e.remove(),i&&"rgba(0, 0, 0, 0)"!==i?i:t}catch(e){return t}},Ve=(e,t)=>{const i=[...e].sort((e,t)=>e.position-t.position);let a=i[0],n=i[i.length-1];for(let e=0;e<i.length-1;e++)if(t>=i[e].position&&t<=i[e+1].position){a=i[e],n=i[e+1];break}if(a.position===t)return a.color;if(n.position===t)return n.color;const r=n.position-a.position,o=0===r?0:(t-a.position)/r;return this.interpolateColor(a.color,n.color,o)},We=te.bar_direction||"left-to-right",je=(e,t)=>{if(null==e||""===e)return`${t}px`;if("number"==typeof e)return`${e}px`;const i=String(e).trim();return""===i||["inherit","initial","unset","auto"].includes(i.toLowerCase())?`${t}px`:/^[0-9.]+$/.test(i)?`${i}px`:i},He=(()=>{var e,t,i;const a=null!==(e=Te.font_size)&&void 0!==e?e:Ae.font_size;return null!=a&&""!==a?je(a,null!==(t=te.percentage_text_size)&&void 0!==t?t:14):je(null!==(i=te.percentage_text_size)&&void 0!==i?i:14,14)})(),Ge="right-to-left"===We?"translate(-100%, -50%) translateX(4px)":"translate(-100%, -50%) translateX(-4px)",Xe=this.normalizeBoolean(te.show_percentage,!0),Ye=this.normalizeBoolean(te.show_value,!1),Ke=te.percentage_text_alignment||"center",Ze=Math.round(se),Je=(()=>{var e,i;const a=te.percentage_type||"entity",n="template"===a?"entity":a;if("time_progress"===n&&le)return le;if(Xe&&Ye){if("difference"===n){const i=te.percentage_current_entity;if(i&&(null==t?void 0:t.states[i]))try{return(0,b.formatEntityState)(t,i,{includeUnit:!0})}catch(a){const n=t.states[i];return`${n.state}${(null===(e=n.attributes)||void 0===e?void 0:e.unit_of_measurement)||""}`}}if(fe)return"65 kWh";const a=null==t?void 0:t.states[te.entity];if(a)try{return(0,b.formatEntityState)(t,te.entity,{includeUnit:!0})}catch(e){return`${a.state}${(null===(i=a.attributes)||void 0===i?void 0:i.unit_of_measurement)||""}`}return"N/A"}return Xe?`${Ze}%`:""})();if(te.use_gradient){const e=te.gradient_stops&&te.gradient_stops.length>0?te.gradient_stops:(0,d.FB)(),t="right-to-left"===We?"to left":"to right",i=[...e].sort((e,t)=>e.position-t.position).map(e=>`${Oe(e.color)} ${e.position}%`).join(", ");if("full"===te.gradient_display_mode)Ue=`linear-gradient(${t}, ${i})`;else if("value-based"===te.gradient_display_mode){const t=[...e].sort((e,t)=>e.position-t.position),i=Ve(t,se);Ue=Oe(i)}else{const i=[...e].sort((e,t)=>e.position-t.position);if(se<=0){const e=i[0];Ue=e?Oe(e.color):Ue}else{const e=i.filter(e=>e.position<=se),a=[];if(0===e.length){const e=i[0];e&&a.push(`${e.color} 0%`,`${e.color} 100%`)}else{for(const t of e){const e=t.position/se*100,i=Math.max(0,Math.min(100,e));a.push(`${Oe(t.color)} ${i}%`)}const t=Oe(Ve(i,se));0===a.length?a.push(`${t} 0%`,`${t} 100%`):a.push(`${t} 100%`)}Ue=`linear-gradient(${t}, ${a.join(", ")})`}}}let Qe="",et="",tt="",it="";const at=e=>e.includes("linear-gradient")?te.bar_color||"var(--primary-color)":e;switch(at(Ue),te.bar_style){case"flat":Qe="box-shadow: none;";break;case"glossy":te.use_gradient?tt="\n            background-image: linear-gradient(to bottom, \n              rgba(255,255,255,0.3) 0%, \n              rgba(255,255,255,0.1) 50%, \n              rgba(0,0,0,0.1) 51%, \n              rgba(0,0,0,0.05) 100%);\n            box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);\n          ":et=`\n            background: linear-gradient(to bottom, ${Ue}, ${Ue} 50%, rgba(0,0,0,0.1) 51%, ${Ue});\n            box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);\n          `;break;case"embossed":Qe="\n          box-shadow: inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.8);\n          border: 1px solid rgba(0,0,0,0.1);\n        ",et="\n          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1);\n        ";break;case"inset":Qe="\n          box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);\n          border: 1px solid rgba(0,0,0,0.2);\n        ";break;case"gradient-overlay":te.use_gradient?tt="\n            background-image: linear-gradient(to bottom, \n              rgba(255,255,255,0.4) 0%, \n              rgba(255,255,255,0) 100%);\n          ":et=`\n            background: linear-gradient(to bottom, \n              ${Ue} 0%, \n              rgba(255,255,255,0) 100%\n            );\n          `;break;case"neon-glow":{const e=(e=>{if(e.includes("linear-gradient")&&te.use_gradient&&te.gradient_stops){const e=te.gradient_display_mode||"full";if("value-based"===e||"cropped"===e)return Ve(te.gradient_stops,se);{const e=[...te.gradient_stops].sort((e,t)=>t.position-e.position);if(e.length>0)return e[0].color}}return at(e)})(Ue),t=(e,t)=>e.startsWith("rgba(")?e.replace(/,\s*[\d.]+\s*\)$/,`, ${t})`):e.startsWith("rgb(")?e.replace("rgb(","rgba(").replace(")",`, ${t})`):e.includes("#")||e.startsWith("var(")||e.match(/^[a-z]+$/i)?`color-mix(in srgb, ${e} ${100*t}%, transparent)`:e;et=`\n            filter: brightness(1.2);\n            box-shadow: \n              0 0 7px 2px ${t(e,.7)},\n              0 0 14px 6px ${t(e,.5)},\n              0 0 20px 10px ${t(e,.3)},\n              inset 0 0 10px rgba(255, 255, 255, 0.8);\n          `,Qe="\n            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);\n            overflow: hidden;\n          "}break;case"outline":{const e=Ie||"rgba(255, 255, 255, 0.1)",t=4;Qe=`\n            border: 2px solid ${Oe(te.bar_color||"var(--primary-color)")};\n            border-radius: ${Re}px;\n            background: ${e};\n            padding: ${t}px;\n          `,et=`\n            background: ${Ue};\n            border: none;\n            box-sizing: border-box;\n            position: relative;\n            margin: 0;\n            width: ${se}%;\n            transition: width 0.3s ease;\n          `}break;case"glass":{const e=.15,t=.25;Qe=`\n            backdrop-filter: blur(${te.glass_blur_amount||8}px) saturate(180%);\n            background: linear-gradient(\n              135deg,\n              rgba(255, 255, 255, ${.8*e}) 0%,\n              rgba(255, 255, 255, ${.4*e}) 50%,\n              rgba(255, 255, 255, ${e}) 100%\n            );\n            border: 1px solid rgba(255, 255, 255, ${t});\n            border-radius: ${Re}px;\n            box-shadow: \n              0 8px 32px rgba(0, 0, 0, 0.1),\n              inset 0 1px 0 rgba(255, 255, 255, 0.4),\n              inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n            position: relative;\n          `,te.use_gradient?tt=`\n              background: ${Ue};\n              border-radius: ${Math.max(0,Re-2)}px;\n            `:et=`\n              background: ${Ue};\n              border-radius: ${Math.max(0,Re-2)}px;\n              position: relative;\n            `}break;case"metallic":te.use_gradient?tt="\n            background-image: linear-gradient(to bottom, \n              rgba(255,255,255,0.4) 0%, \n              rgba(255,255,255,0) 20%, \n              rgba(255,255,255,0) 80%, \n              rgba(0,0,0,0.2) 100%);\n            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3);\n          ":et=`\n            background: linear-gradient(to bottom, \n              rgba(255,255,255,0.4) 0%, \n              ${Ue} 20%, \n              ${Ue} 80%, \n              rgba(0,0,0,0.2) 100%);\n            box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3);\n          `;break;case"neumorphic":Qe="\n          box-shadow: inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px rgba(255,255,255,0.1);\n        ",et="\n          box-shadow: 2px 2px 4px rgba(0,0,0,0.1), -2px -2px 4px rgba(255,255,255,0.1);\n        ";break;case"dashed":const e=12,t=4,i=e+t,a="right-to-left"===We;if(se>=99.5)et=`\n            mask-image: repeating-linear-gradient(\n              90deg,\n              black 0px,\n              black ${e}px,\n              transparent ${e}px,\n              transparent ${i}px\n            );\n            -webkit-mask-image: repeating-linear-gradient(\n              90deg,\n              black 0px,\n              black ${e}px,\n              transparent ${e}px,\n              transparent ${i}px\n            );\n            border-radius: ${a?`${Re}px 0 0 ${Re}px`:`0 ${Re}px ${Re}px 0`};\n          `;else{const n=a?"270deg":"90deg";et=`\n            mask-image: \n              repeating-linear-gradient(\n                90deg,\n                black 0px,\n                black ${e}px,\n                transparent ${e}px,\n                transparent ${i}px\n              ),\n              linear-gradient(\n                ${n},\n                black 0%,\n                black calc(100% - ${t+2}px),\n                transparent calc(100% - ${t+2}px),\n                transparent 100%\n              );\n            -webkit-mask-image: \n              repeating-linear-gradient(\n                90deg,\n                black 0px,\n                black ${e}px,\n                transparent ${e}px,\n                transparent ${i}px\n              ),\n              linear-gradient(\n                ${n},\n                black 0%,\n                black calc(100% - ${t+2}px),\n                transparent calc(100% - ${t+2}px),\n                transparent 100%\n              );\n            mask-composite: intersect;\n            -webkit-mask-composite: source-in;\n            border-radius: 0;\n          `}break;case"dots":const n=4,r=[],o=[];for(let e=10;e<=se&&e<=100;e+=10)r.push(`${e}%`),o.push(`radial-gradient(circle ${n}px at ${e}% center, ${Ue} 0%, ${Ue} 100%, transparent 100%)`);et=o.length>0?`\n            background-image: ${o.join(", ")};\n            background-size: 100% 100%;\n            background-repeat: no-repeat;\n          `:"background: transparent;";break;case"minimal":Qe="\n          background: transparent;\n          border: none;\n          box-shadow: none;\n        ",et="\n          background: transparent;\n          border: none;\n          position: relative;\n        "}const nt=te.bar_animation_type||"none";let rt=!1;if(te.bar_animation_enabled&&"none"!==nt){const e=te.bar_animation_trigger_type||"state",i=te.bar_animation_entity,a=(null!==(j=te.bar_animation_value)&&void 0!==j?j:"").toString();if(i&&""!==i.trim()&&""!==a.trim()){if(null==t?void 0:t.states[i]){const n=t.states[i];let r="";if("attribute"===e){const e=te.bar_animation_attribute||"";r=e?String(null!==(G=null===(H=n.attributes)||void 0===H?void 0:H[e])&&void 0!==G?G:""):""}else r=String(null!==(X=n.state)&&void 0!==X?X:"");rt=String(r)===a}}else rt=!0;if(rt)switch(nt){case"charging":it="bar-anim-charging";break;case"pulse":it="bar-anim-pulse";break;case"blinking":it="bar-anim-blink";break;case"bouncing":it="bar-anim-bounce";break;case"glow":it="bar-anim-glow";break;case"rainbow":it="bar-anim-rainbow";break;case"bubbles":it="bar-anim-bubbles";break;case"fill":it="bar-anim-fill";break;case"ripple":it="bar-anim-ripple";break;case"traffic":it="bar-anim-traffic";break;case"heartbeat":it="bar-anim-heartbeat";break;case"flicker":it="bar-anim-flicker";break;case"shimmer":it="bar-anim-shimmer";break;case"vibrate":it="bar-anim-vibrate"}}const ot=te.bar_animation_override_type||"none";if("none"!==ot&&""!==(te.bar_animation_override_entity||"").trim()){const e=te.bar_animation_override_trigger_type||"state",i=te.bar_animation_override_entity,a=(null!==(Y=te.bar_animation_override_value)&&void 0!==Y?Y:"").toString();let n=!1;if(null==t?void 0:t.states[i]){const r=t.states[i];if("attribute"===e){const e=te.bar_animation_override_attribute||"";n=(e?String(null!==(Z=null===(K=r.attributes)||void 0===K?void 0:K[e])&&void 0!==Z?Z:""):"")===a}else n=String(null!==(J=r.state)&&void 0!==J?J:"")===a}if(n)switch(ot){case"charging":it="bar-anim-charging";break;case"pulse":it="bar-anim-pulse";break;case"blinking":it="bar-anim-blink";break;case"bouncing":it="bar-anim-bounce";break;case"glow":it="bar-anim-glow";break;case"rainbow":it="bar-anim-rainbow";break;case"bubbles":it="bar-anim-bubbles";break;case"fill":it="bar-anim-fill";break;case"ripple":it="bar-anim-ripple";break;case"traffic":it="bar-anim-traffic";break;case"heartbeat":it="bar-anim-heartbeat";break;case"flicker":it="bar-anim-flicker";break;case"shimmer":it="bar-anim-shimmer";break;case"vibrate":it="bar-anim-vibrate"}}const lt=this.resolveBarAnimationDirection(te,t),st=this.resolveBarAnimationSpeedScale(te,t),dt=""!==it?`--uc-bar-animation-direction: ${lt}; --uc-bar-animation-speed-scale: ${st};`:"";let ct=Number(null!==(Q=te.bar_width)&&void 0!==Q?Q:100);if(Number.isNaN(ct)){const e=this.normalizeSizeValue(null!==(ee=te.bar_width)&&void 0!==ee?ee:100);ct=e&&"%"===e.unit?e.value:100}const pt=Math.max(1,Math.min(100,ct)),mt=this.normalizeSizeValue(void 0!==te.bar_width&&null!==te.bar_width?te.bar_width:100),gt=void 0!==Te.width&&null!==Te.width&&""!==String(Te.width).trim()?Te.width:Ae.width,bt=null!=gt&&""!==String(gt).trim()?this.normalizeSizeValue(gt):null;let _t=!1;_t=bt?"%"===bt.unit&&bt.value>=100:!mt||"%"===mt.unit&&mt.value>=100;const ut=void 0!==Te.max_width&&null!==Te.max_width&&""!==String(Te.max_width).trim()?Te.max_width:Ae.max_width,ht=null!=ut&&""!==String(ut).trim()?this.normalizeSizeValue(ut):null;_t&&ht&&(_t="%"===ht.unit&&ht.value>=100);const ft=`${pt}%`,vt=!!te.show_scale;let yt="flex-start";switch(te.bar_alignment){case"left":yt="flex-start";break;case"center":yt="center";break;case"right":yt="flex-end"}const xt=Object.assign({padding:Te.padding_top||Te.padding_bottom||Te.padding_left||Te.padding_right||Ae.padding_top||Ae.padding_bottom||Ae.padding_left||Ae.padding_right?`${this.addPixelUnit(Te.padding_top||Ae.padding_top)||"0px"} ${this.addPixelUnit(Te.padding_right||Ae.padding_right)||"0px"} ${this.addPixelUnit(Te.padding_bottom||Ae.padding_bottom)||"0px"} ${this.addPixelUnit(Te.padding_left||Ae.padding_left)||"0px"}`:"0",margin:Te.margin_top||Te.margin_bottom||Te.margin_left||Te.margin_right||Ae.margin_top||Ae.margin_bottom||Ae.margin_left||Ae.margin_right?`${Te.margin_top||Ae.margin_top||"0px"} ${Te.margin_right||Ae.margin_right||"0px"} ${Te.margin_bottom||Ae.margin_bottom||"0px"} ${Te.margin_left||Ae.margin_left||"0px"}`:"0",background:Ee,backgroundImage:this.getBackgroundImageCSS(Object.assign(Object.assign({},Ae),Te),t),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",border:(Te.border_style||Ae.border_style)&&"none"!==(Te.border_style||Ae.border_style)?`${this.addPixelUnit(Te.border_width||Ae.border_width)||"1px"} ${Te.border_style||Ae.border_style} ${Te.border_color||Ae.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(Te.border_radius||Ae.border_radius)||"0",position:Te.position||Ae.position||"relative",top:Te.top||Ae.top||"auto",bottom:Te.bottom||Ae.bottom||"auto",left:Te.left||Ae.left||"auto",right:Te.right||Ae.right||"auto",zIndex:Te.z_index||Ae.z_index||"auto",width:Be,height:Te.height||Ae.height||Le,maxWidth:Te.max_width||Ae.max_width||"100%",maxHeight:Te.max_height||Ae.max_height||"none",minWidth:Te.min_width||Ae.min_width||(_t?"0":"auto"),minHeight:Te.min_height||Ae.min_height||"auto",overflow:Te.overflow||Ae.overflow||"visible",boxSizing:"border-box",clipPath:Te.clip_path||Ae.clip_path||"none",backdropFilter:Te.backdrop_filter||Ae.backdrop_filter||"none",boxShadow:Te.box_shadow_h&&Te.box_shadow_v?`${Te.box_shadow_h||"0"} ${Te.box_shadow_v||"0"} ${Te.box_shadow_blur||"0"} ${Te.box_shadow_spread||"0"} ${Te.box_shadow_color||"rgba(0,0,0,0.1)"}`:Ae.box_shadow_h&&Ae.box_shadow_v?`${Ae.box_shadow_h||"0"} ${Ae.box_shadow_v||"0"} ${Ae.box_shadow_blur||"0"} ${Ae.box_shadow_spread||"0"} ${Ae.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",color:Te.color||Ae.color||"var(--primary-text-color)",fontFamily:Te.font_family||Ae.font_family||"inherit",fontSize:Te.font_size&&"string"==typeof Te.font_size&&""!==Te.font_size.trim()?/[a-zA-Z%]/.test(Te.font_size)?Te.font_size:`${Te.font_size}px`:void 0!==Ae.font_size?`${Ae.font_size}px`:"inherit",textAlign:Te.text_align||Ae.text_align||"inherit",lineHeight:Te.line_height||Ae.line_height||"inherit",letterSpacing:Te.letter_spacing||Ae.letter_spacing||"normal",textShadow:Te.text_shadow_h&&Te.text_shadow_v?`${Te.text_shadow_h||"0"} ${Te.text_shadow_v||"0"} ${Te.text_shadow_blur||"0"} ${Te.text_shadow_color||"rgba(0,0,0,0.25)"}`:Ae.text_shadow_h&&Ae.text_shadow_v?`${Ae.text_shadow_h||"0"} ${Ae.text_shadow_v||"0"} ${Ae.text_shadow_blur||"0"} ${Ae.text_shadow_color||"rgba(0,0,0,0.25)"}`:"none",display:"flex",flexDirection:"column"},(0,y.q9)(Object.assign(Object.assign({},Ae),Te))),kt=this.createGestureHandlers(te.id,{tap_action:te.tap_action,hold_action:te.hold_action,double_tap_action:te.double_tap_action,entity:te.entity,module:te},t,r),$t=this.getHoverEffectClass(e);return this.wrapWithAnimation(a.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="bar-module-preview"
        data-layout-grow="${_t?"true":"false"}"
        style="${this.buildStyleString(xt)}"
        ${(0,n.K)(e=>{e&&requestAnimationFrame(()=>{requestAnimationFrame(()=>{const t=e.parentElement;if("true"===(null==t?void 0:t.getAttribute("data-flex-constrained"))){const t=e.querySelector(".bar-container");t&&(t.style.width="100%")}this.scheduleScaleEdgeLabelClamping(e),this.ensureScaleClampObserver(e)})})})}
      >
        <!-- Bar Container -->
        <div 
          class="bar-flex-wrapper"
          style="display: flex; justify-content: ${yt}; width: 100%; min-height: ${Pe}; align-items: center; min-width: 0; overflow: visible;">
          <div
            class="bar-container ${$t}"
            style="
            width: ${_t?"100%":ft};
            max-width: 100%;
            flex: ${_t?"1 1 0":"0 0 auto"};
            height: ${Pe}; 
            background: ${Ie};
            ${_t?"min-width: 0;":"min-width: 80px;"}
            border-radius: ${Re}px;
            overflow: visible;
            position: relative;
            transition: ${!1!==te.animation?"all 0.3s ease":"none"};
            border: ${"outline"!==te.bar_style?`1px solid ${te.bar_border_color||Ae.border_color||"var(--divider-color)"}`:"none"};
            ${Qe};
            cursor: ${te.tap_action&&"nothing"!==te.tap_action.action||te.hold_action&&"nothing"!==te.hold_action.action||te.double_tap_action&&"nothing"!==te.double_tap_action.action?"pointer":"default"};
            z-index: 1;
          "
          @pointerdown=${kt.onPointerDown}
          @pointermove=${kt.onPointerMove}
          @pointerup=${kt.onPointerUp}
          @pointerleave=${kt.onPointerLeave}
          @pointercancel=${kt.onPointerCancel}
        >
            <!-- Bar Fill / Dots Style / Minimal Style -->
            ${"minimal"===te.bar_style?(()=>{var e;const t="right-to-left"===We,i=t?100-se:se;let n=te.bar_color||"var(--primary-color)",r=te.dot_color||te.bar_color||"var(--primary-color)";if(te.use_gradient&&te.gradient_stops&&te.gradient_stops.length>0){const e=[...te.gradient_stops].sort((e,t)=>e.position-t.position),t=te.gradient_display_mode||"full",i="right-to-left"===We?"to left":"to right";if("full"===t)n=`linear-gradient(${i}, ${e.map(e=>`${Oe(e.color)} ${e.position}%`).join(", ")})`,r=te.dot_color||Oe(Ve(e,se));else if("cropped"===t)if(se<=0){const t=Oe(e[0].color);n=t,r=te.dot_color||t}else{const t=[...e.filter(e=>e.position<=se)],a=Ve(e,se);if(t.some(e=>e.position===se)||t.push({id:`cropped_${se}`,position:se,color:a}),t.sort((e,t)=>e.position-t.position),0===t.length){const t=Oe(e[0].color);n=t,r=te.dot_color||t}else n=`linear-gradient(${i}, ${t.map(e=>Object.assign(Object.assign({},e),{position:se>0?e.position/se*100:0})).map(e=>`${Oe(e.color)} ${Math.min(100,Math.max(0,e.position))}%`).join(", ")})`,r=te.dot_color||Oe(a)}else if("value-based"===t){const t=Ve(e,se),i=Oe(t);n=i,r=te.dot_color||i}}const o="cropped"===(te.gradient_display_mode||"full")&&te.use_gradient,l=null!==(e=te.height)&&void 0!==e?e:20,s=Math.max(1,Math.floor(l/3)),d=Math.max(8,Math.min(24,3*s+6)),c=d/2,p=`clamp(${c}px, ${i}%, calc(100% - ${c}px))`;return a.qy`
                      ${o?a.qy`
                            <!-- Background track (unfilled portion) -->
                            <div
                              style="
                                position: absolute;
                                top: 50%;
                                left: 0;
                                right: 0;
                                height: ${s}px;
                            background: ${te.bar_background_color||"rgba(var(--rgb-primary-color), 0.2)"};
                            transform: translateY(-50%);
                            border-radius: ${Math.max(1,Math.floor(s/2))}px;
                            opacity: 0.6;
                          "
                            ></div>

                            <!-- Filled track portion (with gradient) -->
                            <div
                              class="minimal-track ${it}"
                              style="
                                position: absolute;
                                top: 50%;
                                left: ${t?100-se+"%":"0"};
                                width: ${se}%;
                                height: ${s}px;
                            background: ${n};
                            transform: translateY(-50%);
                            border-radius: ${Math.max(1,Math.floor(s/2))}px;
                            opacity: 0.8;
                            transition: ${!1!==te.animation?"all 0.3s ease":"none"};
                            ${dt}
                          "
                            ></div>
                          `:a.qy`
                            <!-- Track line (full/value-based modes) -->
                            <div
                              class="minimal-track ${it}"
                              style="
                                position: absolute;
                                top: 50%;
                                left: 0;
                                right: 0;
                                height: ${s}px;
                            background: ${n};
                            transform: translateY(-50%);
                            border-radius: ${Math.max(1,Math.floor(s/2))}px;
                            opacity: 0.8;
                            transition: ${!1!==te.animation?"all 0.3s ease":"none"};
                            ${dt}
                          "
                            ></div>
                          `}

                      <!-- Dot/Icon indicator -->
                      ${(()=>{const e=!1!==te.minimal_icon_size_auto?Math.max(16,Math.min(32,Math.max(24,1.2*l))):te.minimal_icon_size||24,t=!1!==te.minimal_icon_use_dot_color?r:te.minimal_icon_color||r,i=te.minimal_icon_mode||"icon-in-dot",n=te.minimal_icon_enabled&&te.minimal_icon;return"icon-only"===i&&n?a.qy`
                            <div
                              class="minimal-icon ${it}"
                              style="
                                position: absolute;
                                top: 50%;
                                left: ${p};
                                width: ${e}px;
                                height: ${e}px;
                                transform: translate(-50%, -50%);
                                transition: ${!1!==te.animation?"left 0.3s ease, color 0.3s ease":"none"};
                                z-index: 3;
                                will-change: left, color;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                ${dt}
                              "
                            >
                              <ha-icon
                                icon="${te.minimal_icon}"
                                style="
                                  color: ${t};
                                  width: ${e}px;
                                  height: ${e}px;
                                  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                "
                              ></ha-icon>
                            </div>
                          `:"icon-in-dot"===i&&n?a.qy`
                            <div
                              class="minimal-dot ${it}"
                              style="
                                position: absolute;
                                top: 50%;
                                left: ${p};
                                width: ${d}px;
                                height: ${d}px;
                                background: ${r};
                                border: 2px solid var(--card-background-color);
                                border-radius: 50%;
                                transform: translate(-50%, -50%);
                                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                                transition: ${!1!==te.animation?"left 0.3s ease, background 0.3s ease":"none"};
                                z-index: 3;
                                will-change: left, background;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                ${dt}
                              "
                            >
                              <ha-icon
                                icon="${te.minimal_icon}"
                                style="
                                  color: ${t};
                                  width: ${Math.max(8,e-4)}px;
                                  height: ${Math.max(8,e-4)}px;
                                  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                "
                              ></ha-icon>
                            </div>
                          `:a.qy`
                            <div
                              class="minimal-dot ${it}"
                              style="
                                position: absolute;
                                top: 50%;
                                left: ${p};
                                width: ${d}px;
                                height: ${d}px;
                                background: ${r};
                                border: 2px solid var(--card-background-color);
                                border-radius: 50%;
                                transform: translate(-50%, -50%);
                                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                                transition: ${!1!==te.animation?"left 0.3s ease, background 0.3s ease":"none"};
                                z-index: 3;
                                will-change: left, background;
                                ${dt}
                              "
                            ></div>
                          `})()}
                    `})():"dots"===te.bar_style?(()=>{var e;const t=null!==(e=te.height)&&void 0!==e?e:20,i=Math.max(6,Math.floor(t-8)),n=Ie,r=te.use_gradient&&te.gradient_stops&&te.gradient_stops.length>0?[...te.gradient_stops].sort((e,t)=>e.position-t.position):(0,d.FB)(),o=e=>{const t=[...r].sort((e,t)=>e.position-t.position);let i=t[0],a=t[t.length-1];for(let n=0;n<t.length-1;n++)if(e>=t[n].position&&e<=t[n+1].position){i=t[n],a=t[n+1];break}if(i.position===e)return i.color;if(a.position===e)return a.color;const n=a.position-i.position,o=0===n?0:(e-i.position)/n;return this.interpolateColor(i.color,a.color,o)},l=te.gradient_display_mode||"full",s=Array.from({length:20},(e,t)=>{const r=Math.round((t+1)/21*100),s="right-to-left"===We?100-r<=se:r<=se;let d=Ue;if(te.use_gradient){if("full"===l)if(s){const e=se>0?Math.min(100,Math.max(0,Math.round(r/Math.max(1,se)*100))):0;d=o(e)}else d=n;else if("cropped"===l)d=s?o(r):n;else if("value-based"===l){const e=o(se);d=s?e:n}}else d=s?te.bar_color||Ae.color||"var(--primary-color)":n;return a.qy`<div
                          style="width:${i}px;height:${i}px;border-radius:50%;background:${d};flex-shrink:0;"
                        ></div>`}),c="right-to-left"===We?s.reverse():s;return a.qy`<div
                        class="dots-container"
                        style="display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:0 ${Math.max(2,Math.floor(i/3))}px;box-sizing:border-box;flex-direction:${"right-to-left"===We?"row-reverse":"row"};"
                      >
                        ${c}
                      </div>`})():(()=>{const e="right-to-left"===We,t="range"===Me,i=t?ze-we:se,n=t?we:0;let r="";return r=t||se>=99.5?`${Re}px`:e?`0 ${Re}px ${Re}px 0`:`${Re}px 0 0 ${Re}px`,a.qy`
                        <div
                          class="bar-fill ${it}"
                          style="
                        width: ${i}%;
                        height: 100%;
                        background: ${Ue};
                        transition: ${!1!==te.animation?"width 0.3s ease, left 0.3s ease":"none"};
                        border-radius: ${r};
                        position: absolute;
                        ${t?`left: ${n}%;`:e?"right: 0;":"left: 0;"}
                        top: 0;
                        bottom: 0;
                        will-change: width${t?", left":""};
                        backface-visibility: hidden;
                        ${et}
                        ${dt}
                      "
                        >
                          ${tt?a.qy` <div
                                class="bar-fill-overlay"
                                style="
                                position: absolute;
                                inset: 0;
                                border-radius: inherit;
                                pointer-events: none;
                                ${tt}
                              "
                              ></div>`:""}
                        </div>
                      `})()}

            <!-- Limit Indicator -->
            ${te.limit_entity&&(null==t?void 0:t.states[te.limit_entity])&&$e>=0?a.qy`
                    <div
                      class="bar-limit-line"
                      style="
                    position: absolute; 
                    top: 0; 
                    bottom: 0; 
                    left: ${$e}%; 
                    width: 2px; 
                    background-color: ${te.limit_color||"var(--warning-color)"}; 
                    z-index: 5; 
                    transform: ${$e<=.5?"translateX(0)":$e>=99.5?"translateX(-100%)":"translateX(-50%)"};
                  "
                      title="${(()=>{var e;try{const a=null===(e=t.states[te.limit_entity])||void 0===e?void 0:e.state;return(async()=>{const{formatEntityState:e}=await Promise.resolve().then(i.bind(i,9760));e(t,te.limit_entity,{state:a,includeUnit:!0})})(),`Limit: ${a}`}catch(e){return"Limit"}})()}"
                    ></div>
                  `:""}

            <!-- Range Current Value Marker -->
            ${"range"===Me&&Se>=0?a.qy`
                    <div
                      class="bar-current-marker"
                      style="
                        position: absolute;
                        top: -4px;
                        bottom: -4px;
                        left: ${Se}%;
                        width: 4px;
                        background: ${te.range_current_color||"var(--accent-color)"};
                        border-radius: 2px;
                        z-index: 6;
                        transform: translateX(-50%);
                        box-shadow: 0 0 4px rgba(0,0,0,0.3);
                        transition: ${!1!==te.animation?"left 0.3s ease":"none"};
                      "
                      title="${(()=>{var e,i;try{const a=te.range_current_entity,n=te.range_current_attribute;if(a&&(null==t?void 0:t.states[a])){const r=t.states[a];return`Current: ${n&&void 0!==(null===(e=r.attributes)||void 0===e?void 0:e[n])?r.attributes[n]:r.state}${(null===(i=r.attributes)||void 0===i?void 0:i.unit_of_measurement)||""}`}return"Current"}catch(e){return"Current"}})()}"
                    ></div>
                  `:""}

            <!-- Percentage Text (Inside Bar) -->
            <div
              class="percentage-text"
              style="
                display: ${Xe?"block":"none"};
                position: absolute;
                top: 50%;
                left: ${"left"===Ke?"8px":"right"===Ke?"calc(100% - 32px)":"follow-fill"===Ke?`${Math.min(se,100)}%`:"50%"};
                transform: ${"center"===Ke?"translate(-50%, -50%)":"follow-fill"===Ke?Ge:"translate(0, -50%)"};
                text-align: ${"follow-fill"===Ke?"right":Ke};
                font-size: ${He};
                color: ${te.percentage_text_color||Te.color||Ae.color||"white"};
                font-weight: ${te.percentage_text_bold?"bold":"600"};
                font-style: ${te.percentage_text_italic?"italic":"normal"};
                text-decoration: ${te.percentage_text_strikethrough?"line-through":"none"};
                z-index: 10;
                text-shadow: 0 1px 2px rgba(0,0,0,0.5);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
              "
            >
              ${Je}
            </div>
          </div>

          ${"difference"!==ne&&!(null==t?void 0:t.states[te.entity])&&te.entity?a.qy`
                  <div
                    class="entity-error"
                    style="color: var(--error-color); font-size: 12px; margin-top: 4px;"
                  >
                    Entity not found: ${te.entity}
                  </div>
                `:""}
        </div>

        <!-- Scale/Tick Marks: own row — when "below", always directly under the bar (never inline with labels) -->
        ${vt?a.qy`
                <div
                  class="bar-scale-standalone-host"
                  style="
                    width: 100%;
                    display: flex;
                    justify-content: ${"left"===te.bar_alignment?"flex-start":"right"===te.bar_alignment?"flex-end":"center"};
                    flex-shrink: 0;
                    order: ${"above"===te.scale_position?"-1":"0"};
                    margin-top: ${"above"!==te.scale_position?"4px":"0"};
                    margin-bottom: ${"above"===te.scale_position?"4px":"0"};
                  "
                >
                  ${(()=>{var e,i;if(!vt)return a.qy``;const n=te.scale_divisions||5,r=!1!==te.scale_show_labels,o=te.scale_label_size||10,l=te.scale_label_color||"var(--secondary-text-color)",s=te.scale_tick_color||"var(--divider-color)",d=te.scale_position||"below",c=this.normalizeBoolean(te.scale_clamp_edge_labels,!0),p=this.normalizeBoolean(te.scale_mobile_options_enabled,!1),m=Math.max(320,Math.min(640,Number(te.scale_mobile_breakpoint||420))),g=p&&"undefined"!=typeof window&&"function"==typeof window.matchMedia&&window.matchMedia(`(max-width: ${m}px)`).matches,b=g&&this.normalizeBoolean(te.scale_mobile_reduce_label_density,!1),_=g&&this.normalizeBoolean(te.scale_mobile_abbreviate_labels,!1),u=Fe-Ce,h=te.percentage_type||"entity",f="template"===h?"entity":h;let y="";if(("entity"===f||"attribute"===f)&&te.entity&&(null==t?void 0:t.states[te.entity])){const a=t.states[te.entity];("%"===(null===(e=a.attributes)||void 0===e?void 0:e.unit_of_measurement)||"battery"===(null===(i=a.attributes)||void 0===i?void 0:i.device_class))&&(y="%")}const x=te.scale_custom_ticks||"",k=te.scale_custom_labels||"";let $;const w=e=>{const t=(e||"").toLowerCase();return"-"===t||"_"===t||"none"===t||"{none}"===t||"{{none}}"===t||"hide"===t};if(ge&&ge.length>0)$=ge.map(e=>{const t=u>0?Math.min(100,Math.max(0,(e.position-Ce)/u*100)):0,i=e.label,a=void 0!==i&&""!==i;if(a&&w(i))return{position:t,label:null,color:e.color};const n=a?i:Number.isInteger(e.position)?String(e.position):e.position.toFixed(1);return{position:t,label:a||!y||String(n).includes("%")?n:`${n}${y}`,color:e.color}});else if(x.trim()){const e=(0,v.E)(x),t=k.split(",").map(e=>e.trim());$=e.map((e,i)=>{const a=u>0?Math.min(100,Math.max(0,(e-Ce)/u*100)):0,n=t[i],r=void 0!==n&&""!==n;if(w(n))return{position:a,label:null};const o=r?n:Number.isInteger(e)?String(e):e.toFixed(1);return{position:a,label:r||!y||String(o).includes("%")?o:`${o}${y}`}})}else $=Array.from({length:n+1},(e,t)=>{const i=Ce+u*t/n,a=t/n*100,r=Number.isInteger(i)?String(i):i.toFixed(1);return{position:a,label:y?`${r}${y}`:r}});const z=r?`${o+12}px`:"12px";return a.qy`
        <div
          class="bar-scale"
          data-clamp-edge-labels="${c?"true":"false"}"
          style="
            position: relative;
            display: block;
            width: ${ft};
            height: ${z};
            margin-top: 0;
            margin-bottom: 0;
            overflow: visible;
            align-self: ${"left"===te.bar_alignment?"flex-start":"right"===te.bar_alignment?"flex-end":"center"};
          "
        >
          ${$.map((e,t)=>{const i=0===t,n=t===$.length-1,c=b&&0!==t&&t!==$.length-1&&t%2==1,p=e.label,m=_&&"string"==typeof p?this.formatMobileScaleLabel(p):p,g=e.color||s,u=e.color||l;return a.qy`
                <div
                  class="scale-tick"
                  style="
                    position: absolute;
                    left: ${e.position}%;
                    top: 0;
                    width: 0;
                    display: flex;
                    flex-direction: ${"above"===d?"column-reverse":"column"};
                    align-items: center;
                    min-width: 0;
                    overflow: visible;
                  "
                >
                  <div
                    style="
                      width: 1px;
                      height: 6px;
                      background: ${g};
                      flex-shrink: 0;
                    "
                  ></div>
                  ${r&&null!==m&&!c?a.qy`
                        <span
                          class="scale-label ${i?"edge-start":""} ${n?"edge-end":""}"
                          data-scale-index="${t}"
                          style="
                            font-size: ${o}px;
                            color: ${u};
                            margin-top: ${"below"===d?"2px":"0"};
                            margin-bottom: ${"above"===d?"2px":"0"};
                            white-space: nowrap;
                            transform: translateX(0);
                          "
                        >
                          ${m}
                        </span>
                      `:""}
                </div>
              `})}
        </div>
      `})()}
                </div>
              `:""}

        <!-- Left and Right Side Labels (Below Bar) -->
        ${te.left_enabled||te.right_enabled?a.qy`
                <div
                  class="bar-labels-below"
                  style="display: flex; justify-content: ${te.label_alignment||"space-between"}; align-items: center; margin-top: 8px; gap: 16px; width: 100%; overflow: hidden; box-sizing: border-box;"
                >
                  ${te.left_enabled?(()=>{let e=null,i=!1,n=0,o=0,l=null;const d=te.left_entity||te.entity;return a.qy`
                          <div
                            class="left-side-below"
                            style="text-align: left; flex: 1; min-width: 0; overflow: hidden; cursor: pointer;"
                            @pointerdown=${()=>{i=!1,e=setTimeout(()=>{i=!0,te.left_hold_action&&"nothing"!==te.left_hold_action.action&&s.K.handleAction(te.left_hold_action,t,document.body,r,d,te)},500)}}
                            @pointerup=${a=>{if(a.stopPropagation(),e&&(clearTimeout(e),e=null),i)return void(i=!1);const c=Date.now();c-o<300&&1===n?(l&&(clearTimeout(l),l=null),n=0,te.left_double_tap_action&&"nothing"!==te.left_double_tap_action.action&&s.K.handleAction(te.left_double_tap_action,t,a.target,r,d,te)):(n=1,o=c,l=setTimeout(()=>{n=0,te.left_tap_action&&"nothing"===te.left_tap_action.action||s.K.handleAction(te.left_tap_action||{action:"default"},t,a.target,r,d,te)},300))}}
                            @pointercancel=${()=>{e&&clearTimeout(e),i=!1}}
                          >
                            ${te.left_title&&te.left_title.trim()?a.qy`
                                  <span
                                    style="font-size: ${Te.font_size?`${Math.min(Te.font_size,16)}px`:`${Math.min(te.left_title_size||14,16)}px`}; color: ${Te.color||te.left_title_color||Ae.color||"var(--primary-text-color)"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                                  >
                                    ${te.left_title}:
                                  </span>
                                `:""}
                            <span
                              style="font-size: ${Te.font_size?`${Math.min(Te.font_size,16)}px`:`${Math.min(te.left_value_size||14,16)}px`}; font-weight: 600; color: ${Te.color||te.left_value_color||Ae.color||"var(--primary-text-color)"}; margin-left: ${te.left_title&&te.left_title.trim()?"4px":"0"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                            >
                              ${xe}
                            </span>
                          </div>
                        `})():a.qy`<div></div>`}
                  ${te.right_enabled?(()=>{let e=null,i=!1,n=0,o=0,l=null;const d=te.right_entity||te.entity;return a.qy`
                          <div
                            class="right-side-below"
                            style="text-align: right; flex: 1; min-width: 0; overflow: hidden; cursor: pointer;"
                            @pointerdown=${()=>{i=!1,e=setTimeout(()=>{i=!0,te.right_hold_action&&"nothing"!==te.right_hold_action.action&&s.K.handleAction(te.right_hold_action,t,document.body,r,d,te)},500)}}
                            @pointerup=${a=>{if(a.stopPropagation(),e&&(clearTimeout(e),e=null),i)return void(i=!1);const c=Date.now();c-o<300&&1===n?(l&&(clearTimeout(l),l=null),n=0,te.right_double_tap_action&&"nothing"!==te.right_double_tap_action.action&&s.K.handleAction(te.right_double_tap_action,t,a.target,r,d,te)):(n=1,o=c,l=setTimeout(()=>{n=0,te.right_tap_action&&"nothing"===te.right_tap_action.action||s.K.handleAction(te.right_tap_action||{action:"default"},t,a.target,r,d,te)},300))}}
                            @pointercancel=${()=>{e&&clearTimeout(e),i=!1}}
                          >
                            ${te.right_title&&te.right_title.trim()?a.qy`
                                  <span
                                    style="font-size: ${Te.font_size?`${Math.min(Te.font_size,16)}px`:`${Math.min(te.right_title_size||14,16)}px`}; color: ${Te.color||te.right_title_color||Ae.color||"var(--primary-text-color)"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                                  >
                                    ${te.right_title}:
                                  </span>
                                `:""}
                            <span
                              style="font-size: ${Te.font_size?`${Math.min(Te.font_size,16)}px`:`${Math.min(te.right_value_size||14,16)}px`}; font-weight: 600; color: ${Te.color||te.right_value_color||Ae.color||"var(--primary-text-color)"}; margin-left: ${te.right_title&&te.right_title.trim()?"4px":"0"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                            >
                              ${ke}
                            </span>
                          </div>
                        `})():a.qy`<div></div>`}
                </div>
              `:""}
        </div>
      </div>
    `,e,t)}_hashString(e){let t=0;for(let i=0;i<e.length;i+=1)t=(t<<5)-t+e.charCodeAt(i),t|=0;return Math.abs(t)}_formatDuration(e){const t=Math.abs(e),i=Math.floor(t/1e3),a=Math.floor(i/60),n=Math.floor(a/60),r=Math.floor(n/24);if(r>0){const e=n%24;return e>0?`${r}d ${e}h`:`${r}d`}if(n>0){const e=a%60;return e>0?`${n}h ${e}m`:`${n}h`}if(a>0){const e=i%60;return e>0&&a<10?`${a}m ${e}s`:`${a}m`}return`${i}s`}validate(e){const t=e,i=[...super.validate(e).errors];return t.height&&(t.height<5||t.height>200)&&i.push("Bar height must be between 5 and 200 pixels"),t.border_radius&&(t.border_radius<0||t.border_radius>100)&&i.push("Border radius must be between 0 and 100 pixels"),t.limit_entity&&""!==t.limit_entity.trim()&&(t.limit_entity.includes(".")||i.push("Limit entity must be a valid entity ID (e.g., sensor.battery_limit)")),{valid:0===i.length,errors:i}}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .bar-module-preview {\n        display: block; /* ensure bar occupies width of its container */\n        width: 100%;\n        max-width: 100%;\n        overflow: visible;\n        box-sizing: border-box;\n        min-width: 80px; /* keep a visible track inside flex rows */\n        position: relative;\n        z-index: 0; /* Establish stacking context */\n      }\n      \n      /* When parent wrapper is flex-constrained, bar flex wrapper should be auto width */\n      /* so justify-content: center/flex-end can position the bar correctly */\n      [data-flex-constrained="true"] .bar-module-preview .bar-flex-wrapper {\n        width: auto !important;\n      }\n      \n      .bar-container {\n        width: 100%;\n        position: relative;\n        display: block;\n        box-sizing: border-box;\n        min-width: 0; /* allow flex parent to size correctly */\n        /* Ensure minimal style dots stay within container bounds */\n        contain: layout style;\n      }\n      \n      /* Minimal style specific containment */\n      .bar-container.minimal-style {\n        overflow: visible;\n        isolation: isolate; /* Create new stacking context */\n      }\n      \n      .bar-fill {\n        position: relative;\n        z-index: 1;\n        overflow: hidden; /* Keep overlay animations clipped to rounded corners */\n      }\n      \n      .bar-fill-overlay {\n        position: absolute;\n        inset: 0;\n        pointer-events: none;\n        z-index: 2;\n        overflow: hidden;\n        mix-blend-mode: normal;\n      }\n      \n      /* Ensure overlay inherits border radius properly */\n      .bar-fill-overlay {\n        border-radius: inherit;\n      }\n      \n      /* Outline style animation */\n      @keyframes outline-pulse {\n        0%, 100% { opacity: 0.6; }\n        50% { opacity: 1; }\n      }\n      \n      .bar-limit-line {\n        opacity: 0.9;\n        transition: opacity 0.2s ease;\n      }\n      \n      .bar-limit-line:hover {\n        opacity: 1;\n      }\n      \n      .bar-name {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 8px;\n        user-select: none;\n        word-wrap: break-word;\n      }\n      \n      .bar-value {\n        user-select: none;\n        text-shadow: 0 1px 2px rgba(0,0,0,0.1);\n      }\n      \n      .bar-value-outside {\n        user-select: none;\n        text-align: center;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      \n      .entity-error {\n        font-size: 12px;\n        color: var(--error-color);\n        margin-top: 6px;\n        font-style: italic;\n        opacity: 0.8;\n      }\n      \n      .settings-section {\n        margin-bottom: 16px;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n      \n      .settings-section * {\n        box-sizing: border-box;\n      }\n      \n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        margin-bottom: 12px !important;\n        padding-bottom: 0 !important;\n        border-bottom: none !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n      \n      .settings-section label {\n        display: block;\n        font-weight: 500;\n        margin-bottom: 4px;\n        color: var(--primary-text-color);\n      }\n      \n      .settings-section input,\n      .settings-section select {\n        width: 100%;\n        max-width: 100%;\n        padding: 8px;\n        border: 1px solid var(--divider-color);\n        border-radius: 4px;\n        background: var(--card-background-color);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        box-sizing: border-box;\n      }\n      \n      .settings-section .checkbox-wrapper {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-weight: 500;\n      }\n      \n      .settings-section .checkbox-wrapper input[type="checkbox"] {\n        width: auto;\n        margin: 0;\n      }\n      \n      .help-text {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin: 4px 0 0 0;\n        opacity: 0.8;\n        word-wrap: break-word;\n      }\n      \n      .number-input,\n      .text-input,\n      .entity-input,\n      .select-input {\n        transition: border-color 0.2s ease;\n      }\n      \n      .number-input:focus,\n      .text-input:focus,\n      .entity-input:focus,\n      .select-input:focus {\n        outline: none;\n        border-color: var(--primary-color);\n        box-shadow: 0 0 0 1px var(--primary-color);\n      }\n      \n      /* Fix padding overflow */\n      .module-general-settings {\n        max-width: 100%;\n        /* Allow dropdown menus to render outside local containers */\n        overflow: visible;\n      }\n      \n      .module-general-settings { }\n      /* Dropdown positioning fixes scoped to Bar module (defensive in case globals miss) */\n      /* Let HA handle dropdown positioning naturally */\n      .bar-module-preview .settings-section {\n        overflow: visible;\n      }\n\n      .module-general-settings > * {\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Conditional Fields Grouping CSS */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 8px 8px 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      .conditional-fields-group:hover {\n        background: rgba(var(--rgb-primary-color), 0.12);\n      }\n\n      .conditional-fields-header {\n        background: rgba(var(--rgb-primary-color), 0.15);\n        padding: 12px 16px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        border-bottom: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      .conditional-fields-content {\n        padding: 16px;\n      }\n\n      .conditional-fields-content > .field-title:first-child {\n        margin-top: 0 !important;\n      }\n\n      @keyframes slideInFromLeft {\n        from { \n          opacity: 0; \n          transform: translateX(-10px); \n        }\n        to { \n          opacity: 1; \n          transform: translateX(0); \n        }\n      }\n\n      /* Proper form field arrangement: Title -> Description -> Field */\n      .settings-section ha-form {\n        --ha-form-field-margin: 8px 0;\n      }\n\n      .settings-section ha-form::part(field) {\n        margin-bottom: 8px;\n      }\n\n      .settings-section ha-form .ha-form-label {\n        font-size: 14px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n        margin-bottom: 4px;\n        display: block;\n      }\n\n      .settings-section ha-form .ha-form-description {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-bottom: 8px;\n        display: block;\n        opacity: 0.8;\n        line-height: 1.4;\n      }\n\n      .settings-section ha-form mwc-formfield {\n        --mdc-typography-body2-font-size: 14px;\n      }\n\n      .settings-section ha-form ha-switch {\n        --switch-checked-color: var(--primary-color);\n        --switch-unchecked-color: var(--disabled-color);\n      }\n\n      /* Field arrangement styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n      \n        margin-bottom: 4px !important;\n        padding-bottom: 0 !important;\n        border-bottom: none !important;\n        display: block !important;\n        line-height: 1.2 !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n        font-weight: 400 !important;\n      }\n\n      /* Remove labels from ultra-color-picker when using external titles */\n      .settings-section ultra-color-picker .color-label {\n        display: none;\n      }\n\n      /* Prevent form fields from going off screen */\n      .property-input, .property-select {\n        max-width: 500px;\n      }\n\n      /* Apply max-width to ha-form elements */\n      .settings-section ha-form {\n        max-width: 500px;\n      }\n\n      /* Apply max-width to form inputs and selects */\n      .settings-section input,\n      .settings-section select,\n      .settings-section ha-textfield,\n      .settings-section ha-select {\n        max-width: 500px;\n      }\n      /* Give selects a consistent card background (scoped to bar module sections only) */\n      .bar-module-preview .settings-section ha-select {\n        background: var(--card-background-color) !important;\n        border: 1px solid var(--divider-color) !important;\n        border-radius: 6px !important;\n        padding: 4px 0 !important;\n        /* MWC menu and text field surfaces */\n        --mdc-theme-surface: var(--card-background-color);\n        --mdc-text-field-fill-color: var(--card-background-color);\n        --mdc-select-fill-color: var(--card-background-color);\n        --mdc-menu-surface-fill-color: var(--card-background-color);\n        --mdc-text-field-ink-color: var(--primary-text-color);\n        --mdc-text-field-outline-color: var(--divider-color);\n        --mdc-select-dropdown-icon-color: var(--secondary-text-color);\n        --mdc-theme-text-primary-on-background: var(--primary-text-color);\n        --mdc-theme-on-surface: var(--primary-text-color);\n      }\n\n      /* Ensure ha-form selects inherit same surface in all contexts */\n      .bar-module-preview .settings-section ha-form ha-select {\n        --mdc-theme-surface: var(--card-background-color);\n        --mdc-text-field-fill-color: var(--card-background-color);\n        --mdc-select-fill-color: var(--card-background-color);\n        --mdc-menu-surface-fill-color: var(--card-background-color);\n        --mdc-text-field-ink-color: var(--primary-text-color);\n        --mdc-text-field-outline-color: var(--divider-color);\n        --mdc-select-dropdown-icon-color: var(--secondary-text-color);\n        --mdc-theme-text-primary-on-background: var(--primary-text-color);\n        --mdc-theme-on-surface: var(--primary-text-color);\n      }\n\n      /* Give animation selects a proper background */\n      .settings-section[data-animation] ha-select,\n      .animation-select-group ha-select {\n        background: var(--card-background-color) !important;\n        border: 1px solid var(--divider-color) !important;\n        border-radius: 6px !important;\n        padding: 4px 0 !important;\n      }\n      /* Ensure percentage type dropdown has standard background container */\n      .percentage-type-group ha-select {\n        background: var(--card-background-color) !important;\n        border: 1px solid var(--divider-color) !important;\n        border-radius: 6px !important;\n        padding: 4px 0 !important;\n      }\n\n      /* Fix slider and input field layouts */\n      .settings-section .field-group {\n        max-width: 100%;\n        overflow: visible;\n        align-items: stretch;\n      }\n\n      /* Ensure slider containers don't get cut off */\n      .settings-section ha-form[style*="flex: 1"] {\n        min-width: 200px;\n        flex: 1 1 200px;\n      }\n\n      /* Fix input field containers */\n      .settings-section input[type="number"] {\n        width: 72px !important;\n        max-width: 72px !important;\n        min-width: 72px !important;\n        flex-shrink: 0;\n      }\n\n      /* Ensure proper spacing for slider + input combos */\n      .settings-section div[style*="display: flex; gap: 8px"] {\n        gap: 8px !important;\n        align-items: center !important;\n        flex-wrap: nowrap !important;\n        min-width: 0;\n      }\n\n      .settings-section div[style*="display: flex; gap: 12px"] {\n        gap: 12px !important;\n        align-items: center !important;\n        flex-wrap: nowrap !important;\n        min-width: 0;\n      }\n\n      /* Prevent overflow in gradient editor */\n      .gradient-editor {\n        max-width: 100%;\n        overflow: visible;\n      }\n\n      .gradient-stop {\n        max-width: 100%;\n        overflow: visible;\n        position: relative;\n      }\n\n      /* Gradient stop drag handle styling */\n      .gradient-stop .drag-handle {\n        transition: all 0.2s ease;\n      }\n\n      .gradient-stop:hover .drag-handle {\n        color: var(--primary-color) !important;\n        transform: scale(1.1);\n      }\n\n      /* Ultra color picker sizing */\n      ultra-color-picker {\n        min-width: 40px;\n        max-width: 60px;\n        flex-shrink: 0;\n      }\n\n      /* Ensure gradient controls don't overflow */\n      .gradient-stops {\n        max-width: 100%;\n        overflow: visible;\n      }\n\n      /* Hide automatic value displays from ha-form sliders to prevent cut-off */\n      .settings-section ha-form ha-slider::part(value-display),\n      .settings-section ha-form mwc-slider::part(value-display),\n      .settings-section ha-form ha-slider .value-display,\n      .settings-section ha-form mwc-slider .value-display {\n        display: none !important;\n      }\n\n      /* Hide any automatic number displays that might appear next to sliders */\n      .settings-section ha-form .slider-value,\n      .settings-section ha-form .current-value,\n      .settings-section ha-form .number-display {\n        display: none !important;\n      }\n\n      /* Override any default slider value display styles */\n      .settings-section ha-form[data-field*="size"] .mdc-slider-value-indicator,\n      .settings-section ha-form[data-field*="size"] .value-indicator {\n        display: none !important;\n      }\n\n      /* More comprehensive hiding of slider value displays */\n      .settings-section ha-form ha-textfield[type="number"],\n      .settings-section ha-form mwc-textfield[type="number"],\n      .settings-section ha-form .number-input-display {\n        display: none !important;\n      }\n\n      /* Target specific Home Assistant slider value containers */\n      .settings-section ha-form .form-group .number-display,\n      .settings-section ha-form .ha-form-number .display-value,\n      .settings-section ha-form [role="slider"] + *:not(.mdc-slider-track),\n      .settings-section ha-form .mdc-slider + .value-display {\n        display: none !important;\n      }\n\n      /* Ensure sliders take full width without value displays */\n      .settings-section ha-form .mdc-slider,\n      .settings-section ha-form ha-slider {\n        width: 100% !important;\n        max-width: 100% !important;\n      }\n\n      /* Hide any text elements that might display current values */\n      .settings-section ha-form .field-wrapper > span:last-child,\n      .settings-section ha-form .form-control > span:last-child,\n      .settings-section ha-form .slider-container > span:last-child {\n        display: none !important;\n      }\n\n      /* Specifically target number displays in form groups */\n      .settings-section ha-form .form-group > *:last-child:not(ha-slider):not(.mdc-slider):not(input[type="range"]) {\n        display: none !important;\n      }\n\n      /* Gap control styles - Standardized Slider Pattern */\n\n      /* Conditional Fields Grouping - Reusable Pattern */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 8px 8px 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n      }\n\n      .conditional-fields-group:hover {\n        background: rgba(var(--rgb-primary-color), 0.12);\n        border-left-color: var(--primary-color);\n      }\n\n      .conditional-fields-header {\n        background: rgba(var(--rgb-primary-color), 0.15);\n        padding: 12px 16px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        border-bottom: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n        margin: 0;\n      }\n\n      .conditional-fields-content {\n        padding: 16px;\n        background: transparent;\n      }\n\n      /* Remove top margin from first field in conditional groups */\n      .conditional-fields-content > .field-title:first-child {\n        margin-top: 0 !important;\n      }\n\n      /* Ensure proper spacing within conditional field groups */\n      .conditional-fields-content .field-title {\n     \n      }\n\n      .conditional-fields-content .field-description {\n        color: var(--secondary-text-color);\n        opacity: 0.9;\n      }\n\n      /* Animation for conditional fields appearing */\n      .conditional-fields-group {\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Make conditional fields responsive */\n      @media (max-width: 768px) {\n        .conditional-fields-group {\n          border-left-width: 3px;\n        }\n        \n        .conditional-fields-header {\n          padding: 10px 12px;\n          font-size: 13px;\n        }\n        \n        .conditional-fields-content {\n          padding: 12px;\n        }\n      }\n\n      /* ==========================\n         Bar Animations\n         These classes animate the .bar-fill element when triggered\n         ========================== */\n      .bar-fill.bar-anim-charging::after {\n        content: '';\n        position: absolute; inset: 0; pointer-events: none;\n        background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.25) 10px, transparent 10px, transparent 20px);\n        background-size: 28px 28px;\n        animation: charging-stripes calc(1.2s * var(--uc-bar-animation-speed-scale, 1)) linear infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes charging-stripes { 0% { background-position: 0 0; } 100% { background-position: 28px 0; } }\n\n      .bar-fill.bar-anim-pulse {\n        animation: bar-pulse calc(1.6s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes bar-pulse { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.3); } }\n\n      .bar-fill.bar-anim-blink {\n        animation: bar-blink calc(1s * var(--uc-bar-animation-speed-scale, 1)) steps(2, start) infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes bar-blink { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }\n\n      .bar-fill.bar-anim-bounce {\n        animation: bar-bounce calc(1.2s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n        transform-origin: center;\n      }\n      @keyframes bar-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }\n\n      .bar-fill.bar-anim-glow {\n        box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;\n        animation: bar-glow calc(1.5s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes bar-glow { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.4); } }\n\n      .bar-fill.bar-anim-rainbow::after { \n        content:''; \n        position:absolute; \n        inset:0; \n        pointer-events:none; \n        background: linear-gradient(90deg, \n          red 0%, \n          orange 14.28%, \n          yellow 28.57%, \n          green 42.85%, \n          cyan 57.14%, \n          blue 71.42%, \n          violet 85.71%, \n          red 100%\n        ); \n        background-size: 200% 100%; \n        mix-blend-mode: overlay; \n        opacity: 0.9; \n        animation: rainbow-shift calc(4s * var(--uc-bar-animation-speed-scale, 1)) linear infinite; \n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes rainbow-shift { \n        0% { background-position: 0% 0%; } \n        100% { background-position: 200% 0%; } \n      }\n\n      /* Bubbles: two extended layers with discrete bubbles, animated bottom -> top */\n      .bar-fill.bar-anim-bubbles::before,\n      .bar-fill.bar-anim-bubbles::after {\n        content: '';\n        position: absolute;\n        left: 0; right: 0;\n        top: -220%;\n        height: 440%;\n        pointer-events: none;\n        will-change: transform, opacity;\n        background-repeat: no-repeat;\n        filter: none;\n      }\n      /* Layer 1 (faster, fewer bubbles) */\n      .bar-fill.bar-anim-bubbles::before {\n        background:\n          radial-gradient(circle at 8% 80%,  rgba(255,255,255,0.55) 0 6px, transparent 7px),\n          radial-gradient(circle at 22% 55%, rgba(255,255,255,0.45) 0 5px, transparent 6px),\n          radial-gradient(circle at 37% 72%, rgba(255,255,255,0.50) 0 7px, transparent 8px),\n          radial-gradient(circle at 49% 60%, rgba(255,255,255,0.42) 0 5px, transparent 6px),\n          radial-gradient(circle at 63% 82%, rgba(255,255,255,0.50) 0 6px, transparent 7px),\n          radial-gradient(circle at 77% 68%, rgba(255,255,255,0.46) 0 5px, transparent 6px),\n          radial-gradient(circle at 89% 78%, rgba(255,255,255,0.52) 0 6px, transparent 7px);\n        animation: bubbles-rise-layer1 calc(7s * var(--uc-bar-animation-speed-scale, 1)) linear infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n        transform: translateY(0%);\n      }\n      /* Layer 2 (slower, different positions) */\n      .bar-fill.bar-anim-bubbles::after {\n        background:\n          radial-gradient(circle at 14% 84%, rgba(255,255,255,0.48) 0 7px, transparent 8px),\n          radial-gradient(circle at 30% 66%, rgba(255,255,255,0.40) 0 5px, transparent 6px),\n          radial-gradient(circle at 55% 82%, rgba(255,255,255,0.50) 0 6px, transparent 7px),\n          radial-gradient(circle at 71% 64%, rgba(255,255,255,0.44) 0 5px, transparent 6px),\n          radial-gradient(circle at 84% 78%, rgba(255,255,255,0.50) 0 7px, transparent 8px);\n        animation: bubbles-rise-layer2 calc(10s * var(--uc-bar-animation-speed-scale, 1)) linear infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n        animation-delay: calc(1.2s * var(--uc-bar-animation-speed-scale, 1));\n        transform: translateY(0%);\n      }\n      @keyframes bubbles-rise-layer1 {\n        0%   { transform: translateY(0%); opacity: 0; }\n        22%  { opacity: 1; }\n        88%  { opacity: 1; }\n        100% { transform: translateY(-58%); opacity: 0; }\n      }\n      @keyframes bubbles-rise-layer2 {\n        0%   { transform: translateY(0%); opacity: 0; }\n        26%  { opacity: 1; }\n        88%  { opacity: 1; }\n        100% { transform: translateY(-58%); opacity: 0; }\n      }\n\n      .bar-fill.bar-anim-fill {\n        animation: bar-fill-wave calc(1.5s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes bar-fill-wave { 0%,100% { filter: saturate(1); } 50% { filter: saturate(1.4); } }\n\n      .bar-fill.bar-anim-ripple::after {\n        content: '';\n        position: absolute; inset: 0; pointer-events: none;\n        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 20%, transparent 40%);\n        background-size: 200% 100%;\n        animation: ripple-sweep calc(1.1s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n        opacity: 0.9;\n      }\n      @keyframes ripple-sweep {\n        0% { background-position-x: -50%; }\n        100% { background-position-x: 150%; }\n      }\n\n      /* Traffic: moving hazard chevrons left->right to evoke flowing traffic lanes */\n      .bar-fill.bar-anim-traffic::after {\n        content:''; position:absolute; inset:0; pointer-events:none; opacity: 0.95;\n        background-image:\n          linear-gradient(135deg, rgba(255,255,255,0.00) 0 40%, rgba(255,255,255,0.25) 40% 60%, rgba(255,255,255,0.00) 60% 100%),\n          linear-gradient(-135deg, rgba(255,255,255,0.00) 0 40%, rgba(255,255,255,0.25) 40% 60%, rgba(255,255,255,0.00) 60% 100%);\n        background-size: 44px 100%, 44px 100%;\n        background-position: 0 0, 22px 0;\n        animation: traffic-chevrons calc(1s * var(--uc-bar-animation-speed-scale, 1)) linear infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n        mix-blend-mode: screen;\n      }\n      @keyframes traffic-chevrons { 0% { background-position: 0 0, 22px 0; } 100% { background-position: 44px 0, 66px 0; } }\n\n      /* Traffic Flow: thicker bands with alternating opacity, moving left->right */\n      \n\n      .bar-fill.bar-anim-heartbeat {\n        animation: heartbeat calc(1.2s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n        transform-origin: center;\n      }\n      @keyframes heartbeat { 0%,100% { transform: scale(1); } 20% { transform: scale(1.02); } 40% { transform: scale(0.99); } 60% { transform: scale(1.02); } 80% { transform: scale(1); } }\n\n      .bar-fill.bar-anim-flicker {\n        animation: flicker calc(2s * var(--uc-bar-animation-speed-scale, 1)) infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes flicker { 0%,19%,21%,23%,25%,54%,56%,100%{ opacity:1 } 20%,24%,55%{ opacity:0.4 } }\n\n      .bar-fill.bar-anim-shimmer { position: relative; overflow: hidden; }\n      .bar-fill.bar-anim-shimmer::after {\n        content:'';\n        position:absolute;\n        top:0;\n        bottom:0;\n        width:40%;\n        left:-40%;\n        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);\n        animation: shimmer-move calc(1.4s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes shimmer-move { 0% { left: -40%; } 100% { left: 120%; } }\n\n      .bar-fill.bar-anim-vibrate {\n        animation: vibrate calc(0.15s * var(--uc-bar-animation-speed-scale, 1)) linear infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes vibrate { 0% { transform: translate(0); } 25% { transform: translate(0.5px,-0.5px); } 50% { transform: translate(-0.5px,0.5px); } 75% { transform: translate(0.5px,0.5px); } 100% { transform: translate(0); } }\n\n      /* Minimal Bar Animations */\n      .minimal-track.bar-anim-pulse {\n        animation: minimal-track-pulse calc(1.6s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-track-pulse { 0%,100% { opacity: 0.8; } 50% { opacity: 1; } }\n      \n      .minimal-dot.bar-anim-pulse {\n        animation: minimal-dot-pulse calc(1.6s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-dot-pulse { 0%,100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.15); } }\n      \n      /* Minimal style z-index management */\n      .minimal-track {\n        z-index: 1;\n        position: relative;\n      }\n      \n      .minimal-dot {\n        z-index: 3 !important;\n        position: absolute;\n        /* Ensure dot stays within reasonable bounds */\n        max-width: 32px;\n        max-height: 32px;\n        /* Prevent dot from going outside card boundaries */\n        contain: size layout style;\n      }\n      \n      /* Percentage text positioning for minimal style */\n      .bar-container .percentage-text {\n        /* Ensure text doesn't interfere with HA header */\n        max-width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      \n      .minimal-track.bar-anim-glow {\n        box-shadow: 0 0 4px currentColor;\n        animation: minimal-track-glow calc(1.5s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-track-glow { 0%,100% { box-shadow: 0 0 4px currentColor; } 50% { box-shadow: 0 0 8px currentColor; } }\n      \n      .minimal-dot.bar-anim-glow {\n        animation: minimal-dot-glow calc(1.5s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-dot-glow { 0%,100% { box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 0 6px currentColor; } 50% { box-shadow: 0 2px 6px rgba(0,0,0,0.3), 0 0 12px currentColor; } }\n      \n      .minimal-track.bar-anim-blink {\n        animation: minimal-blink calc(1s * var(--uc-bar-animation-speed-scale, 1)) steps(2, start) infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      .minimal-dot.bar-anim-blink {\n        animation: minimal-blink calc(1s * var(--uc-bar-animation-speed-scale, 1)) steps(2, start) infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-blink { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }\n      \n      .minimal-dot.bar-anim-bouncing {\n        animation: minimal-dot-bounce calc(1.2s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-dot-bounce { 0%,100% { transform: translate(-50%, -50%); } 50% { transform: translate(-50%, calc(-50% - 4px)); } }\n      \n      .minimal-track.bar-anim-shimmer { position: relative; overflow: hidden; }\n      .minimal-track.bar-anim-shimmer::after {\n        content:'';\n        position:absolute;\n        top:-50%;\n        bottom:-50%;\n        width:40%;\n        left:-40%;\n        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);\n        animation: minimal-shimmer-move calc(1.4s * var(--uc-bar-animation-speed-scale, 1)) ease-in-out infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-shimmer-move { 0% { left: -40%; } 100% { left: 120%; } }\n      \n      .minimal-dot.bar-anim-vibrate {\n        animation: minimal-dot-vibrate calc(0.15s * var(--uc-bar-animation-speed-scale, 1)) linear infinite;\n        animation-direction: var(--uc-bar-animation-direction, normal);\n      }\n      @keyframes minimal-dot-vibrate { 0% { transform: translate(-50%, -50%); } 25% { transform: translate(calc(-50% + 0.5px), calc(-50% - 0.5px)); } 50% { transform: translate(calc(-50% - 0.5px), calc(-50% + 0.5px)); } 75% { transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px)); } 100% { transform: translate(-50%, -50%); } }\n    `}getAnimationSourceTextValue(e,t,i){var a,n,r;if(!i||!e||""===e.trim()||!(null===(a=i.states)||void 0===a?void 0:a[e]))return"";const o=i.states[e],l=(t||"").trim();if(l){const e=null===(n=o.attributes)||void 0===n?void 0:n[l];return null==e?"":String(e)}return String(null!==(r=o.state)&&void 0!==r?r:"")}resolveBarAnimationDirection(e,t){const i=e.bar_animation_direction||"normal";if("reverse"===i)return"reverse";if("sensor"!==i)return"normal";const a=(e.bar_animation_direction_entity||"").trim()||(e.bar_animation_speed_entity||"").trim()||(e.bar_animation_entity||"").trim()||(e.entity||"").trim(),n=e.bar_animation_direction_attribute||"",r=this.getAnimationSourceTextValue(a,n,t);if(!r)return"normal";const o=(0,v.v)(r);if(Number.isFinite(o))return Number(o)<0?"reverse":"normal";const l=r.trim().toLowerCase();return["discharg","export","outgoing","outbound","reverse","drain","sending"].some(e=>l.includes(e))?"reverse":"normal"}resolveBarAnimationSpeedScale(e,t){const i=(e,t,i)=>Math.min(i,Math.max(t,e)),a=(e,t)=>{const i=Number(e);return Number.isFinite(i)&&i>0?i:t};let n=i(a(e.bar_animation_speed,1),.1,20);if("sensor"===(e.bar_animation_speed_mode||"fixed")){const r=(e.bar_animation_speed_entity||"").trim(),o=e.bar_animation_speed_attribute||"",l=this.getAnimationSourceTextValue(r,o,t),s=(0,v.v)(l);if(Number.isFinite(s)){const t=a(e.bar_animation_speed_multiplier,1),r=Math.abs(Number(s))*t;r>0&&(n=i(r,.1,20))}}const r=i(1/Math.max(.1,n),.05,10);return Number(r.toFixed(4))}normalizeSizeValue(e){if("number"==typeof e)return{value:e,unit:"%"};const t=String(e).trim();if(!t)return null;if(t.endsWith("%")){const e=parseFloat(t.slice(0,-1));return Number.isNaN(e)?null:{value:e,unit:"%"}}if(t.endsWith("px")){const e=parseFloat(t.slice(0,-2));return Number.isNaN(e)?null:{value:e,unit:"px"}}const i=parseFloat(t);return Number.isNaN(i)?null:{value:i,unit:"%"}}styleObjectToCss(e){return Object.entries(e).filter(([,e])=>null!=e&&""!==e).map(([e,t])=>`${this.camelToKebab(e)}: ${t}`).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}getBackgroundImageCSS(e,t){const i=e.background_image_type,a=e.background_image,n=e.background_image_entity;switch(i){case"upload":if(a)return a.startsWith("/api/image/serve/")?`url("${this.getImageUrl(t,a)}")`:(a.startsWith("data:image/"),`url("${a}")`);break;case"entity":if(n&&t){const e=t.states[n];if(e){const t=e.attributes.entity_picture||e.attributes.image||e.state;if(t&&"unknown"!==t&&"unavailable"!==t)return`url("${t}")`}}break;case"url":if(a)return`url("${a}")`;break;default:return"none"}return"none"}getImageUrl(e,t){if(!t)return"";if(t.startsWith("http"))return t;if(t.startsWith("data:image/"))return t;if(t.includes("/api/image/serve/")){const i=t.match(/\/api\/image\/serve\/([^\/]+)/);if(i&&i[1]){const a=i[1];try{return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/api/image/serve/${a}/original`}catch(e){return t}}return t}return t.startsWith("/")?`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}${t}`:t}getBarSizeFromHeight(e){return e<=12?"thin":e<=20?"regular":e<=30?"thick":"thiccc"}getBarRadiusFromStyle(e){return 0===e?"square":e<8?"rounded-square":"round"}interpolateColor(e,t,i){const a=this.parseColorToRGBA(e),n=this.parseColorToRGBA(t);return a&&n?`rgba(${Math.round(a.r+(n.r-a.r)*i)}, ${Math.round(a.g+(n.g-a.g)*i)}, ${Math.round(a.b+(n.b-a.b)*i)}, ${(a.a+(n.a-a.a)*i).toFixed(3)})`:e}hexToRgb(e){if(!e.startsWith("#"))return null;const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16),a:parseInt(i[4],16)/255}:t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16),a:1}:null}rgbToHex(e,t,i,a){const n=Math.round(Math.max(0,Math.min(255,e))),r=Math.round(Math.max(0,Math.min(255,t))),o=Math.round(Math.max(0,Math.min(255,i)));if(void 0!==a&&a<1){const e=Math.round(Math.max(0,Math.min(255,255*a)));return`#${((1<<24)+(n<<16)+(r<<8)+o).toString(16).slice(1)}${e.toString(16).padStart(2,"0")}`}return`#${((1<<24)+(n<<16)+(r<<8)+o).toString(16).slice(1)}`}parseColorToRGBA(e){if(!e)return null;const t=this.resolveCSSColor(e),i=t.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/i);if(i)return{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])};const a=t.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(a)return{r:parseInt(a[1],10),g:parseInt(a[2],10),b:parseInt(a[3],10),a:1};const n=this.hexToRgb(t);if(n)return n;if("transparent"===t.toLowerCase())return{r:0,g:0,b:0,a:0};try{const e=document.createElement("span");e.style.color=t,document.body.appendChild(e);const i=getComputedStyle(e).color;if(e.remove(),i&&"rgba(0, 0, 0, 0)"!==i){const e=i.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([0-9.]+))?\s*\)/i);if(e)return{r:parseInt(e[1],10),g:parseInt(e[2],10),b:parseInt(e[3],10),a:e[4]?parseFloat(e[4]):1}}}catch(e){}return{r:128,g:128,b:128,a:1}}resolveCSSColor(e){if(!e)return e;const t=String(e).trim();if(t.startsWith("#")||t.startsWith("rgb"))return t;try{const e=document.createElement("span");e.style.backgroundColor=t,document.body.appendChild(e);const i=getComputedStyle(e).backgroundColor;return e.remove(),i&&"rgba(0, 0, 0, 0)"!==i?i:t}catch(e){return t}}addPixelUnit(e){return e?/^\d+$/.test(e)?`${e}px`:/^[\d\s]+$/.test(e)?e.split(" ").map(e=>e.trim()?`${e}px`:e).join(" "):e:e}}},9760(e,t,i){i.d(t,{formatEntityState:()=>n});var a=i(1340);const n=(e,t,i)=>{var n,r;const o=!1!==(null==i?void 0:i.includeUnit),l=null===(n=null==e?void 0:e.states)||void 0===n?void 0:n[t];if(!e||!l)return void 0!==(null==i?void 0:i.state)?String(i.state):"";const s=e.formatEntityState,d=s?s(l,void 0!==(null==i?void 0:i.state)?String(i.state):void 0):(0,a.nu)(e.localize,l,e.locale,null==i?void 0:i.state);if(o)return d;const c=null===(r=l.attributes)||void 0===r?void 0:r.unit_of_measurement;if(c&&"string"==typeof d){const e=` ${c}`;if(d.endsWith(e))return d.slice(0,-e.length)}return d}},6045(e,t,i){function a(e){if(null==e)return NaN;if("number"==typeof e)return e;let t=String(e).trim();if(""===t||"unknown"===t||"unavailable"===t)return NaN;if(t.includes(",")){const e=t.lastIndexOf(","),i=t.lastIndexOf(".");t=e>i?t.substring(0,e).replace(/[.,]/g,"")+"."+t.substring(e+1):t.replace(/,/g,"")}return parseFloat(t)}function n(e){const t=(e||"").trim();return t?(t.includes(";")?t.split(";").map(e=>e.trim()).filter(Boolean):t.split(",").map(e=>e.trim()).filter(Boolean)).map(e=>a(e)).filter(e=>!Number.isNaN(e)):[]}i.d(t,{E:()=>n,v:()=>a})}}]);
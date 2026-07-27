"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[1997],{8891(t,e,i){i.d(e,{UltraSpinboxModule:()=>p});var o=i(5183),n=i(5096),l=i(3721),a=i(5147),s=i(8938),r=i(5320),u=i(9327),d=i(5121),c=i(5155);i(7921),i(9442);class p extends l.m{constructor(){super(...arguments),this._templateInputDebounce=null,this._lastTouchTime=0,this._optimisticValues=new Map,this.metadata={type:"spinbox",title:"Spinbox",description:"Number input with increment/decrement buttons",author:"WJD Designs",version:"1.0.0",icon:"mdi:numeric",category:"interactive",tags:["spinbox","number","increment","decrement","input","stepper"]}}createDefault(t,e){return{id:t||this.generateId("spinbox"),type:"spinbox",min_value:0,max_value:100,step:1,value:50,layout:"horizontal",show_value:!0,value_position:"center",show_unit:!1,unit:"",button_style:"flat",button_shape:"rounded",button_size:40,button_spacing:12,button_gap:8,increment_icon:"mdi:plus",decrement_icon:"mdi:minus",button_background_color:"var(--primary-color)",button_text_color:"white",value_color:"var(--primary-text-color)",value_font_size:18,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[],unified_template_mode:!1,unified_template:""}}getButtonStyles(t){return[{value:"flat",label:(0,n.kg)("editor.spinbox.styles.flat",t,"Flat (Default)")},{value:"glossy",label:(0,n.kg)("editor.spinbox.styles.glossy",t,"Glossy")},{value:"embossed",label:(0,n.kg)("editor.spinbox.styles.embossed",t,"Embossed")},{value:"inset",label:(0,n.kg)("editor.spinbox.styles.inset",t,"Inset")},{value:"gradient-overlay",label:(0,n.kg)("editor.spinbox.styles.gradient_overlay",t,"Gradient Overlay")},{value:"neon-glow",label:(0,n.kg)("editor.spinbox.styles.neon_glow",t,"Neon Glow")},{value:"outline",label:(0,n.kg)("editor.spinbox.styles.outline",t,"Outline")},{value:"glass",label:(0,n.kg)("editor.spinbox.styles.glass",t,"Glass")},{value:"metallic",label:(0,n.kg)("editor.spinbox.styles.metallic",t,"Metallic")}]}getButtonShapeOptions(t){return[{value:"rounded",label:(0,n.kg)("editor.spinbox.shapes.rounded",t,"Rounded Square (Default)")},{value:"square",label:(0,n.kg)("editor.spinbox.shapes.square",t,"Square")},{value:"circle",label:(0,n.kg)("editor.spinbox.shapes.circle",t,"Circle")}]}getLayoutOptions(t){return[{value:"horizontal",label:(0,n.kg)("editor.spinbox.layout_options.horizontal",t,"Horizontal")},{value:"vertical",label:(0,n.kg)("editor.spinbox.layout_options.vertical",t,"Vertical")}]}getValuePositionOptions(t){return[{value:"center",label:(0,n.kg)("editor.spinbox.value_position_options.center",t,"Center (Between Buttons)")},{value:"top",label:(0,n.kg)("editor.spinbox.value_position_options.top",t,"Top (Above Both Buttons)")},{value:"bottom",label:(0,n.kg)("editor.spinbox.value_position_options.bottom",t,"Bottom (Below Both Buttons)")},{value:"left",label:(0,n.kg)("editor.spinbox.value_position_options.left",t,"Left (Before Buttons)")},{value:"right",label:(0,n.kg)("editor.spinbox.value_position_options.right",t,"Right (After Buttons)")}]}getStyles(){return`\n      ${l.m.getSliderStyles()}\n    `}renderGeneralTab(t,e,i,l){var a,s,r,u,d,c,p,v,m,b,g;const _=t,h=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",x=t=>{l(t),this.triggerPreviewUpdate()};return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,n.kg)("editor.spinbox.entity.title",h,"Entity Configuration"),(0,n.kg)("editor.spinbox.entity.desc",h,"Optional: Link to a Home Assistant entity for synced values (e.g., Input Number, climate temperature)."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",_.entity||"",t=>{x({entity:t}),this.triggerPreviewUpdate()},void 0,(0,n.kg)("editor.spinbox.entity_field",h,"Entity"))}
        </div>

        <!-- Value Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.spinbox.value.title",h,"Value Configuration")}
          </div>
          <div class="section-description" style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,n.kg)("editor.spinbox.value.desc",h,"Configure the numeric range, step size, and default value.")}
          </div>

          ${this.renderSliderField((0,n.kg)("editor.spinbox.min_value",h,"Minimum Value"),(0,n.kg)("editor.spinbox.min_value_desc",h,"The minimum allowed value"),null!==(s=_.min_value)&&void 0!==s?s:0,0,0,1e3,1,t=>x({min_value:t}),"")}
          ${this.renderSliderField((0,n.kg)("editor.spinbox.max_value",h,"Maximum Value"),(0,n.kg)("editor.spinbox.max_value_desc",h,"The maximum allowed value"),null!==(r=_.max_value)&&void 0!==r?r:100,100,0,1e3,1,t=>x({max_value:t}),"")}
          ${this.renderSliderField((0,n.kg)("editor.spinbox.step",h,"Step Size"),(0,n.kg)("editor.spinbox.step_desc",h,"How much the value changes with each button press"),null!==(u=_.step)&&void 0!==u?u:1,1,0,100,1,t=>x({step:t}),"")}
          ${this.renderSliderField((0,n.kg)("editor.spinbox.value",h,"Default Value"),(0,n.kg)("editor.spinbox.value_desc",h,"The initial value (only used when no entity is linked)"),null!==(d=_.value)&&void 0!==d?d:50,50,0,1e3,1,t=>x({value:t}),"")}
        </div>

        <!-- Display Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.spinbox.display.title",h,"Display Configuration")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.layout_title",h,"Layout"),(0,n.kg)("editor.spinbox.layout_desc",h,"Arrangement of buttons and value"),e,{layout:_.layout||"horizontal"},[this.selectField("layout",this.getLayoutOptions(h))],t=>{t.detail.value.layout!==(_.layout||"horizontal")&&(x(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

          ${this.renderFieldSection((0,n.kg)("editor.spinbox.show_value",h,"Show Value"),(0,n.kg)("editor.spinbox.show_value_desc",h,"Display the current numeric value"),e,{show_value:null===(c=_.show_value)||void 0===c||c},[this.booleanField("show_value")],t=>x({show_value:t.detail.value.show_value}))}

          ${_.show_value?o.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.spinbox.value_position_title",h,"Value Position"),(0,n.kg)("editor.spinbox.value_position_desc",h,"Where to display the value relative to buttons"),e,{value_position:_.value_position||"center"},[this.selectField("value_position",this.getValuePositionOptions(h))],t=>{t.detail.value.value_position!==(_.value_position||"center")&&(x(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
                </div>
              `:""}

          ${this.renderFieldSection((0,n.kg)("editor.spinbox.show_unit",h,"Show Unit"),(0,n.kg)("editor.spinbox.show_unit_desc",h,"Display a unit label (e.g., °C, %)"),e,{show_unit:null!==(p=_.show_unit)&&void 0!==p&&p},[this.booleanField("show_unit")],t=>x({show_unit:t.detail.value.show_unit}))}

          ${_.show_unit?o.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.spinbox.unit",h,"Unit"),(0,n.kg)("editor.spinbox.unit_desc",h,"Unit to display (e.g., °C, %, km)"),e,{unit:_.unit||""},[this.textField("unit")],t=>x(t.detail.value))}
                </div>
              `:""}
        </div>

        <!-- Button Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.spinbox.buttons.title",h,"Button Configuration")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.button_style",h,"Button Style"),(0,n.kg)("editor.spinbox.button_style_desc",h,"Visual style for buttons"),e,{button_style:_.button_style||"flat"},[this.selectField("button_style",this.getButtonStyles(h))],t=>{t.detail.value.button_style!==(_.button_style||"flat")&&(x(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.button_shape",h,"Button Shape"),(0,n.kg)("editor.spinbox.button_shape_desc",h,"Shape of the buttons"),e,{button_shape:_.button_shape||"rounded"},[this.selectField("button_shape",this.getButtonShapeOptions(h))],t=>{t.detail.value.button_shape!==(_.button_shape||"rounded")&&(x(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.spinbox.button_size",h,"Button Size"),(0,n.kg)("editor.spinbox.button_size_desc",h,"Size of the buttons in pixels (width and height)"),null!==(v=_.button_size)&&void 0!==v?v:40,40,10,200,1,t=>x({button_size:t}),"px")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.spinbox.button_spacing",h,"Value Spacing"),(0,n.kg)("editor.spinbox.button_spacing_desc",h,"Space between buttons and value display in pixels"),null!==(m=_.button_spacing)&&void 0!==m?m:12,12,0,100,1,t=>x({button_spacing:t}),"px")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.spinbox.button_gap",h,"Button Gap"),(0,n.kg)("editor.spinbox.button_gap_desc",h,"Space between increment and decrement buttons in pixels"),null!==(b=_.button_gap)&&void 0!==b?b:8,8,0,100,1,t=>x({button_gap:t}),"px")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.increment_icon",h,"Increment Icon"),(0,n.kg)("editor.spinbox.increment_icon_desc",h,"Icon for the increment button (e.g., mdi:plus, mdi:chevron-up)"),e,{increment_icon:_.increment_icon||"mdi:plus"},[this.iconField("increment_icon")],t=>x(t.detail.value))}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.decrement_icon",h,"Decrement Icon"),(0,n.kg)("editor.spinbox.decrement_icon_desc",h,"Icon for the decrement button (e.g., mdi:minus, mdi:chevron-down)"),e,{decrement_icon:_.decrement_icon||"mdi:minus"},[this.iconField("decrement_icon")],t=>x(t.detail.value))}
          </div>

          <!-- Button Colors -->
          <div class="color-controls" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.spinbox.button_background_color",h,"Button Background")}
              .value=${_.button_background_color||"var(--primary-color)"}
              .defaultValue=${"var(--primary-color)"}
              .hass=${e}
              @value-changed=${t=>x({button_background_color:t.detail.value})}
            ></ultra-color-picker>
          </div>

          <div class="color-controls">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.spinbox.button_text_color",h,"Button Icon Color")}
              .value=${_.button_text_color||"white"}
              .defaultValue=${"white"}
              .hass=${e}
              @value-changed=${t=>x({button_text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Value Display Styling -->
        ${_.show_value?o.qy`
              <div class="settings-section">
                <div class="section-title">
                  ${(0,n.kg)("editor.spinbox.value_style.title",h,"Value Display Styling")}
                </div>

                <div class="color-controls" style="margin-bottom: 16px;">
                  <ultra-color-picker
                    .label=${(0,n.kg)("editor.spinbox.value_color",h,"Value Color")}
                    .value=${_.value_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${e}
                    @value-changed=${t=>x({value_color:t.detail.value})}
                  ></ultra-color-picker>
                </div>

                <div class="field-group">
                  ${this.renderSliderField((0,n.kg)("editor.spinbox.value_font_size",h,"Value Font Size"),(0,n.kg)("editor.spinbox.value_font_size_desc",h,"Font size for the value display (in pixels)"),null!==(g=_.value_font_size)&&void 0!==g?g:18,18,8,100,1,t=>x({value_font_size:t}),"px")}
                </div>
              </div>
            `:""}

        <!-- Unified template -->
        <div style="margin-top: 16px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:16px;font-weight:600;">${(0,n.kg)("editor.spinbox.unified_template.toggle",h,"Template Mode")}</span>
              <button
                type="button"
                class="help-btn"
                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                title="${(0,n.kg)("editor.spinbox.unified_template.cheatsheet",h,"Template cheatsheet")}"
                @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"spinbox"}}))}}
              >
                <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
              </button>
            </div>
            ${this.renderUcForm(e,{unified_template_mode:_.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>x({unified_template_mode:t.detail.value.unified_template_mode}))}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; line-height: 1.5;">
            ${(0,n.kg)("editor.spinbox.unified_template.desc",h,"JSON with value, button_background_color, button_text_color, value_color — or a plain numeric Jinja result.")}
          </div>
          ${_.unified_template_mode?o.qy`
                <div
                  style="margin-top: 12px;"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                >
                  <ultra-template-editor
                    .hass=${e}
                    .value=${_.unified_template||""}
                    .placeholder=${'{\n  "value": "{{ states(\'input_number.temp\') | float }}",\n  "value_color": "var(--primary-text-color)"\n}'}
                    .minHeight=${120}
                    .maxHeight=${360}
                    @value-changed=${t=>x({unified_template:t.detail.value})}
                  ></ultra-template-editor>
                </div>
              `:""}
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){const n=t;return a.A.render(n,e,t=>o(t))}renderLogicTab(t,e,i,o){return s.X.render(t,e,t=>o(t))}renderPreview(t,e,i,l){var a,s,p,v,m,b,g,_;const h=t,x=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",y=h.entity?this.resolveEntity(h.entity,i):void 0;let f,$,k,w;if(h.unified_template_mode&&h.unified_template&&(!this._templateService&&e?this._templateService=new r.I(e):this._templateService&&e&&this._templateService.updateHass(e),e)){e.__uvc_template_strings||(e.__uvc_template_strings={});const t=(0,c.KD)(h.unified_template,e,i),o=this._hashString(t),n=`unified_spinbox_${h.id}_${o}`;if(this._templateService){const o=(0,u.pL)(y||"",e,{value:h.value,min_value:h.min_value,max_value:h.max_value}),l=(0,u.jh)(y||"",e);this._templateService.subscribeToTemplate(t,n,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},o,i,l)}const l=null===(s=e.__uvc_template_strings)||void 0===s?void 0:s[n];if(l&&""!==String(l).trim()){const t=(0,d.cv)(l);if(!(0,d.HD)(t)){if(void 0!==t.value){const e="number"==typeof t.value?t.value:parseFloat(String(t.value));isNaN(e)||(f=e)}else{const e=(0,d.lR)(t);void 0===e||isNaN(e)||(f=e)}t.button_background_color&&($=t.button_background_color),t.button_text_color&&(k=t.button_text_color),t.value_color&&(w=t.value_color)}}}let S=void 0!==f?f:null!==(p=h.value)&&void 0!==p?p:50,F="";if(void 0===f&&y&&e){const t=e.states[y];if(F=y.split(".")[0],t)if("climate"===F)if(void 0!==(null===(v=t.attributes)||void 0===v?void 0:v.temperature)){const e=parseFloat(String(t.attributes.temperature));isNaN(e)||(S=e)}else{const e=parseFloat(t.state);isNaN(e)||(S=e)}else{const e=parseFloat(t.state);isNaN(e)||(S=e)}}{const t=this._optimisticValues.get(h.id);void 0!==t&&(S=t.value)}S=Math.max(h.min_value,Math.min(h.max_value,S));const N=h.design||{},T=$||N.button_background_color||h.button_background_color||"var(--primary-color)",z=k||N.button_text_color||h.button_text_color||"white",V=h.button_style||"flat",M=null!==(m=h.button_size)&&void 0!==m?m:40,q=h.button_shape||"rounded",B=null!==(b=h.button_spacing)&&void 0!==b?b:12,C=null!==(g=h.button_gap)&&void 0!==g?g:8;let P="8px";"circle"===q?P="50%":"square"===q&&(P="0");const D={flat:"box-shadow: none;",glossy:`background: linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0)), ${T}; border: none;`,embossed:"border: 1px solid rgba(0,0,0,0.15); box-shadow: inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 2px rgba(0,0,0,0.15);",inset:"box-shadow: inset 0 2px 6px rgba(0,0,0,0.35);","gradient-overlay":`background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.15)), ${T};`,"neon-glow":`box-shadow: 0 0 10px ${T}, 0 0 20px ${T};`,outline:`background: transparent; border: 2px solid ${T}; color: ${T};`,glass:"backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.25);",metallic:"background: linear-gradient(90deg, #d7d7d7, #f0f0f0 50%, #d7d7d7); color: #333; border: 1px solid #bbb;"},I=`\n      background: ${T};\n      color: ${z};\n      padding: 0;\n      border-radius: ${P};\n      cursor: pointer;\n      transition: all 0.2s ease;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-width: ${M}px;\n      min-height: ${M}px;\n      width: ${M}px;\n      height: ${M}px;\n      border: none;\n     ${D[V]||D.flat}`,U=w||N.value_color||h.value_color||"var(--primary-text-color)",E=N.value_font_size||h.value_font_size||18,O=`\n      color: ${U};\n      font-size: ${E}px;\n      font-weight: 600;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-width: 60px;\n    `,A=()=>{var t;const o=this._optimisticValues.get(h.id);if(void 0!==o)return o.value;const n=this._getEntityNumericValue(h,e,i);return void 0!==n?n:null!==(t=h.value)&&void 0!==t?t:50},j=t=>{if(t.stopPropagation(),"click"===t.type&&t.timeStamp-(this._lastTouchTime||0)<500)return;"touchend"===t.type&&(this._lastTouchTime=t.timeStamp,t.preventDefault());const i=t.target.closest(".spinbox-button");{const t=Math.max(h.min_value,Math.min(h.max_value,A())),i=Math.min(h.max_value,t+h.step);i!==t&&(this._setOptimisticValue(h.id,i,!y),y&&e&&this.callEntityService(y,i,e,F),this.triggerPreviewUpdate(!0))}i&&(i.blur(),requestAnimationFrame(()=>{i.blur()}))},H=t=>{if(t.stopPropagation(),"click"===t.type&&t.timeStamp-(this._lastTouchTime||0)<500)return;"touchend"===t.type&&(this._lastTouchTime=t.timeStamp,t.preventDefault());const i=t.target.closest(".spinbox-button");{const t=Math.max(h.min_value,Math.min(h.max_value,A())),i=Math.max(h.min_value,t-h.step);i!==t&&(this._setOptimisticValue(h.id,i,!y),y&&e&&this.callEntityService(y,i,e,F),this.triggerPreviewUpdate(!0))}i&&(i.blur(),requestAnimationFrame(()=>{i.blur()}))},L=(null===(_=h.design)||void 0===_||_.hover_effect,this.getHoverEffectClass(t)),G=this.buildStyleString(this.buildDesignStyles(t,e)),W="vertical"===h.layout,J=!1!==h.show_value,R=h.value_position||"center",K=h.show_unit&&h.unit,Q=J?o.qy`
          <div class="spinbox-value" style="${O}">
            ${S.toFixed(this.getDecimalPlaces(h.step))}${K?o.qy`<span style="margin-left: 4px; font-size: ${.8*E}px;"
                  >${h.unit}</span
                >`:""}
          </div>
        `:"",X=o.qy`
      <button
        class="spinbox-button decrement ${L}"
        style="${I}"
        aria-label="${(0,n.kg)("editor.spinbox.decrease",x,"Decrease")}"
        @click=${H}
        @touchend=${H}
        ?disabled=${S<=h.min_value}
      >
        <ha-icon icon="${h.decrement_icon||"mdi:minus"}"></ha-icon>
      </button>
    `,Y=o.qy`
      <button
        class="spinbox-button increment ${L}"
        style="${I}"
        aria-label="${(0,n.kg)("editor.spinbox.increase",x,"Increase")}"
        @click=${j}
        @touchend=${j}
        ?disabled=${S>=h.max_value}
      >
        <ha-icon icon="${h.increment_icon||"mdi:plus"}"></ha-icon>
      </button>
    `,Z=C>=0,tt=B>=0,et=Z?`display: flex; gap: ${C}px; ${W?"flex-direction: column;":"flex-direction: row;"}`:"display: flex; "+(W?"flex-direction: column;":"flex-direction: row;");return this.wrapWithAnimation(o.qy`
      <style>
        .spinbox-button {
          flex-shrink: 0;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          user-select: none;
          outline: none;
        }
        .spinbox-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        /* Hover effects only on devices that support hover */
        @media (hover: hover) {
          .spinbox-button:not(:disabled):hover {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        /* Active state for touch feedback on mobile */
        .spinbox-button:not(:disabled):active {
          opacity: 0.8;
          transform: scale(1.05);
        }
        /* Aggressively remove focus state on mobile/touch devices */
        @media (hover: none) {
          .spinbox-button:not(:disabled):focus {
            outline: none !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .spinbox-button:not(:disabled):focus:active {
            opacity: 0.8;
            transform: scale(1.05);
          }
          /* Ensure hover state is cleared on touch devices */
          .spinbox-button:not(:disabled):hover {
            opacity: 1;
            transform: scale(1);
          }
        }
        /* Clear focus state after touch ends - global rule */
        .spinbox-button:not(:disabled):focus:not(:active) {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        /* Prevent sticky focus on touch end */
        .spinbox-button:focus-visible {
          outline: none;
        }
        /* Ensure no visual changes on focus for touch devices */
        @media (pointer: coarse) {
          .spinbox-button:focus {
            outline: none !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        }
      </style>
      <div class="spinbox-module-container ${L}" style="${G}">
        <div
          class="spinbox-container"
          style="display: flex; align-items: center; justify-content: center;"
        >
          ${(()=>{const t=o.qy`
        <div style="${et}">
          ${W?o.qy` <div style="${Z?"":`margin-bottom: ${C}px;`}">
                  ${Y}
                </div>
                <div>${X}</div>`:o.qy` <div style="${Z?"":`margin-right: ${C}px;`}">
                  ${X}
                </div>
                <div>${Y}</div>`}
        </div>
      `,e=tt?`gap: ${B}px;`:"";switch(R){case"top":return o.qy`
            <div
              style="display: flex; flex-direction: column; align-items: center; ${e}"
            >
              <div style="${tt?"":`margin-bottom: ${B}px;`}">
                ${Q}
              </div>
              ${t}
            </div>
          `;case"bottom":return o.qy`
            <div
              style="display: flex; flex-direction: column; align-items: center; ${e}"
            >
              <div style="${tt?"":`margin-bottom: ${B}px;`}">
                ${t}
              </div>
              ${Q}
            </div>
          `;case"left":return o.qy`
            <div style="display: flex; flex-direction: row; align-items: center; ${e}">
              <div style="${tt?"":`margin-right: ${B}px;`}">
                ${Q}
              </div>
              ${t}
            </div>
          `;case"right":return o.qy`
            <div style="display: flex; flex-direction: row; align-items: center; ${e}">
              <div style="${tt?"":`margin-right: ${B}px;`}">
                ${t}
              </div>
              ${Q}
            </div>
          `;default:return W?o.qy`
              <div
                style="display: flex; flex-direction: column; align-items: center; ${e}"
              >
                <div style="${tt?"":`margin-bottom: ${B}px;`}">
                  ${Y}
                </div>
                <div style="${tt?"":`margin-bottom: ${B}px;`}">
                  ${Q}
                </div>
                ${X}
              </div>
            `:o.qy`
              <div style="display: flex; flex-direction: row; align-items: center; ${e}">
                <div style="${tt?"":`margin-right: ${B}px;`}">
                  ${X}
                </div>
                <div style="${tt?"":`margin-right: ${B}px;`}">
                  ${Q}
                </div>
                ${Y}
              </div>
            `}})()}
        </div>
      </div>
    `,t,e)}async callEntityService(t,e,i,o){var n,l,a,s,r;const u=o||t.split(".")[0],d=i.states[t];let c="",p={};try{switch(u){case"input_number":case"number":{let i=e;const o=null==d?void 0:d.attributes,n=parseFloat(null==o?void 0:o.min),l=parseFloat(null==o?void 0:o.max),a=parseFloat(null==o?void 0:o.step);if(!isNaN(a)&&a>0){const t=isNaN(n)?0:n;i=Math.round((i-t)/a)*a+t,i=parseFloat(i.toFixed(6))}isNaN(n)||(i=Math.max(n,i)),isNaN(l)||(i=Math.min(l,i)),c=`${u}.set_value`,p={entity_id:t,value:i};break}case"climate":{c="climate.set_temperature";let i=e;const o=null==d?void 0:d.attributes,u=parseFloat(null==o?void 0:o.min_temp),v=parseFloat(null==o?void 0:o.max_temp),m=parseFloat(null==o?void 0:o.target_temp_step);if(!isNaN(m)&&m>0){const t=isNaN(u)?0:u;i=Math.round((i-t)/m)*m+t,i=parseFloat(i.toFixed(6))}isNaN(u)||(i=Math.max(u,i)),isNaN(v)||(i=Math.min(v,i));const b=null==d?void 0:d.state,g=void 0!==(null===(n=null==d?void 0:d.attributes)||void 0===n?void 0:n.target_temp_high),_=void 0!==(null===(l=null==d?void 0:d.attributes)||void 0===l?void 0:l.target_temp_low);if(p={entity_id:t},"heat_cool"===b&&(g||_)){const t=null===(a=null==d?void 0:d.attributes)||void 0===a?void 0:a.temperature,e=null===(s=null==d?void 0:d.attributes)||void 0===s?void 0:s.target_temp_high,o=null===(r=null==d?void 0:d.attributes)||void 0===r?void 0:r.target_temp_low;if(void 0!==t&&void 0!==e&&void 0!==o){Math.abs(i-e)<Math.abs(i-o)?(p.target_temp_high=i,p.target_temp_low=o):(p.target_temp_low=i,p.target_temp_high=e)}else p.target_temp_high=i+2,p.target_temp_low=i-2}else p.temperature=i;break}default:return void console.warn(`[Spinbox] Unsupported entity domain: ${u}`)}await i.callService(c.split(".")[0],c.split(".")[1],p)}catch(e){console.error(`[Spinbox] Failed to call service for ${t}:`,e),console.error("[Spinbox] Service data was:",p)}}_getEntityNumericValue(t,e,i){var o;if(!t.entity||!e)return;const n=this.resolveEntity(t.entity,i);if(!n)return;const l=e.states[n];if(!l)return;if("climate"===n.split(".")[0]&&void 0!==(null===(o=l.attributes)||void 0===o?void 0:o.temperature)){const t=parseFloat(String(l.attributes.temperature));if(!isNaN(t))return t}const a=parseFloat(l.state);return isNaN(a)?void 0:a}_setOptimisticValue(t,e,i=!1){const o=this._optimisticValues.get(t);(null==o?void 0:o.timer)&&clearTimeout(o.timer);const n=i?null:setTimeout(()=>{this._optimisticValues.delete(t),this.triggerPreviewUpdate()},p.OPTIMISTIC_TIMEOUT_MS);this._optimisticValues.set(t,{value:e,timer:n})}getDecimalPlaces(t){const e=t.toString();return e.includes(".")?e.split(".")[1].length:0}_hashString(t){let e=0;for(let i=0;i<t.length;i+=1)e=(e<<5)-e+t.charCodeAt(i),e|=0;return e}}p.OPTIMISTIC_TIMEOUT_MS=1500},9327(t,e,i){function o(t,e){var i;if(!t||"string"!=typeof t||""===t.trim())return"";const o=t.trim(),n=null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[o];return n?`${o}|${n.state}|${function(t){var e,i,o,n;if(!t||"object"!=typeof t)return"";const l=`${null!==(e=t.unit_of_measurement)&&void 0!==e?e:""}|${null!==(i=t.device_class)&&void 0!==i?i:""}|${null!==(o=t.friendly_name)&&void 0!==o?o:""}|${null!==(n=t.icon)&&void 0!==n?n:""}|${Array.isArray(t.rgb_color)?t.rgb_color.join(","):""}`;let a=0;for(let t=0;t<l.length;t++)a=(a<<5)-a+l.charCodeAt(t),a|=0;return Math.abs(a).toString(36)}(n.attributes)}`:`${o}|unavailable|`}function n(t,e){const i=[...new Set(t.filter(t=>!!t&&""!==String(t).trim()))].sort();return 0===i.length?"":i.map(t=>o(t,e)).join("||")}function l(t,e,i){var o;const n=null===(o=null==e?void 0:e.states)||void 0===o?void 0:o[t];if(!n)return{entity:t,state:"unavailable",name:(null==i?void 0:i.name)||t,attributes:{},unit:"",domain:t.split(".")[0]||"unknown",device_class:"",friendly_name:(null==i?void 0:i.name)||t,config:i||{}};const l=t.split(".")[0],a=n.attributes||{};return{entity:t,state:n.state,name:(null==i?void 0:i.name)||a.friendly_name||t,attributes:a,unit:a.unit_of_measurement||"",domain:l,device_class:a.device_class||"",friendly_name:a.friendly_name||"",config:i||{},state_number:parseFloat(n.state),state_boolean:"on"===n.state||"true"===n.state||"yes"===n.state}}function a(t,e,i){const o=t.map((t,o)=>{const n=null==i?void 0:i[o];return l(t,e,n)}),n=o[0]||{entity:"",state:"unavailable",name:"",attributes:{},unit:"",domain:"unknown",device_class:"",friendly_name:"",config:{}};return Object.assign(Object.assign({},n),{entities:o})}i.d(e,{Qq:()=>n,jh:()=>o,pL:()=>l,wI:()=>a})}}]);
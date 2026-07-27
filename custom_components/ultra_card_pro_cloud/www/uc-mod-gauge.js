"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[7211],{2325(e,t,i){i.d(t,{UltraGaugeModule:()=>p});var o=i(5183),r=i(3721),a=i(5096),n=(i(7921),i(7203),i(9442),i(5147)),l=i(8938),s=i(9263),d=i(5320),c=i(5121),u=i(5155),g=i(9327);class p extends r.m{constructor(){super(...arguments),this.metadata={type:"gauge",title:"Gauge",description:"Display sensor values as customizable gauges with various styles and pointer options",author:"WJD Designs",version:"1.0.0",icon:"mdi:gauge",category:"content",tags:["gauge","sensor","value","indicator","speedometer","meter"]}}createDefault(e,t){const i=this.findSuitableSensor(t);return{id:e||this.generateId("gauge"),type:"gauge",entity:i,name:"",value_type:"entity",min_value:0,max_value:100,gauge_style:"3d",gauge_size:200,gauge_thickness:15,flip_horizontal:!1,pointer_enabled:!0,pointer_style:"needle",pointer_color:"var(--primary-color)",pointer_length:80,pointer_width:6,pointer_icon:"mdi:gauge",pointer_icon_color:"#FFFFFF",pointer_icon_size:24,gauge_color_mode:"gradient",gauge_color:"var(--primary-color)",gauge_background_color:"#424242",use_gradient:!0,gradient_stops:[{id:this.generateId("stop"),position:0,color:"#4CAF50"},{id:this.generateId("stop"),position:50,color:"#FFC107"},{id:this.generateId("stop"),position:100,color:"#F44336"}],show_value:!0,value_position:"center",value_font_size:24,value_color:"var(--primary-text-color)",value_bold:!1,value_italic:!1,value_underline:!1,value_uppercase:!1,value_strikethrough:!1,show_name:!0,name_position:"top",name_font_size:16,name_color:"var(--secondary-text-color)",name_bold:!1,name_italic:!1,name_underline:!1,name_uppercase:!1,name_strikethrough:!1,show_min_max:!0,min_max_font_size:12,min_max_color:"var(--secondary-text-color)",show_ticks:!0,tick_count:10,tick_color:"var(--divider-color)",show_tick_labels:!1,tick_label_font_size:10,gauge_animation_enabled:!0,gauge_animation_duration:"1000ms",gauge_animation_easing:"ease-out",segments:[{id:this.generateId("segment"),from:0,to:30,color:"#4CAF50",label:"Low"},{id:this.generateId("segment"),from:30,to:70,color:"#FFC107",label:"Medium"},{id:this.generateId("segment"),from:70,to:100,color:"#F44336",label:"High"}],tap_action:void 0,hold_action:void 0,double_tap_action:void 0,display_mode:"always",display_conditions:[],unified_template_mode:!1,unified_template:""}}findSuitableSensor(e){if(!(null==e?void 0:e.states))return"";const t=["sensor.battery_level","sensor.cpu_temperature","sensor.humidity","sensor.temperature"];for(const i of t)if(e.states[i])return i;return Object.keys(e.states).filter(t=>{if(!t.startsWith("sensor."))return!1;const i=e.states[t],o=parseFloat(i.state);return!isNaN(o)})[0]||""}renderLogicTab(e,t,i,o){return l.X.render(e,t,e=>o(e))}renderGeneralTab(e,t,i,r){const a=e;return o.qy`
      ${this.injectUcFormStyles()}

      ${this.renderBasicConfiguration(a,t,i,r)}
      ${this.renderValueConfiguration(a,t,i,r)}
      ${this.renderStyleConfiguration(a,t,r)}
      ${this.renderPointerConfiguration(a,t,r)}
      ${this.renderColorConfiguration(a,t,r)}
      ${this.renderDisplayConfiguration(a,t,r)}
      ${this.renderTicksConfiguration(a,t,r)}
      ${this.renderAnimationConfiguration(a,t,r)}
    `}renderBasicConfiguration(e,t,i,r){var n,l,s,d,c;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_basic",(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en","BASIC CONFIGURATION")}</div>

        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",e.entity||"",e=>{r({entity:e}),this.triggerPreviewUpdate()},["sensor","input_number"],(0,a.kg)("editor.gauge.entity",(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en","Entity"))}
          <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
            ${(0,a.kg)("editor.gauge.entity_desc",(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en","Select a sensor or input number entity whose value will be displayed on the gauge.")}
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          ${this.renderFieldSection("Name","Optional display name for the gauge. Leave empty to use entity friendly name.",t,{name:e.name||""},[this.textField("name")],e=>r({name:e.detail.value.name}))}
        </div>

        <div class="field-container" style="margin-bottom: 24px;">
          <div class="field-title">Minimum Value</div>
          <div class="field-description">The minimum value for the gauge scale.</div>
          ${this.renderUcForm(t,{min_value:null!==(d=e.min_value)&&void 0!==d?d:0},[{name:"min_value",selector:{number:{mode:"box",step:1}}}],e=>{const t=e.detail.value.min_value;r({min_value:""===t?void 0:Number(t)})})}
        </div>

        <div class="field-container" style="margin-bottom: 24px;">
          <div class="field-title">Maximum Value</div>
          <div class="field-description">The maximum value for the gauge scale.</div>
          ${this.renderUcForm(t,{max_value:null!==(c=e.max_value)&&void 0!==c?c:100},[{name:"max_value",selector:{number:{mode:"box",step:1}}}],e=>{const t=e.detail.value.max_value;r({max_value:""===t?void 0:Number(t)})})}
        </div>
      </div>
    `}renderValueConfiguration(e,t,i,r){var n,l,s,d;const c=e.value_type||"entity",u=e.unified_template_mode||!1;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_value",(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en","VALUE CONFIGURATION")}</div>

        <!-- Value Source -->
        <div class="field-group" style="margin-bottom: 24px; ${u?"opacity: 0.5; pointer-events: none;":""}">
          <div class="field-title">
            Value Source
            ${u?o.qy`<span style="font-size: 12px; color: var(--secondary-text-color); margin-left: 8px; font-weight: normal;">(Disabled - Template Mode Active)</span>`:""}
          </div>
          <div class="field-description">
            ${u?"Value Source options are disabled when Template Mode is active. Use the template editor below to control the gauge value.":"How to calculate the gauge value."}
          </div>
          ${this.renderUcForm(t,{value_type:c},[this.selectField("value_type",[{value:"entity",label:"Entity State"},{value:"attribute",label:"Entity Attribute"}])],e=>{const t=e.detail.value.value_type;t!==c&&(r({value_type:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
        </div>
        ${"attribute"!==c||u?"":o.qy`
              <div>
                ${this.renderEntityPickerWithVariables(t,i,"value_attribute_entity",e.value_attribute_entity||"",e=>r({value_attribute_entity:e}),void 0,"Attribute Entity")}
                ${this.renderFieldSection("Attribute Name","Name of the attribute to use.",t,{value_attribute_name:e.value_attribute_name||""},[this.textField("value_attribute_name")],e=>r({value_attribute_name:e.detail.value.value_attribute_name}))}
              </div>
            `}

        <!-- Unified Template Section -->
        <div style="margin-bottom: 24px; margin-top: 24px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:16px;font-weight:600;">${(0,a.kg)("editor.gauge.unified_template.toggle",(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en","Template Mode")}</span>
              <button
                type="button"
                class="help-btn"
                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                title="${(0,a.kg)("editor.gauge.unified_template.cheatsheet",(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en","Template cheatsheet")}"
                @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"gauge"}}))}}
              >
                <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
              </button>
            </div>
            <ha-switch
              .checked=${e.unified_template_mode||!1}
              @change=${e=>{r({unified_template_mode:e.target.checked}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-switch>
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; line-height: 1.5;">
            ${(0,a.kg)("editor.gauge.unified_template.desc",(null===(d=null==t?void 0:t.locale)||void 0===d?void 0:d.language)||"en","Use Jinja2 templates to dynamically set gauge value, gauge_color, and container_background_color.")}
          </div>
          ${u?o.qy`
                <div
                  style="margin-top:12px;"
                  @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                  @dragstart=${e=>e.stopPropagation()}
                  @insert-snippet=${e=>{var t,i,o;const r=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==r?void 0:r.insertAtCursor)||void 0===t||t.call(r,null!==(o=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                >
                  <ultra-template-editor
                    .hass=${t}
                    .value=${e.unified_template||""}
                    .placeholder=${'{% set temp = state | float %}\n{\n  "value": {{ temp }},\n  "gauge_color": "{% if temp > 25 %}#FF4444{% elif temp > 20 %}#FF8800{% else %}#00CC00{% endif %}"\n}'}
                    .minHeight=${200}
                    .maxHeight=${500}
                    @value-changed=${e=>{r({unified_template:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-template-editor>
                </div>
              `:""}
        </div>
      </div>
    `}renderStyleConfiguration(e,t,i){var r;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_style",(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en","GAUGE STYLE")}</div>

        <div class="field-group" style="margin-bottom: 24px;">
          <div class="field-title">Gauge Style</div>
          <div class="field-description">Choose the visual style of the gauge.</div>
          ${this.renderUcForm(t,{gauge_style:e.gauge_style||"modern"},[this.selectField("gauge_style",[{value:"basic",label:"Basic"},{value:"modern",label:"Modern"},{value:"speedometer",label:"Speedometer"},{value:"arc",label:"Arc"},{value:"radial",label:"Radial"},{value:"lines",label:"Lines"},{value:"block",label:"Block"},{value:"minimal",label:"Minimal"},{value:"inset",label:"Inset"},{value:"3d",label:"3D"},{value:"neon",label:"Neon Glow"},{value:"digital",label:"Digital"}])],t=>{const o=t.detail.value.gauge_style;o!==(e.gauge_style||"modern")&&(i({gauge_style:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
        </div>

        ${this.renderGaugeSizeFields(e,t,i)}
        ${this.renderFlipHorizontalOption(e,t,i)}
      </div>
    `}renderFlipHorizontalOption(e,t,i){const r=e.gauge_style||"modern";return["arc","speedometer"].includes(r)?o.qy`
      <div style="margin-top: 16px;">
        ${this.renderFieldSection("Flip Horizontal","Mirror the gauge so it fills from right to left.",t,{flip_horizontal:e.flip_horizontal||!1},[this.booleanField("flip_horizontal")],e=>{i({flip_horizontal:e.detail.value.flip_horizontal}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `:o.qy``}renderGaugeSizeFields(e,t,i){var r,a;const n=e.gauge_style||"modern";return["lines","digital"].includes(n)?o.qy``:o.qy`
      <div class="field-container" style="margin-bottom: 24px;">
        <div class="field-title">Gauge Size</div>
        <div class="field-description">Diameter/size of the gauge in pixels (100-400).</div>
        ${this.renderUcForm(t,{gauge_size:null!==(r=e.gauge_size)&&void 0!==r?r:200},[{name:"gauge_size",selector:{number:{mode:"box",min:100,max:400,step:10}}}],e=>{const t=e.detail.value.gauge_size;i({gauge_size:""===t?void 0:Number(t)})})}
      </div>

      <div class="field-container" style="margin-bottom: 24px;">
        <div class="field-title">Gauge Thickness</div>
        <div class="field-description">Thickness of the gauge track (1-50).</div>
        ${this.renderUcForm(t,{gauge_thickness:null!==(a=e.gauge_thickness)&&void 0!==a?a:15},[{name:"gauge_thickness",selector:{number:{mode:"box",min:1,max:50,step:1}}}],e=>{const t=e.detail.value.gauge_thickness;i({gauge_thickness:""===t?void 0:Number(t)})})}
      </div>
    `}renderPointerSizeFields(e,t,i){var r,a;const n=e.pointer_style||"needle";return["highlight","cap","icon"].includes(n)?o.qy``:o.qy`
      <div class="field-container" style="margin-bottom: 24px;">
        <div class="field-title">Pointer Length</div>
        <div class="field-description">Length as percentage of gauge radius (1-100).</div>
        ${this.renderUcForm(t,{pointer_length:null!==(r=e.pointer_length)&&void 0!==r?r:80},[{name:"pointer_length",selector:{number:{mode:"box",min:1,max:100,step:1}}}],e=>{const t=e.detail.value.pointer_length;i({pointer_length:""===t?void 0:Number(t)})})}
      </div>

      <div class="field-container" style="margin-bottom: 24px;">
        <div class="field-title">Pointer Width</div>
        <div class="field-description">Width of the pointer in pixels (1-20).</div>
        ${this.renderUcForm(t,{pointer_width:null!==(a=e.pointer_width)&&void 0!==a?a:4},[{name:"pointer_width",selector:{number:{mode:"box",min:1,max:20,step:1}}}],e=>{const t=e.detail.value.pointer_width;i({pointer_width:""===t?void 0:Number(t)})})}
      </div>
    `}renderPointerConfiguration(e,t,i){var r,n,l;const s=!1!==e.pointer_enabled;return o.qy`
      <div class="settings-section">
        ${this.renderFieldSection((0,a.kg)("editor.gauge.section_pointer",(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en","POINTER CONFIGURATION"),(0,a.kg)("editor.gauge.section_pointer_desc",(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en","Enable and customize the gauge pointer/needle that indicates the current value."),t,{pointer_enabled:s},[this.booleanField("pointer_enabled")],e=>i({pointer_enabled:e.detail.value.pointer_enabled}))}
        ${s?o.qy`
              <div>
                <div class="field-group" style="margin-bottom: 24px;">
                  <div class="field-title">Pointer Style</div>
                  <div class="field-description">Visual style of the pointer/needle.</div>
                  ${this.renderUcForm(t,{pointer_style:e.pointer_style||"needle"},[this.selectField("pointer_style",[{value:"needle",label:"Needle"},{value:"triangle",label:"Triangle"},{value:"arrow",label:"Arrow"},{value:"line",label:"Line"},{value:"circle",label:"Circle"},{value:"highlight",label:"Track Highlight"},{value:"cap",label:"Track Cap"},{value:"icon",label:"Icon"}])],t=>{const o=t.detail.value.pointer_style;o!==(e.pointer_style||"needle")&&(i({pointer_style:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>

                ${"icon"===e.pointer_style?o.qy`
                      <div class="field-container" style="margin-bottom: 24px;">
                        <div class="field-title">Pointer Icon</div>
                        <div class="field-description">Select an icon to display as the pointer.</div>
                        ${this.renderFieldSection("","",t,{pointer_icon:e.pointer_icon||"mdi:gauge"},[this.iconField("pointer_icon")],e=>i({pointer_icon:e.detail.value.pointer_icon}))}
                      </div>

                      <div class="field-container" style="margin-bottom: 24px;">
                        <div class="field-title">Icon Color</div>
                        <div class="field-description">Color of the icon pointer.</div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${e.pointer_icon_color||""}
                          .defaultValue=${"#FFFFFF"}
                          .hass=${t}
                          @value-changed=${e=>i({pointer_icon_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <div class="field-container" style="margin-bottom: 24px;">
                        <div class="field-title">Icon Size</div>
                        <div class="field-description">Size of the icon in pixels (8-48).</div>
                        ${this.renderUcForm(t,{pointer_icon_size:null!==(l=e.pointer_icon_size)&&void 0!==l?l:24},[{name:"pointer_icon_size",selector:{number:{mode:"box",min:8,max:48,step:1}}}],e=>{const t=e.detail.value.pointer_icon_size;i({pointer_icon_size:""===t?void 0:Number(t)})})}
                      </div>
                    `:o.qy`
                      <div class="field-container" style="margin-bottom: 24px;">
                        <div class="field-title">Pointer Color</div>
                        <div class="field-description">Color of the pointer.</div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${e.pointer_color||""}
                          .defaultValue=${"var(--primary-color)"}
                          .hass=${t}
                          @value-changed=${e=>i({pointer_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    `}

                ${this.renderPointerSizeFields(e,t,i)}
              </div>
            `:""}
      </div>
    `}renderColorConfiguration(e,t,i){var r;const n=e.gauge_color_mode||"gradient",l=e.unified_template_mode||!1;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_color",(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en","COLOR CONFIGURATION")}</div>

        ${l?o.qy`
              <div style="padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: 8px; border-left: 4px solid var(--primary-color); margin-bottom: 16px;">
                <div style="font-size: 12px; color: var(--primary-color); font-weight: 600; margin-bottom: 4px;">
                  Template Mode Active
                </div>
                <div style="font-size: 11px; color: var(--secondary-text-color);">
                  Color settings below are used as fallback. Template Mode (in Value Configuration) can override colors via <code>gauge_color</code> property.
                </div>
              </div>
            `:""}

        <div class="field-group" style="margin-bottom: 24px;">
          <div class="field-title">Color Mode</div>
          <div class="field-description">How colors are applied to the gauge.</div>
          ${this.renderUcForm(t,{gauge_color_mode:n},[this.selectField("gauge_color_mode",[{value:"solid",label:"Solid Color"},{value:"gradient",label:"Gradient"},{value:"segments",label:"Color Segments"}])],t=>{const o=t.detail.value.gauge_color_mode;if(o===n)return;const r={gauge_color_mode:o};"segments"!==o||e.segments&&0!==e.segments.length||(r.segments=[{id:this.generateId("segment"),from:0,to:30,color:"#4CAF50",label:"Low"},{id:this.generateId("segment"),from:30,to:70,color:"#FFC107",label:"Medium"},{id:this.generateId("segment"),from:70,to:100,color:"#F44336",label:"High"}]),i(r),setTimeout(()=>this.triggerPreviewUpdate(),50)},!1)}
        </div>
        ${"solid"===n?o.qy`
              <div>
                <div class="field-container" style="margin-bottom: 24px;">
                  <div class="field-title">Gauge Color</div>
                  <div class="field-description">Main color of the gauge.</div>
                  <ultra-color-picker
                    style="width: 100%;"
                    .value=${e.gauge_color||""}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${t}
                    @value-changed=${e=>i({gauge_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}
        ${"gradient"===n?o.qy`
              <div>
                <div class="field-group" style="margin-bottom: 16px;">
                  <div class="field-title">Gradient Display Mode</div>
                  <div class="field-description">How the gradient is displayed on the gauge.</div>
                  ${this.renderUcForm(t,{gradient_display_mode:e.gradient_display_mode||"full"},[this.selectField("gradient_display_mode",[{value:"full",label:"Full Gradient"},{value:"cropped",label:"Cropped to Value"},{value:"value-based",label:"Value-Based Color"}])],t=>{const o=t.detail.value.gradient_display_mode;o!==(e.gradient_display_mode||"full")&&(i({gradient_display_mode:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>

                <uc-gradient-editor
                  .stops=${e.gradient_stops||[{id:this.generateId("stop"),position:0,color:"#4CAF50"},{id:this.generateId("stop"),position:50,color:"#FFC107"},{id:this.generateId("stop"),position:100,color:"#F44336"}]}
                  .barSize=${"regular"}
                  .barRadius=${"round"}
                  .barStyle=${"flat"}
                  @gradient-changed=${e=>{i({gradient_stops:e.detail.stops})}}
                ></uc-gradient-editor>
              </div>
            `:""}
        ${"segments"===n?o.qy`
              <div>
                <div class="field-title">Color Segments</div>
                <div class="field-description">Define discrete color segments with ranges.</div>

                <div class="segments-container">
                  ${(e.segments||[]).map((r,a)=>o.qy`
                      <div class="segment-item">
                        <div class="segment-row">
                          <div>
                            <div
                              style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px;"
                            >
                              From Value
                            </div>
                            <input
                              type="number"
                              .value="${r.from}"
                              @input=${t=>{const o=t.target,r=[...e.segments||[]];r[a]=Object.assign(Object.assign({},r[a]),{from:parseFloat(o.value)}),i({segments:r})}}
                              style="width: 100%; padding: 8px; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--secondary-background-color); color: var(--primary-text-color);"
                            />
                          </div>
                          <div>
                            <div
                              style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px;"
                            >
                              To Value
                            </div>
                            <input
                              type="number"
                              .value="${r.to}"
                              @input=${t=>{const o=t.target,r=[...e.segments||[]];r[a]=Object.assign(Object.assign({},r[a]),{to:parseFloat(o.value)}),i({segments:r})}}
                              style="width: 100%; padding: 8px; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--secondary-background-color); color: var(--primary-text-color);"
                            />
                          </div>
                        </div>
                        <div style="margin-bottom: 8px;">
                          <div
                            style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px;"
                          >
                            Label (optional)
                          </div>
                          <input
                            type="text"
                            .value="${r.label||""}"
                            @input=${t=>{const o=t.target,r=[...e.segments||[]];r[a]=Object.assign(Object.assign({},r[a]),{label:o.value}),i({segments:r})}}
                            style="width: 100%; padding: 8px; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--secondary-background-color); color: var(--primary-text-color);"
                          />
                        </div>
                        <div style="display: flex; gap: 8px; align-items: center;">
                          <div style="flex: 1;">
                            <div
                              style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px;"
                            >
                              Color
                            </div>
                            <ultra-color-picker
                              style="width: 100%;"
                              .value=${r.color}
                              .hass=${t}
                              @value-changed=${t=>{const o=[...e.segments||[]];o[a]=Object.assign(Object.assign({},o[a]),{color:t.detail.value}),i({segments:o})}}
                            ></ultra-color-picker>
                          </div>
                          <button
                            class="remove-stop-btn"
                            @click=${()=>{const t=[...e.segments||[]];t.splice(a,1),i({segments:t})}}
                            style="margin-top: 20px;"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    `)}
                </div>

                <button
                  class="add-stop-btn"
                  @click=${()=>{const t=[...e.segments||[]],o=t.length>0?t[t.length-1].to:e.min_value||0;t.push({id:this.generateId("segment"),from:o,to:o+20,color:"#4CAF50",label:""}),i({segments:t})}}
                  style="margin-top: 12px;"
                >
                  + Add Segment
                </button>
              </div>
            `:""}

        <div class="field-container" style="margin-top: 16px;">
          <div class="field-title">Background Color</div>
          <div class="field-description">Background color for the gauge track.</div>
          <ultra-color-picker
            style="width: 100%;"
            .value=${e.gauge_background_color||""}
            .defaultValue=${"var(--disabled-text-color)"}
            .hass=${t}
            @value-changed=${e=>i({gauge_background_color:e.detail.value})}
          ></ultra-color-picker>
        </div>
      </div>
    `}renderDisplayConfiguration(e,t,i){var r,n,l,s,d,c,u,g;const p=!1!==e.show_value,m=!1!==e.show_name,v=!1!==e.show_min_max;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_display",(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en","DISPLAY CONFIGURATION")}</div>

        <!-- Value Display -->
        ${this.renderFieldSection("Show Value","",t,{show_value:p},[this.booleanField("show_value")],e=>i({show_value:e.detail.value.show_value}))}

        ${p?o.qy`
              <div style="margin-bottom: 16px;">
                <div class="field-container" style="margin-bottom: 24px;">
                  <div class="field-title">Value Position</div>
                  <div class="field-description">Where to display the value text.</div>
                  ${this.renderUcForm(t,{value_position:e.value_position||"center"},[this.selectField("value_position",[{value:"center",label:"Center"},{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"none",label:"None"}])],t=>{const o=t.detail.value.value_position;o!==(e.value_position||"center")&&(i({value_position:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Value Font Size</div>
                  ${this.renderUcForm(t,{value_font_size:null!==(n=e.value_font_size)&&void 0!==n?n:24},[{name:"value_font_size",selector:{number:{mode:"box",min:8,max:48,step:1}}}],e=>{const t=e.detail.value.value_font_size;i({value_font_size:""===t?void 0:Number(t)})})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Value Color</div>
                  <ultra-color-picker
                    style="width: 100%;"
                    .value=${e.value_color||""}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>i({value_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Value Text Formatting</div>
                  <div class="field-description">Apply formatting styles to the value text.</div>
                  <div class="format-buttons" style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button
                      class="format-btn ${e.value_bold?"active":""}"
                      @click=${()=>i({value_bold:!e.value_bold})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.value_bold?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.value_bold?"white":"var(--primary-text-color)"};"
                      title="Bold"
                    >
                      <ha-icon icon="mdi:format-bold"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.value_italic?"active":""}"
                      @click=${()=>i({value_italic:!e.value_italic})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.value_italic?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.value_italic?"white":"var(--primary-text-color)"};"
                      title="Italic"
                    >
                      <ha-icon icon="mdi:format-italic"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.value_underline?"active":""}"
                      @click=${()=>i({value_underline:!e.value_underline})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.value_underline?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.value_underline?"white":"var(--primary-text-color)"};"
                      title="Underline"
                    >
                      <ha-icon icon="mdi:format-underline"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.value_uppercase?"active":""}"
                      @click=${()=>i({value_uppercase:!e.value_uppercase})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.value_uppercase?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.value_uppercase?"white":"var(--primary-text-color)"};"
                      title="Uppercase"
                    >
                      <ha-icon icon="mdi:format-letter-case-upper"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.value_strikethrough?"active":""}"
                      @click=${()=>i({value_strikethrough:!e.value_strikethrough})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.value_strikethrough?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.value_strikethrough?"white":"var(--primary-text-color)"};"
                      title="Strikethrough"
                    >
                      <ha-icon icon="mdi:format-strikethrough"></ha-icon>
                    </button>
                  </div>
                </div>

                ${this.renderFieldSection("Value Format",'Optional format string (e.g., "%.1f°C", "%.0f%%").',t,{value_format:e.value_format||""},[this.textField("value_format")],e=>i({value_format:e.detail.value.value_format}))}

                <div class="field-container" style="margin-bottom: 24px; margin-top: 16px;">
                  <div class="field-title">Value X Offset</div>
                  <div class="field-description">
                    Horizontal offset for value positioning (supports negative values).
                  </div>
                  ${this.renderUcForm(t,{value_x_offset:null!==(l=e.value_x_offset)&&void 0!==l?l:0},[{name:"value_x_offset",selector:{number:{mode:"box",min:-500,max:500,step:1}}}],e=>{const t=e.detail.value.value_x_offset;i({value_x_offset:""===t?void 0:Number(t)})})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Value Y Offset</div>
                  <div class="field-description">
                    Vertical offset for value positioning (supports negative values).
                  </div>
                  ${this.renderUcForm(t,{value_y_offset:null!==(s=e.value_y_offset)&&void 0!==s?s:0},[{name:"value_y_offset",selector:{number:{mode:"box",min:-500,max:500,step:1}}}],e=>{const t=e.detail.value.value_y_offset;i({value_y_offset:""===t?void 0:Number(t)})})}
                </div>
              </div>
            `:""}

        <!-- Name Display -->
        ${this.renderFieldSection("Show Name","",t,{show_name:m},[this.booleanField("show_name")],e=>i({show_name:e.detail.value.show_name}))}

        ${m?o.qy`
              <div style="margin-bottom: 16px;">
                <div class="field-group" style="margin-bottom: 24px;">
                  <div class="field-title">Name Position</div>
                  <div class="field-description">Where to display the name/label.</div>
                  ${this.renderUcForm(t,{name_position:e.name_position||"top"},[this.selectField("name_position",[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"none",label:"None"}])],t=>{const o=t.detail.value.name_position;o!==(e.name_position||"top")&&(i({name_position:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Name Font Size</div>
                  ${this.renderUcForm(t,{name_font_size:null!==(d=e.name_font_size)&&void 0!==d?d:16},[{name:"name_font_size",selector:{number:{mode:"box",min:8,max:32,step:1}}}],e=>{const t=e.detail.value.name_font_size;i({name_font_size:""===t?void 0:Number(t)})})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Name Color</div>
                  <ultra-color-picker
                    style="width: 100%;"
                    .value=${e.name_color||""}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>i({name_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Name Text Formatting</div>
                  <div class="field-description">Apply formatting styles to the name text.</div>
                  <div class="format-buttons" style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button
                      class="format-btn ${e.name_bold?"active":""}"
                      @click=${()=>i({name_bold:!e.name_bold})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.name_bold?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.name_bold?"white":"var(--primary-text-color)"};"
                      title="Bold"
                    >
                      <ha-icon icon="mdi:format-bold"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.name_italic?"active":""}"
                      @click=${()=>i({name_italic:!e.name_italic})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.name_italic?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.name_italic?"white":"var(--primary-text-color)"};"
                      title="Italic"
                    >
                      <ha-icon icon="mdi:format-italic"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.name_underline?"active":""}"
                      @click=${()=>i({name_underline:!e.name_underline})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.name_underline?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.name_underline?"white":"var(--primary-text-color)"};"
                      title="Underline"
                    >
                      <ha-icon icon="mdi:format-underline"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.name_uppercase?"active":""}"
                      @click=${()=>i({name_uppercase:!e.name_uppercase})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.name_uppercase?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.name_uppercase?"white":"var(--primary-text-color)"};"
                      title="Uppercase"
                    >
                      <ha-icon icon="mdi:format-letter-case-upper"></ha-icon>
                    </button>
                    <button
                      class="format-btn ${e.name_strikethrough?"active":""}"
                      @click=${()=>i({name_strikethrough:!e.name_strikethrough})}
                      style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${e.name_strikethrough?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${e.name_strikethrough?"white":"var(--primary-text-color)"};"
                      title="Strikethrough"
                    >
                      <ha-icon icon="mdi:format-strikethrough"></ha-icon>
                    </button>
                  </div>
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Name X Offset</div>
                  <div class="field-description">
                    Horizontal offset for name positioning (supports negative values).
                  </div>
                  ${this.renderUcForm(t,{name_x_offset:null!==(c=e.name_x_offset)&&void 0!==c?c:0},[{name:"name_x_offset",selector:{number:{mode:"box",min:-500,max:500,step:1}}}],e=>{const t=e.detail.value.name_x_offset;i({name_x_offset:""===t?void 0:Number(t)})})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Name Y Offset</div>
                  <div class="field-description">
                    Vertical offset for name positioning (supports negative values).
                  </div>
                  ${this.renderUcForm(t,{name_y_offset:null!==(u=e.name_y_offset)&&void 0!==u?u:0},[{name:"name_y_offset",selector:{number:{mode:"box",min:-500,max:500,step:1}}}],e=>{const t=e.detail.value.name_y_offset;i({name_y_offset:""===t?void 0:Number(t)})})}
                </div>
              </div>
            `:""}

        <!-- Min/Max Display -->
        ${e.show_tick_labels?o.qy`
              <div class="field-container" style="margin-bottom: 16px; opacity: 0.5;">
                <div class="field-title">Show Min/Max Values</div>
                <div class="field-description" style="color: var(--warning-color);">
                  Min/Max values are automatically hidden when tick labels are enabled to avoid
                  visual clutter.
                </div>
              </div>
            `:o.qy`
              <div class="field-container" style="margin-bottom: 16px;">
                <div class="field-title">Show Min/Max Values</div>
                <div class="field-description">
                  Display minimum and maximum values on the gauge.
                </div>
                ${this.renderUcForm(t,{show_min_max:v},[this.booleanField("show_min_max")],e=>i({show_min_max:e.detail.value.show_min_max}))}
              </div>
            `}
        ${v?o.qy`
              <div>
                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Min/Max Font Size</div>
                  ${this.renderUcForm(t,{min_max_font_size:null!==(g=e.min_max_font_size)&&void 0!==g?g:12},[{name:"min_max_font_size",selector:{number:{mode:"box",min:8,max:20,step:1}}}],e=>i({min_max_font_size:e.detail.value.min_max_font_size}))}
                </div>

                <div class="field-container">
                  <div class="field-title">Min/Max Color</div>
                  <ultra-color-picker
                    style="width: 100%;"
                    .value=${e.min_max_color||""}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>i({min_max_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}
      </div>
    `}renderTicksConfiguration(e,t,i){var r,n,l;const s=!1!==e.show_ticks,d=e.show_tick_labels||!1;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_ticks",(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en","TICK MARKS")}</div>

        ${this.renderFieldSection("Show Tick Marks","",t,{show_ticks:s},[this.booleanField("show_ticks")],e=>i({show_ticks:e.detail.value.show_ticks}))}

        ${s?o.qy`
              <div>
                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Tick Count</div>
                  <div class="field-description">Number of major tick marks.</div>
                  ${this.renderUcForm(t,{tick_count:null!==(n=e.tick_count)&&void 0!==n?n:10},[{name:"tick_count",selector:{number:{mode:"box",min:2,max:50,step:1}}}],e=>{const t=e.detail.value.tick_count;i({tick_count:""===t?void 0:Number(t)})})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Tick Color</div>
                  <ultra-color-picker
                    style="width: 100%;"
                    .value=${e.tick_color||""}
                    .defaultValue=${"var(--divider-color)"}
                    .hass=${t}
                    @value-changed=${e=>i({tick_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Show Tick Labels</div>
                  ${this.renderUcForm(t,{show_tick_labels:d},[this.booleanField("show_tick_labels")],e=>i({show_tick_labels:e.detail.value.show_tick_labels}))}
                </div>

                ${d?o.qy`
                      <div class="field-container">
                        <div class="field-title">Tick Label Font Size</div>
                        ${this.renderUcForm(t,{tick_label_font_size:null!==(l=e.tick_label_font_size)&&void 0!==l?l:10},[{name:"tick_label_font_size",selector:{number:{mode:"box",min:6,max:16,step:1}}}],e=>{const t=e.detail.value.tick_label_font_size;i({tick_label_font_size:""===t?void 0:Number(t)})})}
                      </div>
                    `:""}
              </div>
            `:""}
      </div>
    `}renderAnimationConfiguration(e,t,i){var r;const n=!1!==e.gauge_animation_enabled;return o.qy`
      <div class="settings-section">
        <div class="section-title">${(0,a.kg)("editor.gauge.section_animation",(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en","ANIMATION")}</div>

        ${this.renderFieldSection("Enable Animation","Animate gauge changes smoothly.",t,{gauge_animation_enabled:n},[this.booleanField("gauge_animation_enabled")],e=>i({gauge_animation_enabled:e.detail.value.gauge_animation_enabled}))}

        ${n?o.qy`
              <div>
                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">Animation Duration</div>
                  <div class="field-description">
                    Duration in milliseconds (e.g., "1000ms", "1s").
                  </div>
                  ${this.renderFieldSection("","",t,{gauge_animation_duration:e.gauge_animation_duration||"1000ms"},[this.textField("gauge_animation_duration")],e=>{const t=e.detail.value.gauge_animation_duration;i({gauge_animation_duration:""===t?void 0:t})})}
                </div>

                <div class="field-group">
                  <div class="field-title">Animation Easing</div>
                  <div class="field-description">Easing function for the animation.</div>
                  ${this.renderUcForm(t,{gauge_animation_easing:e.gauge_animation_easing||"ease-out"},[this.selectField("gauge_animation_easing",[{value:"linear",label:"Linear"},{value:"ease-in",label:"Ease In"},{value:"ease-out",label:"Ease Out"},{value:"ease-in-out",label:"Ease In-Out"},{value:"bounce",label:"Bounce"}])],t=>{const o=t.detail.value.gauge_animation_easing;o!==(e.gauge_animation_easing||"ease-out")&&(i({gauge_animation_easing:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>
              </div>
            `:""}
      </div>
    `}renderActionsTab(e,t,i,o){return n.A.render(e,t,e=>o(e))}renderDesignTab(e,t,i,o){return s.T.render(e,t,e=>o(e))}renderSplitPreview(e,t){return this.renderPreview(e,t)}renderPreview(e,t,i,r){var n;const l=e,s=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(this._templateService&&t&&this._templateService.updateHass(t),!(l.unified_template_mode||l.entity&&""!==l.entity.trim()))return this.renderGradientErrorState((0,a.kg)("editor.gauge.error_no_entity",s,"Select Entity"),(0,a.kg)("editor.gauge.error_no_entity_desc",s,"Choose an entity in the General tab"),"mdi:gauge-empty");const d=l,c=l.design||{},u={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",overflow:"visible",boxSizing:"border-box",padding:c.padding_top||c.padding_bottom||c.padding_left||c.padding_right||d.padding_top||d.padding_bottom||d.padding_left||d.padding_right?`${this.addPixelUnit(c.padding_top||d.padding_top)||"0px"} ${this.addPixelUnit(c.padding_right||d.padding_right)||"0px"} ${this.addPixelUnit(c.padding_bottom||d.padding_bottom)||"0px"} ${this.addPixelUnit(c.padding_left||d.padding_left)||"0px"}`:"0",margin:c.margin_top||c.margin_bottom||c.margin_left||c.margin_right||d.margin_top||d.margin_bottom||d.margin_left||d.margin_right?`${c.margin_top||d.margin_top||"0px"} ${c.margin_right||d.margin_right||"0px"} ${c.margin_bottom||d.margin_bottom||"0px"} ${c.margin_left||d.margin_left||"0px"}`:"0",background:c.background_color||d.background_color||"transparent",border:(c.border_style||d.border_style)&&"none"!==(c.border_style||d.border_style)?`${this.addPixelUnit(c.border_width||d.border_width)||"1px"} ${c.border_style||d.border_style} ${c.border_color||d.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(c.border_radius||d.border_radius)||"0",boxShadow:(c.box_shadow_h||d.box_shadow_h)&&(c.box_shadow_v||d.box_shadow_v)?`${c.box_shadow_h||d.box_shadow_h||"0"} ${c.box_shadow_v||d.box_shadow_v||"0"} ${c.box_shadow_blur||d.box_shadow_blur||"0"} ${c.box_shadow_spread||d.box_shadow_spread||"0"} ${c.box_shadow_color||d.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none"},g=Object.entries(u).filter(([e,t])=>null!=t&&""!==t).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; "),p=this.calculateGaugeValue(l,t,i),m=this.getDisplayName(l,t),v=this.createGestureHandlers(l.id||"gauge",{tap_action:l.tap_action,hold_action:l.hold_action,double_tap_action:l.double_tap_action,entity:l.entity,module:l},t,i),h=this.getHoverEffectClass(e),_=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(o.qy`
      <div
        class="uc-gauge-container ${h}"
        style="${_}; ${g}; touch-action: manipulation; cursor: pointer;"
        @pointerdown=${v.onPointerDown}
        @pointermove=${v.onPointerMove}
        @pointerup=${v.onPointerUp}
        @pointerleave=${v.onPointerLeave}
        @pointercancel=${v.onPointerCancel}
      >
        ${l.show_name&&"top"===l.name_position?o.qy`
              <div class="uc-gauge-name" style="${this.getNameStyles(l)}">
                ${m}
              </div>
            `:""}

        <div
          class="uc-gauge-wrapper"
          style="position: relative; display: ${l.show_value&&"bottom"===l.value_position?"flex":"inline-block"}; ${l.show_value&&"bottom"===l.value_position?"flex-direction: column; align-items: center;":""} overflow: visible;"
        >
          ${l.show_value&&"top"===l.value_position?o.qy`
                <div class="uc-gauge-value-top" style="${this.getValueStyles(l)}">
                  ${this.formatValue(p,l)}
                </div>
              `:""}
          <svg
            class="uc-gauge-svg"
            viewBox="${this.getSvgViewBox(l)}"
            width="${l.gauge_size||200}"
            height="${this.getSvgHeight(l)}"
            style="overflow: visible;"
          >
            ${this.renderGaugeByStyle(l,p,t)}
          </svg>

          ${l.show_value&&"center"===l.value_position?o.qy`
                <div class="uc-gauge-value-center" style="${this.getValueStyles(l)}">
                  ${this.formatValue(p,l)}
                </div>
              `:""}
          ${l.show_value&&"bottom"===l.value_position?o.qy`
                <div class="uc-gauge-value-bottom" style="${this.getValueStyles(l)}">
                  ${this.formatValue(p,l)}
                </div>
              `:""}
        </div>
        ${l.show_name&&"bottom"===l.name_position?o.qy`
              <div class="uc-gauge-name" style="${this.getNameStyles(l)}">
                ${m}
              </div>
            `:""}
      </div>
    `,e,t)}calculateGaugeValue(e,t,i){var o;if(e.unified_template_mode&&e.unified_template&&(!this._templateService&&t?this._templateService=new d.I(t):this._templateService&&t&&this._templateService.updateHass(t),t)){t.__uvc_template_strings||(t.__uvc_template_strings={});const r=(0,u.KD)(e.unified_template,t,i),a=this._hashString(r),n=`unified_gauge_${e.id}_${a}`;if(this._templateService){const o=(0,g.pL)(e.entity||"",t,{entity:e.entity}),a=(0,g.jh)(e.entity||"",t);this._templateService.subscribeToTemplate(r,n,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},o,i,a)}const l=null===(o=t.__uvc_template_strings)||void 0===o?void 0:o[n];if(l&&""!==String(l).trim()){const e=(0,c.cv)(l);if(!(0,c.HD)(e)){if(void 0!==e.value){const t="number"==typeof e.value?e.value:parseFloat(String(e.value));if(!isNaN(t))return t}const t=(0,c.lR)(e);if(void 0!==t&&!isNaN(t))return t}}}const r="template"===e.value_type?"entity":e.value_type||"entity";if("entity"===r){const i=t.states[e.entity];return i?parseFloat(i.state)||0:e.min_value||0}if("attribute"===r&&e.value_attribute_entity&&e.value_attribute_name){const i=t.states[e.value_attribute_entity];if(!i)return e.min_value||0;const o=i.attributes[e.value_attribute_name];return parseFloat(o)||0}return e.min_value||0}getDisplayName(e,t){if(e.name)return e.name;const i=t.states[e.entity];return(null==i?void 0:i.attributes.friendly_name)||e.entity}formatValue(e,t){return t.value_format?t.value_format.replace(/%.(\d*)f/,(t,i)=>{const o=i?parseInt(i):0;return e.toFixed(o)}).replace(/%%/,"%"):e.toString()}renderGaugeByStyle(e,t,i){switch(e.gauge_style||"modern"){case"speedometer":return this.renderSpeedometerGauge(e,t,i);case"arc":return this.renderArcGauge(e,t,i);case"radial":return this.renderRadialGauge(e,t,i);case"lines":return this.renderLinesGauge(e,t,i);case"block":return this.renderBlockGauge(e,t,i);case"minimal":return this.renderMinimalGauge(e,t,i);case"inset":return this.renderInsetGauge(e,t,i);case"3d":return this.render3DGauge(e,t,i);case"neon":return this.renderNeonGauge(e,t,i);case"digital":return this.renderDigitalGauge(e,t,i);case"basic":return this.renderBasicGauge(e,t,i);default:return this.renderModernGauge(e,t,i)}}renderModernGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-120,p=120,m=g+240*u/100,v=this.describeArc(n,l,s,g,p),h=this.describeArc(n,l,s,g,m),_=this.getColorAtValue(e,u,i);return o.JW`
      ${this.renderGradientDefs(e,n,l,s,g,p,m,u,i)}
      
      <!-- Background arc -->
      <path
        d="${v}"
        fill="none"
        stroke="${e.gauge_background_color||"var(--disabled-text-color)"}"
        stroke-width="${a}"
        stroke-linecap="butt"
      />

      <!-- Value arc -->
      ${"segments"===e.gauge_color_mode?this.renderSegmentedArcs(e,n,l,s,g,p,a,t,!0):"gradient"===e.gauge_color_mode?this.renderGradientValueArc(e,h,a,u,"round",`transition: stroke-dashoffset ${!1!==e.gauge_animation_enabled?e.gauge_animation_duration||"1000ms":"0ms"} ${e.gauge_animation_easing||"ease-out"};`,v,n,l,g,m,i):o.JW`
              <path
                d="${h}"
                fill="none"
                stroke="${_}"
                stroke-width="${a}"
                stroke-linecap="round"
                style="transition: stroke-dashoffset ${!1!==e.gauge_animation_enabled?e.gauge_animation_duration||"1000ms":"0ms"} ${e.gauge_animation_easing||"ease-out"};"
              />
            `}

      <!-- Tick marks -->
      ${!1!==e.show_ticks?this.renderTickMarks(e,n,l,s,g,p,a):""}

      <!-- Pointer -->
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,m):""}

      <!-- Min/Max labels -->
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,g,p)}
    `}renderBasicGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-120,p=120,m=g+240*u/100,v=this.describeArc(n,l,s,g,p),h=this.describeArc(n,l,s,g,m),_=this.getColorAtValue(e,u,i);return o.JW`
      ${this.renderGradientDefs(e,n,l,s,g,p,m,u,i)}
      
      <!-- Background arc -->
      <path
        d="${v}"
        fill="none"
        stroke="${e.gauge_background_color||"var(--disabled-text-color)"}"
        stroke-width="${a}"
        stroke-linecap="butt"
      />

      <!-- Value arc -->
      ${"segments"===e.gauge_color_mode?this.renderSegmentedArcs(e,n,l,s,g,p,a,t):"gradient"===e.gauge_color_mode?this.renderGradientValueArc(e,h,a,u,"butt",void 0,v,n,l,g,m,i):o.JW`
              <path
                d="${h}"
                fill="none"
                stroke="${_}"
                stroke-width="${a}"
                stroke-linecap="butt"
              />
            `}

      <!-- Tick marks -->
      ${!1!==e.show_ticks?this.renderTickMarks(e,n,l,s,g,p,a):""}

      <!-- Pointer -->
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,m):""}

      <!-- Min/Max labels -->
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,g,p)}
    `}renderSpeedometerGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-225,p=45,m=g+270*u/100,v=this.describeArc(n,l,s,g,p),h=this.describeArc(n,l,s,g,m),_=this.getColorAtValue(e,u,i),f=e.flip_horizontal||!1,b=o.JW`
      ${this.renderGradientDefs(e,n,l,s,g,p,void 0,void 0,i)}
      
      <!-- Background arc -->
      <path
        d="${v}"
        fill="none"
        stroke="${e.gauge_background_color||"var(--disabled-text-color)"}"
        stroke-width="${a}"
        stroke-linecap="butt"
      />

      <!-- Value arc -->
      ${"segments"===e.gauge_color_mode?this.renderSegmentedArcs(e,n,l,s,g,p,a,t):"gradient"===e.gauge_color_mode?this.renderGradientValueArc(e,h,a,u,"butt",void 0,v,n,l,g,m,i):o.JW`
              <path
                d="${h}"
                fill="none"
                stroke="${_}"
                stroke-width="${a}"
                stroke-linecap="butt"
              />
            `}

      ${!1!==e.show_ticks?this.renderTickMarksGraphics(e,n,l,s,g,p,a):""}
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,m):""}
    `,$=o.JW`
      ${!1!==e.show_ticks&&e.show_tick_labels?this.renderTickLabels(e,n,l,s,g,p,a,f,r):""}
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,g,p,f,r)}
    `;return f?o.JW`
        <g transform="scale(-1, 1) translate(-${r}, 0)">
          ${b}
        </g>
        ${$}
      `:o.JW`
      ${b}
      ${$}
    `}renderArcGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-180,p=g+180*u/100,m=this.describeArc(n,l,s,g,0),v=this.describeArc(n,l,s,g,p),h=this.getColorAtValue(e,u,i),_=e.flip_horizontal||!1,f=o.JW`
      ${this.renderGradientDefs(e,n,l,s,g,0,p,u,i)}
      
      <!-- Background arc -->
      <path
        d="${m}"
        fill="none"
        stroke="${e.gauge_background_color||"var(--disabled-text-color)"}"
        stroke-width="${a}"
        stroke-linecap="butt"
      />

      <!-- Value arc -->
      ${"segments"===e.gauge_color_mode?this.renderSegmentedArcs(e,n,l,s,g,0,a,t):"gradient"===e.gauge_color_mode?this.renderGradientValueArc(e,v,a,u,"butt",void 0,m,n,l,g,p,i):o.JW`
              <path
                d="${v}"
                fill="none"
                stroke="${h}"
                stroke-width="${a}"
                stroke-linecap="butt"
              />
            `}

      ${!1!==e.show_ticks?this.renderTickMarksGraphics(e,n,l,s,g,0,a):""}
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,p):""}
    `,b=o.JW`
      ${!1!==e.show_ticks&&e.show_tick_labels?this.renderTickLabels(e,n,l,s,g,0,a,_,r):""}
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,g,0,_,r)}
    `;return _?o.JW`
        <g transform="scale(-1, 1) translate(-${r}, 0)">
          ${f}
        </g>
        ${b}
      `:o.JW`
      ${f}
      ${b}
    `}renderRadialGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-90,p=g+360*u/100,m=this.describeArc(n,l,s,g,270),v=this.describeArc(n,l,s,g,p),h=this.getColorAtValue(e,u,i);return o.JW`
      ${this.renderGradientDefs(e,n,l,s,g,270,p,u,i)}
      
      <!-- Background circle -->
      <circle
        cx="${n}"
        cy="${l}"
        r="${s}"
        fill="none"
        stroke="${e.gauge_background_color||"var(--disabled-text-color)"}"
        stroke-width="${a}"
      />

      <!-- Value arc -->
      ${"segments"===e.gauge_color_mode?this.renderSegmentedArcs(e,n,l,s,g,270,a,t):"gradient"===e.gauge_color_mode?this.renderGradientValueArc(e,v,a,u,"butt",void 0,m,n,l,g,p,i):o.JW`
              <path
                d="${v}"
                fill="none"
                stroke="${h}"
                stroke-width="${a}"
                stroke-linecap="butt"
              />
            `}

      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,p):""}
    `}renderLinesGauge(e,t,i){const r=e.gauge_size||200,a=r/2,n=r/2,l=r/2-20,s=e.min_value||0,d=(t-s)/((e.max_value||100)-s)*100,c=Math.min(Math.max(d,0),100),u=e.tick_count||20,g=[];for(let t=0;t<=u;t++){const r=240*t/u-120,s=t/u*100;let d;d="segments"===e.gauge_color_mode||s<=c?this.getColorAtValue(e,s,i):e.gauge_background_color||"var(--disabled-text-color)";const p=l-15,m=l,v=this.polarToCartesian(a,n,p,r),h=this.polarToCartesian(a,n,m,r);g.push(o.JW`
        <line
          x1="${v.x}"
          y1="${v.y}"
          x2="${h.x}"
          y2="${h.y}"
          stroke="${d}"
          stroke-width="3"
          stroke-linecap="round"
        />
      `)}return o.JW`
      ${g}
      ${!1!==e.pointer_enabled?this.renderPointer(e,a,n,l-15,240*c/100-120):""}
    `}renderBlockGauge(e,t,i){const r=e.gauge_size||200,a=r/2,n=r/2,l=r/2-20,s=e.gauge_thickness||20,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=e.tick_count||12,p=240/g,m=[];for(let t=0;t<g;t++){const r=t*p-120,d=r+p-2,c=t/g*100,v=(t+1)/g*100;let h;h="segments"===e.gauge_color_mode||u>=c?this.getColorAtValue(e,v,i):e.gauge_background_color||"var(--disabled-text-color)";const _=this.describeArc(a,n,l,r,d);m.push(o.JW`
        <path
          d="${_}"
          fill="none"
          stroke="${h}"
          stroke-width="${s}"
          stroke-linecap="butt"
        />
      `)}return o.JW`
      ${m}
      ${!1!==e.pointer_enabled?this.renderPointer(e,a,n,l,240*u/100-120):""}
    `}renderMinimalGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||8,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=360*u/100-90,p=2*Math.PI*s,m=u/100*p,v=this.getColorAtValue(e,u,i);return o.JW`
      ${this.renderGradientDefs(e,n,l,s,-90,270,g,u,i)}
      
      <circle
        cx="${n}"
        cy="${l}"
        r="${s}"
        fill="none"
        stroke="${e.gauge_background_color||"var(--disabled-text-color)"}"
        stroke-width="${a}"
      />

      ${"segments"===e.gauge_color_mode?this.renderSegmentedCircle(e,n,l,s,a,t,!0):"gradient"===e.gauge_color_mode?(()=>{const t="value-based"===(e.gradient_display_mode||"full")?this.getColorAtValue(e,u,i):`url(#gradient-${e.id})`;return o.JW`
                  <circle
                    cx="${n}"
                    cy="${l}"
                    r="${s}"
                    fill="none"
                    stroke="${t}"
                    stroke-width="${a}"
                    stroke-linecap="round"
                    stroke-dasharray="${p}"
                    stroke-dashoffset="${p-m}"
                    transform="rotate(-90 ${n} ${l})"
                  />
                `})():o.JW`
            <circle
              cx="${n}"
              cy="${l}"
              r="${s}"
              fill="none"
              stroke="${v}"
              stroke-width="${a}"
              stroke-linecap="round"
              stroke-dasharray="${p}"
              stroke-dashoffset="${p-m}"
              transform="rotate(-90 ${n} ${l})"
            />
          `}
    `}renderInsetGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-120,p=120,m=g+240*u/100,v=s+a/4,h=s-a/4,_=this.describeArc(n,l,v,g,p),f=this.describeArc(n,l,h,g,p),b=this.describeArc(n,l,v,g,m),$=this.describeArc(n,l,h,g,m),x=this.getColorAtValue(e,u,i),y=e.gauge_background_color||"var(--disabled-text-color)";return o.JW`
      ${this.renderGradientDefs(e,n,l,v,g,p,m,u)}
      
      <defs>
        <filter id="inset-shadow-${e.id}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood flood-color="rgba(0,0,0,0.3)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="3d-separator-shadow-${e.id}" x="-75%" y="-75%" width="250%" height="250%">
          <!-- CSS-like shadow: 0 0 6px 3px #000 for separator edge -->
          <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="spread" />
          <feGaussianBlur in="spread" stdDeviation="3" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
          </feMerge>
        </filter>
      </defs>
      
      <!-- Outer background arc -->
      <path
        d="${_}"
        fill="none"
        stroke="${y}"
        stroke-width="${a/2}"
        stroke-linecap="butt"
        filter="url(#inset-shadow-${e.id})"
      />
      
      <!-- Inner background arc -->
      <path
        d="${f}"
        fill="none"
        stroke="${y}"
        stroke-width="${a/2}"
        stroke-linecap="butt"
        opacity="0.7"
      />

      <!-- Value arcs -->
      ${"segments"===e.gauge_color_mode?o.JW`
              ${this.renderSegmentedArcsWithInsetStyle(e,n,l,v,g,p,a/2,t)}
              ${this.renderSegmentedArcsWithInsetStyle(e,n,l,h,g,p,a/2,t)}
            `:"gradient"===e.gauge_color_mode?(()=>{const t="value-based"===(e.gradient_display_mode||"full")?this.getColorAtValue(e,u,i):`url(#gradient-${e.id})`;return o.JW`
                  <!-- Outer value arc -->
                  <path
                    d="${b}"
                    fill="none"
                    stroke="${t}"
                    stroke-width="${a/2}"
                    stroke-linecap="butt"
                  />
                  
                  <!-- Inner value arc -->
                  <path
                    d="${$}"
                    fill="none"
                    stroke="${t}"
                    stroke-width="${a/2}"
                    stroke-linecap="butt"
                    opacity="0.8"
                  />
                `})():o.JW`
              <!-- Outer value arc -->
              <path
                d="${b}"
                fill="none"
                stroke="${x}"
                stroke-width="${a/2}"
                stroke-linecap="butt"
              />
              
              <!-- Inner value arc -->
              <path
                d="${$}"
                fill="none"
                stroke="${x}"
                stroke-width="${a/2}"
                stroke-linecap="butt"
                opacity="0.8"
              />
            `}

      <!-- Tick marks -->
      ${!1!==e.show_ticks?this.renderTickMarks(e,n,l,s,g,p,a):""}

      <!-- Pointer -->
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,m):""}

      <!-- Min/Max labels -->
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,g,p)}
    `}render3DGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=(t-d)/((e.max_value||100)-d)*100,u=Math.min(Math.max(c,0),100),g=-120,p=120,m=g+240*u/100,v=this.describeArc(n,l,s,g,p),h=this.describeArc(n,l,s,g,m),_=this.getColorAtValue(e,u,i),f=e.gauge_background_color||"var(--disabled-text-color)";return o.JW`
      ${this.renderGradientDefs(e,n,l,s,g,p,m,u,i)}
      
      <defs>
        <linearGradient id="3d-gradient-${e.id}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.4" />
          <stop offset="50%" style="stop-color:rgb(255,255,255);stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.3" />
        </linearGradient>
        <filter id="3d-shadow-${e.id}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feFlood flood-color="rgba(0,0,0,0.4)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="3d-box-shadow-${e.id}" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="6" result="offsetblur" />
          <feFlood flood-color="rgba(0,0,0,0.5)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="3d-segment-shadow-${e.id}" x="-75%" y="-75%" width="250%" height="250%">
          <!-- CSS-like shadow: 0 0 8px 4px #000 (no directional offset) -->
          <feMorphology in="SourceAlpha" operator="dilate" radius="4" result="spread" />
          <feGaussianBlur in="spread" stdDeviation="4" result="blur" />
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0" result="shadow" />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background arc with 3D effect -->
      <path
        d="${v}"
        fill="none"
        stroke="${f}"
        stroke-width="${a+2}"
        stroke-linecap="butt"
        filter="url(#3d-shadow-${e.id})"
      />
      
      <path
        d="${v}"
        fill="none"
        stroke="url(#3d-gradient-${e.id})"
        stroke-width="${a}"
        stroke-linecap="butt"
      />

      <!-- Value arc with 3D effect -->
      ${"segments"===e.gauge_color_mode?this.renderSegmentedArcsWith3DStyle(e,n,l,s,g,p,a,t):"gradient"===e.gauge_color_mode?(()=>{const t="value-based"===(e.gradient_display_mode||"full")?this.getColorAtValue(e,u,i):`url(#gradient-${e.id})`;return o.JW`
                  <path
                    d="${h}"
                    fill="none"
                    stroke="${t}"
                    stroke-width="${a+2}"
                    stroke-linecap="butt"
                    filter="url(#3d-shadow-${e.id})"
                  />
                  <path
                    d="${h}"
                    fill="none"
                    stroke="${t}"
                    stroke-width="${a}"
                    stroke-linecap="butt"
                  />
                `})():o.JW`
              <path
                d="${h}"
                fill="none"
                stroke="${_}"
                stroke-width="${a+2}"
                stroke-linecap="butt"
                filter="url(#3d-shadow-${e.id})"
              />
              <path
                d="${h}"
                fill="none"
                stroke="${_}"
                stroke-width="${a}"
                stroke-linecap="butt"
              />
            `}

      <!-- Tick marks -->
      ${!1!==e.show_ticks?this.renderTickMarks(e,n,l,s,g,p,a):""}

      <!-- Pointer -->
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,m):""}

      <!-- Min/Max labels -->
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,g,p)}
    `}renderNeonGauge(e,t,i){const r=e.gauge_size||200,a=e.gauge_thickness||15,n=r/2,l=r/2,s=r/2-a-10,d=e.min_value||0,c=e.max_value||100,u=(t-d)/(c-d)*100,g=Math.min(Math.max(u,0),100),p=-120,m=120,v=p+240*g/100,h=this.describeArc(n,l,s,p,m),_=this.describeArc(n,l,s,p,v),f=this.getColorAtValue(e,g,i),b=e.gauge_background_color||"var(--disabled-text-color)",$=(()=>{const t=e.gauge_color_mode||"gradient";if("gradient"===t&&e.gradient_stops&&e.gradient_stops.length>0){const t=e.gradient_display_mode||"full";if("value-based"===t||"cropped"===t)return this.getColorAtValue(e,g,i);{const t=[...e.gradient_stops].sort((e,t)=>t.position-e.position);if(t.length>0)return t[0].color}}else if("segments"===t&&e.segments)return this.getColorAtValue(e,g,i);return e.gauge_color||"var(--primary-color)"})();return o.JW`
      ${this.renderGradientDefs(e,n,l,s,p,m,v,g,i)}
      
      <defs>
        <filter id="neon-glow-${e.id}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="neon-background-${e.id}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="softBlur"/>
          <feMerge> 
            <feMergeNode in="softBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="neon-glow-filter-${e.id}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="featheredGlow"/>
          <feMerge> 
            <feMergeNode in="featheredGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="light-shine-filter-${e.id}" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="softGlow"/>
          <feGaussianBlur stdDeviation="8" result="wideGlow"/>
          <feMerge> 
            <feMergeNode in="wideGlow"/>
            <feMergeNode in="softGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background arc with subtle glow -->
      <path
        d="${h}"
        fill="none"
        stroke="${b}"
        stroke-width="${a}"
        stroke-linecap="butt"
        filter="url(#neon-background-${e.id})"
        opacity="0.4"
      />

      <!-- Value arc with neon glow effect -->
      ${"segments"===e.gauge_color_mode?o.JW`
              <!-- Subtle glow behind entire filled section -->
              <path
                d="${_}"
                fill="none"
                stroke="${$}"
                stroke-width="${1.5*a}"
                stroke-linecap="butt"
                opacity="0.3"
                filter="url(#neon-glow-${e.id})"
              />
              
              ${this.renderSegmentedArcs(e,n,l,s,p,m,a,t)}
              ${this.renderNeonGlowAtEnd(e,n,l,s,p,m,a,t,$)}
            `:"gradient"===e.gauge_color_mode?(()=>{const r="value-based"===(e.gradient_display_mode||"full")?this.getColorAtValue(e,g,i):`url(#gradient-${e.id})`;return o.JW`
              <!-- Subtle glow behind entire arc -->
              <path
                d="${_}"
                fill="none"
                stroke="${$}"
                stroke-width="${1.5*a}"
                stroke-linecap="butt"
                opacity="0.3"
                filter="url(#neon-glow-${e.id})"
              />
              
              <!-- Main gradient arc -->
              <path
                d="${_}"
                fill="none"
                stroke="${r}"
                stroke-width="${a}"
                stroke-linecap="butt"
                style="transition: stroke-dashoffset ${!1!==e.gauge_animation_enabled?e.gauge_animation_duration||"1000ms":"0ms"} ${e.gauge_animation_easing||"ease-out"};"
              />
              ${this.renderNeonGlowAtEnd(e,n,l,s,p,m,a,t,$)}
            `})():o.JW`
              <!-- Subtle glow behind entire arc -->
              <path
                d="${_}"
                fill="none"
                stroke="${f}"
                stroke-width="${1.5*a}"
                stroke-linecap="butt"
                opacity="0.3"
                filter="url(#neon-glow-${e.id})"
              />
              
              <!-- Main solid color arc -->
              <path
                d="${_}"
                fill="none"
                stroke="${f}"
                stroke-width="${a}"
                stroke-linecap="butt"
                style="transition: stroke-dashoffset ${!1!==e.gauge_animation_enabled?e.gauge_animation_duration||"1000ms":"0ms"} ${e.gauge_animation_easing||"ease-out"};"
              />
              ${this.renderNeonGlowAtEnd(e,n,l,s,p,m,a,t,$)}
            `}

      <!-- Tick marks -->
      ${!1!==e.show_ticks?this.renderTickMarks(e,n,l,s,p,m,a):""}

      <!-- Pointer -->
      ${!1!==e.pointer_enabled?this.renderPointer(e,n,l,s,v):""}

      <!-- Min/Max labels -->
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,n,l,s,p,m)}
    `}renderDigitalGauge(e,t,i){const r=e.gauge_size||200,a=r/2,n=r/2,l=r/2-30,s=e.min_value||0,d=(t-s)/((e.max_value||100)-s)*100,c=Math.min(Math.max(d,0),100),u=-90,g=u+180*c/100,p=12,m=[];for(let t=0;t<p;t++){const r=u+180*t/p,s=u+180*(t+1)/p,d=t/p*100,g=(t+1)/p*100,v=6,h=v+(t+1)/p*(18-v),_=l-h/2,f=(r+s)/2,b=this.polarToCartesian(a,n,_,f),$=this.polarToCartesian(a,n,_,r),x=this.polarToCartesian(a,n,_,s),y=.3*Math.sqrt(Math.pow(x.x-$.x,2)+Math.pow(x.y-$.y,2)),k=b.x,w=b.y,M=f;let S;S="segments"===e.gauge_color_mode||c>=d?this.getColorAtValue(e,g,i):e.gauge_background_color||"var(--disabled-text-color)",m.push(o.JW`
        <rect
          x="${k-y/2}"
          y="${w-h/2}"
          width="${y}"
          height="${h}"
          fill="${S}"
          transform="rotate(${M} ${k} ${w})"
          rx="2"
        />
      `)}return o.JW`
      ${this.renderGradientDefs(e,a,n,l,u,90,g,c,i)}
      
      <!-- Digital blocks -->
      ${m}

      <!-- Tick marks -->
      ${!1!==e.show_ticks?this.renderTickMarks(e,a,n,l,u,90):""}

      <!-- Pointer -->
      ${!1!==e.pointer_enabled?this.renderPointer(e,a,n,l,g):""}

      <!-- Min/Max labels -->
      ${!1===e.show_min_max||e.show_tick_labels?"":this.renderMinMaxLabels(e,a,n,l,u,90)}
    `}renderTickMarksGraphics(e,t,i,r,a,n,l){const s=e.tick_count||10,d=n-a,c=[];for(let n=0;n<=s;n++){const u=a+d*n/s,g=l||e.gauge_thickness||15,p=r-g/2+2,m=r+g/2-2,v=this.polarToCartesian(t,i,p,u),h=this.polarToCartesian(t,i,m,u);c.push(o.JW`
        <line
          x1="${v.x}"
          y1="${v.y}"
          x2="${h.x}"
          y2="${h.y}"
          stroke="${e.tick_color||"var(--divider-color)"}"
          stroke-width="2"
          stroke-linecap="round"
        />
      `)}return o.JW`${c}`}renderTickLabels(e,t,i,r,a,n,l,s,d){const c=e.tick_count||10,u=n-a,g=[],p=d||e.gauge_size||200;for(let n=0;n<=c;n++){const d=a+u*n/c,m=r+(l||e.gauge_thickness||15)/2-2+14;let v;if(s){const e=this.polarToCartesian(t,i,m,d);v={x:p-e.x,y:e.y}}else v=this.polarToCartesian(t,i,m,d);const h=e.min_value||0,_=e.max_value||100,f=Math.round(h+(_-h)*n/c),b=e.tick_label_font_size||10;g.push(o.JW`<text 
          x="${v.x}" 
          y="${v.y}" 
          fill="${e.min_max_color||"var(--secondary-text-color)"}" 
          font-size="${b}" 
          text-anchor="middle" 
          dominant-baseline="middle"
        >${f}</text>`)}return o.JW`${g}`}renderTickMarks(e,t,i,r,a,n,l){const s=e.tick_count||10,d=n-a,c=[];for(let n=0;n<=s;n++){const u=a+d*n/s,g=l||e.gauge_thickness||15,p=r-g/2+2,m=r+g/2-2,v=this.polarToCartesian(t,i,p,u),h=this.polarToCartesian(t,i,m,u);if(c.push(o.JW`
        <line
          x1="${v.x}"
          y1="${v.y}"
          x2="${h.x}"
          y2="${h.y}"
          stroke="${e.tick_color||"var(--divider-color)"}"
          stroke-width="2"
          stroke-linecap="round"
        />
      `),e.show_tick_labels){const r=m+14,a=this.polarToCartesian(t,i,r,u),l=e.min_value||0,d=e.max_value||100,g=Math.round(l+(d-l)*n/s),p=e.tick_label_font_size||10;c.push(o.JW`<text x="${a.x}" y="${a.y}" fill="${e.min_max_color||"var(--secondary-text-color)"}" font-size="${p}" text-anchor="middle" dominant-baseline="middle">${g}</text>`)}}return o.JW`${c}`}renderPointer(e,t,i,r,a){const n=e.pointer_style||"needle",l=(e.pointer_length||80)/100*r,s=e.pointer_width||4,d=e.pointer_color||"var(--primary-color)",c=this.polarToCartesian(t,i,l,a);if("needle"===n){const e=2*s,r=a-90,n=a+90,l=this.polarToCartesian(t,i,e/2,r),u=this.polarToCartesian(t,i,e/2,n);return o.JW`
        <polygon
          points="${l.x},${l.y} ${u.x},${u.y} ${c.x},${c.y}"
          fill="${d}"
        />
        <circle cx="${t}" cy="${i}" r="${e}" fill="${d}" />
      `}if("triangle"===n){const e=3*s,r=a-90,n=a+90,l=this.polarToCartesian(t,i,e,r),u=this.polarToCartesian(t,i,e,n);return o.JW`
        <polygon
          points="${l.x},${l.y} ${u.x},${u.y} ${c.x},${c.y}"
          fill="${d}"
        />
      `}if("arrow"===n){const e=.2*l,r=this.polarToCartesian(c.x,c.y,e,a-150),n=this.polarToCartesian(c.x,c.y,e,a+150);return o.JW`
        <line
          x1="${t}"
          y1="${i}"
          x2="${c.x}"
          y2="${c.y}"
          stroke="${d}"
          stroke-width="${s}"
          stroke-linecap="round"
        />
        <line
          x1="${c.x}"
          y1="${c.y}"
          x2="${r.x}"
          y2="${r.y}"
          stroke="${d}"
          stroke-width="${s}"
          stroke-linecap="round"
        />
        <line
          x1="${c.x}"
          y1="${c.y}"
          x2="${n.x}"
          y2="${n.y}"
          stroke="${d}"
          stroke-width="${s}"
          stroke-linecap="round"
        />
      `}if("circle"===n)return o.JW`
        <line
          x1="${t}"
          y1="${i}"
          x2="${c.x}"
          y2="${c.y}"
          stroke="${d}"
          stroke-width="${s/2}"
          stroke-linecap="round"
        />
        <circle
          cx="${c.x}"
          cy="${c.y}"
          r="${2*s}"
          fill="${d}"
        />
      `;if("highlight"===n){const n=e.gauge_thickness||15,l=6,s=a-l/2,c=a+l/2,u=this.describeArc(t,i,r,s,c);return this.polarToCartesian(t,i,r,a),o.JW`
        <path d="${u}" fill="none" stroke="${d}" stroke-width="${n}" stroke-linecap="round" />
      `}if("cap"===n){const n=e.gauge_thickness||15,l=this.polarToCartesian(t,i,r,a);return o.JW`
        <circle cx="${l.x}" cy="${l.y}" r="${n/2}" fill="${d}" />
      `}if("icon"===n){const n=e.pointer_icon||"mdi:gauge",l=e.pointer_icon_color||"#FFFFFF",s=e.pointer_icon_size||24,d=this.polarToCartesian(t,i,r,a),c=s+8;return o.JW`
        <foreignObject
          x="${d.x-c/2}"
          y="${d.y-c/2}"
          width="${c}"
          height="${c}"
          style="overflow: visible;"
        >
          <div style="
            width: ${c}px;
            height: ${c}px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
            box-sizing: border-box;
            position: relative;
          ">
            <ha-icon
              icon="${n}"
              style="
                --mdc-icon-size: ${s}px;
                width: ${s}px;
                height: ${s}px;
                color: ${l};
                display: block;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                line-height: 1;
              "
            ></ha-icon>
          </div>
        </foreignObject>
      `}return o.JW`
      <line
        x1="${t}"
        y1="${i}"
        x2="${c.x}"
        y2="${c.y}"
        stroke="${d}"
        stroke-width="${s}"
        stroke-linecap="round"
      />
    `}renderMinMaxLabels(e,t,i,r,a,n,l,s){const d=r+20,c=s||e.gauge_size||200,u=this.polarToCartesian(t,i,d,a),g=this.polarToCartesian(t,i,d,n),p=e.min_max_font_size||12,m=e.min_max_color||"var(--secondary-text-color)";let v,h;return l?(v={x:c-u.x,y:u.y},h={x:c-g.x,y:g.y}):(v=u,h=g),o.JW`
      <text
        x="${v.x}"
        y="${v.y}"
        fill="${m}"
        font-size="${p}"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${e.min_value||0}
      </text>
      <text
        x="${h.x}"
        y="${h.y}"
        fill="${m}"
        font-size="${p}"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${e.max_value||100}
      </text>
    `}getColorAtValue(e,t,i,o){var r;if(e.unified_template_mode&&e.unified_template&&i){this._templateService?this._templateService.updateHass(i):this._templateService=new d.I(i),i.__uvc_template_strings||(i.__uvc_template_strings={});const t=(0,u.KD)(e.unified_template,i,o),a=this._hashString(t),n=`unified_gauge_${e.id}_${a}`,l=null===(r=i.__uvc_template_strings)||void 0===r?void 0:r[n];if(l&&""!==String(l).trim()){const e=(0,c.cv)(l);if(!(0,c.HD)(e)&&e.gauge_color)return e.gauge_color}}const a=e.gauge_color_mode||"gradient";if("solid"===a)return e.gauge_color||"var(--primary-color)";if("segments"===a&&e.segments&&e.segments.length>0){const i=e.min_value||0,o=i+((e.max_value||100)-i)*t/100;for(const t of e.segments)if(o>=t.from&&o<=t.to)return t.color}if("gradient"===a&&e.gradient_stops&&e.gradient_stops.length>0){const i=[...e.gradient_stops].sort((e,t)=>e.position-t.position);if(t<=i[0].position)return i[0].color;if(t>=i[i.length-1].position)return i[i.length-1].color;for(let e=0;e<i.length-1;e++){const o=i[e],r=i[e+1];if(t>=o.position&&t<=r.position){const e=r.position-o.position,i=(t-o.position)/e;return this.interpolateColor(o.color,r.color,i)}}}return e.gauge_color||"var(--primary-color)"}interpolateColor(e,t,i){const o=this.hexToRgb(e),r=this.hexToRgb(t);if(!o||!r)return e;const a=Math.round(o.r+(r.r-o.r)*i),n=Math.round(o.g+(r.g-o.g)*i),l=Math.round(o.b+(r.b-o.b)*i);return this.rgbToHex(a,n,l)}hexToRgb(e){if(e.startsWith("var(")||e.startsWith("rgb"))return null;const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}rgbToHex(e,t,i){return"#"+[e,t,i].map(e=>e.toString(16).padStart(2,"0")).join("")}renderSegmentedArcs(e,t,i,r,a,n,l,s,d=!1){if(!e.segments||0===e.segments.length)return o.JW``;const c=e.min_value||0,u=e.max_value||100,g=n-a,p=[],m=[...e.segments].sort((e,t)=>e.from-t.from);for(const e of m){const n=a+g*((e.from-c)/(u-c)*100)/100,s=a+g*((e.to-c)/(u-c)*100)/100;if(s>n){const a=this.describeArc(t,i,r,n,s);p.push(o.JW`
          <path
            d="${a}"
            fill="none"
            stroke="${e.color}"
            stroke-width="${l}"
            stroke-linecap="${d?"round":"butt"}"
          />
        `)}}return o.JW`${p}`}renderSegmentedArcsWithInsetStyle(e,t,i,r,a,n,l,s){if(!e.segments||0===e.segments.length)return o.JW``;const d=e.min_value||0,c=e.max_value||100,u=n-a,g=[],p=[...e.segments].sort((e,t)=>e.from-t.from);for(const n of p){const s=a+u*((n.from-d)/(c-d)*100)/100,p=a+u*((n.to-d)/(c-d)*100)/100;if(p>s){const a=this.describeArc(t,i,r,s,p);g.push(o.JW`
          <!-- Shadow layer -->
          <path
            d="${a}"
            fill="none"
            stroke="${n.color}"
            stroke-width="${l+2}"
            stroke-linecap="butt"
            filter="url(#inset-shadow-${e.id})"
          />
          <!-- Main segment -->
          <path
            d="${a}"
            fill="none"
            stroke="${n.color}"
            stroke-width="${l}"
            stroke-linecap="butt"
          />
        `)}}return o.JW`${g}`}renderSegmentedArcsWith3DStyle(e,t,i,r,a,n,l,s){if(!e.segments||0===e.segments.length)return o.JW``;const d=e.min_value||0,c=e.max_value||100,u=n-a,g=[],p=[...e.segments].sort((e,t)=>e.from-t.from);for(let n=0;n<p.length;n++){const s=p[n],m=a+u*((s.from-d)/(c-d)*100)/100,v=a+u*((s.to-d)/(c-d)*100)/100;if(v>m){const n=this.describeArc(t,i,r,m,v),d=Math.max(m-.5,a),c=this.describeArc(t,i,r,d,m);g.push(o.JW`
          <path
            d="${c}"
            fill="none"
            stroke="rgba(0,0,0,0.15)"
            stroke-width="${l}"
            stroke-linecap="butt"
            filter="url(#3d-separator-shadow-${e.id})"
          />
          <!-- Main segment with its own shadow for depth -->
          <path
            d="${n}"
            fill="none"
            stroke="${s.color}"
            stroke-width="${l}"
            stroke-linecap="butt"
            filter="url(#3d-segment-shadow-${e.id})"
          />
        `)}}return o.JW`${g}`}renderNeonGlowAtEnd(e,t,i,r,a,n,l,s,d){const c=e.min_value||0,u=(s-c)/((e.max_value||100)-c)*100,g=Math.min(Math.max(u,0),100);if(g<=0)return o.JW``;const p=a+(n-a)*g/100,m=this.polarToCartesian(t,i,r,p),v=`neon-glow-radial-${e.id}-${Date.now()}`;return o.JW`
      <defs>
        <radialGradient id="${v}">
          <stop offset="0%" stop-color="${d}" stop-opacity="1" />
          <stop offset="30%" stop-color="${d}" stop-opacity="0.8" />
          <stop offset="50%" stop-color="${d}" stop-opacity="0.4" />
          <stop offset="70%" stop-color="${d}" stop-opacity="0.15" />
          <stop offset="100%" stop-color="${d}" stop-opacity="0" />
        </radialGradient>
      </defs>
      
      <!-- Outer soft glow halo -->
      <circle
        cx="${m.x}"
        cy="${m.y}"
        r="${2*l}"
        fill="url(#${v})"
        opacity="0.6"
      />
      
      <!-- Middle glow layer -->
      <circle
        cx="${m.x}"
        cy="${m.y}"
        r="${1.2*l}"
        fill="url(#${v})"
        opacity="0.8"
      />
      
      <!-- Bright inner core -->
      <circle
        cx="${m.x}"
        cy="${m.y}"
        r="${.5*l}"
        fill="${d}"
        opacity="1"
        style="filter: brightness(1.5);"
      />
    `}renderGradientDefs(e,t,i,r,a,n,l,s,d){if("gradient"!==e.gauge_color_mode||!e.gradient_stops||0===e.gradient_stops.length)return o.JW``;const c=e.gradient_display_mode||"full",u=[...e.gradient_stops].sort((e,t)=>e.position-t.position),g=`gradient-${e.id}`;if(void 0!==t&&void 0!==i&&void 0!==r&&void 0!==a&&void 0!==n){const p=a;let m=n,v=u;if("cropped"===c&&void 0!==l&&void 0!==s){m=l;const t=u.filter(e=>e.position<=s),i=this.getColorAtValue(e,s,d);t.some(e=>e.position===s)||t.push({id:`cropped_${s}`,position:s,color:i}),v=t.map(e=>Object.assign(Object.assign({},e),{position:s>0?e.position/s*100:0})).sort((e,t)=>e.position-t.position)}else if("value-based"===c)return o.JW``;const h=this.polarToCartesian(t,i,r,p),_=this.polarToCartesian(t,i,r,m);return o.JW`
        <defs>
          <linearGradient
            id="${g}"
            x1="${h.x}"
            y1="${h.y}"
            x2="${_.x}"
            y2="${_.y}"
            gradientUnits="userSpaceOnUse"
          >
            ${v.map(e=>o.JW`
              <stop offset="${e.position}%" stop-color="${e.color}" />
            `)}
          </linearGradient>
        </defs>
      `}return o.JW`
      <defs>
        <linearGradient id="${g}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${u.map(e=>o.JW`
            <stop offset="${e.position}%" stop-color="${e.color}" />
          `)}
        </linearGradient>
      </defs>
    `}renderGradientValueArc(e,t,i,r,a="butt",n,l,s,d,c,u,g){if("gradient"!==e.gauge_color_mode)return o.JW``;const p=e.gradient_display_mode||"full";if("full"===p)return o.JW`
        <path
          d="${t}"
          fill="none"
          stroke="url(#gradient-${e.id})"
          stroke-width="${i}"
          stroke-linecap="${a}"
          ${n?`style="${n}"`:""}
        />
      `;const m="value-based"===p?this.getColorAtValue(e,r,g):`url(#gradient-${e.id})`;return o.JW`
      <path
        d="${t}"
        fill="none"
        stroke="${m}"
        stroke-width="${i}"
        stroke-linecap="${a}"
        ${n?`style="${n}"`:""}
      />
    `}renderSegmentedCircle(e,t,i,r,a,n,l=!1){if(!e.segments||0===e.segments.length)return o.JW``;const s=e.min_value||0,d=e.max_value||100,c=2*Math.PI*r,u=[],g=[...e.segments].sort((e,t)=>e.from-t.from);for(const e of g){const g=(e.from-s)/(d-s)*100,p=(e.to-s)/(d-s)*100;if(l){if(p>g){const n=(p-g)/100*c,l=c-g/100*c-n;u.push(o.JW`
            <circle
              cx="${t}"
              cy="${i}"
              r="${r}"
              fill="none"
              stroke="${e.color}"
              stroke-width="${a}"
              stroke-linecap="round"
              stroke-dasharray="${n} ${c-n}"
              stroke-dashoffset="${l}"
              transform="rotate(-90 ${t} ${i})"
            />
          `)}}else{const l=(n-s)/(d-s)*100;if(g<=l){const n=Math.min(p,l);if(n>g){const l=(n-g)/100*c,s=c-g/100*c-l;u.push(o.JW`
              <circle
                cx="${t}"
                cy="${i}"
                r="${r}"
                fill="none"
                stroke="${e.color}"
                stroke-width="${a}"
                stroke-linecap="butt"
                stroke-dasharray="${l} ${c-l}"
                stroke-dashoffset="${s}"
                transform="rotate(-90 ${t} ${i})"
              />
            `)}}}}return o.JW`${u}`}describeArc(e,t,i,o,r){const a=this.polarToCartesian(e,t,i,r),n=this.polarToCartesian(e,t,i,o),l=r-o<=180?"0":"1";return["M",a.x,a.y,"A",i,i,0,l,0,n.x,n.y].join(" ")}polarToCartesian(e,t,i,o){const r=(o-90)*Math.PI/180;return{x:e+i*Math.cos(r),y:t+i*Math.sin(r)}}getSvgViewBox(e){const t=e.gauge_size||200,i=e.gauge_style||"modern",o=e.gauge_thickness||15,r=t/2,a=t/2-o-10,n=!1!==e.show_min_max||e.show_tick_labels;if(["radial","minimal"].includes(i))return`0 0 ${t} ${t}`;if("digital"===i)return`0 0 ${t} ${t}`;let l,s;"arc"===i?(l=-180,s=0):"speedometer"===i?(l=-225,s=45):(l=-120,s=120);const d=a+o/2+(n?25:5),c=(l-90)*Math.PI/180,u=(s-90)*Math.PI/180,g=r-d,p=r+d*Math.sin(c),m=r+d*Math.sin(u),v=Math.max(p,m,r),h=Math.max(0,g-5);return`0 ${h} ${t} ${v-h+5}`}getSvgHeight(e){const t=e.gauge_size||200,i=e.gauge_style||"modern",o=e.gauge_thickness||15,r=t/2,a=t/2-o-10,n=!1!==e.show_min_max||e.show_tick_labels;if(["radial","minimal"].includes(i))return t;if("digital"===i)return t;let l,s;"arc"===i?(l=-180,s=0):"speedometer"===i?(l=-225,s=45):(l=-120,s=120);const d=a+o/2+(n?25:5),c=(l-90)*Math.PI/180,u=(s-90)*Math.PI/180,g=r-d,p=r+d*Math.sin(c),m=r+d*Math.sin(u);return Math.max(p,m,r)-Math.max(0,g-5)+5}getGaugeViewBox(e){const t=e.gauge_size||200;if(!1!==e.show_min_max||e.show_tick_labels){const e=35;return`-${e} -${e} ${t+2*e} ${t+2*e}`}return`0 0 ${t} ${t}`}getContainerStyles(e){return["display: flex","flex-direction: column","align-items: center","justify-content: center","width: 100%","overflow: visible","padding: 20px 0"].join("; ")}getNameStyles(e){const t=[`font-size: ${e.name_font_size||16}px`,`color: ${e.name_color||"var(--secondary-text-color)"}`,"font-weight: "+(e.name_bold?"bold":"normal"),"font-style: "+(e.name_italic?"italic":"normal"),"text-transform: "+(e.name_uppercase?"uppercase":"none"),"text-align: center"],i=[];e.name_underline&&i.push("underline"),e.name_strikethrough&&i.push("line-through"),i.length>0&&t.push(`text-decoration: ${i.join(" ")}`);const o=e.name_x_offset||0,r=e.name_y_offset||0;return"top"===e.name_position?(t.push("margin-top: 0"),t.push("margin-bottom: 8px"),t.push(`transform: translateX(${o}px) translateY(${r}px)`)):"bottom"===e.name_position?(t.push("margin-top: 8px"),t.push("margin-bottom: 0"),t.push(`transform: translateX(${o}px) translateY(${r}px)`)):(t.push("margin: 8px 0"),t.push(`transform: translateX(${o}px) translateY(${r}px)`)),t.join("; ")}getValueStyles(e){const t=[`font-size: ${e.value_font_size||24}px`,`color: ${e.value_color||"var(--primary-text-color)"}`,"font-weight: "+(e.value_bold?"bold":"normal"),"font-style: "+(e.value_italic?"italic":"normal"),"text-transform: "+(e.value_uppercase?"uppercase":"none"),"text-align: center"],i=[];e.value_underline&&i.push("underline"),e.value_strikethrough&&i.push("line-through"),i.length>0&&t.push(`text-decoration: ${i.join(" ")}`);const o=e.gauge_size||200,r=e.value_x_offset||0,a=e.value_y_offset||0;if("center"===e.value_position)t.push("position: absolute"),t.push("top: calc(50% - 15px)"),t.push("left: 50%"),t.push(`transform: translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`);else if("top"===e.value_position){let i=16;"minimal"===e.gauge_style&&(i=o/2-20),t.push("position: absolute"),t.push(`top: ${i-32+a}px`),t.push(`left: ${50+r}%`),t.push("transform: translateX(-50%)"),t.push("z-index: 1")}else"bottom"===e.value_position&&(t.push("display: block"),t.push("width: 100%"),t.push("margin-top: -24px"),0===r&&0===a||t.push(`transform: translate(${r}px, ${a}px)`));return t.join("; ")}validate(e){const t=e,i=[...super.validate(e).errors];return void 0!==t.min_value&&void 0!==t.max_value&&t.min_value>=t.max_value&&i.push("Minimum value must be less than maximum value"),t.entity&&""!==t.entity.trim()&&"attribute"===t.value_type&&(t.value_attribute_entity&&t.value_attribute_name||i.push("Attribute entity and attribute name are required when using attribute value type")),{valid:0===i.length,errors:i}}getStyles(){return"\n      .gradient-stops-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        margin-top: 12px;\n      }\n\n      .gradient-stop {\n        display: grid;\n        grid-template-columns: 1fr auto auto;\n        gap: 8px;\n        align-items: center;\n        padding: 12px;\n        background: var(--card-background-color);\n        border-radius: 8px;\n        border: 1px solid var(--divider-color);\n      }\n\n      .add-stop-btn,\n      .remove-stop-btn {\n        padding: 8px 16px;\n        border-radius: 4px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n        transition: all 0.2s;\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .add-stop-btn:hover {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border-color: var(--primary-color);\n      }\n\n      .remove-stop-btn {\n        padding: 6px 12px;\n        background: rgba(var(--rgb-accent-color), 0.1);\n        border-color: var(--accent-color);\n      }\n\n      .remove-stop-btn:hover {\n        background: var(--accent-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      .segments-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        margin-top: 12px;\n      }\n\n      .segment-item {\n        padding: 12px;\n        background: var(--card-background-color);\n        border-radius: 8px;\n        border: 1px solid var(--divider-color);\n      }\n\n      .segment-row {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n        margin-bottom: 8px;\n      }\n\n      .template-section {\n        background: var(--card-background-color);\n        border-radius: 8px;\n        padding: 16px;\n        border: 1px solid var(--divider-color);\n        margin-bottom: 32px;\n      }\n\n      .template-content {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n\n      .template-help {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 12px;\n        padding: 12px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-radius: 4px;\n      }\n\n      .template-help p { margin: 8px 0; }\n      .template-help ul { margin: 8px 0 8px 20px; }\n      .template-help code {\n        background: var(--code-editor-background-color, #1e1e1e);\n        padding: 2px 6px;\n        border-radius: 3px;\n        font-family: monospace;\n        font-size: 11px;\n      }\n\n      .uc-gauge-container {\n        position: relative;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n      }\n      \n      .uc-gauge-wrapper {\n        position: relative;\n        display: inline-block;\n      }\n      \n      .uc-gauge-svg {\n        display: block;\n      }\n      \n      .uc-gauge-value-center {\n        pointer-events: none;\n      }\n      \n      .uc-gauge-value-bottom,\n      .uc-gauge-name {\n        width: 100%;\n        text-align: center;\n      }\n      \n      .uc-gauge-clickable {\n        cursor: pointer;\n      }\n    "}addPixelUnit(e){if(!e&&0!==e)return e;const t=String(e);return/^\d+$/.test(t)?`${t}px`:/^[\d\s]+$/.test(t)?t.split(" ").map(e=>e.trim()?`${e}px`:e).join(" "):t}_hashString(e){let t=0;for(let i=0;i<e.length;i+=1)t=(t<<5)-t+e.charCodeAt(i),t|=0;return Math.abs(t)}}}}]);
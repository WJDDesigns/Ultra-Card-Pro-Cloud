"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[7880],{9362(t,e,i){i.d(e,{UltraTextInputModule:()=>s});var o=i(5183),r=i(5096),n=i(3721),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this._localValues=new Map,this._localValueTimers=new Map,this.metadata={type:"text_input",title:"Text Input",description:"Text input field linked to input_text helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:form-textbox",category:"input",tags:["text","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("text_input"),type:"text_input",placeholder:"Enter text...",input_appearance:"outlined",show_clear_button:!0,show_character_count:!1,show_label:!0,label:"",font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getAppearanceOptions(t){return[{value:"outlined",label:(0,r.kg)("editor.text_input.appearance_options.outlined",t,"Outlined")},{value:"filled",label:(0,r.kg)("editor.text_input.appearance_options.filled",t,"Filled")},{value:"underlined",label:(0,r.kg)("editor.text_input.appearance_options.underlined",t,"Underlined")}]}renderGeneralTab(t,e,i,n){var l,a,s,d;const c=t,u=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return c.entity&&(null===(a=null==e?void 0:e.states)||void 0===a||a[c.entity]),o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.text_input.entity.title",u,"Entity Configuration"),(0,r.kg)("editor.text_input.entity.desc",u,"Link to a Home Assistant Input Text helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",c.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_text"],(0,r.kg)("editor.text_input.entity_field",u,"Entity"))}
        </div>

        <!-- Appearance Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.appearance.title",u,"Appearance")}
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,r.kg)("editor.text_input.appearance.desc",u,"Configure how the text input field looks.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,r.kg)("editor.text_input.input_appearance",u,"Input Style"),(0,r.kg)("editor.text_input.input_appearance_desc",u,"Visual style of the input field"),e,{input_appearance:c.input_appearance||"outlined"},[this.selectField("input_appearance",this.getAppearanceOptions(u))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.text_input.placeholder",u,"Placeholder"),(0,r.kg)("editor.text_input.placeholder_desc",u,"Placeholder text shown when the field is empty"),e,{placeholder:c.placeholder||""},[{name:"placeholder",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.label",u,"Label"),(0,r.kg)("editor.text_input.label_desc",u,"Label displayed above the input field"),e,{label:c.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_label",u,"Show Label"),(0,r.kg)("editor.text_input.show_label_desc",u,"Display the label above the input"),e,{show_label:!1!==c.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.multiline",u,"Multiline"),(0,r.kg)("editor.text_input.multiline_desc",u,"Allow multiple lines of text (textarea)"),e,{multiline:!0===c.multiline},[{name:"multiline",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${c.multiline?this.renderSliderField((0,r.kg)("editor.text_input.rows",u,"Rows"),(0,r.kg)("editor.text_input.rows_desc",u,"Number of visible text rows"),null!==(s=c.rows)&&void 0!==s?s:4,4,2,12,1,t=>{n({rows:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
        </div>

        <!-- Icons & Controls -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.controls.title",u,"Icons & Controls")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.text_input.prefix_icon",u,"Prefix Icon"),(0,r.kg)("editor.text_input.prefix_icon_desc",u,"Icon displayed at the start of the input field"),e,{prefix_icon:c.prefix_icon||""},[{name:"prefix_icon",selector:{icon:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.suffix_icon",u,"Suffix Icon"),(0,r.kg)("editor.text_input.suffix_icon_desc",u,"Icon displayed at the end of the input field"),e,{suffix_icon:c.suffix_icon||""},[{name:"suffix_icon",selector:{icon:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_clear_button",u,"Show Clear Button"),(0,r.kg)("editor.text_input.show_clear_button_desc",u,"Show a button to clear the input field"),e,{show_clear_button:!1!==c.show_clear_button},[{name:"show_clear_button",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_character_count",u,"Show Character Count"),(0,r.kg)("editor.text_input.show_character_count_desc",u,"Display a character counter below the input"),e,{show_character_count:!0===c.show_character_count},[{name:"show_character_count",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Styling -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.styling.title",u,"Styling")}
          </div>

          ${this.renderSliderField((0,r.kg)("editor.text_input.font_size",u,"Font Size"),(0,r.kg)("editor.text_input.font_size_desc",u,"Font size of the input text in pixels"),null!==(d=c.font_size)&&void 0!==d?d:16,16,10,32,1,t=>n({font_size:t}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.text_input.text_color",u,"Text Color")}
              .value=${c.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>{n({text_color:t.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.text_input.focus_color",u,"Focus/Accent Color")}
              .value=${c.focus_color||"var(--primary-color)"}
              @color-changed=${t=>{n({focus_color:t.detail.value})}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}renderPreview(t,e,i,n){var l,a,s,d,c,u;const p=t,_=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";if(!p.entity||!p.entity.trim())return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",_,"Configure Entity"),(0,r.kg)("editor.text_input.error_configure_entity_desc",_,"Select an Input Text entity in the General tab"),"mdi:form-textbox");const h=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[p.entity];if(!h)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",_,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const x=this._localValues.get(p.id),g=void 0!==x?x:h.state||"",v=null===(s=h.attributes)||void 0===s?void 0:s.max,b=(null===(d=h.attributes)||void 0===d?void 0:d.mode)||"text",f=p.design||{},m=p.input_appearance||"outlined",y=null!==(c=p.font_size)&&void 0!==c?c:16,w=p.text_color||"var(--primary-text-color)",$=p.focus_color||"var(--primary-color)",k=p.placeholder||"",S=!1!==p.show_clear_button,T=!0===p.show_character_count,F=!1!==p.show_label&&!!p.label,C=p.label||"",z=((f.padding_top||f.padding_bottom||f.padding_left||f.padding_right)&&(f.padding_top,f.padding_right,f.padding_bottom,f.padding_left),(f.margin_top||f.margin_bottom||f.margin_left||f.margin_right)&&(f.margin_top,f.margin_right,f.margin_bottom,f.margin_left),f.background_color,this.getBackgroundImageCss(Object.assign(Object.assign({},p),f),e),f.border_radius,f.border_style&&"none"!==f.border_style&&(f.border_width,f.border_style,f.border_color),(f.box_shadow_h||f.box_shadow_v||f.box_shadow_blur||f.box_shadow_spread)&&(f.box_shadow_h,f.box_shadow_v,f.box_shadow_blur,f.box_shadow_spread,f.box_shadow_color),f.hover_effect,this.getHoverEffectClass(t)),P=this.buildStyleString(this.buildDesignStyles(t,e)),V=!0===p.multiline,E=null!==(u=p.rows)&&void 0!==u?u:4,I="password"===b?"password":"text",U=p.id,A=()=>{const t=this._localValueTimers.get(U);t&&clearTimeout(t);const e=this._debounceTimers.get(U);e&&clearTimeout(e)},q=t=>{const i=t.target.value;this._localValues.set(U,i),A(),this._debounceTimers.set(U,setTimeout(()=>{this.setEntityValue(p.entity,i,e),this._localValueTimers.set(U,setTimeout(()=>{this._localValues.delete(U)},1e3))},300))};let j="",O="",D="";switch(m){case"filled":O="var(--input-fill-color, rgba(var(--rgb-primary-text-color, 0,0,0), 0.05))",j="none",D="border-bottom: 2px solid var(--divider-color);";break;case"underlined":O="transparent",j="none",D="border-bottom: 2px solid var(--divider-color); border-radius: 0 !important;";break;default:O="transparent",j="1px solid var(--divider-color)",D=""}const L=p.id;return this.wrapWithAnimation(o.qy`
      <style>
        .text-input-wrapper-${L} {
          position: relative;
          display: flex;
          align-items: ${V?"flex-start":"center"};
          background: ${O};
          border: ${j};
          border-radius: 8px;
          ${D}
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        .text-input-wrapper-${L}:focus-within {
          border-color: ${$};
          ${"outlined"===m?`box-shadow: 0 0 0 1px ${$};`:""}
          ${"underlined"===m||"filled"===m?`border-bottom-color: ${$};`:""}
        }
        .text-input-field-${L} {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          padding: 12px;
          font-size: ${y}px;
          color: ${w};
          font-family: inherit;
          min-width: 0;
        }
        .text-input-field-${L}::placeholder {
          color: var(--secondary-text-color);
          opacity: 0.6;
        }
        textarea.text-input-field-${L} {
          resize: vertical;
          line-height: 1.5;
        }
        .text-input-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          color: var(--secondary-text-color);
          flex-shrink: 0;
          --mdc-icon-size: 20px;
        }
        .text-input-clear-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          cursor: pointer;
          color: var(--secondary-text-color);
          opacity: 0.6;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
          background: none;
          border: none;
          --mdc-icon-size: 18px;
        }
        .text-input-clear-btn:hover {
          opacity: 1;
        }
        .text-input-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--secondary-text-color);
          margin-bottom: 6px;
          padding-left: 2px;
        }
        .text-input-char-count {
          font-size: 11px;
          color: var(--secondary-text-color);
          margin-top: 4px;
          text-align: right;
          padding-right: 4px;
          opacity: 0.7;
        }
      </style>
      <div
        class="text-input-module-container ${z}"
        style="${P}"
      >
        ${F?o.qy`<div class="text-input-label">${C}</div>`:""}
        <div class="text-input-wrapper-${L}">
          ${p.prefix_icon?o.qy`<div class="text-input-icon" style="${V?"padding-top: 12px;":""}">
                <ha-icon icon="${p.prefix_icon}"></ha-icon>
              </div>`:""}
          ${V?o.qy`<textarea
                class="text-input-field-${L}"
                rows=${E}
                .value=${g}
                placeholder="${k}"
                @input=${q}
              ></textarea>`:o.qy`<input
                class="text-input-field-${L}"
                type="${I}"
                .value=${g}
                placeholder="${k}"
                @input=${q}
              />`}
          ${S&&g?o.qy`<button class="text-input-clear-btn" style="${V?"padding-top: 10px; align-self: flex-start;":""}" @click=${t=>{t.stopPropagation(),A(),this._debounceTimers.delete(U),this._localValues.set(U,""),this.setEntityValue(p.entity,"",e),this._localValueTimers.set(U,setTimeout(()=>{this._localValues.delete(U)},1e3))}}>
                <ha-icon icon="mdi:close-circle"></ha-icon>
              </button>`:""}
          ${p.suffix_icon?o.qy`<div class="text-input-icon" style="${V?"padding-top: 12px;":""}">
                <ha-icon icon="${p.suffix_icon}"></ha-icon>
              </div>`:""}
        </div>
        ${T?o.qy`<div class="text-input-char-count">
              ${g.length}${v?` / ${v}`:""}
            </div>`:""}
      </div>
    `,t,e)}async setEntityValue(t,e,i){if(t&&i)try{await i.callService("input_text","set_value",{entity_id:t,value:e})}catch(e){console.error(`[TextInput] Failed to set value for ${t}:`,e)}}styleObjectToCss(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")}}}}]);
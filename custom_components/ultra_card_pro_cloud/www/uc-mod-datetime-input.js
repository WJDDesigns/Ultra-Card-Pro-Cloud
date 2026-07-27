"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[9142],{1244(e,t,i){i.d(t,{UltraDatetimeInputModule:()=>l});var a=i(5183),o=i(5096),n=i(3721),r=i(5147),d=i(8938);i(7921);class l extends n.m{constructor(){super(...arguments),this.metadata={type:"datetime_input",title:"Date/Time Input",description:"Date and time picker linked to input_datetime helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:calendar-clock",category:"input",tags:["date","time","datetime","input","form","helper","interactive","calendar"]}}createDefault(e,t){return{id:e||this.generateId("datetime_input"),type:"datetime_input",display_mode_datetime:"auto",show_label:!0,label:"",font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getDisplayModeOptions(e){return[{value:"auto",label:(0,o.kg)("editor.datetime_input.display_mode_options.auto",e,"Auto (from entity)")},{value:"date",label:(0,o.kg)("editor.datetime_input.display_mode_options.date",e,"Date Only")},{value:"time",label:(0,o.kg)("editor.datetime_input.display_mode_options.time",e,"Time Only")},{value:"datetime",label:(0,o.kg)("editor.datetime_input.display_mode_options.datetime",e,"Date & Time")}]}resolveDisplayMode(e,t){var i,a;const o=e.display_mode_datetime||"auto";if("auto"===o&&t)return{showDate:!1!==(null===(i=t.attributes)||void 0===i?void 0:i.has_date),showTime:!1!==(null===(a=t.attributes)||void 0===a?void 0:a.has_time)};switch(o){case"date":return{showDate:!0,showTime:!1};case"time":return{showDate:!1,showTime:!0};default:return{showDate:!0,showTime:!0}}}renderGeneralTab(e,t,i,n){var r,d,l;const s=e,c=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return s.entity&&(null===(d=null==t?void 0:t.states)||void 0===d||d[s.entity]),a.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,o.kg)("editor.datetime_input.entity.title",c,"Entity Configuration"),(0,o.kg)("editor.datetime_input.entity.desc",c,"Link to a Home Assistant Input Datetime helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_datetime"],(0,o.kg)("editor.datetime_input.entity_field",c,"Entity"))}
        </div>

        <!-- Display Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,o.kg)("editor.datetime_input.display.title",c,"Display Configuration")}
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,o.kg)("editor.datetime_input.display.desc",c,"Configure which pickers to show and how they appear.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,o.kg)("editor.datetime_input.display_mode_datetime",c,"Display Mode"),(0,o.kg)("editor.datetime_input.display_mode_datetime_desc",c,"Which pickers to show. Auto detects from the entity."),t,{display_mode_datetime:s.display_mode_datetime||"auto"},[this.selectField("display_mode_datetime",this.getDisplayModeOptions(c))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,o.kg)("editor.datetime_input.label",c,"Label"),(0,o.kg)("editor.datetime_input.label_desc",c,"Label displayed above the picker fields"),t,{label:s.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}

          ${this.renderFieldSection((0,o.kg)("editor.datetime_input.show_label",c,"Show Label"),(0,o.kg)("editor.datetime_input.show_label_desc",c,"Display the label above the pickers"),t,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Styling -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,o.kg)("editor.datetime_input.styling.title",c,"Styling")}
          </div>

          ${this.renderSliderField((0,o.kg)("editor.datetime_input.font_size",c,"Font Size"),(0,o.kg)("editor.datetime_input.font_size_desc",c,"Font size of the date/time inputs in pixels"),null!==(l=s.font_size)&&void 0!==l?l:16,16,10,32,1,e=>n({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,o.kg)("editor.datetime_input.text_color",c,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>{n({text_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,o.kg)("editor.datetime_input.focus_color",c,"Focus/Accent Color")}
              .value=${s.focus_color||"var(--primary-color)"}
              @color-changed=${e=>{n({focus_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,a){return r.A.render(e,t,e=>a(e))}renderOtherTab(e,t,i,a){return d.X.render(e,t,e=>a(e))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}renderPreview(e,t,i,n){var r,d,l,s,c;const p=e,u=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";if(!p.entity||!p.entity.trim())return this.renderGradientErrorState((0,o.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,o.kg)("editor.datetime_input.error_configure_entity_desc",u,"Select an Input Datetime entity in the General tab"),"mdi:calendar-clock");const m=null===(d=null==t?void 0:t.states)||void 0===d?void 0:d[p.entity];if(!m)return this.renderGradientErrorState((0,o.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const{showDate:_,showTime:g}=this.resolveDisplayMode(p,m),h=this.getDateValue(m),v=this.getTimeValue(m),y=p.design||{},b=null!==(l=p.font_size)&&void 0!==l?l:16,f=p.text_color||"var(--primary-text-color)",k=p.focus_color||"var(--primary-color)",w=!1!==p.show_label&&!!p.label,$=p.label||"",x=((y.padding_top||y.padding_bottom||y.padding_left||y.padding_right)&&(y.padding_top,y.padding_right,y.padding_bottom,y.padding_left),(y.margin_top||y.margin_bottom||y.margin_left||y.margin_right)&&(y.margin_top,y.margin_right,y.margin_bottom,y.margin_left),y.background_color,this.getBackgroundImageCss(Object.assign(Object.assign({},p),y),t),y.border_radius,y.border_style&&"none"!==y.border_style&&(y.border_width,y.border_style,y.border_color),(y.box_shadow_h||y.box_shadow_v||y.box_shadow_blur||y.box_shadow_spread)&&(y.box_shadow_h,y.box_shadow_v,y.box_shadow_blur,y.box_shadow_spread,y.box_shadow_color),y.hover_effect,this.getHoverEffectClass(e)),S=this.buildStyleString(this.buildDesignStyles(e,t)),D=e=>{const t=e.currentTarget.querySelector("input");if(t&&"function"==typeof t.showPicker)try{t.showPicker()}catch(e){}},T=p.id;return this.wrapWithAnimation(a.qy`
      <style>
        .datetime-input-wrapper-${T} {
          display: flex;
          gap: 12px;
          align-items: stretch;
          flex-wrap: wrap;
        }
        .datetime-input-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--secondary-text-color);
          margin-bottom: 6px;
          padding-left: 2px;
        }
        .datetime-input-sublabel {
          font-size: 11px;
          color: var(--secondary-text-color);
          opacity: 0.6;
          flex-shrink: 0;
          min-width: 35px;
          align-self: center;
        }
        .datetime-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
        }
        .datetime-picker-field-${T} {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
          border: 1px solid var(--divider-color);
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        .datetime-picker-field-${T}:focus-within {
          border-color: ${k};
          box-shadow: 0 0 0 1px ${k};
        }
        .datetime-picker-field-${T}:hover {
          border-color: ${k};
        }
        .datetime-picker-field-${T} input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          padding: 10px 12px;
          font-size: ${b}px;
          color: ${f};
          font-family: inherit;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        .datetime-picker-field-${T} input::-webkit-calendar-picker-indicator {
          display: none;
        }
        .datetime-picker-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          color: var(--secondary-text-color);
          opacity: 0.7;
          flex-shrink: 0;
          --mdc-icon-size: 20px;
          pointer-events: none;
        }
      </style>
      <div
        class="datetime-input-module-container ${x}"
        style="${S}"
      >
        ${w?a.qy`<div class="datetime-input-label">${$}</div>`:""}
        <div class="datetime-input-wrapper-${T}">
          ${_?a.qy`
                <div class="datetime-input-row">
                  ${_&&g?a.qy`<span class="datetime-input-sublabel">${(0,o.kg)("editor.datetime_input.date_label",(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en","Date")}</span>`:""}
                  <div class="datetime-picker-field-${T}" @click=${D}>
                    <span class="datetime-picker-icon">
                      <ha-icon icon="mdi:calendar"></ha-icon>
                    </span>
                    <input
                      type="date"
                      .value=${h}
                      @change=${e=>{const i=e.target;i.value&&this.setEntityDatetime(p.entity,i.value,void 0,m,t)}}
                    />
                  </div>
                </div>
              `:""}
          ${g?a.qy`
                <div class="datetime-input-row">
                  ${_&&g?a.qy`<span class="datetime-input-sublabel">${(0,o.kg)("editor.datetime_input.time_label",(null===(c=null==t?void 0:t.locale)||void 0===c?void 0:c.language)||"en","Time")}</span>`:""}
                  <div class="datetime-picker-field-${T}" @click=${D}>
                    <span class="datetime-picker-icon">
                      <ha-icon icon="mdi:clock-outline"></ha-icon>
                    </span>
                    <input
                      type="time"
                      .value=${v}
                      @change=${e=>{const i=e.target;i.value&&this.setEntityDatetime(p.entity,void 0,i.value,m,t)}}
                    />
                  </div>
                </div>
              `:""}
        </div>
      </div>
    `,e,t)}getDateValue(e){if(!e)return"";const t=e.attributes;if((null==t?void 0:t.year)&&(null==t?void 0:t.month)&&(null==t?void 0:t.day))return`${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`;const i=e.state;if(i&&i.includes("-")){const e=i.split(" ")[0]||i.split("T")[0]||i;if(/^\d{4}-\d{2}-\d{2}/.test(e))return e.substring(0,10)}return""}getTimeValue(e){if(!e)return"";const t=e.attributes;if(void 0!==(null==t?void 0:t.hour)&&void 0!==(null==t?void 0:t.minute))return`${String(t.hour).padStart(2,"0")}:${String(t.minute).padStart(2,"0")}:${void 0!==t.second?String(t.second).padStart(2,"0"):"00"}`;const i=e.state;if(i){const e=i.includes(" ")?i.split(" ")[1]:i.includes("T")?i.split("T")[1]:/^\d{2}:\d{2}/.test(i)?i:"";if(e&&/^\d{2}:\d{2}/.test(e))return e.substring(0,8)}return""}async setEntityDatetime(e,t,i,a,o){var n,r;if(!e||!o)return;const d=!1!==(null===(n=null==a?void 0:a.attributes)||void 0===n?void 0:n.has_date),l=!1!==(null===(r=null==a?void 0:a.attributes)||void 0===r?void 0:r.has_time),s={entity_id:e};if(d&&l){const e=t||this.getDateValue(a),o=i||this.getTimeValue(a);e&&o?s.datetime=`${e} ${o}`:e?s.date=e:o&&(s.time=o)}else if(d&&t)s.date=t;else{if(!l||!i)return;s.time=i}try{await o.callService("input_datetime","set_datetime",s)}catch(t){console.error(`[DatetimeInput] Failed to set datetime for ${e}:`,t)}}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}}}}]);
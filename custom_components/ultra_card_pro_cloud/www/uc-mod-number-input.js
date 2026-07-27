"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[7238],{908(e,t,i){i.d(t,{UltraNumberInputModule:()=>s});var r=i(5183),n=i(5096),o=i(3721),a=i(5147),l=i(8938);i(7921);class s extends o.m{constructor(){super(...arguments),this._debounceTimers=new Map,this._localValues=new Map,this._localValueTimers=new Map,this.metadata={type:"number_input",title:"Number Input",description:"Number input field linked to input_number helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:numeric",category:"input",tags:["number","input","form","helper","interactive","stepper"]}}createDefault(e,t){return{id:e||this.generateId("number_input"),type:"number_input",input_appearance:"outlined",show_label:!0,label:"",show_stepper:!0,show_unit:!0,font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getAppearanceOptions(e){return[{value:"outlined",label:(0,n.kg)("editor.number_input.appearance_options.outlined",e,"Outlined")},{value:"filled",label:(0,n.kg)("editor.number_input.appearance_options.filled",e,"Filled")},{value:"underlined",label:(0,n.kg)("editor.number_input.appearance_options.underlined",e,"Underlined")}]}renderGeneralTab(e,t,i,o){var a,l;const s=e,d=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,n.kg)("editor.number_input.entity.title",d,"Entity Configuration"),(0,n.kg)("editor.number_input.entity.desc",d,"Link to a Home Assistant Input Number helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{o({entity:e}),this.triggerPreviewUpdate()},["input_number","number"],(0,n.kg)("editor.number_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.number_input.appearance.title",d,"Appearance")}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,n.kg)("editor.number_input.appearance.desc",d,"Configure how the number input field looks.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.number_input.input_appearance",d,"Input Style"),(0,n.kg)("editor.number_input.input_appearance_desc",d,"Visual style of the input field"),t,{input_appearance:s.input_appearance||"outlined"},[this.selectField("input_appearance",this.getAppearanceOptions(d))],e=>{o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,n.kg)("editor.number_input.label",d,"Label"),(0,n.kg)("editor.number_input.label_desc",d,"Label displayed above the input field"),t,{label:s.label||""},[{name:"label",selector:{text:{}}}],e=>o(e.detail.value))}

          ${this.renderFieldSection((0,n.kg)("editor.number_input.show_label",d,"Show Label"),(0,n.kg)("editor.number_input.show_label_desc",d,"Display the label above the input"),t,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.number_input.controls.title",d,"Controls")}
          </div>

          ${this.renderFieldSection((0,n.kg)("editor.number_input.show_stepper",d,"Show +/- Buttons"),(0,n.kg)("editor.number_input.show_stepper_desc",d,"Display increment/decrement stepper buttons"),t,{show_stepper:!1!==s.show_stepper},[{name:"show_stepper",selector:{boolean:{}}}],e=>{o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,n.kg)("editor.number_input.show_unit",d,"Show Unit"),(0,n.kg)("editor.number_input.show_unit_desc",d,"Display the unit of measurement"),t,{show_unit:!1!==s.show_unit},[{name:"show_unit",selector:{boolean:{}}}],e=>{o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,n.kg)("editor.number_input.styling.title",d,"Styling")}</div>

          ${this.renderSliderField((0,n.kg)("editor.number_input.font_size",d,"Font Size"),(0,n.kg)("editor.number_input.font_size_desc",d,"Font size of the input text in pixels"),null!==(l=s.font_size)&&void 0!==l?l:16,16,10,32,1,e=>o({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.number_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>o({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.number_input.focus_color",d,"Focus/Accent Color")}
              .value=${s.focus_color||"var(--primary-color)"}
              @color-changed=${e=>o({focus_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,r){return a.A.render(e,t,e=>r(e))}renderOtherTab(e,t,i,r){return l.X.render(e,t,e=>r(e))}getStyles(){return`${o.m.getSliderStyles()}`}renderPreview(e,t,i,o){var a,l,s,d,u,p,c,b,m,_,g;const h=e,v=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!(null===(l=h.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,n.kg)("editor.common.error_configure_entity",v,"Configure Entity"),(0,n.kg)("editor.number_input.error_configure_entity_desc",v,"Select an Input Number entity in the General tab"),"mdi:numeric");const y=null===(s=null==t?void 0:t.states)||void 0===s?void 0:s[h.entity];if(!y)return this.renderGradientErrorState((0,n.kg)("editor.common.error_entity_not_found",v,"Entity Not Found"),`Entity "${h.entity}" is not available`,"mdi:alert-circle-outline");const $=this._localValues.get(h.id),f=void 0!==$?$:parseFloat(y.state)||0,x=null!==(u=null===(d=y.attributes)||void 0===d?void 0:d.min)&&void 0!==u?u:0,w=null!==(c=null===(p=y.attributes)||void 0===p?void 0:p.max)&&void 0!==c?c:100,k=null!==(m=null===(b=y.attributes)||void 0===b?void 0:b.step)&&void 0!==m?m:1,S=(null===(_=y.attributes)||void 0===_?void 0:_.unit_of_measurement)||"",T=h.design||{},F=h.input_appearance||"outlined",z=null!==(g=h.font_size)&&void 0!==g?g:16,C=h.text_color||"var(--primary-text-color)",E=h.focus_color||"var(--primary-color)",A=!1!==h.show_stepper,N=!1!==h.show_unit&&!!S,U=!1!==h.show_label&&!!h.label,V=(this.buildContainerStyles(T),this.getHoverEffectClass(e)),D=this.buildStyleString(this.buildDesignStyles(e,t)),I=h.id,M=e=>{const i=Math.min(w,Math.max(x,parseFloat(e.toFixed(10))));this._localValues.set(I,i);const r=this._debounceTimers.get(I);r&&clearTimeout(r);const n=this._localValueTimers.get(I);n&&clearTimeout(n),this._debounceTimers.set(I,setTimeout(()=>{this.callEntityService(h.entity,i,t),this._localValueTimers.set(I,setTimeout(()=>{this._localValues.delete(I)},1e3))},300))};let P="1px solid var(--divider-color)",q="transparent",O="";"filled"===F?(q="var(--input-fill-color, rgba(var(--rgb-primary-text-color, 0,0,0), 0.05))",P="none",O="border-bottom: 2px solid var(--divider-color);"):"underlined"===F&&(q="transparent",P="none",O="border-bottom: 2px solid var(--divider-color); border-radius: 0 !important;");const j=h.id;return this.wrapWithAnimation(r.qy`
      <style>
        .num-wrap-${j} {
          display: flex; align-items: center; background: ${q};
          border: ${P}; border-radius: 8px; ${O}
          transition: border-color .2s, box-shadow .2s; overflow: hidden;
        }
        .num-wrap-${j}:focus-within {
          border-color: ${E};
          ${"outlined"===F?`box-shadow: 0 0 0 1px ${E};`:""}
          ${"outlined"!==F?`border-bottom-color: ${E};`:""}
        }
        .num-field-${j} {
          flex: 1; border: none; outline: none; background: transparent;
          padding: 12px; font-size: ${z}px; color: ${C};
          font-family: inherit; min-width: 0; text-align: center;
          -moz-appearance: textfield;
        }
        .num-field-${j}::-webkit-inner-spin-button,
        .num-field-${j}::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        .num-step-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 100%; min-height: 44px; cursor: pointer;
          color: var(--primary-text-color); background: transparent;
          border: none; flex-shrink: 0; transition: background .15s;
          --mdc-icon-size: 20px;
        }
        .num-step-btn:hover { background: rgba(var(--rgb-primary-text-color, 0,0,0), .06); }
        .num-step-btn:active { background: rgba(var(--rgb-primary-text-color, 0,0,0), .12); }
        .num-unit { font-size: ${Math.max(12,z-2)}px; color: var(--secondary-text-color);
          padding-right: 12px; flex-shrink: 0; }
        .num-label { font-size: 12px; font-weight: 500; color: var(--secondary-text-color);
          margin-bottom: 6px; padding-left: 2px; }
      </style>
      <div class="number-input-container ${V}" style="${D}">
        ${U?r.qy`<div class="num-label">${h.label}</div>`:""}
        <div class="num-wrap-${j}">
          ${A?r.qy`
            <button class="num-step-btn" @click=${()=>M(f-k)}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>`:""}
          <input class="num-field-${j}" type="number"
            .value=${String(f)} min=${x} max=${w} step=${k}
            @input=${e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||M(i)}} />
          ${N?r.qy`<span class="num-unit">${S}</span>`:""}
          ${A?r.qy`
            <button class="num-step-btn" @click=${()=>M(f+k)}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>`:""}
        </div>
      </div>
    `,e,t)}async callEntityService(e,t,i){if(!e||!i)return;const r=e.split(".")[0];try{await i.callService(r,"set_value",{entity_id:e,value:t})}catch(t){console.error(`[NumberInput] Failed to set value for ${e}:`,t)}}buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}}}}]);
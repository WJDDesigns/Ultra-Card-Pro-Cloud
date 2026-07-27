"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[7068],{6126(e,t,i){i.d(t,{UltraColorInputModule:()=>s});var o=i(5183),r=i(5096),l=i(3721),n=i(5147),a=i(8938);i(7921);class s extends l.m{constructor(){super(...arguments),this._debounceTimers=new Map,this.metadata={type:"color_input",title:"Color Input",description:"Color picker linked to input_text or light entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:palette",category:"input",tags:["color","picker","input","form","helper","interactive","rgb","hex"]}}createDefault(e,t){return{id:e||this.generateId("color_input"),type:"color_input",color_mode:"hex",show_label:!0,label:"",show_hex_input:!0,show_preview:!0,preview_size:40,font_size:14,text_color:"var(--primary-text-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getColorModeOptions(e){return[{value:"hex",label:(0,r.kg)("editor.color_input.mode_options.hex",e,"Hex (Input Text)")},{value:"light_rgb",label:(0,r.kg)("editor.color_input.mode_options.light_rgb",e,"Light RGB Color")}]}renderGeneralTab(e,t,i,l){var n,a,s;const d=e,c=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",p="light_rgb"===d.color_mode,u=p?["light"]:["input_text"];return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.mode.title",c,"Color Mode")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.color_input.mode.desc",c,"Choose how the color value is stored.")}
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.color_input.color_mode",c,"Color Mode"),(0,r.kg)("editor.color_input.color_mode_desc",c,"Hex stores to Input Text, Light RGB controls a light entity"),t,{color_mode:d.color_mode||"hex"},[this.selectField("color_mode",this.getColorModeOptions(c))],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        ${this.renderSettingsSection((0,r.kg)("editor.color_input.entity.title",c,"Entity Configuration"),(0,r.kg)("editor.color_input.entity.desc",c,p?"Select a light entity to control.":"Select an Input Text entity to store the hex color."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",d.entity||"",e=>{l({entity:e}),this.triggerPreviewUpdate()},u,(0,r.kg)("editor.color_input.entity_field",c,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.display.title",c,"Display")}</div>

          ${this.renderFieldSection((0,r.kg)("editor.color_input.label",c,"Label"),(0,r.kg)("editor.color_input.label_desc",c,"Label above the color picker"),t,{label:d.label||""},[{name:"label",selector:{text:{}}}],e=>l(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.color_input.show_label",c,"Show Label"),(0,r.kg)("editor.color_input.show_label_desc",c,"Display the label"),t,{show_label:!1!==d.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,r.kg)("editor.color_input.show_hex_input",c,"Show Hex Input"),(0,r.kg)("editor.color_input.show_hex_input_desc",c,"Display a text field with the hex value"),t,{show_hex_input:!1!==d.show_hex_input},[{name:"show_hex_input",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.styling.title",c,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.color_input.preview_size",c,"Preview Size"),(0,r.kg)("editor.color_input.preview_size_desc",c,"Size of the color preview swatch"),null!==(a=d.preview_size)&&void 0!==a?a:40,40,24,80,2,e=>{l({preview_size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
          ${this.renderSliderField((0,r.kg)("editor.color_input.font_size",c,"Font Size"),(0,r.kg)("editor.color_input.font_size_desc",c,"Font size in pixels"),null!==(s=d.font_size)&&void 0!==s?s:14,14,10,24,1,e=>l({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.color_input.text_color",c,"Text Color")}
              .value=${d.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>l({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return n.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return l.m.getSliderStyles()}renderPreview(e,t,i){var l,n,a,s,d,c;const p=e,u=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!(null===(n=p.entity)||void 0===n?void 0:n.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.color_input.error_configure_entity_desc",u,"Select an entity in the General tab"),"mdi:palette");const _=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[p.entity];if(!_)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const g="light_rgb"===p.color_mode;let h;if(g){const e=null===(s=_.attributes)||void 0===s?void 0:s.rgb_color;h=e?`#${e.map(e=>e.toString(16).padStart(2,"0")).join("")}`:"#ffffff"}else{const e=_.state||"#000000";h=e.startsWith("#")?e:`#${e}`}const v=p.design||{},b=null!==(d=p.font_size)&&void 0!==d?d:14,x=p.text_color||"var(--primary-text-color)",m=!1!==p.show_label&&!!p.label,y=!1!==p.show_hex_input,w=(p.show_preview,null!==(c=p.preview_size)&&void 0!==c?c:40),$=(this._buildContainerStyles(v),this.getHoverEffectClass(e)),f=this.buildStyleString(this.buildDesignStyles(e,t)),k=p.id,S=e=>{const i=this._debounceTimers.get(k);i&&clearTimeout(i),this._debounceTimers.set(k,setTimeout(()=>{if(p.entity&&t)if(g){const i=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);t.callService("light","turn_on",{entity_id:p.entity,rgb_color:[i,o,r]})}else t.callService("input_text","set_value",{entity_id:p.entity,value:e})},150))};return this.wrapWithAnimation(o.qy`
      <style>
        .clr-row-${k} { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .clr-swatch-${k} {
          position:relative; width:${w}px; height:${w}px; flex-shrink:0;
          border-radius:10px; cursor:pointer; overflow:hidden;
          border:2px solid var(--divider-color); transition:border-color .2s, box-shadow .2s;
          background:${h};
        }
        .clr-swatch-${k}:hover { border-color:var(--primary-color); box-shadow:0 0 0 2px rgba(var(--rgb-primary-color,3,169,244),.25); }
        .clr-swatch-${k} input {
          position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:pointer;
          border:none; padding:0; -webkit-appearance:none;
        }
        .clr-hex-input-${k} { flex:1; min-width:80px; padding:10px 12px; border:1px solid var(--divider-color);
          border-radius:8px; background:transparent; font-size:${b}px; color:${x};
          font-family:monospace; outline:none; transition:border-color .2s; }
        .clr-hex-input-${k}:focus { border-color:var(--primary-color); box-shadow:0 0 0 1px var(--primary-color); }
        .clr-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${$}" style="${f}">
        ${m?o.qy`<div class="clr-label">${p.label}</div>`:""}
        <div class="clr-row-${k}">
          <div class="clr-swatch-${k}">
            <input type="color" .value=${h} @input=${e=>{const t=e.target;S(t.value)}} />
          </div>
          ${y?o.qy`<input class="clr-hex-input-${k}" type="text" .value=${h}
            placeholder="#000000" @change=${e=>{let t=e.target.value.trim();t.startsWith("#")||(t=`#${t}`),/^#[0-9a-fA-F]{6}$/.test(t)&&S(t)}} />`:""}
        </div>
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}}}]);
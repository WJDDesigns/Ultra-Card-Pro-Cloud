"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[6150],{940(t,e,o){o.d(e,{UltraButtonModule:()=>d});var i=o(5183),n=o(5096),r=o(3721),a=o(5147),s=o(8938),l=(o(7921),o(7907));class d extends r.m{constructor(){super(...arguments),this.metadata={type:"button",title:"Button",description:"Interactive buttons with actions",author:"WJD Designs",version:"1.0.0",icon:"mdi:gesture-tap-button",category:"interactive",tags:["button","action","click","interactive"]}}createDefault(t,e){return{id:t||this.generateId("button"),type:"button",label:"",style:"flat",icon:"",icon_position:"before",show_icon:!1,icon_size:"24px",background_color:"var(--primary-color)",text_color:"white",use_entity_color:!1,background_color_entity:"",background_state_colors:{},tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getButtonStyles(t){return[{value:"flat",label:(0,n.kg)("editor.button.styles.flat",t,"Flat (Default)")},{value:"glossy",label:(0,n.kg)("editor.button.styles.glossy",t,"Glossy")},{value:"embossed",label:(0,n.kg)("editor.button.styles.embossed",t,"Embossed")},{value:"inset",label:(0,n.kg)("editor.button.styles.inset",t,"Inset")},{value:"gradient-overlay",label:(0,n.kg)("editor.button.styles.gradient_overlay",t,"Gradient Overlay")},{value:"neon-glow",label:(0,n.kg)("editor.button.styles.neon_glow",t,"Neon Glow")},{value:"outline",label:(0,n.kg)("editor.button.styles.outline",t,"Outline")},{value:"glass",label:(0,n.kg)("editor.button.styles.glass",t,"Glass")},{value:"metallic",label:(0,n.kg)("editor.button.styles.metallic",t,"Metallic")}]}getAlignmentOptions(t){return[{value:"left",label:(0,n.kg)("editor.button.align.left",t,"Left")},{value:"center",label:(0,n.kg)("editor.button.align.center",t,"Center")},{value:"right",label:(0,n.kg)("editor.button.align.right",t,"Right")},{value:"justify",label:(0,n.kg)("editor.button.align.justify",t,"Justify (Full Width)")}]}getIconPositionOptions(t){return[{value:"before",label:(0,n.kg)("editor.button.icon.before",t,"Before Text")},{value:"after",label:(0,n.kg)("editor.button.icon.after",t,"After Text")}]}renderGeneralTab(t,e,o,r){var a;const s=t,l=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Basic Settings -->
        ${this.renderSettingsSection((0,n.kg)("editor.button.basic.title",l,"Basic Settings"),(0,n.kg)("editor.button.basic.desc",l,"Configure the button appearance and text content."),[{title:(0,n.kg)("editor.button.text.title",l,"Button Text"),description:(0,n.kg)("editor.button.text.desc",l,"Text to display on the button (leave blank for icon-only)."),hass:e,data:s,schema:[this.textField("label")],onChange:t=>{r(t.detail.value),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.button.style.title",l,"Button Style"),description:(0,n.kg)("editor.button.style.desc",l,"Visual style of the button"),hass:e,data:{style:s.style||"flat"},schema:[this.selectField("style",this.getButtonStyles(l))],onChange:t=>{t.detail.value.style!==(s.style||"flat")&&(r(t.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,n.kg)("editor.button.alignment.title",l,"Alignment"),description:(0,n.kg)("editor.button.alignment.desc",l,"How the button is aligned within its container"),hass:e,data:{alignment:s.alignment||"center"},schema:[this.selectField("alignment",this.getAlignmentOptions(l))],onChange:t=>{t.detail.value.alignment!==(s.alignment||"center")&&(r(t.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Icon Settings -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.button.icon.title",l,"Icon Settings")}
          </div>

          <!-- Icon Field - Always visible -->
          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.button.icon_field",l,"Icon"),(0,n.kg)("editor.button.icon_desc",l,"Icon to display (e.g., mdi:home). Selecting an icon will automatically enable icon display."),e,{icon:s.icon||""},[this.iconField("icon")],t=>{const e=t.detail.value;e.icon&&e.icon.trim()?(e.show_icon=!0,s.icon_position||(e.icon_position="before")):e.icon&&e.icon.trim()||(e.show_icon=!1),r(e),this.triggerPreviewUpdate()})}
          </div>

          ${s.show_icon&&s.icon?i.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.button.icon_position",l,"Icon Position"),(0,n.kg)("editor.button.icon_position_desc",l,"Position of the icon relative to text"),e,{icon_position:s.icon_position||"before"},[this.selectField("icon_position",this.getIconPositionOptions(l))],t=>{t.detail.value.icon_position!==(s.icon_position||"before")&&(r(t.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  ${this.renderSliderField((0,n.kg)("editor.button.icon_size",l,"Icon Size"),(0,n.kg)("editor.button.icon_size_desc",l,"Size of the icon in pixels"),"number"==typeof s.icon_size?s.icon_size:parseInt(String(s.icon_size||"24").replace("px",""))||24,24,12,64,1,t=>{r({icon_size:`${t}px`}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                </div>
              `:""}
        </div>

        <!-- Colors -->
        <div class="settings-section">
          <div class="section-title">${(0,n.kg)("editor.button.colors.title",l,"Colors")}</div>

          <!-- Entity-based Background Color Toggle -->
          <div class="field-group" style="margin-top: 16px; margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.button.use_entity_color",l,"Use Entity Color"),(0,n.kg)("editor.button.use_entity_color_desc",l,"Change button background color based on entity state"),e,{use_entity_color:s.use_entity_color||!1},[this.booleanField("use_entity_color")],t=>{const e=t.detail.value.use_entity_color;r({use_entity_color:e,background_color_entity:e?s.background_color_entity:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${s.use_entity_color?i.qy`
                <!-- Entity Picker -->
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderEntityPickerWithVariables(e,o,"background_color_entity",s.background_color_entity||"",t=>{r({background_color_entity:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},void 0,(0,n.kg)("editor.button.background_color_entity",l,"Entity"))}
                </div>

                <!-- State Colors Mapping -->
                <div class="field-group" style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 8px;"
                  >
                    ${(0,n.kg)("editor.button.state_colors",l,"State Colors")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
                  >
                    ${(0,n.kg)("editor.button.state_colors_desc",l,"Optional: Map specific entity states to colors (e.g., on: green, off: gray). If not set, will use entity RGB color or state-based defaults.")}
                  </div>
                  ${this.renderStateColorsEditor(s.background_state_colors||{},e,l,t=>{r({background_state_colors:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                </div>
              `:i.qy`
                <!-- Static Background Color -->
                <div class="color-controls">
                  <ultra-color-picker
                    .label=${(0,n.kg)("editor.button.colors.background",l,"Background Color")}
                    .value=${s.background_color||"var(--primary-color)"}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${e}
                    @value-changed=${t=>{r({background_color:t.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `}

          <!-- Text Color (always visible) -->
          <div class="color-controls" style="margin-top: 16px;">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.button.colors.text",l,"Text Color")}
              .value=${s.text_color||"white"}
              .defaultValue=${"white"}
              .hass=${e}
              @value-changed=${t=>{r({text_color:t.detail.value}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Actions Setup Guide -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.button.actions.title",l,"Button Actions")}
          </div>
          <div
            class="section-description"
            style="margin-bottom: 16px; color: var(--secondary-text-color); font-size: 14px;"
          >
            ${(0,n.kg)("editor.button.actions.desc",l,"Configure what happens when users tap, hold, or double-tap this button.")}
          </div>
          <ha-button
            raised
            style="width: 100%; --mdc-theme-primary: var(--primary-color);"
            @click=${()=>{const t=new CustomEvent("switch-to-actions-tab",{bubbles:!0,composed:!0,detail:{tab:"actions"}});document.dispatchEvent(t)}}
          >
            <ha-icon icon="mdi:gesture-tap" slot="icon"></ha-icon>
            ${(0,n.kg)("editor.button.actions.setup",l,"Set up button actions")}
          </ha-button>
        </div>
      </div>
    `}renderActionsTab(t,e,o,i){const n=t;return a.A.render(n,e,t=>i(t))}renderPreview(t,e,o,n){var r,a,s,l,d,c,u,g;const b=t,h=b,_=b.design||{},p="string"==typeof h.font_size?h.font_size:void 0,y=("string"==typeof _.font_size&&""!==_.font_size.trim()?_.font_size:p)||"14px",x=this.addPixelUnit(y)||"14px";let v=_.background_color||b.background_color||"var(--primary-color)";if(b.use_entity_color&&b.background_color_entity&&e){const t=this.resolveEntity(b.background_color_entity,o)||b.background_color_entity,i=e.states[t];if(i)if(b.background_state_colors&&Object.keys(b.background_state_colors).length>0){const t=this.matchStateColor(b.background_state_colors,i.state);if(t)v=t;else{const t=this.getEntityStateColor(i);t&&(v=t)}}else{const t=this.getEntityStateColor(i);t&&(v=t)}}const m=!!(_.color||h.color||b.text_color||h.text_color),f=_.color||h.color||b.text_color||h.text_color||"white",k=_.font_weight||h.font_weight||"500",w=_.font_family||h.font_family||"inherit",$=_.font_style||h.font_style||"normal",S=_.text_transform||h.text_transform||"none",P=_.letter_spacing||h.letter_spacing||void 0,C=null!=P&&""!==`${P}`.trim()?`${P}`:void 0,U=_.line_height||h.line_height,j=null!=U&&""!==`${U}`.trim()?`${U}`:void 0,z=b.alignment||"center",F=this.getFlexJustify(z),T=_.text_align||h.text_align||z,O=this.getFlexJustify(T,!0),A=this.resolveTextShadow(_,h),I=b.style||"flat",B={color:f,padding:"12px 24px",fontSize:x,fontWeight:String(k),fontFamily:w,fontStyle:$,textTransform:S,borderRadius:this.addPixelUnit(_.border_radius||h.border_radius)||"8px",cursor:"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:O,gap:"8px",minHeight:"40px",textShadow:A};C&&(B.letterSpacing=C),j&&(B.lineHeight=j);const E={flat:{background:v,border:"none",boxShadow:"none"},glossy:{background:`linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0)), ${v}`,border:"none"},embossed:{background:v,border:"1px solid rgba(0,0,0,0.15)",boxShadow:"inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 2px rgba(0,0,0,0.15)"},inset:{background:v,border:"none",boxShadow:"inset 0 2px 6px rgba(0,0,0,0.35)"},"gradient-overlay":{background:`linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.15)), ${v}`,border:"none"},"neon-glow":{background:v,border:"none",boxShadow:`0 0 10px ${v}, 0 0 20px ${v}`},outline:{background:"transparent",border:`2px solid ${v}`},glass:{background:v,backdropFilter:"blur(6px)",border:"1px solid rgba(255,255,255,0.25)"},metallic:{background:"linear-gradient(90deg, #d7d7d7, #f0f0f0 50%, #d7d7d7)",border:"1px solid #bbb"}};m||(E.outline.color=v,E.metallic.color="#333");const G=Object.assign(Object.assign({},B),E[I]||E.flat);[["width",null!==(r=_.width)&&void 0!==r?r:h.width],["height",null!==(a=_.height)&&void 0!==a?a:h.height],["maxWidth",null!==(s=_.max_width)&&void 0!==s?s:h.max_width],["maxHeight",null!==(l=_.max_height)&&void 0!==l?l:h.max_height],["minWidth",null!==(d=_.min_width)&&void 0!==d?d:h.min_width],["minHeight",null!==(c=_.min_height)&&void 0!==c?c:h.min_height]].forEach(([t,e])=>{const o=this.addPixelUnit(e);o&&(G[t]=o)}),G.width||"justify"!==z||(G.width="100%");const q={display:"flex",justifyContent:F,alignItems:"center",width:"100%"},H=this.addPixelUnit(_.padding_top||h.padding_top),M=this.addPixelUnit(_.padding_right||h.padding_right),W=this.addPixelUnit(_.padding_bottom||h.padding_bottom),R=this.addPixelUnit(_.padding_left||h.padding_left),V=H||M||W||R,D=this.addPixelUnit(_.margin_top||h.margin_top),L=this.addPixelUnit(_.margin_right||h.margin_right),J=this.addPixelUnit(_.margin_bottom||h.margin_bottom),N=this.addPixelUnit(_.margin_left||h.margin_left),X={width:"100%",height:"auto",maxWidth:"none",maxHeight:"none",minWidth:"auto",minHeight:"auto",padding:V?`${H||"0"} ${M||"0"} ${W||"0"} ${R||"0"}`:"0",margin:D||L||J||N?`${D||"0"} ${L||"0"} ${J||"0"} ${N||"0"}`:"0",background:_.background_color||"transparent",backgroundImage:this.getBackgroundImageCSS(Object.assign(Object.assign({},h),_),e,o),backgroundSize:_.background_size||h.background_size||"cover",backgroundPosition:_.background_position||h.background_position||"center",backgroundRepeat:_.background_repeat||h.background_repeat||"no-repeat",borderRadius:this.addPixelUnit(_.border_radius||h.border_radius)||"8px",border:_.border_style&&"none"!==_.border_style?`${this.addPixelUnit(_.border_width)||"1px"} ${_.border_style} ${_.border_color||"var(--divider-color)"}`:"none",boxShadow:_.box_shadow_h||_.box_shadow_v||_.box_shadow_blur||_.box_shadow_spread?`${this.addPixelUnit(_.box_shadow_h)||"0px"} ${this.addPixelUnit(_.box_shadow_v)||"0px"} ${this.addPixelUnit(_.box_shadow_blur)||"0px"} ${this.addPixelUnit(_.box_shadow_spread)||"0px"} ${_.box_shadow_color||"rgba(0,0,0,.2)"}`:"none",boxSizing:"border-box"},Z=this.createGestureHandlers(b.id,{tap_action:b.tap_action,hold_action:b.hold_action,double_tap_action:b.double_tap_action,entity:b.entity,module:b},e,o),K=(null===(u=b.design)||void 0===u||u.hover_effect,this.getHoverEffectClass(t)),Q=this.buildStyleString(this.buildDesignStyles(t,e)),Y=this.addPixelUnit(b.icon_size)||"24px";return this.wrapWithAnimation(i.qy`
      <div class="button-module-container" style="${Q}; ${this.buildStyleString(X)}">
        <div class="button-module-preview" style="${this.buildStyleString(q)}">
          <button
            class="ultra-button ${I} ${"justify"===z?"justify":""} ${K}"
            style="${this.buildStyleString(G)}"
            aria-label="${(b.label||"Button").trim()||"Button"}"
            @pointerdown=${Z.onPointerDown}
            @pointermove=${Z.onPointerMove}
            @pointerup=${Z.onPointerUp}
            @pointerleave=${Z.onPointerLeave}
            @pointercancel=${Z.onPointerCancel}
          >
            ${b.show_icon&&b.icon&&"before"===b.icon_position?i.qy`<ha-icon
                  icon="${b.icon}"
                  style="--mdc-icon-size: ${Y}; width: ${Y}; height: ${Y};"
                ></ha-icon>`:""}
            ${null!==(g=b.label)&&void 0!==g?g:""}
            ${b.show_icon&&b.icon&&"after"===b.icon_position?i.qy`<ha-icon
                  icon="${b.icon}"
                  style="--mdc-icon-size: ${Y}; width: ${Y}; height: ${Y};"
                ></ha-icon>`:""}
          </button>
        </div>
      </div>
    `,t,e)}styleObjectToCss(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")}getFlexJustify(t,e=!1){switch(t){case"left":return"flex-start";case"right":return"flex-end";case"justify":return e?"space-between":"center";default:return"center"}}resolveTextShadow(t,e){return["text_shadow_h","text_shadow_v","text_shadow_blur","text_shadow_color"].some(e=>{const o=t[e];return null!=o&&""!==`${o}`.trim()})?`${this.addPixelUnit(t.text_shadow_h)||"0px"} ${this.addPixelUnit(t.text_shadow_v)||"0px"} ${this.addPixelUnit(t.text_shadow_blur)||"0px"} ${t.text_shadow_color||"rgba(0,0,0,.2)"}`:["text_shadow_h","text_shadow_v","text_shadow_blur","text_shadow_color"].some(t=>{const o=e[t];return null!=o&&""!==`${o}`.trim()})?`${this.addPixelUnit(e.text_shadow_h)||"0px"} ${this.addPixelUnit(e.text_shadow_v)||"0px"} ${this.addPixelUnit(e.text_shadow_blur)||"0px"} ${e.text_shadow_color||"rgba(0,0,0,.2)"}`:"none"}addPixelUnit(t){if(null==t)return;const e=String(t).trim();return e?/^-?\d+(?:\.\d+)?$/.test(e)?`${e}px`:/^(?:-?\d+(?:\.\d+)?\s+)+-?\d+(?:\.\d+)?$/.test(e)?e.split(/\s+/).map(t=>/^-?\d+(?:\.\d+)?$/.test(t)?`${t}px`:t).join(" "):e:void 0}renderStateColorsEditor(t,e,o,r){return i.qy`
      <div class="state-color-editor">
        ${Object.entries(t).map(([o,n])=>i.qy`
            <div
              class="state-color-row"
              style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; min-width: 0; overflow: hidden;"
            >
              <input
                type="text"
                class="state-color-input"
                placeholder="State (e.g., on, off)"
                .value=${o}
                style="flex: 0 0 120px; padding: 8px; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--secondary-background-color); color: var(--primary-text-color); flex-shrink: 0;"
                @input=${e=>{const i=e.target.value,a=Object.assign({},t);delete a[o],i.trim()&&(a[i.trim()]=n),r(a)}}
              />
              <div style="flex: 1; min-width: 0; overflow: hidden;">
                <ultra-color-picker
                  .label=${""}
                  .value=${n}
                  .defaultValue=${"gray"}
                  .hass=${e}
                  style="width: 100%;"
                  @value-changed=${e=>{const i=Object.assign(Object.assign({},t),{[o]:e.detail.value});r(i)}}
                ></ultra-color-picker>
              </div>
              <ha-icon
                icon="mdi:delete"
                style="cursor: pointer; color: var(--error-color); margin-left: 8px; flex-shrink: 0;"
                @click=${()=>{const e=Object.assign({},t);delete e[o],r(e)}}
              ></ha-icon>
            </div>
          `)}
        <button
          class="add-state-color-btn"
          style="margin-top: 8px; padding: 8px 16px; background: var(--primary-color); color: var(--text-primary-color, #fff); border: none; border-radius: 4px; cursor: pointer; font-size: 14px;"
          @click=${()=>{const e=Object.assign(Object.assign({},t),{new_state:"gray"});r(e)}}
        >
          <ha-icon icon="mdi:plus" style="margin-right: 4px;"></ha-icon>
          ${(0,n.kg)("editor.button.add_state_color",o,"Add State Color")}
        </button>
      </div>
    `}matchStateColor(t,e){if(void 0!==t[e])return t[e];const o=t=>{const e=t.trim();if(""===e)return null;const o=Number(e);return Number.isFinite(o)?o:null},i=o(e),n=e.trim().toLowerCase();for(const[e,r]of Object.entries(t)){const t=o(e);if(null!==i&&null!==t){if(t===i)return r}else if(e.trim().toLowerCase()===n)return r}}getEntityStateColor(t){if(!t||!t.attributes)return null;if(t.attributes.rgb_color&&Array.isArray(t.attributes.rgb_color))return`rgb(${t.attributes.rgb_color.join(",")})`;if(t.attributes.hs_color&&Array.isArray(t.attributes.hs_color)){const[e,o]=t.attributes.hs_color;return`rgb(${this.hsToRgb(e/360,o/100,1).join(",")})`}if(t.attributes.color_name)return t.attributes.color_name;if(t.attributes.color&&"string"==typeof t.attributes.color)return t.attributes.color;if(t.entity_id){const e=t.entity_id.split(".")[0],o=t.state;switch(e){case"light":return"on"===o?"#FFA500":"#666666";case"switch":return"on"===o?"#4CAF50":"#666666";case"binary_sensor":return"on"===o?"#F44336":"#4CAF50";default:return"on"===o||"open"===o||"active"===o?"var(--primary-color)":"#666666"}}return null}hsToRgb(t,e,o){let i,n,r;const a=Math.floor(6*t),s=6*t-a,l=o*(1-e),d=o*(1-s*e),c=o*(1-(1-s)*e);switch(a%6){case 0:i=o,n=c,r=l;break;case 1:i=d,n=o,r=l;break;case 2:i=l,n=o,r=c;break;case 3:i=l,n=d,r=o;break;case 4:i=c,n=l,r=o;break;case 5:i=o,n=l,r=d;break;default:i=0,n=0,r=0}return[Math.round(255*i),Math.round(255*n),Math.round(255*r)]}getBackgroundImageCSS(t,e,o){var i,n;const r=t.background_image_type,a=t.background_image,s=t.background_image_entity;if(!r||"none"===r)return"none";switch(r){case"upload":if(a)return`url("${(0,l.VG)(e,a)}")`;break;case"url":if(a)return`url("${a}")`;break;case"entity":if(s&&e){const t=this.resolveEntity(s,o)||s,r=e.states[t];if(r){const t=(null===(i=r.attributes)||void 0===i?void 0:i.entity_picture)||(null===(n=r.attributes)||void 0===n?void 0:n.image)||("string"==typeof r.state?r.state:"");if(t&&"unknown"!==t&&"unavailable"!==t)return`url("${(0,l.VG)(e,t)}")`}}}return"none"}renderLogicTab(t,e,o,i){return s.X.render(t,e,t=>i(t))}getStyles(){return`\n      /* State color editor styles */\n      .state-color-editor {\n        width: 100%;\n      }\n\n      .state-color-row {\n        width: 100%;\n        min-width: 0;\n        overflow: hidden;\n      }\n\n      .state-color-row ultra-color-picker {\n        min-width: 0;\n        flex: 1;\n      }\n\n      ${r.m.getSliderStyles()}\n    `}}}}]);
"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[3895],{4985(t,e,i){i.d(e,{UltraSeparatorModule:()=>d});var r=i(5183),o=i(3721),a=i(5147),n=i(8938),s=i(9957),l=i(5096);class d extends o.m{constructor(){super(...arguments),this.metadata={type:"separator",title:"Separator",description:"Visual dividers and spacing",author:"WJD Designs",version:"1.0.0",icon:"mdi:minus",category:"content",tags:["separator","divider","spacing","layout"]}}createDefault(t,e){return{id:t||this.generateId("separator"),type:"separator",separator_style:"line",orientation:"horizontal",thickness:2,width_percent:100,height_px:300,color:"#cccccc",show_title:!1,title:"",title_size:14,title_color:"var(--secondary-text-color)",title_bold:!1,title_italic:!1,title_uppercase:!1,title_strikethrough:!1,title_underline:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},enable_hover_effect:!0,hover_background_color:"var(--divider-color, #cccccc)",display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,o){var a;const n=t,s=(null===(a=e.locale)||void 0===a?void 0:a.language)||"en";return"var(--divider-color)"!==n.color&&"var(--divider-color, #cccccc)"!==n.color||o({color:"#cccccc"}),r.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Separator Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,l.kg)("editor.separator.config.title",s,"Separator Configuration")}
          </div>

          <!-- Separator Style -->
          <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
            ${(0,l.kg)("editor.separator.style.title",s,"Separator Style")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
          >
            ${(0,l.kg)("editor.separator.style.desc",s,"Choose the visual style of the separator line.")}
          </div>
          ${this.renderUcForm(e,{separator_style:n.separator_style},[this.selectField("separator_style",[{value:"line",label:(0,l.kg)("editor.separator.options.solid",s,"Solid Line")},{value:"double_line",label:(0,l.kg)("editor.separator.options.double",s,"Double Line")},{value:"dotted",label:(0,l.kg)("editor.separator.options.dotted",s,"Dotted Line")},{value:"double_dotted",label:(0,l.kg)("editor.separator.options.double_dotted",s,"Double Dotted")},{value:"shadow",label:(0,l.kg)("editor.separator.options.shadow",s,"Shadow")},{value:"blank",label:(0,l.kg)("editor.separator.options.blank",s,"Blank Space")}])],t=>{t.detail.value.separator_style!==n.separator_style&&(o(t.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}

          <!-- Orientation -->
          <div
            class="field-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 4px; margin-top: 24px;"
          >
            ${(0,l.kg)("editor.separator.orientation.title",s,"Orientation")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
          >
            ${(0,l.kg)("editor.separator.orientation.desc",s,"Choose whether the separator runs horizontally or vertically.")}
          </div>
          ${this.renderUcForm(e,{orientation:n.orientation},[this.selectField("orientation",[{value:"horizontal",label:(0,l.kg)("editor.separator.orientation.horizontal",s,"Horizontal")},{value:"vertical",label:(0,l.kg)("editor.separator.orientation.vertical",s,"Vertical")}])],t=>{t.detail.value.orientation!==n.orientation&&(o(t.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
        </div>

        <!-- Appearance Configuration -->
        ${"blank"!==n.separator_style?r.qy`
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
                >
                  ${(0,l.kg)("editor.separator.appearance.title",s,"Appearance")}
                </div>

                <!-- Thickness -->
                <div class="field-container" style="margin-bottom: 24px;">
                  ${this.renderSliderField((0,l.kg)("editor.separator.thickness",s,"Thickness (px)"),(0,l.kg)("editor.separator.thickness_desc",s,"Thickness of the separator line."),n.thickness||1,1,1,20,1,t=>{o({thickness:t})})}
                </div>

                <!-- Width/Height based on orientation -->
                ${"shadow"===n.separator_style||"blank"===n.separator_style?r.qy``:"vertical"===n.orientation?this.renderUnitAwareSliderField((0,l.kg)("editor.separator.height",s,"Height"),(0,l.kg)("editor.separator.height_desc",s,'Height of the separator. Use pixels (e.g., "300px") or percentage (e.g., "50%").'),n.height_px,"300px",50,600,10,"px","300px or 50%",t=>o({height_px:t})):this.renderUnitAwareSliderField((0,l.kg)("editor.separator.width",s,"Width"),(0,l.kg)("editor.separator.width_desc",s,'Width of the separator. Use percentage (e.g., "100%") or pixels (e.g., "200px").'),n.width_percent,100,10,100,5,"%","100% or 200px",t=>o({width_percent:t}))}

                <!-- Color -->
                <div class="field-group">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                  >
                    ${(0,l.kg)("editor.separator.color.title",s,"Color")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                  >
                    ${(0,l.kg)("editor.separator.color.desc",s,"Color of the separator line.")}
                  </div>
                  <ultra-color-picker
                    .label=${""}
                    .value=${n.color||"#cccccc"}
                    .defaultValue=${"#cccccc"}
                    .hass=${e}
                    @value-changed=${t=>o({color:t.detail.value})}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}
        ${"blank"!==n.separator_style?r.qy` <!-- Text in Separator -->
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
              >
                ${this.renderFieldSection((0,l.kg)("editor.separator.show_title",s,"Show Title"),(0,l.kg)("editor.separator.show_title_desc",s,"Add text in the middle of the separator line (e.g., ------ Text ------)"),e,{show_title:n.show_title||!1},[this.booleanField("show_title")],t=>o({show_title:t.detail.value.show_title}))}

                ${n.show_title?r.qy`
                      <!-- Text Content -->
                      <div class="field-group" style="margin-bottom: 16px;">
                        <div
                          class="field-title"
                          style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                        >
                          ${(0,l.kg)("editor.separator.text_content.title",s,"Text Content")}
                        </div>
                        <div
                          class="field-description"
                          style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                        >
                          ${(0,l.kg)("editor.separator.text_content.desc",s,"Text to display in the middle of the separator.")}
                        </div>
                        <ha-form
                          .hass=${e}
                          .data=${{title:n.title||""}}
                          .schema=${[{name:"title",selector:{text:{}},label:""}]}
                          @value-changed=${t=>o({title:t.detail.value.title})}
                        ></ha-form>
                      </div>

                      <!-- Font Size -->
                      <div class="field-container" style="margin-bottom: 24px;">
                        ${this.renderSliderField((0,l.kg)("editor.separator.font_size",s,"Font Size"),(0,l.kg)("editor.separator.font_size_desc",s,"Size of the text in pixels."),n.title_size||14,14,8,48,1,t=>{o({title_size:t})})}
                      </div>

                      <!-- Text Color -->
                      <div class="field-group" style="margin-bottom: 16px;">
                        <div
                          class="field-title"
                          style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                        >
                          ${(0,l.kg)("editor.separator.text_color.title",s,"Text Color")}
                        </div>
                        <div
                          class="field-description"
                          style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                        >
                          ${(0,l.kg)("editor.separator.text_color.desc",s,"Color of the separator text.")}
                        </div>
                        <ultra-color-picker
                          .label=${""}
                          .value=${n.title_color||""}
                          .defaultValue=${"var(--secondary-text-color)"}
                          .hass=${e}
                          @value-changed=${t=>o({title_color:t.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <!-- Text Formatting -->
                      <div class="field-group">
                        <div
                          class="field-title"
                          style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                        >
                          ${(0,l.kg)("editor.separator.text_format.title",s,"Text Formatting")}
                        </div>
                        <div
                          class="field-description"
                          style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                        >
                          ${(0,l.kg)("editor.separator.text_format.desc",s,"Apply formatting styles to the separator text.")}
                        </div>
                        <div
                          class="format-buttons"
                          style="display: flex; gap: 8px; flex-wrap: wrap;"
                        >
                          <button
                            class="format-btn ${n.title_bold?"active":""}"
                            @click=${()=>o({title_bold:!n.title_bold})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${n.title_bold?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${n.title_bold?"white":"var(--primary-text-color)"};"
                            title=${(0,l.kg)("editor.separator.text_format.bold",s,"Bold")}
                          >
                            <ha-icon icon="mdi:format-bold"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${n.title_italic?"active":""}"
                            @click=${()=>o({title_italic:!n.title_italic})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${n.title_italic?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${n.title_italic?"white":"var(--primary-text-color)"};"
                            title=${(0,l.kg)("editor.separator.text_format.italic",s,"Italic")}
                          >
                            <ha-icon icon="mdi:format-italic"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${n.title_underline?"active":""}"
                            @click=${()=>o({title_underline:!n.title_underline})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${n.title_underline?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${n.title_underline?"white":"var(--primary-text-color)"};"
                            title=${(0,l.kg)("editor.separator.text_format.underline",s,"Underline")}
                          >
                            <ha-icon icon="mdi:format-underline"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${n.title_uppercase?"active":""}"
                            @click=${()=>o({title_uppercase:!n.title_uppercase})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${n.title_uppercase?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${n.title_uppercase?"white":"var(--primary-text-color)"};"
                            title=${(0,l.kg)("editor.separator.text_format.uppercase",s,"Uppercase")}
                          >
                            <ha-icon icon="mdi:format-letter-case-upper"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${n.title_strikethrough?"active":""}"
                            @click=${()=>o({title_strikethrough:!n.title_strikethrough})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${n.title_strikethrough?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${n.title_strikethrough?"white":"var(--primary-text-color)"};"
                            title=${(0,l.kg)("editor.separator.text_format.strikethrough",s,"Strikethrough")}
                          >
                            <ha-icon icon="mdi:format-strikethrough"></ha-icon>
                          </button>
                        </div>
                      </div>
                    `:r.qy`
                      <div
                        style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                      >
                        ${(0,l.kg)("editor.separator.show_title_toggle.enable_toggle_desc",s,"Enable the toggle above to configure title settings")}
                      </div>
                    `}
              </div>`:r.qy`
              <!-- Spacer (Blank) Thickness Control -->
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
                >
                  ${(0,l.kg)("editor.separator.spacer.title",s,"Spacer Height")}
                </div>
                <div class="field-container" style="margin-bottom: 24px;">
                  ${this.renderSliderField((0,l.kg)("editor.separator.height",s,"Height (px)"),(0,l.kg)("editor.separator.height_desc",s,"Controls the visual gap for Blank Space."),n.thickness||1,1,1,300,1,t=>{o({thickness:t})})}
                </div>
              </div>
            `}
      </div>
    `}renderActionsTab(t,e,i,r){return a.A.render(t,e,t=>r(t))}renderPreview(t,e,i,o){const a=t,n=a,l=a.design||{},d="vertical"!==a.orientation,c=this.parseSizeValue(a.width_percent,100,0,!0),p=this.extractNumericValue(a.width_percent),h=d&&(c.endsWith("%")&&p>=100||"number"==typeof a.width_percent&&a.width_percent>=100),g=Object.assign({padding:l.padding_top||l.padding_bottom||l.padding_left||l.padding_right||n.padding_top||n.padding_bottom||n.padding_left||n.padding_right?`${this.addPixelUnit(l.padding_top||n.padding_top)||"0px"} ${this.addPixelUnit(l.padding_right||n.padding_right)||"0px"} ${this.addPixelUnit(l.padding_bottom||n.padding_bottom)||"0px"} ${this.addPixelUnit(l.padding_left||n.padding_left)||"0px"}`:"0",margin:l.margin_top||l.margin_bottom||l.margin_left||l.margin_right||n.margin_top||n.margin_bottom||n.margin_left||n.margin_right?`${l.margin_top||n.margin_top||"0px"} ${l.margin_right||n.margin_right||"0px"} ${l.margin_bottom||n.margin_bottom||"0px"} ${l.margin_left||n.margin_left||"0px"}`:"0",background:l.background_color||n.background_color||"transparent",backgroundImage:this.getBackgroundImageCSS(Object.assign(Object.assign({},n),l),e),backgroundSize:l.background_size||n.background_size||"cover",backgroundPosition:l.background_position||n.background_position||"center",backgroundRepeat:l.background_repeat||n.background_repeat||"no-repeat",border:(l.border_style||n.border_style)&&"none"!==(l.border_style||n.border_style)?`${this.addPixelUnit(l.border_width||n.border_width)||"1px"} ${l.border_style||n.border_style} ${l.border_color||n.border_color||"var(--divider-color, #cccccc)"}`:"none",borderRadius:this.addPixelUnit(l.border_radius||n.border_radius)||"0",position:l.position||n.position||"relative",top:l.top||n.top||"auto",bottom:l.bottom||n.bottom||"auto",left:l.left||n.left||"auto",right:l.right||n.right||"auto",zIndex:l.z_index||n.z_index||"auto",width:l.width||n.width||("horizontal"===a.orientation?this.parseSizeValue(a.width_percent,100,0,!0):"100%"),height:l.height||n.height||("vertical"===a.orientation?this.parseSizeValue(a.height_px,0,300,!1):"auto"),maxWidth:l.max_width||n.max_width||"100%",maxHeight:l.max_height||n.max_height||"none",minWidth:h?"10%":l.min_width||n.min_width||"auto",minHeight:l.min_height||n.min_height||("vertical"===a.orientation?(()=>{const t=this.parseSizeValue(a.height_px,0,300,!1),e=this.extractNumericValue(a.height_px);return t.endsWith("%")?"10px":`${Math.min(e||300,50)}px`})():"10px"),overflow:l.overflow||n.overflow||"visible",clipPath:l.clip_path||n.clip_path||"none",backdropFilter:l.backdrop_filter||n.backdrop_filter||"none",boxShadow:l.box_shadow_h&&l.box_shadow_v?`${l.box_shadow_h||"0"} ${l.box_shadow_v||"0"} ${l.box_shadow_blur||"0"} ${l.box_shadow_spread||"0"} ${l.box_shadow_color||"rgba(0,0,0,0.1)"}`:n.box_shadow_h&&n.box_shadow_v?`${n.box_shadow_h||"0"} ${n.box_shadow_v||"0"} ${n.box_shadow_blur||"0"} ${n.box_shadow_spread||"0"} ${n.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",boxSizing:"border-box"},h?{flexGrow:"1",flexShrink:"1",flexBasis:"auto"}:{});if("blank"===a.separator_style){const t="vertical"===a.orientation;return r.qy`
        <div
          class="separator-module-container"
          data-layout-grow="${h?"true":"false"}"
          style="${this.styleObjectToCss(g)}"
        >
          <div
            class="separator-preview blank-separator"
            style="${t?`width: ${a.thickness||1}px; height: ${this.parseSizeValue(a.height_px,0,300,!1)}; display: block; margin: 0 auto;`:`height: ${a.thickness||1}px; width: ${this.parseSizeValue(a.width_percent,100,0,!0)};`}"
          ></div>
        </div>
      `}const b=this.getSeparatorStyles(a);let u=null,x=null,_=!1,m=0,v=0;const f=this.getHoverEffectClass(t),$=this.buildStyleString(this.buildDesignStyles(t,e));return this.wrapWithAnimation(r.qy`
      <div
        class="separator-module-container ${f}"
        data-layout-grow="${h?"true":"false"}"
        style="${$}; ${this.styleObjectToCss(g)}; cursor: ${a.tap_action&&"nothing"!==a.tap_action.action||a.hold_action&&"nothing"!==a.hold_action.action||a.double_tap_action&&"nothing"!==a.double_tap_action.action?"pointer":"default"};"
        @pointerdown=${t=>{t.preventDefault(),t.stopPropagation(),_=!1,x=setTimeout(()=>{_=!0,a.hold_action&&"nothing"!==a.hold_action.action&&s.K.handleAction(a.hold_action,e,t.target,i,a.entity,a)},500)}}
        @pointerup=${t=>{if(t.preventDefault(),t.stopPropagation(),x&&(clearTimeout(x),x=null),_)return void(_=!1);const r=Date.now();r-v<300&&1===m?(u&&(clearTimeout(u),u=null),m=0,a.double_tap_action&&"nothing"!==a.double_tap_action.action&&s.K.handleAction(a.double_tap_action,e,t.target,i,a.entity,a)):(m=1,v=r,u=setTimeout(()=>{m=0,a.tap_action&&"nothing"===a.tap_action.action||s.K.handleAction(a.tap_action||{action:"default"},e,t.target,i,a.entity,a)},300))}}
      >
        <div
          class="separator-preview ${"vertical"===a.orientation?"vertical":""}"
          style="width: 100%; text-align: left;"
        >
          ${a.show_title&&a.title?r.qy`
                <div
                  class="separator-with-title ${"vertical"===a.orientation?"vertical":""}"
                  style="${this.getTitleContainerStyles(a.design||{},"vertical"===a.orientation)}"
                >
                  <div
                    class="separator-line-left"
                    style="${this.getSeparatorLineStyles(a,"left")}"
                  ></div>
                  <div
                    class="separator-title ${"vertical"===a.orientation?"vertical":""}"
                    style="${this.getTitleStyles(a,a.design||{})}"
                  >
                    ${a.title}
                  </div>
                  <div
                    class="separator-line-right"
                    style="${this.getSeparatorLineStyles(a,"right")}"
                  ></div>
                </div>
              `:r.qy` <div class="separator-line" style="${b}"></div> `}
        </div>
      </div>
    `,t,e)}renderLogicTab(t,e,i,r){return n.X.render(t,e,t=>r(t))}validate(t){const e=t,i=[...super.validate(t).errors],r="vertical"===e.orientation;if("blank"!==e.separator_style)e.thickness&&(e.thickness<1||e.thickness>50)&&i.push("Thickness must be between 1 and 50 pixels");else if(e.thickness&&(e.thickness<1||e.thickness>300)){const t=r?"width":"height";i.push(`Spacer ${t} must be between 1 and 300 pixels`)}if(r){const t=this.extractNumericValue(e.height_px);t>0&&(t<0||t>1e3)&&i.push("Height must be between 0 and 1000 (pixels or percentage)")}else{const t=this.extractNumericValue(e.width_percent);t>0&&("string"==typeof e.width_percent&&e.width_percent.endsWith("%")?(t<1||t>100)&&i.push("Width percentage must be between 1% and 100%"):"number"==typeof e.width_percent&&(t<1||t>100)&&i.push("Width must be between 1 and 100 percent"),t<0&&i.push("Width must be a positive value"))}return!e.show_title||e.title&&""!==e.title.trim()||i.push("Title text is required when show title is enabled"),r&&e.show_title&&e.title&&e.title.length>20&&i.push("Title text should be shorter for vertical separators (max 20 characters recommended)"),{valid:0===i.length,errors:i}}getStyles(){return`\n      .separator-preview {\n        min-height: 24px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n      }\n      \n      .separator-preview.vertical {\n        min-width: 1px;\n        min-height: 50px;\n        height: 100%;\n        align-items: stretch;\n        justify-content: center;\n      }\n      \n      .blank-separator {\n        background: transparent;\n        display: block;\n        min-height: 0;\n      }\n      \n      .separator-with-title {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n      }\n      \n      .separator-with-title.vertical {\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        width: auto;\n      }\n      \n      .separator-title {\n        margin: 0;\n        line-height: 1.2;\n        background: var(--card-background-color);\n        padding: 0 8px;\n        position: relative;\n        z-index: 1;\n        white-space: nowrap;\n      }\n      \n      .separator-title.vertical {\n        writing-mode: vertical-rl;\n        text-orientation: mixed;\n        padding: 8px 0;\n        white-space: normal;\n      }\n      \n      .separator-line,\n      .separator-line-left,\n      .separator-line-right {\n        display: block;\n      }\n      \n      .separator-line-left,\n      .separator-line-right {\n        flex: 1;\n      }\n      \n      .separator-line {\n        min-height: 1px;\n        min-width: 1px;\n      }\n      \n      \n      /* Format button styles */\n      .format-buttons {\n        display: flex;\n        gap: 8px;\n        flex-wrap: wrap;\n      }\n      \n      .format-btn {\n        padding: 8px;\n        border: 1px solid var(--divider-color, #cccccc);\n        border-radius: 4px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-width: 36px;\n        min-height: 36px;\n      }\n      \n      .format-btn:hover {\n        transform: translateY(-1px);\n        box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n      }\n      \n      .format-btn ha-icon {\n        font-size: 16px;\n      }\n      \n      /* Settings section styling */\n      .settings-section {\n        background: var(--secondary-background-color);\n        border-radius: 8px;\n        padding: 16px;\n        margin-bottom: 32px;\n      }\n      \n      .section-title {\n        font-size: 18px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: var(--primary-color);\n        margin-bottom: 16px;\n        padding-bottom: 0;\n        border-bottom: none;\n        letter-spacing: 0.5px;\n      }\n      \n      .field-title {\n        font-size: 16px;\n        font-weight: 600;\n        margin-bottom: 4px;\n      }\n      \n      .field-description {\n        font-size: 13px;\n        font-weight: 400;\n        margin-bottom: 12px;\n        color: var(--secondary-text-color);\n      }\n      \n      .field-group {\n        margin-bottom: 16px;\n      }\n\n      ${o.m.getSliderStyles()}\n    `}parseSizeValue(t,e,i,r){if(null==t)return r?`${e}%`:`${i}px`;if("number"==typeof t)return r?`${t}%`:`${t}px`;const o=String(t).trim();if(""===o)return r?`${e}%`:`${i}px`;if(o.endsWith("%")||o.endsWith("px"))return o;const a=parseFloat(o);return isNaN(a)?r?`${e}%`:`${i}px`:r?`${a}%`:`${a}px`}extractNumericValue(t){if("number"==typeof t)return t;if("string"==typeof t){const e=t.match(/^([\d.]+)/);return e?parseFloat(e[1]):0}return 0}getSeparatorStyles(t){const e="vertical"===t.orientation,i={},r=t=>t&&"var(--divider-color)"!==t&&"var(--divider-color, #cccccc)"!==t?t:"#cccccc";switch(e?(i.width=`${t.thickness||1}px`,i.height=this.parseSizeValue(t.height_px,0,300,!1),i.margin="0 auto",i.display="block"):(i.width="100%",i.height=`${t.thickness||1}px`,i.margin="0"),t.separator_style||"line"){case"line":i.backgroundColor=r(t.color);break;case"double_line":e?(i.borderLeft=`${t.thickness||1}px solid ${r(t.color)}`,i.borderRight=`${t.thickness||1}px solid ${r(t.color)}`,i.width=3*(t.thickness||1)+"px"):(i.borderTop=`${t.thickness||1}px solid ${r(t.color)}`,i.borderBottom=`${t.thickness||1}px solid ${r(t.color)}`,i.height=3*(t.thickness||1)+"px");break;case"dotted":e?(i.borderLeft=`${t.thickness||1}px dotted ${r(t.color)}`,i.width="0"):(i.borderTop=`${t.thickness||1}px dotted ${r(t.color)}`,i.height="0");break;case"double_dotted":e?(i.borderLeft=`${t.thickness||1}px dotted ${r(t.color)}`,i.borderRight=`${t.thickness||1}px dotted ${r(t.color)}`,i.width=3*(t.thickness||1)+"px"):(i.borderTop=`${t.thickness||1}px dotted ${r(t.color)}`,i.borderBottom=`${t.thickness||1}px dotted ${r(t.color)}`,i.height=3*(t.thickness||1)+"px");break;case"shadow":{const o=t.thickness||1,a=this._colorWithAlpha(r(t.color)||"#000000",.35);if(e){const t=Math.max(8*o,14);i.height="calc(100% + (var(--ha-card-padding, 16px) * 2))",i.margin="calc(var(--ha-card-padding, 16px) * -1) 0",i.width=`${t}px`,i.background=`linear-gradient(to right, ${a} 0%, rgba(0,0,0,0) 100%)`}else{const t=Math.max(8*o,14);i.width="calc(100% + (var(--ha-card-padding, 16px) * 2))",i.margin="0 calc(var(--ha-card-padding, 16px) * -1)",i.height=`${t}px`,i.background=`linear-gradient(to bottom, ${a} 0%, rgba(0,0,0,0) 100%)`}break}}return Object.entries(i).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}getSeparatorLineStyles(t,e){const i="vertical"===t.orientation,r={},o=t=>t&&"var(--divider-color)"!==t&&"var(--divider-color, #cccccc)"!==t?t:"#cccccc";i?(r.flex="1",r.width=`${t.thickness||1}px`,r.margin="left"===e?"0 0 8px 0":"8px 0 0 0"):(r.flex="1",r.height=`${t.thickness||1}px`,r.margin="left"===e?"0 8px 0 0":"0 0 0 8px");const a=(t.design||{}).text_align;switch(a&&"inherit"!==a&&(r.flex=i?"top"===a?"left"===e?"0 0 12px":"1":"bottom"===a&&"right"===e?"0 0 12px":"1":"left"===a?"left"===e?"0 0 12px":"1":"right"===a&&"right"===e?"0 0 12px":"1"),t.separator_style||"line"){case"line":r.backgroundColor=o(t.color);break;case"double_line":i?(r.borderLeft=`${t.thickness||1}px solid ${o(t.color)}`,r.borderRight=`${t.thickness||1}px solid ${o(t.color)}`,r.width=3*(t.thickness||1)+"px"):(r.borderTop=`${t.thickness||1}px solid ${o(t.color)}`,r.borderBottom=`${t.thickness||1}px solid ${o(t.color)}`,r.height=3*(t.thickness||1)+"px");break;case"dotted":i?(r.borderLeft=`${t.thickness||1}px dotted ${o(t.color)}`,r.width="0"):(r.borderTop=`${t.thickness||1}px dotted ${o(t.color)}`,r.height="0");break;case"double_dotted":i?(r.borderLeft=`${t.thickness||1}px dotted ${o(t.color)}`,r.borderRight=`${t.thickness||1}px dotted ${o(t.color)}`,r.width=3*(t.thickness||1)+"px"):(r.borderTop=`${t.thickness||1}px dotted ${o(t.color)}`,r.borderBottom=`${t.thickness||1}px dotted ${o(t.color)}`,r.height=3*(t.thickness||1)+"px");break;case"shadow":{const e=t.thickness||1,a=this._colorWithAlpha(o(t.color)||"#000000",.35),n=this._colorWithAlpha(o(t.color)||"#000000",.22),s=this._colorWithAlpha(o(t.color)||"#000000",.25);if(i){const t=Math.max(8*e,14);r.width=`${t}px`,r.margin="0",r.background=`\n            linear-gradient(to right, ${s}, rgba(0,0,0,0) 66%) left/2px 100% no-repeat,\n            radial-gradient(ellipse at center, ${a} 0%, ${n} 55%, rgba(0,0,0,0) 80%) right/100% 120% no-repeat\n          `}else{const t=Math.max(8*e,14);r.height=`${t}px`,r.margin="0",r.background=`\n            linear-gradient(to bottom, ${s}, rgba(0,0,0,0) 66%) top/100% 2px no-repeat,\n            radial-gradient(ellipse at center, ${a} 0%, ${n} 55%, rgba(0,0,0,0) 80%) bottom/120% 100% no-repeat\n          `}break}}return Object.entries(r).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}getTitleContainerStyles(t={},e=!1){const i=(null==t?void 0:t.text_align)&&"inherit"!==t.text_align?t.text_align:"center",r={position:"relative",display:"flex",width:"100%",height:"100%"};if(e){r.flexDirection="column",r.alignItems="center";const t="top"===i?"flex-start":"bottom"===i?"flex-end":"center";r.justifyContent=t}else{r.flexDirection="row",r.alignItems="center";const t="left"===i?"flex-start":"right"===i?"flex-end":"center";r.justifyContent=t}return Object.entries(r).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}getTitleStyles(t,e={}){const i="vertical"===t.orientation,r={fontSize:void 0!==e.font_size&&null!==e.font_size?"number"==typeof e.font_size?`${e.font_size}px`:String(e.font_size):t.title_size?`${t.title_size}px`:"clamp(12px, 3vw, 14px)",color:e.color||t.title_color||"var(--secondary-text-color)",fontWeight:e.font_weight||(t.title_bold?"bold":"normal"),fontStyle:e.font_style||(t.title_italic?"italic":"normal"),textTransform:e.text_transform||(t.title_uppercase?"uppercase":"none"),letterSpacing:e.letter_spacing||void 0,lineHeight:e.line_height||void 0,textAlign:e.text_align||void 0,margin:"0",padding:i?"8px 0":"0 8px",backgroundColor:"transparent",position:"relative",zIndex:"1",writingMode:i?"vertical-rl":"horizontal-tb",textOrientation:"mixed"},o=[];return t.title_strikethrough&&o.push("line-through"),t.title_underline&&o.push("underline"),r.textDecoration=o.length>0?o.join(" "):"none",e.text_shadow_h&&e.text_shadow_v&&(r.textShadow=`${e.text_shadow_h||"0"} ${e.text_shadow_v||"0"} ${e.text_shadow_blur||"0"} ${e.text_shadow_color||"rgba(0,0,0,0.25)"}`),Object.entries(r).filter(([t,e])=>null!=e&&""!==e).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}camelToKebab(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}_colorWithAlpha(t,e){if(!t)return`rgba(0,0,0,${e})`;if(t.startsWith("rgba(")){const i=t.replace("rgba(","").replace(")","").split(",").map(t=>t.trim()),[r,o,a]=i.map((t,e)=>e<3?Number(t):t);return`rgba(${r||0}, ${o||0}, ${a||0}, ${e})`}if(t.startsWith("rgb(")){const i=t.replace("rgb(","").replace(")","").split(",").map(t=>Number(t.trim())),[r,o,a]=i;return`rgba(${r||0}, ${o||0}, ${a||0}, ${e})`}if(t.startsWith("#")){const i=t.replace("#",""),r=parseInt(3===i.length?i.split("").map(t=>t+t).join(""):i,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${255&r}, ${e})`}return`rgba(0,0,0,${e})`}getBackgroundImageCSS(t,e){var i,r;if(!t.background_image_type||"none"===t.background_image_type)return"none";switch(t.background_image_type){case"upload":case"url":if(t.background_image)return`url("${t.background_image}")`;break;case"entity":if(t.background_image_entity&&(null==e?void 0:e.states[t.background_image_entity])){const o=e.states[t.background_image_entity];let a="";if((null===(i=o.attributes)||void 0===i?void 0:i.entity_picture)?a=o.attributes.entity_picture:(null===(r=o.attributes)||void 0===r?void 0:r.image)?a=o.attributes.image:o.state&&"string"==typeof o.state&&(o.state.startsWith("/")||o.state.startsWith("http"))&&(a=o.state),a)return`url("${a}")`}}return"none"}styleObjectToCss(t){return Object.entries(t).filter(([,t])=>null!=t&&""!==t).map(([t,e])=>`${t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}: ${e}`).join("; ")}addPixelUnit(t){return t?/^\d+$/.test(t)?`${t}px`:/^[\d\s]+$/.test(t)?t.split(" ").map(t=>t.trim()?`${t}px`:t).join(" "):t:t}}}}]);
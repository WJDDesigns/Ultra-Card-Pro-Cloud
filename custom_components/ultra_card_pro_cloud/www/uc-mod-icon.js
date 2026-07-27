"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[8933],{6323(t,e,i){i.d(e,{UltraIconModule:()=>f});var n=i(5183),o=i(9906),a=i(3721),r=i(9760),c=i(5147),s=i(5320),l=i(571),d=i(9957),_=i(7907),v=i(5096),u=i(8938),p=i(6477),m=(i(7921),i(9442),i(9327)),g=i(5121),h=i(5155),b=i(6045);class f extends a.m{constructor(){super(...arguments),this.metadata={type:"icon",title:"Icons",description:"Interactive icon buttons",author:"WJD Designs",version:"1.0.0",icon:"mdi:circle",category:"interactive",tags:["icon","button","interactive","control"]},this._previewCollapsed=!1,this._lastUnifiedIconDisplayColorByKey=new Map,this._attributeCache=new Map,this._processingAttributes=new Set}_injectGlobalStyles(){if(!f._globalStylesInjected&&"undefined"!=typeof document){const t="uvc-icon-module-styles";if(!document.getElementById(t)){const e=document.createElement("style");e.id=t,e.textContent=f._ANIMATION_KEYFRAMES,document.head.appendChild(e)}f._globalStylesInjected=!0}}_hashString(t){let e=0;if(0===t.length)return e.toString();for(let i=0;i<t.length;i++)e=(e<<5)-e+t.charCodeAt(i),e&=e;return Math.abs(e).toString(36)}_buildUnifiedIconTemplateKey(t,e,i,n,o,a=""){const r=(null==i?void 0:i.__ucInstanceId)&&""!==String(i.__ucInstanceId).trim()?String(i.__ucInstanceId):"card_unknown",c=n&&""!==n.trim()?n:"module_unknown",s=t.id&&""!==String(t.id).trim()?String(t.id):void 0!==o?`idx_${o.toString()}`:`hash_${this._hashString(`${t.entity||""}|${t.name||""}|${t.icon_inactive||""}|${t.icon_active||""}`)}`,l=this._hashString(e);return`unified_${r}_${c}_${t.entity}_${s}_${l}${a}`}_formValue(t,e){var i,n,o,a;return null!==(o=null===(n=null===(i=t.detail)||void 0===i?void 0:i.value)||void 0===n?void 0:n[e])&&void 0!==o?o:null===(a=t.detail)||void 0===a?void 0:a[e]}_highlightJinja2(t){if(!t)return"";let e=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return e=e.replace(/(\{\{[\s\S]*?\}\})/g,'<span style="color: #569cd6;">$1</span>'),e=e.replace(/(\{%[\s\S]*?%\})/g,'<span style="color: #c586c0;">$1</span>'),e=e.replace(/((['"`])[^'"`]*?\2)/g,'<span style="color: #ce9178;">$1</span>'),["if","else","elif","endif","for","endfor","in","not","and","or","is","true","false","none","True","False","None"].forEach(t=>{const i=new RegExp(`\\b(${t})\\b`,"g");e=e.replace(i,'<span style="color: #569cd6;">$1</span>')}),e=e.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,'<span style="color: #dcdcaa;">$1</span>('),e=e.replace(/\|\s*([a-zA-Z_][a-zA-Z0-9_]*)/g,'| <span style="color: #dcdcaa;">$1</span>'),e=e.replace(/\b(\d+(?:\.\d+)?)\b/g,'<span style="color: #b5cea8;">$1</span>'),e=e.replace(/(==|!=|<=|>=|<|>|\+|-|\*|\/|%)/g,'<span style="color: #d4d4d4;">$1</span>'),e}createDefault(t,e){return{id:t||this.generateId("icon"),type:"icon",icons:[{id:this.generateId("icon-item"),icon_mode:"entity",entity:"weather.forecast_home",name:"",icon_inactive:"mdi:weather-partly-cloudy",icon_active:"mdi:weather-partly-cloudy",inactive_state:"",active_state:"",inactive_attribute:"",active_attribute:"",display_attribute:"",custom_inactive_state_text:"",custom_active_state_text:"",custom_inactive_name_text:"",custom_active_name_text:"",use_entity_color_for_icon:!1,use_state_color_for_inactive_icon:!1,use_state_color_for_active_icon:!1,color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",inactive_icon_color:"var(--secondary-text-color)",active_icon_color:"var(--primary-color)",inactive_name_color:"var(--primary-text-color)",active_name_color:"var(--primary-text-color)",inactive_state_color:"var(--secondary-text-color)",active_state_color:"var(--secondary-text-color)",show_name_when_inactive:!0,show_state_when_inactive:!0,show_icon_when_inactive:!0,show_name_when_active:!0,show_state_when_active:!0,show_icon_when_active:!0,show_entity_picture:!0,show_state:!0,show_name:!0,show_units:!0,enable_hover_effect:!1,icon_size:26,text_size:14,name_icon_gap:8,name_state_gap:2,icon_state_gap:4,active_icon_size:26,inactive_icon_size:26,active_text_size:14,inactive_text_size:14,state_size:14,active_state_size:14,inactive_state_size:14,icon_size_locked:!0,text_size_locked:!0,state_size_locked:!0,active_icon_locked:!0,active_icon_color_locked:!1,active_icon_background_locked:!0,active_icon_background_color_locked:!0,active_name_locked:!0,active_name_color_locked:!0,active_state_locked:!1,active_state_color_locked:!0,icon_background:"none",use_entity_color_for_icon_background:!1,icon_background_color:"transparent",icon_background_padding:8,inactive_icon_background_padding:8,active_icon_background_padding:8,active_icon_background_padding_locked:!0,inactive_icon_animation:"none",active_icon_animation:"none",vertical_alignment:"center",container_width:void 0,container_background_shape:"none",container_background_color:"#808080",tap_action:void 0,hold_action:void 0,double_tap_action:void 0,click_action:"toggle",double_click_action:"none",hold_action_legacy:"none",navigation_path:"",url:"",service:"",service_data:{},unified_template_mode:!1,unified_template:"",ignore_entity_state_config:!1}],columns:3,gap:16,allow_wrap:!0,text_size:16,icon_size:24,tap_action:void 0,hold_action:void 0,double_tap_action:void 0,display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,o){var a,r;const c=t,s=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en";return n.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings icon-module-general-settings">
        <!-- Module-Wide Size Controls -->
        <div class="settings-section" style="margin-bottom: 32px;">
          <div class="section-title">SIZE CONTROLS</div>
          <div class="section-description" style="margin-bottom: 16px;">
            Control the default text and icon sizes for this module. Design tab overrides these
            settings.
          </div>

          <!-- Text Size Control -->
          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField(`Text Size (${c.text_size||16}px)`,"Default size for all text elements (name, state)",c.text_size||16,16,10,48,1,t=>{const e=c.icons.map(e=>Object.assign(Object.assign({},e),{text_size:t,active_text_size:t,inactive_text_size:t}));o({text_size:t,icons:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Icon Size Control -->
          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField(`Icon Size (${c.icon_size||24}px)`,"Default size for all icons",c.icon_size||24,24,12,64,1,t=>{const e=c.icons.map(e=>Object.assign(Object.assign({},e),{icon_size:t,active_icon_size:t,inactive_icon_size:t}));o({icon_size:t,icons:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <!-- Layout Controls -->
        <div class="settings-section" style="margin-bottom: 32px;">
          <div class="section-title">${(0,v.kg)("editor.icon.layout.title",s,"LAYOUT")}</div>
          <div class="section-description" style="margin-bottom: 16px;">
            ${(0,v.kg)("editor.icon.layout.desc",s,"Control how icons are arranged in the grid.")}
          </div>

          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,v.kg)("editor.icon.layout.columns",s,"Columns"),(0,v.kg)("editor.icon.layout.columns_desc",s,"Number of icons per row"),c.columns||3,3,1,6,1,t=>{o({columns:t})},"")}
          </div>

          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,v.kg)("editor.icon.layout.gap",s,"Gap"),(0,v.kg)("editor.icon.layout.gap_desc",s,"Spacing between icons"),null!==(r=c.gap)&&void 0!==r?r:16,16,0,50,1,t=>{o({gap:t})})}
          </div>

          ${this.renderFieldSection((0,v.kg)("editor.icon.layout.alignment",s,"Alignment"),(0,v.kg)("editor.icon.layout.alignment_desc",s,"Horizontal alignment of the icon grid"),e,{alignment:c.alignment||"center"},[this.selectField("alignment",[{value:"left",label:(0,v.kg)("editor.icon.layout.align_left",s,"Left")},{value:"center",label:(0,v.kg)("editor.icon.layout.align_center",s,"Center")},{value:"right",label:(0,v.kg)("editor.icon.layout.align_right",s,"Right")},{value:"space-between",label:(0,v.kg)("editor.icon.layout.align_space_between",s,"Space Between")},{value:"space-around",label:(0,v.kg)("editor.icon.layout.align_space_around",s,"Space Around")}])],t=>{const e=t.detail.value.alignment;e&&e!==(c.alignment||"center")&&(o({alignment:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${this.renderFieldSection((0,v.kg)("editor.icon.layout.allow_wrap",s,"Allow Wrapping"),(0,v.kg)("editor.icon.layout.allow_wrap_desc",s,"Allow icons to wrap onto new rows when they exceed the column count"),e,{allow_wrap:!1!==c.allow_wrap},[this.booleanField("allow_wrap")],t=>{o({allow_wrap:t.detail.value.allow_wrap}),this.triggerPreviewUpdate()})}
        </div>

        ${c.icons.map((t,a)=>{var r,l;return n.qy`
            <div class="icon-settings-container">
              <!-- Icon Row Header (number + remove) -->
              <div
                class="icon-row-header"
                style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;"
              >
                <div style="font-size: 14px; font-weight: 600; color: var(--primary-text-color);">
                  ${(0,v.kg)("editor.icon.icon_row_title",s,"Icon {number}").replace("{number}",String(a+1))}
                </div>
                <button
                  class="remove-icon-btn"
                  ?disabled=${c.icons.length<=1}
                  style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; border: 1px solid var(--divider-color); border-radius: 6px; background: transparent; color: var(--error-color); cursor: pointer;"
                  title="${(0,v.kg)("editor.icon.remove_icon",s,"Remove Icon")}"
                  @click=${()=>this._removeIcon(c,a,o)}
                >
                  <ha-icon icon="mdi:delete" style="--mdc-icon-size: 18px;"></ha-icon>
                </button>
              </div>

              <!-- Icon Mode Selector -->
              <div class="settings-section" style="margin-bottom: 24px;">
                <div class="section-title">
                  ${(0,v.kg)("editor.icon.icon_mode.title",s,"ICON MODE")}
                </div>
                <div
                  class="section-description"
                  style="margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;"
                >
                  ${(0,v.kg)("editor.icon.icon_mode.desc",s,"Choose between an entity-connected icon or a static standalone icon")}
                </div>
                <div style="display: flex; gap: 8px;">
                  <button
                    style="
                      flex: 1;
                      padding: 12px 16px;
                      border: 2px solid ${"entity"===(t.icon_mode||"entity")?"var(--primary-color)":"var(--divider-color)"};
                      border-radius: 8px;
                      background: ${"entity"===(t.icon_mode||"entity")?"var(--primary-color)":"transparent"};
                      color: ${"entity"===(t.icon_mode||"entity")?"var(--text-primary-color, #fff)":"var(--primary-text-color)"};
                      font-weight: 500;
                      cursor: pointer;
                      transition: all 0.2s ease;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 8px;
                    "
                    @click=${()=>{this._updateIcon(c,a,{icon_mode:"entity"},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  >
                    <ha-icon icon="mdi:link-variant" style="--mdc-icon-size: 20px;"></ha-icon>
                    ${(0,v.kg)("editor.icon.icon_mode.entity",s,"Entity-Based")}
                  </button>
                  <button
                    style="
                      flex: 1;
                      padding: 12px 16px;
                      border: 2px solid ${"static"===t.icon_mode?"var(--primary-color)":"var(--divider-color)"};
                      border-radius: 8px;
                      background: ${"static"===t.icon_mode?"var(--primary-color)":"transparent"};
                      color: ${"static"===t.icon_mode?"var(--text-primary-color, #fff)":"var(--primary-text-color)"};
                      font-weight: 500;
                      cursor: pointer;
                      transition: all 0.2s ease;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 8px;
                    "
                    @click=${()=>{this._updateIcon(c,a,{icon_mode:"static"},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  >
                    <ha-icon icon="mdi:image-outline" style="--mdc-icon-size: 20px;"></ha-icon>
                    ${(0,v.kg)("editor.icon.icon_mode.static",s,"Static")}
                  </button>
                </div>
              </div>

              ${"static"===t.icon_mode?n.qy`
                    <!-- Static Icon Configuration -->
                    ${this._renderStaticIconSettings(t,a,c,e,s,o)}
                  `:n.qy`
                    <!-- Entity Configuration (single settings-section box with title,
                         entity picker, and active/inactive state fields all inside) -->
                    <div
                      class="settings-section"
                      style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
                    >
                      <div
                        class="section-title"
                        style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
                      >
                        ${(0,v.kg)("editor.icon.entity_config.title",s,"Entity Configuration")}
                      </div>
                      <div
                        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                      >
                        ${(0,v.kg)("editor.icon.entity_config.desc",s,"Configure the entity and active/inactive states")}
                      </div>
                      ${this.renderEntityPickerWithVariables(e,i,"entity",t.entity||"",n=>this._handleEntitySelection(t,a,c,n,e,o,i),void 0,(0,v.kg)("editor.icon.entity",s,"Entity"))}
                      ${this.renderFieldSection((0,v.kg)("editor.icon.inactive_state",s,"Inactive State"),(0,v.kg)("editor.icon.inactive_state_desc",s,'State value considered "inactive" (leave blank to use actual entity state)'),e,{inactive_state:t.inactive_state||""},[this.textField("inactive_state")],t=>this._updateIcon(c,a,{inactive_state:t.detail.value.inactive_state},o))}
                      ${this.renderFieldSection((0,v.kg)("editor.icon.active_state",s,"Active State"),(0,v.kg)("editor.icon.active_state_desc",s,'State value considered "active" (leave blank to use actual entity state)'),e,{active_state:t.active_state||""},[this.textField("active_state")],t=>this._updateIcon(c,a,{active_state:t.detail.value.active_state},o))}
                    </div>

                    <!-- Attributes Section -->
                    <div class="settings-section" style="margin-bottom: 24px;">
                      <div class="section-title">
                        ${(0,v.kg)("editor.icon.attributes_section.title",s,"ATTRIBUTES")}
                      </div>
                      <div
                        class="section-description"
                        style="margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;"
                      >
                        ${(0,v.kg)("editor.icon.attributes_section.desc",s,"Select entity attributes to use instead of the main entity state for determining active/inactive conditions")}
                      </div>

                      <!-- Display Attribute (simple override) -->
                      <div class="field-container" style="margin-bottom: 16px;">
                        <div class="field-title">
                          ${(0,v.kg)("editor.icon.display_attribute",s,"Display Attribute")}
                        </div>
                        <div class="field-description">
                          ${(0,v.kg)("editor.icon.display_attribute_desc",s,"Select an attribute to display instead of the entity state. For separate active/inactive attributes, use the options below.")}
                        </div>
                        ${this.renderUcForm(e,{display_attribute:t.display_attribute||""},[this.selectField("display_attribute",this._getEntityAttributes(t.entity,e,i))],t=>{const e=t.detail.value.display_attribute;e!==(c.icons[a].display_attribute||"")&&(this._updateIcon(c,a,{display_attribute:e},o),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                      </div>

                      <!-- Inactive Attribute -->
                      <div class="field-container" style="margin-bottom: 16px;">
                        <div class="field-title">
                          ${(0,v.kg)("editor.icon.inactive_attribute",s,"Inactive Attribute")}
                        </div>
                        <div class="field-description">
                          ${(0,v.kg)("editor.icon.inactive_attribute_desc",s,'Entity attribute to check for inactive state (e.g., "condition" for weather)')}
                        </div>
                        ${this.renderUcForm(e,{inactive_attribute:t.inactive_attribute||""},[this.selectField("inactive_attribute",this._getEntityAttributes(t.entity,e,i))],t=>{const e=t.detail.value.inactive_attribute;e!==(c.icons[a].inactive_attribute||"")&&(this._updateIcon(c,a,{inactive_attribute:e},o),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                      </div>

                      <!-- Active Attribute -->
                      <div class="field-container">
                        <div class="field-title">
                          ${(0,v.kg)("editor.icon.active_attribute",s,"Active Attribute")}
                        </div>
                        <div class="field-description">
                          ${(0,v.kg)("editor.icon.active_attribute_desc",s,'Entity attribute to check for active state (e.g., "condition" for weather)')}
                        </div>
                        ${this.renderUcForm(e,{active_attribute:t.active_attribute||""},[this.selectField("active_attribute",this._getEntityAttributes(t.entity,e,i))],t=>{const e=t.detail.value.active_attribute;e!==(c.icons[a].active_attribute||"")&&(this._updateIcon(c,a,{active_attribute:e},o),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                      </div>
                    </div>

                    <!-- Icon Section -->
                    <div class="settings-section" style="margin-bottom: 24px;">
                      <div class="section-title">
                        <span>${(0,v.kg)("editor.icon.icon_section.title",s,"Icon")}</span>
                      </div>
                      ${this.renderFieldSection((0,v.kg)("editor.icon.icon_section.show_icon",s,"Show Icon"),"",e,{show_icon_enabled:!1!==t.show_icon_when_active&&!1!==t.show_icon_when_inactive},[this.booleanField("show_icon_enabled")],t=>{const e=t.detail.value.show_icon_enabled;this._updateIcon(c,a,{show_icon_when_active:e,show_icon_when_inactive:e},o)})}
                      ${this.renderFieldSection((0,v.kg)("editor.icon.icon_section.show_entity_picture",s,"Show Entity Picture"),(0,v.kg)("editor.icon.icon_section.show_entity_picture_desc",s,"When enabled, entity_picture replaces the configured icon when available."),e,{show_entity_picture:!1!==t.show_entity_picture},[this.booleanField("show_entity_picture")],t=>{this._updateIcon(c,a,{show_entity_picture:t.detail.value.show_entity_picture},o)})}

                      ${!1!==t.show_icon_when_active||!1!==t.show_icon_when_inactive?n.qy`
                            <!-- Inactive Icon Section -->
                            <div style="margin-top: 16px;">
                              <details
                                style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color);"
                                @toggle=${t=>{const e=t.target,i=e.querySelector("ha-icon");i&&(i.style.transform=e.open?"rotate(90deg)":"rotate(0deg)")}}
                              >
                                <summary
                                  style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                >
                                  <ha-icon
                                    icon="mdi:chevron-right"
                                    style="transition: transform 0.2s;"
                                  ></ha-icon>
                                  ${(0,v.kg)("editor.icon.inactive_icon",s,"Inactive Icon")}
                                </summary>
                                <div style="padding: 16px;">
                                  ${this.renderSettingsSection((0,v.kg)("editor.icon.inactive_icon_config",s,"Inactive Icon Configuration"),(0,v.kg)("editor.icon.inactive_icon_config_desc",s,"Configure the inactive icon settings"),[{title:(0,v.kg)("editor.icon.inactive_icon",s,"Inactive Icon"),description:(0,v.kg)("editor.icon.inactive_icon_desc",s,"Icon to show when inactive"),hass:e,data:{icon_inactive:t.icon_inactive||""},schema:[this.iconField("icon_inactive")],onChange:t=>this._updateIconWithLockSync(c,a,"icon_inactive",t.detail.value.icon_inactive,o)}])}

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_icon_color",s,"Inactive Icon Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.icon_color_inactive",s,"Color when inactive")}
                                    </div>
                                    <ultra-color-picker
                                      .value=${t.inactive_icon_color||"var(--secondary-text-color)"}
                                      @value-changed=${t=>this._debouncedUpdateIconWithLockSync(c,a,"inactive_icon_color",t.detail.value,o,50)}
                                    ></ultra-color-picker>
                                  </div>

                                  ${this.renderFieldSection((0,v.kg)("editor.icon.use_state_color_inactive",s,"Use State Color"),(0,v.kg)("editor.icon.use_state_color_inactive_desc",s,"Use the entity state color (RGB attributes) for inactive icon color"),e,{use_state_color_for_inactive_icon:t.use_state_color_for_inactive_icon||!1},[this.booleanField("use_state_color_for_inactive_icon")],t=>this._updateIcon(c,a,{use_state_color_for_inactive_icon:t.detail.value.use_state_color_for_inactive_icon},o))}

                                  ${this.renderSettingsSection((0,v.kg)("editor.icon.background_section.title",s,"Inactive Background"),(0,v.kg)("editor.icon.background_section.desc",s,"Configure the inactive background settings"),[{title:(0,v.kg)("editor.icon.inactive_icon_background",s,"Inactive Background Shape"),description:(0,v.kg)("editor.icon.background_shape_inactive",s,"Background shape when inactive"),hass:e,data:{inactive_icon_background:t.inactive_icon_background||"none"},schema:[this.selectField("inactive_icon_background",[{value:"none",label:"None"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"rounded-square",label:"Rounded Square"}])],onChange:t=>{const e=this._formValue(t,"inactive_icon_background");if(void 0===e)return;const i=String(e);if(i===(c.icons[a].inactive_icon_background||"none"))return;const n={inactive_icon_background:i};i&&"none"!==i&&(n.inactive_icon_background_color="var(--divider-color)"),this._updateIcon(c,a,n,o)}}])}

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_icon_background_color",s,"Inactive Background Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.background_color_inactive",s,"Background color when inactive")}
                                    </div>
                                    <ultra-color-picker
                                      .value=${t.inactive_icon_background_color||"transparent"}
                                      @value-changed=${t=>this._debouncedUpdateIconWithLockSync(c,a,"inactive_icon_background_color",t.detail.value,o,50)}
                                    ></ultra-color-picker>
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_icon_background_padding",s,"Inactive Background Padding")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.background_padding_inactive",s,"Padding between icon and background when inactive")}
                                    </div>
                                    ${this._renderSizeControl(c,a,o,"inactive_icon_background_padding",null!==(r=t.inactive_icon_background_padding)&&void 0!==r?r:8,0,50,8)}
                                  </div>

                                  <div class="field-container">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_icon_size",s,"Inactive Icon Size")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.icon_size_inactive",s,"Icon size when inactive")}
                                    </div>
                                    ${this._renderSizeControl(c,a,o,"inactive_icon_size",t.inactive_icon_size||26,0,200,26)}
                                  </div>
                                </div>
                              </details>
                            </div>

                            <!-- Active Icon Section -->
                            <div style="margin-top: 16px;">
                              <details
                                style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color);"
                                @toggle=${t=>{const e=t.target,i=e.querySelector("ha-icon");i&&(i.style.transform=e.open?"rotate(90deg)":"rotate(0deg)")}}
                              >
                                <summary
                                  style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                >
                                  <ha-icon
                                    icon="mdi:chevron-right"
                                    style="transition: transform 0.2s;"
                                  ></ha-icon>
                                  ${(0,v.kg)("editor.icon.active_icon",s,"Active Icon")}
                                </summary>
                                <div style="padding: 16px;">
                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_icon",s,"Active Icon")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.active_icon_desc",s,"Icon to show when active")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_icon_locked","icon_active","icon_inactive",t.icon_active||t.icon_inactive||"","icon",e)}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_icon_color",s,"Active Icon Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.icon_color_active",s,"Color when active")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_icon_color_locked","active_icon_color","inactive_icon_color",t.active_icon_color||"var(--primary-color)","color",e)}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.use_state_color_active",s,"Use State Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.use_state_color_active_desc",s,"Use the entity state color (RGB attributes) for active icon color")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_state_color_locked","use_state_color_for_active_icon","use_state_color_for_inactive_icon",t.use_state_color_for_active_icon||!1,"toggle",e)}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_icon_background",s,"Active Background Shape")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.background_shape_active",s,"Background shape when active")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_icon_background_locked","active_icon_background","inactive_icon_background",t.active_icon_background||"none","select",e,[{value:"none",label:"None"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"rounded-square",label:"Rounded Square"}])}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_icon_background_color",s,"Active Background Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.background_color_active",s,"Background color when active")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_icon_background_color_locked","active_icon_background_color","inactive_icon_background_color",t.active_icon_background_color||"transparent","color",e)}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_icon_background_padding",s,"Active Background Padding")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.background_padding_active",s,"Padding between icon and background when active")}
                                    </div>
                                    ${this._renderSizeControlWithLock(c,a,o,"active_icon_background_padding_locked","active_icon_background_padding","inactive_icon_background_padding",null!==(l=t.active_icon_background_padding)&&void 0!==l?l:8,0,50,8)}
                                  </div>

                                  <div class="field-container">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_icon_size",s,"Active Icon Size")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.icon_size_active",s,"Icon size when active")}
                                    </div>
                                    ${this._renderSizeControlWithLock(c,a,o,"icon_size","active_icon_size","inactive_icon_size",t.active_icon_size||26,0,200,26)}
                                  </div>
                                </div>
                              </details>
                            </div>
                          `:""}
                    </div>

                    <!-- Name Section -->
                    <div class="settings-section" style="margin-bottom: 24px;">
                      <div class="section-title">
                        <span>${(0,v.kg)("editor.icon.name_section.title",s,"Name")}</span>
                      </div>
                      ${this.renderFieldSection((0,v.kg)("editor.icon.name_section.show_name",s,"Show Name"),"",e,{show_name_enabled:!1!==t.show_name_when_active&&!1!==t.show_name_when_inactive},[this.booleanField("show_name_enabled")],t=>{const e=t.detail.value.show_name_enabled;this._updateIcon(c,a,{show_name_when_active:e,show_name_when_inactive:e},o)})}

                      ${!1!==t.show_name_when_active||!1!==t.show_name_when_inactive?n.qy`
                            <!-- Inactive Name Section -->
                            <div style="margin-top: 16px;">
                              <details
                                style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color);"
                                @toggle=${t=>{const e=t.target,i=e.querySelector("ha-icon");i&&(i.style.transform=e.open?"rotate(90deg)":"rotate(0deg)")}}
                              >
                                <summary
                                  style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                >
                                  <ha-icon
                                    icon="mdi:chevron-right"
                                    style="transition: transform 0.2s;"
                                  ></ha-icon>
                                  ${(0,v.kg)("editor.icon.inactive_name",s,"Inactive Name")}
                                </summary>
                                <div style="padding: 16px;">
                                  ${this.renderSettingsSection((0,v.kg)("editor.icon.inactive_name_config",s,"Inactive Name Configuration"),(0,v.kg)("editor.icon.inactive_name_config_desc",s,"Configure the inactive name settings"),[{title:(0,v.kg)("editor.icon.custom_inactive_name",s,"Custom Inactive Name"),description:(0,v.kg)("editor.icon.custom_inactive_name_desc",s,"Override entity name when inactive (leave empty to use entity name)"),hass:e,data:{custom_inactive_name_text:t.custom_inactive_name_text||""},schema:[this.textField("custom_inactive_name_text")],onChange:t=>this._updateIcon(c,a,{custom_inactive_name_text:t.detail.value.custom_inactive_name_text},o)}])}

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_name_color",s,"Inactive Name Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.name_color_inactive",s,"Name color when inactive")}
                                    </div>
                                    <ultra-color-picker
                                      .value=${t.inactive_name_color||"var(--primary-text-color)"}
                                      @value-changed=${t=>this._debouncedUpdateIconWithLockSync(c,a,"inactive_name_color",t.detail.value,o,50)}
                                    ></ultra-color-picker>
                                  </div>

                                  <div class="field-container">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_name_size",s,"Inactive Name Size")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.name_size_inactive",s,"Name text size when inactive")}
                                    </div>
                                    ${this._renderSizeControl(c,a,o,"inactive_text_size",t.inactive_text_size||14,0,50,14)}
                                  </div>
                                </div>
                              </details>
                            </div>

                            <!-- Active Name Section -->
                            <div style="margin-top: 16px;">
                              <details
                                style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color);"
                                @toggle=${t=>{const e=t.target,i=e.querySelector("ha-icon");i&&(i.style.transform=e.open?"rotate(90deg)":"rotate(0deg)")}}
                              >
                                <summary
                                  style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                >
                                  <ha-icon
                                    icon="mdi:chevron-right"
                                    style="transition: transform 0.2s;"
                                  ></ha-icon>
                                  ${(0,v.kg)("editor.icon.active_name",s,"Active Name")}
                                </summary>
                                <div style="padding: 16px;">
                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.custom_active_name",s,"Custom Active Name")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.custom_active_name_desc",s,"Override entity name when active (leave empty to use entity name)")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_name_locked","custom_active_name_text","custom_inactive_name_text",t.custom_active_name_text||"","text",e)}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_name_color",s,"Active Name Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.name_color_active",s,"Name color when active")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_name_color_locked","active_name_color","inactive_name_color",t.active_name_color||"var(--primary-text-color)","color",e)}
                                  </div>

                                  <div class="field-container">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_name_size",s,"Active Name Size")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.name_size_active",s,"Name text size when active")}
                                    </div>
                                    ${this._renderSizeControlWithLock(c,a,o,"text_size","active_text_size","inactive_text_size",t.active_text_size||t.inactive_text_size||14,0,50,12)}
                                  </div>
                                </div>
                              </details>
                            </div>
                          `:""}
                    </div>

                    <!-- State Section -->
                    <div class="settings-section" style="margin-bottom: 24px;">
                      <div class="section-title">
                        <span>${(0,v.kg)("editor.icon.state_section.title",s,"State")}</span>
                      </div>
                      ${this.renderFieldSection((0,v.kg)("editor.icon.state_section.show_state",s,"Show State"),"",e,{show_state_enabled:!1!==t.show_state_when_active&&!1!==t.show_state_when_inactive},[this.booleanField("show_state_enabled")],t=>{const e=t.detail.value.show_state_enabled;this._updateIcon(c,a,{show_state_when_active:e,show_state_when_inactive:e},o)})}

                      ${!1!==t.show_state_when_active||!1!==t.show_state_when_inactive?n.qy`
                            <!-- Inactive State Section -->
                            <div style="margin-top: 16px;">
                              <details
                                style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color);"
                                @toggle=${t=>{const e=t.target,i=e.querySelector("ha-icon");i&&(i.style.transform=e.open?"rotate(90deg)":"rotate(0deg)")}}
                              >
                                <summary
                                  style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                >
                                  <ha-icon
                                    icon="mdi:chevron-right"
                                    style="transition: transform 0.2s;"
                                  ></ha-icon>
                                  ${(0,v.kg)("editor.icon.inactive_state",s,"Inactive State")}
                                </summary>
                                <div style="padding: 16px;">
                                  ${this.renderSettingsSection((0,v.kg)("editor.icon.inactive_state_config",s,"Inactive State Configuration"),(0,v.kg)("editor.icon.inactive_state_config_desc",s,"Configure the inactive state settings"),[{title:(0,v.kg)("editor.icon.custom_inactive_state",s,"Custom Inactive State"),description:(0,v.kg)("editor.icon.custom_inactive_state_desc",s,"Custom text when inactive (leave empty to use actual state)"),hass:e,data:{custom_inactive_state_text:t.custom_inactive_state_text||""},schema:[this.textField("custom_inactive_state_text")],onChange:t=>this._updateIcon(c,a,{custom_inactive_state_text:t.detail.value.custom_inactive_state_text},o)}])}

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_state_color",s,"Inactive State Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.state_color_inactive",s,"State color when inactive")}
                                    </div>
                                    <ultra-color-picker
                                      .value=${t.inactive_state_color||"var(--secondary-text-color)"}
                                      @value-changed=${t=>this._debouncedUpdateIconWithLockSync(c,a,"inactive_state_color",t.detail.value,o,50)}
                                    ></ultra-color-picker>
                                  </div>

                                  <div class="field-container">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.inactive_state_size",s,"Inactive State Size")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.state_size_inactive",s,"State text size when inactive")}
                                    </div>
                                    ${this._renderSizeControl(c,a,o,"inactive_state_size",t.inactive_state_size||10,0,50,10)}
                                  </div>
                                </div>
                              </details>
                            </div>

                            <!-- Active State Section -->
                            <div style="margin-top: 16px;">
                              <details
                                style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--card-background-color);"
                                @toggle=${t=>{const e=t.target,i=e.querySelector("ha-icon");i&&(i.style.transform=e.open?"rotate(90deg)":"rotate(0deg)")}}
                              >
                                <summary
                                  style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                >
                                  <ha-icon
                                    icon="mdi:chevron-right"
                                    style="transition: transform 0.2s;"
                                  ></ha-icon>
                                  ${(0,v.kg)("editor.icon.active_state",s,"Active State")}
                                </summary>
                                <div style="padding: 16px;">
                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.custom_active_state",s,"Custom Active State")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.custom_active_state_desc",s,"Custom text when active (leave empty to use actual state)")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_state_locked","custom_active_state_text","custom_inactive_state_text",t.custom_active_state_text||"","text",e)}
                                  </div>

                                  <div class="field-container" style="margin-bottom: 16px;">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_state_color",s,"Active State Color")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.state_color_active",s,"State color when active")}
                                    </div>
                                    ${this._renderFieldWithLock(c,a,o,"active_state_color_locked","active_state_color","inactive_state_color",t.active_state_color||"var(--secondary-text-color)","color",e)}
                                  </div>

                                  <div class="field-container">
                                    <div class="field-title">
                                      ${(0,v.kg)("editor.icon.active_state_size",s,"Active State Size")}
                                    </div>
                                    <div class="field-description">
                                      ${(0,v.kg)("editor.icon.state_size_active",s,"State text size when active")}
                                    </div>
                                    ${this._renderSizeControlWithLock(c,a,o,"state_size","active_state_size","inactive_state_size",t.active_state_size||10,0,50,10)}
                                  </div>
                                </div>
                              </details>
                            </div>
                          `:""}
                    </div>

                    <!-- Unified Template Section -->
                    <div
                      class="template-section"
                      style="margin-bottom: 24px;"
                    >
                      <div class="template-header">
                        <div class="switch-container">
                          <div class="switch-label-row">
                            <label class="switch-label"
                              >${(0,v.kg)("editor.icon.unified_template_section.title",s,"Template Mode")}</label
                            >
                            <button
                              class="help-btn"
                              style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                              title="${(0,v.kg)("editor.icon.template_cheatsheet",s,"Template Cheatsheet")}"
                              @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{detail:{module:"icon"},bubbles:!0,composed:!0}))}}
                            >
                              <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
                            </button>
                          </div>
                          ${this.renderUcForm(e,{unified_template_mode:t.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>this._updateIcon(c,a,{unified_template_mode:t.detail.value.unified_template_mode},o))}
                        </div>
                        <div class="template-description">
                          ${(0,v.kg)("editor.icon.unified_template_section.desc",s,"Use Jinja2 templates to control icon and color dynamically. Return simple string for icon-only, or JSON object for multiple properties. Uses entity context variables (entity, state, name, attributes) for seamless entity remapping.")}
                        </div>
                      </div>

                      ${t.unified_template_mode?n.qy`
                            <!-- Ignore Entity State Config Toggle -->
                            <div
                              style="margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.1); border-radius: 8px; border-left: 4px solid var(--warning-color, #FF9800);"
                            >
                              ${this.renderFieldSection((0,v.kg)("editor.icon.ignore_entity_state",s,"Ignore Entity State Config"),(0,v.kg)("editor.icon.ignore_entity_state_desc",s,"When enabled, entity state settings above will be ignored and template will control active/inactive state for animations"),e,{ignore_entity_state_config:t.ignore_entity_state_config||!1},[this.booleanField("ignore_entity_state_config")],t=>this._updateIcon(c,a,{ignore_entity_state_config:t.detail.value.ignore_entity_state_config},o))}
                            </div>

                            <div
                              class="template-content"
                              @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                              @dragstart=${t=>t.stopPropagation()}
                              @insert-snippet=${t=>{var e,i,n;const o=t.currentTarget.querySelector("ultra-template-editor");null===(e=null==o?void 0:o.insertAtCursor)||void 0===e||e.call(o,null!==(n=null===(i=t.detail)||void 0===i?void 0:i.value)&&void 0!==n?n:"")}}
                            >
                              <ultra-template-editor
                                .hass=${e}
                                .value=${t.unified_template||""}
                                .placeholder=${'{% set level = state | int %}\n{\n  "icon": "mdi:battery-{{ (level / 10) | round(0) * 10 }}",\n  "icon_color": "{% if level <= 20 %}red{% else %}green{% endif %}"\n}'}
                                .minHeight=${200}
                                .maxHeight=${500}
                                @value-changed=${t=>{this._updateIcon(c,a,{unified_template:t.detail.value},o)}}
                              ></ultra-template-editor>
                              <div class="template-help">
                                <p><strong>Return simple string for icon-only:</strong></p>
                                <ul>
                                  <li><code>mdi:fire</code> → Changes icon only</li>
                                  <li>
                                    <code
                                      >{% if state|int > 25 %}mdi:fire{% else %}mdi:snowflake{%
                                      endif %}</code
                                    >
                                  </li>
                                </ul>
                                <p><strong>Return JSON for multiple properties:</strong></p>
                                <ul>
                                  <li>
                                    <code>{ "icon": "mdi:fire", "icon_color": "#FF0000" }</code>
                                  </li>
                                  <li>
                                    Available properties: <code>icon</code>, <code>icon_color</code>
                                  </li>
                                </ul>
                                <p>
                                  <strong
                                    >Entity context variables (no need to hardcode entity
                                    ID):</strong
                                  >
                                </p>
                                <ul>
                                  <li><code>entity</code> → Entity ID (${t.entity})</li>
                                  <li><code>state</code> → Current state value</li>
                                  <li><code>name</code> → Entity name</li>
                                  <li><code>attributes</code> → All entity attributes</li>
                                  <li><code>unit</code> → Unit of measurement</li>
                                  <li>
                                    <code>domain</code> → Entity domain (e.g., 'sensor', 'light')
                                  </li>
                                  <li><code>device_class</code> → Device class</li>
                                </ul>
                                <p><strong>Example - Works with ANY battery entity:</strong></p>
                                <code
                                  style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: 4px; font-size: 11px;"
                                >
                                  {% set level = state | int %}<br />
                                  {<br />
                                  &nbsp;&nbsp;"icon": "mdi:battery-{{ (level / 10) | round(0) * 10
                                  }}",<br />
                                  &nbsp;&nbsp;"icon_color": "{% if level <= 20 %}#FF0000{% elif
                                  level <= 50 %}#FF8800{% else %}#00CC00{% endif %}"<br />
                                  }
                                </code>
                              </div>
                            </div>
                          `:""}
                    </div>

                    <!-- Icon Animation Section -->
                    ${this.renderSettingsSection((0,v.kg)("editor.icon.animation_section.title",s,"Icon Animation"),(0,v.kg)("editor.icon.animation_section.desc",s,"Configure animations for active and inactive states"),[{title:(0,v.kg)("editor.icon.active_animation",s,"Active Animation"),description:(0,v.kg)("editor.icon.active_animation_desc",s,"Animation when icon is active"),hass:e,data:{active_icon_animation:t.active_icon_animation||"none"},schema:[this.selectField("active_icon_animation",[{value:"none",label:(0,v.kg)("editor.icon.animation_none",s,"None")},{value:"pulse",label:(0,v.kg)("editor.icon.animation_pulse",s,"Pulse")},{value:"spin",label:(0,v.kg)("editor.icon.animation_spin",s,"Spin")},{value:"bounce",label:(0,v.kg)("editor.icon.animation_bounce",s,"Bounce")},{value:"flash",label:(0,v.kg)("editor.icon.animation_flash",s,"Flash")},{value:"shake",label:(0,v.kg)("editor.icon.animation_shake",s,"Shake")},{value:"vibrate",label:(0,v.kg)("editor.icon.animation_vibrate",s,"Vibrate")},{value:"rotate-left",label:(0,v.kg)("editor.icon.animation_rotate_left",s,"Rotate Left")},{value:"rotate-right",label:(0,v.kg)("editor.icon.animation_rotate_right",s,"Rotate Right")},{value:"fade",label:(0,v.kg)("editor.icon.animation_fade",s,"Fade")},{value:"scale",label:(0,v.kg)("editor.icon.animation_scale",s,"Scale")},{value:"tada",label:(0,v.kg)("editor.icon.animation_tada",s,"Tada")}])],onChange:t=>{const e=this._formValue(t,"active_icon_animation");if(void 0===e)return;const i=String(e);i!==(c.icons[a].active_icon_animation||"none")&&(this._updateIcon(c,a,{active_icon_animation:i},o),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,v.kg)("editor.icon.inactive_animation",s,"Inactive Animation"),description:(0,v.kg)("editor.icon.inactive_animation_desc",s,"Animation when icon is inactive"),hass:e,data:{inactive_icon_animation:t.inactive_icon_animation||"none"},schema:[this.selectField("inactive_icon_animation",[{value:"none",label:(0,v.kg)("editor.icon.animation_none",s,"None")},{value:"pulse",label:(0,v.kg)("editor.icon.animation_pulse",s,"Pulse")},{value:"spin",label:(0,v.kg)("editor.icon.animation_spin",s,"Spin")},{value:"bounce",label:(0,v.kg)("editor.icon.animation_bounce",s,"Bounce")},{value:"flash",label:(0,v.kg)("editor.icon.animation_flash",s,"Flash")},{value:"shake",label:(0,v.kg)("editor.icon.animation_shake",s,"Shake")},{value:"vibrate",label:(0,v.kg)("editor.icon.animation_vibrate",s,"Vibrate")},{value:"rotate-left",label:(0,v.kg)("editor.icon.animation_rotate_left",s,"Rotate Left")},{value:"rotate-right",label:(0,v.kg)("editor.icon.animation_rotate_right",s,"Rotate Right")},{value:"fade",label:(0,v.kg)("editor.icon.animation_fade",s,"Fade")},{value:"scale",label:(0,v.kg)("editor.icon.animation_scale",s,"Scale")},{value:"tada",label:(0,v.kg)("editor.icon.animation_tada",s,"Tada")}])],onChange:t=>{const e=this._formValue(t,"inactive_icon_animation");if(void 0===e)return;const i=String(e);i!==(c.icons[a].inactive_icon_animation||"none")&&(this._updateIcon(c,a,{inactive_icon_animation:i},o),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}
                  `}
            </div>
          `})}

        <!-- Add Icon -->
        <button
          class="add-icon-btn"
          style="width: 100%; padding: 12px; border: 2px dashed var(--divider-color); border-radius: 8px; background: transparent; color: var(--primary-text-color); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 500; transition: all 0.2s ease;"
          @click=${()=>this._addIcon(c,o)}
        >
          <ha-icon icon="mdi:plus" style="--mdc-icon-size: 20px;"></ha-icon>
          ${(0,v.kg)("editor.icon.add_icon",s,"Add Icon")}
        </button>
      </div>
    `}_renderStaticIconSettings(t,e,i,o,a,r){var c;return n.qy`
      <!-- Static Icon Settings -->
      <div class="settings-section" style="margin-bottom: 24px;">
        <div class="section-title">
          ${(0,v.kg)("editor.icon.static_icon_settings.title",a,"ICON SETTINGS")}
        </div>
        <div
          class="section-description"
          style="margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;"
        >
          ${(0,v.kg)("editor.icon.static_icon_settings.desc",a,"Configure the appearance of this static icon")}
        </div>

        <!-- Icon Picker -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,v.kg)("editor.icon.icon",a,"Icon")}</div>
          <div class="field-description">
            ${(0,v.kg)("editor.icon.icon_desc",a,"Select an MDI icon")}
          </div>
          ${this.renderUcForm(o,{icon_inactive:t.icon_inactive||"mdi:star"},[this.iconField("icon_inactive")],t=>{const n=t.detail.value.icon_inactive;this._updateIcon(i,e,{icon_inactive:n,icon_active:n},r),setTimeout(()=>this.triggerPreviewUpdate(),50)},!1)}
        </div>

        <!-- Icon Size -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,v.kg)("editor.icon.icon_size",a,"Icon Size")}</div>
          <div class="field-description">
            ${(0,v.kg)("editor.icon.icon_size_desc",a,"Size of the icon in pixels")}
          </div>
          ${this._renderSizeControl(i,e,r,"inactive_icon_size",t.inactive_icon_size||26,0,100,26)}
        </div>

        <!-- Icon Color -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,v.kg)("editor.icon.icon_color",a,"Icon Color")}</div>
          <div class="field-description">
            ${(0,v.kg)("editor.icon.icon_color_desc",a,"Color of the icon")}
          </div>
          <ultra-color-picker
            .value=${t.inactive_icon_color||"var(--primary-color)"}
            @value-changed=${t=>{this._updateIcon(i,e,{inactive_icon_color:t.detail.value,active_icon_color:t.detail.value},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
          ></ultra-color-picker>
        </div>

        <!-- Background Shape -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">
            ${(0,v.kg)("editor.icon.background_shape",a,"Background Shape")}
          </div>
          <div class="field-description">
            ${(0,v.kg)("editor.icon.background_shape_desc",a,"Shape behind the icon")}
          </div>
          ${this.renderUcForm(o,{inactive_icon_background:t.inactive_icon_background||"none"},[this.selectField("inactive_icon_background",[{value:"none",label:(0,v.kg)("editor.icon.shape_none",a,"None")},{value:"circle",label:(0,v.kg)("editor.icon.shape_circle",a,"Circle")},{value:"square",label:(0,v.kg)("editor.icon.shape_square",a,"Square")},{value:"rounded-square",label:(0,v.kg)("editor.icon.shape_rounded",a,"Rounded Square")}])],t=>{const n=this._formValue(t,"inactive_icon_background");if(void 0===n)return;const o=String(n);if(o===(i.icons[e].inactive_icon_background||"none"))return;const a={inactive_icon_background:o,active_icon_background:o};o&&"none"!==o&&(a.inactive_icon_background_color="var(--divider-color)",a.active_icon_background_color="var(--divider-color)"),this._updateIcon(i,e,a,r),setTimeout(()=>this.triggerPreviewUpdate(),50)},!1)}
        </div>

        <!-- Background Color (only show if background shape is not 'none') -->
        ${t.inactive_icon_background&&"none"!==t.inactive_icon_background?n.qy`
              <div class="field-container" style="margin-bottom: 16px;">
                <div class="field-title">
                  ${(0,v.kg)("editor.icon.background_color",a,"Background Color")}
                </div>
                <div class="field-description">
                  ${(0,v.kg)("editor.icon.background_color_desc",a,"Color of the background shape")}
                </div>
                <ultra-color-picker
                  .value=${t.inactive_icon_background_color||"var(--divider-color)"}
                  @value-changed=${t=>{this._updateIcon(i,e,{inactive_icon_background_color:t.detail.value,active_icon_background_color:t.detail.value},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                ></ultra-color-picker>
              </div>

              <!-- Background Padding -->
              <div class="field-container" style="margin-bottom: 16px;">
                <div class="field-title">
                  ${(0,v.kg)("editor.icon.background_padding",a,"Background Padding")}
                </div>
                <div class="field-description">
                  ${(0,v.kg)("editor.icon.background_padding_desc",a,"Distance from the icon to the background edge")}
                </div>
                ${this._renderBackgroundPaddingControl(i,e,r,null!==(c=t.inactive_icon_background_padding)&&void 0!==c?c:8)}
              </div>
            `:""}

        <!-- Animation -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,v.kg)("editor.icon.animation",a,"Animation")}</div>
          <div class="field-description">
            ${(0,v.kg)("editor.icon.animation_desc",a,"Continuous animation for the icon")}
          </div>
          ${this.renderUcForm(o,{inactive_icon_animation:t.inactive_icon_animation||"none"},[this.selectField("inactive_icon_animation",[{value:"none",label:(0,v.kg)("editor.icon.animation_none",a,"None")},{value:"pulse",label:(0,v.kg)("editor.icon.animation_pulse",a,"Pulse")},{value:"spin",label:(0,v.kg)("editor.icon.animation_spin",a,"Spin")},{value:"bounce",label:(0,v.kg)("editor.icon.animation_bounce",a,"Bounce")},{value:"flash",label:(0,v.kg)("editor.icon.animation_flash",a,"Flash")},{value:"shake",label:(0,v.kg)("editor.icon.animation_shake",a,"Shake")},{value:"vibrate",label:(0,v.kg)("editor.icon.animation_vibrate",a,"Vibrate")},{value:"rotate-left",label:(0,v.kg)("editor.icon.animation_rotate_left",a,"Rotate Left")},{value:"rotate-right",label:(0,v.kg)("editor.icon.animation_rotate_right",a,"Rotate Right")},{value:"fade",label:(0,v.kg)("editor.icon.animation_fade",a,"Fade")},{value:"scale",label:(0,v.kg)("editor.icon.animation_scale",a,"Scale")},{value:"tada",label:(0,v.kg)("editor.icon.animation_tada",a,"Tada")}])],t=>{const n=this._formValue(t,"inactive_icon_animation");if(void 0===n)return;const o=String(n);o!==(i.icons[e].inactive_icon_animation||"none")&&(this._updateIcon(i,e,{inactive_icon_animation:o,active_icon_animation:o},r),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
        </div>

        <!-- Hover Effect -->
        ${this.renderFieldSection((0,v.kg)("editor.icon.hover_effect",a,"Hover Effect"),(0,v.kg)("editor.icon.hover_effect_desc",a,"Enable hover animation on mouse over"),o,{enable_hover_effect:t.enable_hover_effect||!1},[this.booleanField("enable_hover_effect")],t=>{this._updateIcon(i,e,{enable_hover_effect:t.detail.value.enable_hover_effect},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `}renderActionsTab(t,e,i,n){return c.A.render(t,e,t=>n(t))}renderLogicTab(t,e,i,n){return u.X.render(t,e,t=>n(t))}renderOtherTab(t,e,i,n){return this.renderLogicTab(t,e,i,n)}renderPreview(t,e,i,a){var r,c;const l=t,d=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en";!this._templateService&&e&&(this._templateService=new s.I(e)),this._templateService&&e&&this._templateService.updateHass(e);const _=l,u=l.design||{},b={color:l.color||u.color,font_size:l.font_size||u.font_size,font_weight:l.font_weight||u.font_weight,font_style:l.font_style||u.font_style,text_transform:l.text_transform||u.text_transform,font_family:l.font_family||u.font_family,line_height:l.line_height||u.line_height,letter_spacing:l.letter_spacing||u.letter_spacing,text_align:l.text_align||u.text_align,text_shadow_h:l.text_shadow_h||u.text_shadow_h,text_shadow_v:l.text_shadow_v||u.text_shadow_v,text_shadow_blur:l.text_shadow_blur||u.text_shadow_blur,text_shadow_color:l.text_shadow_color||u.text_shadow_color,background_color:l.background_color||u.background_color,background_image:l.background_image||u.background_image,background_image_type:l.background_image_type||u.background_image_type,background_image_entity:l.background_image_entity||u.background_image_entity,background_size:l.background_size||u.background_size,background_position:l.background_position||u.background_position,background_repeat:l.background_repeat||u.background_repeat,border_radius:l.border_radius||u.border_radius,border_style:l.border_style||u.border_style,border_width:l.border_width||u.border_width,border_color:l.border_color||u.border_color,padding_top:l.padding_top||u.padding_top,padding_bottom:l.padding_bottom||u.padding_bottom,padding_left:l.padding_left||u.padding_left,padding_right:l.padding_right||u.padding_right,margin_top:l.margin_top||u.margin_top,margin_bottom:l.margin_bottom||u.margin_bottom,margin_left:l.margin_left||u.margin_left,margin_right:l.margin_right||u.margin_right,position:l.position||u.position,top:l.top||u.top,bottom:l.bottom||u.bottom,left:l.left||u.left,right:l.right||u.right,z_index:l.z_index||u.z_index,width:l.width||u.width,height:l.height||u.height,max_width:l.max_width||u.max_width,max_height:l.max_height||u.max_height,min_width:l.min_width||u.min_width,min_height:l.min_height||u.min_height,overflow:l.overflow||u.overflow,clip_path:l.clip_path||u.clip_path,backdrop_filter:l.backdrop_filter||u.backdrop_filter,box_shadow_h:l.box_shadow_h||u.box_shadow_h,box_shadow_v:l.box_shadow_v||u.box_shadow_v,box_shadow_blur:l.box_shadow_blur||u.box_shadow_blur,box_shadow_spread:l.box_shadow_spread||u.box_shadow_spread,box_shadow_color:l.box_shadow_color||u.box_shadow_color,hover_effect:l.hover_effect||u.hover_effect};let y="";const x=(l.icons||[]).filter(t=>t.entity&&""!==t.entity.trim());for(let t=0;t<x.length;t++){const n=x[t];if(n.unified_template_mode&&n.unified_template){!this._templateService&&e&&(this._templateService=new s.I(e));const o=(0,h.KD)(n.unified_template,e,i),a=this._buildUnifiedIconTemplateKey(n,o,i,l.id,t);if(e.__uvc_template_strings||(e.__uvc_template_strings={}),this._templateService){const t=this._getEntityContext(n,e,i),r=(0,m.jh)(n.entity,e);this._templateService.subscribeToTemplate(o,a,()=>{this.triggerPreviewUpdate()},t,i,r)}const r=null===(c=null==e?void 0:e.__uvc_template_strings)||void 0===c?void 0:c[a];if(r&&""!==String(r).trim()){const t=(0,g.cv)(r);if(!(0,g.HD)(t)&&t.container_background_color){y=t.container_background_color;break}}}}(b.padding_top||b.padding_bottom||b.padding_left||b.padding_right||_.padding_top||_.padding_bottom||_.padding_left||_.padding_right)&&(this.addPixelUnit(b.padding_top||_.padding_top),this.addPixelUnit(b.padding_right||_.padding_right),this.addPixelUnit(b.padding_bottom||_.padding_bottom),this.addPixelUnit(b.padding_left||_.padding_left)),(b.margin_top||b.margin_bottom||b.margin_left||b.margin_right||_.margin_top||_.margin_bottom||_.margin_left||_.margin_right)&&(b.margin_top||_.margin_top,b.margin_right||_.margin_right,b.margin_bottom||_.margin_bottom,b.margin_left||_.margin_left),y||b.background_color||_.background_color,this.getBackgroundImageCSS(Object.assign(Object.assign({},_),b),e,i),b.background_size||_.background_size,b.background_position||_.background_position,b.background_repeat||_.background_repeat,(b.border_style||_.border_style)&&"none"!==(b.border_style||_.border_style)&&(this.addPixelUnit(b.border_width||_.border_width),b.border_style||_.border_style,b.border_color||_.border_color),this.addPixelUnit(b.border_radius||_.border_radius),b.position||_.position,b.top||_.top,b.bottom||_.bottom,b.left||_.left,b.right||_.right,b.z_index||_.z_index,b.width||_.width,b.height||_.height,b.max_width||_.max_width,b.max_height||_.max_height,b.min_width||_.min_width,b.min_height||_.min_height,b.overflow||_.overflow,b.clip_path||_.clip_path,b.backdrop_filter||_.backdrop_filter,b.box_shadow_h&&b.box_shadow_v||_.box_shadow_h&&_.box_shadow_v&&(_.box_shadow_h,_.box_shadow_v,_.box_shadow_blur,_.box_shadow_spread,_.box_shadow_color),this._injectGlobalStyles(),this._injectKeyframesForAllSplitPreviewIcons();const k=n.qy`<style>
        ${f._ANIMATION_KEYFRAMES}
        ${this.getStyles()}
      </style>`,w=this.getHoverEffectClass(t),$=this.buildStyleString(this.buildDesignStyles(t,e)),S=(l.icons||[]).filter(t=>"static"===t.icon_mode||t.entity&&""!==t.entity.trim()),z=(l.icons||[]).filter(t=>"static"!==t.icon_mode&&(!t.entity||""===t.entity.trim()));if(!l.icons||0===l.icons.length)return n.qy`
        ${k}
        ${this.renderGradientErrorState((0,v.kg)("editor.icon.error_no_icons",d,"Add Icons"),(0,v.kg)("editor.icon.error_no_icons_desc",d,"Configure icons in the General tab"),"mdi:shape-outline")}
      `;if(0===S.length&&z.length>0){const t=z.map((t,e)=>`Icon ${e+1}`).join(", ");return n.qy`
        ${k}
        ${this.renderGradientErrorState((0,v.kg)("editor.icon.error_icons_need_entities",d,"Icons Need Entities"),t,"mdi:shape-outline")}
      `}const I=z.length>0?this.renderGradientWarningBanner(`${z.length>1?"icons":"icon"} need${1===z.length?"s":""} entities`,z.length):"";return this.wrapWithAnimation(n.qy`
      ${k} ${I}
      <div class="icon-module-container ${w}" style="${$}">
        <div class="icon-module-preview">
          <div
            class="icon-grid"
            style="
            display: grid;
            grid-template-columns: repeat(${Math.min(l.columns||3,S.length)}, 1fr);
            grid-auto-flow: ${!1===l.allow_wrap?"column":"row"};
            gap: ${l.gap||16}px;
            justify-content: ${l.alignment||"center"};
          "
          >
            ${S.map((a,r)=>{var c,d,_,v,u,f,y,x,k,w,$,S,z,I,C;const A="static"===a.icon_mode,F=A?void 0:this.resolveEntity(a.entity,i)||a.entity,j=A||!F||null==e?void 0:e.states[F],U=(null==j||j.state,!A&&this._evaluateIconState(a,e,i));let E;const P=!!A||(U?!1!==a.show_icon_when_active:!1!==a.show_icon_when_inactive),T=!A&&(U?!1!==a.show_name_when_active:!1!==a.show_name_when_inactive),N=!A&&(U?!1!==a.show_state_when_active:!1!==a.show_state_when_inactive);let R,q,O,L,B=U&&a.icon_active||a.icon_inactive,W=U?a.use_state_color_for_active_icon?this._getEntityStateColor(j)||a.active_icon_color:a.use_entity_color_for_icon&&(null===(c=null==j?void 0:j.attributes)||void 0===c?void 0:c.rgb_color)?`rgb(${j.attributes.rgb_color.join(",")})`:a.active_icon_color:a.use_state_color_for_inactive_icon?this._getEntityStateColor(j)||a.inactive_icon_color:a.use_entity_color_for_icon&&(null===(d=null==j?void 0:j.attributes)||void 0===d?void 0:d.rgb_color)?`rgb(${j.attributes.rgb_color.join(",")})`:a.inactive_icon_color;if(a.unified_template_mode&&a.unified_template){!this._templateService&&e?this._templateService=new s.I(e):this._templateService&&e&&this._templateService.updateHass(e);const t=(0,h.KD)(a.unified_template,e,i),n=this._buildUnifiedIconTemplateKey(a,t,i,l.id,r);if(e.__uvc_template_strings||(e.__uvc_template_strings={}),this._templateService){const o=this._getEntityContext(a,e,i),r=(0,m.jh)(a.entity,e);this._templateService.subscribeToTemplate(t,n,()=>{this.triggerPreviewUpdate()},o,i,r)}const o=null===(_=null==e?void 0:e.__uvc_template_strings)||void 0===_?void 0:_[n];let c=!1;if(o&&""!==String(o).trim()){const t=(0,g.cv)(o);if(!(0,g.HD)(t)){const e=(0,g.yv)(t);e&&(B=e),t.icon_color&&(W=t.icon_color,this._lastUnifiedIconDisplayColorByKey.set(n,t.icon_color),c=!0),t.name&&(R=String(t.name)),void 0!==t.state_text?q=String(t.state_text):t._isString&&t.content&&!e&&(q=String(t.content).trim()),t.name_color&&(O=String(t.name_color)),t.state_color&&(L=String(t.state_color)),t.container_background_color&&(E=t.container_background_color)}}if(!c){const t=this._lastUnifiedIconDisplayColorByKey.get(n);t&&(W=t)}}else(null===(v=null==j?void 0:j.attributes)||void 0===v?void 0:v.icon)&&!B&&(B=j.attributes.icon);const D=O||b.color||(U?a.active_name_color:a.inactive_name_color),M=L||b.color||(U?a.active_state_color:a.inactive_state_color),H=b.font_size?/[a-zA-Z%]/.test(b.font_size)?b.font_size:this.addPixelUnit(b.font_size)||b.font_size:void 0,K=b.font_family||void 0,V=b.font_weight||void 0,G=b.font_style||void 0,Y=b.text_transform||void 0,X=b.line_height||void 0,J=b.letter_spacing||void 0,Z=b.text_align||void 0,Q=b.text_shadow_h&&b.text_shadow_v?`${b.text_shadow_h||"0"} ${b.text_shadow_v||"0"} ${b.text_shadow_blur||"0"} ${b.text_shadow_color||"rgba(0,0,0,0.5)"}`:void 0,tt=R||(U?a.custom_active_name_text||a.name||(null===(u=null==j?void 0:j.attributes)||void 0===u?void 0:u.friendly_name)||a.entity:a.custom_inactive_name_text||a.name||(null===(f=null==j?void 0:j.attributes)||void 0===f?void 0:f.friendly_name)||a.entity);let et;et=void 0!==q?q:this._getDisplayStateValue(a,e,U,i);const it=U?a.active_icon_background||a.icon_background:a.inactive_icon_background||a.icon_background,nt=U?a.active_icon_background_color||a.icon_background_color:a.inactive_icon_background_color||a.icon_background_color,ot=U?null!==(x=null!==(y=a.active_icon_background_padding)&&void 0!==y?y:a.icon_background_padding)&&void 0!==x?x:8:null!==(w=null!==(k=a.inactive_icon_background_padding)&&void 0!==k?k:a.icon_background_padding)&&void 0!==w?w:8,at=(()=>{var t;if("none"===it)return{};const e=a.use_entity_color_for_icon_background&&(null===(t=null==j?void 0:j.attributes)||void 0===t?void 0:t.rgb_color)?`rgb(${j.attributes.rgb_color.join(",")})`:nt,{styles:i}=(0,p.U9)({color:e,fallback:nt||"transparent"});return Object.assign(Object.assign({},i),{borderRadius:"circle"===it?"50%":"rounded-square"===it?"8px":"0",padding:`${ot}px`})})(),rt=Object.assign(Object.assign({},{display:"flex",alignItems:"center",justifyContent:"center"}),at),ct=a.active_icon_animation||"none",st=a.inactive_icon_animation||"none",lt=U?ct:st,dt="none"!==lt?`icon-animation-${lt}`:"";dt&&setTimeout(()=>{this._updateIconAnimationClasses(a.entity,dt,U)},100);const _t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:a.vertical_alignment||"center",padding:b.padding_top||b.padding_bottom||b.padding_left||b.padding_right?`${this.addPixelUnit(b.padding_top)||"0px"} ${this.addPixelUnit(b.padding_right)||"0px"} ${this.addPixelUnit(b.padding_bottom)||"0px"} ${this.addPixelUnit(b.padding_left)||"0px"}`:"0",borderRadius:b.border_radius?this.addPixelUnit(b.border_radius)||"0":"circle"===a.container_background_shape?"50%":"rounded"===a.container_background_shape?"8px":(a.container_background_shape,"0"),cursor:"pointer",transition:"all 0.2s ease",width:a.container_width?`${a.container_width}%`:"auto"};if(a.container_background_shape&&"none"!==a.container_background_shape){const t=E||a.container_background_color||"#808080",{styles:n}=(0,p.U9)({color:t,fallback:t,image:this.getBackgroundImageCSS(a,e,i),imageSize:a.background_size||"cover",imagePosition:a.background_position||"center",imageRepeat:a.background_repeat||"no-repeat"});Object.assign(_t,n)}else E?(_t.backgroundColor=E,_t.background=E,b.border_radius&&(_t.borderRadius=this.addPixelUnit(b.border_radius)||"0")):(_t.background="transparent",_t.backgroundColor="transparent");const vt=(t,e)=>t&&t.action&&"nothing"!==t.action&&"default"!==t.action?t:e,ut=vt(a.tap_action,l.tap_action),pt=vt(a.hold_action,l.hold_action),mt=vt(a.double_tap_action,l.double_tap_action),gt=this.createGestureHandlers(`${l.id}_${a.id}`,{tap_action:ut,hold_action:pt,double_tap_action:mt,entity:F||a.entity,module:l},e,i),ht=t=>!!t&&("nothing"===t.action||"none"===t.action),bt=!ht(ut)||!ht(pt)||!ht(mt),ft=a.name||(null===($=null==j?void 0:j.attributes)||void 0===$?void 0:$.friendly_name)||a.entity||B||"Icon",yt=(null===(S=l.design)||void 0===S||S.hover_effect,this.getHoverEffectClass(t));return n.qy`
                <div
                  class="icon-item-preview ${yt}"
                  role=${(0,o.J)(bt?"button":void 0)}
                  tabindex=${(0,o.J)(bt?"0":void 0)}
                  aria-label=${(0,o.J)(bt?ft:void 0)}
                  style=${this.styleObjectToCss(Object.assign(Object.assign({},_t),{gap:"0px",touchAction:"manipulation",backgroundImage:this.getBackgroundImageCSS(a,e,i),backgroundSize:a.background_size||"cover",backgroundPosition:b.background_position||"center",backgroundRepeat:b.background_repeat||"no-repeat",margin:"0 auto"}))}
                  @keydown=${bt?t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),t.stopPropagation(),ht(ut)||this.handleModuleAction(ut||{action:"default",entity:F||a.entity},e,t.currentTarget,i,F||a.entity,l))}:void 0}
                  @pointerdown=${gt.onPointerDown}
                  @pointermove=${gt.onPointerMove}
                  @pointerup=${gt.onPointerUp}
                  @pointerleave=${gt.onPointerLeave}
                  @pointercancel=${gt.onPointerCancel}
                >
                  ${P?n.qy`
                        <div
                          style="${this.styleObjectToCss(Object.assign(Object.assign({},rt),{marginBottom:T?`${null!==(z=a.name_icon_gap)&&void 0!==z?z:8}px`:N?`${null!==(I=a.icon_state_gap)&&void 0!==I?I:4}px`:"0px"}))}"
                        >
                          ${this._shouldUseEntityPicture(j,a)?n.qy`
                                <img
                                  src="${this._getEntityPicture(j,e)}"
                                  class="${dt} ultra-force-animation entity-picture"
                                  style="
                                    width: ${Number(U?a.active_icon_size||a.icon_size:a.inactive_icon_size||a.icon_size)||26}px;
                                    height: ${Number(U?a.active_icon_size||a.icon_size:a.inactive_icon_size||a.icon_size)||26}px;
                                    border-radius: 50%;
                                    object-fit: cover;
                                    ${dt&&"none"!==dt?`animation: ${this._getInlineAnimation(dt)} !important;`:""}
                                  "
                                  data-animation-debug="${dt||"none"}"
                                  data-is-active="${U}"
                                  alt="Entity picture"
                                />
                              `:n.qy`
                                <ha-icon
                                  icon="${B||"mdi:help-circle"}"
                                  class="${dt} ultra-force-animation"
                                  style="
                                    color: ${W||"var(--secondary-text-color)"};
                                    --mdc-icon-size: ${Number(U?a.active_icon_size||a.icon_size:a.inactive_icon_size||a.icon_size)||26}px;
                                    ${dt&&"none"!==dt?`animation: ${this._getInlineAnimation(dt)} !important;`:""}
                                  "
                                  data-animation-debug="${dt||"none"}"
                                  data-is-active="${U}"
                                ></ha-icon>
                              `}
                        </div>
                      `:""}
                  ${T?n.qy`
                        <div
                          class="icon-name"
                          style="
                      font-size: ${H||`${U?a.active_text_size||a.text_size||12:a.inactive_text_size||a.text_size||14}px`};
                        color: ${D||"var(--primary-text-color)"};
                      text-align: ${Z||"center"};
                      line-height: ${X||"1.2"};
                        max-width: 120px;
                      word-wrap: break-word;
                      margin-bottom: ${N?`${null!==(C=a.name_state_gap)&&void 0!==C?C:2}px`:"0px"};
                      font-family: ${K||"inherit"};
                      font-weight: ${V||"inherit"};
                      font-style: ${G||"inherit"};
                      text-transform: ${Y||"inherit"};
                      letter-spacing: ${J||"inherit"};
                      text-shadow: ${Q||"none"};
                    "
                        >
                          ${tt}
                        </div>
                      `:""}
                  ${N?n.qy`
                        <div
                          class="icon-state"
                          style="
                      font-size: ${H||`${U?a.active_state_size||a.state_size||12:a.inactive_state_size||a.state_size||12}px`};
                        color: ${M||"var(--secondary-text-color)"};
                      text-align: ${Z||"center"};
                      line-height: ${X||"1.2"};
                      font-family: ${K||"inherit"};
                      font-weight: ${V||"inherit"};
                      font-style: ${G||"inherit"};
                      text-transform: ${Y||"inherit"};
                      letter-spacing: ${J||"inherit"};
                      text-shadow: ${Q||"none"};
                    "
                        >
                          ${et}
                        </div>
                      `:""}
                </div>
              `})}
          </div>
        </div>
      </div>
    `,t,e)}renderSplitPreview(t,e){const i=t;let o=!1;if(i.icons.length>0){const t=i.icons[0];o=this._evaluateIconState(t,e)}return this._injectGlobalStyles(),this._injectKeyframesForAllSplitPreviewIcons(),n.qy`
      <style>
        ${f._ANIMATION_KEYFRAMES} .icon-split-preview {
          --animation-duration: 2s;
          --animation-timing: linear;
        }
        .icon-split-preview .icon-animation-spin {
          animation: iconSpin var(--animation-duration) var(--animation-timing) infinite;
        }
        .icon-split-preview .icon-animation-bounce {
          animation: iconBounce 1s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-pulse {
          animation: iconPulse 1.5s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-flash {
          animation: iconFlash 1s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-shake {
          animation: iconShake 0.5s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-vibrate {
          animation: iconVibrate 0.3s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-rotate-left {
          animation: iconRotateLeft var(--animation-duration) var(--animation-timing) infinite;
        }
        .icon-split-preview .icon-animation-rotate-right {
          animation: iconRotateRight var(--animation-duration) var(--animation-timing) infinite;
        }
        .icon-split-preview .icon-animation-fade {
          animation: iconFade 2s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-scale {
          animation: iconScale 1.5s ease-in-out infinite;
        }
        .icon-split-preview .icon-animation-tada {
          animation: iconTada 2s ease-in-out infinite;
        }
      </style>
      <div class="icon-split-preview">
        <!-- State Labels -->
        <div
          style="
               display: grid; 
               grid-template-columns: 1fr 1fr; 
               margin-bottom: 12px;
               text-align: center;
             "
        >
          <div>
            ${o?n.qy`<div style="height: 14px; margin-bottom: 4px;"></div>`:n.qy`<div
                  style="font-size: 10px; font-weight: 700; color: var(--primary-color); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;"
                >
                  Current
                </div>`}
            <div style="font-size: 12px; font-weight: 600; color: var(--secondary-text-color);">
              Inactive State
            </div>
          </div>
          <div>
            ${o?n.qy`<div
                  style="font-size: 10px; font-weight: 700; color: var(--primary-color); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;"
                >
                  Current
                </div>`:n.qy`<div style="height: 14px; margin-bottom: 4px;"></div>`}
            <div style="font-size: 12px; font-weight: 600; color: var(--secondary-text-color);">
              Active State
            </div>
          </div>
        </div>

        <!-- Split Preview Container -->
        <div
          style="
               display: grid; 
               grid-template-columns: 1fr 1fr; 
               border: 1px solid var(--divider-color); 
               border-radius: 8px; 
               overflow: hidden;
               min-height: 120px;
             "
        >
          <!-- Inactive Preview -->
          <div
            style="
                 background: var(--card-background-color);
                 border-right: 1px solid var(--divider-color);
                 padding: 16px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
               "
          >
            ${this._renderSimpleIconGrid(i,e,!1)}
          </div>

          <!-- Active Preview -->
          <div
            style="
                 background: var(--card-background-color);
                 padding: 16px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
               "
          >
            ${this._renderSimpleIconGrid(i,e,!0)}
          </div>
        </div>

        <!-- Icon Count Indicator -->
        ${i.icons.length>6?n.qy`
              <div
                style="
                 text-align: center;
                 padding: 8px;
                 color: var(--secondary-text-color);
                 font-size: 12px;
                 font-style: italic;
               "
              >
                Showing first 6 of ${i.icons.length} icons
              </div>
            `:""}
      </div>
    `}_renderSimpleIconGrid(t,e,i){const o=t.icons.slice(0,6),a=(Math.min(3,o.length),t.design||{}),r={color:a.color,font_size:a.font_size,font_weight:a.font_weight,font_style:a.font_style,text_transform:a.text_transform,font_family:a.font_family,line_height:a.line_height,letter_spacing:a.letter_spacing,text_align:a.text_align,text_shadow_h:a.text_shadow_h,text_shadow_v:a.text_shadow_v,text_shadow_blur:a.text_shadow_blur,text_shadow_color:a.text_shadow_color,background_position:a.background_position,background_repeat:a.background_repeat,hover_effect:a.hover_effect};return n.qy`
      <div
        style="
          display: flex;
        "
      >
        ${o.map((n,o)=>this._renderSingleIconPreview(n,e,i,t,r,void 0,o))}
      </div>
    `}_renderSingleIconPreview(t,e,i,o,a,r,c){var l,_,v,u,f,y,x,k,w,$,S,z,I,C,A;const F=this.resolveEntity(t.entity,r)||t.entity,j=F?null==e?void 0:e.states[F]:void 0;let U;null==j||j.state;const E=i?!1!==t.show_icon_when_active:!1!==t.show_icon_when_inactive,P=i?!1!==t.show_name_when_active:!1!==t.show_name_when_inactive,T=i?!1!==t.show_state_when_active:!1!==t.show_state_when_inactive;let N,R,q,O,L=i&&t.icon_active||t.icon_inactive,B=i?t.use_state_color_for_active_icon?this._getEntityStateColor(j)||t.active_icon_color:t.use_entity_color_for_icon&&(null===(l=null==j?void 0:j.attributes)||void 0===l?void 0:l.rgb_color)?`rgb(${j.attributes.rgb_color.join(",")})`:t.active_icon_color:t.use_state_color_for_inactive_icon?this._getEntityStateColor(j)||t.inactive_icon_color:t.use_entity_color_for_icon&&(null===(_=null==j?void 0:j.attributes)||void 0===_?void 0:_.rgb_color)?`rgb(${j.attributes.rgb_color.join(",")})`:t.inactive_icon_color;if(t.unified_template_mode&&t.unified_template){!this._templateService&&e?this._templateService=new s.I(e):this._templateService&&e&&this._templateService.updateHass(e);let n=null;!i&&j&&(t.inactive_attribute&&void 0!==(null===(v=j.attributes)||void 0===v?void 0:v[t.inactive_attribute])?n=String(j.attributes[t.inactive_attribute]):t.inactive_state&&""!==t.inactive_state.trim()&&(n=t.inactive_state));const a=(0,h.KD)(t.unified_template,e,r),l=null!==n?"_inactive_preview":"",d=this._buildUnifiedIconTemplateKey(t,a,r,null==o?void 0:o.id,c,l);if(e.__uvc_template_strings||(e.__uvc_template_strings={}),this._templateService){const i=this._getEntityContext(t,e,r),o=null!==n?Object.assign(Object.assign({},i),{state:n,state_number:(0,b.v)(n)}):i,c=null!==n?`${t.entity}|inactive_preview=${n}`:(0,m.jh)(t.entity,e);this._templateService.subscribeToTemplate(a,d,()=>{this.triggerPreviewUpdate()},o,r,c)}const _=null===(u=null==e?void 0:e.__uvc_template_strings)||void 0===u?void 0:u[d];let p=!1;if(_&&""!==String(_).trim()){const t=(0,g.cv)(_);if(!(0,g.HD)(t)){const e=(0,g.yv)(t);e&&(L=e),t.icon_color&&(B=t.icon_color,this._lastUnifiedIconDisplayColorByKey.set(d,t.icon_color),p=!0),t.name&&(N=String(t.name)),void 0!==t.state_text?R=String(t.state_text):t._isString&&t.content&&!e&&(R=String(t.content).trim()),t.name_color&&(q=String(t.name_color)),t.state_color&&(O=String(t.state_color)),t.container_background_color&&(U=t.container_background_color)}}if(!p){const t=this._lastUnifiedIconDisplayColorByKey.get(d);t&&(B=t)}}else(null===(f=null==j?void 0:j.attributes)||void 0===f?void 0:f.icon)&&!L&&(L=j.attributes.icon);const W=q||(null==a?void 0:a.color)||(i?t.active_name_color:t.inactive_name_color),D=O||(null==a?void 0:a.color)||(i?t.active_state_color:t.inactive_state_color),M=a?{fontSize:a.font_size?/[a-zA-Z%]/.test(a.font_size)?a.font_size:this.addPixelUnit(a.font_size)||a.font_size:void 0,fontFamily:a.font_family||void 0,fontWeight:a.font_weight||void 0,fontStyle:a.font_style||void 0,textTransform:a.text_transform||void 0,lineHeight:a.line_height||void 0,letterSpacing:a.letter_spacing||void 0,textAlign:a.text_align||void 0,textShadow:a.text_shadow_h&&a.text_shadow_v?`${a.text_shadow_h||"0"} ${a.text_shadow_v||"0"} ${a.text_shadow_blur||"0"} ${a.text_shadow_color||"rgba(0,0,0,0.5)"}`:void 0}:{fontSize:void 0,fontFamily:void 0,fontWeight:void 0,fontStyle:void 0,textTransform:void 0,lineHeight:void 0,letterSpacing:void 0,textAlign:void 0,textShadow:void 0},H=N||(i?t.custom_active_name_text||t.name||(null===(y=null==j?void 0:j.attributes)||void 0===y?void 0:y.friendly_name)||t.entity:t.custom_inactive_name_text||t.name||(null===(x=null==j?void 0:j.attributes)||void 0===x?void 0:x.friendly_name)||t.entity);let K;K=void 0!==R?R:this._getDisplayStateValue(t,e,i,r);const V=i?t.active_icon_background||t.icon_background:t.inactive_icon_background||t.icon_background,G=i?t.active_icon_background_color||t.icon_background_color:t.inactive_icon_background_color||t.icon_background_color,Y=i?null!==(w=null!==(k=t.active_icon_background_padding)&&void 0!==k?k:t.icon_background_padding)&&void 0!==w?w:8:null!==(S=null!==($=t.inactive_icon_background_padding)&&void 0!==$?$:t.icon_background_padding)&&void 0!==S?S:8,X=(()=>{var e;if("none"===V)return{};const i=t.use_entity_color_for_icon_background&&(null===(e=null==j?void 0:j.attributes)||void 0===e?void 0:e.rgb_color)?`rgb(${j.attributes.rgb_color.join(",")})`:G,{styles:n}=(0,p.U9)({color:i,fallback:G||"transparent"});return Object.assign(Object.assign({},n),{borderRadius:"circle"===V?"50%":"rounded-square"===V?"8px":"0",padding:`${Y}px`})})(),J=Object.assign(Object.assign({},{display:"flex",alignItems:"center",justifyContent:"center"}),X),Z=t.active_icon_animation||"none",Q=t.inactive_icon_animation||"none",tt=i?Z:Q,et="none"!==tt?`icon-animation-${tt}`:"",it={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:t.vertical_alignment||"center",padding:(null==a?void 0:a.padding_top)||(null==a?void 0:a.padding_bottom)||(null==a?void 0:a.padding_left)||(null==a?void 0:a.padding_right)?`${this.addPixelUnit(a.padding_top)||"0px"} ${this.addPixelUnit(a.padding_right)||"0px"} ${this.addPixelUnit(a.padding_bottom)||"0px"} ${this.addPixelUnit(a.padding_left)||"0px"}`:"0",borderRadius:(null==a?void 0:a.border_radius)?this.addPixelUnit(a.border_radius)||"0":"circle"===t.container_background_shape?"50%":"rounded"===t.container_background_shape?"8px":"square"===t.container_background_shape?"0":"8px",cursor:"pointer",transition:"all 0.2s ease",width:t.container_width?`${t.container_width}%`:"auto",margin:"0 auto"};if(t.container_background_shape&&"none"!==t.container_background_shape){const i=U||t.container_background_color||"#808080",{styles:n}=(0,p.U9)({color:i,fallback:i,image:this.getBackgroundImageCSS(t,e,r),imageSize:t.background_size||"cover",imagePosition:t.background_position||"center",imageRepeat:t.background_repeat||"no-repeat"});Object.assign(it,n)}else U?(it.backgroundColor=U,it.background=U,(null==a?void 0:a.border_radius)&&(it.borderRadius=this.addPixelUnit(a.border_radius)||"0")):(it.background="transparent",it.backgroundColor="transparent");const nt=null!==(z=t.name_icon_gap)&&void 0!==z?z:8,ot=null!==(I=t.name_state_gap)&&void 0!==I?I:2,at=null!==(C=t.icon_state_gap)&&void 0!==C?C:4,rt=(o&&(null===(A=o.design)||void 0===A||A.hover_effect),this.getHoverEffectClass(o));return n.qy`
      <div
        class="icon-item-preview ${rt}"
        style=${this.styleObjectToCss(Object.assign(Object.assign({},it),{gap:"0px"}))}
        @click=${i=>{if(i.preventDefault(),o&&(!o.tap_action||"nothing"!==o.tap_action.action)){const n=o.tap_action||{action:"default",entity:F||t.entity};d.K.handleAction(n,e,i.target,r,F||t.entity,o)}}}
      >
        ${E?n.qy`
              <div
                style="${this.styleObjectToCss(Object.assign(Object.assign({},J),{marginBottom:P?`${nt}px`:T?`${at}px`:"0px"}))}"
              >
                ${this._shouldUseEntityPicture(j,t)?n.qy`
                      <img
                        src="${this._getEntityPicture(j,e)}"
                        class="${et} ultra-force-animation entity-picture"
                        style="
                          width: ${Number(i?t.active_icon_size||t.icon_size:t.inactive_icon_size||t.icon_size)||26}px;
                          height: ${Number(i?t.active_icon_size||t.icon_size:t.inactive_icon_size||t.icon_size)||26}px;
                          border-radius: 50%;
                          object-fit: cover;
                          ${et&&"none"!==et?`animation: ${this._getInlineAnimation(et)} !important;`:""}
                        "
                        data-animation-debug="${et||"none"}"
                        data-is-active="${i}"
                        alt="Entity picture"
                      />
                    `:n.qy`
                      <ha-icon
                        icon="${L||"mdi:help-circle"}"
                        class="${et} ultra-force-animation"
                        style="
                          color: ${B||"var(--secondary-text-color)"};
                          --mdc-icon-size: ${(()=>{const e=Number(i?t.active_icon_size||t.icon_size:t.inactive_icon_size||t.icon_size);return e?`${e}px`:(null==o?void 0:o.icon_size)?`${o.icon_size}px`:"26px"})()};
                          ${et&&"none"!==et?`animation: ${this._getInlineAnimation(et)} !important;`:""}
                        "
                        data-animation-debug="${et||"none"}"
                        data-is-active="${i}"
                      ></ha-icon>
                    `}
              </div>
            `:""}
        ${P?n.qy`
              <div
                class="icon-name"
                style="
                  font-size: ${(()=>{if(M.fontSize)return M.fontSize;const e=i?t.active_text_size||t.text_size:t.inactive_text_size||t.text_size;return e?`${e}px`:(null==o?void 0:o.text_size)?`${o.text_size}px`:i?"12px":"14px"})()};
                  color: ${W||"var(--primary-text-color)"};
                  text-align: ${M.textAlign||"center"};
                  line-height: ${M.lineHeight||"1.2"};
                  max-width: 120px;
                  word-wrap: break-word;
                  margin-bottom: ${T?`${ot}px`:"0px"};
                  font-family: ${M.fontFamily||"inherit"};
                  font-weight: ${M.fontWeight||"inherit"};
                  font-style: ${M.fontStyle||"inherit"};
                  text-transform: ${M.textTransform||"inherit"};
                  letter-spacing: ${M.letterSpacing||"inherit"};
                  text-shadow: ${M.textShadow||"none"};
                "
              >
                ${H}
              </div>
            `:""}
        ${T?n.qy`
              <div
                class="icon-state"
                style="
                  font-size: ${(()=>{if(M.fontSize)return M.fontSize;const e=i?t.active_state_size||t.state_size:t.inactive_state_size||t.state_size;return e?`${e}px`:(null==o?void 0:o.text_size)?`${o.text_size}px`:"10px"})()};
                  color: ${D||"var(--secondary-text-color)"};
                  text-align: ${M.textAlign||"center"};
                  line-height: ${M.lineHeight||"1.2"};
                  font-family: ${M.fontFamily||"inherit"};
                  font-weight: ${M.fontWeight||"inherit"};
                  font-style: ${M.fontStyle||"inherit"};
                  text-transform: ${M.textTransform||"inherit"};
                  letter-spacing: ${M.letterSpacing||"inherit"};
                  text-shadow: ${M.textShadow||"none"};
                "
              >
                ${K}
              </div>
            `:""}
      </div>
    `}renderIconGrid(t,e,i,o=!0){var a;null===(a=t.design)||void 0===a||a.hover_effect;const r=this.getHoverEffectClass(t),c=t.design||{},l={color:c.color,font_size:c.font_size,font_weight:c.font_weight,font_style:c.font_style,text_transform:c.text_transform,font_family:c.font_family,line_height:c.line_height,letter_spacing:c.letter_spacing,text_align:c.text_align,text_shadow_h:c.text_shadow_h,text_shadow_v:c.text_shadow_v,text_shadow_blur:c.text_shadow_blur,text_shadow_color:c.text_shadow_color,background_position:c.background_position,background_repeat:c.background_repeat,hover_effect:c.hover_effect};return n.qy`
      <div
        class="icon-grid"
        style="
          display: grid;
          grid-template-columns: repeat(${Math.min(Math.max(1,Math.floor((t.columns||3)/2)),t.icons.length)}, 1fr);
          grid-auto-flow: ${!1===t.allow_wrap?"column":"row"};
          gap: ${t.gap||16}px;
          justify-content: ${t.alignment||"center"};
        "
      >
        ${t.icons.slice(0,6).map((a,c)=>{var d,_,v,u,b,f,y,x,k,w,$,S,z;const I=null==e?void 0:e.states[a.entity],C=(null==I||I.state,i);let A,F,j,U,E,P,T;if(a.unified_template_mode&&a.unified_template){!this._templateService&&e?this._templateService=new s.I(e):this._templateService&&e&&this._templateService.updateHass(e);const i=(0,h.KD)(a.unified_template,e,void 0),n=this._buildUnifiedIconTemplateKey(a,i,void 0,t.id,c);if(e.__uvc_template_strings||(e.__uvc_template_strings={}),this._templateService){const t=this._getEntityContext(a,e),o=(0,m.jh)(a.entity,e);this._templateService.subscribeToTemplate(i,n,()=>{this.triggerPreviewUpdate()},t,void 0,o)}const o=null===(d=null==e?void 0:e.__uvc_template_strings)||void 0===d?void 0:d[n];let r=!1;if(o&&""!==String(o).trim()){const t=(0,g.cv)(o);if(!(0,g.HD)(t)){const e=(0,g.yv)(t);e?F=e:t.icon&&(F=String(t.icon)),t.icon_color&&(j=String(t.icon_color),this._lastUnifiedIconDisplayColorByKey.set(n,j),r=!0),t.name&&(U=String(t.name)),void 0!==t.state_text&&(E=String(t.state_text)),t.name_color&&(P=String(t.name_color)),t.state_color&&(T=String(t.state_color)),t.container_background_color&&(A=t.container_background_color)}}if(!r){const t=this._lastUnifiedIconDisplayColorByKey.get(n);t&&(j=t)}}const N=C?!1!==a.show_icon_when_active:!1!==a.show_icon_when_inactive,R=C?!1!==a.show_name_when_active:!1!==a.show_name_when_inactive,q=C?!1!==a.show_state_when_active:!1!==a.show_state_when_inactive;let O=C&&a.icon_active||a.icon_inactive;(null===(_=null==I?void 0:I.attributes)||void 0===_?void 0:_.icon)&&!O&&(O=I.attributes.icon);let L=C?a.use_state_color_for_active_icon?this._getEntityStateColor(I)||a.active_icon_color:a.use_entity_color_for_icon&&(null===(v=null==I?void 0:I.attributes)||void 0===v?void 0:v.rgb_color)?`rgb(${I.attributes.rgb_color.join(",")})`:a.active_icon_color:a.use_state_color_for_inactive_icon?this._getEntityStateColor(I)||a.inactive_icon_color:a.use_entity_color_for_icon&&(null===(u=null==I?void 0:I.attributes)||void 0===u?void 0:u.rgb_color)?`rgb(${I.attributes.rgb_color.join(",")})`:a.inactive_icon_color;F&&(O=F),j&&(L=j);const B=P||l.color||(C?a.active_name_color:a.inactive_name_color),W=T||l.color||(C?a.active_state_color:a.inactive_state_color),D=l.font_size?/[a-zA-Z%]/.test(l.font_size)?l.font_size:this.addPixelUnit(l.font_size)||l.font_size:void 0,M=l.font_family||void 0,H=l.font_weight||void 0,K=l.font_style||void 0,V=l.text_transform||void 0,G=l.line_height||void 0,Y=l.letter_spacing||void 0,X=l.text_align||void 0,J=l.text_shadow_h&&l.text_shadow_v?`${l.text_shadow_h||"0"} ${l.text_shadow_v||"0"} ${l.text_shadow_blur||"0"} ${l.text_shadow_color||"rgba(0,0,0,0.5)"}`:void 0,Z=U||(C?a.custom_active_name_text||a.name||(null===(b=null==I?void 0:I.attributes)||void 0===b?void 0:b.friendly_name)||a.entity:a.custom_inactive_name_text||a.name||(null===(f=null==I?void 0:I.attributes)||void 0===f?void 0:f.friendly_name)||a.entity);let Q;Q=void 0!==E?E:this._getDisplayStateValue(a,e,C);const tt=C?a.active_icon_background||a.icon_background:a.inactive_icon_background||a.icon_background,et=C?a.active_icon_background_color||a.icon_background_color:a.inactive_icon_background_color||a.icon_background_color,it=C?null!==(x=null!==(y=a.active_icon_background_padding)&&void 0!==y?y:a.icon_background_padding)&&void 0!==x?x:8:null!==(w=null!==(k=a.inactive_icon_background_padding)&&void 0!==k?k:a.icon_background_padding)&&void 0!==w?w:8,nt=(()=>{var t;if("none"===tt)return{};const e=a.use_entity_color_for_icon_background&&(null===(t=null==I?void 0:I.attributes)||void 0===t?void 0:t.rgb_color)?`rgb(${I.attributes.rgb_color.join(",")})`:et,{styles:i}=(0,p.U9)({color:e,fallback:et||"transparent"});return Object.assign(Object.assign({},i),{borderRadius:"circle"===tt?"50%":"rounded-square"===tt?"8px":"0",padding:`${it}px`})})(),ot=Object.assign(Object.assign({},{display:"flex",alignItems:"center",justifyContent:"center"}),nt),at=a.active_icon_animation||"none",rt=a.inactive_icon_animation||"none",ct=C?at:rt,st="none"!==ct?`icon-animation-${ct}`:"";st&&o&&setTimeout(()=>{this._updateIconAnimationClasses(a.entity,st,C)},150);const lt={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:a.vertical_alignment||"center",padding:"8px",borderRadius:"circle"===a.container_background_shape?"50%":"rounded"===a.container_background_shape?"8px":"square"===a.container_background_shape?"0":"8px",cursor:"pointer",transition:"all 0.2s ease",width:a.container_width?`${a.container_width}%`:"auto",margin:"0 auto"};if(a.container_background_shape&&"none"!==a.container_background_shape){const t=A||a.container_background_color||"#808080",{styles:i}=(0,p.U9)({color:t,fallback:t,image:this.getBackgroundImageCSS(a,e),imageSize:a.background_size||"cover",imagePosition:a.background_position||"center",imageRepeat:a.background_repeat||"no-repeat"});Object.assign(lt,i)}else A?(lt.backgroundColor=A,lt.background=A):(lt.background="transparent",lt.backgroundColor="transparent");const dt=null!==($=a.name_icon_gap)&&void 0!==$?$:8,_t=null!==(S=a.name_state_gap)&&void 0!==S?S:2,vt=null!==(z=a.icon_state_gap)&&void 0!==z?z:4;return n.qy`
            <div
              class="icon-item-preview ${r}"
              style=${this.styleObjectToCss(Object.assign(Object.assign({},lt),{gap:"0px"}))}
            >
              ${N?n.qy`
                    <div
                      style="${this.styleObjectToCss(Object.assign(Object.assign({},ot),{marginBottom:R?`${dt}px`:q?`${vt}px`:"0px"}))}"
                    >
                      ${this._shouldUseEntityPicture(I,a)?n.qy`
                            <img
                              src="${this._getEntityPicture(I,e)}"
                              class="${st} ultra-force-animation entity-picture"
                              style="
                                width: ${Number(C?a.active_icon_size||a.icon_size:a.inactive_icon_size||a.icon_size)||26}px;
                                height: ${Number(C?a.active_icon_size||a.icon_size:a.inactive_icon_size||a.icon_size)||26}px;
                                border-radius: 50%;
                                object-fit: cover;
                                ${st&&"none"!==st?`animation: ${this._getInlineAnimation(st)} !important;`:""}
                              "
                              data-animation-debug="${st||"none"}"
                              data-is-active="${C}"
                              alt="Entity picture"
                            />
                          `:n.qy`
                            <ha-icon
                              icon="${O||"mdi:help-circle"}"
                              class="${st} ultra-force-animation"
                              style="
                                color: ${L||"var(--secondary-text-color)"};
                                --mdc-icon-size: ${(()=>{const e=Number(C?a.active_icon_size||a.icon_size:a.inactive_icon_size||a.icon_size);return e?`${e}px`:(null==t?void 0:t.icon_size)?`${t.icon_size}px`:"26px"})()};
                                ${st&&"none"!==st?`animation: ${this._getInlineAnimation(st)} !important;`:""}
                              "
                              data-animation-debug="${st||"none"}"
                              data-is-active="${C}"
                            ></ha-icon>
                          `}
                    </div>
                  `:""}
              ${R?n.qy`
                    <div
                      class="icon-name"
                      style="
                        font-size: ${D||`${C?a.active_text_size||a.text_size||12:a.inactive_text_size||a.text_size||14}px`};
                        color: ${B||"var(--primary-text-color)"};
                        text-align: ${X||"center"};
                        line-height: ${G||"1.2"};
                        max-width: 120px;
                        word-wrap: break-word;
                        margin-bottom: ${q?`${_t}px`:"0px"};
                        font-family: ${M||"inherit"};
                        font-weight: ${H||"inherit"};
                        font-style: ${K||"inherit"};
                        text-transform: ${V||"inherit"};
                        letter-spacing: ${Y||"inherit"};
                        text-shadow: ${J||"none"};
                      "
                    >
                      ${Z}
                    </div>
                  `:""}
              ${q?n.qy`
                    <div
                      class="icon-state"
                      style="
                        font-size: ${D||`${C?a.active_state_size||a.state_size||10:a.inactive_state_size||a.state_size||10}px`};
                        color: ${W||"var(--secondary-text-color)"};
                        text-align: ${X||"center"};
                        line-height: ${G||"1.2"};
                        font-family: ${M||"inherit"};
                        font-weight: ${H||"inherit"};
                        font-style: ${K||"inherit"};
                        text-transform: ${V||"inherit"};
                        letter-spacing: ${Y||"inherit"};
                        text-shadow: ${J||"none"};
                      "
                    >
                      ${Q}
                    </div>
                  `:""}
            </div>
          `})}
      </div>
    `}validate(t){const e=t,i=[...super.validate(t).errors];return e.icons&&e.icons.length>0&&e.icons.forEach((t,e)=>{"static"===t.icon_mode?t.icon_inactive&&t.icon_inactive.trim():t.entity&&""!==t.entity.trim()||t.icon_inactive&&t.icon_inactive.trim()}),{valid:0===i.length,errors:i}}updateHass(t){this._templateService&&this._templateService.updateHass(t)}cleanup(){this._templateService&&(this._templateService.unsubscribeAllTemplates(),this._templateService=void 0),this._attributeCache.clear(),this._processingAttributes.clear(),this._updateTimeout&&(clearTimeout(this._updateTimeout),this._updateTimeout=void 0)}_getDisplayStateValue(t,e,i,n){var o,a;const r=this.resolveEntity(t.entity,n)||t.entity,c=r?null==e?void 0:e.states[r]:void 0;if(!c)return"unknown";const s=c.state;if(t.display_attribute&&void 0!==(null===(o=c.attributes)||void 0===o?void 0:o[t.display_attribute])){const i=c.attributes[t.display_attribute];return this._formatValueWithUnits(String(i),r,t,e)}const l=i?t.active_attribute:t.inactive_attribute;if(l&&void 0!==(null===(a=c.attributes)||void 0===a?void 0:a[l])){const i=c.attributes[l];return this._formatValueWithUnits(String(i),r,t,e)}const d=i?t.custom_active_state_text:t.custom_inactive_state_text;return d&&""!==d.trim()?d:this._formatValueWithUnits(s,r,t,e)}_getEntityAttributes(t,e,i){var n;const o=[{value:"",label:"None (Use State)"}];try{const a=this.resolveEntity(t,i)||t;if(!a||!(null===(n=null==e?void 0:e.states)||void 0===n?void 0:n[a]))return o;const r=e.states[a].attributes||{};return Object.keys(r).forEach(t=>{if(!t.startsWith("_")&&"friendly_name"!==t&&"entity_picture"!==t&&"supported_features"!==t&&"device_class"!==t&&"state_class"!==t){const e=r[t];let i="";i=null==e?"null":"object"==typeof e?Array.isArray(e)?`[${e.length} items]`:"{object}":String(e).substring(0,20),o.push({value:t,label:`${t} (${i})`})}}),o}catch(t){return console.error("Error getting attributes:",t),o}}_isBinaryEntity(t){const e=t.split(".")[0];return["binary_sensor","switch","input_boolean","automation","script","light","fan","lock","cover","device_tracker"].includes(e)}_matchesState(t,e,i){var n,o;if(t===e)return!0;if(t.toLowerCase()===e.toLowerCase())return!0;const a=e.match(/^(>=|<=|!=|>|<|=)\s*(.+)$/);if(a){const e=a[1],i=a[2].trim(),n=parseFloat(t),o=parseFloat(i);if(isNaN(n)||isNaN(o))switch(e){case"!=":return t.toLowerCase()!==i.toLowerCase();case"=":return t.toLowerCase()===i.toLowerCase();default:return!1}else switch(e){case">":return n>o;case">=":return n>=o;case"<":return n<o;case"<=":return n<=o;case"!=":return n!==o;case"=":return n===o}}const r=null===(n=null==i?void 0:i.entity_id)||void 0===n?void 0:n.split(".")[0],c=null===(o=null==i?void 0:i.attributes)||void 0===o?void 0:o.device_class,s=this._getStateMappings(r,c);return s[e.toLowerCase()]===t.toLowerCase()||s[t.toLowerCase()]===e.toLowerCase()}_getStateMappings(t,e){const i={on:"on",off:"off",true:"on",false:"off",yes:"on",no:"off",1:"on",0:"off"};switch(t){case"binary_sensor":if(i.open="on",i.closed="off",i.detected="on",i.clear="off",i.motion="on",i.no_motion="off",i.occupied="on",i.not_occupied="off",i.wet="on",i.dry="off",i.connected="on",i.disconnected="off",i.home="on",i.away="off",i.problem="on",i.ok="off",i.unsafe="on",i.safe="off",e)switch(e){case"door":case"window":case"garage_door":i.open="on",i.closed="off";break;case"lock":i.unlocked="on",i.locked="off";break;case"motion":i.motion="on",i.no_motion="off";break;case"occupancy":i.occupied="on",i.not_occupied="off";break;case"presence":i.home="on",i.away="off";break;case"connectivity":i.connected="on",i.disconnected="off"}break;case"cover":i.open="on",i.closed="off",i.opening="on",i.closing="off";break;case"lock":i.unlocked="on",i.locked="off",i.unlocking="on",i.locking="off";break;case"device_tracker":case"person":i.home="on",i.away="off",i.not_home="off";break;case"alarm_control_panel":i.disarmed="off",i.armed_home="on",i.armed_away="on",i.armed_night="on",i.armed_vacation="on",i.armed_custom_bypass="on"}return i}_evaluateIconState(t,e,i){var n,o,a,r,c;if("static"===t.icon_mode)return!1;const l=this.resolveEntity(t.entity,i)||t.entity,d=l?null==e?void 0:e.states[l]:void 0;if(!d)return!1;const _=d.state,v=t.inactive_attribute?(null===(o=null===(n=d.attributes)||void 0===n?void 0:n[t.inactive_attribute])||void 0===o?void 0:o.toString())||"":_,u=t.active_attribute?(null===(r=null===(a=d.attributes)||void 0===a?void 0:a[t.active_attribute])||void 0===r?void 0:r.toString())||"":_;let p=!1;if(t.unified_template_mode&&t.unified_template&&t.ignore_entity_state_config){p=!0,!this._templateService&&e?this._templateService=new s.I(e):this._templateService&&e&&this._templateService.updateHass(e);const n=(0,h.KD)(t.unified_template,e,i),o=this._buildUnifiedIconTemplateKey(t,n,i);if(e.__uvc_template_strings||(e.__uvc_template_strings={}),this._templateService){const a=this._getEntityContext(t,e,i),r=(0,m.jh)(t.entity,e);this._templateService.subscribeToTemplate(n,o,()=>{this.triggerPreviewUpdate()},a,void 0,r)}const a=null===(c=null==e?void 0:e.__uvc_template_strings)||void 0===c?void 0:c[o];if(void 0!==a){const t=String(a).trim(),e=t.toLowerCase();if(["true","false","on","off","yes","no","0","1"].includes(e))return["true","on","yes","1"].includes(e)||parseFloat(e)>0&&!isNaN(parseFloat(e));if(t.startsWith("{")&&t.endsWith("}"))try{const e=JSON.parse(t);if(void 0!==e.active)return Boolean(e.active);if(void 0!==e.is_active)return Boolean(e.is_active)}catch(t){}}}if(t.active_state&&t.inactive_state)return!!this._matchesState(u,t.active_state,d)||(this._matchesState(v,t.inactive_state,d),!1);if(t.active_state)return this._matchesState(u,t.active_state,d);if(t.inactive_state)return!this._matchesState(v,t.inactive_state,d);if((t.active_attribute||t.inactive_attribute)&&!t.active_state&&!t.inactive_state){const t=parseFloat(u||v);if(!isNaN(t))return t>70;const e=(u||v).toLowerCase(),i=["sunny","clear","fair","cold","cool"];return!!["cloudy","rainy","stormy","snowy","windy","hot","warm"].some(t=>e.includes(t))||!i.some(t=>e.includes(t))}const g=t.active_attribute||t.inactive_attribute?t.active_attribute?u:v:_;if(["on","true","active","open","playing","home"].includes(g.toLowerCase()))return!0;if(["off","false","inactive","closed","paused","stopped","away","unavailable","unknown"].includes(g.toLowerCase()))return!1;const b=parseFloat(g);return!isNaN(b)&&b>0}_getEntityContext(t,e,i){return(0,m.pL)(this.resolveEntity(t.entity,i)||t.entity,e,{name:t.name,icon_inactive:t.icon_inactive,icon_active:t.icon_active,active_state:t.active_state,inactive_state:t.inactive_state})}getStyles(){return`\n      /* Scope all icon-form tweaks to icon module editor only */\n      .icon-module-general-settings [slot='label'] {\n        display: none !important;\n      }\n\n\n      \n      .icon-grid {\n        width: 100%;\n      }\n\n      /* Collapsible Header Styles */\n      .collapsible-header:hover {\n        background: rgba(var(--rgb-primary-color), 0.08) !important;\n        border-color: var(--primary-color) !important;\n      }\n\n      .collapsible-header:active {\n        transform: scale(0.98);\n      }\n\n      /* Split Preview Styles */\n      .split-preview-container {\n        position: relative;\n      }\n\n      .split-preview-container::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 1px;\n        height: 100%;\n        background: var(--divider-color);\n        z-index: 1;\n      }\n\n      .icon-module-split-preview .inactive-preview .icon-item-preview {\n        border: 1px solid rgba(var(--rgb-primary-color), 0.1);\n        background: rgba(var(--rgb-primary-color), 0.02);\n      }\n\n      .icon-module-split-preview .active-preview .icon-item-preview {\n        border: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        background: rgba(var(--rgb-primary-color), 0.04);\n      }\n\n      .icon-module-split-preview .inactive-preview .icon-item-preview.hover-enabled:hover {\n        background: rgba(var(--rgb-primary-color), 0.08) !important;\n        border-color: var(--primary-color) !important;\n        transform: scale(1.02);\n      }\n\n      .icon-module-split-preview .active-preview .icon-item-preview.hover-enabled:hover {\n        background: rgba(var(--rgb-primary-color), 0.12) !important;\n        border-color: var(--primary-color) !important;\n        transform: scale(1.02);\n      }\n\n      /* Preview state indicators */\n      .icon-module-split-preview .preview-header div {\n        padding: 8px 12px;\n        border-radius: 20px;\n        font-size: 12px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n        margin: 0 8px;\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border: 1px solid rgba(var(--rgb-primary-color), 0.2);\n      }\n\n      /* Responsive adjustments for split view */\n      @media (max-width: 768px) {\n        .icon-module-split-preview .split-preview-container {\n          grid-template-columns: 1fr !important;\n          grid-template-rows: auto auto;\n        }\n\n        .icon-module-split-preview .preview-header {\n          flex-direction: column !important;\n          gap: 8px !important;\n        }\n\n        .icon-module-split-preview .inactive-preview {\n          border-right: none !important;\n          border-bottom: 1px solid var(--divider-color) !important;\n        }\n\n        .icon-module-split-preview .split-preview-container::before {\n          display: none;\n        }\n\n        .icon-module-split-preview .preview-header div {\n          margin: 0 !important;\n        }\n\n        .collapsible-header {\n          padding: 10px 12px !important;\n        }\n\n        .collapsible-header span {\n          font-size: 14px !important;\n        }\n\n        .collapsible-header ha-icon {\n          font-size: 16px !important;\n        }\n      }\n\n      @media (max-width: 480px) {\n        /* Removed mobile-specific icon-grid overrides to maintain consistent user-configured spacing */\n\n        .icon-module-split-preview .inactive-preview,\n        .icon-module-split-preview .active-preview {\n          padding: 8px !important;\n        }\n\n        .icon-module-split-preview .preview-header div {\n          font-size: 10px !important;\n          padding: 6px 8px !important;\n        }\n\n        .collapsible-header {\n          padding: 8px 10px !important;\n        }\n\n        .collapsible-header span {\n          font-size: 12px !important;\n        }\n\n        .collapsible-header ha-icon {\n          font-size: 14px !important;\n        }\n      }\n      \n      .icon-item-preview.hover-enabled:hover {\n        background: var(--primary-color) !important;\n        color: var(--text-primary-color, #fff);\n        transform: scale(1.05);\n      }\n      \n      .icon-item-preview.hover-enabled:hover ha-icon {\n        color: var(--text-primary-color, #fff) !important;\n      }\n      \n      .icon-item-preview.hover-enabled:hover .icon-name,\n      .icon-item-preview.hover-enabled:hover .icon-state {\n        color: var(--text-primary-color, #fff) !important;\n      }\n      \n      /* Field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n     \n        margin-bottom: 4px !important;\n        display: block !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      .settings-section {\n        margin-bottom: 16px;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Conditional Fields Grouping CSS */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 8px 8px 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      .conditional-fields-group:hover {\n        background: rgba(var(--rgb-primary-color), 0.12);\n      }\n\n      .conditional-fields-header {\n        background: rgba(var(--rgb-primary-color), 0.15);\n        padding: 12px 16px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        border-bottom: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      .conditional-fields-content {\n        padding: 16px;\n      }\n\n      .conditional-fields-content > .field-title:first-child {\n        margin-top: 0 !important;\n      }\n\n      @keyframes slideInFromLeft {\n        from { \n          opacity: 0; \n          transform: translateX(-10px); \n        }\n        to { \n          opacity: 1; \n          transform: translateX(0); \n        }\n      }\n\n      /* Expandable details styling */\n      details > summary {\n        list-style: none;\n      }\n\n      details > summary::-webkit-details-marker {\n        display: none;\n      }\n\n      details[open] > summary ha-icon {\n        transform: rotate(90deg);\n      }\n\n      details > summary:hover {\n        background: rgba(var(--rgb-primary-color), 0.1) !important;\n      }\n\n      /* Icon animations - Simple and direct selectors */\n      .icon-animation-pulse {\n        animation: iconPulse 2s ease-in-out infinite !important;\n      }\n\n      .icon-animation-spin {\n        animation: iconSpin 2s linear infinite !important;\n      }\n\n      .icon-animation-bounce {\n        animation: iconBounce 1s ease-in-out infinite !important;\n      }\n\n      .icon-animation-flash {\n        animation: iconFlash 1s ease-in-out infinite !important;\n      }\n\n      .icon-animation-shake {\n        animation: iconShake 0.5s ease-in-out infinite !important;\n      }\n\n      .icon-animation-vibrate {\n        animation: iconVibrate 0.3s ease-in-out infinite !important;\n      }\n\n      .icon-animation-rotate-left {\n        animation: iconRotateLeft 2s linear infinite !important;\n      }\n\n      .icon-animation-rotate-right {\n        animation: iconRotateRight 2s linear infinite !important;\n      }\n\n      .icon-animation-fade {\n        animation: iconFade 2s ease-in-out infinite !important;\n      }\n\n      .icon-animation-scale {\n        animation: iconScale 1s ease-in-out infinite !important;\n      }\n\n      .icon-animation-tada {\n        animation: iconTada 1s ease-in-out infinite !important;\n      }\n\n\n\n      @keyframes iconPulse {\n        0%, 100% { opacity: 1; transform: scale(1); }\n        50% { opacity: 0.7; transform: scale(1.1); }\n      }\n\n      @keyframes iconSpin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n\n      @keyframes iconBounce {\n        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }\n        40% { transform: translateY(-10px); }\n        60% { transform: translateY(-5px); }\n      }\n\n      @keyframes iconFlash {\n        0%, 50%, 100% { opacity: 1; }\n        25%, 75% { opacity: 0.3; }\n      }\n\n      @keyframes iconShake {\n        0%, 100% { transform: translateX(0); }\n        10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }\n        20%, 40%, 60%, 80% { transform: translateX(2px); }\n      }\n\n      @keyframes iconVibrate {\n        0%, 100% { transform: translate(0); }\n        10% { transform: translate(-1px, -1px); }\n        20% { transform: translate(1px, -1px); }\n        30% { transform: translate(-1px, 1px); }\n        40% { transform: translate(1px, 1px); }\n        50% { transform: translate(-1px, -1px); }\n        60% { transform: translate(1px, -1px); }\n        70% { transform: translate(-1px, 1px); }\n        80% { transform: translate(1px, 1px); }\n        90% { transform: translate(-1px, -1px); }\n      }\n\n      @keyframes iconRotateLeft {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(-360deg); }\n      }\n\n      @keyframes iconRotateRight {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n\n      @keyframes iconFade {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.3; }\n      }\n\n      @keyframes iconScale {\n        0%, 100% { transform: scale(1); }\n        50% { transform: scale(1.2); }\n      }\n\n      @keyframes iconTada {\n        0% { transform: scale(1); }\n        10%, 20% { transform: scale(0.9) rotate(-3deg); }\n        30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }\n        40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }\n        100% { transform: scale(1) rotate(0); }\n      }\n\n      @keyframes lockUnlockedPulse {\n        0%, 100% { \n          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);\n          border-color: var(--info-color, #2196F3);\n        }\n        50% { \n          box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.4);\n          border-color: var(--info-color, #1976D2);\n        }\n      }\n\n      /* Respect user's motion preferences */\n      @media (prefers-reduced-motion: reduce) {\n        .lock-btn.unlocked {\n          animation: none !important;\n        }\n      }\n\n      /* Add icon button styling */\n      .add-icon-btn:hover {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      \n      /* Remove icon button styling */\n      .remove-icon-btn:disabled {\n        opacity: 0.3;\n        cursor: not-allowed;\n      }\n\n      /* Icon picker specific styling */\n      ha-icon-picker {\n        --ha-icon-picker-width: 100%;\n        --ha-icon-picker-height: 56px;\n      }\n\n      /* Dropdown styling */\n      ha-select {\n        width: 100%;\n        --ha-select-height: 40px;\n      }\n\n      /* Hide any radio buttons that might still be rendered */\n      ha-radio,\n      mwc-radio,\n      .mdc-radio {\n        display: none !important;\n      }\n\n      /* Text field and select consistency */\n      ha-textfield,\n      ha-select {\n        --mdc-shape-small: 8px;\n        --mdc-theme-primary: var(--primary-color);\n      }\n\n      /* Note: Dropdown positioning fixes are now handled globally in ultra-card-editor.ts */\n\n      /* Module tab content input width - restrict to icon module only */\n      .icon-module .module-tab-content input[type="number"], \n      .icon-module .module-tab-content input[type="text"],\n      .icon-module .module-tab-content .gap-input {\n        width: 25% !important;\n        max-width: 25% !important;\n        min-width: 25% !important;\n      }\n\n      /* Grid styling for layout options */\n      .settings-section[style*="grid"] > div {\n        min-width: 0;\n      }\n\n      /* Responsive adjustments */\n      @media (max-width: 768px) {\n        .settings-section[style*="grid-template-columns: 1fr 1fr 1fr"] {\n          grid-template-columns: 1fr !important;\n          gap: 12px !important;\n        }\n\n        .settings-section[style*="grid-template-columns: 1fr 1fr"] {\n          grid-template-columns: 1fr !important;\n          gap: 12px !important;\n        }\n\n        .conditional-fields-group {\n          border-left-width: 3px;\n        }\n        \n        .conditional-fields-header {\n          padding: 10px 12px;\n          font-size: 13px;\n        }\n        \n        .conditional-fields-content {\n          padding: 12px;\n        }\n\n        /* Mobile-friendly field titles and descriptions */\n        .field-title {\n          font-size: 14px !important;\n        }\n\n        .field-description {\n          font-size: 12px !important;\n          line-height: 1.3 !important;\n        }\n\n        .section-title {\n          font-size: 16px !important;\n        }\n\n        /* Mobile-friendly size controls */\n        .gap-control-container {\n          gap: 8px !important;\n        }\n\n        .gap-input {\n          width: 44px !important;\n          max-width: 44px !important;\n          min-width: 44px !important;\n          font-size: 12px !important;\n        }\n\n        .reset-btn {\n          width: 32px !important;\n          height: 32px !important;\n        }\n\n        .reset-btn ha-icon {\n          font-size: 14px !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n          margin: 0 !important;\n          padding: 0 !important;\n          line-height: 1 !important;\n        }\n\n        /* Mobile-friendly lock buttons */\n        .lock-btn {\n          padding: 6px 12px !important;\n          font-size: 12px !important;\n        }\n\n        .lock-btn ha-icon {\n          font-size: 16px !important;\n        }\n\n        .lock-btn.unlocked {\n          border-color: var(--info-color, #2196F3) !important;\n          background: rgba(33, 150, 243, 0.15) !important;\n          color: var(--info-color, #2196F3) !important;\n          box-shadow: 0 0 0 1px rgba(33, 150, 243, 0.3) !important;\n        }\n\n        .lock-btn.unlocked ha-icon {\n          color: var(--info-color, #2196F3) !important;\n        }\n\n        /* Mobile-friendly accordions */\n        details > summary {\n          padding: 12px !important;\n          font-size: 14px !important;\n        }\n\n        details > summary ha-icon {\n          font-size: 16px !important;\n        }\n\n        /* Mobile-friendly form fields */\n        .icon-settings-container {\n          padding: 12px !important;\n        }\n\n        /* Removed mobile-specific icon-grid overrides to maintain consistent user-configured spacing across all screen sizes */\n        /* Note: .icon-item-preview padding intentionally not modified on mobile to keep desktop/mobile parity */\n      }\n\n      /* Extra small devices (phones, 480px and down) */\n      @media (max-width: 480px) {\n        .field-title {\n          font-size: 13px !important;\n        }\n\n        .field-description {\n          font-size: 11px !important;\n        }\n\n        .section-title {\n          font-size: 14px !important;\n        }\n\n        .gap-input {\n          width: 40px !important;\n          max-width: 40px !important;\n          min-width: 40px !important;\n          font-size: 11px !important;\n        }\n\n        .reset-btn {\n          width: 28px !important;\n          height: 28px !important;\n        }\n\n        .reset-btn ha-icon {\n          font-size: 12px !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n          margin: 0 !important;\n          padding: 0 !important;\n          line-height: 1 !important;\n        }\n\n        .lock-btn {\n          padding: 4px 8px !important;\n          font-size: 11px !important;\n        }\n\n        .lock-btn.unlocked {\n          border-color: var(--info-color, #2196F3) !important;\n          background: rgba(33, 150, 243, 0.15) !important;\n          color: var(--info-color, #2196F3) !important;\n          box-shadow: 0 0 0 1px rgba(33, 150, 243, 0.3) !important;\n        }\n\n        .lock-btn.unlocked ha-icon {\n          color: var(--info-color, #2196F3) !important;\n        }\n\n        .icon-settings-container {\n          padding: 8px !important;\n        }\n\n        /* Stack lock controls vertically on very small screens */\n        .gap-control-container {\n          flex-wrap: wrap !important;\n          gap: 6px !important;\n        }\n\n        .gap-slider {\n          width: 100% !important;\n          order: 1;\n        }\n\n        .gap-input {\n          order: 2;\n        }\n\n        .reset-btn {\n          order: 3;\n        }\n\n        .lock-btn {\n          order: 4;\n          width: 100% !important;\n          justify-content: center !important;\n        }\n      }\n\n      /* Ensure form elements don't overflow */\n      .settings-section ha-form {\n        max-width: 100%;\n        overflow: visible;\n      }\n\n      /* Color picker adjustments */\n      .settings-section ha-form[data-field*="color"] {\n        min-height: 56px;\n      }\n\n      /* Boolean toggle adjustments */\n      .settings-section ha-form[data-field*="mode"] {\n        display: flex;\n        align-items: center;\n        min-height: auto;\n      }\n\n      /* Number slider adjustments */\n      .settings-section ha-form[data-field*="size"] .mdc-slider,\n      .settings-section ha-form[data-field*="gap"] .mdc-slider,\n      .settings-section ha-form[data-field*="columns"] .mdc-slider {\n        width: 100%;\n        max-width: 100%;\n      }\n\n      /* Gap control styles */\n      ${a.m.getSliderStyles()}\n\n      /* Lock button styles */\n      .lock-btn {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 8px 16px;\n        border: 2px solid var(--divider-color);\n        border-radius: 8px;\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 500;\n        transition: all 0.3s ease;\n        outline: none;\n        position: relative;\n      }\n\n      .lock-btn:hover {\n        border-color: var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      .lock-btn.locked {\n        border-color: var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.1);\n        color: var(--primary-color);\n      }\n\n      .lock-btn.locked:hover {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      button.lock-btn.unlocked {\n        background-color: var(--primary-color);\n        border-color: var(--primary-color);\n      }\n\n      .lock-btn.unlocked {\n        border-color: var(--info-color, #2196F3) !important;\n        background: rgba(33, 150, 243, 0.15) !important;\n        color: var(--info-color, #2196F3) !important;\n        box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2) !important;\n        animation: lockUnlockedPulse 2s ease-in-out infinite;\n      }\n\n      .lock-btn.unlocked:hover {\n        background: var(--info-color, #2196F3) !important;\n        color: white !important;\n        box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.4) !important;\n        animation: none !important;\n      }\n\n      .lock-btn.unlocked ha-icon {\n        color: var(--info-color, #2196F3) !important;\n      }\n\n      .lock-btn.unlocked:hover ha-icon {\n        color: white !important;\n      }\n\n      .lock-btn ha-icon {\n        font-size: 18px;\n      }\n\n      /* Field lock button styling */\n      .field-container .lock-btn {\n        padding: 6px 12px;\n        font-size: 12px;\n        min-width: auto;\n      }\n\n      .field-container .lock-btn ha-icon {\n        font-size: 16px;\n      }\n\n      /* Icon settings container */\n      .icon-settings-container {\n        background: var(--secondary-background-color);\n        border-radius: 8px;\n        padding: 16px;\n        margin-bottom: 24px;\n        border: 1px solid var(--divider-color);\n      }\n\n      .icon-header {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin-bottom: 16px;\n        padding-bottom: 12px;\n        border-bottom: 1px solid var(--divider-color);\n      }\n\n      .icon-preview {\n        width: 32px;\n        height: 32px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n\n      .icon-title {\n        flex: 1;\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n\n      .remove-icon-btn {\n        background: var(--error-color);\n        color: white;\n        border: none;\n        border-radius: 4px;\n        padding: 6px;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.2s ease;\n      }\n\n      .remove-icon-btn:hover {\n        background: var(--error-color);\n        opacity: 0.8;\n      }\n\n      .remove-icon-btn:disabled {\n        opacity: 0.3;\n        cursor: not-allowed;\n      }\n\n      .remove-icon-btn ha-icon {\n        font-size: 16px;\n      }\n\n      /* Size lock container */\n      .size-lock-container {\n        padding: 12px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-radius: 8px;\n        border: 1px solid rgba(var(--rgb-primary-color), 0.2);\n      }\n\n      /* Removed overrides that modified ui_action options to avoid conflicts with HA selector */\n\n      /* Template Section Styles */\n      .template-section {\n        background: var(--card-background-color);\n        border-radius: 8px;\n        padding: 16px;\n        border: 1px solid var(--divider-color);\n        margin-bottom: 32px;\n      }\n\n      .template-header {\n        margin-bottom: 16px;\n      }\n\n      .switch-container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n        margin-bottom: 8px;\n      }\n\n      .switch-label-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .switch-label {\n        font-weight: 600;\n        color: var(--primary-text-color);\n        font-size: 16px;\n      }\n\n      .help-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 28px;\n        height: 28px;\n        padding: 0;\n        background: var(--primary-color) !important;\n        border: none !important;\n        color: var(--text-primary-color, white) !important;\n        cursor: pointer;\n        border-radius: 50%;\n        line-height: 0;\n      }\n\n      .help-btn:hover {\n        opacity: 0.85;\n      }\n\n      .help-btn ha-icon {\n        --mdc-icon-size: 18px;\n        width: 18px;\n        height: 18px;\n        flex-shrink: 0;\n        display: block;\n      }\n\n      .switch {\n        position: relative;\n        display: inline-block;\n        width: 50px;\n        height: 24px;\n      }\n\n      .switch input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n      }\n\n      .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: var(--switch-unchecked-color, #ccc);\n        transition: .4s;\n      }\n\n      .slider:before {\n        position: absolute;\n        content: "";\n        height: 18px;\n        width: 18px;\n        left: 3px;\n        bottom: 3px;\n        background-color: white;\n        transition: .4s;\n      }\n\n      input:checked + .slider {\n        background-color: var(--primary-color);\n      }\n\n      input:checked + .slider:before {\n        transform: translateX(26px);\n      }\n\n      .slider.round {\n        border-radius: 24px;\n    max-width: 50px;\n}\n      }\n\n      .slider.round:before {\n        border-radius: 50%;\n      }\n\n      .template-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        line-height: 1.4;\n        margin-bottom: 8px;\n      }\n\n      .template-content {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n\n      .template-editor {\n        min-height: 120px;\n        font-family: 'Courier New', monospace;\n        font-size: 13px;\n        line-height: 1.4;\n        resize: vertical;\n        width: 100%;\n        padding: 12px;\n        border: 1px solid var(--divider-color);\n        border-radius: 8px;\n        background: var(--card-background-color);\n        color: var(--primary-text-color);\n        outline: none;\n        transition: border-color 0.2s ease;\n      }\n\n      .template-editor:focus {\n        border-color: var(--primary-color);\n        box-shadow: 0 0 0 1px var(--primary-color);\n      }\n\n      .template-help {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        margin-top: 4px;\n      }\n\n      .template-help p {\n        margin: 8px 0;\n        font-weight: 500;\n      }\n\n      .template-help ul {\n        margin: 4px 0;\n        padding-left: 16px;\n      }\n\n      .template-help li {\n        margin: 2px 0;\n      }\n\n      .template-help code {\n        background: rgba(var(--rgb-primary-color), 0.1);\n        padding: 2px 4px;\n        border-radius: 3px;\n        font-family: 'Courier New', monospace;\n        font-size: 11px;\n      }\n\n      ${c.A.getHoverStyles()}\n    `}_addIcon(t,e){const i={id:this.generateId("icon-item"),icon_mode:"entity",entity:"weather.forecast_home",name:"",icon_inactive:"mdi:weather-partly-cloudy",icon_active:"mdi:weather-partly-cloudy",inactive_state:"",active_state:"",inactive_attribute:"",active_attribute:"",display_attribute:"",custom_inactive_state_text:"",custom_active_state_text:"",custom_inactive_name_text:"",custom_active_name_text:"",use_entity_color_for_icon:!1,use_state_color_for_inactive_icon:!1,use_state_color_for_active_icon:!1,color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",inactive_icon_color:"var(--secondary-text-color)",active_icon_color:"var(--primary-color)",inactive_name_color:"var(--primary-text-color)",active_name_color:"var(--primary-text-color)",inactive_state_color:"var(--secondary-text-color)",active_state_color:"var(--secondary-text-color)",show_name_when_inactive:!0,show_state_when_inactive:!0,show_icon_when_inactive:!0,show_name_when_active:!0,show_state_when_active:!0,show_icon_when_active:!0,show_entity_picture:!0,show_state:!0,show_name:!0,icon_size:26,text_size:14,name_icon_gap:8,name_state_gap:2,icon_state_gap:4,active_icon_size:26,inactive_icon_size:26,active_text_size:14,inactive_text_size:14,state_size:14,active_state_size:14,inactive_state_size:14,icon_background:"none",use_entity_color_for_icon_background:!1,icon_background_color:"transparent",active_icon_background:"none",inactive_icon_background:"none",active_icon_background_color:"transparent",inactive_icon_background_color:"transparent",icon_background_padding:8,inactive_icon_background_padding:8,active_icon_background_padding:8,active_icon_background_padding_locked:!0,icon_size_locked:!0,text_size_locked:!0,state_size_locked:!0,active_icon_locked:!0,active_icon_color_locked:!1,active_icon_background_locked:!0,active_icon_background_color_locked:!0,active_name_locked:!0,active_name_color_locked:!0,active_state_locked:!1,active_state_color_locked:!0,inactive_icon_animation:"none",active_icon_animation:"none",show_units:!0,vertical_alignment:"center",container_width:void 0,container_background_shape:"none",container_background_color:"#808080",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},click_action:"toggle",double_click_action:"none",hold_action_legacy:"none",navigation_path:"",url:"",service:"",service_data:{},unified_template_mode:!1,unified_template:"",ignore_entity_state_config:!1};e({icons:[...t.icons,i]}),this.triggerPreviewUpdate()}_removeIcon(t,e,i){t.icons.length<=1||(i({icons:t.icons.filter((t,i)=>i!==e)}),this.triggerPreviewUpdate())}_updateIcon(t,e,i,n){n({icons:t.icons.map((t,n)=>n===e?Object.assign(Object.assign({},t),i):t)}),this.triggerPreviewUpdate()}_syncPrimaryEntityActions(t,e,i){const n=t=>t&&"object"==typeof t?t.target?t:"more-info"===t.action||"toggle"===t.action||"default"===t.action?Object.assign(Object.assign({},t),{entity:i}):t:t,o=void 0!==e.tap_action?e.tap_action:t.tap_action,a=void 0!==e.hold_action?e.hold_action:t.hold_action,r=void 0!==e.double_tap_action?e.double_tap_action:t.double_tap_action,c=n(o),s=n(a),l=n(r);c!==t.tap_action&&(e.tap_action=c),s!==t.hold_action&&(e.hold_action=s),l!==t.double_tap_action&&(e.double_tap_action=l)}_handleEntitySelection(t,e,i,n,o,a,r){const c={entity:n},s=this.resolveEntity(n,r)||n;if(s&&(null==o?void 0:o.states[s])){const t=l.s.getEntityIcon(s,o);t&&(c.icon_inactive=t,!1!==i.icons[e].active_icon_locked&&(c.icon_active=t))}if(s&&this._isBinaryEntity(s)){const t=i.icons[e];t.active_state||t.inactive_state||(c.active_state="on",c.inactive_state="off")}if(n){const t=t=>t&&"object"==typeof t?t.target?t:"more-info"===t.action||"toggle"===t.action||"default"===t.action?Object.assign(Object.assign({},t),{entity:n}):t:t,o=i.icons[e],a=t(null==o?void 0:o.tap_action),r=t(null==o?void 0:o.hold_action),s=t(null==o?void 0:o.double_tap_action);a!==(null==o?void 0:o.tap_action)&&(c.tap_action=a),r!==(null==o?void 0:o.hold_action)&&(c.hold_action=r),s!==(null==o?void 0:o.double_tap_action)&&(c.double_tap_action=s)}const d={icons:i.icons.map((t,i)=>i===e?Object.assign(Object.assign({},t),c):t)};0===e&&n&&this._syncPrimaryEntityActions(i,d,n),a(d),setTimeout(()=>{try{this.triggerPreviewUpdate()}catch(t){}window.dispatchEvent(new CustomEvent("ultra-card-actions-refresh",{detail:{moduleId:i.id},bubbles:!0,composed:!0}))},50);const _=`${t.entity}_attributes`,v=`${n}_attributes`;this._attributeCache.delete(_),this._attributeCache.delete(v)}_debouncedUpdateIcon(t,e,i,n,o=100){this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=setTimeout(()=>{this._updateIcon(t,e,i,n)},o)}_updateIconWithLockSync(t,e,i,n,o){const a=t.icons[e],r={[i]:n},c={icon_inactive:{active:"icon_active",lock:"active_icon_locked"},inactive_icon_size:{active:"active_icon_size",lock:"icon_size_locked"},inactive_text_size:{active:"active_text_size",lock:"text_size_locked"},inactive_state_size:{active:"active_state_size",lock:"state_size_locked"},inactive_icon_color:{active:"active_icon_color",lock:"active_icon_color_locked"},inactive_name_color:{active:"active_name_color",lock:"active_name_color_locked"},inactive_state_color:{active:"active_state_color",lock:"active_state_color_locked"},inactive_icon_background:{active:"active_icon_background",lock:"active_icon_background_locked"},inactive_icon_background_color:{active:"active_icon_background_color",lock:"active_icon_background_color_locked"},use_state_color_for_inactive_icon:{active:"use_state_color_for_active_icon",lock:"active_state_color_locked"}}[i];c&&!1!==a[c.lock]&&(r[c.active]=n),this._updateIcon(t,e,r,o)}_debouncedUpdateIconWithLockSync(t,e,i,n,o,a=50){this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=setTimeout(()=>{this._updateIconWithLockSync(t,e,i,n,o)},a)}getBackgroundImageCSS(t,e,i){var n,o;const a=t.background_image_type,r=t.background_image,c=this.resolveEntity(t.background_image_entity,i)||t.background_image_entity;if(!a||"none"===a)return"none";switch(a){case"upload":if(r)return`url("${(0,_.VG)(e,r)}")`;break;case"url":if(r)return`url("${r}")`;break;case"entity":if(c&&e){const t=e.states[c];if(t){const i=(null===(n=t.attributes)||void 0===n?void 0:n.entity_picture)||(null===(o=t.attributes)||void 0===o?void 0:o.image)||("string"==typeof t.state?t.state:"");if(i&&"unknown"!==i&&"unavailable"!==i)return`url("${(0,_.VG)(e,i)}")`}}}return"none"}styleObjectToCss(t){return Object.entries(t).map(([t,e])=>`${t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}: ${e}`).join("; ")}_renderSizeControl(t,e,i,n,o,a,r,c){return this.renderSliderField("","",o,c,a,r,1,o=>{this._updateIconWithLockSync(t,e,n,o,i)})}_renderBackgroundPaddingControl(t,e,i,n){return this.renderSliderField("","",n,8,0,50,1,n=>{this._updateIcon(t,e,{inactive_icon_background_padding:n,active_icon_background_padding:n,icon_background_padding:n},i),setTimeout(()=>this.triggerPreviewUpdate(),50)})}_renderFieldWithLock(t,e,i,o,a,r,c,s,l,d){const _=t.icons[e],v=!1!==_[o],u=v&&_[r]||c;return n.qy`
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="flex: 1;">
          ${"icon"===s?n.qy`
                <div
                  style="opacity: ${v?"0.5":"1"}; pointer-events: ${v?"none":"auto"};"
                >
                  ${this.renderUcForm(l,{[a]:u},[this.iconField(a)],n=>{if(!v){const o=this._formValue(n,a);if(void 0===o)return;this._updateIcon(t,e,{[a]:o},i)}},!1)}
                </div>
              `:"color"===s?n.qy`
                  <ultra-color-picker
                    .value=${u}
                    .disabled=${v}
                    @value-changed=${n=>{if(!v){const o=n.detail&&"value"in n.detail?n.detail.value:void 0;if(void 0===o)return;this._updateIcon(t,e,{[a]:o},i)}}}
                  ></ultra-color-picker>
                `:"select"===s?n.qy`
                    <div
                      style="opacity: ${v?"0.5":"1"}; pointer-events: ${v?"none":"auto"};"
                    >
                      ${this.renderUcForm(l,{[a]:u},[this.selectField(a,d||[])],n=>{const o=this._formValue(n,a);if(void 0===o)return;const r=String(o);r!==_[a]&&this._updateIcon(t,e,{[a]:r},i)},!1)}
                    </div>
                  `:"toggle"===s?n.qy`
                      <div
                        style="opacity: ${v?"0.5":"1"}; pointer-events: ${v?"none":"auto"};"
                      >
                        ${this.renderUcForm(l,{[a]:!!u},[this.booleanField(a)],n=>{v||this._updateIcon(t,e,{[a]:!!n.detail.value[a]},i)})}
                      </div>
                    `:n.qy`
                      <div
                        style="opacity: ${v?"0.5":"1"}; pointer-events: ${v?"none":"auto"};"
                      >
                        ${this.renderUcForm(l,{[a]:u},[this.textField(a)],n=>{const o=this._formValue(n,a);if(void 0===o)return;const r="string"==typeof o?o:String(o);r!==_[a]&&this._updateIcon(t,e,{[a]:r},i)},!1)}
                      </div>
                    `}
        </div>
        <button
          class="lock-btn ${v?"locked":"unlocked"}"
          @click=${()=>{const n=!v,c={[o]:n};n&&(c[a]=_[r]),this._updateIcon(t,e,c,i)}}
          title="${v?"Unlock to customize this field independently":"Lock to inherit from inactive state"}"
        >
          <ha-icon icon="${v?"mdi:lock":"mdi:lock-open"}"></ha-icon>
        </button>
      </div>
    `}_renderSizeControlWithLock(t,e,i,o,a,r,c,s,l,d){const _=t.icons[e],v=`${o}_locked`,u=!1!==_[v],p=u?_[r]||d:c;return n.qy`
      <div class="gap-control-container" style="display: flex; align-items: center; gap: 12px;">
        <ha-slider
          class="uc-ha-slider"
          style="flex: 1;"
          labeled
          pin
          .min=${s}
          .max=${l}
          .step=${1}
          .value=${p}
          .disabled=${u}
          @change=${n=>{if(u)return;const o=Number(n.target.value);isNaN(o)||this._updateIcon(t,e,{[a]:o},i)}}
        ></ha-slider>
        <input
          type="number"
          class="gap-input"
          min="${s}"
          max="${l}"
          step="1"
          .value="${p}"
          .disabled=${u}
          @input=${n=>{if(!u){const o=n.target,r=Number(o.value);!isNaN(r)&&r>=s&&r<=l&&this._updateIcon(t,e,{[a]:r},i)}}}
          @keydown=${n=>{if(!u&&("ArrowUp"===n.key||"ArrowDown"===n.key)){n.preventDefault();const o=n.target,r=Number(o.value)||d,c="ArrowUp"===n.key?1:-1,_=Math.max(s,Math.min(l,r+c));this._updateIcon(t,e,{[a]:_},i)}}}
        />
        <button
          class="reset-btn"
          type="button"
          @click=${()=>{u||this._updateIcon(t,e,{[a]:d},i)}}
          title="Reset to default (${d})"
          .disabled=${u}
        >
          <ha-icon icon="mdi:refresh"></ha-icon>
        </button>
        <button
          class="lock-btn ${u?"locked":"unlocked"}"
          @click=${()=>{const n=!u,o={[v]:n};n&&(o[a]=_[r]||d),this._updateIcon(t,e,o,i)}}
          title="${u?"Unlock to set different sizes for active/inactive":"Lock to use same size for both states"}"
        >
          <ha-icon icon="${u?"mdi:lock":"mdi:lock-open"}"></ha-icon>
        </button>
      </div>
    `}_updateIconAnimationClasses(t,e,i){const n=[document],o=this.renderRoot,a=this.shadowRoot;o&&n.push(o),a&&a!==o&&n.push(a),n.forEach(t=>{try{t.querySelectorAll('ha-icon[data-animation-debug]:not([data-animation-debug="none"])').forEach(t=>{const i=t;if((i.getAttribute("data-animation-debug")||"")!==e)return;const n=i.className.split(" ").filter(t=>!t.startsWith("icon-animation-"));e&&!e.includes("none")&&n.push(e),i.className=n.join(" ");const o=e.replace("icon-animation-","");if(o&&"none"!==o){const t="icon"+o.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),e=o.includes("spin")||o.includes("rotate")?"2s linear infinite":"1s ease-in-out infinite";i.style.animation=`${t} ${e}`}else i.style.animation="";this._injectKeyframesIntoHaIcon(i),i.offsetHeight})}catch(t){return}})}_getInlineAnimation(t){const e=t.replace("icon-animation-","");return e&&"none"!==e?`${"icon"+e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")} ${e.includes("spin")||e.includes("rotate")?"2s linear infinite":"bounce"===e?"1s ease-in-out infinite":"shake"===e?"0.5s ease-in-out infinite":"vibrate"===e?"0.3s ease-in-out infinite":"2s ease-in-out infinite"}`:""}_applyAnimationDirectly(t,e){const i=e.replace("icon-animation-","");if(!i||"none"===i)return;const n="icon"+i.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),o=i.includes("spin")||i.includes("rotate")?"2s linear infinite":"2s ease-in-out infinite";t.style.animation=`${n} ${o}`,this._injectKeyframesIntoHaIcon(t)}_injectKeyframesForAllSplitPreviewIcons(){const t=()=>{const t=new Set,e=[document],i=this.renderRoot,n=this.shadowRoot;return i&&e.push(i),n&&n!==i&&e.push(n),e.forEach(e=>{e.querySelectorAll('ha-icon[data-animation-debug]:not([data-animation-debug="none"])').forEach(e=>t.add(e))}),t.forEach(t=>this._injectKeyframesIntoHaIcon(t)),t.size};0===t()&&setTimeout(()=>t(),120)}addPixelUnit(t){if(!t&&0!==t)return t;const e=String(t);return"auto"===e||"none"===e||"inherit"===e||"initial"===e||"unset"===e?e:e.endsWith("x")&&!e.endsWith("px")?e.replace(/x$/,"px"):e.includes("px")||e.includes("%")||e.includes("em")||e.includes("rem")||e.includes("vh")||e.includes("vw")||e.includes("ch")||e.includes("ex")||e.includes("vmin")||e.includes("vmax")?e:/^\d+(\.\d+)?$/.test(e)?`${e}px`:/^[\d\.\s]+$/.test(e)?e.split(" ").map(t=>t.trim()&&/^\d+(\.\d+)?$/.test(t.trim())?`${t.trim()}px`:t.trim()).join(" "):e}_formatValueWithUnits(t,e,i,n,o){var a;const c=this.resolveEntity(e,o)||e;return c&&(null===(a=null==n?void 0:n.states)||void 0===a?void 0:a[c])?(0,r.formatEntityState)(n,c,{state:t,includeUnit:!1!==i.show_units}):t}_getEntityStateColor(t){if(!t||!t.attributes)return null;if(t.attributes.rgb_color&&Array.isArray(t.attributes.rgb_color))return`rgb(${t.attributes.rgb_color.join(",")})`;if(t.attributes.hs_color&&Array.isArray(t.attributes.hs_color)){const[e,i]=t.attributes.hs_color;return`rgb(${this._hsToRgb(e/360,i/100,1).join(",")})`}if(t.attributes.color_name)return t.attributes.color_name;if(t.attributes.color&&"string"==typeof t.attributes.color)return t.attributes.color;if(t.entity_id){const e=t.entity_id.split(".")[0];if("binary_sensor"===e||"switch"===e)return"on"===t.state?"#4CAF50":"#F44336"}return null}_hsToRgb(t,e,i){let n,o,a;const r=Math.floor(6*t),c=6*t-r,s=i*(1-e),l=i*(1-c*e),d=i*(1-(1-c)*e);switch(r%6){case 0:n=i,o=d,a=s;break;case 1:n=l,o=i,a=s;break;case 2:n=s,o=i,a=d;break;case 3:n=s,o=l,a=i;break;case 4:n=d,o=s,a=i;break;case 5:n=i,o=s,a=l;break;default:n=o=a=0}return[Math.round(255*n),Math.round(255*o),Math.round(255*a)]}_getEntityPicture(t,e){var i,n;if(!t||!e)return null;if(!t.entity_id)return null;const o=null===(i=t.attributes)||void 0===i?void 0:i.entity_picture;if(o)return o.startsWith("/")?`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}${o}`:o;const a=["image","picture","thumbnail","avatar","photo","icon_url","image_url"];for(const i of a){const o=null===(n=t.attributes)||void 0===n?void 0:n[i];if(o&&"string"==typeof o)return o.startsWith("/")?`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}${o}`:o}return null}_shouldUseEntityPicture(t,e){var i;return!!t&&("static"!==(null==e?void 0:e.icon_mode)&&(!1!==(null==e?void 0:e.show_entity_picture)&&(!!t.entity_id&&(!!(null===(i=t.attributes)||void 0===i?void 0:i.entity_picture)||["image","picture","thumbnail","avatar","photo","icon_url","image_url"].some(e=>{var i;return(null===(i=t.attributes)||void 0===i?void 0:i[e])&&"string"==typeof t.attributes[e]&&""!==t.attributes[e].trim()})))))}_injectKeyframesIntoHaIcon(t){const e=t.shadowRoot;if(!e)return;const i=e.querySelector("style[data-uvc-keyframes]");i&&i.remove();try{const t=document.createElement("style");if(t.setAttribute("data-uvc-keyframes",""),t.textContent=f._ANIMATION_KEYFRAMES,e.appendChild(t),!document.head.querySelector("style[data-uvc-global-keyframes]")){const t=document.createElement("style");t.setAttribute("data-uvc-global-keyframes",""),t.textContent=f._ANIMATION_KEYFRAMES,document.head.appendChild(t)}}catch(t){console.error("❌ Error injecting keyframes:",t)}}}f._globalStylesInjected=!1,f._ANIMATION_KEYFRAMES="\n    @keyframes iconPulse {0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.7;transform:scale(1.1);}}\n    @keyframes iconSpin {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}\n    @keyframes iconBounce {0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-10px);}60%{transform:translateY(-5px);}}\n    @keyframes iconFlash {0%,50%,100%{opacity:1;}25%,75%{opacity:0.3;}}\n    @keyframes iconShake {0%,100%{transform:translateX(0);}10%,30%,50%,70%,90%{transform:translateX(-2px);}20%,40%,60%,80%{transform:translateX(2px);}}\n    @keyframes iconVibrate {0%,100%{transform:translate(0);}10%{transform:translate(-1px,-1px);}20%{transform:translate(1px,-1px);}30%{transform:translate(-1px,1px);}40%{transform:translate(1px,1px);}50%{transform:translate(-1px,-1px);}60%{transform:translate(1px,-1px);}70%{transform:translate(-1px,1px);}80%{transform:translate(1px,1px);}90%{transform:translate(-1px,-1px);}}\n    @keyframes iconRotateLeft {from{transform:rotate(0deg);}to{transform:rotate(-360deg);}}\n    @keyframes iconRotateRight {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}\n    @keyframes iconFade {0%,100%{opacity:1;}50%{opacity:0.3;}}\n    @keyframes iconScale {0%,100%{transform:scale(1);}50%{transform:scale(1.2);}}\n    @keyframes iconTada {0%{transform:scale(1);}10%,20%{transform:scale(0.9) rotate(-3deg);}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg);}40%,60%,80%{transform:scale(1.1) rotate(-3deg);}100%{transform:scale(1) rotate(0);}}\n  "},571(t,e,i){i.d(e,{s:()=>n});class n{static getEntityIcon(t,e){if("object"==typeof t&&null!==t&&!Array.isArray(t)){if(null==e?void 0:e.states)for(const[i,n]of Object.entries(e.states))if(n===t){t=i;break}if("string"!=typeof t)return this._getEnhancedIconForEntity("unknown",t)}if(!t||!(null==e?void 0:e.states[t]))return null;const i=e.states[t];return this._getHomeAssistantComputedIcon(t,i,e)||this._getEnhancedIconForEntity(t,i)}static _getHomeAssistantComputedIcon(t,e,i){var n,o,a,r,c;if(null===(n=e.attributes)||void 0===n?void 0:n.icon)return e.attributes.icon;try{if(null===(a=null===(o=window.customCards)||void 0===o?void 0:o.helpers)||void 0===a?void 0:a.stateIcon){const t=window.customCards.helpers.stateIcon(e);if(t)return t}const n=[window.stateIcon,window.computeStateIcon,window.computeEntityIcon,null===(r=window.hassIcons)||void 0===r?void 0:r.stateIcon,null===(c=window.hassIcons)||void 0===c?void 0:c.computeStateIcon,i.stateIcon,i.computeStateIcon,i.computeEntityIcon];for(const t of n)if("function"==typeof t)try{const i=t(e);if(i)return i}catch(t){}if(i.entities&&i.entities[t]){const e=i.entities[t];if(e.icon)return e.icon}if(t.startsWith("weather.")){const t={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:weather-exceptional"},i=e.state;if(t[i])return t[i]}}catch(t){console.debug("Failed to compute HA icon, falling back to enhanced detection:",t)}return null}static _getEnhancedIconForEntity(t,e){var i,n,o;const a=t.split(".")[0],r=t.split(".")[1]||"",c=null===(i=e.attributes)||void 0===i?void 0:i.device_class,s=null===(n=e.attributes)||void 0===n?void 0:n.unit_of_measurement,l=(null===(o=e.attributes)||void 0===o?void 0:o.friendly_name)||"",d=e.state,_=r.toLowerCase(),v=l.toLowerCase();return this._isBatteryRelated(_,v,c,s)?this._isChargingRelated(_,v)?this._getChargingBatteryIcon(d,s):this._getBatteryIcon(d,s):this._isTemperatureRelated(_,v,c,s)?"mdi:thermometer":this._isHumidityRelated(_,v,c,s)?"mdi:water-percent":this._isPowerRelated(_,v,c,s)?"mdi:flash":this._isSignalRelated(_,v)?"mdi:wifi":"binary_sensor"===a&&this._isDoorWindowRelated(_,v)?"on"===d?"mdi:door-open":"mdi:door-closed":"binary_sensor"===a&&this._isMotionRelated(_,v)?"on"===d?"mdi:motion-sensor":"mdi:motion-sensor-off":this._isIlluminanceRelated(_,v,c,s)?"mdi:brightness-5":this._isPressureRelated(_,v,c,s)?"mdi:gauge":this._getDefaultIconForDomain(a,c,d)}static _isBatteryRelated(t,e,i,n){return"battery"===i||t.includes("battery")||t.includes("charge")||t.includes("power_level")||e.includes("battery")||e.includes("charge")||"%"===n}static _isChargingRelated(t,e){return["charging","charge_target","charging_target","charge_limit"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _getBatteryIcon(t,e){const i=parseFloat(t);return isNaN(i)?"mdi:battery-unknown":i>=95?"mdi:battery":i>=85?"mdi:battery-90":i>=75?"mdi:battery-80":i>=65?"mdi:battery-70":i>=55?"mdi:battery-60":i>=45?"mdi:battery-50":i>=35?"mdi:battery-40":i>=25?"mdi:battery-30":i>=15?"mdi:battery-20":i>=5?"mdi:battery-10":"mdi:battery-alert"}static _getChargingBatteryIcon(t,e){const i=parseFloat(t);return isNaN(i)?"mdi:battery-charging":i>=95?"mdi:battery-charging-100":i>=85?"mdi:battery-charging-90":i>=75?"mdi:battery-charging-80":i>=65?"mdi:battery-charging-70":i>=55?"mdi:battery-charging-60":i>=45?"mdi:battery-charging-50":i>=35?"mdi:battery-charging-40":i>=25?"mdi:battery-charging-30":i>=15?"mdi:battery-charging-20":i>=5?"mdi:battery-charging-10":"mdi:battery-charging-outline"}static _isTemperatureRelated(t,e,i,n){return"temperature"===i||t.includes("temp")||e.includes("temperature")||"°C"===n||"°F"===n||"K"===n}static _isHumidityRelated(t,e,i,n){return"humidity"===i||t.includes("humidity")||e.includes("humidity")||"%"===n&&(t.includes("humid")||e.includes("humid"))}static _isPowerRelated(t,e,i,n){return"power"===i||"energy"===i||t.includes("power")||t.includes("energy")||t.includes("consumption")||"W"===n||"kW"===n||"kWh"===n||"Wh"===n}static _isSignalRelated(t,e){return["signal","rssi","wifi","network"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _isDoorWindowRelated(t,e){return["door","window","gate"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _isMotionRelated(t,e){return["motion","movement","occupancy","presence"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _isIlluminanceRelated(t,e,i,n){return"illuminance"===i||t.includes("illuminance")||t.includes("brightness")||t.includes("lux")||"lx"===n||"lux"===n}static _isPressureRelated(t,e,i,n){return"pressure"===i||t.includes("pressure")||e.includes("pressure")||"hPa"===n||"mbar"===n||"Pa"===n||"psi"===n}static _getDefaultIconForDomain(t,e,i){return{alarm_control_panel:"mdi:shield",automation:"mdi:robot",binary_sensor:"mdi:radiobox-blank",button:"mdi:button-pointer",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",cover:"mdi:window-shutter",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",humidifier:"mdi:air-humidifier",input_boolean:"mdi:toggle-switch",input_button:"mdi:button-pointer",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",light:"mdi:lightbulb",lock:"mdi:lock",media_player:"mdi:speaker",number:"mdi:ray-vertex",person:"mdi:account",plant:"mdi:flower",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",siren:"mdi:bullhorn",sun:"mdi:white-balance-sunny",switch:"mdi:toggle-switch",timer:"mdi:timer",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:"mdi:weather-partly-cloudy",zone:"mdi:map-marker"}[t]||"mdi:eye"}}},9760(t,e,i){i.d(e,{formatEntityState:()=>o});var n=i(1340);const o=(t,e,i)=>{var o,a;const r=!1!==(null==i?void 0:i.includeUnit),c=null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[e];if(!t||!c)return void 0!==(null==i?void 0:i.state)?String(i.state):"";const s=t.formatEntityState,l=s?s(c,void 0!==(null==i?void 0:i.state)?String(i.state):void 0):(0,n.nu)(t.localize,c,t.locale,null==i?void 0:i.state);if(r)return l;const d=null===(a=c.attributes)||void 0===a?void 0:a.unit_of_measurement;if(d&&"string"==typeof l){const t=` ${d}`;if(l.endsWith(t))return l.slice(0,-t.length)}return l}},6045(t,e,i){function n(t){if(null==t)return NaN;if("number"==typeof t)return t;let e=String(t).trim();if(""===e||"unknown"===e||"unavailable"===e)return NaN;if(e.includes(",")){const t=e.lastIndexOf(","),i=e.lastIndexOf(".");e=t>i?e.substring(0,t).replace(/[.,]/g,"")+"."+e.substring(t+1):e.replace(/,/g,"")}return parseFloat(e)}function o(t){const e=(t||"").trim();return e?(e.includes(";")?e.split(";").map(t=>t.trim()).filter(Boolean):e.split(",").map(t=>t.trim()).filter(Boolean)).map(t=>n(t)).filter(t=>!Number.isNaN(t)):[]}i.d(e,{E:()=>o,v:()=>n})},9327(t,e,i){function n(t,e){var i;if(!t||"string"!=typeof t||""===t.trim())return"";const n=t.trim(),o=null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[n];return o?`${n}|${o.state}|${function(t){var e,i,n,o;if(!t||"object"!=typeof t)return"";const a=`${null!==(e=t.unit_of_measurement)&&void 0!==e?e:""}|${null!==(i=t.device_class)&&void 0!==i?i:""}|${null!==(n=t.friendly_name)&&void 0!==n?n:""}|${null!==(o=t.icon)&&void 0!==o?o:""}|${Array.isArray(t.rgb_color)?t.rgb_color.join(","):""}`;let r=0;for(let t=0;t<a.length;t++)r=(r<<5)-r+a.charCodeAt(t),r|=0;return Math.abs(r).toString(36)}(o.attributes)}`:`${n}|unavailable|`}function o(t,e){const i=[...new Set(t.filter(t=>!!t&&""!==String(t).trim()))].sort();return 0===i.length?"":i.map(t=>n(t,e)).join("||")}function a(t,e,i){var n;const o=null===(n=null==e?void 0:e.states)||void 0===n?void 0:n[t];if(!o)return{entity:t,state:"unavailable",name:(null==i?void 0:i.name)||t,attributes:{},unit:"",domain:t.split(".")[0]||"unknown",device_class:"",friendly_name:(null==i?void 0:i.name)||t,config:i||{}};const a=t.split(".")[0],r=o.attributes||{};return{entity:t,state:o.state,name:(null==i?void 0:i.name)||r.friendly_name||t,attributes:r,unit:r.unit_of_measurement||"",domain:a,device_class:r.device_class||"",friendly_name:r.friendly_name||"",config:i||{},state_number:parseFloat(o.state),state_boolean:"on"===o.state||"true"===o.state||"yes"===o.state}}function r(t,e,i){const n=t.map((t,n)=>{const o=null==i?void 0:i[n];return a(t,e,o)}),o=n[0]||{entity:"",state:"unavailable",name:"",attributes:{},unit:"",domain:"unknown",device_class:"",friendly_name:"",config:{}};return Object.assign(Object.assign({},o),{entities:n})}i.d(e,{Qq:()=>o,jh:()=>n,pL:()=>a,wI:()=>r})}}]);
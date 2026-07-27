"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[950],{5308(t,e,i){i.d(e,{UltraInfoModule:()=>f});var n=i(5183),o=i(3721),a=i(9957),r=i(9760),l=i(5147),s=i(8938),d=i(571),c=i(5320),m=i(5096),p=i(6477),u=i(6461),_=(i(7921),i(9442),i(5121)),g=i(5155),h=i(9327);class f extends o.m{constructor(){super(...arguments),this.metadata={type:"info",title:"Info Items",description:"Show entity information values",author:"WJD Designs",version:"1.0.0",icon:"mdi:information",category:"data",tags:["info","entity","data","sensors"]},this._templateInputDebounce=null,this._lastUnifiedInfoIconColorByKey=new Map,this.clickTimeout=null,this.holdTimeout=null,this.isHolding=!1}createDefault(t,e){return{id:t||this.generateId("info"),type:"info",info_entities:[{id:this.generateId("entity"),entity:"weather.forecast_home",name:"Temperature",icon:"mdi:thermometer",show_icon:!0,show_name:!0,show_state:!0,show_units:!0,text_size:14,name_size:12,icon_size:26,text_bold:!1,text_italic:!1,text_uppercase:!1,text_strikethrough:!1,name_bold:!1,name_italic:!1,name_uppercase:!1,name_strikethrough:!1,icon_color:"var(--primary-color)",name_color:"var(--secondary-text-color)",text_color:"var(--primary-text-color)",state_color:"var(--primary-text-color)",click_action:"more-info",navigation_path:"",url:"",service:"",service_data:{},unified_template_mode:!1,unified_template:"",ignore_entity_state_config:!1,icon_position:"left",icon_alignment:"center",name_alignment:"start",state_alignment:"start",overall_alignment:"center",icon_gap:8,name_value_layout:"vertical",name_value_gap:2,content_distribution:"normal"}],columns:1,gap:12,allow_wrap:!0,text_size:16,icon_size:24,tap_action:void 0,hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}_buildUnifiedInfoTemplateKey(t,e,i,n,o){const a=(null==o?void 0:o.__ucInstanceId)&&""!==String(o.__ucInstanceId).trim()?String(o.__ucInstanceId):"card_unknown",r=t.id&&""!==t.id.trim()?t.id:"module_unknown",l=e.id&&""!==e.id.trim()?e.id:`idx_${i.toString()}`,s=this._hashString(n);return`unified_info_${a}_${r}_${e.entity}_${l}_${s}`}renderGeneralTab(t,e,i,o){var a,r,l;const s=t,d=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",c=this.createDefault().info_entities[0];s.info_entities&&0!==s.info_entities.length||(s.info_entities=[Object.assign({},c)],o({info_entities:s.info_entities}));let p=s.info_entities[0]?Object.assign(Object.assign({},c),s.info_entities[0]):c;return p=Object.assign(Object.assign({},p),{icon_position:p.icon_position||"left",overall_alignment:p.overall_alignment||"center",icon_alignment:p.icon_alignment||"center",name_alignment:p.name_alignment||"start",state_alignment:p.state_alignment||"start",name_value_layout:p.name_value_layout||"vertical",name_value_gap:void 0!==p.name_value_gap?p.name_value_gap:2,content_distribution:p.content_distribution||"normal"}),n.qy`
      ${this.injectUcFormStyles()}
      <style>
        /* Layout & Positioning button active styles */
        .control-btn.active {
          border: none !important;
          background: var(--primary-color) !important;
          color: var(--text-primary-color, #fff) !important;
          border-radius: 2px !important;
        }

        .apply-size-btn {
          margin-top: 8px;
          width: 100%;
          padding: 8px 10px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: var(--card-background-color);
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .apply-size-btn:hover {
          border-color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 12%, transparent);
        }
      </style>
      <div class="module-general-settings">
        <!-- Entity Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.entity_section.title",d,"ENTITY CONFIGURATION")}
          </div>

          <div style="margin-bottom: 16px;">
            ${this.renderEntityPickerWithVariables(e,i,"entity",p.entity||"",t=>{var i,n;t!==((null===(n=null===(i=s.info_entities)||void 0===i?void 0:i[0])||void 0===n?void 0:n.entity)||"")&&(this._handleEntityChange(s,0,t,e,o),setTimeout(()=>this.triggerPreviewUpdate(),50))},void 0,(0,m.kg)("editor.info.entity",d,"Entity"))}
            <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
              ${(0,m.kg)("editor.info.entity_desc",d,"Select the entity whose state, icon, and attributes will be displayed.")}
            </div>
          </div>
        </div>

        <!-- Icon Settings -->
        <div
          class="settings-section icon-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.icon_section.title",d,"Icon Settings")}
          </div>

          <div style="margin-bottom: 16px;">
            <ha-form
              .hass=${e}
              .data=${{show_icon:!1!==p.show_icon}}
              .schema=${[{name:"show_icon",label:(0,m.kg)("editor.info.show_icon",d,"Show Icon"),description:(0,m.kg)("editor.info.show_icon_desc",d,"Display an icon next to the entity value"),selector:{boolean:{}}}]}
              .computeLabel=${t=>t.label||t.name}
              .computeDescription=${t=>t.description||""}
              @value-changed=${t=>{this._updateEntity(s,0,{show_icon:t.detail.value.show_icon},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-form>
          </div>

          ${!1!==p.show_icon?n.qy`
                <div style="margin-bottom: 16px;">
                  <ha-form
                    .hass=${e}
                    .data=${{icon:p.icon||""}}
                    .schema=${[{name:"icon",label:(0,m.kg)("editor.info.icon",d,"Icon"),description:(0,m.kg)("editor.info.icon_desc",d,"Choose an icon to display"),selector:{icon:{}}}]}
                    .computeLabel=${t=>t.label||t.name}
                    .computeDescription=${t=>t.description||""}
                    @value-changed=${t=>{var e,i;const n=t.detail.value.icon;n!==((null===(i=null===(e=s.info_entities)||void 0===e?void 0:e[0])||void 0===i?void 0:i.icon)||"")&&(this._updateEntity(s,0,{icon:n},o),setTimeout(()=>this.triggerPreviewUpdate(),50))}}
                  ></ha-form>
                </div>

                ${this.renderFieldSection((0,m.kg)("editor.info.icon_section.show_entity_picture",d,"Show Entity Picture"),(0,m.kg)("editor.info.icon_section.show_entity_picture_desc",d,"When enabled, entity_picture replaces the configured icon when available."),e,{show_entity_picture:!1!==p.show_entity_picture},[this.booleanField("show_entity_picture")],t=>{this._updateEntity(s,0,{show_entity_picture:t.detail.value.show_entity_picture},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
                  >
                    ${(0,m.kg)("editor.info.icon_color",d,"Icon Color")}
                  </div>
                  <ultra-color-picker
                    .value=${p.icon_color||""}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${e}
                    @value-changed=${t=>{this._updateEntity(s,0,{icon_color:t.detail.value},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- Name Settings -->
        <div
          class="settings-section name-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.name_section.title",d,"Name Settings")}
          </div>

          <div style="margin-bottom: 16px;">
            <ha-form
              .hass=${e}
              .data=${{show_name:!1!==p.show_name}}
              .schema=${[{name:"show_name",label:(0,m.kg)("editor.info.show_name",d,"Show Name"),description:(0,m.kg)("editor.info.show_name_desc",d,"Display the entity name above the value"),selector:{boolean:{}}}]}
              .computeLabel=${t=>t.label||t.name}
              .computeDescription=${t=>t.description||""}
              @value-changed=${t=>{this._updateEntity(s,0,{show_name:t.detail.value.show_name},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-form>
          </div>

          ${!1!==p.show_name?n.qy`
                <div style="margin-bottom: 16px;">
                  <ha-form
                    .hass=${e}
                    .data=${{name:null!==(l=null===(r=s.info_entities[0])||void 0===r?void 0:r.name)&&void 0!==l?l:""}}
                    .schema=${[{name:"name",label:(0,m.kg)("editor.info.custom_name",d,"Custom Name"),description:(0,m.kg)("editor.info.custom_name_desc",d,"Override the entity name with a custom name"),selector:{text:{}}}]}
                    .computeLabel=${t=>t.label||t.name}
                    .computeDescription=${t=>t.description||""}
                    @value-changed=${t=>{this._updateEntity(s,0,{name:t.detail.value.name},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ha-form>
                </div>

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
                  >
                    ${(0,m.kg)("editor.info.name_color",d,"Name Color")}
                  </div>
                  <ultra-color-picker
                    .value=${p.name_color||""}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${e}
                    @value-changed=${t=>{this._updateEntity(s,0,{name_color:t.detail.value},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- State Settings -->
        <div
          class="settings-section state-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.state_section.title",d,"State Settings")}
          </div>

          <div style="margin-bottom: 16px;">
            <ha-form
              .hass=${e}
              .data=${{show_state:!1!==p.show_state}}
              .schema=${[{name:"show_state",label:(0,m.kg)("editor.info.show_state",d,"Show State"),description:(0,m.kg)("editor.info.show_state_desc",d,"Display the entity state/value"),selector:{boolean:{}}}]}
              .computeLabel=${t=>t.label||t.name}
              .computeDescription=${t=>t.description||""}
              @value-changed=${t=>{this._updateEntity(s,0,{show_state:t.detail.value.show_state},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-form>
          </div>

          ${!1!==p.show_state?n.qy`
                <div style="margin-bottom: 16px;">
                  <ha-form
                    .hass=${e}
                    .data=${{show_units:!1!==p.show_units}}
                    .schema=${[{name:"show_units",label:(0,m.kg)("editor.info.show_units",d,"Show Units"),description:(0,m.kg)("editor.info.show_units_desc",d,"Display the unit of measurement (if available)"),selector:{boolean:{}}}]}
                    .computeLabel=${t=>t.label||t.name}
                    .computeDescription=${t=>t.description||""}
                    @value-changed=${t=>{this._updateEntity(s,0,{show_units:t.detail.value.show_units},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ha-form>
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">
                    ${(0,m.kg)("editor.info.display_attribute",d,"Display Attribute")}
                  </div>
                  <div class="field-description">
                    ${(0,m.kg)("editor.info.display_attribute_desc",d,"Show an entity attribute instead of the main state")}
                  </div>
                  ${this.renderUcForm(e,{attribute:p.attribute||""},[this.selectField("attribute",this._getEntityAttributes(p.entity,e))],t=>{var e;const i=t.detail.value.attribute;i!==((null===(e=s.info_entities[0])||void 0===e?void 0:e.attribute)||"")&&(this._updateEntity(s,0,{attribute:i},o),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>
              `:""}
          ${!1!==p.show_state?n.qy`
                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
                  >
                    ${(0,m.kg)("editor.info.state_color",d,"State Color")}
                  </div>
                  <ultra-color-picker
                    .value=${p.state_color||""}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${e}
                    @value-changed=${t=>{this._updateEntity(s,0,{state_color:t.detail.value},o),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- Name & Value Layout Section (always shown) -->
        <div
          class="settings-section name-value-layout-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.name_value_layout.title",d,"Name & Value Layout")}
          </div>

          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,m.kg)("editor.info.name_value_layout.orientation",d,"Layout Direction")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${!1===p.show_icon?(0,m.kg)("editor.info.name_value_layout.orientation_desc",d,"Choose how to display the name and value"):"left"===p.icon_position||"right"===p.icon_position?(0,m.kg)("editor.info.name_value_layout.orientation_desc_with_icon",d,"Choose how to arrange the name and value beside the icon"):(0,m.kg)("editor.info.name_value_layout.orientation_desc_vertical_icon",d,"Arrange name and value (horizontal places them on one line)")}
            </div>
            ${this.renderSegmentedField("","",p.name_value_layout||"vertical",[{value:"vertical",label:"Vertical",icon:"mdi:arrow-up-down"},{value:"horizontal",label:"Horizontal",icon:"mdi:arrow-left-right"}],t=>{this._updateEntity(s,0,{name_value_layout:t},o),setTimeout(()=>this.triggerPreviewUpdate(),200)})}
          </div>

          <div class="field-container" style="margin-bottom: 24px;">
            ${this.renderSliderField((0,m.kg)("editor.info.name_value_gap",d,"Name & Value Gap"),(0,m.kg)("editor.info.name_value_gap_desc",d,"Space between the name and value in pixels"),void 0!==p.name_value_gap?p.name_value_gap:2,2,0,32,1,t=>{this._updateEntity(s,0,{name_value_gap:t},o),setTimeout(()=>this.triggerPreviewUpdate(),200)})}
          </div>
        </div>

        <!-- Unified Template Section -->
        <div class="template-section" style="margin-bottom: 24px;">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,m.kg)("editor.info.unified_template_section.title",d,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,m.kg)("editor.info.template_cheatsheet",d,"Template Cheatsheet")}"
                  @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{detail:{module:"info"},bubbles:!0,composed:!0}))}}
                >
                  <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(e,{unified_template_mode:p.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>this._updateEntity(s,0,{unified_template_mode:t.detail.value.unified_template_mode},o))}
            </div>
            <div class="template-description">
              ${(0,m.kg)("editor.info.unified_template_section.desc",d,"Use Jinja2 templates to control icon and color dynamically. Uses entity context variables for seamless entity remapping.")}
            </div>
          </div>

          ${p.unified_template_mode?n.qy`
                <div 
                  class="template-content"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                  @insert-snippet=${t=>{var e,i,n;const o=t.currentTarget.querySelector("ultra-template-editor");null===(e=null==o?void 0:o.insertAtCursor)||void 0===e||e.call(o,null!==(n=null===(i=t.detail)||void 0===i?void 0:i.value)&&void 0!==n?n:"")}}
                >
                  <ultra-template-editor
                    .hass=${e}
                    .value=${p.unified_template||""}
                    .placeholder=${'{\n  "icon": "{% if state|int > 25 %}mdi:fire{% else %}mdi:snowflake{% endif %}",\n  "icon_color": "{% if state|int > 25 %}red{% else %}blue{% endif %}"\n}'}
                    .minHeight=${200}
                    .maxHeight=${500}
                    @value-changed=${t=>{this._updateEntity(s,0,{unified_template:t.detail.value},o)}}
                  ></ultra-template-editor>
                  <div class="template-help">
                    <p><strong>Entity context variables available:</strong></p>
                    <ul>
                      <li>
                        <code>entity</code>, <code>state</code>, <code>name</code>,
                        <code>attributes</code>, <code>unit</code>, <code>domain</code>
                      </li>
                    </ul>
                    <p><strong>Return JSON for multiple properties:</strong></p>
                    <code
                      style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: 4px; font-size: 11px;"
                    >
                      {<br />
                      &nbsp;&nbsp;"icon": "{% if state|int > 25 %}mdi:fire{% else %}mdi:snowflake{%
                      endif %}",<br />
                      &nbsp;&nbsp;"icon_color": "red"<br />
                      }
                    </code>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Size Settings -->
        <div
          class="settings-section size-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.size_section.title",d,"Size Settings")}
          </div>
          <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);">
            ${(0,m.kg)("editor.info.size_section.desc",d,"These controls affect the selected entity only.")}
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${!1!==p.show_icon?n.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,m.kg)("editor.info.icon_size",d,"Icon Size"),(0,m.kg)("editor.info.icon_size_desc",d,"Size of the icon in pixels"),Number(p.icon_size)||26,26,12,48,1,t=>{this._updateEntity(s,0,{icon_size:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                `:""}
            ${!1!==p.show_name?n.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,m.kg)("editor.info.name_size",d,"Name Size"),(0,m.kg)("editor.info.name_size_desc",d,"Size of the entity name text in pixels"),p.name_size||12,12,8,32,1,t=>{this._updateEntity(s,0,{name_size:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                `:""}

            <div class="field-container" style="margin-bottom: 24px;">
              ${this.renderSliderField((0,m.kg)("editor.info.value_size",d,"Value Size"),(0,m.kg)("editor.info.value_size_desc",d,"Size of the entity value text in pixels"),p.text_size||14,14,8,32,1,t=>{this._updateEntity(s,0,{text_size:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>

            ${!1!==p.show_icon?n.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,m.kg)("editor.info.icon_gap",d,"Icon Gap"),(0,m.kg)("editor.info.icon_gap_desc",d,"Space between the icon and content in pixels"),p.icon_gap||8,8,0,32,1,t=>{this._updateEntity(s,0,{icon_gap:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                `:""}
          </div>
        </div>

        <!-- Layout & Positioning Section -->
        <div
          class="settings-section layout-positioning-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,m.kg)("editor.info.layout_section.title",d,"Layout & Positioning")}
          </div>

          <!-- Allow Wrap Toggle -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="flex: 1;">
                <div
                  class="field-title"
                  style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 4px;"
                >
                  ${(0,m.kg)("editor.info.allow_wrap",d,"Allow Wrapping")}
                </div>
                <div
                  class="field-description"
                  style="font-size: 13px !important; font-weight: 400 !important; color: var(--secondary-text-color); opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,m.kg)("editor.info.allow_wrap_desc",d,"Allow grid items to wrap to new rows when they exceed the container width")}
                </div>
              </div>
              <div style="margin-left: 16px;">
                ${this.renderUcForm(e,{allow_wrap:!1!==s.allow_wrap},[this.booleanField("allow_wrap")],t=>{o({allow_wrap:t.detail.value.allow_wrap}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
              </div>
            </div>
          </div>

          <!-- Icon Position -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,m.kg)("editor.info.icon_position",d,"Icon Position")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${(0,m.kg)("editor.info.icon_position_desc",d,"Position the icon relative to the content (left, top, right, or bottom)")}
            </div>
            ${this.renderSegmentedField("","",p.icon_position||"left",[{value:"left",label:"Left",icon:"mdi:arrow-left"},{value:"top",label:"Top",icon:"mdi:arrow-up"},{value:"right",label:"Right",icon:"mdi:arrow-right"},{value:"bottom",label:"Bottom",icon:"mdi:arrow-down"}],t=>{this._updateEntity(s,0,{icon_position:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Content Distribution -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,m.kg)("editor.info.content_distribution",d,"Content Distribution")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${(0,m.kg)("editor.info.content_distribution_desc",d,"Control how icon and content are distributed along the main axis")}
            </div>
            ${this.renderSegmentedField("","",p.content_distribution||"normal",[{value:"normal",label:"Normal",icon:"mdi:format-align-left"},{value:"space-between",label:"Space Between",icon:"mdi:arrow-left-right"},{value:"space-around",label:"Space Around",icon:"mdi:arrow-expand-horizontal"},{value:"space-evenly",label:"Space Evenly",icon:"mdi:arrow-expand-all"}],t=>{this._updateEntity(s,0,{content_distribution:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Overall Alignment and Name Alignment Side by Side -->
          <div
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; margin-bottom: 24px;"
          >
            <!-- Overall Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,m.kg)("editor.info.overall_alignment",d,"Overall Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,m.kg)("editor.info.overall_alignment_desc",d,"Align the entire info item within its container")}
              </div>
              ${this.renderSegmentedField("","",p.overall_alignment||"center",[{value:"left",label:"Left",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"right",label:"Right",icon:"mdi:format-align-right"}],t=>{this._updateEntity(s,0,{overall_alignment:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>

            <!-- Name Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,m.kg)("editor.info.name_alignment",d,"Name Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,m.kg)("editor.info.name_alignment_desc",d,"Align the name text within its container")}
              </div>
              ${this.renderSegmentedField("","",p.name_alignment||"start",[{value:"start",label:"Start",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"end",label:"End",icon:"mdi:format-align-right"}],t=>{this._updateEntity(s,0,{name_alignment:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>
          </div>

          <!-- Icon Alignment and State Alignment Side by Side -->
          <div
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;"
          >
            <!-- Icon Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,m.kg)("editor.info.icon_alignment",d,"Icon Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,m.kg)("editor.info.icon_alignment_desc",d,"Align the icon along the cross axis")}
              </div>
              ${this.renderSegmentedField("","",p.icon_alignment||"center",[{value:"start",label:"Start",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"end",label:"End",icon:"mdi:format-align-right"}],t=>{this._updateEntity(s,0,{icon_alignment:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>

            <!-- State Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,m.kg)("editor.info.state_alignment",d,"State Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,m.kg)("editor.info.state_alignment_desc",d,"Align the state/value text within its container")}
              </div>
              ${this.renderSegmentedField("","",p.state_alignment||"start",[{value:"start",label:"Start",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"end",label:"End",icon:"mdi:format-align-right"}],t=>{this._updateEntity(s,0,{state_alignment:t},o),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,n){return l.A.render(t,e,t=>n(t))}renderLogicTab(t,e,i,n){return s.X.render(t,e,t=>n(t))}renderSingleActionConfig(t,e,i,o,a){const r={action_config:"nothing"===(null==i?void 0:i.action)?Object.assign(Object.assign({},i),{action:"default"}):i};return n.qy`
      <div style="margin-bottom: 16px;">
        <ha-form
          .hass=${o}
          .data=${r}
          .schema=${[{name:"action_config",label:"",selector:{ui_action:{actions:["default","more-info","toggle","navigate","url","perform-action","assist"]}}}]}
          .computeLabel=${t=>t.label||""}
          @value-changed=${t=>{var e;const i=null===(e=t.detail.value)||void 0===e?void 0:e.action_config;i&&a(i)}}
        ></ha-form>
      </div>
    `}renderSplitPreview(t,e){return this.renderPreview(t,e)}renderPreview(t,e,i,o){var a,l;const s=t,d=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",f=s,v=s.design||{},b={color:s.color||v.color,font_size:s.font_size||v.font_size,font_weight:s.font_weight||v.font_weight,font_style:s.font_style||v.font_style,text_transform:s.text_transform||v.text_transform,font_family:s.font_family||v.font_family,line_height:s.line_height||v.line_height,letter_spacing:s.letter_spacing||v.letter_spacing,text_align:s.text_align||v.text_align,white_space:s.white_space||v.white_space,text_shadow_h:s.text_shadow_h||v.text_shadow_h,text_shadow_v:s.text_shadow_v||v.text_shadow_v,text_shadow_blur:s.text_shadow_blur||v.text_shadow_blur,text_shadow_color:s.text_shadow_color||v.text_shadow_color,background_color:s.background_color||v.background_color,background_image:s.background_image||v.background_image,background_size:s.background_size||v.background_size,background_position:s.background_position||v.background_position,background_repeat:s.background_repeat||v.background_repeat,border_style:s.border_style||v.border_style,border_width:s.border_width||v.border_width,border_color:s.border_color||v.border_color,border_radius:s.border_radius||v.border_radius,position:s.position||v.position,top:s.top||v.top,bottom:s.bottom||v.bottom,left:s.left||v.left,right:s.right||v.right,z_index:s.z_index||v.z_index,width:s.width||v.width,height:s.height||v.height,max_width:s.max_width||v.max_width,max_height:s.max_height||v.max_height,min_width:s.min_width||v.min_width,min_height:s.min_height||v.min_height,overflow:s.overflow||v.overflow,clip_path:s.clip_path||v.clip_path,backdrop_filter:s.backdrop_filter||v.backdrop_filter,box_shadow_h:s.box_shadow_h||v.box_shadow_h,box_shadow_v:s.box_shadow_v||v.box_shadow_v,box_shadow_blur:s.box_shadow_blur||v.box_shadow_blur,box_shadow_spread:s.box_shadow_spread||v.box_shadow_spread,box_shadow_color:s.box_shadow_color||v.box_shadow_color,padding_top:s.padding_top||v.padding_top,padding_bottom:s.padding_bottom||v.padding_bottom,padding_left:s.padding_left||v.padding_left,padding_right:s.padding_right||v.padding_right,margin_top:s.margin_top||v.margin_top,margin_bottom:s.margin_bottom||v.margin_bottom,margin_left:s.margin_left||v.margin_left,margin_right:s.margin_right||v.margin_right},y=(t,e)=>null!=t&&""!==t?"string"==typeof t&&/[a-zA-Z%]/.test(t)?t:`${t}px`:null!=e?"string"==typeof e&&/[a-zA-Z%]/.test(e)?e:`${e}px`:(null==s?void 0:s.text_size)?`${s.text_size}px`:"inherit",x=(t,e)=>null!=e?"string"==typeof e&&e.includes("px")?e:`${e}px`:(null==s?void 0:s.icon_size)?`${s.icon_size}px`:"clamp(18px, 4vw, 26px)",w={padding:b.padding_top||b.padding_bottom||b.padding_left||b.padding_right||f.padding_top||f.padding_bottom||f.padding_left||f.padding_right?`${this.addPixelUnit(b.padding_top||f.padding_top)||"0px"} ${this.addPixelUnit(b.padding_right||f.padding_right)||"0px"} ${this.addPixelUnit(b.padding_bottom||f.padding_bottom)||"0px"} ${this.addPixelUnit(b.padding_left||f.padding_left)||"0px"}`:"16px",margin:b.margin_top||b.margin_bottom||b.margin_left||b.margin_right||f.margin_top||f.margin_bottom||f.margin_left||f.margin_right?`${b.margin_top||f.margin_top||"0px"} ${b.margin_right||f.margin_right||"0px"} ${b.margin_bottom||f.margin_bottom||"0px"} ${b.margin_left||f.margin_left||"0px"}`:"0",border:(b.border_style||f.border_style)&&"none"!==(b.border_style||f.border_style)?`${b.border_width||f.border_width||"1px"} ${b.border_style||f.border_style} ${b.border_color||f.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(b.border_radius||f.border_radius)||"0",position:b.position||f.position||"relative",top:b.top||f.top||"auto",bottom:b.bottom||f.bottom||"auto",left:b.left||f.left||"auto",right:b.right||f.right||"auto",zIndex:b.z_index||f.z_index||"auto",width:b.width||f.width||"auto",height:b.height||f.height||"auto",maxWidth:b.max_width||f.max_width||"none",maxHeight:b.max_height||f.max_height||"none",minWidth:b.min_width||f.min_width||"none",minHeight:b.min_height||f.min_height||"auto",overflow:b.overflow||f.overflow||"visible",clipPath:b.clip_path||f.clip_path||"none",backdropFilter:b.backdrop_filter||f.backdrop_filter||"none",boxShadow:(b.box_shadow_h||f.box_shadow_h)&&(b.box_shadow_v||f.box_shadow_v)?`${b.box_shadow_h||f.box_shadow_h||"0"} ${b.box_shadow_v||f.box_shadow_v||"0"} ${b.box_shadow_blur||f.box_shadow_blur||"0"} ${b.box_shadow_spread||f.box_shadow_spread||"0"} ${b.box_shadow_color||f.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",boxSizing:"border-box"},$=(s.info_entities||[]).filter(t=>t.entity&&""!==t.entity.trim()),k=(s.info_entities||[]).filter(t=>!t.entity||""===t.entity.trim());let S="";for(let t=0;t<$.length;t++){const n=$[t];if(n.unified_template_mode&&n.unified_template){!this._templateService&&e?this._templateService=new c.I(e):this._templateService&&e&&this._templateService.updateHass(e);const o=(0,g.KD)(n.unified_template,e,i),a=this._buildUnifiedInfoTemplateKey(s,n,t,o,i),r=null===(l=null==e?void 0:e.__uvc_template_strings)||void 0===l?void 0:l[a];if(r&&""!==String(r).trim()){const t=(0,_.cv)(r);if(!(0,_.HD)(t)&&t.container_background_color){S=t.container_background_color;break}}}}const{styles:z}=(0,p.U9)({color:S||b.background_color||f.background_color,fallback:f.background_color||"transparent",image:this.getBackgroundImageCSS(Object.assign(Object.assign({},f),b),e),imageSize:b.background_size||f.background_size||"cover",imagePosition:b.background_position||f.background_position||"center",imageRepeat:b.background_repeat||f.background_repeat||"no-repeat"});Object.assign(w,z);const T=this.getHoverEffectClass(t),E=this.buildStyleString(this.buildDesignStyles(t,e));if(!s.info_entities||0===s.info_entities.length)return this.renderGradientErrorState((0,m.kg)("editor.info.error_no_entities",d,"Configure Entities"),(0,m.kg)("editor.info.error_no_entities_desc",d,"Add info entities in the General tab"),"mdi:information-outline");if(0===$.length&&k.length>0){const t=k.map((t,e)=>`Entity ${e+1}`).join(", ");return this.renderGradientErrorState((0,m.kg)("editor.info.error_entities_need_config",d,"Entities Need Configuration"),t,"mdi:information-outline")}const I=(s.info_entities&&s.info_entities.length>0?Object.assign(Object.assign({},this.createDefault().info_entities[0]),s.info_entities[0]):this.createDefault().info_entities[0]).overall_alignment||"center",C=k.length>0?this.renderGradientWarningBanner((k.length>1?"entities":"entity")+" need configuration",k.length):"";return this.wrapWithAnimation(n.qy`
      ${C}
      <div
        class="info-module-container ${T}"
        style="${E}; ${this.styleObjectToCss(w)}; align-self: ${"left"===I?"flex-start":"right"===I?"flex-end":"center"};"
      >
        <div class="info-module-preview">
          <div
            class="info-entities"
            style="
            display: grid;
            grid-template-columns: repeat(${s.columns||1}, 1fr);
            grid-auto-flow: ${!1===s.allow_wrap?"column":"row"};
            gap: ${s.gap||12}px;
            justify-content: ${"left"===I?"start":"right"===I?"end":"center"};
            justify-items: ${"left"===I?"start":"right"===I?"end":"center"};
          "
          >
            ${$.slice(0,3).map((o,a)=>{var l,d,m,p,v,w;const $=this.createDefault().info_entities[0];let k=Object.assign(Object.assign({},$),o);k=Object.assign(Object.assign({},k),{icon_position:k.icon_position||"left",overall_alignment:k.overall_alignment||"center",icon_alignment:k.icon_alignment||"center",name_alignment:k.name_alignment||"start",state_alignment:k.state_alignment||"start",name_value_layout:k.name_value_layout||"vertical",name_value_gap:void 0!==k.name_value_gap?k.name_value_gap:2,content_distribution:k.content_distribution||"normal"});const S=null==e?void 0:e.states[k.entity];let z;if(S)if(k.attribute&&void 0!==(null===(l=S.attributes)||void 0===l?void 0:l[k.attribute])){const t=S.attributes[k.attribute];if(z=String(t),!1!==k.show_units){const t=null===(d=S.attributes)||void 0===d?void 0:d.unit_of_measurement;t&&(z+=` ${t}`)}}else z=(0,r.formatEntityState)(e,k.entity,{includeUnit:!1!==k.show_units});else z="N/A";let T,E,I,C,P=void 0!==o.name&&null!==o.name&&""!==String(o.name).trim()?String(o.name):(null===(m=null==S?void 0:S.attributes)||void 0===m?void 0:m.friendly_name)||k.entity,U=k.icon||(null===(p=null==S?void 0:S.attributes)||void 0===p?void 0:p.icon)||"mdi:help-circle",j=b.color||k.icon_color||"var(--primary-color)";if(k.unified_template_mode&&k.unified_template){!this._templateService&&e?this._templateService=new c.I(e):this._templateService&&e&&this._templateService.updateHass(e);const t=(0,g.KD)(k.unified_template,e,i),n=this._buildUnifiedInfoTemplateKey(s,k,a,t,i);if(e.__uvc_template_strings||(e.__uvc_template_strings={}),this._templateService){const o=(0,h.pL)(k.entity,e,{name:k.name,icon:k.icon}),a=(0,h.jh)(k.entity,e);this._templateService.subscribeToTemplate(t,n,()=>{this.triggerPreviewUpdate()},o,i,a)}const o=null===(v=null==e?void 0:e.__uvc_template_strings)||void 0===v?void 0:v[n];let r=!1;if(o&&""!==String(o).trim()){const t=(0,_.cv)(o);if(!(0,_.HD)(t)){const e=(0,_.yv)(t);e&&(U=e),t.icon_color&&(j=t.icon_color,this._lastUnifiedInfoIconColorByKey.set(n,t.icon_color),r=!0),t.name&&(T=String(t.name)),void 0!==t.state_text?E=String(t.state_text):t._isString&&t.content&&!e&&(E=String(t.content).trim()),t.name_color&&(I=String(t.name_color)),t.state_color&&(C=String(t.state_color))}}if(!r){const t=this._lastUnifiedInfoIconColorByKey.get(n);t&&(j=t)}}void 0!==T&&(P=T),void 0!==E&&(z=E);const A=k.icon_position||"left",D=k.icon_alignment||"center",O=(k.name_alignment,k.state_alignment,k.overall_alignment||"center"),F=k.icon_gap||8,H=k.content_distribution||"normal",L="normal"!==H?H:"left"===O?"flex-start":"right"===O?"flex-end":"center",q="normal"!==H?0:F,N=!1!==k.show_icon?this._shouldUseEntityPicture(S,k)?n.qy`
                        <img
                          src="${this._getEntityPicture(S,e)}"
                          class="entity-icon entity-picture"
                          style="
                            width: ${x(0,k.icon_size||26)};
                            height: ${x(0,k.icon_size||26)};
                            border-radius: 50%;
                            object-fit: cover;
                          "
                          alt="Entity picture"
                        />
                      `:n.qy`
                        <ha-icon
                          icon="${U}"
                          class="entity-icon"
                          style="color: ${j}; --mdc-icon-size: ${x(0,k.icon_size||26)};"
                        ></ha-icon>
                      `:"",R=()=>{const t=b.text_shadow_h||f.text_shadow_h,e=b.text_shadow_v||f.text_shadow_v,i=b.text_shadow_blur||f.text_shadow_blur,n=b.text_shadow_color||f.text_shadow_color;return t||e||i||n?`${t||"0px"} ${e||"0px"} ${i||"0px"} ${n||"rgba(0,0,0,0.2)"}`:"none"},W=k.name_value_layout||"vertical",B=void 0!==k.name_value_gap?k.name_value_gap:2,M="horizontal"===W&&"normal"!==H,K=!1!==k.show_icon&&("left"===A||"right"===A),G=!1!==k.show_name?n.qy`
                    <div
                      class="entity-name"
                      style="
                        color: ${I||b.color||k.name_color||"var(--secondary-text-color)"};
                        font-size: ${y(b.font_size,k.name_size||12)};
                        font-weight: ${b.font_weight||(k.name_bold?"bold":"normal")};
                        font-style: ${b.font_style||(k.name_italic?"italic":"normal")};
                        text-transform: ${b.text_transform||(k.name_uppercase?"uppercase":"none")};
                        text-decoration: ${k.name_strikethrough?"line-through":"none"};
                        font-family: ${b.font_family||"inherit"};
                        line-height: ${b.line_height||"inherit"};
                        letter-spacing: ${b.letter_spacing||"inherit"};
                        text-align: ${(t=>{if(b.text_align&&"inherit"!==b.text_align)return b.text_align;const e=t.name_alignment;return"start"===e?"left":"end"===e?"right":"center"===e?"center":"left"})(k)};
                        text-shadow: ${R()};
                        white-space: ${b.white_space||"normal"};
                        flex-shrink: 0;
                      "
                    >
                      ${P}
                    </div>
                  `:"",V=!1!==k.show_state?n.qy`
                    <div
                      class="entity-value"
                      style="
                        color: ${C||b.color||k.state_color||k.text_color||"var(--primary-text-color)"};
                        font-size: ${y(b.font_size,k.text_size||14)};
                        font-weight: ${b.font_weight||(k.text_bold?"bold":"normal")};
                        font-style: ${b.font_style||(k.text_italic?"italic":"normal")};
                        text-transform: ${b.text_transform||(k.text_uppercase?"uppercase":"none")};
                        text-decoration: ${k.text_strikethrough?"line-through":"none"};
                        font-family: ${b.font_family||"inherit"};
                        line-height: ${b.line_height||"inherit"};
                        letter-spacing: ${b.letter_spacing||"inherit"};
                        text-align: ${(t=>{if(b.text_align&&"inherit"!==b.text_align)return b.text_align;const e=t.state_alignment;return"start"===e?"left":"end"===e?"right":"center"===e?"center":"left"})(k)};
                        text-shadow: ${R()};
                        white-space: ${b.white_space||"normal"};
                        flex-shrink: 0;
                      "
                    >
                      ${z}
                    </div>
                  `:"",J=n.qy`
                <div
                  class="entity-content"
                  data-layout="${W}"
                  data-gap="${B}"
                  data-entity-gap="${k.name_value_gap}"
                  data-show-icon="${k.show_icon}"
                  style="
                    display: flex;
                    align-items: ${"horizontal"===W?"center":(t=>{if(b.text_align&&"inherit"!==b.text_align)return"left"===b.text_align?"flex-start":"right"===b.text_align?"flex-end":"center";const e=t.name_alignment;return"start"===e?"flex-start":"end"===e?"flex-end":"center"===e?"center":"flex-start"})(k)};
                    flex-direction: ${"horizontal"===W?"row":"column"};
                    gap: ${M&&!K?0:B}px;
                    justify-content: ${M&&!K?H:"flex-start"};
                    flex: ${M&&!K?"1":"normal"!==H?"0 0 auto":"1"};
                    width: ${M&&!K?"100%":"auto"};
                  "
                >
                  ${G}
                  ${V}
                </div>
              `,Z=M&&K?n.qy`
                    <div
                      class="icon-name-group"
                      style="
                        display: flex;
                        align-items: center;
                        gap: ${F}px;
                        flex-shrink: 0;
                      "
                    >
                      ${"left"===A?n.qy`${N}${G}`:n.qy`${G}${N}`}
                    </div>
                  `:null,X=(null===(w=s.design)||void 0===w||w.hover_effect,this.getHoverEffectClass(t)),Q=()=>Z?n.qy`${Z}${V}`:"left"===A||"top"===A?n.qy`${N}${J}`:n.qy`${J}${N}`,Y=Boolean((null==s?void 0:s.id)&&(0,u.iR)(s.id));var tt;return tt=s,Y||(null==tt?void 0:tt.tap_action)&&"nothing"!==tt.tap_action.action||(null==tt?void 0:tt.hold_action)&&"nothing"!==tt.hold_action.action||(null==tt?void 0:tt.double_tap_action)&&"nothing"!==tt.double_tap_action.action?n.qy`<div
                    class="info-entity-clickable position-${A} ${X}"
                    style="
                    display: flex;
                    width: 100%;
                    flex-direction: ${"top"===A||"bottom"===A?"column":"row"};
                    align-items: ${"start"===D?"flex-start":"end"===D?"flex-end":"center"};
                    justify-content: ${L};
                    gap: ${Z?0:q}px;
                    cursor: pointer;
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                  "
                    @click=${t=>this.handleClick(t,s,e,i)}
                    @dblclick=${t=>this.handleDoubleClick(t,s,e,i)}
                    @mousedown=${t=>this.handleMouseDown(t,s,e,i)}
                    @mouseup=${t=>this.handleMouseUp(t,s,e)}
                    @mouseleave=${t=>this.handleMouseLeave(t,s,e)}
                    @touchstart=${t=>this.handleTouchStart(t,s,e,i)}
                    @touchend=${t=>this.handleTouchEnd(t,s,e,i)}
                  >
                    ${Q()}
                  </div>`:n.qy`<div
                    class="info-entity-item position-${A} ${X}"
                    style="
                    display: flex;
                    width: 100%;
                    flex-direction: ${"top"===A||"bottom"===A?"column":"row"};
                    align-items: ${"start"===D?"flex-start":"end"===D?"flex-end":"center"};
                    justify-content: ${L};
                    gap: ${Z?0:q}px;
                  "
                  >
                    ${Q()}
                  </div>`})}
            ${$.length>3?n.qy` <div class="more-entities">+${$.length-3} more</div> `:""}
          </div>
        </div>
      </div>
    `,t,e)}validate(t){const e=t,i=[...super.validate(t).errors];return(e.info_entities||[]).forEach((t,e)=>{t.entity&&t.entity.trim()}),{valid:0===i.length,errors:i}}getStyles(){return`\n      .info-module-preview {\n      }\n      \n      .info-entities {\n        width: 100%;\n      }\n      \n      .info-entity-item {\n        min-width: 0;\n        flex: 1;\n      }\n      \n      .entity-content {\n        display: flex;\n        min-width: 0;\n        flex: 1;\n      }\n      \n      .entity-icon {\n        flex-shrink: 0;\n      }\n      \n      .entity-name {\n        font-size: 12px;\n        line-height: 1.2;\n      }\n      \n      .entity-value {\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 1.2;\n      }\n      \n      .more-entities {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 8px;\n        color: var(--secondary-text-color);\n        font-size: 12px;\n        font-style: italic;\n      }\n      \n      .info-entities-section,\n      .layout-section {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      .info-entities-section:first-child {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: none;\n      }\n      \n      .info-entities-section h4,\n      .layout-section h4 {\n        margin: 0 0 12px 0;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      \n      .entity-item {\n        border: 1px solid var(--divider-color);\n        border-radius: 8px;\n        padding: 12px;\n        margin-bottom: 12px;\n        background: var(--card-background-color);\n      }\n      \n      .entity-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n        font-weight: 500;\n        font-size: 14px;\n      }\n      \n      .remove-entity-btn {\n        background: none;\n        border: none;\n        color: var(--error-color);\n        cursor: pointer;\n        padding: 4px;\n        border-radius: 4px;\n        font-size: 14px;\n      }\n      \n      .remove-entity-btn:disabled {\n        opacity: 0.3;\n        cursor: not-allowed;\n      }\n      \n      .add-entity-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        padding: 12px;\n        border: 2px dashed var(--primary-color);\n        border-radius: 8px;\n        background: none;\n        color: var(--primary-color);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 500;\n      }\n      \n      .add-entity-btn:hover {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      \n      .entity-display-options {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n        margin: 8px 0;\n      }\n      \n      /* Control button styles */\n      .control-btn {\n        padding: 8px 4px;\n        border: 1px solid var(--divider-color);\n        background: var(--card-background-color);\n        color: var(--primary-text-color);\n        border-radius: 4px;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.2s ease;\n        user-select: none;\n        font-size: 10px;\n      }\n      \n      .control-btn:hover:not(.active) {\n        border-color: var(--primary-color) !important;\n        background: var(--primary-color) !important;\n        color: var(--text-primary-color, #fff) !important;\n        opacity: 0.8;\n      }\n      \n      .control-btn ha-icon {\n        font-size: 14px;\n      }\n      \n      .control-button-group {\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n        border-radius: 4px;\n        overflow: visible;\n        position: relative;\n      }\n      \n      .control-button-group .control-btn:not(:last-child) {\n        border-right: none;\n      }\n      \n      .control-button-group .control-btn:first-child {\n        border-radius: 4px 0 0 4px;\n      }\n      \n      .control-button-group .control-btn:last-child {\n        border-radius: 0 4px 4px 0;\n      }\n      \n      .control-button-group .control-btn:only-child {\n        border-radius: 4px;\n      }\n\n      .control-button-group .control-btn.active {\n        position: relative;\n        z-index: 2;\n        border-radius: 4px !important;\n      }\n      \n      /* Position-specific layout styles */\n      .position-left {\n        flex-direction: row;\n      }\n      \n      .position-right {\n        flex-direction: row-reverse;\n      }\n      \n      .position-top {\n        flex-direction: column;\n      }\n      \n      .position-bottom {\n        flex-direction: column-reverse;\n      }\n\n      /* Gap control styles */\n      ${o.m.getSliderStyles()}\n\n      /* Legacy hover effects removed - now handled by new hover effects system */\n\n      /* Template Section Styles */\n      .template-section {\n        background: var(--card-background-color);\n        border-radius: 8px;\n        padding: 16px;\n        border: 1px solid var(--divider-color);\n        margin-bottom: 32px;\n      }\n\n      .template-header {\n        margin-bottom: 16px;\n      }\n\n      .switch-container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 12px;\n      }\n\n      .switch-label-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .switch-label {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-color);\n      }\n\n      .help-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 28px;\n        height: 28px;\n        padding: 0;\n        background: var(--primary-color) !important;\n        border: none !important;\n        color: var(--text-primary-color, white) !important;\n        cursor: pointer;\n        border-radius: 50%;\n        line-height: 0;\n      }\n\n      .help-btn:hover {\n        opacity: 0.85;\n      }\n\n      .help-btn ha-icon {\n        --mdc-icon-size: 18px;\n        width: 18px;\n        height: 18px;\n        flex-shrink: 0;\n        display: block;\n      }\n\n      /* Toggle Switch Styles */\n      .switch {\n        position: relative;\n        display: inline-block;\n        width: 44px;\n        height: 24px;\n      }\n\n      .switch input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n      }\n\n      .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: var(--disabled-color);\n        transition: 0.3s;\n        border-radius: 24px;\n      }\n\n      .slider:before {\n        position: absolute;\n        content: "";\n        height: 18px;\n        width: 18px;\n        left: 3px;\n        bottom: 3px;\n        background-color: white;\n        transition: 0.3s;\n        border-radius: 50%;\n      }\n\n      input:checked + .slider {\n        background-color: var(--primary-color);\n      }\n\n      input:checked + .slider:before {\n        transform: translateX(20px);\n      }\n\n      .slider.round {\n        border-radius: 24px;\n      }\n\n      .slider.round:before {\n        border-radius: 50%;\n      }\n\n      .template-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        line-height: 1.4;\n        margin-bottom: 8px;\n      }\n\n      .template-content {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n\n      .template-editor {\n        min-height: 120px;\n        font-family: 'Courier New', monospace;\n        font-size: 13px;\n        line-height: 1.4;\n        resize: vertical;\n        padding: 12px;\n        border: 1px solid var(--divider-color);\n        border-radius: 4px;\n        background: var(--code-editor-background-color, #1e1e1e);\n        color: var(--primary-text-color);\n        outline: none;\n        transition: border-color 0.2s ease;\n      }\n\n      .template-editor:focus {\n        border-color: var(--primary-color);\n        box-shadow: 0 0 0 1px var(--primary-color);\n      }\n\n      .template-help {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        margin-top: 4px;\n      }\n\n      .template-help p {\n        margin: 8px 0;\n        font-weight: 500;\n      }\n\n      .template-help ul {\n        margin: 4px 0;\n        padding-left: 16px;\n      }\n\n      .template-help li {\n        margin: 2px 0;\n      }\n\n      .template-help code {\n        background: rgba(var(--rgb-primary-color), 0.1);\n        padding: 2px 4px;\n        border-radius: 3px;\n        font-family: 'Courier New', monospace;\n        font-size: 11px;\n      }\n    `}hasActiveActions(t){const e=t.tap_action&&"default"!==t.tap_action.action&&"nothing"!==t.tap_action.action,i=t.hold_action&&"default"!==t.hold_action.action&&"nothing"!==t.hold_action.action,n=t.double_tap_action&&"default"!==t.double_tap_action.action&&"nothing"!==t.double_tap_action.action;return!!(e||i||n)}handleClick(t,e,i,n){t.preventDefault(),this.clickTimeout&&clearTimeout(this.clickTimeout),this.clickTimeout=setTimeout(()=>{this.handleTapAction(t,e,i,n)},300)}handleDoubleClick(t,e,i,n){t.preventDefault(),this.clickTimeout&&(clearTimeout(this.clickTimeout),this.clickTimeout=null),this.handleDoubleAction(t,e,i,n)}handleMouseDown(t,e,i,n){this.startHold(t,e,i,n)}handleMouseUp(t,e,i){this.endHold(t,e,i)}handleMouseLeave(t,e,i){this.endHold(t,e,i)}handleTouchStart(t,e,i,n){this.startHold(t,e,i,n)}handleTouchEnd(t,e,i,n){this.endHold(t,e,i)}startHold(t,e,i,n){this.isHolding=!1,this.holdTimeout=setTimeout(()=>{this.isHolding=!0,this.handleHoldAction(t,e,i,n)},500)}endHold(t,e,i){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=null),this.isHolding=!1}async handleTapAction(t,e,i,n){this.isHolding||e.tap_action&&"nothing"===e.tap_action.action||await a.K.handleAction(e.tap_action||{action:"default"},i,t.target,n,e.entity,e)}async handleDoubleAction(t,e,i,n){e.double_tap_action&&"nothing"===e.double_tap_action.action||await a.K.handleAction(e.double_tap_action||{action:"default"},i,t.target,n,e.entity,e)}async handleHoldAction(t,e,i,n){e.hold_action&&"nothing"===e.hold_action.action||await a.K.handleAction(e.hold_action||{action:"default"},i,t.target,n,e.entity,e)}_addEntity(t,e){const i={id:this.generateId("entity"),entity:"weather.forecast_home",name:"Temperature",icon:"mdi:thermometer",show_icon:!0,show_name:!0,show_state:!0,text_size:14,name_size:12,icon_size:26,text_bold:!1,text_italic:!1,text_uppercase:!1,text_strikethrough:!1,name_bold:!1,name_italic:!1,name_uppercase:!1,name_strikethrough:!1,icon_color:"var(--primary-color)",name_color:"var(--secondary-text-color)",text_color:"var(--primary-text-color)",state_color:"var(--primary-text-color)",click_action:"more-info",navigation_path:"",url:"",service:"",service_data:{},unified_template_mode:!1,unified_template:"",ignore_entity_state_config:!1,icon_position:"left",icon_alignment:"center",name_alignment:"start",state_alignment:"start",overall_alignment:"center",icon_gap:8,name_value_layout:"vertical",name_value_gap:2,content_distribution:"normal"},n=[...t.info_entities,i],o={info_entities:n};1!==n.length||t.tap_action&&"nothing"!==t.tap_action.action&&"default"!==t.tap_action.action||(o.tap_action={action:"more-info",entity:i.entity}),e(o)}_removeEntity(t,e,i){t.info_entities.length<=1||i({info_entities:t.info_entities.filter((t,i)=>i!==e)})}_syncPrimaryEntityActions(t,e,i){const n=t=>t&&"object"==typeof t?t.target?t:"more-info"===t.action||"toggle"===t.action||"default"===t.action?Object.assign(Object.assign({},t),{entity:i}):t:t,o=void 0!==e.tap_action?e.tap_action:t.tap_action,a=void 0!==e.hold_action?e.hold_action:t.hold_action,r=void 0!==e.double_tap_action?e.double_tap_action:t.double_tap_action,l=n(o),s=n(a),d=n(r);l!==t.tap_action&&(e.tap_action=l),s!==t.hold_action&&(e.hold_action=s),d!==t.double_tap_action&&(e.double_tap_action=d)}_handleEntityChange(t,e,i,n,o){var a;const r={entity:i};if(i&&(null==n?void 0:n.states[i])){const t=(null===(a=n.states[i].attributes)||void 0===a?void 0:a.friendly_name)||i.split(".").pop()||"",e=d.s.getEntityIcon(i,n);r.name=t,e&&(r.icon=e)}const l={info_entities:t.info_entities.map((t,i)=>i===e?Object.assign(Object.assign({},t),r):t)};i&&(null==n?void 0:n.states[i])&&(!t.tap_action||"nothing"===t.tap_action.action||"default"===t.tap_action.action||"more-info"===t.tap_action.action)&&(l.tap_action={action:"default",entity:i}),0===e&&i&&this._syncPrimaryEntityActions(t,l,i),o(l),setTimeout(()=>{window.dispatchEvent(new CustomEvent("ultra-card-actions-refresh",{detail:{moduleId:t.id},bubbles:!0,composed:!0}))},50)}_updateEntity(t,e,i,n){if(!t.info_entities||0===t.info_entities.length){const e=this.createDefault().info_entities[0];return t.info_entities=[Object.assign(Object.assign({},e),i)],void n({info_entities:t.info_entities})}if(e>=t.info_entities.length){const i=this.createDefault().info_entities[0];for(;t.info_entities.length<=e;)t.info_entities.push(Object.assign({},i))}n({info_entities:t.info_entities.map((t,n)=>n===e?Object.assign(Object.assign({},t),i):t)})}getBackgroundImageCSS(t,e){var i,n;if(!t.background_image_type||"none"===t.background_image_type)return"none";switch(t.background_image_type){case"upload":case"url":if(t.background_image)return`url("${t.background_image}")`;break;case"entity":if(t.background_image_entity&&(null==e?void 0:e.states[t.background_image_entity])){const o=e.states[t.background_image_entity];let a="";if((null===(i=o.attributes)||void 0===i?void 0:i.entity_picture)?a=o.attributes.entity_picture:(null===(n=o.attributes)||void 0===n?void 0:n.image)?a=o.attributes.image:o.state&&"string"==typeof o.state&&(o.state.startsWith("/")||o.state.startsWith("http"))&&(a=o.state),a)return`url("${a}")`}}return"none"}styleObjectToCss(t){return Object.entries(t).map(([t,e])=>`${t.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}: ${e}`).join("; ")}addPixelUnit(t){if(!t&&0!==t)return t;const e=String(t);return/^\d+$/.test(e)?`${e}px`:/^[\d\s]+$/.test(e)?e.split(" ").map(t=>t.trim()?`${t}px`:t).join(" "):e}_hashString(t){let e=0;for(let i=0;i<t.length;i+=1)e=(e<<5)-e+t.charCodeAt(i),e|=0;return Math.abs(e)}async _handleTemplateChange(t,e,i,n){t&&n&&(this._templateInputDebounce&&clearTimeout(this._templateInputDebounce),this._templateInputDebounce=setTimeout(async()=>{try{const e=t.trim();if(!e.startsWith("{{")||!e.endsWith("}}"))return;const o=await n.callApi("POST","template",{template:t});n.__uvc_template_strings||(n.__uvc_template_strings={});const a=n.__uvc_template_strings,r=this._hashString(t);a[`info_entity_${i}_${r}`]=o,this.triggerPreviewUpdate()}catch(t){}},3e3))}_getEntityPicture(t,e){var i,n;if(!t||!e)return null;if(!t.entity_id)return null;const o=null===(i=t.attributes)||void 0===i?void 0:i.entity_picture;if(o)return o.startsWith("/")?`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}${o}`:o;const a=["image","picture","thumbnail","avatar","photo","icon_url","image_url"];for(const i of a){const o=null===(n=t.attributes)||void 0===n?void 0:n[i];if(o&&"string"==typeof o)return o.startsWith("/")?`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}${o}`:o}return null}_shouldUseEntityPicture(t,e){var i;return!!t&&(!1!==(null==e?void 0:e.show_entity_picture)&&(!!t.entity_id&&(!!(null===(i=t.attributes)||void 0===i?void 0:i.entity_picture)||["image","picture","thumbnail","avatar","photo","icon_url","image_url"].some(e=>{var i;return(null===(i=t.attributes)||void 0===i?void 0:i[e])&&"string"==typeof t.attributes[e]&&""!==t.attributes[e].trim()}))))}_getEntityAttributes(t,e){var i;const n=[{value:"",label:"None (Use Entity State)"}];try{if(!t||!(null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[t]))return n;const o=e.states[t].attributes||{};return Object.keys(o).forEach(t=>{if(!t.startsWith("_")&&"friendly_name"!==t&&"entity_picture"!==t&&"supported_features"!==t&&"device_class"!==t&&"state_class"!==t){const e=o[t];let i="";i=null==e?"null":"object"==typeof e?Array.isArray(e)?`[${e.length} items]`:"{object}":String(e).substring(0,20),n.push({value:t,label:`${t} (${i})`})}}),n}catch(t){return console.error("Error getting attributes:",t),n}}}},571(t,e,i){i.d(e,{s:()=>n});class n{static getEntityIcon(t,e){if("object"==typeof t&&null!==t&&!Array.isArray(t)){if(null==e?void 0:e.states)for(const[i,n]of Object.entries(e.states))if(n===t){t=i;break}if("string"!=typeof t)return this._getEnhancedIconForEntity("unknown",t)}if(!t||!(null==e?void 0:e.states[t]))return null;const i=e.states[t];return this._getHomeAssistantComputedIcon(t,i,e)||this._getEnhancedIconForEntity(t,i)}static _getHomeAssistantComputedIcon(t,e,i){var n,o,a,r,l;if(null===(n=e.attributes)||void 0===n?void 0:n.icon)return e.attributes.icon;try{if(null===(a=null===(o=window.customCards)||void 0===o?void 0:o.helpers)||void 0===a?void 0:a.stateIcon){const t=window.customCards.helpers.stateIcon(e);if(t)return t}const n=[window.stateIcon,window.computeStateIcon,window.computeEntityIcon,null===(r=window.hassIcons)||void 0===r?void 0:r.stateIcon,null===(l=window.hassIcons)||void 0===l?void 0:l.computeStateIcon,i.stateIcon,i.computeStateIcon,i.computeEntityIcon];for(const t of n)if("function"==typeof t)try{const i=t(e);if(i)return i}catch(t){}if(i.entities&&i.entities[t]){const e=i.entities[t];if(e.icon)return e.icon}if(t.startsWith("weather.")){const t={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:weather-exceptional"},i=e.state;if(t[i])return t[i]}}catch(t){console.debug("Failed to compute HA icon, falling back to enhanced detection:",t)}return null}static _getEnhancedIconForEntity(t,e){var i,n,o;const a=t.split(".")[0],r=t.split(".")[1]||"",l=null===(i=e.attributes)||void 0===i?void 0:i.device_class,s=null===(n=e.attributes)||void 0===n?void 0:n.unit_of_measurement,d=(null===(o=e.attributes)||void 0===o?void 0:o.friendly_name)||"",c=e.state,m=r.toLowerCase(),p=d.toLowerCase();return this._isBatteryRelated(m,p,l,s)?this._isChargingRelated(m,p)?this._getChargingBatteryIcon(c,s):this._getBatteryIcon(c,s):this._isTemperatureRelated(m,p,l,s)?"mdi:thermometer":this._isHumidityRelated(m,p,l,s)?"mdi:water-percent":this._isPowerRelated(m,p,l,s)?"mdi:flash":this._isSignalRelated(m,p)?"mdi:wifi":"binary_sensor"===a&&this._isDoorWindowRelated(m,p)?"on"===c?"mdi:door-open":"mdi:door-closed":"binary_sensor"===a&&this._isMotionRelated(m,p)?"on"===c?"mdi:motion-sensor":"mdi:motion-sensor-off":this._isIlluminanceRelated(m,p,l,s)?"mdi:brightness-5":this._isPressureRelated(m,p,l,s)?"mdi:gauge":this._getDefaultIconForDomain(a,l,c)}static _isBatteryRelated(t,e,i,n){return"battery"===i||t.includes("battery")||t.includes("charge")||t.includes("power_level")||e.includes("battery")||e.includes("charge")||"%"===n}static _isChargingRelated(t,e){return["charging","charge_target","charging_target","charge_limit"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _getBatteryIcon(t,e){const i=parseFloat(t);return isNaN(i)?"mdi:battery-unknown":i>=95?"mdi:battery":i>=85?"mdi:battery-90":i>=75?"mdi:battery-80":i>=65?"mdi:battery-70":i>=55?"mdi:battery-60":i>=45?"mdi:battery-50":i>=35?"mdi:battery-40":i>=25?"mdi:battery-30":i>=15?"mdi:battery-20":i>=5?"mdi:battery-10":"mdi:battery-alert"}static _getChargingBatteryIcon(t,e){const i=parseFloat(t);return isNaN(i)?"mdi:battery-charging":i>=95?"mdi:battery-charging-100":i>=85?"mdi:battery-charging-90":i>=75?"mdi:battery-charging-80":i>=65?"mdi:battery-charging-70":i>=55?"mdi:battery-charging-60":i>=45?"mdi:battery-charging-50":i>=35?"mdi:battery-charging-40":i>=25?"mdi:battery-charging-30":i>=15?"mdi:battery-charging-20":i>=5?"mdi:battery-charging-10":"mdi:battery-charging-outline"}static _isTemperatureRelated(t,e,i,n){return"temperature"===i||t.includes("temp")||e.includes("temperature")||"°C"===n||"°F"===n||"K"===n}static _isHumidityRelated(t,e,i,n){return"humidity"===i||t.includes("humidity")||e.includes("humidity")||"%"===n&&(t.includes("humid")||e.includes("humid"))}static _isPowerRelated(t,e,i,n){return"power"===i||"energy"===i||t.includes("power")||t.includes("energy")||t.includes("consumption")||"W"===n||"kW"===n||"kWh"===n||"Wh"===n}static _isSignalRelated(t,e){return["signal","rssi","wifi","network"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _isDoorWindowRelated(t,e){return["door","window","gate"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _isMotionRelated(t,e){return["motion","movement","occupancy","presence"].some(i=>t.includes(i)||e.toLowerCase().includes(i))}static _isIlluminanceRelated(t,e,i,n){return"illuminance"===i||t.includes("illuminance")||t.includes("brightness")||t.includes("lux")||"lx"===n||"lux"===n}static _isPressureRelated(t,e,i,n){return"pressure"===i||t.includes("pressure")||e.includes("pressure")||"hPa"===n||"mbar"===n||"Pa"===n||"psi"===n}static _getDefaultIconForDomain(t,e,i){return{alarm_control_panel:"mdi:shield",automation:"mdi:robot",binary_sensor:"mdi:radiobox-blank",button:"mdi:button-pointer",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",cover:"mdi:window-shutter",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",humidifier:"mdi:air-humidifier",input_boolean:"mdi:toggle-switch",input_button:"mdi:button-pointer",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",light:"mdi:lightbulb",lock:"mdi:lock",media_player:"mdi:speaker",number:"mdi:ray-vertex",person:"mdi:account",plant:"mdi:flower",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",siren:"mdi:bullhorn",sun:"mdi:white-balance-sunny",switch:"mdi:toggle-switch",timer:"mdi:timer",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:"mdi:weather-partly-cloudy",zone:"mdi:map-marker"}[t]||"mdi:eye"}}},9760(t,e,i){i.d(e,{formatEntityState:()=>o});var n=i(1340);const o=(t,e,i)=>{var o,a;const r=!1!==(null==i?void 0:i.includeUnit),l=null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[e];if(!t||!l)return void 0!==(null==i?void 0:i.state)?String(i.state):"";const s=t.formatEntityState,d=s?s(l,void 0!==(null==i?void 0:i.state)?String(i.state):void 0):(0,n.nu)(t.localize,l,t.locale,null==i?void 0:i.state);if(r)return d;const c=null===(a=l.attributes)||void 0===a?void 0:a.unit_of_measurement;if(c&&"string"==typeof d){const t=` ${c}`;if(d.endsWith(t))return d.slice(0,-t.length)}return d}},9327(t,e,i){function n(t,e){var i;if(!t||"string"!=typeof t||""===t.trim())return"";const n=t.trim(),o=null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[n];return o?`${n}|${o.state}|${function(t){var e,i,n,o;if(!t||"object"!=typeof t)return"";const a=`${null!==(e=t.unit_of_measurement)&&void 0!==e?e:""}|${null!==(i=t.device_class)&&void 0!==i?i:""}|${null!==(n=t.friendly_name)&&void 0!==n?n:""}|${null!==(o=t.icon)&&void 0!==o?o:""}|${Array.isArray(t.rgb_color)?t.rgb_color.join(","):""}`;let r=0;for(let t=0;t<a.length;t++)r=(r<<5)-r+a.charCodeAt(t),r|=0;return Math.abs(r).toString(36)}(o.attributes)}`:`${n}|unavailable|`}function o(t,e){const i=[...new Set(t.filter(t=>!!t&&""!==String(t).trim()))].sort();return 0===i.length?"":i.map(t=>n(t,e)).join("||")}function a(t,e,i){var n;const o=null===(n=null==e?void 0:e.states)||void 0===n?void 0:n[t];if(!o)return{entity:t,state:"unavailable",name:(null==i?void 0:i.name)||t,attributes:{},unit:"",domain:t.split(".")[0]||"unknown",device_class:"",friendly_name:(null==i?void 0:i.name)||t,config:i||{}};const a=t.split(".")[0],r=o.attributes||{};return{entity:t,state:o.state,name:(null==i?void 0:i.name)||r.friendly_name||t,attributes:r,unit:r.unit_of_measurement||"",domain:a,device_class:r.device_class||"",friendly_name:r.friendly_name||"",config:i||{},state_number:parseFloat(o.state),state_boolean:"on"===o.state||"true"===o.state||"yes"===o.state}}function r(t,e,i){const n=t.map((t,n)=>{const o=null==i?void 0:i[n];return a(t,e,o)}),o=n[0]||{entity:"",state:"unavailable",name:"",attributes:{},unit:"",domain:"unknown",device_class:"",friendly_name:"",config:{}};return Object.assign(Object.assign({},o),{entities:n})}i.d(e,{Qq:()=>o,jh:()=>n,pL:()=>a,wI:()=>r})}}]);
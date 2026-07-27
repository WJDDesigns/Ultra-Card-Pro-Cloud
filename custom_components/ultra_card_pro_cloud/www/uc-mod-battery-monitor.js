"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[8612],{7574(e,t,i){i.d(t,{UltraBatteryMonitorModule:()=>c});var o=i(5183),r=i(3721),n=i(766),a=i(5096),s=i(5147),l=i(8938);i(7921);const d="uc-module-patch-by-id";class c extends r.m{constructor(){super(...arguments),this.metadata={type:"battery_monitor",title:"Battery Monitor",description:"Auto-discover battery sensors and highlight low / critical devices with 5 visual styles",author:"WJD Designs",version:"1.0.0",icon:"mdi:battery-alert",category:"data",tags:["battery","monitor","low","critical","devices","health","auto"]},this._expandedEntities=new Set}createDefault(e){return{id:e||this.generateId("battery_monitor"),type:"battery_monitor",discovery_mode:"auto",entities:[],exclude_patterns:[],hidden_entities:[],include_battery_level_attribute:!0,include_binary_sensors:!1,style:"list",title:"Battery Monitor",show_title:!0,max_items:25,show_charging_indicator:!0,show_percentage_value:!0,show_item_border:!0,sort_direction:"lowest_first",critical_threshold:10,low_threshold:25,show_only_below_threshold:!1,critical_color:"",low_color:"",ok_color:"",charging_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=e,i=[...super.validate(e).errors];return"manual"!==t.discovery_mode||t.entities&&0!==t.entities.length||i.push((0,a.kg)("editor.battery_monitor.error_manual_empty","en","Add at least one entity, or switch discovery to Auto or Both.")),{valid:0===i.length,errors:i}}renderActionsTab(e,t,i,o){return s.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return l.X.render(e,t,e=>o(e))}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .bm-style-grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n        gap: 10px;\n      }\n      .bm-strip {\n        display: flex;\n        height: 28px;\n        border-radius: 8px;\n        overflow: hidden;\n        border: 1px solid var(--divider-color);\n      }\n      .bm-strip-seg {\n        flex: 1;\n        min-width: 4px;\n        cursor: pointer;\n        position: relative;\n        transition: opacity 0.15s ease;\n      }\n      .bm-strip-seg .uc-bm-remove {\n        position: absolute;\n        top: 2px;\n        right: 2px;\n        margin: 0;\n        padding: 0;\n        z-index: 1;\n      }\n      .bm-strip-seg:hover {\n        opacity: 0.85;\n        filter: brightness(1.08);\n      }\n      .uc-bm-remove {\n        flex-shrink: 0;\n        cursor: pointer;\n        color: var(--error-color);\n        --mdc-icon-size: 18px;\n        padding: 4px;\n        margin-left: 4px;\n      }\n    `}renderGeneralTab(e,t,i,r){var s,l,d,c;const g=e,h=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <style>
        .settings-section {
          background: var(--secondary-background-color);
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-color);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--primary-color);
          letter-spacing: 0.5px;
        }
        .style-switcher {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 8px;
          margin-bottom: 8px;
        }
        .style-btn {
          padding: 12px 8px;
          border: 2px solid var(--divider-color);
          border-radius: 12px;
          background: var(--card-background-color);
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
        }
        .style-btn:hover {
          border-color: var(--primary-color);
        }
        .style-btn.active {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color), 0.08);
        }
        .style-btn ha-icon {
          display: block;
          margin: 0 auto 6px;
          color: var(--primary-color);
          --mdc-icon-size: 26px;
        }
        .style-btn .st-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color);
        }
        .style-btn .st-desc {
          font-size: 10px;
          color: var(--secondary-text-color);
          margin-top: 4px;
          line-height: 1.2;
        }
        .domain-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
          min-height: 32px;
        }
        .domain-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--primary-color);
          color: var(--text-primary-color);
          border-radius: 16px;
          font-size: 13px;
          position: relative;
        }
        .domain-chip.exclude {
          background: var(--error-color);
        }
        .domain-chip:hover {
          padding-right: 28px;
        }
        .domain-chip .chip-remove {
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          position: absolute;
          right: 8px;
          transition: opacity 0.2s ease;
        }
        .domain-chip:hover .chip-remove {
          opacity: 1;
        }
        .domain-input-row {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }
        .domain-input {
          flex: 1;
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          font-size: 14px;
        }
        .add-btn {
          padding: 8px 16px;
          background: var(--primary-color);
          color: var(--text-primary-color);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .add-btn.full-width {
          width: 100%;
          justify-content: center;
          padding: 12px;
          margin-top: 8px;
        }
        .entity-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: var(--card-background-color);
          border-radius: 8px;
          margin-bottom: 8px;
          border: 1px solid var(--divider-color);
        }
        .entity-info {
          flex: 1;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .entity-info.empty {
          color: var(--secondary-text-color);
          font-style: italic;
        }
        .expand-icon {
          cursor: pointer;
          color: var(--primary-color);
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .expand-icon.expanded {
          transform: rotate(180deg);
        }
        .delete-icon {
          cursor: pointer;
          color: var(--error-color);
          flex-shrink: 0;
        }
        .entity-settings {
          padding: 16px;
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          border-radius: 0 8px 8px 0;
          margin-bottom: 8px;
        }
      </style>

      <div class="module-settings">
        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_style",h,"Style")}
          </div>
          ${this.renderSegmentedField("","",g.style||"list",[{value:"list",label:(0,a.kg)("editor.battery_monitor.style_list",h,"List"),icon:"mdi:format-list-bulleted"},{value:"bars",label:(0,a.kg)("editor.battery_monitor.style_bars",h,"Bars"),icon:"mdi:chart-bar"},{value:"cards",label:(0,a.kg)("editor.battery_monitor.style_cards",h,"Cards"),icon:"mdi:view-grid"},{value:"rings",label:(0,a.kg)("editor.battery_monitor.style_rings",h,"Rings"),icon:"mdi:circle-outline"},{value:"strip",label:(0,a.kg)("editor.battery_monitor.style_strip",h,"Strip"),icon:"mdi:palette-swatch-horizontal"}],e=>{r({style:e}),this.triggerPreviewUpdate()})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_display",h,"Display")}
          </div>
          ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.title",h,"Title"),(0,a.kg)("editor.battery_monitor.title_desc",h,"Header above the list."),t,{title:g.title||"Battery Monitor"},[n.U.text("title")],e=>{r({title:e.detail.value.title}),this.triggerPreviewUpdate()})}
          ${this.renderSettingsSection("","",[{title:(0,a.kg)("editor.battery_monitor.show_title",h,"Show title"),description:(0,a.kg)("editor.battery_monitor.show_title_desc",h,"Display header."),hass:t,data:{show_title:!1!==g.show_title},schema:[this.booleanField("show_title")],onChange:e=>{r({show_title:e.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.show_charging",h,"Show charging indicator"),description:(0,a.kg)("editor.battery_monitor.show_charging_desc",h,"When a charging binary_sensor is found."),hass:t,data:{show_charging_indicator:!1!==g.show_charging_indicator},schema:[this.booleanField("show_charging_indicator")],onChange:e=>{r({show_charging_indicator:e.detail.value.show_charging_indicator}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.show_pct",h,"Show percentage"),description:(0,a.kg)("editor.battery_monitor.show_pct_desc",h,"Show numeric % next to each device."),hass:t,data:{show_percentage_value:!1!==g.show_percentage_value},schema:[this.booleanField("show_percentage_value")],onChange:e=>{r({show_percentage_value:e.detail.value.show_percentage_value}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.show_item_border",h,"Show item border"),description:(0,a.kg)("editor.battery_monitor.show_item_border_desc",h,"Draw a 1px border around each device tile. Turn off for a borderless look."),hass:t,data:{show_item_border:!1!==g.show_item_border},schema:[this.booleanField("show_item_border")],onChange:e=>{r({show_item_border:e.detail.value.show_item_border}),this.triggerPreviewUpdate()}}])}
          ${this.renderSliderField((0,a.kg)("editor.battery_monitor.max_items",h,"Max items"),(0,a.kg)("editor.battery_monitor.max_items_desc",h,"Maximum devices to show."),null!==(l=g.max_items)&&void 0!==l?l:25,25,5,100,1,e=>{r({max_items:e}),this.triggerPreviewUpdate()},"")}
          ${this.renderFieldSection((0,a.kg)("editor.battery_monitor.sort",h,"Sort"),(0,a.kg)("editor.battery_monitor.sort_desc",h,"Order of devices."),t,{sort_direction:g.sort_direction||"lowest_first"},[this.selectField("sort_direction",[{value:"lowest_first",label:(0,a.kg)("editor.battery_monitor.sort_low",h,"Lowest first")},{value:"highest_first",label:(0,a.kg)("editor.battery_monitor.sort_high",h,"Highest first")},{value:"name",label:(0,a.kg)("editor.battery_monitor.sort_name",h,"Name A–Z")},{value:"unchanged",label:(0,a.kg)("editor.battery_monitor.sort_raw",h,"Unchanged")}])],e=>{r({sort_direction:e.detail.value.sort_direction}),this.triggerPreviewUpdate()})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_thresholds",h,"Thresholds")}
          </div>
          ${this.renderSliderField((0,a.kg)("editor.battery_monitor.critical",h,"Critical threshold"),(0,a.kg)("editor.battery_monitor.critical_desc",h,"At or below this % uses critical color."),null!==(d=g.critical_threshold)&&void 0!==d?d:10,10,0,50,1,e=>{r({critical_threshold:e}),this.triggerPreviewUpdate()},"%")}
          ${this.renderSliderField((0,a.kg)("editor.battery_monitor.low",h,"Low threshold"),(0,a.kg)("editor.battery_monitor.low_desc",h,"At or below this % uses low color (above critical)."),null!==(c=g.low_threshold)&&void 0!==c?c:25,25,0,100,1,e=>{r({low_threshold:e}),this.triggerPreviewUpdate()},"%")}
          ${this.renderSettingsSection("","",[{title:(0,a.kg)("editor.battery_monitor.only_low",h,"Show only below low threshold"),description:(0,a.kg)("editor.battery_monitor.only_low_desc",h,"Hide devices above the low threshold."),hass:t,data:{show_only_below_threshold:!!g.show_only_below_threshold},schema:[this.booleanField("show_only_below_threshold")],onChange:e=>{r({show_only_below_threshold:e.detail.value.show_only_below_threshold}),this.triggerPreviewUpdate()}}])}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_source",h,"Entity source")}
          </div>
          ${this.renderFieldSection((0,a.kg)("editor.battery_monitor.discovery_mode",h,"Discovery mode"),(0,a.kg)("editor.battery_monitor.discovery_mode_desc",h,"Auto scans Home Assistant; manual uses the list below; both merges them."),t,{discovery_mode:g.discovery_mode||"auto"},[this.selectField("discovery_mode",[{value:"auto",label:(0,a.kg)("editor.battery_monitor.mode_auto",h,"Auto")},{value:"manual",label:(0,a.kg)("editor.battery_monitor.mode_manual",h,"Manual")},{value:"both",label:(0,a.kg)("editor.battery_monitor.mode_both",h,"Both")}])],e=>{r({discovery_mode:e.detail.value.discovery_mode}),this.triggerPreviewUpdate()})}
          ${"manual"!==g.discovery_mode?this.renderSettingsSection("","",[{title:(0,a.kg)("editor.battery_monitor.include_bl_attr",h,"Include battery_level attribute"),description:(0,a.kg)("editor.battery_monitor.include_bl_attr_desc",h,"Vacuums, trackers, phones, etc."),hass:t,data:{include_battery_level_attribute:!1!==g.include_battery_level_attribute},schema:[this.booleanField("include_battery_level_attribute")],onChange:e=>{r({include_battery_level_attribute:e.detail.value.include_battery_level_attribute}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.include_bin",h,"Include binary_sensor battery"),description:(0,a.kg)("editor.battery_monitor.include_bin_desc",h,"Maps on=low / off=ok for device_class battery."),hass:t,data:{include_binary_sensors:!!g.include_binary_sensors},schema:[this.booleanField("include_binary_sensors")],onChange:e=>{r({include_binary_sensors:e.detail.value.include_binary_sensors}),this.triggerPreviewUpdate()}}]):o.s6}
          ${"manual"!==g.discovery_mode?this._renderPatternChips(g,r,h):o.s6}
          ${"manual"!==g.discovery_mode?this._renderHiddenChips(g,r,h):o.s6}

          ${"auto"!==g.discovery_mode?o.qy`
                <div style="margin-top: 16px; font-size: 14px; font-weight: 600; margin-bottom: 8px;">
                  ${(0,a.kg)("editor.battery_monitor.manual_entities",h,"Manual entities")}
                </div>
                <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 12px;">
                  ${(0,a.kg)("editor.battery_monitor.manual_entities_desc",h,"Pick entities to include. Expand a row for overrides.")}
                </div>
                ${(g.entities||[]).map((e,i)=>this._renderEntityRow(e,i,g,t,r,h))}
                <button
                  class="add-btn full-width"
                  @click=${()=>{const e=[...g.entities||[]],t={id:this.generateId("bm_ent"),entity:""};e.push(t),r({entities:e}),this._expandedEntities.add(t.id),this.triggerPreviewUpdate()}}
                >
                  <ha-icon icon="mdi:plus"></ha-icon>
                  ${(0,a.kg)("editor.battery_monitor.add_entity",h,"Add entity")}
                </button>
              `:o.s6}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_colors",h,"Colors")}
          </div>
          ${[["critical_color","editor.battery_monitor.color_critical","Critical","var(--error-color)"],["low_color","editor.battery_monitor.color_low","Low","var(--warning-color)"],["ok_color","editor.battery_monitor.color_ok","OK","var(--success-color)"],["charging_color","editor.battery_monitor.color_charging","Charging","var(--info-color)"],["text_color","editor.battery_monitor.color_text","Text","var(--primary-text-color)"],["secondary_text_color","editor.battery_monitor.color_secondary","Secondary text","var(--secondary-text-color)"],["card_background_color","editor.battery_monitor.color_card_bg","Card background","var(--card-background-color)"]].map(([e,i,n,s])=>o.qy`
              <div style="margin-bottom: 16px;">
                <ultra-color-picker
                  .label=${(0,a.kg)(i,h,n)}
                  .value=${g[e]||""}
                  .defaultValue=${s}
                  .hass=${t}
                  @value-changed=${t=>{r({[e]:t.detail.value}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            `)}
        </div>
      </div>
    `}_renderPatternChips(e,t,i){return o.qy`
      <div style="margin-top: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.exclude_patterns",i,"Exclude patterns")}
        </div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.exclude_patterns_desc",i,"Entity ids containing these substrings are ignored.")}
        </div>
        <div class="domain-chips">
          ${(e.exclude_patterns||[]).map(i=>o.qy`
              <span class="domain-chip exclude">
                ${i}
                <ha-icon
                  icon="mdi:close"
                  class="chip-remove"
                  @click=${()=>{t({exclude_patterns:(e.exclude_patterns||[]).filter(e=>e!==i)}),this.triggerPreviewUpdate()}}
                ></ha-icon>
              </span>
            `)}
        </div>
        <div class="domain-input-row">
          <input
            type="text"
            class="domain-input"
            placeholder=${(0,a.kg)("editor.battery_monitor.pattern_ph",i,"e.g. test, backup")}
            @keydown=${i=>{if("Enter"===i.key){const o=i.target,r=o.value.trim().toLowerCase();r&&!(e.exclude_patterns||[]).includes(r)&&(t({exclude_patterns:[...e.exclude_patterns||[],r]}),o.value="",this.triggerPreviewUpdate())}}}
          />
          <button
            class="add-btn"
            @click=${i=>{const o=i.target.closest(".domain-input-row"),r=null==o?void 0:o.querySelector("input"),n=null==r?void 0:r.value.trim().toLowerCase();n&&!(e.exclude_patterns||[]).includes(n)&&(t({exclude_patterns:[...e.exclude_patterns||[],n]}),r.value="",this.triggerPreviewUpdate())}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderHiddenChips(e,t,i){return o.qy`
      <div style="margin-top: 24px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.hidden_entities",i,"Hidden entities")}
        </div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.hidden_entities_desc",i,"Removed from auto-discovery; click × to show again.")}
        </div>
        <div class="domain-chips">
          ${(e.hidden_entities||[]).map(i=>o.qy`
              <span class="domain-chip">
                ${i}
                <ha-icon
                  icon="mdi:close"
                  class="chip-remove"
                  @click=${()=>{t({hidden_entities:(e.hidden_entities||[]).filter(e=>e!==i)}),this.triggerPreviewUpdate()}}
                ></ha-icon>
              </span>
            `)}
        </div>
      </div>
    `}_renderEntityRow(e,t,i,r,s,l){var d,c,g,h,p;const v=this._expandedEntities.has(e.id);return o.qy`
      <div class="entity-row">
        <div class="entity-info ${e.entity?"":"empty"}">
          ${e.entity||(0,a.kg)("editor.battery_monitor.no_entity",l,"No entity selected")}
        </div>
        <ha-icon
          icon="mdi:chevron-down"
          class="expand-icon ${v?"expanded":""}"
          @click=${()=>{this._expandedEntities.has(e.id)?this._expandedEntities.delete(e.id):this._expandedEntities.add(e.id),this.triggerPreviewUpdate()}}
        ></ha-icon>
        <ha-icon
          icon="mdi:delete"
          class="delete-icon"
          @click=${()=>{const o=[...i.entities||[]];o.splice(t,1),this._expandedEntities.delete(e.id),s({entities:o}),this.triggerPreviewUpdate()}}
        ></ha-icon>
      </div>
      ${v?o.qy`
            <div class="entity-settings">
              ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.entity",(null===(d=null==r?void 0:r.locale)||void 0===d?void 0:d.language)||"en","Entity"),(0,a.kg)("editor.battery_monitor.entity_desc",(null===(c=null==r?void 0:r.locale)||void 0===c?void 0:c.language)||"en","Battery or related sensor."),r,{entity:e.entity||""},[n.U.entity("entity")],e=>{const o=[...i.entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{entity:e.detail.value.entity}),s({entities:o}),this.triggerPreviewUpdate()})}
              ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.label_override",(null===(g=null==r?void 0:r.locale)||void 0===g?void 0:g.language)||"en","Label override"),"",r,{label:e.label||""},[n.U.text("label")],e=>{const o=[...i.entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{label:e.detail.value.label}),s({entities:o}),this.triggerPreviewUpdate()})}
              ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.icon_override",(null===(h=null==r?void 0:r.locale)||void 0===h?void 0:h.language)||"en","Icon override"),"",r,{icon:e.icon||""},[n.U.icon("icon")],e=>{const o=[...i.entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{icon:e.detail.value.icon}),s({entities:o}),this.triggerPreviewUpdate()})}
              <div style="margin-bottom: 16px;">
                <ultra-color-picker
                  .label=${(0,a.kg)("editor.battery_monitor.row_color",(null===(p=null==r?void 0:r.locale)||void 0===p?void 0:p.language)||"en","Row color override")}
                  .value=${e.color||""}
                  .defaultValue=${""}
                  .hass=${r}
                  @value-changed=${e=>{const o=[...i.entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{color:e.detail.value}),s({entities:o}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            </div>
          `:""}
    `}renderPreview(e,t,i,r){var n,s,l;const d=e,c=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",g=this.buildStyleString(this.buildDesignStyles(e,t)),h=this.getHoverEffectClass(e);if(!(null==t?void 0:t.states))return this.renderGradientErrorState((0,a.kg)("editor.battery_monitor.err_ha",c,"Waiting for Home Assistant"),(0,a.kg)("editor.battery_monitor.err_ha_desc",c,"Connecting to entity states…"),"mdi:loading");const p=this._collectReadings(d,t,!0);if(0===p.length)return this.renderGradientErrorState((0,a.kg)("editor.battery_monitor.err_empty",c,"No batteries found"),(0,a.kg)("editor.battery_monitor.err_empty_desc",c,"Adjust discovery mode, manual entities, or thresholds in the General tab."),"mdi:battery-off");const v=null!==(s=d.critical_threshold)&&void 0!==s?s:10,_=null!==(l=d.low_threshold)&&void 0!==l?l:25,u=d.critical_color||"var(--error-color)",m=d.low_color||"var(--warning-color)",y=d.ok_color||"var(--success-color)",b=d.charging_color||"var(--info-color)",x=d.text_color||"var(--primary-text-color)",w=d.secondary_text_color||"var(--secondary-text-color)",f=d.card_background_color||"var(--card-background-color)",$="live"===r,k="list"===d.style?this._renderList(d,p,t,i,{crit:v,low:_,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):"bars"===d.style?this._renderBars(d,p,t,i,{crit:v,low:_,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):"cards"===d.style?this._renderCards(d,p,t,i,{crit:v,low:_,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):"rings"===d.style?this._renderRings(d,p,t,i,{crit:v,low:_,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):this._renderStrip(d,p,t,i,{crit:v,low:_,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$});return o.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="bm-root ${h}" style="${g}">
        ${this.wrapWithAnimation(o.qy`
            ${!1!==d.show_title?o.qy`<div class="bm-title" style="color:${x};font-weight:700;margin-bottom:10px;">
                  ${d.title||(0,a.kg)("editor.battery_monitor.default_title",c,"Battery Monitor")}
                </div>`:o.s6}
            ${k}
          `,e,t)}
      </div>
    `}_palette(e,t,i,o,r,n,a,s,l){return i?e.charging_color||l:t<=o?e.critical_color||n:t<=r?e.low_color||a:e.ok_color||s}_renderRemove(e,t,i,r){if(!i)return o.qy``;const n=!!(e.entities||[]).some(e=>e.entity===t.entityId);return"auto"===e.discovery_mode&&n?o.qy``:"manual"!==e.discovery_mode||n?o.qy`
      <ha-icon
        class="uc-bm-remove"
        icon="mdi:close"
        title=${(0,a.kg)("editor.battery_monitor.preview_remove",r,"Remove from list")}
        @click=${i=>{if(i.preventDefault(),i.stopPropagation(),n)window.dispatchEvent(new CustomEvent(d,{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{entities:(e.entities||[]).filter(e=>e.entity!==t.entityId)}}}));else{const i=[...e.hidden_entities||[]];i.includes(t.entityId)||i.push(t.entityId),window.dispatchEvent(new CustomEvent(d,{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{hidden_entities:i}}}))}this.triggerPreviewUpdate(!0)}}
      ></ha-icon>
    `:o.qy``}_rowGestures(e,t,i,o,r){var n;return this.createGestureHandlers(`${e.id}-${t.entityId}-${r}`,{tap_action:(null===(n=e.tap_action)||void 0===n?void 0:n.action)?Object.assign(Object.assign({},e.tap_action),{entity:t.entityId}):{action:"more-info",entity:t.entityId},hold_action:e.hold_action,double_tap_action:e.double_tap_action,entity:t.entityId,module:e},i,o,[".uc-bm-remove"])}_renderList(e,t,i,r,n){const a=!1!==e.show_item_border?"border:1px solid var(--divider-color);":"";return o.qy`
      <div class="bm-list" style="display:flex;flex-direction:column;gap:8px;">
        ${t.map(t=>{var s,l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(s=t.manual)||void 0===s?void 0:s.color)||d,g=this._rowGestures(e,t,i,r,"list");return o.qy`
            <div
              style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:10px;background:${n.cardBg};${a}"
              @pointerdown=${g.onPointerDown}
              @pointermove=${g.onPointerMove}
              @pointerup=${g.onPointerUp}
              @pointerleave=${g.onPointerLeave}
              @pointercancel=${g.onPointerCancel}
            >
              <ha-icon
                icon=${(null===(l=t.manual)||void 0===l?void 0:l.icon)||t.icon}
                style="color:${c};--mdc-icon-size:28px;flex-shrink:0;"
              ></ha-icon>
              <div style="flex:1;min-width:0;">
                <div style="color:${n.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                  ${t.name}
                  ${!1!==e.show_charging_indicator&&t.charging?o.qy`<span style="color:${n.cChg};font-size:11px;margin-left:6px;">⚡</span>`:o.s6}
                </div>
                <div
                  style="height:6px;border-radius:4px;background:rgba(127,127,127,0.25);margin-top:6px;overflow:hidden;"
                >
                  <div
                    style="width:${Math.max(0,Math.min(100,t.value))}%;height:100%;background:${c};"
                  ></div>
                </div>
              </div>
              ${!1!==e.show_percentage_value?o.qy`<div style="color:${n.secondary};font-size:13px;font-weight:600;flex-shrink:0;">
                    ${Math.round(t.value)}%
                  </div>`:o.s6}
              ${this._renderRemove(e,t,n.showDel,n.lang)}
            </div>
          `})}
      </div>
    `}_renderBars(e,t,i,r,n){const a=!1!==e.show_item_border?"border:1px solid var(--divider-color);":"";return o.qy`
      <div style="display:flex;flex-direction:column;gap:14px;">
        ${t.map(t=>{var s,l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(s=t.manual)||void 0===s?void 0:s.color)||d,g=this._rowGestures(e,t,i,r,"bar");return o.qy`
            <div
              style="padding:10px;border-radius:10px;background:${n.cardBg};${a}"
              @pointerdown=${g.onPointerDown}
              @pointermove=${g.onPointerMove}
              @pointerup=${g.onPointerUp}
              @pointerleave=${g.onPointerLeave}
              @pointercancel=${g.onPointerCancel}
            >
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                <span style="color:${n.text};font-weight:600;font-size:14px;display:flex;align-items:center;gap:6px;">
                  <ha-icon icon=${(null===(l=t.manual)||void 0===l?void 0:l.icon)||t.icon} style="color:${c};--mdc-icon-size:22px;"></ha-icon>
                  ${t.name}
                  ${!1!==e.show_charging_indicator&&t.charging?o.qy`<span style="color:${n.cChg};">⚡</span>`:o.s6}
                </span>
                <span style="display:flex;align-items:center;gap:4px;">
                  ${!1!==e.show_percentage_value?o.qy`<span style="color:${n.secondary};font-weight:700;">${Math.round(t.value)}%</span>`:o.s6}
                  ${this._renderRemove(e,t,n.showDel,n.lang)}
                </span>
              </div>
              <div style="height:14px;border-radius:8px;background:rgba(127,127,127,0.25);overflow:hidden;">
                <div
                  style="width:${Math.max(0,Math.min(100,t.value))}%;height:100%;background:${c};"
                ></div>
              </div>
            </div>
          `})}
      </div>
    `}_renderCards(e,t,i,r,n){const a=!1!==e.show_item_border;return o.qy`
      <div class="bm-style-grid">
        ${t.map(t=>{var s,l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(s=t.manual)||void 0===s?void 0:s.color)||d,g=this._rowGestures(e,t,i,r,"card"),h=a?`border:1px solid ${c}55;`:"";return o.qy`
            <div
              style="position:relative;padding:14px;border-radius:12px;background:${c}22;${h}text-align:center;"
              @pointerdown=${g.onPointerDown}
              @pointermove=${g.onPointerMove}
              @pointerup=${g.onPointerUp}
              @pointerleave=${g.onPointerLeave}
              @pointercancel=${g.onPointerCancel}
            >
              <div style="position:absolute;top:6px;right:6px;">
                ${this._renderRemove(e,t,n.showDel,n.lang)}
              </div>
              <ha-icon
                icon=${(null===(l=t.manual)||void 0===l?void 0:l.icon)||t.icon}
                style="color:${c};--mdc-icon-size:36px;margin-bottom:8px;"
              ></ha-icon>
              ${!1!==e.show_percentage_value?o.qy`<div style="font-size:26px;font-weight:800;color:${n.text};">${Math.round(t.value)}%</div>`:o.s6}
              <div style="font-size:12px;color:${n.secondary};margin-top:6px;line-height:1.2;">
                ${t.name}
              </div>
              ${!1!==e.show_charging_indicator&&t.charging?o.qy`<div style="color:${n.cChg};font-size:11px;margin-top:4px;">⚡</div>`:o.s6}
            </div>
          `})}
      </div>
    `}_renderRings(e,t,i,r,n){const a=2*Math.PI*36,s=!1!==e.show_item_border?"border:1px solid var(--divider-color);":"";return o.qy`
      <div class="bm-style-grid">
        ${t.map(t=>{var l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(l=t.manual)||void 0===l?void 0:l.color)||d,g=Math.max(0,Math.min(100,t.value))/100*a,h=this._rowGestures(e,t,i,r,"ring");return o.qy`
            <div
              style="text-align:center;padding:10px;border-radius:12px;background:${n.cardBg};${s}position:relative;"
              @pointerdown=${h.onPointerDown}
              @pointermove=${h.onPointerMove}
              @pointerup=${h.onPointerUp}
              @pointerleave=${h.onPointerLeave}
              @pointercancel=${h.onPointerCancel}
            >
              <div style="position:absolute;top:4px;right:4px;">
                ${this._renderRemove(e,t,n.showDel,n.lang)}
              </div>
              <svg viewBox="0 0 ${100} ${100}" style="width:88px;height:88px;margin:0 auto;display:block;">
                <circle
                  cx="50"
                  cy="50"
                  r="${36}"
                  fill="none"
                  stroke="rgba(127,127,127,0.25)"
                  stroke-width="${8}"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="${36}"
                  fill="none"
                  stroke="${c}"
                  stroke-width="${8}"
                  stroke-dasharray="${g} ${a}"
                  stroke-linecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              ${!1!==e.show_percentage_value?o.qy`<div style="font-weight:800;font-size:15px;color:${n.text};margin-top:4px;">
                    ${Math.round(t.value)}%
                  </div>`:o.s6}
              <div style="font-size:11px;color:${n.secondary};margin-top:6px;line-height:1.2;min-height:2.4em;">
                ${t.name}
              </div>
              ${!1!==e.show_charging_indicator&&t.charging?o.qy`<div style="color:${n.cChg};font-size:10px;">⚡</div>`:o.s6}
            </div>
          `})}
      </div>
    `}_renderStrip(e,t,i,r,n){return o.qy`
      <div>
        <div class="bm-strip" style="margin-bottom:12px;">
          ${t.map(t=>{var a;const s=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),l=(null===(a=t.manual)||void 0===a?void 0:a.color)||s,d=this._rowGestures(e,t,i,r,"strip");return o.qy`
              <div
                class="bm-strip-seg"
                style="background:${l};"
                title="${t.name} — ${Math.round(t.value)}%"
                @pointerdown=${d.onPointerDown}
                @pointermove=${d.onPointerMove}
                @pointerup=${d.onPointerUp}
                @pointerleave=${d.onPointerLeave}
                @pointercancel=${d.onPointerCancel}
              >
                ${this._renderRemove(e,t,n.showDel,n.lang)}
              </div>
            `})}
        </div>
        <div style="font-size:12px;color:${n.secondary};">
          ${(0,a.kg)("editor.battery_monitor.strip_hint",n.lang,"Tap a segment for more-info. Colors reflect battery level.")}
        </div>
      </div>
    `}_makeReading(e,t,i,o,r,n){var a,s;const l=!!n&&this._isCharging(t,r,e);return{entityId:t,name:(null==o?void 0:o.label)||(null===(a=e.attributes)||void 0===a?void 0:a.friendly_name)||t,icon:(null==o?void 0:o.icon)||(null===(s=e.attributes)||void 0===s?void 0:s.icon)||"mdi:battery",value:i,charging:l,manual:o}}_isCharging(e,t,i){var o;const r=i.attributes;if(!0===(null==r?void 0:r.charging)||!0===(null==r?void 0:r.is_charging))return!0;const n=this._findChargingBinarySensor(e,t);return!!n&&"on"===(null===(o=t.states[n])||void 0===o?void 0:o.state)}_findChargingBinarySensor(e,t){var i,o;const r=e.split(".");if(r.length<2)return;const n=r[1],a=[`binary_sensor.${n}_charging`,`binary_sensor.${n}_battery_charging`];for(const e of a){const o=t.states[e];if(o&&("battery_charging"===(null===(i=o.attributes)||void 0===i?void 0:i.device_class)||e.includes("charging")))return e}for(const e of Object.keys(t.states)){if(!e.startsWith("binary_sensor."))continue;if("battery_charging"!==(null===(o=t.states[e].attributes)||void 0===o?void 0:o.device_class))continue;const i=e.split(".")[1]||"";if(i.includes(n)||n.includes(i.replace(/_battery_charging$/i,"")))return e}}_extractPct(e){var t;const i=e.state;if("unavailable"===i||"unknown"===i)return null;const o=parseFloat(String(i));if(!Number.isNaN(o))return Math.max(0,Math.min(100,o));const r=null===(t=e.attributes)||void 0===t?void 0:t.battery_level;if("number"==typeof r)return Math.max(0,Math.min(100,r));if("string"==typeof r){const e=parseFloat(r);if(!Number.isNaN(e))return Math.max(0,Math.min(100,e))}return null}_collectReadings(e,t,i){var o,r,n,a;const s=new Set((e.hidden_entities||[]).map(e=>e.trim()).filter(Boolean)),l=(e.exclude_patterns||[]).map(e=>e.toLowerCase()),d=e=>!s.has(e)&&!l.some(t=>e.toLowerCase().includes(t)),c=new Map,g=!1!==e.show_charging_indicator;if("manual"!==e.discovery_mode)for(const[i,n]of Object.entries(t.states)){if(!d(i))continue;const a=i.split(".")[0],s=null===(o=n.attributes)||void 0===o?void 0:o.device_class;if("sensor"===a&&"battery"===s){const e=this._extractPct(n);if(null===e)continue;c.set(i,this._makeReading(n,i,e,void 0,t,g))}else if(e.include_binary_sensors&&"binary_sensor"===a&&"battery"===s){const e="on"===n.state?0:100;c.set(i,this._makeReading(n,i,e,void 0,t,g))}else if(!1!==e.include_battery_level_attribute&&"number"==typeof(null===(r=n.attributes)||void 0===r?void 0:r.battery_level)){const e=Math.max(0,Math.min(100,n.attributes.battery_level));c.set(i,this._makeReading(n,i,e,void 0,t,g))}}if("auto"!==e.discovery_mode)for(const i of e.entities||[]){if(!i.entity)continue;const e=t.states[i.entity];if(!e||!d(i.entity))continue;const o=this._extractPct(e);null!==o&&c.set(i.entity,this._makeReading(e,i.entity,o,i,t,g))}let h=[...c.values()];const p=null!==(n=e.low_threshold)&&void 0!==n?n:25;e.critical_threshold,e.show_only_below_threshold&&(h=h.filter(e=>e.value<=p)),h=this._sortReadings(h,e.sort_direction||"lowest_first",t);const v=null!==(a=e.max_items)&&void 0!==a?a:25;return i&&(h=h.slice(0,v)),h}_sortReadings(e,t,i){const o=[...e];return"lowest_first"===t?o.sort((e,t)=>e.value-t.value):"highest_first"===t?o.sort((e,t)=>t.value-e.value):"name"===t&&o.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),o}}}}]);
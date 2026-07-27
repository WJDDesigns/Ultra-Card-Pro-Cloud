"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[4274],{5920(t,e,i){i.d(e,{UltraAutoEntityListModule:()=>p});var o=i(5183),r=i(8356),n=i(3721),a=i(766),s=i(5096),l=i(5147),d=i(8938),c=i(3633);i(7921),i(3917);const _="uc-module-patch-by-id";class p extends n.m{constructor(){super(...arguments),this.metadata={type:"auto_entity_list",title:"Auto Entities List",description:"Dynamically list entities using domain, device_class, state, and keyword filters",author:"WJD Designs",version:"1.0.0",icon:"mdi:format-list-bulleted-type",category:"data",tags:["auto","entities","list","filter","dynamic","domain"]},this._expandedEntities=new Set,this._pinnedEntityPickerKey=0,this._hiddenEntityPickerKey=0}entityShortName(t,e){var i,o;const r=null===(o=null===(i=t.states[e])||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.friendly_name;return"string"==typeof r&&r.trim()?r.trim():(e.split(".").pop()||e).replace(/_/g," ")}createDefault(t){return{id:t||this.generateId("auto_entity_list"),type:"auto_entity_list",include_domains:[],include_device_classes:[],include_areas:[],include_keywords:[],exclude_keywords:[],show_unavailable:!1,pinned_entities:[],hidden_entities:[],row_style:"compact",title:"Auto Entities List",show_title:!0,empty_state_text:"",empty_state_navigation_path:"",max_items:50,show_icon:!0,show_state:!0,show_last_changed:!1,use_entity_color:!1,row_gap:6,columns:1,sort_by:"name",sort_direction:"asc",card_height:0,card_width:0,text_color:"",secondary_text_color:"",card_background_color:"",accent_color:"",active_color:"",inactive_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(t){const e=super.validate(t);return{valid:0===e.errors.length,errors:e.errors}}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return d.X.render(t,e,t=>o(t))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n      .uc-ael-remove {\n        flex-shrink: 0;\n        cursor: pointer;\n        color: var(--error-color);\n        --mdc-icon-size: 18px;\n        padding: 4px;\n        margin-left: 4px;\n        opacity: 0.6;\n        transition: opacity 0.15s ease;\n      }\n      .uc-ael-row:hover .uc-ael-remove {\n        opacity: 1;\n      }\n    `}renderGeneralTab(t,e,i,r){var n;const a=t,s=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";return o.qy`
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
        .state-filter-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .uc-ael-editor-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 8px 0 12px 0;
        }
        .uc-ael-editor-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border-radius: 16px;
          font-size: 13px;
          max-width: 100%;
          position: relative;
          cursor: pointer;
          transition: opacity 0.15s ease, padding 0.15s ease, box-shadow 0.15s ease;
        }
        .uc-ael-editor-chip.is-active {
          box-shadow: 0 0 0 2px var(--card-background-color), 0 0 0 4px var(--primary-color);
        }
        .uc-ael-editor-chip--hidden {
          background: var(--error-color);
          cursor: default;
        }
        .uc-ael-editor-chip:hover {
          opacity: 0.95;
          padding-right: 30px;
        }
        .uc-ael-editor-chip .uc-ael-chip-remove {
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          position: absolute;
          right: 8px;
          transition: opacity 0.15s ease;
        }
        .uc-ael-editor-chip:hover .uc-ael-chip-remove {
          opacity: 1;
        }
        .uc-ael-editor-chip-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 220px;
          pointer-events: none;
        }
        .uc-ael-overrides {
          padding: 16px;
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          border-radius: 0 8px 8px 0;
          margin-bottom: 12px;
        }
        .uc-ael-overrides-header {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color);
          margin-bottom: 8px;
          opacity: 0.85;
        }
      </style>

      <div class="module-settings">
        ${this._renderStyleSection(a,e,r,s)}
        ${"card"===a.row_style?this._renderCardSizeSection(a,e,r,s):o.s6}
        ${this._renderDisplaySection(a,e,r,s)}
        ${this._renderFiltersSection(a,e,r,s)}
        ${this._renderEntitySourceSection(a,e,r,s)}
        ${this._renderColorsSection(a,e,r,s)}
      </div>
    `}_renderCardSizeSection(t,e,i,r){var n,a;return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_card_size",r,"Card Size")}
        </div>
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.card_height",r,"Card height"),(0,s.kg)("editor.auto_entity_list.card_height_desc",r,"Minimum row height. 0 = auto (fits content)."),null!==(n=t.card_height)&&void 0!==n?n:0,0,0,200,1,t=>{i({card_height:t}),this.triggerPreviewUpdate()},"px")}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.card_width",r,"Card width"),(0,s.kg)("editor.auto_entity_list.card_width_desc",r,"Maximum row width in pixels. 0 = fill container."),null!==(a=t.card_width)&&void 0!==a?a:0,0,0,1200,10,t=>{i({card_width:t}),this.triggerPreviewUpdate()},"px")}
      </div>
    `}_renderStyleSection(t,e,i,r){return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_style",r,"Row Style")}
        </div>
        <div class="style-switcher">
          ${[{k:"compact",icon:"mdi:format-list-bulleted",title:(0,s.kg)("editor.auto_entity_list.style_compact",r,"Compact"),desc:(0,s.kg)("editor.auto_entity_list.style_compact_desc",r,"Icon + name + state")},{k:"detailed",icon:"mdi:format-list-text",title:(0,s.kg)("editor.auto_entity_list.style_detailed",r,"Detailed"),desc:(0,s.kg)("editor.auto_entity_list.style_detailed_desc",r,"Two-line rows")},{k:"slim",icon:"mdi:format-align-justify",title:(0,s.kg)("editor.auto_entity_list.style_slim",r,"Slim"),desc:(0,s.kg)("editor.auto_entity_list.style_slim_desc",r,"Name only, dense")},{k:"card",icon:"mdi:card-text-outline",title:(0,s.kg)("editor.auto_entity_list.style_card",r,"Card"),desc:(0,s.kg)("editor.auto_entity_list.style_card_desc",r,"Pill rows with accent")}].map(e=>o.qy`
              <div
                class="style-btn ${t.row_style===e.k?"active":""}"
                @click=${()=>{i({row_style:e.k}),this.triggerPreviewUpdate()}}
              >
                <ha-icon icon=${e.icon}></ha-icon>
                <div class="st-title">${e.title}</div>
                <div class="st-desc">${e.desc}</div>
              </div>
            `)}
        </div>
      </div>
    `}_renderDisplaySection(t,e,i,r){var n,l,d;return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_display",r,"Display")}
        </div>
        ${a.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.title",r,"Title"),(0,s.kg)("editor.auto_entity_list.title_desc",r,"Header above the list."),e,{title:t.title||""},[a.U.text("title")],t=>{i({title:t.detail.value.title}),this.triggerPreviewUpdate()})}
        ${a.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.empty_state_text",r,"Empty list text"),(0,s.kg)("editor.auto_entity_list.empty_state_text_desc",r,"Custom message shown when no entities match the filters. Leave blank for the default hint."),e,{empty_state_text:t.empty_state_text||""},[a.U.text("empty_state_text")],t=>{i({empty_state_text:t.detail.value.empty_state_text}),this.triggerPreviewUpdate()})}
        ${(t.empty_state_text||"").trim()?o.qy`
              <div style="margin-bottom: 16px;">
                <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">
                  ${(0,s.kg)("editor.auto_entity_list.empty_state_link",r,"Empty list link (optional)")}
                </div>
                <div
                  style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;"
                >
                  ${(0,s.kg)("editor.auto_entity_list.empty_state_link_desc",r,"Tapping the empty-list message navigates to this dashboard view or URL.")}
                </div>
                <ultra-navigation-picker
                  .hass=${e}
                  .value=${t.empty_state_navigation_path||""}
                  label=""
                  @value-changed=${t=>{i({empty_state_navigation_path:t.detail.value}),this.triggerPreviewUpdate()}}
                ></ultra-navigation-picker>
              </div>
            `:o.s6}
        ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.auto_entity_list.show_title",r,"Show title"),description:(0,s.kg)("editor.auto_entity_list.show_title_desc",r,"Display header."),hass:e,data:{show_title:!1!==t.show_title},schema:[this.booleanField("show_title")],onChange:t=>{i({show_title:t.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.show_icon",r,"Show icon"),description:(0,s.kg)("editor.auto_entity_list.show_icon_desc",r,"Show each entity's icon."),hass:e,data:{show_icon:!1!==t.show_icon},schema:[this.booleanField("show_icon")],onChange:t=>{i({show_icon:t.detail.value.show_icon}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.show_state",r,"Show state"),description:(0,s.kg)("editor.auto_entity_list.show_state_desc",r,"Show current state value."),hass:e,data:{show_state:!1!==t.show_state},schema:[this.booleanField("show_state")],onChange:t=>{i({show_state:t.detail.value.show_state}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.show_last_changed",r,"Show last changed"),description:(0,s.kg)("editor.auto_entity_list.show_last_changed_desc",r,'Show "2m ago" style timestamp.'),hass:e,data:{show_last_changed:!!t.show_last_changed},schema:[this.booleanField("show_last_changed")],onChange:t=>{i({show_last_changed:t.detail.value.show_last_changed}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.use_entity_color",r,"Color state with entity color"),description:(0,s.kg)("editor.auto_entity_list.use_entity_color_desc",r,"When an entity exposes a color (light bulb RGB, etc.) use it for the state, icon, and card accent."),hass:e,data:{use_entity_color:!!t.use_entity_color},schema:[this.booleanField("use_entity_color")],onChange:t=>{i({use_entity_color:t.detail.value.use_entity_color}),this.triggerPreviewUpdate()}}])}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.max_items",r,"Max items"),(0,s.kg)("editor.auto_entity_list.max_items_desc",r,"Maximum entities to display."),null!==(n=t.max_items)&&void 0!==n?n:50,50,5,200,1,t=>{i({max_items:t}),this.triggerPreviewUpdate()},"")}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.row_gap",r,"Row spacing"),(0,s.kg)("editor.auto_entity_list.row_gap_desc",r,"Vertical gap between rows. Applies to every style."),null!==(l=t.row_gap)&&void 0!==l?l:6,6,0,32,1,t=>{i({row_gap:t}),this.triggerPreviewUpdate()},"px")}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.columns",r,"Columns"),(0,s.kg)("editor.auto_entity_list.columns_desc",r,"Arrange rows in a grid. 1 = single column (default)."),null!==(d=t.columns)&&void 0!==d?d:1,1,1,6,1,t=>{i({columns:t}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,s.kg)("editor.auto_entity_list.sort_by",r,"Sort by"),(0,s.kg)("editor.auto_entity_list.sort_by_desc",r,"Order of entities."),e,{sort_by:t.sort_by||"name"},[this.selectField("sort_by",[{value:"name",label:(0,s.kg)("editor.auto_entity_list.sort_name",r,"Name A–Z")},{value:"last_changed",label:(0,s.kg)("editor.auto_entity_list.sort_last_changed",r,"Last changed")},{value:"state",label:(0,s.kg)("editor.auto_entity_list.sort_state",r,"State (text)")},{value:"domain",label:(0,s.kg)("editor.auto_entity_list.sort_domain",r,"Domain")}])],t=>{i({sort_by:t.detail.value.sort_by}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,s.kg)("editor.auto_entity_list.sort_direction",r,"Sort direction"),"",e,{sort_direction:t.sort_direction||"asc"},[this.selectField("sort_direction",[{value:"asc",label:(0,s.kg)("editor.auto_entity_list.sort_asc",r,"Ascending")},{value:"desc",label:(0,s.kg)("editor.auto_entity_list.sort_desc_dir",r,"Descending")}])],t=>{i({sort_direction:t.detail.value.sort_direction}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderFiltersSection(t,e,i,r){var n;return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_filters",r,"Filters")}
        </div>
        ${this._renderChipInput(t,"include_domains",(0,s.kg)("editor.auto_entity_list.include_domains",r,"Domains"),(0,s.kg)("editor.auto_entity_list.include_domains_desc",r,"Only entities from these domains (e.g. light, binary_sensor). Empty = all."),(0,s.kg)("editor.auto_entity_list.include_domains_ph",r,"e.g. light, sensor"),!1,i)}
        ${this._renderChipInput(t,"include_device_classes",(0,s.kg)("editor.auto_entity_list.include_device_classes",r,"Device classes"),(0,s.kg)("editor.auto_entity_list.include_device_classes_desc",r,"Filter by attributes.device_class (e.g. motion, door, temperature)."),(0,s.kg)("editor.auto_entity_list.include_device_classes_ph",r,"e.g. motion, door"),!1,i)}

        <div style="margin-top: 16px;">
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.include_areas",r,"Areas")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.include_areas_desc",r,"Only entities assigned to these areas (directly or via their device). Empty = all areas.")}
          </div>
          ${this.renderFieldSection("","",e,{include_areas:t.include_areas||[]},[{name:"include_areas",selector:{area:{multiple:!0}}}],t=>{const e=t.detail.value.include_areas;i({include_areas:Array.isArray(e)?e:e?[e]:[]}),this.triggerPreviewUpdate()})}
        </div>

        <div style="margin-top: 16px;">
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.state_filter",r,"State condition (optional)")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.state_filter_desc",r,"Only show entities whose state matches. Leave operator empty to disable.")}
          </div>
          <div class="state-filter-row">
            ${this.renderFieldSection("","",e,{state_filter_operator:t.state_filter_operator||""},[this.selectField("state_filter_operator",[{value:"",label:"— None —"},{value:"equals",label:"= equals"},{value:"not_equals",label:"≠ not equals"},{value:"contains",label:"∋ contains"},{value:"greater_than",label:"> greater than"},{value:"less_than",label:"< less than"}])],t=>{const e=t.detail.value.state_filter_operator;i({state_filter_operator:e||void 0}),this.triggerPreviewUpdate()})}
            ${this.renderFieldSection("","",e,{state_filter_value:null!==(n=t.state_filter_value)&&void 0!==n?n:""},[a.U.text("state_filter_value")],t=>{i({state_filter_value:t.detail.value.state_filter_value}),this.triggerPreviewUpdate()})}
          </div>
        </div>

        ${this._renderChipInput(t,"include_keywords",(0,s.kg)("editor.auto_entity_list.include_keywords",r,"Include keywords"),(0,s.kg)("editor.auto_entity_list.include_keywords_desc",r,"Entity id must contain at least one of these substrings."),(0,s.kg)("editor.auto_entity_list.keyword_ph",r,"e.g. living, kitchen"),!1,i)}
        ${this._renderChipInput(t,"exclude_keywords",(0,s.kg)("editor.auto_entity_list.exclude_keywords",r,"Exclude keywords"),(0,s.kg)("editor.auto_entity_list.exclude_keywords_desc",r,"Entity ids containing any of these substrings are ignored."),(0,s.kg)("editor.auto_entity_list.keyword_ph",r,"e.g. test, backup"),!0,i)}

        <div style="margin-top: 16px;">
          ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.auto_entity_list.show_unavailable",r,"Show unavailable / unknown"),description:(0,s.kg)("editor.auto_entity_list.show_unavailable_desc",r,"When off, entities in unavailable or unknown states are hidden."),hass:e,data:{show_unavailable:!!t.show_unavailable},schema:[this.booleanField("show_unavailable")],onChange:t=>{i({show_unavailable:t.detail.value.show_unavailable}),this.triggerPreviewUpdate()}}])}
        </div>
      </div>
    `}_renderEntitySourceSection(t,e,i,n){const a=t.pinned_entities||[],l=t.hidden_entities||[];return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_source",n,"Entity source")}
        </div>

        <div style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;">
          ${(0,s.kg)("editor.auto_entity_list.pinned_entities",n,"Pinned entities")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,s.kg)("editor.auto_entity_list.pinned_entities_desc",n,"Always appear first, regardless of filters. Click a chip to edit overrides; hover to remove.")}
        </div>

        ${a.length?o.qy`
              <div class="uc-ael-editor-chips">
                ${a.map((t,r)=>{const l=this._expandedEntities.has(t.id),d=t.entity?t.label||this.entityShortName(e,t.entity):(0,s.kg)("editor.auto_entity_list.no_entity",n,"No entity selected");return o.qy`
                    <div
                      class="uc-ael-editor-chip ${l?"is-active":""}"
                      title=${t.entity||""}
                      @click=${e=>{e.target.closest(".uc-ael-chip-remove")||(this._expandedEntities.has(t.id)?this._expandedEntities.delete(t.id):this._expandedEntities.add(t.id),this.triggerPreviewUpdate())}}
                    >
                      <span class="uc-ael-editor-chip-label">${d}</span>
                      <ha-icon
                        class="uc-ael-chip-remove"
                        icon="mdi:close"
                        @click=${e=>{e.stopPropagation();const o=[...a];o.splice(r,1),this._expandedEntities.delete(t.id),i({pinned_entities:o}),this.triggerPreviewUpdate()}}
                      ></ha-icon>
                    </div>
                  `})}
              </div>
            `:o.s6}

        ${a.map((r,a)=>this._expandedEntities.has(r.id)?this._renderPinnedOverridePanel(r,a,t,e,i,n):o.s6)}

        ${(0,r.D)(this._pinnedEntityPickerKey,this.renderFieldSection((0,s.kg)("editor.auto_entity_list.pinned_add",n,"Add pinned entity"),"",e,{uc_ael_pin_entity:""},[{name:"uc_ael_pin_entity",selector:{entity:{}}}],t=>{var e,o;const r=String(null!==(o=null===(e=t.detail.value)||void 0===e?void 0:e.uc_ael_pin_entity)&&void 0!==o?o:"").trim();if(!r)return;if(a.some(t=>t.entity===r))return;this._pinnedEntityPickerKey+=1;const n={id:this.generateId("ael_pin"),entity:r};i({pinned_entities:[...a,n]}),this.triggerPreviewUpdate()}))}

        <div
          style="margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--divider-color);"
        >
          <div
            style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;"
          >
            ${(0,s.kg)("editor.auto_entity_list.hidden_entities",n,"Hidden entities")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.auto_entity_list.hidden_entities_desc",n,"Removed from the auto list. Remove with the × on a chip.")}
          </div>

          ${l.length?o.qy`
                <div class="uc-ael-editor-chips">
                  ${l.map(t=>o.qy`
                      <div
                        class="uc-ael-editor-chip uc-ael-editor-chip--hidden"
                        title=${t}
                      >
                        <span class="uc-ael-editor-chip-label"
                          >${this.entityShortName(e,t)}</span
                        >
                        <ha-icon
                          class="uc-ael-chip-remove"
                          icon="mdi:close"
                          @click=${()=>{i({hidden_entities:l.filter(e=>e!==t)}),this.triggerPreviewUpdate()}}
                        ></ha-icon>
                      </div>
                    `)}
                </div>
              `:o.s6}

          ${(0,r.D)(this._hiddenEntityPickerKey,this.renderFieldSection((0,s.kg)("editor.auto_entity_list.hidden_add",n,"Add hidden entity"),"",e,{uc_ael_hidden_entity:""},[{name:"uc_ael_hidden_entity",selector:{entity:{}}}],t=>{var e,o;const r=String(null!==(o=null===(e=t.detail.value)||void 0===e?void 0:e.uc_ael_hidden_entity)&&void 0!==o?o:"").trim();r&&(l.includes(r)||(this._hiddenEntityPickerKey+=1,i({hidden_entities:[...l,r]}),this.triggerPreviewUpdate()))}))}
        </div>
      </div>
    `}_renderColorsSection(t,e,i,r){return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_colors",r,"Colors")}
        </div>
        ${[["text_color","editor.auto_entity_list.color_text","Text","var(--primary-text-color)"],["secondary_text_color","editor.auto_entity_list.color_secondary","Secondary text","var(--secondary-text-color)"],["card_background_color","editor.auto_entity_list.color_card_bg","Card background","var(--card-background-color)"],["accent_color","editor.auto_entity_list.color_accent","Accent / Icon","var(--primary-color)"],["active_color","editor.auto_entity_list.color_active","Active state","var(--success-color)"],["inactive_color","editor.auto_entity_list.color_inactive","Inactive state","var(--secondary-text-color)"]].map(([n,a,l,d])=>o.qy`
            <div style="margin-bottom: 16px;">
              <ultra-color-picker
                .label=${(0,s.kg)(a,r,l)}
                .value=${t[n]||""}
                .defaultValue=${d}
                .hass=${e}
                @value-changed=${t=>{i({[n]:t.detail.value}),this.triggerPreviewUpdate()}}
              ></ultra-color-picker>
            </div>
          `)}
      </div>
    `}_renderChipInput(t,e,i,r,n,a,s){const l=t[e]||[];return o.qy`
      <div style="margin-top: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">${i}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${r}
        </div>
        <div class="domain-chips">
          ${l.map(t=>o.qy`
              <span class="domain-chip ${a?"exclude":""}">
                ${t}
                <ha-icon
                  icon="mdi:close"
                  class="chip-remove"
                  @click=${()=>{s({[e]:l.filter(e=>e!==t)}),this.triggerPreviewUpdate()}}
                ></ha-icon>
              </span>
            `)}
        </div>
        <div class="domain-input-row">
          <input
            type="text"
            class="domain-input"
            placeholder=${n}
            @keydown=${t=>{if("Enter"===t.key){const i=t.target,o=i.value.trim().toLowerCase();o&&!l.includes(o)&&(s({[e]:[...l,o]}),i.value="",this.triggerPreviewUpdate())}}}
          />
          <button
            class="add-btn"
            @click=${t=>{const i=t.target.closest(".domain-input-row"),o=null==i?void 0:i.querySelector("input"),r=null==o?void 0:o.value.trim().toLowerCase();r&&!l.includes(r)&&(s({[e]:[...l,r]}),o.value="",this.triggerPreviewUpdate())}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderPinnedOverridePanel(t,e,i,r,n,l){const d=t.entity?t.label||this.entityShortName(r,t.entity):(0,s.kg)("editor.auto_entity_list.no_entity",l,"No entity selected");return o.qy`
      <div class="uc-ael-overrides">
        <div class="uc-ael-overrides-header">
          ${(0,s.kg)("editor.auto_entity_list.overrides_for",l,"Overrides for")}
          ${d}
        </div>
        ${t.entity?o.s6:a.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.entity",l,"Entity"),(0,s.kg)("editor.auto_entity_list.entity_desc",l,"Entity to pin to the top."),r,{entity:t.entity||""},[a.U.entity("entity")],t=>{const o=[...i.pinned_entities||[]];o[e]=Object.assign(Object.assign({},o[e]),{entity:t.detail.value.entity}),n({pinned_entities:o}),this.triggerPreviewUpdate()})}
        ${a.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.label_override",l,"Label override"),"",r,{label:t.label||""},[a.U.text("label")],t=>{const o=[...i.pinned_entities||[]];o[e]=Object.assign(Object.assign({},o[e]),{label:t.detail.value.label}),n({pinned_entities:o}),this.triggerPreviewUpdate()})}
        ${a.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.icon_override",l,"Icon override"),"",r,{icon:t.icon||""},[a.U.icon("icon")],t=>{const o=[...i.pinned_entities||[]];o[e]=Object.assign(Object.assign({},o[e]),{icon:t.detail.value.icon}),n({pinned_entities:o}),this.triggerPreviewUpdate()})}
        <div style="margin-bottom: 16px;">
          <ultra-color-picker
            .label=${(0,s.kg)("editor.auto_entity_list.row_color",l,"Row color override")}
            .value=${t.color||""}
            .defaultValue=${""}
            .hass=${r}
            @value-changed=${t=>{const o=[...i.pinned_entities||[]];o[e]=Object.assign(Object.assign({},o[e]),{color:t.detail.value}),n({pinned_entities:o}),this.triggerPreviewUpdate()}}
          ></ultra-color-picker>
        </div>
      </div>
    `}renderPreview(t,e,i,r){var n,a,l,d,c;const _=t,p=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en",u=this.buildStyleString(this.buildDesignStyles(t,e)),h=this.getHoverEffectClass(t);if(!(null==e?void 0:e.states))return this.renderGradientErrorState((0,s.kg)("editor.auto_entity_list.err_ha",p,"Waiting for Home Assistant"),(0,s.kg)("editor.auto_entity_list.err_ha_desc",p,"Connecting to entity states…"),"mdi:loading");const v=this._collectEntities(_,e);if(0===v.length){const t=(_.empty_state_text||"").trim();return t?this._renderCustomEmptyState(_,e,i,t,u,h):this.renderGradientErrorState((0,s.kg)("editor.auto_entity_list.err_empty",p,"No entities match"),(0,s.kg)("editor.auto_entity_list.err_empty_desc",p,"Adjust the filters in the General tab or pin some entities."),"mdi:format-list-bulleted-type")}const y=_.text_color||"var(--primary-text-color)",g={text:y,secondary:_.secondary_text_color||"var(--secondary-text-color)",cardBg:_.card_background_color||"var(--card-background-color)",accent:_.accent_color||"var(--primary-color)",active:_.active_color||"var(--success-color)",inactive:_.inactive_color||"var(--secondary-text-color)",lang:p,showDel:"live"===r,useEntityColor:!!_.use_entity_color,cardHeight:null!==(a=_.card_height)&&void 0!==a?a:0,cardWidth:null!==(l=_.card_width)&&void 0!==l?l:0,rowGap:Math.max(0,null!==(d=_.row_gap)&&void 0!==d?d:6),columns:Math.max(1,Math.min(6,null!==(c=_.columns)&&void 0!==c?c:1))},m="detailed"===_.row_style?this._renderDetailed(_,v,e,i,g):"slim"===_.row_style?this._renderSlim(_,v,e,i,g):"card"===_.row_style?this._renderCard(_,v,e,i,g):this._renderCompact(_,v,e,i,g);return o.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="ael-root ${h}" style="${u}">
        ${this.wrapWithAnimation(o.qy`
            ${!1!==_.show_title?o.qy`<div
                  class="ael-title"
                  style="color:${y};font-weight:700;margin-bottom:10px;"
                >
                  ${_.title||(0,s.kg)("editor.auto_entity_list.default_title",p,"Auto Entities List")}
                </div>`:o.s6}
            ${m}
          `,t,e)}
      </div>
    `}_renderCustomEmptyState(t,e,i,r,n,a){var l;const d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en",_=t.text_color||"var(--primary-text-color)",p=t.secondary_text_color||"var(--secondary-text-color)",u=t.accent_color||"var(--primary-color)",h=(t.empty_state_navigation_path||"").trim(),v=!!h,y=o=>{h&&(o.stopPropagation(),/^https?:\/\//i.test(h)?window.open(h,"_blank","noopener"):c.g.handleAction({action:"navigate",navigation_path:h},e,o.currentTarget,i,void 0,t))};return o.qy`
      <div class="ael-root ${a}" style="${n}">
        ${!1!==t.show_title?o.qy`<div
              class="ael-title"
              style="color:${_};font-weight:700;margin-bottom:10px;"
            >
              ${t.title||(0,s.kg)("editor.auto_entity_list.default_title",d,"Auto Entities List")}
            </div>`:o.s6}
        <div
          style="padding:12px 8px;text-align:center;font-size:14px;line-height:1.5;color:${v?u:p};${v?"cursor:pointer;text-decoration:underline;text-underline-offset:3px;":""}"
          role=${v?"link":o.s6}
          tabindex=${v?"0":o.s6}
          @click=${v?y:null}
          @keydown=${v?t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),y(t))}:null}
        >
          ${r}
        </div>
      </div>
    `}_renderCompact(t,e,i,r,n){return o.qy`
      <div style="${this._wrapperStyle(n)}">
        ${e.map(e=>{const a=this._rowGestures(t,e,i,r,"compact"),s=this._stateColor(e,n);return o.qy`
            <div
              class="uc-ael-row"
              style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;background:${n.cardBg};border:1px solid var(--divider-color);"
              @pointerdown=${a.onPointerDown}
              @pointermove=${a.onPointerMove}
              @pointerup=${a.onPointerUp}
              @pointerleave=${a.onPointerLeave}
              @pointercancel=${a.onPointerCancel}
            >
              ${!1!==t.show_icon?o.qy`<ha-icon
                    icon=${e.icon}
                    style="color:${this._iconColor(e,n)};--mdc-icon-size:22px;flex-shrink:0;"
                  ></ha-icon>`:o.s6}
              <div
                style="flex:1;min-width:0;color:${n.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
              >
                ${e.name}
              </div>
              ${!1!==t.show_state?o.qy`<div
                    style="color:${s};font-size:13px;flex-shrink:0;max-width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                  >
                    ${e.state}
                  </div>`:o.s6}
              ${t.show_last_changed?o.qy`<div style="color:${n.secondary};font-size:11px;flex-shrink:0;">
                    ${this._relativeTime(e.lastChanged)}
                  </div>`:o.s6}
              ${this._renderRemove(t,e,n.showDel,n.lang)}
            </div>
          `})}
      </div>
    `}_renderDetailed(t,e,i,r,n){return o.qy`
      <div style="${this._wrapperStyle(n)}">
        ${e.map(e=>{const a=this._rowGestures(t,e,i,r,"detailed"),s=this._stateColor(e,n);return o.qy`
            <div
              class="uc-ael-row"
              style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:10px;background:${n.cardBg};border:1px solid var(--divider-color);"
              @pointerdown=${a.onPointerDown}
              @pointermove=${a.onPointerMove}
              @pointerup=${a.onPointerUp}
              @pointerleave=${a.onPointerLeave}
              @pointercancel=${a.onPointerCancel}
            >
              ${!1!==t.show_icon?o.qy`<ha-icon
                    icon=${e.icon}
                    style="color:${this._iconColor(e,n)};--mdc-icon-size:30px;flex-shrink:0;"
                  ></ha-icon>`:o.s6}
              <div style="flex:1;min-width:0;">
                <div
                  style="color:${n.text};font-weight:700;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                >
                  ${e.name}
                </div>
                <div
                  style="margin-top:2px;color:${n.secondary};font-size:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;"
                >
                  ${!1!==t.show_state?o.qy`<span style="color:${s};font-weight:600;">${e.state}</span>`:o.s6}
                  ${t.show_last_changed?o.qy`<span>· ${this._relativeTime(e.lastChanged)}</span>`:o.s6}
                  <span style="opacity:0.6;">· ${e.entityId}</span>
                </div>
              </div>
              ${this._renderRemove(t,e,n.showDel,n.lang)}
            </div>
          `})}
      </div>
    `}_renderSlim(t,e,i,r,n){const a=0===n.rowGap&&1===n.columns;return o.qy`
      <div style="${this._wrapperStyle(n)}">
        ${e.map((s,l)=>{const d=this._rowGestures(t,s,i,r,"slim"),c=this._stateColor(s,n),_=l===e.length-1;return o.qy`
            <div
              class="uc-ael-row"
              style="display:flex;align-items:center;gap:8px;padding:6px 8px;${a&&!_?"border-bottom:1px solid var(--divider-color);":""}"
              @pointerdown=${d.onPointerDown}
              @pointermove=${d.onPointerMove}
              @pointerup=${d.onPointerUp}
              @pointerleave=${d.onPointerLeave}
              @pointercancel=${d.onPointerCancel}
            >
              <div
                style="flex:1;min-width:0;color:${n.text};font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
              >
                ${s.name}
              </div>
              ${!1!==t.show_state?o.qy`<div style="color:${c};font-size:12px;flex-shrink:0;">
                    ${s.state}
                  </div>`:o.s6}
              ${this._renderRemove(t,s,n.showDel,n.lang)}
            </div>
          `})}
      </div>
    `}_renderCard(t,e,i,r,n){const a=1===n.columns&&n.cardWidth>0?"center":"stretch";return o.qy`
      <div style="${this._wrapperStyle(n,a)}">
        ${e.map(e=>{const a=this._rowGestures(t,e,i,r,"card"),s=this._stateColor(e,n),l=e.pinnedColor||s,d=(n.cardHeight>0?`min-height:${n.cardHeight}px;`:"")+(n.cardWidth>0?`width:100%;max-width:${n.cardWidth}px;`:"width:100%;");return o.qy`
            <div
              class="uc-ael-row"
              style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:24px;background:${n.cardBg};border-left:4px solid ${l};box-shadow:0 1px 2px rgba(0,0,0,0.05);box-sizing:border-box;${d}"
              @pointerdown=${a.onPointerDown}
              @pointermove=${a.onPointerMove}
              @pointerup=${a.onPointerUp}
              @pointerleave=${a.onPointerLeave}
              @pointercancel=${a.onPointerCancel}
            >
              ${!1!==t.show_icon?o.qy`<ha-icon
                    icon=${e.icon}
                    style="color:${l};--mdc-icon-size:24px;flex-shrink:0;"
                  ></ha-icon>`:o.s6}
              <div style="flex:1;min-width:0;">
                <div
                  style="color:${n.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                >
                  ${e.name}
                </div>
                ${t.show_last_changed?o.qy`<div style="color:${n.secondary};font-size:11px;margin-top:2px;">
                      ${this._relativeTime(e.lastChanged)}
                    </div>`:o.s6}
              </div>
              ${!1!==t.show_state?o.qy`<div
                    style="color:${s};font-weight:700;font-size:14px;flex-shrink:0;max-width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                  >
                    ${e.state}
                  </div>`:o.s6}
              ${this._renderRemove(t,e,n.showDel,n.lang)}
            </div>
          `})}
      </div>
    `}_wrapperStyle(t,e="stretch"){if(t.columns>1){const i="center"===e?"justify-items:center;":"";return`display:grid;grid-template-columns:repeat(${t.columns},minmax(0,1fr));gap:${t.rowGap}px;${i}`}return`display:flex;flex-direction:column;gap:${t.rowGap}px;align-items:${"center"===e?"center":"stretch"};`}_rowGestures(t,e,i,o,r){var n;return this.createGestureHandlers(`${t.id}-${e.entityId}-${r}`,{tap_action:(null===(n=t.tap_action)||void 0===n?void 0:n.action)?Object.assign(Object.assign({},t.tap_action),{entity:e.entityId}):{action:"more-info",entity:e.entityId},hold_action:t.hold_action,double_tap_action:t.double_tap_action,entity:e.entityId,module:t},i,o,[".uc-ael-remove"])}_renderRemove(t,e,i,r){return i?o.qy`
      <ha-icon
        class="uc-ael-remove"
        icon="mdi:close"
        title=${(0,s.kg)("editor.auto_entity_list.preview_remove",r,"Remove from list")}
        @click=${i=>{if(i.preventDefault(),i.stopPropagation(),e.pinned)window.dispatchEvent(new CustomEvent(_,{bubbles:!0,composed:!0,detail:{moduleId:t.id,updates:{pinned_entities:(t.pinned_entities||[]).filter(t=>t.entity!==e.entityId)}}}));else{const i=[...t.hidden_entities||[]];i.includes(e.entityId)||i.push(e.entityId),window.dispatchEvent(new CustomEvent(_,{bubbles:!0,composed:!0,detail:{moduleId:t.id,updates:{hidden_entities:i}}}))}this.triggerPreviewUpdate(!0)}}
      ></ha-icon>
    `:o.qy``}_stateColor(t,e){const i=t.state.toLowerCase();return i.startsWith("unavailable")||i.startsWith("unknown")?e.inactive:e.useEntityColor&&t.entityColor?t.entityColor:t.isActive?e.active:e.secondary}_iconColor(t,e){return t.pinnedColor?t.pinnedColor:e.useEntityColor&&t.entityColor?t.entityColor:e.accent}_makeRow(t,e,i){var o;const r=e.attributes||{},n=r.friendly_name||t,a=(null==i?void 0:i.icon)||r.icon||this._domainIcon(t.split(".")[0]||""),s=String(null!==(o=e.state)&&void 0!==o?o:""),l=e.last_changed?new Date(e.last_changed):new Date;return{entityId:t,name:(null==i?void 0:i.label)||n,icon:a,state:this._formatState(s,r),domain:t.split(".")[0]||"",deviceClass:String(r.device_class||""),lastChanged:l,isActive:this._isActiveState(s),pinned:!!i,pinnedColor:null==i?void 0:i.color,entityColor:this._extractEntityColor(e)}}_extractEntityColor(t){var e;const i=t.attributes||{},o=String(null!==(e=t.state)&&void 0!==e?e:"").toLowerCase();if("off"===o||"unavailable"===o||"unknown"===o||"idle"===o||"standby"===o||""===o)return;const r=i.rgb_color;if(Array.isArray(r)&&3===r.length){const[t,e,i]=r.map(t=>Math.max(0,Math.min(255,Math.round(Number(t)||0))));return`rgb(${t}, ${e}, ${i})`}const n=i.hs_color;if(Array.isArray(n)&&2===n.length)return`hsl(${Number(n[0])||0}, ${Number(n[1])||0}%, 50%)`;const a=i.color_name;if("string"==typeof a&&a.trim())return a.trim();const s=i.color;return"string"==typeof s&&s.trim()?s.trim():void 0}_formatState(t,e){const i=e.unit_of_measurement;return i&&t&&"unavailable"!==t&&"unknown"!==t?`${t} ${i}`:t}_isActiveState(t){const e=t.toLowerCase();return["on","open","opened","active","triggered","home","playing","unlocked","detected","heat","cool","heat_cool","auto","fan_only"].includes(e)}_matchesStateFilter(t,e,i){if(null==i)return!0;const o=String(i).trim();if(""===o)return!0;if("equals"===e)return t===o;if("not_equals"===e)return t!==o;if("contains"===e)return t.toLowerCase().includes(o.toLowerCase());if("greater_than"===e){const e=parseFloat(t),i=parseFloat(o);return!Number.isNaN(e)&&!Number.isNaN(i)&&e>i}if("less_than"===e){const e=parseFloat(t),i=parseFloat(o);return!Number.isNaN(e)&&!Number.isNaN(i)&&e<i}return!0}_domainIcon(t){return{light:"mdi:lightbulb",switch:"mdi:light-switch",binary_sensor:"mdi:radiobox-marked",sensor:"mdi:eye",climate:"mdi:thermostat",cover:"mdi:window-shutter",fan:"mdi:fan",lock:"mdi:lock",media_player:"mdi:cast",person:"mdi:account",device_tracker:"mdi:map-marker",automation:"mdi:robot",scene:"mdi:palette",script:"mdi:script-text",input_boolean:"mdi:toggle-switch",input_number:"mdi:ray-vertex",input_select:"mdi:form-dropdown",camera:"mdi:camera",vacuum:"mdi:robot-vacuum",alarm_control_panel:"mdi:shield-home",update:"mdi:package-up",timer:"mdi:timer",weather:"mdi:weather-partly-cloudy",sun:"mdi:white-balance-sunny"}[t]||"mdi:circle-outline"}_relativeTime(t){const e=Math.floor((Date.now()-t.getTime())/1e3);if(e<5)return"just now";if(e<60)return`${e}s ago`;const i=Math.floor(e/60);if(i<60)return`${i}m ago`;const o=Math.floor(i/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}_entityAreaId(t,e){var i,o,r;const n=t,a=null===(i=n.entities)||void 0===i?void 0:i[e];return(null==a?void 0:a.area_id)?a.area_id:(null==a?void 0:a.device_id)&&(null===(r=null===(o=n.devices)||void 0===o?void 0:o[a.device_id])||void 0===r?void 0:r.area_id)||void 0}_collectEntities(t,e){var i;const o=new Set((t.hidden_entities||[]).filter(Boolean)),r=new Set((t.pinned_entities||[]).map(t=>t.entity).filter(Boolean)),n=(t.include_domains||[]).map(t=>t.toLowerCase()),a=(t.include_device_classes||[]).map(t=>t.toLowerCase()),s=(t.include_areas||[]).filter(Boolean),l=(t.include_keywords||[]).map(t=>t.toLowerCase()),d=(t.exclude_keywords||[]).map(t=>t.toLowerCase()),c=(i,r)=>{var c,_;if(o.has(i))return!1;const p=i.toLowerCase(),u=i.split(".")[0]||"",h=String((null===(c=r.attributes)||void 0===c?void 0:c.device_class)||"").toLowerCase();if(n.length&&!n.includes(u))return!1;if(a.length&&!a.includes(h))return!1;if(s.length){const t=this._entityAreaId(e,i);if(!t||!s.includes(t))return!1}if(l.length&&!l.some(t=>p.includes(t)))return!1;if(d.length&&d.some(t=>p.includes(t)))return!1;if(!t.show_unavailable){const t=String(r.state||"").toLowerCase();if("unavailable"===t||"unknown"===t||""===t)return!1}return!(t.state_filter_operator&&void 0!==t.state_filter_value&&!this._matchesStateFilter(String(null!==(_=r.state)&&void 0!==_?_:""),t.state_filter_operator,t.state_filter_value))},_=[];for(const[t,i]of Object.entries(e.states))r.has(t)||c(t,i)&&_.push(this._makeRow(t,i,void 0));return[...(t.pinned_entities||[]).filter(t=>t.entity&&e.states[t.entity]).map(t=>this._makeRow(t.entity,e.states[t.entity],t)),...this._sort(_,t.sort_by||"name",t.sort_direction||"asc")].slice(0,null!==(i=t.max_items)&&void 0!==i?i:50)}_sort(t,e,i){const o=[...t],r="desc"===i?-1:1;return o.sort((t,i)=>{let o=0;return o="last_changed"===e?t.lastChanged.getTime()-i.lastChanged.getTime():"state"===e?t.state.localeCompare(i.state,void 0,{sensitivity:"base"}):"domain"===e&&t.domain.localeCompare(i.domain)||t.name.localeCompare(i.name,void 0,{sensitivity:"base"}),o*r}),o}}}}]);
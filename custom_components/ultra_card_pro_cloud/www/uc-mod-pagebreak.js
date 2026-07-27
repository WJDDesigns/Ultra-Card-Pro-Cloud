"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[9260],{7374(e,a,n){n.d(a,{UltraPageBreakModule:()=>o});var r=n(5183),t=n(3721),i=n(5096);class o extends t.m{constructor(){super(...arguments),this.metadata={type:"pagebreak",title:"Page Break",description:"Separates slider content into pages",author:"WJD Designs",version:"1.0.0",icon:"mdi:format-page-break",category:"layout",tags:["slider","page","break","separator","divider"]}}createDefault(e,a){return{id:e||this.generateId("pagebreak"),type:"pagebreak",display_mode:"always",display_conditions:[]}}renderGeneralTab(e,a,n,t){var o;const s=(null===(o=null==a?void 0:a.locale)||void 0===o?void 0:o.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Info Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <ha-icon
              icon="mdi:information"
              style="color: var(--info-color); margin-top: 2px; flex-shrink: 0; font-size: 24px;"
            ></ha-icon>
            <div style="font-size: 14px; line-height: 1.5; color: var(--primary-text-color);">
              <strong
                >${(0,i.kg)("editor.pagebreak.info_title",s,"How Page Breaks Work:")}</strong
              ><br />
              ${(0,i.kg)("editor.pagebreak.info_text",s,"Page breaks appear as a slim divider in the editor and are invisible on the dashboard. When used inside a Slider Layout, they separate content into different slides. All modules before a page break belong to one page, and modules after it belong to the next page.")}
            </div>
          </div>
        </div>
      </div>
    `}renderPreview(e,a,n,t){var o;if("live"!==t&&"ha-preview"!==t)return r.qy``;const s=(null===(o=null==a?void 0:a.locale)||void 0===o?void 0:o.language)||"en";return r.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="pagebreak-module-container">
        <ha-icon icon="mdi:format-page-break"></ha-icon>
        <span>${(0,i.kg)("editor.pagebreak.preview_label",s,"Page Break")}</span>
      </div>
    `}validate(e){return super.validate(e)}getStyles(){return"\n      .pagebreak-module-container {\n        user-select: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        padding: 2px 0;\n        color: var(--secondary-text-color);\n        font-size: 11px;\n        font-weight: 500;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n        white-space: nowrap;\n      }\n\n      .pagebreak-module-container::before,\n      .pagebreak-module-container::after {\n        content: '';\n        flex: 1;\n        border-top: 1px dashed var(--divider-color);\n      }\n\n      .pagebreak-module-container ha-icon {\n        --mdc-icon-size: 14px;\n        flex-shrink: 0;\n      }\n    "}}}}]);
"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[115],{1716(t,e,i){i.d(e,{UltraTextModule:()=>F});var o,n=i(5183),r=i(3721),a=i(9957),s=i(766),l=i(5147),c=i(8938),d=i(5320),p=i(6477),h=i(5096),u=i(9327),g=i(5121),_=i(5155),m=i(1338),b=i(1172),x=(i(7921),i(9442),i(4276)),f=i(2781),v=i(8841),y=i(7594),k=i(7417),w=i(8631),$=i(7846),C=i(4341),S=i(334),T=i(1001),A=function(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let z=o=class extends n.WF{constructor(){super(...arguments),this.content="",this.placeholder="Start typing...",this.disabled=!1,this.editorStyles={},this._editor=null,this._isBold=!1,this._isItalic=!1,this._isUnderline=!1,this._isStrike=!1,this._textAlign="left",this._isLink=!1,this._showLinkInput=!1,this._linkUrl="",this._showColorPicker=!1,this._showHighlightPicker=!1,this._currentColor="",this._currentHighlight="",this._isUpdating=!1,this._debounceTimer=null}static get styles(){return n.AH`
      :host {
        display: block;
        width: 100%;
      }

      .wysiwyg-container {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background: var(--card-background-color, #fff);
      }

      .wysiwyg-container:focus-within {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 1px var(--primary-color);
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
        padding: 6px 8px;
        background: var(--secondary-background-color);
        border-bottom: 1px solid var(--divider-color);
        align-items: center;
      }

      .toolbar-group {
        display: flex;
        gap: 2px;
        align-items: center;
      }

      .toolbar-group + .toolbar-group {
        margin-left: 4px;
        padding-left: 6px;
        border-left: 1px solid var(--divider-color);
      }

      .toolbar-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color);
        cursor: pointer;
        padding: 0;
        transition: background 0.15s ease;
      }

      .toolbar-btn:hover {
        background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.12);
      }

      .toolbar-btn.active {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .toolbar-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .toolbar-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      .color-btn {
        position: relative;
      }

      .color-indicator {
        width: 14px;
        height: 3px;
        border-radius: 1px;
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
      }

      .color-picker-popup {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: ${T.Mu.AUTOCOMPLETE};
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        display: grid;
        grid-template-columns: repeat(6, 28px);
        gap: 4px;
      }

      .color-swatch {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: transform 0.1s ease, border-color 0.1s ease;
      }

      .color-swatch:hover {
        transform: scale(1.15);
        border-color: var(--primary-color);
      }

      .color-swatch.active {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--primary-color);
      }

      .color-swatch.clear-color {
        background: linear-gradient(
          135deg,
          #fff 45%,
          #ff0000 45%,
          #ff0000 55%,
          #fff 55%
        );
        border: 1px solid var(--divider-color);
      }

      .link-input-popup {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: ${T.Mu.AUTOCOMPLETE};
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        display: flex;
        gap: 6px;
        align-items: center;
        min-width: 280px;
      }

      .link-input-popup input {
        flex: 1;
        padding: 6px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 13px;
        outline: none;
      }

      .link-input-popup input:focus {
        border-color: var(--primary-color);
      }

      .link-input-popup button {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
      }

      .link-input-popup .remove-link-btn {
        background: var(--error-color, #db4437);
      }

      .editor-content {
        padding: 12px 16px;
        min-height: 80px;
        max-height: 300px;
        overflow-y: auto;
        outline: none;
        font-family: var(--primary-font-family, 'Roboto', sans-serif);
        font-size: 16px;
        line-height: 1.6;
        color: var(--primary-text-color);
      }

      .editor-content .ProseMirror {
        outline: none;
        min-height: 60px;
      }

      .editor-content .ProseMirror p {
        margin: 0 0 0.5em 0;
      }

      .editor-content .ProseMirror p:last-child {
        margin-bottom: 0;
      }

      .editor-content .ProseMirror p.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        float: left;
        color: var(--secondary-text-color);
        opacity: 0.5;
        pointer-events: none;
        height: 0;
      }

      .editor-content .ProseMirror a {
        color: var(--primary-color);
        text-decoration: underline;
      }

      .editor-content .ProseMirror mark {
        border-radius: 2px;
        padding: 0 2px;
      }

      .popup-wrapper {
        position: relative;
        display: inline-flex;
      }

      .popup-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${T.Mu.AUTOCOMPLETE-1};
      }
    `}firstUpdated(t){super.firstUpdated(t),this._initEditor()}updated(t){if(super.updated(t),!this._isUpdating&&t.has("content")&&this._editor){const t=this._editor.getHTML(),e="<p></p>"===t&&!this.content;t===this.content||e||this._editor.isFocused||(this._isUpdating=!0,this._editor.commands.setContent(this.content||"",{emitUpdate:!1}),this._isUpdating=!1)}}disconnectedCallback(){super.disconnectedCallback(),this._destroyEditor()}_initEditor(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".editor-content");e&&(this._editor=new f.KE({element:e,extensions:[v.A.configure({heading:!1,codeBlock:!1,blockquote:!1,bulletList:!1,orderedList:!1,listItem:!1,horizontalRule:!1,code:!1}),y.A,k.xJ,w.A,$.Ay.configure({multicolor:!0}),C.A.configure({types:["paragraph"]}),S.Ay.configure({openOnClick:!1,HTMLAttributes:{rel:"noopener noreferrer nofollow",target:"_blank"}})],content:this.content||"",editable:!this.disabled,onUpdate:({editor:t})=>{this._isUpdating||(this._updateToolbarState(t),this._emitContentDebounced(t.getHTML()))},onSelectionUpdate:({editor:t})=>{this._updateToolbarState(t)},onFocus:()=>{this._updateToolbarState(this._editor)},editorProps:{attributes:{"data-placeholder":this.placeholder}}}),this._updateToolbarState(this._editor))}_destroyEditor(){this._debounceTimer&&clearTimeout(this._debounceTimer),this._editor&&(this._editor.destroy(),this._editor=null)}_updateToolbarState(t){this._isBold=t.isActive("bold"),this._isItalic=t.isActive("italic"),this._isUnderline=t.isActive("underline"),this._isStrike=t.isActive("strike"),this._isLink=t.isActive("link"),this._currentColor=t.getAttributes("textStyle").color||"",this._currentHighlight=t.getAttributes("highlight").color||"",t.isActive({textAlign:"center"})?this._textAlign="center":t.isActive({textAlign:"right"})?this._textAlign="right":t.isActive({textAlign:"justify"})?this._textAlign="justify":this._textAlign="left"}_emitContentDebounced(t){this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const e="<p></p>"===t;this.dispatchEvent(new CustomEvent("content-changed",{detail:{value:e?"":t},bubbles:!0,composed:!0}))},150)}_toggleBold(){var t;null===(t=this._editor)||void 0===t||t.chain().focus().toggleBold().run()}_toggleItalic(){var t;null===(t=this._editor)||void 0===t||t.chain().focus().toggleItalic().run()}_toggleUnderline(){var t;null===(t=this._editor)||void 0===t||t.chain().focus().toggleUnderline().run()}_toggleStrike(){var t;null===(t=this._editor)||void 0===t||t.chain().focus().toggleStrike().run()}_setAlign(t){var e;null===(e=this._editor)||void 0===e||e.chain().focus().setTextAlign(t).run()}_setColor(t){var e,i;t?null===(e=this._editor)||void 0===e||e.chain().focus().setColor(t).run():null===(i=this._editor)||void 0===i||i.chain().focus().unsetColor().run(),this._showColorPicker=!1}_setHighlight(t){var e,i;t?null===(e=this._editor)||void 0===e||e.chain().focus().setHighlight({color:t}).run():null===(i=this._editor)||void 0===i||i.chain().focus().unsetHighlight().run(),this._showHighlightPicker=!1}_toggleLinkInput(){var t;this._isLink?(null===(t=this._editor)||void 0===t||t.chain().focus().unsetLink().run(),this._showLinkInput=!1):(this._linkUrl="",this._showLinkInput=!this._showLinkInput)}_applyLink(){var t;if(!this._linkUrl)return;let e=this._linkUrl.trim();!e||e.startsWith("http")||e.startsWith("/")||e.startsWith("#")||(e=`https://${e}`),null===(t=this._editor)||void 0===t||t.chain().focus().setLink({href:e}).run(),this._showLinkInput=!1,this._linkUrl=""}_clearFormatting(){var t;null===(t=this._editor)||void 0===t||t.chain().focus().clearNodes().unsetAllMarks().run()}_renderColorPalette(t,e,i){return n.qy`
      <div class="color-picker-popup" @mousedown=${t=>t.preventDefault()}>
        <div
          class="color-swatch clear-color ${e?"":"active"}"
          @click=${()=>i("")}
          title="Remove color"
        ></div>
        ${t.map(t=>n.qy`
            <div
              class="color-swatch ${e===t?"active":""}"
              style="background: ${t}"
              @click=${()=>i(t)}
              title="${t}"
            ></div>
          `)}
      </div>
    `}_computeEditorStyle(){return Object.entries(this.editorStyles).filter(([,t])=>t&&"inherit"!==t&&"none"!==t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")}_handleKeyDown(t){t.stopPropagation(),t.stopImmediatePropagation()}_handleKeyPress(t){t.stopPropagation(),t.stopImmediatePropagation()}render(){return n.qy`
      <div
        class="wysiwyg-container"
        @keydown=${this._handleKeyDown}
        @keypress=${this._handleKeyPress}
        @mousedown=${t=>t.stopPropagation()}
        @dragstart=${t=>t.stopPropagation()}
      >
        <div class="toolbar">
          <!-- Text formatting -->
          <div class="toolbar-group">
            <button
              class="toolbar-btn ${this._isBold?"active":""}"
              @click=${this._toggleBold}
              title="Bold"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-bold"></ha-icon>
            </button>
            <button
              class="toolbar-btn ${this._isItalic?"active":""}"
              @click=${this._toggleItalic}
              title="Italic"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-italic"></ha-icon>
            </button>
            <button
              class="toolbar-btn ${this._isUnderline?"active":""}"
              @click=${this._toggleUnderline}
              title="Underline"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-underline"></ha-icon>
            </button>
            <button
              class="toolbar-btn ${this._isStrike?"active":""}"
              @click=${this._toggleStrike}
              title="Strikethrough"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-strikethrough"></ha-icon>
            </button>
          </div>

          <!-- Colors -->
          <div class="toolbar-group">
            <div class="popup-wrapper">
              <button
                class="toolbar-btn color-btn"
                @click=${()=>{this._showColorPicker=!this._showColorPicker,this._showHighlightPicker=!1,this._showLinkInput=!1}}
                title="Text color"
                ?disabled=${this.disabled}
              >
                <ha-icon icon="mdi:format-color-text"></ha-icon>
                <span
                  class="color-indicator"
                  style="background: ${this._currentColor||"var(--primary-text-color)"}"
                ></span>
              </button>
              ${this._showColorPicker?n.qy`
                    <div class="popup-backdrop" @click=${()=>this._showColorPicker=!1}></div>
                    ${this._renderColorPalette(o.COLORS,this._currentColor,t=>this._setColor(t))}
                  `:""}
            </div>
            <div class="popup-wrapper">
              <button
                class="toolbar-btn color-btn"
                @click=${()=>{this._showHighlightPicker=!this._showHighlightPicker,this._showColorPicker=!1,this._showLinkInput=!1}}
                title="Highlight color"
                ?disabled=${this.disabled}
              >
                <ha-icon icon="mdi:format-color-highlight"></ha-icon>
                <span
                  class="color-indicator"
                  style="background: ${this._currentHighlight||"transparent"}"
                ></span>
              </button>
              ${this._showHighlightPicker?n.qy`
                    <div class="popup-backdrop" @click=${()=>this._showHighlightPicker=!1}></div>
                    ${this._renderColorPalette(o.COLORS,this._currentHighlight,t=>this._setHighlight(t))}
                  `:""}
            </div>
          </div>

          <!-- Alignment -->
          <div class="toolbar-group">
            <button
              class="toolbar-btn ${"left"===this._textAlign?"active":""}"
              @click=${()=>this._setAlign("left")}
              title="Align left"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-align-left"></ha-icon>
            </button>
            <button
              class="toolbar-btn ${"center"===this._textAlign?"active":""}"
              @click=${()=>this._setAlign("center")}
              title="Align center"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-align-center"></ha-icon>
            </button>
            <button
              class="toolbar-btn ${"right"===this._textAlign?"active":""}"
              @click=${()=>this._setAlign("right")}
              title="Align right"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-align-right"></ha-icon>
            </button>
            <button
              class="toolbar-btn ${"justify"===this._textAlign?"active":""}"
              @click=${()=>this._setAlign("justify")}
              title="Justify"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-align-justify"></ha-icon>
            </button>
          </div>

          <!-- Link -->
          <div class="toolbar-group">
            <div class="popup-wrapper">
              <button
                class="toolbar-btn ${this._isLink?"active":""}"
                @click=${this._toggleLinkInput}
                title="Link"
                ?disabled=${this.disabled}
              >
                <ha-icon icon="mdi:link-variant"></ha-icon>
              </button>
              ${this._showLinkInput?n.qy`
                    <div class="popup-backdrop" @click=${()=>this._showLinkInput=!1}></div>
                    <div class="link-input-popup" @mousedown=${t=>t.preventDefault()}>
                      <input
                        type="text"
                        placeholder="https://example.com"
                        .value=${this._linkUrl}
                        @input=${t=>this._linkUrl=t.target.value}
                        @keydown=${t=>{t.stopPropagation(),"Enter"===t.key&&this._applyLink(),"Escape"===t.key&&(this._showLinkInput=!1)}}
                      />
                      <button @click=${this._applyLink}>Apply</button>
                    </div>
                  `:""}
            </div>
          </div>

          <!-- Clear formatting -->
          <div class="toolbar-group">
            <button
              class="toolbar-btn"
              @click=${this._clearFormatting}
              title="Clear formatting"
              ?disabled=${this.disabled}
            >
              <ha-icon icon="mdi:format-clear"></ha-icon>
            </button>
          </div>
        </div>

        <div class="editor-content" style=${this._computeEditorStyle()}></div>
      </div>
    `}};z.COLORS=["#000000","#434343","#666666","#999999","#B7B7B7","#CCCCCC","#D9D9D9","#EFEFEF","#F3F3F3","#FFFFFF","#980000","#FF0000","#FF9900","#FFFF00","#00FF00","#00FFFF","#4A86E8","#0000FF","#9900FF","#FF00FF","#E6B8AF","#F4CCCC","#FCE5CD","#FFF2CC","#D9EAD3","#D0E0E3","#C9DAF8","#CFE2F3","#D9D2E9","#EAD1DC"],A([(0,x.MZ)({type:String})],z.prototype,"content",void 0),A([(0,x.MZ)({type:String})],z.prototype,"placeholder",void 0),A([(0,x.MZ)({type:Boolean})],z.prototype,"disabled",void 0),A([(0,x.MZ)({attribute:!1})],z.prototype,"editorStyles",void 0),A([(0,x.wk)()],z.prototype,"_editor",void 0),A([(0,x.wk)()],z.prototype,"_isBold",void 0),A([(0,x.wk)()],z.prototype,"_isItalic",void 0),A([(0,x.wk)()],z.prototype,"_isUnderline",void 0),A([(0,x.wk)()],z.prototype,"_isStrike",void 0),A([(0,x.wk)()],z.prototype,"_textAlign",void 0),A([(0,x.wk)()],z.prototype,"_isLink",void 0),A([(0,x.wk)()],z.prototype,"_showLinkInput",void 0),A([(0,x.wk)()],z.prototype,"_linkUrl",void 0),A([(0,x.wk)()],z.prototype,"_showColorPicker",void 0),A([(0,x.wk)()],z.prototype,"_showHighlightPicker",void 0),A([(0,x.wk)()],z.prototype,"_currentColor",void 0),A([(0,x.wk)()],z.prototype,"_currentHighlight",void 0),z=o=A([(0,x.EM)("ultra-wysiwyg-editor")],z);class F extends r.m{constructor(){super(...arguments),this.metadata={type:"text",title:"Text",description:"Display custom text content",author:"WJD Designs",version:"1.0.0",icon:"mdi:format-text",category:"content",tags:["text","content","typography","template"]},this.clickTimeout=null,this._templateInputDebounce=null,this._lastTemplateText=new Map,this._lastTemplateColor=new Map,this._lastTemplateContainerBg=new Map,this._lastTemplateIconColor=new Map,this._lastTemplateIcon=new Map,this.holdTimeout=null,this.isHolding=!1}createDefault(t,e){return{id:t||this.generateId("text"),type:"text",text:"Sample Text",link:"",hide_if_no_link:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},icon:"",icon_color:"",icon_position:"before",unified_template_mode:!1,unified_template:"",rich_text_content:"",enable_hover_effect:!0,hover_background_color:"var(--divider-color)",text_size:16,design:{},display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,o){var r,a,l;const c=t,d=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en";return n.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Module-Wide Size Controls -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            SIZE CONTROLS
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            Control the default sizes for this module. Design tab overrides these settings.
          </div>
          
        <!-- Text Size Control -->
          ${this.renderSliderField((0,h.kg)("editor.text.text_size",d,"Text Size"),"Default size for text content",null!==(a=c.text_size)&&void 0!==a?a:16,16,10,48,1,t=>{o({text_size:t})},"px")}

          <!-- Icon Size Control (only shown when icon is configured) -->
          ${c.icon&&""!==c.icon.trim()?this.renderSliderField((0,h.kg)("editor.text.icon_size",d,"Icon Size"),"Size of the icon",null!==(l=c.icon_size)&&void 0!==l?l:24,24,12,64,1,t=>{o({icon_size:t})},"px"):""}
        </div>

        <!-- Content Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,h.kg)("editor.text.content_section.title",d,"Content Configuration")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,h.kg)("editor.text.rich_text_content_section.desc",d,"Use the toolbar to format your text with bold, italic, colors, links and more.")}
          </div>

          ${c.unified_template_mode?n.qy`
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: var(--divider-color); border-radius: 8px;"
                >
                  ${(0,h.kg)("editor.text.unified_replaces_content",d,"Rich text is hidden while Unified Template Mode is on. Turn it off to edit static content, or use the unified template JSON for dynamic text.")}
                </div>
              `:(()=>{const t=c.design||{},e=c,i={},r=t.font_weight||e.font_weight;r&&(i.fontWeight=r);const a=t.font_style||e.font_style;a&&"inherit"!==a&&(i.fontStyle=a);const s=t.text_transform||e.text_transform;s&&"none"!==s&&(i.textTransform=s);const l=t.text_decoration||e.text_decoration;l&&"none"!==l&&(i.textDecoration=l);const d=t.font_family||e.font_family;d&&"inherit"!==d&&(i.fontFamily=d);const p=t.line_height||e.line_height;p&&"inherit"!==p&&(i.lineHeight=p);const h=t.letter_spacing||e.letter_spacing;h&&"inherit"!==h&&(i.letterSpacing=h);const u=t.color||c.color;u&&"inherit"!==u&&(i.color=u);const g=t.font_size&&"string"==typeof t.font_size&&""!==t.font_size.trim()?/[a-zA-Z%]/.test(t.font_size)?t.font_size:`${t.font_size}px`:void 0!==e.font_size?`${e.font_size}px`:void 0!==c.text_size?`${c.text_size}px`:void 0;return g&&(i.fontSize=g),n.qy`
                <div
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-wysiwyg-editor")||e.closest(".ProseMirror")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                >
                  <ultra-wysiwyg-editor
                    .content=${this._getEffectiveRichContent(c)}
                    .placeholder=${"Start typing..."}
                    .editorStyles=${i}
                    @content-changed=${t=>{o({rich_text_content:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-wysiwyg-editor>
                </div>
                `})()}
        </div>

        <!-- Icon Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,h.kg)("editor.text.icon_section.title",d,"Icon Configuration")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,h.kg)("editor.text.icon_section.desc",d,"Choose an icon to display alongside the text content.")}
          </div>

          ${s.U.renderFieldSection((0,h.kg)("editor.text.icon",d,"Icon"),(0,h.kg)("editor.text.icon_desc",d,"Choose an icon to display alongside the text. Leave empty for no icon."),e,{icon:c.icon||""},[this.iconField("icon")],t=>o(t.detail.value))}
          ${c.icon&&""!==c.icon.trim()?n.qy`
                <div style="margin-top: 24px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                  >
                    ${(0,h.kg)("editor.text.icon_position",d,"Icon Position")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                  >
                    ${(0,h.kg)("editor.text.icon_position_desc",d,"Choose where to position the icon relative to the text.")}
                  </div>
                  <div
                    style="display: flex; gap: 8px; justify-content: flex-start; flex-wrap: wrap;"
                  >
                    <button
                      type="button"
                      style="padding: 8px 12px; border: 2px solid ${"before"===(c.icon_position||"before")?"var(--primary-color)":"var(--divider-color)"}; background: ${"before"===(c.icon_position||"before")?"var(--primary-color)":"transparent"}; color: ${"before"===(c.icon_position||"before")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                      @click=${()=>o({icon_position:"before"})}
                    >
                      <ha-icon
                        icon="mdi:format-align-left"
                        style="font-size: 16px; flex-shrink: 0;"
                      ></ha-icon>
                      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                        >${(0,h.kg)("editor.text.before_text",d,"Before Text")}</span
                      >
                    </button>
                    <button
                      type="button"
                      style="padding: 8px 12px; border: 2px solid ${"after"===(c.icon_position||"before")?"var(--primary-color)":"var(--divider-color)"}; background: ${"after"===(c.icon_position||"before")?"var(--primary-color)":"transparent"}; color: ${"after"===(c.icon_position||"before")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                      @click=${()=>o({icon_position:"after"})}
                    >
                      <ha-icon
                        icon="mdi:format-align-right"
                        style="font-size: 16px; flex-shrink: 0;"
                      ></ha-icon>
                      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                        >${(0,h.kg)("editor.text.after_text",d,"After Text")}</span
                      >
                    </button>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Color Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,h.kg)("editor.text.color_section.title",d,"Color Configuration")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,h.kg)("editor.text.color_section.desc",d,"Configure the text and icon colors for this module.")}
          </div>

          <!-- Text Color -->
          <div class="field-container" style="margin-bottom: 24px;">
            <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
              ${(0,h.kg)("editor.text.text_color",d,"Text Color")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;"
            >
              ${(0,h.kg)("editor.text.text_color_desc",d,"Choose the color for the text content.")}
            </div>
            <ultra-color-picker
              .value=${c.color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${e}
              @value-changed=${t=>o({color:t.detail.value})}
            ></ultra-color-picker>
          </div>

          <!-- Icon Color (only show if icon is selected) -->
          ${c.icon&&""!==c.icon.trim()?n.qy`
                <div>
                  
                    <div class="field-container">
                      <div
                        class="field-title"
                        style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                      >
                        ${(0,h.kg)("editor.text.icon_color",d,"Icon Color")}
                      </div>
                      <div
                        class="field-description"
                        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;"
                      >
                        ${(0,h.kg)("editor.text.icon_color_desc",d,"Choose the color for the icon.")}
                      </div>
                      <ultra-color-picker
                        .value=${c.icon_color||""}
                        .defaultValue=${"var(--primary-color)"}
                        .hass=${e}
                        @value-changed=${t=>o({icon_color:t.detail.value})}
                      ></ultra-color-picker>
                    </div>
                  
                </div>
              `:""}
        </div>

        <!-- Unified Template Section -->
        <div class="template-section" style="margin-top: 24px; margin-bottom: 24px;">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,h.kg)("editor.text.unified_template_section.toggle",d,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,h.kg)("editor.text.template_cheatsheet",d,"Template Cheatsheet")}"
                  @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{detail:{module:"text"},bubbles:!0,composed:!0}))}}
                >
                  <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(e,{unified_template_mode:c.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>o({unified_template_mode:t.detail.value.unified_template_mode}))}
            </div>
            <div class="template-description">
              ${(0,h.kg)("editor.text.unified_template_section.desc",d,"Return JSON with content, color, and optional container_background_color. Plain Jinja strings are treated as dynamic text.")}
            </div>
          </div>

          ${c.unified_template_mode?n.qy`
                <div
                  class="template-content"
                  style="margin-top: 12px;"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                  @insert-snippet=${t=>{var e,i,o;const n=t.currentTarget.querySelector("ultra-template-editor");null===(e=null==n?void 0:n.insertAtCursor)||void 0===e||e.call(n,null!==(o=null===(i=t.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                >
                  <ultra-template-editor
                    .hass=${e}
                    .value=${c.unified_template||""}
                    .placeholder=${'{\n  "content": "{{ states(\'sensor.example\') }}",\n  "color": "var(--primary-text-color)"\n}'}
                    .minHeight=${120}
                    .maxHeight=${360}
                    @value-changed=${t=>{o({unified_template:t.detail.value})}}
                  ></ultra-template-editor>
                </div>
              `:""}
        </div>

        <!-- Text Alignment moved to Design tab per spec -->
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderPreview(t,e,i,o){var r,a,s,c;const x=t,f=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en",v=this._getEffectiveRichContent(x);if(!(x.unified_template_mode&&x.unified_template&&String(x.unified_template).trim()||v))return this.renderGradientErrorState((0,h.kg)("editor.text.error_no_content",f,"Enter Text Content"),(0,h.kg)("editor.text.error_no_content_desc",f,"Add text in the General tab"),"mdi:format-text");if(x.hide_if_no_link&&!this.hasActiveLink(x))return n.qy`<div class="text-module-hidden">
        ${(0,h.kg)("editor.text.hidden_no_link",f,"Hidden (no link)")}
      </div>`;const y=x,k=x.design||{},w=(()=>{const t=k.text_align;if(t&&"inherit"!==t)return t;const e=y.text_align;return e&&"inherit"!==e?e:y.alignment&&"inherit"!==y.alignment?y.alignment:"center"})();let $,C,S,T=x.unified_template_mode?"":x.text||"Sample Text";if(x.unified_template_mode&&x.unified_template&&(!this._templateService&&e?this._templateService=new d.I(e):this._templateService&&e&&this._templateService.updateHass(e),e)){const t=(0,_.KD)(x.unified_template,e,i);e.__uvc_template_strings||(e.__uvc_template_strings={});const o=this._hashString(t),n=`unified_text_${x.id}_${o}`;if(this._templateService){const o=(0,u.pL)("",e,{text:x.text});this._templateService.subscribeToTemplate(t,n,()=>{this.triggerPreviewUpdate()},o,i,(0,u.jh)("",e))}const r=this._lastTemplateText.get(n);void 0!==r&&(T=r);const s=this._lastTemplateColor.get(n);void 0!==s&&($=s);const l=this._lastTemplateIconColor.get(n);void 0!==l&&(C=l);const c=this._lastTemplateIcon.get(n);void 0!==c&&(S=c);const d=null===(a=e.__uvc_template_strings)||void 0===a?void 0:a[n];if(d&&""!==String(d).trim()){const t=(0,g.cv)(d);if(!(0,g.HD)(t)){let e;void 0!==t.state_text&&""!==String(t.state_text).trim()?e=String(t.state_text):void 0!==t.content&&""!==String(t.content).trim()?e=String(t.content):t._isString&&void 0!==t.content&&(e=String(t.content).trim()),void 0!==e&&(T=e,this._lastTemplateText.set(n,e)),t.color&&($=t.color,this._lastTemplateColor.set(n,t.color)),t.icon_color&&(C=t.icon_color,this._lastTemplateIconColor.set(n,t.icon_color)),t.icon&&(S=t.icon,this._lastTemplateIcon.set(n,t.icon))}}}const A=Object.assign(Object.assign({fontSize:(()=>k.font_size&&"string"==typeof k.font_size&&""!==k.font_size.trim()?/[a-zA-Z%]/.test(k.font_size)?k.font_size:this.addPixelUnit(k.font_size)||k.font_size:void 0!==y.font_size?`${y.font_size}px`:void 0!==x.text_size?`${x.text_size}px`:"clamp(18px, 4vw, 26px)")(),fontFamily:k.font_family||y.font_family||"inherit",color:k.color||$||x.color||"inherit",textAlign:w,fontWeight:k.font_weight||y.font_weight||"inherit",fontStyle:k.font_style||y.font_style||"inherit",textTransform:k.text_transform||y.text_transform||"none",textDecoration:"none",lineHeight:k.line_height||y.line_height||"inherit",letterSpacing:k.letter_spacing||y.letter_spacing||"inherit"},void 0!==k.white_space||void 0!==y.white_space?{whiteSpace:k.white_space||y.white_space||"normal"}:{}),{margin:"0",display:"flex",alignItems:"center",justifyContent:{left:"flex-start",center:"center",right:"flex-end",justify:"flex-start"}[w]||"center",gap:"8px",width:"100%",textShadow:k.text_shadow_h&&k.text_shadow_v?`${k.text_shadow_h||"0"} ${k.text_shadow_v||"0"} ${k.text_shadow_blur||"0"} ${k.text_shadow_color||"rgba(0,0,0,0.5)"}`:y.text_shadow_h&&y.text_shadow_v?`${y.text_shadow_h||"0"} ${y.text_shadow_v||"0"} ${y.text_shadow_blur||"0"} ${y.text_shadow_color||"rgba(0,0,0,0.5)"}`:"none",boxShadow:k.box_shadow_h&&k.box_shadow_v?`${k.box_shadow_h||"0"} ${k.box_shadow_v||"0"} ${k.box_shadow_blur||"0"} ${k.box_shadow_spread||"0"} ${k.box_shadow_color||"rgba(0,0,0,0.1)"}`:y.box_shadow_h&&y.box_shadow_v?`${y.box_shadow_h||"0"} ${y.box_shadow_v||"0"} ${y.box_shadow_blur||"0"} ${y.box_shadow_spread||"0"} ${y.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none"}),z=S||x.icon,F=C||x.icon_color||"var(--primary-color)",P=z?n.qy`<ha-icon
          icon="${z}"
          style="color: ${F}; --mdc-icon-size: ${x.icon_size||24}px;"
        ></ha-icon>`:"",U=x.unified_template_mode&&""===T?n.qy`<span style="visibility:hidden">&nbsp;</span>`:n.qy`<span>${T}</span>`,L=!x.unified_template_mode&&v?n.qy`<span class="rich-text-content"
            >${(0,m._)((0,b.ge)(v))}</span
          >`:U;let I;I="before"!==x.icon_position&&x.icon_position?"after"===x.icon_position?n.qy`${L}${P}`:L:n.qy`${P}${L}`;const H=this.hasActiveLink(x)?n.qy`<div
          class="${l.A.getClickableClass(x)}"
          style="${l.A.getClickableStyle(x)}"
          @click=${t=>this.handleClick(t,x,e,i)}
          @dblclick=${t=>this.handleDoubleClick(t,x,e)}
          @mousedown=${t=>this.handleMouseDown(t,x,e)}
          @mouseup=${t=>this.handleMouseUp(t,x,e)}
          @mouseleave=${t=>this.handleMouseLeave(t,x,e)}
          @touchstart=${t=>this.handleTouchStart(t,x,e)}
          @touchend=${t=>this.handleTouchEnd(t,x,e)}
        >
          ${I}
        </div>`:I;let D="";if(x.unified_template_mode&&x.unified_template&&(!this._templateService&&e?this._templateService=new d.I(e):this._templateService&&e&&this._templateService.updateHass(e),e)){e.__uvc_template_strings||(e.__uvc_template_strings={});const t=(0,_.KD)(x.unified_template,e,i),o=this._hashString(t),n=`unified_text_${x.id}_${o}`;if(this._templateService){const o=(0,u.pL)("",e,{text:x.text});this._templateService.subscribeToTemplate(t,n,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},o,i,(0,u.jh)("",e))}const r=this._lastTemplateContainerBg.get(n);r&&(D=r);const a=null===(s=e.__uvc_template_strings)||void 0===s?void 0:s[n];if(a&&""!==String(a).trim()){const t=(0,g.cv)(a);!(0,g.HD)(t)&&t.container_background_color&&(D=t.container_background_color,this._lastTemplateContainerBg.set(n,t.container_background_color))}}const E={padding:k.padding_top||k.padding_bottom||k.padding_left||k.padding_right||y.padding_top||y.padding_bottom||y.padding_left||y.padding_right?`${this.addPixelUnit(k.padding_top||y.padding_top)||"0px"} ${this.addPixelUnit(k.padding_right||y.padding_right)||"0px"} ${this.addPixelUnit(k.padding_bottom||y.padding_bottom)||"0px"} ${this.addPixelUnit(k.padding_left||y.padding_left)||"0px"}`:"0",margin:k.margin_top||k.margin_bottom||k.margin_left||k.margin_right||y.margin_top||y.margin_bottom||y.margin_left||y.margin_right?`${k.margin_top||y.margin_top||"0px"} ${k.margin_right||y.margin_right||"0px"} ${k.margin_bottom||y.margin_bottom||"0px"} ${k.margin_left||y.margin_left||"0px"}`:"0",border:(k.border_style||y.border_style)&&"none"!==(k.border_style||y.border_style)?`${k.border_width||y.border_width||"1px"} ${k.border_style||y.border_style} ${k.border_color||y.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(k.border_radius||y.border_radius)||"inherit",position:k.position||y.position||"static",top:k.top||y.top||"auto",bottom:k.bottom||y.bottom||"auto",left:k.left||y.left||"auto",right:k.right||y.right||"auto",zIndex:k.z_index||y.z_index||"auto",width:k.width||y.width||"auto",height:k.height||y.height||"auto",maxWidth:k.max_width||y.max_width||"none",maxHeight:k.max_height||y.max_height||"none",minWidth:k.min_width||y.min_width||"auto",minHeight:k.min_height||y.min_height||"auto",overflow:k.overflow||y.overflow||"visible",clipPath:k.clip_path||y.clip_path||"none",backdropFilter:k.backdrop_filter||y.backdrop_filter||"none",boxShadow:k.box_shadow_h&&k.box_shadow_v?`${k.box_shadow_h||"0"} ${k.box_shadow_v||"0"} ${k.box_shadow_blur||"0"} ${k.box_shadow_spread||"0"} ${k.box_shadow_color||"rgba(0,0,0,0.1)"}`:y.box_shadow_h&&y.box_shadow_v?`${y.box_shadow_h||"0"} ${y.box_shadow_v||"0"} ${y.box_shadow_blur||"0"} ${y.box_shadow_spread||"0"} ${y.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",boxSizing:"border-box"},{styles:M}=(0,p.U9)({color:D||k.background_color||y.background_color,fallback:y.background_color||"inherit",image:this.getBackgroundImageCSS(Object.assign(Object.assign({},y),k),e),imageSize:k.background_size||y.background_size||"cover",imagePosition:k.background_position||y.background_position||"center",imageRepeat:k.background_repeat||y.background_repeat||"no-repeat"});Object.assign(E,M),null===(c=y.design)||void 0===c||c.hover_effect;const j=this.getHoverEffectClass(t),O=this.buildStyleString(this.buildDesignStyles(t,e));return this.wrapWithAnimation(n.qy`
      <div
        class="text-module-container ${j}"
        style="${O}"
      >
        <div class="text-module-preview" style=${this.styleObjectToCss(A)}>${H}</div>
      </div>
    `,t,e)}renderLogicTab(t,e,i,o){return c.X.render(t,e,t=>o(t))}validate(t){const e=t,i=[...super.validate(t).errors];if(e.icon&&""!==e.icon.trim()&&(e.icon.includes(":")||i.push('Icon must be in format "mdi:icon-name" or "hass:icon-name"')),e.link&&""!==e.link.trim())try{new URL(e.link)}catch(t){e.link.startsWith("/")||e.link.startsWith("#")||i.push('Link must be a valid URL or start with "/" for relative paths')}return e.tap_action&&"default"!==e.tap_action.action&&"nothing"!==e.tap_action.action&&i.push(...this.validateAction(e.tap_action)),e.hold_action&&"default"!==e.hold_action.action&&"nothing"!==e.hold_action.action&&i.push(...this.validateAction(e.hold_action)),e.double_tap_action&&"default"!==e.double_tap_action.action&&"nothing"!==e.double_tap_action.action&&i.push(...this.validateAction(e.double_tap_action)),{valid:0===i.length,errors:i}}hasActiveLink(t){const e=t.link&&""!==t.link.trim(),i=t.tap_action&&"default"!==t.tap_action.action&&"nothing"!==t.tap_action.action,o=t.hold_action&&"default"!==t.hold_action.action&&"nothing"!==t.hold_action.action,n=t.double_tap_action&&"default"!==t.double_tap_action.action&&"nothing"!==t.double_tap_action.action;return!!(e||i||o||n)}validateAction(t){const e=[];switch(t.action){case"more-info":case"toggle":t.entity||e.push(`Entity is required for ${t.action} action`);break;case"navigate":t.navigation_path||e.push("Navigation path is required for navigate action");break;case"url":t.url_path||e.push("URL path is required for url action");break;case"perform-action":t.perform_action||t.service||e.push("Action is required for perform-action")}return e}handleClick(t,e,i,o){t.preventDefault(),this.clickTimeout&&clearTimeout(this.clickTimeout),this.clickTimeout=setTimeout(()=>{this.handleTapAction(t,e,i,o)},300)}handleDoubleClick(t,e,i,o){t.preventDefault(),this.clickTimeout&&(clearTimeout(this.clickTimeout),this.clickTimeout=null),this.handleDoubleAction(t,e,i,o)}handleMouseDown(t,e,i,o){this.startHold(t,e,i,o)}handleMouseUp(t,e,i){this.endHold(t,e,i)}handleMouseLeave(t,e,i){this.endHold(t,e,i)}handleTouchStart(t,e,i,o){this.startHold(t,e,i,o)}handleTouchEnd(t,e,i){this.endHold(t,e,i)}startHold(t,e,i,o){this.isHolding=!1,this.holdTimeout=setTimeout(()=>{this.isHolding=!0,this.handleHoldAction(t,e,i,o)},500)}endHold(t,e,i){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=null),this.isHolding=!1}handleTapAction(t,e,i,o){this.isHolding||(e.link&&""!==e.link.trim()?e.link.startsWith("http")||e.link.startsWith("https")?window.open(e.link,"_blank"):window.location.href=e.link:e.tap_action&&"default"!==e.tap_action.action&&"nothing"!==e.tap_action.action&&a.K.handleAction(e.tap_action,i,t.target,o,e.entity,e))}handleDoubleAction(t,e,i,o){e.double_tap_action&&"default"!==e.double_tap_action.action&&"nothing"!==e.double_tap_action.action&&a.K.handleAction(e.double_tap_action,i,t.target,o,e.entity,e)}handleHoldAction(t,e,i,o){e.hold_action&&"default"!==e.hold_action.action&&"nothing"!==e.hold_action.action&&a.K.handleAction(e.hold_action,i,t.target,o,e.entity,e)}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .text-module-preview {\n        min-height: 20px;\n        word-wrap: break-word;\n      }\n\n      .rich-text-content p {\n        margin: 0 0 0.4em 0;\n      }\n\n      .rich-text-content p:last-child {\n        margin-bottom: 0;\n      }\n\n      .rich-text-content a {\n        color: var(--primary-color);\n        text-decoration: underline;\n      }\n\n      .rich-text-content mark {\n        border-radius: 2px;\n        padding: 0 2px;\n      }\n      \n      .text-module-hidden {\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: 4px;\n      }\n      \n      /* Field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n \n        margin-bottom: 4px !important;\n        display: block !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      .settings-section {\n        margin-bottom: 16px;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Conditional Fields Grouping CSS */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 8px 8px 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      .conditional-fields-group:hover {\n        background: rgba(var(--rgb-primary-color), 0.12);\n      }\n\n      .conditional-fields-header {\n        background: rgba(var(--rgb-primary-color), 0.15);\n        padding: 12px 16px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        border-bottom: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      .conditional-fields-content {\n        padding: 16px;\n      }\n\n      .conditional-fields-content > .field-title:first-child {\n        margin-top: 0 !important;\n      }\n\n      @keyframes slideInFromLeft {\n        from { \n          opacity: 0; \n          transform: translateX(-10px); \n        }\n        to { \n          opacity: 1; \n          transform: translateX(0); \n        }\n      }\n\n      /* Icon picker specific styling */\n      ha-icon-picker {\n        --ha-icon-picker-width: 100%;\n        --ha-icon-picker-height: 56px;\n      }\n\n      /* Text field and select consistency */\n      ha-textfield,\n      ha-select {\n        --mdc-shape-small: 8px;\n        --mdc-theme-primary: var(--primary-color);\n      }\n\n      code {\n        background: var(--secondary-background-color);\n        padding: 2px 6px;\n        border-radius: 4px;\n        font-family: 'Courier New', monospace;\n        font-size: 0.9em;\n        color: var(--primary-color);\n      }\n\n      /* Unified template toggle */\n      .template-header .switch-container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 0;\n      }\n      .template-header .switch-label-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .template-header .switch-label {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      .template-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-top: 8px;\n        line-height: 1.5;\n      }\n      .template-header .switch {\n        position: relative;\n        display: inline-block;\n        width: 44px;\n        height: 24px;\n      }\n      .template-header .switch input {\n        opacity: 0;\n        width: 0;\n        height: 0;\n      }\n      .template-header .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: var(--disabled-color);\n        transition: 0.3s;\n        border-radius: 24px;\n      }\n      .template-header .slider:before {\n        position: absolute;\n        content: "";\n        height: 18px;\n        width: 18px;\n        left: 3px;\n        bottom: 3px;\n        background-color: white;\n        transition: 0.3s;\n        border-radius: 50%;\n      }\n      .template-header input:checked + .slider {\n        background-color: var(--primary-color);\n      }\n      .template-header input:checked + .slider:before {\n        transform: translateX(20px);\n      }\n\n      /* Clickable text hover styles */\n      ${l.A.getHoverStyles()}\n    `}getBackgroundImageCSS(t,e){const i=t.background_image_type,o=t.background_image,n=t.background_image_entity;switch(i){case"upload":if(o)return o.startsWith("/api/image/serve/")?`url("${this.getImageUrl(e,o)}")`:(o.startsWith("data:image/"),`url("${o}")`);break;case"entity":if(n&&e){const t=e.states[n];if(t){const e=t.attributes.entity_picture||t.attributes.image||t.state;if(e&&"unknown"!==e&&"unavailable"!==e)return`url("${e}")`}}break;case"url":if(o)return`url("${o}")`;break;default:return"none"}return"none"}getImageUrl(t,e){if(!e)return"";if(e.startsWith("http"))return e;if(e.startsWith("data:image/"))return e;if(e.includes("/api/image/serve/")){const i=e.match(/\/api\/image\/serve\/([^\/]+)/);if(i&&i[1]){const o=i[1];try{return`${(t.hassUrl?t.hassUrl():"").replace(/\/$/,"")}/api/image/serve/${o}/original`}catch(t){return e}}return e}return e.startsWith("/")?`${(t.hassUrl?t.hassUrl():"").replace(/\/$/,"")}${e}`:e}styleObjectToCss(t){return Object.entries(t).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}camelToKebab(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}addPixelUnit(t){return t?/^\d+$/.test(t)?`${t}px`:/^[\d\s]+$/.test(t)?t.split(" ").map(t=>t.trim()?`${t}px`:t).join(" "):t:t}_getEffectiveRichContent(t){return t.rich_text_content&&""!==t.rich_text_content.trim()?t.rich_text_content:t.text&&""!==t.text.trim()?`<p>${t.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</p>`:""}_hashString(t){let e=0;for(let i=0;i<t.length;i+=1)e=(e<<5)-e+t.charCodeAt(i),e|=0;return Math.abs(e)}}},9327(t,e,i){function o(t,e){var i;if(!t||"string"!=typeof t||""===t.trim())return"";const o=t.trim(),n=null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[o];return n?`${o}|${n.state}|${function(t){var e,i,o,n;if(!t||"object"!=typeof t)return"";const r=`${null!==(e=t.unit_of_measurement)&&void 0!==e?e:""}|${null!==(i=t.device_class)&&void 0!==i?i:""}|${null!==(o=t.friendly_name)&&void 0!==o?o:""}|${null!==(n=t.icon)&&void 0!==n?n:""}|${Array.isArray(t.rgb_color)?t.rgb_color.join(","):""}`;let a=0;for(let t=0;t<r.length;t++)a=(a<<5)-a+r.charCodeAt(t),a|=0;return Math.abs(a).toString(36)}(n.attributes)}`:`${o}|unavailable|`}function n(t,e){const i=[...new Set(t.filter(t=>!!t&&""!==String(t).trim()))].sort();return 0===i.length?"":i.map(t=>o(t,e)).join("||")}function r(t,e,i){var o;const n=null===(o=null==e?void 0:e.states)||void 0===o?void 0:o[t];if(!n)return{entity:t,state:"unavailable",name:(null==i?void 0:i.name)||t,attributes:{},unit:"",domain:t.split(".")[0]||"unknown",device_class:"",friendly_name:(null==i?void 0:i.name)||t,config:i||{}};const r=t.split(".")[0],a=n.attributes||{};return{entity:t,state:n.state,name:(null==i?void 0:i.name)||a.friendly_name||t,attributes:a,unit:a.unit_of_measurement||"",domain:r,device_class:a.device_class||"",friendly_name:a.friendly_name||"",config:i||{},state_number:parseFloat(n.state),state_boolean:"on"===n.state||"true"===n.state||"yes"===n.state}}function a(t,e,i){const o=t.map((t,o)=>{const n=null==i?void 0:i[o];return r(t,e,n)}),n=o[0]||{entity:"",state:"unavailable",name:"",attributes:{},unit:"",domain:"unknown",device_class:"",friendly_name:"",config:{}};return Object.assign(Object.assign({},n),{entities:o})}i.d(e,{Qq:()=>n,jh:()=>o,pL:()=>r,wI:()=>a})}}]);
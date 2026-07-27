"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[6761],{5151(e,t,i){i.d(t,{UltraSelectInputModule:()=>a});var o=i(5183),r=i(5096),l=i(3721),n=i(5147),s=i(8938);i(7921);class a extends l.m{constructor(){super(...arguments),this.metadata={type:"select_input",title:"Select Input",description:"Dropdown or chip selector linked to input_select helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:form-dropdown",category:"input",tags:["select","dropdown","input","form","helper","interactive","options"]}}createDefault(e,t){return{id:e||this.generateId("select_input"),type:"select_input",select_style:"dropdown",show_label:!0,label:"",font_size:14,text_color:"var(--primary-text-color)",active_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getStyleOptions(e){return[{value:"dropdown",label:(0,r.kg)("editor.select_input.style_options.dropdown",e,"Dropdown")},{value:"segmented",label:(0,r.kg)("editor.select_input.style_options.segmented",e,"Segmented Buttons")},{value:"chips",label:(0,r.kg)("editor.select_input.style_options.chips",e,"Chips / Pills")}]}renderGeneralTab(e,t,i,l){var n,s;const a=e,d=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.select_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.select_input.entity.desc",d,"Link to a Home Assistant Input Select or select entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",a.entity||"",e=>{l({entity:e}),this.triggerPreviewUpdate()},["input_select","select"],(0,r.kg)("editor.select_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.select_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.select_input.appearance.desc",d,"Choose how the options are displayed.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.select_input.select_style",d,"Selection Style"),(0,r.kg)("editor.select_input.select_style_desc",d,"How options are presented to the user"),t,{select_style:a.select_style||"dropdown"},[this.selectField("select_style",this.getStyleOptions(d))],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.select_input.label",d,"Label"),(0,r.kg)("editor.select_input.label_desc",d,"Label displayed above the selector"),t,{label:a.label||""},[{name:"label",selector:{text:{}}}],e=>l(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.select_input.show_label",d,"Show Label"),(0,r.kg)("editor.select_input.show_label_desc",d,"Display the label"),t,{show_label:!1!==a.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.select_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.select_input.font_size",d,"Font Size"),(0,r.kg)("editor.select_input.font_size_desc",d,"Font size in pixels"),null!==(s=a.font_size)&&void 0!==s?s:14,14,10,24,1,e=>l({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.select_input.active_color",d,"Active/Selected Color")}
              .value=${a.active_color||"var(--primary-color)"}
              @color-changed=${e=>{l({active_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.select_input.text_color",d,"Text Color")}
              .value=${a.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>l({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return n.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return s.X.render(e,t,e=>o(e))}getStyles(){return l.m.getSliderStyles()}renderPreview(e,t,i){var l,n,s,a,d;const c=e,p=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!(null===(n=c.entity)||void 0===n?void 0:n.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",p,"Configure Entity"),(0,r.kg)("editor.select_input.error_configure_entity_desc",p,"Select an Input Select entity in the General tab"),"mdi:form-dropdown");const g=null===(s=null==t?void 0:t.states)||void 0===s?void 0:s[c.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",p,"Entity Not Found"),`Entity "${c.entity}" is not available`,"mdi:alert-circle-outline");const u=(null===(a=g.attributes)||void 0===a?void 0:a.options)||[],v=g.state||"",b=c.design||{},_=null!==(d=c.font_size)&&void 0!==d?d:14,h=c.text_color||"var(--primary-text-color)",y=c.active_color||"var(--primary-color)",$=c.select_style||"dropdown",m=!1!==c.show_label&&!!c.label,x=(this._buildContainerStyles(b),this.getHoverEffectClass(e)),f=this.buildStyleString(this.buildDesignStyles(e,t)),w=c.id,k=e=>{if(!c.entity||!t)return;const i=c.entity.split(".")[0];t.callService(i,"select_option",{entity_id:c.entity,option:e})};return"segmented"===$?this.wrapWithAnimation(o.qy`
        <style>
          .sel-seg-${w} { display:flex; border-radius:8px; overflow:hidden; border:1px solid var(--divider-color); }
          .sel-seg-btn-${w} { flex:1; padding:10px 12px; border:none; background:transparent; cursor:pointer;
            font-size:${_}px; color:${h}; font-family:inherit; transition:all .2s;
            border-right:1px solid var(--divider-color); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
          .sel-seg-btn-${w}:last-child { border-right:none; }
          .sel-seg-btn-${w}.active { background:${y}; color:#fff; font-weight:500; }
          .sel-seg-btn-${w}:not(.active):hover { background:rgba(var(--rgb-primary-text-color,0,0,0),.05); }
          .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${x}" style="${f}">
          ${m?o.qy`<div class="sel-label">${c.label}</div>`:""}
          <div class="sel-seg-${w}">
            ${u.map(e=>o.qy`
              <button class="sel-seg-btn-${w} ${e===v?"active":""}" @click=${()=>k(e)}>${e}</button>
            `)}
          </div>
        </div>
      `,e,t):"chips"===$?this.wrapWithAnimation(o.qy`
        <style>
          .sel-chips-${w} { display:flex; flex-wrap:wrap; gap:8px; }
          .sel-chip-${w} { padding:8px 16px; border-radius:20px; border:1px solid var(--divider-color);
            background:transparent; cursor:pointer; font-size:${_}px; color:${h};
            font-family:inherit; transition:all .2s; white-space:nowrap; }
          .sel-chip-${w}.active { background:${y}; color:#fff; border-color:${y}; font-weight:500; }
          .sel-chip-${w}:not(.active):hover { border-color:${y}; }
          .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${x}" style="${f}">
          ${m?o.qy`<div class="sel-label">${c.label}</div>`:""}
          <div class="sel-chips-${w}">
            ${u.map(e=>o.qy`
              <button class="sel-chip-${w} ${e===v?"active":""}" @click=${()=>k(e)}>${e}</button>
            `)}
          </div>
        </div>
      `,e,t):this.wrapWithAnimation(o.qy`
      <style>
        .sel-dd-wrap-${w} { position:relative; }
        .sel-dd-${w} { width:100%; padding:12px; font-size:${_}px; color:${h}; font-family:inherit;
          background:transparent; border:1px solid var(--divider-color); border-radius:8px; cursor:pointer;
          appearance:none; -webkit-appearance:none; outline:none; transition:border-color .2s, box-shadow .2s; }
        .sel-dd-${w}:focus { border-color:${y}; box-shadow:0 0 0 1px ${y}; }
        .sel-dd-arrow { position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none;
          color:var(--secondary-text-color); --mdc-icon-size:20px; }
        .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${x}" style="${f}">
        ${m?o.qy`<div class="sel-label">${c.label}</div>`:""}
        <div class="sel-dd-wrap-${w}">
          <select class="sel-dd-${w}" .value=${v} @change=${e=>k(e.target.value)}>
            ${u.map(e=>o.qy`<option value=${e} ?selected=${e===v}>${e}</option>`)}
          </select>
          <span class="sel-dd-arrow"><ha-icon icon="mdi:chevron-down"></ha-icon></span>
        </div>
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}}}]);
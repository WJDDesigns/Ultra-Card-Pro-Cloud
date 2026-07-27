"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[2681],{8927(t,e,o){o.d(e,{UltraBooleanInputModule:()=>s});var i=o(5183),l=o(5096),n=o(3721),r=o(5147),a=o(8938);o(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"boolean_input",title:"Boolean Input",description:"Toggle switch linked to input_boolean and switch entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:toggle-switch-outline",category:"input",tags:["boolean","toggle","switch","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("boolean_input"),type:"boolean_input",toggle_style:"switch",content_alignment:"none",show_label:!0,label:"",show_entity_name:!1,show_state_text:!0,on_text:"",off_text:"",font_size:14,text_color:"var(--primary-text-color)",on_color:"var(--primary-color)",off_color:"var(--disabled-color, #bdbdbd)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getToggleStyleOptions(t){return[{value:"switch",label:(0,l.kg)("editor.boolean_input.style_options.switch",t,"Switch")},{value:"checkbox",label:(0,l.kg)("editor.boolean_input.style_options.checkbox",t,"Checkbox")},{value:"pill",label:(0,l.kg)("editor.boolean_input.style_options.pill",t,"Pill Toggle")}]}getAlignmentOptions(t){return[{value:"none",label:(0,l.kg)("editor.common.none",t,"None")},{value:"left",label:(0,l.kg)("editor.common.left",t,"Left")},{value:"center",label:(0,l.kg)("editor.common.center",t,"Center")},{value:"right",label:(0,l.kg)("editor.common.right",t,"Right")}]}renderGeneralTab(t,e,o,n){var r,a;const s=t,d=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,l.kg)("editor.boolean_input.entity.title",d,"Entity Configuration"),(0,l.kg)("editor.boolean_input.entity.desc",d,"Link to a Home Assistant Input Boolean or switch entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,o,"entity",s.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_boolean","switch"],(0,l.kg)("editor.boolean_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,l.kg)("editor.boolean_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,l.kg)("editor.boolean_input.appearance.desc",d,"Configure the toggle style and labels.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,l.kg)("editor.boolean_input.toggle_style",d,"Toggle Style"),(0,l.kg)("editor.boolean_input.toggle_style_desc",d,"Visual style of the toggle"),e,{toggle_style:s.toggle_style||"switch"},[this.selectField("toggle_style",this.getToggleStyleOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
          ${this.renderFieldSection((0,l.kg)("editor.boolean_input.content_alignment",d,"Alignment"),(0,l.kg)("editor.boolean_input.content_alignment_desc",d,"Align the control row inside the module"),e,{content_alignment:s.content_alignment||"none"},[this.selectField("content_alignment",this.getAlignmentOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,l.kg)("editor.boolean_input.label",d,"Label"),(0,l.kg)("editor.boolean_input.label_desc",d,"Label displayed beside the toggle"),e,{label:s.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}
          ${this.renderFieldSection((0,l.kg)("editor.boolean_input.show_label",d,"Show Label"),(0,l.kg)("editor.boolean_input.show_label_desc",d,"Display the label"),e,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${"pill"!==(s.toggle_style||"switch")?this.renderFieldSection((0,l.kg)("editor.boolean_input.show_entity_name",d,"Show Entity Name"),(0,l.kg)("editor.boolean_input.show_entity_name_desc",d,"Display the entity name beside the control (switch/checkbox)"),e,{show_entity_name:!0===s.show_entity_name},[{name:"show_entity_name",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
          ${this.renderFieldSection((0,l.kg)("editor.boolean_input.show_state_text",d,"Show State Text"),(0,l.kg)("editor.boolean_input.show_state_text_desc",d,"Display On/Off text beside the toggle"),e,{show_state_text:!1!==s.show_state_text},[{name:"show_state_text",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${!1!==s.show_state_text?i.qy`
            ${this.renderFieldSection((0,l.kg)("editor.boolean_input.on_text",d,"On Text"),(0,l.kg)("editor.boolean_input.on_text_desc",d,"Custom text for the On state (default: On)"),e,{on_text:s.on_text||""},[{name:"on_text",selector:{text:{}}}],t=>n(t.detail.value))}
            ${this.renderFieldSection((0,l.kg)("editor.boolean_input.off_text",d,"Off Text"),(0,l.kg)("editor.boolean_input.off_text_desc",d,"Custom text for the Off state (default: Off)"),e,{off_text:s.off_text||""},[{name:"off_text",selector:{text:{}}}],t=>n(t.detail.value))}
          `:""}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,l.kg)("editor.boolean_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,l.kg)("editor.boolean_input.font_size",d,"Font Size"),(0,l.kg)("editor.boolean_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,t=>n({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,l.kg)("editor.boolean_input.on_color",d,"On Color")}
              .value=${s.on_color||"var(--primary-color)"}
              @color-changed=${t=>{n({on_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,l.kg)("editor.boolean_input.off_color",d,"Off Color")}
              .value=${s.off_color||"var(--disabled-color, #bdbdbd)"}
              @color-changed=${t=>{n({off_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,l.kg)("editor.boolean_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>{n({text_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,o,i){return r.A.render(t,e,t=>i(t))}renderOtherTab(t,e,o,i){return a.X.render(t,e,t=>i(t))}getStyles(){return n.m.getSliderStyles()}renderPreview(t,e,o){var n,r,a,s,d,c;const p=t,g=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(r=p.entity)||void 0===r?void 0:r.trim()))return this.renderGradientErrorState((0,l.kg)("editor.common.error_configure_entity",g,"Configure Entity"),(0,l.kg)("editor.boolean_input.error_configure_entity_desc",g,"Select an Input Boolean entity in the General tab"),"mdi:toggle-switch-outline");const b=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[p.entity];if(!b)return this.renderGradientErrorState((0,l.kg)("editor.common.error_entity_not_found",g,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _="on"===b.state,u=p.design||{},h=null!==(s=p.font_size)&&void 0!==s?s:14,x=p.text_color||"var(--primary-text-color)",y=p.text_color||"var(--secondary-text-color)",v=p.on_color||"var(--primary-color)",f=p.off_color||"var(--disabled-color, #bdbdbd)",m=p.toggle_style||"switch",$=p.content_alignment||"none",w=!1!==p.show_label&&!!p.label,k=!0===p.show_entity_name,S=!1!==p.show_state_text,z=p.on_text||"On",T=p.off_text||"Off",O="none"===$?"":`justify-content:${"center"===$?"center":"right"===$?"flex-end":"flex-start"};width:100%;`,C="center"===$?"text-align:center;":"right"===$?"text-align:right;":"",F=(this._buildContainerStyles(u),this.getHoverEffectClass(t)),q=this.buildStyleString(this.buildDesignStyles(t,e)),A=p.id,P=()=>{if(!p.entity||!e)return;const t=p.entity.split(".")[0];e.callService(t,"toggle",{entity_id:p.entity})},U=_?v:f;return"checkbox"===m?this.wrapWithAnimation(i.qy`
        <style>
          .bool-cb-row-${A} { display:flex; align-items:center; gap:12px; cursor:pointer; }
          .bool-cb-box-${A} { width:22px; height:22px; border-radius:4px; border:2px solid ${U};
            display:flex; align-items:center; justify-content:center; transition:all .2s; flex-shrink:0;
            background:${_?U:"transparent"}; }
          .bool-cb-box-${A} ha-icon { --mdc-icon-size:16px; color:#fff; opacity:${_?"1":"0"}; transition:opacity .2s; }
          .bool-cb-name { font-size:${h}px; color:${x}; }
          .bool-state-text { font-size:${Math.max(11,h-2)}px; color:${y}; }
          .bool-top-label { font-size:12px; font-weight:500; color:${y}; margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${F}" style="${q}">
          ${w?i.qy`<div class="bool-top-label" style="${C}">${p.label}</div>`:""}
          <div class="bool-cb-row-${A}" style="${O}" @click=${P}>
            <div class="bool-cb-box-${A}"><ha-icon icon="mdi:check"></ha-icon></div>
            ${k?i.qy`<span class="bool-cb-name">${(null===(d=b.attributes)||void 0===d?void 0:d.friendly_name)||p.entity}</span>`:""}
            ${S?i.qy`<span class="bool-state-text">${_?z:T}</span>`:""}
          </div>
        </div>
      `,t,e):"pill"===m?this.wrapWithAnimation(i.qy`
        <style>
          .bool-pill-row-${A} { display:flex; align-items:center; gap:12px; }
          .bool-pill-${A} { display:flex; border-radius:20px; overflow:hidden; border:1px solid var(--divider-color); }
          .bool-pill-btn-${A} { padding:8px 20px; border:none; cursor:pointer; font-size:${h}px;
            font-family:inherit; transition:all .2s; background:transparent; color:${x}; }
          .bool-pill-btn-${A}.active { background:${U}; color:#fff; font-weight:500; }
          .bool-pill-btn-${A}:not(.active):hover { background:rgba(var(--rgb-primary-text-color,0,0,0),.05); }
          .bool-pill-label { font-size:${h}px; color:${x}; flex:1; }
          .bool-top-label { font-size:12px; font-weight:500; color:${y}; margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${F}" style="${q}">
          ${w?i.qy`<div class="bool-top-label" style="${C}">${p.label}</div>`:""}
          <div class="bool-pill-row-${A}" style="${O}">
            <div class="bool-pill-${A}">
              <button class="bool-pill-btn-${A} ${_?"":"active"}" @click=${()=>{_&&P()}}>${T}</button>
              <button class="bool-pill-btn-${A} ${_?"active":""}" @click=${()=>{_||P()}}>${z}</button>
            </div>
          </div>
        </div>
      `,t,e):this.wrapWithAnimation(i.qy`
      <style>
        .bool-sw-row-${A} { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .bool-sw-track-${A} { width:48px; height:26px; border-radius:13px; position:relative;
          background:${U}; transition:background .3s; flex-shrink:0; }
        .bool-sw-thumb-${A} { width:22px; height:22px; border-radius:50%; background:#fff;
          position:absolute; top:2px; left:${_?"24px":"2px"}; transition:left .3s;
          box-shadow:0 1px 3px rgba(0,0,0,.3); }
        .bool-sw-name { font-size:${h}px; color:${x}; }
        .bool-state-text { font-size:${Math.max(11,h-2)}px; color:${y}; }
        .bool-top-label { font-size:12px; font-weight:500; color:${y}; margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${F}" style="${q}">
        ${w?i.qy`<div class="bool-top-label" style="${C}">${p.label}</div>`:""}
        <div class="bool-sw-row-${A}" style="${O}" @click=${P}>
          <div class="bool-sw-track-${A}"><div class="bool-sw-thumb-${A}"></div></div>
          ${k?i.qy`<span class="bool-sw-name">${(null===(c=b.attributes)||void 0===c?void 0:c.friendly_name)||p.entity}</span>`:""}
          ${S?i.qy`<span class="bool-state-text">${_?z:T}</span>`:""}
        </div>
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}}}]);
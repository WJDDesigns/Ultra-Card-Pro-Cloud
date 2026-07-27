"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[7833],{719(t,e,i){i.d(e,{UltraButtonInputModule:()=>s});var n=i(5183),o=i(5096),r=i(3721),l=i(5147),a=i(8938);i(7921);class s extends r.m{constructor(){super(...arguments),this._rippleTimers=new Map,this.metadata={type:"button_input",title:"Button Input",description:"Press button linked to input_button helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:gesture-tap-button",category:"input",tags:["button","press","input","form","helper","interactive","trigger"]}}createDefault(t,e){return{id:t||this.generateId("button_input"),type:"button_input",button_label:"",button_icon:"",button_style:"filled",font_size:14,text_color:"#ffffff",button_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getButtonStyleOptions(t){return[{value:"filled",label:(0,o.kg)("editor.button_input.style_options.filled",t,"Filled")},{value:"outlined",label:(0,o.kg)("editor.button_input.style_options.outlined",t,"Outlined")},{value:"text",label:(0,o.kg)("editor.button_input.style_options.text",t,"Text Only")}]}renderGeneralTab(t,e,i,r){var l,a;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return n.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,o.kg)("editor.button_input.entity.title",d,"Entity Configuration"),(0,o.kg)("editor.button_input.entity.desc",d,"Link to a Home Assistant Input Button helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{r({entity:t}),this.triggerPreviewUpdate()},["input_button"],(0,o.kg)("editor.button_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,o.kg)("editor.button_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,o.kg)("editor.button_input.appearance.desc",d,"Configure the button label, icon, and style.")}
          </div>

          ${this.renderFieldSection((0,o.kg)("editor.button_input.button_label",d,"Button Label"),(0,o.kg)("editor.button_input.button_label_desc",d,"Text displayed on the button (uses entity name if empty)"),e,{button_label:s.button_label||""},[{name:"button_label",selector:{text:{}}}],t=>r(t.detail.value))}
          ${this.renderFieldSection((0,o.kg)("editor.button_input.button_icon",d,"Icon"),(0,o.kg)("editor.button_input.button_icon_desc",d,"Icon displayed on the button"),e,{button_icon:s.button_icon||""},[{name:"button_icon",selector:{icon:{}}}],t=>{r(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,o.kg)("editor.button_input.button_style",d,"Button Style"),(0,o.kg)("editor.button_input.button_style_desc",d,"Visual style of the button"),e,{button_style:s.button_style||"filled"},[this.selectField("button_style",this.getButtonStyleOptions(d))],t=>{r(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,o.kg)("editor.button_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,o.kg)("editor.button_input.font_size",d,"Font Size"),(0,o.kg)("editor.button_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,t=>r({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,o.kg)("editor.button_input.button_color",d,"Button Color")}
              .value=${s.button_color||"var(--primary-color)"}
              @color-changed=${t=>{r({button_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,o.kg)("editor.button_input.text_color",d,"Text Color")}
              .value=${s.text_color||"#ffffff"}
              @color-changed=${t=>r({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,n){return l.A.render(t,e,t=>n(t))}renderOtherTab(t,e,i,n){return a.X.render(t,e,t=>n(t))}getStyles(){return r.m.getSliderStyles()}renderPreview(t,e,i){var r,l,a,s,d;const u=t,p=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en";if(!(null===(l=u.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,o.kg)("editor.common.error_configure_entity",p,"Configure Entity"),(0,o.kg)("editor.button_input.error_configure_entity_desc",p,"Select an Input Button entity in the General tab"),"mdi:gesture-tap-button");const c=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[u.entity];if(!c)return this.renderGradientErrorState((0,o.kg)("editor.common.error_entity_not_found",p,"Entity Not Found"),`Entity "${u.entity}" is not available`,"mdi:alert-circle-outline");const b=u.design||{},_=null!==(s=u.font_size)&&void 0!==s?s:14,g=u.text_color||"#ffffff",y=u.button_color||"var(--primary-color)",h=u.button_style||"filled",v=u.button_label||(null===(d=c.attributes)||void 0===d?void 0:d.friendly_name)||"Press",f=u.button_icon||"",m=(this._buildContainerStyles(b),this.getHoverEffectClass(t)),$=this.buildStyleString(this.buildDesignStyles(t,e)),x=u.id;let k,S,w;return"outlined"===h?(k="transparent",S=`2px solid ${y}`,w=y):"text"===h?(k="transparent",S="none",w=y):(k=y,S="none",w=g),this.wrapWithAnimation(n.qy`
      <style>
        .btn-input-${x} {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          padding:12px 24px; border-radius:8px; cursor:pointer; font-size:${_}px;
          font-family:inherit; font-weight:500; transition:all .2s; position:relative;
          overflow:hidden; background:${k}; border:${S}; color:${w};
          width:100%; box-sizing:border-box; --mdc-icon-size:${Math.min(24,_+4)}px;
        }
        .btn-input-${x}:hover { opacity:.9; transform:translateY(-1px); box-shadow:0 2px 8px rgba(0,0,0,.15); }
        .btn-input-${x}:active { transform:translateY(0); opacity:.8; }
        .btn-input-${x} .ripple {
          position:absolute; border-radius:50%; background:rgba(255,255,255,.4);
          transform:scale(0); animation:btn-ripple-${x} .5s ease-out; pointer-events:none;
        }
        @keyframes btn-ripple-${x} { to { transform:scale(4); opacity:0; } }
      </style>
      <div class="${m}" style="${$}">
        <button class="btn-input-${x}" @click=${t=>{u.entity&&e&&e.callService("input_button","press",{entity_id:u.entity});const i=t.currentTarget,n=i.getBoundingClientRect(),o=t,r=document.createElement("span");r.className="ripple";const l=Math.max(n.width,n.height);r.style.cssText=`width:${l}px;height:${l}px;left:${o.clientX-n.left-l/2}px;top:${o.clientY-n.top-l/2}px;`,i.appendChild(r);const a=setTimeout(()=>r.remove(),500);this._rippleTimers.set(x,a)}}>
          ${f?n.qy`<ha-icon icon="${f}"></ha-icon>`:""}
          <span>${v}</span>
        </button>
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}}}]);
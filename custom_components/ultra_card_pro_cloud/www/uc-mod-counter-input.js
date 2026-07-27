"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[8225],{9959(t,e,n){n.d(e,{UltraCounterInputModule:()=>c});var i=n(5183),o=n(5096),r=n(3721),l=n(5147),a=n(8938);n(7921);class c extends r.m{constructor(){super(...arguments),this.metadata={type:"counter_input",title:"Counter Input",description:"Counter with increment, decrement, and reset linked to counter helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:counter",category:"input",tags:["counter","increment","decrement","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("counter_input"),type:"counter_input",show_label:!0,label:"",show_reset:!0,counter_style:"inline",font_size:24,text_color:"var(--primary-text-color)",button_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getCounterStyleOptions(t){return[{value:"inline",label:(0,o.kg)("editor.counter_input.style_options.inline",t,"Inline (- value +)")},{value:"stacked",label:(0,o.kg)("editor.counter_input.style_options.stacked",t,"Stacked (buttons below)")},{value:"compact",label:(0,o.kg)("editor.counter_input.style_options.compact",t,"Compact (small)")}]}renderGeneralTab(t,e,n,r){var l,a;const c=t,s=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,o.kg)("editor.counter_input.entity.title",s,"Entity Configuration"),(0,o.kg)("editor.counter_input.entity.desc",s,"Link to a Home Assistant counter helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,n,"entity",c.entity||"",t=>{r({entity:t}),this.triggerPreviewUpdate()},["counter"],(0,o.kg)("editor.counter_input.entity_field",s,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,o.kg)("editor.counter_input.appearance.title",s,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,o.kg)("editor.counter_input.appearance.desc",s,"Configure layout and display options.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,o.kg)("editor.counter_input.counter_style",s,"Layout Style"),(0,o.kg)("editor.counter_input.counter_style_desc",s,"How the counter and buttons are arranged"),e,{counter_style:c.counter_style||"inline"},[this.selectField("counter_style",this.getCounterStyleOptions(s))],t=>{r(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,o.kg)("editor.counter_input.label",s,"Label"),(0,o.kg)("editor.counter_input.label_desc",s,"Label displayed above the counter"),e,{label:c.label||""},[{name:"label",selector:{text:{}}}],t=>r(t.detail.value))}
          ${this.renderFieldSection((0,o.kg)("editor.counter_input.show_label",s,"Show Label"),(0,o.kg)("editor.counter_input.show_label_desc",s,"Display the label"),e,{show_label:!1!==c.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{r(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,o.kg)("editor.counter_input.show_reset",s,"Show Reset Button"),(0,o.kg)("editor.counter_input.show_reset_desc",s,"Display a reset button"),e,{show_reset:!1!==c.show_reset},[{name:"show_reset",selector:{boolean:{}}}],t=>{r(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,o.kg)("editor.counter_input.styling.title",s,"Styling")}</div>
          ${this.renderSliderField((0,o.kg)("editor.counter_input.font_size",s,"Value Font Size"),(0,o.kg)("editor.counter_input.font_size_desc",s,"Font size of the counter value"),null!==(a=c.font_size)&&void 0!==a?a:24,24,14,48,1,t=>r({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,o.kg)("editor.counter_input.button_color",s,"Button Color")}
              .value=${c.button_color||"var(--primary-color)"}
              @color-changed=${t=>{r({button_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,o.kg)("editor.counter_input.text_color",s,"Text Color")}
              .value=${c.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>r({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,n,i){return l.A.render(t,e,t=>i(t))}renderOtherTab(t,e,n,i){return a.X.render(t,e,t=>i(t))}getStyles(){return r.m.getSliderStyles()}renderPreview(t,e,n){var r,l,a,c,s,d;const u=t,p=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en";if(!(null===(l=u.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,o.kg)("editor.common.error_configure_entity",p,"Configure Entity"),(0,o.kg)("editor.counter_input.error_configure_entity_desc",p,"Select a counter entity in the General tab"),"mdi:counter");const g=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[u.entity];if(!g)return this.renderGradientErrorState((0,o.kg)("editor.common.error_entity_not_found",p,"Entity Not Found"),`Entity "${u.entity}" is not available`,"mdi:alert-circle-outline");const _=parseInt(g.state,10)||0,b=null!==(s=null===(c=g.attributes)||void 0===c?void 0:c.step)&&void 0!==s?s:1,y=u.design||{},v=null!==(d=u.font_size)&&void 0!==d?d:24,h=u.text_color||"var(--primary-text-color)",m=u.button_color||"var(--primary-color)",$=u.counter_style||"inline",x=!1!==u.show_label&&!!u.label,f=!1!==u.show_reset,k=(this._buildContainerStyles(y),this.getHoverEffectClass(t)),w=this.buildStyleString(this.buildDesignStyles(t,e)),S=u.id,C=()=>{u.entity&&e&&e.callService("counter","increment",{entity_id:u.entity})},z=()=>{u.entity&&e&&e.callService("counter","decrement",{entity_id:u.entity})},F=()=>{u.entity&&e&&e.callService("counter","reset",{entity_id:u.entity})},E="compact"===$?32:44,q="compact"===$?18:22;return this.wrapWithAnimation(i.qy`
      <style>
        .cnt-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:8px; padding-left:2px; }
        .cnt-btn-${S} {
          display:flex; align-items:center; justify-content:center; width:${E}px; height:${E}px;
          border-radius:50%; border:none; cursor:pointer; background:${m}; color:#fff;
          transition:all .15s; --mdc-icon-size:${q}px; flex-shrink:0;
        }
        .cnt-btn-${S}:hover { opacity:.85; transform:scale(1.05); }
        .cnt-btn-${S}:active { transform:scale(.95); }
        .cnt-btn-${S}.reset { background:transparent; color:var(--secondary-text-color); border:1px solid var(--divider-color); }
        .cnt-btn-${S}.reset:hover { color:${m}; border-color:${m}; }
        .cnt-value-${S} { font-size:${v}px; font-weight:700; color:${h}; font-variant-numeric:tabular-nums;
          min-width:${2*v}px; text-align:center; line-height:1; }
        .cnt-step { font-size:11px; color:var(--secondary-text-color); opacity:.6; }
        .cnt-inline-${S} { display:flex; align-items:center; justify-content:center; gap:${"compact"===$?"12px":"20px"}; }
        .cnt-stacked-${S} { display:flex; flex-direction:column; align-items:center; gap:12px; }
        .cnt-stacked-btns { display:flex; align-items:center; gap:12px; }
      </style>
      <div class="${k}" style="${w}">
        ${x?i.qy`<div class="cnt-label">${u.label}</div>`:""}
        ${"stacked"===$?i.qy`
          <div class="cnt-stacked-${S}">
            <div class="cnt-value-${S}">${_}</div>
            <div class="cnt-stacked-btns">
              <button class="cnt-btn-${S}" @click=${z}><ha-icon icon="mdi:minus"></ha-icon></button>
              ${f?i.qy`<button class="cnt-btn-${S} reset" @click=${F}><ha-icon icon="mdi:refresh"></ha-icon></button>`:""}
              <button class="cnt-btn-${S}" @click=${C}><ha-icon icon="mdi:plus"></ha-icon></button>
            </div>
          </div>
        `:i.qy`
          <div class="cnt-inline-${S}">
            <button class="cnt-btn-${S}" @click=${z}><ha-icon icon="mdi:minus"></ha-icon></button>
            <div style="display:flex;flex-direction:column;align-items:center;">
              <span class="cnt-value-${S}">${_}</span>
              ${1!==b?i.qy`<span class="cnt-step">step: ${b}</span>`:""}
            </div>
            <button class="cnt-btn-${S}" @click=${C}><ha-icon icon="mdi:plus"></ha-icon></button>
            ${f?i.qy`<button class="cnt-btn-${S} reset" @click=${F}><ha-icon icon="mdi:refresh"></ha-icon></button>`:""}
          </div>
        `}
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"4px 0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}}}]);
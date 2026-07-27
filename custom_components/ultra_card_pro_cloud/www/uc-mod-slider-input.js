"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[5654],{28(e,i,t){t.d(i,{UltraSliderInputModule:()=>s});var r=t(5183),o=t(5096),l=t(3721),a=t(5147),n=t(8938);t(7921);class s extends l.m{constructor(){super(...arguments),this._localValues=new Map,this._localValueTimers=new Map,this._draggingIds=new Set,this.metadata={type:"slider_input",title:"Slider Input",description:"Range slider linked to input_number helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:tune-variant",category:"input",tags:["slider","range","number","input","form","helper","interactive"]}}createDefault(e,i){return{id:e||this.generateId("slider_input"),type:"slider_input",show_label:!0,label:"",show_value:!0,show_min_max:!1,show_unit:!0,slider_height:8,slider_color:"var(--primary-color)",track_color:"var(--divider-color)",thumb_size:20,font_size:14,text_color:"var(--primary-text-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,i,t,l){var a,n,s,d;const u=e,c=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,o.kg)("editor.slider_input.entity.title",c,"Entity Configuration"),(0,o.kg)("editor.slider_input.entity.desc",c,"Link to a Home Assistant Input Number helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(i,t,"entity",u.entity||"",e=>{l({entity:e}),this.triggerPreviewUpdate()},["input_number","number"],(0,o.kg)("editor.slider_input.entity_field",c,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,o.kg)("editor.slider_input.display.title",c,"Display")}</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,o.kg)("editor.slider_input.display.desc",c,"Configure what information to show with the slider.")}
          </div>

          ${this.renderFieldSection((0,o.kg)("editor.slider_input.label",c,"Label"),(0,o.kg)("editor.slider_input.label_desc",c,"Label displayed above the slider"),i,{label:u.label||""},[{name:"label",selector:{text:{}}}],e=>l(e.detail.value))}

          ${this.renderFieldSection((0,o.kg)("editor.slider_input.show_label",c,"Show Label"),(0,o.kg)("editor.slider_input.show_label_desc",c,"Display the label"),i,{show_label:!1!==u.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,o.kg)("editor.slider_input.show_value",c,"Show Value"),(0,o.kg)("editor.slider_input.show_value_desc",c,"Display the current numeric value"),i,{show_value:!1!==u.show_value},[{name:"show_value",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,o.kg)("editor.slider_input.show_min_max",c,"Show Min/Max"),(0,o.kg)("editor.slider_input.show_min_max_desc",c,"Display min and max values at the ends"),i,{show_min_max:!0===u.show_min_max},[{name:"show_min_max",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,o.kg)("editor.slider_input.show_unit",c,"Show Unit"),(0,o.kg)("editor.slider_input.show_unit_desc",c,"Display the unit of measurement"),i,{show_unit:!1!==u.show_unit},[{name:"show_unit",selector:{boolean:{}}}],e=>{l(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,o.kg)("editor.slider_input.styling.title",c,"Styling")}</div>

          ${this.renderSliderField((0,o.kg)("editor.slider_input.slider_height",c,"Track Height"),(0,o.kg)("editor.slider_input.slider_height_desc",c,"Height of the slider track in pixels"),null!==(n=u.slider_height)&&void 0!==n?n:8,8,2,24,1,e=>{l({slider_height:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}

          ${this.renderSliderField((0,o.kg)("editor.slider_input.thumb_size",c,"Thumb Size"),(0,o.kg)("editor.slider_input.thumb_size_desc",c,"Size of the slider thumb in pixels"),null!==(s=u.thumb_size)&&void 0!==s?s:20,20,12,36,1,e=>{l({thumb_size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}

          ${this.renderSliderField((0,o.kg)("editor.slider_input.font_size",c,"Font Size"),(0,o.kg)("editor.slider_input.font_size_desc",c,"Font size of labels and value"),null!==(d=u.font_size)&&void 0!==d?d:14,14,10,28,1,e=>l({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,o.kg)("editor.slider_input.slider_color",c,"Slider Color")}
              .value=${u.slider_color||"var(--primary-color)"}
              @color-changed=${e=>{l({slider_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,o.kg)("editor.slider_input.track_color",c,"Track Color")}
              .value=${u.track_color||"var(--divider-color)"}
              @color-changed=${e=>{l({track_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,o.kg)("editor.slider_input.text_color",c,"Text Color")}
              .value=${u.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>l({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,i,t,r){return a.A.render(e,i,e=>r(e))}renderOtherTab(e,i,t,r){return n.X.render(e,i,e=>r(e))}getStyles(){return`${l.m.getSliderStyles()}`}renderPreview(e,i,t,l){var a,n,s,d,u,c,p,g,h,_,v,m,b;const $=e,y=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en";if(!(null===(n=$.entity)||void 0===n?void 0:n.trim()))return this.renderGradientErrorState((0,o.kg)("editor.common.error_configure_entity",y,"Configure Entity"),(0,o.kg)("editor.slider_input.error_configure_entity_desc",y,"Select an Input Number entity in the General tab"),"mdi:tune-variant");const x=null===(s=null==i?void 0:i.states)||void 0===s?void 0:s[$.entity];if(!x)return this.renderGradientErrorState((0,o.kg)("editor.common.error_entity_not_found",y,"Entity Not Found"),`Entity "${$.entity}" is not available`,"mdi:alert-circle-outline");const w=this._localValues.get($.id),k=void 0!==w?w:parseFloat(x.state)||0,f=null!==(u=null===(d=x.attributes)||void 0===d?void 0:d.min)&&void 0!==u?u:0,S=null!==(p=null===(c=x.attributes)||void 0===c?void 0:c.max)&&void 0!==p?p:100,z=null!==(h=null===(g=x.attributes)||void 0===g?void 0:g.step)&&void 0!==h?h:1,T=(null===(_=x.attributes)||void 0===_?void 0:_.unit_of_measurement)||"",F=$.design||{},C=null!==(v=$.font_size)&&void 0!==v?v:14,U=$.text_color||"var(--primary-text-color)",E=$.slider_color||"var(--primary-color)",P=$.track_color||"var(--divider-color)",I=null!==(m=$.slider_height)&&void 0!==m?m:8,V=null!==(b=$.thumb_size)&&void 0!==b?b:20,D=!1!==$.show_label&&!!$.label,N=!1!==$.show_value,q=!0===$.show_min_max,M=!1!==$.show_unit&&!!T,j=S>f?(k-f)/(S-f)*100:0,A=(this.buildContainerStyles(F),this.getHoverEffectClass(e)),L=this.buildStyleString(this.buildDesignStyles(e,i)),G=$.id,H=Number.isInteger(z)?k.toFixed(0):k.toFixed(1),O=$.id;return this.wrapWithAnimation(r.qy`
      <style>
        .si-container-${O} { width: 100%; }
        .si-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
        .si-label { font-size: ${C}px; font-weight: 500; color: ${U}; }
        .si-value { font-size: ${C}px; font-weight: 600; color: ${U}; }
        .si-track-wrap { position: relative; width: 100%; height: ${Math.max(V,I+8)}px;
          display: flex; align-items: center; }
        .si-range-${O} {
          -webkit-appearance: none; appearance: none; width: 100%; height: ${I}px;
          background: linear-gradient(to right, ${E} ${j}%, ${P} ${j}%);
          border-radius: ${I/2}px; outline: none; cursor: pointer; margin: 0;
        }
        .si-range-${O}::-webkit-slider-thumb {
          -webkit-appearance: none; width: ${V}px; height: ${V}px;
          border-radius: 50%; background: ${E}; cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,.3); border: 2px solid white;
          transition: transform .15s ease;
        }
        .si-range-${O}::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .si-range-${O}::-moz-range-thumb {
          width: ${V}px; height: ${V}px; border-radius: 50%;
          background: ${E}; cursor: pointer; border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,.3);
        }
        .si-range-${O}::-moz-range-track {
          height: ${I}px; background: ${P};
          border-radius: ${I/2}px; border: none;
        }
        .si-range-${O}::-moz-range-progress {
          height: ${I}px; background: ${E};
          border-radius: ${I/2}px;
        }
        .si-minmax { display: flex; justify-content: space-between; margin-top: 4px;
          font-size: ${Math.max(10,C-2)}px; color: var(--secondary-text-color); opacity: .7; }
      </style>
      <div class="si-container-${O} ${A}" style="${L}">
        ${D||N?r.qy`
          <div class="si-header">
            ${D?r.qy`<span class="si-label">${$.label}</span>`:r.qy`<span></span>`}
            ${N?r.qy`<span class="si-value">${H}${M?` ${T}`:""}</span>`:""}
          </div>
        `:""}
        <div class="si-track-wrap">
          <input class="si-range-${O}" type="range"
            min=${f} max=${S} step=${z} .value=${String(k)}
            @input=${e=>{const i=e.target,t=parseFloat(i.value);isNaN(t)||(this._localValues.set(G,t),this._draggingIds.add(G))}} @change=${e=>{const t=e.target,r=parseFloat(t.value);if(isNaN(r))return;this._draggingIds.delete(G),this._localValues.set(G,r);const o=this._localValueTimers.get(G);o&&clearTimeout(o),this.callEntityService($.entity,r,i),this._localValueTimers.set(G,setTimeout(()=>{this._localValues.delete(G)},1e3))}} />
        </div>
        ${q?r.qy`
          <div class="si-minmax">
            <span>${f}${M?` ${T}`:""}</span>
            <span>${S}${M?` ${T}`:""}</span>
          </div>
        `:""}
      </div>
    `,e,i)}async callEntityService(e,i,t){if(!e||!t)return;const r=e.split(".")[0];try{await t.callService(r,"set_value",{entity_id:e,value:i})}catch(i){console.error(`[SliderInput] Failed to set value for ${e}:`,i)}}buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"4px 0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}styleObjectToCss(e){return Object.entries(e).map(([e,i])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${i}`).join("; ")}}}}]);
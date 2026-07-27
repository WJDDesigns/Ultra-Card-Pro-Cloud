"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[9333],{9011(e,i,t){t.d(i,{UltraSliderModule:()=>b});var n=t(5183),o=t(8791),a=t(3721),r=t(9957),l=t(8414),s=t(8938),d=t(5096),p=t(230),c=t(5064),u=t(3580),g=t(2034),h=t(378),v=(t(7921),t(1236)),m=t(1708);t(1583),t(3535),t(6709),t(7047),t(1547),v.A.use([m.Vx,m.dK,m.Ij,m.s3,m.FJ,m._R,m.Ze]);class w{static getInstance(e){return this.instances.get(e)}static setInstance(e,i){this.instances.set(e,i)}static destroyInstance(e){const i=this.instances.get(e);if(i){try{const e=i.el;e&&e._swiperResizeObserver&&(e._swiperResizeObserver.disconnect(),delete e._swiperResizeObserver),i.destroy(!0,!0)}catch(e){}this.instances.delete(e)}"undefined"!=typeof window&&delete window[`initSwiper_${e}`]}static cleanup(e){this.destroyInstance(e)}}w.instances=new Map;class b extends a.m{constructor(){super(...arguments),this.metadata={type:"slider",title:"Slider Layout",description:"Create interactive slideshows with multiple pages of modules",author:"WJD Designs",version:"1.0.0",icon:"mdi:view-carousel",category:"layout",tags:["layout","slider","carousel","slideshow","pages","swipe"]}}createDefault(e,i){const t=(0,l.oD)().getModule("pagebreak"),n=(null==t?void 0:t.createDefault(this.generateId("pagebreak"),i))||{id:this.generateId("pagebreak"),type:"pagebreak",display_mode:"always",display_conditions:[]};return{id:e||this.generateId("slider"),type:"slider",modules:[n],show_pagination:!0,pagination_style:"dots",pagination_position:void 0,pagination_color:"var(--primary-text-color)",pagination_active_color:"var(--primary-color)",pagination_size:12,pagination_overlay:!1,show_arrows:!0,arrow_position_offset:0,arrow_style:"circle",arrow_size:40,arrow_color:"var(--primary-text-color)",arrow_background_color:"rgba(0, 0, 0, 0.3)",prev_arrow_icon:"mdi:chevron-left",next_arrow_icon:"mdi:chevron-right",arrows_always_visible:!1,transition_effect:"slide",transition_speed:300,slider_direction:"horizontal",centered_slides:!0,auto_play:!1,auto_play_delay:3e3,pause_on_hover:!0,loop:!0,allow_swipe:!0,allow_keyboard:!0,allow_mousewheel:!1,auto_height:!0,slider_height:300,slider_width:"100%",gap:0,slides_per_view:1,space_between:0,vertical_alignment:"top",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,i,t,o){var a,r,l,s,p,c,u,g,h,v,m;const w=e,b=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en",y=w.modules.filter(e=>"pagebreak"===e.type).length+1,_=w.modules.filter(e=>"pagebreak"!==e.type).length;return n.qy`
      <div class="slider-general-tab">
        ${this.injectUcFormStyles()}
        <style>
          .slider-general-tab {
            padding: 8px;
          }
          .inline-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
            padding-bottom: 0;
            border-bottom: none;
          }
          .inline-toggle .section-title {
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--primary-color);
            letter-spacing: 0.5px;
            margin-bottom: 0;
          }
          .preview-note {
            background: var(--info-color, #2196f3);
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 24px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 14px;
            line-height: 1.5;
          }
          .preview-note ha-icon {
            flex-shrink: 0;
            margin-top: 2px;
          }
        </style>

        <!-- Preview Note -->
        <div class="preview-note">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div>
            <strong>Note:</strong> Slider transitions may not appear in the Home Assistant
            Configuration Preview Window. To see transitions, check the
            <strong>Live Preview</strong> popup in the editor or view the card on your dashboard.
          </div>
        </div>

        <!-- SLIDER LAYOUT -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_layout",b,"SLIDER LAYOUT")}
          </div>

          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8;"
          >
            ${(0,d.kg)("editor.slider.pages_label",b,"Pages")}: ${y} &middot;
            ${(0,d.kg)("editor.slider.modules_label",b,"Modules")}: ${_}
          </div>

          ${this.renderFieldSection("Layout Direction","Horizontal or vertical slider orientation",i,{slider_direction:w.slider_direction||"horizontal"},[this.selectField("slider_direction",[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}])],e=>{const i=e.detail.value.slider_direction,t={slider_direction:i},n=w.pagination_position;"vertical"===i?"top"===n||"bottom"===n?t.pagination_position="right":n||(t.pagination_position="right"):"left"===n||"right"===n?t.pagination_position="bottom":n||(t.pagination_position="bottom"),"vertical"===i?(w.prev_arrow_icon&&"mdi:chevron-left"!==w.prev_arrow_icon||(t.prev_arrow_icon="mdi:chevron-up"),w.next_arrow_icon&&"mdi:chevron-right"!==w.next_arrow_icon||(t.next_arrow_icon="mdi:chevron-down")):(w.prev_arrow_icon&&"mdi:chevron-up"!==w.prev_arrow_icon||(t.prev_arrow_icon="mdi:chevron-left"),w.next_arrow_icon&&"mdi:chevron-down"!==w.next_arrow_icon||(t.next_arrow_icon="mdi:chevron-right")),o(t)})}

          ${(w.slides_per_view||1)>1?n.qy`
                ${this.renderFieldSection("Center Slider","Center active slide in the viewport (only available when Slides Per View > 1)",i,{centered_slides:null===(r=w.centered_slides)||void 0===r||r},[this.booleanField("centered_slides")],e=>o({centered_slides:e.detail.value.centered_slides}))}
              `:""}

          <div style="margin-bottom: 16px;">
            <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
              Slider Width
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
            >
              Width of the slider container (e.g., 100%, 400px)
            </div>
            <ha-textfield
              .value=${w.slider_width||"100%"}
              placeholder="100%"
              @input=${e=>{var i;const t=e.target,n=(null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector("input"))||t,a=t.value,r=n.selectionStart,l=n.selectionEnd;o({slider_width:a}),requestAnimationFrame(()=>{n&&"number"==typeof r&&(t.value=a,n.value=a,n.setSelectionRange(r,l||r))}),setTimeout(()=>{n&&"number"==typeof r&&(t.value=a,n.value=a,n.setSelectionRange(r,l||r))},0),setTimeout(()=>{n&&"number"==typeof r&&(t.value=a,n.value=a,n.setSelectionRange(r,l||r))},10)}}
              style="width: 100%; --mdc-theme-primary: var(--primary-color);"
            ></ha-textfield>
          </div>

          ${"vertical"!==w.slider_direction?this.renderFieldSection("Auto Height","Automatically adjust slider height to fit content on each page",i,{auto_height:null===(l=w.auto_height)||void 0===l||l},[this.booleanField("auto_height")],e=>o({auto_height:e.detail.value.auto_height})):n.qy`
                <div style="margin-bottom: 16px; opacity: 0.6;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                  >
                    ${(0,d.kg)("editor.slider.auto_height",b,"Auto Height")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; opacity: 0.8; line-height: 1.4;"
                  >
                    ${(0,d.kg)("editor.slider.auto_height_vertical_note",b,"Not available for vertical sliders. Vertical sliders scroll within the fixed Slider Height set below.")}
                  </div>
                </div>
              `}

          ${"vertical"===w.slider_direction||null!==(s=w.auto_height)&&void 0!==s&&!s?this.renderSliderField("Slider Height","Fixed height for the slider in pixels",w.slider_height||("vertical"===w.slider_direction?400:300),"vertical"===w.slider_direction?400:300,50,1e3,10,e=>o({slider_height:e}),"px"):""}
          ${this.renderSliderField("Slides Per View","Number of slides visible at once",w.slides_per_view||1,1,1,10,1,e=>o({slides_per_view:e}),"")}
          ${this.renderSliderField("Space Between","Space between slides in pixels",w.space_between||0,0,0,100,5,e=>o({space_between:e}),"px")}
          ${this.renderSliderField((0,d.kg)("editor.slider.gap",b,"Gap"),(0,d.kg)("editor.slider.gap_desc",b,"Fallback spacing between slides in pixels, used when Space Between is 0"),w.gap||0,0,0,100,5,e=>o({gap:e}),"px")}
          ${(w.slides_per_view||1)>1?this.renderFieldSection("Vertical Alignment","Vertical alignment of content within slides",i,{vertical_alignment:w.vertical_alignment||"top"},[this.selectField("vertical_alignment",[{value:"top",label:"Top"},{value:"center",label:"Center"},{value:"bottom",label:"Bottom"},{value:"stretch",label:"Stretch"}])],e=>o({vertical_alignment:e.detail.value.vertical_alignment})):""}
        </div>

        <!-- PAGINATION -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div class="inline-toggle">
            <div class="section-title">
              ${(0,d.kg)("editor.slider.section_pagination",b,"PAGINATION")}
            </div>
          </div>
          ${this.renderFieldSection("Enable Pagination","",i,{show_pagination:null===(p=w.show_pagination)||void 0===p||p},[this.booleanField("show_pagination")],e=>o({show_pagination:e.detail.value.show_pagination}))}

          ${w.show_pagination?n.qy`
                ${this.renderFieldSection("Pagination Style","How pagination indicators are displayed",i,{pagination_style:w.pagination_style||"dots"},[this.selectField("pagination_style",[{value:"dots",label:"Dots"},{value:"dots-and-dash",label:"Dots and Dash"},{value:"dash-lines",label:"Dash Lines"},{value:"numbers",label:"Numbers"},{value:"fraction",label:"Fraction (1/5)"},{value:"progressbar",label:"Progress"},{value:"scrollbar",label:"Scrollbar"},{value:"dynamic",label:"Dynamic"}])],e=>o({pagination_style:e.detail.value.pagination_style}))}
                ${this.renderFieldSection("Pagination Overlay","When enabled, pagination overlays content. When disabled, pagination gets its own space.",i,{pagination_overlay:null!==(c=w.pagination_overlay)&&void 0!==c&&c},[this.booleanField("pagination_overlay")],e=>o({pagination_overlay:e.detail.value.pagination_overlay}))}
                ${this.renderFieldSection("Pagination Position","Where to show pagination indicators",i,{pagination_position:w.pagination_position||("vertical"===w.slider_direction?"right":"bottom")},[this.selectField("pagination_position",[..."vertical"===w.slider_direction?[{value:"left",label:"Left"},{value:"right",label:"Right"}]:[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"}]])],e=>o({pagination_position:e.detail.value.pagination_position}))}
                ${this.renderSliderField("Pagination Size","Size of pagination indicators in pixels",w.pagination_size||12,12,6,30,1,e=>o({pagination_size:e}),"px")}
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Pagination Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of inactive pagination indicators
                  </div>
                  <ultra-color-picker
                    .label=${"Pagination Color"}
                    .value=${w.pagination_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${i}
                    @value-changed=${e=>o({pagination_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Active Pagination Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the active pagination indicator
                  </div>
                  <ultra-color-picker
                    .label=${"Active Pagination Color"}
                    .value=${w.pagination_active_color||"var(--primary-color)"}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${i}
                    @value-changed=${e=>o({pagination_active_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- NAVIGATION ARROWS -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div class="inline-toggle">
            <div class="section-title">
              ${(0,d.kg)("editor.slider.section_arrows",b,"NAVIGATION ARROWS")}
            </div>
          </div>
          ${this.renderFieldSection("Show Arrows","",i,{show_arrows:null===(u=w.show_arrows)||void 0===u||u},[this.booleanField("show_arrows")],e=>o({show_arrows:e.detail.value.show_arrows}))}

          ${w.show_arrows?n.qy`
                ${this.renderFieldSection("Arrows Always Visible","Keep arrows visible (otherwise show on hover)",i,{arrows_always_visible:w.arrows_always_visible||!1},[this.booleanField("arrows_always_visible")],e=>o({arrows_always_visible:e.detail.value.arrows_always_visible}))}
                ${this.renderSliderField("Arrow Position Offset","Offset arrows position: positive = more inside, negative = more outside (in pixels)",w.arrow_position_offset||0,0,-100,100,5,e=>o({arrow_position_offset:e}),"px")}
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Arrow Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the arrow icons
                  </div>
                  <ultra-color-picker
                    .label=${"Arrow Color"}
                    .value=${w.arrow_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${i}
                    @value-changed=${e=>o({arrow_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Arrow Background Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Background color of the arrow buttons (not used for minimal style)
                  </div>
                  <ultra-color-picker
                    .label=${"Arrow Background Color"}
                    .value=${w.arrow_background_color||"rgba(0, 0, 0, 0.3)"}
                    .defaultValue=${"rgba(0, 0, 0, 0.3)"}
                    .hass=${i}
                    @value-changed=${e=>o({arrow_background_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
                ${this.renderFieldSection("Arrow Style","Visual style of the arrows",i,{arrow_style:w.arrow_style||"circle"},[this.selectField("arrow_style",[{value:"default",label:"Default"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"minimal",label:"Minimal"}])],e=>o({arrow_style:e.detail.value.arrow_style}))}
                ${this.renderSliderField("Arrow Size","Size of navigation arrows in pixels",w.arrow_size||40,40,20,80,5,e=>o({arrow_size:e}),"px")}
                ${this.renderFieldSection("Previous Arrow Icon","Icon for the previous arrow",i,{prev_arrow_icon:w.prev_arrow_icon||("vertical"===w.slider_direction?"mdi:chevron-up":"mdi:chevron-left")},[this.iconField("prev_arrow_icon")],e=>o({prev_arrow_icon:e.detail.value.prev_arrow_icon}))}
                ${this.renderFieldSection("Next Arrow Icon","Icon for the next arrow",i,{next_arrow_icon:w.next_arrow_icon||("vertical"===w.slider_direction?"mdi:chevron-down":"mdi:chevron-right")},[this.iconField("next_arrow_icon")],e=>o({next_arrow_icon:e.detail.value.next_arrow_icon}))}
              `:""}
        </div>

        <!-- TRANSITION & ANIMATION -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_transition",b,"TRANSITION & ANIMATION")}
          </div>

          ${this.renderFieldSection("Transition Effect","Animation style between slides",i,{transition_effect:w.transition_effect||"slide"},[this.selectField("transition_effect",[{value:"slide",label:"Slide"},{value:"fade",label:"Fade"}])],e=>o({transition_effect:e.detail.value.transition_effect}))}
          ${this.renderSliderField("Transition Speed","Transition duration in milliseconds",w.transition_speed||300,300,100,2e3,50,e=>o({transition_speed:e}),"ms")}
        </div>

        <!-- AUTO-PLAY -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div class="inline-toggle">
            <div class="section-title">
              ${(0,d.kg)("editor.slider.section_autoplay",b,"AUTO-PLAY")}
            </div>
          </div>
          ${this.renderFieldSection("Enable Auto-play","",i,{auto_play:w.auto_play||!1},[this.booleanField("auto_play")],e=>o({auto_play:e.detail.value.auto_play}))}

          ${w.auto_play?n.qy`
                ${this.renderSliderField("Auto-play Delay","Time between slides in milliseconds",w.auto_play_delay||3e3,3e3,1e3,1e4,500,e=>o({auto_play_delay:e}),"ms")}
                ${this.renderFieldSection("Pause on Hover","Pause auto-play when hovering over slider",i,{pause_on_hover:null===(g=w.pause_on_hover)||void 0===g||g},[this.booleanField("pause_on_hover")],e=>o({pause_on_hover:e.detail.value.pause_on_hover}))}
              `:""}
          ${this.renderFieldSection("Loop","Return to first slide after the last",i,{loop:null===(h=w.loop)||void 0===h||h},[this.booleanField("loop")],e=>o({loop:e.detail.value.loop}))}
        </div>

        <!-- INTERACTION -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_interaction",b,"INTERACTION")}
          </div>

          ${this.renderFieldSection("Allow Swipe","Enable touch/swipe gestures",i,{allow_swipe:null===(v=w.allow_swipe)||void 0===v||v},[this.booleanField("allow_swipe")],e=>o({allow_swipe:e.detail.value.allow_swipe}))}
          ${this.renderFieldSection("Allow Keyboard","Navigate with arrow keys",i,{allow_keyboard:null===(m=w.allow_keyboard)||void 0===m||m},[this.booleanField("allow_keyboard")],e=>o({allow_keyboard:e.detail.value.allow_keyboard}))}
          ${this.renderFieldSection("Allow Mousewheel","Navigate with mouse wheel",i,{allow_mousewheel:w.allow_mousewheel||!1},[this.booleanField("allow_mousewheel")],e=>o({allow_mousewheel:e.detail.value.allow_mousewheel}))}
        </div>

      </div>
    `}renderLogicTab(e,i,t,n){return s.X.render(e,i,n)}renderActionsTab(e,i,t,o){var a;const l=e,s=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en";return n.qy`
      <div class="actions-tab">
        ${this.injectUcFormStyles()}
        <style>
          .actions-tab {
            padding: 8px;
          }
        </style>

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_link_config",s,"LINK CONFIGURATION")}
          </div>

          ${r.K.render(i,{tap_action:l.tap_action||{action:"nothing"},hold_action:l.hold_action||{action:"nothing"},double_tap_action:l.double_tap_action||{action:"nothing"}},e=>{const i={};e.tap_action&&(i.tap_action=e.tap_action),e.hold_action&&(i.hold_action=e.hold_action),e.double_tap_action&&(i.double_tap_action=e.double_tap_action),o(i)},"Link Configuration")}
        </div>
      </div>
    `}renderSplitPreview(e,i){return this.renderPreview(e,i,{type:"ultra-card",layout:{rows:[]}},"live")}renderPreview(e,i,t,a){var r,s,d,m,b,y,_,f,x,$,S,z,k,A,F,I,C,E;const T=e,L=(0,l.oD)(),P=u.I.getEffectiveDesign(T.design,u.I.getCurrentBreakpoint()),q=T,N=[];let D=[];for(const e of T.modules)"pagebreak"!==e.type?D.push(e):D.length>0&&(N.push([...D]),D=[]);if(D.length>0?N.push([...D]):0===N.length&&N.push([]),0===N.length||1===N.length&&0===N[0].length)return n.qy`
        <div style="padding: 40px 20px; text-align: center; color: var(--secondary-text-color);">
          <ha-icon
            icon="mdi:view-carousel"
            style="font-size: 48px; opacity: 0.3; margin-bottom: 16px;"
          ></ha-icon>
          <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">Slider is empty</div>
          <div style="font-size: 14px; opacity: 0.8;">
            Drag modules here to add content.<br />
            Use <strong>Page Break</strong> modules to separate slides.
          </div>
        </div>
      `;if("live"===a&&!N.some(e=>e.length>0))return n.qy`
          <div style="padding: 40px 20px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon
              icon="mdi:view-carousel"
              style="font-size: 48px; opacity: 0.3; margin-bottom: 16px;"
            ></ha-icon>
            <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">
              No content in slider
            </div>
            <div style="font-size: 14px; opacity: 0.8;">
              Add modules to the slider to see content here.
            </div>
          </div>
        `;const R=T.id,W=`swiper-${R.replace(/[^a-zA-Z0-9]/g,"-")}`;"undefined"!=typeof window&&(window[`initSwiper_${R}`]=e=>{const i=e.getAttribute("data-preview-context")||"dashboard",t=w.getInstance(R),n=e.swiper,o=e.getAttribute("data-swiper-init-context")||null;if((t||n)&&!(null==n?void 0:n.destroyed))if(o&&o!==i)t&&w.destroyInstance(R),n&&(n.destroy(!0,!0),delete e.swiper),e.removeAttribute("data-swiper-initialized"),e.removeAttribute("data-swiper-init-context");else if(o===i)return;if(e._swiperInitializing)return;e._swiperInitializing=!0,e.setAttribute("data-preview-context",i);const a="live"===i||"ha-preview"===i,r=a?100:0,l=a?10:2;let s=0;const d=()=>{var t,n,o,a,p,c,u,g,h;const m=e.closest(".ultra-slider-container"),b=`.swiper-pagination[data-slider-id="${R}"]`,y=`.swiper-scrollbar[data-slider-id="${R}"]`,_=null==m?void 0:m.querySelector(b),f=null==m?void 0:m.querySelector(y),x=e.querySelector(".swiper-button-next"),$=e.querySelector(".swiper-button-prev"),S=e.querySelectorAll(".swiper-slide").length,z=e;let k=z.offsetWidth;const A=z.offsetHeight;if(k>2e3&&"live"===i){if(m){const e=m.offsetWidth;if(e>0&&e<2e3)k=e;else{const e=parseInt(getComputedStyle(z).width)||0;k=e>0&&e<2e3?e:Math.min(window.innerWidth,800)}}else k=Math.min(window.innerWidth,800);z.style.maxWidth=`${k}px`,z.style.width=`${k}px`,m&&(m.style.maxWidth=`${k}px`)}if(0===S)return s++,s<l?void setTimeout(d,r*s):(console.error("[Slider] No slides found after retries:",R),e.removeAttribute("data-swiper-initialized"),void delete e._swiperInitializing);if(0===k||!X&&0===A){if(s++,s<l)return void setTimeout(d,r*s);console.warn("[Slider] Container has no dimensions after retries, initializing anyway:",R,{containerWidth:k,containerHeight:A,isVertical:X})}try{const r=this.mapConfigToSwiper(T,N.length,R);r.pagination&&_&&(r.pagination.el=_),r.scrollbar&&f&&(r.scrollbar.el=f),r.navigation&&x&&$&&(r.navigation.nextEl=x,r.navigation.prevEl=$);const l=new v.A(e,r);w.setInstance(R,l);const s=()=>{if(!l||l.destroyed||l.animating)return;const e=l,i=e.touchEventsData,t=Boolean(e.isTouched||(null==i?void 0:i.isTouched)),n=Boolean(e.isMoved||(null==i?void 0:i.isMoved));if(!t||!n)return;const o=e.slideToClosest;"function"==typeof o?o.call(e,l.params.speed,!0,!1):l.slideTo(l.activeIndex,l.params.speed)},d=()=>{requestAnimationFrame(()=>s())},y=()=>{window.removeEventListener("pointerup",d,!0),window.removeEventListener("pointercancel",d,!0),window.removeEventListener("touchend",d,!0),window.removeEventListener("touchcancel",d,!0)};window.addEventListener("pointerup",d,!0),window.addEventListener("pointercancel",d,!0),window.addEventListener("touchend",d,!0),window.addEventListener("touchcancel",d,!0),e.setAttribute("data-swiper-init-context",i);let S=k;if("live"===i){const i=e.offsetWidth;if(i>2e3){const i=null===(t=e.parentElement)||void 0===t?void 0:t.closest(".ultra-slider-container");if(i){const t=i.offsetWidth;if(t>0&&t<2e3)S=t;else{const i=parseInt(getComputedStyle(e).width)||0;S=i>0&&i<2e3?i:k>0&&k<2e3?k:Math.min(window.innerWidth,800)}}else S=k>0&&k<2e3?k:Math.min(window.innerWidth,800);e.style.maxWidth=`${S}px`,e.style.width=`${S}px`;const o=null===(n=e.parentElement)||void 0===n?void 0:n.closest(".ultra-slider-container");o&&(o.style.maxWidth=`${S}px`)}else S=i}(l.params.loop||l.params.rewind)&&(l.allowSlideNext=!0,l.allowSlidePrev=!0,l.on("navigationHide",()=>{l.allowSlideNext=!0,l.allowSlidePrev=!0,l.navigation&&l.navigation.update()}),l.on("reachEnd",()=>{l.allowSlideNext=!0,l.navigation&&l.navigation.update()}),l.on("reachBeginning",()=>{l.allowSlidePrev=!0,l.navigation&&l.navigation.update()})),l.updateSize(),l.updateSlides();const z=e.offsetWidth;"live"===i&&z>2e3&&(e.style.maxWidth=`${S}px`,e.style.width=`${S}px`,l.updateSize(),l.updateSlides()),S>0&&!X&&l.slides.forEach(e=>{e.offsetWidth>S&&(e.style.maxWidth=`${S}px`,e.style.width=`${S}px`)});const A=l.wrapperEl;A&&(A.style.transitionDuration=`${l.params.speed}ms`,A.style.transitionTimingFunction="ease",A.style.transitionProperty="transform"),l.slides.length,e.offsetWidth,null===(o=l.wrapperEl)||void 0===o||o.offsetWidth,getComputedStyle(l.wrapperEl).transform,getComputedStyle(l.wrapperEl).transition,getComputedStyle(l.wrapperEl).transitionDuration,l.wrapperEl.style.transition,l.getTranslate(),l.params.speed,Array.from(l.slides).slice(0,3).map((e,i)=>({index:i,width:e.offsetWidth,inlineWidth:e.style.width,computedWidth:getComputedStyle(e).width,transform:getComputedStyle(e).transform,isVisible:e.offsetWidth>0&&e.offsetHeight>0})),l.updateProgress(),null===(p=null===(a=l.pagination)||void 0===a?void 0:a.render)||void 0===p||p.call(a),null===(u=null===(c=l.pagination)||void 0===c?void 0:c.update)||void 0===u||u.call(c),null===(h=null===(g=l.navigation)||void 0===g?void 0:g.update)||void 0===h||h.call(g),l.update();const F=()=>{if("dynamic"!==T.pagination_style)return;const e=l.slides.length,i=l.activeIndex,t=null==m?void 0:m.querySelector(b);if(!t)return;const n=Array.from(t.querySelectorAll(".swiper-pagination-bullet"));let o=0,a=e-1;e<=3?(o=0,a=e-1):0===i?(o=0,a=2):1===i?(o=0,a=3):i===e-1?(o=Math.max(0,e-3),a=e-1):i===e-2?(o=Math.max(0,e-4),a=e-1):(o=Math.max(0,i-2),a=Math.min(e-1,i+2)),n.forEach((e,t)=>{const n=t>=o&&t<=a,r=Math.abs(t-i);n?(e.style.display="",e.classList.remove("swiper-pagination-bullet-active-main","swiper-pagination-bullet-active-prev","swiper-pagination-bullet-active-next","swiper-pagination-bullet-active-prev-prev","swiper-pagination-bullet-active-next-next"),0===r?(e.classList.add("swiper-pagination-bullet-active"),e.classList.add("swiper-pagination-bullet-active-main"),e.style.transform="scale(1.3)",e.style.opacity="1"):(e.classList.remove("swiper-pagination-bullet-active"),1===r?(t<i?e.classList.add("swiper-pagination-bullet-active-prev"):e.classList.add("swiper-pagination-bullet-active-next"),e.style.transform="scale(1)",e.style.opacity="0.7"):2===r?(t<i?e.classList.add("swiper-pagination-bullet-active-prev-prev"):e.classList.add("swiper-pagination-bullet-active-next-next"),e.style.transform="scale(0.6)",e.style.opacity="0.4"):(e.style.transform="scale(0.6)",e.style.opacity="0.4"))):e.style.display="none"})};"dynamic"===T.pagination_style&&setTimeout(()=>{F()},100);let I=!1;const C=()=>{var e;if(!l||l.destroyed||I)return;I=!0;const i=l.slides[l.activeIndex];if(!i)return void(I=!1);const t=i.querySelector(".slide-content");if(!t)return void(I=!1);const n=X&&t.offsetHeight||t.scrollHeight,o=l.wrapperEl,a=l.el;null===(e=T.auto_height)||void 0===e||e?(o&&(o.style.height=`${n}px`,o.style.transitionDuration=`${l.params.speed}ms`,o.style.transitionTimingFunction="ease",o.style.transitionProperty="transform"),a&&(a.style.transition="height 0.3s ease",a.style.height=`${n}px`),l.slides.forEach(e=>{e.style.height="auto",e.style.minHeight="0",X&&(e.style.width="100%",e.style.position="relative")}),I=!1):I=!1};let E=l.activeIndex;l.on("slideChange",()=>{var e;const i=l.activeIndex!==E;E=l.activeIndex,l.params.loop||l.params.rewind||($&&$.classList.toggle("swiper-button-disabled",l.isBeginning),x&&x.classList.toggle("swiper-button-disabled",l.isEnd));const t="fade"===(T.transition_effect||"slide");null!==(e=T.auto_height)&&void 0!==e&&!e||t||!i||requestAnimationFrame(()=>{requestAnimationFrame(()=>{C()})}),i&&"dynamic"===T.pagination_style&&F(),i&&window.dispatchEvent(new CustomEvent("slider-state-changed",{bubbles:!0,composed:!0,detail:{sliderId:R,index:l.activeIndex}}))}),l.on("destroy",()=>{y()});const L=()=>{var e,i;if(!l||l.destroyed)return;const t="fade"===(T.transition_effect||"slide"),n=l.slides[l.activeIndex];if(!n)return;const o=n.querySelector(".slide-content");if(!o)return;const a=X&&o.offsetHeight||o.scrollHeight,r=l.wrapperEl,s=l.el;if(null!==(e=T.auto_height)&&void 0!==e&&!e||t){if(r&&(null!==(i=T.auto_height)&&void 0!==i&&!i||t)&&T.slider_height){const e=T.slider_height||300;r.style.height=`${e}px`,s&&(s.style.height=`${e}px`)}}else r&&(r.style.height=`${a}px`,r.style.transitionDuration=`${l.params.speed}ms`,r.style.transitionTimingFunction="ease",r.style.transitionProperty="transform"),s&&(s.style.transition="height 0.3s ease",s.style.height=`${a}px`),l.slides.forEach(e=>{e.style.height="auto",e.style.minHeight="0",X&&(e.style.width="100%",e.style.position="relative")});l.params.loop||l.params.rewind||($&&$.classList.toggle("swiper-button-disabled",l.isBeginning),x&&x.classList.toggle("swiper-button-disabled",l.isEnd))};requestAnimationFrame(()=>{requestAnimationFrame(()=>{l&&!l.destroyed&&(l.updateSize(),l.updateSlides(),l.updateSlidesClasses(),l.slides.forEach(e=>{"slide"!==le&&"slide-left"!==le&&"slide-right"!==le||(X?e.style.height="":e.style.width="")}),l.update(),l.setTranslate(l.getTranslate()),L(),"live"===i&&requestAnimationFrame(()=>{l&&!l.destroyed&&(l.updateSize(),l.updateSlides(),l.updateSlidesClasses(),l.update())}),setTimeout(()=>{l&&!l.destroyed&&(L(),"live"===i&&(l.updateSize(),l.updateSlides(),l.update()))},"live"===i?200:100))})});const P="fade"===(T.transition_effect||"slide");let q=null;const D=new ResizeObserver(()=>{var e;!l||l.destroyed||null!==(e=T.auto_height)&&void 0!==e&&!e||P||(null!==q&&clearTimeout(q),q=window.setTimeout(()=>{requestAnimationFrame(()=>{if(l&&!l.destroyed){const e=l.slides[l.activeIndex],i=null==e?void 0:e.querySelector(".slide-content");if(i){const e="vertical"===T.slider_direction&&i.offsetHeight||i.scrollHeight,t=l.wrapperEl,n=l.el;t&&(t.style.height=`${e}px`,t.style.transitionDuration=`${l.params.speed}ms`,t.style.transitionTimingFunction="ease",t.style.transitionProperty="transform"),n&&(n.style.height=`${e}px`),l.slides.forEach(e=>{e.style.height="auto",e.style.minHeight="0"})}}})},100))});e.querySelectorAll(".slide-content").forEach(e=>{D.observe(e)}),e._swiperResizeObserver=D,delete e._swiperInitializing}catch(i){console.error("[Slider] Error initializing:",i),e.removeAttribute("data-swiper-initialized"),delete e._swiperInitializing}};a?setTimeout(d,r):requestAnimationFrame(()=>requestAnimationFrame(d))});const O=T.slides_per_view||1,H=T.vertical_alignment||"top",M=T.arrow_size||40,j=T.arrow_style||"default",V=T.arrow_position_offset||0,B=T.arrows_always_visible||!1,Y="minimal"===j?`\n        width: ${M}px;\n        height: ${M}px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n        background: transparent !important;\n        transition: all 0.3s;\n        color: ${T.arrow_color||"white"};\n        opacity: ${B?"1":"0"};\n      `:"default"===j?`\n        width: ${M}px;\n        height: ${M}px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n        transition: all 0.3s;\n        opacity: ${B?"1":"0"};\n      `:`\n        width: ${M}px;\n        height: ${M}px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n        transition: all 0.3s;\n        background: ${T.arrow_background_color||"rgba(0, 0, 0, 0.5)"};\n        color: ${T.arrow_color||"white"};\n        border: ${"square"===j?"2px solid "+(T.arrow_color||"white"):"none"};\n        border-radius: ${"circle"===j?"50%":"square"===j?"4px":"0"};\n        opacity: ${B?"1":"0"};\n      `,U=`${10+V}px`,G=`${10+V}px`,X="vertical"===T.slider_direction,K=T.slider_height||400,J=null!==(r=T.pagination_overlay)&&void 0!==r&&r,Z=T.pagination_position||(X?"right":"bottom"),Q=T.pagination_style||"dots",ee="numbers"===Q,ie="scrollbar"===Q,te=T.show_pagination&&!J&&!X,ne=te?ee||ie?32:16:0,oe=te&&ee?80:0,ae=J?20:0,re=()=>n.qy`
        <div
          class="slider-pagination-row"
          data-slider-id="${R}"
          data-position="${Z}"
        >
          ${ie?n.qy`
                <div class="swiper-scrollbar" data-slider-id="${R}"></div>
              `:n.qy`
                <div
                  class="swiper-pagination pagination-${Z}"
                  data-slider-id="${R}"
                ></div>
              `}
        </div>
      `,le=T.transition_effect||"slide",se="fade"===le,de=(P.border_style||q.border_style)&&"none"!==(P.border_style||q.border_style)?`${P.border_width||q.border_width||"1px"} ${P.border_style||q.border_style} ${P.border_color||q.border_color||"var(--divider-color)"}`:"none",pe=this.getHoverEffectClass(e),ce=this.buildStyleString(this.buildDesignStyles(e,i));let ue=!1;const ge=h.x.checkIntegrationAuth(i);if("pro"===(null===(s=null==ge?void 0:ge.subscription)||void 0===s?void 0:s.tier)&&"active"===(null===(d=null==ge?void 0:ge.subscription)||void 0===d?void 0:d.status))ue=!0;else if(h.x.isAuthenticated()){const e=h.x.getCurrentUser();"pro"===(null===(m=null==e?void 0:e.subscription)||void 0===m?void 0:m.tier)&&"active"===(null===(b=null==e?void 0:e.subscription)||void 0===b?void 0:b.status)&&(ue=!0)}const he=e=>!!e&&!!e.action&&"nothing"!==e.action&&"default"!==e.action,ve=he(T.tap_action)||he(T.hold_action)||he(T.double_tap_action),me=ve?this.createGestureHandlers(T.id,{tap_action:T.tap_action,hold_action:T.hold_action,double_tap_action:T.double_tap_action,entity:T.entity,module:T},i,t,[".swiper-button-prev",".swiper-button-next",".swiper-pagination",".swiper-scrollbar",".slider-pagination-row"]):null;return this.wrapWithAnimation(n.qy`
      <style>
        .ultra-slider-container {
          position: relative;
          width: ${T.slider_width||"100%"};
          ${X?`height: ${K}px;`:""}
          display: flex;
          flex-direction: ${X?"row":"column"};
          margin: 0 auto;
          overflow: ${"hidden"};
          border: ${de};
          ${"live"===a?"min-height: 0; max-height: none; max-width: 100%; overflow: hidden !important;":""}
        }
        .ultra-slider-container .swiper {
          width: 100% !important;
          max-width: 100% !important;
          height: ${X?`${K}px`:se?`${T.slider_height||K}px`:null===(y=T.auto_height)||void 0===y||y?"auto":`${T.slider_height||K}px`};
          position: relative;
          overflow: hidden !important;
          border: none;
          ${"live"===a?"min-height: 0; max-width: 100% !important; overflow: hidden !important;":""}
          touch-action: ${X?"pan-x":"pan-y"};
          /* CRITICAL: Ensure container doesn't clip slides during transition */
          ${"slide"===le||"slide-left"===le||"slide-right"===le?"\n          /* For slide effect, ensure overflow is hidden but slides can still be visible during transition */\n          ":""}
          ${"live"===a?"min-height: 0;":""}
          ${null===(_=T.auto_height)||void 0===_||_||!T.slider_height||X?"":`height: ${T.slider_height}px !important;`}
          /* Effects always need fixed height for proper rendering */
          ${se&&!X?`height: ${T.slider_height||K}px !important;`:""}
          /* Add padding for pagination when overlay is disabled (only applies when auto_height is true) */
          ${X||!T.show_pagination||null!==(f=T.auto_height)&&void 0!==f&&!f||J||ee||ie?"":`\n            ${"top"===Z?"padding-top: 32px;":""}\n            ${"bottom"===Z?"padding-bottom: 32px;":""}\n          `}
          ${!X||!T.show_pagination||"scrollbar"===T.pagination_style||null!==(x=T.auto_height)&&void 0!==x&&!x||null!==($=T.pagination_overlay)&&void 0!==$&&$?"":`\n            ${"left"===Z?"padding-left: 32px;":""}\n            ${"right"===Z?"padding-right: 32px;":""}\n          `}
        }
        .ultra-slider-container .swiper-wrapper {
          /* Swiper handles positioning - let Swiper control all transform/positioning */
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          border: none;
          ${"live"===a?"min-height: 0;":""}
          /* CRITICAL: Don't override Swiper's width/height for effects - Swiper handles internally */
          ${"slide"===le||"slide-left"===le||"slide-right"===le?`\n          /* For slide effect, Swiper will set wrapper width inline to (slideWidth * slidesCount) */\n          width: auto !important;\n          display: flex;\n          flex-direction: ${X?"column":"row"};\n          flex-wrap: nowrap;\n          will-change: transform;\n          /* CRITICAL: Let Swiper handle ALL transitions - don't set any transition properties */\n          ${X?`height: ${null===(S=T.auto_height)||void 0===S||S?"auto":"100%"};`:null===(z=T.auto_height)||void 0===z||z?"height: auto;":`height: ${T.slider_height||K}px;`}\n          `:"\n          /* CRITICAL: For fade - let Swiper fully control wrapper */\n          /* Swiper sets fade effect to use absolute positioning internally */\n          width: 100%;\n          height: 100%;\n          "}
        }
        .ultra-slider-container .swiper-slide {
          /* Swiper handles slide positioning - different handling per effect type */
          box-sizing: border-box;
          padding: 0;
          border: none;
          ${"live"===a?"min-height: 0; overflow: hidden;":""}
          
          ${"slide"===le||"slide-left"===le||"slide-right"===le?`\n          /* SLIDE EFFECT: flexbox layout with transform transitions */\n          display: block;\n          flex-shrink: 0;\n          ${X?"\n            width: 100%;\n            height: auto;\n            min-height: 0;\n            position: relative;\n          ":`\n            width: 100%;\n            min-width: 0;\n            max-width: 100%;\n            height: ${null===(k=T.auto_height)||void 0===k||k?"auto":"100%"};\n          `}\n          overflow: ${null===(A=T.auto_height)||void 0===A||A?"visible":"hidden"};\n          `:"\n          /* FADE EFFECT: Swiper uses absolute positioning for crossfade */\n          /* Don't override width/height - let Swiper control positioning */\n          width: 100%;\n          height: 100%;\n          "}
        }
        /* Ensure slide content displays properly */
        .ultra-slider-container .swiper-slide > .slide-content {
          display: flex;
          flex-direction: column;
          /* CRITICAL: Constrain slide-content to slide width */
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          ${"live"===a?"max-width: 100% !important; overflow: hidden !important;":""}
        }
        .ultra-slider-container .slide-content {
          width: 100%;
          max-width: 100%;
          height: ${X?"auto":se?"100%":"fit-content"};
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: ${se?"hidden":"visible"};
          box-sizing: border-box;
          flex: ${"0 0 auto"};
          border: none;
          /* Vertical alignment - only applies when slides_per_view > 1 */
          ${O>1?`justify-content: ${{top:"flex-start",center:"center",bottom:"flex-end",stretch:"stretch"}[H]};`:""}
          ${O>1&&"stretch"===H?"height: 100%;":""}
          ${"live"===a?"min-height: 0; max-width: 100% !important; overflow: hidden !important;":""}
        }
        .ultra-slider-container .slide-content > * {
          flex-shrink: 0;
          min-height: 0;
          height: auto;
          /* CRITICAL: Constrain child elements to slide width */
          max-width: 100%;
          box-sizing: border-box;
          ${"live"===a?"max-width: 100% !important; overflow: hidden;":""}
        }
        .ultra-slider-container .child-module-wrapper {
          overflow: visible;
          box-sizing: border-box;
          height: fit-content;
          flex: 0 0 auto;
          border: none;
          /* CRITICAL: Constrain child modules to slide width */
          width: 100% !important;
          max-width: 100% !important;
          ${"live"===a?"max-width: 100% !important; overflow: hidden !important;":""}
        }
        /* Ensure nested layout modules scale correctly within slider slides */
        .ultra-slider-container .swiper-slide .horizontal-module-preview,
        .ultra-slider-container .swiper-slide .vertical-module-preview,
        .ultra-slider-container .swiper-slide .slider-module {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
        }
        /* Ensure nested horizontal layout content scales correctly */
        .ultra-slider-container .swiper-slide .horizontal-preview-content {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
          /* When multiple slides visible, ensure flex children scale properly */
          ${O>1?"\n            flex-shrink: 1;\n            flex-basis: 0;\n          ":""}
        }
        /* Ensure nested horizontal layout children scale correctly */
        .ultra-slider-container .swiper-slide .horizontal-preview-content .child-module-preview {
          min-width: 0 !important;
          flex-shrink: 1 !important;
          box-sizing: border-box;
        }
        /* Ensure nested vertical layout content scales correctly */
        .ultra-slider-container .swiper-slide .vertical-preview-content {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
        }
        /* Ensure nested vertical layout children scale correctly */
        .ultra-slider-container .swiper-slide .vertical-preview-content .child-module-preview {
          min-width: 0 !important;
          flex-shrink: 1 !important;
          box-sizing: border-box;
        }
        /* Ensure nested slider modules scale correctly */
        .ultra-slider-container .swiper-slide .slider-module .ultra-slider-container {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
        }
        .ultra-slider-container .swiper-button-prev,
        .ultra-slider-container .swiper-button-next {
          ${Y}
          position: absolute;
          ${X?"\n            left: 50%;\n            transform: translateX(-50%);\n          ":"\n            top: 50%;\n            transform: translateY(-50%);\n          "}
          z-index: 10;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .ultra-slider-container .swiper-button-prev {
          ${X?`\n            top: ${U};\n          `:`\n            left: ${U};\n          `}
        }
        .ultra-slider-container .swiper-button-next {
          ${X?`\n            bottom: ${G};\n            top: auto;\n          `:`\n            right: ${G};\n          `}
        }
        /* Hide disabled arrows when loop is off */
        .ultra-slider-container .swiper-button-disabled {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* CRITICAL: Completely hide Swiper's default arrow content */
        .ultra-slider-container .swiper-button-prev *:not(ha-icon):not(ha-icon *),
        .ultra-slider-container .swiper-button-next *:not(ha-icon):not(ha-icon *) {
          display: none !important;
        }
        .ultra-slider-container .swiper-button-prev::before,
        .ultra-slider-container .swiper-button-prev::after,
        .ultra-slider-container .swiper-button-next::before,
        .ultra-slider-container .swiper-button-next::after {
          content: none !important;
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
        /* Ensure ONLY our ha-icon is visible */
        .ultra-slider-container .swiper-button-prev ha-icon,
        .ultra-slider-container .swiper-button-next ha-icon {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          pointer-events: none;
          width: 100%;
          height: 100%;
        }
        /* Reset any Swiper default styling on navigation buttons */
        .ultra-slider-container .swiper-button-prev,
        .ultra-slider-container .swiper-button-next {
          font-family: inherit !important;
          font-size: inherit !important;
        }
        /* Show arrows on hover when not disabled */
        .ultra-slider-container:hover .swiper-button-prev:not(.swiper-button-disabled),
        .ultra-slider-container:hover .swiper-button-next:not(.swiper-button-disabled) {
          opacity: 1 !important;
        }
        .ultra-slider-container .swiper-button-prev:not(.swiper-button-disabled):hover,
        .ultra-slider-container .swiper-button-next:not(.swiper-button-disabled):hover {
          ${X?"\n            transform: translateX(-50%) scale(1.1) !important;\n          ":"\n            transform: translateY(-50%) scale(1.1) !important;\n          "}
        }
        /* CRITICAL: Completely hide disabled arrows */
        .ultra-slider-container .swiper-button-disabled,
        .ultra-slider-container .swiper-button-prev.swiper-button-disabled,
        .ultra-slider-container .swiper-button-next.swiper-button-disabled {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* Override any hover states for disabled arrows */
        .ultra-slider-container:hover .swiper-button-disabled,
        .ultra-slider-container:hover .swiper-button-prev.swiper-button-disabled,
        .ultra-slider-container:hover .swiper-button-next.swiper-button-disabled {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* Custom pagination styling */
        .ultra-slider-container .swiper-pagination {
          position: ${X||J||null!==(F=T.auto_height)&&void 0!==F&&!F?"absolute":"relative"};
          z-index: ${ae};
          pointer-events: all;
          ${!X||"left"!==Z&&"right"!==Z?X?"\n                right: 10px;\n                top: 50%;\n                transform: translateY(-50%);\n                width: auto;\n                height: auto;\n                flex-direction: column;\n              ":J||null!==(I=T.auto_height)&&void 0!==I&&!I?"\n                bottom: 10px;\n                left: 50%;\n                transform: translateX(-50%);\n                width: auto;\n                height: auto;\n                pointer-events: all;\n              ":"\n                display: flex;\n                justify-content: center;\n                align-items: center;\n              ":""}
        }
        ${te?`\n        .ultra-slider-container .slider-pagination-row {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n          gap: 8px;\n        }\n        .ultra-slider-container .slider-pagination-row[data-position='bottom'] {\n          margin-top: ${oe}px;\n        }\n        .ultra-slider-container .slider-pagination-row[data-position='top'] {\n          margin-bottom: ${ne}px;\n        }\n        .ultra-slider-container .slider-pagination-row .swiper-pagination,\n        .ultra-slider-container .slider-pagination-row .swiper-scrollbar {\n          position: relative !important;\n          transform: none !important;\n          left: auto !important;\n          right: auto !important;\n          top: auto !important;\n          bottom: auto !important;\n          width: 100%;\n          margin: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .ultra-slider-container .slider-pagination-row .swiper-scrollbar {\n          height: 8px;\n          background: ${T.pagination_color||"rgba(0, 0, 0, 0.1)"};\n          border-radius: 4px;\n        }\n        .ultra-slider-container .slider-pagination-row .swiper-scrollbar .swiper-scrollbar-drag {\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          border-radius: 4px;\n        }\n        `:""}
        /* Ensure pagination is visible when positioned on left/right (vertical sliders only) */
        ${!X||"left"!==Z&&"right"!==Z?"":"\n        /* Remove wrapper margin - padding handles spacing */\n        "}
        .ultra-slider-container .swiper-pagination-bullet {
          width: ${T.pagination_size||12}px;
          height: ${T.pagination_size||12}px;
          background: ${T.pagination_color||"var(--primary-text-color)"};
          opacity: 0.5;
          margin: ${X?"4px 0":"0 4px"};
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s;
          pointer-events: all;
          display: inline-block;
        }
        .ultra-slider-container .swiper-pagination-bullet-active {
          background: ${T.pagination_active_color||"var(--primary-color)"};
          opacity: 1;
          transform: scale(1.2);
        }
        /* Dynamic pagination styling - centered with tapering bullets */
        /* Note: These styles apply to ALL dynamic pagination, but will be overridden by conditional styles below */
        .ultra-slider-container .swiper-pagination-bullets-dynamic {
          overflow: hidden;
        }
        /* Custom styling for numbers pagination - only when using numbers style */
        ${"numbers"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullet {\n          border: 2px solid ${T.pagination_color||"var(--primary-text-color)"};\n          background: transparent;\n          color: ${T.pagination_color||"var(--primary-text-color)"};\n        }\n        .ultra-slider-container .swiper-pagination-bullet-active {\n          border: 2px solid ${T.pagination_active_color||"var(--primary-color)"};\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          color: white;\n        }\n        `:""}
        /* Dots and Dash pagination styling */
        ${"dots-and-dash"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullet {\n          width: ${T.pagination_size||12}px;\n          height: ${T.pagination_size||12}px;\n          background: ${T.pagination_color||"var(--primary-text-color)"};\n          opacity: 0.5;\n          margin: ${X?"4px 0":"0 4px"};\n          cursor: pointer;\n          border-radius: 50%;\n          transition: all 0.3s;\n        }\n        .ultra-slider-container .swiper-pagination-bullet-active {\n          width: ${2*(T.pagination_size||12)}px;\n          height: ${T.pagination_size||12}px;\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          opacity: 1;\n          border-radius: ${3*(T.pagination_size||12)/4}px;\n          transform: scale(1);\n        }\n        `:""}
        /* Dash Lines pagination styling */
        ${"dash-lines"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullet {\n          width: ${2*(T.pagination_size||12)}px;\n          height: ${(T.pagination_size||12)/2}px;\n          background: ${T.pagination_color||"var(--primary-text-color)"};\n          opacity: 0.5;\n          margin: ${X?"4px 0":"0 4px"};\n          cursor: pointer;\n          border-radius: ${(T.pagination_size||12)/4}px;\n          transition: all 0.3s;\n        }\n        .ultra-slider-container .swiper-pagination-bullet-active {\n          width: ${2.5*(T.pagination_size||12)}px;\n          height: ${(T.pagination_size||12)/2}px;\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          opacity: 1;\n          border-radius: ${(T.pagination_size||12)/4}px;\n          transform: scale(1);\n        }\n        `:""}
        /* Dynamic pagination styling - active is largest, adjacent bullets are medium, outer bullets are smallest */
        /* Size progression: smallest (outer) -> medium (adjacent) -> largest (active) -> medium (adjacent) -> smallest (outer) */
        ${"dynamic"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullets-dynamic {\n          overflow: visible !important;\n          width: auto !important;\n          text-align: center !important;\n          display: inline-block !important;\n          ${!X||"left"!==T.pagination_position&&"right"!==T.pagination_position?"\n              left: 50% !important;\n              transform: translateX(-50%) !important;\n              position: relative !important;\n            ":"\n              left: auto !important;\n              transform: none !important;\n              position: relative !important;\n            "}\n        }\n        /* Base style for all dynamic bullets - smallest size (outer bullets, 2 steps away) */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n          opacity: 0.4 !important;\n          transition: all 0.3s ease !important;\n          transform-origin: center center !important;\n          transform: scale(0.6) !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Override Swiper's default active bullet styles */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n          transform: scale(0.6) !important;\n          opacity: 0.4 !important;\n        }\n        /* Explicitly set outer bullets (2 steps away) to smallest size */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev,\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n          transform: scale(0.6) !important;\n          opacity: 0.4 !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Medium size (1 step away from active) - adjacent bullets */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev,\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n          transform: scale(1) !important;\n          opacity: 0.7 !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Largest size (active bullet) - must be last to override everything */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main,\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main.swiper-pagination-bullet-active {\n          transform: scale(1.3) !important;\n          opacity: 1 !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Ensure regular active bullets (without active-main class) don't get wrong scale */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active:not(.swiper-pagination-bullet-active-main):not(.swiper-pagination-bullet-active-prev):not(.swiper-pagination-bullet-active-next) {\n          transform: scale(0.6) !important;\n        }\n        `:""}
        .ultra-slider-container .swiper-pagination-fraction {
          font-size: ${(T.pagination_size||12)+4}px;
          font-weight: 600;
          color: ${T.pagination_active_color||"var(--primary-color)"};
        }
        .ultra-slider-container .swiper-pagination-progressbar {
          position: absolute;
          ${X?"\n            width: 4px;\n            height: 100%;\n            top: 0;\n            left: auto;\n            right: 0;\n          ":`\n            height: ${(T.pagination_size||12)/2}px;\n            width: 100%;\n            bottom: 0;\n            top: auto;\n          `}
          background: ${T.pagination_color||"rgba(0, 0, 0, 0.2)"};
          border-radius: ${(T.pagination_size||12)/4}px;
        }
        .ultra-slider-container .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: ${T.pagination_active_color||"var(--primary-color)"};
          ${X?"\n            width: 100%;\n            height: 0%;\n            top: 0;\n            left: 0;\n          ":"\n            width: 0%;\n            height: 100%;\n            top: 0;\n            left: 0;\n          "}
        }
        /* Custom pagination styling */
        .ultra-slider-container .swiper-pagination {
          position: ${X||J||null!==(C=T.auto_height)&&void 0!==C&&!C?"absolute":"relative"};
          z-index: ${ae};
          pointer-events: all;
          ${X?"\n            right: 10px;\n            top: 50%;\n            transform: translateY(-50%);\n            width: auto;\n            height: auto;\n            flex-direction: column;\n          ":J||null!==(E=T.auto_height)&&void 0!==E&&!E?`\n            bottom: 10px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: auto;\n            height: auto;\n            z-index: ${ae};\n            pointer-events: all;\n          `:"\n                display: flex;\n                justify-content: center;\n                align-items: center;\n          "}
        }
        /* Pagination position overrides - must come after base styles */
        .ultra-slider-container .swiper-pagination.pagination-top {
          top: 10px !important;
          bottom: auto !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          position: absolute !important;
          ${X?"left: auto !important; right: 10px !important; top: 0 !important; transform: translateY(0) !important;":""}
        }
        /* Left and Right pagination for vertical sliders - rotated to match top/bottom styling */
        ${X?`\n        .ultra-slider-container .swiper-pagination.pagination-left {\n          left: 0 !important;\n          right: auto !important;\n          top: 50% !important;\n          bottom: auto !important;\n          transform: translateY(-50%) rotate(90deg) !important;\n          transform-origin: center center !important;\n          position: absolute !important;\n          width: auto !important;\n          height: auto !important;\n          display: flex !important;\n          flex-direction: row !important;\n          align-items: center !important;\n          z-index: ${ae} !important;\n          padding-left: 10px;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-left .swiper-pagination-bullet {\n          margin: 0 4px !important;\n          transform-origin: center center !important;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-left .swiper-pagination-bullets-dynamic {\n          transform: none !important; /* Remove rotation from dynamic container, let parent handle it */\n        }\n        .ultra-slider-container .swiper-pagination.pagination-right {\n          left: auto !important;\n          right: 0 !important;\n          top: 50% !important;\n          bottom: auto !important;\n          transform: translateY(-50%) rotate(-90deg) !important;\n          transform-origin: center center !important;\n          position: absolute !important;\n          width: auto !important;\n          height: auto !important;\n          display: flex !important;\n          flex-direction: row !important;\n          align-items: center !important;\n          z-index: ${ae} !important;\n          padding-right: 10px;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-right .swiper-pagination-bullet {\n          margin: 0 4px !important;\n          transform-origin: center center !important;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-right .swiper-pagination-bullets-dynamic {\n          transform: none !important; /* Remove rotation from dynamic container, let parent handle it */\n        }\n        `:""}
        .ultra-slider-container .swiper-pagination.pagination-bottom {
          top: auto !important;
          bottom: 10px !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          position: absolute !important;
          z-index: ${ae} !important;
          ${X?"left: auto !important; right: 10px !important; top: auto !important; bottom: 0 !important; transform: translateY(0) !important;":""}
        }
        /* Scrollbar styling */
        .ultra-slider-container .swiper-scrollbar {
          position: absolute;
          ${X?"\n            width: 8px;\n            height: 100%;\n            right: 0;\n            top: 0;\n            left: auto;\n          ":"\n            width: 100%;\n            height: 8px;\n            bottom: 0;\n            top: auto;\n          "}
          background: ${T.pagination_color||"rgba(0, 0, 0, 0.1)"};
          border-radius: 4px;
          z-index: ${ae};
        }
        .ultra-slider-container .swiper-scrollbar-drag {
          background: ${T.pagination_active_color||"var(--primary-color)"};
          border-radius: 4px;
          ${X?"\n            width: 100%;\n          ":"\n            height: 100%;\n          "}
        }
        /* ===== EFFECT-SPECIFIC CSS ===== */
        /* FADE EFFECT: Swiper uses absolute positioning and opacity */
        /* Note: Swiper adds .swiper-fade class to the .swiper element, not the container */
        ${"fade"===le?`\n        .ultra-slider-container .swiper.swiper-fade .swiper-wrapper {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n        .ultra-slider-container .swiper.swiper-fade .swiper-slide {\n          position: absolute !important;\n          top: 0 !important;\n          left: 0 !important;\n          width: 100% !important;\n          height: 100% !important;\n          opacity: 0 !important;\n          transition: opacity ${T.transition_speed||300}ms ease !important;\n          pointer-events: none;\n          z-index: 1;\n        }\n        .ultra-slider-container .swiper.swiper-fade .swiper-slide-active {\n          opacity: 1 !important;\n          pointer-events: auto;\n          z-index: 2;\n        }\n        /* Ensure slide content fills the slide for fade effect */\n        .ultra-slider-container .swiper.swiper-fade .slide-content {\n          height: 100%;\n        }\n        `:""}
      </style>

      <div
        class="ultra-slider-container uc-module-container ${pe}"
        style="${ce}${ve?"; cursor: pointer;":""}"
        data-slider-id="${R}"
        @pointerdown=${me?me.onPointerDown:null}
        @pointermove=${me?me.onPointerMove:null}
        @pointerup=${me?me.onPointerUp:null}
        @pointercancel=${me?me.onPointerCancel:null}
        @pointerleave=${me?me.onPointerLeave:null}
      >
        ${te&&"top"===Z?re():""}
        <div
          class="swiper ${W}"
          data-preview-context="${a||"dashboard"}"
          ${(0,o.K)(e=>{if(!(e&&e instanceof HTMLElement))return;const i=e.getAttribute("data-preview-context")||"dashboard",t=e.hasAttribute("data-swiper-initialized"),n=e.getAttribute("data-swiper-init-context"),o=JSON.stringify({show_pagination:T.show_pagination,pagination_style:T.pagination_style,pagination_position:T.pagination_position,pagination_overlay:T.pagination_overlay,pagination_size:T.pagination_size,pagination_color:T.pagination_color,pagination_active_color:T.pagination_active_color,show_arrows:T.show_arrows,slider_direction:T.slider_direction,slides_per_view:T.slides_per_view,space_between:T.space_between,gap:T.gap,centered_slides:T.centered_slides,auto_height:T.auto_height,slider_height:T.slider_height,transition_effect:T.transition_effect,transition_speed:T.transition_speed,auto_play:T.auto_play,auto_play_delay:T.auto_play_delay,pause_on_hover:T.pause_on_hover,loop:T.loop,allow_swipe:T.allow_swipe,allow_keyboard:T.allow_keyboard,allow_mousewheel:T.allow_mousewheel,page_count:N.length}),a=e.getAttribute("data-config-hash"),r=a&&a!==o;if(t&&n===i&&!r&&e.swiper)return;const l=window[`initSwiper_${R}`];if(t&&(n!==i||r)){const i=e.swiper;i&&(i.destroy(!0,!0),delete e.swiper),w.destroyInstance(R),e.removeAttribute("data-swiper-init-context")}if(e.setAttribute("data-swiper-initialized","true"),e.setAttribute("data-config-hash",o),l)if("ha-preview"===i||"live"===i){const t="live"===i,n=t?2:1,o=t?40:30,a=(t=1)=>{const r=e.querySelectorAll(".swiper-slide").length,s=e.offsetWidth,d=e.offsetHeight;if(r>0&&(s>0||d>0))l(e);else if(t<o){const e=Math.min(100*t*n,1e3);setTimeout(()=>a(t+1),e)}else console.error("[Slider] Failed to initialize after max attempts:",{sliderId:R,context:i,slideCount:r,containerWidth:s,containerHeight:d}),e.removeAttribute("data-swiper-initialized")};setTimeout(()=>a(1),t?300:100)}else l(e);else console.error("[Slider] Initialization function not found for:",R,"context:",i)})}
        >
          <div class="swiper-wrapper">
            ${N.map(e=>n.qy`
                <div class="swiper-slide">
                  <div class="slide-content">
                    ${e.map(e=>{var o,r,l,s;const d=L.getModule(e.type);if(!d)return g.E.renderModuleLoadingState(e);if(!p.S.evaluateModuleVisibility(e))return"";if(((null===(r=null===(o=d.metadata)||void 0===o?void 0:o.tags)||void 0===r?void 0:r.includes("pro"))||(null===(s=null===(l=d.metadata)||void 0===l?void 0:l.tags)||void 0===s?void 0:s.includes("premium")))&&!ue)return n.qy`
                          <div class="child-module-wrapper" style="width: 100%;">
                            <div class="pro-module-locked" style="position: relative;">
                              ${d.renderPreview((0,c.l8)(e),i,t,a)}
                              <div
                                class="pro-module-overlay"
                                style="
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                background: rgba(0, 0, 0, 0.8);
                                backdrop-filter: blur(8px);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 12px;
                                z-index: 10;
                              "
                              >
                                <div
                                  class="pro-module-message"
                                  style="
                                  text-align: center;
                                  color: white;
                                  padding: 6px;
                                  max-width: 95%;
                                  display: flex;
                                  flex-direction: column;
                                  align-items: center;
                                  gap: 4px;
                                "
                                >
                                  <ha-icon
                                    icon="mdi:lock"
                                    style="font-size: 20px; flex-shrink: 0;"
                                  ></ha-icon>
                                  <div
                                    style="font-size: 11px; font-weight: 600; line-height: 1.2; white-space: nowrap;"
                                  >
                                    Pro Module
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;const u=null==e?void 0:e.type;return"horizontal"===u||"vertical"===u||"slider"===u?n.qy`
                          <div class="child-module-wrapper" style="width: 100%;">
                            ${d.renderPreview((0,c.l8)(e),i,t,a)}
                          </div>
                        `:n.qy`
                        <div class="child-module-wrapper" style="width: 100%;">
                          ${d.renderPreview((0,c.l8)(e),i,t,a)}
                        </div>
                      `})}
                  </div>
                </div>
              `)}
          </div>

          ${T.show_pagination&&(J||X)?ie?n.qy`
                  <div
                    class="swiper-scrollbar"
                    data-slider-id="${R}"
                  ></div>
                `:n.qy`
                  <div
                    class="swiper-pagination pagination-${Z}"
                    data-slider-id="${R}"
                  ></div>
                `:""}
          ${T.show_arrows?n.qy`
                <div class="swiper-button-prev">
                  <ha-icon
                    icon="${(()=>{const e=T.prev_arrow_icon||"mdi:chevron-left";return X?"mdi:chevron-left"===e?"mdi:chevron-up":e:"mdi:chevron-up"===e?"mdi:chevron-left":e})()}"
                  ></ha-icon>
                </div>
                <div class="swiper-button-next">
                  <ha-icon
                    icon="${(()=>{const e=T.next_arrow_icon||"mdi:chevron-right";return X?"mdi:chevron-right"===e?"mdi:chevron-down":e:"mdi:chevron-down"===e?"mdi:chevron-right":e})()}"
                  ></ha-icon>
                </div>
              `:""}
        </div>
        ${te&&"top"!==Z?re():""}
      </div>
    `,e,i)}mapConfigToSwiper(e,i,t){var n,o,a,r;const l=e.slides_per_view||1,s=e.space_between||e.gap||0;let d="horizontal";"vertical"===e.slider_direction&&(d="vertical");let p="slide",c={};const u=e.transition_effect||"slide";"fade"===u?(p="fade",c={fadeEffect:{crossFade:!0}}):("slide"===u||b.warnedLegacyEffects.has(u)||(b.warnedLegacyEffects.add(u),console.info(`[Ultra Card] Slider transition effect "${u}" is no longer supported and falls back to "slide".`)),p="slide","vertical"===e.slider_direction&&(d="vertical"));const g="fade"===p?1:l;let h=!1,v=!1;if(e.show_pagination){const i=`.swiper-pagination[data-slider-id="${t}"]`,n=`.swiper-scrollbar[data-slider-id="${t}"]`,o=e.pagination_style||"dots";"scrollbar"===o?v={el:n,draggable:!0}:(h={el:i,clickable:!0},"dots"===o||"dots-and-dash"===o||"dash-lines"===o?h.type="bullets":"numbers"===o?(h.type="bullets",h.renderBullet=(i,t)=>{const n=e.pagination_size||12,o=e.pagination_color||"var(--primary-text-color)",a=e.pagination_active_color||"var(--primary-color)",r=t.includes("active")?"white":o,l=t.includes("active")?a:"transparent";return`<div class="${t}" style="\n              min-width: ${2.5*n}px !important;\n              height: ${2.5*n}px !important;\n              display: inline-flex !important;\n              align-items: center !important;\n              justify-content: center !important;\n              border-radius: 4px !important;\n              font-size: ${n+2}px !important;\n              line-height: 1 !important;\n              margin: 0 4px !important;\n              padding: 4px !important;\n              border: 2px solid ${o} !important;\n              background: ${l} !important;\n              color: ${r} !important;\n              opacity: 1 !important;\n              cursor: pointer !important;\n              font-weight: 600 !important;\n            ">${i+1}</div>`}):"fraction"===o?h.type="fraction":"progressbar"===o?h.type="progressbar":"dynamic"===o&&(h.type="bullets",h.dynamicBullets=!1,h.hideOnClick=!1))}const m=!!e.show_arrows&&{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"};let w=!1;e.auto_play&&(w={delay:e.auto_play_delay||3e3,disableOnInteraction:!1,pauseOnMouseEnter:null===(n=e.pause_on_hover)||void 0===n||n});const y=null===(o=e.loop)||void 0===o||o,_=y&&i>=2&&"slide"===p,f=!_&&y,x=e.transition_speed||300,$=Object.assign(Object.assign({direction:d,effect:p},c),{slidesPerView:g,slidesPerGroup:1,spaceBetween:s,loop:_,rewind:f,speed:x,pagination:h,scrollbar:v,navigation:m,autoplay:w,keyboard:!!e.allow_keyboard&&{enabled:!0,onlyInViewport:!0},mousewheel:!!e.allow_mousewheel&&{enabled:!0,forceToAxis:!0},allowTouchMove:null===(a=e.allow_swipe)||void 0===a||a,autoHeight:!1,centeredSlides:(null===(r=e.centered_slides)||void 0===r||r)&&g>1,observer:!0,observeParents:!0,observeSlideChildren:!0,preventClicks:!1,preventClicksPropagation:!1,touchStartPreventDefault:!1,passiveListeners:!0,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:'button, a, input, select, textarea, .popup-trigger, [role="button"]',touchEventsTarget:"wrapper"});return _&&($.watchSlidesProgress=!0),$}validate(e){const i=e,t=[...super.validate(e).errors];return i.modules||t.push("Slider must have a modules array"),!1===i.auto_height&&i.slider_height&&(i.slider_height<50||i.slider_height>1e3)&&t.push("Slider height must be between 50 and 1000 pixels"),i.slides_per_view&&(i.slides_per_view<1||i.slides_per_view>10)&&t.push("Slides per view must be between 1 and 10"),{valid:0===t.length,errors:t}}getStyles(){return`${a.m.getSliderStyles()}`}}b.warnedLegacyEffects=new Set}}]);
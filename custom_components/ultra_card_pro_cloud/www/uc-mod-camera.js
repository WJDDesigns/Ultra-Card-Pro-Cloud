/*! For license information please see uc-mod-camera.js.LICENSE.txt */
"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[3707],{3333(e,t,n){n.d(t,{UltraCameraModule:()=>_});var i=n(5183),a=n(5669),o=n(8791),r=n(3496),s=n(3721),l=n(8465),c=n(5147),d=n(8938),m=n(9957),p=n(5096),h=n(1001),u=n(5320),g=n(9327),f=n(5121),v=n(5155),b=n(1172),y=n(3361);n(9442);const x=new Set(["ha-web-rtc-player","ha-hls-player","ha-camera-stream","ha-camera-websocket","ha-camera-player","ha-camera-viewer"]);class _ extends s.m{constructor(){super(...arguments),this._templateInputDebounce=null,this._lastRenderedEntity=null,this._renderDebounce=null,this._webrtcUpdateTimer=null,this._huiImageRef=(0,o._)(),this._cameraStableKeys=new Map,this._audioOverrides=new Map,this._lastAudioStates=new Map,this._audioObservers=new Map,this._snapshotRefreshTimers=new Map,this.metadata={type:"camera",title:"Camera",description:"Display live camera feeds with comprehensive control options",author:"WJD Designs",version:"1.0.0",icon:"mdi:camera",category:"content",tags:["camera","live","feed","security","surveillance"]},this.clickTimeout=null,this.holdTimeout=null,this.isHolding=!1}createDefault(e,t){return{id:e||this.generateId("camera"),type:"camera",entity:"",camera_name:"",show_name:!0,name_position:"top-left",tap_opens_fullscreen:!1,aspect_ratio_linked:!0,aspect_ratio_value:1.778,image_fit:"cover",crop_left:0,crop_top:0,crop_right:0,crop_bottom:0,show_controls:!1,view_mode:"auto",refresh_interval:10,audio_enabled:!1,image_quality:"high",rotation:0,show_unavailable:!0,fallback_image:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},unified_template_mode:!1,unified_template:"",design:{width:"100%",max_width:"500px",border_radius:"20px"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,n,a){var o;const r=e,s=(null===(o=t.locale)||void 0===o?void 0:o.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="camera-module-settings">
        <!-- Camera Configuration Section -->
        ${this.renderSettingsSection((0,p.kg)("editor.camera.config.title",s,"Camera Configuration"),(0,p.kg)("editor.camera.config.desc",s,"Configure the camera entity and display settings."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,n,"entity",r.entity||"",e=>{a({entity:e}),this.triggerPreviewUpdate()},["camera"],(0,p.kg)("editor.camera.entity",s,"Camera Entity"))}
        </div>

        <!-- Camera Name Settings with toggle in header -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.camera.show_name",s,"Show Camera Name"),"",t,{show_name:!1!==r.show_name},[this.booleanField("show_name")],e=>{a({show_name:e.detail.value.show_name}),this.triggerPreviewUpdate()})}

          ${!1!==r.show_name?i.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.name",s,"Camera Name"),(0,p.kg)("editor.camera.name_desc",s,"Custom name for the camera. Leave empty to use entity name."),t,{camera_name:r.camera_name||""},[this.textField("camera_name")],e=>a(e.detail.value))}
                </div>

                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.name_position.title",s,"Name Position"),(0,p.kg)("editor.camera.name_position.desc",s,"Choose where the camera name appears as an overlay on the camera image."),t,{name_position:r.name_position||"top-left"},[this.selectField("name_position",[{value:"top-left",label:(0,p.kg)("editor.camera.name_position.options.top_left",s,"Top Left")},{value:"top-right",label:(0,p.kg)("editor.camera.name_position.options.top_right",s,"Top Right")},{value:"center",label:(0,p.kg)("editor.camera.name_position.options.center",s,"Center")},{value:"bottom-left",label:(0,p.kg)("editor.camera.name_position.options.bottom_left",s,"Bottom Left")},{value:"bottom-right",label:(0,p.kg)("editor.camera.name_position.options.bottom_right",s,"Bottom Right")},{value:"top-middle",label:(0,p.kg)("editor.camera.name_position.options.top_middle",s,"Top Middle")},{value:"bottom-middle",label:(0,p.kg)("editor.camera.name_position.options.bottom_middle",s,"Bottom Middle")}])],e=>{e.detail.value.name_position!==(r.name_position||"top-left")&&a(e.detail.value)})}
                </div>
              `:i.qy`
                <div
                  style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,p.kg)("editor.camera.show_name_toggle.enable_toggle_desc",s,"Enable the toggle above to configure camera name display")}
                </div>
              `}
        </div>

        <!-- Tap to Open Fullscreen Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.camera.tap_opens_fullscreen",s,"Tap Camera Opens Fullscreen"),"",t,{tap_opens_fullscreen:!0===r.tap_opens_fullscreen},[this.booleanField("tap_opens_fullscreen")],e=>{a({tap_opens_fullscreen:e.detail.value.tap_opens_fullscreen}),this.triggerPreviewUpdate()})}

          <div
            class="field-description"
            style="margin-bottom: 16px; color: var(--secondary-text-color); font-style: italic; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: 6px; border-left: 4px solid var(--primary-color);"
          >
            <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
            ${(0,p.kg)("editor.camera.tap_opens_fullscreen_desc",s,"When enabled, tapping anywhere on the camera will open it in fullscreen mode.")}
          </div>
        </div>

        <!-- Display Settings Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 32px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.camera.display.title",s,"Display Settings")}
          </div>

          <!-- Stream Mode Selector -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,p.kg)("editor.camera.view_mode.title",s,"Stream Mode"),(0,p.kg)("editor.camera.view_mode.desc",s,"Control how the camera feed is displayed. Auto: snapshot with tap-to-live (like HA default). Live: always streaming. Snapshot: manual refresh only."),t,{view_mode:r.view_mode||"auto"},[this.selectField("view_mode",[{value:"auto",label:(0,p.kg)("editor.camera.view_mode.options.auto",s,"Auto (HA Default)")},{value:"live",label:(0,p.kg)("editor.camera.view_mode.options.live",s,"Always Live")},{value:"snapshot",label:(0,p.kg)("editor.camera.view_mode.options.snapshot",s,"Snapshot Only")}])],e=>{e.detail.value.view_mode!==(r.view_mode||"auto")&&a(e.detail.value)})}
          </div>

          <!-- Audio Enable (only for Live mode) -->
          ${"live"===(r.view_mode||"auto")?i.qy`
                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.audio_enabled.title",s,"Enable Audio"),(0,p.kg)("editor.camera.audio_enabled.desc",s,"Enable audio for live camera streams. Audio is only available in Live mode."),t,{audio_enabled:!0===r.audio_enabled},[this.booleanField("audio_enabled")],e=>a(e.detail.value))}
                </div>
              `:""}

          <!-- Refresh Interval (only for Snapshot mode) -->
          ${"snapshot"===(r.view_mode||"auto")?i.qy`
                <div style="margin-top: 24px;">
                  ${this.renderConditionalFieldsGroup((0,p.kg)("editor.camera.snapshot_refresh.section_title",s,"Snapshot Refresh Settings"),i.qy`
                      ${l.Q.renderField((0,p.kg)("editor.camera.refresh_interval.title",s,"Refresh Interval (seconds)"),(0,p.kg)("editor.camera.refresh_interval.desc",s,"How often to refresh the camera snapshot automatically. Range: 1-300 seconds."),t,{refresh_interval:r.refresh_interval||10},[l.Q.createSchemaItem("refresh_interval",{number:{min:1,max:300,mode:"box"}})],e=>a({refresh_interval:e.detail.value.refresh_interval}))}
                    `)}
                </div>
              `:""}

          <!-- Dimensions Section -->
          <div style="margin-bottom: 32px;">
            <div
              class="field-title"
              style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--primary-color);"
            >
              ${(0,p.kg)("editor.camera.dimensions.title",s,"Dimensions")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: 6px; border-left: 4px solid var(--primary-color);"
            >
              <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
              ${(0,p.kg)("editor.camera.dimensions.responsive_note",s,"Camera now uses responsive sizing by default (100% width). Use the Design tab for full control over dimensions, or adjust these fallback pixel dimensions for specific use cases.")}
            </div>

            <style>
              .aspect-ratio-link-btn {
                width: 40px;
                height: 40px;
                padding: 0;
                border: 2px solid var(--divider-color);
                border-radius: 50%;
                background: var(--secondary-background-color);
                color: var(--primary-text-color);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                flex-shrink: 0;
                margin: 0 auto;
                position: relative;
              }

              .aspect-ratio-link-btn.linked {
                border-color: var(--primary-color);
                background: var(--primary-color);
                color: var(--text-primary-color, #fff);
                transform: scale(1.05);
              }

              .aspect-ratio-link-btn:hover {
                transform: scale(1.1);
                border-color: var(--primary-color);
              }

              .aspect-ratio-link-btn.linked:hover {
                background: var(--primary-color);
                opacity: 0.9;
              }

              .aspect-ratio-link-btn ha-icon {
                font-size: 20px;
                transition: transform 0.2s ease;
              }

              .dimensions-container {
                display: flex;
                flex-direction: column;
                gap: 16px;
              }

              .dimension-group {
                display: flex;
                flex-direction: column;
                gap: 8px;
              }
            </style>

            <div class="dimensions-container">
              <div class="dimension-group">
                ${this.renderSliderField((0,p.kg)("editor.camera.width",s,"Width"),(0,p.kg)("editor.camera.width_desc",s,"Set the width of the camera display. Range: 100–1000px"),r.width||320,320,100,1e3,1,e=>this._handleDimensionChange(r,"width",e,a),"px")}
              </div>

              <!-- Link/Unlink Button -->
              <div style="display: flex; justify-content: center; margin: 8px 0;">
                <button
                  class="aspect-ratio-link-btn ${!1!==r.aspect_ratio_linked?"linked":""}"
                  @click=${()=>{const e=!r.aspect_ratio_linked,t={aspect_ratio_linked:e};if(e){const e=r.width||320,n=r.height||180;t.aspect_ratio_value=e/n}a(t)}}
                  title="${!1!==r.aspect_ratio_linked?(0,p.kg)("editor.camera.unlink_aspect",s,"Unlink aspect ratio"):(0,p.kg)("editor.camera.link_aspect",s,"Link aspect ratio")}"
                >
                  <ha-icon
                    icon="${!1!==r.aspect_ratio_linked?"mdi:link-variant":"mdi:link-variant-off"}"
                  ></ha-icon>
                </button>
              </div>

              <div class="dimension-group">
                ${this.renderSliderField((0,p.kg)("editor.camera.height",s,"Height"),(0,p.kg)("editor.camera.height_desc",s,"Set the height of the camera display. Range: 100–1000px"),r.height||180,180,100,1e3,1,e=>this._handleDimensionChange(r,"height",e,a),"px")}
              </div>
            </div>

            ${!1!==r.aspect_ratio_linked?i.qy`
                  <div
                    style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: 8px; border-left: 4px solid var(--primary-color);"
                  >
                    <div
                      style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                    >
                      <ha-icon
                        icon="mdi:link-variant"
                        style="font-size: 14px; margin-right: 6px;"
                      ></ha-icon>
                      ${(0,p.kg)("editor.camera.aspect_linked.title",s,"Aspect Ratio Linked")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.camera.aspect_linked.desc",s,"Dimensions maintain {ratio}:1 ratio. Adjusting one dimension automatically updates the other to maintain proportions.").replace("{ratio}",`${(1*(r.aspect_ratio_value||1.778)).toFixed(2)}`)}
                    </div>
                  </div>
                `:i.qy`
                  <div
                    style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-secondary-text-color), 0.1); border-radius: 8px; border-left: 4px solid var(--secondary-text-color);"
                  >
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); font-weight: 500; margin-bottom: 4px;"
                    >
                      <ha-icon
                        icon="mdi:link-variant-off"
                        style="font-size: 14px; margin-right: 6px;"
                      ></ha-icon>
                      ${(0,p.kg)("editor.camera.aspect_independent.title",s,"Independent Dimensions")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.camera.aspect_independent.desc",s,"Width and height can be adjusted independently. Click the link button above to maintain aspect ratio.")}
                    </div>
                  </div>
                `}
          </div>

          <!-- Rotation Field -->
          <div class="dimension-group" style="margin-top: 16px;">
            ${this.renderSliderField((0,p.kg)("editor.camera.rotation",s,"Rotation"),(0,p.kg)("editor.camera.rotation_desc",s,"Rotate the camera image clockwise (0–360 degrees)."),r.rotation||0,0,0,360,1,e=>{a({rotation:e})},"°")}
          </div>
        </div>

        <!-- Crop & Position Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.camera.crop.title",s,"Crop & Position")}
          </div>
          <div
            class="field-description"
            style="margin-bottom: 20px; color: var(--secondary-text-color); font-style: italic;"
          >
            ${(0,p.kg)("editor.camera.crop.desc",s,"Adjust the crop and position of the camera view. Useful for focusing on specific areas or removing unwanted edges.")}
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Left Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.left_title",s,"Left Crop"),(0,p.kg)("editor.camera.crop.left_desc",s,"Crop from the left edge. Higher values show less of the left side."),r.crop_left||0,0,0,50,1,e=>{a({crop_left:e})},"%")}

            <!-- Right Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.right_title",s,"Right Crop"),(0,p.kg)("editor.camera.crop.right_desc",s,"Crop from the right edge. Higher values show less of the right side."),r.crop_right||0,0,0,50,1,e=>{a({crop_right:e})},"%")}

            <!-- Top Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.top_title",s,"Top Crop"),(0,p.kg)("editor.camera.crop.top_desc",s,"Crop from the top edge. Higher values show less of the top area."),r.crop_top||0,0,0,50,1,e=>{a({crop_top:e})},"%")}

            <!-- Bottom Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.bottom_title",s,"Bottom Crop"),(0,p.kg)("editor.camera.crop.bottom_desc",s,"Crop from the bottom edge. Higher values show less of the bottom area."),r.crop_bottom||0,0,0,50,1,e=>{a({crop_bottom:e})},"%")}
          </div>

          <!-- Crop Status -->
          ${(r.crop_left||0)+(r.crop_top||0)+(r.crop_right||0)+(r.crop_bottom||0)>0?i.qy`
                <div
                  style="margin-top: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: 8px; border-left: 4px solid var(--primary-color);"
                >
                  <div
                    style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                  >
                    <ha-icon icon="mdi:crop" style="font-size: 14px; margin-right: 6px;"></ha-icon>
                    ${(0,p.kg)("editor.camera.crop.active_applied",s,"Active Crops Applied")}
                  </div>
                  <div
                    style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                  >
                    L: ${r.crop_left||0}% | T: ${r.crop_top||0}% | R:
                    ${r.crop_right||0}% | B: ${r.crop_bottom||0}%
                  </div>
                </div>
              `:""}

          <!-- Reset All Crops Button -->
          <div style="margin-top: 20px; text-align: center;">
            <button
              style="
                padding: 8px 16px;
                border: 1px solid var(--primary-color);
                border-radius: 6px;
                background: transparent;
                color: var(--primary-color);
                cursor: pointer;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.2s ease;
              "
              @click=${()=>a({crop_left:0,crop_top:0,crop_right:0,crop_bottom:0})}
              @mouseover=${e=>{const t=e.target;t.style.background="var(--primary-color)",t.style.color="white"}}
              @mouseout=${e=>{const t=e.target;t.style.background="transparent",t.style.color="var(--primary-color)"}}
            >
              <ha-icon icon="mdi:crop-free" style="margin-right: 6px; font-size: 14px;"></ha-icon>
              ${(0,p.kg)("editor.camera.crop.reset_all",s,"Reset All Crops")}
            </button>
          </div>
        </div>

        <!-- Link configuration intentionally omitted for Camera module per design guidelines -->

        <!-- Unified Template Section -->
        <div class="template-section">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,p.kg)("editor.camera.unified_template.toggle",s,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,p.kg)("editor.camera.unified_template.cheatsheet",s,"Template cheatsheet")}"
                  @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"camera"}}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(t,{unified_template_mode:r.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>a({unified_template_mode:e.detail.value.unified_template_mode}))}
            </div>
            <div class="template-description">
              ${(0,p.kg)("editor.camera.unified_template.desc",s,"Return JSON: entity, visible, overlay_text, overlay_color — or a plain entity_id string.")}
            </div>
          </div>

          ${r.unified_template_mode?i.qy`
                <div
                  class="template-content"
                  @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                  @dragstart=${e=>e.stopPropagation()}
                  @insert-snippet=${e=>{var t,n,i;const a=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==a?void 0:a.insertAtCursor)||void 0===t||t.call(a,null!==(i=null===(n=e.detail)||void 0===n?void 0:n.value)&&void 0!==i?i:"")}}
                >
                  <ultra-template-editor
                    .hass=${t}
                    .value=${r.unified_template||""}
                    .placeholder=${"{\n  \"entity\": \"{{ 'camera.outdoor' if is_state('weather.home', 'sunny') else 'camera.indoor' }}\"\n}"}
                    .minHeight=${100}
                    .maxHeight=${300}
                    @value-changed=${e=>{a({unified_template:e.detail.value})}}
                  ></ultra-template-editor>
                </div>
              `:""}
        </div>
      </div>
    `}renderActionsTab(e,t,n,i){return c.A.render(e,t,e=>i(e))}renderPreview(e,t,n,r){var s,l,c,d,m;const h=e,b=h,y=(null===(s=t.locale)||void 0===s?void 0:s.language)||"en",x=!!h.unified_template_mode&&!(!h.unified_template||!String(h.unified_template).trim());if(!(x||h.entity&&""!==h.entity.trim()))return this.renderGradientErrorState((0,p.kg)("editor.camera.error_no_entity",y,"Select Camera Entity"),(0,p.kg)("editor.camera.error_no_entity_desc",y,"Choose a camera entity in the General tab"),"mdi:camera-outline");if(x&&!String(h.unified_template).trim())return this.renderGradientErrorState((0,p.kg)("editor.camera.error_no_template",y,"Configure Template"),(0,p.kg)("editor.camera.error_no_template_desc",y,"Enter unified template in the General tab"),"mdi:camera-outline");const _=b.design||{};let w,k,$,S;if(h.unified_template_mode&&h.unified_template&&(!this._templateService&&t?this._templateService=new u.I(t):this._templateService&&t&&this._templateService.updateHass(t),t)){t.__uvc_template_strings||(t.__uvc_template_strings={});const e=(0,v.KD)(h.unified_template,t,n),i=this._hashString(e),a=`unified_camera_${h.id}_${i}`;if(this._templateService){const i=(0,g.pL)(h.entity||"",t,{camera_name:h.camera_name,live_view:h.live_view}),o=(0,g.jh)(h.entity||"",t);this._templateService.subscribeToTemplate(e,a,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},i,n,o)}const o=null===(l=t.__uvc_template_strings)||void 0===l?void 0:l[a];if(o&&""!==String(o).trim()){const e=(0,f.cv)(o);if(!(0,f.HD)(e)){const t=(0,f.B8)(e)||e.entity;t&&(w=t),void 0!==e.visible&&(k=e.visible),e.overlay_text&&($=e.overlay_text),e.overlay_color&&(S=e.overlay_color)}}}if(!1===k)return i.qy``;let C,T=w||h.entity;if(C="live"===(h.view_mode||"auto")?"live":"auto",this._isEditorOpen()){const e=null!==(c=this._lastAppliedEntity)&&void 0!==c?c:T,n=null!==(d=this._lastAppliedLive)&&void 0!==d?d:"live"===C;T&&this._scheduleCameraUpdate(T,"live"===C,h,t),T=e||"",this._lastAppliedLive=n}else{const e=!!T&&this._isValidCameraEntity(t,T);this._lastAppliedEntity=e?T:this._lastAppliedEntity,this._lastAppliedLive="live"===C}const E=T?t.states[T]:null,A=!E||"unavailable"===E.state,z=this._isAudioActive(h);let L;h.unified_template_mode&&T===this._lastRenderedEntity&&T?L=`camera_${h.id}_${T}_audio_${z}`:(this._lastRenderedEntity=T,L=`camera_${h.id}_${T||"none"}_audio_${z}_${Date.now()}`),this._cameraStableKeys.set(h.id,L);const M=$||h.camera_name||(E?E.attributes.friendly_name||E.entity_id:"Camera"),R={width:"100%",maxWidth:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"left"===_.alignment?"flex-start":"right"===_.alignment?"flex-end":"center",justifyContent:"center",color:_.color||this.getTextColor(b),fontFamily:_.font_family||this.getTextFont(b),fontSize:_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(b),fontWeight:_.font_weight||this.getTextWeight(b),textTransform:_.text_transform||void 0,letterSpacing:_.letter_spacing||void 0,lineHeight:_.line_height||void 0,textShadow:_.text_shadow||void 0},F=h.crop_left||0,O=h.crop_right||0,j=h.crop_top||0,D=h.crop_bottom||0,N=_.width&&""!==_.width,I=_.height&&""!==_.height,q=h.width||320,H=h.height||180,P=q*(100-F-O)/100,U=H*(100-j-D)/100,W=F>0||O>0||j>0||D>0,B=W?-q*F/100:0,V=W?-H*j/100:0,X=h.rotation||0,Y={objectFit:"cover",width:W?`${q}px`:"100%",height:W?`${H}px`:"100%",display:"block",position:W?"absolute":"static",left:W?`${B}px`:"auto",top:W?`${V}px`:"auto",transform:0!==X?`rotate(${X}deg)`:"",transition:"all 0.3s ease",borderRadius:_.border_radius||"0px"},K={width:_.width||(N?"100%":`${Math.max(50,P)}px`),height:_.height||(I?"auto":`${Math.max(50,U)}px`),maxWidth:_.max_width||void 0,minWidth:_.min_width||void 0,maxHeight:_.max_height||void 0,minHeight:_.min_height||void 0,position:"relative",overflow:_.overflow||"hidden",borderRadius:_.border_radius||"0px",background:_.background_color||"transparent",backgroundImage:this.getBackgroundImageWithDesign(_,b,t)||void 0,border:this.getBorderWithDesign(_,b)||void 0,padding:"0",margin:this.getMarginWithDesign(_,b),boxShadow:_.box_shadow||void 0,backdropFilter:_.backdrop_filter||void 0,clipPath:_.clip_path||void 0},G=h.name_position||"top-left",Z=this.getCameraNamePositionStyles(G,b,_,S),J="dashboard"===r,Q="live"===(h.view_mode||"auto"),ee=e=>{if(!Q)return;const t=this._isAudioActive(h,J);if(!t)return;const n=e.currentTarget||e.target.closest(".camera-image-container"),i=null==n?void 0:n.querySelector("hui-image");i&&this._ensureAudioState(i,h,t)},te=!!Q&&this._isAudioActive(h,J),ne=i.qy`
      <div
        class="camera-module-container"
        data-uc-camera-id="${h.id}"
        style="${this.buildStyleString(R)}"
      >
        <div
          class="camera-image-container"
          style="${this.buildStyleString(K)}"
          @click=${ee}
          @touchstart=${ee}
        >
          ${T?A?i.qy`
                  <div
                    class="camera-unavailable"
                    style="${this.buildStyleString(Object.assign(Object.assign({},Y),{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"var(--error-color, #f44336)",color:_.color||this.getTextColor(b),position:"static",left:"auto",top:"auto",fontFamily:_.font_family||this.getTextFont(b)}))}"
                  >
                    ${h.fallback_image?i.qy`
                          <img
                            src=${h.fallback_image}
                            alt="Fallback"
                            style="max-width: 100%; max-height: 100%; object-fit: cover;"
                          />
                        `:i.qy`
                          <ha-icon
                            icon="mdi:camera-off"
                            style="font-size: 48px; margin-bottom: 8px;"
                          ></ha-icon>
                          <span
                            style="font-weight: ${_.font_weight||this.getTextWeight(b)}; font-size: ${_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(b)};"
                            >Camera Unavailable</span
                          >
                          <span
                            style="font-size: ${_.font_size&&"number"==typeof _.font_size?`${Math.max(10,_.font_size-2)}px`:this.getSmallTextSize(b)}; margin-top: 4px; opacity: 0.9;"
                            >Entity: ${T}</span
                          >
                        `}
                  </div>
                  ${!1!==h.show_name?i.qy`
                        <div
                          class="camera-name-overlay"
                          style="${this.buildStyleString(Z)}"
                        >
                          ${M}
                        </div>
                      `:""}
                `:(0,a.P)(Q&&E?i.qy`
                        <!-- Live mode: use ha-camera-stream directly so muted/controls reach ha-web-rtc-player -->
                        <ha-camera-stream
                          ${(0,o.K)(this._huiImageRef)}
                          data-camera-key=${this._cameraStableKeys.get(h.id)||T}
                          .hass=${t}
                          .stateObj=${E}
                          .muted=${!te}
                          .controls=${!0===h.show_controls}
                          style="${this.buildStyleString(Y)}"
                          class="camera-image"
                          @load=${e=>{const t=e.target,n=t.closest(".camera-image-container");if(n){const e=n.querySelector(".camera-name-overlay"),i=n.querySelector(".camera-fullscreen-icon");setTimeout(()=>{this.repositionPreviewOverlays(t,e,i,n)},100)}this._ensureAudioState(e.target,h,te)}}
                        ></ha-camera-stream>
                        ${!1!==h.show_name?i.qy`
                              <div
                                class="camera-name-overlay"
                                style="${this.buildStyleString(Z)}"
                              >
                                ${M}
                              </div>
                            `:""}
                      `:i.qy`
                        <!-- Auto/snapshot mode: use hui-image for snapshot + tap-to-live behaviour -->
                        <hui-image
                          ${(0,o.K)(this._huiImageRef)}
                          data-camera-key=${this._cameraStableKeys.get(h.id)||T}
                          .hass=${t}
                          .cameraImage=${T}
                          .cameraView=${"auto"}
                          style="${this.buildStyleString(Y)}"
                          class="camera-image"
                          @error=${()=>{}}
                          @load=${e=>{const n=e.target,i=n.closest(".camera-image-container");if(i){const e=i.querySelector(".camera-name-overlay"),t=i.querySelector(".camera-fullscreen-icon");setTimeout(()=>{this.repositionPreviewOverlays(n,e,t,i)},100)}"snapshot"===(h.view_mode||"auto")?this._setupSnapshotRefresh(h,T||"",t):this._clearSnapshotRefresh(h.id)}}
                        ></hui-image>
                        ${!1!==h.show_name?i.qy`
                              <div
                                class="camera-name-overlay"
                                style="${this.buildStyleString(Z)}"
                              >
                                ${M}
                              </div>
                            `:""}
                      `):i.qy`
                <div
                  class="camera-unavailable"
                  style="${this.buildStyleString(Object.assign(Object.assign({},Y),{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"var(--warning-color, #ff9800)",color:_.color||this.getTextColor(b),position:"static",left:"auto",top:"auto",fontFamily:_.font_family||this.getTextFont(b)}))}"
                >
                  <ha-icon
                    icon="mdi:camera-plus"
                    style="font-size: 48px; margin-bottom: 8px;"
                  ></ha-icon>
                  <span
                    style="font-weight: ${_.font_weight||this.getTextWeight(b)}; font-size: ${_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(b)};"
                    >No Camera Selected</span
                  >
                  <span
                    style="font-size: ${_.font_size&&"number"==typeof _.font_size?`${Math.max(10,_.font_size-2)}px`:this.getSmallTextSize(b)}; margin-top: 4px; opacity: 0.9;"
                    >Choose a camera entity below</span
                  >
                </div>
                ${!1!==h.show_name?i.qy`
                      <div
                        class="camera-name-overlay"
                        style="${this.buildStyleString(Z)}"
                      >
                        ${M}
                      </div>
                    `:""}
              `}
        </div>
      </div>
    `,ie=(null===(m=h.design)||void 0===m||m.hover_effect,this.getHoverEffectClass(e)),ae=this.buildStyleString(this.buildDesignStyles(e,t)),oe=this.hasActiveLink(h)?i.qy`<div
          class="camera-module-clickable ${ie}"
          style="${ae}"
          @click=${e=>this.handleClick(e,h,t)}
          @dblclick=${e=>this.handleDoubleClick(e,h,t)}
          @mousedown=${e=>this.handleMouseDown(e,h,t)}
          @mouseup=${e=>this.handleMouseUp(e,h,t)}
          @mouseleave=${e=>this.handleMouseLeave(e,h,t)}
          @touchstart=${e=>this.handleTouchStart(e,h,t)}
          @touchend=${e=>this.handleTouchEnd(e,h,t)}
        >
          ${ne}
        </div>`:i.qy`<div class="camera-module-container ${ie}" style="${ae}">${ne}</div>`;return this.wrapWithAnimation(oe,e,t)}renderLogicTab(e,t,n,i){return d.X.render(e,t,e=>i(e))}validate(e){const t=e,n=[...super.validate(e).errors];return"snapshot"===t.view_mode&&t.refresh_interval&&(t.refresh_interval<1||t.refresh_interval>300)&&n.push("Refresh interval must be between 1 and 300 seconds for snapshot mode"),t.border_radius&&isNaN(Number(t.border_radius))&&n.push("Border radius must be a number"),void 0!==t.rotation&&null!==t.rotation&&(isNaN(Number(t.rotation))||t.rotation<0||t.rotation>360)&&n.push("Rotation must be a number between 0 and 360 degrees"),t.tap_action&&t.tap_action.action&&n.push(...this.validateAction(t.tap_action)),t.hold_action&&t.hold_action.action&&n.push(...this.validateAction(t.hold_action)),t.double_tap_action&&t.double_tap_action.action&&n.push(...this.validateAction(t.double_tap_action)),{valid:0===n.length,errors:n}}handleClick(e,t,n,i){e.preventDefault(),this.clickTimeout&&clearTimeout(this.clickTimeout),this.clickTimeout=setTimeout(()=>{this.handleTapAction(e,t,n,i)},300)}handleDoubleClick(e,t,n,i){e.preventDefault(),this.clickTimeout&&(clearTimeout(this.clickTimeout),this.clickTimeout=null),this.handleDoubleAction(e,t,n,i)}handleMouseDown(e,t,n,i){this.isHolding=!1,this.holdTimeout=setTimeout(()=>{this.isHolding=!0,this.handleHoldAction(e,t,n,i)},500)}handleMouseUp(e,t,n){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=null)}handleMouseLeave(e,t,n){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=null),this.isHolding=!1}handleTouchStart(e,t,n,i){this.handleMouseDown(e,t,n,i)}handleTouchEnd(e,t,n){this.handleMouseUp(e,t,n)}handleTapAction(e,t,n,i){if(!this.isHolding)if(!0!==t.tap_opens_fullscreen)if(t.tap_action){const a="default"===t.tap_action.action?{action:"more-info",entity:t.entity}:t.tap_action;m.K.handleAction(a,n,e.target,i,t.entity,t)}else t.entity&&m.K.handleAction({action:"more-info",entity:t.entity},n,e.target,i,t.entity,t);else this.handleFullscreenClick(e,t,i)}handleHoldAction(e,t,n,i){t.hold_action&&"nothing"!==t.hold_action.action&&m.K.handleAction(t.hold_action,n,e.target,i,t.entity,t)}handleDoubleAction(e,t,n,i){t.double_tap_action&&"nothing"!==t.double_tap_action.action&&m.K.handleAction(t.double_tap_action,n,e.target,i,t.entity,t)}handleFullscreenClick(e,t,i){e.stopPropagation(),e.preventDefault(),!1!==(null==i?void 0:i.haptic_feedback)&&Promise.resolve().then(n.bind(n,1340)).then(({forwardHaptic:e})=>{e("medium")});const a=e.currentTarget||e.target;this.createFullscreenModal(t,a)}createFullscreenModal(e,t){var n;document.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(e=>e.remove());const{host:i,zIndex:a}=(0,y.I)(t,h.Mu.CAMERA_FULLSCREEN_OVERLAY),o=a>=h.Mu.GRAPH_TOOLTIP?a:a+1;let s=e.entity;if(e.unified_template_mode&&e.unified_template)try{if(null===(n=document.querySelector("home-assistant"))||void 0===n?void 0:n.hass){const t=e.unified_template.match(/['"]([^'"]+)['"]/);t&&(s=t[1])}}catch(e){}if(!s)return void r.f.error("No camera entity available");const l="ultra-camera-fullscreen-"+Date.now(),c=document.createElement("div");c.id=l,c.style.cssText=`\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      background: rgba(0,0,0,0.95) !important;\n      z-index: ${a} !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      backdrop-filter: blur(10px) !important;\n      touch-action: none !important;\n      user-select: none !important;\n      -webkit-user-select: none !important;\n      -webkit-touch-callout: none !important;\n    `;const d=document.createElement("div");d.style.cssText="\n      position: relative !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      overflow: hidden !important;\n      background: black !important;\n    ";const m=document.createElement("div");m.id=l+"-camera-container",m.style.cssText="\n      width: 100% !important;\n      height: 100% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      min-height: 300px !important;\n      touch-action: none !important;\n      user-select: none !important;\n    ";const p=document.createElement("button");if(p.innerHTML="✕",p.style.cssText=`\n      position: absolute !important;\n      top: 20px !important;\n      right: 20px !important;\n      width: 50px !important;\n      height: 50px !important;\n      border: 3px solid rgba(255,255,255,0.7) !important;\n      background: rgba(0,0,0,0.8) !important;\n      color: white !important;\n      font-size: 30px !important;\n      font-weight: bold !important;\n      cursor: pointer !important;\n      border-radius: 50% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      z-index: ${o} !important;\n      backdrop-filter: blur(4px) !important;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n      font-family: Arial, sans-serif !important;\n      line-height: 1 !important;\n      transition: all 0.2s ease !important;\n    `,!1!==e.show_name){const t=document.createElement("div");t.style.cssText="\n        position: absolute !important;\n        top: 20px !important;\n        left: 20px !important;\n        padding: 10px 16px !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        border-radius: 8px !important;\n        font-size: 16px !important;\n        font-weight: 500 !important;\n        backdrop-filter: blur(4px) !important;\n        text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;\n        border: 1px solid rgba(255,255,255,0.2) !important;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;\n      ",t.textContent=e.camera_name||s,d.appendChild(t)}d.appendChild(m),d.appendChild(p),c.appendChild(d),i.appendChild(c);const u=()=>{const e=c._restoreViewport;e&&e(),c.remove(),document.removeEventListener("keydown",v),document.body.style.overflow=""},g=()=>{c.removeAttribute("inert"),p.removeAttribute("inert"),c.style.pointerEvents="auto",p.style.pointerEvents="auto",p.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),u()},!0),c.addEventListener("click",e=>{e.target===c&&(e.stopPropagation(),e.preventDefault(),u())},!0)};g(),setTimeout(g,100);const f=new MutationObserver(e=>{e.forEach(e=>{if("attributes"===e.type&&"inert"===e.attributeName){const t=e.target;t!==c&&t!==p||(t.removeAttribute("inert"),t.style.pointerEvents="auto")}})});f.observe(c,{attributes:!0}),f.observe(p,{attributes:!0}),setTimeout(()=>{var t,n;const i=document.getElementById(l),a=document.getElementById(l+"-camera-container");if(i&&a){const i=null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.hass,o=(e.view_mode,!0===e.audio_enabled);if(i){const t=null===(n=i.states)||void 0===n?void 0:n[s||""],r=document.createElement("ha-camera-stream");r.setAttribute("data-camera-fullscreen",s||""),r.hass=i,r.stateObj=t,r.muted=!o,r.controls=!1,r.addEventListener("load",()=>{this._ensureAudioState(r,e,o)}),setTimeout(()=>{this._ensureAudioState(r,e,o)},200),r.style.cssText="\n            width: 100vw !important;\n            height: 100vh !important;\n            display: block !important;\n            object-fit: contain !important;\n            transition: transform 0.2s ease !important;\n            cursor: grab !important;\n            touch-action: none !important;\n          ",a.innerHTML="",a.appendChild(r),this.addPinchZoomToCamera(r,a)}else{const e=document.createElement("img");e.src=`/api/camera_proxy/${s}?t=${Date.now()}`,e.style.cssText="\n            width: 100vw !important;\n            height: 100vh !important;\n            display: block !important;\n            object-fit: contain !important;\n            cursor: grab !important;\n            touch-action: none !important;\n          ",a.innerHTML="",a.appendChild(e),this.addPinchZoomToCamera(e,a)}}},50);const v=e=>{"Escape"===e.key&&u()};document.addEventListener("keydown",v),document.body.style.overflow="hidden";const b=document.querySelector('meta[name="viewport"]'),x=(null==b?void 0:b.content)||"";b&&(b.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),c._restoreViewport=()=>{b&&(b.content=x)}}addPinchZoomToCamera(e,t){let n=1,i=0,a=0,o=0,r=!1,s=!1,l=0,c=0,d=0,m=0;const p=()=>{e.style.transform=`translate(${i}px, ${a}px) scale(${n})`,e.style.transformOrigin="center center",e.style.transition=r||s?"none":"transform 0.2s ease"},h=(e,t)=>{const n=e.clientX-t.clientX,i=e.clientY-t.clientY;return Math.sqrt(n*n+i*i)};t.addEventListener("touchstart",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1}),t.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});const u=()=>{if(n>1){const{maxX:t,maxY:o}=(()=>{const t=e.getBoundingClientRect(),i=t.width*n,a=t.height*n;return{maxX:Math.max(0,(i-window.innerWidth)/2),maxY:Math.max(0,(a-window.innerHeight)/2)}})();i=Math.max(-t,Math.min(t,i)),a=Math.max(-o,Math.min(o,a))}};e.addEventListener("touchstart",e=>{2===e.touches.length?(e.preventDefault(),e.stopPropagation(),r=!0,o=h(e.touches[0],e.touches[1])):1===e.touches.length&&n>1&&(d=e.touches[0].clientX,m=e.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",e=>{if(r&&2===e.touches.length){e.preventDefault(),e.stopPropagation();const t=h(e.touches[0],e.touches[1]);o>0&&(n*=t/o,n=Math.max(1,Math.min(6,n)),n>1&&u(),p()),o=t}else if(1===e.touches.length&&n>1){e.preventDefault();const t=e.touches[0].clientX-d,n=e.touches[0].clientY-m;i+=t,a+=n,u(),p(),d=e.touches[0].clientX,m=e.touches[0].clientY}},{passive:!1}),e.addEventListener("touchend",t=>{0===t.touches.length?(r=!1,n<1.02&&(n=1,i=0,a=0),p(),e.style.cursor=n>1?"grab":"default"):1===t.touches.length&&r&&(r=!1,n<1.02&&(n=1,i=0,a=0),p())}),e.addEventListener("touchcancel",()=>{r=!1,n<1.02&&(n=1,i=0,a=0),p(),e.style.cursor=n>1?"grab":"default"}),e.addEventListener("mousedown",t=>{n>1&&(t.preventDefault(),s=!0,l=t.clientX,c=t.clientY,e.style.cursor="grabbing")}),document.addEventListener("mousemove",e=>{if(s&&n>1){e.preventDefault();const t=e.clientX-l,n=e.clientY-c;i+=t,a+=n,u(),p(),l=e.clientX,c=e.clientY}}),document.addEventListener("mouseup",()=>{s&&(s=!1,n<1.02&&(n=1,i=0,a=0,p()),e.style.cursor=n>1?"grab":"default")}),e.addEventListener("wheel",t=>{t.preventDefault();const o=t.deltaY>0?-.15:.15;n=Math.max(1,Math.min(6,n+o)),n<1.02?(n=1,i=0,a=0):n>1&&u(),p(),e.style.cursor=n>1?"grab":"default"},{passive:!1});let g=0,f=0,v=0;e.addEventListener("touchend",t=>{const o=Date.now(),r=o-g;if(r<300&&r>0&&0===t.touches.length)if(n>1)n=1,i=0,a=0,p(),e.style.cursor="default";else{const o=t.changedTouches[0],r=e.getBoundingClientRect(),s=o.clientX-r.left-r.width/2,l=o.clientY-r.top-r.height/2;n=2.5,i=-s*(n-1),a=-l*(n-1),u(),p(),e.style.cursor="grab"}t.changedTouches.length>0&&(f=t.changedTouches[0].clientX,v=t.changedTouches[0].clientY),g=o})}trySimpleModal(e,t){var n;try{let e=t.entity;if(t.unified_template_mode&&t.unified_template)try{if(null===(n=document.querySelector("home-assistant"))||void 0===n?void 0:n.hass){const n=t.unified_template.match(/['"]([^'"]+)['"]/);n&&(e=n[1])}}catch(e){}if(!e)return!1;const i="camera-fullscreen-"+Date.now(),a=t.camera_name||e,o=`\n        <div id="${i}" style="\n          position: fixed !important;\n          top: 0 !important;\n          left: 0 !important;\n          right: 0 !important;\n          bottom: 0 !important;\n          background: rgba(0,0,0,0.95) !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n          z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n          backdrop-filter: blur(10px) !important;\n        " onclick="if(event.target === this) this.remove()">\n          <div style="\n            position: relative !important;\n            max-width: 95vw !important;\n            max-height: 95vh !important;\n            background: black !important;\n            border-radius: 12px !important;\n            overflow: hidden !important;\n            box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important;\n          ">\n            <img src="/api/camera_proxy/${e}?t=${Date.now()}" style="\n              max-width: 95vw !important;\n              max-height: 95vh !important;\n              width: auto !important;\n              height: auto !important;\n              display: block !important;\n              object-fit: contain !important;\n              border-radius: 12px !important;\n            " />\n            <button onclick="document.getElementById('${i}').remove()" style="\n              position: absolute !important;\n              top: 16px !important;\n              right: 16px !important;\n              width: 48px !important;\n              height: 48px !important;\n              border: 2px solid rgba(255,255,255,0.5) !important;\n              background: rgba(0,0,0,0.8) !important;\n              color: white !important;\n              font-size: 28px !important;\n              cursor: pointer !important;\n              border-radius: 50% !important;\n              display: flex !important;\n              align-items: center !important;\n              justify-content: center !important;\n              z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n              backdrop-filter: blur(4px) !important;\n              box-shadow: 0 2px 8px rgba(0,0,0,0.5) !important;\n              font-family: monospace !important;\n              line-height: 1 !important;\n            " onmouseover="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='scale(1.1)'" onmouseout="this.style.background='rgba(0,0,0,0.8)'; this.style.transform='scale(1)'">\n              ✕\n            </button>\n            ${!1!==t.show_name?`\n              <div style="\n                position: absolute !important;\n                top: 16px !important;\n                left: 16px !important;\n                padding: 8px 16px !important;\n                background: rgba(0,0,0,0.7) !important;\n                color: white !important;\n                border-radius: 6px !important;\n                font-size: 16px !important;\n                font-weight: 500 !important;\n                backdrop-filter: blur(4px) !important;\n                text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;\n                z-index: 10 !important;\n              ">\n                ${a}\n              </div>\n            `:""}\n          </div>\n        </div>\n      `;document.body.insertAdjacentHTML("beforeend",o);const r=e=>{if("Escape"===e.key){const e=document.getElementById(i);e&&(e.remove(),document.removeEventListener("keydown",r))}};return document.addEventListener("keydown",r),!0}catch(e){return console.warn("Simple modal failed:",e),!1}}tryNativeFullscreen(e,t){try{const t=document.createElement("div");t.style.cssText="\n        width: 100vw;\n        height: 100vh;\n        background: black;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n      ";const n=e.cloneNode(!0);n.style.cssText="\n        max-width: 100vw;\n        max-height: 100vh;\n        width: auto;\n        height: auto;\n        object-fit: contain;\n      ";const i=document.createElement("button");i.innerHTML="✕",i.style.cssText=`\n        position: absolute;\n        top: 20px;\n        right: 20px;\n        background: rgba(0,0,0,0.7);\n        color: white;\n        border: none;\n        padding: 10px 15px;\n        border-radius: 50%;\n        cursor: pointer;\n        font-size: 20px;\n        z-index: ${h.Mu.DIALOG_CONTENT};\n      `,i.onclick=()=>{document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},t.appendChild(n),t.appendChild(i),document.body.appendChild(t);const a=t.requestFullscreen||t.webkitRequestFullscreen||t.mozRequestFullScreen||t.msRequestFullscreen;if(a){a.call(t);const e=()=>{t.parentNode&&t.parentNode.removeChild(t),document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e)};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),!0}}catch(e){console.warn("Native fullscreen failed:",e)}return!1}enterFullscreen(e,t){var n,i,a,o;const r=document.createElement("div");r.className="camera-fullscreen-overlay",r.style.cssText=`\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      background: rgba(0, 0, 0, 0.95);\n      z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT};\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      backdrop-filter: blur(10px);\n      animation: fadeIn 0.3s ease;\n      pointer-events: auto;\n    `;const s=document.createElement("div");s.className="camera-fullscreen-container",s.style.cssText="\n      max-width: 95vw;\n      max-height: 95vh;\n      width: auto;\n      height: auto;\n      border-radius: 12px;\n      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n      position: relative;\n      animation: scaleIn 0.3s ease;\n      background: transparent;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      pointer-events: none;\n    ";let l=t.entity;if(t.unified_template_mode&&t.unified_template)try{const e=null===(n=document.querySelector("home-assistant"))||void 0===n?void 0:n.hass;if(e){let n=t.unified_template;const i=n.match(/states\(['"]([^'"]+)['"]\)/g);i&&i.forEach(t=>{var i;const a=null===(i=t.match(/states\(['"]([^'"]+)['"]\)/))||void 0===i?void 0:i[1];if(!a)return;const o=null==e?void 0:e.states[a],r=o?o.state:"unknown";n=n.replace(t,`'${r}'`)});const a=n.match(/is_state\(['"]([^'"]+)['"],\s*['"]([^'"]+)['"]\)/g);a&&a.forEach(t=>{const i=t.match(/is_state\(['"]([^'"]+)['"],\s*['"]([^'"]+)['"]\)/);if(!i)return;const[,a,o]=i,r=null==e?void 0:e.states[a],s=r&&r.state===o;n=n.replace(t,s?"True":"False")});const o=n.match(/['"]([^'"]+)['"] if (.+?) else ['"]([^'"]+)['"]/);if(o){const[,e,t,n]=o;l=t.includes("True")?e:n}else{const e=n.match(/['"]([^'"]+)['"]/);e&&(l=e[1])}}}catch(e){console.error("Template evaluation error:",e),l=t.entity}if(l){const e=null===(i=document.querySelector("home-assistant"))||void 0===i?void 0:i.hass;if(e){const n=document.createElement("hui-image");n.hass=e,n.cameraImage=l,n.cameraView=t.live_view?"live":"auto";const i=!0===t.audio_enabled;if(n.muted=!i,n.addEventListener("load",()=>{this._ensureAudioState(n,t,i)}),setTimeout(()=>{this._ensureAudioState(n,t,i)},200),n.style.cssText="\n          width: 100%;\n          height: 100%;\n          max-width: 95vw;\n          max-height: 95vh;\n          object-fit: contain;\n          border-radius: 12px;\n          pointer-events: auto;\n        ",s.appendChild(n),!1!==t.show_name){const i=t.camera_name||(null===(o=null===(a=e.states[l])||void 0===a?void 0:a.attributes)||void 0===o?void 0:o.friendly_name)||l,r=document.createElement("div");r.className="camera-name-overlay-fullscreen",r.style.cssText="\n              position: absolute;\n              top: 16px;\n              left: 16px;\n              padding: 8px 16px;\n              background: rgba(0, 0, 0, 0.7);\n              color: white;\n              border-radius: 6px;\n              font-size: 16px;\n              font-weight: 500;\n              backdrop-filter: blur(4px);\n              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\n              z-index: 10;\n            ",r.textContent=i,n.addEventListener("load",()=>{this.repositionOverlaysToVideoArea(n,r,s)}),s.appendChild(r)}}else{const e=document.createElement("div");e.style.cssText="\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n          color: white;\n          font-size: 20px;\n          text-align: center;\n          padding: 40px;\n        ",e.innerHTML='\n          <ha-icon icon="mdi:camera-off" style="font-size: 64px; margin-bottom: 16px;"></ha-icon>\n          <div>Home Assistant not available</div>\n        ',s.appendChild(e)}}else{const e=document.createElement("div");e.style.cssText="\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        color: white;\n        font-size: 20px;\n        text-align: center;\n        padding: 40px;\n      ",e.innerHTML='\n        <ha-icon icon="mdi:camera-off" style="font-size: 64px; margin-bottom: 16px;"></ha-icon>\n        <div>No Camera Available</div>\n      ',s.appendChild(e)}const c=document.createElement("div");c.className="camera-minimize-icon",c.style.cssText=`\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      padding: 6px;\n      background: transparent;\n      color: white;\n      font-size: 32px;\n      cursor: pointer;\n      z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT};\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: all 0.2s ease;\n      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6);\n      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));\n      pointer-events: auto;\n    `,c.innerHTML='<ha-icon icon="mdi:close" style="pointer-events: none;"></ha-icon>',c.title="Exit fullscreen",c.addEventListener("mouseenter",()=>{c.style.transform="scale(1.15)",c.style.textShadow="0 1px 4px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.7)",c.style.filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))"}),c.addEventListener("mouseleave",()=>{c.style.transform="scale(1)",c.style.textShadow="0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)",c.style.filter="drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8))"}),c.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),this.exitFullscreen(r)});const d=e=>{"Escape"===e.key&&(this.exitFullscreen(r),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),r.addEventListener("click",e=>{e.target===r&&(this.exitFullscreen(r),document.removeEventListener("keydown",d))}),r.appendChild(s),document.body.appendChild(r),document.body.appendChild(c),document.body.style.overflow="hidden";const m=e=>(e.preventDefault(),e.stopPropagation(),!1);document.addEventListener("contextmenu",m,!0),document.body.classList.add("camera-fullscreen-active"),r._escHandler=d,r._minimizeButton=c,r._contextMenuHandler=m}exitFullscreen(e){document.body.style.overflow="",document.body.classList.remove("camera-fullscreen-active");const t=e._escHandler;t&&document.removeEventListener("keydown",t);const n=e._contextMenuHandler;n&&document.removeEventListener("contextmenu",n,!0);const i=e._minimizeButton;i&&i.parentNode&&i.parentNode.removeChild(i),e.style.animation="fadeOut 0.2s ease",setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},200)}repositionPreviewOverlays(e,t,n,i){try{const a=i.getBoundingClientRect(),o=e.querySelector("img")||e;if(!o||!o.naturalWidth)return;const r=o.naturalWidth/o.naturalHeight,s=a.width/a.height;let l=a.width,c=a.height,d=0,m=0;if(r>s?(c=a.width/r,m=(a.height-c)/2):r<s&&(l=a.height*r,d=(a.width-l)/2),d>5||m>5){const e=8;t&&this.repositionOverlayElement(t,d,m,l,c,e),n&&this.repositionOverlayElement(n,d,m,l,c,e)}}catch(e){console.warn("Failed to calculate video area for preview overlay positioning:",e)}}repositionOverlayElement(e,t,n,i,a,o){var r;const s=e.getBoundingClientRect();if(!(null===(r=e.parentElement)||void 0===r?void 0:r.getBoundingClientRect()))return;const l=t+i-s.width-o,c=n+a-s.height-o,d=t+i-s.width-o,m=n+a-s.height-o;if(e.style.left&&""!==e.style.left){const n=parseInt(e.style.left);e.style.left=`${Math.min(Math.max(t+o,n),l)}px`}if(e.style.right&&""!==e.style.right){const n=parseInt(e.style.right);e.style.right=`${Math.min(Math.max(t+o,n),d)}px`}if(e.style.top&&""!==e.style.top){const t=parseInt(e.style.top);e.style.top=`${Math.min(Math.max(n+o,t),c)}px`}if(e.style.bottom&&""!==e.style.bottom){const t=parseInt(e.style.bottom);e.style.bottom=`${Math.min(Math.max(n+o,t),m)}px`}}repositionOverlaysToVideoArea(e,t,n){try{const i=n.getBoundingClientRect(),a=e.getBoundingClientRect(),o=i.width/i.height;let r=a.width,s=a.height;const l=e.querySelector("img")||e;if(l&&l.naturalWidth){const e=l.naturalWidth/l.naturalHeight;e>o?(r=i.width,s=i.width/e):(s=i.height,r=i.height*e)}const c=(i.width-r)/2,d=(i.height-s)/2;if(c>20||d>20){t.style.left=`${c+16}px`,t.style.top=`${d+16}px`;const e=n.querySelector(".camera-fullscreen-icon");if(e){const t=e;t.style.right=`${c+16}px`,t.style.top=`${d+16}px`}}}catch(e){console.warn("Failed to calculate video area for overlay positioning:",e)}}_handleDimensionChange(e,t,n,i){const a={};if(!1!==e.aspect_ratio_linked){const i=e.aspect_ratio_value||1.778;"width"===t?(a.width=n,a.height=Math.round(n/i)):(a.height=n,a.width=Math.round(n*i)),a.width&&(a.width<100||a.width>1e3)&&(a.width=Math.max(100,Math.min(1e3,a.width)),a.height=Math.round(a.width/i)),a.height&&(a.height<100||a.height>1e3)&&(a.height=Math.max(100,Math.min(1e3,a.height)),a.width=Math.round(a.height*i))}else a[t]=n;i(a)}getFullscreenIconPositionStyles(e,t,n={},i){const a={position:"absolute",padding:"6px",background:"transparent",color:"white",fontSize:"22px",cursor:"pointer",zIndex:"5",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",textShadow:"0 1px 3px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)",filter:"drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8))"},o=i===e,r=o?"40px":"8px";switch(this.getAdjustedPositionForCollision(e,i)){case"top-left":return Object.assign(Object.assign({},a),{top:o?r:"8px",left:"8px"});case"top-middle":return Object.assign(Object.assign({},a),{top:o?r:"8px",left:"50%",transform:"translateX(-50%)"});case"top-right":return Object.assign(Object.assign({},a),{top:o?r:"8px",right:"8px"});case"center":return Object.assign(Object.assign({},a),{top:o?"calc(50% + 20px)":"50%",left:"50%",transform:"translate(-50%, -50%)"});case"bottom-left":return Object.assign(Object.assign({},a),{bottom:o?r:"8px",left:"8px"});case"bottom-middle":return Object.assign(Object.assign({},a),{bottom:o?r:"8px",left:"50%",transform:"translateX(-50%)"});case"bottom-right":return Object.assign(Object.assign({},a),{bottom:o?r:"8px",right:"8px"});default:return Object.assign(Object.assign({},a),{top:"8px",right:"8px"})}}getAdjustedPositionForCollision(e,t){return e}getCameraNamePositionStyles(e,t,n={},i){const a={position:"absolute",padding:"6px 12px",background:"rgba(0, 0, 0, 0.7)",color:i||n.color||this.getTextColor(t),fontSize:n.font_size?"number"==typeof n.font_size?`${n.font_size}px`:n.font_size:this.getTextSize(t),fontWeight:n.font_weight||this.getTextWeight(t),fontFamily:n.font_family||this.getTextFont(t),borderRadius:"4px",zIndex:"0",pointerEvents:"none",backdropFilter:"blur(4px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textShadow:n.text_shadow||"0 1px 2px rgba(0, 0, 0, 0.8)",transition:"all 0.2s ease",boxSizing:"border-box"};switch(n.text_transform&&(a.textTransform=n.text_transform),n.letter_spacing&&(a.letterSpacing=n.letter_spacing),n.line_height&&(a.lineHeight=n.line_height),e){case"top-left":default:return Object.assign(Object.assign({},a),{top:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"top-right":return Object.assign(Object.assign({},a),{top:"8px",right:"8px",maxWidth:"calc(100% - 16px)"});case"top-middle":return Object.assign(Object.assign({},a),{top:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"center":return Object.assign(Object.assign({},a),{top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-left":return Object.assign(Object.assign({},a),{bottom:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"bottom-middle":return Object.assign(Object.assign({},a),{bottom:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-right":return Object.assign(Object.assign({},a),{bottom:"8px",right:"8px",maxWidth:"calc(100% - 16px)"})}}_hashString(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}hasActiveLink(e){const t=e.tap_action&&"nothing"!==e.tap_action.action,n=e.hold_action&&"nothing"!==e.hold_action.action,i=e.double_tap_action&&"nothing"!==e.double_tap_action.action,a=!0===e.tap_opens_fullscreen;return t||n||i||a||!!e.entity}_isAudioActive(e,t=!1){return this._audioOverrides.has(e.id)?this._audioOverrides.get(e.id):!t&&!0===e.audio_enabled}_toggleDashboardAudio(e,t){var n;if(e.preventDefault(),e.stopPropagation(),"live"!==(t.view_mode||"auto"))return;const i=!this._isAudioActive(t,!0);i===(!0===t.audio_enabled)?this._audioOverrides.delete(t.id):this._audioOverrides.set(t.id,i);const a=(null===(n=e.currentTarget)||void 0===n?void 0:n.closest(".camera-image-container"))||e.target.closest(".camera-image-container"),o=null==a?void 0:a.querySelector("hui-image");o&&this._ensureAudioState(o,t,i),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("ultra-card-template-update",{bubbles:!0,composed:!0,detail:{timestamp:Date.now(),source:"camera-audio-toggle",moduleId:t.id}}))}_ensureAudioState(e,t,n){if(!e||"live"!==(t.view_mode||"auto"))return;const i=void 0!==n?n:this._isAudioActive(t);this._lastAudioStates.set(t.id,i),void 0!==e.muted&&(e.muted=!i),this._applyAudioState(e,i),this._watchAudioTargets(e,t)}_applyAudioState(e,t){const n=[];[0,150,400,1e3,2e3].forEach(i=>{setTimeout(()=>{const i=(()=>{n.length=0;const t=new Set,i=[],a=e=>{e&&!t.has(e)&&(t.add(e),i.push(e))};for(a(e.shadowRoot||null),a(e);i.length;){const e=i.pop();if(!e)continue;if(e instanceof HTMLElement){const t=e.tagName.toLowerCase();x.has(t)&&n.push(e)}if(e instanceof HTMLVideoElement)return e;const t=e instanceof ShadowRoot||e instanceof Element?Array.from(e.children):[];for(const e of t){if(e instanceof HTMLVideoElement)return e;const t=e;t.shadowRoot&&a(t.shadowRoot),a(e)}}const o=e.video;return o instanceof HTMLVideoElement?o:null})();if(!i&&0===n.length)return;const a=e=>{e.muted=!t,e.volume=t?1:0,e.playsInline=!0,t&&e.paused&&!e.muted&&e.play().catch(()=>{})};i&&a(i),n.forEach(e=>{var n;try{if("muted"in e&&(e.muted=!t),"volume"in e&&(e.volume=t?1:0),"playsInline"in e&&(e.playsInline=!0),null===(n=e.toggleAttribute)||void 0===n||n.call(e,"muted",!t),e.video instanceof HTMLVideoElement&&a(e.video),t&&"function"==typeof e.play&&"boolean"==typeof e.paused){const t=e;t.paused&&t.play().catch(()=>{})}}catch(e){}})},i)})}_watchAudioTargets(e,t){if(!e)return;const n=t.id,i=e.shadowRoot||e;if(!i)return;const a=this._audioObservers.get(n);if((null==a?void 0:a.target)===i)return;null==a||a.observer.disconnect();const o=new MutationObserver(()=>{const n=this._lastAudioStates.get(t.id),i=void 0!==n?n:this._isAudioActive(t);this._applyAudioState(e,i)});o.observe(i,{childList:!0,subtree:!0}),this._audioObservers.set(n,{observer:o,target:i})}refreshCamera(e,t){var n,i;const a=null===(n=this._huiImageRef)||void 0===n?void 0:n.value;if(a&&a.cameraImage===e)return a.hass=Object.assign({},t),void(null===(i=a.requestUpdate)||void 0===i||i.call(a));const o=this.renderRoot||this.shadowRoot;o&&Array.from(o.querySelectorAll("hui-image")).forEach(n=>{var i;n.cameraImage===e&&(n.hass=Object.assign({},t),null===(i=n.requestUpdate)||void 0===i||i.call(n))})}_setupSnapshotRefresh(e,t,n){this._clearSnapshotRefresh(e.id);const i=1e3*(e.refresh_interval||10),a=setInterval(()=>{this.refreshCamera(t,n)},i);this._snapshotRefreshTimers.set(e.id,a)}_clearSnapshotRefresh(e){const t=this._snapshotRefreshTimers.get(e);t&&(clearInterval(t),this._snapshotRefreshTimers.delete(e))}getCameraImageUrl(e,t,n){if(!e||!t)return"";let i;try{i=t.hassUrl?`${t.hassUrl()}/api/camera_proxy/${e}`:`/api/camera_proxy/${e}`;const n=i.includes("?")?"&":"?";i+=`${n}token=${Date.now()}`}catch(t){i=`/api/camera_proxy/${e}?token=${Date.now()}`}return i}async getCameraImageBlob(e,t,n){try{const n=`/api/camera_proxy/${e}?t=${Date.now()}`,i=await fetch(n,{method:"GET",credentials:"include",headers:{Accept:"image/*","Cache-Control":"no-cache",Pragma:"no-cache"}});if(!i.ok)return await this.getCameraImageViaWebSocket(e,t);const a=await i.blob();return URL.createObjectURL(a)}catch(n){return await this.getCameraImageViaWebSocket(e,t)}}async getCameraImageViaWebSocket(e,t){try{const n=t.connection;if(!n)throw new Error("No WebSocket connection available");const i=await n.sendMessagePromise({type:"camera_thumbnail",entity_id:e});if(i&&i.content){const e=atob(i.content),t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);const n=new Uint8Array(t),a=new Blob([n],{type:"image/jpeg"});return URL.createObjectURL(a)}throw new Error("No image content received from WebSocket")}catch(e){return""}}async handleImageError(e,t){var n,i,a,o,r,s,l,c,d;const m=e.target;if(!m.dataset.triedBlob&&t.entity){m.dataset.triedBlob="true";try{const e=(null===(n=document.querySelector("home-assistant"))||void 0===n?void 0:n.hass)||(null===(i=document.querySelector("ha-panel-lovelace"))||void 0===i?void 0:i.hass)||(null===(a=window.hassConnection)||void 0===a?void 0:a.hass);if(e){const n=await this.getCameraImageBlob(t.entity,e,t.image_quality);if(n)return void(m.src=n)}}catch(e){}}if(t.fallback_image)m.src=t.fallback_image;else{m.style.display="none";const e=m.closest(".camera-image-container");if(e){const n=t.entity?null===(s=null===(r=null===(o=document.querySelector("home-assistant"))||void 0===o?void 0:o.hass)||void 0===r?void 0:r.states)||void 0===s?void 0:s[t.entity]:null,i=(null===(l=null==n?void 0:n.attributes)||void 0===l?void 0:l.brand)||(null===(c=null==n?void 0:n.attributes)||void 0===c?void 0:c.model)||"Unknown",a=(0,b.ZD)(String(i)),m=(0,b.ZD)(String(null!==(d=t.entity)&&void 0!==d?d:"")),p=t;if(e.innerHTML=`\n          <style>\n            @keyframes uc-camera-spin {\n              0% { transform: rotate(0deg); }\n              100% { transform: rotate(360deg); }\n            }\n            .uc-camera-error-panel .uc-camera-retry-btn:hover {\n              background: rgba(255, 255, 255, 0.3) !important;\n            }\n          </style>\n          <div\n            class="uc-camera-error-panel"\n            style="\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-color: var(--warning-color, #ff9800);\n            color: ${this.getTextColor(p)};\n            padding: 20px;\n            border-radius: 8px;\n            text-align: center;\n            min-height: 150px;\n            border: 1px solid rgba(255,255,255,0.2);\n            font-family: ${this.getTextFont(p)};\n          ">\n            <ha-icon icon="mdi:camera-off" style="font-size: 48px; margin-bottom: 12px; opacity: 0.9;"></ha-icon>\n            <span style="font-weight: ${this.getTextWeight(p)}; font-size: ${this.getTextSize(p)}; margin-bottom: 8px;">Camera Load Failed</span>\n            <span style="font-size: ${this.getSmallTextSize(p)}; margin-bottom: 8px; opacity: 0.9;">Entity: ${m}</span>\n            <span style="font-size: ${this.getSmallTextSize(p)}; margin-bottom: 12px; opacity: 0.8;">Camera Type: ${a}</span>\n            <div style="font-size: ${this.getSmallTextSize(p)}; opacity: 0.8; line-height: 1.4; margin-bottom: 12px;">\n              <div style="margin-bottom: 6px;">• Check camera entity is working in HA</div>\n              <div style="margin-bottom: 6px;">• Verify RTSP credentials in HA config</div>\n              <div>• Try refreshing the browser</div>\n            </div>\n            ${t.entity?`<button\n              type="button"\n              class="uc-camera-retry-btn"\n              style="\n                background: rgba(255,255,255,0.2);\n                border: 1px solid rgba(255,255,255,0.3);\n                color: white;\n                padding: 8px 16px;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: ${this.getSmallTextSize(p)};\n                font-family: ${this.getTextFont(p)};\n                transition: all 0.2s ease;\n              "\n            >\n              🔄 Retry Camera Load\n            </button>`:""}\n          </div>\n        `,t.entity){const n=e.querySelector(".uc-camera-retry-btn");n&&n.addEventListener("click",()=>{this._retryCameraImageLoad(e,t,p)})}}}}async _retryCameraImageLoad(e,t,n){var i;const a=t.entity;if(a&&(null===(i=document.querySelector("home-assistant"))||void 0===i?void 0:i.hass))try{const i=`/api/camera_proxy/${a}?t=${Date.now()}`,o=document.createElement("img");o.className="camera-image",o.style.cssText=`\n                  position: absolute;\n                  top: 0;\n                  left: 0;\n                  width: 100%;\n                  height: 100%;\n                  object-fit: ${t.image_fit||"cover"};\n                  border-radius: inherit;\n                `,o.onerror=e=>{"string"!=typeof e&&this.handleImageError(e,t)},o.onload=()=>{e.innerHTML="",e.appendChild(o)},o.src=i,e.innerHTML=`\n                  <style>\n                    @keyframes uc-camera-spin {\n                      0% { transform: rotate(0deg); }\n                      100% { transform: rotate(360deg); }\n                    }\n                  </style>\n                  <div style="\n                      display: flex;\n                      align-items: center;\n                      justify-content: center;\n                      flex-direction: column;\n                      background-color: var(--primary-color);\n                      color: ${this.getTextColor(n)};\n                      padding: 20px;\n                      border-radius: 8px;\n                      text-align: center;\n                      min-height: 150px;\n                      font-family: ${this.getTextFont(n)};\n                    ">\n                      <div style="\n                        width: 32px;\n                        height: 32px;\n                        border: 3px solid rgba(255,255,255,0.3);\n                        border-top: 3px solid white;\n                        border-radius: 50%;\n                        animation: uc-camera-spin 1s linear infinite;\n                        margin-bottom: 12px;\n                      "></div>\n                      <span style="font-weight: ${this.getTextWeight(n)}; font-size: ${this.getTextSize(n)};">Retrying Camera Load...</span>\n                    </div>\n                  `}catch(e){console.error("🎥 Retry failed:",e)}}getTextColor(e){return e.text_color||"white"}getTextSize(e){const t=e.text_size||14;return"number"==typeof t?`${t}px`:t}getSmallTextSize(e){const t=e.text_size||14;return`${"number"==typeof t?Math.max(10,t-2):12}px`}getTextWeight(e){return e.text_weight||"500"}getTextFont(e){return e.text_font||'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}styleObjectToCss(e){return Object.entries(e).filter(([e,t])=>null!=t&&""!==t).map(([e,t])=>`${this.camelToKebab(e)}: ${t}`).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}addPixelUnit(e){return e&&/^\d+$/.test(e)?`${e}px`:e}getPaddingWithDesign(e,t){return e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:this.getPaddingCSS(t)}getMarginWithDesign(e,t){return e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:this.getMarginCSS(t)}getBorderWithDesign(e,t){return e.border_width&&e.border_style&&e.border_color?`${e.border_width} ${e.border_style} ${e.border_color}`:this.getBorderCSS(t)}getBackgroundImageWithDesign(e,t,n){return"url"===e.background_image_type&&e.background_image?`url('${e.background_image}')`:"entity"===e.background_image_type&&e.background_image_entity&&n.states[e.background_image_entity]?`url('/api/camera_proxy/${e.background_image_entity}')`:this.getBackgroundImageCSS(t,n)}getPaddingCSS(e){return e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${this.addPixelUnit(e.padding_top)||"0px"} ${this.addPixelUnit(e.padding_right)||"0px"} ${this.addPixelUnit(e.padding_bottom)||"0px"} ${this.addPixelUnit(e.padding_left)||"0px"}`:"0"}getMarginCSS(e){return e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${this.addPixelUnit(e.margin_top)||"0px"} ${this.addPixelUnit(e.margin_right)||"0px"} ${this.addPixelUnit(e.margin_bottom)||"0px"} ${this.addPixelUnit(e.margin_left)||"0px"}`:"0"}getBackgroundCSS(e){return e.background_color||"transparent"}getBackgroundImageCSS(e,t){return"url"===e.background_image_type&&e.background_image?`url('${e.background_image}')`:"entity"===e.background_image_type&&e.background_image_entity&&t.states[e.background_image_entity]?`url('/api/camera_proxy/${e.background_image_entity}')`:""}getBorderCSS(e){return e.border_width&&e.border_style&&e.border_color?`${e.border_width} ${e.border_style} ${e.border_color}`:""}validateAction(e){const t=[];return"navigate"!==e.action||e.navigation_path||t.push("Navigation path is required for navigate action"),"call-service"!==e.action||e.service&&e.service_data||t.push("Service and service data are required for call-service action"),t}getStyles(){return`\n      .camera-module-container {\n        width: 100%;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-name-overlay {\n        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\n        backdrop-filter: blur(4px);\n        -webkit-backdrop-filter: blur(4px);\n        transition: all 0.2s ease;\n        box-sizing: border-box;\n        word-break: break-word;\n        hyphens: auto;\n      }\n      \n      /* Ensure camera name doesn't overflow container boundaries */\n      .camera-image-container > .camera-name-overlay {\n        contain: layout style;\n      }\n      \n      .camera-image-container {\n        position: relative;\n        overflow: hidden;\n        margin: 0 auto;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-image {\n        width: 100%;\n        height: 100%;\n        transition: all 0.3s ease;\n      }\n\n      .camera-audio-toggle {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        width: 30px;\n        height: 30px;\n        border: none;\n        background: none;\n        color: rgba(255, 255, 255, 0.8);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        z-index: 12;\n        padding: 0;\n        transition: color 0.2s ease, transform 0.2s ease;\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);\n      }\n\n      .camera-audio-toggle ha-icon {\n        pointer-events: none;\n        font-size: 20px;\n      }\n\n      .camera-audio-toggle:hover {\n        color: rgba(255, 255, 255, 0.95);\n        transform: scale(1.05);\n      }\n\n      .camera-audio-toggle.active,\n      .camera-audio-toggle.muted {\n        color: rgba(255, 255, 255, 0.9);\n      }\n      \n      .camera-unavailable {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        background-color: var(--disabled-color, #f5f5f5);\n        color: var(--secondary-text-color);\n        min-height: 150px;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-module-clickable {\n        cursor: pointer;\n        transition: transform 0.2s ease;\n      }\n      \n      .camera-module-clickable:hover {\n        transform: scale(1.02);\n      }\n      \n      .camera-module-clickable:active {\n        transform: scale(0.98);\n      }\n\n      /* Standard field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n     \n        margin-bottom: 4px !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      /* Conditional fields grouping */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 8px 8px 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Global design responsive text */\n      .camera-module-container * {\n        transition: font-size 0.3s ease, color 0.3s ease, font-weight 0.3s ease;\n      }\n\n      /* Enhanced animations for global design changes */\n      @keyframes textSizeChange {\n        0% { transform: scale(1); }\n        50% { transform: scale(1.02); }\n        100% { transform: scale(1); }\n      }\n\n      .camera-module-container.design-updating {\n        animation: textSizeChange 0.3s ease;\n      }\n\n      /* Fullscreen icon styling */\n      .camera-fullscreen-icon {\n        transition: all 0.2s ease;\n        user-select: none;\n      }\n\n      .camera-fullscreen-icon:hover {\n        transform: scale(1.15);\n        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.7);\n        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9));\n      }\n\n      .camera-fullscreen-icon:active {\n        transform: scale(1.05);\n      }\n\n      /* Fullscreen overlay animations */\n      @keyframes fadeIn {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n\n      @keyframes fadeOut {\n        from {\n          opacity: 1;\n        }\n        to {\n          opacity: 0;\n        }\n      }\n\n      @keyframes scaleIn {\n        from {\n          opacity: 0;\n          transform: scale(0.8);\n        }\n        to {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }\n\n      /* Fullscreen overlay global styles */\n      .camera-fullscreen-overlay {\n        -webkit-backdrop-filter: blur(10px);\n        backdrop-filter: blur(10px);\n        z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n        position: fixed !important;\n      }\n\n      .camera-fullscreen-overlay .camera-image-container {\n        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n      }\n\n      /* Override HA context menus and modals */\n      .camera-minimize-icon {\n        z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n        position: fixed !important;\n        pointer-events: auto !important;\n      }\n\n      /* Ensure fullscreen is above all HA elements */\n      body .camera-fullscreen-overlay {\n        z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n      }\n\n      body .camera-minimize-icon {\n        z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n      }\n\n      /* When fullscreen is active, ensure our elements are always on top */\n      body.camera-fullscreen-active .camera-fullscreen-overlay,\n      body.camera-fullscreen-active .camera-minimize-icon {\n        z-index: ${h.Mu.CAMERA_FULLSCREEN_CONTENT} !important;\n        position: fixed !important;\n      }\n\n      /* Hide HA overlays during fullscreen */\n      body.camera-fullscreen-active ha-dialog,\n      body.camera-fullscreen-active ha-more-info-dialog,\n      body.camera-fullscreen-active .mdc-dialog,\n      body.camera-fullscreen-active .dialog-container {\n        z-index: ${h.Mu.CAMERA_FULLSCREEN_OVERLAY} !important;\n      }\n\n      .camera-minimize-icon:hover {\n        transform: scale(1.15) !important;\n        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.7) !important;\n        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9)) !important;\n      }\n\n      .camera-minimize-icon:active {\n        transform: scale(1.05) !important;\n      }\n\n      /* Gap control styles - Standardized Slider Pattern */\n      ${s.m.getSliderStyles()}\n    `}}_.prototype._isEditorOpen=function(){try{return!!document.querySelector("hui-dialog-edit-card, hui-card-edit-mode")}catch(e){return!1}},_.prototype._isValidCameraEntity=function(e,t){var n;if(!e||!t)return!1;const i=null===(n=e.states)||void 0===n?void 0:n[t];return!!i&&("camera"===t.split(".")[0]&&"unavailable"!==i.state&&"unknown"!==i.state)},_.prototype._scheduleCameraUpdate=function(e,t,n,i){this._lastAppliedEntity===e&&this._lastAppliedLive===t||(this._pendingCameraProps={entity:e,live:t},this._webrtcUpdateTimer&&clearTimeout(this._webrtcUpdateTimer),this._webrtcUpdateTimer=setTimeout(()=>{var e,t,a,o;const r=this._pendingCameraProps;if(!r)return;if(!this._isValidCameraEntity(i,r.entity))return;const s=(this.renderRoot||this.shadowRoot||this).querySelector(`.camera-module-container[data-uc-camera-id="${n.id}"] .camera-image-container`);if(s)if(r.live){const o=null===(e=this._huiImageRef)||void 0===e?void 0:e.value;if(o&&"ha-camera-stream"===(null===(t=o.tagName)||void 0===t?void 0:t.toLowerCase())){const e=null===(a=null==i?void 0:i.states)||void 0===a?void 0:a[r.entity];if(e){o.stateObj=e;const t=this._isAudioActive(n);o.muted=!t,this._ensureAudioState(o,n,t)}this._lastAppliedEntity=r.entity,this._lastAppliedLive=r.live,this._lastRenderedEntity=r.entity}else this._lastAppliedEntity=r.entity,this._lastAppliedLive=r.live,this.requestUpdate()}else{const e=Array.from(s.querySelectorAll("hui-image"));for(let t=1;t<e.length;t++)e[t].remove();const t=(null===(o=this._huiImageRef)||void 0===o?void 0:o.value)||e[0];if(t){t.cameraImage=r.entity;const e=this._isAudioActive(n);t.muted=!e,queueMicrotask(()=>{t.cameraView="auto",t.muted=!e}),this._lastAppliedEntity=r.entity,this._lastAppliedLive=r.live,this._lastRenderedEntity=r.entity}else this._lastAppliedEntity=r.entity,this._lastAppliedLive=r.live,this.requestUpdate()}},200))}},9327(e,t,n){function i(e,t){var n;if(!e||"string"!=typeof e||""===e.trim())return"";const i=e.trim(),a=null===(n=null==t?void 0:t.states)||void 0===n?void 0:n[i];return a?`${i}|${a.state}|${function(e){var t,n,i,a;if(!e||"object"!=typeof e)return"";const o=`${null!==(t=e.unit_of_measurement)&&void 0!==t?t:""}|${null!==(n=e.device_class)&&void 0!==n?n:""}|${null!==(i=e.friendly_name)&&void 0!==i?i:""}|${null!==(a=e.icon)&&void 0!==a?a:""}|${Array.isArray(e.rgb_color)?e.rgb_color.join(","):""}`;let r=0;for(let e=0;e<o.length;e++)r=(r<<5)-r+o.charCodeAt(e),r|=0;return Math.abs(r).toString(36)}(a.attributes)}`:`${i}|unavailable|`}function a(e,t){const n=[...new Set(e.filter(e=>!!e&&""!==String(e).trim()))].sort();return 0===n.length?"":n.map(e=>i(e,t)).join("||")}function o(e,t,n){var i;const a=null===(i=null==t?void 0:t.states)||void 0===i?void 0:i[e];if(!a)return{entity:e,state:"unavailable",name:(null==n?void 0:n.name)||e,attributes:{},unit:"",domain:e.split(".")[0]||"unknown",device_class:"",friendly_name:(null==n?void 0:n.name)||e,config:n||{}};const o=e.split(".")[0],r=a.attributes||{};return{entity:e,state:a.state,name:(null==n?void 0:n.name)||r.friendly_name||e,attributes:r,unit:r.unit_of_measurement||"",domain:o,device_class:r.device_class||"",friendly_name:r.friendly_name||"",config:n||{},state_number:parseFloat(a.state),state_boolean:"on"===a.state||"true"===a.state||"yes"===a.state}}function r(e,t,n){const i=e.map((e,i)=>{const a=null==n?void 0:n[i];return o(e,t,a)}),a=i[0]||{entity:"",state:"unavailable",name:"",attributes:{},unit:"",domain:"unknown",device_class:"",friendly_name:"",config:{}};return Object.assign(Object.assign({},a),{entities:i})}n.d(t,{Qq:()=>a,jh:()=>i,pL:()=>o,wI:()=>r})},3361(e,t,n){n.d(t,{I:()=>a});var i=n(1001);function a(e,t=i.Mu.DROPDOWN_MENU){var n;const a=null===(n=null==e?void 0:e.closest)||void 0===n?void 0:n.call(e,".ultra-popup-portal");return a instanceof HTMLElement?{host:a,zIndex:i.Mu.GRAPH_TOOLTIP}:{host:document.body,zIndex:t}}},5669(e,t,n){n.d(t,{P:()=>s});var i=n(9247),a=n(5201),o=n(2593);const r=e=>(0,o.ps)(e)?e._$litType$.h:e.strings,s=(0,a.u$)(class extends a.WL{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){const n=(0,o.qb)(this.it)?r(this.it):null,a=(0,o.qb)(t)?r(t):null;if(null!==n&&(null===a||n!==a)){const t=(0,o.cN)(e).pop();let a=this.et.get(n);if(void 0===a){const e=document.createDocumentFragment();a=(0,i.XX)(i.s6,e),a.setConnected(!1),this.et.set(n,a)}(0,o.mY)(a,[t]),(0,o.Dx)(a,void 0,t)}if(null!==a){if(null===n||n!==a){const t=this.et.get(a);if(void 0!==t){const n=(0,o.cN)(t).pop();(0,o.Jz)(e),(0,o.Dx)(e,void 0,n),(0,o.mY)(e,[n])}}this.it=t}else this.it=void 0;return this.render(t)}})}}]);
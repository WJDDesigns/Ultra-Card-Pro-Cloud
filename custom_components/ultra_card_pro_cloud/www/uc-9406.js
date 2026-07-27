"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[9406],{9406(e,t,r){r.r(t),r.d(t,{HubPresetsTab:()=>b});var i=r(5183),o=r(4276),a=r(1338),s=r(8717),n=r(378),d=r(7568),l=r(9978),c=r(1172);class p extends i.WF{_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){return i.qy`
      <ha-dialog open @closed=${this._close} .heading=${"Sign in to Ultra Card"}>
        <div class="login-dialog-content">
          <div class="login-section">
            <p class="login-section-title">Connect with Ultra Card Connect</p>
            <p class="login-section-desc">
              The fastest way to connect — installs in 30 seconds. Syncs across all your devices.
            </p>
            <a
              class="login-cta-btn"
              href="/config/integrations/integration/ultra_card_pro_cloud"
              target="_top"
            >
              <ha-icon icon="mdi:cog"></ha-icon>
              Configure Ultra Card Connect
            </a>
          </div>

          <div class="login-divider"></div>

          <p class="login-note">
            Already have the integration? Open the <strong>Account</strong> tab in the Ultra Card hub to sign in or create an account.
          </p>
        </div>
      </ha-dialog>
    `}}p.styles=i.AH`
    .login-dialog-content {
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .login-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .login-section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
      margin: 0 0 4px 0;
    }

    .login-section-desc {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 8px 0;
      line-height: 1.4;
    }

    .login-cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 8px;
      border: none;
      background: var(--primary-color);
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.15s ease;
    }

    .login-cta-btn:hover {
      opacity: 0.9;
    }

    .login-cta-btn ha-icon {
      --mdc-icon-size: 18px;
    }

    .login-divider {
      height: 1px;
      background: var(--divider-color, rgba(0, 0, 0, 0.08));
      margin: 4px 0;
    }

    .login-note {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin: 0;
    }

    .login-note a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
    }

    .login-note a:hover {
      text-decoration: underline;
    }
  `,customElements.get("uc-hub-login-dialog")||customElements.define("uc-hub-login-dialog",p);var g=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};class h extends i.WF{constructor(){super(...arguments),this.presetId="",this.presetName="",this.existingRating=0,this._selectedRating=0,this._hoveredRating=0,this._submitting=!1,this._error=""}willUpdate(e){(e.has("existingRating")||e.has("presetId"))&&0===this._selectedRating&&this.existingRating>0&&(this._selectedRating=this.existingRating)}_close(){this._selectedRating=0,this._hoveredRating=0,this._error="",this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_displayRating(){return this._hoveredRating>0?this._hoveredRating:this._selectedRating}_ratingLabel(e){var t;return null!==(t=["","Poor","Fair","Good","Great","Excellent"][e])&&void 0!==t?t:""}async _handleSubmit(){if(!(this._selectedRating<1||this._submitting)&&this.presetId){this._submitting=!0,this._error="";try{await d.Q.submitReview(this.presetId,this._selectedRating),this.dispatchEvent(new CustomEvent("rating-submitted",{detail:{presetId:this.presetId,rating:this._selectedRating},bubbles:!0,composed:!0})),this._close()}catch(e){this._error=e instanceof Error?e.message:"Failed to submit rating"}finally{this._submitting=!1}}}render(){const e=this._displayRating();return i.qy`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog-surface">

          <div class="dialog-header">
            <h2 class="dialog-title">Rate this preset</h2>
            <button class="dialog-close" @click=${this._close} ?disabled=${this._submitting}>
              <ha-icon icon="mdi:close" style="--mdc-icon-size:20px;"></ha-icon>
            </button>
          </div>

          ${this.presetName?i.qy`<p class="rate-dialog-subtitle">${this.presetName}</p>`:""}

          <div class="rate-stars-row" @mouseleave=${()=>this._hoveredRating=0}>
            ${[1,2,3,4,5].map(t=>i.qy`
              <ha-icon
                icon=${t<=e?"mdi:star":"mdi:star-outline"}
                class=${t<=e?"":"empty"}
                @mouseenter=${()=>this._hoveredRating=t}
                @click=${()=>this._selectedRating=t}
              ></ha-icon>
            `)}
          </div>

          <p class="rate-hint">${this._ratingLabel(e)}</p>

          ${this._error?i.qy`<p class="rate-error">${this._error}</p>`:""}

          <div class="rate-actions">
            <button
              class="rate-btn rate-btn-submit"
              ?disabled=${this._selectedRating<1||this._submitting}
              @click=${this._handleSubmit}
            >
              ${this._submitting?i.qy`<ha-icon icon="mdi:loading" class="rate-spin"></ha-icon> Submitting…`:this.existingRating>0?"Update rating":"Submit rating"}
            </button>
            <button class="rate-btn rate-btn-cancel" @click=${this._close} ?disabled=${this._submitting}>
              Cancel
            </button>
          </div>

        </div>
      </div>
    `}}h.styles=i.AH`
    /* Full-screen backdrop — position: fixed so it escapes any parent stacking context */
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.55);
      animation: fadeIn 0.15s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    .dialog-surface {
      background: var(--ha-card-background, var(--card-background-color, #1c1c1e));
      border-radius: 16px;
      padding: 24px 28px;
      min-width: 300px;
      max-width: min(480px, 90vw);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
      animation: slideUp 0.18s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(12px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .dialog-title {
      font-size: 17px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .dialog-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      transition: background 0.15s;
    }

    .dialog-close:hover {
      background: rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.08);
    }

    .rate-dialog-subtitle {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 20px;
    }

    .rate-stars-row {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      user-select: none;
      margin-bottom: 8px;
    }

    .rate-stars-row ha-icon {
      --mdc-icon-size: 36px;
      color: #ffb300;
      transition: transform 0.1s ease;
    }

    .rate-stars-row ha-icon.empty {
      color: var(--secondary-text-color);
      opacity: 0.35;
    }

    .rate-stars-row ha-icon:hover {
      transform: scale(1.15);
    }

    .rate-hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 20px;
      min-height: 18px;
    }

    .rate-actions {
      display: flex;
      gap: 10px;
    }

    .rate-btn {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 9px 16px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s ease, background 0.15s ease;
    }

    .rate-btn-submit {
      background: var(--primary-color);
      color: white;
    }

    .rate-btn-submit:hover:not(:disabled) {
      opacity: 0.88;
    }

    .rate-btn-submit:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .rate-btn-cancel {
      background: transparent;
      color: var(--secondary-text-color);
      border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
    }

    .rate-btn-cancel:hover:not(:disabled) {
      background: rgba(var(--rgb-primary-text-color, 255,255,255), 0.06);
    }

    .rate-error {
      font-size: 12px;
      color: var(--error-color, #db4437);
      margin: 4px 0 0;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .rate-spin {
      animation: spin 0.8s linear infinite;
    }
  `,g([(0,o.MZ)()],h.prototype,"presetId",void 0),g([(0,o.MZ)()],h.prototype,"presetName",void 0),g([(0,o.MZ)({type:Number})],h.prototype,"existingRating",void 0),g([(0,o.wk)()],h.prototype,"_selectedRating",void 0),g([(0,o.wk)()],h.prototype,"_hoveredRating",void 0),g([(0,o.wk)()],h.prototype,"_submitting",void 0),g([(0,o.wk)()],h.prototype,"_error",void 0),customElements.get("uc-hub-rate-dialog")||customElements.define("uc-hub-rate-dialog",h);var u=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let b=class extends i.WF{constructor(){super(...arguments),this._presets=[],this._category="all",this._loading=!1,this._error=null,this._search="",this._toastMsg="",this._expandedId=null,this._cloudUser=null,this._showLoginDialog=!1,this._ratingPreset=null,this._pendingRateAfterLogin=null,this._userReviews=new Map,this._readMoreId=null}_getSanitizedPresetDescription(e){const t=this._readMoreId===e.id&&e.description_full||e.description;return(0,c.Qx)(t||"")}refresh(){s.ucPresetsService.ensureWordPressLoaded(),s.ucPresetsService.refreshWordPressPresets()}connectedCallback(){super.connectedCallback(),s.ucPresetsService.ensureWordPressLoaded(),this._cloudUser=n.x.getCurrentUser(),this._authListener=e=>{this._cloudUser=e,e&&d.Q.loadUserReviewsFromServer().then(()=>this.requestUpdate())},n.x.addListener(this._authListener),this._cloudUser&&d.Q.loadUserReviewsFromServer().then(()=>this.requestUpdate()),this._presets=s.ucPresetsService.getAllPresets(),this._unsub=s.ucPresetsService.subscribe(e=>{this._presets=e});const e=s.ucPresetsService.getWordPressStatus();this._loading=e.loading,this._error=e.error,this._statusUnsub=s.ucPresetsService.subscribeToStatus(e=>{this._loading=e.loading,this._error=e.error})}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this._unsub)||void 0===e||e.call(this),null===(t=this._statusUnsub)||void 0===t||t.call(this),this._authListener&&(n.x.removeListener(this._authListener),this._authListener=void 0),this._toastTimer&&clearTimeout(this._toastTimer)}_showToast(e){this._toastMsg=e,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2500)}_getFilteredPresets(){let e=this._presets;if("all"!==this._category&&(e=e.filter(e=>e.category===this._category)),this._search.trim()){const t=this._search.toLowerCase().trim();e=e.filter(e=>e.name.toLowerCase().includes(t)||(e.description||"").toLowerCase().includes(t)||(e.author||"").toLowerCase().includes(t))}return e}_refreshPresets(){this.refresh()}_getOriginLabel(e){return"wordpress"===e.source||"community"===e.origin?"community":"default"===e.origin||"default"===e.source?"default":"builtin"===e.origin||"builtin"===e.source?"builtin":"community"}_isNewPreset(e){var t,r;const i=(null===(t=e.metadata)||void 0===t?void 0:t.created)||(null===(r=e.metadata)||void 0===r?void 0:r.date);return!!i&&new Date(i)>new Date(Date.now()-2592e6)}_buildPresetConfig(e){const t={};return e.layout&&(t.layout=e.layout),e.cardSettings&&Object.entries(e.cardSettings).forEach(([e,r])=>{null!=r&&(t[e]=r)}),e.customVariables&&e.customVariables.length>0&&(t._customVariables=e.customVariables),t}async _copyPresetConfig(e){try{const t=this._buildPresetConfig(e);if(0===Object.keys(t).length)return void this._showToast("No config data in this preset");const r=JSON.stringify(t,null,2);await navigator.clipboard.writeText(r),this._showToast(`Copied "${e.name}" config`)}catch(t){console.warn("Clipboard write failed, using fallback:",t),this._fallbackCopy(JSON.stringify(this._buildPresetConfig(e),null,2)),this._showToast(`Copied "${e.name}" config`)}s.ucPresetsService.trackPresetDownload(e.id).catch(()=>{})}async _copyPresetLayout(e){try{if(!e.layout)return void this._showToast("No layout data in this preset");const t=JSON.stringify(e.layout,null,2);await navigator.clipboard.writeText(t),this._showToast(`Copied layout for "${e.name}"`)}catch(t){console.warn("Clipboard write failed, using fallback:",t),e.layout&&(this._fallbackCopy(JSON.stringify(e.layout,null,2)),this._showToast(`Copied layout for "${e.name}"`))}s.ucPresetsService.trackPresetDownload(e.id).catch(()=>{})}_fallbackCopy(e){const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}_toggleDetails(e){this._expandedId=this._expandedId===e?null:e}_renderStars(e){const t=[];for(let r=1;r<=5;r++)t.push(i.qy`<ha-icon
          icon=${r<=Math.round(e)?"mdi:star":"mdi:star-outline"}
          class=${r<=Math.round(e)?"":"empty"}
        ></ha-icon>`);return i.qy`<div class="star-rating">${t}</div>`}_getUserRatingForPreset(e){var t;const r=this._userReviews.get(e);if(null!=r)return r;const i=d.Q.getUserReview(e);return null!==(t=null==i?void 0:i.rating)&&void 0!==t?t:null}_renderInteractiveStars(e,t){var r;const o=this._getUserRatingForPreset(e.id),a=null!==(r=null!=o?o:t.rating)&&void 0!==r?r:0;if(a<=0&&!this._cloudUser)return i.qy`<span class="preset-rating-hint" title="Sign in to rate">Rate it</span>`;const s=[],n=Math.round(a);for(let e=1;e<=5;e++)s.push(i.qy`<ha-icon
          icon=${e<=n?"mdi:star":"mdi:star-outline"}
          class=${e<=n?"":"empty"}
        ></ha-icon>`);return i.qy`<span class="star-rating">${s}</span>`}_handleStarClick(e,t){if(t.stopPropagation(),!this._cloudUser)return this._pendingRateAfterLogin={id:e.id,name:e.name},void(this._showLoginDialog=!0);this._ratingPreset={id:e.id,name:e.name}}_handleRatingSubmitted(e){const{presetId:t,rating:r}=e.detail;this._userReviews=new Map(this._userReviews).set(t,r),this._ratingPreset=null,this._showToast("Thanks for your rating!")}render(){var e,t,r;const o=this._getFilteredPresets();return i.qy`
      ${this._showLoginDialog?i.qy`
            <uc-hub-login-dialog
              @close=${()=>{this._showLoginDialog=!1,this._pendingRateAfterLogin=null}}
            ></uc-hub-login-dialog>
          `:""}
      ${this._ratingPreset?i.qy`
            <uc-hub-rate-dialog
              .presetId=${this._ratingPreset.id}
              .presetName=${this._ratingPreset.name}
              .existingRating=${null!==(r=null!==(e=this._userReviews.get(this._ratingPreset.id))&&void 0!==e?e:null===(t=d.Q.getUserReview(this._ratingPreset.id))||void 0===t?void 0:t.rating)&&void 0!==r?r:0}
              @rating-submitted=${this._handleRatingSubmitted}
              @close=${()=>{this._ratingPreset=null}}
            ></uc-hub-rate-dialog>
          `:""}
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p><strong>Presets</strong> are ready-made layouts and widgets you can add to any card. Browse by category, search, or add a preset from the card editor to get started quickly.</p>
      </div>
      <!-- Toolbar -->
      <div class="presets-toolbar">
        <div class="search-box">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input
            type="text"
            placeholder="Search presets…"
            .value=${this._search}
            @input=${e=>this._search=e.target.value}
          />
        </div>
        <button class="refresh-btn" ?disabled=${this._loading} @click=${this._refreshPresets}>
          <ha-icon icon="mdi:refresh" class=${this._loading?"spinning":""}></ha-icon>
          Refresh
        </button>
      </div>

      <!-- Filter chips -->
      <div class="filter-row" style="margin-bottom: 16px;">
        ${[{key:"all",label:"All",icon:"mdi:view-grid"},{key:"badges",label:"Badges",icon:"mdi:shield-star"},{key:"layouts",label:"Layouts",icon:"mdi:view-dashboard"},{key:"widgets",label:"Widgets",icon:"mdi:widgets"},{key:"custom",label:"Custom",icon:"mdi:tune-variant"}].map(e=>i.qy`
            <button
              class="filter-chip ${this._category===e.key?"active":""}"
              @click=${()=>this._category=e.key}
            >
              <ha-icon icon=${e.icon}></ha-icon>
              ${e.label}
            </button>
          `)}
      </div>

      <!-- Status bar -->
      <div class="status-bar">
        <span class="count">
          Showing <strong>${o.length}</strong> of ${this._presets.length} presets
        </span>
      </div>

      <!-- States -->
      ${this._loading?i.qy`
            <div class="loading-state">
              <ha-icon icon="mdi:loading" class="spinning"></ha-icon>
              Loading presets…
            </div>
          `:""}
      ${this._error?i.qy`<div class="error-state">${this._error}</div>`:""}

      <!-- Grid -->
      ${this._loading||0!==o.length?i.qy`
            ${o.length>0?i.qy`
                  <div class="presets-hint">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    <span>
                      <strong>Copy Config</strong> copies the full preset (layout + settings + variables) as JSON — paste into your card's raw YAML editor.
                      <strong>Copy Layout</strong> copies only the row/column structure without card styling.
                    </span>
                  </div>
                `:""}
            <div class="presets-grid">
              ${o.map(e=>this._renderPresetCard(e))}
            </div>
          `:i.qy`
            <div class="empty-state">
              <div class="empty-state-icon">
                <ha-icon icon="mdi:package-variant"></ha-icon>
              </div>
              <h3>No Presets Found</h3>
              <p>
                ${this._search?`No presets match "${this._search}". Try a different search.`:"No presets in this category. Use the card editor to browse and add presets."}
              </p>
            </div>
          `}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderPresetCard(e){var t,r,o,s,n,d;const l=this._getOriginLabel(e),c=e.metadata||{},p=!!e.thumbnail||!!e.image||!!e.preview_url,g=e.thumbnail||e.image||e.preview_url,h=this._expandedId===e.id;return i.qy`
      <div class="preset-card">
        <div class="preset-header">
          <div class="preset-header-left">
            <div class="preset-title-info">
              <h4 class="preset-header-title">${e.name}</h4>
              ${e.author?i.qy`<span class="preset-header-author">by ${e.author}</span>`:i.s6}
            </div>
          </div>
          <span class="origin-badge ${l}">${l}</span>
          ${this._isNewPreset(e)?i.qy`<span class="new-badge">New</span>`:i.s6}
        </div>

        ${p?i.qy`
              <div class="preset-preview">
                <img src="${g}" alt="${e.name}" loading="lazy" />
              </div>
            `:i.qy`
              <div class="preset-preview">
                <div class="preset-icon-placeholder">
                  <ha-icon icon="mdi:card-text-outline"></ha-icon>
                </div>
              </div>
            `}

        <div class="preset-content">
          ${e.description?i.qy`
                <div class="preset-description ${this._readMoreId===e.id?"expanded":""}">${(0,a._)(this._getSanitizedPresetDescription(e))}</div>
                ${e.description_full&&e.description_full!==e.description?i.qy`<button class="read-more-link" @click=${t=>{t.stopPropagation(),this._readMoreId=this._readMoreId===e.id?null:e.id}}>${this._readMoreId===e.id?"Read Less ↑":"Read More ↓"}</button>`:i.s6}
              `:i.s6}

          <div class="preset-stats">
            <span class="stat">
              <ha-icon icon="mdi:download"></ha-icon>
              ${null!==(r=null!==(t=c.downloads)&&void 0!==t?t:e.downloads)&&void 0!==r?r:0}
            </span>
            <div
              class="preset-rating-interactive"
              @click=${t=>this._handleStarClick(e,t)}
              title=${this._cloudUser?"Rate this preset":"Sign in to rate"}
            >
              ${this._renderInteractiveStars(e,c)}
              <span class="rating-count">(${null!==(d=null!==(n=null!==(s=null!==(o=c.rating_count)&&void 0!==o?o:c.reviews_count)&&void 0!==s?s:e.rating_count)&&void 0!==n?n:e.reviews_count)&&void 0!==d?d:0})</span>
            </div>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="preset-actions">
          <button
            class="preset-action-btn primary"
            title="Copy preset code — paste into your card via Import"
            @click=${()=>this._copyPresetConfig(e)}
          >
            <ha-icon icon="mdi:content-copy"></ha-icon>
            Copy Code
          </button>
          <button
            class="preset-action-btn"
            @click=${()=>this._toggleDetails(e.id)}
          >
            <ha-icon icon=${h?"mdi:chevron-up":"mdi:information-outline"}></ha-icon>
            ${h?"Less":"Details"}
          </button>
        </div>

        ${h?this._renderDetails(e):i.s6}
      </div>
    `}_renderDetails(e){var t,r,o,a,s;const n=null!==(o=null===(r=null===(t=e.layout)||void 0===t?void 0:t.rows)||void 0===r?void 0:r.length)&&void 0!==o?o:0,d=null!==(s=null===(a=e.customVariables)||void 0===a?void 0:a.length)&&void 0!==s?s:0,l=!!(e.cardSettings&&Object.keys(e.cardSettings).length>0);return i.qy`
      <div class="preset-details">
        <dl class="detail-info">
          <dt>Category</dt>
          <dd>${e.category}</dd>
          <dt>Version</dt>
          <dd>${e.version||"—"}</dd>
          <dt>Rows</dt>
          <dd>${n}</dd>
          ${d>0?i.qy`<dt>Variables</dt><dd>${d}</dd>`:i.s6}
          ${l?i.qy`<dt>Card settings</dt><dd>Included</dd>`:i.s6}
          ${e.integrations&&e.integrations.length>0?i.qy`<dt>Requires</dt><dd>${e.integrations.join(", ")}</dd>`:i.s6}
        </dl>
        ${e.tags&&e.tags.length>0?i.qy`
              <div class="detail-tags">
                ${e.tags.map(e=>i.qy`<span class="detail-tag">${e}</span>`)}
              </div>
            `:i.s6}
      </div>
    `}};b.styles=[l.z,i.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      /* Toolbar */
      .presets-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        margin-bottom: 20px;
      }

      .search-box {
        flex: 1;
        min-width: 180px;
        position: relative;
      }

      .search-box input {
        width: 100%;
        padding: 10px 16px 10px 40px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 10px;
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .search-box input:focus {
        border-color: var(--primary-color);
      }

      .search-box ha-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .refresh-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 20px;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 12px;
        font-weight: 500;
      }

      .refresh-btn:hover:not(:disabled) {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .refresh-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .refresh-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .spinning {
        animation: spin 1s linear infinite;
      }

      /* Preset grid */
      .presets-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
      }

      @media (max-width: 600px) {
        .presets-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Preset card */
      .preset-card {
        display: flex;
        flex-direction: column;
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
      }

      .preset-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        border-color: var(--primary-color);
      }

      /* Card header */
      .preset-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        gap: 12px;
      }

      .preset-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        min-width: 0;
      }

      .preset-title-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        min-width: 0;
      }

      .preset-header-title {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .preset-header-author {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-style: italic;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .origin-badge {
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        flex-shrink: 0;
      }

      .origin-badge.community {
        background: rgba(255, 152, 0, 0.9);
        color: white;
      }

      .origin-badge.default,
      .origin-badge.standard {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.9);
        color: white;
      }

      .origin-badge.builtin {
        background: rgba(var(--rgb-secondary-text-color, 128, 128, 128), 0.7);
        color: white;
      }

      .new-badge {
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        flex-shrink: 0;
        background: rgba(76, 175, 80, 0.9);
        color: white;
      }

      /* Preview area */
      .preset-preview {
        width: 100%;
        height: 160px;
        background: var(--secondary-background-color, #f5f5f5);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 8px;
        box-sizing: border-box;
      }

      .preset-preview img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 6px;
        transition: transform 0.3s ease;
      }

      .preset-card:hover .preset-preview img {
        transform: scale(1.05);
      }

      .preset-icon-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 72px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border-radius: 50%;
      }

      .preset-icon-placeholder ha-icon {
        --mdc-icon-size: 36px;
        color: var(--primary-color);
        opacity: 0.4;
      }

      /* Content section */
      .preset-content {
        padding: 14px 16px;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .preset-description {
        margin: 0;
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
        overflow: hidden;
        max-height: 4.2em; /* ~3 lines */
      }

      .preset-description.expanded {
        max-height: none;
        overflow: visible;
      }

      .read-more-link {
        background: none;
        border: none;
        padding: 2px 0;
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        font-weight: 500;
        display: block;
        margin-top: 4px;
      }

      /* Scoped styles for WordPress HTML in descriptions */
      .preset-description p,
      .preset-description li {
        margin: 0 0 4px;
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
      }

      .preset-description a {
        color: var(--primary-color);
        text-decoration: underline;
      }

      .preset-description h1,
      .preset-description h2,
      .preset-description h3 {
        font-size: 13px;
        font-weight: 600;
        margin: 6px 0 2px;
        color: var(--primary-text-color);
      }

      .preset-description ul,
      .preset-description ol {
        padding-left: 16px;
        margin: 2px 0;
      }

      .preset-description img {
        max-width: 100%;
        border-radius: 6px;
      }

      /* Stats row */
      .preset-stats {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 12px;
        color: var(--secondary-text-color);
        padding-top: 4px;
      }

      .preset-stats .stat {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .preset-stats ha-icon {
        --mdc-icon-size: 14px;
        opacity: 0.6;
      }

      /* Rating stars */
      .star-rating {
        display: flex;
        gap: 2px;
      }

      .star-rating ha-icon {
        --mdc-icon-size: 14px;
        color: #ffb300;
        opacity: 1;
      }

      .star-rating ha-icon.empty {
        opacity: 0.25;
      }

      .preset-rating-interactive {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        user-select: none;
      }

      .preset-rating-interactive .rating-count {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-left: 2px;
      }

      .preset-rating-hint {
        font-size: 12px;
        color: var(--primary-color);
        opacity: 0.9;
      }

      /* Action bar at card bottom */
      .preset-actions {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 12px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
      }

      .preset-action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        flex: 1;
        padding: 5px 10px;
        border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--secondary-text-color);
        font-size: 11px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .preset-action-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);
      }

      .preset-action-btn.primary {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .preset-action-btn.primary:hover {
        filter: brightness(1.1);
        color: white;
      }

      .preset-action-btn ha-icon {
        --mdc-icon-size: 14px;
      }

      /* Hint banner above presets grid */
      .presets-hint {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        margin-bottom: 16px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        border-radius: 10px;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .presets-hint ha-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
        flex-shrink: 0;
      }

      .presets-hint strong {
        color: var(--primary-text-color);
      }

      /* Details panel */
      .preset-details {
        padding: 12px 16px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
        animation: fadeSlideIn 0.2s ease-out;
      }

      .detail-info {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 6px 12px;
        font-size: 12px;
        margin-bottom: 10px;
      }

      .detail-info dt {
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .detail-info dd {
        margin: 0;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .detail-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 6px;
      }

      .detail-tag {
        display: inline-block;
        padding: 2px 8px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border-radius: 4px;
        font-size: 11px;
        color: var(--primary-color);
        font-weight: 500;
      }

      /* Status bar */
      .status-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding: 10px 14px;
        background: var(--ha-card-background, var(--card-background-color));
        border-radius: 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
      }

      .status-bar .count {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .status-bar .count strong {
        color: var(--primary-text-color);
      }

      /* Loading */
      .loading-state {
        text-align: center;
        padding: 40px;
        color: var(--secondary-text-color);
        font-size: 14px;
      }

      .loading-state ha-icon {
        --mdc-icon-size: 32px;
        color: var(--primary-color);
        margin-bottom: 12px;
        display: block;
      }

      /* Error */
      .error-state {
        text-align: center;
        padding: 32px;
        color: var(--error-color, #f44336);
        font-size: 14px;
      }
    `],u([(0,o.wk)()],b.prototype,"_presets",void 0),u([(0,o.wk)()],b.prototype,"_category",void 0),u([(0,o.wk)()],b.prototype,"_loading",void 0),u([(0,o.wk)()],b.prototype,"_error",void 0),u([(0,o.wk)()],b.prototype,"_search",void 0),u([(0,o.wk)()],b.prototype,"_toastMsg",void 0),u([(0,o.wk)()],b.prototype,"_expandedId",void 0),u([(0,o.wk)()],b.prototype,"_cloudUser",void 0),u([(0,o.wk)()],b.prototype,"_showLoginDialog",void 0),u([(0,o.wk)()],b.prototype,"_ratingPreset",void 0),u([(0,o.wk)()],b.prototype,"_pendingRateAfterLogin",void 0),u([(0,o.wk)()],b.prototype,"_userReviews",void 0),u([(0,o.wk)()],b.prototype,"_readMoreId",void 0),b=u([(0,o.EM)("hub-presets-tab")],b)},1172(e,t,r){r.d(t,{Qx:()=>s,ex:()=>a});var i=r(9418);const o=["script","iframe","object","embed","form","input","button","textarea","select","option"];function a(e,t){return i.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:t?o:[...o,"style"],FORCE_BODY:t})}function s(e){return i.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:[...o,"style"]})}}}]);
"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[4550],{737(o,i,t){t.r(i),t.d(i,{HubAccountTab:()=>u});var r=t(5183),e=t(4276),a=t(9978),n=t(378),s=t(7568),c=t(4541),l=t(8690);function d(o,i){const t=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),e=document.createElement("a");e.href=r,e.download=i||`ultra-card-connect-diagnostics-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`,e.rel="noopener",document.body.appendChild(e),e.click(),setTimeout(()=>{e.remove(),URL.revokeObjectURL(r)},1e3)}var p=function(o,i,t,r){var e,a=arguments.length,n=a<3?i:null===r?r=Object.getOwnPropertyDescriptor(i,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(o,i,t,r);else for(var s=o.length-1;s>=0;s--)(e=o[s])&&(n=(a<3?e(n):a>3?e(i,t,n):e(i,t))||n);return a>3&&n&&Object.defineProperty(i,t,n),n};let u=class extends r.WF{constructor(){super(...arguments),this.auth=null,this.cloudUser=null,this._formMode="signin",this._username="",this._password="",this._email="",this._displayName="",this._loading=!1,this._error="",this._autoConfigNote="",this._syncStatus=null,this._syncCounts={colors:0,variables:0,presets:0,favorites:0},this._diagLoading=!1,this._diagError="",this._diagReport=null}connectedCallback(){super.connectedCallback(),this._syncStatus=s.Q.getSyncStatus(),this._refreshCounts(),this._syncListener=o=>{this._syncStatus=o,this._refreshCounts()},s.Q.addListener(this._syncListener)}disconnectedCallback(){super.disconnectedCallback(),this._syncListener&&s.Q.removeListener(this._syncListener)}_refreshCounts(){var o,i,t,r;try{const e=JSON.parse(null!==(o=localStorage.getItem("ultra-card-favorite-colors"))&&void 0!==o?o:"[]"),a=JSON.parse(null!==(i=localStorage.getItem("ultra-card-custom-variables"))&&void 0!==i?i:"[]"),n=JSON.parse(null!==(t=localStorage.getItem("ultra-card-favorites"))&&void 0!==t?t:"[]"),s=JSON.parse(null!==(r=localStorage.getItem("ultra-card-presets"))&&void 0!==r?r:"[]");this._syncCounts={colors:Array.isArray(e)?e.length:0,variables:Array.isArray(a)?a.length:0,favorites:Array.isArray(n)?n.length:0,presets:Array.isArray(s)?s.length:0}}catch(o){this._syncCounts={colors:0,variables:0,presets:0,favorites:0}}}_formatSyncTime(o){if(!o)return"Never";const i=Date.now()-o.getTime();return i<6e4?"Just now":i<36e5?`${Math.floor(i/6e4)}m ago`:i<864e5?`${Math.floor(i/36e5)}h ago`:o.toLocaleDateString()}get _effectiveUser(){return n.x.checkIntegrationAuth(this.hass)||this.cloudUser}_switchFormMode(o){this._formMode=o,this._error="",this._autoConfigNote=""}async _handleSignIn(o){o.preventDefault();const i=this._username.trim();if(i&&this._password){this._loading=!0,this._error="",this._autoConfigNote="";try{await n.x.loginViaHass(this.hass,i,this._password),this._username="",this._password=""}catch(o){this._error=o instanceof Error?o.message:"Login failed"}finally{this._loading=!1}}else this._error="Please enter your email and password"}async _handleRegister(o){if(o.preventDefault(),this._error="",this._autoConfigNote="",this._username.trim()&&this._email.trim()){this._loading=!0;try{const o=await n.x.registerViaHass(this.hass,this._username.trim(),this._email.trim(),this._displayName.trim());this._username="",this._email="",this._displayName="",this._autoConfigNote=o||"Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."}catch(o){this._error=o instanceof Error?o.message:"Registration failed. Please try again."}finally{this._loading=!1}}else this._error="Please fill in all required fields."}async _handleLogout(){await n.x.logoutViaHass(this.hass)}async _runDiagnostics(o){if(this._isHaAdmin()){this._diagLoading=!0,this._diagError="";try{const i=await async function(o,i={}){if(!(null==o?void 0:o.callApi))throw new Error("Home Assistant API unavailable");const t=!1!==i.runConnectivity;try{const i=await o.callApi("POST","ultra_card_pro_cloud/diagnostics",{run_connectivity:t});return Object.assign(Object.assign({},i),{source:"api",ultra_card_version:c.x,connect_info:(0,l.fu)(o)})}catch(i){const t=function(o){var i,t,r,e,a,n,s;const d=(0,l.fu)(o),p=null===(i=null==o?void 0:o.states)||void 0===i?void 0:i[l.$f],u=(null==p?void 0:p.attributes)||{},g="connected"===(null==p?void 0:p.state)&&!0===u.authenticated,m={generated_at:(new Date).toISOString(),source:"client_fallback",ultra_card_version:c.x,capabilities:Object.assign({},d.capabilities||{}),connect_info:d,error:d.outdated?`Ultra Card Connect needs updating (required ${l.TV}+). Sensor handshake and /diagnostics are missing on this install.`:"Diagnostics API unavailable; report built from the auth sensor only.",entries:[{capabilities:Object.assign({},d.capabilities||{}),entry:{domain:"ultra_card_pro_cloud",has_username:Boolean(u.username)},coordinator:{authenticated:g,username:null!==(t=u.username)&&void 0!==t?t:null,email_redacted:"string"==typeof u.email&&u.email.includes("@")?`${String(u.email).slice(0,1)}***@${String(u.email).split("@")[1]}`:"",subscription_tier:null!==(r=u.subscription_tier)&&void 0!==r?r:null,subscription_status:null!==(e=u.subscription_status)&&void 0!==e?e:null,needs_reauth:Boolean(u.needs_reauth),last_poll:null!==(a=u.last_poll)&&void 0!==a?a:null,connected_at:null!==(n=u.connected_at)&&void 0!==n?n:null,token_present:!!g&&null,sensor_state:null!==(s=null==p?void 0:p.state)&&void 0!==s?s:null},connectivity:null}],panel:{manifest_present:!1}};return d.integrationVersion&&(m.integration_version=d.integrationVersion,m.entries[0].integration_version=d.integrationVersion),m}(o),r=function(o){var i,t,r,e,a;const n=o,s=null!==(t=null!==(i=null==n?void 0:n.status)&&void 0!==i?i:null==n?void 0:n.status_code)&&void 0!==t?t:null===(r=null==n?void 0:n.response)||void 0===r?void 0:r.status,c="string"==typeof(null===(e=null==n?void 0:n.body)||void 0===e?void 0:e.error)&&n.body.error||"string"==typeof(null===(a=null==n?void 0:n.body)||void 0===a?void 0:a.message)&&n.body.message||null;return 404===s?`Connect diagnostics API not found (404). Update Ultra Card Connect to ${l.TV}+ and restart Home Assistant.`:403===s?"Only Home Assistant administrators can run Connect diagnostics.":c||("string"==typeof(null==n?void 0:n.message)&&n.message.trim()?n.message:s?`Diagnostics request failed (${s})`:"Failed to load diagnostics")}(i);throw Object.assign(new Error(r),{code:"connect_diagnostics_unavailable",fallback:t,cause:i})}}(this.hass,{runConnectivity:!0});this._diagReport=i,o&&d(i)}catch(i){const t=null==i?void 0:i.fallback;t&&(this._diagReport=t,o&&d(t)),this._diagError=i instanceof Error?i.message:"Failed to load diagnostics"}finally{this._diagLoading=!1}}else this._diagError="Only Home Assistant administrators can run Connect diagnostics."}_renderDiagnostics(){var o,i,t,e,a;const n=(0,l.fu)(this.hass),s=this._effectiveUser,d=(null===(i=null===(o=this._diagReport)||void 0===o?void 0:o.entries)||void 0===i?void 0:i[0])||{},p=d.coordinator||{},u=d.connectivity||{},g="boolean"==typeof p.authenticated?p.authenticated:Boolean(s),m=!0===p.token_present?"Present (server-side)":!1===p.token_present?"Missing":g?"Managed by Connect":"Missing",h=[{label:"Connect version",value:n.integrationVersion||(null===(t=this._diagReport)||void 0===t?void 0:t.integration_version)||(n.installed?"pre-1.6.0 (update required)":"not installed"),ok:n.installed&&!n.outdated},{label:"Card version",value:c.x},{label:"Signed in",value:g?"Yes":"No",ok:g},{label:"Token",value:m,ok:!!g},{label:"Cloud reachability",value:u.api?"OK":(null===(e=u.errors)||void 0===e?void 0:e.length)?"Failed":"api"===(null===(a=this._diagReport)||void 0===a?void 0:a.source)?"Not tested":this._diagReport?"Unavailable (update Connect)":"Run diagnostics",ok:!0===u.api},{label:"Last success",value:"number"==typeof p.last_successful_age_seconds?`${Math.round(p.last_successful_age_seconds)}s ago`:p.last_poll||p.connected_at||"—"}];return r.qy`
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:stethoscope"></ha-icon>
          Connect diagnostics
        </h3>
        <p style="font-size:13px;color:var(--secondary-text-color);line-height:1.5;margin:0 0 16px;">
          Check authentication, cloud reachability, and integration version. Downloads never include
          passwords or JWT tokens.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:16px;">
          ${h.map(o=>r.qy`
              <div
                style="border:1px solid var(--divider-color);border-radius:10px;padding:10px 12px;background:var(--secondary-background-color, transparent);"
              >
                <div style="font-size:11px;color:var(--secondary-text-color);margin-bottom:4px;">
                  ${o.label}
                </div>
                <div style="font-size:13px;font-weight:600;color:${!1===o.ok?"var(--error-color, #f44336)":!0===o.ok?"var(--success-color, #4caf50)":"var(--primary-text-color)"};">
                  ${o.value}
                </div>
              </div>
            `)}
        </div>
        ${this._diagError?r.qy`<div class="error-message" style="margin-bottom:12px;">${this._diagError}</div>`:""}
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          <button
            class="sync-now-btn"
            style="width:auto;padding:8px 14px;"
            ?disabled=${this._diagLoading||!this._isHaAdmin()}
            @click=${()=>this._runDiagnostics(!1)}
          >
            <ha-icon
              icon="mdi:${this._diagLoading?"loading":"refresh"}"
              class="${this._diagLoading?"spin":""}"
            ></ha-icon>
            ${this._diagLoading?"Running…":"Run diagnostics"}
          </button>
          <button
            class="sync-now-btn"
            style="width:auto;padding:8px 14px;"
            ?disabled=${this._diagLoading||!this._isHaAdmin()}
            @click=${()=>this._runDiagnostics(!0)}
          >
            <ha-icon icon="mdi:download"></ha-icon>
            Download report
          </button>
        </div>
      </div>
    `}_isHaAdmin(){var o,i;return Boolean(null===(i=null===(o=this.hass)||void 0===o?void 0:o.user)||void 0===i?void 0:i.is_admin)}_renderAdminNotice(){return this._isHaAdmin()?r.s6:r.qy`
      <div class="admin-notice" role="note">
        <ha-icon icon="mdi:shield-account-outline"></ha-icon>
        <div>
          <strong>Home Assistant administrator required</strong>
          <p>
            Shared sign-in, cloud sync, and uploads through Ultra Card Connect are managed by
            HA administrators only. You can still use Hub presets, colors, and documentation.
          </p>
        </div>
      </div>
    `}render(){const o=this._effectiveUser;return o?this._renderAuthenticated(o):n.x.isIntegrationInstalled(this.hass)?this._renderUnauthenticated():this._renderSetupGuide()}_renderSetupGuide(){return r.qy`
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:connection"></ha-icon>
          Connect Ultra Card
        </h3>
        <p style="font-size:13px;color:var(--secondary-text-color);line-height:1.6;margin:0 0 20px;">
          Ultra Card uses the <strong>Ultra Card Connect</strong> integration to securely
          store your account credentials in Home Assistant — so your login persists across
          any device and browser, with no local storage needed.
        </p>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;">
            <ha-icon icon="mdi:numeric-1-circle" style="color:var(--primary-color);flex-shrink:0;margin-top:1px;"></ha-icon>
            <span>Install <strong>Ultra Card Connect</strong> via HACS → Integrations</span>
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;">
            <ha-icon icon="mdi:numeric-2-circle" style="color:var(--primary-color);flex-shrink:0;margin-top:1px;"></ha-icon>
            <span>Add it under <strong>Settings → Integrations → Add Integration</strong>, or click below</span>
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;">
            <ha-icon icon="mdi:numeric-3-circle" style="color:var(--primary-color);flex-shrink:0;margin-top:1px;"></ha-icon>
            <span>Come back here to sign in — your account stays logged in permanently</span>
          </div>
        </div>
        <a
          href="/config/integrations/integration/ultra_card_pro_cloud"
          style="display:inline-flex;align-items:center;gap:6px;margin-top:20px;padding:9px 16px;
                 background:var(--primary-color);color:white;border-radius:8px;font-size:13px;
                 font-weight:500;text-decoration:none;"
        >
          <ha-icon icon="mdi:plus-circle" style="--mdc-icon-size:16px;"></ha-icon>
          Set Up Integration
        </a>
      </div>
      ${this._renderDiagnostics()}
    `}_renderAuthenticated(o){var i,t;const e="pro"===(null===(i=o.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(t=o.subscription)||void 0===t?void 0:t.status);return r.qy`
      ${this._renderAdminNotice()}
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:account-circle"></ha-icon>
          Account
        </h3>
        <div class="user-info">
          <div class="user-info-row">
            <ha-icon icon="mdi:account"></ha-icon>
            <span>${o.displayName||o.username}</span>
          </div>
          <div class="user-info-row">
            <ha-icon icon="mdi:email-outline"></ha-icon>
            <span>${o.email}</span>
          </div>
          <div class="tier-badge ${e?"pro":"free"}">
            ${e?r.qy`<ha-icon icon="mdi:star" style="--mdc-icon-size:14px"></ha-icon>`:""}
            ${e?"Pro":"Free"}
          </div>
        </div>

        ${this._renderSyncStats(e)}

        ${e?r.qy`
              <div class="manage-link">
                <a href="https://ultracard.io/dashboard/" target="_blank" rel="noopener noreferrer">
                  Manage account at ultracard.io
                </a>
              </div>
            `:r.qy`
              <div class="upgrade-section">
                <h4>Upgrade to Ultra Card Pro</h4>
                <p>
                  Unlock dashboard snapshots, auto-backups, and all Pro modules. Sync across devices.
                </p>
                <a
                  class="upgrade-btn"
                  href="https://ultracard.io/product/ultra-card-pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ha-icon icon="mdi:star"></ha-icon>
                  Upgrade to Pro
                </a>
              </div>
            `}

        <button class="logout-btn" @click=${this._handleLogout}>Sign out</button>
      </div>
      ${this._renderDiagnostics()}
    `}_renderSyncStats(o){var i,t,e,a;const n=this._syncStatus,c=null!==(i=null==n?void 0:n.isSyncing)&&void 0!==i&&i,l=this._formatSyncTime(null!==(t=null==n?void 0:n.lastColorsSync)&&void 0!==t?t:null),d=this._formatSyncTime(null!==(e=null==n?void 0:n.lastVariablesSync)&&void 0!==e?e:null),p=this._formatSyncTime(null!==(a=null==n?void 0:n.lastFavoritesSync)&&void 0!==a?a:null),u=[{icon:"mdi:palette",label:"Colors",count:this._syncCounts.colors,lastSync:l},{icon:"mdi:variable",label:"Variables",count:this._syncCounts.variables,lastSync:d},{icon:"mdi:heart",label:"Favorites",count:this._syncCounts.favorites,lastSync:p},{icon:"mdi:view-dashboard",label:"Presets",count:this._syncCounts.presets,lastSync:"—",proOnly:!1}];return r.qy`
      <div class="sync-stats-section">
        <div class="sync-stats-header">
          <span class="sync-stats-title">
            <ha-icon icon="mdi:cloud-sync"></ha-icon>
            Cloud Sync
          </span>
          <span class="sync-stats-badge ${o?"pro":"free"}">
            ${o?"Pro":"Free"}
          </span>
        </div>

        <div class="sync-stats-grid">
          ${u.map(({icon:o,label:i,count:t,lastSync:e})=>r.qy`
            <div class="sync-stat-card">
              <div class="sync-stat-icon">
                <ha-icon icon=${o}></ha-icon>
              </div>
              <div class="sync-stat-body">
                <div class="sync-stat-count">${t}</div>
                <div class="sync-stat-label">${i}</div>
                ${"—"!==e?r.qy`
                  <div class="sync-stat-time">
                    <ha-icon icon="mdi:clock-outline"></ha-icon>
                    ${e}
                  </div>
                `:""}
              </div>
            </div>
          `)}
        </div>

        <button
          class="sync-now-btn"
          ?disabled=${c}
          @click=${async()=>{await s.Q.syncAll(),this._refreshCounts()}}
        >
          <ha-icon icon="mdi:${c?"loading":"cloud-upload"}" class="${c?"spin":""}"></ha-icon>
          ${c?"Syncing…":"Sync Now"}
        </button>
      </div>
    `}_renderUnauthenticated(){return r.qy`
      ${this._renderAdminNotice()}
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:login"></ha-icon>
          Sign in or create an account
        </h3>
        <p class="form-note" style="margin: 0 0 16px 0;">
          Sign in to cloud-save favorites, colors, and presets. Upgrade to Pro for full features.
        </p>

        <div class="form-tabs">
          <button
            class="${"signin"===this._formMode?"active":""}"
            @click=${()=>this._switchFormMode("signin")}
          >
            Sign In
          </button>
          <button
            class="${"register"===this._formMode?"active":""}"
            @click=${()=>this._switchFormMode("register")}
          >
            Create account
          </button>
        </div>

        ${"signin"===this._formMode?this._renderSignInForm():this._renderRegisterForm()}
      </div>
      ${this._renderDiagnostics()}
    `}_renderSignInForm(){return r.qy`
      <form class="form-section" @submit=${this._handleSignIn}>
        <div class="form-field">
          <label for="account-signin-username">Username or email</label>
          <input
            id="account-signin-username"
            type="text"
            .value=${this._username}
            @input=${o=>{this._username=o.target.value,this._error=""}}
            autocomplete="username"
            ?disabled=${this._loading}
          />
        </div>
        <div class="form-field">
          <label for="account-signin-password">Password</label>
          <input
            id="account-signin-password"
            type="password"
            .value=${this._password}
            @input=${o=>{this._password=o.target.value,this._error=""}}
            autocomplete="current-password"
            ?disabled=${this._loading}
          />
        </div>
        <p class="form-note">
          <a href="https://ultracard.io/wp-login.php?action=lostpassword" target="_blank" rel="noopener">
            Forgot password?
          </a>
        </p>
        ${this._error?r.qy`<p class="form-error">${this._error}</p>`:""}
        ${this._autoConfigNote?r.qy`<p class="form-note">${this._autoConfigNote}</p>`:""}
        <button type="submit" class="form-submit" ?disabled=${this._loading}>
          ${this._loading?r.qy`<ha-icon icon="mdi:loading" class="spinning"></ha-icon> Signing in…`:r.qy`<ha-icon icon="mdi:login"></ha-icon> Sign In`}
        </button>
      </form>
    `}_renderRegisterForm(){return r.qy`
      <form class="form-section" @submit=${this._handleRegister}>
        <div class="register-notice">
          <ha-icon icon="mdi:cloud-check"></ha-icon>
          <span>
            Create a free account to cloud-sync your Favorites, Colors &amp; Variables across devices.
            After you register, we will email you from ultracard.io so you can set your password.
          </span>
        </div>
        <div class="form-field">
          <label for="account-reg-display">Display name</label>
          <input
            id="account-reg-display"
            type="text"
            .value=${this._displayName}
            @input=${o=>{this._displayName=o.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="name"
          />
        </div>
        <div class="form-field">
          <label for="account-reg-email">Email</label>
          <input
            id="account-reg-email"
            type="email"
            .value=${this._email}
            @input=${o=>{this._email=o.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="email"
          />
        </div>
        <div class="form-field">
          <label for="account-reg-username">Username</label>
          <input
            id="account-reg-username"
            type="text"
            .value=${this._username}
            @input=${o=>{this._username=o.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="username"
          />
        </div>
        ${this._error?r.qy`<p class="form-error">${this._error}</p>`:""}
        ${this._autoConfigNote?r.qy`<p class="form-note">${this._autoConfigNote}</p>`:""}
        <button
          type="submit"
          class="form-submit-btn"
          ?disabled=${this._loading||!this._username.trim()||!this._email.trim()}
        >
          ${this._loading?r.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon> Creating account…`:r.qy`<ha-icon icon="mdi:email-fast"></ha-icon> Create Account`}
        </button>
      </form>
    `}};u.styles=[a.z,r.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
        padding-bottom: 60px;
      }

      .account-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .account-card h3 {
        margin: 0 0 16px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .account-card h3 ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .form-tabs {
        display: flex;
        gap: 0;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
      }

      .form-tabs button {
        padding: 10px 16px;
        border: none;
        background: none;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        transition: color 0.2s ease;
      }

      .form-tabs button:hover {
        color: var(--primary-text-color);
      }

      .form-tabs button.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
      }

      .form-section {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .form-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .form-field label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .form-field input {
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
        background: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        box-sizing: border-box;
      }

      .form-field input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .form-submit {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 8px;
        border: none;
        background: var(--primary-color);
        color: var(--primary-text-color);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        margin-top: 4px;
      }

      .form-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .form-submit ha-icon {
        --mdc-icon-size: 18px;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .spinning {
        animation: spin 0.8s linear infinite;
      }

      .form-error {
        font-size: 13px;
        color: var(--error-color, #db4437);
        margin-top: 4px;
      }

      .form-note {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .form-note a {
        color: var(--primary-color);
        text-decoration: none;
      }

      .form-note a:hover {
        text-decoration: underline;
      }

      .user-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .user-info-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .user-info-row ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }

      .tier-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        margin-top: 8px;
      }

      .tier-badge.pro {
        background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(240, 147, 251, 0.2));
        color: var(--primary-text-color);
      }

      .tier-badge.free {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        color: var(--primary-text-color);
      }

      .upgrade-section {
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
      }

      .upgrade-section h4 {
        margin: 0 0 12px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .upgrade-section p {
        margin: 0 0 16px 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .upgrade-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(135deg, #f5576c, #f093fb);
        color: white;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: opacity 0.15s ease;
      }

      .upgrade-btn:hover {
        opacity: 0.95;
      }

      .upgrade-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      .manage-link {
        font-size: 13px;
        margin-top: 12px;
      }

      .manage-link a {
        color: var(--primary-color);
        text-decoration: none;
      }

      .admin-notice {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 20px;
        border-radius: 12px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
        font-size: 13px;
        line-height: 1.5;
        color: var(--primary-text-color);
      }

      .admin-notice ha-icon {
        --mdc-icon-size: 22px;
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 2px;
      }

      .admin-notice strong {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
      }

      .admin-notice p {
        margin: 0;
        color: var(--secondary-text-color);
      }

      /* Password strength meter */
      .strength-meter {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 6px;
      }

      .strength-bar {
        display: flex;
        gap: 3px;
        flex: 1;
      }

      .strength-segment {
        height: 4px;
        flex: 1;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.12));
        transition: background 0.25s ease;
      }

      .strength-label {
        font-size: 11px;
        font-weight: 600;
        min-width: 58px;
        text-align: right;
        transition: color 0.2s ease;
      }

      /* Register notice */
      .register-notice {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.07);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
        border-radius: 8px;
        padding: 12px 14px;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .register-notice ha-icon {
        --mdc-icon-size: 16px;
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .form-submit-outline {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid var(--primary-color);
        background: none;
        color: var(--primary-color);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 4px;
        transition: all 0.15s ease;
      }

      .form-submit-outline:hover {
        background: var(--primary-color);
        color: white;
      }

      .form-submit-outline ha-icon {
        --mdc-icon-size: 18px;
      }

      .form-submit-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 11px 18px;
        border-radius: 8px;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 4px;
        transition: opacity 0.15s ease;
      }

      .form-submit-btn:hover:not(:disabled) {
        opacity: 0.88;
      }

      .form-submit-btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .form-submit-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      .spin {
        animation: spin 0.8s linear infinite;
      }

      .manage-link a:hover {
        text-decoration: underline;
      }

      .logout-btn {
        margin-top: 16px;
        padding: 8px 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 13px;
        cursor: pointer;
      }

      .logout-btn:hover {
        background: rgba(0, 0, 0, 0.05);
        color: var(--primary-text-color);
      }

      /* ── Sync Stats ─────────────────────────────────────────────────────── */
      .sync-stats-section {
        margin: 16px 0 4px;
        padding: 14px;
        border-radius: 10px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
      }

      .sync-stats-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }

      .sync-stats-title {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .sync-stats-title ha-icon {
        --mdc-icon-size: 16px;
        color: var(--primary-color);
      }

      .sync-stats-badge {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 2px 8px;
        border-radius: 20px;
      }

      .sync-stats-badge.pro {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
      }

      .sync-stats-badge.free {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
        color: var(--primary-color);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .sync-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        margin-bottom: 12px;
      }

      .sync-stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 10px 6px 8px;
        border-radius: 8px;
        background: var(--card-background-color, var(--ha-card-background));
        border: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        text-align: center;
        min-width: 0;
      }

      .sync-stat-icon ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
        opacity: 0.8;
      }

      .sync-stat-count {
        font-size: 22px;
        font-weight: 700;
        color: var(--primary-text-color);
        line-height: 1;
      }

      .sync-stat-label {
        font-size: 11px;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }

      .sync-stat-time {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        font-size: 10px;
        color: var(--secondary-text-color);
        opacity: 0.7;
        margin-top: 2px;
      }

      .sync-stat-time ha-icon {
        --mdc-icon-size: 11px;
      }

      .sync-now-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        padding: 8px 12px;
        border-radius: 7px;
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
        color: var(--primary-color);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .sync-now-btn:hover:not(:disabled) {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }

      .sync-now-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .sync-now-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .spin {
        animation: spin 0.8s linear infinite;
      }
    `],p([(0,e.MZ)({attribute:!1})],u.prototype,"hass",void 0),p([(0,e.MZ)({attribute:!1})],u.prototype,"auth",void 0),p([(0,e.MZ)({attribute:!1})],u.prototype,"cloudUser",void 0),p([(0,e.wk)()],u.prototype,"_formMode",void 0),p([(0,e.wk)()],u.prototype,"_username",void 0),p([(0,e.wk)()],u.prototype,"_password",void 0),p([(0,e.wk)()],u.prototype,"_email",void 0),p([(0,e.wk)()],u.prototype,"_displayName",void 0),p([(0,e.wk)()],u.prototype,"_loading",void 0),p([(0,e.wk)()],u.prototype,"_error",void 0),p([(0,e.wk)()],u.prototype,"_autoConfigNote",void 0),p([(0,e.wk)()],u.prototype,"_syncStatus",void 0),p([(0,e.wk)()],u.prototype,"_syncCounts",void 0),p([(0,e.wk)()],u.prototype,"_diagLoading",void 0),p([(0,e.wk)()],u.prototype,"_diagError",void 0),p([(0,e.wk)()],u.prototype,"_diagReport",void 0),u=p([(0,e.EM)("hub-account-tab")],u)},9286(o,i,t){function r(o){try{return localStorage.getItem(o)}catch(o){return null}}function e(o,i){try{return localStorage.setItem(o,i),!0}catch(o){return!1}}function a(o){try{localStorage.removeItem(o)}catch(o){}}t.d(i,{FX:()=>e,Pw:()=>a,bi:()=>r})},4541(o,i,t){t.d(i,{x:()=>r});const r="3.6.0-beta4"}}]);
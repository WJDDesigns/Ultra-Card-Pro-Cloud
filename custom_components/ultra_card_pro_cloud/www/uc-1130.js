"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[1130],{1130(a,o,t){t.r(o),t.d(o,{HubDashboardTab:()=>d});var r=t(5183),i=t(4276),e=t(9978),n=t(8980),s=t(4541),c=t(821),l=function(a,o,t,r){var i,e=arguments.length,n=e<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(a,o,t,r);else for(var s=a.length-1;s>=0;s--)(i=a[s])&&(n=(e<3?i(n):e>3?i(o,t,n):i(o,t))||n);return e>3&&n&&Object.defineProperty(o,t,n),n};let d=class extends r.WF{constructor(){super(...arguments),this._stats=null,this._statsLoading=!0,this._statsError="",this._changelogBody="",this._changelogLoading=!0,this._changelogError="",this._changelogTitle=""}connectedCallback(){super.connectedCallback(),this._loadStats(),this._loadChangelog()}_connectionStatus(){var a,o,t;const r=null===(o=null===(a=this.hass)||void 0===a?void 0:a.states)||void 0===o?void 0:o["sensor.ultra_card_pro_cloud_authentication_status"];if(!r)return{label:"Not configured",className:"unknown",detail:"Install Ultra Card Connect to sync your account and Pro features.",needsReauth:!1,lastPoll:"",subStatus:""};const i=null!==(t=r.attributes)&&void 0!==t?t:{},e=Boolean(i.needs_reauth),n=i.last_poll||"",s=i.subscription_status||"";return e?{label:"Reconfiguration needed",className:"warning",detail:"Ultra Card Connect needs updated credentials. Open the integration to reconfigure.",needsReauth:!0,lastPoll:n,subStatus:s}:"connected"===r.state?{label:"Connected",className:"connected",detail:`Signed in via Ultra Card Connect · ${"pro"===(i.subscription_tier||"free")?"Pro":"Free"} tier${s&&"active"!==s?` · ${s}`:""}.${n?` Last sync: ${this._formatIso(n)}.`:""}`,needsReauth:!1,lastPoll:n,subStatus:s}:{label:"Disconnected",className:"disconnected",detail:"Sign in again from the Account section or reconfigure the integration.",needsReauth:!1,lastPoll:n,subStatus:s}}_formatIso(a){if(!a)return"Never";try{return new Date(a).toLocaleString()}catch(o){return a}}_nav(a,o){o?(0,c.nL)(this,{tab:a,slug:o}):(0,c.nL)(this,{tab:a})}async _loadChangelog(){this._changelogLoading=!0,this._changelogError="",this._changelogBody="",this._changelogTitle="";const a=/beta|alpha/i.test(s.x);try{const o=await fetch("https://api.github.com/repos/WJDDesigns/Ultra-Card/releases?per_page=20",{headers:{Accept:"application/vnd.github.v3+json"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);const t=await o.json(),r=a?t.find(a=>a.prerelease):t.find(a=>!a.prerelease);(null==r?void 0:r.body)?(this._changelogTitle=r.name||r.tag_name||"Changelog",this._changelogBody=r.body):this._changelogBody=a?"No beta release notes found.":"No stable release notes found."}catch(a){console.warn("Changelog fetch failed:",a),this._changelogError="Could not load changelog from GitHub."}finally{this._changelogLoading=!1}}async _loadStats(){var a,o;if(this.hass){this._statsLoading=!0,this._statsError="";try{n.ucDashboardScannerService.initialize(this.hass);const t=await n.ucDashboardScannerService.scanAllDashboards();let r=1;try{const a=await this.hass.callWS({type:"lovelace/dashboards/list"});Array.isArray(a)&&(r=a.length+1)}catch(a){}this._stats={cardCount:t.card_count,viewCount:null!==(o=null===(a=t.views)||void 0===a?void 0:a.length)&&void 0!==o?o:0,dashboardCount:r}}catch(a){console.warn("Dashboard scan for stats failed:",a),this._statsError="Could not load dashboard stats.",this._stats=null}finally{this._statsLoading=!1}}else this._statsLoading=!1}render(){return r.qy`
      <div class="welcome-hero">
        <h2>Welcome to Ultra Card</h2>
        <p>
          Build beautiful, modular dashboards with the layout builder. Use presets, favorites,
          variables, and templates to create cards that fit your Home Assistant setup.
        </p>
        <div class="version-badge">
          <ha-icon icon="mdi:tag-outline"></ha-icon>
          Version ${s.x}
        </div>
      </div>

      <div class="command-center">
        <div class="command-card">
          <h3><ha-icon icon="mdi:cloud-sync"></ha-icon> Cloud connection</h3>
          ${(()=>{const a=this._connectionStatus();return r.qy`
              <span class="status-pill ${a.className}">${a.label}</span>
              <p>${a.detail}</p>
              <div class="quick-links">
                <button @click=${()=>this._nav("account")}>
                  <ha-icon icon="mdi:account-cog"></ha-icon>
                  Account
                </button>
                ${a.needsReauth?r.qy`
                      <button
                        @click=${()=>{window.location.href="/config/integrations/integration/ultra_card_pro_cloud"}}
                      >
                        <ha-icon icon="mdi:cog"></ha-icon>
                        Reconfigure
                      </button>
                    `:r.s6}
              </div>
            `})()}
        </div>

        <div class="command-card">
          <h3><ha-icon icon="mdi:lightning-bolt"></ha-icon> Quick actions</h3>
          <p>Jump to library tools and documentation.</p>
          <div class="quick-links">
            <button @click=${()=>this._nav("presets")}>
              <ha-icon icon="mdi:palette"></ha-icon>
              Presets
            </button>
            <button @click=${()=>this._nav("colors")}>
              <ha-icon icon="mdi:eyedropper-variant"></ha-icon>
              Colors
            </button>
            <button @click=${()=>this._nav("docs","layout-system")}>
              <ha-icon icon="mdi:book-open-page-variant"></ha-icon>
              Layout docs
            </button>
            <button @click=${()=>this._nav("docs","installation")}>
              <ha-icon icon="mdi:download"></ha-icon>
              Install guide
            </button>
          </div>
        </div>
      </div>

      <div class="stats-card">
        <h3><ha-icon icon="mdi:view-dashboard"></ha-icon> Your Home Assistant</h3>
        ${this._statsLoading?r.qy`<div class="stats-loading">Scanning all dashboards…</div>`:this._statsError?r.qy`<div class="stats-error">${this._statsError}</div>`:this._stats?r.qy`
                  <div class="stats-grid">
                    <div class="stat-item">
                      <div class="stat-value">${this._stats.dashboardCount}</div>
                      <div class="stat-label">Lovelace Dashboard${1!==this._stats.dashboardCount?"s":""}</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-value">${this._stats.viewCount}</div>
                      <div class="stat-label">View${1!==this._stats.viewCount?"s":""}</div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-value">${this._stats.cardCount}</div>
                      <div class="stat-label">Ultra Card${1!==this._stats.cardCount?"s":""}</div>
                    </div>
                  </div>
                `:r.qy`<div class="stats-loading">No data</div>`}
      </div>

      <div class="changelog-card">
        <h3><ha-icon icon="mdi:new-box"></ha-icon> ${this._changelogTitle||"Recent updates"}</h3>
        ${this._changelogLoading?r.qy`<div class="changelog-body-loading">Loading changelog…</div>`:this._changelogError?r.qy`<div class="changelog-body-error">${this._changelogError}</div>`:r.qy`<div class="changelog-body">${this._changelogBody}</div>`}
      </div>
    `}};d.styles=[e.z,r.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      .welcome-hero {
        text-align: center;
        padding: 32px 24px 28px;
        margin-bottom: 24px;
        background: linear-gradient(135deg, rgba(var(--rgb-primary-color, 3, 169, 244), 0.08), rgba(var(--rgb-primary-color, 3, 169, 244), 0.02));
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
        border-radius: 16px;
      }

      .welcome-hero h2 {
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 700;
        color: var(--primary-text-color);
      }

      .welcome-hero p {
        margin: 0;
        font-size: 15px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
      }

      .stats-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 20px 24px;
        margin-bottom: 24px;
      }

      .stats-card h3 {
        margin: 0 0 16px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .stats-card h3 ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 16px;
      }

      .stat-item {
        padding: 12px 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
        text-align: center;
      }

      .stat-value {
        font-size: 28px;
        font-weight: 700;
        color: var(--primary-color);
        line-height: 1.2;
      }

      .stat-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .stats-loading,
      .stats-error {
        padding: 16px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 14px;
      }

      .stats-error {
        color: var(--error-color, #f44336);
      }

      .changelog-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .changelog-card h3 {
        margin: 0 0 16px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .changelog-card h3 ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .changelog-list {
        margin: 0;
        padding-left: 20px;
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.7;
      }

      .changelog-list li {
        margin-bottom: 6px;
      }

      .changelog-body {
        margin-top: 12px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-word;
        max-height: 320px;
        overflow-y: auto;
      }

      .changelog-body-loading,
      .changelog-body-error {
        padding: 16px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      .changelog-body-error {
        color: var(--error-color, #f44336);
      }

      .version-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-color);
        margin-top: 8px;
      }

      .version-badge ha-icon {
        --mdc-icon-size: 16px;
      }

      .command-center {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 16px;
        margin-bottom: 24px;
      }

      .command-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 18px 20px;
      }

      .command-card h3 {
        margin: 0 0 10px;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
      }

      .command-card p {
        margin: 0 0 12px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 600;
      }

      .status-pill.connected {
        background: rgba(76, 175, 80, 0.15);
        color: #4caf50;
      }

      .status-pill.disconnected {
        background: rgba(244, 67, 54, 0.12);
        color: #f44336;
      }

      .status-pill.unknown {
        background: rgba(158, 158, 158, 0.15);
        color: var(--secondary-text-color);
      }

      .status-pill.warning {
        background: rgba(255, 152, 0, 0.15);
        color: #ff9800;
      }

      .quick-links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .quick-links button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        border-radius: 20px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--primary-text-color);
        font-size: 12px;
        cursor: pointer;
      }

      .quick-links button:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
    `],l([(0,i.MZ)({attribute:!1})],d.prototype,"hass",void 0),l([(0,i.wk)()],d.prototype,"_stats",void 0),l([(0,i.wk)()],d.prototype,"_statsLoading",void 0),l([(0,i.wk)()],d.prototype,"_statsError",void 0),l([(0,i.wk)()],d.prototype,"_changelogBody",void 0),l([(0,i.wk)()],d.prototype,"_changelogLoading",void 0),l([(0,i.wk)()],d.prototype,"_changelogError",void 0),l([(0,i.wk)()],d.prototype,"_changelogTitle",void 0),d=l([(0,i.EM)("hub-dashboard-tab")],d)}}]);
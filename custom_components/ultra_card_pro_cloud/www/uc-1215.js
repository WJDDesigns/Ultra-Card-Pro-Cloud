"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[1215],{7186(t,o,a){a.r(o),a.d(o,{HubAccountTab:()=>v});var e=a(5183),i=a(4276),r=a(9978),s=a(378),n=a(7568),c=a(4541),l=a(8690);function d(t,o){const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),e=URL.createObjectURL(a),i=document.createElement("a");i.href=e,i.download=o||`ultra-card-connect-diagnostics-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`,i.rel="noopener",document.body.appendChild(i),i.click(),setTimeout(()=>{i.remove(),URL.revokeObjectURL(e)},1e3)}var p=a(8980);const h=new class{constructor(){this.hass=null,this.apiBase=""}initialize(t,o){this.hass=t,this.apiBase=`${o}/wp-json/ultra-card/v1`,p.ucDashboardScannerService.initialize(t)}async createSnapshot(){var t;if(!s.x.isAuthenticated())throw new Error("Must be logged in to create snapshots");const o=s.x.getCurrentUser();if(!o||"pro"!==(null===(t=o.subscription)||void 0===t?void 0:t.tier))throw new Error("Pro subscription required to create manual snapshots");try{const t=await p.ucDashboardScannerService.scanAllDashboards();if(0===t.card_count)throw new Error("No Ultra Cards found in dashboard");return console.log(`📦 Captured ${t.card_count} Ultra Cards from ${t.views.length} views`),{id:(await this.apiCall("/snapshots",{method:"POST",body:JSON.stringify({type:"manual",snapshot_data:t})})).snapshot_id,type:"manual",date:(new Date).toISOString().split("T")[0],created:(new Date).toISOString(),snapshot_data:t}}catch(t){throw console.error("❌ Failed to create snapshot:",t),t}}async createAutoSnapshot(){var t;const o=s.x.getCurrentUser();if(o&&"pro"===(null===(t=o.subscription)||void 0===t?void 0:t.tier))try{console.log("🤖 Creating automatic daily snapshot...");const t=await p.ucDashboardScannerService.scanAllDashboards();if(0===t.card_count)return void console.log("⚠️ No Ultra Cards found, skipping auto snapshot");await this.apiCall("/snapshots",{method:"POST",body:JSON.stringify({type:"auto",snapshot_data:t})})}catch(t){console.error("❌ Auto snapshot failed:",t)}else console.log("⏭️ Skipping auto snapshot - not authenticated or not a Pro user")}async listSnapshots(t=30){if(!s.x.isAuthenticated())throw new Error("Must be logged in to view snapshots");try{const o=Date.now();return console.log(`📋 Fetching snapshot list with cache-busting timestamp: ${o}`),await this.apiCall(`/snapshots?limit=${t}&_=${o}`,{method:"GET"})}catch(t){throw console.error("❌ Failed to list snapshots:",t),t}}async getSnapshot(t){if(!s.x.isAuthenticated())throw new Error("Must be logged in to view snapshots");try{return await this.apiCall(`/snapshots/${t}`,{method:"GET"})}catch(o){throw console.error(`Failed to get snapshot ${t}:`,o),o}}async restoreSnapshot(t){if(!s.x.isAuthenticated())throw new Error("Must be logged in to restore snapshots");console.log(`🔄 Restoring snapshot ${t}...`);try{const o=(await this.apiCall(`/snapshots/${t}/restore`,{method:"POST"})).snapshot_data,a={};return o.cards.forEach(t=>{a[t.view_title]||(a[t.view_title]=[]),a[t.view_title].push(t)}),Object.keys(a).forEach(t=>{a[t].sort((t,o)=>t.card_index-o.card_index)}),console.log(`✅ Snapshot restored: ${o.card_count} cards across ${Object.keys(a).length} views`),{snapshot_data:o,instructions:this.generateRestoreInstructions(o,a),cards_by_view:a}}catch(o){throw console.error(`Failed to restore snapshot ${t}:`,o),o}}async deleteSnapshot(t){if(!s.x.isAuthenticated())throw new Error("Must be logged in to delete snapshots");try{await this.apiCall(`/snapshots/${t}`,{method:"DELETE"}),console.log(`🗑️ Snapshot ${t} deleted`)}catch(o){throw console.error(`Failed to delete snapshot ${t}:`,o),o}}async getSettings(){if(!s.x.isAuthenticated())throw new Error("Must be logged in to view settings");try{return await this.apiCall("/snapshot-settings",{method:"GET"})}catch(t){throw console.error("Failed to get snapshot settings:",t),t}}async updateSettings(t){if(!s.x.isAuthenticated())throw new Error("Must be logged in to update settings");try{await this.apiCall("/snapshot-settings",{method:"PUT",body:JSON.stringify(t)})}catch(t){throw console.error("Failed to update snapshot settings:",t),t}}canCreateSnapshots(){var t;const o=s.x.getCurrentUser();return"pro"===(null===(t=null==o?void 0:o.subscription)||void 0===t?void 0:t.tier)}async getDashboardPreview(){try{if(!await p.ucDashboardScannerService.canScan())return{can_scan:!1,ultra_card_count:0,view_count:0,estimated_size_kb:0};const t=await p.ucDashboardScannerService.getDashboardStats(),o=15*t.ultra_cards;return{can_scan:!0,ultra_card_count:t.ultra_cards,view_count:t.total_views,estimated_size_kb:o}}catch(t){return console.error("Failed to get dashboard preview:",t),{can_scan:!1,ultra_card_count:0,view_count:0,estimated_size_kb:0}}}generateRestoreInstructions(t,o){const a=Object.keys(o).length,e=t.card_count;let i=`This snapshot contains ${e} Ultra Card${e>1?"s":""} across ${a} view${a>1?"s":""}.\n\n`;return i+="**Restoration Instructions:**\n\n",Object.keys(o).forEach((t,a)=>{const e=o[t];i+=`**${a+1}. ${t}** (${e.length} card${e.length>1?"s":""})\n`,e.forEach((t,o)=>{i+=`   - Position ${t.card_index+1}: ${t.card_name||"Ultra Card"}\n`}),i+="\n"}),i+="\n**To restore:**\n",i+="1. Open each view in your Home Assistant dashboard\n",i+='2. Click "Edit Dashboard" (top right)\n',i+="3. Add or replace Ultra Cards in the positions shown above\n",i+="4. Paste the config for each card (available in detailed view)\n",i+="5. Save your changes\n",i}async apiCall(t,o={}){if(!s.x.isAuthenticated())throw new Error("Not authenticated");const a=`${this.apiBase}${t}`,e=await s.x.authenticatedFetch(a,Object.assign(Object.assign({},o),{headers:Object.assign({"Content-Type":"application/json"},o.headers||{})}));if(!e.ok){const t=await e.json().catch(()=>({message:"Unknown error"}));throw new Error(t.message||`API call failed: ${e.status}`)}return e.json()}},g="ultra_card_last_auto_snapshot",u=new class{constructor(){this._checkInterval=null,this._isRunning=!1,this._listeners=new Set,this._loadLastSnapshotTime()}start(){this._checkInterval||(this._checkAndTriggerSnapshot(),this._checkInterval=window.setInterval(()=>{this._checkAndTriggerSnapshot()},6e4),this._notifyListeners())}stop(){this._checkInterval&&(clearInterval(this._checkInterval),this._checkInterval=null,this._notifyListeners())}async _checkAndTriggerSnapshot(){var t;if(this._isRunning)return;const o=s.x.getCurrentUser();if(o&&"pro"===(null===(t=o.subscription)||void 0===t?void 0:t.tier))try{const t=await h.getSettings();if(!t.enabled)return;if(this._shouldRunSnapshot(t.time,t.timezone)){this._isRunning=!0,this._notifyListeners();try{await h.createAutoSnapshot(),this._saveLastSnapshotTime()}catch(t){console.error("❌ Auto-snapshot failed:",t)}finally{this._isRunning=!1,this._notifyListeners()}}}catch(t){console.error("❌ Error checking snapshot schedule:",t)}}_shouldRunSnapshot(t,o){const a=this._getLastSnapshotTime(),e=new Date,[i,r]=t.split(":").map(Number),s=new Date(e);if(s.setHours(i,r,0,0),!a)return e>=s;const n=new Date(a);return!(n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate())&&e>=s}_getLastSnapshotTime(){try{return localStorage.getItem(g)}catch(t){return console.error("Failed to read last snapshot time:",t),null}}_saveLastSnapshotTime(){try{const t=(new Date).toISOString();localStorage.setItem(g,t)}catch(t){console.error("Failed to save last snapshot time:",t)}}updateLastSnapshotTime(){this._saveLastSnapshotTime(),this._notifyListeners()}_loadLastSnapshotTime(){this._getLastSnapshotTime()}async triggerManualSnapshot(){try{await h.createSnapshot(),this._saveLastSnapshotTime(),this._notifyListeners()}catch(t){throw console.error("❌ Manual snapshot failed:",t),t}}async getStatus(){const t=this._getLastSnapshotTime();let o=null;try{const a=await h.getSettings();a.enabled&&(o=this._calculateNextSnapshotTime(a.time,a.timezone,t))}catch(t){console.error("Failed to get snapshot settings:",t)}return{enabled:!!this._checkInterval,nextSnapshotTime:o,lastSnapshotTime:t?new Date(t):null,isRunning:this._isRunning}}_calculateNextSnapshotTime(t,o,a){const[e,i]=t.split(":").map(Number),r=new Date,s=new Date(r);if(s.setHours(e,i,0,0),s<=r&&s.setDate(s.getDate()+1),a){const t=new Date(a);t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate()&&s.getDate()===r.getDate()&&s.setDate(s.getDate()+1)}return s}subscribe(t){return this._listeners.add(t),this.getStatus().then(o=>t(o)),()=>{this._listeners.delete(t)}}_notifyListeners(){this.getStatus().then(t=>{this._listeners.forEach(o=>o(t))})}};var m=function(t,o,a,e){var i,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,a,e);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(s=(r<3?i(s):r>3?i(o,a,s):i(o,a))||s);return r>3&&s&&Object.defineProperty(o,a,s),s};let b=class extends e.WF{constructor(){super(...arguments),this.auth=null,this.cloudUser=null,this._toastMsg="",this._cloudUser=null,this._snapshotSettingsOpen=!1,this._ssEnabled=!1,this._ssTime="03:00",this._ssTimezone="UTC",this._ssLoading=!1,this._snapshotsListOpen=!1,this._snapshotsList=[],this._snapshotsLoading=!1,this._creatingSnapshot=!1,this._snapshotsSummaryLoaded=!1}updated(t){var o,a,e,i;if(t.has("hass")&&this.hass){const t=s.x.checkIntegrationAuth(this.hass);this._cloudUser=t,t&&s.x.setIntegrationUser(t)}((null===(o=this.auth)||void 0===o?void 0:o.authenticated)&&"pro"===(null===(a=this.auth)||void 0===a?void 0:a.subscription_tier)||"pro"===(null===(i=null===(e=this.cloudUser)||void 0===e?void 0:e.subscription)||void 0===i?void 0:i.tier))&&this.hass&&!this._snapshotsSummaryLoaded&&!this._snapshotsLoading&&this._loadSnapshotsList()}_showToast(t){this._toastMsg=t,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2500)}render(){var t,o,a,i,r,s;const n=!!(null===(t=this.auth)||void 0===t?void 0:t.authenticated)||!!this.cloudUser,c=!!(null===(o=this.auth)||void 0===o?void 0:o.authenticated)&&"pro"===(null===(a=this.auth)||void 0===a?void 0:a.subscription_tier)||!(null===(i=this.auth)||void 0===i?void 0:i.authenticated)&&"pro"===(null===(s=null===(r=this.cloudUser)||void 0===r?void 0:r.subscription)||void 0===s?void 0:s.tier);return n?e.qy`
      ${c?e.qy`
            ${this._renderDashboardTools()}
            ${this._renderProSettings()}
            ${this._renderProSupport()}
          `:this._renderUpgradePrompt()}
      ${this._renderFeaturesGrid()}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `:e.s6}_renderDashboardTools(){return e.qy`
      <div class="tools-section">
        <div class="section-header">
          <div class="header-icon" style="background:linear-gradient(135deg,#e91e63,#f06292);">
            <ha-icon icon="mdi:view-dashboard"></ha-icon>
          </div>
          <div class="header-content">
            <h3>Dashboard Pro Tools</h3>
            <p>Manage entire dashboard snapshots</p>
          </div>
        </div>
        <div class="tools-grid">
          <button class="tool-card" @click=${this._handleExportDashboard}>
            <div class="tool-icon export"><ha-icon icon="mdi:export"></ha-icon></div>
            <div class="tool-content"><h4>Export Dashboard</h4><p>Download entire dashboard</p></div>
          </button>
          <button class="tool-card" @click=${this._handleImportDashboard}>
            <div class="tool-icon import"><ha-icon icon="mdi:import"></ha-icon></div>
            <div class="tool-content"><h4>Import Dashboard</h4><p>Load dashboard from file</p></div>
          </button>
          <button class="tool-card" ?disabled=${this._creatingSnapshot} @click=${this._handleCreateSnapshot}>
            <div class="tool-icon snapshot"><ha-icon icon="mdi:camera-plus"></ha-icon></div>
            <div class="tool-content"><h4>${this._creatingSnapshot?"Creating…":"Create Snapshot"}</h4><p>Manual dashboard snapshot</p></div>
          </button>
          <button class="tool-card" @click=${this._handleViewSnapshots}>
            <div class="tool-icon history"><ha-icon icon="mdi:history"></ha-icon></div>
            <div class="tool-content"><h4>View Snapshots</h4><p>${this._snapshotsListOpen?"Hide snapshot list":"Browse all snapshots"}</p></div>
          </button>
          <button class="tool-card" @click=${this._handleSnapshotSettings}>
            <div class="tool-icon settings"><ha-icon icon="mdi:cog"></ha-icon></div>
            <div class="tool-content"><h4>Snapshot Settings</h4><p>${this._snapshotSettingsOpen?"Close settings":"Configure auto-snapshots"}</p></div>
          </button>
        </div>

        ${this._renderSnapshotSummary()}

        ${this._snapshotsListOpen?this._renderSnapshotsList():""}
        ${this._snapshotSettingsOpen?this._renderSnapshotSettingsPanel():""}
      </div>
    `}_renderSnapshotSummary(){const t=this._snapshotsList,o=t.filter(t=>"manual"===t.type).length,a=t.filter(t=>"auto"===t.type).length,i=t.length>0?t.slice().sort((t,o)=>(o.created_timestamp||0)-(t.created_timestamp||0))[0]:null,r=i?this._formatSnapshotDate(i.created||i.date||""):null;return e.qy`
      <div class="snapshot-summary">
        <div class="snapshot-summary-row">
          <span class="snapshot-summary-label">
            <ha-icon icon="mdi:camera"></ha-icon>
            Manual
          </span>
          <span class="snapshot-summary-value">${o}</span>
        </div>
        <div class="snapshot-summary-row">
          <span class="snapshot-summary-label">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            Auto
          </span>
          <span class="snapshot-summary-value">${a}</span>
        </div>
        <div class="snapshot-summary-row snapshot-summary-latest">
          <span class="snapshot-summary-label">
            <ha-icon icon="mdi:clock-check-outline"></ha-icon>
            Latest
          </span>
          <span class="snapshot-summary-value">${null!=r?r:"No snapshots yet"}</span>
        </div>
      </div>
    `}_renderSnapshotsList(){return this._snapshotsLoading?e.qy`<div class="ss-panel" style="text-align:center;padding:24px;"><ha-icon icon="mdi:loading" class="spinning" style="--mdc-icon-size:24px;color:var(--primary-color);"></ha-icon><br/>Loading snapshots…</div>`:0===this._snapshotsList.length?e.qy`<div class="ss-panel" style="text-align:center;"><ha-icon icon="mdi:camera-off" style="--mdc-icon-size:32px;color:var(--secondary-text-color);opacity:0.5;"></ha-icon><p style="margin:8px 0 0;color:var(--secondary-text-color);font-size:13px;">No snapshots yet. Create your first one above.</p></div>`:e.qy`
      <div class="snapshots-list">
        ${this._snapshotsList.map(t=>e.qy`
          <div class="snapshot-item">
            <div class="snapshot-icon ${"auto"===t.type?"auto":"manual"}">
              <ha-icon icon=${"auto"===t.type?"mdi:clock-outline":"mdi:camera"}></ha-icon>
            </div>
            <div class="snapshot-info">
              <h5>${"auto"===t.type?"Auto Snapshot":"Manual Snapshot"}</h5>
              <p>${this._formatSnapshotDate(t.created||t.date||"")}</p>
            </div>
            <div class="snapshot-meta">
              <span class="card-count">${t.card_count||"?"} cards</span>
            </div>
          </div>
        `)}
      </div>
    `}_renderSnapshotSettingsPanel(){return this._ssLoading?e.qy`<div class="ss-panel" style="text-align:center;padding:24px;"><ha-icon icon="mdi:loading" class="spinning" style="--mdc-icon-size:24px;color:var(--primary-color);"></ha-icon><br/>Loading settings…</div>`:e.qy`
      <div class="ss-panel">
        <h4><ha-icon icon="mdi:clock-check-outline"></ha-icon> Auto-Snapshot Schedule</h4>

        <div class="ss-row">
          <span class="ss-label">Enabled</span>
          <ha-switch
            .checked=${this._ssEnabled}
            @change=${t=>this._ssEnabled=t.target.checked}
          ></ha-switch>
        </div>

        <div class="ss-row">
          <span class="ss-label">Time</span>
          <input
            type="time"
            class="ss-input"
            .value=${this._ssTime}
            @input=${t=>this._ssTime=t.target.value}
          />
        </div>

        <div class="ss-row">
          <span class="ss-label">Timezone</span>
          <select
            class="ss-input"
            .value=${this._ssTimezone}
            @change=${t=>this._ssTimezone=t.target.value}
          >
            ${["UTC","America/New_York","America/Chicago","America/Denver","America/Los_Angeles","America/Phoenix","America/Anchorage","Pacific/Honolulu","Europe/London","Europe/Paris","Europe/Berlin","Europe/Rome","Asia/Tokyo","Asia/Shanghai","Asia/Kolkata","Australia/Sydney"].map(t=>e.qy`<option value=${t} ?selected=${this._ssTimezone===t}>${t.replace(/_/g," ")}</option>`)}
          </select>
        </div>

        <div class="ss-actions">
          <button class="ss-save-btn" ?disabled=${this._ssLoading} @click=${this._saveSnapshotSettings}>
            <ha-icon icon="mdi:content-save" style="--mdc-icon-size:16px;"></ha-icon>
            Save Settings
          </button>
          <button class="ss-cancel-btn" @click=${()=>this._snapshotSettingsOpen=!1}>
            Cancel
          </button>
        </div>
      </div>
    `}_renderProSettings(){return e.qy`
      <div class="tools-section" style="border:2px solid var(--primary-color);">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:cog"></ha-icon></div>
          <div class="header-content">
            <h3>Pro Settings</h3>
            <p>Exclusive settings for Ultra Card Pro subscribers</p>
          </div>
        </div>
        <div class="pro-setting-item">
          <div class="setting-icon-wrap">
            <ha-icon icon="mdi:card-remove-outline"></ha-icon>
          </div>
          <div class="setting-body">
            <h4>Start with Empty Card</h4>
            <p>When adding a new Ultra Card, start with an empty layout instead of the default text and image modules</p>
          </div>
          <div class="setting-toggle">
            <ha-switch
              .checked=${this._getSkipDefaultModules()}
              @change=${this._handleSkipDefaultModulesChange}
            ></ha-switch>
          </div>
        </div>
      </div>
    `}_renderProSupport(){return e.qy`
      <div class="tools-section">
        <div class="section-header">
          <div class="header-icon" style="background:#5865F2;">
            <ha-icon icon="mdi:forum"></ha-icon>
          </div>
          <div class="header-content">
            <h3>Pro Support</h3>
            <p>Priority support for Pro subscribers</p>
          </div>
        </div>
        <div class="discord-card">
          <div class="discord-icon">
            <ha-icon icon="mdi:forum"></ha-icon>
          </div>
          <div class="discord-body">
            <h4>Chat with Us on Discord</h4>
            <p>Get direct priority support, share feedback, and connect with the Ultra Card community.</p>
          </div>
          <a
            class="discord-btn"
            href="https://discord.com/users/915385171396689921"
            target="_blank"
            rel="noopener"
          >
            <ha-icon icon="mdi:chat"></ha-icon>
            Message Me
          </a>
        </div>
      </div>
    `}_renderUpgradePrompt(){return e.qy`
      <div class="upgrade-card">
        <div class="upgrade-icon">
          <ha-icon icon="mdi:star-shooting"></ha-icon>
        </div>
        <h3>Unlock Pro Features</h3>
        <p>Get export, import, manual backups, dashboard snapshots, and more for all your cards.</p>
        <ul class="features-checklist">
          <li><ha-icon icon="mdi:check"></ha-icon> Export & import full card configs</li>
          <li><ha-icon icon="mdi:check"></ha-icon> 30 manual backups across all cards</li>
          <li><ha-icon icon="mdi:check"></ha-icon> Dashboard snapshots & auto-snapshots</li>
          <li><ha-icon icon="mdi:check"></ha-icon> Name your cards and backups</li>
          <li><ha-icon icon="mdi:check"></ha-icon> Priority support</li>
        </ul>
        <a
          class="upgrade-btn"
          href=${"https://ultracard.io/product/ultra-card-pro/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ha-icon icon="mdi:star"></ha-icon>
          Upgrade to Pro
        </a>
      </div>
    `}_renderFeaturesGrid(){return e.qy`
      <div class="tools-section">
        <div class="section-header">
          <div class="header-icon" style="background:linear-gradient(135deg,#f093fb,#f5576c);">
            <ha-icon icon="mdi:flash"></ha-icon>
          </div>
          <div class="header-content">
            <h3>Pro Features</h3>
            <p>Available when editing your cards</p>
          </div>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon sync"><ha-icon icon="mdi:sync"></ha-icon></div>
            <div class="feature-info"><h4>Cloud Sync</h4><p>Sync card configs across all your devices automatically</p></div>
          </div>
          <div class="feature-card">
            <div class="feature-icon backup"><ha-icon icon="mdi:cloud-upload"></ha-icon></div>
            <div class="feature-info"><h4>Cloud Backups</h4><p>Manual and automatic backups with version history</p></div>
          </div>
          <div class="feature-card">
            <div class="feature-icon presets"><ha-icon icon="mdi:palette"></ha-icon></div>
            <div class="feature-info"><h4>Pro Modules</h4><p>Access exclusive premium modules and templates</p></div>
          </div>
          <div class="feature-card">
            <div class="feature-icon support"><ha-icon icon="mdi:face-agent"></ha-icon></div>
            <div class="feature-info"><h4>Priority Support</h4><p>Get help faster with priority support access</p></div>
          </div>
        </div>
      </div>
    `}_getSkipDefaultModules(){try{return"true"===localStorage.getItem("ultra-card-skip-default-modules")}catch(t){return!1}}_handleSkipDefaultModulesChange(t){const o=t.target.checked;try{localStorage.setItem("ultra-card-skip-default-modules",String(o)),this._showToast(o?"New cards will start empty":"New cards will use default modules")}catch(t){}}_handleExportDashboard(){var t,o,a,e,i;try{const r=null===(a=null===(o=null===(t=this.hass)||void 0===t?void 0:t.panels)||void 0===o?void 0:o.lovelace)||void 0===a?void 0:a.config,s={views:(null==r?void 0:r.views)||[],dashboard_path:(null==r?void 0:r.dashboard_path)||"default",exported_at:(new Date).toISOString(),exported_by:(null===(e=this.auth)||void 0===e?void 0:e.display_name)||(null===(i=this.auth)||void 0===i?void 0:i.username)||"Unknown"},n=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),c=URL.createObjectURL(n),l=document.createElement("a");l.href=c,l.download=`dashboard-export-${Date.now()}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c),this._showToast("Dashboard exported")}catch(t){console.error("Dashboard export failed:",t),this._showToast("Failed to export dashboard")}}_handleImportDashboard(){const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async t=>{var o;try{const a=null===(o=t.target.files)||void 0===o?void 0:o[0];if(!a)return;const e=await a.text(),i=JSON.parse(e);if(!i.views||!Array.isArray(i.views))return void this._showToast("Invalid dashboard file");this._showToast(`Read ${i.views.length} views — use HA raw editor to apply`)}catch(t){console.error("Dashboard import failed:",t),this._showToast("Failed to read dashboard file")}},t.click()}_ensureSnapshotInit(){h.initialize(this.hass,"https://ultracard.io")}async _handleCreateSnapshot(){var t;this._creatingSnapshot=!0;try{this._ensureSnapshotInit();const o=await h.createSnapshot(),a=(null===(t=null==o?void 0:o.snapshot_data)||void 0===t?void 0:t.card_count)||0;this._showToast(`Snapshot created (${a} card${1!==a?"s":""})`),await this._loadSnapshotsList()}catch(t){console.error("Snapshot failed:",t),this._showToast((null==t?void 0:t.message)||"Failed to create snapshot")}finally{this._creatingSnapshot=!1}}async _handleViewSnapshots(){this._snapshotsListOpen?this._snapshotsListOpen=!1:(this._snapshotsListOpen=!0,await this._loadSnapshotsList())}async _loadSnapshotsList(){this._snapshotsLoading=!0;try{this._ensureSnapshotInit(),this._snapshotsList=await h.listSnapshots(20)}catch(t){console.error("List snapshots failed:",t),this._showToast((null==t?void 0:t.message)||"Failed to load snapshots"),this._snapshotsList=[]}finally{this._snapshotsLoading=!1,this._snapshotsSummaryLoaded=!0}}async _handleSnapshotSettings(){if(this._snapshotSettingsOpen)this._snapshotSettingsOpen=!1;else{this._ssLoading=!0,this._snapshotSettingsOpen=!0;try{this._ensureSnapshotInit();const t=await h.getSettings();this._ssEnabled=t.enabled,this._ssTime=t.time||"03:00",this._ssTimezone=t.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch(t){console.error("Failed to load settings:",t),this._showToast((null==t?void 0:t.message)||"Failed to load snapshot settings")}finally{this._ssLoading=!1}}}async _saveSnapshotSettings(){this._ssLoading=!0;try{this._ensureSnapshotInit(),await h.updateSettings({enabled:this._ssEnabled,time:this._ssTime,timezone:this._ssTimezone}),this._ssEnabled?u.start():u.stop(),this._showToast("Snapshot settings saved"),this._snapshotSettingsOpen=!1}catch(t){console.error("Failed to save settings:",t),this._showToast((null==t?void 0:t.message)||"Failed to save settings")}finally{this._ssLoading=!1}}_formatSnapshotDate(t){try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch(o){return t}}};b.styles=[r.z,e.AH`
      :host {
        display: block;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .spinning {
        animation: spin 1s linear infinite;
      }

      /* Integration status card */
      .integration-status {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 20px;
        border-radius: 14px;
        margin-bottom: 24px;
      }

      .integration-status.authenticated {
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(76, 175, 80, 0.02));
        border: 1px solid rgba(76, 175, 80, 0.2);
      }

      .integration-status.not-configured {
        background: linear-gradient(135deg, rgba(255, 152, 0, 0.08), rgba(255, 152, 0, 0.02));
        border: 1px solid rgba(255, 152, 0, 0.2);
      }

      .integration-status.not-installed {
        background: linear-gradient(135deg, rgba(var(--rgb-primary-color, 3, 169, 244), 0.06), transparent);
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
      }

      .status-icon-wrap {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .status-icon-wrap.success {
        background: rgba(76, 175, 80, 0.15);
      }

      .status-icon-wrap.success ha-icon {
        color: #4caf50;
        --mdc-icon-size: 24px;
      }

      .status-icon-wrap.warning {
        background: rgba(255, 152, 0, 0.15);
      }

      .status-icon-wrap.warning ha-icon {
        color: #ff9800;
        --mdc-icon-size: 24px;
      }

      .status-icon-wrap.info {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      }

      .status-icon-wrap.info ha-icon {
        color: var(--primary-color);
        --mdc-icon-size: 24px;
      }

      .status-body {
        flex: 1;
        min-width: 0;
      }

      .status-body h4 {
        margin: 0 0 4px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .status-body p {
        margin: 0 0 4px 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .status-body a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
      }

      .status-body a:hover {
        text-decoration: underline;
      }

      .status-note {
        font-size: 12px;
        opacity: 0.7;
        margin-top: 6px;
      }

      /* Pro Banner */
      .pro-banner {
        position: relative;
        padding: 28px;
        border-radius: 16px;
        margin-bottom: 24px;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .pro-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.12;
        background: radial-gradient(circle at 80% 20%, white 0%, transparent 60%);
      }

      .pro-banner.pro {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        box-shadow: 0 8px 24px rgba(245, 87, 108, 0.3);
      }

      .pro-banner.free {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
      }

      .pro-banner.disconnected {
        background: linear-gradient(135deg, #546e7a 0%, #37474f 100%);
        color: white;
        box-shadow: 0 8px 24px rgba(84, 110, 122, 0.25);
      }

      .banner-icon-wrap {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .banner-icon-wrap ha-icon {
        --mdc-icon-size: 30px;
        color: white;
      }

      .banner-content {
        flex: 1;
        position: relative;
        z-index: 1;
      }

      .banner-content h3 {
        margin: 0;
        font-size: 22px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .banner-content h3 ha-icon {
        --mdc-icon-size: 22px;
      }

      .banner-content p {
        margin: 4px 0 0;
        font-size: 14px;
        opacity: 0.9;
      }

      .banner-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.5px;
        position: relative;
        z-index: 1;
      }

      .banner-badge ha-icon {
        --mdc-icon-size: 16px;
      }

      .banner-side {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        z-index: 1;
      }

      .banner-upgrade-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 18px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.96);
        color: #5b46b1;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        white-space: nowrap;
        box-shadow: 0 10px 24px rgba(24, 35, 52, 0.18);
      }

      .banner-upgrade-btn:hover {
        background: white;
        transform: translateY(-1px);
      }

      .banner-upgrade-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      @media (max-width: 720px) {
        .pro-banner {
          flex-direction: column;
          align-items: stretch;
        }

        .banner-side {
          flex-direction: column;
          align-items: stretch;
        }

        .banner-badge,
        .banner-upgrade-btn {
          justify-content: center;
        }
      }

      /* Account card */
      .account-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .account-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.04));
        font-size: 14px;
      }

      .account-row:last-child {
        border-bottom: none;
      }

      .account-label {
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .account-value {
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .tier-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .tier-badge.pro {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
      }

      .tier-badge.free {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--secondary-text-color);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
      }

      .status-dot.active {
        background: #4caf50;
        box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
      }

      .status-dot.inactive {
        background: var(--disabled-text-color, #999);
      }

      /* Pro tools section */
      .tools-section {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 12px;
      }

      @media (max-width: 600px) {
        .tools-grid {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
      }

      .tool-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        padding: 20px 14px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        font: inherit;
        color: inherit;
      }

      .tool-card:hover {
        border-color: var(--primary-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }

      .tool-card:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .tool-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tool-icon ha-icon {
        --mdc-icon-size: 22px;
        color: white;
      }

      .tool-icon.export { background: linear-gradient(135deg, #2196f3, #42a5f5); }
      .tool-icon.import { background: linear-gradient(135deg, #4caf50, #66bb6a); }
      .tool-icon.backup { background: linear-gradient(135deg, #ff9800, #ffb74d); }
      .tool-icon.restore { background: linear-gradient(135deg, #9c27b0, #ba68c8); }
      .tool-icon.history { background: linear-gradient(135deg, #607d8b, #90a4ae); }
      .tool-icon.snapshot { background: linear-gradient(135deg, #e91e63, #f06292); }
      .tool-icon.settings { background: linear-gradient(135deg, #795548, #a1887f); }

      .tool-content h4 {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .tool-content p {
        margin: 2px 0 0;
        font-size: 11px;
        color: var(--secondary-text-color);
        line-height: 1.3;
      }

      /* Snapshot summary below dashboard tools */
      .snapshot-summary {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px 24px;
        margin-top: 16px;
        padding: 14px 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        border-radius: 10px;
        font-size: 13px;
      }

      .snapshot-summary-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .snapshot-summary-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .snapshot-summary-label ha-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
      }

      .snapshot-summary-value {
        color: var(--primary-text-color);
        font-weight: 600;
      }

      .snapshot-summary-latest .snapshot-summary-value {
        font-weight: 500;
        font-size: 12px;
      }

      /* Status info bars */
      .tools-status {
        margin-top: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 500;
      }

      .tools-status.info {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);
        color: var(--primary-color);
      }

      .tools-status.warning {
        background: rgba(255, 152, 0, 0.08);
        color: #f57c00;
      }

      .tools-status.success {
        background: rgba(76, 175, 80, 0.08);
        color: #4caf50;
      }

      .tools-status ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
      }

      /* Upgrade prompt for free users */
      .upgrade-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 2px solid var(--primary-color);
        border-radius: 16px;
        padding: 28px;
        margin-bottom: 24px;
        text-align: center;
      }

      .upgrade-icon {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(240, 147, 251, 0.12), rgba(245, 87, 108, 0.12));
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
      }

      .upgrade-icon ha-icon {
        --mdc-icon-size: 32px;
        color: #f5576c;
      }

      .upgrade-card h3 {
        margin: 0 0 8px 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary-text-color);
      }

      .upgrade-card > p {
        margin: 0 0 20px 0;
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .features-checklist {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        max-width: 380px;
        margin: 0 auto 24px;
      }

      .features-checklist li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: var(--primary-text-color);
        list-style: none;
      }

      .features-checklist li ha-icon {
        --mdc-icon-size: 18px;
        color: #4caf50;
        flex-shrink: 0;
      }

      .upgrade-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 32px;
        border: none;
        border-radius: 12px;
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
      }

      .upgrade-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(245, 87, 108, 0.35);
        filter: brightness(1.05);
      }

      .upgrade-btn ha-icon {
        --mdc-icon-size: 20px;
      }

      /* Not installed CTA */
      .install-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 16px;
        padding: 32px;
        text-align: center;
        margin-bottom: 24px;
      }

      .install-card .cta-icon {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
      }

      .install-card .cta-icon ha-icon {
        --mdc-icon-size: 36px;
        color: var(--primary-color);
      }

      .install-card h3 {
        margin: 0 0 8px 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary-text-color);
      }

      .install-card > p {
        margin: 0 0 8px 0;
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 12px;
        margin: 24px 0;
        text-align: left;
      }

      .benefit-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 12px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
      }

      .benefit-item ha-icon {
        --mdc-icon-size: 20px;
        color: #4caf50;
        margin-top: 1px;
        flex-shrink: 0;
      }

      .benefit-item strong {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 2px;
      }

      .benefit-item span {
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.3;
      }

      .install-steps {
        text-align: left;
        max-width: 420px;
        margin: 0 auto 24px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
      }

      .install-steps h5 {
        margin: 0 0 10px 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .install-steps ol {
        margin: 0;
        padding-left: 20px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.8;
      }

      .install-steps ol strong {
        color: var(--primary-text-color);
      }

      .cta-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
      }

      .cta-btn.primary {
        background: var(--primary-color);
        color: white;
      }

      .cta-btn.primary:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .cta-btn.secondary {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      }

      .cta-btn.secondary:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .cta-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Features grid */
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 280px));
        justify-content: center;
        gap: 14px;
      }

      .feature-card {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 12px;
        transition: all 0.2s ease;
      }

      .feature-card:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      }

      .feature-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .feature-icon ha-icon {
        --mdc-icon-size: 20px;
        color: white;
      }

      .feature-icon.sync { background: linear-gradient(135deg, #2196f3, #42a5f5); }
      .feature-icon.backup { background: linear-gradient(135deg, #ff9800, #ffb74d); }
      .feature-icon.presets { background: linear-gradient(135deg, #e91e63, #f06292); }
      .feature-icon.support { background: linear-gradient(135deg, #4caf50, #66bb6a); }

      .feature-info h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .feature-info p {
        margin: 2px 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      /* Pro settings */
      .pro-setting-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
        transition: all 0.2s ease;
      }

      .pro-setting-item:hover {
        background: var(--divider-color, rgba(0, 0, 0, 0.06));
      }

      .setting-icon-wrap {
        width: 44px;
        height: 44px;
        min-width: 44px;
        background: linear-gradient(135deg, var(--primary-color, #03a9f4), #0288d1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 8px rgba(3, 169, 244, 0.25);
      }

      .setting-icon-wrap ha-icon {
        --mdc-icon-size: 24px;
        color: white;
      }

      .setting-body {
        flex: 1;
        min-width: 0;
      }

      .setting-body h4 {
        margin: 0 0 4px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .setting-body p {
        margin: 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .setting-toggle {
        padding-top: 4px;
      }

      /* Discord support section */
      .discord-card {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px;
        background: linear-gradient(135deg, rgba(88, 101, 242, 0.08), rgba(88, 101, 242, 0.02));
        border: 1px solid rgba(88, 101, 242, 0.2);
        border-radius: 14px;
        transition: all 0.2s ease;
      }

      .discord-card:hover {
        border-color: rgba(88, 101, 242, 0.4);
        box-shadow: 0 4px 16px rgba(88, 101, 242, 0.1);
      }

      .discord-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: #5865F2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(88, 101, 242, 0.3);
      }

      .discord-icon ha-icon {
        --mdc-icon-size: 26px;
        color: white;
      }

      .discord-body {
        flex: 1;
        min-width: 0;
      }

      .discord-body h4 {
        margin: 0 0 4px;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .discord-body p {
        margin: 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .discord-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 20px;
        background: #5865F2;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .discord-btn:hover {
        background: #4752C4;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(88, 101, 242, 0.35);
      }

      .discord-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Snapshot settings inline panel */
      .ss-panel {
        margin-top: 16px;
        padding: 20px;
        background: var(--secondary-background-color, rgba(0,0,0,0.03));
        border-radius: 12px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        animation: fadeSlideIn 0.2s ease-out;
      }

      .ss-panel h4 {
        margin: 0 0 16px 0;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
      }

      .ss-panel h4 ha-icon { --mdc-icon-size: 20px; color: var(--primary-color); }

      .ss-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 14px;
      }

      .ss-row:last-child { margin-bottom: 0; }

      .ss-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        min-width: 80px;
      }

      .ss-input {
        padding: 8px 12px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        border-radius: 8px;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
      }

      .ss-input:focus { border-color: var(--primary-color); }

      select.ss-input {
        cursor: pointer;
        min-width: 160px;
      }

      .ss-actions {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }

      .ss-save-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        border: none;
        border-radius: 8px;
        background: var(--primary-color);
        color: white;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .ss-save-btn:hover:not(:disabled) { filter: brightness(1.1); }
      .ss-save-btn:disabled { opacity: 0.5; cursor: not-allowed; }

      .ss-cancel-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        border-radius: 8px;
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .ss-cancel-btn:hover { border-color: var(--primary-color); color: var(--primary-color); }

      /* Snapshot list panel */
      .snapshots-list {
        margin-top: 16px;
        animation: fadeSlideIn 0.2s ease-out;
      }

      .snapshot-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        background: var(--secondary-background-color, rgba(0,0,0,0.03));
        border-radius: 10px;
        margin-bottom: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.06));
        transition: all 0.2s ease;
      }

      .snapshot-item:hover {
        border-color: var(--primary-color);
      }

      .snapshot-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .snapshot-icon.manual { background: linear-gradient(135deg, #e91e63, #f06292); }
      .snapshot-icon.auto { background: linear-gradient(135deg, #4caf50, #66bb6a); }

      .snapshot-icon ha-icon { --mdc-icon-size: 20px; color: white; }

      .snapshot-info { flex: 1; min-width: 0; }
      .snapshot-info h5 { margin: 0; font-size: 14px; font-weight: 600; color: var(--primary-text-color); }
      .snapshot-info p { margin: 2px 0 0; font-size: 12px; color: var(--secondary-text-color); }

      .snapshot-meta {
        text-align: right;
        font-size: 12px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .snapshot-meta .card-count {
        font-weight: 600;
        color: var(--primary-color);
      }
    `],m([(0,i.MZ)({attribute:!1})],b.prototype,"auth",void 0),m([(0,i.MZ)({attribute:!1})],b.prototype,"hass",void 0),m([(0,i.MZ)({attribute:!1})],b.prototype,"cloudUser",void 0),m([(0,i.wk)()],b.prototype,"_toastMsg",void 0),m([(0,i.wk)()],b.prototype,"_cloudUser",void 0),m([(0,i.wk)()],b.prototype,"_snapshotSettingsOpen",void 0),m([(0,i.wk)()],b.prototype,"_ssEnabled",void 0),m([(0,i.wk)()],b.prototype,"_ssTime",void 0),m([(0,i.wk)()],b.prototype,"_ssTimezone",void 0),m([(0,i.wk)()],b.prototype,"_ssLoading",void 0),m([(0,i.wk)()],b.prototype,"_snapshotsListOpen",void 0),m([(0,i.wk)()],b.prototype,"_snapshotsList",void 0),m([(0,i.wk)()],b.prototype,"_snapshotsLoading",void 0),m([(0,i.wk)()],b.prototype,"_creatingSnapshot",void 0),b=m([(0,i.EM)("hub-pro-tab")],b);var x=function(t,o,a,e){var i,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,a,e);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(s=(r<3?i(s):r>3?i(o,a,s):i(o,a))||s);return r>3&&s&&Object.defineProperty(o,a,s),s};let v=class extends e.WF{constructor(){super(...arguments),this.auth=null,this.cloudUser=null,this._formMode="signin",this._username="",this._password="",this._email="",this._displayName="",this._loading=!1,this._error="",this._autoConfigNote="",this._syncStatus=null,this._syncCounts={colors:0,variables:0,presets:0,favorites:0},this._diagLoading=!1,this._diagError="",this._diagReport=null}connectedCallback(){super.connectedCallback(),this._syncStatus=n.Q.getSyncStatus(),this._refreshCounts(),this._syncListener=t=>{this._syncStatus=t,this._refreshCounts()},n.Q.addListener(this._syncListener)}disconnectedCallback(){super.disconnectedCallback(),this._syncListener&&n.Q.removeListener(this._syncListener)}_refreshCounts(){var t,o,a,e;try{const i=JSON.parse(null!==(t=localStorage.getItem("ultra-card-favorite-colors"))&&void 0!==t?t:"[]"),r=JSON.parse(null!==(o=localStorage.getItem("ultra-card-custom-variables"))&&void 0!==o?o:"[]"),s=JSON.parse(null!==(a=localStorage.getItem("ultra-card-favorites"))&&void 0!==a?a:"[]"),n=JSON.parse(null!==(e=localStorage.getItem("ultra-card-presets"))&&void 0!==e?e:"[]");this._syncCounts={colors:Array.isArray(i)?i.length:0,variables:Array.isArray(r)?r.length:0,favorites:Array.isArray(s)?s.length:0,presets:Array.isArray(n)?n.length:0}}catch(t){this._syncCounts={colors:0,variables:0,presets:0,favorites:0}}}_formatSyncTime(t){if(!t)return"Never";const o=Date.now()-t.getTime();return o<6e4?"Just now":o<36e5?`${Math.floor(o/6e4)}m ago`:o<864e5?`${Math.floor(o/36e5)}h ago`:t.toLocaleDateString()}get _effectiveUser(){return s.x.checkIntegrationAuth(this.hass)||this.cloudUser}_switchFormMode(t){this._formMode=t,this._error="",this._autoConfigNote=""}async _handleSignIn(t){t.preventDefault();const o=this._username.trim();if(o&&this._password){this._loading=!0,this._error="",this._autoConfigNote="";try{await s.x.loginViaHass(this.hass,o,this._password),this._username="",this._password=""}catch(t){this._error=t instanceof Error?t.message:"Login failed"}finally{this._loading=!1}}else this._error="Please enter your email and password"}async _handleRegister(t){if(t.preventDefault(),this._error="",this._autoConfigNote="",this._username.trim()&&this._email.trim()){this._loading=!0;try{const t=await s.x.registerViaHass(this.hass,this._username.trim(),this._email.trim(),this._displayName.trim());this._username="",this._email="",this._displayName="",this._autoConfigNote=t||"Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."}catch(t){this._error=t instanceof Error?t.message:"Registration failed. Please try again."}finally{this._loading=!1}}else this._error="Please fill in all required fields."}async _handleLogout(){await s.x.logoutViaHass(this.hass)}async _runDiagnostics(t){if(this._isHaAdmin()){this._diagLoading=!0,this._diagError="";try{const o=await async function(t,o={}){if(!(null==t?void 0:t.callApi))throw new Error("Home Assistant API unavailable");const a=!1!==o.runConnectivity;try{const o=await t.callApi("POST","ultra_card_pro_cloud/diagnostics",{run_connectivity:a});return Object.assign(Object.assign({},o),{source:"api",ultra_card_version:c.x,connect_info:(0,l.fu)(t)})}catch(o){const a=function(t){var o,a,e,i,r,s,n;const d=(0,l.fu)(t),p=null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[l.$f],h=(null==p?void 0:p.attributes)||{},g="connected"===(null==p?void 0:p.state)&&!0===h.authenticated,u={generated_at:(new Date).toISOString(),source:"client_fallback",ultra_card_version:c.x,capabilities:Object.assign({},d.capabilities||{}),connect_info:d,error:d.outdated?`Ultra Card Connect needs updating (required ${l.TV}+). Sensor handshake and /diagnostics are missing on this install.`:"Diagnostics API unavailable; report built from the auth sensor only.",entries:[{capabilities:Object.assign({},d.capabilities||{}),entry:{domain:"ultra_card_pro_cloud",has_username:Boolean(h.username)},coordinator:{authenticated:g,username:null!==(a=h.username)&&void 0!==a?a:null,email_redacted:"string"==typeof h.email&&h.email.includes("@")?`${String(h.email).slice(0,1)}***@${String(h.email).split("@")[1]}`:"",subscription_tier:null!==(e=h.subscription_tier)&&void 0!==e?e:null,subscription_status:null!==(i=h.subscription_status)&&void 0!==i?i:null,needs_reauth:Boolean(h.needs_reauth),last_poll:null!==(r=h.last_poll)&&void 0!==r?r:null,connected_at:null!==(s=h.connected_at)&&void 0!==s?s:null,token_present:!!g&&null,sensor_state:null!==(n=null==p?void 0:p.state)&&void 0!==n?n:null},connectivity:null}],panel:{manifest_present:!1}};return d.integrationVersion&&(u.integration_version=d.integrationVersion,u.entries[0].integration_version=d.integrationVersion),u}(t),e=function(t){var o,a,e,i,r;const s=t,n=null!==(a=null!==(o=null==s?void 0:s.status)&&void 0!==o?o:null==s?void 0:s.status_code)&&void 0!==a?a:null===(e=null==s?void 0:s.response)||void 0===e?void 0:e.status,c="string"==typeof(null===(i=null==s?void 0:s.body)||void 0===i?void 0:i.error)&&s.body.error||"string"==typeof(null===(r=null==s?void 0:s.body)||void 0===r?void 0:r.message)&&s.body.message||null;return 404===n?`Connect diagnostics API not found (404). Update Ultra Card Connect to ${l.TV}+ and restart Home Assistant.`:403===n?"Only Home Assistant administrators can run Connect diagnostics.":c||("string"==typeof(null==s?void 0:s.message)&&s.message.trim()?s.message:n?`Diagnostics request failed (${n})`:"Failed to load diagnostics")}(o);throw Object.assign(new Error(e),{code:"connect_diagnostics_unavailable",fallback:a,cause:o})}}(this.hass,{runConnectivity:!0});this._diagReport=o,t&&d(o)}catch(o){const a=null==o?void 0:o.fallback;a&&(this._diagReport=a,t&&d(a)),this._diagError=o instanceof Error?o.message:"Failed to load diagnostics"}finally{this._diagLoading=!1}}else this._diagError="Only Home Assistant administrators can run Connect diagnostics."}_renderDiagnostics(){var t,o,a,i,r;const s=(0,l.fu)(this.hass),n=this._effectiveUser,d=(null===(o=null===(t=this._diagReport)||void 0===t?void 0:t.entries)||void 0===o?void 0:o[0])||{},p=d.coordinator||{},h=d.connectivity||{},g="boolean"==typeof p.authenticated?p.authenticated:Boolean(n),u=!0===p.token_present?"Present (server-side)":!1===p.token_present?"Missing":g?"Managed by Connect":"Missing",m=[{label:"Connect version",value:s.integrationVersion||(null===(a=this._diagReport)||void 0===a?void 0:a.integration_version)||(s.installed?"pre-1.6.0 (update required)":"not installed"),ok:s.installed&&!s.outdated},{label:"Card version",value:c.x},{label:"Signed in",value:g?"Yes":"No",ok:g},{label:"Token",value:u,ok:!!g},{label:"Cloud reachability",value:h.api?"OK":(null===(i=h.errors)||void 0===i?void 0:i.length)?"Failed":"api"===(null===(r=this._diagReport)||void 0===r?void 0:r.source)?"Not tested":this._diagReport?"Unavailable (update Connect)":"Run diagnostics",ok:!0===h.api},{label:"Last success",value:"number"==typeof p.last_successful_age_seconds?`${Math.round(p.last_successful_age_seconds)}s ago`:p.last_poll||p.connected_at||"—"}];return e.qy`
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
          ${m.map(t=>e.qy`
              <div
                style="border:1px solid var(--divider-color);border-radius:10px;padding:10px 12px;background:var(--secondary-background-color, transparent);"
              >
                <div style="font-size:11px;color:var(--secondary-text-color);margin-bottom:4px;">
                  ${t.label}
                </div>
                <div style="font-size:13px;font-weight:600;color:${!1===t.ok?"var(--error-color, #f44336)":!0===t.ok?"var(--success-color, #4caf50)":"var(--primary-text-color)"};">
                  ${t.value}
                </div>
              </div>
            `)}
        </div>
        ${this._diagError?e.qy`<div class="error-message" style="margin-bottom:12px;">${this._diagError}</div>`:""}
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
    `}_isHaAdmin(){var t,o;return Boolean(null===(o=null===(t=this.hass)||void 0===t?void 0:t.user)||void 0===o?void 0:o.is_admin)}_renderAdminNotice(){return this._isHaAdmin()?e.s6:e.qy`
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
    `}render(){const t=this._effectiveUser;return t?this._renderAuthenticated(t):s.x.isIntegrationInstalled(this.hass)?this._renderUnauthenticated():this._renderSetupGuide()}_renderSetupGuide(){return e.qy`
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
    `}_renderAuthenticated(t){var o,a,i;const r="pro"===(null===(o=t.subscription)||void 0===o?void 0:o.tier)&&"active"===(null===(a=t.subscription)||void 0===a?void 0:a.status);return e.qy`
      ${this._renderAdminNotice()}
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:account-circle"></ha-icon>
          Account
        </h3>
        <div class="user-info">
          <div class="user-info-row">
            <ha-icon icon="mdi:account"></ha-icon>
            <span>${t.displayName||t.username}</span>
          </div>
          <div class="user-info-row">
            <ha-icon icon="mdi:email-outline"></ha-icon>
            <span>${t.email}</span>
          </div>
          ${null!=(null===(i=this.auth)||void 0===i?void 0:i.subscription_expires)?e.qy`
                <div class="user-info-row">
                  <ha-icon icon="mdi:calendar-refresh"></ha-icon>
                  <span>
                    Renews
                    ${new Date(1e3*this.auth.subscription_expires).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}
                  </span>
                </div>
              `:e.s6}
          <div class="tier-badge ${r?"pro":"free"}">
            ${r?e.qy`<ha-icon icon="mdi:star" style="--mdc-icon-size:14px"></ha-icon>`:""}
            ${r?"Pro":"Free"}
          </div>
        </div>

        ${this._renderSyncStats(r)}

        ${r?e.qy`
              <div class="manage-link">
                <a href="https://ultracard.io/dashboard/" target="_blank" rel="noopener noreferrer">
                  Manage account at ultracard.io
                </a>
              </div>
            `:e.s6}

        <button class="logout-btn" @click=${this._handleLogout}>Sign out</button>
      </div>
      <hub-pro-tab .hass=${this.hass} .auth=${this.auth} .cloudUser=${this.cloudUser}></hub-pro-tab>
      ${this._renderDiagnostics()}
    `}_renderSyncStats(t){var o,a,i,r;const s=this._syncStatus,c=null!==(o=null==s?void 0:s.isSyncing)&&void 0!==o&&o,l=this._formatSyncTime(null!==(a=null==s?void 0:s.lastColorsSync)&&void 0!==a?a:null),d=this._formatSyncTime(null!==(i=null==s?void 0:s.lastVariablesSync)&&void 0!==i?i:null),p=this._formatSyncTime(null!==(r=null==s?void 0:s.lastFavoritesSync)&&void 0!==r?r:null),h=[{icon:"mdi:palette",label:"Colors",count:this._syncCounts.colors,lastSync:l},{icon:"mdi:variable",label:"Variables",count:this._syncCounts.variables,lastSync:d},{icon:"mdi:heart",label:"Favorites",count:this._syncCounts.favorites,lastSync:p},{icon:"mdi:view-dashboard",label:"Presets",count:this._syncCounts.presets,lastSync:"—",proOnly:!1}];return e.qy`
      <div class="sync-stats-section">
        <div class="sync-stats-header">
          <span class="sync-stats-title">
            <ha-icon icon="mdi:cloud-sync"></ha-icon>
            Cloud Sync
          </span>
          <span class="sync-stats-badge ${t?"pro":"free"}">
            ${t?"Pro":"Free"}
          </span>
        </div>

        <div class="sync-stats-grid">
          ${h.map(({icon:t,label:o,count:a,lastSync:i})=>e.qy`
            <div class="sync-stat-card">
              <div class="sync-stat-icon">
                <ha-icon icon=${t}></ha-icon>
              </div>
              <div class="sync-stat-body">
                <div class="sync-stat-count">${a}</div>
                <div class="sync-stat-label">${o}</div>
                ${"—"!==i?e.qy`
                  <div class="sync-stat-time">
                    <ha-icon icon="mdi:clock-outline"></ha-icon>
                    ${i}
                  </div>
                `:""}
              </div>
            </div>
          `)}
        </div>

        <button
          class="sync-now-btn"
          ?disabled=${c}
          @click=${async()=>{await n.Q.syncAll(),this._refreshCounts()}}
        >
          <ha-icon icon="mdi:${c?"loading":"cloud-upload"}" class="${c?"spin":""}"></ha-icon>
          ${c?"Syncing…":"Sync Now"}
        </button>
      </div>
    `}_renderUnauthenticated(){return e.qy`
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
    `}_renderSignInForm(){return e.qy`
      <form class="form-section" @submit=${this._handleSignIn}>
        <div class="form-field">
          <label for="account-signin-username">Username or email</label>
          <input
            id="account-signin-username"
            type="text"
            .value=${this._username}
            @input=${t=>{this._username=t.target.value,this._error=""}}
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
            @input=${t=>{this._password=t.target.value,this._error=""}}
            autocomplete="current-password"
            ?disabled=${this._loading}
          />
        </div>
        <p class="form-note">
          <a href="https://ultracard.io/wp-login.php?action=lostpassword" target="_blank" rel="noopener">
            Forgot password?
          </a>
        </p>
        ${this._error?e.qy`<p class="form-error">${this._error}</p>`:""}
        ${this._autoConfigNote?e.qy`<p class="form-note">${this._autoConfigNote}</p>`:""}
        <button type="submit" class="form-submit" ?disabled=${this._loading}>
          ${this._loading?e.qy`<ha-icon icon="mdi:loading" class="spinning"></ha-icon> Signing in…`:e.qy`<ha-icon icon="mdi:login"></ha-icon> Sign In`}
        </button>
      </form>
    `}_renderRegisterForm(){return e.qy`
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
            @input=${t=>{this._displayName=t.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="name"
          />
        </div>
        <div class="form-field">
          <label for="account-reg-email">Email</label>
          <input
            id="account-reg-email"
            type="email"
            .value=${this._email}
            @input=${t=>{this._email=t.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="email"
          />
        </div>
        <div class="form-field">
          <label for="account-reg-username">Username</label>
          <input
            id="account-reg-username"
            type="text"
            .value=${this._username}
            @input=${t=>{this._username=t.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="username"
          />
        </div>
        ${this._error?e.qy`<p class="form-error">${this._error}</p>`:""}
        ${this._autoConfigNote?e.qy`<p class="form-note">${this._autoConfigNote}</p>`:""}
        <button
          type="submit"
          class="form-submit-btn"
          ?disabled=${this._loading||!this._username.trim()||!this._email.trim()}
        >
          ${this._loading?e.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon> Creating account…`:e.qy`<ha-icon icon="mdi:email-fast"></ha-icon> Create Account`}
        </button>
      </form>
    `}};v.styles=[r.z,e.AH`
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
    `],x([(0,i.MZ)({attribute:!1})],v.prototype,"hass",void 0),x([(0,i.MZ)({attribute:!1})],v.prototype,"auth",void 0),x([(0,i.MZ)({attribute:!1})],v.prototype,"cloudUser",void 0),x([(0,i.wk)()],v.prototype,"_formMode",void 0),x([(0,i.wk)()],v.prototype,"_username",void 0),x([(0,i.wk)()],v.prototype,"_password",void 0),x([(0,i.wk)()],v.prototype,"_email",void 0),x([(0,i.wk)()],v.prototype,"_displayName",void 0),x([(0,i.wk)()],v.prototype,"_loading",void 0),x([(0,i.wk)()],v.prototype,"_error",void 0),x([(0,i.wk)()],v.prototype,"_autoConfigNote",void 0),x([(0,i.wk)()],v.prototype,"_syncStatus",void 0),x([(0,i.wk)()],v.prototype,"_syncCounts",void 0),x([(0,i.wk)()],v.prototype,"_diagLoading",void 0),x([(0,i.wk)()],v.prototype,"_diagError",void 0),x([(0,i.wk)()],v.prototype,"_diagReport",void 0),v=x([(0,i.EM)("hub-account-tab")],v)},9286(t,o,a){function e(t){try{return localStorage.getItem(t)}catch(t){return null}}function i(t,o){try{return localStorage.setItem(t,o),!0}catch(t){return!1}}function r(t){try{localStorage.removeItem(t)}catch(t){}}a.d(o,{FX:()=>i,Pw:()=>r,bi:()=>e})}}]);
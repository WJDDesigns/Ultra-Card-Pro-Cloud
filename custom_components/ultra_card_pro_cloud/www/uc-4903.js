"use strict";(self.webpackChunkultra_card=self.webpackChunkultra_card||[]).push([[4903],{4903(t,o,e){e.r(o),e.d(o,{HubDocsTab:()=>u});var r=e(5183),i=e(4276),a=e(1338),s=e(23),n=e(9978),c=e(1172),d=function(t,o,e,r){var i,a=arguments.length,s=a<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,r);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(s=(a<3?i(s):a>3?i(o,e,s):i(o,e))||s);return a>3&&s&&Object.defineProperty(o,e,s),s};const l="/ultra_card_pro_cloud_panel/docs",p="https://github.com/WJDDesigns/Ultra-Card/wiki",h="ultra_card_hub_docs_slug";s.xI.setOptions({gfm:!0,breaks:!0});let u=class extends r.WF{constructor(){super(...arguments),this.initialSlug="",this._index=null,this._searchIndex=[],this._selectedSlug="home",this._pageHtml="",this._pageToc=[],this._loading=!0,this._error=null,this._search="",this._openSections=new Set,this._keydownHandler=t=>{var o,e,r,i;if("/"!==t.key)return;const a=null===(e=null===(o=t.target)||void 0===o?void 0:o.tagName)||void 0===e?void 0:e.toLowerCase();if("input"===a||"textarea"===a||(null===(r=t.target)||void 0===r?void 0:r.isContentEditable))return;t.preventDefault();const s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(".docs-search");null==s||s.focus()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._keydownHandler);const t=localStorage.getItem(h);this.initialSlug?this._selectedSlug=this.initialSlug:t&&(this._selectedSlug=t),this.reload()}updated(t){t.has("initialSlug")&&this.initialSlug&&this.openSlug(this.initialSlug)}disconnectedCallback(){document.removeEventListener("keydown",this._keydownHandler),super.disconnectedCallback()}reload(){this._loadIndex(!0)}_docsBundleStale(){var t,o;const e=null===(t=this._index)||void 0===t?void 0:t.synced_at,r=null===(o=this._index)||void 0===o?void 0:o.wiki_last_commit_at;if(!e||!r)return!1;const i=new Date(e).getTime(),a=new Date(r).getTime();return!Number.isNaN(i)&&!Number.isNaN(a)&&a>i+6e4}async openSlug(t){this._index?await this._loadPage(t):this._selectedSlug=t}_cacheBust(){return`t=${Date.now()}`}async _loadIndex(t=!1){var o,e,r,i;this._loading=!0,this._error=null;try{const a=t?this._cacheBust():"v=1",[s,n]=await Promise.all([fetch(`${l}/index.json?${a}`),fetch(`${l}/search-index.json?${a}`)]);if(!s.ok)throw new Error(`Documentation index not found (${s.status})`);const c=await s.json();this._index=c,n.ok&&(this._searchIndex=await n.json()),this._initOpenSections(c.sections);const d=this.initialSlug||(c.pages.some(t=>t.slug===this._selectedSlug)?this._selectedSlug:null!==(i=null!==(e=null===(o=c.pages.find(t=>"home"===t.slug))||void 0===o?void 0:o.slug)&&void 0!==e?e:null===(r=c.pages[0])||void 0===r?void 0:r.slug)&&void 0!==i?i:"home");await this._loadPage(d)}catch(t){this._error=t instanceof Error?t.message:String(t),this._loading=!1}}_initOpenSections(t){const o=new Set;null==t||t.forEach((t,e)=>{e<3&&o.add(t.title)}),this._openSections=o}_pageBySlug(t){var o;return null===(o=this._index)||void 0===o?void 0:o.pages.find(o=>o.slug===t)}_titleForSlug(t){var o,e;return null!==(e=null===(o=this._pageBySlug(t))||void 0===o?void 0:o.title)&&void 0!==e?e:t}async _loadPage(t){const o=this._pageBySlug(t);if(!o)return this._pageHtml="",this._pageToc=[],void(this._loading=!1);this._loading=!0,this._selectedSlug=t,localStorage.setItem(h,t);try{const t=await fetch(`${l}/${o.file}?${this._cacheBust()}`);if(!t.ok)throw new Error(`Failed to load ${o.title}`);const e=await t.text(),r=s.xI.parse(e),i=(new DOMParser).parseFromString(r,"text/html");this._pageToc=this._buildTocFromDoc(i);const a=i.body.innerHTML;this._pageHtml=(0,c.ex)(a,!0),this._error=null}catch(t){this._error=t instanceof Error?t.message:String(t),this._pageHtml="",this._pageToc=[]}finally{this._loading=!1}}_buildTocFromDoc(t){const o=[];return t.querySelectorAll("h2, h3").forEach((t,e)=>{var r;const i=(null===(r=t.textContent)||void 0===r?void 0:r.trim())||"";if(!i)return;const a=`uc-toc-${e}`;t.id=a,o.push({id:a,text:i,level:"H2"===t.tagName?2:3})}),o}_onContentClick(t){const o=t.target.closest("a");if(!o)return;const e=(o.getAttribute("href")||"").match(/^#uc-doc-(.+)$/);e&&(t.preventDefault(),this._loadPage(e[1]))}_scrollToToc(t){var o;const e=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(".docs-content"),r=null==e?void 0:e.querySelector(`#${t}`);null==r||r.scrollIntoView({behavior:"smooth",block:"start"})}_searchResults(){const t=this._search.trim().toLowerCase();return!t||t.length<2?[]:this._searchIndex.filter(o=>`${o.title} ${o.excerpt} ${o.headings.join(" ")}`.toLowerCase().includes(t)).slice(0,12)}_toggleSection(t,o){const e=new Set(this._openSections);o?e.add(t):e.delete(t),this._openSections=e}_renderNavSections(){var t,o,e;const i=null===(t=this._index)||void 0===t?void 0:t.sections;return(null==i?void 0:i.length)?i.map(t=>{var o;return r.qy`
        <details
          class="docs-section"
          ?open=${this._openSections.has(t.title)}
          @toggle=${o=>{const e=o.target;this._toggleSection(t.title,e.open)}}
        >
          <summary>${t.title}</summary>
          <div class="docs-nav">
            ${t.slugs.map(t=>this._renderNavButton(t))}
            ${null===(o=t.subsections)||void 0===o?void 0:o.map(t=>r.qy`
                <p class="docs-subsection-label">${t.title}</p>
                ${t.slugs.map(t=>this._renderNavButton(t))}
              `)}
          </div>
        </details>
      `}):(null!==(e=null===(o=this._index)||void 0===o?void 0:o.pages)&&void 0!==e?e:[]).map(t=>this._renderNavButton(t.slug))}_renderNavButton(t){return r.qy`
      <button
        class=${this._selectedSlug===t?"active":""}
        @click=${()=>{this._loadPage(t)}}
      >
        ${this._titleForSlug(t)}
      </button>
    `}_formatSyncedAt(t){if(!t)return"unknown";try{return new Date(t).toLocaleString()}catch(o){return null!=t?t:"unknown"}}render(){var t,o,e,i;if(this._error&&!this._index)return r.qy`
        <div class="docs-error">
          <p>${this._error}</p>
          <p><a href=${p} target="_blank" rel="noopener">View docs on GitHub Wiki</a></p>
        </div>
      `;const s=this._searchResults(),n=this._search.trim().length>=2;return r.qy`
      <div class="docs-toolbar">
        <button ?disabled=${this._loading} @click=${()=>this.reload()}>
          <ha-icon icon="mdi:refresh"></ha-icon>
          Refresh
        </button>
      </div>

      ${this._docsBundleStale()?r.qy`
            <div class="docs-stale-banner" role="status">
              The GitHub wiki has newer edits than this bundled copy (wiki
              ${this._formatSyncedAt(null===(t=this._index)||void 0===t?void 0:t.wiki_last_commit_at)}, bundle
              ${this._formatSyncedAt(null===(o=this._index)||void 0===o?void 0:o.synced_at)}). Content is still usable; a
              future Connect release will refresh the bundle.
            </div>
          `:r.s6}

      <div class="docs-layout">
        <aside class="docs-sidebar">
          <h2>Documentation</h2>
          <div class="docs-search-hint">Press <kbd>/</kbd> to focus search</div>
          <input
            class="docs-search"
            type="search"
            placeholder="Search docs…"
            .value=${this._search}
            @input=${t=>{this._search=t.target.value}}
          />
          ${n?r.qy`
                ${s.map(t=>r.qy`
                    <div
                      class="search-hit"
                      @click=${()=>{this._search="",this._loadPage(t.slug)}}
                    >
                      <div class="search-hit-title">${t.title}</div>
                      <div class="search-hit-excerpt">${t.excerpt}</div>
                    </div>
                  `)}
                ${0===s.length?r.qy`<div class="docs-empty">No matches</div>`:r.s6}
              `:r.qy`<nav aria-label="Documentation pages">${this._renderNavSections()}</nav>`}
          <div class="docs-meta">
            Synced from
            <a href=${p} target="_blank" rel="noopener">Ultra Card Wiki</a><br />
            Last sync: ${this._formatSyncedAt(null===(e=this._index)||void 0===e?void 0:e.synced_at)}
            ${(null===(i=this._index)||void 0===i?void 0:i.wiki_last_commit_at)?r.qy` · Wiki commit: ${this._formatSyncedAt(this._index.wiki_last_commit_at)}`:r.s6}<br />
            <a href=${p} target="_blank" rel="noopener">Edit on GitHub</a>
          </div>
        </aside>

        <div class="docs-main">
          ${this._pageToc.length>0?r.qy`
                <div class="docs-toc">
                  ${this._pageToc.map(t=>r.qy`
                      <button @click=${()=>this._scrollToToc(t.id)}>
                        ${t.text}
                      </button>
                    `)}
                </div>
              `:r.s6}
          <article class="docs-content" aria-live="polite" @click=${this._onContentClick}>
            ${this._loading?r.qy`<div class="docs-empty">Loading…</div>`:this._error?r.qy`<div class="docs-error">${this._error}</div>`:r.qy`<div class="docs-markdown">${(0,a._)(this._pageHtml)}</div>`}
          </article>
        </div>
      </div>
    `}};u.styles=[n.z,r.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      .docs-layout {
        display: grid;
        grid-template-columns: minmax(220px, 300px) 1fr;
        gap: 20px;
        min-height: 420px;
      }

      @media (max-width: 900px) {
        .docs-layout {
          grid-template-columns: 1fr;
        }
      }

      .docs-sidebar {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 16px;
        max-height: 70vh;
        overflow: auto;
      }

      .docs-sidebar h2 {
        margin: 0 0 12px;
        font-size: 16px;
        font-weight: 700;
      }

      .docs-search {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 12px;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 13px;
      }

      .docs-section {
        margin-bottom: 8px;
      }

      .docs-section summary {
        cursor: pointer;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--secondary-text-color);
        padding: 6px 4px;
        list-style: none;
      }

      .docs-section summary::-webkit-details-marker {
        display: none;
      }

      .docs-section[open] summary {
        color: var(--primary-color);
      }

      .docs-subsection-label {
        font-size: 11px;
        font-weight: 600;
        color: var(--secondary-text-color);
        padding: 8px 10px 4px;
        margin: 0;
      }

      .docs-nav button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 7px 10px;
        margin-bottom: 2px;
        border: none;
        border-radius: 8px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 13px;
        cursor: pointer;
      }

      .docs-nav button:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .docs-nav button.active {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
        color: var(--primary-color);
        font-weight: 600;
      }

      .search-hit {
        padding: 8px 10px;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 4px;
      }

      .search-hit:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .search-hit-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .search-hit-excerpt {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        line-height: 1.4;
      }

      .docs-meta {
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        font-size: 11px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .docs-meta a {
        color: var(--primary-color);
      }

      .docs-main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 0;
      }

      .docs-toc {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 0 4px;
      }

      .docs-toc button {
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 16px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--secondary-text-color);
        cursor: pointer;
      }

      .docs-toc button:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .docs-content {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px 28px;
        max-height: 70vh;
        overflow: auto;
      }

      .docs-content :is(h1, h2, h3, h4) {
        color: var(--primary-text-color);
        margin-top: 1.2em;
        margin-bottom: 0.5em;
        scroll-margin-top: 12px;
      }

      .docs-content h1:first-child {
        margin-top: 0;
      }

      .docs-content p,
      .docs-content li {
        color: var(--primary-text-color);
        line-height: 1.65;
        font-size: 14px;
      }

      .docs-content a {
        color: var(--primary-color);
        cursor: pointer;
      }

      .docs-content pre {
        background: var(--code-editor-background-color, rgba(0, 0, 0, 0.06));
        padding: 12px;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 13px;
      }

      .docs-toolbar {
        display: flex;
        justify-content: flex-end;
      }

      .docs-toolbar button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border-radius: 20px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 12px;
      }

      .docs-empty,
      .docs-error {
        padding: 32px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .docs-error {
        color: var(--error-color, #f44336);
      }

      .docs-stale-banner {
        margin-bottom: 12px;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 13px;
        line-height: 1.45;
        background: rgba(255, 152, 0, 0.1);
        border: 1px solid rgba(255, 152, 0, 0.25);
        color: var(--primary-text-color);
      }

      .docs-search-hint {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin: 4px 0 8px;
      }
    `],d([(0,i.MZ)({type:String})],u.prototype,"initialSlug",void 0),d([(0,i.wk)()],u.prototype,"_index",void 0),d([(0,i.wk)()],u.prototype,"_searchIndex",void 0),d([(0,i.wk)()],u.prototype,"_selectedSlug",void 0),d([(0,i.wk)()],u.prototype,"_pageHtml",void 0),d([(0,i.wk)()],u.prototype,"_pageToc",void 0),d([(0,i.wk)()],u.prototype,"_loading",void 0),d([(0,i.wk)()],u.prototype,"_error",void 0),d([(0,i.wk)()],u.prototype,"_search",void 0),d([(0,i.wk)()],u.prototype,"_openSections",void 0),u=d([(0,i.EM)("hub-docs-tab")],u)},1172(t,o,e){e.d(o,{Qx:()=>s,ex:()=>a});var r=e(9418);const i=["script","iframe","object","embed","form","input","button","textarea","select","option"];function a(t,o){return r.A.sanitize(t,{USE_PROFILES:{html:!0},FORBID_TAGS:o?i:[...i,"style"],FORCE_BODY:o})}function s(t){return r.A.sanitize(t,{USE_PROFILES:{html:!0},FORBID_TAGS:[...i,"style"]})}}}]);
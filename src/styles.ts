import { css } from 'lit';

export const cardStyles = css`
  /* ── Reset ────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; }

  :host {
    display: block;
    --mt-radius: var(--ha-card-border-radius, 16px);
    --mt-spacing: 14px;
    --mt-tr: 200ms ease;
    --mt-heat: #ff6b35;
    --mt-cool: #4fc3f7;
    --mt-auto: #a78bfa;
    --mt-fan:  #81c784;
    --mt-dry:  #ffd54f;
    --mt-off:  #6b7280;
    --mt-warn: #f44336;
  }

  /* ── Card shell ───────────────────────────────────────── */
  /*
   * KEY LAYOUT PRINCIPLE:
   * - ha-card uses flex-column so elements stack naturally
   * - height is ALWAYS auto (content-driven, never fixed)
   * - NO min-height, NO margin-top:auto on status bar
   * - Status bar sits directly below buttons, no gap
   * - When show_graph=true, card loses bottom radius/border
   *   so it merges seamlessly with the graph wrapper below
   */
  ha-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--mt-radius);
    background: var(--ha-card-background, var(--card-background-color, #1c2128));
    border: 1px solid var(--divider-color, rgba(255,255,255,0.10));
    transition: background var(--mt-tr), border-color var(--mt-tr), box-shadow var(--mt-tr);
    padding: 0;
    min-width: 260px;
    /* Flex column: elements stack, height = content height */
    display: flex;
    flex-direction: column;
    /* CRITICAL: height must be auto, never fixed */
    height: auto;
  }

  /* ── Action-based card colours ────────────────────────── */
  ha-card.action-heating {
    background: rgba(255,107,53,0.07);
    border-color: rgba(255,107,53,0.32);
    box-shadow: 0 0 28px rgba(255,107,53,0.09);
  }
  ha-card.action-cooling {
    background: rgba(79,195,247,0.07);
    border-color: rgba(79,195,247,0.32);
    box-shadow: 0 0 28px rgba(79,195,247,0.09);
  }
  ha-card.action-drying  { background: rgba(255,213,79,0.06);  border-color: rgba(255,213,79,0.28); }
  ha-card.action-fan     { background: rgba(129,199,132,0.06); border-color: rgba(129,199,132,0.28); }
  ha-card.mode-off       { opacity: 0.82; }

  /* ── Seamless graph integration ───────────────────────── */
  /*
   * When graph is active, the card's bottom edge merges with
   * the graph wrapper: no bottom radius, transparent bottom border.
   * The graph wrapper provides the bottom radius and border.
   */
  ha-card.has-graph {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
    box-shadow: none; /* shadow handled by outer wrapper */
  }

  /* ── Header ───────────────────────────────────────────── */
  .mt-header {
    display: flex;
    align-items: flex-start;
    padding: var(--mt-spacing) var(--mt-spacing) 0;
    gap: 10px;
    /* flex-shrink:0 prevents header from collapsing */
    flex-shrink: 0;
  }

  .mt-header-icon {
    width: 38px; height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background var(--mt-tr);
  }
  .mt-header-icon ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    transition: color var(--mt-tr);
  }

  ha-card.action-heating .mt-header-icon { background: rgba(255,107,53,0.18); }
  ha-card.action-heating .mt-header-icon ha-icon { color: var(--mt-heat); }
  ha-card.action-cooling .mt-header-icon { background: rgba(79,195,247,0.18); }
  ha-card.action-cooling .mt-header-icon ha-icon { color: var(--mt-cool); }

  .mt-header-text { flex: 1; min-width: 0; }

  .mt-name {
    font-size: 14px; font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    letter-spacing: 0.2px;
  }

  

  /* ── Central temperature (IST, no label) ─────────────── */
  .mt-temp-center {
    display: flex;
    align-items: baseline;
    justify-content: center;
    /* Compact vertical padding – no wasted space */
    padding: 10px var(--mt-spacing) 4px;
    flex-shrink: 0;
  }

  .mt-ist {
    font-size: 62px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -3px;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr), opacity var(--mt-tr);
  }
  ha-card.action-heating .mt-ist { color: var(--mt-heat); }
  ha-card.action-cooling .mt-ist { color: var(--mt-cool); }
  ha-card.mode-off .mt-ist { opacity: 0.35; color: var(--secondary-text-color) !important; }

  .mt-ist-unit {
    font-size: 22px; font-weight: 400;
    opacity: 0.60; letter-spacing: 0;
    align-self: flex-start; margin-top: 10px; margin-left: 3px;
  }

  /* ── Setpoint row (collapsed state) ──────────────────── */
  .mt-soll-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    /* Minimal padding – no wasted vertical space */
    padding: 0 var(--mt-spacing) 4px;
    font-size: 13px;
    color: var(--secondary-text-color);
    font-weight: 500;
    flex-shrink: 0;
  }
  .mt-soll-row ha-icon { --mdc-icon-size: 14px; opacity: 0.7; }
  .mt-soll-val {
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
    font-weight: 600;
  }
  ha-card.mode-off .mt-soll-val { opacity: 0.38; }

  /* ── Shared panel slot (temp OR hvac) ─────────────────── */
  /*
   * max-height:0 when closed → takes NO space at all
   * max-height:160px when open → animates smoothly
   * This is the key to dynamic height: closed panels = zero height
   */
  .mt-panel-slot {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    flex-shrink: 0;
    transition:
      max-height 300ms cubic-bezier(0.4,0,0.2,1),
      opacity 220ms ease;
  }
  .mt-panel-slot.open {
    max-height: 160px;
    opacity: 1;
  }

  /* ── Temperature control (inside panel slot) ──────────── */
  .mt-temp-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px var(--mt-spacing) 10px;
  }

  .mt-adj-btn {
    width: 48px; height: 48px;
    border-radius: 50%; border: none;
    background: rgba(255,255,255,0.08);
    color: var(--primary-text-color);
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background var(--mt-tr), transform 80ms ease;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    flex-shrink: 0;
  }
  .mt-adj-btn ha-icon { --mdc-icon-size: 26px; pointer-events: none; }
  .mt-adj-btn:hover { background: rgba(255,255,255,0.14); }
  .mt-adj-btn:active { transform: scale(0.90); }
  .mt-adj-btn:disabled { opacity: 0.22; cursor: not-allowed; transform: none; }

  .mt-soll-display {
    display: flex; flex-direction: column; align-items: center;
    min-width: 96px; gap: 1px;
  }
  .mt-soll-big {
    font-size: 44px; font-weight: 300; line-height: 1;
    letter-spacing: -2px; color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    transition: color var(--mt-tr);
  }
  ha-card.action-heating .mt-soll-big { color: var(--mt-heat); }
  ha-card.action-cooling .mt-soll-big { color: var(--mt-cool); }
  .mt-soll-big-unit { font-size: 18px; font-weight: 400; opacity: 0.60; letter-spacing: 0; }
  .mt-soll-sub {
    font-size: 10px; color: var(--secondary-text-color);
    text-transform: uppercase; letter-spacing: 0.9px; font-weight: 500;
  }

  /* ── HVAC mode pills (inside panel slot) ──────────────── */
  .mt-modes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px var(--mt-spacing) 10px;
    flex-wrap: wrap;
  }

  .mt-mode-pill {
    display: flex; align-items: center; gap: 5px;
    padding: 6px 14px; border-radius: 999px;
    border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
    background: transparent; color: var(--secondary-text-color);
    font-size: 12px; font-weight: 500; cursor: pointer;
    transition: all 150ms ease; font-family: inherit;
    white-space: nowrap; letter-spacing: 0.3px;
    -webkit-tap-highlight-color: transparent;
  }
  .mt-mode-pill ha-icon { --mdc-icon-size: 14px; pointer-events: none; }
  .mt-mode-pill:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.20); }
  .mt-mode-pill:active { transform: scale(0.95); }

  .mt-mode-pill.active[data-mode="off"]       { background: rgba(107,114,128,0.15); color: #9ca3af;        border-color: rgba(107,114,128,0.40); }
  .mt-mode-pill.active[data-mode="heat"]      { background: rgba(255,107,53,0.15);  color: var(--mt-heat); border-color: rgba(255,107,53,0.40); }
  .mt-mode-pill.active[data-mode="cool"]      { background: rgba(79,195,247,0.15);  color: var(--mt-cool); border-color: rgba(79,195,247,0.40); }
  .mt-mode-pill.active[data-mode="auto"]      { background: rgba(167,139,250,0.15); color: var(--mt-auto); border-color: rgba(167,139,250,0.40); }
  .mt-mode-pill.active[data-mode="heat_cool"] { background: rgba(245,158,11,0.15);  color: #f59e0b;        border-color: rgba(245,158,11,0.40); }
  .mt-mode-pill.active[data-mode="fan_only"]  { background: rgba(129,199,132,0.15); color: var(--mt-fan);  border-color: rgba(129,199,132,0.40); }
  .mt-mode-pill.active[data-mode="dry"]       { background: rgba(255,213,79,0.15);  color: var(--mt-dry);  border-color: rgba(255,213,79,0.40); }

  /* ── Dual setpoint ────────────────────────────────────── */
  .mt-dual {
    display: flex; align-items: center; justify-content: center;
    gap: 8px; padding: 8px var(--mt-spacing) 10px;
  }
  .mt-dual-group { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
  .mt-dual-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; }
  .mt-dual-ctrl { display: flex; align-items: center; gap: 5px; }
  .mt-dual-val { font-size: 30px; font-weight: 300; min-width: 64px; text-align: center; font-variant-numeric: tabular-nums; }
  .mt-dual-btn {
    width: 34px; height: 34px; border-radius: 50%; border: none;
    background: rgba(255,255,255,0.07); color: var(--primary-text-color);
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background var(--mt-tr), transform 80ms ease;
    -webkit-tap-highlight-color: transparent;
  }
  .mt-dual-btn ha-icon { --mdc-icon-size: 18px; pointer-events: none; }
  .mt-dual-btn:active { transform: scale(0.9); }
  .mt-dual-divider { width: 1px; height: 56px; background: var(--divider-color, rgba(255,255,255,0.10)); flex-shrink: 0; }

  /* ── Main button row ──────────────────────────────────── */
  .mt-btn-row {
    display: flex;
    gap: 8px;
    /* Compact padding – buttons sit close to content above */
    padding: 6px var(--mt-spacing) 8px;
    flex-shrink: 0;
  }

  .mt-main-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 12px;
    border-radius: 999px;
    border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
    background: rgba(255,255,255,0.05);
    color: var(--secondary-text-color);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: background var(--mt-tr), border-color var(--mt-tr), color var(--mt-tr), transform 80ms ease;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    white-space: nowrap;
    font-family: inherit;
    letter-spacing: 0.3px;
    min-width: 0;
  }
  .mt-main-btn ha-icon { --mdc-icon-size: 15px; pointer-events: none; flex-shrink: 0; }
  .mt-main-btn:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.22); color: var(--primary-text-color); }
  .mt-main-btn:active { transform: scale(0.96); }

  .mt-main-btn.active-heat { background: rgba(255,107,53,0.15); border-color: rgba(255,107,53,0.40); color: var(--mt-heat); }
  .mt-main-btn.active-cool { background: rgba(79,195,247,0.15); border-color: rgba(79,195,247,0.40); color: var(--mt-cool); }
  .mt-main-btn.active-auto { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.40); color: var(--mt-auto); }
  .mt-main-btn.active-fan  { background: rgba(129,199,132,0.15); border-color: rgba(129,199,132,0.40); color: var(--mt-fan); }
  .mt-main-btn.active-dry  { background: rgba(255,213,79,0.15);  border-color: rgba(255,213,79,0.40);  color: var(--mt-dry); }
  .mt-main-btn.active-off  { background: rgba(107,114,128,0.12); border-color: rgba(107,114,128,0.35); color: #9ca3af; }
  .mt-main-btn.active-temp { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.28); color: var(--primary-text-color); }

  .mt-btn-chevron {
    --mdc-icon-size: 13px !important;
    transition: transform 220ms ease;
    flex-shrink: 0;
  }
  .mt-main-btn.open .mt-btn-chevron { transform: rotate(180deg); }

  /* ── Status bar ───────────────────────────────────────── */
  /*
   * CRITICAL: NO margin-top:auto here.
   * margin-top:auto only works when the parent has a fixed height.
   * Since ha-card height is auto (content-driven), margin-top:auto
   * would have no effect and could cause layout issues.
   * The status bar sits directly below the button row naturally.
   */
  .mt-status-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 1px solid var(--divider-color, rgba(255,255,255,0.08));
    /* Compact padding – tight against buttons above */
    padding: 7px var(--mt-spacing);
    gap: 0;
    flex-shrink: 0;
  }

  .mt-stat {
    display: flex; align-items: center; gap: 5px;
    padding: 3px 10px;
    font-size: 12px; font-weight: 500;
    color: var(--secondary-text-color);
    position: relative; white-space: nowrap;
  }
  .mt-stat + .mt-stat::before {
    content: '';
    position: absolute; left: 0; top: 50%;
    transform: translateY(-50%);
    width: 1px; height: 12px;
    background: var(--divider-color, rgba(255,255,255,0.10));
  }
  .mt-stat ha-icon { --mdc-icon-size: 14px; opacity: 0.75; }
  .mt-stat-val { font-variant-numeric: tabular-nums; color: var(--primary-text-color); font-weight: 600; }

  /* ── Graph wrapper – seamless unified card ────────────── */
  /*
   * The graph wrapper is the BOTTOM half of the unified card.
   * It has:
   *   - same background as ha-card
   *   - same border (left, right, bottom) as ha-card
   *   - NO top border (card's bottom border is transparent)
   *   - bottom radius only (top radius = 0)
   *   - a thin separator line between card and graph
   *
   * Together with ha-card.has-graph (no bottom radius, transparent
   * bottom border), they form one seamless visual element.
   */
  .mt-graph-wrapper {
    background: var(--ha-card-background, var(--card-background-color, #1c2128));
    border: 1px solid var(--divider-color, rgba(255,255,255,0.10));
    border-top: none;
    border-bottom-left-radius: var(--mt-radius);
    border-bottom-right-radius: var(--mt-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow: hidden;
    transition: border-color var(--mt-tr), background var(--mt-tr);
  }

  /* Inherit action border colour for seamless look */
  .mt-graph-wrapper.action-heating {
    border-color: rgba(255,107,53,0.32);
    background: rgba(255,107,53,0.07);
  }
  .mt-graph-wrapper.action-cooling {
    border-color: rgba(79,195,247,0.32);
    background: rgba(79,195,247,0.07);
  }

  /* mt-graph-separator removed – no divider line between card and graph */

  
  .mt-error {
    padding: 16px; color: var(--error-color, #f44336);
    font-size: 14px; display: flex; align-items: center; gap: 8px;
  }
  .mt-unavailable {
    padding: 20px; color: var(--secondary-text-color);
    font-size: 14px; text-align: center; opacity: 0.6;
  }

  /* ── Focus ────────────────────────────────────────────── */
  .mt-adj-btn:focus-visible,
  .mt-main-btn:focus-visible,
  .mt-mode-pill:focus-visible,
  .mt-dual-btn:focus-visible {
    outline: 2px solid var(--primary-color, #ff6b35);
    outline-offset: 2px;
  }

  /* ── Compact mode ─────────────────────────────────────── */
  ha-card.compact { --mt-spacing: 10px; }
  ha-card.compact .mt-ist { font-size: 46px; }
  ha-card.compact .mt-ist-unit { font-size: 17px; margin-top: 7px; }
  ha-card.compact .mt-adj-btn { width: 40px; height: 40px; }
  ha-card.compact .mt-adj-btn ha-icon { --mdc-icon-size: 22px; }
  ha-card.compact .mt-soll-big { font-size: 36px; }
  ha-card.compact .mt-main-btn { padding: 7px 10px; font-size: 11px; }
  ha-card.compact .mt-stat { font-size: 11px; padding: 2px 8px; }
  ha-card.compact .mt-header-icon { width: 32px; height: 32px; }
  ha-card.compact .mt-header-icon ha-icon { --mdc-icon-size: 17px; }
  ha-card.compact .mt-name { font-size: 13px; }
  ha-card.compact .mt-temp-center { padding: 8px var(--mt-spacing) 3px; }
  ha-card.compact .mt-btn-row { padding: 4px var(--mt-spacing) 6px; }
  ha-card.compact .mt-status-bar { padding: 5px var(--mt-spacing); }

  /* ── Responsive ───────────────────────────────────────── */
  @media (max-width: 320px) {
    .mt-ist { font-size: 50px; }
    .mt-main-btn { font-size: 11px; padding: 7px 8px; }
    .mt-stat { font-size: 11px; padding: 2px 6px; }
  }
`;
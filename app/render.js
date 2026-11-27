// Renders the deal list and the single-deal detail view into the page.
// Everything it writes comes from the deal objects in deals.js; it never
// fetches anything, so the page works with no network at all.
import { CHECKED_AT, VERDICTS } from './deals.js';
import { percentOff, savingOf } from './filters.js';

export function money(amount) {
  return `$${amount.toFixed(2).replace(/\.00$/, '')}`;
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function dealCard(deal) {
  const verdict = VERDICTS[deal.verdict];
  return `
  <article class="card" data-id="${deal.id}">
    <div class="card-top">
      <span class="badge verdict-${deal.verdict}">${verdict.label}</span>
      <span class="badge discount">−${percentOff(deal)}%</span>
    </div>
    <h3 class="card-name"><a href="#/deal/${deal.id}">${escapeHtml(deal.name)}</a></h3>
    <p class="card-meta">${escapeHtml(deal.store)} · ${escapeHtml(deal.category)}</p>
    <p class="card-price">
      <span class="sale">${money(deal.sale)}</span>
      <span class="was">${money(deal.was)}</span>
    </p>
    <p class="card-save">Save ${money(savingOf(deal))} (${percentOff(deal)}% off)</p>
    <p class="card-evidence">${escapeHtml(deal.evidence)}</p>
    <div class="card-foot">
      <a class="store-link" href="${deal.storeUrl}" target="_blank" rel="noopener">View at ${escapeHtml(deal.store)} →</a>
      <span class="checked">Checked ${CHECKED_AT}</span>
    </div>
  </article>`;
}

export function renderGrid(list, host) {
  if (list.length === 0) {
    host.innerHTML =
      '<p class="empty">No deals match those filters. Try clearing the search or lowering the discount.</p>';
    return;
  }
  host.innerHTML = list.map(dealCard).join('');
}

export function dealDetail(deal) {
  const verdict = VERDICTS[deal.verdict];
  return `
  <article class="detail">
    <p class="detail-back"><a href="#/">← All deals</a></p>
    <div class="card-top">
      <span class="badge verdict-${deal.verdict}">${verdict.label}</span>
      <span class="badge discount">−${percentOff(deal)}%</span>
    </div>
    <h2>${escapeHtml(deal.name)}</h2>
    <p class="card-meta">${escapeHtml(deal.store)} · ${escapeHtml(deal.category)}</p>
    <p class="detail-price">
      <span class="sale">${money(deal.sale)}</span>
      <span class="was">${money(deal.was)}</span>
      <span class="save">Save ${money(savingOf(deal))}</span>
    </p>
    <h3>Is it really a deal?</h3>
    <p class="detail-evidence">${escapeHtml(deal.evidence)}</p>
    <p class="detail-source">Price read from <a href="${deal.sourceUrl}" target="_blank" rel="noopener">${escapeHtml(deal.source)}</a> and checked ${CHECKED_AT}. The link below opens this product’s own page at ${escapeHtml(deal.store)} — not a search page. Prices move fast on Black Friday — confirm the price at checkout before you buy.</p>
    <p><a class="store-link big" href="${deal.storeUrl}" target="_blank" rel="noopener">View at ${escapeHtml(deal.store)} →</a></p>
  </article>`;
}

export function renderDetail(deal, host) {
  host.innerHTML = deal ? dealDetail(deal) : '<p class="empty">That deal is not in this finder.</p>';
}

export function renderStats(deals, host) {
  const stores = new Set(deals.map((deal) => deal.store)).size;
  const best = Math.max(...deals.map((deal) => percentOff(deal)));
  host.innerHTML = `
    <span><strong>${deals.length}</strong> deals checked</span>
    <span><strong>${stores}</strong> stores</span>
    <span><strong>${money(deals.reduce((sum, deal) => sum + savingOf(deal), 0))}</strong> total savings</span>
    <span>Best cut <strong>−${best}%</strong></span>
    <span>Checked ${CHECKED_AT}</span>`;
}

export function renderCount(shown, total, host) {
  host.textContent =
    shown === total
      ? `Showing all ${total} deals`
      : `Showing ${shown} of ${total} deals`;
}

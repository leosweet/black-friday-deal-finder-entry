// Wires the finder together: reads the filter state from the URL, builds
// the filter controls, and re-renders the list on every change. The detail
// view is a hash route (#/deal/<id>); the list view is the default.
import { CATEGORIES, DEALS, STORES, VERDICTS } from './deals.js';
import { applyFilters, readStateFromUrl, sortDeals, writeStateToUrl } from './filters.js';
import { renderCount, renderDetail, renderGrid, renderStats } from './render.js';

const grid = document.getElementById('deal-grid');
const countLine = document.getElementById('result-count');
const searchBox = document.getElementById('search');
const categoryRow = document.getElementById('category-chips');
const storeSelect = document.getElementById('store-filter');
const discountSelect = document.getElementById('discount-filter');
const verdictSelect = document.getElementById('verdict-filter');
const sortSelect = document.getElementById('sort');
const detailHost = document.getElementById('detail-view');
const listView = document.getElementById('list-view');
const statsBar = document.getElementById('stats');

const state = readStateFromUrl();

function fillSelect(select, options, current) {
  for (const option of options) {
    const el = document.createElement('option');
    el.value = option.value;
    el.textContent = option.label;
    if (option.value === current) el.selected = true;
    select.appendChild(el);
  }
}

function buildControls() {
  searchBox.value = state.q;
  for (const category of ['All', ...CATEGORIES]) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.textContent = category;
    chip.setAttribute('aria-pressed', String(state.category === category));
    if (state.category === category) chip.classList.add('active');
    chip.addEventListener('click', () => {
      state.category = category;
      syncAndRender();
    });
    categoryRow.appendChild(chip);
  }
  fillSelect(
    storeSelect,
    [{ value: 'All', label: 'All stores' }, ...STORES.map((s) => ({ value: s, label: s }))],
    state.store,
  );
  fillSelect(
    discountSelect,
    [
      { value: '0', label: 'Any discount' },
      { value: '0.2', label: '20% off or more' },
      { value: '0.3', label: '30% off or more' },
      { value: '0.4', label: '40% off or more' },
      { value: '0.5', label: '50% off or more' },
    ],
    String(state.minDiscount),
  );
  fillSelect(
    verdictSelect,
    [
      { value: 'All', label: 'Any verdict' },
      ...Object.entries(VERDICTS).map(([value, v]) => ({ value, label: v.label })),
    ],
    state.verdict,
  );
  fillSelect(
    sortSelect,
    [
      { value: 'verdict', label: 'Best verdict first' },
      { value: 'discount', label: 'Biggest % off' },
      { value: 'saving', label: 'Biggest $ saving' },
      { value: 'priceAsc', label: 'Lowest price' },
      { value: 'priceDesc', label: 'Highest price' },
    ],
    state.sort,
  );
}

function render() {
  const filtered = sortDeals(applyFilters(DEALS, state), state.sort);
  renderGrid(filtered, grid);
  renderCount(filtered.length, DEALS.length, countLine);
  for (const chip of categoryRow.children) {
    const active = chip.textContent === state.category;
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-pressed', String(active));
  }
}

function syncAndRender() {
  writeStateToUrl(state);
  render();
}

function route() {
  const match = window.location.hash.match(/^#\/deal\/([\w-]+)$/);
  if (match) {
    const deal = DEALS.find((d) => d.id === match[1]);
    listView.hidden = true;
    detailHost.hidden = false;
    renderDetail(deal, detailHost);
    window.scrollTo(0, 0);
  } else {
    detailHost.hidden = true;
    listView.hidden = false;
    render();
  }
}

searchBox.addEventListener('input', () => {
  state.q = searchBox.value;
  syncAndRender();
});
storeSelect.addEventListener('change', () => {
  state.store = storeSelect.value;
  syncAndRender();
});
discountSelect.addEventListener('change', () => {
  state.minDiscount = Number(discountSelect.value);
  syncAndRender();
});
verdictSelect.addEventListener('change', () => {
  state.verdict = verdictSelect.value;
  syncAndRender();
});
sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  syncAndRender();
});
window.addEventListener('hashchange', route);

renderStats(DEALS, statsBar);
buildControls();
route();

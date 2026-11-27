// Filtering and sorting for the deal list. Pure functions: they take the
// deals and a state object and return a new array, so the page can re-render
// on every keystroke without touching the data.
import { VERDICTS } from './deals.js';

export function discountOf(deal) {
  return (deal.was - deal.sale) / deal.was;
}

export function savingOf(deal) {
  return deal.was - deal.sale;
}

export function percentOff(deal) {
  return Math.round(discountOf(deal) * 100);
}

export function applyFilters(deals, state) {
  const query = state.q.trim().toLowerCase();
  return deals.filter((deal) => {
    if (state.category !== 'All' && deal.category !== state.category) return false;
    if (state.store !== 'All' && deal.store !== state.store) return false;
    if (state.minDiscount > 0 && discountOf(deal) < state.minDiscount) return false;
    if (state.verdict !== 'All' && deal.verdict !== state.verdict) return false;
    if (query) {
      const haystack = `${deal.name} ${deal.store} ${deal.category}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

const SORTERS = {
  verdict: (a, b) =>
    VERDICTS[a.verdict].rank - VERDICTS[b.verdict].rank ||
    discountOf(b) - discountOf(a),
  discount: (a, b) => discountOf(b) - discountOf(a),
  saving: (a, b) => savingOf(b) - savingOf(a),
  priceAsc: (a, b) => a.sale - b.sale,
  priceDesc: (a, b) => b.sale - a.sale,
};

export function sortDeals(deals, sortKey) {
  const sorter = SORTERS[sortKey] ?? SORTERS.verdict;
  return [...deals].sort(sorter);
}

export function totalSaving(deals) {
  return deals.reduce((sum, deal) => sum + savingOf(deal), 0);
}

export function readStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    q: params.get('q') ?? '',
    category: params.get('cat') ?? 'All',
    store: params.get('store') ?? 'All',
    minDiscount: (Number(params.get('min') ?? 0) || 0) / 100,
    verdict: params.get('verdict') ?? 'All',
    sort: params.get('sort') ?? 'verdict',
  };
}

export function writeStateToUrl(state) {
  const params = new URLSearchParams();
  if (state.q) params.set('q', state.q);
  if (state.category !== 'All') params.set('cat', state.category);
  if (state.store !== 'All') params.set('store', state.store);
  if (state.minDiscount > 0) params.set('min', String(Math.round(state.minDiscount * 100)));
  if (state.verdict !== 'All') params.set('verdict', state.verdict);
  if (state.sort !== 'verdict') params.set('sort', state.sort);
  const query = params.toString();
  const next = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
  window.history.replaceState(null, '', next);
}

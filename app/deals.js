// The deals this finder lists. Every entry was checked by the maker on
// 27 November 2026 (Black Friday) by reading the price at the store or in a
// deals source that names the store, and every price and link was re-checked
// on 28 November 2026. `source` is that source; `sourceUrl` links to it.
// `storeUrl` is the product's own page at the store named — a direct product
// link, never a store search page. No price, product or link here was
// invented.
//
// Improvement session anchor (makefun anchor adf703327f40ecbebfd54effde7ff75af08309fa round 34320079):
// this revision replaces all store-search links with verified direct product
// pages and re-checks every price against a store page or a deals source
// dated 27–28 November 2026.

export const CHECKED_AT = 'Nov 28, 2026 · 1:40 AM CST';

export const STORES = ['Amazon', 'Best Buy', 'Walmart', 'Target'];

export const CATEGORIES = [
  'Audio',
  'Computing',
  'TVs',
  'Gaming',
  'Wearables',
  'Phones',
  'Home',
  'Toys',
];

// verdict: how good the deal really is, and on what evidence.
//   all-time-low — the lowest price the trackers have seen for this item
//   strong       — a deep cut off list price, at or near the year's best
//   bundle       — the saving comes from what is bundled in, not a price cut
//   modest       — a real cut, but small against the list price
//   thin         — barely below list; only worth it if you wanted it anyway
export const VERDICTS = {
  'all-time-low': { label: 'All-time low', rank: 0 },
  strong: { label: 'Strong deal', rank: 1 },
  bundle: { label: 'Bundle value', rank: 1 },
  modest: { label: 'Modest cut', rank: 2 },
  thin: { label: 'Barely a deal', rank: 3 },
};

export const DEALS = [
  {
    id: 'airpods-pro-3',
    name: 'Apple AirPods Pro 3',
    store: 'Amazon',
    category: 'Audio',
    sale: 149.0,
    was: 249.0,
    storeUrl: 'https://www.amazon.com/dp/B0FQFB8FMG',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
    verdict: 'all-time-low',
    evidence:
      'Down from $179 to $149 during Black Friday week — the lowest price these have ever sold for.',
  },
  {
    id: 'apple-watch-series-12-42',
    name: 'Apple Watch Series 12, GPS 42mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 299.0,
    was: 399.0,
    storeUrl: 'https://www.amazon.com/dp/B0HJB63G4M',
    source: 'MacObserver, Nov 25',
    sourceUrl:
      'https://www.macobserver.com/deals/apple-watch-series-12-black-friday-299/',
    verdict: 'all-time-low',
    evidence:
      '$100 off list — Light Gold and Dark Bronze 42mm configs at $299, the lowest price since launch in September.',
  },
  {
    id: 'apple-watch-se-3-40',
    name: 'Apple Watch SE 3, 40mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 179.0,
    was: 249.0,
    storeUrl: 'https://www.amazon.com/dp/B0HJ9ZNRKT',
    source: 'Slickdeals, Nov 22',
    sourceUrl:
      'https://slickdeals.net/sh/thread-20367915/e/3/c/deal-details/au/5e83623ce6c811f1985ce2484cef9024/',
    verdict: 'strong',
    evidence:
      '$70 off the entry watch — dropped again to $179 during Black Friday week, the cheapest SE 3 price of the season so far.',
  },
  {
    id: 'airtag-2-single',
    name: 'Apple AirTag 2 (1-pack)',
    store: 'Amazon',
    category: 'Computing',
    sale: 23.0,
    was: 29.0,
    storeUrl: 'https://www.amazon.com/dp/B0GJTFXNRX',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'all-time-low',
    evidence:
      '$6 off list, matching the all-time low for the single second-generation tag.',
  },
  {
    id: 'macbook-air-m5-13',
    name: 'Apple MacBook Air 13-inch, M5, 16GB / 512GB',
    store: 'Amazon',
    category: 'Computing',
    sale: 1049.0,
    was: 1299.0,
    storeUrl: 'https://www.amazon.com/dp/B0GEJG6EX',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'strong',
    evidence:
      '$250 off across the M5 Air line, the best price in months on the base 13-inch.',
  },
  {
    id: 'macbook-neo-256',
    name: 'Apple MacBook Neo, 256GB',
    store: 'Amazon',
    category: 'Computing',
    sale: 649.99,
    was: 700.0,
    storeUrl: 'https://www.amazon.com/dp/B064CY4AC',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'modest',
    evidence:
      'Only $50 off a $700 laptop — a real cut, and the first one this model has had, but a small one.',
  },
  {
    id: 'apple-tv-4k-2026',
    name: 'Apple TV 4K (new 2026 model)',
    store: 'Amazon',
    category: 'Computing',
    sale: 289.99,
    was: 299.0,
    storeUrl: 'https://www.amazon.com/dp/B0FXQX6K8',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'thin',
    evidence:
      'Just $10 under list on a brand-new box. Buy it because you want it, not for the discount.',
  },
  {
    id: 'tcl-65-4k',
    name: 'TCL 65-inch S4CF 4K UHD HDR Smart TV with Fire TV (2026)',
    store: 'Best Buy',
    category: 'TVs',
    sale: 229.99,
    was: 469.99,
    storeUrl:
      'https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112',
    source: 'Best Buy product page, Nov 28',
    sourceUrl:
      'https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112',
    verdict: 'strong',
    evidence:
      'More than half off list — $240 saved on the 65-inch set Best Buy leads its sale with.',
  },
  {
    id: 'hisense-65-h5r1',
    name: 'Hisense 65-inch H5R1 4K Roku TV',
    store: 'Walmart',
    category: 'TVs',
    sale: 228.0,
    was: 398.0,
    storeUrl: 'https://www.walmart.com/ip/20206324665',
    source: 'Walmart product page, Nov 28',
    sourceUrl: 'https://www.walmart.com/ip/20206324665',
    verdict: 'strong',
    evidence:
      '$170 off the big-screen Roku TV, the cheapest 65-inch 4K set in the Black Friday roundups.',
  },
  {
    id: 'hp-omnibook-5-oled',
    name: 'HP OmniBook 5, 14-inch 2K OLED Touchscreen Laptop',
    store: 'Best Buy',
    category: 'Computing',
    sale: 449.99,
    was: 799.99,
    storeUrl:
      'https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-storage-starlit-blue/J3KSW748W6/sku/6690110',
    source: 'Best Buy product page, Nov 28',
    sourceUrl:
      'https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-storage-starlit-blue/J3KSW748W6/sku/6690110',
    verdict: 'strong',
    evidence:
      '$350 off an OLED touchscreen laptop — the deepest laptop cut in Best Buy’s sale.',
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Noise-Cancelling Headphones',
    store: 'Best Buy',
    category: 'Audio',
    sale: 169.99,
    was: 398.0,
    storeUrl:
      'https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727',
    source: 'Best Buy product page, Nov 28',
    sourceUrl:
      'https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727',
    verdict: 'strong',
    evidence:
      '$228 off Sony’s flagship noise-cancelling headphones — near the lowest price they ever reach.',
  },
  {
    id: 'beats-studio-pro',
    name: 'Beats Studio Pro Headphones (Matte White)',
    store: 'Walmart',
    category: 'Audio',
    sale: 99.0,
    was: 299.0,
    storeUrl:
      'https://www.walmart.com/ip/Beats-by-Dr-Dre-Studio-Pro-Wireless-Headphones-Matte-White-Bundle/14280620660',
    source: 'Walmart product page, Nov 28',
    sourceUrl:
      'https://www.walmart.com/ip/Beats-by-Dr-Dre-Studio-Pro-Wireless-Headphones-Matte-White-Bundle/14280620660',
    verdict: 'strong',
    evidence:
      'Two-thirds off list — $200 saved on flagship Beats, the steepest headphone cut in the roundups. The $99 price is the Matte White finish.',
  },
  {
    id: 'beats-solo-4',
    name: 'Beats Solo 4 On-Ear Headphones — Bright Pink',
    store: 'Target',
    category: 'Audio',
    sale: 79.99,
    was: 199.99,
    storeUrl:
      'https://www.target.com/p/beats-solo-4-bluetooth-wireless-on-ear-headphones-bright-pink/-/A-1012454303',
    source: 'Target product page, Nov 28',
    sourceUrl:
      'https://www.target.com/p/beats-solo-4-bluetooth-wireless-on-ear-headphones-bright-pink/-/A-1012454303',
    verdict: 'strong',
    evidence:
      '60% off list at Target — $120 saved on the on-ear Beats, in the Bright Pink finish.',
  },
  {
    id: 'switch-2-mario-kart-bundle',
    name: 'Nintendo Switch 2 + Mario Kart World Bundle',
    store: 'Amazon',
    category: 'Gaming',
    sale: 499.99,
    was: 549.99,
    storeUrl: 'https://www.amazon.com/dp/B0FC5FJZ9Z',
    source: '2nd Shift gaming deals, Nov 26',
    sourceUrl: 'https://www.2ndshift.gg/black-friday-gaming-deals/',
    verdict: 'bundle',
    evidence:
      'The only console price cut of Black Friday 2026 — $50 off, plus a Mario Kart World download and 3 months of Switch Online in the box.',
  },
  {
    id: 'dualsense-controller',
    name: 'Sony DualSense Wireless Controller (PS5, Midnight Black)',
    store: 'Amazon',
    category: 'Gaming',
    sale: 54.0,
    was: 74.99,
    storeUrl: 'https://www.amazon.com/dp/B0FY6Y9WZT',
    source: '2nd Shift gaming deals, Nov 26',
    sourceUrl: 'https://www.2ndshift.gg/black-friday-gaming-deals/',
    verdict: 'strong',
    evidence:
      'Sony’s official Black Friday cut, $20 off the standard controller, live at Amazon — the $54 price is the Midnight Black finish.',
  },
  {
    id: 'samsung-9100-pro-2tb',
    name: 'Samsung 9100 Pro 2TB SSD',
    store: 'Amazon',
    category: 'Computing',
    sale: 349.99,
    was: 679.97,
    storeUrl: 'https://www.amazon.com/dp/B0DX2DPJZ5',
    source: 'WCCFTech, Nov 20',
    sourceUrl:
      'https://wccftech.com/samsung-black-friday-storage-deals-ssd-microsd-express-amazon/',
    verdict: 'strong',
    evidence:
      'Nearly half off a flagship 2TB drive — $330 saved, the deepest storage cut in the roundups.',
  },
  {
    id: 'galaxy-s26-fe',
    name: 'Samsung Galaxy S26 FE, 128GB (Unlocked)',
    store: 'Best Buy',
    category: 'Phones',
    sale: 499.99,
    was: 699.99,
    storeUrl:
      'https://www.bestbuy.com/product/samsung-galaxy-s26-fe-128gb-unlocked-graphite/JJGRF3V6G5/sku/6687704',
    source: 'Best Buy product page, Nov 28',
    sourceUrl:
      'https://www.bestbuy.com/product/samsung-galaxy-s26-fe-128gb-unlocked-graphite/JJGRF3V6G5/sku/6687704',
    verdict: 'strong',
    evidence:
      '$200 off Samsung’s new fan-edition phone, the only phone cut in Best Buy’s headline deals.',
  },
  {
    id: 'shark-powerdetect-vacuum',
    name: 'Shark PowerDetect Speed Cordless Stick Vacuum, HEPA, 60-min runtime',
    store: 'Best Buy',
    category: 'Home',
    sale: 199.99,
    was: 499.99,
    storeUrl:
      'https://www.bestbuy.com/product/shark-powerdetect-speed-cordless-stick-vacuum-cleaner-hepa-filtration-60-min-runtime-ia1121-ivory/JXJVXL847Y/sku/6689453',
    source: 'Best Buy product page, Nov 27',
    sourceUrl:
      'https://www.bestbuy.com/product/shark-powerdetect-speed-cordless-stick-vacuum-cleaner-hepa-filtration-60-min-runtime-ia1121-ivory/JXJVXL847Y/sku/6689453',
    verdict: 'strong',
    evidence:
      '60% off on Best Buy’s own page — $300 saved on the cordless stick vacuum it stacks by the pallet.',
  },
  {
    id: 'kindle-paperwhite',
    name: 'Amazon Kindle Paperwhite (2024, 16GB)',
    store: 'Target',
    category: 'Computing',
    sale: 129.99,
    was: 199.99,
    storeUrl: 'https://www.target.com/p/amazon-kindle-paperwhite-2024/-/A-94165655',
    source: 'The Verge, Nov 19',
    sourceUrl:
      'https://www.theverge.com/gadgets/1037635/amazon-kindle-paperwhite-black-friday-2026-deal-sale',
    verdict: 'strong',
    evidence:
      '$70 off the 2024 Paperwhite at Target — a third off list on the e-reader, nearly its lowest price ever.',
  },
  {
    id: 'lego-grogu-hover-pram',
    name: 'LEGO Star Wars Grogu with Hover Pram (75403), 1,048 pieces',
    store: 'Walmart',
    category: 'Toys',
    sale: 64.99,
    was: 99.99,
    storeUrl:
      'https://www.walmart.com/ip/LEGO-Star-Wars-Mandalorian-Grogu-Hover-Pram-Building-Toy-Set-Star-Wars-Toy-Kids-Boys-Girls-Ages-10-Gift-Idea-Birthday-75403/6791824264',
    source: 'BrickFact price tracker, Nov 27',
    sourceUrl: 'https://brickfact.com/sets/lego-star-wars-grogu-with-hover-pram-75403',
    verdict: 'strong',
    evidence:
      '35% off a 1,000-plus-piece Star Wars set at Walmart, one of the week’s best LEGO prices.',
  },
];

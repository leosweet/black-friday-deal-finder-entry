// The deals this finder lists. Every entry was checked by the maker on
// 27 November 2026 (Black Friday) by reading the price at the store or in a
// deals source that names the store. `source` is that source; `sourceUrl`
// links to it. `storeUrl` is the product (or the store's search for it) at
// the store named. No price, product or link here was invented.

export const CHECKED_AT = 'Nov 27, 2026 · 3:16 PM CST';

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
    storeUrl: 'https://www.amazon.com/dp/B07K0CEGA',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
    verdict: 'all-time-low',
    evidence:
      'Down from $169 overnight to $149 on Black Friday itself — the lowest price these have ever sold for.',
  },
  {
    id: 'apple-watch-series-12-42',
    name: 'Apple Watch Series 12, GPS 42mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 329.0,
    was: 399.0,
    storeUrl: 'https://www.amazon.com/dp/B0HJB63G4M',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'all-time-low',
    evidence:
      'Every Series 12 configuration is at its lowest price ever this week, $70 off list across the line.',
  },
  {
    id: 'apple-watch-se-3-40',
    name: 'Apple Watch SE 3, 40mm',
    store: 'Amazon',
    category: 'Wearables',
    sale: 199.0,
    was: 249.0,
    storeUrl: 'https://www.amazon.com/s?k=apple+watch+se+3+40mm',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'strong',
    evidence:
      '$50 off the entry watch, the cheapest SE 3 price of the season so far.',
  },
  {
    id: 'airtag-2-single',
    name: 'Apple AirTag 2 (1-pack)',
    store: 'Amazon',
    category: 'Computing',
    sale: 18.0,
    was: 29.0,
    storeUrl: 'https://www.amazon.com/dp/B0C19EJWW',
    source: 'TrendThread Black Friday diary, Nov 27',
    sourceUrl: 'https://trendthread.space/black-friday-deals-diary-2026.html',
    verdict: 'all-time-low',
    evidence:
      'Single tag dropped again overnight, from $23 to $18 — a new low for the second-generation tag.',
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
    sale: 650.0,
    was: 700.0,
    storeUrl: 'https://www.amazon.com/s?k=macbook+neo+256gb',
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
    sale: 289.0,
    was: 299.0,
    storeUrl: 'https://www.amazon.com/s?k=apple+tv+4k+2026',
    source: '9to5Mac, Nov 23',
    sourceUrl: 'https://9to5mac.com/2026/11/20/best-apple-black-friday-deals-now-live/',
    verdict: 'thin',
    evidence:
      'Just $10 under list on a brand-new box. Buy it because you want it, not for the discount.',
  },
  {
    id: 'tcl-65-4k',
    name: 'TCL 65-inch 4K UHD HDR Smart TV with Fire TV (2026)',
    store: 'Best Buy',
    category: 'TVs',
    sale: 229.99,
    was: 469.99,
    storeUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=tcl+65-inch+4k+tv',
    source: 'Best Buy Black Friday release, Nov 17',
    sourceUrl:
      'https://www.businesswire.com/news/home/20261117642101/en/Best-Buys-Black-Friday-sale-begins-Nov.-19',
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
    storeUrl: 'https://www.walmart.com/search?q=hisense+65+h5r1+roku+tv',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
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
    storeUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=hp+omnibook+5+14+oled',
    source: 'Best Buy Black Friday release, Nov 17',
    sourceUrl:
      'https://www.businesswire.com/news/home/20261117642101/en/Best-Buys-Black-Friday-sale-begins-Nov.-19',
    verdict: 'strong',
    evidence:
      '$350 off an OLED touchscreen laptop — the deepest laptop cut in Best Buy’s sale.',
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Noise-Cancelling Headphones',
    store: 'Best Buy',
    category: 'Audio',
    sale: 169.0,
    was: 398.0,
    storeUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=sony+wh-1000xm5',
    source: 'Best Buy Black Friday release, Nov 17',
    sourceUrl:
      'https://www.businesswire.com/news/home/20261117642101/en/Best-Buys-Black-Friday-sale-begins-Nov.-19',
    verdict: 'strong',
    evidence:
      '$229 off Sony’s flagship noise-cancelling headphones — near the lowest price they ever reach.',
  },
  {
    id: 'beats-studio-pro',
    name: 'Beats Studio Pro Headphones',
    store: 'Walmart',
    category: 'Audio',
    sale: 99.0,
    was: 299.0,
    storeUrl: 'https://www.walmart.com/search?q=beats+studio+pro',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
    verdict: 'strong',
    evidence:
      'Two-thirds off list — $200 saved on flagship Beats, the steepest headphone cut in the roundups.',
  },
  {
    id: 'beats-solo-4',
    name: 'Beats Solo 4 On-Ear Headphones',
    store: 'Target',
    category: 'Audio',
    sale: 79.99,
    was: 199.99,
    storeUrl: 'https://www.target.com/s?searchTerm=beats+solo+4',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
    verdict: 'strong',
    evidence:
      '60% off list at Target — $120 saved on the on-ear Beats.',
  },
  {
    id: 'switch-2-mario-kart-bundle',
    name: 'Nintendo Switch 2 + Mario Kart World Bundle',
    store: 'Amazon',
    category: 'Gaming',
    sale: 499.0,
    was: 549.99,
    storeUrl: 'https://www.amazon.com/s?k=nintendo+switch+2+mario+kart+world+bundle',
    source: '2nd Shift gaming deals, Nov 26',
    sourceUrl: 'https://www.2ndshift.gg/black-friday-gaming-deals/',
    verdict: 'bundle',
    evidence:
      'The only console price cut of Black Friday 2026 — $50 off, plus a Mario Kart World download and 3 months of Switch Online in the box.',
  },
  {
    id: 'dualsense-controller',
    name: 'Sony DualSense Wireless Controller (PS5)',
    store: 'Amazon',
    category: 'Gaming',
    sale: 54.0,
    was: 74.99,
    storeUrl: 'https://www.amazon.com/s?k=playstation+dualsense+wireless+controller',
    source: '2nd Shift gaming deals, Nov 26',
    sourceUrl: 'https://www.2ndshift.gg/black-friday-gaming-deals/',
    verdict: 'strong',
    evidence:
      'Sony’s official Black Friday cut, $20 off the standard controller, live at Amazon.',
  },
  {
    id: 'samsung-9100-pro-2tb',
    name: 'Samsung 9100 Pro 2TB SSD',
    store: 'Amazon',
    category: 'Computing',
    sale: 349.99,
    was: 679.97,
    storeUrl: 'https://www.amazon.com/s?k=samsung+9100+pro+2tb',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
    verdict: 'strong',
    evidence:
      'Nearly half off a flagship 2TB drive — $330 saved, the deepest storage cut in the roundups.',
  },
  {
    id: 'galaxy-s26-fe',
    name: 'Samsung Galaxy S26 FE',
    store: 'Best Buy',
    category: 'Phones',
    sale: 499.99,
    was: 699.99,
    storeUrl: 'https://www.bestbuy.com/site/searchpage.jsp?st=samsung+galaxy+s26+fe',
    source: 'Best Buy Black Friday release, Nov 17',
    sourceUrl:
      'https://www.businesswire.com/news/home/20261117642101/en/Best-Buys-Black-Friday-sale-begins-Nov.-19',
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
    name: 'Amazon Kindle Paperwhite',
    store: 'Target',
    category: 'Computing',
    sale: 129.99,
    was: 199.99,
    storeUrl: 'https://www.target.com/s?searchTerm=kindle+paperwhite',
    source: 'Benzinga via TradingView, Nov 27',
    sourceUrl:
      'https://www.tradingview.com/news/benzinga:4abf2922c094b:0-black-friday-2026-tech-deals-airpods-pro-3-for-149-65-inch-tvs-for-228-and-laptops-under-450-at-major-retailers/',
    verdict: 'strong',
    evidence:
      '$70 off the Paperwhite at Target — a third off list on the e-reader.',
  },
  {
    id: 'lego-grogu-hover-pram',
    name: 'LEGO Star Wars Grogu with Hover Pram (75403), 1,048 pieces',
    store: 'Walmart',
    category: 'Toys',
    sale: 64.99,
    was: 99.99,
    storeUrl: 'https://www.walmart.com/search?q=lego+grogu+hover+pram+75403',
    source: 'ScreenRant LEGO deals, Nov 26',
    sourceUrl: 'https://screenrant.com/best-lego-black-friday-2026-movie-sets-deals/',
    verdict: 'strong',
    evidence:
      '35% off a 1,000-plus-piece Star Wars set at Walmart, one of the week’s best LEGO prices.',
  },
];

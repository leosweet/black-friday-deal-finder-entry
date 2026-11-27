[![black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/leosweet/black-friday-deal-finder-entry/rank.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/leosweet/black-friday-deal-finder-entry/reward.svg)](https://make.fun/c/black-friday-deal-finder-01)

# Black Friday Beacon

A Black Friday and Cyber Monday deal finder: a static site listing real deals the maker found and checked on 27 November 2026. Every deal shows its product, store, store link, sale price, usual price, discount, the time its price was checked, and an honest verdict on whether it is really a deal — all-time low, strong deal, bundle value, modest cut, or barely a deal.

Search and filters by category, store, discount and verdict all work; sorting puts the best verdicts first. The site is plain static files under `app/` with no build step and no network requests, and it works on desktop and on a phone.

## Run it

```sh
node serve.ts        # serves app/ on http://localhost:8080
```

## Hand it in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to the output directory and writes `dossier.json` with the kit's vendored `vendor/makefun-frontend.ts`.

## Deals

20 deals across 4 stores (Amazon, Best Buy, Walmart, Target), checked Nov 27, 2026, 3:16 PM CST. Each deal's source is named on its deal page. Prices move fast on Black Friday — check the price at checkout before you buy.

This finder is an independent guide, not affiliated with any store or brand listed.

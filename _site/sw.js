const staticCacheName = "altcointrading-static-v61";

// to cache
const filesToCache = [
  "/posts.json",
  "/assets/css/app.css",
  "/app/index.html",
  "/img/logo.jpg",
  "/img/favicon.ico",
  "/img/wallets/trezor-altcoins.jpg",
  "/img/wallets/trezor-altcoins-long.jpg",
  "https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Slabo+27px",

  
  '/zoe-ethereum-alphabay/',
  
  '/monero-cold-storage-2017/',
  
  '/ethereum-etf-unlikely/',
  
  '/wyckoff-avoidance/',
  
  '/dash-03-2017/',
  
  '/kraken-cryptowatch/',
  
  '/ripple-trading/',
  
  '/private-altcoins-dash-monero/',
  
  '/trezor-multicoin/',
  
  '/how-to-buy-altcoins/',
  
  '/iconomi/',
  
  '/monero-wallet/',
  
  '/monero-kraken/',
  
  '/finexening/',
  
  '/free-etc/',
  
  '/eth-classic/',
  
  '/value/',
  
  '/ta-divergences/',
  
  '/eth-hard-fork/',
  
  '/ichimoku-cloud/',
  
  '/dao-hack/',
  
  '/eth-17-06-2016/',
  
  '/ico-2016/',
  
  '/waves/',
  
  '/technical-analysis/',
  
  '/eth-vs-lisk/',
  
  '/ethereum-may-2016/',
  
  '/eth-okcoin-coinbase/',
  
  '/daytrading/',
  
  '/value/',
  
  '/lending/',
  
  '/altcoin-exchanges/',
  
  '/altcoin-wallets/',
  
  '/automated-trading/',
  
  '/altcoin-trading-charts/',
  

  "/assets/css/all.css",
  "/img/app/1.png",
  "/img/app/2.png",
  "/img/app/3.png",
  "/img/app/4.png",
  "/img/app/5.png"
];

// ===

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener("fetch", function(e){
  e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   )
 });

 console.log("caching active")

// ===

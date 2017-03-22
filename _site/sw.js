const staticCacheName = "altcointrading-static-v61";

// to cache
const filesToCache = [
  "/app/",
  "/app/index.html",
  "/assets/bower_components/rss-parser/dist/rss-parser.js",
  "/feed.xml",
  "/assets/css/app.css",
  "/img/logo.jpg",
  "/img/favicon.ico",
  "/img/wallets/trezor-altcoins.jpg",
  "/img/wallets/trezor-altcoins-long.jpg",
  "https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Slabo+27px",
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

 console.log("sw")

// ===

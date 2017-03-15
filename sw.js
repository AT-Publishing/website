---
layout: null
navi:
 exclude: yes
---

const staticCacheName = "altcointrading-static-v61";

// to cache
const filesToCache = [
  "/posts.json",
  "/assets/css/app.css",
  "/app/",
  "/img/logo.jpg",
  "/img/favicon.ico",
  "/img/wallets/trezor-altcoins.jpg",
  "/img/wallets/trezor-altcoins-long.jpg",
  "https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Slabo+27px",

  {% for post in site.posts %}
  '{{ post.url }}',
  {% endfor %}

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

const CACHE_NAME = 'elevate-refurbs-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/nicepage.css',
  '/nicepage.js',
  '/index.css',
  '/images/favicon.png',
  '/images/favicon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});

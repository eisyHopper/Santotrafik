// service-worker.js

self.addEventListener('install', (event) => {
  console.log('✅ Service Worker installed');
  self.skipWaiting(); // Optional: take control immediately
});

self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // This just lets all network requests through normally.
  event.respondWith(fetch(event.request));
});

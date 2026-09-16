const CACHE_NAME = 'cawee-lab-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // หากมีไฟล์ css, js หรือรูปภาพเพิ่มเติม ให้ใส่ path ลงในนี้ด้วย เช่น './style.css', './app.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

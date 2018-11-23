self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/',
          '/sw.js',
          '/icon/icon.png',
          '/css/master.css',
          '/css/type-writer.css',
          '/js/main.js',
          '/images/image-1.jpg',
          '/images/image-2.jpg',
          '/images/image-3.png'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
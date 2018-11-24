   self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/',
          '/sw.js',
          '/icon/icon.png',
          '/css/master.css',
          '/js/main.js',
          '/images/mws.jpeg',
          'images/profile.jpg'
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
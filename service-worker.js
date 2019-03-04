importScripts("precache-manifest.d009876bc27e2448acccabf0c06ede2d.js", "workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setCacheNameDetails({
    prefix: 'totem',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime'
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
  

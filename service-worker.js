importScripts("precache-manifest.12c546437f00a2e9e7988c69de899980.js", "workbox-v3.6.3/workbox-sw.js");
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
  

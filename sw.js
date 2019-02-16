importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0da22e343b979b2c2d56.js",
    "revision": "27b56f923267ce7a473c9b864f201aa2"
  },
  {
    "url": "/_nuxt/199a3a63abaf749e2ccd.js",
    "revision": "18183a7a96fcef8f56b7a7ca4825d47a"
  },
  {
    "url": "/_nuxt/26cd9e6a58372e17ab5a.js",
    "revision": "c5bce28e16a766a59c2afbdce9505cb5"
  },
  {
    "url": "/_nuxt/4a629b17b5f271a8656b.js",
    "revision": "c5ba921b52f82585df5bcc755c720acd"
  },
  {
    "url": "/_nuxt/5405376899275ad506dc.js",
    "revision": "fea57dfc1214d1e7e8bf66ef807d81de"
  },
  {
    "url": "/_nuxt/684385de991a05ec2ad4.js",
    "revision": "6028788f6236272b4fec58dded0ebd01"
  },
  {
    "url": "/_nuxt/7e7b8811f67966a3792c.js",
    "revision": "b061eceb2874a4f79d6c1559ce0c33cf"
  },
  {
    "url": "/_nuxt/7f7b9786e23e8e10766f.js",
    "revision": "353e9013d2647c90e25dd1c10785e97f"
  },
  {
    "url": "/_nuxt/b7d44b90453e36bbfbdd.js",
    "revision": "617ee2a6c9b38dae89478923cb3ac5d7"
  },
  {
    "url": "/_nuxt/e04a46f01c71884b5222.js",
    "revision": "480feccef91c308c357cc1a07e2d9327"
  }
], {
  "cacheId": "mde-js-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

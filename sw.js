/* Boss Town preview moved to /boss-town/. This worker clears the old offline copy and removes itself. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => /^boss-town-preview-v\d+$/.test(k)).map((k) => caches.delete(k))))
    .then(() => self.registration.unregister()).then(() => self.clients.matchAll({ type: "window" }))
    .then((cs) => cs.forEach((c) => { try { c.navigate("/boss-town/"); } catch (x) {} })).catch(() => {}));
});

/* Preview retired: this worker removes itself and its cache, then the page goes to /boss-town/. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.indexOf("boss-town-preview") === 0).map((k) => caches.delete(k)))).then(() => self.registration.unregister()).then(() => self.clients.matchAll({ type: "window" })).then((cs) => cs.forEach((c) => { try { c.navigate("/boss-town/"); } catch (x) {} })).catch(() => {})); });
self.addEventListener("fetch", () => {});

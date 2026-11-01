const V='mpd2-3f645895';
const SHELL=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "ibm-plex-sans-condensed-latin-400-normal.woff2", "ibm-plex-sans-condensed-latin-500-normal.woff2", "ibm-plex-sans-condensed-latin-600-normal.woff2", "ibm-plex-sans-condensed-latin-700-normal.woff2", "source-serif-4-latin-400-italic.woff2", "source-serif-4-latin-400-normal.woff2", "source-serif-4-latin-600-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL.concat(['data.enc']))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp));}return r;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(m=>m||caches.match('index.html'))));
});

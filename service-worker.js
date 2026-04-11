const CACHE_NAME = "einkaufsliste-v13";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icons/ananas.png",
  "./icons/apfel.png",
  "./icons/apfelmus.png",
  "./icons/backpulver.png",
  "./icons/balsamico.png",
  "./icons/banane.png",
  "./icons/basilikum.png",
  "./icons/birne.png",
  "./icons/blaetterteig.png",
  "./icons/blumenkohl.png",
  "./icons/broetchen.png",
  "./icons/brokkoli.png",
  "./icons/brot.png",
  "./icons/butter.png",
  "./icons/champignons.png",
  "./icons/cookies.png",
  "./icons/creme_fine.png",
  "./icons/creme_fraiche.png",
  "./icons/curry.png",
  "./icons/dice1.png",
  "./icons/dice2.png",
  "./icons/dice3.png",
  "./icons/dice4.png",
  "./icons/dice5.png",
  "./icons/dice6.png",
  "./icons/dosenmais.png",
  "./icons/dosenpfirsiche.png",
  "./icons/dosentomaten.png",
  "./icons/eier.png",
  "./icons/emmentaler.png",
  "./icons/erbsen.png",
  "./icons/erdbeeren.png",
  "./icons/essig.png",
  "./icons/feta.png",
  "./icons/fischstaebchen.png",
  "./icons/frischkaese.png",
  "./icons/gemuesebruehe.png",
  "./icons/getrocknete_tomaten.png",
  "./icons/grillwuerstchen.png",
  "./icons/gurke.png",
  "./icons/hackfleisch.png",
  "./icons/haferflocken.png",
  "./icons/honig.png",
  "./icons/italienische_kraeuter.png",
  "./icons/joghurt.png",
  "./icons/kaese.png",
  "./icons/karotte.png",
  "./icons/kartoffeln.png",
  "./icons/ketchup.png",
  "./icons/kiwi.png",
  "./icons/knoblauch.png",
  "./icons/kokosmilch.png",
  "./icons/kuerbis.png",
  "./icons/lauch.png",
  "./icons/lebensmittelfarbe.png",
  "./icons/leberwurst.png",
  "./icons/majoran.png",
  "./icons/mandarinen.png",
  "./icons/mascarpone.png",
  "./icons/mayonnaise.png",
  "./icons/mehl.png",
  "./icons/milch.png",
  "./icons/mortadella.png",
  "./icons/mozzarella.png",
  "./icons/muesli.png",
  "./icons/muskatnuss.png",
  "./icons/nektarine.png",
  "./icons/nuesse.png",
  "./icons/nudeln.png",
  "./icons/nutella.png",
  "./icons/olivenoel.png",
  "./icons/oregano.png",
  "./icons/oreo.png",
  "./icons/paprika.png",
  "./icons/paprikapulver.png",
  "./icons/parmesan.png",
  "./icons/passierte_tomaten.png",
  "./icons/petersilie.png",
  "./icons/pfeffer.png",
  "./icons/puderzucker.png",
  "./icons/quark.png",
  "./icons/rapsoel.png",
  "./icons/reis.png",
  "./icons/rote_linsen.png",
  "./icons/sahnesteif.png",
  "./icons/salami.png",
  "./icons/salat.png",
  "./icons/salz.png",
  "./icons/saure_gurken.png",
  "./icons/saure_sahne.png",
  "./icons/schattenmorellen.png",
  "./icons/schlagsahne.png",
  "./icons/schmand.png",
  "./icons/schnittlauch.png",
  "./icons/schokokuesse.png",
  "./icons/schokopudding.png",
  "./icons/senf.png",
  "./icons/sonnenblumenoel.png",
  "./icons/speckwuerfel.png",
  "./icons/spinat.png",
  "./icons/tee.png",
  "./icons/teewurst.png",
  "./icons/thunfisch.png",
  "./icons/tk_lachs.png",
  "./icons/toffifee.png",
  "./icons/tortellini.png",
  "./icons/tomate.png",
  "./icons/trauben.png",
  "./icons/trockenhefe.png",
  "./icons/vanillepudding.png",
  "./icons/vanillezucker.png",
  "./icons/wiener.png",
  "./icons/yum_yum.png",
  "./icons/zimt.png",
  "./icons/zitrone.png",
  "./icons/zucchini.png",
  "./icons/zucker.png",
  "./icons/zuckerstreusel.png",
  "./icons/zwiebel.png",
];

// Installation
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Aktivierung — alten Cache automatisch löschen
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch (Offline-Funktion)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

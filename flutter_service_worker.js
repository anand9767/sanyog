'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "61e6b70e48ec99f6e1d1fe25c79483ca",
"index.html": "7f87df94b56e151478cdc65e31d1bb9d",
"/": "7f87df94b56e151478cdc65e31d1bb9d",
"main.dart.js": "02b4befd63c872196e2cfd9750cf23cb",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dbc047386d78e3282034f964c3a92d61",
".git/ORIG_HEAD": "9cb1c0be68ad63c71fd8468db2cb96de",
".git/config": "2ec0a1a72257b8ce431703db250e2324",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/119410e9c0d2c386bf99863928663cad2c7a31": "2a5274d35f93e8286adb14de01c8a903",
".git/objects/68/0e9219fa68e3f176da3afefb4373e7a4545a5a": "fc5e2e8af5a0c9dc45e74ca33ac36065",
".git/objects/56/1ca53b41ee5573d83314597ebedfab950e3f25": "453e2b3ba8cc3457a0a645b550a0d420",
".git/objects/5a/dd103785494a66872af8786c65f51d1a975ac9": "2e41cd6ef09dc6e45ebd67a9206f9d19",
".git/objects/d9/a32b876d69c6955b6cdf4aa5b0b34c96a2497e": "8b2d3f14f7ebbbbf4d27d55de44eff6d",
".git/objects/d0/9685850a92029aec4cbcd426f010f96155368c": "838f02a45e5969bd878e43028e29093a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ac3299e716bfbb3d1f0ca1e4af39750b85319e": "9a48ae753c988918044aabb7ba960e5d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/05d8f45daa88a6ed14c8745c838358450ef522": "cce41aca7f99fac4e6d6523f9e9bad1d",
".git/objects/f2/e9850cf479ea9e4aa1696188a0d9411cd32b8e": "9f70096b286da0b9ab9c2d56f7986c73",
".git/objects/ec/f4cd2a3858837f4e4e777fd12f6a0b3a0ffa96": "a0e60fd1923e7d15c047a9124c359d16",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/2d59bb1b498c1b11022474414ce02f58658603": "68d5d9ee6a71789b5d3f6368846865eb",
".git/objects/27/12c1a0658206dec7309670f8613511ea1ec8ca": "bc7fe6f8320d9a9414a1c9078183a33e",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/3a673f19577f341c5aa3b876784418cb3e6dbd": "a04980cdab5757e2668c46cec535f3be",
".git/objects/43/a34c211fe102d6660a7e31697d48742862a959": "1ded5fd341660faa459e41aaf94e48d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3c582a68b8baa56c79d0ac055c1abb10c0140e": "44ad12e9e33b6546ac437134b7d95e6b",
".git/objects/36/87c5e04f6bc93dc69196eae74f5fc98be56a6e": "7d7a8a01b7e8b7eba7e291dcc2b07548",
".git/objects/5d/30bac0cdfebaf46874ba9159f8e2eaec3817d5": "68fac2e500c16347a7330549872fed1d",
".git/objects/91/8ba8bea66c10b8df5f951bc2c5e8880ac7659a": "f5faefd94d661cb58697e2bcb3269939",
".git/objects/62/86c2ef2af09014ad2626c1dcb3e6b71498ea5c": "64c684c32b505b8d460692be6e17c11d",
".git/objects/54/487e2d916dbfab782441f06dda1764e10a7c10": "cdcea71843a0dbaf56ceddbdd328462e",
".git/objects/6c/50f5a7530568ed70b9fdd6127352a0e68449b0": "78e008bbe4e91fc7da06c74321ad57f1",
".git/objects/99/84462f33c3c07f63bbeffe736c406ee2d5fc40": "46e0300c0c59fa0d5424c773219cffe0",
".git/objects/90/c4bac2cc08439627d46a78f24c1a3913edfbd5": "7aa9757d298cec4aa5cf926e90673735",
".git/objects/b8/085f22d662bb2b1a9edefeb232cb7496147696": "6ee64e20654c973219458227e1b0bd60",
".git/objects/dc/7ab5877baf4568495605dae53ab1c4f9ab074a": "bfeb1e6b153b0766c0b6ff74f991c97a",
".git/objects/d2/54cc96709b79ea6fd33d78bf73258f16cb11ce": "f7daebecae48c8e1e7d2950c3c40b42b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/430c6bc799519ef26f5785a997cb7450d654c5": "aa81e30b704a42f8b616caeca299a53f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/f049881647553d2f006f0c88c907fab9e9c531": "6fd5ad87e03b4bbd11a96dbcfa4b4008",
".git/objects/e1/b3e67d257393b9254faf1d57a42daf459f0e30": "53bd0ccc03d3d422b004143a9c1e5f5b",
".git/objects/fa/505a9919760ed2816dffbb627f313528ea48a5": "7e13b2e6bb54efbc2ff6acfd167b60be",
".git/objects/f6/2c09e2d4aaf4cc080b95e76710191afc252276": "ed3d2e40347a4833e43fc55c46b010ad",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/a575b92c8b01af86ca14b57babf550363e0598": "032f5200499920753cf238b7a0298d87",
".git/objects/2c/cbacd4d14ae7e3ae5987efefb39fbb73b1af33": "8b56b538b5da38caff88d3785e2f6707",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/d322fec8359ab8b599e81420fc4e3b1bfa5481": "cc1df2392fb01a5fbb39a6975696e1d4",
".git/objects/70/67b3a54e01b148648c6cabd3162194a0ae77ef": "66565c8dc6cd0bb136bf4686a4903281",
".git/objects/84/e2728ce95d1e66b45281b8456e0e2f78324c21": "48b3b1a0c17310f8ab4bb5d1df80ab00",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/8cb2e82905653822b058844465f9f812456242": "ba2f08c40423673b2e19afda0510bb2d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/9b5b2ec17f26ee164240defc8444ce540f0435": "b2181a2fe1562c729aae2e4ccc7d9d22",
".git/objects/25/7323eee508f9a7b08426c0bf0d0332a5d95af9": "b58f860fcb76cc87866545e06d0a9fee",
".git/objects/25/f60125d58e5cf56598c91567376c58d676eda4": "49f0614672b99ac3d41dc011286f0d4e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b46c7d256b2fa54f190fb68fc0f0d146",
".git/logs/refs/heads/main": "4d95768145f308e39e10f346fdf36975",
".git/logs/refs/remotes/origin/main": "a52931ddd8fc5a6b8bdd90998d93985c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3eb0fdd69f3ef0f212b3a361aedbb327",
".git/refs/remotes/origin/main": "3eb0fdd69f3ef0f212b3a361aedbb327",
".git/index": "f129ba3df4e3e691f15f046da03d84f2",
".git/COMMIT_EDITMSG": "0aaf701b24356c3f19ddfa0a7f77be9e",
".git/FETCH_HEAD": "878efd6cfe9a3267f58d5d4686e02dec",
"assets/AssetManifest.json": "3d9778906089072b95e1e926a4905ed8",
"assets/NOTICES": "edbf15beb45c7ed546f6ebd8e4e630fa",
"assets/FontManifest.json": "c273ff8ebb82c6dc493efa3cead32e58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/DancingScript.ttf": "a49cf406017aaf0eef1d4800794b4b15",
"assets/fonts/AbrilFatface.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/logo.png": "ca81fc24e0218823953f8dbdec8eb6d2",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

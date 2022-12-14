'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "61e6b70e48ec99f6e1d1fe25c79483ca",
"index.html": "b99982da6bc0e8132fe5a58f49e47757",
"/": "b99982da6bc0e8132fe5a58f49e47757",
"main.dart.js": "c1ef1562ee6e3391b7f09e16b247841d",
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
".git/objects/68/aa7fdf0234e58c8b7dde65200d1463743efc91": "3bc6c41fbf8986bcca2f0b0772c2a5f4",
".git/objects/56/1ca53b41ee5573d83314597ebedfab950e3f25": "453e2b3ba8cc3457a0a645b550a0d420",
".git/objects/51/aa41345a35b806b556c80957379759f68bce16": "e82dc045bf0e67f6b0f718ca53f5f2bf",
".git/objects/51/bcddc28021717ca2a3d046bdd3bb08e35e6152": "0b1e28b866e12a72721994b93b52933a",
".git/objects/5a/dd103785494a66872af8786c65f51d1a975ac9": "2e41cd6ef09dc6e45ebd67a9206f9d19",
".git/objects/9c/01621dfb9f88781454a486b736aa25203436f6": "3da1101ff9f61db42d435d9c3f42ada1",
".git/objects/d9/a32b876d69c6955b6cdf4aa5b0b34c96a2497e": "8b2d3f14f7ebbbbf4d27d55de44eff6d",
".git/objects/d0/9685850a92029aec4cbcd426f010f96155368c": "838f02a45e5969bd878e43028e29093a",
".git/objects/a2/19912682d26bde7a49901954ad9a6983a20c7f": "02de07f5584dffc7bbebc6527a536c4a",
".git/objects/a2/9171148564a37d4452f93e6b5f62e8ed9b5bc6": "8caff27a6094d1de6ea79bd55ea1f999",
".git/objects/bd/53be256e076e0adaa47af212df3bd1dcc3a3bf": "599dcff7ab1f26961d24e4d8d13be617",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/8974d1cd1c7d16cff6d35ae7008179eaf82c4b": "a3722125426999196f25bc1fb68215e1",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ac3299e716bfbb3d1f0ca1e4af39750b85319e": "9a48ae753c988918044aabb7ba960e5d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/05d8f45daa88a6ed14c8745c838358450ef522": "cce41aca7f99fac4e6d6523f9e9bad1d",
".git/objects/fc/a252a044b280e58a1f9c397f93da8ff09c0dc7": "4ea29f7309c187740dcbde13365787a2",
".git/objects/f2/e9850cf479ea9e4aa1696188a0d9411cd32b8e": "9f70096b286da0b9ab9c2d56f7986c73",
".git/objects/ec/f4cd2a3858837f4e4e777fd12f6a0b3a0ffa96": "a0e60fd1923e7d15c047a9124c359d16",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/2d59bb1b498c1b11022474414ce02f58658603": "68d5d9ee6a71789b5d3f6368846865eb",
".git/objects/27/12c1a0658206dec7309670f8613511ea1ec8ca": "bc7fe6f8320d9a9414a1c9078183a33e",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/45/c2b90c8ea5846a604da9351ff0130cf6812635": "fcb59ba26734593cfdc823e40a7046b1",
".git/objects/28/0f5949bc1758b6b57e34aeb8326dcfd980e3c9": "e04f1e96568536bef417b71c21b188f1",
".git/objects/28/5fd0bcdae3ae8aea4589f50f445f330b0698a9": "415530c9617d3d8ce79fb70d44727e2a",
".git/objects/7b/327c0598f6e691e52a2169f8f00759f773cb40": "1ca563fe194fe921040afafcae51ab4d",
".git/objects/8f/adef6cfd0343ceaf2a79854379216020fe7cc6": "88fd071c28b4c23f72cbe4b1b181dc08",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/3a673f19577f341c5aa3b876784418cb3e6dbd": "a04980cdab5757e2668c46cec535f3be",
".git/objects/43/a34c211fe102d6660a7e31697d48742862a959": "1ded5fd341660faa459e41aaf94e48d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3c582a68b8baa56c79d0ac055c1abb10c0140e": "44ad12e9e33b6546ac437134b7d95e6b",
".git/objects/9f/30602d0d0738cace260ff6bfb344751674bbf5": "0c0f4d5c5b612f026b1464e8452c123c",
".git/objects/36/87c5e04f6bc93dc69196eae74f5fc98be56a6e": "7d7a8a01b7e8b7eba7e291dcc2b07548",
".git/objects/5c/063c789437d7caf4c23a63571fc78141b7a6d2": "6ad292268368112b7fe46a1a6d3ac718",
".git/objects/5d/30bac0cdfebaf46874ba9159f8e2eaec3817d5": "68fac2e500c16347a7330549872fed1d",
".git/objects/91/47b9d3429ae0b77d7ae72c4308ca423b12f442": "50257c075ce69269c7888ae8eacb80e8",
".git/objects/91/8ba8bea66c10b8df5f951bc2c5e8880ac7659a": "f5faefd94d661cb58697e2bcb3269939",
".git/objects/62/86c2ef2af09014ad2626c1dcb3e6b71498ea5c": "64c684c32b505b8d460692be6e17c11d",
".git/objects/54/58be9dcb37aed498e7866b4c0e9caac0eee6c5": "a71d0771c66f4c6bb69500c7149ffb43",
".git/objects/54/487e2d916dbfab782441f06dda1764e10a7c10": "cdcea71843a0dbaf56ceddbdd328462e",
".git/objects/3f/e916c7af018e2bcdd9fd0516a602b8806f51f0": "8a7a4f09a9f9ac337031ccba7f66a402",
".git/objects/08/9812d0c59d28331920c1bc8939dad3c6139dc8": "304bbe240ada8ee5d38562c1362e32ac",
".git/objects/6d/5f60d5d36ae2b099a30d2149a82d01ba2541d2": "ce4f11ae0ee4b9c9086c470835e1cb98",
".git/objects/6c/50f5a7530568ed70b9fdd6127352a0e68449b0": "78e008bbe4e91fc7da06c74321ad57f1",
".git/objects/99/84462f33c3c07f63bbeffe736c406ee2d5fc40": "46e0300c0c59fa0d5424c773219cffe0",
".git/objects/90/c4bac2cc08439627d46a78f24c1a3913edfbd5": "7aa9757d298cec4aa5cf926e90673735",
".git/objects/b8/085f22d662bb2b1a9edefeb232cb7496147696": "6ee64e20654c973219458227e1b0bd60",
".git/objects/dd/b2732e56f33a51d6bdc83ec7bd9adb348d7a0f": "b599ad4810f2fc7dc5e285755cb24ab4",
".git/objects/dc/7ab5877baf4568495605dae53ab1c4f9ab074a": "bfeb1e6b153b0766c0b6ff74f991c97a",
".git/objects/d2/54cc96709b79ea6fd33d78bf73258f16cb11ce": "f7daebecae48c8e1e7d2950c3c40b42b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/690b30a2a89a2530df6ff04050ede34b752825": "9e862bc8b59d219a32b53ee301f673a8",
".git/objects/a8/430c6bc799519ef26f5785a997cb7450d654c5": "aa81e30b704a42f8b616caeca299a53f",
".git/objects/a8/15c845e163b055c34ff336f54a7b76ece1e37b": "2181de24a58a3efbdf49248aaef12161",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/f049881647553d2f006f0c88c907fab9e9c531": "6fd5ad87e03b4bbd11a96dbcfa4b4008",
".git/objects/ea/ddd87b6a175176d4f1e8146088c9f274520948": "f41a95deb9c231a9af619cde17bf5989",
".git/objects/e1/b3e67d257393b9254faf1d57a42daf459f0e30": "53bd0ccc03d3d422b004143a9c1e5f5b",
".git/objects/fa/505a9919760ed2816dffbb627f313528ea48a5": "7e13b2e6bb54efbc2ff6acfd167b60be",
".git/objects/f6/2c09e2d4aaf4cc080b95e76710191afc252276": "ed3d2e40347a4833e43fc55c46b010ad",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/81f001ac9e3be75cad9b327d927598c3ed4c2d": "7e1c4e610f70891abf61a343bac9b1c9",
".git/objects/e7/1a7fd604105dbb6d1837db2a925f8eb838a085": "5d17c6f55b0d7e5d70079f3e1745faa4",
".git/objects/e0/a575b92c8b01af86ca14b57babf550363e0598": "032f5200499920753cf238b7a0298d87",
".git/objects/2c/cbacd4d14ae7e3ae5987efefb39fbb73b1af33": "8b56b538b5da38caff88d3785e2f6707",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/25c8b7940086d8e2a8246ceb03c147b42fa9c7": "96cb8cb627ccf22af8c13378b8232e8d",
".git/objects/1b/d322fec8359ab8b599e81420fc4e3b1bfa5481": "cc1df2392fb01a5fbb39a6975696e1d4",
".git/objects/70/67b3a54e01b148648c6cabd3162194a0ae77ef": "66565c8dc6cd0bb136bf4686a4903281",
".git/objects/1e/54460b569dec799bb317dd0d4b52066e11f4c8": "14b0d737c02ee7885454416244d5cba2",
".git/objects/84/e2728ce95d1e66b45281b8456e0e2f78324c21": "48b3b1a0c17310f8ab4bb5d1df80ab00",
".git/objects/4a/8ef4bb6519438890a8e05a0f26d718ab60308d": "988788428d28c50ac442b95aad9a46f9",
".git/objects/4a/f71f7ff9bc498cf2c607e72609973d13d051f0": "3e81142ab12578727be03c298c039aa5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/8cb2e82905653822b058844465f9f812456242": "ba2f08c40423673b2e19afda0510bb2d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/d0ab7333f4d7b7fe344f2118180337244aaf57": "227709bba7f862e5559b924381600ef2",
".git/objects/40/9b5b2ec17f26ee164240defc8444ce540f0435": "b2181a2fe1562c729aae2e4ccc7d9d22",
".git/objects/25/7323eee508f9a7b08426c0bf0d0332a5d95af9": "b58f860fcb76cc87866545e06d0a9fee",
".git/objects/25/f60125d58e5cf56598c91567376c58d676eda4": "49f0614672b99ac3d41dc011286f0d4e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "f993b2cf7b8c18e9f7f256d4f06aa0c2",
".git/logs/refs/heads/main": "508e4c248596594b25b795e98894a22b",
".git/logs/refs/remotes/origin/main": "bf3e77272609ea589a0e95014ca5cde4",
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
".git/refs/heads/main": "ee8066a12123afde66ac95e8506281d4",
".git/refs/remotes/origin/main": "ee8066a12123afde66ac95e8506281d4",
".git/index": "e78cb3959412f1dc9792e9b49f75efb4",
".git/COMMIT_EDITMSG": "04d17b6afa7e0abe45adf8a7c22fd06a",
".git/FETCH_HEAD": "878efd6cfe9a3267f58d5d4686e02dec",
"assets/AssetManifest.json": "3d9778906089072b95e1e926a4905ed8",
"assets/NOTICES": "edbf15beb45c7ed546f6ebd8e4e630fa",
"assets/FontManifest.json": "c273ff8ebb82c6dc493efa3cead32e58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/DancingScript.ttf": "a49cf406017aaf0eef1d4800794b4b15",
"assets/fonts/AbrilFatface.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/logo.png": "416e5a0d504d2339d83d5282dff4822b",
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

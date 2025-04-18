'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c2d7d553a8ac3808f7b145fd2f579e8b",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "90a7429b82b48eed2ce4b22aa5d6ac2d",
"/": "90a7429b82b48eed2ce4b22aa5d6ac2d",
"main.dart.js": "58d5edbd2f5368b15a6256ccef2b3765",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "37763690ead13b15b7090e51c0519a4b",
".git/config": "6792d6b1e36109bf726442c37fd68568",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/5fdd5789f25941204b127356ff523edaffff64": "89139e52cbf3df6711bd710f8dfe4db4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/34/bbb475bf3edb610534eb3b3b559669ddd675df": "fe255ce549d2c0661289c2cc3f59ded6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b2/c6cd4019ebefa1bdbe1b1f333323ef0ef29cfa": "edc72f35e2ff88262ef90d69c8e961fd",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/df/da98c6104bad9f7d79857859fdc8ee6b6acb88": "57462734e98532034ddc5b2392e1be0f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/7f342784a5b67fbd7fc4a34f0fbf54b608c303": "71ab0d6257583ad40d49d429a8f4811e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/79e614b85cfc8dfba6513604319de6841ff035": "1461c8245a19281872867e91a089b339",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/9176feb39b4dbfdf320b3ca189b1738100f214": "94e13a83296057a88a439c53ebf4a350",
".git/objects/e4/b13c0cc691d1666391040395477d1e7038e7f1": "9dfd7e7abe7f72293ad1728462036d27",
".git/objects/e4/8aa9db12398f67226f896884928f4098d47cac": "35640ade32245862ce24a37084a2cacb",
".git/objects/c6/2e5cae1daffb536c404144bb65e7fa4aa2c64a": "2ae11a85eaecc391db012f45a89f1d0a",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/73/f24a4869bb2ae09807f0db1ef29222badb2da3": "30eb932ad45cc4118cb1cdbf5baef694",
".git/objects/87/7871c4ff86ba632b1d9006f3b2641268a68adf": "59b5904dabecfeaed9cdf03277515802",
".git/objects/80/967e51c3ee3bfb6f436e46ba94d0d9e54d77d3": "2cbef769217fa85691b2e2bd8bacf7c0",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/70f553fdaf25ea8eb7942ab0535a6df01387b8": "8e6f55545dfff095a5cfcf64877e76c3",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/72/02d795fd657ea3adca14b4feb4b9217963cc8c": "5e9e6fec0b5c4b8d87e70c31583ced1f",
".git/objects/2a/99865c2bd8325c599d4d49133a78e1391b66e4": "1c4e4c16b7f926df98a0332eda0d90fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/34d654dcd1aa7a4d268f528d5e40397bce88cf": "de7846a2064648fd6f582755763e50eb",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/78375bfd470bb6d5f9f0f57e33ee809123b264": "60224f233a3a141bddf7a691d4a12367",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5b/6d65052044bbfc78282595d93011b6bf006bd2": "d421c9b1514327ad28c7176bfc0b46fa",
".git/objects/01/b2b56f63f458c8eb8e8c4b9e2bcda1fee483f7": "b3248741f1934c42aec0adb5b5f68caa",
".git/objects/06/167a1d49fae641a3aed3db72da93e157f1a007": "d744085a118b27de209aa361bbb54075",
".git/objects/39/4b851a1147917fbf3a26743682a204ae50e500": "5e56bbb5df421ca53067091138085d39",
".git/objects/97/55a6e3882900b400dba39fea75ef8ba8248159": "4ef092898993de13fac297e45ddc6ff9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/584e554e898647c61c44c6a6c82306cd86d634": "6d5eac85247073574dfc467346a0b026",
".git/objects/a7/8b25befd090b68d75bac1e2de9b32075fb5d06": "bc72788aa7c975fb541787e932f719d8",
".git/objects/b8/4ebc84161f7e6a664deeafeaa74b16f3246d32": "bb44186e40d865f7622bcd9067c8652d",
".git/objects/dd/924586f8d12c0678dc96bebf488ce3efaaf083": "9a2da83f975d16e6f6af63da374cca69",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/aa/2aadcbaac5f8257d3dafb84f433892a2ae523b": "8d8754d8d550197c9ebb4290db4cc94a",
".git/objects/af/34de055d1b2a59a1a55b9fd7f3b025aa2fdb3c": "2e15398d776396ee94f2b12f5ced51e2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/619a2744086aa9ae3efe66992a3bc4fd7753ec": "e168fb45e6473479eecc5a9eed3378e3",
".git/objects/b9/dd8ec9a8c22b97bf053ac94dccd160deb88e65": "cca5487d50648603aa1711c915c28d15",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/d0ce6ca35d84e24f659ec89ce5f005b1692998": "76ff36e65bb343e1c3e23f270330a2f6",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e1/4a7942f77200884e7c247fb478d46f23c3c447": "997ad09151f18bf121c34bcdd17d75eb",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/2da85865a52447242097c4fad583cc143f16a2": "035a4fe69104b01648df67aa20161a29",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/c387744f661487e23b8973416a83c8624fc3f6": "62120e866fceecd0a5efa6b4e0646378",
".git/objects/4a/5d84e6d35bb3879aceaf967be5094630cf385d": "af3f18ae6f9e772005a1415fabc64474",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/b3959a40d3d7edfbe0b7f10b68c22503bca9ed": "d6e8984b776e4cb41a46636c4c73a856",
".git/objects/12/d111337f52b667b01eb17807bf731ce0f97b57": "6bb1834def4166d439c30bd561d916be",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/be68ff68d3c3d43a614586cf1721dddfaac8c5": "e8f5fc702122f7191ec40f5155465b20",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a65d620a9e84dba746d8a139a22872b",
".git/logs/refs/heads/main": "78aa024f2c890d3a2824952b268099bc",
".git/logs/refs/remotes/origin/main": "a9eb0bd40cdabafe64fb0f88aa478978",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "07cec3490a2891495c433727e5e69078",
".git/refs/remotes/origin/main": "07cec3490a2891495c433727e5e69078",
".git/index": "52a4d8f9496709d58687cc2cc0000057",
".git/COMMIT_EDITMSG": "af6f7096732e868352517e17c56244dd",
"assets/images/contact.jpg": "c02e447d96a05f41e2223b012371ee42",
"assets/images/bg1.jpg": "4ea3b3a2022407bcbbccff5d6cfd32d5",
"assets/images/profile.jpg": "ad515a7e513d9443a0d1a5fa9cddbd36",
"assets/images/portfolio/myclasscampus.png": "5179452338e63ce8502e9aa3c5639242",
"assets/images/portfolio/boon.png": "5866d74b930a34ce57450c06276b31ef",
"assets/images/portfolio/pocket-study.png": "35b0b6fc3772792b43a0d60b7d6fb23c",
"assets/images/portfolio/giiv.png": "272ab08c9af4435d822025a875071ed1",
"assets/images/portfolio/vault.png": "5922d0bdbf5afead9a2ee8bd392a1e2c",
"assets/images/portfolio/bidsquare.png": "a32f72c09f443dac6080621bce2c07ed",
"assets/images/portfolio/bohra-connect.png": "5f5c14228eee1b48de33b907d0222577",
"assets/images/portfolio/itacho.png": "e172881879f2c35a66552b6855ffb5a8",
"assets/images/bg.jpg": "29867c103b95b1d1d8baf21b3e21feb8",
"assets/AssetManifest.json": "55af92f7cfbc45bc4d7489d930e7e085",
"assets/NOTICES": "fb1f1dd3f45d1e2f5b12917a72b909bc",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "995ecaf393cfc8ca972a72ceb019d528",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f796fa1c5316eb21f5db28fccc78288e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

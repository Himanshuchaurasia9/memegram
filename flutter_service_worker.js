'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d1e474f78ce09b27943f395fc579536b",
".git/config": "2ec0ec2705923b44cf012e273a2ef4b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d0d211108bbb2d9207297d0268828a77",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f1f1432e9c96a6bce17f663d30cdcc1",
".git/logs/refs/heads/gh-pages": "c0d9ef3b7f79484378b6bfb4d832b4b8",
".git/logs/refs/remotes/origin/gh-pages": "c24dc3a387f7a823d46d3a2ad6adf519",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/4adac430b706a457b177b813465d79554863fd": "35b50afb04fad0b0acf01a7038625b52",
".git/objects/29/8b4da3b15419141dbb9cd8ab6d451f5135752d": "70c11f527d5f322aba5244eed160f219",
".git/objects/32/d3c5e9f8cc3010363d0a075058e488e66254bb": "726eec5c081694eb7418585923295646",
".git/objects/3a/3faa8c92733ee724534e2ac6d955ceb707b10a": "9ed5823b4d3da448a03e8b9c31b63e56",
".git/objects/3a/66fff22efebddc3887169b4f73bd253b454936": "29776ac5423aa589010eb6eaadcbaf30",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/43/ed4f5ee6cb01173b448af26edb9d7459f9d365": "f186d42343e916c98435cd538a94e1b8",
".git/objects/4d/fa4c64131a1f7b67c0444afb0abb4070efd06b": "a397213083e41c525014064b208c6695",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/858e7613b75c33028cd504c68ed7364788d357": "922906c6b504a3a10e5947e1c8ac64f0",
".git/objects/58/da1e38cf5b003651ded9dabf97e406a04959f7": "5443a76b7f646d160a6ea1c3d2d858f3",
".git/objects/63/3f68e745495a7f4b0bee917c841181f27a986b": "3fc9a8efb63b90f12c178f254a056eb0",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6c/d33985c2e8ff0390600cd95c766ca8d0a45511": "34e063369fe636aa0fe8b6abbbbfa373",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/1e472ed79e667896d867506f6ee61b5b47c777": "d00860993670862712a659cd71cd7c20",
".git/objects/78/2e940d2a79351fff3bb05660f1d4e0475b1fc9": "564dbeb48632a6b4a5f1669c3c528ea5",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8b/85669e3d48d2a151d8d44f045bf6badff42ef3": "74a2ad589baf91f5f2de44b2ec79228b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/1ca8cca190da5a8f5c8e1fea53c2f2f3f6b062": "16a1fe94bcda3509d4aa5eb23746dce4",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/2777267ea76f31e5f8516eb7bf5f4584d1657a": "85f20ff4a5c06b7914e87241f2b64194",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/17fbc92b62b925a6f7264f7850c647903b95a3": "24644e508f0bee6d55dbac4778da42ea",
".git/objects/b7/da5e204e96229c5b621184603b77bd15b9538a": "9100c6ac52b6c43a1f08b35619e2fd55",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/ed9a988dff46ce0786c1f6a8aebf3544de6769": "008f020b57fb0f47b117a22895d71aec",
".git/objects/c2/e4c5877c64e13f56c8968ddcaa1796ecbbfcaa": "8ad88d449ef3690c4c50f68549e7534b",
".git/objects/c4/8d21d7f217a42b06436a745407e85dceed58f4": "eed78806d05b9f6f4f234c681ecf5adb",
".git/objects/c6/d0dee61adabe0dfb433ebd1927f11db4ad6328": "7b87ec6a9fba4ac84a54c8fcbeea462a",
".git/objects/c7/548bcc0c7c8c5cf8417583ee8736cdc1147ba1": "e8fc9b5c37e8f9ea4e71a8fbfd2d8cd9",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/80f82081205d6a944637bb04be960b71e09bb7": "1a8a6ffe8c362b0c9811d785c7c81e51",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/ff005be9f0258e4afd075af368ed5a5af712f0": "ea40edb5098bdd5204c76effb6a25592",
".git/objects/dc/e95c129dca31686c4eb35f6645722bd7ef80b4": "e8544bd95caf4a33e078eeb279a29ea6",
".git/objects/dd/dc4e0ad877d5e564ae72099241cfc9b718d37c": "65767b4f123ad2e0ebe3feaa86465a70",
".git/objects/e1/64a1b97cc3f26fa6e18841fd36efcd64b13bb3": "ba6e46e46854fac656f8d0cd322131f5",
".git/objects/e1/fb3cc6097a2142eddde926fc530b1d43d89e7b": "22b5fc645570d1bb23a80266082da11f",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/e4/86fcd398373082e4e7e69f25e9593841f96838": "fe3096e13273b7286eab4236872978b8",
".git/objects/e6/07d7bf0f06776ad3e6edb977c8aec9eae8a0b7": "61f74259c79c7df72c2ed9a0b9317681",
".git/objects/e6/9e6fe8f2ca8fc9231a198fc3dcbcbc7f17ead6": "f01975ad129fe7c5e3b52a9c5f48a033",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/fd1dd3322af2feea5fc1eb564a234f6e00a209": "2f3ed43f7e2ba63de4ff31dd2ee24a54",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/317c4504f21f3b833028dde7c67c1d30fb585c": "61fc29de27c25988a52710aba0a479e8",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/6e5a8679156de899cc9606cd856a633bd530ff": "f84e1cad3e80857f8cd693e281c21983",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/gh-pages": "46d013b8420aa5f765440fe68e2d1adf",
".git/refs/remotes/origin/gh-pages": "46d013b8420aa5f765440fe68e2d1adf",
"assets/AssetManifest.bin": "daef4afcaab9a277163acb11775498a6",
"assets/AssetManifest.bin.json": "61c9836125b50ff4b1314bf205f6d8da",
"assets/assets/fonts/Fredoka.ttf": "8518c55ab778335b9cf5e40bf8896265",
"assets/assets/fonts/Inter-Italic.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/fonts/Inter.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/logo.png": "443068383af2310983ce9974de2c1d98",
"assets/FontManifest.json": "427ffbc96d3efd1f824dd133cd4caefa",
"assets/fonts/MaterialIcons-Regular.otf": "78bdbb11888b03423dd2d85064647a54",
"assets/NOTICES": "91fe7a23fbe868831d130edea4e61bfb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "caca51ba11f4edfad90d6dc47b8a739f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "7a2c9b1c5d1dca8e8ef7c7e97469e7cf",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8fd1f75adad91291e4e46dea76be55d2",
"icons/Icon-192.png": "6413cbeb39e5fd5a103bb8eeef1e598a",
"icons/Icon-512.png": "0694114f9cc8e182e709122097e0da1f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1870cb36693f7aa5f819f2ad17e3a595",
"/": "1870cb36693f7aa5f819f2ad17e3a595",
"main.dart.js": "41f8b1d916fde25cdfd7b1e64aa1ac4e",
"manifest.json": "e640005400ae785a725272805a6990ae",
"version.json": "30b0c0ef10146a04ef2ec0c995128c7e"};
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

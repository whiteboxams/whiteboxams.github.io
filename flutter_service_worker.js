'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a69dbde8cbe984fa3ff21bd9ccb46912",
"assets/AssetManifest.bin.json": "1f57dc1cb423b0c54ae37fa70ce1f25f",
"assets/AssetManifest.json": "252d6d91b5efec3a5fd32580aaac6a60",
"assets/assets/images/active3.png": "47cf01b20cd9895cb7663e4a1b9abea1",
"assets/assets/images/active4.png": "42d0ed08086f9e0c8773ba2dce856122",
"assets/assets/images/ActiveSub.png": "356a88f129cde7667632b360b57a790b",
"assets/assets/images/addDepartment.png": "78d0e77763ee9aa1a152c5752da97796",
"assets/assets/images/addEmployee.png": "23bdbd6f8e5987b275248abf7ff889a2",
"assets/assets/images/alert.png": "c8bbdb09bd0c6fcddcf0397c23280de8",
"assets/assets/images/apply.png": "d90031c21b28d6923dcdd8a48ce6b1ac",
"assets/assets/images/app_icon.png": "ce584cf9ba70fa8a461628d4177be1f1",
"assets/assets/images/Arrow.png": "ab25712f090745e0204e6bd6557b656b",
"assets/assets/images/attendance.png": "183baebae234062a3b80831f4b9e9823",
"assets/assets/images/background_image_login_container.png": "efa0d97c0d501eae939e887bfa6c6d5f",
"assets/assets/images/bell.png": "00433709cf4cf4ca393142a0674b685f",
"assets/assets/images/boy.gif": "917919e48a73cefaace6ac4dfe31e703",
"assets/assets/images/boy.png": "316d54f93cf435f4c704b4d471ddf7b4",
"assets/assets/images/boyStanding.png": "0ca0af968bc11147520c2c3908facf6e",
"assets/assets/images/boyStanding1.png": "e4d88cef2a1c5433ab359faad8ed8478",
"assets/assets/images/boyStanding2.png": "f84e15750dab187f238a50a861d22693",
"assets/assets/images/boyStanding3.png": "63d53128b235edc14c373f5222136147",
"assets/assets/images/boyStanding4.png": "a2425eacbb2c8063ccb475a420eff11b",
"assets/assets/images/boy_2.gif": "d564e6b8aa64f6e7a7bc9550f4799160",
"assets/assets/images/boy_splash_screen.png": "8af4dc2cb08716a63129a039a0dbc2e9",
"assets/assets/images/cleanBgBoy.gif": "322358e43720a0c06bbd6ee96a94c2e1",
"assets/assets/images/clock.png": "51ac5564f47d92877fcd827fe8d427ab",
"assets/assets/images/clock2.png": "ecb7a4992bb09d8f8e0e074cefbade93",
"assets/assets/images/company_profile.png": "acc1d7b6d9eb0030264151eaefffbbd1",
"assets/assets/images/company_profile_360.png": "9e1940ed050bedd6f043aa19758b2dca",
"assets/assets/images/complete_bg.png": "4b826fd1f9db3b5a63e586040667395e",
"assets/assets/images/deactivate.png": "629a293555406308ac179e7a00fe829a",
"assets/assets/images/edit-line.png": "54ba0ac0ab8e7fb09d1934ae80a99c83",
"assets/assets/images/Favicon.png": "67ff4a70d73a722c9746f66d8a224109",
"assets/assets/images/gif_boy.gif": "da1372729833aead1b1c17a6a6a1477a",
"assets/assets/images/Group.png": "39f512afab8c49896cfa1a8a22da8752",
"assets/assets/images/hand.png": "d03e336b5e9b741f4e1b86ee12d5cdc4",
"assets/assets/images/Home.png": "f2b04cc6e140c61462c7f6c225f9ab1d",
"assets/assets/images/homeSelected.png": "3b0eea4a65ccbe04949f79c0485c9214",
"assets/assets/images/lock.png": "c23ebd8b8fb4fbb85d55f688850e9c0e",
"assets/assets/images/login_bg.png": "8ff30bd743043d3ab1f3ad4aff0aba2f",
"assets/assets/images/logout.png": "d7fdac19ce5bc59137970d80ae1490d6",
"assets/assets/images/manage_admin.png": "5c9996d0348dc9e2f00b60c5e61fa05d",
"assets/assets/images/manage_admin_360.png": "5b9c55f02f0a93c94c7fc48eba7887ab",
"assets/assets/images/markAttendance.png": "f41ab527ee35d1e5cbb77295bd245bd3",
"assets/assets/images/menu_icon.png": "b53c74417401a83fa08d0ecfe7edc349",
"assets/assets/images/message.png": "94b36a0daaf3b8384e8780f896f10cc0",
"assets/assets/images/noUser.png": "f59d9f0aed062977019eeca42f6b7a7d",
"assets/assets/images/no_work.png": "9e2747bfe70fa170e59ee58f14e45766",
"assets/assets/images/only_boy.gif": "9b284b7a5c0e7aaf8d3284112ecb9305",
"assets/assets/images/phone.png": "de3e05cb218c23d79303bab0c2a58b18",
"assets/assets/images/profilee.png": "6f236b63a9491024d029cf1afa450e2a",
"assets/assets/images/selectedApply.png": "028de3604007690df83f8cec78726a8c",
"assets/assets/images/selectedAttendance.png": "bf2b0f472b67c53856397872cfdc32ff",
"assets/assets/images/selectedProfile.png": "3ce6e4d7e5430f71f8bdcdcc3bc71c9e",
"assets/assets/images/snack1.png": "9916c1bc0210d3c378e7db08bb91a40b",
"assets/assets/images/Subtract.png": "8c67e12af2a2e07be8b5236a57919814",
"assets/assets/images/Vector.png": "ecb7a4992bb09d8f8e0e074cefbade93",
"assets/assets/images/WB%2520AMS%2520(1).png": "e30530e1651df704979c4f2f768f6dd4",
"assets/assets/images/wb_logo.png": "3503a7c55f6643cfcabb55f71c18ad16",
"assets/FontManifest.json": "97cde5cc5dc002aa4ddc8577cca0e5e0",
"assets/fonts/MaterialIcons-Regular.otf": "ab2d9801f36925722a1672ba2f5da399",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "5ae051f3f0f5985603857d985485cf56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a66aa9a626b28f08840cceaaa98fb340",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/favicon.png": "a66aa9a626b28f08840cceaaa98fb340",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "323e326953043286bbe86177a60e8c61",
"/": "323e326953043286bbe86177a60e8c61",
"main.dart.js": "e70730e14588fea94bb87b064c49c5ed",
"manifest.json": "1714279b962025c04f7947780cbb2218",
"version.json": "b8954a69a90cf460ec8d3922a9c4f804"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

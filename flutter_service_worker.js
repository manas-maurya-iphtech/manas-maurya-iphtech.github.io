'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "092fbd105cb15637b2e990629e8b3d23",
"index.html": "26db5253bb68635008b52e2f036c9590",
"/": "26db5253bb68635008b52e2f036c9590",
"main.dart.js": "436e0f9076e00b7cc19e53e4ba999c69",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15a0cdeff4dd5712b90289f7c05a18ca",
"assets/AssetManifest.json": "5092c8e3b7acd42859e02b1f5fc0d46a",
"assets/NOTICES": "d831f74966e93951e2bd4fe4d419fecb",
"assets/FontManifest.json": "a7f565d7dff6202585327f2acd546eb8",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/happy.png": "31792419341af2c09e67d4f7db1cf523",
"assets/assets/images/surprised.png": "d4bda0e6a8109237a776e2e478ab4840",
"assets/assets/images/excited.png": "42fd474206a5a34c8eea9f3eeda98dd1",
"assets/assets/images/fine.png": "f5ca93a7becff434e561213bb6ae1fe5",
"assets/assets/images/ill.png": "2f089d9b81a258bedba0cf129a12cae1",
"assets/assets/images/angry.png": "f67a68af957d235f83c818f3916e4bee",
"assets/assets/images/progressShadow.png": "e1ecd8b113dbf56d4e21005f806c7083",
"assets/assets/images/logo.png": "0f095bc165b799ce4e865bd5358e57cb",
"assets/assets/images/woman.jpeg": "9564c98f409202a506b21ee8dfc1740d",
"assets/assets/images/profile.jpeg": "3ce9c57df5bad82d0739306d3491a7be",
"assets/assets/images/nothappy.png": "0bc07e379fb69e863c71ccfad1aca5ea",
"assets/assets/images/tired.png": "629cd5cb5848954d097eeeeb8fa8b5f9",
"assets/assets/images/sick.png": "9c205b2e0736a5600e5b3b2e757cff98",
"assets/assets/images/notification.png": "90655ea1dfd4a7514d7252a99867ecd7",
"assets/assets/images/boy.png": "693b7a22cb75840986c91b8dd337d021",
"assets/assets/jsonFile/view_device.json": "7252ae5267f3905bf8e7389c0a6b8a08",
"assets/assets/jsonFile/time_sheets.json": "27f0e0f89abf708b6b02d9699acdffa9",
"assets/assets/jsonFile/employee_report.json": "e361be59ef74c03ed58e54af71c8987c",
"assets/assets/jsonFile/assetslist.json": "461957615eef8dd13383a8a0dac82749",
"assets/assets/jsonFile/leave_employee.json": "ad5a6d021209bbfe81c305cf93d1d10f",
"assets/assets/jsonFile/employee_salary.json": "e42263de7fa16cfd5d853811750ec311",
"assets/assets/jsonFile/holidaylist.json": "5308d635bbd5c28c1ee415c128358ed6",
"assets/assets/icons/unauthorized-person.png": "d0f21583fa1794a2419211530088fb43",
"assets/assets/icons/internet.png": "239b32af21961c136fca8e9a8ffacbab",
"assets/assets/icons/businessman.png": "3a33c20be9eb816beb824240213b1aa1",
"assets/assets/icons/download.png": "33ca9d3e897ad0f99cd2731d4d71db55",
"assets/assets/icons/approve.png": "0c5a1fa8919d4d3375429a7ae556dd9a",
"assets/assets/icons/hr-manager.png": "1cdabb6bc2afe6cd878640da7685cb16",
"assets/assets/icons/mac-mini.png": "14b6c7923c94ef1dd7cb9b4bdde06578",
"assets/assets/icons/android.png": "605df6a2ed46903d1c3277fb656202d1",
"assets/assets/icons/person.png": "c79dbf3b7999756949f46d87b1667be3",
"assets/assets/icons/human-resources.png": "0e552e36969e0e03df8b777e45c23814",
"assets/assets/icons/task.png": "27b91717448c9afda5f6577ab97f5f8b",
"assets/assets/icons/technology.png": "503494c441ac68e4fa41d268c6f3d3b7",
"assets/assets/icons/cable.png": "ddb1990ad34228dfa7c44141c9f71f7a",
"assets/assets/icons/mouse.png": "afabb88538a96ce08f50ac5dbaa6c681",
"assets/assets/icons/man.png": "1b2f3b14241d7b6f4768adb4fae5ddbf",
"assets/assets/icons/iphone.png": "3d3a02c43561cb6f9a7c0343b4e37974",
"assets/assets/icons/tablet.png": "f47be66765032c3f2f0d596b90783faa",
"assets/assets/icons/employee.png": "5e33da9bd2b79b2594b99e46346a02b9",
"assets/assets/icons/manager.png": "240006f42f8fd73d3e1afedb5ee2a26e",
"assets/assets/icons/macbook.png": "1ae7c6f71ff22024f5d992cda3577831",
"assets/assets/icons/macbook%2520(1).png": "1a1644088b3c713f88a5ce1281d3f8dd",
"assets/assets/icons/ipad.png": "d55ddfeb96aaaa66b6c5bbbbc598ffcf",
"assets/assets/icons/message.png": "fa50cf944c334f864e41749192e1c82f",
"assets/assets/icons/close.png": "78e8f77d3427a56038c3a9f9b6223847",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

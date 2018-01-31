"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/bc-induction-website/index.html","4fd3e791346a8c77cacd30264e33fc1a"],["/bc-induction-website/static/css/main.684d4067.css","aee01f93caa50a9577a0ca55fe8247ac"],["/bc-induction-website/static/js/main.7da62bd2.js","e177a4a9db7daea8a0d99ba0328a747f"],["/bc-induction-website/static/media/BCP_PPR4_201.2cdec656.jpg","2cdec6563941f40e64870bb82afbf38a"],["/bc-induction-website/static/media/BC_152_4.6e79c8b0.jpg","6e79c8b06e5b7134b248ec5ea2d9122b"],["/bc-induction-website/static/media/BC_47.1579c065.jpg","1579c065dde3c24c4f74c96eedac22d2"],["/bc-induction-website/static/media/China_00002.5b8a564f.jpg","5b8a564f439c92481899a56a8e903c25"],["/bc-induction-website/static/media/Dubai_00639.3957df5d.jpg","3957df5d53e74b21021cdfc1e53fac51"],["/bc-induction-website/static/media/Ghana_00605.9b9191a5.jpg","9b9191a5cbd9e7fa08e55ac7d880dee9"],["/bc-induction-website/static/media/Ghana_00757.4a9d4c5d.jpg","4a9d4c5dcb8835c14b05c194d69c0ddc"],["/bc-induction-website/static/media/Hong_Kong_00016.7aa86f7c.jpg","7aa86f7c80c35d04c22aff8badb1cd27"],["/bc-induction-website/static/media/India_00984.4c855861.jpg","4c855861a577924bb92e802d4e9acda5"],["/bc-induction-website/static/media/Kenya_00809.5ed3a373.jpg","5ed3a373c3f1465710e78662d5d1930b"],["/bc-induction-website/static/media/London_00051.f2f3cfd4.jpg","f2f3cfd4c855f695d06c794566115223"],["/bc-induction-website/static/media/Mexico_00048.24d369d9.jpg","24d369d907f0f4131ad74af303fe8075"],["/bc-induction-website/static/media/PL_BC_116.3559fafe.jpg","3559fafe087d6dbbd8fb6fea306b18c3"],["/bc-induction-website/static/media/PL_BC_157.0438ef4b.jpg","0438ef4b4e8b1c0ba3ef486c30e34b22"],["/bc-induction-website/static/media/PL_BC_71.ad5d16ff.jpg","ad5d16fff3168b9bb224a11219f02adc"],["/bc-induction-website/static/media/Portugal_00005.988bb2b4.jpg","988bb2b4a6c3a345368e147248a9a5a7"],["/bc-induction-website/static/media/Spain_01373.3d163fee.jpg","3d163feea90ecaa2ae94b294126cbf86"],["/bc-induction-website/static/media/Spain_02178.2a2f005e.jpg","2a2f005e232120ea67851f307c03b6f7"],["/bc-induction-website/static/media/Stepping_Stone_00145.0208f047.jpg","0208f0470199e7a908d49ce1b19f51e9"],["/bc-induction-website/static/media/UCL_00553.30cc0e79.jpg","30cc0e7966e59641347234b6bb68e302"],["/bc-induction-website/static/media/UCL_188_.be715222.jpg","be71522240361fbb4ea068af5bc0e9ff"],["/bc-induction-website/static/media/UCL_218_.94c7c417.jpg","94c7c41740047a8e61542d84dba9d6a9"],["/bc-induction-website/static/media/Vietnam_01353.44e9e9dd.jpg","44e9e9ddf4b89f2ef5704a6320191019"],["/bc-induction-website/static/media/aqila.52618ac8.png","52618ac8308b6de1fc676793a4162d0b"],["/bc-induction-website/static/media/artsAmerica.bddb10d9.png","bddb10d9d2756f1f7f6fbc70c3bfd65f"],["/bc-induction-website/static/media/artsEAsia.7157b653.png","7157b65339fc861b28ae2163f69c46f2"],["/bc-induction-website/static/media/artsSAsia.089b776b.png","089b776b705ba7fba8a9de05586f464e"],["/bc-induction-website/static/media/artsUK.b6cf37a6.png","b6cf37a64b03d5ccdc1560407a8b1798"],["/bc-induction-website/static/media/artsWEurope.3c88e42f.png","3c88e42fcde265d1f8ddacc9c2eec237"],["/bc-induction-website/static/media/blind.8aa4ef91.jpg","8aa4ef918f8dd826b13cbec0f1e1bf93"],["/bc-induction-website/static/media/chris.981f367a.png","981f367a89df7bf8089e5b177c63b100"],["/bc-induction-website/static/media/classroom.afe1da21.jpg","afe1da21afea520cee8a35b8a61fce5e"],["/bc-induction-website/static/media/emma.911bd7fe.jpg","911bd7fece563aa8c5a6f987a8e0c8e0"],["/bc-induction-website/static/media/ghana.fcd13ee6.jpg","fcd13ee6b2988c6cccd04ddc9db3a2b6"],["/bc-induction-website/static/media/glass.99e7d518.jpg","99e7d518fdf97b8bbf9a7a60b4b00b87"],["/bc-induction-website/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/bc-induction-website/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/bc-induction-website/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/bc-induction-website/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/bc-induction-website/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/bc-induction-website/static/media/hair-salon.5eaca7a7.png","5eaca7a7e40ed78d3a926ebbc8ace046"],["/bc-induction-website/static/media/history-landing-page.329b08a1.jpg","329b08a1053c2d474b722462bbb62d09"],["/bc-induction-website/static/media/kristen.7d781fb9.png","7d781fb991ff841a35db90170d60087c"],["/bc-induction-website/static/media/logo-white.a3e958cc.png","a3e958cccf1a31e55f51e39c93f7117e"],["/bc-induction-website/static/media/modern_bc.367c3365.jpg","367c336588752ecc80ac709c54d3d9bf"],["/bc-induction-website/static/media/mutual.b9bcf9a3.jpg","b9bcf9a3591ab43fddedbce5a2f636ec"],["/bc-induction-website/static/media/nancy.d1d4d5ae.jpg","d1d4d5aef198ad9bb64165ba0fab53a1"],["/bc-induction-website/static/media/rebecca.fd1a37b6.png","fd1a37b6a8f9ffc291e456006c2e4917"],["/bc-induction-website/static/media/smile.cfc4905a.jpg","cfc4905a3e77f85e6e02b53dab5ee5d7"],["/bc-induction-website/static/media/suits.de79b6d8.jpg","de79b6d88ceebfaddc47e0621cf0a8f5"],["/bc-induction-website/static/media/syria.fda37b65.png","fda37b65e2aad9131efd3f4416d38271"],["/bc-induction-website/static/media/tassel.70d1a4ad.jpg","70d1a4ad1dbf4d556c7b053124fd0f23"],["/bc-induction-website/static/media/team.da5821b2.jpg","da5821b2f50f0cfde47c0b692f180cc1"],["/bc-induction-website/static/media/token.a43e160c.jpg","a43e160c0fe4dbf6c3956220461dcc98"],["/bc-induction-website/static/media/write.2e938a77.jpg","2e938a7731ef5f41ce416fd8373abca6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/bc-induction-website/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
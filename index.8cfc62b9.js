// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _calendarJs = require("./modules/calendar.js");
var _calendarJsDefault = parcelHelpers.interopDefault(_calendarJs);
var _confirmJs = require("./modules/confirm.js");
var _confirmJsDefault = parcelHelpers.interopDefault(_confirmJs);
var _formJs = require("./modules/form.js");
var _formJsDefault = parcelHelpers.interopDefault(_formJs);
var _holidaysJs = require("./modules/holidays.js");
var _holidaysJsDefault = parcelHelpers.interopDefault(_holidaysJs);
var _notificationJs = require("./modules/notification.js");
var _notificationJsDefault = parcelHelpers.interopDefault(_notificationJs);
var _slider = require("./modules/slider");
var _spinnerJs = require("./modules/spinner.js");
var _swipeJs = require("./modules/swipe.js");
var _swipeJsDefault = parcelHelpers.interopDefault(_swipeJs);
var _toastJs = require("./modules/toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
let questions, services, responses, serviceType, serviceList, questionType, questionList, responseList, responseType, quotations = [], holidays = null, obj = null;
const renderCalendar = (target)=>{
    const calendarCallBack = (date)=>{
        const [input, span] = target.querySelectorAll("input, span");
        input.value = new Date(date);
        span.innerText = new Date(date).toDateString();
    };
    (0, _calendarJsDefault.default)(calendarCallBack, holidays);
};
const adjustHeight = ()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", ()=>{
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
};
const init = ()=>{
    /**
   * CALLBACKS
   */ const callbackService = (input)=>{
        const confirmBook = (input)=>{
            const index = findQuotation("type", 0);
            // IF BOOKMARKED, CHECK IF THERE ARE "OUR SERVICE" ALREADY BOOKMARKED
            if (index !== -1) {
                (0, _confirmJsDefault.default)({
                    title: "Main Service found",
                    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt reprehenderit sapiente quo cumque at natus laboriosam cupiditate, sint provident doloremque molestiae, repudiandae itaque culpa commodi necessitatibus quae. Nesciunt, tempore.",
                    onok: ()=>{
                        const unbook = quotations.splice(index, 1);
                        //FIND THE SLIDE OF THE CONNECTED "OUR SERVICES". INDEX IS ALSO THE SLIDE NUMBER
                        toggleInputs(parseInt(input.dataset.service), !input.checked);
                        // DISABLE OTHER INPUTS IN PREVIOUS SLIDE
                        toggleInputs(unbook[0].service, true);
                        unbookServices(unbook[0].service);
                        addService(input);
                    },
                    oncancel: ()=>{
                        input.checked = !input.checked;
                    }
                });
                return;
            }
            // CHECK IF OTHER SERVICE IS CHECKED PRIOR TO CHECKING OF MAIN SERVICE
            const otherIndex = findQuotation("type", 1);
            if (otherIndex !== -1) {
                (0, _confirmJsDefault.default)({
                    title: "Other found",
                    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt reprehenderit sapiente quo cumque at natus laboriosam cupiditate, sint provident doloremque molestiae, repudiandae itaque culpa commodi necessitatibus quae. Nesciunt, tempore.",
                    onok: ()=>{
                        toggleInputs(parseInt(input.dataset.service), !input.checked);
                        addOthers(parseInt(input.dataset.service));
                        addService(input);
                    },
                    oncancel: ()=>{
                        input.checked = !input.checked;
                    }
                });
                return;
            }
            toggleInputs(parseInt(input.dataset.service), !input.checked);
            addService(input);
        };
        const confirmOther = (input)=>{
            const index = findQuotation("type", 0);
            // IF BOOKMARKED, CHECK IF THERE ARE "OUR SERVICE" ALREADY BOOKMARKED
            if (index !== -1) {
                (0, _confirmJsDefault.default)({
                    title: "Add other to main",
                    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt reprehenderit sapiente quo cumque at natus laboriosam cupiditate, sint provident doloremque molestiae, repudiandae itaque culpa commodi necessitatibus quae. Nesciunt, tempore.",
                    onok: ()=>{
                        toggleOther(quotations[index].service, parseInt(input.dataset.service), input.checked);
                        if (input.checked) addService(input);
                        else removeService("service", parseInt(input.dataset.service));
                    },
                    oncancel: ()=>{
                        input.checked = !input.checked;
                    }
                });
                return;
            }
            if (input.checked) addService(input);
            else removeService("service", parseInt(input.dataset.service));
        };
        const unbookServices = (index)=>{
            slides[index].querySelectorAll("input").forEach((input)=>{
                // UNCHECK SERVICES IN MAIN TAB
                input.checked = false;
                // REMOVE FROM THE QUOTATIONS
                removeService("service", parseInt(input.dataset.service));
                // IF OTHER INPUT, UNCHECK CONNECTED SLIDE
                if (serviceType[parseInt(input.dataset.type)] === "Other") document.querySelectorAll(".slide-left-panel input")[parseInt(input.dataset.service)].checked = false;
            });
        };
        // GETL ALL BOOKMARKED (OTHERS SERVICES ONLY) THAT WERE BOOKMARKED PRIOR TO MAIN. UPDATE OTHER SERVICES INPUT IN  MAIN SERVICE (CURRENT) SLIDE
        const addOthers = (num)=>{
            const others = quotations.filter((r)=>r.type === 1).map((r)=>r.service);
            Array.from(slides[num].querySelectorAll(".slide-right-panel input")).forEach((r)=>{
                if (others.indexOf(parseInt(r.dataset.service)) !== -1) r.checked = true;
            });
        };
        //ACTIVATES/ DEACTIVATES ALL INPUTS IN THE RIGHT PANEL OF SLIDE
        const toggleInputs = (service, isDisabled = false)=>{
            slides[service].querySelectorAll(".slide-right-panel input").forEach((input)=>{
                input.disabled = isDisabled;
            });
        };
        //CHECK/ UNCHECK THE INPUT IN LEFT PANEL OF (OTHER SERVICE ONLY) SLIDE THAT ARE CONNECTED TO THE RIGHT PANEL INPUT (CURRENT AND MAIN SERVICE ONLY) SLIDE
        const toggleOther = (service, other, isChecked = false)=>{
            const input = Array.from(slides[service].querySelectorAll(".slide-right-panel input")).find((r)=>parseInt(r.dataset.service) === other);
            input.checked = isChecked;
        };
        // CHECK IF TYPE IS 'ADD-ON (2)'
        if (parseInt(input.dataset.type) === 2) return;
        // CHECK IF TYPE IS 'MAIN (0)'
        if (parseInt(input.dataset.type) === 0) {
            // CHECK IF THE IT'S BOOKMARKED
            switch(input.checked){
                case true:
                    confirmBook(input);
                    break;
                default:
                    unbookServices(parseInt(input.dataset.service));
                    toggleInputs(parseInt(input.dataset.service), !input.checked);
                    toggleBadge();
                    break;
            }
            return;
        }
        // NO NEED TO CHECK IF TYPE 1, REMAINING OPTION IS ALREADY TYPE 1
        confirmOther(input);
    };
    const callbackOther = (input)=>{
        // ONLY TYPE 1 IS NEEDED, INPUTS ARE TYPE 1 AND 2 ONLY
        if (parseInt(input.dataset.type) === 2) return;
        slides[parseInt(input.dataset.service)].querySelector(".slide-left-panel input").checked = input.checked;
        if (input.checked) addService(input);
        else removeService("service", parseInt(input.dataset.service));
    };
    const callbackItem = (returnValue)=>{
        (0, _slider.linkClicked)(parseInt(returnValue));
    };
    const callbackBadge = ()=>{
        // LOOP IN EACH BOOKMARKED SERVICES
        // REMOVE DUPLICATES
        const quotationQuestions = {};
        // KEY FOR THE GENERIC QUESTIONS BASED ON THE RESUME SERVICE,
        // ONLY 1 RESUME SERVICE
        // CHECK IF THERE IS A RESUME SERVICE IN THE QUOTATION
        // ADD ALL GENERIC QUESTIONS TO RESUME SERVICE
        // IF NO RESUME SERVICE, GENERIC QUESTION KEY = "GENERIC"
        const key = quotations.find((a)=>serviceType[a.type] === "Resume");
        quotationQuestions[key ? key.service : "generic"] = [
            ...new Set(quotations.map((a)=>{
                // GET THE QUESTIONS IN EACH SERVICE AND FILTER THE GENERAL QUESTIONS
                return services[a.service].questions.filter((b)=>{
                    return questionType[questions[b].questionType] === "Generic";
                });
            }).flatMap((a)=>a))
        ].sort((a, b)=>a - b);
        // LOOP IN EACH BOOKMARKED SERVICES
        quotations.forEach((a)=>{
            // GET THE QUESTIONS IN EACH SERVICE AND FILTER THE GENERAL QUESTIONS
            if (serviceType[a.type] === "Resume") return;
            quotationQuestions[a.service] = services[a.service].questions.filter((b)=>{
                return questionType[questions[b].questionType] === "Specific";
            });
        });
        (0, _formJsDefault.default)({
            object: quotationQuestions,
            dateInpClick: renderCalendar,
            buttonClick: callbackForm,
            responseList: responseList,
            serviceList: serviceList,
            questionList: questionList,
            questions: questions,
            responses: responses
        });
    };
    const callbackForm = (returnValue)=>{
        if (!returnValue) {
            (0, _toastJsDefault.default)("Please answer all questions", "error");
            return;
        }
        let objA = {
            quotations: [],
            answers: {},
            info: {}
        };
        objA.quotations = [
            ...new Set(Array.from(document.querySelectorAll(".slide input")).filter((input)=>input.checked).map((input)=>parseInt(input.dataset.service)))
        ];
        Array.from(document.querySelectorAll(".form .contents")).forEach((fieldset)=>{
            // Get the service
            objA.answers[fieldset.dataset.service] = Array.from(fieldset.querySelectorAll(".content:not(.closing)")).map((li)=>{
                let objB = {
                    // Get questions
                    question: li.dataset.question,
                    // Get response
                    response: Array.from(li.querySelectorAll(".radio__input")).find((input)=>input.checked === true).dataset.response
                };
                return objB;
            });
        });
        Array.from(document.querySelectorAll(".content.closing input")).forEach((input)=>objA.info[input.dataset.inputtype] = input.value);
        /* CREATE A DEEP COPY OF serviceList, questionList and responseList, and append to the data that will be send to the backend so back end script doesn't need to recall the questions API */ objA.serviceList = JSON.parse(JSON.stringify(serviceList));
        objA.questionList = JSON.parse(JSON.stringify(questionList));
        objA.responseList = JSON.parse(JSON.stringify(responseList));
    };
    const padNums = (num)=>num.toString().padStart(2, "0");
    const removeWhiteSpace = (str)=>str.replace(/\s/g, "").toLowerCase();
    const findQuotation = (key, num)=>quotations.findIndex((r)=>r[key] === num);
    const toggleBadge = ()=>{
        // SHOW BADGE IF THERE ARE BOOKMARKED
        badge.textContent = quotations.length;
        if (quotations.length === 0) badge.classList.add("badge--hidden");
        else badge.classList.remove("badge--hidden");
    };
    const addService = (input)=>{
        quotations.push({
            type: parseInt(input.dataset.type),
            service: parseInt(input.dataset.service),
            name: serviceList[parseInt(input.dataset.service)]
        });
        toggleBadge();
    };
    const removeService = (type, num)=>{
        const index = findQuotation(type, num);
        quotations.splice(index, 1);
        toggleBadge();
    };
    // renderView();
    const slides = (0, _slider.init)({
        services,
        responses,
        serviceType,
        serviceList,
        callbackOther,
        callbackService
    });
    if (holidays) (0, _holidaysJsDefault.default)(holidays, document.querySelector(".left-panel"));
    const badge = document.querySelector(".badge");
    badge.addEventListener("click", (e)=>{
        if (quotations.length === 0) return;
        (0, _notificationJsDefault.default)({
            container: document.querySelector(".top-panel"),
            array: quotations,
            buttonText: "Continue",
            buttonClick: callbackBadge,
            itemClick: callbackItem
        });
    });
    /* SWIPE EVENT */ slides.forEach((slide)=>{
        (0, _swipeJsDefault.default)(slide, (swipedir)=>{
            //     swipedir contains either "none", "left", "right", "top", or "down"
            if (swipedir == "left") (0, _slider.nextSlide)();
            if (swipedir == "right") (0, _slider.prevSlide)();
        });
    });
    /* ADJUST HEIGHT */ adjustHeight();
};
document.addEventListener("DOMContentLoaded", async ()=>{
    // GET DATA
    try {
        (0, _spinnerJs.show)();
        const calendarUrl = "https://script.google.com/macros/s/AKfycbzXpGROoIlji0ArD-iob6hSRCzIRnxQDGDYIEniaxsgoJTPLf_pqWLZcpTW58I-ZG0A3w/exec";
        const calendarResponse = await fetch(calendarUrl);
        holidays = await calendarResponse.json();
        const questionsUrl = "https://script.google.com/macros/s/AKfycbyUmYqnLpxTlhn2Pmz776SIa3yEWOYnuzSVUTyHzPBY6-LaSXZmtb5hKn2-iCNdlwRwyg/exec";
        const questionResponse = await fetch(questionsUrl);
        const obj = await questionResponse.json();
        ({ questions , services , responses  } = obj);
        ({ serviceType , serviceList , questionType , questionList , responseList , responseType  } = obj.indices);
        init();
    } catch (err) {
        (0, _toastJsDefault.default)(err.message, "error");
    } finally{
        (0, _spinnerJs.remove)();
    }
});

},{"./modules/calendar.js":"eF2UV","./modules/confirm.js":"aL1Mo","./modules/form.js":"639pQ","./modules/notification.js":"bvqDY","./modules/spinner.js":"lLHm5","./modules/toast.js":"3vSiR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./modules/slider":"e8Upx","./modules/swipe.js":"bK44G","./modules/holidays.js":"adCha"}],"eF2UV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (onSelect = ()=>{}, holidays = null)=>{
    if (document.querySelector(".calendar") != null) {
        close(document.querySelector(".calendar"));
        return;
    }
    let date = new Date();
    const renderCalendar = ()=>{
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
        let days = Array.from({
            length: firstDay.getDay()
        }, (_, i)=>new Date(firstDay).setDate(-i)).reverse();
        days = days.concat(Array.from({
            length: lastDay.getDate()
        }, (_, i)=>new Date(firstDay).setDate(i + 1)));
        days = days.concat(Array.from({
            length: 42 - days.length
        }, (_, i)=>new Date(lastDay).setDate(lastDay.getDate() + i + 1)));
        const padString = (val)=>{
            return val.toString().padStart(2, 0);
        };
        const innerHtml = days.map((day, dayIndex)=>{
            const newDate = new Date(day);
            const newDateString = `${newDate.getFullYear()}-${padString(newDate.getMonth() + 1)}-${padString(newDate.getDate())}`;
            const today = new Date();
            const todayString = `${today.getFullYear()}-${padString(today.getMonth() + 1)}-${padString(today.getDate())}`;
            const isCurrent = newDate < firstDay ? " day--previous" : newDate > lastDay ? " day--next" : " day--present";
            // IF LESS TODAY OR LESS THAN TODAY DISABLE AUTOMATICALLY
            const isClickable = newDate > today ? " day--clickable" : "";
            const isToday = todayString === newDateString ? " today" : "";
            // IF DAY IS SUNDAY
            const isWeekEnd = newDate.getDay() === 0 ? " weekend" : "";
            let isHoliday = holidays != null ? holidays.findIndex((r)=>{
                return r.start === newDateString;
            }) !== -1 ? " holiday" : "" : "";
            return `<div class="day"
              data-date="${day}">
                <span class="${isToday}${isWeekEnd}${isCurrent}${isHoliday}${isClickable}">
                ${newDate.getDate()}
                </span>
              </div>`;
        }).join("");
        monthContainer.textContent = `${months[date.getMonth()]} ${date.getFullYear()} `;
        daysContainer.innerHTML = innerHtml;
    };
    const calendar = document.createElement("div");
    calendar.className = "calendar";
    calendar.innerHTML = `
  <div class="calendar__window">
      <div class="date">
        <p></p>
        <button class="calendar__close">&times;</button>
      </div>
      <div class="month">
        <span class="material-icons month__prev"> arrow_back_ios_new </span>
        <h1></h1>
        <span class="material-icons month__next"> arrow_forward_ios </span>
      </div>
      <div class="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div class="days"></div>
    </div>
   
  `;
    const monthContainer = calendar.querySelector(".month h1");
    const dateContainer = calendar.querySelector(".date p");
    const daysContainer = calendar.querySelector(".days");
    calendar.addEventListener("click", (e)=>{
        const el = e.target;
        if (el.closest(".month__prev")) {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
            return;
        }
        if (el.closest(".month__next")) {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
            return;
        }
        if (el.closest(".day--clickable:not(.weekend):not(.holiday)")) {
            date = new Date(parseFloat(el.closest(".day").dataset.date));
            onSelect(date);
            close(calendar);
        }
        if (el.closest(".calendar__close")) close(calendar);
        if (el === calendar) close(calendar);
    });
    renderCalendar();
    dateContainer.innerHTML = "Select a workday only";
    document.body.append(calendar);
};
const close = (calendar)=>{
    calendar.classList.add("calendar--close");
    calendar.addEventListener("animationend", ()=>calendar.remove());
};
/* (async () => {
  try {
    const calendarUrl =
      "https://script.google.com/macros/s/AKfycbzXpGROoIlji0ArD-iob6hSRCzIRnxQDGDYIEniaxsgoJTPLf_pqWLZcpTW58I-ZG0A3w/exec";
    const res = await fetch(calendarUrl);
    holidays = await res.json();
  } catch (err) {
  } finally {
  }
})(); */ if (document.head.querySelector("style") == null) document.head.append(document.createElement("style"));
document.head.querySelector("style").innerHTML += `
.calendar {
  --width: 350px;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  box-sizing: border-box;

  opacity: 0;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-name: calendar---open;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 105;
}
.calendar--close {
  animation-name: calendar---close;
}
.calendar__window {
  max-width: var(--width);
  background: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  overflow: hidden;
  border-radius: 4px;
  box-sizing: border-box;

  font-family: sans-serif;

  opacity: 0;
  transform: scale(0.75);
  animation-name: confirm__window---open;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
}
@media (max-width: 428px), (min-height: 813px) {
  .calendar{
    --width: 100%
  }
}
.date {
  background: var(--primary);
  padding: 1.25em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.calendar__close {
  background: none;
  outline: none;
  border: none;
  transform: scale(2);
  font-weight: 300;
  color: rgba(0, 0, 0, 0.49);
  transition: color 0.2s;
}
.calendar__close:hover {
  color: red;
  cursor: pointer;
}
.month {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: none;
  padding: 1.75em; /*  3.2px */

  background: #eeeeee;
  text-align: center;
}

.month .material-icons {
  color: var(--primary);
  font-size: 1em;
  cursor: pointer;
}
.month h1 {
  color: var(--primary);
  font-size: 1.15em; /* 48px */
  font-weight: 600;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px; /* 3.2px */
}
.weekdays {
  background: #ffffff;
  color: var(--color-black);
  width: 100%;
  padding: 5px 3.2px;

  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.weekdays div {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.8px;
  height: 100%;
  /* calender width() - (weekdays horizontal padding( )x2)  */
  width: calc((var(--width) - (3.2px * 2)) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: var(--gray);
  padding: 1.6px; /* 3.2px */
  background: #ffffff;
}
.day {
  position: relative;
  font-size: 14px; /* 22.4px */
  padding: 4px;
  margin: 2.4px; /* 4.8px */
  font-weight: 300;
  /* calender width() - (weekdays horizontal padding()x2)  - (day horizontal margins() x 2 x 7 ) */
  width: calc((var(--width) - ((3.2px * 2) + (2.4px * 7 * 2))) / 7);
  /* width: calc(40.2rem / 7); */
  height: 40px; /* 80px */
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  align-items: center;

  transition: 0.2s ease-in-out;
}
.day > span {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.weekend,
.holiday {
  color: var(--red-light);
}
.today {
  font-weight: 700;
}
.day--previous,
.day--next {
  opacity: 0.5;
}
/* .day:not(.day--previous):not(.day--next) {
  font-weight: 500;
} */
.day--present:not(.weekend):not(.holiday) {
  color: var(--secondary-light);
}
/*  .day--present:not(.weekend):not(.holiday):hover  */
.day--clickable:not(.weekend):not(.holiday):hover
{
  font-weight: 600;
  transform: scale(1.25);

  cursor: pointer;
}
@keyframes calendar---open {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes calendar---close {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes calendar__window---open {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aL1Mo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let options = {};
exports.default = (param)=>{
    options = Object.assign({}, {
        title: "",
        message: "",
        okText: "OK",
        cancelText: "Cancel",
        onok: function() {},
        oncancel: function() {}
    }, param);
    const html = `
    <div class="confirm">
        <div class="confirm__window">
            <div class="confirm__titlebar">
                <span class="confirm__title">${options.title}</span>
                <button class="confirm__close">&times;</button>
            </div>
            <div class="confirm__content">${options.message}</div>
            <div class="confirm__buttons">
                <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
                <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
            </div>
        </div>
    </div>
`;
    const template = document.createElement("template");
    template.innerHTML = html;
    // Elements
    const confirmEl = template.content.querySelector(".confirm");
    const btnClose = template.content.querySelector(".confirm__close");
    const btnOk = template.content.querySelector(".confirm__button--ok");
    const btnCancel = template.content.querySelector(".confirm__button--cancel");
    confirmEl.addEventListener("click", (e)=>{
        if (e.target === confirmEl) close(confirmEl, options.oncancel);
    });
    btnOk.addEventListener("click", (e)=>{
        close(confirmEl, options.onok);
    });
    [
        btnClose,
        btnCancel
    ].forEach((el)=>{
        el.addEventListener("click", (e)=>{
            close(confirmEl, options.oncancel);
        });
    });
    document.body.appendChild(template.content);
};
const close = (confirmEl, callBack)=>{
    confirmEl.classList.add("confirm--close");
    confirmEl.addEventListener("animationend", ()=>{
        if (confirmEl) confirmEl.remove();
        callBack();
    });
};
if (document.head.querySelector("style") == null) document.head.append(document.createElement("style"));
document.head.querySelector("style").innerHTML += `
.confirm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  box-sizing: border-box;

  opacity: 0;
  animation-name: confirm---open;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 13;
}

.confirm--close {
  animation-name: confirm---close;
}
.confirm__window {
  width: 100%;
  max-width: 600px;
  background: var(--primary);
  font-size: 14px;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  opacity: 0;
  transform: scale(0.75);
  animation-name: confirm__window---open;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
}
.confirm__titlebar,
.confirm__content,
.confirm__buttons {
  padding: 1.25em;
}
.confirm__titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.confirm__title {
  color: rgba(0, 0, 0, 0.49);
  font-weight: 500;
  font-size: 1.1em;
}
.confirm__close {
  background: none;
  outline: none;
  border: none;
  transform: scale(2);
  font-weight: 300;
  color: rgba(0, 0, 0, 0.49);
  transition: color 0.2s;
}
.confirm__close:hover {
  color: var(--red);
  cursor: pointer;
}
.confirm__content {
  background: #eeeeee;
  line-height: 1.8em;
}
.confirm__buttons {
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
}
.confirm__button {
  padding: 0.4em 0.8em;
  border: 1px solid var(--secondary);
  border-radius: 5px;
  background: #ffffff;
  color: var(--secondary);
  font-weight: 500;
  font-size: 1.1em;
  font-family: sans-serif;
  margin-left: 0.6em;
  cursor: pointer;
  outline: none;
}
.confirm__button--fill {
  background: var(--secondary);
  color: #ffffff;
}
.confirm__button:hover {
  box-shadow: var(--box-shadow);
}
@keyframes confirm---open {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes confirm---close {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes confirm__window---open {
  to {
    opacity: 1;
    transform: scale(1);
  }
}`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"639pQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let options = {};
exports.default = (param)=>{
    options = Object.assign({}, {
        container: "",
        object: {},
        buttonText: "OK",
        buttonClick: function() {},
        dateInpClick: function() {},
        responseList: [],
        serviceList: [],
        questionList: [],
        questions: [],
        responses: []
    }, param);
    if (document.querySelector(".form")) {
        close(document.querySelector(".form"));
        return;
    }
    const html = `<div class="form">
        <span class="arrow-back"> </span>
        <p class="instructions">
          <strong>Instructions:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt officiis illo dicta voluptates. Nobis
          corrupti laboriosam ad officiis alias soluta!
        </p>
        ${addFieldset()}
        <button class="form__button">Send request</button>
      </div>`;
    const template = document.createElement("template");
    template.innerHTML = html;
    const fieldsets = template.content.querySelectorAll(".contents");
    const radioInputs = template.content.querySelectorAll(".radio__input");
    addInputs(fieldsets);
    template.content.querySelector(".arrow-back").addEventListener("click", ()=>{
        close();
    });
    template.content.querySelector("#dateInp").addEventListener("click", ({ target  })=>{
        options.dateInpClick(target.closest("label"));
    });
    // VALIDATE OTHER INPUT
    template.content.querySelectorAll("#nameInp, #emailInp").forEach((el)=>{
        let actions = [
            "focus",
            "change"
        ];
        actions.forEach((a)=>{
            el.addEventListener(a, (e)=>{
                if (e.type === "focus") {
                    e.target.classList.remove("inp--error");
                    return;
                }
                if (e.type === "change") {
                    const str = e.target.value;
                    const isValid = e.target.id === "nameInp" ? str.match(/^(\w{2,}\s)?((\w{2,}\s){1,})(\w{2,})/) : str.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi);
                    if (isValid) return;
                    e.target.classList.add("inp--error");
                    e.target.value = "";
                    Toast.show(`Please enter fill in the input properly`, "error");
                }
            });
        });
    });
    template.content.querySelector(".form__button").addEventListener("click", ()=>{
        options.buttonClick(validate());
    });
    Array.from(radioInputs).forEach((input)=>{
        input.addEventListener("change", ({ target  })=>{
            // EXPLICITLY CHECK IF 'S THE RIGHT PANEL INPUT
            if (!target.classList.contains("radio__input")) return;
            // GET THE CLOSEST 'li' AND 'fieldset' TAGS
            const li = target.closest(".content");
            const fieldset = target.closest(".contents");
            // REMOVE ALL ".content.followup" CLASS IN THE FIELDSET
            Array.from(fieldset.querySelectorAll(".content.followup")).forEach((r)=>r.remove());
            // GET THE RESPONSE INDEX AND FIND INDEX IN THE RESPONSES
            // GET THE FOLLOW-UP QUESTIONS
            const followupQuestion = options.responses[parseInt(target.dataset.response)].followup;
            // IF FOLLOW LENGHT !== 0  CONTINUE
            // ADD NEW LI IN CLOSEST FIELDSET
            if (!followupQuestion.length) return;
            // i = INDEX OF THE TARGET FIELDSET
            const i = Array.from(fieldsets).findIndex((r)=>r === fieldset);
            // j = INDEX OF THE TARGET LI
            const j = fieldset.querySelectorAll(".content").length;
            li.insertAdjacentHTML("afterend", addLi(i, followupQuestion, j, "followup"));
        });
    });
    document.body.appendChild(template.content);
};
const padString = (str)=>{
    return str.toString().padStart(2, "0");
};
const addInputs = (els)=>{
    els[els.length - 1].querySelector("ol").insertAdjacentHTML("beforeend", `<li class="content closing">
            <div class="question">
              How soon do you need the final copy of your documents?
            </div>
            <div class="notes">
            Regular - Three (3) network days days turnaround for the first drafts <br> Rush - 2 days turnaround for the first drafts <br> Sundays and National Holidays not included
            </div>
            <div class="response">
              <div>
                <label for="dateInp" class="dateInp">
                  <input
                    type="text"
                    id="dateInp"
                    class="dateInp__input"
                    data-inputtype="date"
                  />
                  <div class="dateInp__box">
                    <span class="dateInp__box__text">Day Mon dd yyyy</span>
                  </div>
                </label>
              </div>
            </div>
          </li>
          <li class="content closing">
            <div class="question">
              Please enter your Given and Family names?
            </div>
            <div class="response">
              <div>
                <label for="nameInp" class="nameInp">
                  <input
                    type="text"
                    id="nameInp"
                    class="nameInp__input"
                    placeholder="Fred Nerk"
                    data-inputtype="name"
                  />
                </label>
              </div>
            </div>
          </li>
          <li class="content closing">
            <div class="question">
              Please enter your email address?
            </div>
            <div class="response">
              <div>
                <label for="emailInp" class="emailInp">
                  <input
                    type="text"
                    id="emailInp"
                    class="emailInp__input"
                    placeholder="frednurk@gmail.com"
                    data-inputtype="email"
                  />
                </label>
              </div>
            </div>
          </li>`);
};
/**
 * label for responses
 */ const addLabel = (i, j, arr)=>{
    return arr.map((a, k)=>{
        return `<div>
            <label for="response-${padString(i)}-${padString(j)}-${padString(k)}" class="radio">
              <input
                type="radio"
                name="question-${padString(i)}-${padString(j)}"
                id="response-${padString(i)}-${padString(j)}-${padString(k)}"
                class="radio__input"
                data-response = "${a}"
              />
              <div class="radio__radio"></div>
              ${options.responseList[a]}
            </label>
          </div>
          `;
    }).join("");
};
/**
 * @params
 * li for questions
 * i = current loop/ used as key
 * arr = the object in current loop/ responses
 */ const addLi = (i, arr, j = 0, cl = "")=>{
    return arr.map((b)=>{
        j++;
        return `  <li class="content${cl === "" ? "" : " " + cl}" data-question="${b}">
            <div class="question">
            ${options.questionList[options.questions[b].question]}
            </div>
            <div class="notes">
              ${options.questions[b].notes}
            </div>
            <div class="response">
              ${addLabel(i, j, options.questions[b].responses)}
            </div>
          </li>`;
    }).join("");
};
/**
 * fieldset for service/ product
 */ const addFieldset = ()=>{
    return Object.keys(options.object).map((a, i)=>{
        return `<fieldset class="contents" data-service="${a}">
        <legend>${a === "generic" ? "" : options.serviceList[parseInt(a)]} Questions</legend>
        <ol>
          ${addLi(i, options.object[a])}
        </ol>
      </fieldset>`;
    }).join("");
};
/**
 * Get all "contents"/ class -> fieldset
 * Loop every contents true/ get each content
 * Get all "content"/ class -> li
 * Loop every content true/  get input from each
 * Loop some input true
 */ const validate = ()=>{
    let isChecked = false, isFilledout = false;
    isChecked = Array.from(document.querySelectorAll(".form fieldset")).every((fieldset)=>{
        return Array.from(fieldset.querySelectorAll("li:not(.closing)")).every((content)=>{
            return Array.from(content.querySelectorAll("input")).some((input)=>{
                return input.checked === true;
            });
        });
    });
    isFilledout = Array.from(document.querySelectorAll("#dateInp, #nameInp, #emailInp")).every((input)=>input.value !== "");
    return [
        isChecked
    ].every((r)=>r === true);
};
const close = ()=>{
    const el = document.querySelector(".form");
    el.classList.add("form--close");
    el.addEventListener("animationend", ()=>{
        el.remove();
    });
};
if (document.head.querySelector("style") == null) document.head.append(document.createElement("style"));
document.head.querySelector("style").innerHTML += `
.form {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  z-index: 102;
}
.form--close {
  animation-name: form---close;
}
.form .content > div:not(:last-of-type) {
  margin-bottom: 10px;
}
.form__button {
  width: 100%;
  background: var(--secondary);

  padding: 6px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.88);

  box-sizing: border-box;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  transition: background 0.2s, scale 0.2s;
}
.form__button:hover {
  background: var(--secondary);
}
.form__button:active {
  transform: scale(0.99, 0.99);
}
.form__button {
  width: auto;
  padding: 10px 16px;
}

/* DATE */
.dateInp {
  position: relative;
  display: inline-flex;
  align-items: top;
  justify-content: center;
  width: 300px;
  cursor: pointer;
}
.dateInp__input {
  display: none;
}
.dateInp__box {
  position: relative;
  width: 100%;
  padding: 10px 16px;

  border: 1px solid rgba(0, 0, 0, 0.3);

  cursor: pointer;
  border-radius: 4px;
}
.dateInp__box__text {
  margin-left: 20px;
}
.dateInp__box::before {
  position: absolute;
  left: 10px;
  top: 0;
  transform: translateY(50%);
  font-family: "Material Icons";
  content: "\\e935";

  display: block;
  font-size: 1.15em;
  color: var(--primary);
  transition: color 0.25s;
}

/* DATE */
.nameInp,
.emailInp {
  position: relative;
  display: inline-flex;
  align-items: top;
  justify-content: center;
  width: 300px;
  cursor: pointer;
}
.nameInp__input,
.emailInp__input {
  width: 100%;
  padding: 10px 16px;
  padding-left: 2.25em;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);

  cursor: pointer;
  border-radius: 4px;
}
.nameInp__box,
.emailInp__box {
  position: relative;
}
.nameInp__box__text,
.emailInp__box__text {
  margin-left: 20px;
}
.nameInp::before,
.emailInp::before {
  position: absolute;
  left: 10px;
  top: 0;
  transform: translateY(50%);
  font-family: "Material Icons";

  display: block;
  font-size: 1.25em;
  color: var(--primary);
  transition: color 0.25s;
}
.nameInp::before {
  content: '\\e7fd';
}
.emailInp::before {
  content: "\\e0be";
}
.inp--error {
  border-color: #d32f2f;
}`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvqDY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let options = {};
exports.default = (param)=>{
    options = Object.assign({}, {
        container: "",
        array: [],
        buttonText: "OK",
        buttonClick: function() {},
        itemClick: function() {}
    }, param);
    if (options.container.querySelector(".notification")) {
        close(options.container.querySelector(".overlay"), options.container.querySelector(".notification"));
        return;
    }
    const html = `
      <div class="overlay"></div>
      <div class="notification">
      ${options.array.map((r)=>{
        return `<div class="notification__item"  data-type="${r.type}" data-service="${r.service}">${r.name}</div>`;
    }).join("")}
        <button class="notification__button">${options.buttonText}</button>
      </div>
      `;
    const template = document.createElement("template");
    template.innerHTML = html;
    // Elements
    const overlay = template.content.querySelector(".overlay");
    const notificationEl = template.content.querySelector(".notification");
    const btnClick = template.content.querySelector(".notification__button");
    const items = template.content.querySelectorAll(".notification__item");
    btnClick.addEventListener("click", ()=>{
        options.buttonClick();
        close(overlay, notificationEl);
    });
    overlay.addEventListener("click", ()=>{
        close(overlay, notificationEl);
    });
    Array.from(items).forEach((item)=>{
        item.addEventListener("click", (e)=>{
            options.itemClick(e.target.dataset.service);
            close(overlay, notificationEl);
        });
    });
    options.container.appendChild(template.content);
};
const close = (overlay, notification)=>{
    notification.classList.add("notification--close");
    overlay.remove();
    notification.addEventListener("animationend", ()=>{
        options.container.removeChild(notification);
    });
};
if (document.head.querySelector("style") == null) document.head.append(document.createElement("style"));
document.head.querySelector("style").innerHTML += `
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.notification {
  position: absolute;
  max-width: 200px;
  top: calc(100% - 10px);
  right: 10px;

  border-radius: 2px;
  padding: 10px;
  background: #ffffff;

  text-align: center;
  box-shadow: var(--box-shadow);

  transform: translateY(-10%);
  animation-name: notification---open;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  z-index: 100;
}
.notification--close {
  animation-name: notification---close;
}

@keyframes notification---close {
  to {
    transform: translateY(-10%);
    opacity: 0;
  }
}

@keyframes notification---open {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notification__item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  font-size: 0.9em;
}
.notification__item:not(:last-of-type) {
  border-bottom: 1px solid var(--gray);
}

.notification__item:first-of-type {
  padding-top: 0;
}
.notification__item:last-of-type {
  padding-bottom: 0;
  margin-bottom: 10px;
}
.notification__item:hover {
  background: #fcfbfa;
}
.notification__button {
  width: 100%;
  background: var(--secondary);

  padding: 6px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.88);

  box-sizing: border-box;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  transition: background 0.2s, scale 0.2s;
}
.notification__button:hover {
  background: var(--secondary);
}
.notification__button:active {
  transform: scale(0.99, 0.99);
}`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLHm5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "show", ()=>show);
parcelHelpers.export(exports, "remove", ()=>remove);
const show = (container = document.body)=>{
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    container.insertAdjacentElement("beforeend", spinner);
};
const remove = (container = document.body)=>{
    const spinner = container.querySelector(".spinner");
    spinner.classList.add("spinner--hidden");
    spinner.addEventListener("transitionend", (e)=>{
        spinner.remove();
    });
};
if (document.head.querySelector("style") == null) document.head.append(document.createElement("style"));
document.head.querySelector("style").innerHTML += `
.spinner{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  transition: opacity 0.75s, visibility 0.75s;
  z-index: 200;
}
.spinner--hidden {
  opacity: 0;
  visibility: hidden;
}
.spinner::after {
  content: "";
  width: 50px;
  height: 50px;
  border: 8px solid var(--gray);
  border-top-color: var(--primary-light);
  border-bottom-color: var(--primary-light);
  border-radius: 50%;
  animation: loading 0.75s ease infinite;
}
@keyframes loading {
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
}`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vSiR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (message, state)=>{
    clearTimeout(toast.Timeout);
    toast.textContent = message;
    toast.className = "toast toast--visible";
    if (state) toast.classList.add(`toast--${state}`);
    toast.hideTimeout = setTimeout(()=>{
        toast.classList.remove("toast--visible");
    }, 3000);
};
const hide = ()=>{
    toast.classList.remove("toast--visible");
};
if (document.head.querySelector("style") == null) document.head.append(document.createElement("style"));
document.head.querySelector("style").innerHTML += `
.toast {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;

  max-width: 350px;
  padding: 5px;
  color: #ffffff;ss
  font-family: sans-serif;
  font-size: 0.95em;
  text-align: center;
  background: var(--gray);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2),
  rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
  border-radius: 2px;
  /* border: 0.5px solid #DCDCDC;*/

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, top 0.2s, visibility 0.2s;
  z-index: 106;
}

/* BOTTOM IS RELATIVE TO THE HEIGHT OF THE FOOTER */
.toast--visible {
  top: 2%;
  visibility: visible;
  opacity: 1;
}

.toast--success {
  color: #2e7d32;
}

.toast--error {
  color:#d32f2f;
}
`;
const toast = document.createElement("span");
toast.className = "toast";
document.body.appendChild(toast);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8Upx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "nextSlide", ()=>nextSlide);
parcelHelpers.export(exports, "prevSlide", ()=>prevSlide);
parcelHelpers.export(exports, "linkClicked", ()=>linkClicked);
let services, serviceType, serviceList, callbackService, callbackOther, curSlide = 0, maxSlide = 0, slidesFrag = document.createDocumentFragment(""), dotsFrag = document.createDocumentFragment(""), slides, dots;
/**
 * OBJECTS
 */ class Service {
    constructor(options){
        this.options = Object.assign({}, {
            type: "",
            service: "",
            index: "",
            title: "",
            long: "",
            services: "",
            callbackService: ()=>{},
            callbackOther: ()=>{}
        }, options);
        this.div = document.createElement("div");
        this.div.className = "slide";
        this.div.style.transform = `translateX(${maxSlide * 100}%)`;
        this.div.innerHTML = `
      <div class="slide-left-panel">
        
        <h1>
          ${this.options.service}
        </h1>
        <h4>
          ${this.options.long}
        </h4>

        <div>
          <label type="checkbox"
          for="service-${padNums(this.options.index)}" class="checkbox">
            <input
             type="checkbox"
             id="service-${padNums(this.options.index)}"
             class="checkbox__input"
             data-service="${this.options.index}"
             data-type="${this.options.type}"
           />
           <div
             class="checkbox__box checkbox__box--checked checkbox__box--unchecked"
           >
           </div>
           <span class="text--unchecked">Add to quotation</span>
           <span class="text--checked">Remove from quotation</span>

          </label>
        </div>
       
      </div>`;
        this.div.querySelector(".slide-left-panel input").addEventListener("change", (e)=>{
            this.options.callbackService(e.target);
        });
    }
}
class Our extends Service {
    constructor(options){
        super(options);
        this.div.insertAdjacentHTML("beforeend", `<div class="slide-right-panel">
     <fieldset class="slide-fieldset">
       <legend class="slide-fieldset__legend">
         <span>
           Please bookmark the
           <strong>Other Services</strong>
           you like to add in the package</span
         >
       </legend>

       ${this.options.services.map((r, i)=>{
            return `<div>
         <label type="checkbox"
         for="${padNums(this.options.index)}-${padNums(i)}"
         class="checkbox">
           <input
             type="checkbox"
             name="service-${padNums(this.options.index)}"
             id="${padNums(this.options.index)}-${padNums(i)}"
             data-type="${services[r].serviceType}"
             data-service="${r}"
             class="checkbox__input"
             disabled
           />
           <div
             class="checkbox__box checkbox__box--checked checkbox__box--unchecked"
           ></div>
           <span>${serviceList[r]}</span>
         </label>
       </div>`;
        }).join("")}
     </fieldset>
   </div>
 `);
        this.div.querySelectorAll(".slide-right-panel input").forEach((input)=>{
            input.addEventListener("change", (e)=>{
                this.options.callbackOther(e.target);
            });
        });
    }
}
class Dot {
    constructor(options){
        this.options = Object.assign({}, {
            index: "",
            callback: ()=>{}
        }, options);
        this.div = document.createElement("a");
        this.div.className = "dots__dot";
        this.div.dataset.service = this.options.index;
        this.div.addEventListener("click", (e)=>{
            activateDot(parseInt(e.target.dataset.service));
        });
    }
}
const init = (params)=>{
    ({ services , serviceType , serviceList , callbackOther , callbackService  } = params);
    services.forEach((service, index)=>{
        const type = serviceType[service.serviceType].toLowerCase();
        if (type === "addon") return;
        // ADD SLIDE
        const optionsSlide = {
            type: service.serviceType,
            service: serviceList[service.service],
            index: index,
            title: service.title,
            long: service.long,
            services: service.services,
            callbackService: callbackService,
            callbackOther: callbackOther
        };
        let slide;
        if (type === "resume") slide = new Our(optionsSlide);
        else slide = new Service(optionsSlide);
        slidesFrag.append(slide.div);
        // ADD DOT
        const optionsDot = {
            index: index
        };
        const dot = new Dot(optionsDot);
        dotsFrag.append(dot.div);
        maxSlide++;
    });
    slider.append(slidesFrag);
    dot.append(dotsFrag);
    dots = dot.querySelectorAll(".dots__dot");
    slides = slider.querySelectorAll(".slide");
    activateDot(curSlide);
    activateSlider();
    return slides;
};
const slider = document.querySelector(".slider"), dot = document.querySelector(".dots > div");
const padNums = (num)=>num.toString().padStart(2, "0");
const activateDot = (i)=>{
    Array.from(dots).forEach((_, index)=>{
        dots[index].classList.remove("dots__dot--active");
    });
    dots[i].classList.add("dots__dot--active");
    goToSlide(i);
    curSlide = i;
};
const activateSlider = ()=>{
    const [btnPrev, btnNext] = document.querySelectorAll(" .slider-button");
    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);
};
const nextSlide = ()=>{
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
};
const prevSlide = ()=>{
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
};
const linkClicked = (i)=>{
    curSlide = parseInt(i);
    goToSlide(curSlide);
    activateDot(curSlide);
};
const goToSlide = (slide)=>{
    Array.from(slides).forEach((s, i)=>s.style.transform = `translateX(${100 * (i - slide)}%)`);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bK44G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (el, callback)=>{
    let touchsurface = el, swipedir, startX, startY, distX, distY, threshold = 90, restraint = 300, allowedTime = 500, elapsedTime, startTime, handleswipe = callback || function(swipedir) {};
    touchsurface.addEventListener("touchstart", (e)=>{
        let touchobj = e.changedTouches[0];
        swipedir = "none";
        distX = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
    // e.preventDefault();
    }, false);
    touchsurface.addEventListener("touchmove", (e)=>{
        e.preventDefault(); // prevent scrolling when inside DIV
    }, false);
    touchsurface.addEventListener("touchend", (e)=>{
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime) {
            // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) // 2nd condition for horizontal swipe met
            swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) // 2nd condition for vertical swipe met
            swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
        }
        handleswipe(swipedir);
    // e.preventDefault();
    }, false);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adCha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (holidays, container)=>{
    container.innerHTML = `
      <span> AUSTRALIA HOLIDAYS ${currentYear}</span> 
      <ul>
      ${holidays.filter((h)=>h.start.split("-")[0] == currentYear).sort((a, b)=>convertToDate(a.start) - convertToDate(b.start)).map((holiday)=>`<li>
        ${convertToMmmDd(holiday.start)} - ${holiday.summary}
      </li>`).join("")}</ul>`;
};
const currentYear = new Date().getFullYear();
const convertToDate = (str)=>{
    const parts = str.split("-").map((r)=>parseInt(r));
    return new Date(parts[0], parts[1] - 1, parts[2], 0, 0, 0);
};
const convertToMmmDd = (str)=>{
    // DATE FORMAT "2023-01-01"
    const parts = str.split("-").map((r)=>parseInt(r));
    return convertToDate(str).toDateString().match(/\w{3}\s\w{3}\s\d{2}/)[0];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dpgAG","6rimH"], "6rimH", "parcelRequire124b")

//# sourceMappingURL=index.8cfc62b9.js.map

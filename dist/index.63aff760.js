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
})({"1JEHZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
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
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"adjPd":[function(require,module,exports) {
var _contacts = require("./modules/contacts/contacts");
var _form = require("./modules/form/form");
var ejs = require("ejs");
var fs = require("fs");
var pages = [
    "/chat",
    "/contacts",
    "/settings",
    "/login",
    "/reg"
];
var path = window.location.pathname;
var getparam = window.location.search;
var fullpath = "/modules" + path + path + ".ejs";
var htmlContent = '<% let menuitems=[\r\n    {id: 0, name: "/chat", title: "Чат"},\r\n    {id: 1, name: "/contacts", title: "Контакты"},\r\n    {id: 2, name: "/login", title: "Вход"},\r\n    {id: 3, name: "/settings", title: "Настройки"},\r\n]\r\n%>\r\n\r\n<div class="mainmenu">\r\n    <% menuitems.forEach(item=>{%>\r\n    <div class="<%if (active=== item.name)  { %>active<%}else{%>menuitem<%}%>"><a href="<%- item.name %>"><%- item.title %></a></div>\r\n    <%})%>\r\n</div>\r\n';
var htmlRenderized = ejs.render(htmlContent, {
    active: path
});
if (path == "/contacts") {
    var mainContent = '\r\n    <div class="itemtest">\r\n        <% contacts.forEach(item=>{%>\r\n            <a class="userchatfora" href="/chat/<%- item.id%>">\r\n                <div class="userchat">\r\n                    <img class="userimg" src="./public/image/user.jpg">\r\n                    <h5><%- item.user%></h5>\r\n                    <p><%- item.phone%></p>\r\n                </div></a>\r\n        <%})%>\r\n\r\n    </div>\r\n\r\n\r\n\r\n';
    var mainRenderized = ejs.render(mainContent, {
        contacts: (0, _contacts.contacts)()
    });
}
if (path == "/chat") {
    let chatId = "x";
    if (getparam) {
        const regex = /\?id=/gm;
        chatId = getparam.replace(regex, "");
    }
    var mainContent = '\r\n\r\n    <div class="itemtest">\r\n\r\n\r\n\r\n        <% let chats=[\r\n            {id: 0, user: "IVAN", lastmessege: "1 какой-то текст"},\r\n            {id: 1, user: "Petr", lastmessege: "2 какой-то текст"},\r\n            {id: 2, user: "Sergey", lastmessege: "3 какой-то текст"},\r\n            {id: 3, user: "vasya", lastmessege: "4 какой-то текст"},\r\n            {id: 4, user: "Alex", lastmessege: "5 какой-то текст"},\r\n        ]\r\n        %>\r\n\r\n\r\n        <% chats.forEach(item=>{%>\r\n            <a class="userchatfora" href="<%- path%>?id=<%- item.id%>">\r\n                <div class="userchat<%if(chatId==item.id){%> userchatactive<%}%>">\r\n                    <img class="userimg" src="/image/user.jpg">\r\n                    <h5><%- chatId%> <%- item.user%></h5>\r\n                    <p><%- item.lastmessege%></p>\r\n                </div></a>\r\n        <%})%>\r\n    </div>\r\n    <div class="itemtest">\r\n        <div class="testformessage" >\r\n            <div id="chatbox">\r\n                <% let messagelist = [\r\n                    {chatId:0,\r\n                        messages: [\r\n                            {idmes:1, userId:0, text:"привет"},\r\n                            {idmes:2, userId:0, text:"Как дела"},\r\n                            {idmes:3, userId:2, text:"привет, Все хорошо"},\r\n                            {idmes:4, userId:2, text:"Как дела с заданием?"},\r\n                            {idmes:5, userId:0, text:"Что-то, понял, но этого мало"},\r\n                            {idmes:6, userId:0, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n                    {chatId:1,\r\n                        messages: [\r\n                            {idmes:1, userId:1, text:"hi"},\r\n                            {idmes:2, userId:1, text:"how are you"},\r\n                            {idmes:3, userId:2, text:"привет, i have a problem"},\r\n                            {idmes:4, userId:2, text:"what`s about your homework?"},\r\n                            {idmes:5, userId:1, text:"i didn`t do it"},\r\n                            {idmes:6, userId:1, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n                    {chatId:2,\r\n                        messages: [\r\n                            {idmes:1, userId:1, text:"hi"},\r\n                            {idmes:2, userId:1, text:"how are you"},\r\n                            {idmes:3, userId:2, text:"привет, i have a problem"},\r\n                            {idmes:4, userId:2, text:"what`s about your homework?"},\r\n                            {idmes:5, userId:1, text:"i didn`t do it"},\r\n                            {idmes:6, userId:1, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n                    {chatId:3,\r\n                        messages: [\r\n                            {idmes:1, userId:3, text:"hi"},\r\n                            {idmes:2, userId:3, text:"how are you"},\r\n                            {idmes:3, userId:2, text:"привет, i have a problem"},\r\n                            {idmes:4, userId:2, text:"what`s about your homework?"},\r\n                            {idmes:5, userId:3, text:"i didn`t do it"},\r\n                            {idmes:6, userId:3, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n                    {chatId:4,\r\n                        messages: [\r\n                            {idmes:1, userId:4, text:"hi"},\r\n                            {idmes:2, userId:4, text:"how are you"},\r\n                            {idmes:3, userId:2, text:"привет, i have a problem"},\r\n                            {idmes:4, userId:2, text:"what`s about your homework?"},\r\n                            {idmes:5, userId:4, text:"i didn`t do it"},\r\n                            {idmes:6, userId:4, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n                    {chatId:5,\r\n                        messages: [\r\n                            {idmes:1, userId:5, text:"hi"},\r\n                            {idmes:2, userId:5, text:"how are you"},\r\n                            {idmes:3, userId:2, text:"привет, i have a problem"},\r\n                            {idmes:4, userId:2, text:"what`s about your homework?"},\r\n                            {idmes:5, userId:5, text:"i didn`t do it"},\r\n                            {idmes:6, userId:5, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n                    {chatId:6,\r\n                        messages: [\r\n                            {idmes:1, userId:6, text:"hi"},\r\n                            {idmes:2, userId:6, text:"how are you"},\r\n                            {idmes:3, userId:2, text:"привет, i have a problem"},\r\n                            {idmes:4, userId:2, text:"what`s about your homework?"},\r\n                            {idmes:5, userId:6, text:"i didn`t do it"},\r\n                            {idmes:6, userId:6, text:"нужны дополнительный список материалов и примеров по теме!"},\r\n                        ]\r\n                    },\r\n\r\n                ]\r\n\r\n\r\n\r\n                %>\r\n                <%if(chatId!=\'x\'){%>\r\n                <%messagelist[chatId].messages.forEach(item=>{%>\r\n                <p class="<%if(item.userId==chatId){%>userText<%}else{%>botText<%}%>"><span><%- item.text-%></span></p>\r\n\r\n                <%})%>\r\n                <%}%>\r\n            </div>\r\n            <div id="chat-bar-bottom">\r\n                <p></p>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div id="chat-bar-bottom">\r\n            <p></p>\r\n        </div>\r\n        <div class="testforbtn">\r\n            <div class="chat-bar-input-block">\r\n                <div id="userInput">\r\n                    <input name="message" id="textInput" class="input-box" type="text" name="msg"\r\n                           placeholder="Tap \'Enter\' to send a message">\r\n                    <p></p>\r\n                </div>\r\n\r\n                <div class="chat-bar-icons">\r\n                    <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"\r\n                       onclick="heartButton()"></i>\r\n                    <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"\r\n                       onclick="sendButton()"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n';
    var mainRenderized = ejs.render(mainContent, {
        contacts: (0, _contacts.contacts)(),
        path: path,
        chatId: chatId
    });
}
if (path == "/settings") {
    let fields = [
        "first_name",
        "second_name",
        "login",
        "email",
        "phone",
        "oldPassword",
        "newPassword",
        "avatar"
    ];
    let btn_name = "Save";
    let inputs = (0, _form.form)(fields);
    var mainContent = '\r\n    <div class="itemtest">\r\n\r\n        <form action="" method="get" class="form-example">\r\n            <% inputs.forEach(input=>{%>\r\n                <div class="form-example">\r\n                    <label for="<%- input.inputname %>"><%-input.text%></label>\r\n                    <input type="<%- input.type %>" name="<%- input.inputname %>" id="<%- input.inputname %>" required>\r\n                </div>\r\n            <%});%>\r\n\r\n            <div class="form-example">\r\n                <input type="submit" value="<%- btn_name%>">\r\n            </div>\r\n\r\n            <% if(reg===true){%>\r\n            <div>\r\n                <a href="/reg">Зарегистрироваться</a>\r\n            </div>\r\n          <%}%>\r\n        </form>\r\n\r\n    </div>\r\n';
    var mainRenderized = ejs.render(mainContent, {
        inputs: inputs,
        btn_name: btn_name,
        reg: false
    });
}
if (path == "/login") {
    let fields1 = [
        "login",
        "Password"
    ];
    let btn_name1 = "Войти";
    let inputs1 = (0, _form.form)(fields1);
    var mainContent = '\r\n    <div class="itemtest">\r\n\r\n        <form action="" method="get" class="form-example">\r\n            <% inputs.forEach(input=>{%>\r\n                <div class="form-example">\r\n                    <label for="<%- input.inputname %>"><%-input.text%></label>\r\n                    <input type="<%- input.type %>" name="<%- input.inputname %>" id="<%- input.inputname %>" required>\r\n                </div>\r\n            <%});%>\r\n\r\n            <div class="form-example">\r\n                <input type="submit" value="<%- btn_name%>">\r\n            </div>\r\n\r\n            <% if(reg===true){%>\r\n            <div>\r\n                <a href="/reg">Зарегистрироваться</a>\r\n            </div>\r\n          <%}%>\r\n        </form>\r\n\r\n    </div>\r\n';
    var mainRenderized = ejs.render(mainContent, {
        inputs: inputs1,
        btn_name: btn_name1,
        reg: true
    });
}
if (path == "/reg") {
    let fields2 = [
        "login",
        "Password"
    ];
    let btn_name2 = "Войти";
    let inputs2 = (0, _form.form)(fields2);
    var mainContent = '\r\n    <div class="itemtest">\r\n\r\n        <form action="" method="get" class="form-example">\r\n            <% inputs.forEach(input=>{%>\r\n                <div class="form-example">\r\n                    <label for="<%- input.inputname %>"><%-input.text%></label>\r\n                    <input type="<%- input.type %>" name="<%- input.inputname %>" id="<%- input.inputname %>" required>\r\n                </div>\r\n            <%});%>\r\n\r\n            <div class="form-example">\r\n                <input type="submit" value="<%- btn_name%>">\r\n            </div>\r\n\r\n            <% if(reg===true){%>\r\n            <div>\r\n                <a href="/reg">Зарегистрироваться</a>\r\n            </div>\r\n          <%}%>\r\n        </form>\r\n\r\n    </div>\r\n';
    var mainRenderized = ejs.render(mainContent, {
        inputs: inputs2,
        btn_name: btn_name2,
        reg: false
    });
}
if (pages.includes(path) == false) {
    var mainContent = '\r\n    <div class="itemtest">\r\n\r\n        <h1 class="err404">404</h1>\r\n\r\n    </div>\r\n\r\n';
    var mainRenderized = ejs.render(mainContent);
}
const navbar = document.querySelector("#navbar");
const main = document.querySelector("#main");
navbar.innerHTML += htmlRenderized;
main.innerHTML += mainRenderized;

},{"./modules/contacts/contacts":"j4VDH","./modules/form/form":"iCf2n","ejs":"bLaYX","fs":"jhUEF"}],"j4VDH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contacts", ()=>contacts);
function contacts() {
    let contacts = [
        {
            id: 0,
            user: "IVAN",
            phone: "+7 909 909 90"
        },
        {
            id: 1,
            user: "Petr",
            phone: "+7 909 909 90"
        },
        {
            id: 2,
            user: "Sergey",
            phone: "+7 909 909 90"
        },
        {
            id: 3,
            user: "vasya",
            phone: "+7 909 909 90"
        },
        {
            id: 4,
            user: "Alex",
            phone: "+7 909 909 90"
        }, 
    ];
    return contacts;
}

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

},{}],"iCf2n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "form", ()=>form);
function form(fields) {
    console.log(fields);
    let inputs = [
        {
            inputname: "first_name",
            text: "Имя",
            type: "text"
        },
        {
            inputname: "second_name",
            text: "Фамилия",
            type: "text"
        },
        {
            inputname: "display_name",
            text: "Отображаемое имя",
            type: "text"
        },
        {
            inputname: "login",
            text: "Логин",
            type: "text"
        },
        {
            inputname: "email",
            text: "Email",
            type: "email"
        },
        {
            inputname: "phone",
            text: "Тел",
            type: "text"
        },
        {
            inputname: "oldPassword",
            text: "oldPassword",
            type: "password"
        },
        {
            inputname: "newPassword",
            text: "newPassword",
            type: "password"
        },
        {
            inputname: "Password",
            text: "пароль",
            type: "password"
        },
        {
            inputname: "avatar",
            text: "Фото",
            type: "file"
        }, 
    ];
    let arr = [];
    fields.forEach((field)=>{
        console.log(field);
        for(let i = 0; i < inputs.length; i++)if (inputs[i].inputname == field) //arr=[...arr, inputs[i] ]
        arr.push(inputs[i]);
    });
    return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLaYX":[function(require,module,exports) {
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/ "use strict";
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */ /**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */ /**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */ var fs = require("fs");
var path = require("path");
var utils = require("./utils");
var scopeOptionWarned = false;
/** @type {string} */ var _VERSION_STRING = require("../package.json").version;
var _DEFAULT_OPEN_DELIMITER = "<";
var _DEFAULT_CLOSE_DELIMITER = ">";
var _DEFAULT_DELIMITER = "%";
var _DEFAULT_LOCALS_NAME = "locals";
var _NAME = "ejs";
var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
var _OPTS_PASSABLE_WITH_DATA = [
    "delimiter",
    "scope",
    "context",
    "debug",
    "compileDebug",
    "client",
    "_with",
    "rmWhitespace",
    "strict",
    "filename",
    "async"
];
// We don't allow 'cache' option to be passed in the data obj for
// the normal `render` call, but this is where Express 2 & 3 put it
// so we make an exception for `renderFile`
var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");
var _BOM = /^\uFEFF/;
var _JS_IDENTIFIER = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */ exports.cache = utils.cache;
/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */ exports.fileLoader = fs.readFileSync;
/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */ exports.localsName = _DEFAULT_LOCALS_NAME;
/**
 * Promise implementation -- defaults to the native implementation if available
 * This is mostly just for testability
 *
 * @type {PromiseConstructorLike}
 * @public
 */ exports.promiseImpl = new Function("return this;")().Promise;
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} [isDir=false] whether the parent file path is a directory
 * @return {String}
 */ exports.resolveInclude = function(name, filename, isDir) {
    var dirname = path.dirname;
    var extname = path.extname;
    var resolve = path.resolve;
    var includePath = resolve(isDir ? filename : dirname(filename), name);
    var ext = extname(name);
    if (!ext) includePath += ".ejs";
    return includePath;
};
/**
 * Try to resolve file path on multiple directories
 *
 * @param  {String}        name  specified path
 * @param  {Array<String>} paths list of possible parent directory paths
 * @return {String}
 */ function resolvePaths(name, paths) {
    var filePath;
    if (paths.some(function(v) {
        filePath = exports.resolveInclude(name, v, true);
        return fs.existsSync(filePath);
    })) return filePath;
}
/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */ function getIncludePath(path, options) {
    var includePath;
    var filePath;
    var views = options.views;
    var match = /^[A-Za-z]+:\\|^\//.exec(path);
    // Abs path
    if (match && match.length) {
        path = path.replace(/^\/*/, "");
        if (Array.isArray(options.root)) includePath = resolvePaths(path, options.root);
        else includePath = exports.resolveInclude(path, options.root || "/", true);
    } else {
        // Look relative to a passed filename first
        if (options.filename) {
            filePath = exports.resolveInclude(path, options.filename);
            if (fs.existsSync(filePath)) includePath = filePath;
        }
        // Then look in any views directories
        if (!includePath && Array.isArray(views)) includePath = resolvePaths(path, views);
        if (!includePath && typeof options.includer !== "function") throw new Error('Could not find the include file "' + options.escapeFunction(path) + '"');
    }
    return includePath;
}
/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */ function handleCache(options, template) {
    var func;
    var filename = options.filename;
    var hasTemplate = arguments.length > 1;
    if (options.cache) {
        if (!filename) throw new Error("cache option requires a filename");
        func = exports.cache.get(filename);
        if (func) return func;
        if (!hasTemplate) template = fileLoader(filename).toString().replace(_BOM, "");
    } else if (!hasTemplate) {
        // istanbul ignore if: should not happen at all
        if (!filename) throw new Error("Internal EJS error: no file name or template provided");
        template = fileLoader(filename).toString().replace(_BOM, "");
    }
    func = exports.compile(template, options);
    if (options.cache) exports.cache.set(filename, func);
    return func;
}
/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */ function tryHandleCache(options, data, cb) {
    var result;
    if (!cb) {
        if (typeof exports.promiseImpl == "function") return new exports.promiseImpl(function(resolve, reject) {
            try {
                result = handleCache(options)(data);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
        else throw new Error("Please provide a callback function");
    } else {
        try {
            result = handleCache(options)(data);
        } catch (err) {
            return cb(err);
        }
        cb(null, result);
    }
}
/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */ function fileLoader(filePath) {
    return exports.fileLoader(filePath);
}
/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */ function includeFile(path, options) {
    var opts = utils.shallowCopy(utils.createNullProtoObjWherePossible(), options);
    opts.filename = getIncludePath(path, opts);
    if (typeof options.includer === "function") {
        var includerResult = options.includer(path, opts.filename);
        if (includerResult) {
            if (includerResult.filename) opts.filename = includerResult.filename;
            if (includerResult.template) return handleCache(opts, includerResult.template);
        }
    }
    return handleCache(opts);
}
/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements {RethrowCallback}
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} flnm     file name of the EJS file
 * @param {Number} lineno   line number of the error
 * @param {EscapeCallback} esc
 * @static
 */ function rethrow(err, str, flnm, lineno, esc) {
    var lines = str.split("\n");
    var start = Math.max(lineno - 3, 0);
    var end = Math.min(lines.length, lineno + 3);
    var filename = esc(flnm);
    // Error context
    var context = lines.slice(start, end).map(function(line, i) {
        var curr = i + start + 1;
        return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
    }).join("\n");
    // Alter exception message
    err.path = filename;
    err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
    throw err;
}
function stripSemi(str) {
    return str.replace(/;(\s*$)/, "$1");
}
/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} [opts] compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * Note that the return type of the function also depends on the value of `opts.async`.
 * @public
 */ exports.compile = function compile(template, opts) {
    var templ;
    // v1 compat
    // 'scope' is 'context'
    // FIXME: Remove this in a future version
    if (opts && opts.scope) {
        if (!scopeOptionWarned) {
            console.warn("`scope` option is deprecated and will be removed in EJS 3");
            scopeOptionWarned = true;
        }
        if (!opts.context) opts.context = opts.scope;
        delete opts.scope;
    }
    templ = new Template(template, opts);
    return templ.compile();
};
/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {(String|Promise<String>)}
 * Return value type depends on `opts.async`.
 * @public
 */ exports.render = function(template, d, o) {
    var data = d || utils.createNullProtoObjWherePossible();
    var opts = o || utils.createNullProtoObjWherePossible();
    // No options object -- if there are optiony names
    // in the data, copy them to options
    if (arguments.length == 2) utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
    return handleCache(opts, template)(data);
};
/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */ exports.renderFile = function() {
    var args = Array.prototype.slice.call(arguments);
    var filename = args.shift();
    var cb;
    var opts = {
        filename: filename
    };
    var data;
    var viewOpts;
    // Do we have a callback?
    if (typeof arguments[arguments.length - 1] == "function") cb = args.pop();
    // Do we have data/opts?
    if (args.length) {
        // Should always have data obj
        data = args.shift();
        // Normal passed opts (data obj + opts obj)
        if (args.length) // Use shallowCopy so we don't pollute passed in opts obj with new vals
        utils.shallowCopy(opts, args.pop());
        else {
            // Express 3 and 4
            if (data.settings) {
                // Pull a few things from known locations
                if (data.settings.views) opts.views = data.settings.views;
                if (data.settings["view cache"]) opts.cache = true;
                // Undocumented after Express 2, but still usable, esp. for
                // items that are unsafe to be passed along with data, like `root`
                viewOpts = data.settings["view options"];
                if (viewOpts) utils.shallowCopy(opts, viewOpts);
            }
            // Express 2 and lower, values set in app.locals, or people who just
            // want to pass options in their data. NOTE: These values will override
            // anything previously set in settings  or settings['view options']
            utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
        }
        opts.filename = filename;
    } else data = utils.createNullProtoObjWherePossible();
    return tryHandleCache(opts, data, cb);
};
/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */ /**
 * EJS template class
 * @public
 */ exports.Template = Template;
exports.clearCache = function() {
    exports.cache.reset();
};
function Template(text, opts) {
    opts = opts || utils.createNullProtoObjWherePossible();
    var options = utils.createNullProtoObjWherePossible();
    this.templateText = text;
    /** @type {string | null} */ this.mode = null;
    this.truncate = false;
    this.currentLine = 1;
    this.source = "";
    options.client = opts.client || false;
    options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
    options.compileDebug = opts.compileDebug !== false;
    options.debug = !!opts.debug;
    options.filename = opts.filename;
    options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
    options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
    options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
    options.strict = opts.strict || false;
    options.context = opts.context;
    options.cache = opts.cache || false;
    options.rmWhitespace = opts.rmWhitespace;
    options.root = opts.root;
    options.includer = opts.includer;
    options.outputFunctionName = opts.outputFunctionName;
    options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
    options.views = opts.views;
    options.async = opts.async;
    options.destructuredLocals = opts.destructuredLocals;
    options.legacyInclude = typeof opts.legacyInclude != "undefined" ? !!opts.legacyInclude : true;
    if (options.strict) options._with = false;
    else options._with = typeof opts._with != "undefined" ? opts._with : true;
    this.opts = options;
    this.regex = this.createRegex();
}
Template.modes = {
    EVAL: "eval",
    ESCAPED: "escaped",
    RAW: "raw",
    COMMENT: "comment",
    LITERAL: "literal"
};
Template.prototype = {
    createRegex: function() {
        var str = _REGEX_STRING;
        var delim = utils.escapeRegExpChars(this.opts.delimiter);
        var open = utils.escapeRegExpChars(this.opts.openDelimiter);
        var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
        str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
        return new RegExp(str);
    },
    compile: function() {
        /** @type {string} */ var src;
        /** @type {ClientFunction} */ var fn;
        var opts = this.opts;
        var prepended = "";
        var appended = "";
        /** @type {EscapeCallback} */ var escapeFn = opts.escapeFunction;
        /** @type {FunctionConstructor} */ var ctor;
        /** @type {string} */ var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : "undefined";
        if (!this.source) {
            this.generateSource();
            prepended += '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';
            if (opts.outputFunctionName) {
                if (!_JS_IDENTIFIER.test(opts.outputFunctionName)) throw new Error("outputFunctionName is not a valid JS identifier.");
                prepended += "  var " + opts.outputFunctionName + " = __append;" + "\n";
            }
            if (opts.localsName && !_JS_IDENTIFIER.test(opts.localsName)) throw new Error("localsName is not a valid JS identifier.");
            if (opts.destructuredLocals && opts.destructuredLocals.length) {
                var destructuring = "  var __locals = (" + opts.localsName + " || {}),\n";
                for(var i = 0; i < opts.destructuredLocals.length; i++){
                    var name = opts.destructuredLocals[i];
                    if (!_JS_IDENTIFIER.test(name)) throw new Error("destructuredLocals[" + i + "] is not a valid JS identifier.");
                    if (i > 0) destructuring += ",\n  ";
                    destructuring += name + " = __locals." + name;
                }
                prepended += destructuring + ";\n";
            }
            if (opts._with !== false) {
                prepended += "  with (" + opts.localsName + " || {}) {" + "\n";
                appended += "  }\n";
            }
            appended += "  return __output;\n";
            this.source = prepended + this.source + appended;
        }
        if (opts.compileDebug) src = "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n" + "  , __filename = " + sanitizedFilename + ";" + "\n" + "try {" + "\n" + this.source + "} catch (e) {" + "\n" + "  rethrow(e, __lines, __filename, __line, escapeFn);" + "\n" + "}" + "\n";
        else src = this.source;
        if (opts.client) {
            src = "escapeFn = escapeFn || " + escapeFn.toString() + ";" + "\n" + src;
            if (opts.compileDebug) src = "rethrow = rethrow || " + rethrow.toString() + ";" + "\n" + src;
        }
        if (opts.strict) src = '"use strict";\n' + src;
        if (opts.debug) console.log(src);
        if (opts.compileDebug && opts.filename) src = src + "\n" + "//# sourceURL=" + sanitizedFilename + "\n";
        try {
            if (opts.async) // Have to use generated function for this, since in envs without support,
            // it breaks in parsing
            try {
                ctor = new Function("return (async function(){}).constructor;")();
            } catch (e) {
                if (e instanceof SyntaxError) throw new Error("This environment does not support async/await");
                else throw e;
            }
            else ctor = Function;
            fn = new ctor(opts.localsName + ", escapeFn, include, rethrow", src);
        } catch (e1) {
            // istanbul ignore else
            if (e1 instanceof SyntaxError) {
                if (opts.filename) e1.message += " in " + opts.filename;
                e1.message += " while compiling ejs\n\n";
                e1.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
                e1.message += "https://github.com/RyanZim/EJS-Lint";
                if (!opts.async) {
                    e1.message += "\n";
                    e1.message += "Or, if you meant to create an async function, pass `async: true` as an option.";
                }
            }
            throw e1;
        }
        // Return a callable function which will execute the function
        // created by the source-code, with the passed data as locals
        // Adds a local `include` function which allows full recursive include
        var returnedFn = opts.client ? fn : function anonymous(data) {
            var include = function(path, includeData) {
                var d = utils.shallowCopy(utils.createNullProtoObjWherePossible(), data);
                if (includeData) d = utils.shallowCopy(d, includeData);
                return includeFile(path, opts)(d);
            };
            return fn.apply(opts.context, [
                data || utils.createNullProtoObjWherePossible(),
                escapeFn,
                include,
                rethrow
            ]);
        };
        if (opts.filename && typeof Object.defineProperty === "function") {
            var filename = opts.filename;
            var basename = path.basename(filename, path.extname(filename));
            try {
                Object.defineProperty(returnedFn, "name", {
                    value: basename,
                    writable: false,
                    enumerable: false,
                    configurable: true
                });
            } catch (e2) {}
        }
        return returnedFn;
    },
    generateSource: function() {
        var opts = this.opts;
        if (opts.rmWhitespace) // Have to use two separate replace here as `^` and `$` operators don't
        // work well with `\r` and empty lines don't work well with the `m` flag.
        this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
        // Slurp spaces and tabs before <%_ and after _%>
        this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
        var self = this;
        var matches = this.parseTemplateText();
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        if (matches && matches.length) matches.forEach(function(line, index) {
            var closing;
            // If this is an opening tag, check for closing tags
            // FIXME: May end up with some false positives here
            // Better to store modes as k/v with openDelimiter + delimiter as key
            // Then this can simply check against the map
            if (line.indexOf(o + d) === 0 // If it is a tag
             && line.indexOf(o + d + d) !== 0) {
                closing = matches[index + 2];
                if (!(closing == d + c || closing == "-" + d + c || closing == "_" + d + c)) throw new Error('Could not find matching close tag for "' + line + '".');
            }
            self.scanLine(line);
        });
    },
    parseTemplateText: function() {
        var str = this.templateText;
        var pat = this.regex;
        var result = pat.exec(str);
        var arr = [];
        var firstPos;
        while(result){
            firstPos = result.index;
            if (firstPos !== 0) {
                arr.push(str.substring(0, firstPos));
                str = str.slice(firstPos);
            }
            arr.push(result[0]);
            str = str.slice(result[0].length);
            result = pat.exec(str);
        }
        if (str) arr.push(str);
        return arr;
    },
    _addOutput: function(line) {
        if (this.truncate) {
            // Only replace single leading linebreak in the line after
            // -%> tag -- this is the single, trailing linebreak
            // after the tag that the truncation mode replaces
            // Handle Win / Unix / old Mac linebreaks -- do the \r\n
            // combo first in the regex-or
            line = line.replace(/^(?:\r\n|\r|\n)/, "");
            this.truncate = false;
        }
        if (!line) return line;
        // Preserve literal slashes
        line = line.replace(/\\/g, "\\\\");
        // Convert linebreaks
        line = line.replace(/\n/g, "\\n");
        line = line.replace(/\r/g, "\\r");
        // Escape double-quotes
        // - this will be the delimiter during execution
        line = line.replace(/"/g, '\\"');
        this.source += '    ; __append("' + line + '")' + "\n";
    },
    scanLine: function(line) {
        var self = this;
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        var newLineCount = 0;
        newLineCount = line.split("\n").length - 1;
        switch(line){
            case o + d:
            case o + d + "_":
                this.mode = Template.modes.EVAL;
                break;
            case o + d + "=":
                this.mode = Template.modes.ESCAPED;
                break;
            case o + d + "-":
                this.mode = Template.modes.RAW;
                break;
            case o + d + "#":
                this.mode = Template.modes.COMMENT;
                break;
            case o + d + d:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")' + "\n";
                break;
            case d + d + c:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")' + "\n";
                break;
            case d + c:
            case "-" + d + c:
            case "_" + d + c:
                if (this.mode == Template.modes.LITERAL) this._addOutput(line);
                this.mode = null;
                this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
                break;
            default:
                // In script mode, depends on type of tag
                if (this.mode) {
                    // If '//' is found without a line break, add a line break.
                    switch(this.mode){
                        case Template.modes.EVAL:
                        case Template.modes.ESCAPED:
                        case Template.modes.RAW:
                            if (line.lastIndexOf("//") > line.lastIndexOf("\n")) line += "\n";
                    }
                    switch(this.mode){
                        // Just executing code
                        case Template.modes.EVAL:
                            this.source += "    ; " + line + "\n";
                            break;
                        // Exec, esc, and output
                        case Template.modes.ESCAPED:
                            this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))" + "\n";
                            break;
                        // Exec and output
                        case Template.modes.RAW:
                            this.source += "    ; __append(" + stripSemi(line) + ")" + "\n";
                            break;
                        case Template.modes.COMMENT:
                            break;
                        // Literal <%% mode, append as raw output
                        case Template.modes.LITERAL:
                            this._addOutput(line);
                            break;
                    }
                } else this._addOutput(line);
        }
        if (self.opts.compileDebug && newLineCount) {
            this.currentLine += newLineCount;
            this.source += "    ; __line = " + this.currentLine + "\n";
        }
    }
};
/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */ exports.escapeXML = utils.escapeXML;
/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */ exports.__express = exports.renderFile;
/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */ exports.VERSION = _VERSION_STRING;
/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */ exports.name = _NAME;
/* istanbul ignore if */ if (typeof window != "undefined") window.ejs = exports;

},{"fs":"jhUEF","path":"loE3o","./utils":"lEWpl","../package.json":"WeuzC"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"lEWpl":[function(require,module,exports) {
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/ /**
 * Private utility functions
 * @module utils
 * @private
 */ "use strict";
var regExpChars = /[|\\{}()[\]^$+*?.]/g;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function(obj, key) {
    return hasOwnProperty.apply(obj, [
        key
    ]);
};
/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */ exports.escapeRegExpChars = function(string) {
    // istanbul ignore if
    if (!string) return "";
    return String(string).replace(regExpChars, "\\$&");
};
var _ENCODE_HTML_RULES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
};
var _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c;
}
/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */ var escapeFuncStr = 'var _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n';
/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */ exports.escapeXML = function(markup) {
    return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
};
exports.escapeXML.toString = function() {
    return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
};
/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */ exports.shallowCopy = function(to, from) {
    from = from || {};
    if (to !== null && to !== undefined) for(var p in from){
        if (!hasOwn(from, p)) continue;
        if (p === "__proto__" || p === "constructor") continue;
        to[p] = from[p];
    }
    return to;
};
/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */ exports.shallowCopyFromList = function(to, from, list) {
    list = list || [];
    from = from || {};
    if (to !== null && to !== undefined) for(var i = 0; i < list.length; i++){
        var p = list[i];
        if (typeof from[p] != "undefined") {
            if (!hasOwn(from, p)) continue;
            if (p === "__proto__" || p === "constructor") continue;
            to[p] = from[p];
        }
    }
    return to;
};
/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements {Cache}
 * @static
 * @private
 */ exports.cache = {
    _data: {},
    set: function(key, val) {
        this._data[key] = val;
    },
    get: function(key) {
        return this._data[key];
    },
    remove: function(key) {
        delete this._data[key];
    },
    reset: function() {
        this._data = {};
    }
};
/**
 * Transforms hyphen case variable into camel case.
 *
 * @param {String} string Hyphen case string
 * @return {String} Camel case string
 * @static
 * @private
 */ exports.hyphenToCamel = function(str) {
    return str.replace(/-[a-z]/g, function(match) {
        return match[1].toUpperCase();
    });
};
/**
 * Returns a null-prototype object in runtimes that support it
 *
 * @return {Object} Object, prototype will be set to null where possible
 * @static
 * @private
 */ exports.createNullProtoObjWherePossible = function() {
    if (typeof Object.create == "function") return function() {
        return Object.create(null);
    };
    // Not possible, just pass through
    return function() {
        return {};
    };
}();

},{}],"WeuzC":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"ejs","description":"Embedded JavaScript templates","keywords":["template","engine","ejs"],"version":"3.1.8","author":"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)","license":"Apache-2.0","bin":{"ejs":"./bin/cli.js"},"main":"./lib/ejs.js","jsdelivr":"ejs.min.js","unpkg":"ejs.min.js","repository":{"type":"git","url":"git://github.com/mde/ejs.git"},"bugs":"https://github.com/mde/ejs/issues","homepage":"https://github.com/mde/ejs","dependencies":{"jake":"^10.8.5"},"devDependencies":{"browserify":"^16.5.1","eslint":"^6.8.0","git-directory-deploy":"^1.5.1","jsdoc":"^3.6.7","lru-cache":"^4.0.1","mocha":"^7.1.1","uglify-js":"^3.3.16"},"engines":{"node":">=0.10.0"},"scripts":{"test":"mocha"}}');

},{}]},["1JEHZ","adjPd"], "adjPd", "parcelRequire7f26")

//# sourceMappingURL=index.63aff760.js.map

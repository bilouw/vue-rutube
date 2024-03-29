module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "9be4");
/******/ })
/************************************************************************/
/******/ ({

/***/ "55d2":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "9be4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("55d2")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"db73aa8a-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./VueRutube.vue?vue&type=template&id=bd90bd2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('iframe',{attrs:{"id":"rutube-player","width":_vm.width,"height":_vm.height,"src":_vm.sourceUrl,"frameborder":_vm.frameborder,"webkitAllowFullScreen":"","mozallowfullscreen":"","allowFullScreen":""}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./VueRutube.vue?vue&type=template&id=bd90bd2a&

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./VueRutube.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_VueRutubevue_type_script_lang_js_ = ({
  props: {
    videoId: {
      type: String,
      default: '7163336'
    },
    width: {
      type: String,
      default: '720'
    },
    height: {
      type: String,
      default: '480'
    },
    frameborder: {
      type: String,
      default: '0'
    }
  },
  data: function data() {
    return {
      player: null,
      ready: false,
      currentTime: 0
    };
  },
  computed: {
    sourceUrl: function sourceUrl() {
      return "//rutube.ru/play/embed/".concat(this.videoId, "?quality=1");
    }
  },
  mounted: function mounted() {
    this.player = document.getElementById('rutube-player');
    this.handleEvent();
  },
  methods: {
    sendPostMessage: function sendPostMessage(type, data) {
      if (!this.ready) return;
      this.player.contentWindow.postMessage(JSON.stringify({
        type: "player:".concat(type),
        data: data
      }), '*');
    },
    play: function play() {
      this.sendPostMessage('play', {});
    },
    pause: function pause() {
      this.sendPostMessage('pause', {});
    },
    stop: function stop() {
      this.sendPostMessage('stop', {});
    },
    mute: function mute() {
      this.sendPostMessage('mute', {});
    },
    unMute: function unMute() {
      this.sendPostMessage('unMute', {});
    },
    setCurrentTime: function setCurrentTime(seconds) {
      this.sendPostMessage('setCurrentTime', {
        time: seconds
      });
    },
    getCurrentTime: function getCurrentTime() {
      return this.currentTime;
    },
    relativelySeek: function relativelySeek(seconds) {
      this.sendPostMessage('relativelySeek', {
        time: seconds
      });
    },
    changeVideo: function changeVideo(id) {
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.sendPostMessage('changeVideo', {
        params: {
          hash: id,
          quality: quality
        }
      });
    },
    setVolume: function setVolume(volume) {
      this.sendPostMessage('setVolume', {
        volume: volume
      });
    },
    setSkinColor: function setSkinColor(color) {
      this.sendPostMessage('setSkinColor', {
        params: {
          color: color
        }
      });
    },
    remove: function remove() {
      this.sendPostMessage('remove', {});
    },
    handleEvent: function handleEvent() {
      var _this = this;

      window.addEventListener('message', function (event) {
        var message = JSON.parse(event.data);

        _this.emitEvent(message);
      });
    },
    emitEvent: function emitEvent(message) {
      switch (message.type) {
        case 'player:ready':
          this.ready = true;
          this.$emit('ready');
          break;

        case 'player:changeState':
          this.$emit(message.data.state);
          break;

        case 'player:currentTime':
          this.currentTime = message.data.time;
          this.$emit('currentTime', message.data.time);
      }
    }
  }
});
// CONCATENATED MODULE: ./VueRutube.vue?vue&type=script&lang=js&
 /* harmony default export */ var VueRutubevue_type_script_lang_js_ = (lib_vue_loader_options_VueRutubevue_type_script_lang_js_); 
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./VueRutube.vue





/* normalize component */

var component = normalizeComponent(
  VueRutubevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueRutube = (component.exports);
// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VueRutube);



/***/ })

/******/ })["default"];
//# sourceMappingURL=VueRutube.common.js.map
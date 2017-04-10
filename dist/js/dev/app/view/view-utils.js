/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function createBackToTopLink() {
	  var linkId = 'top';
	  var link = document.createElement('a');
	  link.id = 'back-to-top';
	  link.text = 'Back to top of the page';
	  link.href = '#' + linkId;
	
	  document.querySelector('html').id = linkId;
	  document.body.appendChild(link);
	  return link;
	}
	
	var backToTopLink = createBackToTopLink();
	
	window.addEventListener('scroll', function (e) {
	  var y = window.scrollY;
	  console.log(y, typeof y === 'undefined' ? 'undefined' : _typeof(y));
	  if (y > 150) {
	    backToTopLink.classList.add('show');
	  } else {
	    backToTopLink.classList.remove('show');
	  }
	});

/***/ }

/******/ });
//# sourceMappingURL=view-utils.js.map
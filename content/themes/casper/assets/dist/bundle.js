/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// Load stylesheets
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(2);

	__webpack_require__(10);

	__webpack_require__(16);

	// Load default scripts

	__webpack_require__(18);

	__webpack_require__(19);

	__webpack_require__(20);

	// Load custom components

	var _componentsTouchMenuJs = __webpack_require__(21);

	var _componentsTouchMenuJs2 = _interopRequireDefault(_componentsTouchMenuJs);

	new _componentsTouchMenuJs2['default']();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./screen.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./screen.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* ==========================================================================\n   Table of Contents\n   ========================================================================== */\n\n/*\n\n    0.  Normalize\n    1.  Icons\n    2.  General\n    3.  Utilities\n    4.  General\n    5.  Single Post\n    6.  Tag Archive\n    7.  Read Next\n    8.  Third Party Elements\n    9.  Pagination\n    10.  Footer\n    11. Media Queries (Tablet)\n    12. Media Queries (Mobile)\n    13. Animations\n\n*/\n\n/* ==========================================================================\n   0. Normalize.css v2.1.3 | MIT License | git.io/normalize | (minified)\n   ========================================================================== */\n\narticle, aside, details,\nfigcaption, figure,\nfooter, header, hgroup,\nmain, nav, section,\nsummary { display: block; }\naudio, canvas, video { display: inline-block; }\naudio:not([controls]) { display: none; height: 0; }\n[hidden], template { display: none; }\nhtml {\n   font-family: sans-serif;\n   -ms-text-size-adjust: 100%;\n   -webkit-text-size-adjust: 100%;\n}\nbody { margin: 0; }\na { background: transparent; }\na:focus { outline: thin dotted; }\na:active, a:hover { outline: 0; }\nh1 { font-size: 2em; margin: 0.67em 0; }\nabbr[title] { border-bottom: 1px dotted; }\nb, strong { font-weight: 700; }\ndfn { font-style: italic; }\nhr {\n   box-sizing: content-box;\n   height: 0;\n}\nmark { background: #FF0; color: #000; }\ncode, kbd, pre,\nsamp { font-family: monospace, serif; font-size: 1em; }\npre { white-space: pre-wrap; }\nq { quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\nsmall { font-size: 80%; }\nsub, sup {\n   font-size: 75%;\n   line-height: 0;\n   position: relative;\n   vertical-align: baseline;\n}\nsup { top: -0.5em; }\nsub { bottom: -0.25em; }\nimg { border: 0; }\nsvg:not(:root) { overflow: hidden; }\nfigure { margin: 0; }\nfieldset {\n   border: 1px solid #c0c0c0;\n   margin: 0 2px;\n   padding: 0.35em 0.625em 0.75em;\n}\nlegend { border: 0; padding: 0; }\nbutton, input, select,\ntextarea { font-family: inherit; font-size: 100%; margin: 0; }\nbutton, input { line-height: normal; }\nbutton, select { text-transform: none; }\nbutton, html input[type=\"button\"],\ninput[type=\"reset\"], input[type=\"submit\"] {\n   -webkit-appearance: button;\n   cursor: pointer;\n}\nbutton[disabled], html input[disabled] { cursor: default; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] { box-sizing: border-box; padding: 0; }\ninput[type=\"search\"] {\n   -webkit-appearance: textfield;\n   box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration { -webkit-appearance: none; }\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner { border: 0; padding: 0; }\ntextarea { overflow: auto; vertical-align: top; }\ntable { border-collapse: collapse; border-spacing: 0; }\n\n\n/* ==========================================================================\n   1. Icons - Sets up the icon font and respective classes\n   ========================================================================== */\n\n/* Import the font file with the icons in it */\n@font-face {\n    font-family: \"casper-icons\";\n    src:url(" + __webpack_require__(5) + ");\n    src:url(" + __webpack_require__(5) + "#iefix) format(\"embedded-opentype\"),\n        url(" + __webpack_require__(6) + ") format(\"woff\"),\n        url(" + __webpack_require__(7) + ") format(\"truetype\"),\n        url(" + __webpack_require__(8) + "#icons) format(\"svg\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n/* Apply these base styles to all icons */\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n    font-family: \"casper-icons\", \"Open Sans\", sans-serif;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    text-decoration: none !important;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n/* Each icon is created by inserting the correct character into the\n   content of the :before pseudo element. Like a boss. */\n.icon-ghost:before {\n    content: \"\\F600\";\n}\n.icon-feed:before {\n    content: \"\\F601\";\n}\n.icon-twitter:before {\n    content: \"\\F602\";\n    font-size: 1.1em;\n}\n.icon-google-plus:before {\n    content: \"\\F603\";\n}\n.icon-facebook:before {\n    content: \"\\F604\";\n}\n.icon-arrow-left:before {\n    content: \"\\F605\";\n}\n.icon-stats:before {\n    content: \"\\F606\";\n}\n.icon-location:before {\n    content: \"\\F607\";\n    margin-left: -3px; /* Tracking fix */\n}\n.icon-link:before {\n    content: \"\\F608\";\n}\n.icon-menu:before {\n    content: \"\\F609\";\n}\n/*\n    IMPORTANT: When making any changes to the icon font, be sure to increment\n    the version number by 1 in the @font-face rule. `?v=1` becomes `?v=2`\n    This forces browsers to download the new font file.\n*/\n\n\n/* ==========================================================================\n   2. General - Setting up some base styles\n   ========================================================================== */\n\nhtml {\n    height: 100%;\n    max-height: 100%;\n    font-size: 62.5%;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nbody {\n    height: 100%;\n    max-height: 100%;\n    font-family: \"Merriweather\", serif;\n    letter-spacing: 0.01rem;\n    font-size: 1.8rem;\n    line-height: 1.75em;\n    color: #3A4145;\n    -webkit-font-feature-settings: 'kern' 1;\n    -moz-font-feature-settings: 'kern' 1;\n    -o-font-feature-settings: 'kern' 1;\n    text-rendering: geometricPrecision;\n}\n\n::-moz-selection {\n    background: #D6EDFF;\n}\n\n::selection {\n    background: #D6EDFF;\n}\n\nh1, h2, h3,\nh4, h5, h6 {\n    -webkit-font-feature-settings: 'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1;\n    -moz-font-feature-settings: 'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1;\n    -o-font-feature-settings: 'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1;\n    color: #2E2E2E;\n    line-height: 1.15em;\n    margin: 0 0 0.4em 0;\n    font-family: \"Open Sans\", sans-serif;\n    text-rendering: geometricPrecision;\n}\n\nh1 {\n    font-size: 5rem;\n    letter-spacing: -2px;\n    text-indent: -3px;\n}\n\nh2 {\n    font-size: 3.6rem;\n    letter-spacing: -1px;\n}\n\nh3 {\n    font-size: 3rem;\n}\n\nh4 {\n    font-size: 2.5rem;\n}\n\nh5 {\n    font-size: 2rem;\n}\n\nh6 {\n    font-size: 2rem;\n}\n\na {\n    color: #4A4A4A;\n    -webkit-transition: color 0.3s ease;\n            transition: color 0.3s ease;\n}\n\na:hover {\n    color: #111;\n}\n\np, ul, ol, dl {\n    -webkit-font-feature-settings: 'liga' 1, 'onum' 1, 'kern' 1;\n    -moz-font-feature-settings: 'liga' 1, 'onum' 1, 'kern' 1;\n    -o-font-feature-settings: 'liga' 1, 'onum' 1, 'kern' 1;\n    margin: 0 0 1.75em 0;\n    text-rendering: geometricPrecision;\n}\n\nol, ul {\n    padding-left: 3rem;\n}\n\nol ol, ul ul,\nul ol, ol ul {\n    margin: 0 0 0.4em 0;\n    padding-left: 2em;\n}\n\ndl dt {\n    float: left;\n    width: 180px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 700;\n    margin-bottom: 1em;\n}\n\ndl dd {\n    margin-left: 200px;\n    margin-bottom: 1em\n}\n\nli {\n    margin: 0.4em 0;\n}\n\nli li {\n    margin: 0;\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: #EFEFEF 1px solid;\n    margin: 3.2em 0;\n    padding: 0;\n}\n\nblockquote {\n    box-sizing: border-box;\n    margin: 1.75em 0 1.75em -2.2em;\n    padding: 0 0 0 1.75em;\n    border-left: #4A4A4A 0.4em solid;\n}\n\nblockquote p {\n    margin: 0.8em 0;\n    font-style: italic;\n}\n\nblockquote small {\n    display: inline-block;\n    margin: 0.8em 0 0.8em 1.5em;\n    font-size: 0.9em;\n    color: #CCC;\n}\n\nblockquote small:before { content: \"\\2014   \\A0\"; }\n\nblockquote cite {\n    font-weight: 700;\n}\n\nblockquote cite a { font-weight: normal; }\n\nmark {\n    background-color: #fdffb6;\n}\n\ncode, tt {\n    padding: 1px 3px;\n    font-family: Inconsolata, monospace, sans-serif;\n    font-size: 0.85em;\n    white-space: pre-wrap;\n    border: #E3EDF3 1px solid;\n    background: #F7FAFB;\n    border-radius: 2px;\n}\n\npre {\n    box-sizing: border-box;\n    margin: 0 0 1.75em 0;\n    border: #E3EDF3 1px solid;\n    width: 100%;\n    padding: 10px;\n    font-family: Inconsolata, monospace, sans-serif;\n    font-size: 0.9em;\n    white-space: pre;\n    overflow: auto;\n    background: #F7FAFB;\n    border-radius: 3px;\n}\n\npre code, pre tt {\n    font-size: inherit;\n    white-space: pre-wrap;\n    background: transparent;\n    border: none;\n    padding: 0;\n}\n\nkbd {\n    display: inline-block;\n    margin-bottom: 0.4em;\n    padding: 1px 8px;\n    border: #CCC 1px solid;\n    color: #666;\n    text-shadow: #FFF 0 1px 0;\n    font-size: 0.9em;\n    font-weight: 700;\n    background: #F4F4F4;\n    border-radius: 4px;\n    box-shadow:\n        0 1px 0 rgba(0, 0, 0, 0.2),\n        0 1px 0 0 #fff inset;\n}\n\ntable {\n    box-sizing: border-box;\n    margin: 1.75em 0;\n    width: 100%;\n    max-width: 100%;\n    background-color: transparent;\n}\n\ntable th,\ntable td {\n    padding: 8px;\n    line-height: 20px;\n    text-align: left;\n    vertical-align: top;\n    border-top: #EFEFEF 1px solid;\n}\n\ntable th { color: #000; }\n\ntable caption + thead tr:first-child th,\ntable caption + thead tr:first-child td,\ntable colgroup + thead tr:first-child th,\ntable colgroup + thead tr:first-child td,\ntable thead:first-child tr:first-child th,\ntable thead:first-child tr:first-child td {\n    border-top: 0;\n}\n\ntable tbody + tbody { border-top: #EFEFEF 2px solid; }\n\ntable table table { background-color: #FFF; }\n\ntable tbody > tr:nth-child(odd) > td,\ntable tbody > tr:nth-child(odd) > th {\n    background-color: #F6F6F6;\n}\n\ntable.plain tbody > tr:nth-child(odd) > td,\ntable.plain tbody > tr:nth-child(odd) > th {\n   background: transparent;\n}\n\niframe, .fluid-width-video-wrapper {\n    display: block;\n    margin: 1.75em 0;\n}\n\n/* When a video is inside the fitvids wrapper, drop the\nmargin on the iframe, cause it breaks stuff. */\n.fluid-width-video-wrapper iframe {\n    margin: 0;\n}\n\n\n/* ==========================================================================\n   3. Utilities - These things get used a lot\n   ========================================================================== */\n\n/* Clears shit */\n.clearfix:before,\n.clearfix:after {\n    content: \" \";\n    display: table;\n}\n.clearfix:after { clear: both; }\n.clearfix { zoom: 1; }\n\n/* Hides shit */\n.hidden {\n    text-indent: -9999px;\n    visibility: hidden;\n    display: none;\n}\n\n/* Creates a responsive wrapper that makes our content scale nicely */\n.inner {\n    position: relative;\n    width: 80%;\n    max-width: 710px;\n    margin: 0 auto;\n}\n\n/* Centres vertically yo. (IE8+) */\n.vertical {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n/* Wraps the main content & footer */\n.site-wrapper {\n    position: relative;\n    z-index: 10;\n    min-height: 100%;\n    background: #fff;\n    -webkit-transition: -webkit-transform 0.5s ease;\n            transition: transform 0.5s ease;\n}\n\nbody.nav-opened .site-wrapper {\n    overflow-x: hidden;\n    -webkit-transform: translate3D(-240px, 0, 0);\n        -ms-transform: translate3D(-240px, 0, 0);\n            transform: translate3D(-240px, 0, 0);\n    -webkit-transition: -webkit-transform 0.3s ease;\n            transition: transform 0.3s ease;\n}\n\n\n/* ==========================================================================\n   4. General - The main styles for the the theme\n   ========================================================================== */\n\n/* Big cover image on the home page */\n.main-header {\n    position: relative;\n    display: table;\n    width: 100%;\n    height: 100vh;\n    margin-bottom: 5rem;\n    text-align: center;\n    background: #222 no-repeat center center;\n    background-size: cover;\n    overflow: hidden;\n}\n\n.main-header .inner {\n    width: 80%;\n}\n\n.main-nav {\n    position: relative;\n    padding: 35px 40px;\n    margin: 0 0 30px 0;\n}\n\n.main-nav a {\n    text-decoration: none;\n    font-family: 'Open Sans', sans-serif;\n}\n\n/* Navigation */\nbody.nav-opened .nav-cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 240px;\n    bottom: 0;\n    z-index: 200;\n}\n\n.nav {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 5;\n    width: 240px;\n    opacity: 0;\n    background: #111;\n    margin-bottom: 0;\n    text-align: left;\n    overflow-y: auto;\n    -webkit-transition: -webkit-transform 0.5s ease,\n                        opacity 0.3s ease 0.7s;\n            transition: transform 0.5s ease,\n                        opacity 0.3s ease 0.7s;\n}\n\nbody.nav-closed .nav {\n    -webkit-transform: translate3D(97px, 0, 0);\n        -ms-transform: translate3D(97px, 0, 0);\n            transform: translate3D(97px, 0, 0);\n}\n\nbody.nav-opened .nav {\n    opacity: 1;\n    -webkit-transition: -webkit-transform 0.3s ease,\n                        opacity 0s ease 0s;\n            transition: transform 0.3s ease,\n                        opacity 0s ease 0s;\n    -webkit-transform: translate3D(0, 0, 0);\n        -ms-transform: translate3D(0, 0, 0);\n            transform: translate3D(0, 0, 0);\n}\n\n.nav-title {\n    position: absolute;\n    top: 45px;\n    left: 30px;\n    font-size: 16px;\n    font-weight: 100;\n    text-transform: uppercase;\n    color: #fff;\n}\n\n.nav-close {\n    position: absolute;\n    top: 38px;\n    right: 25px;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    font-size: 10px;\n}\n\n.nav-close:focus {\n    outline: 0;\n}\n\n.nav-close:before,\n.nav-close:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    width: 20px;\n    height: 1px;\n    background: rgb(150,150,150);\n    top: 15px;\n    -webkit-transition: background 0.15s ease;\n            transition: background 0.15s ease;\n}\n\n.nav-close:before {\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.nav-close:after {\n    -webkit-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n.nav-close:hover:before,\n.nav-close:hover:after {\n    background: rgb(255,255,255);\n}\n\n.nav ul {\n    padding: 90px 9% 5%;\n    list-style: none;\n    counter-reset: item;\n}\n\n.nav li:before {\n    display: block;\n    float: right;\n    padding-right: 4%;\n    padding-left: 5px;\n    text-align: right;\n    font-size: 1.2rem;\n    vertical-align: bottom;\n    color: #B8B8B8;\n    content: counter(item, lower-roman);\n    counter-increment: item;\n}\n.nav li {\n    margin: 0;\n}\n.nav li a {\n    text-decoration: none;\n    line-height: 1.4;\n    font-size: 1.4rem;\n    display: block;\n    padding: 0.6rem 4%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.nav li a:after {\n    display: inline-block;\n    content: \" .......................................................\";\n    color: rgba(255,255,255,0.2);\n    margin-left: 5px;\n}\n.nav .nav-current:before {\n    color: #fff;\n}\n.nav .nav-current a:after {\n    content: \" \";\n    border-bottom: rgba(255,255,255,0.5) 1px solid;\n    width: 100%;\n    height: 1px;\n}\n\n.nav a:link,\n.nav a:visited {\n    color: #B8B8B8;\n}\n\n.nav li.nav-current a,\n.nav a:hover,\n.nav a:active,\n.nav a:focus {\n    color: #fff;\n}\n\n.subscribe-button {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    bottom: 30px;\n    left: 30px;\n    right: 30px;\n    height: 38px;\n    padding: 0 20px;\n    color: #111 !important; /* Overides `.nav a:link, .nav a:visited` colour */\n    text-align: center;\n    font-size: 12px;\n    font-family: \"Open Sans\", sans-serif;\n    text-transform: uppercase;\n    text-decoration: none;\n    line-height: 35px;\n    border-radius: 3px;\n    background: #fff;\n    -webkit-transition: all ease 0.3s;\n            transition: all ease 0.3s;\n}\n.subscribe-button:before {\n    font-size: 9px;\n    margin-right: 6px;\n}\n\n\n/* Create a bouncing scroll-down arrow on homepage with cover image */\n.scroll-down {\n    display: block;\n    position: absolute;\n    z-index: 100;\n    bottom: 45px;\n    left: 50%;\n    margin-left: -16px;\n    width: 34px;\n    height: 34px;\n    font-size: 34px;\n    text-align: center;\n    text-decoration: none;\n    color: rgba(255,255,255,0.7);\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    -webkit-animation: bounce 4s 2s infinite;\n    animation: bounce 4s 2s infinite;\n}\n\n/* Stop it bouncing and increase contrast when hovered */\n.scroll-down:hover {\n    color: #fff;\n    -webkit-animation: none;\n    animation: none;\n}\n\n/* Put a semi-opaque radial gradient behind the icon to make it more visible\n   on photos which happen to have a light background. */\n.home-template .main-header:after {\n    display: block;\n    content: \" \";\n    width: 150px;\n    height: 130px;\n    border-radius: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    background: -webkit-radial-gradient(center, ellipse, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%);\n    background: radial-gradient(ellipse at center,  rgba(0,0,0,0.15) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%);\n}\n\n/* Hide when there's no cover image or on page2+ */\n.no-cover .scroll-down,\n.no-cover.main-header:after,\n.archive-template .scroll-down,\n.archive-template .main-header:after {\n    display: none\n}\n\n/* Appears in the top left corner of your home page */\n.blog-logo {\n    display: block;\n    float: left;\n    background: none !important; /* Makes sure there is never a background */\n    border: none !important; /* Makes sure there is never a border */\n}\n\n.blog-logo img {\n    box-sizing: border-box;\n    display: block;\n    height: 38px;\n    padding: 1px 0 5px 0;\n    width: auto;\n}\n\n.menu-button {\n    box-sizing: border-box;\n    display: inline-block;\n    float: right;\n    height: 38px;\n    padding: 0 15px;\n    border-style: solid;\n    border-width: 1px;\n    opacity: 1;\n    text-align: center;\n    font-size: 12px;\n    text-transform: uppercase;\n    line-height: 35px;\n    white-space: nowrap;\n    border-radius: 3px;\n    -webkit-transition: all 0.5s ease;\n            transition: all 0.5s ease;\n}\n.menu-button:before {\n    font-size: 12px;\n    font-weight: bold;\n    margin-right: 6px;\n    position: relative;\n    top: 1px;\n}\n.menu-button:hover {\n    background: #fff;\n}\n.menu-button:focus {\n    outline: 0;\n}\n\n/* When the navigation is closed */\n.nav-closed .menu-button {\n    color: #fff;\n    border-color: rgba(255, 255, 255, 0.6);\n}\n.nav-closed .menu-button:hover {\n    color: #222;\n}\n\n/* When the navigation is closed and there is no cover image */\n.nav-closed .no-cover .menu-button {\n    border-color: #BFC8CD;\n    color: #9EABB3;\n}\n.nav-closed .no-cover .menu-button:hover {\n    border-color: #555;\n    color: #555;\n}\n\n/* When the navigation is opened */\n.nav-opened .menu-button {\n    padding: 0 12px;\n    background: #111;\n    border-color: #111;\n    color: #fff;\n    -webkit-transform: translate3D(94px, 0, 0);\n        -ms-transform: translate3D(94px, 0, 0);\n            transform: translate3D(94px, 0, 0);\n    -webkit-transition: all 0.3s ease;\n            transition: all 0.3s ease;\n}\n\n.nav-opened .menu-button .word {\n    opacity: 0;\n    -webkit-transition: all 0.3s ease;\n            transition: all 0.3s ease;\n}\n\n/* Special styles when overlaid on an image*/\n.main-nav.overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 70px;\n    border: none;\n    background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);\n    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%);\n}\n.no-cover .main-nav.overlay {\n    background: none;\n}\n\n/* The details of your blog. Defined in ghost/settings/ */\n.page-title {\n    margin: 10px 0 10px 0;\n    font-size: 5rem;\n    letter-spacing: -1px;\n    font-weight: 700;\n    font-family: \"Open Sans\", sans-serif;\n    color: #fff;\n}\n\n.page-description {\n    margin: 0;\n    font-size: 2rem;\n    line-height: 1.5em;\n    font-weight: 400;\n    font-family: \"Merriweather\", serif;\n    letter-spacing: 0.01rem;\n    color: rgba(255,255,255,0.8);\n}\n\n.social-nav {\n    margin-top: 15px;\n}\n\n.social-icon {\n    display: inline-block;\n    text-decoration: none;\n}\n\n.social-icon:hover {\n    opacity: 0.5;\n}\n\n.social-icon span {\n    display: inline-block;\n}\n\n.no-cover.main-header {\n    min-height: 160px;\n    max-height: 40vh;\n    background: #f5f8fa;\n}\n\n.no-cover .page-title {\n    color: rgba(0,0,0,0.8);\n}\n\n.no-cover .page-description {\n    color: rgba(0,0,0,0.5);\n}\n\n/* Add subtle load-in animation for content on the home page */\n.home-template .page-title {\n    -webkit-animation: fade-in-down 0.6s;\n    animation: fade-in-down 0.6s;\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n.home-template .page-description {\n    -webkit-animation: fade-in-down 0.9s;\n    animation: fade-in-down 0.9s;\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n/* Every post, on every page, gets this style on its <article> tag */\n.post {\n    position: relative;\n    width: 80%;\n    max-width: 710px;\n    margin: 4rem auto;\n    padding-bottom: 4rem;\n    border-bottom: #EBF2F6 1px solid;\n    word-wrap: break-word;\n}\n\n/* Add a little circle in the middle of the border-bottom on our .post\n   just for the lolz and stylepoints. */\n.post:after {\n    display: block;\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border: #E7EEF2 1px solid;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #FFF;\n    border-radius: 100%;\n    box-shadow: #FFF 0 0 0 5px;\n}\n\nbody:not(.post-template) .post-title {\n    font-size: 3.6rem;\n}\n\n.post-title a {\n    text-decoration: none;\n}\n\n.post-excerpt p {\n    margin: 0;\n    font-size: 0.9em;\n    line-height: 1.7em;\n}\n\n.read-more {\n    text-decoration: none;\n}\n\n.post-meta {\n    display: block;\n    margin: 1.75rem 0 0 0;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 2.2rem;\n    color: #9EABB3;\n}\n\n.author-thumb {\n    width: 24px;\n    height: 24px;\n    float: left;\n    margin-right: 9px;\n    border-radius: 100%;\n}\n\n.post-meta a {\n    color: #9EABB3;\n    text-decoration: none;\n}\n\n.post-meta a:hover {\n    text-decoration: underline;\n}\n\n.user-meta {\n    position: relative;\n    padding: 0.3rem 40px 0 100px;\n    min-height: 77px;\n}\n\n.post-date {\n    display: inline-block;\n    margin-left: 8px;\n    padding-left: 12px;\n    border-left: #d5dbde 1px solid;\n    text-transform: uppercase;\n    font-size: 1.3rem;\n    white-space: nowrap;\n}\n\n.user-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.user-name {\n    display: block;\n    font-weight: 700;\n}\n\n.user-bio {\n    display: block;\n    max-width: 440px;\n    font-size: 1.4rem;\n    line-height: 1.5em;\n}\n\n.publish-meta {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 4.3rem 0 4rem 0;\n    text-align: right;\n}\n\n.publish-heading {\n    display: block;\n    font-weight: 700;\n}\n\n.publish-date {\n    display: block;\n    font-size: 1.4rem;\n    line-height: 1.5em;\n}\n\n\n/* ==========================================================================\n   5. Single Post - When you click on an individual post\n   ========================================================================== */\n\n.post-template .post-header {\n   margin-bottom: 3.4rem;\n}\n\n.post-template .social-nav {\n    float: right;\n    margin-top: 3px;\n    margin-right: 15px;\n}\n\n.post-template .post-title {\n    margin-bottom: 0;\n}\n\n.post-template .post-meta {\n    margin: 0;\n}\n\n.post-template .post-date {\n    padding: 0;\n    margin: 0;\n    border: none;\n}\n\n/* Stop elements, such as img wider than the post content, from\n   creating horizontal scroll - slight hack due to imperfections\n   with browser width % calculations and rounding */\n.post-template .content {\n    overflow: hidden;\n}\n\n/* Tweak the .post wrapper style */\n.post-template .post {\n    margin-top: 0;\n    border-bottom: none;\n    padding-bottom: 0;\n}\n\n/* Kill that stylish little circle that was on the border, too */\n.post-template .post:after {\n    display: none;\n}\n\n/* Keep images centered, and allow images wider than the main\n   text column to break out. */\n.post-content img {\n    display: block;\n    max-width: 126%;\n    height: auto;\n    padding: 0.6em 0;\n    /* Centers an image by (1) pushing its left edge to the\n       center of its container and (2) shifting the entire image\n       in the opposite direction by half its own width.\n       Works for images that are larger than their containers. */\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%); /* for Safari and iOS */\n    -ms-transform: translateX(-50%); /* for IE9 */\n    transform: translateX(-50%);\n}\n\n.footnotes {\n    font-style: italic;\n    font-size: 1.3rem;\n    line-height: 1.6em;\n}\n\n.footnotes li {\n    margin: 0.6rem 0;\n}\n\n.footnotes p {\n    margin: 0;\n}\n\n.footnotes p a:last-child {\n    text-decoration: none;\n}\n\n\n/* The author credit area after the post */\n.post-footer {\n    position: relative;\n    margin: 6rem 0 0 0;\n    padding: 6rem 0 0 0;\n    border-top: #EBF2F6 1px solid;\n}\n\n.post-footer h4 {\n    font-size: 1.8rem;\n    margin: 0;\n}\n\n.post-footer p {\n    margin: 1rem 0;\n    font-size: 1.4rem;\n    line-height: 1.75em;\n}\n\n/* list of author links - location / url */\n.author-meta {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    font-size: 1.4rem;\n    line-height: 1;\n    font-style: italic;\n    color: #9EABB3;\n}\n\n.author-meta a {\n    color: #9EABB3;\n}\n.author-meta a:hover {\n    color: #111;\n}\n\n/* Create some space to the right for the share links */\n.post-footer .author {\n    margin-right: 180px;\n}\n\n.post-footer h4 a {\n    color: #2e2e2e;\n    text-decoration: none;\n}\n\n.post-footer h4 a:hover {\n    text-decoration: underline;\n}\n\n/* Drop the share links in the space to the right.\n   Doing it like this means it's easier for the author bio\n   to be flexible at smaller screen sizes while the share\n   links remain at a fixed width the whole time */\n.post-footer .share {\n    position: absolute;\n    top: 6rem;\n    right: 0;\n    width: 140px;\n}\n\n.post-footer .share a {\n    font-size: 1.8rem;\n    display: inline-block;\n    margin: 1rem 1.6rem 1.6rem 0;\n    color: #BBC7CC;\n    text-decoration: none;\n}\n\n.post-footer .share .icon-twitter:hover {\n    color: #55acee;\n}\n.post-footer .share .icon-facebook:hover {\n    color: #3b5998;\n}\n.post-footer .share .icon-google-plus:hover {\n    color: #dd4b39;\n}\n\n\n/* ==========================================================================\n   6. Author profile\n   ========================================================================== */\n\n.post-head.main-header {\n    height: 65vh;\n    min-height: 180px;\n}\n\n.no-cover.post-head.main-header {\n    height: 85px;\n    min-height: 0;\n    margin-bottom: 0;\n    background: transparent;\n}\n\n.tag-head.main-header {\n    height: 40vh;\n    min-height: 180px;\n}\n\n.author-head.main-header {\n    height: 40vh;\n    min-height: 180px;\n}\n\n.no-cover.author-head.main-header {\n    height: 10vh;\n    min-height: 100px;\n    background: transparent;\n}\n\n.author-profile {\n    padding: 0 15px 5rem 15px;\n    border-bottom: #EBF2F6 1px solid;\n    text-align: center;\n}\n\n/* Add a little circle in the middle of the border-bottom */\n.author-profile:after {\n    display: block;\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border: #E7EEF2 1px solid;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #FFF;\n    border-radius: 100%;\n    box-shadow: #FFF 0 0 0 5px;\n}\n\n.author-image {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    top: -40px;\n    left: 50%;\n    margin-left: -40px;\n    width: 80px;\n    height: 80px;\n    border-radius: 100%;\n    overflow: hidden;\n    padding: 6px;\n    background: #fff;\n    z-index: 2;\n    box-shadow: #E7EEF2 0 0 0 1px;\n}\n\n.author-image .img {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center center;\n    border-radius: 100%;\n}\n\n.author-profile .author-image {\n    position: relative;\n    left: auto;\n    top: auto;\n    width: 120px;\n    height: 120px;\n    padding: 3px;\n    margin: -100px auto 0 auto;\n    box-shadow: none;\n}\n\n.author-title {\n    margin: 1.5rem 0 1rem;\n}\n\n.author-bio {\n    font-size: 1.8rem;\n    line-height: 1.5em;\n    font-weight: 200;\n    color: #50585D;\n    letter-spacing: 0;\n    text-indent: 0;\n}\n\n.author-meta {\n    margin: 1.6rem 0;\n}\n/* Location, website, and link */\n.author-profile .author-meta {\n    margin: 2rem 0;\n    font-family: \"Merriweather\", serif;\n    letter-spacing: 0.01rem;\n    font-size: 1.7rem;\n}\n.author-meta span {\n    display: inline-block;\n    margin: 0 2rem 1rem 0;\n    word-wrap: break-word;\n}\n.author-meta a {\n    text-decoration: none;\n}\n\n/* Turn off meta for page2+ to make room for extra\n   pagination prev/next links */\n.archive-template .author-profile .author-meta {\n    display: none;\n}\n\n\n/* ==========================================================================\n   7. Read More - Next/Prev Post Links\n   ========================================================================== */\n\n.read-next {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    margin-top: 10rem;\n}\n\n.read-next-story {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    min-width: 50%;\n    text-decoration: none;\n    position: relative;\n    text-align: center;\n    color: #fff;\n    background: #222 no-repeat center center;\n    background-size: cover;\n    overflow: hidden;\n}\n.read-next-story:hover:before {\n    background: rgba(0,0,0,0.8);\n    -webkit-transition: all 0.2s ease;\n            transition: all 0.2s ease;\n}\n.read-next-story:hover .post:before {\n    color: #222;\n    background: #fff;\n    -webkit-transition: all 0.2s ease;\n            transition: all 0.2s ease;\n}\n\n.read-next-story:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,0.7);\n    -webkit-transition: all 0.5s ease;\n            transition: all 0.5s ease;\n}\n\n.read-next-story .post {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n}\n\n.read-next-story .post:before {\n    content: \"Read This Next\";\n    padding: 4px 10px 5px;\n    text-transform: uppercase;\n    font-size: 1.1rem;\n    font-family: \"Open Sans\", sans-serif;\n    color: rgba(255,255,255,0.8);\n    border: rgba(255,255,255,0.5) 1px solid;\n    border-radius: 4px;\n    -webkit-transition: all 0.5s ease;\n            transition: all 0.5s ease;\n}\n.read-next-story.prev .post:before {\n    content: \"You Might Enjoy\";\n}\n\n.read-next-story h2 {\n    margin-top: 1rem;\n    color: #fff;\n}\n\n.read-next-story p {\n    margin: 0;\n    color: rgba(255,255,255,0.8);\n}\n\n/* Special styles for posts with no cover images */\n.read-next-story.no-cover {\n    background: #f5f8fa;\n}\n\n.read-next-story.no-cover:before {\n    display: none;\n}\n\n.read-next-story.no-cover .post:before {\n    color: rgba(0,0,0,0.5);\n    border-color: rgba(0,0,0,0.2);\n}\n\n.read-next-story.no-cover h2 {\n    color: rgba(0,0,0,0.8);\n}\n\n.read-next-story.no-cover p {\n    color: rgba(0,0,0,0.5);\n}\n\n/* if there are two posts without covers, put a border between them */\n.read-next-story.no-cover + .read-next-story.no-cover {\n    border-left: rgba(0,0,100,0.04) 1px solid;\n}\n\n/* Correctly position site-footer when next to the .read-next container */\n.read-next + .site-footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: 0;\n}\n\n/* ==========================================================================\n   8. Third Party Elements - Embeds from other services\n   ========================================================================== */\n\n/* Github */\n.gist table {\n    margin: 0;\n    font-size: 1.4rem;\n}\n.gist td {\n    line-height: 1.4;\n}\n.gist .line-number {\n    min-width: 25px;\n}\n\n/* Pastebin */\n.content .embedPastebin {\n    margin-bottom: 1.75em;\n}\n\n\n/* ==========================================================================\n   9. Pagination - Tools to let you flick between pages\n   ========================================================================== */\n\n/* The main wrapper for our pagination links */\n.pagination {\n    position: relative;\n    width: 80%;\n    max-width: 710px;\n    margin: 4rem auto;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.3rem;\n    color: #9EABB3;\n    text-align: center;\n}\n\n.pagination a {\n    color: #9EABB3;\n    -webkit-transition: all 0.2s ease;\n            transition: all 0.2s ease;\n}\n\n/* Push the previous/next links out to the left/right */\n.older-posts,\n.newer-posts {\n    position: absolute;\n    display: inline-block;\n    padding: 0 15px;\n    border: #bfc8cd 1px solid;\n    text-decoration: none;\n    border-radius: 4px;\n    -webkit-transition: border 0.3s ease;\n            transition: border 0.3s ease;\n}\n\n.older-posts {\n    right: 0;\n}\n\n.page-number {\n    display: inline-block;\n    padding: 2px 0;\n    min-width: 100px;\n}\n\n.newer-posts {\n    left: 0;\n}\n\n.older-posts:hover,\n.newer-posts:hover {\n    color: #889093;\n    border-color: #98a0a4;\n}\n\n.extra-pagination {\n    display: none;\n    border-bottom: #EBF2F6 1px solid;\n}\n.extra-pagination:after {\n    display: block;\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border: #E7EEF2 1px solid;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #FFF;\n    border-radius: 100%;\n    box-shadow: #FFF 0 0 0 5px;\n}\n.extra-pagination .pagination {\n    width: auto;\n}\n\n/* On page2+ make all the headers smaller */\n.archive-template .main-header {\n    max-height: 30vh;\n}\n\n/* On page2+ show extra pagination controls at the top of post list */\n.archive-template .extra-pagination {\n    display: block;\n}\n\n\n/* ==========================================================================\n   10. Footer - The bottom of every page\n   ========================================================================== */\n\n.site-footer {\n    position: relative;\n    margin: 8rem 0 0 0;\n    padding: 1rem 15px;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1rem;\n    line-height: 1.75em;\n    color: #BBC7CC;\n}\n\n.site-footer a {\n    color: #BBC7CC;\n    text-decoration: none;\n    font-weight: bold;\n}\n\n.site-footer a:hover {\n    border-bottom: #bbc7cc 1px solid;\n}\n\n.poweredby {\n    display: block;\n    width: 45%;\n    float: right;\n    text-align: right;\n}\n\n.copyright {\n    display: block;\n    width: 45%;\n    float: left;\n}\n\n\n/* ==========================================================================\n   11. Media Queries - Smaller than 900px\n   ========================================================================== */\n\n@media only screen and (max-width: 900px) {\n\n    blockquote {\n        margin-left: 0;\n    }\n\n    .main-header {\n        box-sizing: border-box;\n        height: auto;\n        min-height: 240px;\n        height: 60vh;\n        padding: 15% 0;\n    }\n\n    .scroll-down,\n    .home-template .main-header:after { display: none; }\n\n    .archive-template .main-header {\n        min-height: 180px;\n        padding: 10% 0;\n    }\n\n    .blog-logo img {\n        padding: 4px 0;\n    }\n\n    .page-title {\n        font-size: 4rem;\n        letter-spacing: -1px;\n    }\n\n    .page-description {\n        font-size: 1.8rem;\n        line-height: 1.5em;\n    }\n\n    .post {\n        font-size: 0.95em\n    }\n\n    body:not(.post-template) .post-title {\n        font-size: 3.2rem;\n    }\n\n    hr {\n        margin: 2.4em 0;\n    }\n\n    ol, ul {\n        padding-left: 2em;\n    }\n\n    h1 {\n        font-size: 4.5rem;\n        text-indent: -2px;\n    }\n\n    h2 {\n        font-size: 3.6rem;\n    }\n\n    h3 {\n        font-size: 3.1rem;\n    }\n\n    h4 {\n        font-size: 2.5rem;\n    }\n\n    h5 {\n        font-size: 2.2rem;\n    }\n\n    h6 {\n        font-size: 1.8rem;\n    }\n\n    .author-profile {\n        padding-bottom: 4rem;\n    }\n\n    .author-profile .author-bio {\n        font-size: 1.6rem;\n    }\n\n    .author-meta span {\n        display: block;\n        margin: 1.5rem 0;\n    }\n    .author-profile .author-meta span {\n        font-size: 1.6rem;\n    }\n\n    .post-head.main-header {\n        height:45vh;\n    }\n\n    .tag-head.main-header,\n    .author-head.main-header {\n        height: 30vh;\n    }\n\n    .no-cover.post-head.main-header {\n        height: 55px;\n        padding: 0;\n    }\n\n    .no-cover.author-head.main-header {\n        padding: 0;\n    }\n\n    .read-next {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        margin-top: 4rem;\n    }\n\n    .read-next p {\n        display: none;\n    }\n\n    .read-next-story.no-cover + .read-next-story.no-cover {\n        border-top: rgba(0,0,100,0.06) 1px solid;\n        border-left: none;\n    }\n\n}\n\n\n/* ==========================================================================\n   12. Media Queries - Smaller than 500px\n   ========================================================================== */\n\n@media only screen and (max-width: 500px) {\n\n    .main-header {\n        margin-bottom: 15px;\n        height: 40vh;\n    }\n\n    .no-cover.main-header {\n        height: 30vh;\n    }\n\n    .archive-template .main-header {\n        max-height: 20vh;\n        min-height: 160px;\n        padding: 10% 0;\n    }\n\n    .main-nav {\n        padding: 5px;\n        margin-bottom: 2rem;\n    }\n\n    .blog-logo {\n        padding: 5px;\n    }\n\n    .blog-logo img {\n        height: 30px;\n    }\n\n    .menu-button {\n        padding: 0 5px;\n        border-radius: 0;\n        border-width: 0;\n        color: #2e2e2e;\n        background: transparent;\n    }\n    .menu-button:hover {\n        color: #2e2e2e;\n        border-color: transparent;\n        background: none;\n    }\n    body.nav-opened .menu-button {\n        background: none;\n        border: transparent;\n    }\n\n    .main-nav.overlay a:hover {\n        color: #fff;\n        border-color: transparent;\n        background: transparent;\n    }\n\n    .no-cover .main-nav.overlay {\n        background: none;\n    }\n    .no-cover .main-nav.overlay .menu-button {\n        border: none;\n    }\n\n    .main-nav.overlay .menu-button {\n        border-color: transparent;\n    }\n\n    .nav-title {\n        top: 25px;\n\n    }\n\n    .nav-close {\n        position: absolute;\n        top: 18px;\n    }\n\n    .nav ul {\n        padding: 60px 9% 5%;\n    }\n\n    .inner,\n    .pagination {\n        width: auto;\n        margin: 2rem auto;\n    }\n\n    .post {\n        width: auto;\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        margin-left: 16px;\n        margin-right: 16px;\n        padding-bottom: 2rem;\n        line-height: 1.65em;\n    }\n\n    .post-date {\n        display: none;\n    }\n\n    .post-template .post-header {\n        margin-bottom: 2rem;\n    }\n\n    .post-template .post-date {\n        display: inline-block;\n    }\n\n    hr {\n        margin: 1.75em 0;\n    }\n\n    p, ul, ol, dl {\n        font-size: 0.95em;\n        margin: 0 0 2.5rem 0;\n    }\n\n    .page-title {\n        font-size: 3rem;\n    }\n\n    .post-excerpt p {\n        font-size: 0.85em;\n    }\n\n    .page-description {\n        font-size: 1.6rem;\n    }\n\n    h1, h2, h3,\n    h4, h5, h6 {\n        margin: 0 0 0.3em 0;\n    }\n\n    h1 {\n        font-size: 2.8rem;\n        letter-spacing: -1px;\n    }\n\n    h2 {\n        font-size: 2.4rem;\n        letter-spacing: 0;\n    }\n\n    h3 {\n        font-size: 2.1rem;\n    }\n\n    h4 {\n        font-size: 1.9rem;\n    }\n\n    h5 {\n        font-size: 1.8rem;\n    }\n\n    h6 {\n        font-size: 1.8rem;\n    }\n\n    body:not(.post-template) .post-title {\n        font-size: 2.5rem;\n    }\n\n    .post-template .site-footer {\n        margin-top: 0;\n    }\n\n    .post-content img {\n        padding: 0;\n        width: calc(100% + 32px); /* expand with to image + margins */\n        min-width: 0;\n        max-width: 112%; /* fallback when calc doesn't work */\n    }\n\n    .post-meta {\n        font-size: 1.3rem;\n        margin-top: 1rem;\n    }\n\n    .post-footer {\n        padding: 5rem 0 3rem 0;\n        text-align: center;\n    }\n\n    .post-footer .author {\n        margin: 0 0 2rem 0;\n        padding: 0 0 1.6rem 0;\n        border-bottom: #EBF2F6 1px dashed;\n    }\n\n    .post-footer .share {\n        position: static;\n        width: auto;\n    }\n\n    .post-footer .share a {\n        margin: 1.4rem 0.8rem 0 0.8rem;\n    }\n\n    .author-meta li {\n        float: none;\n        margin: 0;\n        line-height: 1.75em;\n    }\n\n    .author-meta li:before {\n        display: none;\n    }\n\n    .older-posts,\n    .newer-posts {\n        position: static;\n        margin: 10px 0;\n    }\n\n    .page-number {\n        display: block;\n    }\n\n    .site-footer {\n        margin-top: 3rem;\n    }\n\n    .author-profile {\n        padding-bottom: 2rem;\n    }\n\n    .post-head.main-header {\n        height: 30vh;\n    }\n\n    .tag-head.main-header,\n    .author-head.main-header {\n        height: 20vh;\n    }\n\n    .author-profile .author-image {\n        margin-top: -70px;\n    }\n\n    .author-profile .author-meta span {\n        font-size: 1.4rem;\n    }\n\n    .archive-template .main-header .page-description {\n        display: none;\n    }\n\n    .read-next {\n        margin-top: 2rem;\n        margin-bottom: -37px;\n    }\n\n    .read-next .post {\n        width: 100%;\n    }\n\n}\n\n\n/* ==========================================================================\n   13. Animations\n   ========================================================================== */\n\n/* Used to fade in title/desc on the home page */\n@-webkit-keyframes fade-in-down {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(-10px);\n        transform: translateY(-10px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n}\n@keyframes fade-in-down {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(-10px);\n        transform: translateY(-10px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n}\n\n/* Used to bounce .scroll-down on home page */\n@-webkit-keyframes bounce {\n    0%, 10%, 25%, 40%, 50% {\n        -webkit-transform: translateY(0) rotate(-90deg);\n                transform: translateY(0) rotate(-90deg);\n    }\n    20% {\n        -webkit-transform: translateY(-10px) rotate(-90deg);\n                transform: translateY(-10px) rotate(-90deg);\n    }\n    30% {\n        -webkit-transform: translateY(-5px) rotate(-90deg);\n                transform: translateY(-5px) rotate(-90deg);\n    }\n}\n@keyframes bounce {\n    0%, 20%, 50%, 80%, 100% {\n        -webkit-transform: translateY(0) rotate(-90deg);\n                transform: translateY(0) rotate(-90deg);\n    }\n    40% {\n        -webkit-transform: translateY(-10px) rotate(-90deg);\n                transform: translateY(-10px) rotate(-90deg);\n    }\n    60% {\n        -webkit-transform: translateY(-5px) rotate(-90deg);\n                transform: translateY(-5px) rotate(-90deg);\n    }\n}\n\n\n/* ==========================================================================\n   End of file. Animations should be the last thing here. Do not add stuff\n   below this point, or it will probably fuck everything up.\n   ========================================================================== */\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./fontello.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./fontello.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'fontello';\n  src: url(" + __webpack_require__(12) + ");\n  src: url(" + __webpack_require__(12) + "#iefix) format('embedded-opentype'),\n       url(" + __webpack_require__(13) + ") format('woff'),\n       url(" + __webpack_require__(14) + ") format('truetype'),\n       url(" + __webpack_require__(15) + "#fontello) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: 'fontello';\n    src: url('../fonts/fontello.svg?34616861#fontello') format('svg');\n  }\n}\n*/\n\n [class^=\"fontello-\"]:before, [class*=\" fontello-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n\n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n\n.fontello-github:before { content: '\\E800'; } /* '' */\n.fontello-twitter:before { content: '\\E801'; } /* '' */\n.fontello-linkedin:before { content: '\\E802'; } /* '' */\n.fontello-stackoverflow:before { content: '\\E803'; } /* '' */", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./prism.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./prism.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+bash+docker+markdown+php+python+ruby+scss */\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n    color: black;\n    text-shadow: 0 1px white;\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n    text-shadow: none;\n    background: #b3d4fc;\n}\n\n@media print {\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n        text-shadow: none;\n    }\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n    background: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n    padding: .1em;\n    border-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: slategray;\n}\n\n.token.punctuation {\n    color: #999;\n}\n\n.namespace {\n    opacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n    color: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n    color: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n    color: #a67f59;\n    background: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n    color: #07a;\n}\n\n.token.function {\n    color: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n    color: #e90;\n}\n\n.token.important,\n.token.bold {\n    font-weight: bold;\n}\n.token.italic {\n    font-style: italic;\n}\n\n.token.entity {\n    cursor: help;\n}", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+bash+docker+markdown+php+python+ruby+scss */
	"use strict";

	var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	    Prism = (function () {
	  var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
	      t = _self.Prism = { util: { encode: function encode(e) {
	        return e instanceof n ? new n(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
	      }, type: function type(e) {
	        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
	      }, clone: function clone(e) {
	        var n = t.util.type(e);switch (n) {case "Object":
	            var a = {};for (var r in e) e.hasOwnProperty(r) && (a[r] = t.util.clone(e[r]));return a;case "Array":
	            return e.map && e.map(function (e) {
	              return t.util.clone(e);
	            });}return e;
	      } }, languages: { extend: function extend(e, n) {
	        var a = t.util.clone(t.languages[e]);for (var r in n) a[r] = n[r];return a;
	      }, insertBefore: function insertBefore(e, n, a, r) {
	        r = r || t.languages;var i = r[e];if (2 == arguments.length) {
	          a = arguments[1];for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]);return i;
	        }var o = {};for (var s in i) if (i.hasOwnProperty(s)) {
	          if (s == n) for (var l in a) a.hasOwnProperty(l) && (o[l] = a[l]);o[s] = i[s];
	        }return (t.languages.DFS(t.languages, function (t, n) {
	          n === r[e] && t != e && (this[t] = o);
	        }), r[e] = o);
	      }, DFS: function DFS(e, n, a) {
	        for (var r in e) e.hasOwnProperty(r) && (n.call(e, r, e[r], a || r), "Object" === t.util.type(e[r]) ? t.languages.DFS(e[r], n) : "Array" === t.util.type(e[r]) && t.languages.DFS(e[r], n, r));
	      } }, plugins: {}, highlightAll: function highlightAll(e, n) {
	      for (var a, r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), i = 0; a = r[i++];) t.highlightElement(a, e === !0, n);
	    }, highlightElement: function highlightElement(a, r, i) {
	      for (var l, o, s = a; s && !e.test(s.className);) s = s.parentNode;s && (l = (s.className.match(e) || [, ""])[1], o = t.languages[l]), a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, s = a.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);var u = a.textContent,
	          g = { element: a, language: l, grammar: o, code: u };if (!u || !o) return (t.hooks.run("complete", g), void 0);if ((t.hooks.run("before-highlight", g), r && _self.Worker)) {
	        var c = new Worker(t.filename);c.onmessage = function (e) {
	          g.highlightedCode = n.stringify(JSON.parse(e.data), l), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(g.element), t.hooks.run("after-highlight", g), t.hooks.run("complete", g);
	        }, c.postMessage(JSON.stringify({ language: g.language, code: g.code, immediateClose: !0 }));
	      } else g.highlightedCode = t.highlight(g.code, g.grammar, g.language), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(a), t.hooks.run("after-highlight", g), t.hooks.run("complete", g);
	    }, highlight: function highlight(e, a, r) {
	      var i = t.tokenize(e, a);return n.stringify(t.util.encode(i), r);
	    }, tokenize: function tokenize(e, n) {
	      var a = t.Token,
	          r = [e],
	          i = n.rest;if (i) {
	        for (var l in i) n[l] = i[l];delete n.rest;
	      }e: for (var l in n) if (n.hasOwnProperty(l) && n[l]) {
	        var o = n[l];o = "Array" === t.util.type(o) ? o : [o];for (var s = 0; s < o.length; ++s) {
	          var u = o[s],
	              g = u.inside,
	              c = !!u.lookbehind,
	              f = 0,
	              h = u.alias;u = u.pattern || u;for (var p = 0; p < r.length; p++) {
	            var d = r[p];if (r.length > e.length) break e;if (!(d instanceof a)) {
	              u.lastIndex = 0;var m = u.exec(d);if (m) {
	                c && (f = m[1].length);var y = m.index - 1 + f,
	                    m = m[0].slice(f),
	                    v = m.length,
	                    k = y + v,
	                    b = d.slice(0, y + 1),
	                    w = d.slice(k + 1),
	                    N = [p, 1];b && N.push(b);var O = new a(l, g ? t.tokenize(m, g) : m, h);N.push(O), w && N.push(w), Array.prototype.splice.apply(r, N);
	              }
	            }
	          }
	        }
	      }return r;
	    }, hooks: { all: {}, add: function add(e, n) {
	        var a = t.hooks.all;a[e] = a[e] || [], a[e].push(n);
	      }, run: function run(e, n) {
	        var a = t.hooks.all[e];if (a && a.length) for (var r, i = 0; r = a[i++];) r(n);
	      } } },
	      n = t.Token = function (e, t, n) {
	    this.type = e, this.content = t, this.alias = n;
	  };if ((n.stringify = function (e, a, r) {
	    if ("string" == typeof e) return e;if ("Array" === t.util.type(e)) return e.map(function (t) {
	      return n.stringify(t, a, e);
	    }).join("");var i = { type: e.type, content: n.stringify(e.content, a, r), tag: "span", classes: ["token", e.type], attributes: {}, language: a, parent: r };if (("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias)) {
	      var l = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(i.classes, l);
	    }t.hooks.run("wrap", i);var o = "";for (var s in i.attributes) o += (o ? " " : "") + s + '="' + (i.attributes[s] || "") + '"';return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + o + ">" + i.content + "</" + i.tag + ">";
	  }, !_self.document)) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
	    var n = JSON.parse(e.data),
	        a = n.language,
	        r = n.code,
	        i = n.immediateClose;_self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r, t.languages[a])))), i && _self.close();
	  }, !1), _self.Prism) : _self.Prism;var a = document.getElementsByTagName("script");return (a = a[a.length - 1], a && (t.filename = a.src, document.addEventListener && !a.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), _self.Prism);
	})();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
	Prism.languages.markup = { comment: /<!--[\w\W]*?-->/, prolog: /<\?[\w\W]+?\?>/, doctype: /<!DOCTYPE[\w\W]+?>/, cdata: /<!\[CDATA\[[\w\W]*?]]>/i, tag: { pattern: /<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.hooks.add("wrap", function (a) {
	  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
	}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
	Prism.languages.css = { comment: /\/\*[\w\W]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i, inside: { tag: { pattern: /<style[\w\W]*?>|<\/style>/i, inside: Prism.languages.markup.tag.inside }, rest: Prism.languages.css }, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
	Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
	Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0 } }), Prism.languages.insertBefore("javascript", "class-name", { "template-string": { pattern: /`(?:\\`|\\?[^`])*`/, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i, inside: { tag: { pattern: /<script[\w\W]*?>|<\/script>/i, inside: Prism.languages.markup.tag.inside }, rest: Prism.languages.javascript }, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
	Prism.languages.bash = Prism.languages.extend("clike", { comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 }, string: { pattern: /("|')(\\?[\s\S])*?\1/, inside: { property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/ } }, number: { pattern: /([^\w\.])-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/, lookbehind: !0 }, "function": /\b(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)\b/, keyword: /\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/ }), Prism.languages.insertBefore("bash", "keyword", { property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/ }), Prism.languages.insertBefore("bash", "comment", { important: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/ });
	Prism.languages.docker = { keyword: { pattern: /(^\s*)(?:ONBUILD|FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|COPY|VOLUME|USER|WORKDIR|CMD|LABEL|ENTRYPOINT)(?=\s)/im, lookbehind: !0 }, string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/, comment: /#.*/, punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/ };
	Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", { blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, code: [{ pattern: /^(?: {4}|\t).+/m, alias: "keyword" }, { pattern: /``.+?``|`[^`\n]+`/, alias: "keyword" }], title: [{ pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/, lookbehind: !0, inside: { punctuation: /^\*\*|^__|\*\*$|__$/ } }, italic: { pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/, lookbehind: !0, inside: { punctuation: /^[*_]|[*_]$/ } }, url: { pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/, inside: { variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ } } } }), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold);
	Prism.languages.php = Prism.languages.extend("clike", { keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i, constant: /\b[A-Z0-9_]{2,}\b/, comment: { pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/, lookbehind: !0 } }), Prism.languages.insertBefore("php", "class-name", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), Prism.languages.insertBefore("php", "keyword", { delimiter: /\?>|<\?(?:php)?/i, variable: /\$\w+\b/i, "package": { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), Prism.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
	  "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function (n) {
	    return (e.tokenStack.push(n), "{{{PHP" + e.tokenStack.length + "}}}");
	  }));
	}), Prism.hooks.add("before-insert", function (e) {
	  "php" === e.language && (e.code = e.backupCode, delete e.backupCode);
	}), Prism.hooks.add("after-highlight", function (e) {
	  if ("php" === e.language) {
	    for (var n, a = 0; n = e.tokenStack[a]; a++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (a + 1) + "}}}", Prism.highlight(n, e.grammar, "php"));e.element.innerHTML = e.highlightedCode;
	  }
	}), Prism.hooks.add("wrap", function (e) {
	  "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'));
	}), Prism.languages.insertBefore("php", "comment", { markup: { pattern: /<[^?]\/?(.*?)>/, inside: Prism.languages.markup }, php: /\{\{\{PHP[0-9]+\}\}\}/ }));
	Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 }, string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/, "function": { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)[a-z0-9_]+/i, lookbehind: !0 }, keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/, "boolean": /\b(?:True|False)\b/, number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/, punctuation: /[{}[\];(),.:]/ };
	!(function (e) {
	  e.languages.ruby = e.languages.extend("clike", { comment: /#(?!\{[^\r\n]*?\}).*/, keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/ });var n = { pattern: /#\{[^}]+\}/, inside: { delimiter: { pattern: /^#\{|\}$/, alias: "tag" }, rest: e.util.clone(e.languages.ruby) } };e.languages.insertBefore("ruby", "keyword", { regex: [{ pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/, inside: { interpolation: n } }, { pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/, inside: { interpolation: n } }, { pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/, inside: { interpolation: n } }, { pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/, inside: { interpolation: n } }, { pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/, inside: { interpolation: n } }, { pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0 }], variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/, symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/ }), e.languages.insertBefore("ruby", "number", { builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/, constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/ }), e.languages.ruby.string = [{ pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/, inside: { interpolation: n } }, { pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/, inside: { interpolation: n } }, { pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/, inside: { interpolation: n } }, { pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/, inside: { interpolation: n } }, { pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/, inside: { interpolation: n } }, { pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/, inside: { interpolation: n } }];
	})(Prism);
	Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m, inside: { placeholder: /%[-_\w]+/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.insertBefore("scss", "property", { variable: /\$[-_\w]+|#\{\$[-_\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-_\w]+/, alias: "selector" }, statement: /\B!(?:default|optional)\b/i, "boolean": /\b(?:true|false)\b/, "null": /\bnull\b/, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports) {

	/*global jQuery */
	/*jshint browser:true */
	'use strict';

	(function ($) {

	  "use strict";

	  $.fn.fitVids = function (options) {
	    var settings = {
	      customSelector: null
	    };

	    if (!document.getElementById('fit-vids-style')) {
	      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
	      var head = document.head || document.getElementsByTagName('head')[0];
	      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
	      var div = document.createElement('div');
	      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
	      head.appendChild(div.childNodes[1]);
	    }

	    if (options) {
	      $.extend(settings, options);
	    }

	    return this.each(function () {
	      var selectors = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];

	      if (settings.customSelector) {
	        selectors.push(settings.customSelector);
	      }

	      var $allVideos = $(this).find(selectors.join(','));
	      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

	      $allVideos.each(function () {
	        var $this = $(this);
	        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
	          return;
	        }
	        var height = this.tagName.toLowerCase() === 'object' || $this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)) ? parseInt($this.attr('height'), 10) : $this.height(),
	            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
	            aspectRatio = height / width;
	        if (!$this.attr('id')) {
	          var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
	          $this.attr('id', videoID);
	        }
	        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', aspectRatio * 100 + "%");
	        $this.removeAttr('height').removeAttr('width');
	      });
	    });
	  };
	  // Works with either jQuery or Zepto
	})(window.jQuery || window.Zepto);
	/*!
	* FitVids 1.1
	*
	* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
	* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
	* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
	*
	*/

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Main JS file for Casper behaviours
	 */

	"use strict";

	(function ($, undefined) {
	    "use strict";

	    var $document = $(document);

	    $document.ready(function () {

	        var $postContent = $(".post-content");
	        $postContent.fitVids();

	        $(".scroll-down").arctic_scroll();

	        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
	            e.preventDefault();
	            $("body").toggleClass("nav-opened nav-closed");
	        });
	    });

	    // Arctic Scroll by Paul Adam Davis
	    // https://github.com/PaulAdamDavis/Arctic-Scroll
	    $.fn.arctic_scroll = function (options) {

	        var defaults = {
	            elem: $(this),
	            speed: 500
	        },
	            allOptions = $.extend(defaults, options);

	        allOptions.elem.click(function (event) {
	            event.preventDefault();
	            var $this = $(this),
	                $htmlBody = $('html, body'),
	                offset = $this.attr('data-offset') ? $this.attr('data-offset') : false,
	                position = $this.attr('data-position') ? $this.attr('data-position') : false,
	                toMove;

	            if (offset) {
	                toMove = parseInt(offset);
	                $htmlBody.stop(true, false).animate({ scrollTop: $(this.hash).offset().top + toMove }, allOptions.speed);
	            } else if (position) {
	                toMove = parseInt(position);
	                $htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
	            } else {
	                $htmlBody.stop(true, false).animate({ scrollTop: $(this.hash).offset().top }, allOptions.speed);
	            }
	        });
	    };
	})(jQuery);
	/* globals jQuery, document */

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var touchMenu = (function () {
	    function touchMenu() {
	        _classCallCheck(this, touchMenu);

	        var _this = this;

	        // Properties
	        this._touchStartPosition = 0;
	        this._touchMovePosition = 0;
	        this._touchEndPosition = 0;
	        this._dragDistanceThreshold = 150;
	        this._dragTimeThreshold = 200;

	        // Creat custom events
	        this._touchStartEvent = new Event('menu.touchstart');
	        this._touchMoveEvent = new Event('menu.touchmove');
	        this._touchEndEvent = new Event('menu.touchend');

	        // If touch support is present
	        if ('ontouchstart' in document.documentElement) {
	            // Add the touchstart event
	            document.body.addEventListener('touchstart', function (e) {
	                var touch = e.changedTouches[0];
	                // Set the touch start position
	                _this._touchStartPosition = {
	                    time: new Date().getTime(),
	                    x: parseInt(touch.clientX, 10),
	                    y: parseInt(touch.clientY, 10)
	                };
	                // Run the document event "menu.touchstart"
	                document.body.dispatchEvent(_this._touchStartEvent);
	            });
	            // Add the touchmove event
	            document.body.addEventListener('touchmove', function (e) {
	                var touch = e.changedTouches[0];
	                // Set the touch move position
	                _this._touchMovePosition = {
	                    time: new Date().getTime(),
	                    x: parseInt(touch.clientX, 10),
	                    y: parseInt(touch.clientY, 10)
	                };
	                // Run the document event "menu.touchend"
	                document.body.dispatchEvent(_this._touchMoveEvent);
	            });
	            // Add the touchend event
	            document.body.addEventListener('touchend', function (e) {
	                var touch = e.changedTouches[0];
	                // Set the touch end position
	                _this._touchEndPosition = {
	                    time: new Date().getTime(),
	                    x: parseInt(touch.clientX, 10),
	                    y: parseInt(touch.clientY, 10)
	                };
	                // Run the document event "zoe.menu.touchend"
	                document.body.dispatchEvent(_this._touchEndEvent);
	            });
	            // Register the event handler for "menu.touchstart"
	            document.body.addEventListener('menu.touchmove', function (e) {
	                // If the nav is opened
	                if (_this.isNavOpened()) {
	                    // Remove the transition duration
	                    $('.nav').css('transition-duration', '0');
	                    $('.site-wrapper').css('transition-duration', '0');
	                }
	            }, false);
	            // Register the event handler for "menu.touchmove"
	            document.body.addEventListener('menu.touchmove', function (e) {
	                // If the nav is opened
	                if (_this.isNavOpened()) {
	                    var delta = _this.getDelta(_this._touchMovePosition);
	                    // Only update if delta is positive
	                    if (delta.x > 0) {
	                        var navWidth = $('.nav').width();
	                        // Update the nav position
	                        $('.nav').css('transform', 'translate3D(' + delta.x + 'px, 0, 0)');
	                        // Update the site wrapper position
	                        $('.site-wrapper').css('transform', 'translate3D(' + (-1 * navWidth + delta.x) + 'px, 0, 0)');
	                    }
	                }
	            }, false);
	            // Register the event handler for "menu.touchend"
	            document.body.addEventListener('menu.touchend', function (e) {
	                // If the nav is opened
	                if (_this.isNavOpened()) {
	                    // Add the transition duration
	                    $('.nav').css('transition-duration', '0.3s');
	                    $('.site-wrapper').css('transition-duration', '0.3s');
	                    var delta = _this.getDelta(_this._touchEndPosition);
	                    // If dragged over 100px within less than 100ms
	                    if (Math.abs(delta.x / 2) > _this._dragDistanceThreshold && delta.time <= _this._dragTimeThreshold || Math.abs(delta.x) > _this._dragDistanceThreshold) {
	                        // Closes the menu
	                        $('.nav, .site-wrapper').removeAttr('style');
	                        $('body').toggleClass('nav-opened nav-closed');
	                    } else {
	                        // Opens the menu
	                        $('.nav').css('transform', 'translate3D(0, 0, 0)');
	                        $('.site-wrapper').css('transform', 'translate3D(-240px, 0, 0)');
	                    }
	                }
	            }, false);
	        }
	    }

	    _createClass(touchMenu, [{
	        key: 'getDelta',

	        /**
	         * Return an delta object of the touch positions
	         *
	         * @param object currentPosition
	         * @ereturn object
	         */
	        value: function getDelta(currentPosition) {
	            return {
	                time: currentPosition.time - this._touchStartPosition.time,
	                x: currentPosition.x - this._touchStartPosition.x,
	                y: currentPosition.y - this._touchStartPosition.y
	            };
	        }
	    }, {
	        key: 'isNavOpened',

	        /**
	         * Checks to see if the nav is opened
	         *
	         * @access public
	         * @return bool
	         */
	        value: function isNavOpened() {
	            return $('body').hasClass('nav-opened');
	        }
	    }]);

	    return touchMenu;
	})();

	exports['default'] = touchMenu;
	;
	module.exports = exports['default'];

/***/ }
/******/ ]);
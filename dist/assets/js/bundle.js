/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.ts":
/*!******************************!*\
  !*** ./src/assets/js/app.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_disable_button_doubleclick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/disable-button-doubleclick */ \"./src/assets/js/modules/disable-button-doubleclick.ts\");\n/* harmony import */ var _modules_init_display_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-display-position */ \"./src/assets/js/modules/init-display-position.ts\");\n/* harmony import */ var _modules_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smooth-scroll */ \"./src/assets/js/modules/smooth-scroll.ts\");\n/* harmony import */ var _modules_scroll_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-animation */ \"./src/assets/js/modules/scroll-animation.ts\");\n/* harmony import */ var _modules_swipe_figure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/swipe-figure */ \"./src/assets/js/modules/swipe-figure.ts\");\n/* harmony import */ var _modules_check_scrolled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/check-scrolled */ \"./src/assets/js/modules/check-scrolled.ts\");\n/* harmony import */ var _modules_nav_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/nav-manager */ \"./src/assets/js/modules/nav-manager.ts\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accordion */ \"./src/assets/js/modules/accordion.ts\");\n/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tab */ \"./src/assets/js/modules/tab.ts\");\n\n\n\n\n\n\n\n\n\nnew _modules_scroll_animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nnew _modules_swipe_figure__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nnew _modules_check_scrolled__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nnew _modules_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nnew _modules_nav_manager__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nconst accordions = document.querySelectorAll(\"[data-accordion]\");\naccordions.forEach((accordionEl) => {\n    new _modules_accordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"](accordionEl);\n});\nnew _modules_tab__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n(0,_modules_init_display_position__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// const swiper = new Swiper(\".my-swiper\", {\n// \tmodules: [Navigation, Pagination, Autoplay],\n// \tpagination: {\n// \t\tel: \".swiper-pagination\",\n// \t},\n// \tnavigation: {\n// \t\tnextEl: \".swiper-button-next\",\n// \t\tprevEl: \".swiper-button-prev\",\n// \t},\n// });\n// Fancybox.bind(\"[data-fancybox]\", {});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_modules_disable_button_doubleclick__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/app.ts?");

/***/ }),

/***/ "./src/assets/js/modules/accordion.ts":
/*!********************************************!*\
  !*** ./src/assets/js/modules/accordion.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Accordion; }\n/* harmony export */ });\nclass Accordion {\n    constructor(domNode) {\n        this.buttonEl = domNode;\n        this.isAnimating = false;\n        const panelId = this.buttonEl.getAttribute(\"data-accordion\");\n        if (!panelId) {\n            throw new Error(\"Accordion button does not have a 'data-accordion' attribute.\");\n        }\n        const isExpanded = this.buttonEl.getAttribute(\"aria-expanded\") || \"false\";\n        this.buttonEl.setAttribute(\"aria-expanded\", isExpanded);\n        this.buttonEl.setAttribute(\"aria-controls\", panelId);\n        const panelEl = document.querySelector(`#${panelId}`);\n        if (!panelEl) {\n            throw new Error(`Element with ID \"${panelId}\" was not found.`);\n        }\n        this.panelEl = panelEl;\n        this.panelEl.setAttribute(\"aria-labelledby\", this.buttonEl.id);\n        this.panelEl.setAttribute(\"aria-hidden\", isExpanded === \"true\" ? \"false\" : \"true\");\n        this.panelEl.style.display = isExpanded === \"true\" ? \"block\" : \"none\";\n        this.closeButtonEl = this.panelEl.querySelector(\"[data-accordion-close]\");\n        this.closeButtonEl?.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n            this.closePanel();\n        });\n        this.buttonEl.addEventListener(\"click\", (e) => {\n            e.preventDefault();\n            if (this.buttonEl.getAttribute(\"aria-expanded\") === \"true\") {\n                this.closePanel();\n            }\n            else {\n                this.openPanel();\n            }\n        });\n    }\n    closePanel() {\n        if (this.isAnimating)\n            return;\n        this.buttonEl.setAttribute(\"aria-expanded\", \"false\");\n        this.buttonEl.classList.remove(\"-is-expanded\");\n        this.panelEl.setAttribute(\"aria-hidden\", \"true\");\n        this.slideUp(this.panelEl);\n    }\n    openPanel() {\n        if (this.isAnimating)\n            return;\n        this.buttonEl.setAttribute(\"aria-expanded\", \"true\");\n        this.buttonEl.classList.add(\"-is-expanded\");\n        this.panelEl.setAttribute(\"aria-hidden\", \"false\");\n        this.slideDown(this.panelEl);\n    }\n    slideUp(element, duration = 500) {\n        this.isAnimating = true;\n        element.style.height = `${element.offsetHeight}px`;\n        element.offsetHeight;\n        element.style.overflow = \"hidden\";\n        element.style.transitionProperty = \"height, margin, padding\";\n        element.style.transitionDuration = `${duration}ms`;\n        element.style.height = \"0\";\n        element.style.paddingTop = \"0\";\n        element.style.paddingBottom = \"0\";\n        element.style.marginTop = \"0\";\n        element.style.marginBottom = \"0\";\n        const slideUpCallback = () => {\n            element.style.display = \"none\";\n            element.style.removeProperty(\"height\");\n            element.style.removeProperty(\"padding-top\");\n            element.style.removeProperty(\"padding-bottom\");\n            element.style.removeProperty(\"margin-top\");\n            element.style.removeProperty(\"margin-bottom\");\n            element.style.removeProperty(\"overflow\");\n            element.style.removeProperty(\"transition-duration\");\n            element.style.removeProperty(\"transition-property\");\n            this.isAnimating = false;\n            element.removeEventListener(\"transitionend\", slideUpCallback);\n        };\n        element.addEventListener(\"transitionend\", slideUpCallback);\n    }\n    slideDown(element, duration = 500) {\n        this.isAnimating = true;\n        element.style.removeProperty(\"display\");\n        let display = window.getComputedStyle(element).display;\n        if (display === \"none\")\n            display = \"block\";\n        element.style.display = display;\n        let height = element.offsetHeight;\n        element.style.overflow = \"hidden\";\n        element.style.height = \"0\";\n        element.style.paddingTop = \"0\";\n        element.style.paddingBottom = \"0\";\n        element.style.marginTop = \"0\";\n        element.style.marginBottom = \"0\";\n        element.offsetHeight;\n        element.style.transitionProperty = \"height, margin, padding\";\n        element.style.transitionDuration = `${duration}ms`;\n        element.style.height = `${height}px`;\n        const slideDownCallback = () => {\n            element.style.removeProperty(\"height\");\n            element.style.removeProperty(\"padding-top\");\n            element.style.removeProperty(\"padding-bottom\");\n            element.style.removeProperty(\"margin-top\");\n            element.style.removeProperty(\"margin-bottom\");\n            element.style.removeProperty(\"overflow\");\n            element.style.removeProperty(\"transition-duration\");\n            element.style.removeProperty(\"transition-property\");\n            this.isAnimating = false;\n            element.removeEventListener(\"transitionend\", slideDownCallback);\n        };\n        element.addEventListener(\"transitionend\", slideDownCallback);\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/accordion.ts?");

/***/ }),

/***/ "./src/assets/js/modules/check-scrolled.ts":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/check-scrolled.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CheckScrolled; }\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/assets/js/modules/utility.ts\");\n\nclass CheckScrolled {\n    constructor(customOption) {\n        const defaultOption = {\n            selector: 'body',\n            fireClass: '-scrolled',\n            fireRange: 100\n        };\n        this.option = { ...defaultOption, ...customOption };\n        document.addEventListener('DOMContentLoaded', () => {\n            const bodyElem = document.querySelector(this.option.selector);\n            if (bodyElem === null)\n                return;\n            window.addEventListener('scroll', () => {\n                if (_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wy < this.option.fireRange) {\n                    bodyElem.classList.remove(this.option.fireClass);\n                }\n                else {\n                    bodyElem.classList.add(this.option.fireClass);\n                }\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/check-scrolled.ts?");

/***/ }),

/***/ "./src/assets/js/modules/disable-button-doubleclick.ts":
/*!*************************************************************!*\
  !*** ./src/assets/js/modules/disable-button-doubleclick.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst disableButtonClick = (selector = '[data-disable-doubleclick]') => {\n    const buttons = document.querySelectorAll(selector);\n    buttons.forEach((btn) => {\n        btn.addEventListener('click', () => {\n            btn.disabled = true;\n        });\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (disableButtonClick);\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/disable-button-doubleclick.ts?");

/***/ }),

/***/ "./src/assets/js/modules/init-display-position.ts":
/*!********************************************************!*\
  !*** ./src/assets/js/modules/init-display-position.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/assets/js/modules/utility.ts\");\n\nconst initDisplayPosition = () => {\n    const hash = window.location.hash;\n    if (hash === \"\")\n        return;\n    window.location.hash = hash + \"_\";\n    window.addEventListener(\"load\", () => {\n        const targetElem = document.querySelector(hash);\n        if (targetElem === null)\n            return;\n        setTimeout(() => {\n            window.scrollTo(0, targetElem.getBoundingClientRect().top + _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wy + _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scrollGap);\n        }, 10);\n        history.replaceState(null, \"\", hash);\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDisplayPosition);\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/init-display-position.ts?");

/***/ }),

/***/ "./src/assets/js/modules/nav-manager.ts":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/nav-manager.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavManager; }\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/assets/js/modules/utility.ts\");\n\nclass NavManager {\n    constructor(customOption) {\n        this.isMenuActive = false;\n        this.menuButtonElem = null;\n        this.menuElem = null;\n        this.hiddenElems = null;\n        this.prevPosY = 0;\n        const defaultOption = {\n            menuSelector: \".site-menu\",\n            menuButtonSelector: \".site-menu-button\",\n            menuAvtiveClass: \"-is-open\",\n            hiddenSelector: \".site-main, .site-footer, .site-cv\",\n        };\n        this.option = { ...defaultOption, ...customOption };\n        document.addEventListener(\"DOMContentLoaded\", () => {\n            this.menuButtonElem = document.querySelector(this.option.menuButtonSelector);\n            this.menuElem = document.querySelector(this.option.menuSelector);\n            this.hiddenElems = document.querySelectorAll(this.option.hiddenSelector);\n            if (this.menuButtonElem === null)\n                return;\n            this.menuButtonElem.addEventListener(\"click\", () => {\n                this.isMenuActive = !this.isMenuActive;\n                this.rendar();\n            });\n            _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mq.addEventListener(\"change\", (e) => {\n                if (!e.matches) {\n                    this.closeMenu();\n                }\n            });\n        });\n    }\n    closeMenu() {\n        this.isMenuActive = false;\n        this.rendar();\n    }\n    rendar() {\n        if (this.menuButtonElem === null ||\n            this.menuElem === null ||\n            this.hiddenElems === null)\n            return;\n        if (this.isMenuActive) {\n            this.menuButtonElem.classList.add(this.option.menuAvtiveClass);\n            this.menuElem.classList.add(this.option.menuAvtiveClass);\n            this.prevPosY = _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wy;\n            this.hiddenElems.forEach((elem) => {\n                elem.classList.add(\"hidden\");\n            });\n        }\n        else {\n            this.menuButtonElem.classList.remove(this.option.menuAvtiveClass);\n            this.menuElem.classList.remove(this.option.menuAvtiveClass);\n            this.hiddenElems.forEach((elem) => {\n                elem.classList.remove(\"hidden\");\n            });\n            window.scrollTo(0, this.prevPosY);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/nav-manager.ts?");

/***/ }),

/***/ "./src/assets/js/modules/scroll-animation.ts":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/scroll-animation.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ScrollAnimation; }\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/assets/js/modules/utility.ts\");\n\nclass ScrollAnimation {\n    constructor(customOption) {\n        const defaultOption = {\n            selector: '.js-sa',\n            fireClass: '-run',\n            fireRange: 0.8\n        };\n        this.option = { ...defaultOption, ...customOption };\n        document.addEventListener('DOMContentLoaded', () => {\n            const elems = document.querySelectorAll(this.option.selector);\n            if (elems === null)\n                return;\n            elems.forEach((elem) => {\n                this.registEventHandler(elem);\n            });\n        });\n    }\n    registEventHandler(elem) {\n        const rendar = () => {\n            let targetPosY = elem.getBoundingClientRect().top;\n            if (_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wy + _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wh * this.option.fireRange > targetPosY + _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wy) {\n                window.removeEventListener('scroll', rendar);\n                elem.classList.add(this.option.fireClass);\n            }\n        };\n        window.addEventListener('DOMContentLoaded', rendar);\n        window.addEventListener('scroll', rendar);\n        rendar();\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/scroll-animation.ts?");

/***/ }),

/***/ "./src/assets/js/modules/smooth-scroll.ts":
/*!************************************************!*\
  !*** ./src/assets/js/modules/smooth-scroll.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmoothScroll; }\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/assets/js/modules/utility.ts\");\n\nclass SmoothScroll {\n    constructor(customOption) {\n        const defaultOption = {\n            selector: 'a[href^=\"#\"]:not(.js-ignore-smooth)',\n            ignoreSelector: ''\n        };\n        this.option = { ...defaultOption, ...customOption };\n        document.addEventListener('DOMContentLoaded', () => {\n            const anchors = document.querySelectorAll(this.option.selector + this.option.ignoreSelector);\n            if (anchors === null)\n                return;\n            anchors.forEach((anchor) => {\n                this.registEventHandler(anchor);\n            });\n        });\n    }\n    registEventHandler(elem) {\n        elem.addEventListener('click', (e) => {\n            e.preventDefault();\n            const hash = elem.hash;\n            if (hash === \"#\")\n                return;\n            const targetElem = document.querySelector(hash);\n            if (targetElem === null)\n                return;\n            const targetElemRect = targetElem.getBoundingClientRect();\n            window.scrollTo({\n                top: targetElemRect.top + _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wy + _utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scrollGap,\n                left: 0,\n                behavior: 'smooth'\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/smooth-scroll.ts?");

/***/ }),

/***/ "./src/assets/js/modules/swipe-figure.ts":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/swipe-figure.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SwipeFigure; }\n/* harmony export */ });\nclass SwipeFigure {\n    constructor(customOption) {\n        const defaultOption = {\n            selector: '.js-swipe',\n            scrolledClass: '-scrolled'\n        };\n        this.option = { ...defaultOption, ...customOption };\n        document.addEventListener('DOMContentLoaded', () => {\n            const elems = document.querySelectorAll(this.option.selector);\n            if (elems === null)\n                return;\n            elems.forEach((elem) => {\n                this.registEventHandler(elem);\n            });\n        });\n    }\n    registEventHandler(elem) {\n        elem.classList.add('swipe');\n        const scrollEvent = () => {\n            elem.removeEventListener('scroll', scrollEvent);\n            elem.classList.add(this.option.scrolledClass);\n        };\n        elem.addEventListener('scroll', scrollEvent);\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/swipe-figure.ts?");

/***/ }),

/***/ "./src/assets/js/modules/tab.ts":
/*!**************************************!*\
  !*** ./src/assets/js/modules/tab.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tab; }\n/* harmony export */ });\nclass Tab {\n    constructor(selector = '[data-tab]', customOption) {\n        const defaultOption = {\n            buttonSelector: '[data-tab-target]',\n            contentSelector: '[data-tab-content]'\n        };\n        this.option = { ...defaultOption, ...customOption };\n        document.addEventListener('DOMContentLoaded', () => {\n            const elems = document.querySelectorAll(selector);\n            if (elems === null)\n                return;\n            elems.forEach((elem) => {\n                this.registEventHandler(elem);\n            });\n        });\n    }\n    registEventHandler(elem) {\n        const tabButtons = elem.querySelectorAll(this.option.buttonSelector);\n        const tabContents = elem.querySelectorAll(this.option.contentSelector);\n        const rendar = () => {\n            tabContents.forEach((content) => {\n                content.classList.remove('-is-open');\n            });\n            const content = elem.querySelector(`[data-tab-content=\"${targetContent}\"]`);\n            content?.classList.add('-is-open');\n            tabButtons.forEach((button) => {\n                button.classList.remove('-is-active');\n            });\n            const target = elem.querySelector(`[data-tab-target=\"${targetContent}\"]`);\n            target?.classList.add('-is-active');\n        };\n        let targetContent;\n        tabButtons.forEach((button) => {\n            button.addEventListener('click', (e) => {\n                e.preventDefault();\n                targetContent = button.dataset.tabTarget;\n                rendar();\n            });\n        });\n        targetContent = tabButtons[0].dataset.tabTarget;\n        rendar();\n    }\n}\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/tab.ts?");

/***/ }),

/***/ "./src/assets/js/modules/utility.ts":
/*!******************************************!*\
  !*** ./src/assets/js/modules/utility.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst u = {\n    ww: window.innerWidth,\n    wh: window.innerHeight,\n    wy: window.pageYOffset,\n    mq: window.matchMedia('(max-width: 768px)'),\n    scrollGap: 0,\n    run: function () {\n        window.addEventListener('resize', this.updateWindowSize.bind(this));\n        window.addEventListener('DOMContentLoaded', this.updateWindowSize.bind(this));\n        window.addEventListener('scroll', this.updateWindowOffset.bind(this));\n        window.addEventListener('DOMContentLoaded', this.updateWindowOffset.bind(this));\n        this.mq.addEventListener('change', this.mpEvent.bind(this));\n        this.mpEvent();\n        this.setScrollbarWidth();\n    },\n    updateWindowSize: function () {\n        this.ww = window.innerWidth;\n        this.wh = window.innerHeight;\n    },\n    updateWindowOffset: function () {\n        this.wy = window.pageYOffset;\n    },\n    mpEvent: function () {\n        if (this.mq.matches) {\n            this.changeSP();\n        }\n        else {\n            this.changePC();\n        }\n    },\n    changeSP: function () {\n        this.scrollGap = -80;\n    },\n    changePC: function () {\n        this.scrollGap = -120;\n    },\n    setScrollbarWidth: function () {\n        const html = document.documentElement;\n        const div = document.createElement('div');\n        div.style.visibility = 'hidden';\n        div.style.overflow = 'scroll';\n        document.body.appendChild(div);\n        const scrollbarW = div.offsetWidth - div.clientWidth;\n        html.style.setProperty('--scroll-bar', `${scrollbarW}px`);\n    }\n};\nu.run();\n/* harmony default export */ __webpack_exports__[\"default\"] = (u);\n\n\n//# sourceURL=webpack://boilerplate-gulp/./src/assets/js/modules/utility.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/app.ts");
/******/ 	
/******/ })()
;
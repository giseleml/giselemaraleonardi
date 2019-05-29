module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wd6j");


/***/ }),

/***/ "3gqv":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABI1BMVEUAAAD+VyFEWWP/QzT+ViH+ViH+VyH+ViH/WSL+VyH+ViFEWWT+ViH9VSH+VyH+ViH+VyH/ViP/ViL+WSNGVWL/UiVFWWT/VyJFWmT+VyL+ViH9VSFEWWP+VyH+VyH/VyFFWmJFWmT/VCBOTmJFWWNFWmP+VyFEWWNFWmREWmP+VyH+ViFEWmJDWmP+VyH/Tx9EVWb/VyJFWmT/t00mMji/Ngw0Ojk7Tlb7r0nKl0imgUSOckJ/aEFeVD3ISBX/WiNWVVg1RU36tEz1sUzvrUvcokn/rkjOmUiuhkX/okMuPEN9Z0AsOkBoWz95Sz7/kjw4PTknMzj/fDP/bCv/YCenPR3PVRz/skv/nEHvmD3vljxaUjz/izlvUTn/gzb/ZSjFTigG6JodAAAAMXRSTlMA9MUD5OnKoRT83dzVsZZ4bEAiHBUL9/Doz7+ckFJMREI1LgbSuLSzm5WJh11aWhAP76aByQAAAcJJREFUSMfdlNd6gjAYQBFxtGpr9957Nwngttu9V/d4/6eo5oeK8pN67bkiyTkfBCPSeOLeOvMqLkLIzGh6WCEGq6P4s17SxxVc++8uux4yxKFf5M+BP8DknOD5vQRhZcExmCYop07+lQsPJmZHu8H3S4MAUw47UKz6zQdjrGm8XnwXM1a/kWFdMi0YXaLBVF9v5hmQv+FjHxoETb1VZX9U4bfAfL/58F/PzAJMYu9pC5Z+PsvFRDz2+BiLJ4rldx1mN5AgDEvqEDA7je7ZGmSzZuC46xAs1blWY6zGL+rOfw3j4CW5l2AswS+SMBtEgklYYrmUrifvGbtP6noqx2DWgwRLRjCEcTicg9dB/40ASDABK+mo1Y+m4YCHkcAHgdaJWvyOxh9oU8LYVHigpWOmH0trvUDZlXD8Ph5oair+9PDwFE+pWi9YEXwFNjw8MOFBaEES4A+1K7cl0y/dVtprbknEjkwpjZhBpDuQdwT63jHl3IF/B6OTPSd/XqYGkYKqFiLmSJ538AO0j6paBvvXaHBAkQA4wvxzigbAhd13B0RBwB5sU1FAt23BujhYtwWyOJBtwbI4WLYFi+JgURojfgGzNcgC4rcXSAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5+t+":
/***/ (function(module, exports) {



/***/ }),

/***/ "7v9h":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAV1BMVEUAAAAflfMflfQjlPcglfMdjeoZmfMhlvMNR6EOS6UglPIgke4RWbQejOkdiOUcg+AYdtMWbcgTX7oPUKsej+sbf9wae9cYcs4VZsIQVK8PTqoaedUTYbxgIpKbAAAAB3RSTlMA8qwc7rIo4hxRkAAAAORJREFUSMft1NsOgjAQRVEB9ZyWq3JT5P+/U0nIDEEo9dHAfiOwgE6ano52VRQG2CgIr5Pnz/DoHAm4wKuLgLKAR0UpgOxjbBT3pICXYZnDWV7SvAQgTcjWYjXbkkkKBbA3MqmwUpWQN4spAOqOpsZitWFXAzOA6k4+7MLvPMh7hW8AtIbPDLOyJ00LzIHeLGbDl5csAcTD52Po9fCbeq1Aawy7XIb/GUQDOAHScYTjqFM4gT4n0g10GzSNbBcn0LXK6t1Apynz9QPIMvgB7c9AAK8CASG8CgVcPQ+yH4/K6HS0p96WPiJTMNoFnAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/css/navbar.scss
var navbar = __webpack_require__("eW3c");

// EXTERNAL MODULE: ./src/img/aboutme-icon.png
var aboutme_icon = __webpack_require__("3gqv");
var aboutme_icon_default = /*#__PURE__*/__webpack_require__.n(aboutme_icon);

// EXTERNAL MODULE: ./src/img/skills-icon.png
var skills_icon = __webpack_require__("MmAh");
var skills_icon_default = /*#__PURE__*/__webpack_require__.n(skills_icon);

// EXTERNAL MODULE: ./src/img/education-icon.png
var education_icon = __webpack_require__("ykVz");
var education_icon_default = /*#__PURE__*/__webpack_require__.n(education_icon);

// EXTERNAL MODULE: ./src/img/projects-icon.png
var projects_icon = __webpack_require__("yqiR");
var projects_icon_default = /*#__PURE__*/__webpack_require__.n(projects_icon);

// EXTERNAL MODULE: ./src/img/experience-icon.png
var experience_icon = __webpack_require__("htj+");
var experience_icon_default = /*#__PURE__*/__webpack_require__.n(experience_icon);

// EXTERNAL MODULE: ./src/img/contact-icon.png
var contact_icon = __webpack_require__("7v9h");
var contact_icon_default = /*#__PURE__*/__webpack_require__.n(contact_icon);

// CONCATENATED MODULE: ./components/navbar.js










var navbar_NavBar = function NavBar() {
  return external_react_default.a.createElement("nav", {
    className: "navbar"
  }, external_react_default.a.createElement("input", {
    type: "checkbox",
    id: "hamb-btn"
  }), external_react_default.a.createElement("label", {
    htmlFor: "hamb-btn"
  }, external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null)), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Sobre mim", external_react_default.a.createElement("img", {
    src: aboutme_icon_default.a,
    alt: "Ilustra\xE7\xE3o de uma mulher de \xF3culos escuros"
  })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/habilidades"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Habilidades", external_react_default.a.createElement("img", {
    src: skills_icon_default.a,
    alt: "Ilustra\xE7\xE3o uma pessoa de perfil tendo uma ideia"
  })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/educacao"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Educa\xE7\xE3o", external_react_default.a.createElement("img", {
    src: education_icon_default.a,
    alt: "Ilustra\xE7\xE3o de uma mulher usando um capelo"
  })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/projetos"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Projetos", external_react_default.a.createElement("img", {
    src: projects_icon_default.a,
    alt: "Ilustra\xE7\xE3o de uma p\xE1gina de c\xF3digo"
  })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/experiencia"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Experi\xEAncia", external_react_default.a.createElement("img", {
    src: experience_icon_default.a,
    alt: "Ilustra\xE7\xE3o de uma mulher com crach\xE1"
  })))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
    href: "/contato"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Contato", external_react_default.a.createElement("img", {
    src: contact_icon_default.a,
    alt: "Ilustra\xE7\xE3o de um envelope azul"
  }))))));
};

/* harmony default export */ var components_navbar = (navbar_NavBar);
// EXTERNAL MODULE: ./src/css/main.scss
var main = __webpack_require__("5+t+");

// CONCATENATED MODULE: ./components/layout.js





var layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Gisele Mara Leonardi | Software Developer"), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), external_react_default.a.createElement("meta", {
    charset: "UTF-8"
  }), external_react_default.a.createElement("html", {
    lang: "pt-br"
  })), external_react_default.a.createElement(components_navbar, null), props.children);
};

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MmAh":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABF1BMVEUAAAD+tkz+t0z+t03+t0z+t03+tkyQyfj+t02Qyvn+tk2QyvmQyfn/uFGQyfj/tkz/uE7/uE2Q0//+t0yQyvj+t0z/t0r//wD/xnG5x8KPyvj+tk3+w2z+tkz+u1aQyfj+tkz+t0yQyvj+wGOQyfj+uEv+t03+v17+tUv/t03+tU3+tkj+uU7+uUWNxv7/qlX/zGb/vz//zGb/t02Qyvn/zID///+Zz/r/y30oNZP/xG1ca8Du9/7q9f7/yXj/vl7/uVOsytpFU638zISWyvOjyuS9y8jBy8RUYrdNXLM9S6bszJZMTpDxzI++n4bjuYL8ynz/wmii0vqoyt+xy9axy9U4RaFHT50xPpo3P5I7QpH3zIn/ynq1rzf5AAAAM3RSTlMA/vz69Oa9/vDX0ZMwEvSgPigHqpx4UwL+8/Hr6N7LyMjEwpqYlIuJg4BzRjcWEgwKCAXa3TTmAAABj0lEQVRIx93SZ1fCMBSA4ZRapiz33ntrektBQIYiIMs9///vEMKR26RJvuNzTr/d97RJL/lPJmORRCISmyRX+0HLNCg1zOXN2QuiMDUTspnQYg8e6UhgIy2f37JHylW4ociYnpcEO7ZHDYrUy4r7vz9kez2wV6DwuRjEBmOZDHv67iFHOVExiAzm84VM/xkUd1CkvAMhSLDAKeQdFtyCKwTmJR8s2cNiOI8B2hU/aeDJcdg8fhKaEA/NOI7N4KHRif9aMcBrRUnCmfEGNfihPqvCaqxj8Iyr4TsEOiv/BeVvdgKRQQS9l2HwWsV5zqEQuO1h0Mbl5pnCCgJkGQCqEBTeAB9vzUqjjoFPigsW4JrRBBYXrEC9Uak038GlSrPeYBs6X9nsZ0e4I/W/iLvQbbW64JbUQYB4rRWhr6iZN/a4IF3KuW5OPT+RjBPeNNUiPvNhqmESvzldECYSUU1gyYJjTRAlMppTBKVBUB0kpcGROpiTBinNGkmdKrcoReQkh7UCNBBNEwXlRoxRMJ5+Aboc7rTcH4VDAAAAAElFTkSuQmCC"

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Ur+R":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA+VBMVEUAAABEWWNEWWNEWWNEWWNEWWNEWWNEWWNEWWNEWWREWWNEWWNEWWNEWWNFWmJEWWNEWWNEWWNEWWNEWWNEWWNDWWNEWWNFWmP+y7v+/v1tTEH/1sn/8u7yw7XYQxWpl5Ojj4jlvK9JXWbswLPcTyPx7ez/7+r/5+D/3dP4x7jHqqGyoZt5WlDatarPrqWbj43c09HBpZ64oZrzn4VpcHWBZVtyUkfVsqiznZijlJGNhoaGgYKeh393eXxSYWrt6ehganHaSBv8xLLpv7L7v6z2q5OAfoBXZWzrhGT39vXeuKyTiYhwdXnndlPfWzPwl3yUfHTukHLiZkDhmyktAAAAGHRSTlMA/vLLT+LDs3M43NKfk0KrjXzpvGtiXIjKeosJAAADfElEQVRo3u2YaVfiMBSGc9tSyiayDh0tpRQXUEAQZRNG3Mdtlv//Y0ZtTSQhabH2zJc+3zjvyZvk5t7kUhQREREREQIJyMvp4qeGbuTiqXweebAJbyQ313RX0pIzsozEJOEdVfFvX4zhYXEkBj6gJvzZl2JAkDziCEtk/PirsMQGEpGDZVKe9hpQaEhEGigkN0yJsraZjhcKqZRaKGQz34ruCWWBwmPXcaCRSuWMKsEqYvGcDAwFj3gGRg57gtT/nSAOgVE9sigwcY86CIz4FlMgMCUkBAKDULinnERiyhAQGYmJQRC8DzkFwSmFUwYEKaQkJaghHQBB8SrjsFJVAgh1Cxp8GWpIJ0Dw6FiCo4VTAwQ1tAgJYgRfSkJ8jQaniGi+AcP51Gx12la73em0ev3RyBx3u5NJt2uao36vM7y3Lg3bavfMmzkQOP0d2wPWJ8OKb1ozwPCefplafbuyFp1zWCLlkUQDo7ImzeVNxEQXEfHf2tX13S2OJa1P4QOSMEtvbWfIvv7GPsee0psD+IBwgo67Pt2Fswdat+pAEIVo6hps6y7blDNP74pClCeiRRZ4cHh4wG6Bp9tkC3lBFj26Bnu6bn5/oabre5Q3T7/BJklBHZgkAj92zl4cjqgY8fURNpEFlfxewforO84SKW+e3sYmWcFdZGODn47BCTUBX7cBuP1dEWtNbHDmhOCUN8FvRgfgtneJFROcvowWTMDqTWwialoMfIgnjsEJdch83SBlwFLAZYDTsOYY1Kg05euX+LYWtUUtXEhHjsERVWh8fUgeNMGjPMYxcJZYoyPE13vgIvz3NMNLdK8CegN8vYsjJGre6zZzHWOOG41j/IPVZ+JvRip1V6x4cBrVagP/YPRmXdSaklKYU+8lPQGXPtUUcbvHB2ogFSIu7pOW9v7m2Kt8hp6Pzy3v59xaZXD3x93G08Uq2Z77+Oy4Ibkz9FmDi0X17/HV1fVTtXpdYTEGjv8GEqJI4DC1GYvrRvWNxa8Ki3XOyVDu2zkfG8we7p4Xi+e7K9a+adbxS+lJnLSnnYovbPOWqmAxCmkA5tPRvdjcaI0fwSGmIL9oeSDUBzcP436rbVmG0Xy1NIxLyxq2+mZ3Mrsl3aiG1qEkw1rIZbQ2Odm3ew59EiUjSyBEkjMKCoiiZbJyUqKMk3J2U2O8g5NIoIiIiIgIhn8VANLl+lyIxgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wd6j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CafY");
/* harmony import */ var _src_css_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5+t+");
/* harmony import */ var _src_css_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_css_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_img_gmail_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b/ey");
/* harmony import */ var _src_img_gmail_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_img_gmail_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_img_github_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Ur+R");
/* harmony import */ var _src_img_github_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_img_github_icon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_img_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("v0q+");
/* harmony import */ var _src_img_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_img_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_5__);







var Contato = function Contato() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "titulo-pagina"
  }, "Meus contatos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "contatos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _src_img_gmail_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo gmail"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "giselemaraleo@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _src_img_github_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "logo github"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/giseleml",
    target: "_blank",
    rel: "noopener"
  }, "Github"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _src_img_linkedin_icon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "logo linkedin"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://linkedin.com/in/gisele-leonardi-724245176/",
    target: "_blank",
    rel: "noopener"
  }, "Linkedin")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contato);

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "b/ey":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAulBMVEUAAADokpDopqTiurnpubnUiIjNUVHZoqLQbW3Tenrg4ODKNzf09PToT0vt7e3Z2dnoWFXoVFDe3NzpaGXocm/07OzqeXbpYF3NQ0LLPj7z4+Pz3Nvx1NPjxMTtlZPqfXrpZGHpXVna09PtpKLqjYvriYbqdHHi1NTdzMzxy8rxwsHivr3wu7nmtrXws7LvqqnnoqDrnJrrg4HpbWrSWFjTUVHlsK/06Oflysnnqqnnm5nfbWzaYmHk0M8dsxAEAAAACnRSTlMA9dFWUPv23cSNDNpfxgAAArpJREFUaN7t1td24jAQBuAQkuzuaCU3wKb3FlpCSd/3f60NJNbYHnCTfZFz/F9b/3csDRZXRYoUKVLkJ+Wm1G39zSytbunG339tcG5ssurfHNuuff38lFoji/pGjZ/iEcoG/4q+VO9f6m4Z7lKJy4yravXVMXaVJGBxjD1X6Z/bHGNJwODedFK/RLXjKzIkoHNfrFbK4bT8PboEKtwfY5imf2gEaioScGweyKSZtL45CXbYjgTYXueB6Otk/WvasGcIsIPFg9k+x69/3pLl1oF5AVavkEf693H77/tkcaXOvMAxH3gQOLCJhhNjfzBGAObQl7BaCYYTU3EYAU5518mzw8jhJEv0d8YuAOxAX6LSDB1OumByYBSQ0d7IAmMdMpwGefzRZKGAtuiRNd3GhQ9/lzzaawNEANpgHDKwEcM5NiECAO0zT/SsR1UynCN6uiuASOAkzGr03eeBDz/dydoU4gCmdszDmdPz9j/SWXgAiAO4QtsiFbumHM4d/Um2IS4A2ikDusfGBv+VBDIyISaAgrbq021u4L8ST/orgPgACjM65/pySUesO4X4AAp41uExXgESA6YrtHdR/bsXSAGA5mbQCe/vmJAKQEFb2Jfr7QVAUoAKg+2l/u0UkgMoYF71c/X6E4AKYHqE2YT2T/6BGgCaN2/0YgEVgAqLXvBiUQOoMBiTT48CQAR5EeHFogxQYVbDi0UJoKOEHydjCJAhAFog7RfIEKACkKgAVIA8ACD1WQMm7VcH6CuYkAeAAkAeAAqQMyByBoQQeQJC5AuIr+QGCDf5AMKTPACRMyD8yRoQJNkC4kyyBMTZpATqCGC9OlCXwF0QEBeTBNhL4LcfEGFJANxe0T0i/TSxAaeMwB8PIKISF/j1WYyC8w0IkRHguP3yHO6O+yTiJBqo72/LV0WKFClS5AflP9rWGMB0PoFuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "eW3c":
/***/ (function(module, exports) {



/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htj+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABDlBMVEUAAAD+ViH+ViH/ViHO19vP2dz/QzT+ViHP2Nz+VSH+WiT/VyXkvZ3P19v9ViHP2Nv+ViH+VyLP2NzO2Nz+ViL+VyH+VyLP19z+VSPP2NvO2NzN19v/Wi3+ViL+ViH+WCHO2Nv/ViH+VyL+ViT+VSD+UyHN2NzP19v/XSL+TyH+Txr/VyLP2Nz/t03///8/UbW/Ngz/mAGYYSX/tUuHlMj7r0n/sT3/rEf/oEL/jzv/bizISBXH0Nq1v9TR1dKjrtCQncuHlcl+jMZre8HNwr9Zar1HWbfWx7Hiv4TJlITssVj/fDP/qy71pSz/YCf/WSLPVRz/oBTvmD3vljz/gzbCVjbCVjT/ZSj/XCTISRX3uQ+cAAAAK3RSTlMA/fjyxBQL7txaTDUG9+3o5s/GtrCnnJiVkFs1It3a1tLMupR3cUNBPC0dxqUEmQAAAaBJREFUSMfdlFd3gjAYQEFttdXu4ezeTeiH4t57z+7+/z9SJUWSkqDHR+8LfMm954Q8IK0nm6f7Mppxs5x+hQzkZfwtGVHI7sAC/w79x+G187eRFXnb5vwy4hXPwuACcdkX+U9IwJYgOGO1r3QPEdx838fo3xlN0bKIEOEGAdrvpZQpqSGZrrnBrqln0wohPdJnJzeY3+kwo8zJkCWe/4gIo3dNoRDf0+nfaVJEZINjTnBAtgyRDc45gXsexGK6Sp5I+NUOu0AWX5JCs3qAOAFaMXhl/beFQS5B+4kcWT3gBE6ypY4TlD9W9cUTiccJCdSfpOEnc6oe3Ep8vE49UKOTflLTkv1JdDrY/wWOSWCgB46IZIPX8dGpt7pE77bqnc/dTcmOsAvPKLYHg3ZRf3WFbXSfHxvE49jA7xP5G4emD2AWrg2B78FzKgAVc7rkF0fYJA+Qp8Yjnh/CFAWAAj2HOIGHFkoApenjhYCxx+rfY5oyQJkO8IMlCDJBFaDKBEFLcMgENYAaE7gswR4TNAAamGbPEuxgmiZAE9PsSGvELyAdsxlFZ8tvAAAAAElFTkSuQmCC"

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "v0q+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAV1BMVEUAAAACiNECh9ECh9ACh9ABh9ABh9ABh9ADidEDh9D+/v70+f0mmddds+HE4/S23PKj0+5hteLJ5fVmt+Pr9vvZ7fjS6veq1u+Xzu18wedwvOZKqt6Hx+leOU4YAAAACnRSTlMA/lbd2qiOi1BPOwVHhgAAASJJREFUaN7t2dlugzAQhWGGLenY7ASy9P2fs1JVPCgqpCpzlKDMf8cNnzAWEuPIsizrNYuzlP5VmsV/uX1CG0oeEjltLI9WOxBBhZgUOq4AiQaQgB5AiheBTAfIFoFUB0gXAVLqbYCmdK7tcEDN39UooOGfChDQTkAJAtwEuL0CZViivb5k2DaVmta5stjzp8KABwCHfr3uxlPP/TB2HgJcnVyevT5Q8Tx30wYqvqvRBS58n/MawFonNMAFGhiUgeHzeqkcz/JqgCyIr1jqFAFZ8JlQKwIjhWSVWkXAU+gsG1URIOnGUz0G8BzCAGSAAQYYYIABbw8Q7f0fDQCAxpr4wSx+tIwfjuPH+1JOmztEq+Wg+0vHbYdEH88/5rIsy3pCX2qiQKUPdvgcAAAAAElFTkSuQmCC"

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykVz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABs1BMVEUAAAD/gwBEWWREWmREWmNEWWNEVmL+VyFFWWREWWNFWmJEWWP/wApFXWhRUVxEWWP+wAf+ViFEWWNEWWP/ViFEWmRDWmT+VyD9WSJQYGL+tUlHWmL+ViFFWWRPX2H+ViFFWWT+ViGAd1z+WiD+wAdFWmT+wQZEWWT/VyH+wQZFWmRFWWNEWWNFWWX+ViFGW2L/VyL+wgf/ViFEV2NBWmL/ViE/X1//VSr+Yh/+Yx7+VyL+VyL+ViFFWmP+VyL+VyL+ViLvVij+ViH+ViH+ViH+wQXLWDL+vwn/VR/+VCP+WyREVWb/VSpFWmT/VyL/t01igIz/wQf/mAC/NgyYYSVgfYr/tUp4enyPdG2+llX7r0n/sT3ISBX/oBJceIRSbHhPaHNJX2r+wAdwfIJWcXysbVpWVVjqr1XprE/0sU7/rkjCi0j/okN5Sz7vlzz/kjz/qy7/YCf9XSX/pySnPR3PVRz+nQ7/mwdWY2JVYmLUpl1pWVdla1TBdFHBZ0yIWUySWUj/qUfUYj/1iz7GWDf/gzbmXjT/fDPOWDPYWDD/ci7tXC7/bCz1WinKpCHojB7ojB1f7qSrAAAATXRSTlMAAvfoxJMW+9VcQTQWCwb98+XbsqegTEz++vfz8u/p6d/X0tDQy8a+oqGHgHhqaGJQQzUpHxMQDP739sm9uLKbk5GHgnlXSzgwJBwPBv/C4q0AAAJcSURBVEjHvZVVd6NAGECBkDTeWH3r7dZta+vuux+E0rg1qbu36+7+kxeYkABDZvO09yGc+ebeE+ZwDlAVmAoGp6jq8Q4zAMywt1rfaQcFu7Mq3VYHJeps/9TpkVbQ0DpCk31XLxjodRH0GWstYNRaZyr5DguYYnGY6pN9gFhYymYj4XAkkl1ayKNR3ySmewaZoi65ZSI5NGUGPXq/vgMQ+bCBPCA66nXBrxeAyBmDHCDs+kAojMknfv4hbgziX9/I5x6jKX0gUJ6hlteNXMwYxDjuS8uQdAIsoKi7NRy3aAwWOY67ISt4QHdKe7H48qt3n77/bDx4v7r67OVyPCYNL86aBuc4DZ83eImNfbQaNw1ulfUfWzxiC62vmQaXVH1/ly+xq0z8tEnwuKbof4zyGtDsAR6oR/j2lufxoMEkGEVbsoQHt02Cm6Vgfh650lUNQgbfLQjuECm4rPfv+QTB1026pU59cFaQuEAK2vWBTw7Ok4IzJv9wgLZ29P4Oh9AHd+Sg+NzSSa2fTCvDmlF9QPcIQk8/CsTjpMY/FpUbwp7bRKEwQTX4lUBMp1Q/lRblwH+fwhgYkH6m+5VAnMvspaLR1F5mTpSD7ocUjtutXMbblUBFCa7OUgSmQ0fbK79V/8/K9tF1mvwyZgFg8wT5J5vSgnURdC/6NHQ1Z2Q/09yFXsbeSr6NBYU2Pnp4enoY5dvQmrVV8ANQJMErJNS1/ZFpcAVUmtZkf60JVIJmvgPKPEmsryeeagYO3KcDQCBAY4ETiDixwEoOrFjAkgMWCyzkwIIFDDlgqP/FX6ZIdZafvHZSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "yqiR":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAACQyviQyvmGw/UZdtIvhdnh9f5gqOl/vvSa0Polf9bX7/1DlOFBkt+PyflZo+csg9ih6QebAAAAAnRSTlMAf7YpoZUAAADDSURBVEjHzdTLDsIwDERRIA4Opa///1oUVaOpgMiZBSLetfVZ3CrtZeC5fZ2rCB5VKOBZhQLuVUjgEAKAEABEJ4AQAIQCKGJA0Qc4vwBl3zTgtmhgNtfAZEUCxaa1DyRngqcYpGyOBLecmoD7OSEBFw3A/SMBly3AfSTgRgPwMRJ4qwHwEAkUAUBCAN4S5vN+HL2cE8LXioTotVIgAfvh0UBCcDQgHAnR4eOs/Bb6QE1QQE1QABIEsO0fCUP8+f4PxpkXYA8OHAa2/H4AAAAASUVORK5CYII="

/***/ })

/******/ });
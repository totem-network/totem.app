(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 2485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _actions_sideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(577);
/* harmony import */ var _components_gestures_Gestures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2490);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    swipeFromLeft: _actions_sideNav__WEBPACK_IMPORTED_MODULE_2__[/* showSideNav */ "d"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_gestures_Gestures__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/Gestures.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/Gestures.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/Gestures.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gestures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(972);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var Gestures =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Gestures, _Component);

  function Gestures() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Gestures);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Gestures).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Gestures, [{
    key: "render",
    value: function render() {
      var swipeFromLeft = this.props.swipeFromLeft;
      var container = this.props.classes.container;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: container
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(gestures__WEBPACK_IMPORTED_MODULE_7__[/* SwipeFromLeft */ "b"], {
        onSwipe: swipeFromLeft
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Gestures;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = function style(theme) {
  var _container;

  return {
    container: (_container = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, theme.breakpoints.up('lg'), {
      display: 'none'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "height", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "left", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "overflow", 'hidden'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "position", 'fixed'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "top", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "width", '100%'), _container)
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(Gestures);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Gestures, "Gestures", "/home/daniel/Development/totem/app/src/app/components/gestures/Gestures.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/gestures/Gestures.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/gestures/Gestures.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ })

}]);
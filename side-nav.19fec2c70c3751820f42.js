(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 2488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _actions_sideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(577);
/* harmony import */ var _selectors_sideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2497);
/* harmony import */ var _components_side_nav_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2498);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var mapStateToProps = function mapStateToProps(state) {
  return Object(_selectors_sideNav__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    hideSideNav: _actions_sideNav__WEBPACK_IMPORTED_MODULE_2__[/* hideSideNav */ "c"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_side_nav_SideNav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/SideNav.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/SideNav.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/SideNav.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var sideNavSelector = function sideNavSelector(state) {
  return state.get('app').get('nav').toJS();
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(sideNavSelector, function (nav) {
  return {
    isVisible: nav.showSideNav
  };
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sideNavSelector, "sideNavSelector", "/home/daniel/Development/totem/app/src/app/selectors/sideNav.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/selectors/sideNav.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2498:
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(242);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_side_nav_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2499);
/* harmony import */ var _containers_side_nav_Launcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2501);
/* harmony import */ var _containers_side_nav_Tasks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2504);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();









var SideNav =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SideNav, _Component);

  function SideNav(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SideNav);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SideNav).call(this, props, context));
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.handleTouchStart = _this.handleTouchStart.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.handleTouchMove = _this.handleTouchMove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.touchStartX = 0;
    _this.touchCurrentX = 0;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SideNav, [{
    key: "blockClick",
    value: function blockClick(event) {
      event.stopPropagation();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          hideSideNav = _this$props.hideSideNav,
          width = _this$props.width;

      if (Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__["isWidthDown"])('md', width)) {
        hideSideNav();
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      this.touchStartX = event.touches[0].pageX;
      this.touchCurrentX = this.touchStartX;
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      this.touchCurrentX = event.touches[0].pageX;
      var translateX = this.touchCurrentX - this.touchStartX;

      if (translateX < -50) {
        this.props.hideSideNav();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.props.isVisible;
      var _this$props$classes = this.props.classes,
          container = _this$props$classes.container,
          containerBefore = _this$props$classes.containerBefore,
          containerVisible = _this$props$classes.containerVisible,
          containerVisibleBefore = _this$props$classes.containerVisibleBefore,
          nav = _this$props$classes.nav,
          navBackground = _this$props$classes.navBackground,
          navVisible = _this$props$classes.navVisible;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(containerBefore, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, containerVisibleBefore, isVisible))
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("aside", {
        onClick: this.handleClick,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(container, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, containerVisible, isVisible))
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(nav, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, navVisible, isVisible))
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: navBackground
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_side_nav_Header__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_side_nav_Tasks__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_side_nav_Launcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SideNav;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var style = function style(theme) {
  var _container, _containerBefore, _containerVisibleBefo, _nav;

  return {
    container: (_container = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, theme.breakpoints.up('lg'), {
      overflow: 'visible',
      pointerEvents: 'auto',
      width: '3vw'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "height", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "left", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "overflow", 'hidden'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "pointerEvents", 'none'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "position", 'fixed'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "top", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_container, "width", '100%'), _container),
    containerBefore: (_containerBefore = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, theme.breakpoints.up('lg'), {
      display: 'none',
      willChange: 'auto'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "background", 'rgba(0, 0, 0, 0.2)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "display", 'block'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "height", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "left", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "opacity", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "pointerEvents", 'none'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "top", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "transition", 'opacity .3s ease-out'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "width", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerBefore, "willChange", 'opacity'), _containerBefore),
    containerVisible: {
      pointerEvents: 'auto'
    },
    containerVisibleBefore: (_containerVisibleBefo = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerVisibleBefo, theme.breakpoints.up('lg'), {
      display: 'none'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_containerVisibleBefo, "opacity", 1), _containerVisibleBefo),
    nav: (_nav = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, theme.breakpoints.down('md') + ' and (orientation:landscape)', {
      flexDirection: 'row'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, theme.breakpoints.up('lg'), {
      overflow: 'visible',
      transform: 'none',
      width: '3.4vw',
      willChange: 'auto'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "boxShadow", '2px 0 12px rgba(0, 0, 0, 0.4)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "display", 'flex'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "flexDirection", 'column'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "height", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "justifyContent", 'flex-start'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "overflow", 'hidden'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "position", 'relative'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "transform", 'translateX(-102%)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "transition", 'transform .3s ease-out'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "width", '90%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_nav, "willChange", 'transform'), _nav),
    navBackground: {
      background: 'rgba(0, 0, 30, 0.6)',
      height: '100%',
      position: 'absolute',
      width: '100%',
      zIndex: -1
    },
    navVisible: {
      transform: 'none'
    }
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8___default()()(SideNav));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SideNav, "SideNav", "/home/daniel/Development/totem/app/src/app/components/side-nav/SideNav.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/side-nav/SideNav.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/side-nav/SideNav.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _components_side_nav_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2500);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {
    address: Object(account__WEBPACK_IMPORTED_MODULE_0__[/* accountAddressSelector */ "e"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_side_nav_Header__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Header.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Header.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Header.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2500:
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
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(242);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(172);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var Header =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Header, _Component);

  function Header() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Header);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Header).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Header, [{
    key: "renderMobile",
    value: function renderMobile() {
      var width = this.props.width; // TODO: add some info about logged in identity

      return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__["isWidthDown"])('md', width) ? null : null;
    }
  }, {
    key: "render",
    value: function render() {
      var address = this.props.address;
      var _this$props$classes = this.props.classes,
          avatar = _this$props$classes.avatar,
          header = _this$props$classes.header;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header", {
        className: header
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: avatar
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(account__WEBPACK_IMPORTED_MODULE_8__[/* Avatar */ "a"], {
        address: address
      })), this.renderMobile());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var style = function style(theme) {
  var _avatar, _header;

  return {
    avatar: (_avatar = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_avatar, theme.breakpoints.up('lg'), {
      position: 'static',
      transform: 'none',
      width: '100%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_avatar, "left", '50%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_avatar, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_avatar, "top", '50%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_avatar, "transform", 'translate(-50%, -50%)'), _avatar),
    header: (_header = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_header, theme.breakpoints.down('md') + ' and (orientation:landscape)', {
      height: '100%',
      width: '50%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_header, theme.breakpoints.up('lg'), {
      height: 'auto',
      marginBottom: '.8vw',
      marginLeft: '.6vw',
      marginTop: '1vw',
      position: 'static'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_header, "height", '33vh'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_header, "position", 'relative'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_header, "width", '100%'), _header)
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7___default()()(Header));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/home/daniel/Development/totem/app/src/app/components/side-nav/Header.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/side-nav/Header.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/side-nav/Header.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var app_actions_launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(576);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _components_side_nav_Launcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    showLauncher: app_actions_launcher__WEBPACK_IMPORTED_MODULE_0__[/* showLauncher */ "d"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_side_nav_Launcher__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Launcher.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Launcher.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Launcher.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(242);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2503);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var Launcher =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Launcher, _Component);

  function Launcher() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Launcher);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Launcher).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Launcher, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showLauncher = _this$props.showLauncher,
          width = _this$props.width;
      var launcher = this.props.classes.launcher; // TODO: launcher animation: hide sidenav, fade in from bottom

      return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__["isWidthUp"])('lg', width) ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: launcher,
        onClick: showLauncher
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default.a, {
        fontSize: 'inherit'
      })) : null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Launcher;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = {
  launcher: {
    cursor: 'pointer',
    fontSize: '2.4vw',
    marginBottom: '.5vw',
    marginLeft: '.5vw',
    marginTop: 'auto',
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6___default()()(Launcher));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Launcher, "Launcher", "/home/daniel/Development/totem/app/src/app/components/side-nav/Launcher.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/side-nav/Launcher.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/side-nav/Launcher.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(206));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Apps');

exports.default = _default;

/***/ }),

/***/ 2504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _components_side_nav_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2505);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {
    tasks: Object(applications__WEBPACK_IMPORTED_MODULE_0__[/* instancesSelector */ "e"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    focus: applications__WEBPACK_IMPORTED_MODULE_0__[/* focusWindow */ "d"],
    startApplication: applications__WEBPACK_IMPORTED_MODULE_0__[/* startApplication */ "h"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_side_nav_Tasks__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Tasks.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Tasks.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/side-nav/Tasks.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2505:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var Tasks =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tasks, _Component);

  function Tasks() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Tasks);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Tasks).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Tasks, [{
    key: "render",
    value: function render() {
      var tasks = this.props.classes.tasks;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: tasks
      }, this.renderTasks()));
    }
  }, {
    key: "renderTasks",
    value: function renderTasks() {
      var _this$props = this.props,
          classes = _this$props.classes,
          focus = _this$props.focus,
          tasks = _this$props.tasks;
      return tasks.map(function (task, index) {
        var handleClick = function handleClick(event) {
          focus(task.id);
        };

        var taskBackground = {
          backgroundColor: task.themeColor
        };
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: index,
          className: classes.task,
          style: taskBackground,
          onClick: handleClick
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: task.icon,
          className: classes.taskIcon
        }));
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Tasks;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = function style(theme) {
  var _task, _tasks;

  return {
    task: (_task = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, theme.breakpoints.down('md') + ' and (orientation:landscape)', {
      height: '9vw',
      marginLeft: '1.5vw',
      marginTop: '1.5vw',
      width: '9vw'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, theme.breakpoints.up('lg'), {
      display: 'block',
      height: '3vw',
      marginLeft: '.2vw',
      marginTop: '.5vw',
      width: '3vw'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "borderRadius", '5% 20% 5%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "cursor", 'pointer'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "display", 'inline-block'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "height", '18vw'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "listStyleType", 'none'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "marginLeft", '3.5vw'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "marginTop", '3.5vw'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "overflow", 'hidden'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "width", '18vw'), _task),
    taskIcon: {
      width: '100%'
    },
    tasks: (_tasks = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tasks, theme.breakpoints.down('md') + ' and (orientation:landscape)', {
      width: '50%'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tasks, "flexDirection", 'row'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tasks, "margin", '0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_tasks, "padding", '0'), _tasks)
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(Tasks);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tasks, "Tasks", "/home/daniel/Development/totem/app/src/app/components/side-nav/Tasks.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/side-nav/Tasks.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/side-nav/Tasks.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 2486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _selectors_launchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2491);
/* harmony import */ var _components_launch_bar_LaunchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2492);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var mapStateToProps = function mapStateToProps(state) {
  return Object(_selectors_launchBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    startApplication: applications__WEBPACK_IMPORTED_MODULE_0__[/* startApplication */ "h"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_launch_bar_LaunchBar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/LaunchBar.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/LaunchBar.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/LaunchBar.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _actions_launcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(576);
/* harmony import */ var _selectors_launcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2494);
/* harmony import */ var _components_launcher_Launcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2495);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();








var mapStateToProps = function mapStateToProps(state) {
  return Object(_selectors_launcher__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    hideLauncher: _actions_launcher__WEBPACK_IMPORTED_MODULE_3__[/* hideLauncher */ "c"],
    startApplication: applications__WEBPACK_IMPORTED_MODULE_0__[/* startApplication */ "h"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_launcher_Launcher__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/Launcher.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/Launcher.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/Launcher.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_1__[/* createSelector */ "a"])(applications__WEBPACK_IMPORTED_MODULE_0__[/* taskManagerSelector */ "i"], applications__WEBPACK_IMPORTED_MODULE_0__[/* windowsSelector */ "j"], function (taskManager, windows) {
  var visible = true;

  if (taskManager.showTaskManager) {
    visible = false;
  } // TODO: is application open?


  windows.forEach(function (window) {
    if (!window) {
      return;
    }

    if (!window.minimized) {
      visible = false;
    }
  });
  return {
    isVisible: visible
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

  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/selectors/launchBar.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2492:
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(242);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2493);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var LaunchBar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LaunchBar, _Component);

  function LaunchBar(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LaunchBar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LaunchBar).call(this, props, context));
    _this.launchApplication = _this.launchApplication.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LaunchBar, [{
    key: "launchApplication",
    value: function launchApplication(application, manifest) {
      var startApplication = this.props.startApplication;
      startApplication(application, manifest);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isVisible = _this$props.isVisible,
          width = _this$props.width;
      var _this$props$classes = this.props.classes,
          container = _this$props$classes.container,
          launchBar = _this$props$classes.launchBar;

      if (!isVisible) {
        return null;
      }

      return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__["isWidthDown"])('md', width) ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: launchBar
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: container
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        launchApplication: this.launchApplication
      })))) : null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LaunchBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = {
  container: {
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '1vw 2.5vw 1vw',
    height: '100%',
    margin: '0 auto',
    maxWidth: '600px',
    width: '100%'
  },
  launchBar: {
    bottom: '5vw',
    height: '10vh',
    left: '5vw',
    margin: 0,
    padding: 0,
    position: 'absolute',
    width: '90%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7___default()()(LaunchBar));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LaunchBar, "LaunchBar", "/home/daniel/Development/totem/app/src/app/components/launch-bar/LaunchBar.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/launch-bar/LaunchBar.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/launch-bar/LaunchBar.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2493:
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props, context));
    _this.launchApplication = _this.launchApplication.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "launchApplication",
    value: function launchApplication() {
      this.props.launchApplication('https://3box.io/', '/apps/3box.json');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$classes = this.props.classes,
          container = _this$props$classes.container,
          image = _this$props$classes.image;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: container,
        onClick: this.launchApplication
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/images/apps/3box_256x256.png",
        className: image
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

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  container: {
    height: '7.5vh',
    padding: '1.25vh'
  },
  image: {
    height: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(App);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/home/daniel/Development/totem/app/src/app/components/launch-bar/App.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/launch-bar/App.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/launch-bar/App.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var launcherSelector = function launcherSelector(state) {
  return state.get('app').get('launcher').toJS();
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(launcherSelector, function (launcher) {
  return {
    isVisible: launcher.showLauncher
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

  reactHotLoader.register(launcherSelector, "launcherSelector", "/home/daniel/Development/totem/app/src/app/selectors/launcher.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/selectors/launcher.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2495:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2496);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var Launcher =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Launcher, _Component);

  function Launcher(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Launcher);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Launcher).call(this, props, context));
    _this.launchApplication = _this.launchApplication.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Launcher, [{
    key: "launchApplication",
    value: function launchApplication(application, manifest) {
      var _this$props = this.props,
          hideLauncher = _this$props.hideLauncher,
          startApplication = _this$props.startApplication;
      hideLauncher();
      startApplication(application, manifest);
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.props.isVisible;
      var _this$props$classes = this.props.classes,
          container = _this$props$classes.container,
          launcher = _this$props$classes.launcher,
          launcherVisible = _this$props$classes.launcherVisible; // TODO: launcher animation: hide sidenav, fade in with react spring!!

      var launcherClass = classnames__WEBPACK_IMPORTED_MODULE_8___default()(launcher, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, launcherVisible, isVisible));
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("aside", {
        className: launcherClass
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: container
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        launchApplication: this.launchApplication
      }))));
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
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var style = {
  container: {
    left: '20%',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '10%',
    width: '60%'
  },
  launcher: {
    backgroundImage: 'url("/images/launcher-background.svg")',
    backgroundSize: 'cover',
    height: '100%',
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'relative',
    transform: 'translateY(-102%)',
    transition: 'opacity .2s ease-out',
    width: '100%',
    willChange: 'transform'
  },
  launcherVisible: {
    opacity: 1,
    transform: 'none'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(Launcher);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Launcher, "Launcher", "/home/daniel/Development/totem/app/src/app/components/launcher/Launcher.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/launcher/Launcher.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/launcher/Launcher.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2496:
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props, context));
    _this.launchApplication = _this.launchApplication.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "launchApplication",
    value: function launchApplication() {
      this.props.launchApplication('https://3box.io/', '/apps/3box.json');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$classes = this.props.classes,
          container = _this$props$classes.container,
          image = _this$props$classes.image;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: container,
        onClick: this.launchApplication
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/images/apps/3box_256x256.png",
        className: image
      }), "3Box");
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  container: {
    cursor: 'pointer',
    textAlign: 'center',
    width: '5vw'
  },
  image: {
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(App);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/home/daniel/Development/totem/app/src/app/components/launcher/App.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/launcher/App.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/launcher/App.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ })

}]);
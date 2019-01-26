(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 2489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _components_applications_Windows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2506);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {
    instances: Object(applications__WEBPACK_IMPORTED_MODULE_0__[/* instancesSelector */ "e"])(state),
    showTaskManager: Object(applications__WEBPACK_IMPORTED_MODULE_0__[/* taskManagerSelector */ "i"])(state).showTaskManager,
    windows: Object(applications__WEBPACK_IMPORTED_MODULE_0__[/* windowsSelector */ "j"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_applications_Windows__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/applications/Windows.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/applications/Windows.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/applications/Windows.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 2506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(302);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);









(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var Windows =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Windows, _Component);

  function Windows(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Windows);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Windows).call(this, props, context));
    _this.state = {
      changing: false
    };
    _this.startChange = _this.startChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this)));
    _this.finishChange = _this.finishChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Windows, [{
    key: "startChange",
    value: function startChange() {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, {
        changing: true
      }));
    }
  }, {
    key: "finishChange",
    value: function finishChange() {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, {
        changing: false
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showTaskManager = _this$props.showTaskManager,
          windows = _this$props.windows;
      var _this$props$classes = this.props.classes,
          container = _this$props$classes.container,
          containerNoPointerEvents = _this$props$classes.containerNoPointerEvents;
      var containerClass = classnames__WEBPACK_IMPORTED_MODULE_10___default()(container, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, containerNoPointerEvents, this.getFocusedIndex(windows) === -1 && !showTaskManager));
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: containerClass
      }, this.renderWindows(), this.renderHomeButton());
    }
  }, {
    key: "renderWindows",
    value: function renderWindows() {
      var _this2 = this;

      var _this$props2 = this.props,
          showTaskManager = _this$props2.showTaskManager,
          windows = _this$props2.windows;
      var changing = this.state.changing;
      var focusedIndex = this.getFocusedIndex(windows);
      var orderedWindows = {};
      windows.forEach(function (window, index) {
        orderedWindows[window.instance] = index;
      });
      return Object(immutable__WEBPACK_IMPORTED_MODULE_11__["List"])(windows).sort(function (a, b) {
        // sorting by instance is required to prevent reloading of applications iframe
        // to change the order in the view change the orderedWindows object
        return a.instance.localeCompare(b.instance);
      }).map(function (window) {
        if (!window) {
          return null;
        }

        var focused = false;

        if (focusedIndex === orderedWindows[window.instance]) {
          focused = true;
        }

        var minimized = window.minimized;
        var offset = 0;
        var taskStyle = {};

        if (showTaskManager) {
          minimized = false;
          focused = true; // TODO: replace focusedIndex with index from sorted windows

          var sortedIndex = focusedIndex;

          if (focusedIndex === -1) {
            sortedIndex = 0;
          }

          offset = orderedWindows[window.instance] - sortedIndex;
          taskStyle = {
            left: offset * 75 + 'vw',
            top: '-5vh'
          };
        }

        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
          key: window.instance
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(applications__WEBPACK_IMPORTED_MODULE_9__[/* Window */ "c"], {
          focused: focused,
          instance: window.instance,
          minimized: minimized,
          task: showTaskManager,
          taskStyle: taskStyle,
          windowHeight: window.height,
          windowWidth: window.width,
          x: window.x,
          y: window.y,
          zIndex: orderedWindows[window.instance],
          changing: changing,
          startChange: _this2.startChange,
          finishChange: _this2.finishChange
        }), _this2.renderTaskInfo(window.instance, offset));
      });
    }
  }, {
    key: "renderTaskInfo",
    value: function renderTaskInfo(instanceId, offset) {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          instances = _this$props3.instances,
          showTaskManager = _this$props3.showTaskManager;
      var taskInstance = Object(immutable__WEBPACK_IMPORTED_MODULE_11__["List"])(instances).find(function (instance) {
        if (!instance) {
          return false;
        }

        return instance.id === instanceId;
      });

      if (!showTaskManager || !taskInstance) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(applications__WEBPACK_IMPORTED_MODULE_9__[/* TaskTitle */ "b"], {
        icon: taskInstance.icon,
        offset: offset,
        themeColor: taskInstance.themeColor,
        title: taskInstance.title
      });
    }
  }, {
    key: "renderHomeButton",
    value: function renderHomeButton() {
      return this.props.showTaskManager ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(applications__WEBPACK_IMPORTED_MODULE_9__[/* HomeButton */ "a"], null) : null;
    }
  }, {
    key: "getFocusedIndex",
    value: function getFocusedIndex(windows) {
      return Object(immutable__WEBPACK_IMPORTED_MODULE_11__["List"])(windows).findLastIndex(function (window) {
        if (!window) {
          return false;
        }

        return !window.minimized;
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

  return Windows;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var style = {
  container: {
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    width: '100%'
  },
  containerNoPointerEvents: {
    pointerEvents: 'none'
  },
  windowContainer: {
    height: '100%',
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(style)(Windows);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Windows, "Windows", "/home/daniel/Development/totem/app/src/app/components/applications/Windows.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/applications/Windows.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/applications/Windows.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ })

}]);
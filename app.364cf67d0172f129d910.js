(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var validate = function validate(values) {
  var error = {}; //

  return error;
};

var _default = validate;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/home/daniel/Development/totem/app/src/account/validators/loginPrivateKey.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/validators/loginPrivateKey.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1004:
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(580);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var LoginMessage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LoginMessage, _Component);

  function LoginMessage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginMessage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoginMessage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginMessage, [{
    key: "render",
    value: function render() {
      var wrapper = this.props.classes.wrapper;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: wrapper
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "h2"
      }, "Hello"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LoginMessage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  wrapper: {
    fontSize: '4rem',
    textTransform: 'uppercase'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(LoginMessage);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginMessage, "LoginMessage", "/home/daniel/Development/totem/app/src/account/components/LoginMessage.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/account/components/LoginMessage.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/components/LoginMessage.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  account: null
});

function addressReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_login__WEBPACK_IMPORTED_MODULE_1__[/* LOGIN_SUCCESS */ "c"]:
      return state.set('account', action.payload.address);
  }

  return state;
}

var _default = addressReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/account/reducers/address.ts");
  reactHotLoader.register(addressReducer, "addressReducer", "/home/daniel/Development/totem/app/src/account/reducers/address.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/reducers/address.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(410);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({});

function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_profile__WEBPACK_IMPORTED_MODULE_1__[/* ADD_PROFILE */ "a"]:
      return state.set(action.payload.address, {
        image: action.payload.image,
        name: action.payload.name
      });
  }

  return state;
}

var _default = profileReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/account/reducers/profile.ts");
  reactHotLoader.register(profileReducer, "profileReducer", "/home/daniel/Development/totem/app/src/account/reducers/profile.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/reducers/profile.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_providedAccounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])([]);

function providedAccountsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_providedAccounts__WEBPACK_IMPORTED_MODULE_1__[/* SET_PROVIDED_ACCOUNTS */ "a"]:
      return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(action.payload.accounts);
  }

  return state;
}

var _default = providedAccountsReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/account/reducers/providedAccounts.ts");
  reactHotLoader.register(providedAccountsReducer, "providedAccountsReducer", "/home/daniel/Development/totem/app/src/account/reducers/providedAccounts.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/reducers/providedAccounts.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var _actions_providedAccounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(411);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(initializeSaga);




 // TODO: lazy load 3box package as it is 1MB+ gzipped (maybe because of ipfs)

var Box = __webpack_require__(1520);

function initializeSaga() {
  var initializeAction, accounts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, address, profile, name, image;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initializeSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[/* take */ "f"])(app__WEBPACK_IMPORTED_MODULE_1__[/* INITIALIZE */ "a"]);

        case 2:
          initializeAction = _context.sent;
          _context.next = 5;
          return initializeAction.payload.ethereum.enable();

        case 5:
          accounts = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[/* put */ "d"])(Object(_actions_providedAccounts__WEBPACK_IMPORTED_MODULE_4__[/* setProvidedAccounts */ "b"])(accounts));

        case 8:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 11;
          _iterator = accounts[Symbol.iterator]();

        case 13:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 30;
            break;
          }

          address = _step.value;
          _context.prev = 15;
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[/* call */ "b"])(Box.getProfile, address);

        case 18:
          profile = _context.sent;
          name = profile.name;
          image = 'https://ipfs.infura.io/ipfs/' + profile.image[0].contentUrl['/'];
          _context.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[/* put */ "d"])(Object(_actions_profile__WEBPACK_IMPORTED_MODULE_3__[/* addProfile */ "b"])(address, image, name));

        case 23:
          _context.next = 27;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](15);

        case 27:
          _iteratorNormalCompletion = true;
          _context.next = 13;
          break;

        case 30:
          _context.next = 36;
          break;

        case 32:
          _context.prev = 32;
          _context.t1 = _context["catch"](11);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 36:
          _context.prev = 36;
          _context.prev = 37;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 39:
          _context.prev = 39;

          if (!_didIteratorError) {
            _context.next = 42;
            break;
          }

          throw _iteratorError;

        case 42:
          return _context.finish(39);

        case 43:
          return _context.finish(36);

        case 44:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[11, 32, 36, 44], [15, 25], [37,, 39, 43]]);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initializeSaga, "initializeSaga", "/home/daniel/Development/totem/app/src/account/sagas/initialize.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _actions_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginWithPrivateKey),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginWithMetaMask),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginSaga);

// import { addAccount } from 'network';

 // const Wallet = require('ethers').Wallet;
// const utils = require('ethers').utils;
// TODO: use different accounts for different purposes, e.g. ledger for money, priv key for files, ...

function loginWithPrivateKey(action) {
  var privateKey, account;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginWithPrivateKey$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          privateKey = action.payload.privateKey; // TODO: should also be part of the network module!
          // privateKey = utils.hexlify(privateKey);
          // TODO: will be replaced by network module, then something like
          // put(addAccountAction), take(ACCOUNT_ADDED)
          // should be in a web worker because its expensive
          // import TestWorker from 'worker-loader!test.worker';

          account = {
            address: '1'
          }; // new Wallet(privateKey);
          // TODO
          // yield put(addAccount());

          if (!account) {
            _context.next = 7;
            break;
          }

          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_login__WEBPACK_IMPORTED_MODULE_2__[/* loginSuccess */ "f"])(account.address));

        case 5:
          _context.next = 7;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function loginWithMetaMask(action) {
  var web3, accounts;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginWithMetaMask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (window.Web3 && window.web3 && window.web3.currentProvider) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", false);

        case 2:
          web3 = new window.Web3(window.web3.currentProvider);
          _context2.next = 5;
          return web3.eth.accounts;

        case 5:
          accounts = _context2.sent;

          if (!accounts[0]) {
            _context2.next = 11;
            break;
          }

          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_login__WEBPACK_IMPORTED_MODULE_2__[/* loginSuccess */ "f"])(accounts[0]));

        case 9:
          _context2.next = 11;
          break;

        case 11:
          _context2.next = 13;
          return true;

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function loginSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* takeLatest */ "h"])(_actions_login__WEBPACK_IMPORTED_MODULE_2__[/* LOGIN_PRIVATE_KEY */ "b"], loginWithPrivateKey);

        case 2:
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* takeLatest */ "h"])(_actions_login__WEBPACK_IMPORTED_MODULE_2__[/* LOGIN_METAMASK */ "a"], loginWithMetaMask);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loginWithPrivateKey, "loginWithPrivateKey", "/home/daniel/Development/totem/app/src/account/sagas/login.ts");
  reactHotLoader.register(loginWithMetaMask, "loginWithMetaMask", "/home/daniel/Development/totem/app/src/account/sagas/login.ts");
  reactHotLoader.register(loginSaga, "loginSaga", "/home/daniel/Development/totem/app/src/account/sagas/login.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1011:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _branding_LogoFlat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(404);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var Branding =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Branding, _Component);

  function Branding() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Branding);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Branding).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Branding, [{
    key: "render",
    value: function render() {
      var _this$props$classes = this.props.classes,
          logo = _this$props$classes.logo,
          name = _this$props$classes.name,
          wrapper = _this$props$classes.wrapper; // TODO: only logo in white

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: wrapper
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: logo
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_branding_LogoFlat__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Branding;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = {
  logo: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '5vh'
  },
  wrapper: {
    bottom: '5vh',
    position: 'absolute',
    right: '5vw'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(Branding);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Branding, "Branding", "/home/daniel/Development/totem/app/src/app/components/login/Branding.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/login/Branding.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/login/Branding.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _selectors_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1013);
/* harmony import */ var _components_Intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1014);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return Object(_selectors_intl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({}, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Intl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/app/containers/Intl.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/app/containers/Intl.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/Intl.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var intlSelector = function intlSelector(state) {
  return state.get('app').get('intl').toJS();
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(intlSelector, function (intl) {
  return {
    locale: intl.locale
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

  reactHotLoader.register(intlSelector, "intlSelector", "/home/daniel/Development/totem/app/src/app/selectors/intl.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/selectors/intl.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1014:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1015);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var Intl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Intl, _Component);

  function Intl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Intl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Intl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Intl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          locale = _this$props.locale;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__[/* IntlProvider */ "a"], {
        locale: locale
      }, this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Intl;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Intl;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Intl, "Intl", "/home/daniel/Development/totem/app/src/app/components/Intl.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/Intl.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1017:
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
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1018);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var HomeButton =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HomeButton, _Component);

  function HomeButton(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HomeButton);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HomeButton).call(this, props, context));
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HomeButton, [{
    key: "handleClick",
    value: function handleClick() {
      var hideTaskManager = this.props.hideTaskManager;
      hideTaskManager();
    }
  }, {
    key: "render",
    value: function render() {
      var homeButton = this.props.classes.homeButton;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: homeButton,
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, {
        fontSize: 'inherit'
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

  return HomeButton;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = function style(theme) {
  return {
    homeButton: {
      background: '#fff',
      borderRadius: '50%',
      bottom: '2vh',
      fontSize: '2.4rem',
      left: '50%',
      position: 'absolute',
      transform: 'translate(-50%, 0)'
    }
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(HomeButton);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomeButton, "HomeButton", "/home/daniel/Development/totem/app/src/applications/components/task-manager/HomeButton.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/task-manager/HomeButton.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/task-manager/HomeButton.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var instanceSelector = function instanceSelector(state, id) {
  return state.get('applications').get('instances').find(function (instance) {
    return instance.id === id;
  });
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(instanceSelector, function (instance) {
  return instance;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instanceSelector, "instanceSelector", "/home/daniel/Development/totem/app/src/applications/selectors/instance.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/selectors/instance.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1020:
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
/* harmony import */ var gestures__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(972);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var touch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1021);
/* harmony import */ var _window_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1022);
/* harmony import */ var _window_Resize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1027);
/* harmony import */ var _window_Sandbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1028);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();











var Window =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Window, _Component);

  function Window(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Window);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Window).call(this, props, context));
    _this.offsetHeight = 0;
    _this.offsetWidth = 0;
    _this.offsetX = 0;
    _this.offsetY = 0;
    _this.close = _this.close.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.finish = _this.finish.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.focus = _this.focus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.minimize = _this.minimize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.move = _this.move.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.resize = _this.resize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.setRef = _this.setRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.renderHeader = _this.renderHeader.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.renderResize = _this.renderResize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Window, [{
    key: "setRef",
    value: function setRef(element) {
      this.domNode = element;
    }
  }, {
    key: "close",
    value: function close() {
      var _this$props = this.props,
          close = _this$props.close,
          instance = _this$props.instance;
      close(instance);
    }
  }, {
    key: "finish",
    value: function finish() {
      var _this$props2 = this.props,
          finishChange = _this$props2.finishChange,
          instance = _this$props2.instance,
          move = _this$props2.move,
          resize = _this$props2.resize;

      if (this.offsetX !== 0 || this.offsetY !== 0) {
        // TODO: min and max x/y
        move(instance, this.offsetX, this.offsetY);
      }

      if (this.offsetWidth !== 0 || this.offsetHeight !== 0) {
        // TODO: does not resize correct
        // Maybe (this.props.windowWidth + this.offsetWidth) - Window.MIN_WIDTH

        /*const resizeX = ((this.offsetWidth + this.props.windowWidth) >= Window.MIN_WIDTH) ?
            this.offsetWidth :
            this.props.windowWidth - Window.MIN_WIDTH;
         const resizeY = ((this.offsetHeight + this.props.windowHeight) >= Window.MIN_HEIGHT) ?
            this.offsetHeight :
            this.props.windowHeight - Window.MIN_HEIGHT;
         resize(instance, resizeX, resizeY);*/
        resize(instance, this.offsetWidth, this.offsetHeight);
      }

      this.offsetHeight = 0;
      this.offsetWidth = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      finishChange();
    }
  }, {
    key: "focus",
    value: function focus() {
      var _this$props3 = this.props,
          focus = _this$props3.focus,
          focused = _this$props3.focused,
          instance = _this$props3.instance;

      if (!focused) {
        focus(instance);
      }
    }
  }, {
    key: "minimize",
    value: function minimize(event) {
      var _this$props4 = this.props,
          minimize = _this$props4.minimize,
          instance = _this$props4.instance;
      minimize(instance);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      if (!this.props.changing) {
        this.props.startChange();
      }

      if (!this.domNode) {
        return;
      } // TODO: min and max x/y


      this.offsetX = this.offsetX + x;
      this.offsetY = this.offsetY + y;
      this.domNode.style.top = this.props.y + this.offsetY + 'px';
      this.domNode.style.left = this.props.x + this.offsetX + 'px';
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      if (!this.props.changing) {
        this.props.startChange();
      }

      if (!this.domNode) {
        return;
      }

      this.offsetWidth = this.offsetWidth + width;
      this.offsetHeight = this.offsetHeight + height;
      this.offsetWidth + this.props.windowWidth >= Window.MIN_WIDTH ? this.domNode.style.width = this.props.windowWidth + this.offsetWidth + 'px' : this.domNode.style.width = Window.MIN_WIDTH + 'px';
      this.offsetHeight + this.props.windowHeight >= Window.MIN_HEIGHT ? this.domNode.style.height = this.props.windowHeight + this.offsetHeight + 'px' : this.domNode.style.height = Window.MIN_HEIGHT + 'px';
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props5 = this.props,
          application = _this$props5.application,
          changing = _this$props5.changing,
          classes = _this$props5.classes,
          focused = _this$props5.focused,
          minimized = _this$props5.minimized,
          task = _this$props5.task,
          taskStyle = _this$props5.taskStyle,
          width = _this$props5.width,
          windowHeight = _this$props5.windowHeight,
          windowWidth = _this$props5.windowWidth,
          x = _this$props5.x,
          y = _this$props5.y,
          zIndex = _this$props5.zIndex;
      var windowPositionStyle = Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__["isWidthUp"])('lg', width) ? {
        height: windowHeight + 'px',
        left: x + 'px',
        top: y + 'px',
        width: windowWidth + 'px',
        zIndex: zIndex
      } : {};
      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(classes.window, (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, classes.minimized, minimized), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, classes.focused, focused), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, classes.notFocused, !focused), _classNames));

      if (task) {
        className = classes.task;
        windowPositionStyle = taskStyle;
      }

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: className,
        style: windowPositionStyle,
        ref: this.setRef,
        onMouseDownCapture: this.focus
      }, this.renderHeader(), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_window_Sandbox__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        pointerEvents: changing || task,
        src: application
      }), this.renderMobileTaskManagerGesture(), this.renderResize(), this.renderTaskOverlay());
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props6 = this.props,
          themeColor = _this$props6.themeColor,
          title = _this$props6.title,
          width = _this$props6.width;
      return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__["isWidthUp"])('lg', width) ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_window_Header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        close: this.close,
        finish: this.finish,
        minimize: this.minimize,
        move: this.move,
        themeColor: themeColor,
        title: title
      }) : null;
    }
  }, {
    key: "renderMobileTaskManagerGesture",
    value: function renderMobileTaskManagerGesture() {
      var _this$props7 = this.props,
          showTaskManager = _this$props7.showTaskManager,
          width = _this$props7.width;

      var swipe = function swipe() {
        showTaskManager();
      };

      return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__["isWidthDown"])('md', width) ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(gestures__WEBPACK_IMPORTED_MODULE_10__[/* SwipeFromBottom */ "a"], {
        onSwipe: swipe
      }) : null;
    }
  }, {
    key: "renderResize",
    value: function renderResize() {
      var width = this.props.width;
      return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__["isWidthUp"])('lg', width) ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_window_Resize__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        finish: this.finish,
        move: this.move,
        resize: this.resize
      }) : null;
    }
  }, {
    key: "renderTaskOverlay",
    value: function renderTaskOverlay() {
      var _this$props8 = this.props,
          focus = _this$props8.focus,
          hideTaskManager = _this$props8.hideTaskManager,
          instance = _this$props8.instance,
          task = _this$props8.task;
      var taskOverlay = this.props.classes.taskOverlay;

      var focusTask = function focusTask() {
        focus(instance);
        hideTaskManager();
      };

      return task ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(touch__WEBPACK_IMPORTED_MODULE_12__[/* Swipeable */ "a"], {
        onSwipeUp: this.close
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: taskOverlay,
        onClick: focusTask
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

  return Window;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Window.MIN_HEIGHT = 200;
Window.MIN_WIDTH = 400;

var style = function style(theme) {
  var _task, _window;

  return {
    focused: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.breakpoints.down('md'), {
      display: 'block'
    }),
    minimized: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.breakpoints.up('lg'), {
      display: 'none'
    }),
    notFocused: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, theme.breakpoints.down('md'), {
      display: 'none'
    }),
    task: (_task = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, theme.breakpoints.up('lg'), {// TODO
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "height", '100vh'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "transform", 'scale(0.7)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_task, "width", '100vw'), _task),
    taskOverlay: {
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    window: (_window = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, theme.breakpoints.up('lg'), {
      borderRadius: '.25vw 1vw .25vw',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.4)',
      willChange: 'height, left, top, width'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, "height", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, "left", '0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, "overflow", 'hidden'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, "top", '0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_window, "width", '100%'), _window)
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8___default()()(Window));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Window, "Window", "/home/daniel/Development/totem/app/src/applications/components/Window.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/Window.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/Window.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_Swipeable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components_Swipeable__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ 1022:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1023);









(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var Header =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Header, _Component);

  function Header(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Header);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Header).call(this, props, context));
    _this.x = 0;
    _this.y = 0;
    _this.state = {
      mouseDown: false
    };
    _this.onMouseDown = _this.onMouseDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this)));
    _this.onMouseUp = _this.onMouseUp.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this)));
    _this.onMouseMove = _this.onMouseMove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Header, [{
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, {
        mouseDown: true
      }));
      this.x = event.clientX;
      this.y = event.clientY;
      window.addEventListener('mousemove', this.onMouseMove, true);
      window.addEventListener('mouseup', this.onMouseUp, true);
      event.preventDefault();
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      window.removeEventListener('mousemove', this.onMouseMove, true);
      window.removeEventListener('mouseup', this.onMouseUp, true);
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state, {
        mouseDown: false
      }));
      this.props.finish();
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      if (this.state.mouseDown) {
        var move = this.props.move;
        var moveX = event.clientX - this.x;
        var moveY = event.clientY - this.y;
        move(moveX, moveY);
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mouseDown = this.state.mouseDown;
      var _this$props = this.props,
          close = _this$props.close,
          minimize = _this$props.minimize,
          themeColor = _this$props.themeColor,
          title = _this$props.title;
      var _this$props$classes = this.props.classes,
          header = _this$props$classes.header,
          headerMove = _this$props$classes.headerMove;
      var color = 'rgba(247, 247, 247, 0.8)';
      var buttonBackground = 'rgba(247, 247, 247, 0.65)';

      if (this.hexToLuma(themeColor) > 0.5) {
        color = 'rgba(8, 8, 8, 0.8)';
        buttonBackground = 'rgba(8, 8, 8, 0.65)';
      }

      var headerColors = {
        backgroundColor: themeColor,
        color: color
      };
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(header, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, headerMove, mouseDown)),
        style: headerColors,
        onMouseDown: this.onMouseDown
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        backgroundColor: buttonBackground,
        close: close,
        color: themeColor,
        minimize: minimize
      }), title);
    }
  }, {
    key: "hexToLuma",
    value: function hexToLuma(color) {
      var hex = color.replace(/#/, '');
      var r = parseInt(hex.substr(0, 2), 16);
      var g = parseInt(hex.substr(2, 2), 16);
      var b = parseInt(hex.substr(4, 2), 16);
      return [0.299 * r, 0.587 * g, 0.114 * b].reduce(function (previous, current) {
        return previous + current;
      }) / 255;
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
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var style = {
  header: {
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
    height: '2rem',
    lineHeight: '2rem',
    position: 'relative',
    textAlign: 'center',
    userSelect: 'none',
    width: '100%'
  },
  headerMove: {
    cursor: 'grabbing'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(style)(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/home/daniel/Development/totem/app/src/applications/components/window/Header.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/window/Header.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/window/Header.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1023:
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
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1025);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1024);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1026);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var Buttons =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Buttons, _Component);

  function Buttons() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Buttons);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Buttons).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Buttons, [{
    key: "blockMouseDown",
    value: function blockMouseDown(event) {
      event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backgroundColor = _this$props.backgroundColor,
          close = _this$props.close,
          color = _this$props.color,
          minimize = _this$props.minimize;
      var _this$props$classes = this.props.classes,
          button = _this$props$classes.button,
          container = _this$props$classes.container;
      var buttonColors = {
        backgroundColor: backgroundColor,
        color: color
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: container
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: button,
        style: buttonColors,
        key: "close",
        onClick: close,
        onMouseDown: this.blockMouseDown
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7___default.a, null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: button,
        style: buttonColors,
        key: "maximize",
        onMouseDown: this.blockMouseDown
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: button,
        style: buttonColors,
        key: "minimize",
        onClick: minimize,
        onMouseDown: this.blockMouseDown
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_8___default.a, null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var style = {
  button: {
    '&:hover': {
      opacity: 0.7
    },
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'inline-block',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    transform: 'scale(0.5)'
  },
  container: {
    left: '.5vw',
    margin: '.25rem 0',
    padding: '0',
    position: 'absolute'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(Buttons);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Buttons, "Buttons", "/home/daniel/Development/totem/app/src/applications/components/window/Buttons.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/window/Buttons.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/window/Buttons.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _resize_Direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(156);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var Resize =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Resize, _Component);

  function Resize() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Resize);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Resize).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Resize, [{
    key: "render",
    value: function render() {
      var _this$props$classes = this.props.classes,
          bottom = _this$props$classes.bottom,
          bottomLeft = _this$props$classes.bottomLeft,
          bottomRight = _this$props$classes.bottomRight,
          left = _this$props$classes.left,
          right = _this$props$classes.right,
          top = _this$props$classes.top,
          topLeft = _this$props$classes.topLeft,
          topRight = _this$props$classes.topRight;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: topLeft,
        direction: "ne"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: topRight,
        direction: "nw"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: bottomLeft,
        direction: "se"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: bottomRight,
        direction: "sw"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: top,
        direction: "n"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: left,
        direction: "e"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: right,
        direction: "w"
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_resize_Direction__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: bottom,
        direction: "s"
      }, this.props)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Resize;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  bottom: {
    bottom: '0',
    cursor: 's-resize',
    height: '5px',
    position: 'absolute',
    width: '100%'
  },
  bottomLeft: {
    bottom: '0',
    cursor: 'se-resize',
    height: '15px',
    position: 'absolute',
    right: '0',
    width: '10px',
    zIndex: 1
  },
  bottomRight: {
    bottom: '0',
    cursor: 'sw-resize',
    height: '7px',
    left: '0',
    position: 'absolute',
    width: '7px',
    zIndex: 1
  },
  left: {
    cursor: 'w-resize',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '5px'
  },
  right: {
    cursor: 'e-resize',
    height: '100%',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '5px'
  },
  top: {
    cursor: 'n-resize',
    height: '5px',
    position: 'absolute',
    top: '0',
    width: '100%'
  },
  topLeft: {
    cursor: 'nw-resize',
    height: '7px',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '7px',
    zIndex: 1
  },
  topRight: {
    cursor: 'ne-resize',
    height: '15px',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '10px',
    zIndex: 1
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(Resize);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Resize, "Resize", "/home/daniel/Development/totem/app/src/applications/components/window/Resize.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/window/Resize.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/window/Resize.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1028:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var Sandbox =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Sandbox, _Component);

  function Sandbox() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Sandbox);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Sandbox).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Sandbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pointerEvents = _this$props.pointerEvents,
          src = _this$props.src;
      var _this$props$classes = this.props.classes,
          iframe = _this$props$classes.iframe,
          iframePointerEvents = _this$props$classes.iframePointerEvents;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("iframe", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(iframe, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, iframePointerEvents, pointerEvents)),
        src: src,
        allowFullScreen: true
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

  return Sandbox;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = function style(theme) {
  var _iframe;

  return {
    iframe: (_iframe = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_iframe, theme.breakpoints.up('lg'), {
      height: 'calc(100% - 2rem)'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_iframe, "backgroundColor", '#ffffff'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_iframe, "border", 'none'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_iframe, "height", '100%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_iframe, "width", '100%'), _iframe),
    iframePointerEvents: {
      pointerEvents: 'none'
    }
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(Sandbox);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sandbox, "Sandbox", "/home/daniel/Development/totem/app/src/applications/components/window/Sandbox.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/window/Sandbox.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/window/Sandbox.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


 // TODO: default applications from user config

var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])([]);

function instancesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_instances__WEBPACK_IMPORTED_MODULE_1__[/* ADD_INSTANCE */ "a"]:
      return state.push({
        application: action.payload.application,
        icon: action.payload.icon,
        id: action.payload.id,
        themeColor: action.payload.themeColor,
        title: action.payload.title
      });

    case _actions_instances__WEBPACK_IMPORTED_MODULE_1__[/* UPDATE_INSTANCE */ "c"]:
      return state;

    case _actions_instances__WEBPACK_IMPORTED_MODULE_1__[/* CLOSE_INSTANCE */ "b"]:
      return state.filter(function (instance) {
        if (!instance) {
          return false;
        }

        return instance.id !== action.payload.id;
      });
  }

  return state;
}

var _default = instancesReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/applications/reducers/instances.ts");
  reactHotLoader.register(instancesReducer, "instancesReducer", "/home/daniel/Development/totem/app/src/applications/reducers/instances.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/reducers/instances.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  showTaskManager: false
});

function taskManagerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_taskManager__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_TASK_MANAGER */ "b"]:
      return state.set('showTaskManager', true);

    case _actions_taskManager__WEBPACK_IMPORTED_MODULE_1__[/* HIDE_TASK_MANAGER */ "a"]:
      return state.set('showTaskManager', false);
  }

  return state;
}

var _default = taskManagerReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/applications/reducers/taskManager.ts");
  reactHotLoader.register(taskManagerReducer, "taskManagerReducer", "/home/daniel/Development/totem/app/src/applications/reducers/taskManager.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/reducers/taskManager.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([]);

function windowsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var windowIndex = null;

  if ([_actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* FOCUS_WINDOW */ "c"], _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* MINIMIZE_WINDOW */ "e"], _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* MOVE_WINDOW */ "f"], _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* RESIZE_WINDOW */ "g"]].indexOf(action.type) !== -1) {
    windowIndex = state.findIndex(function (window) {
      if (!window) {
        return false;
      }

      return window.instance === action.payload.instance;
    });
  }

  switch (action.type) {
    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* ADD_WINDOW */ "a"]:
      return state.push({
        height: action.payload.height,
        instance: action.payload.instance,
        minimized: false,
        width: action.payload.width,
        x: action.payload.x,
        y: action.payload.y
      });

    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* CLOSE_WINDOW */ "b"]:
      return state.filter(function (window) {
        if (!window) {
          return false;
        }

        return window.instance !== action.payload.instance;
      });

    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* FOCUS_WINDOW */ "c"]:
      var focusedWindow = state.get(windowIndex);
      return state.remove(windowIndex).push(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, focusedWindow, {
        minimized: false
      }));

    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* MINIMIZE_ALL */ "d"]:
      return state.map(function (window) {
        if (!window) {
          return window;
        }

        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, window, {
          minimized: true
        });
      });

    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* MINIMIZE_WINDOW */ "e"]:
      return state.update(windowIndex, function (window) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, window, {
          minimized: true
        });
      });

    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* MOVE_WINDOW */ "f"]:
      return state.update(windowIndex, function (window) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, window, {
          x: window.x + action.payload.x,
          y: window.y + action.payload.y
        });
      });

    case _actions_windows__WEBPACK_IMPORTED_MODULE_2__[/* RESIZE_WINDOW */ "g"]:
      return state.update(windowIndex, function (window) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, window, {
          height: window.height + action.payload.height,
          width: window.width + action.payload.width
        });
      });
  }

  return state;
}

var _default = windowsReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/applications/reducers/windows.ts");
  reactHotLoader.register(windowsReducer, "windowsReducer", "/home/daniel/Development/totem/app/src/applications/reducers/windows.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/reducers/windows.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeApplicationSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _actions_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(174);
/* harmony import */ var _actions_instances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(closeApplication),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(closeApplicationSaga);






function closeApplication(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function closeApplication$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_instances__WEBPACK_IMPORTED_MODULE_3__[/* closeInstance */ "e"])(action.payload.instance));

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_windows__WEBPACK_IMPORTED_MODULE_4__[/* closeWindow */ "i"])(action.payload.instance));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function closeApplicationSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function closeApplicationSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* takeEvery */ "g"])(_actions_application__WEBPACK_IMPORTED_MODULE_2__[/* CLOSE_APPLICATION */ "a"], closeApplication);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(closeApplication, "closeApplication", "/home/daniel/Development/totem/app/src/applications/sagas/closeApplication.ts");
  reactHotLoader.register(closeApplicationSaga, "closeApplicationSaga", "/home/daniel/Development/totem/app/src/applications/sagas/closeApplication.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeEmptyTaskManagerSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _actions_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _selectors_windows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(405);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(closeEmptyTaskManager),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(closeEmptyTaskManagerSaga);






function closeEmptyTaskManager(action) {
  var windows, windowsOpen;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function closeEmptyTaskManager$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* select */ "e"])(_selectors_windows__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

        case 2:
          windows = _context.sent;
          windowsOpen = windows.filter(function (window) {
            return window.instance !== action.payload.instance;
          }).length;

          if (!(windowsOpen === 0)) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_taskManager__WEBPACK_IMPORTED_MODULE_2__[/* hideTaskManager */ "c"])());

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function closeEmptyTaskManagerSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function closeEmptyTaskManagerSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* takeLatest */ "h"])(_actions_windows__WEBPACK_IMPORTED_MODULE_3__[/* CLOSE_WINDOW */ "b"], closeEmptyTaskManager);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(closeEmptyTaskManager, "closeEmptyTaskManager", "/home/daniel/Development/totem/app/src/applications/sagas/closeEmptyTaskManager.ts");
  reactHotLoader.register(closeEmptyTaskManagerSaga, "closeEmptyTaskManagerSaga", "/home/daniel/Development/totem/app/src/applications/sagas/closeEmptyTaskManager.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showTaskManagerSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _actions_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(showTaskManager),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(showTaskManagerSaga);





function showTaskManager() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function showTaskManager$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_windows__WEBPACK_IMPORTED_MODULE_3__[/* minimizeAll */ "k"])());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function showTaskManagerSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function showTaskManagerSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* takeLatest */ "h"])(_actions_taskManager__WEBPACK_IMPORTED_MODULE_2__[/* SHOW_TASK_MANAGER */ "b"], showTaskManager);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(showTaskManager, "showTaskManager", "/home/daniel/Development/totem/app/src/applications/sagas/showTaskManager.ts");
  reactHotLoader.register(showTaskManagerSaga, "showTaskManagerSaga", "/home/daniel/Development/totem/app/src/applications/sagas/showTaskManager.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startApplicationSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _actions_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(174);
/* harmony import */ var _actions_instances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1036);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(startApplication),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(startApplicationSaga);







function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line
    var r = Math.random() * 16 | 0; // tslint:disable-next-line

    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function startApplication(action) {
  var metaData, id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function startApplication$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* call */ "b"])(_metadata__WEBPACK_IMPORTED_MODULE_5__[/* fetchMetaData */ "a"], action.payload.application, action.payload.manifestUrl);

        case 3:
          metaData = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* call */ "b"])(generateId);

        case 6:
          id = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_instances__WEBPACK_IMPORTED_MODULE_3__[/* addInstance */ "d"])(action.payload.application, id, metaData.icon, metaData.themeColor, metaData.title));

        case 9:
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_windows__WEBPACK_IMPORTED_MODULE_4__[/* addWindow */ "h"])(id, 800, 400, 100, 100));

        case 11:
          _context.next = 15;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 13]]);
}

function startApplicationSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function startApplicationSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* takeLatest */ "h"])(_actions_application__WEBPACK_IMPORTED_MODULE_2__[/* START_APPLICATION */ "b"], startApplication);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(generateId, "generateId", "/home/daniel/Development/totem/app/src/applications/sagas/startApplication.ts");
  reactHotLoader.register(startApplication, "startApplication", "/home/daniel/Development/totem/app/src/applications/sagas/startApplication.ts");
  reactHotLoader.register(startApplicationSaga, "startApplicationSaga", "/home/daniel/Development/totem/app/src/applications/sagas/startApplication.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fetchMetaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _fetchMetaData__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export reducers */
/* harmony import */ var account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(302);
/* harmony import */ var network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1039);
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173);
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form_immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(109);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1044);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var reducers = {
  account: account__WEBPACK_IMPORTED_MODULE_0__[/* reducer */ "f"],
  app: _app_reducers__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  applications: applications__WEBPACK_IMPORTED_MODULE_1__[/* reducer */ "f"],
  form: redux_form_immutable__WEBPACK_IMPORTED_MODULE_3__["reducer"],
  network: network__WEBPACK_IMPORTED_MODULE_2__[/* reducer */ "a"]
};

var _default = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(reducers);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(reducers, "reducers", "/home/daniel/Development/totem/app/src/reducers.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/reducers.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _actions_blockchain_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(575);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(981);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1041);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1042);
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1043);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var _default = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  account: _account__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  contract: _contract__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  transaction: _transaction__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({});

function accountReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {}

  return state;
}

var _default = accountReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/account.ts");
  reactHotLoader.register(accountReducer, "accountReducer", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/account.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/account.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({});

function contractReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {}

  return state;
}

var _default = contractReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/contract.ts");
  reactHotLoader.register(contractReducer, "contractReducer", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/contract.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/contract.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({//
});

function transactionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {}

  return state;
}

var _default = transactionReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/transaction.ts");
  reactHotLoader.register(transactionReducer, "transactionReducer", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/transaction.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/network/reducers/blockchain/transaction.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1045);
/* harmony import */ var _launcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1047);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1048);
/* harmony import */ var _sideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1049);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var _default = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  intl: _intl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  launcher: _launcher__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  nav: _sideNav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  routing: _router__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/reducers/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1046);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  locale: navigator.language
});

function intlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_intl__WEBPACK_IMPORTED_MODULE_1__[/* CHANGE_LOCALE */ "a"]:
      return state.set('locale', action.payload.locale);
  }

  return state;
}

var _default = intlReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/app/reducers/intl.ts");
  reactHotLoader.register(intlReducer, "intlReducer", "/home/daniel/Development/totem/app/src/app/reducers/intl.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/reducers/intl.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_LOCALE; });
/* unused harmony export changeLocale */
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var CHANGE_LOCALE = 'app/CHANGE_LOCALE';
function changeLocale(locale) {
  return {
    payload: {
      locale: locale
    },
    type: CHANGE_LOCALE
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CHANGE_LOCALE, "CHANGE_LOCALE", "/home/daniel/Development/totem/app/src/app/actions/intl.ts");
  reactHotLoader.register(changeLocale, "changeLocale", "/home/daniel/Development/totem/app/src/app/actions/intl.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(576);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  showLauncher: false
});

function launcherReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_launcher__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_LAUNCHER */ "b"]:
      return state.set('showLauncher', true);

    case _actions_launcher__WEBPACK_IMPORTED_MODULE_1__[/* HIDE_LAUNCHER */ "a"]:
      return state.set('showLauncher', false);
  }

  return state;
}

var _default = launcherReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/app/reducers/launcher.ts");
  reactHotLoader.register(launcherReducer, "launcherReducer", "/home/daniel/Development/totem/app/src/app/reducers/launcher.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/reducers/launcher.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(243);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  locationBeforeTransitions: null
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === react_router_redux__WEBPACK_IMPORTED_MODULE_1__[/* LOCATION_CHANGE */ "b"]) {
    return state.set('locationBeforeTransitions', action.payload);
  }

  return state;
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/app/reducers/router.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/reducers/router.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_sideNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(577);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  showSideNav: false
});

function sideNavReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_sideNav__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_SIDE_NAV */ "b"]:
      return state.set('showSideNav', true);

    case _actions_sideNav__WEBPACK_IMPORTED_MODULE_1__[/* HIDE_SIDE_NAV */ "a"]:
      return state.set('showSideNav', false);
  }

  return state;
}

var _default = sideNavReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/app/reducers/sideNav.ts");
  reactHotLoader.register(sideNavReducer, "sideNavReducer", "/home/daniel/Development/totem/app/src/app/reducers/sideNav.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/reducers/sideNav.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1056);
module.exports = __webpack_require__(1220);


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_TASK_MANAGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showTaskManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_TASK_MANAGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hideTaskManager; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var SHOW_TASK_MANAGER = 'applications/SHOW_TASK_MANAGER';
function showTaskManager() {
  return {
    payload: {},
    type: SHOW_TASK_MANAGER
  };
}
var HIDE_TASK_MANAGER = 'applications/HIDE_TASK_MANAGER';
function hideTaskManager() {
  return {
    payload: {},
    type: HIDE_TASK_MANAGER
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SHOW_TASK_MANAGER, "SHOW_TASK_MANAGER", "/home/daniel/Development/totem/app/src/applications/actions/taskManager.ts");
  reactHotLoader.register(showTaskManager, "showTaskManager", "/home/daniel/Development/totem/app/src/applications/actions/taskManager.ts");
  reactHotLoader.register(HIDE_TASK_MANAGER, "HIDE_TASK_MANAGER", "/home/daniel/Development/totem/app/src/applications/actions/taskManager.ts");
  reactHotLoader.register(hideTaskManager, "hideTaskManager", "/home/daniel/Development/totem/app/src/applications/actions/taskManager.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_PRIVATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_METAMASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginMetaMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loginSuccess; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var LOGIN_PRIVATE_KEY = 'account/LOGIN_PRIVATE_KEY';
function loginPrivateKey(privateKey) {
  return {
    payload: {
      privateKey: privateKey
    },
    type: LOGIN_PRIVATE_KEY
  };
}
var LOGIN_METAMASK = 'account/LOGIN_METAMASK';
function loginMetaMask() {
  return {
    payload: {},
    type: LOGIN_METAMASK
  };
}
var LOGIN_SUCCESS = 'account/LOGIN_SUCCESS';
function loginSuccess(address) {
  return {
    payload: {
      address: address
    },
    type: LOGIN_SUCCESS
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LOGIN_PRIVATE_KEY, "LOGIN_PRIVATE_KEY", "/home/daniel/Development/totem/app/src/account/actions/login.ts");
  reactHotLoader.register(loginPrivateKey, "loginPrivateKey", "/home/daniel/Development/totem/app/src/account/actions/login.ts");
  reactHotLoader.register(LOGIN_METAMASK, "LOGIN_METAMASK", "/home/daniel/Development/totem/app/src/account/actions/login.ts");
  reactHotLoader.register(loginMetaMask, "loginMetaMask", "/home/daniel/Development/totem/app/src/account/actions/login.ts");
  reactHotLoader.register(LOGIN_SUCCESS, "LOGIN_SUCCESS", "/home/daniel/Development/totem/app/src/account/actions/login.ts");
  reactHotLoader.register(loginSuccess, "loginSuccess", "/home/daniel/Development/totem/app/src/account/actions/login.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(243);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(984);
/* harmony import */ var _app_containers_DevTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(413);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(245);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(582);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();










if ('serviceWorker' in navigator && process.type !== 'renderer') {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

var sagaTask = _sagas__WEBPACK_IMPORTED_MODULE_6__[/* sagaMiddleware */ "b"].run(_sagas__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);

var render = function render(AppComponent) {
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _state__WEBPACK_IMPORTED_MODULE_7__[/* store */ "b"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_redux__WEBPACK_IMPORTED_MODULE_3__[/* ConnectedRouter */ "a"], {
    history: _state__WEBPACK_IMPORTED_MODULE_7__[/* history */ "a"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppComponent, null), Object({"NODE_ENV":"production"}).NODE !== 'production' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_containers_DevTools__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null) : ''))), document.getElementById('app'));
};

render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

if (Object({"NODE_ENV":"production"}).NODE !== 'production' && module.hot) {
  /*module.hot.accept('./app/components/App', async () => {
      const nextAppComponent = await import('./app/components/App');
      render(nextAppComponent);
  });*/

  /*module.hot.accept('./reducers', async () => {
      const nextReducer = await import('./reducers');
      store.replaceReducer(nextReducer.default);
  });*/
  // TODO: does it work for lazy loaded sagas?

  /*module.hot.accept('./sagas', async () => {
      const nextSaga = await import('./sagas');
      sagaTask.cancel();
      sagaTask.done.then(() => {
          sagaTask = sagaMiddleware.run(nextSaga.default);
      });
  });*/
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaTask, "sagaTask", "/home/daniel/Development/totem/app/src/index.tsx");
  reactHotLoader.register(render, "render", "/home/daniel/Development/totem/app/src/index.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module), __webpack_require__(25)))

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var Swipeable =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Swipeable, _Component);

  function Swipeable(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Swipeable);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Swipeable).call(this, props, context));
    _this.defaultDistance = 50;
    _this.handleTouchStart = _this.handleTouchStart.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.handleTouchMove = _this.handleTouchMove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Swipeable, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props === nextProps) {
        return false;
      }

      return true;
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        touchStart: event.touches[0]
      }));
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      var touchCurrent = event.touches[0];
      var touchStart = this.state.touchStart;
      var _this$props = this.props,
          onSwipeUp = _this$props.onSwipeUp,
          onSwipeDown = _this$props.onSwipeDown,
          onSwipeLeft = _this$props.onSwipeLeft,
          onSwipeRight = _this$props.onSwipeRight;
      var distance = this.props.distance || this.defaultDistance;

      if (-(touchCurrent.pageY - touchStart.pageY) >= distance && onSwipeUp) {
        onSwipeUp();
      }

      if (touchCurrent.pageY - touchStart.pageY >= distance && onSwipeDown) {
        onSwipeDown();
      }

      if (-(touchCurrent.pageX - touchStart.pageX) >= distance && onSwipeLeft) {
        onSwipeLeft();
      }

      if (touchCurrent.pageX - touchStart.pageX >= distance && onSwipeRight) {
        onSwipeRight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_7__["Children"].map(children, function (child) {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(child, {
          onTouchMove: _this2.handleTouchMove,
          onTouchStart: _this2.handleTouchStart
        });
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

  return Swipeable;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Swipeable;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Swipeable, "Swipeable", "/home/daniel/Development/totem/app/src/touch/components/Swipeable.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/touch/components/Swipeable.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var Direction =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Direction, _Component);

  function Direction(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Direction);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Direction).call(this, props, context));
    _this.x = 0;
    _this.y = 0;
    _this.state = {
      mouseDown: false
    };
    _this.onMouseDown = _this.onMouseDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.onMouseUp = _this.onMouseUp.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.onMouseMove = _this.onMouseMove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Direction, [{
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        mouseDown: true
      }));
      this.x = event.clientX;
      this.y = event.clientY;
      window.addEventListener('mousemove', this.onMouseMove, true);
      window.addEventListener('mouseup', this.onMouseUp, true);
      event.preventDefault();
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      window.removeEventListener('mousemove', this.onMouseMove, true);
      window.removeEventListener('mouseup', this.onMouseUp, true);
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        mouseDown: false
      }));
      this.props.finish();
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var direction = this.props.direction;

      if (this.state.mouseDown) {
        var _this$props = this.props,
            move = _this$props.move,
            resize = _this$props.resize;
        var resizeX = 0;
        var resizeY = 0;

        switch (direction) {
          case 'e':
            resizeX = event.clientX - this.x;
            resize(-resizeX, 0);
            move(resizeX, 0);
            break;

          case 'n':
            resizeY = event.clientY - this.y;
            resize(0, -resizeY);
            move(0, resizeY);
            break;

          case 'ne':
            resizeX = event.clientX - this.x;
            resizeY = event.clientY - this.y;
            resize(-resizeX, -resizeY);
            move(resizeX, resizeY);
            break;

          case 'nw':
            resizeX = event.clientX - this.x;
            resizeY = event.clientY - this.y;
            resize(resizeX, -resizeY);
            move(0, resizeY);
            break;

          case 's':
            resizeY = event.clientY - this.y;
            resize(0, resizeY);
            break;

          case 'se':
            resizeX = event.clientX - this.x;
            resizeY = event.clientY - this.y;
            resize(resizeX, resizeY);
            break;

          case 'sw':
            resizeX = event.clientX - this.x;
            resizeY = event.clientY - this.y;
            resize(-resizeX, resizeY);
            move(resizeX, 0);
            break;

          case 'w':
            resizeX = event.clientX - this.x;
            resize(resizeX, 0);
            break;
        }

        this.x = event.clientX;
        this.y = event.clientY;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onMouseDown: this.onMouseDown,
        className: className
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

  return Direction;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Direction;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Direction, "Direction", "/home/daniel/Development/totem/app/src/applications/components/window/resize/Direction.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/window/resize/Direction.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1564:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1565:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1596:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1607:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1613:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1692:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(633);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _components_Login__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _containers_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _containers_Avatar__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _containers_LoggedIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(694);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _containers_LoggedIn__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _containers_LoggedInAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(695);
/* harmony import */ var _containers_NotLoggedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(696);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _containers_NotLoggedIn__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(697);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _reducers__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(699);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _sagas__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _selectors_accountAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(402);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _selectors_accountAddress__WEBPACK_IMPORTED_MODULE_7__["a"]; });











/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return START_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return startApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return closeApplication; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var START_APPLICATION = 'applications/START_APPLICATION';
function startApplication(application, manifestUrl) {
  return {
    payload: {
      application: application,
      manifestUrl: manifestUrl
    },
    type: START_APPLICATION
  };
}
var CLOSE_APPLICATION = 'applications/CLOSE_APPLICATION';
function closeApplication(instance) {
  return {
    payload: {
      instance: instance
    },
    type: CLOSE_APPLICATION
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(START_APPLICATION, "START_APPLICATION", "/home/daniel/Development/totem/app/src/applications/actions/application.ts");
  reactHotLoader.register(startApplication, "startApplication", "/home/daniel/Development/totem/app/src/applications/actions/application.ts");
  reactHotLoader.register(CLOSE_APPLICATION, "CLOSE_APPLICATION", "/home/daniel/Development/totem/app/src/applications/actions/application.ts");
  reactHotLoader.register(closeApplication, "closeApplication", "/home/daniel/Development/totem/app/src/applications/actions/application.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_INSTANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLOSE_INSTANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return closeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_INSTANCE; });
/* unused harmony export updateInstance */
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var ADD_INSTANCE = 'applications/ADD_INSTANCE';
function addInstance(application, id, icon, themeColor, title) {
  return {
    payload: {
      application: application,
      icon: icon,
      id: id,
      themeColor: themeColor,
      title: title
    },
    type: ADD_INSTANCE
  };
}
var CLOSE_INSTANCE = 'applications/CLOSE_INSTANCE';
function closeInstance(id) {
  return {
    payload: {
      id: id
    },
    type: CLOSE_INSTANCE
  };
}
var UPDATE_INSTANCE = 'applications/UPDATE_INSTANCE';
function updateInstance(id) {
  return {
    payload: {
      id: id
    },
    type: UPDATE_INSTANCE
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_INSTANCE, "ADD_INSTANCE", "/home/daniel/Development/totem/app/src/applications/actions/instances.ts");
  reactHotLoader.register(addInstance, "addInstance", "/home/daniel/Development/totem/app/src/applications/actions/instances.ts");
  reactHotLoader.register(CLOSE_INSTANCE, "CLOSE_INSTANCE", "/home/daniel/Development/totem/app/src/applications/actions/instances.ts");
  reactHotLoader.register(closeInstance, "closeInstance", "/home/daniel/Development/totem/app/src/applications/actions/instances.ts");
  reactHotLoader.register(UPDATE_INSTANCE, "UPDATE_INSTANCE", "/home/daniel/Development/totem/app/src/applications/actions/instances.ts");
  reactHotLoader.register(updateInstance, "updateInstance", "/home/daniel/Development/totem/app/src/applications/actions/instances.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 1790:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1947:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1971:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1994:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2064:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2122:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2156:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2168:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2279:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2350:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 2350;

/***/ }),

/***/ 2355:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2364:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2370:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sagaMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startupSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(412);
/* harmony import */ var applications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(302);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1051);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(startupSaga);






var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();
function startupSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function startupSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__[/* all */ "a"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__[/* fork */ "c"])(account__WEBPACK_IMPORTED_MODULE_1__[/* sagas */ "g"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__[/* fork */ "c"])(applications__WEBPACK_IMPORTED_MODULE_3__[/* sagas */ "g"])]);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__[/* fork */ "c"])(app__WEBPACK_IMPORTED_MODULE_2__[/* initializeSaga */ "b"]);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaMiddleware, "sagaMiddleware", "/home/daniel/Development/totem/app/src/sagas.ts");
  reactHotLoader.register(startupSaga, "startupSaga", "/home/daniel/Development/totem/app/src/sagas.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _actions_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _actions_application__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _actions_windows__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony import */ var _components_task_manager_TaskTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(969);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _components_task_manager_TaskTitle__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _containers_HomeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(970);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _containers_HomeButton__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _containers_Window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(971);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _containers_Window__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(977);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _reducers__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(978);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _sagas__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _selectors_instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(979);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _selectors_instances__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _selectors_taskManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(980);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _selectors_taskManager__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _selectors_windows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(405);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _selectors_windows__WEBPACK_IMPORTED_MODULE_9__["a"]; });













/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(406);
/* harmony import */ var _selectors_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(407);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var mapStateToProps = function mapStateToProps(state, props) {
  var profile = Object(_selectors_profile__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state, props.address);

  if (!profile) {
    return props;
  }

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    image: profile.image
  });
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_Avatar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/Avatar.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/Avatar.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var accountAddressSelector = function accountAddressSelector(state) {
  return state.get('account').get('address').get('account');
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(accountAddressSelector, function (account) {
  return account;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(accountAddressSelector, "accountAddressSelector", "/home/daniel/Development/totem/app/src/account/selectors/accountAddress.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/selectors/accountAddress.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialize; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var INITIALIZE = 'app/INITIALIZE';
function initialize(ethereum) {
  return {
    payload: {
      ethereum: ethereum
    },
    type: INITIALIZE
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INITIALIZE, "INITIALIZE", "/home/daniel/Development/totem/app/src/app/actions/initialize.ts");
  reactHotLoader.register(initialize, "initialize", "/home/daniel/Development/totem/app/src/app/actions/initialize.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 404:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var LogoFlat =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LogoFlat, _Component);

  function LogoFlat() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LogoFlat);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LogoFlat).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LogoFlat, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var image = this.props.classes.image;
      var logoClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()(image, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/images/logo-flat.svg",
        className: logoClass
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

  return LogoFlat;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  image: {
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(LogoFlat);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogoFlat, "LogoFlat", "/home/daniel/Development/totem/app/src/app/components/branding/LogoFlat.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/branding/LogoFlat.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/branding/LogoFlat.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var windowsSelector = function windowsSelector(state) {
  return state.get('applications').get('windows').toJS();
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(windowsSelector, function (windows) {
  return windows;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(windowsSelector, "windowsSelector", "/home/daniel/Development/totem/app/src/applications/selectors/windows.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/selectors/windows.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 406:
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
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(990);
/* harmony import */ var ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var Avatar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Avatar, _Component);

  function Avatar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Avatar);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Avatar).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          image = _this$props.image;
      var avatar = this.props.classes.avatar;

      if (!address && !image) {
        // TODO:
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Test");
      }

      if (image) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: image,
          className: avatar
        });
      } // TODO: only rerender when address changes!


      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: ethereum_blockies_base64__WEBPACK_IMPORTED_MODULE_6___default()(address),
        className: avatar
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

  return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  avatar: {
    borderRadius: '50%',
    boxShadow: '2px 0 4px rgba(0, 0, 0, 0.4)',
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(Avatar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Avatar, "Avatar", "/home/daniel/Development/totem/app/src/account/components/Avatar.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/account/components/Avatar.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/components/Avatar.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var profileSelector = function profileSelector(state, address) {
  return state.get('account').get('profile').get(address);
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(profileSelector, function (profile) {
  return profile;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(profileSelector, "profileSelector", "/home/daniel/Development/totem/app/src/account/selectors/profile.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/selectors/profile.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var loggedInSelector = function loggedInSelector(state) {
  return state.get('account').get('address').get('account');
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(loggedInSelector, function (account) {
  return account ? true : false;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loggedInSelector, "loggedInSelector", "/home/daniel/Development/totem/app/src/account/selectors/loggedIn.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/selectors/loggedIn.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addProfile; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var ADD_PROFILE = 'account/ADD_PROFILE';
function addProfile(address, image, name) {
  return {
    payload: {
      address: address,
      image: image,
      name: name
    },
    type: ADD_PROFILE
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_PROFILE, "ADD_PROFILE", "/home/daniel/Development/totem/app/src/account/actions/profile.ts");
  reactHotLoader.register(addProfile, "addProfile", "/home/daniel/Development/totem/app/src/account/actions/profile.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_PROVIDED_ACCOUNTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setProvidedAccounts; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var SET_PROVIDED_ACCOUNTS = 'account/SET_PROVIDED_ACCOUNTS';
function setProvidedAccounts(accounts) {
  return {
    payload: {
      accounts: accounts
    },
    type: SET_PROVIDED_ACCOUNTS
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SET_PROVIDED_ACCOUNTS, "SET_PROVIDED_ACCOUNTS", "/home/daniel/Development/totem/app/src/account/actions/providedAccounts.ts");
  reactHotLoader.register(setProvidedAccounts, "setProvidedAccounts", "/home/daniel/Development/totem/app/src/account/actions/providedAccounts.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _actions_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _actions_initialize__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_branding_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var _components_branding_LogoFlat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(404);
/* harmony import */ var _sagas_initialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(702);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _sagas_initialize__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var _require = __webpack_require__(566),
    createDevTools = _require.createDevTools;

var DockMonitor = __webpack_require__(2380).default;

var LogMonitor = __webpack_require__(2388).default;

var DevTools = createDevTools(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DockMonitor, {
  toggleVisibilityKey: "ctrl-h",
  changePositionKey: "ctrl-q",
  defaultIsVisible: false
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogMonitor, {
  theme: "tomorrow"
})));
var _default = DevTools;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DockMonitor, "DockMonitor", "/home/daniel/Development/totem/app/src/app/containers/DevTools.tsx");
  reactHotLoader.register(LogMonitor, "LogMonitor", "/home/daniel/Development/totem/app/src/app/containers/DevTools.tsx");
  reactHotLoader.register(DevTools, "DevTools", "/home/daniel/Development/totem/app/src/app/containers/DevTools.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/containers/DevTools.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseThemeColor; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var parseTitle = function parseTitle(manifest, appDocument) {
  if (manifest) {
    var manifestObject = JSON.parse(manifest);

    if (manifestObject && manifestObject.name && manifestObject.name !== '') {
      return manifestObject.name;
    }
  }

  if (appDocument) {
    return appDocument.title;
  }

  return '';
};
var parseIcon = function parseIcon(manifest, url, appDocument) {
  if (manifest) {
    var manifestObject = JSON.parse(manifest);

    if (!url) {
      url = '';
    }

    if (manifestObject && Array.isArray(manifestObject.icons)) {
      // TODO: find smallest icon that fits (with reduce instead of find)
      var appIcon = manifestObject.icons.find(function (icon) {
        return icon.sizes === '192x192';
      });

      if (appIcon && appIcon.src) {
        if (appIcon.src.startsWith('http')) {
          return appIcon.src;
        } else if (appIcon.src.startsWith('/')) {
          if (url.endsWith('/')) {
            return url.slice(0, -1) + appIcon.src;
          }

          return url + appIcon.src;
        } else {
          return url + '/' + appIcon.src;
        }
      }
    }
  } // TODO: try icon from link tags


  return '/images/apps/default_icon.png';
};
var parseThemeColor = function parseThemeColor(manifest, appDocument) {
  if (manifest) {
    var manifestObject = JSON.parse(manifest);

    if (manifestObject && manifestObject.theme_color) {
      return manifestObject.theme_color;
    }
  }

  return '#e5e5ea';
};
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(parseTitle, "parseTitle", "/home/daniel/Development/totem/app/src/applications/metadata/parser.ts");
  reactHotLoader.register(parseIcon, "parseIcon", "/home/daniel/Development/totem/app/src/applications/metadata/parser.ts");
  reactHotLoader.register(parseThemeColor, "parseThemeColor", "/home/daniel/Development/totem/app/src/applications/metadata/parser.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return addWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLOSE_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return closeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FOCUS_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return focusWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MINIMIZE_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return minimizeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MINIMIZE_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return minimizeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MOVE_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return moveWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RESIZE_WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return resizeWindow; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var ADD_WINDOW = 'applications/ADD_WINDOW';
function addWindow(instance, width, height, x, y) {
  return {
    payload: {
      height: height,
      instance: instance,
      width: width,
      x: x,
      y: y
    },
    type: ADD_WINDOW
  };
}
var CLOSE_WINDOW = 'applications/CLOSE_WINDOW';
function closeWindow(instance) {
  return {
    payload: {
      instance: instance
    },
    type: CLOSE_WINDOW
  };
}
var FOCUS_WINDOW = 'applications/FOCUS_WINDOW';
function focusWindow(instance) {
  return {
    payload: {
      instance: instance
    },
    type: FOCUS_WINDOW
  };
}
var MINIMIZE_WINDOW = 'applications/MINIMIZE_WINDOW';
function minimizeWindow(instance) {
  return {
    payload: {
      instance: instance
    },
    type: MINIMIZE_WINDOW
  };
}
var MINIMIZE_ALL = 'applications/MINIMIZE_ALL';
function minimizeAll() {
  return {
    payload: {},
    type: MINIMIZE_ALL
  };
}
var MOVE_WINDOW = 'applications/MOVE_WINDOW';
function moveWindow(instance, x, y) {
  return {
    payload: {
      instance: instance,
      x: x,
      y: y
    },
    type: MOVE_WINDOW
  };
}
var RESIZE_WINDOW = 'applications/RESIZE_WINDOW';
function resizeWindow(instance, width, height) {
  return {
    payload: {
      height: height,
      instance: instance,
      width: width
    },
    type: RESIZE_WINDOW
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_WINDOW, "ADD_WINDOW", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(addWindow, "addWindow", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(CLOSE_WINDOW, "CLOSE_WINDOW", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(closeWindow, "closeWindow", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(FOCUS_WINDOW, "FOCUS_WINDOW", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(focusWindow, "focusWindow", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(MINIMIZE_WINDOW, "MINIMIZE_WINDOW", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(minimizeWindow, "minimizeWindow", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(MINIMIZE_ALL, "MINIMIZE_ALL", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(minimizeAll, "minimizeAll", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(MOVE_WINDOW, "MOVE_WINDOW", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(moveWindow, "moveWindow", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(RESIZE_WINDOW, "RESIZE_WINDOW", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  reactHotLoader.register(resizeWindow, "resizeWindow", "/home/daniel/Development/totem/app/src/applications/actions/windows.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export fetchManifest */
/* unused harmony export parseManifest */
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(414);



(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();


var fetchManifest =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(manifestUrl) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(manifestUrl, {
              mode: 'no-cors'
            });

          case 2:
            response = _context.sent;

            if (response.ok) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", undefined);

          case 5:
            return _context.abrupt("return", response.text());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchManifest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var parseManifest = function parseManifest(manifest) {//
};

var getManifest =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, doc, manifestUrl) {
    var manifestElement;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            manifestElement = doc.querySelector('link[rel="manifest"]');
            url = url.replace(/\/$/, '');

            if (!manifestUrl) {
              manifestUrl = url + '/manifest.json';
            }

            if (manifestElement && manifestElement.hasAttribute('href')) {
              manifestUrl = manifestElement.getAttribute('href') || manifestUrl;

              if (manifestUrl && !manifestUrl.startsWith('http')) {
                manifestUrl = manifestUrl.startsWith('/') ? url + manifestUrl : url + '/' + manifestUrl;
              }
            }

            return _context2.abrupt("return", fetchManifest(manifestUrl));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getManifest(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var fetchMetaData =
/*#__PURE__*/
function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url, manifestUrl) {
    var response, html, parser, doc, manifest, title, icon, themeColor;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(url, {
              mode: 'no-cors'
            });

          case 2:
            response = _context3.sent;

            if (!response.ok) {// TODO: need to throw error? application can work without metadata
              // throw new Error('Metadata could not be fetched: ' + url);
            }

            _context3.next = 6;
            return response.text();

          case 6:
            html = _context3.sent;
            parser = new DOMParser();
            doc = parser.parseFromString(html, 'text/html');
            _context3.next = 11;
            return getManifest(url, doc, manifestUrl);

          case 11:
            manifest = _context3.sent;
            title = Object(_parser__WEBPACK_IMPORTED_MODULE_2__[/* parseTitle */ "c"])(manifest, doc);
            icon = Object(_parser__WEBPACK_IMPORTED_MODULE_2__[/* parseIcon */ "a"])(manifest, url, doc);
            themeColor = Object(_parser__WEBPACK_IMPORTED_MODULE_2__[/* parseThemeColor */ "b"])(manifest, doc);
            return _context3.abrupt("return", {
              icon: icon,
              themeColor: themeColor,
              title: title
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function fetchMetaData(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = fetchMetaData;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchManifest, "fetchManifest", "/home/daniel/Development/totem/app/src/applications/metadata/fetchMetaData.ts");
  reactHotLoader.register(parseManifest, "parseManifest", "/home/daniel/Development/totem/app/src/applications/metadata/fetchMetaData.ts");
  reactHotLoader.register(getManifest, "getManifest", "/home/daniel/Development/totem/app/src/applications/metadata/fetchMetaData.ts");
  reactHotLoader.register(fetchMetaData, "fetchMetaData", "/home/daniel/Development/totem/app/src/applications/metadata/fetchMetaData.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/metadata/fetchMetaData.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export ADD_ACCOUNT */
/* unused harmony export addAccount */
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var ADD_ACCOUNT = 'network/ADD_ACCOUNT';
function addAccount(platform, network, config) {
  return {
    payload: {
      config: config,
      network: network,
      platform: platform
    },
    type: ADD_ACCOUNT
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_ACCOUNT, "ADD_ACCOUNT", "/home/daniel/Development/totem/app/src/network/actions/blockchain/account.ts");
  reactHotLoader.register(addAccount, "addAccount", "/home/daniel/Development/totem/app/src/network/actions/blockchain/account.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_LAUNCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showLauncher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_LAUNCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hideLauncher; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var SHOW_LAUNCHER = 'app/SHOW_LAUNCHER';
function showLauncher() {
  return {
    payload: {},
    type: SHOW_LAUNCHER
  };
}
var HIDE_LAUNCHER = 'app/HIDE_LAUNCHER';
function hideLauncher() {
  return {
    payload: {},
    type: HIDE_LAUNCHER
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SHOW_LAUNCHER, "SHOW_LAUNCHER", "/home/daniel/Development/totem/app/src/app/actions/launcher.ts");
  reactHotLoader.register(showLauncher, "showLauncher", "/home/daniel/Development/totem/app/src/app/actions/launcher.ts");
  reactHotLoader.register(HIDE_LAUNCHER, "HIDE_LAUNCHER", "/home/daniel/Development/totem/app/src/app/actions/launcher.ts");
  reactHotLoader.register(hideLauncher, "hideLauncher", "/home/daniel/Development/totem/app/src/app/actions/launcher.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_SIDE_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_SIDE_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hideSideNav; });
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var SHOW_SIDE_NAV = 'app/SHOW_SIDE_NAV';
function showSideNav() {
  return {
    payload: {},
    type: SHOW_SIDE_NAV
  };
}
var HIDE_SIDE_NAV = 'app/HIDE_SIDE_NAV';
function hideSideNav() {
  return {
    payload: {},
    type: HIDE_SIDE_NAV
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SHOW_SIDE_NAV, "SHOW_SIDE_NAV", "/home/daniel/Development/totem/app/src/app/actions/sideNav.ts");
  reactHotLoader.register(showSideNav, "showSideNav", "/home/daniel/Development/totem/app/src/app/actions/sideNav.ts");
  reactHotLoader.register(HIDE_SIDE_NAV, "HIDE_SIDE_NAV", "/home/daniel/Development/totem/app/src/app/actions/sideNav.ts");
  reactHotLoader.register(hideSideNav, "hideSideNav", "/home/daniel/Development/totem/app/src/app/actions/sideNav.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return store; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1050);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(243);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1037);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_containers_DevTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(413);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1038);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(245);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

// TODO: export store from index.tsx








var initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"])({});
var history = Object(history__WEBPACK_IMPORTED_MODULE_0__[/* createBrowserHistory */ "a"])();
var routerMiddleware = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__[/* routerMiddleware */ "c"])(history);
var reduxLoggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_4__["createLogger"])({// ...options
});
var enhancer;

if (Object({"NODE_ENV":"production"}).NODE !== 'production') {
  enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(_sagas__WEBPACK_IMPORTED_MODULE_7__[/* sagaMiddleware */ "b"]), Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(routerMiddleware), Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(reduxLoggerMiddleware), _app_containers_DevTools__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].instrument());
} else {
  enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(_sagas__WEBPACK_IMPORTED_MODULE_7__[/* sagaMiddleware */ "b"]), Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(routerMiddleware));
}

var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], initialState, enhancer);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/daniel/Development/totem/app/src/state.ts");
  reactHotLoader.register(history, "history", "/home/daniel/Development/totem/app/src/state.ts");
  reactHotLoader.register(routerMiddleware, "routerMiddleware", "/home/daniel/Development/totem/app/src/state.ts");
  reactHotLoader.register(reduxLoggerMiddleware, "reduxLoggerMiddleware", "/home/daniel/Development/totem/app/src/state.ts");
  reactHotLoader.register(enhancer, "enhancer", "/home/daniel/Development/totem/app/src/state.ts");
  reactHotLoader.register(store, "store", "/home/daniel/Development/totem/app/src/state.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 615:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var Background =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Background, _Component);

  function Background() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Background);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Background).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Background, [{
    key: "render",
    value: function render() {
      var background = this.props.classes.background;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: background
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

  return Background;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = {
  background: {
    backgroundImage: 'url(\'/images/background.svg\')',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(Background);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Background, "Background", "/home/daniel/Development/totem/app/src/themes/components/Background.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/themes/components/Background.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/themes/components/Background.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
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
/* harmony import */ var _containers_LoginMetaMask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(988);
/* harmony import */ var _containers_LoginPrivateKey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(995);
/* harmony import */ var _LoginMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1004);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();








var Login =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Login, _Component);

  function Login(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Login);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Login).call(this, props, context));
    _this.state = {
      method: 'metamask'
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Login, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        method: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var method = this.state.method;
      var _this$props$classes = this.props.classes,
          content = _this$props$classes.content,
          message = _this$props$classes.message,
          wrapper = _this$props$classes.wrapper;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: wrapper
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()([content, message])
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_LoginMessage__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: content
      }, this.renderLoginForm()));
    }
  }, {
    key: "renderLoginForm",
    value: function renderLoginForm() {
      // const { method } = this.state;
      if (process.type !== 'renderer') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_containers_LoginMetaMask__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_containers_LoginPrivateKey__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null);
      }
      /*switch (method) {
          case 'metamask':
              return (
                  <LoginMetaMask />
              );
          case 'privateKey':
          default:
              return (
                  <LoginPrivateKey />
              );
      }*/

    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var style = function style(theme) {
  var _content, _wrapper;

  return {
    content: (_content = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, theme.breakpoints.down('md') + ' and (orientation:landscape)', {
      display: 'inline-block',
      margin: '1rem',
      padding: '0',
      verticalAlign: 'middle',
      width: '30vw'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, theme.breakpoints.up('lg'), {
      margin: '2rem',
      padding: '0',
      width: '30vw'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, "margin", '1rem 2rem'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, "padding", '5vh 0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, "textAlign", 'center'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, "verticalAlign", 'middle'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_content, "width", '65vw'), _content),
    message: {
      textAlign: 'center'
    },
    wrapper: (_wrapper = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_wrapper, theme.breakpoints.down('md') + ' and (orientation:landscape)', {
      width: 'calc(60vw + 4rem)'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_wrapper, theme.breakpoints.up('lg') + ', (orientation:landscape)', {
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_wrapper, "left", '50%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_wrapper, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_wrapper, "top", '10%'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_wrapper, "transform", 'translate(-50%, 0)'), _wrapper)
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(Login);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, "Login", "/home/daniel/Development/totem/app/src/account/components/Login.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/account/components/Login.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/components/Login.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module), __webpack_require__(25)))

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(301);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(999);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(299);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(998);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(579);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1001);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1000);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);









(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();










var FormPassword =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FormPassword, _Component);

  function FormPassword(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FormPassword);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FormPassword).call(this, props, context));
    _this.state = {
      showPassword: false
    };
    _this.handleClickShowPassword = _this.handleClickShowPassword.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FormPassword, [{
    key: "handleClickShowPassword",
    value: function handleClickShowPassword() {
      this.setState({
        showPassword: !this.state.showPassword
      });
    }
  }, {
    key: "handleMouseDownPassword",
    value: function handleMouseDownPassword(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          input = _this$props.input,
          label = _this$props.label,
          meta = _this$props.meta,
          custom = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["input", "label", "meta"]);

      var showPassword = this.state.showPassword;
      var error = false;

      if (meta) {
        if (meta.touched && meta.error) {
          error = true;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8___default.a, {
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, null, label), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_10___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        endAdornment: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
          position: "end"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
          "aria-label": showPassword ? 'Hide password' : 'Show password',
          onClick: this.handleClickShowPassword,
          onMouseDown: this.handleMouseDownPassword
        }, showPassword ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_14___default.a, null) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default.a, null))),
        error: error,
        type: showPassword ? 'text' : 'password',
        value: input.value
      }, input, custom)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FormPassword;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

var _default = FormPassword;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormPassword, "FormPassword", "/home/daniel/Development/totem/app/src/ui/components/form/PasswordField.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/ui/components/form/PasswordField.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(301);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1002);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);








(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var FormTextField =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FormTextField, _Component);

  function FormTextField() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FormTextField);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(FormTextField).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FormTextField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          input = _this$props.input,
          label = _this$props.label,
          meta = _this$props.meta,
          custom = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["input", "label", "meta"]);

      var error = false;

      if (meta) {
        if (meta.touched && meta.error) {
          error = true;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
        fullWidth: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        error: error,
        label: label,
        value: input.value
      }, input, custom)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FormTextField;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var _default = FormTextField;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FormTextField, "FormTextField", "/home/daniel/Development/totem/app/src/ui/components/form/TextField.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/ui/components/form/TextField.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 694:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _selectors_loggedIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(409);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var LoggedIn =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LoggedIn, _Component);

  function LoggedIn() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoggedIn);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoggedIn).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoggedIn, [{
    key: "render",
    value: function render() {
      if (this.props.loggedIn) {
        return this.props.children;
      }

      return null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LoggedIn;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: Object(_selectors_loggedIn__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(state)
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(LoggedIn);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoggedIn, "LoggedIn", "/home/daniel/Development/totem/app/src/account/containers/LoggedIn.ts");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/LoggedIn.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/LoggedIn.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(406);
/* harmony import */ var _selectors_accountAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(402);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



 // TODO: pass props to component

var mapStateToProps = function mapStateToProps(state, props) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    address: Object(_selectors_accountAddress__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state)
  });
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_Avatar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/LoggedInAvatar.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/LoggedInAvatar.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 696:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _selectors_loggedIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(409);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var NotLoggedIn =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NotLoggedIn, _Component);

  function NotLoggedIn() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NotLoggedIn);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NotLoggedIn).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NotLoggedIn, [{
    key: "render",
    value: function render() {
      if (!this.props.loggedIn) {
        return this.props.children;
      }

      return null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return NotLoggedIn;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: Object(_selectors_loggedIn__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(state)
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(NotLoggedIn);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotLoggedIn, "NotLoggedIn", "/home/daniel/Development/totem/app/src/account/containers/NotLoggedIn.ts");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/NotLoggedIn.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/NotLoggedIn.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1005);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1006);
/* harmony import */ var _providedAccounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1007);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var _default = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  address: _address__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  providedAccounts: _providedAccounts__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/reducers/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accountSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1008);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1009);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(accountSaga);




function accountSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function accountSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* all */ "a"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "c"])(_initialize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "c"])(_login__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(accountSaga, "accountSaga", "/home/daniel/Development/totem/app/src/account/sagas/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 701:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var Logo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Logo, _Component);

  function Logo() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logo);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Logo).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Logo, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var image = this.props.classes.image;
      var logoClass = classnames__WEBPACK_IMPORTED_MODULE_6___default()(image, className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/images/logo.svg",
        className: logoClass
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

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var style = {
  image: {
    width: '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(Logo);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Logo, "Logo", "/home/daniel/Development/totem/app/src/app/components/branding/Logo.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/app/components/branding/Logo.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/branding/Logo.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _actions_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(initializeSaga);



function initializeSaga() {
  var ethereum;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function initializeSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ethereum = null;

          if (window.ethereum && window.ethereum.enable) {
            ethereum = window.ethereum;
          }

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* put */ "d"])(Object(_actions_initialize__WEBPACK_IMPORTED_MODULE_2__[/* initialize */ "b"])(ethereum));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initializeSaga, "initializeSaga", "/home/daniel/Development/totem/app/src/app/sagas/initialize.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 969:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var TaskTitle =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TaskTitle, _Component);

  function TaskTitle() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TaskTitle);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TaskTitle).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TaskTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          offset = _this$props.offset,
          themeColor = _this$props.themeColor,
          title = _this$props.title;
      var _this$props$classes = this.props.classes,
          taskInfo = _this$props$classes.taskInfo,
          taskIcon = _this$props$classes.taskIcon;
      var taskIconStyle = {
        background: themeColor
      };
      var offsetStyle = {
        left: offset * 75 + 20 + 'vw'
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: taskInfo,
        style: offsetStyle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: taskIcon,
        style: taskIconStyle
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: icon,
        width: "100%"
      })), title);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TaskTitle;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = function style(theme) {
  return {
    taskIcon: {
      borderRadius: '5% 20% 5%',
      display: 'inline-block',
      height: '3rem',
      marginRight: '1rem',
      width: '3rem'
    },
    taskInfo: {
      display: 'flex',
      position: 'absolute',
      top: '6vh'
    }
  };
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(TaskTitle);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TaskTitle, "TaskTitle", "/home/daniel/Development/totem/app/src/applications/components/task-manager/TaskTitle.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/applications/components/task-manager/TaskTitle.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/components/task-manager/TaskTitle.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _actions_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _components_task_manager_HomeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    hideTaskManager: _actions_taskManager__WEBPACK_IMPORTED_MODULE_2__[/* hideTaskManager */ "c"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_task_manager_HomeButton__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/applications/containers/HomeButton.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/applications/containers/HomeButton.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/containers/HomeButton.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _actions_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(174);
/* harmony import */ var _actions_taskManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);
/* harmony import */ var _actions_windows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _selectors_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1019);
/* harmony import */ var _components_Window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1020);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();









var mapStateToProps = function mapStateToProps(state, props) {
  var instance = Object(_selectors_instance__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(state, props.instance);
  return {
    application: instance.application,
    themeColor: instance.themeColor,
    title: instance.title
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    close: _actions_application__WEBPACK_IMPORTED_MODULE_2__[/* closeApplication */ "c"],
    focus: _actions_windows__WEBPACK_IMPORTED_MODULE_4__[/* focusWindow */ "j"],
    hideTaskManager: _actions_taskManager__WEBPACK_IMPORTED_MODULE_3__[/* hideTaskManager */ "c"],
    minimize: _actions_windows__WEBPACK_IMPORTED_MODULE_4__[/* minimizeWindow */ "l"],
    move: _actions_windows__WEBPACK_IMPORTED_MODULE_4__[/* moveWindow */ "m"],
    resize: _actions_windows__WEBPACK_IMPORTED_MODULE_4__[/* resizeWindow */ "n"],
    showTaskManager: _actions_taskManager__WEBPACK_IMPORTED_MODULE_3__[/* showTaskManager */ "d"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Window__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/applications/containers/Window.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/applications/containers/Window.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/containers/Window.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_SwipeFromBottom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(973);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components_SwipeFromBottom__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_SwipeFromLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(974);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _components_SwipeFromLeft__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _components_SwipeFromRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(975);
/* harmony import */ var _components_SwipeFromTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(976);






/***/ }),

/***/ 973:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(138);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var SwipeFromBottom =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SwipeFromBottom, _Component);

  function SwipeFromBottom() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwipeFromBottom);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SwipeFromBottom).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwipeFromBottom, [{
    key: "render",
    value: function render() {
      var onSwipe = this.props.onSwipe;
      var container = this.props.classes.container;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        onSwipeUp: onSwipe
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: container
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

  return SwipeFromBottom;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = {
  container: {
    'bottom': 0,
    'height': '2%',
    'left': 0,
    'overflow': 'hidden',
    'position': 'fixed',
    'width': '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(SwipeFromBottom);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwipeFromBottom, "SwipeFromBottom", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromBottom.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromBottom.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromBottom.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 974:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(138);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var SwipeFromLeft =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SwipeFromLeft, _Component);

  function SwipeFromLeft() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwipeFromLeft);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SwipeFromLeft).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwipeFromLeft, [{
    key: "render",
    value: function render() {
      var onSwipe = this.props.onSwipe;
      var container = this.props.classes.container;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        onSwipeRight: onSwipe
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: container
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

  return SwipeFromLeft;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = {
  container: {
    'height': '100%',
    'left': 0,
    'overflow': 'hidden',
    'position': 'fixed',
    'top': 0,
    'width': '5%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(SwipeFromLeft);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwipeFromLeft, "SwipeFromLeft", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromLeft.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromLeft.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromLeft.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 975:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(138);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var SwipeFromRight =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SwipeFromRight, _Component);

  function SwipeFromRight() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwipeFromRight);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SwipeFromRight).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwipeFromRight, [{
    key: "render",
    value: function render() {
      var onSwipe = this.props.onSwipe;
      var container = this.props.classes.container;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        onSwipeLeft: onSwipe
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: container
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

  return SwipeFromRight;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = {
  container: {
    'height': '100%',
    'overflow': 'hidden',
    'position': 'fixed',
    'right': 0,
    'top': 0,
    'width': '5%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(SwipeFromRight);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwipeFromRight, "SwipeFromRight", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromRight.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromRight.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromRight.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 976:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(138);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var SwipeFromTop =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SwipeFromTop, _Component);

  function SwipeFromTop() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SwipeFromTop);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SwipeFromTop).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SwipeFromTop, [{
    key: "render",
    value: function render() {
      var onSwipe = this.props.onSwipe;
      var container = this.props.classes.container;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(touch_components_Swipeable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        onSwipeDown: onSwipe
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: container
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

  return SwipeFromTop;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var style = {
  container: {
    'height': '5%',
    'left': 0,
    'overflow': 'hidden',
    'position': 'fixed',
    'top': 0,
    'width': '100%'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(SwipeFromTop);

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwipeFromTop, "SwipeFromTop", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromTop.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromTop.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/gestures/components/SwipeFromTop.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1029);
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1030);
/* harmony import */ var _windows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1031);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






var _default = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  instances: _instances__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  taskManager: _taskManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  windows: _windows__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/reducers/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applicationsSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _closeApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1032);
/* harmony import */ var _closeEmptyTaskManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1033);
/* harmony import */ var _showTaskManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1034);
/* harmony import */ var _startApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1035);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(applicationsSaga);






function applicationsSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function applicationsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* all */ "a"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "c"])(_closeApplication__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "c"])(_closeEmptyTaskManager__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "c"])(_showTaskManager__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "c"])(_startApplication__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(applicationsSaga, "applicationsSaga", "/home/daniel/Development/totem/app/src/applications/sagas/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var instancesSelector = function instancesSelector(state) {
  return state.get('applications').get('instances').toJS();
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(instancesSelector, function (instances) {
  return instances;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instancesSelector, "instancesSelector", "/home/daniel/Development/totem/app/src/applications/selectors/instances.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/selectors/instances.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var taskManagerSelector = function taskManagerSelector(state) {
  return state.get('applications').get('taskManager').toJS();
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(taskManagerSelector, function (taskManager) {
  return taskManager;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(taskManagerSelector, "taskManagerSelector", "/home/daniel/Development/totem/app/src/applications/selectors/taskManager.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/applications/selectors/taskManager.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blockchain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1040);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();




var _default = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blockchain: _blockchain__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/network/reducers/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 984:
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
/* harmony import */ var _material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(581);
/* harmony import */ var _material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(985);
/* harmony import */ var _app_components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(987);
/* harmony import */ var _app_containers_Intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1012);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();








var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_5___default.a, {
        theme: themes__WEBPACK_IMPORTED_MODULE_8__[/* theme */ "a"]
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_app_containers_Intl__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_app_components_Layout__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null)));
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
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var exportedApp = App;

if (Object({"NODE_ENV":"production"}).NODE !== 'production' && module.hot) {
  exportedApp = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_7__["hot"])(module)(App);
}

var _default = exportedApp;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/home/daniel/Development/totem/app/src/App.tsx");
  reactHotLoader.register(exportedApp, "exportedApp", "/home/daniel/Development/totem/app/src/App.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/App.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(986);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(298);
/* harmony import */ var _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(615);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var theme = _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2___default()({
  palette: {
    primary: {
      contrastText: '#f0f0f0',
      main: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_0___default.a[700]
    },
    secondary: {
      main: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_1___default.a.A200
    }
  },
  typography: {
    body1: {
      fontWeight: 300
    },
    caption: {
      fontWeight: 300
    },

    /*fontWeightLight: 100,
    fontWeightMedium: 500,
    fontWeightRegular: 300,*/
    h1: {
      fontWeight: 100
    },
    h2: {
      color: '#f0f0f0',
      fontWeight: 100
    },
    h3: {
      fontWeight: 300
    },
    h4: {
      fontWeight: 300
    },
    h5: {
      fontWeight: 300
    },
    subtitle1: {
      fontWeight: 300
    },
    useNextVariants: true
  }
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(theme, "theme", "/home/daniel/Development/totem/app/src/themes/index.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 987:
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
/* harmony import */ var account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(172);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1010);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _login_Branding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1011);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var DesktopLoadable = Object(react_loadable__WEBPACK_IMPORTED_MODULE_7__["Map"])({
  loader: {
    Gestures: function Gestures() {
      return __webpack_require__.e(/* import() | gestures */ 1).then(__webpack_require__.bind(null, 2485));
    },
    LaunchBar: function LaunchBar() {
      return __webpack_require__.e(/* import() | launcher */ 2).then(__webpack_require__.bind(null, 2486));
    },
    Launcher: function Launcher() {
      return __webpack_require__.e(/* import() | launcher */ 2).then(__webpack_require__.bind(null, 2487));
    },
    SideNav: function SideNav() {
      return __webpack_require__.e(/* import() | side-nav */ 4).then(__webpack_require__.bind(null, 2488));
    },
    Windows: function Windows() {
      return __webpack_require__.e(/* import() | windows */ 6).then(__webpack_require__.bind(null, 2489));
    }
  },
  loading: function loading() {
    return null;
  },
  render: function render(loaded, props) {
    var GesturesContainer = loaded.Gestures.default;
    var LaunchBarContainer = loaded.LaunchBar.default;
    var LauncherContainer = loaded.Launcher.default;
    var SideNavContainer = loaded.SideNav.default;
    var WindowsContainer = loaded.Windows.default;
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GesturesContainer, null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WindowsContainer, null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LaunchBarContainer, null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SideNavContainer, null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LauncherContainer, null));
  }
});

var Layout =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Layout, _Component);

  function Layout() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Layout);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Layout).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(account__WEBPACK_IMPORTED_MODULE_5__[/* LoggedIn */ "b"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DesktopLoadable, null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(account__WEBPACK_IMPORTED_MODULE_5__[/* NotLoggedIn */ "d"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(account__WEBPACK_IMPORTED_MODULE_5__[/* Login */ "c"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_login_Branding__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DesktopLoadable, "DesktopLoadable", "/home/daniel/Development/totem/app/src/app/components/Layout.tsx");
  reactHotLoader.register(Layout, "Layout", "/home/daniel/Development/totem/app/src/app/components/Layout.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/app/components/Layout.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form_immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);
/* harmony import */ var _components_form_LoginMetaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(989);
/* harmony import */ var _selectors_providedAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(993);
/* harmony import */ var _validators_loginMetaMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(994);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






 // import profileSelector from '../selectors/profile';


var LoginMetaMaskForm = Object(redux_form_immutable__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'loginMetaMask',
  validate: _validators_loginMetaMask__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
})(_components_form_LoginMetaMask__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    account: Object(_selectors_providedAccount__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    login: _actions_login__WEBPACK_IMPORTED_MODULE_3__[/* loginMetaMask */ "d"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(LoginMetaMaskForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginMetaMaskForm, "LoginMetaMaskForm", "/home/daniel/Development/totem/app/src/account/containers/LoginMetaMask.ts");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/LoginMetaMask.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/account/containers/LoginMetaMask.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/LoginMetaMask.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 989:
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(408);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1052);
/* harmony import */ var _containers_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(401);
/* harmony import */ var _containers_Name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(991);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();






 // TODO: TypeScript fix

var Field = __webpack_require__(173).Field;

var LoginMetaMask =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LoginMetaMask, _Component);

  function LoginMetaMask(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginMetaMask);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoginMetaMask).call(this, props, context));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginMetaMask, [{
    key: "onSubmit",
    value: function onSubmit() {
      this.props.login();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {// event.preventDefault();
      // console.log(event);
    }
  }, {
    key: "render",
    value: function render() {
      var buttonWrapper = this.props.classes.buttonWrapper;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onSubmit: this.props.handleSubmit(this.onSubmit)
      }, this.renderAvatar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: buttonWrapper
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        type: "submit",
        color: "primary",
        variant: "contained"
      }, "Login")));
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar() {
      var account = this.props.account;
      var _this$props$classes = this.props.classes,
          avatar = _this$props$classes.avatar,
          name = _this$props$classes.name;

      if (!account) {
        return null;
      } // TODO: if no 3box profile render createProfileForm


      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: avatar
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_Avatar__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        address: account
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: name
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_containers_Name__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        address: account
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LoginMetaMask;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = {
  avatar: {
    'height': '4rem',
    'margin': 'auto',
    'width': '4rem'
  },
  buttonWrapper: {
    'marginTop': '2rem'
  },
  name: {
    'fontSize': '1.4rem',
    'marginTop': '1.4rem'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(LoginMetaMask);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Field, "Field", "/home/daniel/Development/totem/app/src/account/components/form/LoginMetaMask.tsx");
  reactHotLoader.register(LoginMetaMask, "LoginMetaMask", "/home/daniel/Development/totem/app/src/account/components/form/LoginMetaMask.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/account/components/form/LoginMetaMask.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/components/form/LoginMetaMask.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _components_Name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(992);
/* harmony import */ var _selectors_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(407);


(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





var mapStateToProps = function mapStateToProps(state, props) {
  var profile = Object(_selectors_profile__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(state, props.address);

  if (!profile) {
    return props;
  }

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    name: profile.name
  });
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_Name__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/Name.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/Name.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 992:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var Name =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Name, _Component);

  function Name() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Name);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Name).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Name, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          name = _this$props.name;

      if (!name) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, address);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, name);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Name;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Name;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Name, "Name", "/home/daniel/Development/totem/app/src/account/components/Name.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/components/Name.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();



var providedAccountSelector = function providedAccountSelector(state) {
  return state.get('account').get('providedAccounts').get(0);
};

var _default = Object(reselect__WEBPACK_IMPORTED_MODULE_0__[/* createSelector */ "a"])(providedAccountSelector, function (account) {
  return account;
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(providedAccountSelector, "providedAccountSelector", "/home/daniel/Development/totem/app/src/account/selectors/providedAccount.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/selectors/providedAccount.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var validate = function validate(values) {
  var error = {}; //

  return error;
};

var _default = validate;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/home/daniel/Development/totem/app/src/account/validators/loginMetaMask.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/validators/loginMetaMask.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var redux_form_immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form_immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);
/* harmony import */ var _components_form_LoginPrivateKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(996);
/* harmony import */ var _validators_loginPrivateKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1003);
(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();







var LoginPrivateKeyForm = Object(redux_form_immutable__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  form: 'loginPrivateKey',
  validate: _validators_loginPrivateKey__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
})(_components_form_LoginPrivateKey__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    login: _actions_login__WEBPACK_IMPORTED_MODULE_3__[/* loginPrivateKey */ "e"]
  }, dispatch);
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(LoginPrivateKeyForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginPrivateKeyForm, "LoginPrivateKeyForm", "/home/daniel/Development/totem/app/src/account/containers/LoginPrivateKey.ts");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/daniel/Development/totem/app/src/account/containers/LoginPrivateKey.ts");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/daniel/Development/totem/app/src/account/containers/LoginPrivateKey.ts");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/containers/LoginPrivateKey.ts");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 996:
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(408);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1052);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);







(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();





 // TODO: TypeScript fix

var Field = __webpack_require__(173).Field;

var LoginPrivateKey =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LoginPrivateKey, _Component);

  function LoginPrivateKey(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginPrivateKey);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoginPrivateKey).call(this, props, context));
    _this.onSubmit = _this.onSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginPrivateKey, [{
    key: "onSubmit",
    value: function onSubmit(values) {
      var privateKey = values.get('privateKey');
      this.props.login(privateKey);
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {// event.preventDefault();
      // console.log(event);
    }
  }, {
    key: "render",
    value: function render() {
      var buttonWrapper = this.props.classes.buttonWrapper;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onSubmit: this.props.handleSubmit(this.onSubmit)
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Field, {
        component: ui__WEBPACK_IMPORTED_MODULE_10__[/* TextField */ "a"],
        label: "Private Key",
        multiline: true,
        name: "privateKey",
        rows: 4
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: buttonWrapper
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        type: "submit"
      }, "Login")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LoginPrivateKey;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var style = {
  buttonWrapper: {
    'marginTop': '2rem'
  }
};

var _default = _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(LoginPrivateKey);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Field, "Field", "/home/daniel/Development/totem/app/src/account/components/form/LoginPrivateKey.tsx");
  reactHotLoader.register(LoginPrivateKey, "LoginPrivateKey", "/home/daniel/Development/totem/app/src/account/components/form/LoginPrivateKey.tsx");
  reactHotLoader.register(style, "style", "/home/daniel/Development/totem/app/src/account/components/form/LoginPrivateKey.tsx");
  reactHotLoader.register(_default, "default", "/home/daniel/Development/totem/app/src/account/components/form/LoginPrivateKey.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_form_PasswordField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(679);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(684);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components_form_TextField__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ })

},[[1055,3,5]]]);
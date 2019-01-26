(function(){"use strict";var _$0=this,_6=function(_,e,t){t.r(e),function(_){var r,a=t(45),l=t(55),i=t(577),n=t(2497),s=t(2498);(r=t(1).enterModule)&&r(_);var u,E,o=function(_){return Object(n.a)(_)},p=function(_){return Object(l.bindActionCreators)({hideSideNav:i.c},_)},d=Object(a.connect)(o,p)(s.a);e.default=d,u=t(1).default,E=t(1).leaveModule,u&&(u.register(o,"mapStateToProps","/home/daniel/Development/totem/app/src/app/containers/SideNav.ts"),u.register(p,"mapDispatchToProps","/home/daniel/Development/totem/app/src/app/containers/SideNav.ts"),u.register(d,"default","/home/daniel/Development/totem/app/src/app/containers/SideNav.ts"),E(_))}.call(this,t(7)(_))},_7=function(_,e,t){(function(_){var r,a=t(71);(r=t(1).enterModule)&&r(_);var l,i,n=function(_){return _.get("app").get("nav").toJS()},s=Object(a.a)(n,function(_){return{isVisible:_.showSideNav}});e.a=s,l=t(1).default,i=t(1).leaveModule,l&&(l.register(n,"sideNavSelector","/home/daniel/Development/totem/app/src/app/selectors/sideNav.ts"),l.register(s,"default","/home/daniel/Development/totem/app/src/app/selectors/sideNav.ts"),i(_))}).call(this,t(7)(_))},_8=function(module,__webpack_exports__,__webpack_require__){(function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(15),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__),_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(242),_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__),classnames__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(33),classnames__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),_containers_side_nav_Header__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(2499),_containers_side_nav_Launcher__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2501),_containers_side_nav_Tasks__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2504),enterModule;enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var SideNav=function(_Component){function SideNav(_,e){var t;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,SideNav),(t=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SideNav).call(this,_,e))).handleClick=t.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t))),t.handleTouchStart=t.handleTouchStart.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t))),t.handleTouchMove=t.handleTouchMove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(t))),t.touchStartX=0,t.touchCurrentX=0,t}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SideNav,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SideNav,[{key:"blockClick",value:function(_){_.stopPropagation()}},{key:"handleClick",value:function(){var _=this.props,e=_.hideSideNav,t=_.width;Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8__.isWidthDown)("md",t)&&e()}},{key:"handleTouchStart",value:function(_){this.touchStartX=_.touches[0].pageX,this.touchCurrentX=this.touchStartX}},{key:"handleTouchMove",value:function(_){this.touchCurrentX=_.touches[0].pageX,this.touchCurrentX-this.touchStartX<-50&&this.props.hideSideNav()}},{key:"render",value:function(){var _=this.props.isVisible,e=this.props.classes,t=e.container,r=e.containerBefore,a=e.containerVisible,l=e.containerVisibleBefore,i=e.nav,n=e.navBackground,s=e.navVisible;return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_9___default()(r,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},l,_))}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("aside",{onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,className:classnames__WEBPACK_IMPORTED_MODULE_9___default()(t,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},a,_))},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav",{className:classnames__WEBPACK_IMPORTED_MODULE_9___default()(i,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},s,_))},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",{className:n}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_side_nav_Header__WEBPACK_IMPORTED_MODULE_11__.a,null),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_side_nav_Tasks__WEBPACK_IMPORTED_MODULE_13__.a,null),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_side_nav_Launcher__WEBPACK_IMPORTED_MODULE_12__.a,null))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SideNav}(react__WEBPACK_IMPORTED_MODULE_10__.Component),style=function(_){var e,t,r,a;return{container:(e={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,_.breakpoints.up("lg"),{overflow:"visible",pointerEvents:"auto",width:"3vw"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"height","100%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"left",0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"overflow","hidden"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"pointerEvents","none"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"position","fixed"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"top",0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"width","100%"),e),containerBefore:(t={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,_.breakpoints.up("lg"),{display:"none",willChange:"auto"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"background","rgba(0, 0, 0, 0.2)"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"display","block"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"height","100%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"left",0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"opacity",0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"pointerEvents","none"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"position","absolute"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"top",0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"transition","opacity .3s ease-out"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"width","100%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"willChange","opacity"),t),containerVisible:{pointerEvents:"auto"},containerVisibleBefore:(r={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(r,_.breakpoints.up("lg"),{display:"none"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(r,"opacity",1),r),nav:(a={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,_.breakpoints.down("md")+" and (orientation:landscape)",{flexDirection:"row"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,_.breakpoints.up("lg"),{overflow:"visible",transform:"none",width:"3.4vw",willChange:"auto"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"boxShadow","2px 0 12px rgba(0, 0, 0, 0.4)"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"display","flex"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"flexDirection","column"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"height","100%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"justifyContent","flex-start"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"overflow","hidden"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"position","relative"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"transform","translateX(-102%)"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"transition","transform .3s ease-out"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"width","90%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(a,"willChange","transform"),a),navBackground:{background:"rgba(0, 0, 30, 0.6)",height:"100%",position:"absolute",width:"100%",zIndex:-1},navVisible:{transform:"none"}}},_default=_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_8___default()()(SideNav)),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(SideNav,"SideNav","/home/daniel/Development/totem/app/src/app/components/side-nav/SideNav.tsx"),reactHotLoader.register(style,"style","/home/daniel/Development/totem/app/src/app/components/side-nav/SideNav.tsx"),reactHotLoader.register(_default,"default","/home/daniel/Development/totem/app/src/app/components/side-nav/SideNav.tsx"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},_9=function(_,e,t){(function(_){var r,a=t(172),l=t(45),i=t(55),n=t(2500);(r=t(1).enterModule)&&r(_);var s,u,E=function(_){return{address:Object(a.e)(_)}},o=function(_){return Object(i.bindActionCreators)({},_)},p=Object(l.connect)(E,o)(n.a);e.a=p,s=t(1).default,u=t(1).leaveModule,s&&(s.register(E,"mapStateToProps","/home/daniel/Development/totem/app/src/app/containers/side-nav/Header.ts"),s.register(o,"mapDispatchToProps","/home/daniel/Development/totem/app/src/app/containers/side-nav/Header.ts"),s.register(p,"default","/home/daniel/Development/totem/app/src/app/containers/side-nav/Header.ts"),u(_))}).call(this,t(7)(_))},_A=function(module,__webpack_exports__,__webpack_require__){(function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(242),_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__),account__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(172),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),enterModule;enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var Header=function(_Component){function Header(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Header),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Header).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Header,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Header,[{key:"renderMobile",value:function(){var _=this.props.width;return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7__.isWidthDown)("md",_),null}},{key:"render",value:function(){var _=this.props.address,e=this.props.classes,t=e.avatar,r=e.header;return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header",{className:r},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:t},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(account__WEBPACK_IMPORTED_MODULE_8__.a,{address:_})),this.renderMobile())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Header}(react__WEBPACK_IMPORTED_MODULE_9__.Component),style=function(_){var e,t;return{avatar:(e={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,_.breakpoints.up("lg"),{position:"static",transform:"none",width:"100%"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"left","50%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"position","absolute"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"top","50%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"transform","translate(-50%, -50%)"),e),header:(t={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,_.breakpoints.down("md")+" and (orientation:landscape)",{height:"100%",width:"50%"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,_.breakpoints.up("lg"),{height:"auto",marginBottom:".8vw",marginLeft:".6vw",marginTop:"1vw",position:"static"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"height","33vh"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"position","relative"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"width","100%"),t)}},_default=_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_7___default()()(Header)),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(Header,"Header","/home/daniel/Development/totem/app/src/app/components/side-nav/Header.tsx"),reactHotLoader.register(style,"style","/home/daniel/Development/totem/app/src/app/components/side-nav/Header.tsx"),reactHotLoader.register(_default,"default","/home/daniel/Development/totem/app/src/app/components/side-nav/Header.tsx"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},_B=function(_,e,t){(function(_){var r,a=t(576),l=t(45),i=t(55),n=t(2502);(r=t(1).enterModule)&&r(_);var s,u,E=function(_){return{}},o=function(_){return Object(i.bindActionCreators)({showLauncher:a.d},_)},p=Object(l.connect)(E,o)(n.a);e.a=p,s=t(1).default,u=t(1).leaveModule,s&&(s.register(E,"mapStateToProps","/home/daniel/Development/totem/app/src/app/containers/side-nav/Launcher.ts"),s.register(o,"mapDispatchToProps","/home/daniel/Development/totem/app/src/app/containers/side-nav/Launcher.ts"),s.register(p,"default","/home/daniel/Development/totem/app/src/app/containers/side-nav/Launcher.ts"),u(_))}).call(this,t(7)(_))},_C=function(module,__webpack_exports__,__webpack_require__){(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(242),_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__),_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2503),_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),enterModule;enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var Launcher=function(_Component){function Launcher(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Launcher),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Launcher).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Launcher,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Launcher,[{key:"render",value:function(){var _=this.props,e=_.showLauncher,t=_.width,r=this.props.classes.launcher;return Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6__.isWidthUp)("lg",t)?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:r,onClick:e},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_7___default.a,{fontSize:"inherit"})):null}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Launcher}(react__WEBPACK_IMPORTED_MODULE_8__.Component),style={launcher:{cursor:"pointer",fontSize:"2.4vw",marginBottom:".5vw",marginLeft:".5vw",marginTop:"auto",width:"100%"}},_default=_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(style)(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_6___default()()(Launcher)),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(Launcher,"Launcher","/home/daniel/Development/totem/app/src/app/components/side-nav/Launcher.tsx"),reactHotLoader.register(style,"style","/home/daniel/Development/totem/app/src/app/components/side-nav/Launcher.tsx"),reactHotLoader.register(_default,"default","/home/daniel/Development/totem/app/src/app/components/side-nav/Launcher.tsx"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},_D=function(_,e,t){var r=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(t(0)),l=(0,r(t(206)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Apps");e.default=l},_E=function(_,e,t){(function(_){var r,a=t(302),l=t(45),i=t(55),n=t(2505);(r=t(1).enterModule)&&r(_);var s,u,E=function(_){return{tasks:Object(a.e)(_)}},o=function(_){return Object(i.bindActionCreators)({focus:a.d,startApplication:a.h},_)},p=Object(l.connect)(E,o)(n.a);e.a=p,s=t(1).default,u=t(1).leaveModule,s&&(s.register(E,"mapStateToProps","/home/daniel/Development/totem/app/src/app/containers/side-nav/Tasks.ts"),s.register(o,"mapDispatchToProps","/home/daniel/Development/totem/app/src/app/containers/side-nav/Tasks.ts"),s.register(p,"default","/home/daniel/Development/totem/app/src/app/containers/side-nav/Tasks.ts"),u(_))}).call(this,t(7)(_))},_F=function(module,__webpack_exports__,__webpack_require__){(function(module){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),enterModule;enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var Tasks=function(_Component){function Tasks(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Tasks),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Tasks).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tasks,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Tasks,[{key:"render",value:function(){var _=this.props.classes.tasks;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul",{className:_},this.renderTasks()))}},{key:"renderTasks",value:function(){var _=this.props,e=_.classes,t=_.focus;return _.tasks.map(function(_,r){var a={backgroundColor:_.themeColor};return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li",{key:r,className:e.task,style:a,onClick:function(e){t(_.id)}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:_.icon,className:e.taskIcon}))})}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Tasks}(react__WEBPACK_IMPORTED_MODULE_7__.Component),style=function(_){var e,t;return{task:(e={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,_.breakpoints.down("md")+" and (orientation:landscape)",{height:"9vw",marginLeft:"1.5vw",marginTop:"1.5vw",width:"9vw"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,_.breakpoints.up("lg"),{display:"block",height:"3vw",marginLeft:".2vw",marginTop:".5vw",width:"3vw"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"borderRadius","5% 20% 5%"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"cursor","pointer"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"display","inline-block"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"height","18vw"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"listStyleType","none"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"marginLeft","3.5vw"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"marginTop","3.5vw"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"overflow","hidden"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e,"width","18vw"),e),taskIcon:{width:"100%"},tasks:(t={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,_.breakpoints.down("md")+" and (orientation:landscape)",{width:"50%"}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"flexDirection","row"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"margin","0"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t,"padding","0"),t)}},_default=_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(style)(Tasks),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(Tasks,"Tasks","/home/daniel/Development/totem/app/src/app/components/side-nav/Tasks.tsx"),reactHotLoader.register(style,"style","/home/daniel/Development/totem/app/src/app/components/side-nav/Tasks.tsx"),reactHotLoader.register(_default,"default","/home/daniel/Development/totem/app/src/app/components/side-nav/Tasks.tsx"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},_2=[4],_4={2488:_6,2497:_7,2498:_8,2499:_9,2500:_A,2501:_B,2502:_C,2503:_D,2504:_E,2505:_F},_1=[_2,_4],_0=[_1];_$0.webpackJsonp=_0}).call(this);
webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_dialog_assets_bootstrap_less__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_dialog_assets_bootstrap_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rc_dialog_assets_bootstrap_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_DialogWrap__ = __webpack_require__(87);










var MyControl = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MyControl, _React$Component);

    function MyControl() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyControl);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyControl.__proto__ || Object.getPrototypeOf(MyControl)).apply(this, arguments));

        _this.state = {
            visible: false,
            destroyOnClose: false
        };
        _this.onClick = function () {
            _this.setState({
                visible: true
            });
        };
        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.onDestroyOnCloseChange = function (e) {
            _this.setState({
                destroyOnClose: e.target.checked
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MyControl, [{
        key: 'render',
        value: function render() {
            var dialog = void 0;
            if (this.state.visible || !this.state.destroyOnClose) {
                dialog = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_DialogWrap__["a" /* default */], { visible: this.state.visible, animation: "slide-fade", maskAnimation: "fade", onClose: this.onClose, style: { width: 600 }, title: __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", null, '\u7B2C\u4E8C\u4E2A\u5F39\u6846'), footer: [__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("button", { type: "button", className: "btn btn-default", key: "close", onClick: this.onClose }, "Close"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("button", { type: "button", className: "btn btn-primary", key: "save", onClick: this.onClose }, "Save changes")] }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("h4", null, "Text in a modal"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("hr", null), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("h4", null, "Overflowing text to show scroll behavior"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", { style: { display: '' } }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.")));
            }
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", { style: { margin: 20 } }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("button", { className: "btn btn-primary", onClick: this.onClick }, "show dialog"), '\xA0', __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("label", null, "destroy on close:", __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("input", { type: "checkbox", checked: this.state.destroyOnClose, onChange: this.onDestroyOnCloseChange }))), dialog);
        }
    }]);

    return MyControl;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("h2", null, "ant-design dialog"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(MyControl, null)), document.getElementById('__react-content'));

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ })

},[294]);
//# sourceMappingURL=bootstrap.js.map
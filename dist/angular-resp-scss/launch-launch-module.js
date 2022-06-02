(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["launch-launch-module"],{

/***/ "OkYT":
/*!**********************************************!*\
  !*** ./src/app/main/launch/launch.module.ts ***!
  \**********************************************/
/*! exports provided: LaunchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchModule", function() { return LaunchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _launch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launch.component */ "OljT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _launch_component__WEBPACK_IMPORTED_MODULE_1__["LaunchComponent"]
    }
];
class LaunchModule {
}
LaunchModule.ɵfac = function LaunchModule_Factory(t) { return new (t || LaunchModule)(); };
LaunchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LaunchModule });
LaunchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LaunchModule, { declarations: [_launch_component__WEBPACK_IMPORTED_MODULE_1__["LaunchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "OljT":
/*!*************************************************!*\
  !*** ./src/app/main/launch/launch.component.ts ***!
  \*************************************************/
/*! exports provided: LaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchComponent", function() { return LaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LaunchComponent {
    constructor() { }
    ngOnInit() {
    }
}
LaunchComponent.ɵfac = function LaunchComponent_Factory(t) { return new (t || LaunchComponent)(); };
LaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaunchComponent, selectors: [["app-launch"]], decls: 113, vars: 0, consts: [[1, "flex-container"], [1, "left"], [1, "launch-day-special"], [1, "circle"], ["src", "assets/images/iPhone1.jpg", "alt", ""], [1, "right"], [1, "info"], [1, "pname"], [1, "desc"], [1, "btime"], [1, "bidprice"], [1, "cbid"], [1, "price"], ["routerLink", "/bid-place", "type", "button", "value", "GET IN", 1, "getin"], [1, "flex-support-contact"], [1, "support"], [1, "text"], [2, "font-size", "1.5vw"], [2, "font-size", "2vw"], [1, "social"], [1, "social-icons"], ["src", "assets/icons/facebook-singupsignin.svg", "alt", ""], ["src", "assets/icons/twitter_referral.svg", "alt", ""], ["src", "assets/icons/google-signupsignin.svg", "alt", ""], [1, "unit"], [1, "contact"], ["border", "0", 2, "width", "110%"], ["colspan", "2"]], template: function LaunchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Launch Day Special ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "IPHONE 12 PRO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " BIDDING TIMINGS: 12PM TO 12AM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " CURRENT BID AT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u20B9 155.59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "FOR HELP & SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "HELLO@BIDMOUSE.CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " VISIT OUR SOCIAL PAGES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " BidMouse is a Unit of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\nAMGB Treeline Private Limited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Site Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sign Up \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Standard \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Refer and Earn \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Premium \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "FAQ\u2019s \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Winners \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Help Centre\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "About BidMouse \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Privacy Policy \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Partner with BidMouse \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Terms of Service \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  color: white;\n  height: 90vh;\n}\n.flex-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 2;\n  border: 2px solid #E8EF01;\n  border-left: none;\n  display: flex;\n  justify-content: center;\n}\n.flex-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .launch-day-special[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n  font-size: 9vw;\n  letter-spacing: 0;\n  width: 50%;\n  z-index: 2;\n  margin: 1rem 3rem;\n}\n.flex-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #E8EF01;\n  margin-left: auto;\n  margin-left: -18rem;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n}\n.flex-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 55%;\n  margin: auto;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  border-top: 2px solid #E8EF01;\n  border-bottom: 2px solid #E8EF01;\n  border-right: 2px solid #E8EF01;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 3rem;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .pname[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #FFFFFF;\n  font-family: Lato;\n  font-size: 44px;\n  font-weight: 300;\n  letter-spacing: 0;\n  flex: 1;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #FFFFFF;\n  font-family: Lato;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: 0;\n  flex: 1;\n  padding: 3rem 5rem;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .btime[_ngcontent-%COMP%] {\n  font-family: Lato;\n  margin-top: 1rem;\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: 0;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bidprice[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bidprice[_ngcontent-%COMP%]   .cbid[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0;\n  padding-left: 7rem;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bidprice[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: Lato;\n  font-size: 48px;\n  font-weight: 300;\n  letter-spacing: 0;\n  padding-left: 7rem;\n}\n.flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bidprice[_ngcontent-%COMP%]   .getin[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 80%;\n  font-family: Lato;\n  background: transparent;\n  color: white;\n  border: 1px solid;\n  padding: 1.2rem;\n  border-radius: 50px;\n  font-size: 1.2em;\n  margin: auto;\n  font-weight: 700;\n}\n.flex-support-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 95vh;\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10rem 5rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  letter-spacing: 0;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-right: 5rem;\n  width: 4rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 2vw;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10rem 5rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  border-bottom: 2px solid #FFFFFF;\n}\n@media screen and (max-width: 768px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: 100vh;\n  }\n  .flex-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    margin-top: 13rem;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n\n  .flex-support-contact[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n    padding: 10rem 2rem;\n  }\n}\n@media screen and (max-width: 480px) {\n  .flex-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: 100vh;\n  }\n  .flex-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    flex: 2;\n    border-left: none;\n    border-right: none;\n    margin-top: 13rem;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-top: 1rem;\n    border-left: none;\n    border-right: none;\n    border-top: none;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .pname[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bidprice[_ngcontent-%COMP%]   .cbid[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n  }\n  .flex-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .bidprice[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 46px;\n    padding-left: 2rem;\n  }\n\n  .flex-support-contact[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 7rem;\n  }\n  .flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n    padding: 10rem 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXVuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUFRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFFWjtBQURZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR2hCO0FBQ0k7RUFDSSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQURZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7QUFHaEI7QUFEWTtFQUNJLE9BQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUdoQjtBQUZnQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlwQjtBQURZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFHaEI7QUFGZ0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSXBCO0FBRmdCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlwQjtBQUZnQjtFQUNJLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSXBCO0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBRko7QUFLSTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtBQUhSO0FBT1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBTFo7QUFRWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTmhCO0FBU1E7RUFDSSxjQUFBO0FBUFo7QUFVSTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtBQVJSO0FBU1E7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFQWjtBQWlCQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxhQUFBO0VBZE47RUFlTTtJQUNJLGlCQUFBO0VBYlY7RUFlTTtJQUNJLGdCQUFBO0VBYlY7RUFlYztJQUNJLGtCQUFBO0VBYmxCOztFQWtCRTtJQUNJLHNCQUFBO0VBZk47RUFnQk07SUFDSSxtQkFBQTtFQWRWO0FBQ0Y7QUFtQkE7RUFFRztJQUNJLHNCQUFBO0lBQ0EsYUFBQTtFQWxCTDtFQW1CSztJQUNLLE9BQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFqQlY7RUFtQk07SUFDSSxPQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUFqQlY7RUFtQmM7SUFDSSxlQUFBO0VBakJsQjtFQW1CYztJQUNJLGtCQUFBO0VBakJsQjtFQW9Ca0I7SUFDSSxrQkFBQTtFQWxCdEI7RUFvQmtCO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBbEJ0Qjs7RUF5QkM7SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0VBdEJMO0VBdUJLO0lBQ0ssbUJBQUE7RUFyQlY7QUFDRiIsImZpbGUiOiJsYXVuY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIGZsZXg6IDI7ICAgIFxyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNFOEVGMDE7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAubGF1bmNoLWRheS1zcGVjaWFsIHsgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDl2dztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEVGMDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE4cmVtO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI0U4RUYwMTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0U4RUYwMTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRThFRjAxO1xyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIC5wbmFtZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDVyZW07XHJcbiAgICAgICAgICAgICAgICAuYnRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJpZHByaWNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAuY2JpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ2V0aW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4uZmxleC1zdXBwb3J0LWNvbnRhY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCI7XHJcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgLnN1cHBvcnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMTByZW0gNXJlbTtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuaXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFjdCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwYWRkaW5nOiAxMHJlbSA1cmVtO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgLmRlc2Mge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mbGV4LXN1cHBvcnQtY29udGFjdCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuc3VwcG9ydCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIFxyXG4gICAuZmxleC1jb250YWluZXIge1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAucG5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmlkcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYmlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgIH1cclxuICAgLmZsZXgtc3VwcG9ydC1jb250YWN0IHtcclxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xyXG4gICAgICAgLnN1cHBvcnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHJlbSAycmVtO1xyXG4gICAgICAgIH1cclxuICAgfVxyXG4gICBcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=launch-launch-module.js.map
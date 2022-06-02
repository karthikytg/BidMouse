(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passes-passes-module"],{

/***/ "InfI":
/*!**********************************************!*\
  !*** ./src/app/main/passes/passes.module.ts ***!
  \**********************************************/
/*! exports provided: PassesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassesModule", function() { return PassesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _passes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passes.component */ "lLUM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _passes_component__WEBPACK_IMPORTED_MODULE_1__["PassesComponent"]
    }
];
class PassesModule {
}
PassesModule.ɵfac = function PassesModule_Factory(t) { return new (t || PassesModule)(); };
PassesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PassesModule });
PassesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PassesModule, { declarations: [_passes_component__WEBPACK_IMPORTED_MODULE_1__["PassesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "lLUM":
/*!*************************************************!*\
  !*** ./src/app/main/passes/passes.component.ts ***!
  \*************************************************/
/*! exports provided: PassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassesComponent", function() { return PassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PassesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PassesComponent.ɵfac = function PassesComponent_Factory(t) { return new (t || PassesComponent)(); };
PassesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PassesComponent, selectors: [["app-passes"]], decls: 182, vars: 0, consts: [[1, "pass-row"], [1, "left"], [1, "img-div"], ["src", "assets/images/passes3.png", "alt", ""], [1, "right"], [1, "day"], [1, "price"], ["type", "button", "value", "VIEW DETAILS"], [1, "day-pass"], [1, "pass-list", "color1"], [1, "pass", "b1"], [1, "title"], ["src", "assets/images/Group 2.png", "alt", ""], ["src", "assets/images/Group 12.png", "alt", ""], ["src", "assets/images/Group 13.png", "alt", ""], ["src", "assets/images/Group 14.png", "alt", ""], ["src", "assets/images/Group 15.png", "alt", ""], ["src", "assets/images/Group 17.png", "alt", ""], [1, "pass-list", "color2"], [1, "pass", "b2"], ["src", "assets/images/Group 18.png", "alt", ""], ["src", "assets/images/Group 19.png", "alt", ""], ["src", "assets/images/Group 22.png", "alt", ""], [1, "pass-list"], [1, "pass", "bg1"], ["src", "assets/images/Group 23.png", "alt", ""], [1, "pass", "bg2"], ["src", "assets/images/Group 24.png", "alt", ""], [1, "pass", "bg3"], ["src", "assets/images/Group 25.png", "alt", ""], [1, "flex-support-contact"], [1, "support"], [1, "text"], [2, "font-size", "1.5vw"], [2, "font-size", "2vw"], [1, "social"], [1, "social-icons"], ["src", "assets/icons/facebook-singupsignin.svg", "alt", ""], ["src", "assets/icons/twitter_referral.svg", "alt", ""], ["src", "assets/icons/google-signupsignin.svg", "alt", ""], [1, "unit"], [1, "contact"], ["border", "0", 2, "width", "110%"], ["colspan", "2"]], template: function PassesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " LAUNCH DAY PASS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u20B9 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " DAILY PASSES\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Day Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u20B9 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 3 - Day Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u20B9 25 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 7 - Day Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u20B9 75 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 15 - Day Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u20B9 130 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 30 - Day Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u20B9 250 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 45 - Day Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u20B9 375 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " PREMIUM PASSES\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Tissot Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u20B9 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Posrche Bounce Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u20B9 200 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Weekend 1 Combo Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u20B9 250 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " ALL ACCESS PASSES\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " All Access Pass - 7 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u20B9 300 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " All Access Pass - 15 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u20B9 600 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " All Access Pass - 30 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u20B9 900 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "FOR HELP & SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "HELLO@BIDMOUSE.CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " VISIT OUR SOCIAL PAGES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " BidMouse is a Unit of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\nAMGB Treeline Private Limited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Site Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Sign Up \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Standard \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Refer and Earn \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Premium \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "FAQ\u2019s \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Winners \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Help Centre\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "About BidMouse \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Privacy Policy \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Partner with BidMouse \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Terms of Service \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pass-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #FFFFFF;\n}\n.pass-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pass-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  text-align: center;\n  background-image: linear-gradient(#0E0052, #342699);\n}\n.pass-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 5rem 0rem;\n}\n.pass-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: Lato;\n}\n.pass-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-left: 2rem;\n  font-size: 120px;\n  font-weight: 300;\n  width: 80%;\n}\n.pass-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-left: 2rem;\n  font-size: 120px;\n  font-weight: 300;\n}\n.pass-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-left: 2rem;\n  background: transparent;\n  border: 1px solid #FFFFFF;\n  color: #FFFFFF;\n  padding: 2rem 10rem;\n  border-radius: 55px;\n  font-size: 14px;\n  font-weight: 900;\n}\n.day-pass[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Lato\";\n  margin-left: 5rem;\n  margin-top: 5rem;\n  font-size: 10rem;\n  width: 81%;\n}\n.pass-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.pass-list.color1[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  color: #000000;\n}\n.pass-list.color2[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: #FFFFFF;\n}\n.pass-list[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.pass-list[_ngcontent-%COMP%]   .pass.b1[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n}\n.pass-list[_ngcontent-%COMP%]   .pass.b2[_ngcontent-%COMP%] {\n  border: 1px solid #FFFFFF;\n  border-right: none;\n}\n.pass-list[_ngcontent-%COMP%]   .pass.bg1[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#E86363, #9F046A);\n  color: #FFFFFF;\n}\n.pass-list[_ngcontent-%COMP%]   .pass.bg2[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#D98D33, #C43C5E, #523892);\n  color: #FFFFFF;\n}\n.pass-list[_ngcontent-%COMP%]   .pass.bg3[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#51567D, #082456);\n  color: #FFFFFF;\n}\n.pass-list[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  font-family: Lato;\n  font-size: 36px;\n  font-weight: 300;\n}\n.pass-list[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 64px;\n  font-weight: 300;\n  margin-top: 2rem;\n}\n.pass-list[_ngcontent-%COMP%]   .pass[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.flex-support-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 95vh;\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10rem 5rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  letter-spacing: 0;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-right: 5rem;\n  width: 4rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 2vw;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10rem 5rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border-bottom: 2px solid #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYXNzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFBSTtFQUNJLE9BQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUFJO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUdaO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR1o7QUFDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFSjtBQUFBO0VBU0ksYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFKSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQU1SO0FBSkk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFNUjtBQUZJO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFIUTtFQUNJLHlCQUFBO0FBS1o7QUFIUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFLWjtBQUhRO0VBQ0ksbURBQUE7RUFDQSxjQUFBO0FBS1o7QUFIUTtFQUNJLDREQUFBO0VBQ0EsY0FBQTtBQUtaO0FBSFE7RUFDSSxtREFBQTtFQUNBLGNBQUE7QUFLWjtBQUhRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtaO0FBSFE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSVo7QUFGUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSVo7QUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFHSjtBQUFJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBWjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFEaEI7QUFJUTtFQUNJLGNBQUE7QUFGWjtBQUtJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBSFI7QUFJUTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQUZaIiwiZmlsZSI6InBhc3Nlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgLmltZy1kaXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMEUwMDUyLCAjMzQyNjk5KTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVyZW0gMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAuZGF5IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMTByZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmRheS1wYXNzIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICB3aWR0aDogODElO1xyXG59XHJcbi5wYXNzLWxpc3Qge1xyXG4gICAgJi5jb2xvcjEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAmLmNvbG9yMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLnBhc3Mge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICYuYjEge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmIyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJnMSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjRTg2MzYzLCAjOUYwNDZBKTtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYmcyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNEOThEMzMsICNDNDNDNUUsICM1MjM4OTIpO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5iZzMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzUxNTY3RCwgIzA4MjQ1Nik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUgeyAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtOyAgICAgIFxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZsZXgtc3VwcG9ydC1jb250YWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiA5NXZoO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiO1xyXG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIC5zdXBwb3J0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcmVtIDVyZW07XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51bml0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Qge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMTByZW0gNXJlbTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=passes-passes-module.js.map
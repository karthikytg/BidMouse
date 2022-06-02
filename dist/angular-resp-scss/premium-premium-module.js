(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["premium-premium-module"],{

/***/ "1Br1":
/*!************************************************!*\
  !*** ./src/app/main/premium/premium.module.ts ***!
  \************************************************/
/*! exports provided: PremiumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumModule", function() { return PremiumModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _premium_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium.component */ "aNW9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _premium_component__WEBPACK_IMPORTED_MODULE_1__["PremiumComponent"]
    }
];
class PremiumModule {
}
PremiumModule.ɵfac = function PremiumModule_Factory(t) { return new (t || PremiumModule)(); };
PremiumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PremiumModule });
PremiumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PremiumModule, { declarations: [_premium_component__WEBPACK_IMPORTED_MODULE_1__["PremiumComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "aNW9":
/*!***************************************************!*\
  !*** ./src/app/main/premium/premium.component.ts ***!
  \***************************************************/
/*! exports provided: PremiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumComponent", function() { return PremiumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PremiumComponent {
    constructor() { }
    ngOnInit() {
    }
}
PremiumComponent.ɵfac = function PremiumComponent_Factory(t) { return new (t || PremiumComponent)(); };
PremiumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PremiumComponent, selectors: [["app-premium"]], decls: 205, vars: 0, consts: [[1, "premium-row"], [1, "left"], [1, "texe"], [1, "right"], [1, "circle"], ["src", "assets/images/iPhone1.jpg", "alt", ""], [1, "pname"], [1, "njdk"], [1, "price"], [1, "hb"], [1, "amt"], [1, "bid-time"], ["type", "button", "routerLink", "/bid-premium-prod", "value", "GET IN"], [1, "up-prod"], [1, "pre-prod"], [1, "release"], [1, "on"], [1, "day"], [1, "date"], [1, "title"], [1, "info"], [1, "bid"], ["type", "button", "value", "PRE REGISTER", 1, "pre-btn"], [1, "view-info"], [1, "votin"], [1, "product-list"], [1, "s1"], [1, "label"], [1, "b"], [1, "s2"], [1, "s3"], ["type", "button", "value", "VOTE FOR THIS", 1, "pre-btn"], [1, "flex-support-contact"], [1, "support"], [1, "text"], [2, "font-size", "1.5vw"], [2, "font-size", "2vw"], [1, "social"], [1, "social-icons"], ["src", "assets/icons/facebook-singupsignin.svg", "alt", ""], ["src", "assets/icons/twitter_referral.svg", "alt", ""], ["src", "assets/icons/google-signupsignin.svg", "alt", ""], [1, "unit"], [1, "contact"], ["border", "0", 2, "width", "110%"], ["colspan", "2"]], template: function PremiumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Today At BidMouse Premium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tissot Chronograph MT190 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CURRENT BID AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u20B9 438.65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bidding Timings: 12PM to 12AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Upcoming Products\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Release on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sunday,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "20th June 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " PORSCHE DESIGN BOUNCE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "BIDDING STARTS AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u20B9100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Vote below for your favourite product amongst the list. Winning product will appear on BidMouse Daily for bidding on the specified release date.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " For Release On: Wednesday, 17th June 2021\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Voting Ends: Tuesday, 16th June 2021 at 11.59PM\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " PRODUCT LIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Canon Pixma Pro-10 \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Samsung Sero TV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sony Xperia 1 III");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Canon EOS M6 Mark II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "HP LaserJet Pro MFP M521dw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " CANON PIXMA PRO-10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "BIDDING STARTS AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u20B9100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " For Release On: Wednesday, 17th June 2021\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Voting Ends: Tuesday, 16th June 2021 at 11.59PM\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " PRODUCT LIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Canon Pixma Pro-10 \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Samsung Sero TV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Sony Xperia 1 III");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Canon EOS M6 Mark II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "HP LaserJet Pro MFP M521dw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " RAYBAN WAYFARER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae ultricies metus, at condimentum nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "BIDDING STARTS AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " \u20B9100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "FOR HELP & SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "HELLO@BIDMOUSE.CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " VISIT OUR SOCIAL PAGES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " BidMouse is a Unit of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " AMGB Treeline Private Limited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Site Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "table", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sign Up \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Standard \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Refer and Earn \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Premium \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "FAQ\u2019s \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Winners \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Help Centre\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "About BidMouse \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Privacy Policy \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Partner with BidMouse \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Terms of Service \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".premium-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #ffffff;\n}\n.premium-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 2;\n  padding-top: 1rem;\n  padding-left: 0rem;\n  padding-bottom: 0rem;\n  padding-right: 0rem;\n  font-size: 8rem;\n  font-family: \"Cinzel Decorative\";\n  border-top: 1px solid #4A4A4A;\n  border-right: 1px solid #4A4A4A;\n  line-height: initial;\n}\n.premium-row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .texe[_ngcontent-%COMP%] {\n  margin-left: 5rem;\n}\n.premium-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  border-top: 1px solid #4A4A4A;\n}\n.premium-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #E8EF01;\n}\n.premium-row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 25%;\n  margin-left: 35%;\n  width: 10rem;\n  object-fit: cover;\n}\n.premium-row[_ngcontent-%COMP%]   .pname[_ngcontent-%COMP%] {\n  flex: 1;\n  border-top: 1px solid #4A4A4A;\n  border-right: 1px solid #4A4A4A;\n  border-bottom: 1px solid #4A4A4A;\n  font-family: \"Cinzel Decorative\";\n  font-size: 36px;\n}\n.premium-row[_ngcontent-%COMP%]   .pname[_ngcontent-%COMP%]   .njdk[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 5rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.premium-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  flex: 1;\n  border-top: 1px solid;\n  border-right: 1px solid;\n  border-bottom: 1px solid;\n}\n.premium-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .hb[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 24px;\n  font-weight: 300;\n  margin-left: 5rem;\n  margin-top: 1rem;\n}\n.premium-row[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 72px;\n  font-weight: 300;\n  margin-bottom: 1rem;\n}\n.premium-row[_ngcontent-%COMP%]   .bid-time[_ngcontent-%COMP%] {\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  flex: 1;\n  text-align: center;\n}\n.premium-row[_ngcontent-%COMP%]   .bid-time[_ngcontent-%COMP%]   .hb[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 24px;\n  font-weight: 300;\n  margin-top: 1rem;\n}\n.premium-row[_ngcontent-%COMP%]   .bid-time[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ffffff;\n  border: 2px solid;\n  padding: 1.5rem 10rem;\n  border-radius: 55px;\n  font-size: 26px;\n  font-weight: bold;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.up-prod[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  font-size: 15vw;\n}\n.pre-prod[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #FFFFFF;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 2;\n  border: 1px solid;\n  border-left: none;\n  background-color: black;\n  text-align: center;\n  position: relative;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #E8EF01;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 30%;\n  width: 10rem;\n  object-fit: cover;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .release[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 1rem;\n  text-align: left;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .release[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%] {\n  font-family: \"sur\";\n  font-size: 36px;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .release[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 24px;\n  font-weight: 300;\n}\n.pre-prod[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .release[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 20px;\n  font-weight: 300;\n}\n.pre-prod[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid;\n  border-left: none;\n  border-right: none;\n}\n.pre-prod[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 24px;\n  width: 15rem;\n}\n.pre-prod[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 16px;\n  font-weight: 300;\n  width: 60%;\n}\n.pre-prod[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bid[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 36px;\n  letter-spacing: 0;\n  width: 60%;\n}\n.pre-prod[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pre-prod[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .pre-btn[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n  margin-top: 5rem;\n  margin-bottom: 2rem;\n  padding: 1rem 5rem;\n  background: transparent;\n  border: 2px solid;\n  color: #FFFFFF;\n  border-radius: 55px;\n  font-size: 1.5rem;\n  font-weight: bold;\n  font-family: Lato;\n}\n.view-info[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: Lato;\n  font-size: 48px;\n  font-weight: 300;\n  margin-left: 5rem;\n  margin-top: 5rem;\n  margin-bottom: 2rem;\n}\n.release[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n  font-size: 24px;\n  font-weight: 300;\n  margin-left: 5rem;\n}\n.votin[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n  font-size: 24px;\n  font-weight: 300;\n  margin-left: 5rem;\n}\n.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: #FFFFFF;\n  margin-top: 2rem;\n}\n.product-list[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #4A4A4A;\n  border-left: none;\n  position: relative;\n}\n.product-list[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 24px;\n}\n.product-list[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 5rem;\n  font-family: Lato;\n  font-size: 24px;\n}\n.product-list[_ngcontent-%COMP%]   .s1[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.product-list[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #4A4A4A;\n  border-left: none;\n  border-right: none;\n}\n.product-list[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  width: 100%;\n  height: 90%;\n  border-radius: 50%;\n  background-color: #E8EF01;\n}\n.product-list[_ngcontent-%COMP%]   .s2[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 25%;\n  margin-left: 35%;\n  width: 10rem;\n  object-fit: cover;\n}\n.product-list[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #4A4A4A;\n  border-right: none;\n}\n.product-list[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 24px;\n}\n.product-list[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 16px;\n  font-weight: 300;\n  width: 60%;\n}\n.product-list[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%]   .bid[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 5rem;\n  font-family: Lato;\n  font-size: 36px;\n  letter-spacing: 0;\n  width: 60%;\n}\n.product-list[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%]   .bid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.product-list[_ngcontent-%COMP%]   .s3[_ngcontent-%COMP%]   .pre-btn[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n  margin-top: 5rem;\n  margin-bottom: 2rem;\n  padding: 1rem 5rem;\n  background: transparent;\n  border: 2px solid;\n  color: #FFFFFF;\n  border-radius: 55px;\n  font-size: 1.5rem;\n  font-weight: bold;\n  font-family: Lato;\n}\n.flex-support-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 95vh;\n  color: #FFFFFF;\n  font-family: \"Cinzel Decorative\";\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10rem 5rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  letter-spacing: 0;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-right: 5rem;\n  width: 4rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .support[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 2vw;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10rem 5rem;\n}\n.flex-support-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border-bottom: 2px solid #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmVtaXVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQURRO0VBQ0ksaUJBQUE7QUFHWjtBQUFJO0VBQ0ksT0FBQTtFQUNBLDZCQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJaEI7QUFBSTtFQUNJLE9BQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdaO0FBQUk7RUFDSSxPQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRVI7QUFEUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHWjtBQUFJO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR1o7QUFEUTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtF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QjtBQUxRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBT1o7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFNSjtBQUhJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBS1I7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGNBQUE7QUFDWjtBQUVJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQUNaIiwiZmlsZSI6InByZW1pdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlbWl1bS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBmbGV4OiAyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtOyAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XHJcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0QTRBNEE7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRBNEE0QTtcclxuICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAudGV4ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRBNEE0QTtcclxuICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFRjAxO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBuYW1lIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNEE0QTRBO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0QTRBNEE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0QTRBNEE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIjtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgLm5qZGsge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICAuaGIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFtdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iaWQtdGltZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAuaGIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxMHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnVwLXByb2Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiO1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTV2dztcclxufVxyXG4ucHJlLXByb2Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICBmbGV4OiAyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEVGMDE7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVsZWFzZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAub24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic3VyXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRheSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmlkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByZS1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udmlldy1pbmZvIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4ucmVsZWFzZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcblxyXG59XHJcbi52b3RpbiB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbn1cclxuLnByb2R1Y3QtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIC5zMSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE0QTRBO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgLmIge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnMyIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTRBNEE7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUYwMTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zMyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE0QTRBO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJpZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gNXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZsZXgtc3VwcG9ydC1jb250YWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiA5NXZoO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiO1xyXG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIC5zdXBwb3J0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcmVtIDVyZW07XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51bml0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3Qge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMTByZW0gNXJlbTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=premium-premium-module.js.map
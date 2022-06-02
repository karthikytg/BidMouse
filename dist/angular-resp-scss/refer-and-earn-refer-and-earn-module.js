(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["refer-and-earn-refer-and-earn-module"],{

/***/ "ViGq":
/*!********************************************************************!*\
  !*** ./src/app/account/refer-and-earn/refer-and-earn.component.ts ***!
  \********************************************************************/
/*! exports provided: ReferAndEarnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAndEarnComponent", function() { return ReferAndEarnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/home.service */ "x+LS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ReferAndEarnComponent {
    constructor(hService) {
        this.hService = hService;
        this.hide = true;
    }
    ngOnInit() {
        this.hService.makeYellow();
    }
}
ReferAndEarnComponent.ɵfac = function ReferAndEarnComponent_Factory(t) { return new (t || ReferAndEarnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"])); };
ReferAndEarnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferAndEarnComponent, selectors: [["app-refer-and-earn"]], decls: 113, vars: 0, consts: [[1, "container-fluid", 2, "background-color", "#DEE403 !important"], [1, "row"], [1, "col-lg-12"], ["routerLink", "/my-acc", 1, "back"], [1, "pageTitle"], [1, "referInfo"], [1, "col-lg-8"], [1, "referPrice"], [1, "priceTxt"], [1, "tagline"], [1, "price"], [1, "col-lg-4"], ["src", "assets/images/referral1.png", "alt", "", 1, "refImg"], ["src", "assets/images/referral2.png", "alt", "", 1, "refImg"], [1, "refInfo"], [1, "sub"], [1, "message"], [1, "shareUs"], [1, "social-icons"], ["src", "assets/icons/facebook-singupsignin.svg", "alt", ""], ["src", "assets/icons/twitter_referral.svg", "alt", ""], ["src", "assets/icons/google-signupsignin.svg", "alt", ""], ["type", "button", "value", "Copy Message with Link", 1, "button"], [1, "inviteMail"], [1, "left"], [1, "right"], [1, "inputfield"], [2, "display", "flex", "justify-content", "space-between"], [2, "font-weight", "bold", "font-size", "20px", "cursor", "pointer"], [1, "refercode"], ["type", "text", "name", "", "onfocus", "this.placeholder=''", "onfocusout", "this.placeholder='Enter Full name'"], [1, "row", 2, "background-color", "#000034"], [1, "col-lg-6"], [1, "forHelp"], [1, "title"], [1, "email"], [1, "link", 2, "width", "9rem"], [1, "link", 2, "width", "15rem"]], template: function ReferAndEarnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2190 Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Refer and earn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Refer your family and friends. They get discounts on purchase of pass. And you get the discounted amount as cashback. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Earned through Referrals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Will be deposited to your wallet on Launch Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u20B9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 170 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Your Referral Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Hey there,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Here is a new way for you to get your hands on your favourite products. I am inviting you to join BidMouse. Join now and get discounts on purchase of pass. Use Code NHGR55OP or click on the link below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Mohan Kumar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Share this message on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " INVITE THROUGH EMAIL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " CLEAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Email 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Email 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Email 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " For Help & Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " hello@bidmouse.co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Sign Up \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Refer and Earn \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " BidMouse is a Unit of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " AMGB Treeline Private Limited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Visit Our Social Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".back[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 3rem;\n  color: #19191F;\n  font-family: Lato;\n  font-weight: bold;\n  font-size: 24px;\n  letter-spacing: 0;\n  line-height: 29px;\n  cursor: pointer;\n}\n\n.pageTitle[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 3rem;\n  margin-bottom: 2rem;\n  color: #19191F;\n  font-family: \"Cinzel Decorative\";\n  font-size: 48px;\n  letter-spacing: 0;\n  line-height: 65px;\n}\n\n.referInfo[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n  background-color: #DEE403 !important;\n  color: #000000;\n  font-family: Lato;\n  font-size: 30px;\n  font-weight: 300;\n  letter-spacing: 0;\n  line-height: 44px;\n  width: 45rem;\n}\n\n.refImg[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 30rem;\n  margin: 3rem;\n}\n\n.referPrice[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 70px;\n  background-color: #DEE403;\n  margin: 3rem;\n  height: 30rem;\n  padding: 3rem;\n}\n\n.referPrice[_ngcontent-%COMP%]   .priceTxt[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: Lato;\n  font-size: 36px;\n  font-weight: 300;\n  letter-spacing: 0.38px;\n  line-height: 44px;\n}\n\n.referPrice[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.19px;\n  line-height: 22px;\n}\n\n.referPrice[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: \"Cinzel Decorative\";\n  font-size: 144px;\n  letter-spacing: 1.5px;\n  line-height: 195px;\n  margin-top: 10rem;\n}\n\n.referPrice[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 65px;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inviteMail[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #000000;\n  font-family: Lato;\n  font-size: 22px;\n  letter-spacing: 0.25px;\n  line-height: 29px;\n  margin-bottom: 1rem;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inviteMail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inviteMail[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%]   .refercode[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 2px solid #000;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%]   .refercode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  color: #000;\n  font-size: 20px;\n  font-family: Lato;\n  font-weight: 300;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%]   .refercode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.referPrice[_ngcontent-%COMP%]   .inputfield[_ngcontent-%COMP%]   .refercode[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #000;\n  font-size: 20px;\n  font-family: Lato;\n  font-weight: 300;\n}\n\n.refInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 70px;\n  background-color: #DEE403;\n  margin: 3rem -4rem;\n  height: 30rem;\n  padding: 3rem 5rem;\n}\n\n.refInfo[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: Lato;\n  font-size: 22px;\n  margin-bottom: 2rem;\n  font-weight: 300;\n  letter-spacing: 0.19px;\n  line-height: 22px;\n}\n\n.refInfo[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: 700px;\n  color: #000000;\n  font-family: Lato;\n  font-size: 22px;\n  font-weight: 300;\n  letter-spacing: 0.31px;\n  line-height: 29px;\n}\n\n.refInfo[_ngcontent-%COMP%]   .shareUs[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: Lato;\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 1rem;\n  letter-spacing: 0.25px;\n  line-height: 29px;\n}\n\n.refInfo[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n}\n\n.refInfo[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  margin-right: 2rem;\n  width: 3rem;\n}\n\n.refInfo[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-left: 5rem;\n  padding: 1rem 3rem;\n  border: 2px solid #000000;\n  border-radius: 50px;\n  cursor: pointer;\n  font-family: Lato;\n  font-size: 18px;\n  letter-spacing: 0.56px;\n  line-height: 22px;\n}\n\n.forHelp[_ngcontent-%COMP%] {\n  font-family: \"Cinzel Decorative\";\n  color: #FFFFFF;\n  margin-top: 7rem;\n  margin-left: 7rem;\n  margin-bottom: 5rem;\n}\n\n.forHelp[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 195px;\n  font-size: 18px;\n  letter-spacing: 0;\n  line-height: 25px;\n}\n\n.forHelp[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 470px;\n  font-size: 24px;\n  letter-spacing: 0;\n  line-height: 32px;\n  margin-top: 1rem;\n}\n\n.forHelp[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  border-bottom: 2px solid white;\n  text-decoration: none;\n}\n\n.forHelp[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-right: 5rem;\n  width: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWZlci1hbmQtZWFybi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUpJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQU1SOztBQUpJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQU1SOztBQUpJO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFNUjs7QUFMUTtFQUNJLGVBQUE7QUFPWjs7QUFKSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFNUjs7QUFMUTtFQUNJLGdCQUFBO0FBT1o7O0FBTFE7RUFDSSxpQkFBQTtBQU9aOztBQUpJO0VBQ0ksYUFBQTtBQU1SOztBQUxRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU9aOztBQUxRO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FBT1o7O0FBTlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVFoQjs7QUFOWTtFQUNJLGFBQUE7QUFRaEI7O0FBTlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFRaEI7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBTEk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFPUjs7QUFMSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBT1I7O0FBTEk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFPUjs7QUFMSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQU9SOztBQU5RO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPWjs7QUFMUTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQU9aOztBQURBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBS1I7O0FBSEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFLUjs7QUFKUTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQU1aOztBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJWiIsImZpbGUiOiJyZWZlci1hbmQtZWFybi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGNvbG9yOiAjMTkxOTFGO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBhZ2VUaXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgY29sb3I6ICMxOTE5MUY7XHJcbiAgICBmb250LWZhbWlseTogXCJDaW56ZWwgRGVjb3JhdGl2ZVwiO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNjVweDtcclxufVxyXG4ucmVmZXJJbmZvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFRTQwMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgd2lkdGg6IDQ1cmVtO1xyXG59XHJcbi5yZWZJbWcge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBtYXJnaW46IDNyZW07XHJcbn1cclxuLnJlZmVyUHJpY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RFRTQwMztcclxuICAgIG1hcmdpbjogM3JlbTtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgLnByaWNlVHh0IHtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgfVxyXG4gICAgLnRhZ2xpbmUge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNpbnplbCBEZWNvcmF0aXZlXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmludml0ZU1haWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5wdXRmaWVsZCB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTsgICBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWZlcmNvZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucmVmSW5mb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERUU0MDM7XHJcbiAgICBtYXJnaW46IDNyZW0gLTRyZW07XHJcbiAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgcGFkZGluZzogM3JlbSA1cmVtO1xyXG4gICAgLnN1YiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xOXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgfVxyXG4gICAgLnNoYXJlVXMge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLmZvckhlbHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luLXRvcDogN3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxOTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZW1haWwge1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICB3aWR0aDogNDcwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "yZph":
/*!*****************************************************************!*\
  !*** ./src/app/account/refer-and-earn/refer-and-earn.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReferAndEarnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAndEarnModule", function() { return ReferAndEarnModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _refer_and_earn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refer-and-earn.component */ "ViGq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _refer_and_earn_component__WEBPACK_IMPORTED_MODULE_1__["ReferAndEarnComponent"]
    }
];
class ReferAndEarnModule {
}
ReferAndEarnModule.ɵfac = function ReferAndEarnModule_Factory(t) { return new (t || ReferAndEarnModule)(); };
ReferAndEarnModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReferAndEarnModule });
ReferAndEarnModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReferAndEarnModule, { declarations: [_refer_and_earn_component__WEBPACK_IMPORTED_MODULE_1__["ReferAndEarnComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=refer-and-earn-refer-and-earn-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-track-info-update-track-info-module"],{

/***/ "apPq":
/*!************************************************************************!*\
  !*** ./src/app/admin/update-track-info/update-track-info.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateTrackInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTrackInfoComponent", function() { return UpdateTrackInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/home.service */ "x+LS");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/product.service */ "szdb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class UpdateTrackInfoComponent {
    constructor(hService, pService, activatedRoute) {
        this.hService = hService;
        this.pService = pService;
        this.activatedRoute = activatedRoute;
        this.pname = '';
        this.sts = '';
        this.pid = '';
        this.trackNo = '';
        this.trackLink = '';
    }
    ngOnInit() {
        this.hService.hideNav();
        const id = this.activatedRoute.snapshot.params['id'];
        this.pService.getProductById(id).subscribe(res => {
            // console.log('Res : ', res);
            this.pname = res.rows.pname;
            this.sts = res.rows.status;
            this.pid = res.rows.uuid;
        }, err => {
            console.log(err.message);
        });
        // alert('id: '+ id)
    }
}
UpdateTrackInfoComponent.??fac = function UpdateTrackInfoComponent_Factory(t) { return new (t || UpdateTrackInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UpdateTrackInfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UpdateTrackInfoComponent, selectors: [["app-update-track-info"]], decls: 78, vars: 7, consts: [[1, "w3-sidebar", "w3-bar-block", "w3-light-grey", "w3-card", 2, "width", "20%", "padding", "2rem 3rem"], [1, "admin-title"], ["routerLink", "/dashboard", 1, "w3-bar-item", "w3-button"], ["routerLink", "/product-list", 1, "w3-bar-item", "w3-button"], ["routerLink", "/passes-admin", 1, "w3-bar-item", "w3-button"], ["routerLink", "/user-list", 1, "w3-bar-item", "w3-button"], ["routerLink", "/ref-ad-list", 1, "w3-bar-item", "w3-button"], ["href", "#", 1, "w3-bar-item", "w3-button"], [2, "margin-left", "20%", "height", "100vh"], [1, "w3-container"], [1, "product-form"], [1, "page-title"], [2, "font-size", "14px", "font-weight", "bold"], [2, "font-size", "18px"], [2, "width", "50%"], [2, "font-size", "18px", "font-weight", "bold"], [2, "width", "40%"], [1, "inp-title"], [2, "font-weight", "bold"], ["type", "text", 1, "inputs", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "UPDATE", 1, "form-btns", "b2"]], template: function UpdateTrackInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "ADMIN PANEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Passes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Referrals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " UPDATING PRODUCT TRACKING INFO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "PRODUCT ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "PRODUCT NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "BIDDING STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Tracking Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "EDIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateTrackInfoComponent_Template_input_ngModelChange_54_listener($event) { return ctx.trackNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Tracking Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "EDIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateTrackInfoComponent_Template_input_ngModelChange_65_listener($event) { return ctx.trackLink = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 5, ctx.pname));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.sts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.trackNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.trackLink);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: [".product-form[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 3rem;\n  color: #000000;\n  font-family: Lato;\n  width: 75%;\n  overflow: auto;\n}\n.product-form[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.product-form[_ngcontent-%COMP%]   .info-level[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 3rem;\n  display: flex;\n  justify-content: space-between;\n}\n.product-form[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.inputs[_ngcontent-%COMP%] {\n  width: 90%;\n  outline: 1px solid black;\n  height: 4rem;\n  font-size: 22px;\n  padding-left: 1rem;\n}\n.inputs.change[_ngcontent-%COMP%] {\n  padding-right: 5rem;\n}\n.inp-title[_ngcontent-%COMP%] {\n  font-family: Lato;\n  font-size: 14px;\n  font-weight: 300;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1cGRhdGUtdHJhY2staW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRVI7QUFDQTtFQUNJLGFBQUE7QUFFSjtBQUFBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdKO0FBRkk7RUFDSSxtQkFBQTtBQUlSO0FBREE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBSUoiLCJmaWxlIjoidXBkYXRlLXRyYWNrLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmluZm8tbGV2ZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59XHJcbi5wcm9kdWN0LWZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmlucHV0cyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgJi5jaGFuZ2Uge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcbiAgICB9XHJcbn1cclxuLmlucC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "fDPB":
/*!*********************************************************************!*\
  !*** ./src/app/admin/update-track-info/update-track-info.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateTrackInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTrackInfoModule", function() { return UpdateTrackInfoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _update_track_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-track-info.component */ "apPq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _update_track_info_component__WEBPACK_IMPORTED_MODULE_1__["UpdateTrackInfoComponent"]
    }
];
class UpdateTrackInfoModule {
}
UpdateTrackInfoModule.??fac = function UpdateTrackInfoModule_Factory(t) { return new (t || UpdateTrackInfoModule)(); };
UpdateTrackInfoModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: UpdateTrackInfoModule });
UpdateTrackInfoModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](UpdateTrackInfoModule, { declarations: [_update_track_info_component__WEBPACK_IMPORTED_MODULE_1__["UpdateTrackInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=update-track-info-update-track-info-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "AQnW":
/*!*********************************************!*\
  !*** ./src/app/_services/passes.service.ts ***!
  \*********************************************/
/*! exports provided: PassesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassesService", function() { return PassesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PassesService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost:3001/api';
    }
    addPasses(data) {
        return this.http.post(`${this.host}/pass/add-pass`, data);
    }
    updatePass(data) {
        return this.http.put(`${this.host}/pass/up-pass`, data);
    }
    aodPass(data) {
        return this.http.put(`${this.host}/pass/act-pass`, data);
    }
    uploadPass(data, inc) {
        return this.http.post(`${this.host}/pass/file-upload${inc}`, data);
    }
    getPasses() {
        return this.http.get(`${this.host}/pass/get-passes`);
    }
    getPassesById(id) {
        return this.http.get(`${this.host}/pass/get-pass-id/${id}`);
    }
    deletePassById(id) {
        return this.http.get(`${this.host}/pass/del-pass/${id}`);
    }
}
PassesService.ɵfac = function PassesService_Factory(t) { return new (t || PassesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PassesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PassesService, factory: PassesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "E+YW":
/*!************************************************!*\
  !*** ./src/app/_services/referrals.service.ts ***!
  \************************************************/
/*! exports provided: ReferralsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralsService", function() { return ReferralsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ReferralsService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost:3001/api';
    }
    addReferrals(data) {
        return this.http.post(`${this.host}/refer/add-ref`, data);
    }
    updateRefer(data) {
        return this.http.put(`${this.host}/refer/up-ref`, data);
    }
    deactiveRefer(data) {
        return this.http.put(`${this.host}/refer/up-deact`, data);
    }
    getReferrals() {
        return this.http.get(`${this.host}/refer/get-ref`);
    }
    getReferralById(id) {
        return this.http.get(`${this.host}/refer/get-ref-id/${id}`);
    }
    deleteReferralsById(id) {
        return this.http.get(`${this.host}/refer/del-ref/${id}`);
    }
}
ReferralsService.ɵfac = function ReferralsService_Factory(t) { return new (t || ReferralsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReferralsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReferralsService, factory: ReferralsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "szdb":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ProductService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost:3001/api';
    }
    addProduct(data) {
        return this.http.post(`${this.host}/prod/add-prod`, data);
    }
    updateProduct(data) {
        return this.http.put(`${this.host}/prod/up-prod`, data);
    }
    uploadProduct(data, inc) {
        return this.http.post(`${this.host}/prod/file-upload${inc}`, data);
    }
    getProducts() {
        return this.http.get(`${this.host}/prod/get-prods`);
    }
    getProductById(id) {
        return this.http.get(`${this.host}/prod/get-prod/${id}`);
    }
    deleteProductById(id) {
        return this.http.get(`${this.host}/prod/del-prod/${id}`);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map
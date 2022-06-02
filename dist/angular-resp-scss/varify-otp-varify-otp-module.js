(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["varify-otp-varify-otp-module"],{

/***/ "0MMI":
/*!******************************************************!*\
  !*** ./src/app/auth/varify-otp/varify-otp.module.ts ***!
  \******************************************************/
/*! exports provided: VarifyOtpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarifyOtpModule", function() { return VarifyOtpModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _varify_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./varify-otp.component */ "P50e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _varify_otp_component__WEBPACK_IMPORTED_MODULE_1__["VarifyOtpComponent"]
    }
];
class VarifyOtpModule {
}
VarifyOtpModule.ɵfac = function VarifyOtpModule_Factory(t) { return new (t || VarifyOtpModule)(); };
VarifyOtpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: VarifyOtpModule });
VarifyOtpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_3__["NgOtpInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VarifyOtpModule, { declarations: [_varify_otp_component__WEBPACK_IMPORTED_MODULE_1__["VarifyOtpComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ng_otp_input__WEBPACK_IMPORTED_MODULE_3__["NgOtpInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AuthService {
    constructor(http) {
        this.http = http;
        this.host = 'http://localhost:3001/api';
    }
    signUpUser(data) {
        return this.http.post(`${this.host}/user/sign-up`, data);
    }
    login(data) {
        return this.http.post(`${this.host}/user/login`, data);
    }
    updateRefer(data) {
        return this.http.put(`${this.host}/refer/up-ref`, data);
    }
    blockOrUnblockUser(data) {
        return this.http.put(`${this.host}/user/block-user`, data);
    }
    getUsersList() {
        return this.http.get(`${this.host}/user/get-users`);
    }
    getUserById(id) {
        return this.http.get(`${this.host}/user/get-user-id/${id}`);
    }
    deleteUserById(id) {
        return this.http.get(`${this.host}/user/del-user/${id}`);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9OaD":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function() { return NgOtpInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOtpInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onKeyUp($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
} }
class KeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputComponent {
    /**
     * @param {?} keysPipe
     */
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
        }
        this.inputType = this.getInputType();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                (evt) => this.handlePaste(evt)));
                /** @type {?} */
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    /**
     * @param {?} event
     * @param {?} targetCode
     * @return {?}
     */
    ifKeyCode(event, targetCode) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        /** @type {?} */
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    /**
     * @param {?} $event
     * @param {?} inputIdx
     * @return {?}
     */
    onKeyUp($event, inputIdx) {
        /** @type {?} */
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        /** @type {?} */
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        /** @type {?} */
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    setSelected(eleId) {
        this.focusTo(eleId);
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ele.setSelectionRange(0, 1);
            }), 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifValidEntry(event) {
        /** @type {?} */
        const inp = String.fromCharCode(event.keyCode);
        /** @type {?} */
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    focusTo(eleId) {
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((/**
         * @param {?} c
         * @param {?} idx
         * @return {?}
         */
        (c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        }));
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            /** @type {?} */
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            /** @type {?} */
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    /**
     * @return {?}
     */
    rebuildValue() {
        /** @type {?} */
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            if (this.otpForm.controls[k].value) {
                val += this.otpForm.controls[k].value;
            }
        }));
        this.onInputChange.emit(val);
    }
    /**
     * @return {?}
     */
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handlePaste(e) {
        // Get pasted data via clipboard API
        /** @type {?} */
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/** @nocollapse */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputModule {
}
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); };
NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]; }, exports: function () { return [NgOtpInputComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ "P50e":
/*!*********************************************************!*\
  !*** ./src/app/auth/varify-otp/varify-otp.component.ts ***!
  \*********************************************************/
/*! exports provided: VarifyOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarifyOtpComponent", function() { return VarifyOtpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/home.service */ "x+LS");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function VarifyOtpComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VarifyOtpComponent_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.resendOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VarifyOtpComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2190 CANCEL AND GO BACK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VarifyOtpComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2190 CANCEL AND GO BACK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VarifyOtpComponent {
    constructor(router, authService, activatedRoute, hService) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.hService = hService;
        this.otpEntered = '0';
        this.config = {
            allowNumbersOnly: false,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '90px',
                'height': '102px',
                'background': 'transparent',
                'border': '1px solid #000000',
                'border-radius': '16px',
                'outline': 'none'
            }
        };
        this.showResend = false;
        this.resendOtpIn = '3:00';
        this.isEnabled = false;
        this.btnLabel = '';
    }
    ngOnInit() {
        this.hService.makeYellow();
        this.initTimer(18000);
        this.a = this.activatedRoute.snapshot.params['a'];
        this.btnLabel = 'CREATE ACCOUNT';
        if (this.a === '1') {
            this.btnLabel = 'LOGIN TO ACCOUNT';
        }
    }
    initTimer(remainingTime) {
        this.timer = setInterval(() => {
            if (remainingTime <= 0) {
                this.showResend = true;
                this.resendOtpIn = '0:00';
                clearInterval(this.timer);
            }
            else {
                remainingTime -= 1000;
                this.resendOtpIn = this.miliSecToMin(remainingTime);
            }
        }, 1000);
    }
    onOtpChange(event) {
        this.otpEntered = event;
    }
    verifyOtp(event) {
        console.log('form : ', localStorage.getItem('userForm'));
        if (this.a === '1') {
            this.router.navigate(['/my-acc']);
        }
        else {
            const data = JSON.parse(localStorage.getItem('userForm') || '');
            this.authService.signUpUser(data).subscribe(res => {
                // alert(res.message);
                this.router.navigate(['/my-acc']);
            }, err => {
                console.log('Error : ', err.message);
            });
        }
    }
    resendOtp() {
    }
    miliSecToMin(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000);
        return (seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    }
}
VarifyOtpComponent.ɵfac = function VarifyOtpComponent_Factory(t) { return new (t || VarifyOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"])); };
VarifyOtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VarifyOtpComponent, selectors: [["app-varify-otp"]], decls: 27, vars: 8, consts: [[1, "container-fluid", "bg-3", 2, "background-color", "#E8EF01", "height", "100vh"], [1, "row"], [1, "col-sm-6"], [1, "leftText"], [1, "tagLine"], [1, "iImage"], ["src", "assets/images/signupsignin.png", "alt", "illustration", 1, "iImage"], [1, "buttonsGroup"], [1, "example-form"], [1, "otpText"], [3, "config", "onInputChange"], [1, "otpText", "timer"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["type", "button", 3, "ngClass", "value", "disabled", "click"], ["class", "backToLogin", "routerLink", "/signup-form", 4, "ngIf"], ["class", "backToLogin", "routerLink", "/login", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["routerLink", "/signup-form", 1, "backToLogin"], ["routerLink", "/login", 1, "backToLogin"]], template: function VarifyOtpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sign Up to Pre-Register for products and to earn through referrals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You need to be atleast 18 years of age to create an account with us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Enter OTP received on your phone or email address in the fields below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ng-otp-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function VarifyOtpComponent_Template_ng_otp_input_onInputChange_15_listener($event) { return ctx.onOtpChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Didn\u2019t Receive OTP?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VarifyOtpComponent_i_19_Template, 2, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VarifyOtpComponent_Template_input_click_22_listener($event) { return ctx.verifyOtp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VarifyOtpComponent_div_23_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VarifyOtpComponent_div_24_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " By Signing Up you agree to the Terms and Conditions and Privacy Policy set forth by BidMouse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You can resend OTP in ( ", ctx.resendOtpIn, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.otpEntered.length < 4 || ctx.showResend ? "spanBtn disabled" : "spanBtn")("value", ctx.btnLabel)("disabled", ctx.otpEntered.length < 4 || ctx.showResend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.a === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.a === "1");
    } }, directives: [ng_otp_input__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".leftText[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6rem;\n  left: 6rem;\n  color: #19191F;\n  width: 320px;\n  font-family: \"Cinzel Decorative\";\n  font-size: 24px;\n  letter-spacing: 0;\n  line-height: 32px;\n}\n.leftText[_ngcontent-%COMP%]   .tagLine[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 320px;\n  color: #19191F;\n  font-family: Lato;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 17px;\n}\n.buttonsGroup[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2rem;\n  left: 0rem;\n  padding-left: 8rem;\n  display: inline-grid;\n}\n.buttonsGroup[_ngcontent-%COMP%]   .spanBtn[_ngcontent-%COMP%] {\n  margin-top: 0.7rem;\n  padding: 1rem 6rem;\n  border: 1px solid #000000;\n  border-radius: 50px;\n  background: transparent;\n  font-weight: bold;\n  width: 100%;\n  color: #000000;\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 2rem;\n  letter-spacing: 0.56px;\n}\n.buttonsGroup[_ngcontent-%COMP%]   .spanBtn.disabled[_ngcontent-%COMP%] {\n  border: 1px solid #C0C600;\n  color: #C0C600;\n}\n.buttonsGroup[_ngcontent-%COMP%]   .backToLogin[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 229px;\n  color: #000000;\n  font-family: Lato;\n  font-size: 18px;\n  margin-top: 2rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid black;\n  letter-spacing: 0.56px;\n  line-height: 22px;\n  cursor: pointer;\n}\n.buttonsGroup[_ngcontent-%COMP%]   .tagLine[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  width: 393px;\n  color: #000000;\n  font-family: Lato;\n  font-size: 14px;\n  letter-spacing: 0.44px;\n  line-height: 17px;\n}\n.buttonsGroup[_ngcontent-%COMP%]   .otpText[_ngcontent-%COMP%] {\n  width: 393px;\n  color: #000000;\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.56px;\n  line-height: 22px;\n  margin-top: 5rem;\n  margin-bottom: 3rem;\n}\n.buttonsGroup[_ngcontent-%COMP%]   .otpText.timer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 0rem;\n}\n.lableText[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-family: Lato;\n  font-weight: bold;\n  font-size: 18px;\n  font-weight: 300;\n  letter-spacing: 0.56px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpZnktb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUVRO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQVo7QUFHSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFI7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFHSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFLQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InZhcmlmeS1vdHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdFRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2cmVtO1xyXG4gICAgbGVmdDogNnJlbTtcclxuICAgIGNvbG9yOiAjMTkxOTFGO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2luemVsIERlY29yYXRpdmVcIjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAudGFnTGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBjb2xvcjogIzE5MTkxRjtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIH1cclxufVxyXG4ucmlnaHRTaWRlIHsgXHJcblxyXG59XHJcblxyXG4uYnV0dG9uc0dyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDByZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIC5zcGFuQnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjdyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSA2cmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgXHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTZweDsgICBcclxuICAgICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MwQzYwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNDMEM2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhY2tUb0xvZ2luIHtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgd2lkdGg6IDIyOXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjU2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnRhZ0xpbmUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDM5M3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40NHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgfVxyXG4gICAgLm90cFRleHQge1xyXG4gICAgICAgIHdpZHRoOiAzOTNweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41NnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAmLnRpbWVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5sYWJsZVRleHQge1xyXG4gICAgY29sb3I6ICM0QTRBNEE7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjU2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=varify-otp-varify-otp-module.js.map
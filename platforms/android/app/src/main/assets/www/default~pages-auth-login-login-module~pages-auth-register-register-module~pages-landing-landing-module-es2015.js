(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-login-login-module~pages-auth-register-register-module~pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"light\" (click)=\"dismissLogin()\">Close</ion-button>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input ngModel type=\"email\" name=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\"></ion-input>\n    </ion-item>\n  \n    <p text-right>Forgot Password?</p>\n  \n    <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Login</ion-button>\n  </form>\n  <p text-center>Don't have a account?</p>\n  <ion-button expand=\"full\" color=\"danger\" (click)=\"registerModal()\">Register</ion-button>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"light\" (click)=\"dismissRegister()\">Close</ion-button>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n    <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input ngModel name=\"fName\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input ngModel name=\"lName\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" ngModel name=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" ngModel name=\"password\"></ion-input>\n    </ion-item>\n  \n    <ion-button type=\"submit\" expand=\"full\" color=\"danger\">Register</ion-button>\n  </form>\n  <p text-center>Already have a account?</p>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"loginModal()\">Login</ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/register.page */ "./src/app/pages/auth/register/register.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/env.service */ "./src/app/services/env.service.ts");







let LoginPage = class LoginPage {
    constructor(modalController, authService, navCtrl, alertService, env) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
    }
    ngOnInit() {
    }
    // Descartar el modal de login
    dismissLogin() {
        this.modalController.dismiss();
    }
    //
    registerModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissLogin();
            const registerModal = yield this.modalController.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
            });
            return yield registerModal.present();
        });
    }
    login(form) {
        console.log(form.value.email, form.value.password);
        this.authService.login(form.value.email, form.value.password).subscribe(data => {
            this.alertService.presentToast("Sesión Iniciada");
        }, error => {
            console.log(error);
            let toast = this.alertService.presentToast(error.message);
        }, () => {
            this.dismissLogin();
            this.navCtrl.navigateRoot('/dashboard');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");






let RegisterPage = class RegisterPage {
    constructor(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    // Dismiss Register Modal
    dismissRegister() {
        this.modalController.dismiss();
    }
    // On Login button tap, dismiss Register modal and open login Modal
    loginModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissRegister();
            const loginModal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
            });
            return yield loginModal.present();
        });
    }
    register(form) {
        this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(data => {
            this.authService.login(form.value.email, form.value.password).subscribe(data => {
            }, error => {
                console.log(error);
            }, () => {
                this.dismissRegister();
                this.navCtrl.navigateRoot('/dashboard');
            });
            this.alertService.presentToast(data['message']);
        }, error => {
            console.log(error);
        }, () => {
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AlertService = class AlertService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: 'top',
                color: 'dark'
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./env.service */ "./src/app/services/env.service.ts");






// import { HTTP } from '@ionic-native/http/ngx';
let AuthService = class AuthService {
    constructor(http, storage, env) {
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.isLoggedIn = false;
    }
    login(email, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.env.API_URL + 'api/auth/login', { email: email, password: password }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(token => {
            this.storage.setItem('token', token)
                .then(() => {
                console.log('Token Stored');
            }, error => console.error('Error storing item', error));
            this.token = token;
            this.isLoggedIn = true;
            return token;
        }));
    }
    register(fName, lName, email, password) {
        return this.http.post(this.env.API_URL + 'api/auth/register', { fName: fName, lName: lName, email: email, password: password });
    }
    logout() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.env.API_URL + 'api/auth/logout', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => {
            this.storage.remove("token");
            this.isLoggedIn = false;
            delete this.token;
            return data;
        }));
    }
    user() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.env.API_URL + 'api/auth/user', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => {
            return user;
        }));
    }
    getToken() {
        return this.storage.getItem('token').then(data => {
            this.token = data;
            if (this.token != null) {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        }, error => {
            this.token = null;
            this.isLoggedIn = false;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/env.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/env.service.ts ***!
  \*****************************************/
/*! exports provided: EnvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvService", function() { return EnvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EnvService = class EnvService {
    constructor() {
        this.API_URL = 'http://apiform.test/';
    }
};
EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnvService);



/***/ })

}]);
//# sourceMappingURL=default~pages-auth-login-login-module~pages-auth-register-register-module~pages-landing-landing-module-es2015.js.map
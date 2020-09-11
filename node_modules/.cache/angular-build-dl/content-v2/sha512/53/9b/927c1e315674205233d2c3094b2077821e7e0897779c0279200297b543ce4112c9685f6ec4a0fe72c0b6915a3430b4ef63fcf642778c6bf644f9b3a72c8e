function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-login-login-module~pages-auth-register-register-module~pages-landing-landing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"light\" (click)=\"dismissLogin()\">Close</ion-button>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input ngModel type=\"email\" name=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\"></ion-input>\n    </ion-item>\n  \n    <p text-right>Forgot Password?</p>\n  \n    <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Login</ion-button>\n  </form>\n  <p text-center>Don't have a account?</p>\n  <ion-button expand=\"full\" color=\"danger\" (click)=\"registerModal()\">Register</ion-button>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button color=\"light\" (click)=\"dismissRegister()\">Close</ion-button>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\n    <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input ngModel name=\"fName\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input ngModel name=\"lName\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" ngModel name=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" ngModel name=\"password\"></ion-input>\n    </ion-item>\n  \n    <ion-button type=\"submit\" expand=\"full\" color=\"danger\">Register</ion-button>\n  </form>\n  <p text-center>Already have a account?</p>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"loginModal()\">Login</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/auth/login/login.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login.page.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/auth/login/login.page.ts ***!
    \************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../register/register.page */
    "./src/app/pages/auth/register/register.page.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/env.service */
    "./src/app/services/env.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(modalController, authService, navCtrl, alertService, env) {
        _classCallCheck(this, LoginPage);

        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.env = env;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Descartar el modal de login

      }, {
        key: "dismissLogin",
        value: function dismissLogin() {
          this.modalController.dismiss();
        } //

      }, {
        key: "registerModal",
        value: function registerModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var registerModal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dismissLogin();
                    _context.next = 3;
                    return this.modalController.create({
                      component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                    });

                  case 3:
                    registerModal = _context.sent;
                    _context.next = 6;
                    return registerModal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login(form) {
          var _this = this;

          this.authService.login(form.value.email, form.value.password).subscribe(function (data) {
            _this.alertService.presentToast("Sesión Iniciada");
          }, function (error) {
            console.log(error);

            var toast = _this.alertService.presentToast(error.message);
          }, function () {
            _this.dismissLogin();

            _this.navCtrl.navigateRoot('/dashboard');
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _services_env_service__WEBPACK_IMPORTED_MODULE_6__["EnvService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/auth/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  },

  /***/
  "./src/app/pages/auth/register/register.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/auth/register/register.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/auth/register/register.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/auth/register/register.page.ts ***!
    \******************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesAuthRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.page */
    "./src/app/pages/auth/login/login.page.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(modalController, authService, navCtrl, alertService) {
        _classCallCheck(this, RegisterPage);

        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Dismiss Register Modal

      }, {
        key: "dismissRegister",
        value: function dismissRegister() {
          this.modalController.dismiss();
        } // On Login button tap, dismiss Register modal and open login Modal

      }, {
        key: "loginModal",
        value: function loginModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loginModal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.dismissRegister();
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
                    });

                  case 3:
                    loginModal = _context2.sent;
                    _context2.next = 6;
                    return loginModal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this2 = this;

          this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(function (data) {
            _this2.authService.login(form.value.email, form.value.password).subscribe(function (data) {}, function (error) {
              console.log(error);
            }, function () {
              _this2.dismissRegister();

              _this2.navCtrl.navigateRoot('/dashboard');
            });

            _this2.alertService.presentToast(data['message']);
          }, function (error) {
            console.log(error);
          }, function () {});
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/auth/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(toastController) {
        _classCallCheck(this, AlertService);

        this.toastController = toastController;
      }

      _createClass(AlertService, [{
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      position: 'top',
                      color: 'dark'
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./env.service */
    "./src/app/services/env.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, storage, env) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.storage = storage;
        this.env = env;
        this.isLoggedIn = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this3 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.env.API_URL + 'api/auth/login', {
            email: email,
            password: password
          }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
            _this3.storage.setItem('token', token).then(function () {
              console.log('Token Stored');
            }, function (error) {
              return console.error('Error storing item', error);
            });

            _this3.token = token;
            _this3.isLoggedIn = true;
            return token;
          }));
        }
      }, {
        key: "register",
        value: function register(fName, lName, email, password) {
          return this.http.post(this.env.API_URL + 'api/auth/register', {
            fName: fName,
            lName: lName,
            email: email,
            password: password
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(this.env.API_URL + 'api/auth/logout', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this4.storage.remove("token");

            _this4.isLoggedIn = false;
            delete _this4.token;
            return data;
          }));
        }
      }, {
        key: "user",
        value: function user() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(this.env.API_URL + 'api/auth/user', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            return user;
          }));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var _this5 = this;

          return this.storage.getItem('token').then(function (data) {
            _this5.token = data;

            if (_this5.token != null) {
              _this5.isLoggedIn = true;
            } else {
              _this5.isLoggedIn = false;
            }
          }, function (error) {
            _this5.token = null;
            _this5.isLoggedIn = false;
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
      }, {
        type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/env.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/env.service.ts ***!
    \*****************************************/

  /*! exports provided: EnvService */

  /***/
  function srcAppServicesEnvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvService", function () {
      return EnvService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EnvService = function EnvService() {
      _classCallCheck(this, EnvService);

      this.API_URL = 'http://api.pormibahia.org/';
    };

    EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EnvService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-auth-login-login-module~pages-auth-register-register-module~pages-landing-landing-module-es5.js.map
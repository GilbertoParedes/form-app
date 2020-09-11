function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>landing</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/shape.svg\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>JUNTOS POR NUESTRA BAHÍA</ion-card-subtitle>\n      <!-- <ion-card-title>POR MI BAHÍA</ion-card-title> -->\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" color=\"primary\" (click)=\"login()\">Login</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" color=\"danger\" (click)=\"register()\">Register</ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- <p>Starting point for Ionic 4 Application with Authentication.</p> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" color=\"primary\" (click)=\"login()\">Login</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" color=\"danger\" (click)=\"register()\">Register</ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/pages/landing/landing-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/landing/landing-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: LandingPageRoutingModule */

  /***/
  function srcAppPagesLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
      return LandingPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing.page */
    "./src/app/pages/landing/landing.page.ts");

    var routes = [{
      path: '',
      component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }];

    var LandingPageRoutingModule = function LandingPageRoutingModule() {
      _classCallCheck(this, LandingPageRoutingModule);
    };

    LandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LandingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/landing/landing.module.ts ***!
    \*************************************************/

  /*! exports provided: LandingPageModule */

  /***/
  function srcAppPagesLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
      return LandingPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./landing-routing.module */
    "./src/app/pages/landing/landing-routing.module.ts");
    /* harmony import */


    var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing.page */
    "./src/app/pages/landing/landing.page.ts");
    /* harmony import */


    var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/login/login.page */
    "./src/app/pages/auth/login/login.page.ts");
    /* harmony import */


    var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth/register/register.page */
    "./src/app/pages/auth/register/register.page.ts");

    var routes = [{
      path: '',
      component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }];

    var LandingPageModule = function LandingPageModule() {
      _classCallCheck(this, LandingPageModule);
    };

    LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]],
      declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"], _auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]],
      entryComponents: [_auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]]
    })], LandingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/landing/landing.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingLandingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/landing/landing.page.ts ***!
    \***********************************************/

  /*! exports provided: LandingPage */

  /***/
  function srcAppPagesLandingLandingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
      return LandingPage;
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


    var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/register/register.page */
    "./src/app/pages/auth/register/register.page.ts");
    /* harmony import */


    var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/login/login.page */
    "./src/app/pages/auth/login/login.page.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var LandingPage = /*#__PURE__*/function () {
      function LandingPage(modalController, menu, authService, navCtrl) {
        _classCallCheck(this, LandingPage);

        this.modalController = modalController;
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.menu.enable(false);
      }

      _createClass(LandingPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.authService.getToken().then(function () {
            if (_this.authService.isLoggedIn) {
              _this.navCtrl.navigateRoot('/dashboard');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var registerModal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                    });

                  case 2:
                    registerModal = _context.sent;
                    _context.next = 5;
                    return registerModal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loginModal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]
                    });

                  case 2:
                    loginModal = _context2.sent;
                    _context2.next = 5;
                    return loginModal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LandingPage;
    }();

    LandingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./landing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./landing.page.scss */
      "./src/app/pages/landing/landing.page.scss"))["default"]]
    })], LandingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-landing-module-es5.js.map
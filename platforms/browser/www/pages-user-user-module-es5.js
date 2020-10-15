function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"/dashboard\"></ion-back-button></ion-buttons>\n    <ion-title>user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"save(form)\" novalidate method=\"post\">\n    <ion-card-content>\n      <ion-button ion-button color=\"success\" icon-right expand=\"block\" (click)=\"takePicture()\">\n        <ion-icon name=\"camera-outline\"></ion-icon>  Tomar Foto INE\n      </ion-button>\n      <ion-img [src]=\"imageIne\"></ion-img>\n      <ion-input [ngModel]=\"imageIne\" type=\"hidden\" name=\"image\"></ion-input>\n    </ion-card-content>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Nombre:</ion-label>\n        <ion-input required [(ngModel)]=\"data.name\" #nameCtrl=\"ngModel\" type=\"text\" name=\"name\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Nombre requerido</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Apellido:</ion-label>\n        <ion-input required [(ngModel)]=\"data.apellido\" #nameCtrl=\"ngModel\" type=\"text\" name=\"apellido\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Apellido requerido</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Teléfono:</ion-label>\n        <ion-input ngModel type=\"tel\" name=\"telefono\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"7\">\n        <ion-item>\n          <ion-label color=\"primary\" position=\"floating\">Cel:</ion-label>\n          <ion-input required [(ngModel)]=\"data.cel\" #nameCtrl=\"ngModel\" type=\"tel\" name=\"celular\"></ion-input>\n        </ion-item>\n          <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n          <ion-text color=\"danger\">Celular requerido</ion-text>\n        </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n        <ion-item>\n          <ion-label>whatsapp</ion-label>\n          <ion-select [(ngModel)]=\"whatsapp\" name=\"whatsapp\" placeholder=\"Select One\">\n            <ion-select-option value=\"si\">Si</ion-select-option>\n            <ion-select-option value=\"no\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label>Sexo</ion-label>\n        <ion-select [(ngModel)]=\"selected_genero\" name=\"genero\" placeholder=\"Select One\">\n          <ion-select-option value=\"Mujer\">Mujer</ion-select-option>\n          <ion-select-option value=\"Hombre\">Hombre</ion-select-option>\n        </ion-select>\n      </ion-item>\n    <ion-item>\n      <ion-label>Estado Civil</ion-label>\n      <ion-select [(ngModel)]=\"selected_estado\" name=\"estado_civ\" placeholder=\"Select One\">\n        <ion-select-option value=\"soltero\">Solter@</ion-select-option>\n        <ion-select-option value=\"casado\">Casad@</ion-select-option>\n        <ion-select-option value=\"divorciado\">Divorciad@</ion-select-option>\n        <ion-select-option value=\"viudo\">Viud@</ion-select-option>\n      </ion-select>\n    </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"> Fecha de Nacimiento</ion-label> \n        <ion-datetime required [(ngModel)]=\"data.f_nacimiento\" #nameCtrl=\"ngModel\" name=\"f_nacimiento\" displayFormat=\"DD MMMM YYYY\"></ion-datetime>\n      </ion-item>\n      <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Fecha requerido</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Lugar nacimiento</ion-label>\n        <ion-input required [(ngModel)]=\"data.l_nacimiento\" #nameCtrl=\"ngModel\" type=\"text\" name=\"l_nacimiento\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Lugar requerido</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Casa propia</ion-label>\n        <ion-select [(ngModel)]=\"selected_casa\" name=\"casa_propia\" placeholder=\"Elige uno\">\n          <ion-select-option value=\"si\">Si</ion-select-option>\n          <ion-select-option value=\"no\">Rento</ion-select-option>\n          <ion-select-option value=\"no\">Prestada</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Tiempo viviendo</ion-label>\n        <ion-input required [(ngModel)]=\"data.tiempo_viviendo\" #nameCtrl=\"ngModel\" type=\"text\" name=\"tiempo_viviendo\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Campo requerido</ion-text>\n      </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Calle</ion-label>\n        <ion-input required [(ngModel)]=\"data.calle\" #nameCtrl=\"ngModel\" type=\"text\" name=\"calle\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Campo requerido</ion-text>\n    </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Colonia</ion-label>\n        <ion-input required [(ngModel)]=\"data.colonia\" #nameCtrl=\"ngModel\" type=\"text\" name=\"colonia\"></ion-input>\n      </ion-item>\n     <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\n        <ion-text color=\"danger\">Campo requerido</ion-text>\n      </ion-item> \n      <ion-item>\n        <ion-label>Dependientes menores de edad</ion-label>\n          <ion-select [(ngModel)]=\"SelectedDependientesMenores\" \n          name=\"dep_menores\"\n          placeholder=\"Select One\">\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf=\"SelectedDependientesMenores\">\n          <ion-label color=\"primary\" position=\"floating\">Cuantos y edades (separados por coma)</ion-label>\n          <ion-input ngModel type=\"text\" name=\"cant_menores\"></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-label>Dependientes tercera edad</ion-label>\n          <ion-select [(ngModel)]=\"SelectedDependientesMayores\" name=\"dep_mayores\" placeholder=\"Select One\">\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n      <ion-item *ngIf=\"SelectedDependientesMayores\">\n        <ion-label color=\"primary\" position=\"floating\">Cuantos y edades (separados por coma)</ion-label>\n        <ion-input ngModel type=\"text\" name=\"cant_mayores\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Comparten vivienda</ion-label>\n          <ion-select [(ngModel)]=\"SelectedCompartenVivienda\" name=\"vivienda_compartida\" placeholder=\"Select One\">\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n      <ion-item *ngIf=\"SelectedCompartenVivienda\">\n        <ion-label color=\"primary\" position=\"floating\">Cuantos</ion-label>\n        <ion-input ngModel type=\"string\" name=\"cant_viviendo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Facebook</ion-label>\n        <ion-input ngModel type=\"text\" name=\"facebook\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" expand=\"block\" color=\"primary\" [disabled]=\"!form.valid\">Guardar</ion-button>\n        </ion-col>\n      </ion-row>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/user/user-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/user/user-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppPagesUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/pages/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }, {
      path: 'list-user',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-user-list-user-module */
        "default~list-user-list-user-module~pages-user-list-user-list-user-module").then(__webpack_require__.bind(null,
        /*! ./list-user/list-user.module */
        "./src/app/pages/user/list-user/list-user.module.ts")).then(function (m) {
          return m.ListUserPageModule;
        });
      }
    }, {
      path: 'update',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | update-update-module */
        "update-update-module").then(__webpack_require__.bind(null,
        /*! ./update/update.module */
        "./src/app/pages/user/update/update.module.ts")).then(function (m) {
          return m.UpdatePageModule;
        });
      }
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/user/user.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/user/user.module.ts ***!
    \*******************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppPagesUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/pages/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/pages/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/pages/user/user.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/user/user.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/user/user.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/user/user.page.ts ***!
    \*****************************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppPagesUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_afiliado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/afiliado.service */
    "./src/app/services/afiliado.service.ts");
    /* harmony import */


    var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/env.service */
    "./src/app/services/env.service.ts");

    var UserPage = /*#__PURE__*/function () {
      function UserPage(camera, afiliadoService, env) {
        _classCallCheck(this, UserPage);

        this.camera = camera;
        this.afiliadoService = afiliadoService;
        this.env = env;
        this.imagePath = this.env.API_URL + 'storage/images/';
        this.isSubmitted = false;
        this.data = {
          name: '',
          apellido: '',
          cel: '',
          f_nacimiento: '',
          l_nacimiento: '',
          tiempo_viviendo: '',
          calle: '',
          colonia: ''
        };
      }

      _createClass(UserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "takePicture",
        value: function takePicture() {
          var _this = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imageIne = base64Image;
          }, function (err) {// Handle error
          });
        }
      }, {
        key: "save",
        value: function save(form) {
          this.isSubmitted = true; // console.log(form);

          this.afiliadoService.register(form.value);
        }
      }, {
        key: "noSubmit",
        value: function noSubmit(e) {
          e.preventDefault();
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _services_afiliado_service__WEBPACK_IMPORTED_MODULE_3__["AfiliadoService"]
      }, {
        type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
      }];
    };

    UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/pages/user/user.page.scss"))["default"]]
    })], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-user-user-module-es5.js.map
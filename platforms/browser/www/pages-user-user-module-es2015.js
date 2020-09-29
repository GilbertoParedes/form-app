(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"/dashboard\"></ion-back-button></ion-buttons>\n    <ion-title>user</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"save(form)\" method=\"post\">\n    <ion-card-content>\n      <ion-button ion-button color=\"success\" icon-right expand=\"block\" (click)=\"takePicture()\">\n        <ion-icon name=\"camera-outline\"></ion-icon>  Tomar Foto INE\n      </ion-button>\n      <ion-img [src]=\"imageIne\"></ion-img>\n      <ion-input [ngModel]=\"imageIne\" type=\"hidden\" name=\"image\"></ion-input>\n    </ion-card-content>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Nombre:</ion-label>\n        <ion-input ngModel type=\"text\" name=\"name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Apellido:</ion-label>\n        <ion-input ngModel type=\"text\" name=\"apellido\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Teléfono:</ion-label>\n        <ion-input ngModel type=\"tel\" name=\"telefono\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Sexo</ion-label>\n        <ion-select [(ngModel)]=\"selected_genero\" name=\"genero\" placeholder=\"Select One\">\n          <ion-select-option value=\"f\">Mujer</ion-select-option>\n          <ion-select-option value=\"m\">Hombre</ion-select-option>\n        </ion-select>\n      </ion-item>\n    <ion-item>\n      <ion-label>Estado Civil</ion-label>\n      <ion-select [(ngModel)]=\"selected_estado\" name=\"estado_civ\" placeholder=\"Select One\">\n        <ion-select-option value=\"soltero\">Solter@</ion-select-option>\n        <ion-select-option value=\"casado\">Casad@</ion-select-option>\n        <ion-select-option value=\"divorciado\">Divorciad@</ion-select-option>\n        <ion-select-option value=\"viudo\">Viud@</ion-select-option>\n      </ion-select>\n    </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"> Fecha de Nacimiento</ion-label> \n        <ion-datetime [(ngModel)]=\"fecha\" name=\"f_nacimiento\" displayFormat=\"DD MMMM YYYY\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Lugar nacimiento</ion-label>\n        <ion-input ngModel type=\"text\" name=\"l_nacimiento\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Casa propia</ion-label>\n        <ion-select [(ngModel)]=\"selected_casa\" name=\"casa_propia\" placeholder=\"Elige uno\">\n          <ion-select-option value=\"si\">Si</ion-select-option>\n          <ion-select-option value=\"no\">Rento</ion-select-option>\n          <ion-select-option value=\"no\">Prestada</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Tiempo viviendo</ion-label>\n        <ion-input ngModel type=\"number\" name=\"tiempo_viviendo\"></ion-input>\n      </ion-item>\n    <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Calle</ion-label>\n        <ion-input ngModel type=\"text\" name=\"calle\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"primary\" position=\"floating\">Colonia</ion-label>\n        <ion-input ngModel type=\"text\" name=\"colonia\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Dependientes menores de edad</ion-label>\n          <ion-select [(ngModel)]=\"SelectedDependientesMenores\" \n          name=\"dep_menores\"\n          placeholder=\"Select One\">\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf=\"SelectedDependientesMenores\">\n          <ion-label color=\"primary\" position=\"floating\">Cuantos y edades (separados por coma)</ion-label>\n          <ion-input ngModel type=\"text\" name=\"cant_menores\"></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-label>Dependientes tercera edad</ion-label>\n          <ion-select [(ngModel)]=\"SelectedDependientesMayores\" name=\"dep_mayores\" placeholder=\"Select One\">\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n      <ion-item *ngIf=\"SelectedDependientesMayores\">\n        <ion-label color=\"primary\" position=\"floating\">Cuantos y edades (separados por coma)</ion-label>\n        <ion-input ngModel type=\"text\" name=\"cant_mayores\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Comparten vivienda</ion-label>\n          <ion-select [(ngModel)]=\"SelectedCompartenVivienda\" name=\"vivienda_compartida\" placeholder=\"Select One\">\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n      <ion-item *ngIf=\"SelectedCompartenVivienda\">\n        <ion-label color=\"primary\" position=\"floating\">Cuantos</ion-label>\n        <ion-input ngModel type=\"number\" name=\"cant_viviendo\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" expand=\"block\" color=\"primary\">Guardar</ion-button>\n        </ion-col>\n      </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    },
    {
        path: 'list-user',
        loadChildren: () => __webpack_require__.e(/*! import() | list-user-list-user-module */ "list-user-list-user-module").then(__webpack_require__.bind(null, /*! ./list-user/list-user.module */ "./src/app/pages/user/list-user/list-user.module.ts")).then(m => m.ListUserPageModule)
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/pages/user/user-routing.module.ts");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");







let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_afiliado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/afiliado.service */ "./src/app/services/afiliado.service.ts");




let UserPage = class UserPage {
    constructor(camera, afiliadoService) {
        this.camera = camera;
        this.afiliadoService = afiliadoService;
    }
    ngOnInit() {
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imageIne = base64Image;
        }, (err) => {
            // Handle error
        });
    }
    save(form) {
        //console.log(form.value);
        this.afiliadoService.register(form.value);
    }
};
UserPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _services_afiliado_service__WEBPACK_IMPORTED_MODULE_3__["AfiliadoService"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")).default]
    })
], UserPage);



/***/ }),

/***/ "./src/app/services/afiliado.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/afiliado.service.ts ***!
  \**********************************************/
/*! exports provided: AfiliadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfiliadoService", function() { return AfiliadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let AfiliadoService = class AfiliadoService {
    constructor(http, storage, env, authService) {
        this.http = http;
        this.storage = storage;
        this.env = env;
        this.authService = authService;
        this.token = '';
    }
    register(form) {
        this.token = this.storage.getItem('token').then(token => {
            // let data = form['name'];
            this.token = token;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                'Authorization': this.token["token_type"] + " " + this.token["access_token"]
            });
            // name: form.value.name, apellido: form.value.apellido, telefono: form.value.telefono, genero: form.value.genero,
            //     image_ine: form.value.image, edo_civil: form.value.estado_civ, fecha_nacimiento: form.value.fecha,
            //     lugar_nacimiento: form.value.nacimiento, casa_propia: form.value.casa_propia
            return this.http.post(this.env.API_URL + 'api/auth/afiliados', { name: form['name'], apellido: form['apellido'],
                telefono: form['telefono'], sexo: form['genero'], image_ine: form['image'],
                estado_civil: form['estado_civ'], fecha_nacimiento: form['f_nacimiento'],
                lugar_nacimiento: form['l_nacimiento'], estado_vivienda: form['casa_propia'],
                tiempo_viviendo: form['tiempo_viviendo'], calle: form['calle'], colonia: form['colonia'],
                dep_menores: form['dep_menores'], dep_tercera_edad: form['dep_mayores'],
                vivienda_compartida: form['vivienda_compartida']
            }, { headers: headers }).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
        });
    }
};
AfiliadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AfiliadoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AfiliadoService);



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es2015.js.map
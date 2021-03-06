(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-update-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/update/update.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/update/update.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/list-user\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar Afiliado</ion-title>\n  </ion-toolbar>\n</ion-header>\n<form #form=\"ngForm\" (ngSubmit)=\"save(form)\" method=\"post\">\n  <ion-card-content>\n    <ion-button ion-button color=\"success\" icon-right expand=\"block\" (click)=\"takePicture()\">\n      <ion-icon name=\"camera-outline\"></ion-icon>  Tomar Foto INE\n    </ion-button>\n    <ion-img *ngIf=\"imageIne != ''\" [src]=\"imageIne\"></ion-img>\n    <ion-img *ngIf=\"imageIne==''\" src=\"{{imagePath+user.image_ine}}\"></ion-img>\n    <ion-input [ngModel]=\"imageIne\" type=\"hidden\" name=\"image\"></ion-input>\n  </ion-card-content>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Nombre:</ion-label>\n      <ion-input [ngModel]=\"user.name\" type=\"text\" name=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Apellido:</ion-label>\n      <ion-input [ngModel]=\"user.apellido\" type=\"text\" name=\"apellido\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Teléfono:</ion-label>\n      <ion-input [ngModel]=\"user.telefono\" type=\"tel\" name=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sexo</ion-label>\n      <ion-select [(ngModel)]=\"selected_genero\" name=\"genero\" placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Mujer</ion-select-option>\n        <ion-select-option value=\"m\">Hombre</ion-select-option>\n      </ion-select>\n    </ion-item>\n  <ion-item>\n    <ion-label>Estado Civil</ion-label>\n    <ion-select [(ngModel)]=\"selected_estado\" name=\"estado_civ\" placeholder=\"Select One\">\n      <ion-select-option value=\"soltero\">Solter@</ion-select-option>\n      <ion-select-option value=\"casado\">Casad@</ion-select-option>\n      <ion-select-option value=\"divorciado\">Divorciad@</ion-select-option>\n      <ion-select-option value=\"viudo\">Viud@</ion-select-option>\n    </ion-select>\n  </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\"> Fecha de Nacimiento</ion-label> \n      <ion-datetime displayFormat=\"DD MMMM YYYY\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Lugar nacimiento</ion-label>\n      <ion-input [ngModel]=\"user.lugar_nacimiento\" type=\"text\" name=\"l_nacimiento\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Casa propia</ion-label>\n      <ion-select [(ngModel)]=\"selected_casa\" name=\"casa_propia\" placeholder=\"Elige uno\">\n        <ion-select-option value=\"si\">Si</ion-select-option>\n        <ion-select-option value=\"no\">Rento</ion-select-option>\n        <ion-select-option value=\"no\">Prestada</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Tiempo viviendo</ion-label>\n      <ion-input [ngModel]=\"user.tiempo_viviendo\" type=\"number\" name=\"tiempo_viviendo\"></ion-input>\n    </ion-item>\n  <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Calle</ion-label>\n      <ion-input [ngModel]=\"user.calle\" type=\"text\" name=\"calle\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\" position=\"floating\">Colonia</ion-label>\n      <ion-input [ngModel]=\"user.colonia\" type=\"text\" name=\"colonia\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dependientes menores de edad</ion-label>\n        <ion-select [(ngModel)]=\"SelectedDependientesMenores\" \n        name=\"dep_menores\"\n        placeholder=\"Select One\">\n          <ion-select-option [value]=\"true\">Si</ion-select-option>\n          <ion-select-option [value]=\"false\">No</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf=\"SelectedDependientesMenores\">\n        <ion-label color=\"primary\" position=\"floating\">Cuantos y edades (separados por coma)</ion-label>\n        <ion-input ngModel type=\"text\" name=\"cant_menores\"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label>Dependientes tercera edad</ion-label>\n        <ion-select [(ngModel)]=\"SelectedDependientesMayores\" name=\"dep_mayores\" placeholder=\"Select One\">\n          <ion-select-option [value]=\"true\">Si</ion-select-option>\n          <ion-select-option [value]=\"false\">No</ion-select-option>\n        </ion-select>\n      </ion-item>\n    <ion-item *ngIf=\"SelectedDependientesMayores\">\n      <ion-label color=\"primary\" position=\"floating\">Cuantos y edades (separados por coma)</ion-label>\n      <ion-input ngModel type=\"text\" name=\"cant_mayores\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Comparten vivienda</ion-label>\n        <ion-select [(ngModel)]=\"SelectedCompartenVivienda\" name=\"vivienda_compartida\" placeholder=\"Select One\">\n          <ion-select-option [value]=\"true\">Si</ion-select-option>\n          <ion-select-option [value]=\"false\">No</ion-select-option>\n        </ion-select>\n      </ion-item>\n    <ion-item *ngIf=\"SelectedCompartenVivienda\">\n      <ion-label color=\"primary\" position=\"floating\">Cuantos</ion-label>\n      <ion-input ngModel type=\"number\" name=\"cant_viviendo\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button type=\"submit\" expand=\"block\" color=\"primary\">Guardar</ion-button>\n      </ion-col>\n    </ion-row>\n</form>\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/user/update/update-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user/update/update-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageRoutingModule", function() { return UpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.page */ "./src/app/pages/user/update/update.page.ts");




const routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_3__["UpdatePage"]
    }
];
let UpdatePageRoutingModule = class UpdatePageRoutingModule {
};
UpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user/update/update.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/user/update/update.module.ts ***!
  \****************************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-routing.module */ "./src/app/pages/user/update/update-routing.module.ts");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/pages/user/update/update.page.ts");







let UpdatePageModule = class UpdatePageModule {
};
UpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _update_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatePageRoutingModule"]
        ],
        declarations: [_update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]]
    })
], UpdatePageModule);



/***/ }),

/***/ "./src/app/pages/user/update/update.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/user/update/update.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user/update/update.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/user/update/update.page.ts ***!
  \**************************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");




let UpdatePage = class UpdatePage {
    constructor(router, route, camera) {
        this.router = router;
        this.route = route;
        this.camera = camera;
        this.user = {};
        this.imageIne = '';
        this.imagePath = 'http://apiform.test/storage/images/';
    }
    ngOnInit() {
        if (this.router.getCurrentNavigation().extras.state) {
            const state = this.router.getCurrentNavigation().extras.state;
            this.user = JSON.parse(state.user);
        }
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
};
UpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }
];
UpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/update/update.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update.page.scss */ "./src/app/pages/user/update/update.page.scss")).default]
    })
], UpdatePage);



/***/ })

}]);
//# sourceMappingURL=update-update-module-es2015.js.map
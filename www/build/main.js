webpackJsonp([6],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjustesPage = /** @class */ (function () {
    function AjustesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjustesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjustesPage');
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajustes',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\ajustes\ajustes.html"*/'<!--\n\n  Generated template for the AjustesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <!--<ion-icon name="menu"></ion-icon>-->\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>Ajustes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div style="text-align: center;" padding>\n\n      <p style="margin: 0px; font-size:12px; color: #11a13c;">Configuracion de notificaciones</p>\n\n    </div> \n\n\n\n    <ion-list>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Todas las notificaciones\n\n            <p>Notificaciones en barra de estado están desactivadas</p>    \n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;        \n\n          </div>\n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Mensajes de chat\n\n            <p>Notificaciones de nuevos mensajes de chat activados</p>\n\n          </div>\n\n          <div item-end >\n\n          <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Notificaciones\n\n            <p >Notificaciones de eventos en la barra de estado</p>\n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Notificaciones de Alertas\n\n            <p>Notificaciones de alertas  programadas</p>\n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n\n\n        <div style="text-align: center;" >\n\n          <p style="margin: 0px; font-size:12px; color: #11a13c;">Configuracion del mapa</p>\n\n        </div> \n\n\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Etiquetas de vehiculos\n\n            <p>Nombre de vehiculo o placa en el mapa</p>\n\n          </div>\n\n          <div item-end >\n\n          <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Icono de vehiculos\n\n            <p>Icono de vehiculo en el mapa</p>\n\n          </div>\n\n          <div item-end >\n\n              <ion-checkbox ></ion-checkbox>&nbsp;  \n\n          </div>\n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Punto de interes\n\n            <p>Mostrar puntos de interes creados en el mapa</p>\n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>\n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Clientes\n\n            <p>Mostrar puntos de interes de clientes creados en el mapa</p>\n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Geocercas<br>\n\n            <p>Geocercas creadas en el mapa</p> \n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n        <hr>\n\n        <ion-item no-lines center>         \n\n          <div class="alinearDiv" item-start>\n\n              Zonas prihibidas<br>\n\n            <p>Mostrar Zonas prohibidas en el mapa</p> \n\n          </div>\n\n          <div item-end >\n\n            <ion-checkbox ></ion-checkbox>&nbsp;\n\n          </div>        \n\n        </ion-item>\n\n        <hr>\n\n      </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\ajustes\ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleRastreadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalleRastreadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleRastreadorPage = /** @class */ (function () {
    function DetalleRastreadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetalleRastreadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleRastreadorPage');
    };
    DetalleRastreadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-rastreador',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\detalle-rastreador\detalle-rastreador.html"*/'<!--\n\n  Generated template for the DetalleRastreadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <!--<ion-icon name="menu"></ion-icon>-->\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>Detalle Rastreador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color:aliceblue">\n\n\n\n       \n\n      <!--<ion-card>\n\n        <ion-card-header>\n\n          <p>Card Subtitle</p>\n\n          <ion-card-title>Card Title</ion-card-title>\n\n        </ion-card-header>\n\n      \n\n        <ion-card-content>\n\n          Keep close to Nature\'s heart... and break clear away, once in awhile,\n\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\n\n        </ion-card-content>\n\n      </ion-card>-->\n\n\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Ubicacion\n\n          <!--<ion-card-title>Ubicacion</ion-card-title>-->\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n            <ion-grid style=" padding:0!important;">         \n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="timer" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Actualizado a: 3/11/2018 7:58:20 AM</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="locate" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Latitud: 55.74566 Longitud: 37.84645</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="hand" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Estacionado por 8 horas 7 minutos</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                    <ion-col col-2 class="iconos">\n\n                      <ion-icon name="pin" ></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col  col-10>\n\n                      <p class="texto"> Avenida Juan Aberle,Mejicanos,Sann\n\n                          Salvador,San Salvador,El Salvador</p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n            </ion-grid>\n\n\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card padding>\n\n          \n\n          <ion-card-content>\n\n\n\n              <ion-grid style=" padding:0!important;">\n\n                <ion-row style="padding-bottom: 0px; padding-top: 0%;">      \n\n                  <ion-col col-7 >\n\n                      <h2>Vehiculo</h2>\n\n                  </ion-col>\n\n                  <ion-col  col-5>\n\n                      <img src="../../assets/imgs/car.png">\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="md-car" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Placa: P45252</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="logo-markdown" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Marca: NISSAN PICK UP</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="barcode" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Modelo: N/D 4X2</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="calendar" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Año: 2005</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                \n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="color-palette" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Color: Gris Claro Metalico</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="card" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Vin: none</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="pin" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Chasis: none</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="nuclear" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Motor: none</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n\n\n              </ion-grid>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n          \n\n          <ion-card-content>\n\n              <ion-grid > \n\n                \n\n                <ion-row style="padding-bottom: 0px; padding-top: 0%;">      \n\n                  <ion-col col-7>\n\n                      <h2>Conductor</h2>\n\n                      \n\n                  </ion-col>\n\n                  <ion-col  col-5>\n\n                      <img src="../../assets/imgs/usr.png">\n\n      \n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="person" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Nombre: Villalobos</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="calendar" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> F_Nacimiento: 21/12/1988</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon class="fa fa-address-card"></ion-icon>\n\n                   \n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Dui: 00000000-0</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon class="fas fa-money-check"  ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Licencia: 0000-000000-000-0</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="timer" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-10>\n\n                    <p class="texto"> Tipo licencia: Pesada</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n          <ion-card-header>\n\n            Sensores\n\n          </ion-card-header>\n\n            <ion-grid style=" padding:0!important;">         \n\n              <ion-row style="padding-bottom: 2rem;">      \n\n                <ion-col style="text-align:center" col-3>\n\n                  <ion-icon  class="fas fa-temperature-high iconos" ></ion-icon>\n\n                  <p >Temp 1</p>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <p class="texto"> 29.5 °C</p>\n\n                </ion-col>\n\n                <ion-col style="text-align:center; " col-3>\n\n                    <ion-icon class="fas fa-temperature-high iconos"></ion-icon>\n\n                    <p>Temp 2</p>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    <p class="texto"> 67.8 °C</p>\n\n                  </ion-col>\n\n              </ion-row>\n\n                  \n\n              <ion-row style="padding-bottom: 2rem;">      \n\n                <ion-col style="text-align:center" col-3>\n\n                  <ion-icon  class="fas fa-gas-pump iconos" ></ion-icon>\n\n                  <p >Gas</p>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <p class="texto"> 5 Gal</p>\n\n                </ion-col>\n\n                <ion-col style="text-align:center" col-3>\n\n                    <ion-icon name="speedometer" class="iconos"></ion-icon>\n\n                    <p>Odometro</p>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    <p class="texto"> 111000K</p>\n\n                  </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row>      \n\n                  <ion-col style="text-align:center" col-3>\n\n                    <ion-icon  class="fas fa-car-battery iconos" ></ion-icon>\n\n                    <p >Bateria</p>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    <p class="texto"> 4.16 v</p>\n\n                  </ion-col>\n\n                  <ion-col style="text-align:center" col-3>\n\n                      \n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                      \n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n          <ion-card-header>\n\n            Comandos\n\n          </ion-card-header>\n\n            <ion-grid>\n\n                <ion-row>      \n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-icon name="key" ></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col  col-8>\n\n                    <p class="texto"> Nombre: Villalobos</p>\n\n                  </ion-col>\n\n                  <ion-col col-2 class="iconos">\n\n                    <ion-toggle checked></ion-toggle>                                                                                                                                                                                                                                                                                 \n\n                  </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-row>      \n\n                    <ion-col col-2 class="iconos">\n\n                      <ion-icon name="key" ></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col  col-8>\n\n                      <p class="texto"> Nombre: Villalobos</p>\n\n                    </ion-col>\n\n                    <ion-col col-2 class="iconos">\n\n                      <ion-toggle checked></ion-toggle>                                                                                                                                                                                                                                                                                 \n\n                    </ion-col>\n\n                  </ion-row>\n\n            </ion-grid>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n          <ion-card-header>\n\n              Video abordo\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <ion-item center>\n\n                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZNubH193xbs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>\n\n              </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\detalle-rastreador\detalle-rastreador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetalleRastreadorPage);
    return DetalleRastreadorPage;
}());

//# sourceMappingURL=detalle-rastreador.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SeguimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeguimientoPage = /** @class */ (function () {
    function SeguimientoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SeguimientoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeguimientoPage');
    };
    SeguimientoPage.prototype.ma = function () {
        console.log('***********CORRIENDO SeguimientoPage***************');
        var packageUrl = 'https://raw.githubusercontent.com/openlayers/openlayers.github.io/build/package.json';
        fetch(packageUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            var latestVersion = json.version;
            document.getElementById('latest-version').innerHTML = latestVersion;
            var url = window.location.href;
            var branchSearch = url.match(/\/([^\/]*)\/examples\//);
            var cookieText = 'dismissed=-' + latestVersion + '-';
            var dismissed = document.cookie.indexOf(cookieText) != -1;
            if (branchSearch && !dismissed && /^v[0-9\.]*$/.test(branchSearch[1]) && '5.3.0' != latestVersion) {
                var link = url.replace(branchSearch[0], '/latest/examples/');
                fetch(link, { method: 'head' }).then(function (response) {
                    var a = document.getElementById('latest-link');
                });
                var latestCheck = document.getElementById('latest-check');
                latestCheck.style.display = '';
                document.getElementById('latest-dismiss').onclick = function () {
                    latestCheck.style.display = 'none';
                    document.cookie = cookieText;
                };
            }
        });
    };
    SeguimientoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seguimiento',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\seguimiento\seguimiento.html"*/'<!--\n\n  Generated template for the SeguimientoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<script>\n\n    window.dataLayer = window.dataLayer || [];\n\n    function gtag(){dataLayer.push(arguments);}\n\n    gtag(\'js\', new Date());\n\n    gtag(\'config\', \'UA-2577926-1\');\n\n</script>\n\n  \n\n  \n\n\n\n   \n\n\n\n\n\n<ion-header>\n\n\n\n    <meta charset="UTF-8">\n\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge">\n\n    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">\n\n    <link rel="stylesheet" href="../../assets/ol5/examples/css/ol.css" type="text/css">\n\n    <link rel="stylesheet" href="../../assets/ol5/examples/resources/layout.css" type="text/css">\n\n  \n\n      <ion-navbar>\n\n    <ion-title>seguimiento</ion-title>\n\n    <button ion-button menuToggle>MENU</button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   \n\n    \n\n    \n\n        \n\n    \n\n        <div class="container-fluid">\n\n    \n\n          <div id="latest-check" class="alert alert-warning alert-dismissible" role="alert" style="display:none">\n\n            <button id="latest-dismiss" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\n            This example uses OpenLayers v<span>5.3.0</span>. The <a id="latest-link" href="#" class="alert-link">latest</a> is v<span id="latest-version"></span>.\n\n          </div>\n\n    \n\n          <div class="row-fluid">\n\n            <div class="span12">\n\n              <h4 id="title">Accessible Map</h4>\n\n              <a class="skiplink" href="#map">Go to map</a>\n\n    \n\n    \n\n    \n\n    <div id="map" class="map" tabindex="0"></div>\n\n    <button id="zoom-out">Zoom out</button>\n\n    <button id="zoom-in">Zoom in</button>\n\n    <button ion-button (click)="ma()">OL</button>\n\n    \n\n            </div>\n\n          </div>\n\n    \n\n          \n\n    \n\n        <script src="../../assets/ol5/examples/resources/common.js"></script>\n\n        <script src="../../assets/ol5/examples/resources/prism/prism.min.js"></script>\n\n        <script src="../../assets/ol5/examples/common.js"></script><script src="../../assets/ol5/examples/accessible.js"></script>\n\n      \n\n\n\n      </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\seguimiento\seguimiento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SeguimientoPage);
    return SeguimientoPage;
}());

//# sourceMappingURL=seguimiento.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ol } from '../../assets/ol5/build/ol.js';
//import { ol } from 'ol';
//import { Map } from 'ol/Map';
//import { View } from 'ol/View';
//import { TileLayer } from 'ol/layer/Tile';
//import { XYZ } from 'ol/source/OSM';
/**
 * Generated class for the RecuperarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperarPage = /** @class */ (function () {
    function RecuperarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecuperarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperarPage');
    };
    RecuperarPage.prototype.refreshPage = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    RecuperarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recuperar',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\recuperar\recuperar.html"*/'<!--\n\n  Generated template for the RecuperarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n  \n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus \n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n  -->\n\n\n\n\n\n<br><br>\n\n<ion-content>\n\n    <meta charset="utf-8">\n\n    <!--<link rel="stylesheet" href="../../assets/ol5/css/ol.css" type="text/css" />-->\n\n\n\n    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>\n\n\n\n\n\n    <button ion-button menuToggle>MENU</button>\n\n    <button ion-button >OL</button>\n\n    <button ion-button (click)="refreshPage()">ref</button>\n\n    <style>\n\n      #map {\n\n        width: 100%;\n\n        height: 100%;\n\n      }\n\n    </style>\n\n    <div id="map" class="map"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\recuperar\recuperar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RecuperarPage);
    return RecuperarPage;
}());

//# sourceMappingURL=recuperar.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajustes/ajustes.module": [
		275,
		5
	],
	"../pages/detalle-rastreador/detalle-rastreador.module": [
		276,
		4
	],
	"../pages/ingresar/ingresar.module": [
		277,
		3
	],
	"../pages/login/login.module": [
		278,
		2
	],
	"../pages/recuperar/recuperar.module": [
		280,
		1
	],
	"../pages/seguimiento/seguimiento.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mensajes = false;
        this.recorrido = true;
        this.eventos = false;
    }
    HomePage.prototype.show = function (ver) {
        switch (ver) {
            case 'mensajes':
                if (this.mensajes == true) {
                    this.mensajes = false;
                    this.recorrido = false;
                    this.eventos = false;
                }
                else {
                    this.mensajes = true;
                    this.recorrido = false;
                    this.eventos = false;
                }
                break;
            case 'recorrido':
                if (this.recorrido == true) {
                    this.mensajes = false;
                    this.recorrido = false;
                    this.eventos = false;
                }
                else {
                    this.mensajes = false;
                    this.recorrido = true;
                    this.eventos = false;
                }
                break;
            case 'eventos':
                if (this.eventos == true) {
                    this.mensajes = false;
                    this.recorrido = false;
                    this.eventos = false;
                }
                else {
                    this.mensajes = false;
                    this.recorrido = false;
                    this.eventos = true;
                }
                break;
            default:
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n     \n\n      <ion-grid >\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-6 class="text-menu-headder">\n\n              <strong style="color: white;">Menu</strong>\n\n            </ion-col>\n\n           \n\n            <ion-col col-2>\n\n                \n\n            </ion-col>\n\n            <ion-col col-2>\n\n             \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n  </ion-toolbar>\n\n    \n\n\n\n    <ion-grid hidden>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <p style="color: white;" center>Ma...</p>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n            <ion-item color="primary" no-lines center (click)="show(\'mensajes\')">\n\n              <ion-icon name="information-circle"></ion-icon>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-item color="primary" no-lines center (click)="show(\'eventos\')">\n\n              <ion-icon class="fas fa-map-marker-alt"></ion-icon>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n            <ion-item color="primary" no-lines center (click)="show(\'recorrido\')">\n\n              <ion-icon class="fas fa-route"></ion-icon>\n\n            </ion-item>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <ion-item color="primary" no-lines style="float: left;" (click)="show(\'mensajes\')">\n\n              <ion-icon name="mail"></ion-icon>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div id="map" class="map" style="position: absolute"></div>\n\n  <ion-grid style="position: relative;">   \n\n    <ion-row class="right-menu" id="mensajes" *ngIf="mensajes">\n\n      <ion-col >\n\n        <br>\n\n        <strong>\n\n          Mensajes\n\n        </strong>\n\n        <hr>\n\n        <button ion-item >\n\n            <ion-icon name="mail" item-start></ion-icon>        \n\n            <div class="item-note" >\n\n                mensaje 1\n\n            </div>\n\n          </button>\n\n          <button ion-item >\n\n            <ion-icon name="mail" item-start></ion-icon>        \n\n            <div class="item-note" >\n\n              mensaje 2\n\n            </div>\n\n          </button>\n\n          <button ion-item menuToggle (click)="iraAjustes()">\n\n              <ion-icon name="mail" item-start></ion-icon>        \n\n              <div class="item-note" >\n\n                mensaje 3\n\n              </div>\n\n            </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row class="carSlider" *ngIf="recorrido" >\n\n      <ion-slides >\n\n        <ion-slide>\n\n          <ion-grid >\n\n            <ion-row class="info-slider">\n\n              <ion-col col-1 class="text-menu-headder">\n\n                  <ion-icon class="fas fa-angle-left"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <ion-row style="overflow: hidden;">\n\n                  <ion-col col-10 class="info-slider">\n\n                    <ion-icon name="paper-plane" color="grey"></ion-icon>\n\n                    <strong> P45252 Villalobos</strong>\n\n                  </ion-col>\n\n                  \n\n                  <ion-col col-2 style="vertical-align: middle; text-align: center; padding:0!important; margin:0!important;">\n\n                      <ion-icon item-end style="text-align: center; font-size: 4vw;" name="ios-speedometer" color="musk"></ion-icon>\n\n                    <br><p class="estado_car">24km/h</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <ion-col col-1>\n\n                    <ion-icon name="pin" color="danger"></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col col-10>\n\n                    <p>Avenida Juan Aberle, Mejicanos San Salvador, San Salvador El Salvador</p>\n\n                  </ion-col>\n\n                  <ion-col col-1></ion-col>\n\n                </ion-row>\n\n              </ion-col>\n\n              <ion-col col-1 class="text-menu-headder">\n\n                  <ion-icon class="fas fa-angle-right" ></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row style="padding:0;">\n\n              <ion-col col-3></ion-col>\n\n              <ion-col col-8 class="info-slider" style="padding:0;"><p style="float:center;">Actualizado a 19/03/2019 10:24am</p></ion-col>\n\n              <ion-col col-1 class="info-slider"><p style="float:left; margin-top: 0;">1-3</p></ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n            <ion-grid >\n\n              <ion-row class="info-slider">\n\n                <ion-col col-1 class="text-menu-headder">\n\n                    <ion-icon class="fas fa-angle-left"></ion-icon>\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                  <ion-row style="overflow: hidden;">\n\n                    <ion-col col-10 class="info-slider">\n\n                      <ion-icon name="paper-plane" color="grey"></ion-icon>\n\n                      <strong> AB8489 Cisneros</strong>\n\n                    </ion-col>\n\n                    \n\n                    <ion-col col-2 style="vertical-align: middle; text-align: center; padding:0!important; margin:0!important;">\n\n                        <ion-icon item-end style="text-align: center; font-size: 4vw;" name="ios-speedometer" color="danger"></ion-icon>\n\n                      <br><p class="estado_car">Stop</p>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-1>\n\n                      <ion-icon name="pin" color="danger"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col col-10>\n\n                      <p>Avenida Juan Aberle, Mejicanos San Salvador, San Salvador El Salvador</p>\n\n                    </ion-col>\n\n                    <ion-col col-1></ion-col>\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-1 class="text-menu-headder">\n\n                    <ion-icon class="fas fa-angle-right" ></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row style="padding:0;">\n\n                <ion-col col-3></ion-col>\n\n                <ion-col col-8 class="info-slider" style="padding:0;"><p style="float:center;">Actualizado a 19/03/2019 10:24am</p></ion-col>\n\n                <ion-col col-1 class="info-slider"><p style="float:left; margin-top: 0;">2-3</p></ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-slide>\n\n        \n\n          <ion-slide>\n\n              <ion-grid >\n\n                <ion-row class="info-slider">\n\n                  <ion-col col-1 class="text-menu-headder">\n\n                      <ion-icon class="fas fa-angle-left"></ion-icon>\n\n                  </ion-col>\n\n                  <ion-col col-10>\n\n                    <ion-row style="overflow: hidden;">\n\n                      <ion-col col-10 class="info-slider">\n\n                        <ion-icon name="paper-plane" color="grey"></ion-icon>\n\n                        <strong> P489852 CAMION</strong>\n\n                      </ion-col>\n\n                      \n\n                      <ion-col col-2 style="vertical-align: middle; text-align: center; padding:0!important; margin:0!important;">\n\n                          <ion-icon item-end style="text-align: center; font-size: 4vw;" name="ios-speedometer" color="musk"></ion-icon>\n\n                        <br><p class="estado_car">83km/h</p>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                      <ion-col col-1>\n\n                        <ion-icon name="pin" color="danger"></ion-icon>\n\n                      </ion-col>\n\n                      <ion-col col-10>\n\n                        <p>Avenida Juan Aberle, Mejicanos San Salvador, San Salvador El Salvador</p>\n\n                      </ion-col>\n\n                      <ion-col col-1></ion-col>\n\n                    </ion-row>\n\n                  </ion-col>\n\n                  <ion-col col-1 class="text-menu-headder">\n\n                      <ion-icon class="fas fa-angle-right" ></ion-icon>\n\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row style="padding:0;">\n\n                  <ion-col col-3></ion-col>\n\n                  <ion-col col-8 class="info-slider" style="padding:0;"><p style="float:center;">Actualizado a 19/03/2019 10:24am</p></ion-col>\n\n                  <ion-col col-1 class="info-slider"><p style="float:left; margin-top: 0;">3-3</p></ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-slide>\n\n        \n\n      </ion-slides>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['md-boat', 'md-bus', 'ios-bus', 'ios-bus-outline', 'md-car', 'ios-car-outline', 'ios-car', 'jet'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Vehiculo',
                note: 'Equipo-' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\list\list.html"*/'<ion-header>\n\n  \n\n  \n\n    <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-toolbar color="primary">\n\n      <div>\n\n          <ion-searchbar animated="true"\n\n          [(ngModel)]="myInput"\n\n          [showCancelButton]="shouldShowCancel"\n\n          (ionInput)="onInput($event)"\n\n          (ionCancel)="onCancel($event)"\n\n          placeholder="Vehiculos">\n\n        </ion-searchbar>      \n\n      </div>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n  \n\n\n\n\n\n      \n\n    \n\n  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start ></ion-icon>\n\n      <!--{{item.title}}-->PLACA\n\n      <div class="item-note" >\n\n        {{item.note}}\n\n      </div>\n\n      <div item-end style="text-align: center;">\n\n          <ion-icon name="ios-speedometer" color="musk"></ion-icon>\n\n          <p>23km/h</p>\n\n      </div>\n\n      \n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recuperar_recuperar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detalle_rastreador_detalle_rastreador__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_seguimiento_seguimiento__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ingresar_ingresar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
*/











/*
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(this.http, './assets/i18n/', '.json');
}
*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recuperar_recuperar__["a" /* RecuperarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalle_rastreador_detalle_rastreador__["a" /* DetalleRastreadorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_seguimiento_seguimiento__["a" /* SeguimientoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ingresar_ingresar__["a" /* IngresarPage */]
            ],
            imports: [
                /*TranslateModule.forRoot(
                  {
                    loader: {
                      provide: TranslateLoader,
                      useFactory: (createTranslateLoader),
                      deps: [Http]
                    }
                  }
                ),*/
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-rastreador/detalle-rastreador.module#DetalleRastreadorPageModule', name: 'DetalleRastreadorPage', segment: 'detalle-rastreador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingresar/ingresar.module#IngresarPageModule', name: 'IngresarPage', segment: 'ingresar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seguimiento/seguimiento.module#SeguimientoPageModule', name: 'SeguimientoPage', segment: 'seguimiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar/recuperar.module#RecuperarPageModule', name: 'RecuperarPage', segment: 'recuperar', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recuperar_recuperar__["a" /* RecuperarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detalle_rastreador_detalle_rastreador__["a" /* DetalleRastreadorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ingresar_ingresar__["a" /* IngresarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_seguimiento_seguimiento__["a" /* SeguimientoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recuperar_recuperar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detalle_rastreador_detalle_rastreador__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_seguimiento_seguimiento__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ingresar_ingresar__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NavController } from 'ionic-angular';
//*********************************************** */
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { HttpModule, Http } from '@angular/http';








var MyApp = /** @class */ (function () {
    function MyApp(/*public navCtrl: NavController,*/ platform, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        //se define un rootPage para darle uso al NavController
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        //arreglo con datos quemados
        this.datos_quemados = [
            { nombre: 'Equipo1', placa: '1', estado: 'stop', seleccionado: true },
            { nombre: 'Nombre Del Equipo2', placa: '2', estado: '27 km/h', seleccionado: true },
            { nombre: 'Nombre Del Equipo3', placa: '3', estado: '85 km/h', seleccionado: true },
            { nombre: 'Nombre Del Equipo4', placa: '4', estado: 'neutro', seleccionado: true },
            { nombre: 'Nombre Del Equipo5', placa: '5', estado: '39 km/h', seleccionado: true },
            { nombre: 'Nombre Del Equipo6', placa: '6', estado: 'stop', seleccionado: true },
            { nombre: 'Nombre Del Equipo7', placa: '7', estado: '90 km/h', seleccionado: true },
            { nombre: 'Nombre Del Equipo8', placa: '8', estado: '64 km/h', seleccionado: true },
        ];
        this.verCasa = false;
        this.verOfi = false;
        this.filtros = false;
        this.buscar_vehiculos = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            { title: 'Recuperar', component: __WEBPACK_IMPORTED_MODULE_7__pages_recuperar_recuperar__["a" /* RecuperarPage */] },
            { title: 'Ajustes', component: __WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__["a" /* AjustesPage */] },
            { title: 'Detalle-Rastreador', component: __WEBPACK_IMPORTED_MODULE_9__pages_detalle_rastreador_detalle_rastreador__["a" /* DetalleRastreadorPage */] },
            { title: 'Seguimiento', component: __WEBPACK_IMPORTED_MODULE_10__pages_seguimiento_seguimiento__["a" /* SeguimientoPage */] },
            { title: 'Ingresar', component: __WEBPACK_IMPORTED_MODULE_11__pages_ingresar_ingresar__["a" /* IngresarPage */] }
        ];
        this.carros();
    }
    //Func carros cambia el valor del array con los valores de los vehiculos a mostrar en menu.
    MyApp.prototype.carros = function () {
        this.ar_car = [];
        for (var _i = 0, _a = this.datos_quemados; _i < _a.length; _i++) {
            var i = _a[_i];
            this.ar_car.push({
                nombre: i.nombre,
                placa: '000-0' + i.placa,
                estado: i.estado,
                seleccionado: i.seleccionado
            });
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.show;
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.iraLogin = function () {
        //console.log("Prueba"); 
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.iraMapa = function () {
        //console.log("Prueba"); 
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.iraAjustes = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_ajustes_ajustes__["a" /* AjustesPage */]);
    };
    MyApp.prototype.iraDetRastreador = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_detalle_rastreador_detalle_rastreador__["a" /* DetalleRastreadorPage */]);
    };
    MyApp.prototype.show = function (ver) {
        switch (ver) {
            case 'filtros':
                if (this.filtros == true) {
                    this.filtros = false;
                }
                else {
                    this.filtros = true;
                }
                break;
            case 'buscar_vehiculos':
                if (this.buscar_vehiculos == true) {
                    this.buscar_vehiculos = false;
                }
                else {
                    this.buscar_vehiculos = true;
                }
                break;
            case 'verOfi':
                if (this.verOfi == true) {
                    this.verOfi = false;
                }
                else {
                    this.verOfi = true;
                }
                break;
            case 'verCasa':
                if (this.verCasa == true) {
                    this.verCasa = false;
                }
                else {
                    this.verCasa = true;
                }
                break;
            default:
                break;
        }
    };
    MyApp.prototype.alerta = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('Seleccione Grupos de Vehiculos');
        alert.addInput({
            type: 'checkbox',
            label: 'Oficina',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Casa',
            value: 'value2'
        });
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'Hecho',
            handler: function (data) {
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header >\n\n    <ion-toolbar color="primary">\n\n      <ion-title>Menu</ion-title>\n\n      \n\n    </ion-toolbar>\n\n    \n\n  </ion-header> \n\n\n\n\n\n  \n\n  <ion-content >\n\n      \n\n      \n\n      <!--<button color="primary" menuToggle (click)="iraDetRastreador()" hidden>\n\n          PROBAR\n\n        </button>\n\n        <button color="primary" menuToggle (click)="iraMapa()">\n\n          PROBAR\n\n        </button>-->\n\n\n\n    <ion-list>\n\n        \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3 >\n\n            <img no-lines src="../../assets/imgs/logoUbica.JPG">\n\n          </ion-col>\n\n          <ion-col col-9 class="info-usuario" >\n\n              <strong>Id: </strong><p> &nbsp;Guillermo Contreras</p>\n\n              <strong>Empresa:</strong><p>&nbsp;SV00-Ubica GPS El Salvador</p>\n\n              <p>03/19/2018 03:10PM</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n        \n\n      <button  class="accordion" (click)="show(\'filtros\')" hidden>\n\n        <div item-start style="background-color: rgba(224, 19, 19, 0.904); float: left;">&nbsp; &nbsp;</div>\n\n        &nbsp; Filtrar\n\n      </button>\n\n      \n\n      <ion-grid style="vertical-align: middle; padding:0!important;" *ngIf="filtros">\n\n          <ion-row color="primary" style="padding:1px !important; margin:1px; ">      \n\n              <div style="vertical-align: middle; padding:0!important;" col-6 color="primary" no-lines>\n\n                  <ion-label style="float: left">\n\n                    <ion-checkbox ></ion-checkbox>&nbsp; todos\n\n                  </ion-label>\n\n                  \n\n                </div>\n\n              <div col-3 (click)="show(\'buscar_vehiculos\')" style="vertical-align: middle; padding:0!important;">\n\n                  <button ion-button>\n\n                      <ion-icon name="ios-search-outline"></ion-icon>\n\n                  </button>\n\n                </div>\n\n              \n\n              <div col-3 style="vertical-align: middle; padding:0!important; margin:0!important;">\n\n                  <button ion-button (click)="alerta()">\n\n                      <ion-icon name="ios-funnel-outline" ></ion-icon>\n\n                  </button>\n\n                </div>\n\n              \n\n          </ion-row>\n\n          <ion-toolbar *ngIf="buscar_vehiculos" color="primary" style="padding:0;">\n\n              <ion-searchbar animated="true"\n\n                [(ngModel)]="myInput"\n\n                [showCancelButton]="shouldShowCancel"\n\n                (ionInput)="onInput($event)"\n\n                (ionCancel)="onCancel($event)"\n\n                placeholder="Vehiculos"\n\n                > \n\n              </ion-searchbar>\n\n            </ion-toolbar>\n\n        </ion-grid>     \n\n\n\n        \n\n            \n\n            \n\n      \n\n\n\n        \n\n\n\n      <button (click)="show(\'verOfi\')" class="accordion" >\n\n        <div item-start style="background-color: green; float: left;">&nbsp; &nbsp;</div>\n\n        &nbsp; Oficina</button>\n\n      \n\n      <!--despliego los vehiculos en el grupo oficina con *ngIf-->\n\n      <div *ngIf="verOfi">\n\n        <hr>\n\n          <ion-grid style="vertical-align: middle; padding:0!important;">\n\n              <ion-row menuToggle color="primary" style="padding:1px !important; vertical-align: middle; margin-top: 1px;; " *ngFor="let c of ar_car" >      \n\n                  <div style="vertical-align: middle; padding:0!important;" col-2 color="primary" no-lines>\n\n                        <ion-checkbox ></ion-checkbox>&nbsp; \n\n                  </div>\n\n                  <div  col-7 style="vertical-align: middle; padding:0!important;" (click)="iraMapa()">\n\n                      <!--{{c.placa}}--> \n\n                      {{c.nombre}}\n\n                      \n\n                    </div>\n\n                  \n\n                  <div col-3 style="vertical-align: middle; text-align: center; padding:0!important; margin:0!important;">\n\n                      <ion-icon item-end style="text-align: center;" name="ios-speedometer" color="musk"></ion-icon>\n\n                    <br><strong class="estado_car">{{c.estado}}</strong>\n\n                    </div>\n\n                    \n\n              </ion-row>\n\n            </ion-grid> \n\n      </div>\n\n          \n\n      <button (click)="show(\'verCasa\')" class="accordion" no-lines hidden>\n\n          <div item-start style="background-color: rgba(242, 255, 62, 0.986); float: left;">&nbsp; &nbsp;</div>\n\n          &nbsp; Paginas</button>\n\n        \n\n        \n\n        <div *ngIf="verCasa" >\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                {{p.title}}\n\n              </button>\n\n        </div>\n\n      <!--\n\n        <button ion-item >\n\n          <ion-icon name="ios-chatboxes-outline" item-start></ion-icon>        \n\n          <div class="item-note" >\n\n              Chat Con Soporte\n\n          </div>\n\n        </button>\n\n        <button ion-item >\n\n          <ion-icon name="ios-pin-outline" item-start></ion-icon>        \n\n          <div class="item-note" >\n\n              Zonas Fijas\n\n          </div>\n\n        </button>\n\n        <button ion-item menuToggle > --> <!--(click)="iraAjustes()"-->\n\n        <!--<ion-icon name="md-settings" item-start></ion-icon>        \n\n            <div class="item-note" >\n\n                Ajustes\n\n            </div>\n\n          </button>\n\n        -->\n\n          <button ion-item menuToggle (click)="iraLogin()">\n\n              <ion-icon name="md-power" item-start></ion-icon>\n\n                     \n\n              <div class="item-note" >\n\n                  Salir\n\n              </div>\n\n            </button>\n\n      \n\n      \n\n\n\n    </ion-list>\n\n\n\n    \n\n\n\n    \n\n\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-menu id="rightMenu" [content]="content2" side="right" type="reveal">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Items</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n      <ion-list>\n\n        <button ion-item >Item UNO</button>\n\n        <button ion-item >Item DOS</button>\n\n      </ion-list>\n\n      <ion-card *ngIf="text">\n\n        <ion-card-content>\n\n          Tu has pulsado \n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IngresarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IngresarPage = /** @class */ (function () {
    function IngresarPage(nav, navParams, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    IngresarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IngresarPage');
    };
    IngresarPage.prototype.recuperar = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Realizado!',
            message: 'Puedes verificar en tu bandeja de entrada el correo de recuperacion',
            buttons: [
                {
                    text: 'ir a login',
                    handler: function () {
                        _this.iraLogin();
                    }
                }
            ]
        });
        confirm.present();
    };
    IngresarPage.prototype.iraLogin = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    IngresarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ingresar',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\ingresar\ingresar.html"*/'<!--\n\n  Generated template for the IngresarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <br><br><br>\n\n  <ion-list>\n\n    <ion-item class="logo" no-lines>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-input style="position: static !important;" ng-model="email" name="email"  type="text" placeholder="correo de recuperacion"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-item no-lines>\n\n      <button (click)="recuperar()" block ion-button  style="height: 40px;"  color="primary" > Recuperar </button>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\ingresar\ingresar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IngresarPage);
    return IngresarPage;
}());

//# sourceMappingURL=ingresar.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingresar_ingresar__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    //RecuperarPage = "RecuperarPage";
    function LoginPage(/*translate: TranslateService,*/ navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this language will be used as a fallback when a translation isn't found in the current language
        //translate.setDefaultLang('en');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.recordar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ingresar_ingresar__["a" /* IngresarPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\ub\ub\gps\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list padding> \n\n      <ion-item class="logo" no-lines>\n\n      </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-input style="position: static !important;" ng-model="email" name="email"  type="text" placeholder="Usuario"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-input ng-model="psw" name="psw" type="password" placeholder="Contraseña"></ion-input>\n\n        </ion-item>\n\n        <ion-item no-lines>\n\n            <button style="background-color: white; " (click)="recordar()" secondary clear item-right >\n\n                Recordar Contraseña\n\n            </button>\n\n        </ion-item >\n\n            \n\n        \n\n        <ion-item no-lines>\n\n          <button menuToggle block ion-button  style="height: 40px;"  color="primary" > Iniciar Sesion </button>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ub\ub\gps\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
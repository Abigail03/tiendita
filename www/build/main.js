webpackJsonp([1],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busqueda/busqueda.module": [
		281,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carrito__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__producto_producto__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, _ps, _cs, _us) {
        this.navCtrl = navCtrl;
        this._ps = _ps;
        this._cs = _cs;
        this._us = _us;
        this.productoPage = __WEBPACK_IMPORTED_MODULE_4__producto_producto__["a" /* ProductoPage */];
    }
    HomePage.prototype.siguiente_pagina = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this._ps.pagina = _this._ps.pagina + 1;
            _this._ps.cargar_todos();
            infiniteScroll.complete();
        }, 1000);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n      <button ion-button\n              *ngIf="_us.activo()"\n              (click)="_us.cerrar_sesion()">\n        Salir\n      </button>\n    </ion-buttons>\n\n\n    <ion-title>\n      Mi Tienda\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only\n              (click)="_cs.ver_carrito()">\n        <ion-icon name="cart"></ion-icon>\n        <ion-badge color="danger"\n                   class="carrito-numero"\n                   *ngIf="_cs.items.length > 0">\n                {{ _cs.items.length }}\n        </ion-badge>\n      </button>\n\n      &nbsp;\n      &nbsp;\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row *ngFor="let pares of _ps.productos">\n      <ion-col *ngFor="let item of pares"\n              [navParams]="{ producto: item }"\n              [navPush]="productoPage">\n        <img [src]="item.codigo | imagen">\n        <p>\n          {{ item.producto }}\n          <br>\n          {{ item.precio_compra | currency:\'USD\':true }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-infinite-scroll (ionInfinite)="siguiente_pagina($event)">\n     <ion-infinite-scroll-content></ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_productos__["a" /* ProductosService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_carrito__["a" /* CarritoService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_usuario__["a" /* UsuarioService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_imagen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_index_services__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pipes

// storage

// servicios

// Paginas

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_imagen__["a" /* ImagenPipe */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["a" /* CarritoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["b" /* CategoriasPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["d" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["f" /* OrdenesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["e" /* OrdenesDetallePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["g" /* PorCategoriasPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["i" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["h" /* ProductoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/busqueda/busqueda.module#BusquedaModule', name: 'Busqueda', segment: 'busqueda', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["a" /* CarritoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["b" /* CategoriasPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["d" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["f" /* OrdenesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["e" /* OrdenesDetallePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["g" /* PorCategoriasPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["i" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_index_paginas__["h" /* ProductoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_index_services__["a" /* CarritoService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_index_services__["c" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_index_services__["b" /* ProductosService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarritoPage = (function () {
    function CarritoPage(navCtrl, navParams, _cs, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.viewCtrl = viewCtrl;
    }
    return CarritoPage;
}());
CarritoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-carrito',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/carrito/carrito.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons>\n      <button ion-button\n              (click)="viewCtrl.dismiss()">\n        Cerrar\n      </button>\n    </ion-buttons>\n\n    <ion-title>Carrito de Compras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div text-center\n       *ngIf="_cs.items.length === 0"\n       class="carrito_vacio">\n\n    <ion-icon name="ios-cart-outline"\n              class="icon-5x"></ion-icon>\n    <br>\n    Su carrito esta vacio\n  </div>\n\n  <div *ngIf="_cs.items.length != 0">\n\n    <ion-grid>\n      <ion-row *ngFor="let item of _cs.items; let i = index;">\n        <ion-col>\n          <img [src]="item.codigo | imagen">\n        </ion-col>\n        <ion-col>\n\n          <p>{{ item.producto }}</p>\n          <p>{{ item.precio_compra | currency:\'USD\':true }}</p>\n\n          <button ion-button\n                  color="danger"\n                  outline\n                  block\n                  small\n                  (click)="_cs.remove_item(i)">\n            Eliminar\n          </button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <hr>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h3>\n            <strong>Total:</strong>\n            {{ _cs.total_carrito | currency:\'USD\':true }}\n          </h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button\n            block\n            (click)="_cs.realizar_pedido()">\n      Realizar Pedido\n    </button>\n\n\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/carrito/carrito.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carrito__["a" /* CarritoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], CarritoPage);

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriasPage = (function () {
    function CategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.porCategorias = __WEBPACK_IMPORTED_MODULE_3__index_paginas__["g" /* PorCategoriasPage */];
    }
    return CategoriasPage;
}());
CategoriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-categorias',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/categorias/categorias.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Categorías</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item\n            *ngFor="let categoria of _ps.lineas"\n            [navPush]="porCategorias"\n            [navParams]="{ categoria: categoria }">\n\n      <ion-icon [name]="categoria.icono" item-left></ion-icon>\n      {{ categoria.linea }}\n    </button>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/categorias/categorias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_productos__["a" /* ProductosService */]])
], CategoriasPage);

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, _us) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._us = _us;
        this.correo = "";
        this.contrasena = "";
    }
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        this._us.ingresar(this.correo, this.contrasena).subscribe(function () {
            if (_this._us.activo()) {
                _this.navCtrl.pop();
            }
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons>\n      <button ion-button\n              (click)="viewCtrl.dismiss(false)">\n        Cerrar\n      </button>\n    </ion-buttons>\n\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Correo</ion-label>\n      <ion-input type="email" [(ngModel)]="correo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="contrasena"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button\n          [disabled]=" correo.length < 5 || contrasena.length < 5 "\n          block\n          (click)="ingresar()">\n    Ingresar\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_usuario__["a" /* UsuarioService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdenesPage = (function () {
    function OrdenesPage(navCtrl, navParams, _cs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.ordenesDetalle = __WEBPACK_IMPORTED_MODULE_3__index_paginas__["e" /* OrdenesDetallePage */];
    }
    OrdenesPage.prototype.ionViewWillEnter = function () {
        console.log("cargando ordenes");
        this._cs.cargar_ordenes();
    };
    return OrdenesPage;
}());
OrdenesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-ordenes',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/ordenes/ordenes.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ordenes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-list>\n    <button ion-item\n            *ngFor="let orden of _cs.ordenes"\n            [navPush]="ordenesDetalle"\n            [navParams]="{ orden: orden }">\n      <strong>Orden ID:</strong>\n      {{ orden.id }}\n    </button>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/ordenes/ordenes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carrito__["a" /* CarritoService */]])
], OrdenesPage);

//# sourceMappingURL=ordenes.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdenesDetallePage = (function () {
    function OrdenesDetallePage(navCtrl, navParams, _cs, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.alertCtrl = alertCtrl;
        this.orden = {};
        this.orden = this.navParams.get("orden");
    }
    OrdenesDetallePage.prototype.borrar_orden = function (orden_id) {
        var _this = this;
        this.alertCtrl.create({
            title: "¿Esta seguro que desea borrar esta orden?",
            subTitle: "Se borrarán todos los pedidos realizados",
            buttons: [{
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('No se borro la orden');
                    }
                },
                {
                    text: "OK",
                    handler: function () {
                        _this._cs.borrar_orden(orden_id).subscribe(function (datos) {
                            if (datos) {
                                _this.alertCtrl.create({
                                    title: "Su orden ha sido borrada exitosamente",
                                    buttons: ["OK"]
                                }).present().then(function () {
                                    _this.navCtrl.pop();
                                });
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: "Error desconocido",
                                    buttons: ["OK"]
                                }).present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }]
        }).present();
    };
    return OrdenesDetallePage;
}());
OrdenesDetallePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-ordenes-detalle',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/ordenes-detalle/ordenes-detalle.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Orden {{ orden.id }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of orden.detalle">\n      <img [src]="item.codigo | imagen">\n      <h5>{{ item.producto }}</h5>\n      <p>\n        {{ item.descripcion }}\n      </p>\n      <p>\n        {{ item.precio_compra | currency:\'USD\':true }}\n      </p>\n    </ion-item>\n\n  </ion-list>\n\n\n  <button ion-button\n          block\n          color="danger"\n          (click)="borrar_orden( orden.id )">\n    Borrar orden\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/ordenes-detalle/ordenes-detalle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carrito__["a" /* CarritoService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OrdenesDetallePage);

//# sourceMappingURL=ordenes-detalle.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorCategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__producto_producto__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PorCategoriasPage = (function () {
    function PorCategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.productoPage = __WEBPACK_IMPORTED_MODULE_3__producto_producto__["a" /* ProductoPage */];
        this.categoria = {};
        this.categoria = this.navParams.get("categoria");
        this._ps.cargar_por_categoria(this.categoria.id);
    }
    return PorCategoriasPage;
}());
PorCategoriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-por-categorias',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/por-categorias/por-categorias.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ categoria.linea }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of _ps.por_categoria">\n\n      <ion-thumbnail item-left>\n        <img [src]="item.codigo | imagen">\n      </ion-thumbnail>\n\n      <h2>{{ item.producto }}</h2>\n      <p> {{ item.proveedor }}</p>\n\n      <button ion-button clear item-right\n              [navPush]="productoPage"\n              [navParams]="{ producto: item }">\n        Ver\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/por-categorias/por-categorias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_productos__["a" /* ProductosService */]])
], PorCategoriasPage);

//# sourceMappingURL=por-categorias.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_paginas__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TabsPage = (function () {
    function TabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["c" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["b" /* CategoriasPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["f" /* OrdenesPage */];
        this.tab4 = "Busqueda";
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/tabs/tabs.html"*/'\n\n<ion-tabs color="primary">\n\n  <ion-tab tabIcon="home" tabTitle="Home" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="star" tabTitle="Categorías" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="list" tabTitle="Ordenes" [root]="tab3"></ion-tab>\n  <ion-tab tabIcon="search" tabTitle="Buscar" [root]="tab4"></ion-tab>\n\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/tabs/tabs.html"*/,
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["i" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_url_servicios__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ImagenPipe = (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (codigo) {
        return __WEBPACK_IMPORTED_MODULE_1__config_url_servicios__["a" /* URL_IMAGENES */] + codigo + ".jpg";
    };
    return ImagenPipe;
}());
ImagenPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'imagen',
    })
], ImagenPipe);

//# sourceMappingURL=imagen.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrito__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productos__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__productos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__usuario__["a"]; });



//# sourceMappingURL=index.services.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carrito_carrito__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__carrito_carrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorias_categorias__ = __webpack_require__(247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__categorias_categorias__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordenes_ordenes__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__ordenes_ordenes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ordenes_detalle_ordenes_detalle__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__ordenes_detalle_ordenes_detalle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__por_categorias_por_categorias__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__por_categorias_por_categorias__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__producto_producto__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__producto_producto__["a"]; });









//# sourceMappingURL=index.paginas.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Plugin storage

// usuario service


// paginas del modal

var CarritoService = (function () {
    function CarritoService(http, alertCtrl, platform, storage, modalCtrl, _us) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this._us = _us;
        this.items = [];
        this.total_carrito = 0;
        this.ordenes = [];
        console.log('Hello Carrito Provider');
        this.cargar_storage();
        this.actualizar_total();
    }
    CarritoService.prototype.remove_item = function (idx) {
        this.items.splice(idx, 1);
        this.guardar_storage();
    };
    CarritoService.prototype.realizar_pedido = function () {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        var codigos = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            codigos.push(item.codigo);
        }
        data.append("items", codigos.join(","));
        var url = __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/realizar_orden/" + this._us.token + "/" + this._us.id_usuario;
        this.http.post(url, data)
            .subscribe(function (resp) {
            var respuesta = resp.json();
            if (respuesta.error) {
                // mostramos error
                _this.alertCtrl.create({
                    title: "Error en la orden",
                    subTitle: respuesta.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                // todo bien!
                _this.items = [];
                _this.alertCtrl.create({
                    title: "Orden realizada!",
                    subTitle: "Nos contactaremos con usted próximamente",
                    buttons: ["OK"]
                }).present();
            }
        });
    };
    CarritoService.prototype.ver_carrito = function () {
        var _this = this;
        var modal;
        if (this._us.token) {
            //mostrar pagina del carrito
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["a" /* CarritoPage */]);
        }
        else {
            // mostrar el login
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["d" /* LoginPage */]);
        }
        modal.present();
        modal.onDidDismiss(function (abrirCarrito) {
            console.log(abrirCarrito);
            if (abrirCarrito) {
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_index_paginas__["a" /* CarritoPage */]).present();
            }
        });
    };
    CarritoService.prototype.agregar_carrito = function (item_parametro) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.codigo == item_parametro.codigo) {
                this.alertCtrl.create({
                    title: "Item existe",
                    subTitle: item_parametro.producto + ", ya se encuentra en su carrito de compras",
                    buttons: ["OK"]
                }).present();
                return;
            }
        }
        this.items.push(item_parametro);
        this.actualizar_total();
        this.guardar_storage();
    };
    CarritoService.prototype.actualizar_total = function () {
        this.total_carrito = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total_carrito += Number(item.precio_compra);
        }
    };
    CarritoService.prototype.guardar_storage = function () {
        if (this.platform.is("cordova")) {
            // dispositivo
            this.storage.set('items', this.items);
        }
        else {
            // computadora
            localStorage.setItem("items", JSON.stringify(this.items));
        }
    };
    CarritoService.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                // dispositivo
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("items")
                        .then(function (items) {
                        if (items) {
                            _this.items = items;
                        }
                        resolve();
                    });
                });
            }
            else {
                // computadora
                if (localStorage.getItem("items")) {
                    //Existe items en el localstorage
                    _this.items = JSON.parse(localStorage.getItem("items"));
                }
                resolve();
            }
        });
        return promesa;
    };
    CarritoService.prototype.cargar_ordenes = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/obtener_pedidos/" + this._us.token + "/" + this._us.id_usuario;
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
                // manejar el error
            }
            else {
                _this.ordenes = data.ordenes;
            }
        });
    };
    CarritoService.prototype.borrar_orden = function (orden_id) {
        var url = __WEBPACK_IMPORTED_MODULE_6__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/borrar_pedido/" + this._us.token + "/" + this._us.id_usuario + "/" + orden_id;
        return this.http.delete(url)
            .map(function (resp) { return resp.json(); });
    };
    return CarritoService;
}());
CarritoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__usuario__["a" /* UsuarioService */]])
], CarritoService);

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosService = (function () {
    function ProductosService(http) {
        this.http = http;
        this.pagina = 0;
        this.productos = [];
        this.lineas = [];
        this.por_categoria = [];
        this.resultados = [];
        // console.log('Hello Productos Provider');
        this.cargar_todos();
        this.cargar_lineas();
    }
    ProductosService.prototype.cargar_lineas = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__["b" /* URL_SERVICIOS */] + "/lineas";
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
                // problemas!
            }
            else {
                _this.lineas = data.lineas;
                console.log(_this.lineas);
            }
        });
    };
    ProductosService.prototype.cargar_por_categoria = function (categoria) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__["b" /* URL_SERVICIOS */] + "/productos/por_tipo/" + categoria;
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            console.log(data.productos);
            _this.por_categoria = data.productos;
        });
    };
    ProductosService.prototype.cargar_todos = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__["b" /* URL_SERVICIOS */] + "/productos/todos/" + _this.pagina;
            _this.http.get(url)
                .map(function (resp) { return resp.json(); })
                .subscribe(function (data) {
                if (data.error) {
                    // Aqui hay un problema
                }
                else {
                    var nuevaData = _this.agrupar(data.productos, 2);
                    (_a = _this.productos).push.apply(_a, nuevaData);
                    _this.pagina += 1;
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    ProductosService.prototype.agrupar = function (arr, tamano) {
        var nuevoArreglo = [];
        for (var i = 0; i < arr.length; i += tamano) {
            nuevoArreglo.push(arr.slice(i, i + tamano));
        }
        console.log(nuevoArreglo);
        return nuevoArreglo;
    };
    ProductosService.prototype.buscar_producto = function (termino) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__["b" /* URL_SERVICIOS */] + "/productos/buscar/" + termino;
        this.http.get(url)
            .subscribe(function (resp) {
            var data = resp.json();
            _this.resultados = data.productos;
            console.log(_this.resultados);
        });
    };
    return ProductosService;
}());
ProductosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProductosService);

//# sourceMappingURL=productos.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL_SERVICIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_IMAGENES; });
var URL_SERVICIOS = "http://localhost:8888/rest/index.php";
var URL_IMAGENES = "http://localhost:8888/rest/public/img/productos/";
//# sourceMappingURL=url.servicios.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Plugin storage

var UsuarioService = (function () {
    function UsuarioService(http, alertCtrl, platform, storage) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        console.log('Hello Usuario Provider');
        this.cargar_storage();
    }
    UsuarioService.prototype.activo = function () {
        if (this.token) {
            return true;
        }
        else {
            return false;
        }
    };
    UsuarioService.prototype.ingresar = function (correo, contrasena) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        data.append("correo", correo);
        data.append("contrasena", contrasena);
        var url = __WEBPACK_IMPORTED_MODULE_3__config_url_servicios__["b" /* URL_SERVICIOS */] + "/login";
        return this.http.post(url, data)
            .map(function (resp) {
            var data_resp = resp.json();
            console.log(data_resp);
            if (data_resp.error) {
                _this.alertCtrl.create({
                    title: "Error al iniciar",
                    subTitle: data_resp.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                _this.token = data_resp.token;
                _this.id_usuario = data_resp.id_usuario;
                // Guardar Storage
                _this.guardar_storage();
            }
        });
    };
    UsuarioService.prototype.cerrar_sesion = function () {
        this.token = null;
        this.id_usuario = null;
        // guardar storage
        this.guardar_storage();
    };
    UsuarioService.prototype.guardar_storage = function () {
        if (this.platform.is("cordova")) {
            // dispositivo
            this.storage.set('token', this.token);
            this.storage.set('id_usuario', this.id_usuario);
        }
        else {
            // computadora
            if (this.token) {
                localStorage.setItem("token", this.token);
                localStorage.setItem("id_usuario", this.id_usuario);
            }
            else {
                localStorage.removeItem("token");
                localStorage.removeItem("id_usuario");
            }
        }
    };
    UsuarioService.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                // dispositivo
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("token")
                        .then(function (token) {
                        if (token) {
                            _this.token = token;
                        }
                    });
                    _this.storage.get("id_usuario")
                        .then(function (id_usuario) {
                        if (id_usuario) {
                            _this.id_usuario = id_usuario;
                        }
                        resolve();
                    });
                });
            }
            else {
                // computadora
                if (localStorage.getItem("token")) {
                    //Existe items en el localstorage
                    _this.token = localStorage.getItem("token");
                    _this.id_usuario = localStorage.getItem("id_usuario");
                }
                resolve();
            }
        });
        return promesa;
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], UsuarioService);

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoPage = (function () {
    function ProductoPage(navCtrl, navParams, _cs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.producto = {};
        console.log(this.navParams.get("producto"));
        this.producto = this.navParams.get("producto");
    }
    return ProductoPage;
}());
ProductoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-producto',template:/*ion-inline-start:"/Users/Abigail/Desktop/tiendita/src/pages/producto/producto.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ producto.producto }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img [src]="producto.codigo | imagen">\n\n  <div padding>\n    <h5>{{ producto.producto }}</h5>\n    <p>\n      <strong>Precio:</strong> {{ producto.precio_compra | currency:\'USD\':true }}\n    </p>\n\n    <p>\n      {{ producto.descripcion }}\n      <br>\n      <strong>{{ producto.proveedor }}</strong>\n    </p>\n\n    <button ion-button block icon-left\n            (click)="_cs.agregar_carrito(producto)">\n      <ion-icon name="cart"></ion-icon>\n      Agregar al carrito\n    </button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Abigail/Desktop/tiendita/src/pages/producto/producto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carrito__["a" /* CarritoService */]])
], ProductoPage);

//# sourceMappingURL=producto.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
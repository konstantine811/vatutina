webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__housing_housing_component__ = __webpack_require__("../../../../../src/app/housing/housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'housing',
                        component: __WEBPACK_IMPORTED_MODULE_3__housing_housing_component__["a" /* HousingComponent */]
                    },
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    }
                ])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__housing_housing_component__ = __webpack_require__("../../../../../src/app/housing/housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__housing_housing_component__["a" /* HousingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/animations/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({ position: 'relative', width: '100%', overflow: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({ position: 'relative', width: '100%', overflow: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* animate */])('0.5s ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* animate */])('0.5s ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <ngx-carousel class='home-back' [inputs]='carouselOne' (carouselLoad)='myfunc($event)'>\n    <ngx-item NgxCarouselItem>\n     <div class=\"home-slide home-slide--one\">\n        <div class=\"home-txt\">\n            <h1 class=\"home-txt__title\">Школы</h1>\n            <p class=\"home-txt__description\">В первую очередь при проектировании\n              района мы позаботились о самых главных жителях - детях. На территории района\n              уже открыта общеобразовательная школа на 1 100 учеников с углубленным изучением\n              иностранных языков, естественных наук и математики.\n            </p>\n        </div>\n        <div class=\"home-button-select only-mobile\">\n          <button (click)=\"goTo('/housing')\" class=\"home-button-select__inner\">Выбрать квартиру</button>\n        </div>\n        <div class=\"home-offer only-mobile\">\n            <div class=\"home-offer__head\">\n              <span class=\"home-offer__data\">14/07</span>\n              <span class=\"home-offer__title\">Акция</span>\n            </div>\n            <div class=\"home-offer__description\">\n              Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n            </div>\n        </div>\n     </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"home-slide home-slide--second\">\n          <div class=\"home-txt\">\n              <h1 class=\"home-txt__title\">Новые Ватутинки</h1>\n              <p class=\"home-txt__description\">В первую очередь при проектировании\n                  района мы позаботились о самых главных жителях.\n              </p>\n          </div>\n          <div class=\"home-button-select only-mobile\">\n              <button (click)=\"goTo('/housing')\" class=\"home-button-select__inner\">Выбрать квартиру</button>\n          </div>\n          <div class=\"home-offer only-mobile\">\n              <div class=\"home-offer__head\">\n                <span class=\"home-offer__data\">14/07</span>\n                <span class=\"home-offer__title\">Ипотека</span>\n              </div>\n              <div class=\"home-offer__description\">\n                Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n              </div>\n          </div>\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n        <div class=\"home-slide home-slide--third\">\n            <div class=\"home-txt\">\n                <h1 class=\"home-txt__title\">Квартиры с отделкой в новых корпусах от 2,5 млн рублей</h1>\n            </div>\n            <div class=\"home-button-select only-mobile\">\n                <button (click)=\"goTo('/housing')\" class=\"home-button-select__inner\">Выбрать квартиру</button>\n            </div>\n            <div class=\"home-offer only-mobile\">\n                <div class=\"home-offer__head\">\n                  <span class=\"home-offer__data\">14/07</span>\n                  <span class=\"home-offer__title\">Собития</span>\n                </div>\n                <div class=\"home-offer__description\">\n                  Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n                </div>\n            </div>\n        </div>\n    </ngx-item>\n    <button NgxCarouselPrev class='leftRs only-desktop'>&lt;</button>\n    <button NgxCarouselNext class='rightRs only-desktop'>&gt;</button>\n  </ngx-carousel>\n  <div class=\"home-nav\">\n    <ul class=\"home-nav__selected\">\n      <li class=\"home-nav__item\">\n        <span class=\"only-desktop home-nav__text\">Новые Ватутинки</span>\n      </li>\n      <li class=\"home-nav__item\">\n          <span class=\"only-desktop home-nav__text\">подробнее</span>\n      </li>\n      <li class=\"home-nav__item\">\n          <span class=\"only-desktop home-nav__text\">поликлиники</span>\n      </li>\n      <li class=\"home-nav__item\">\n          <span class=\"only-desktop home-nav__text\">детские сады</span>\n      </li>\n      <li class=\"home-nav__item\">\n          <span class=\"only-desktop home-nav__text\">гипермаркеты</span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"home-offer only-desktop\">\n    <div class=\"home-offer__inner\">\n      <div class=\"home-offer__head\">\n        <span class=\"home-offer__data\">14/07</span>\n        <span class=\"home-offer__title\">Акция</span>\n      </div>\n      <div class=\"home-offer__description\">\n        Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n      </div>\n    </div>\n    <div class=\"home-offer__inner\">\n        <div class=\"home-offer__head\">\n          <span class=\"home-offer__data\">14/07</span>\n          <span class=\"home-offer__title\">Ипотека</span>\n        </div>\n        <div class=\"home-offer__description\">\n          Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n        </div>\n      </div>\n      <div class=\"home-offer__inner\">\n          <div class=\"home-offer__head\">\n            <span class=\"home-offer__data\">14/07</span>\n            <span class=\"home-offer__title\">События</span>\n          </div>\n          <div class=\"home-offer__description\">\n            Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n          </div>\n        </div>\n        <div class=\"home-offer__inner\">\n            <div class=\"home-offer__head\">\n              <span class=\"home-offer__data\">14/07</span>\n              <span class=\"home-offer__title\">События</span>\n            </div>\n            <div class=\"home-offer__description\">\n              Только 1 месяц для покупателей квартир в Новых Ватутинках действует программа \"Выгода\"\n            </div>\n          </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 768px) {\n  :host .home-nav__item {\n    max-width: 100%;\n    width: 15%;\n    text-align: left;\n    padding-left: 55px; }\n  :host .home-nav__text {\n    color: white;\n    display: inline-block;\n    padding-top: 15px;\n    word-break: break-word;\n    position: absolute; }\n  :host .leftRs, :host .rightRs {\n    position: absolute;\n    top: 45%;\n    height: 60px;\n    width: 60px;\n    background-color: blueviolet;\n    border-radius: 50%;\n    color: white;\n    font-size: 26px;\n    border: none;\n    outline: none; }\n  :host .rightRs {\n    right: 0;\n    margin-right: 40px; }\n  :host .leftRs {\n    margin-left: 40px; }\n  :host .ngxcarouselPoint {\n    display: none; } }\n\n:host {\n  position: relative;\n  display: block; }\n\n.home {\n  position: relative; }\n\n.home-back {\n  width: 100%;\n  top: 0; }\n\n.home-slide {\n  height: 800px;\n  background-size: cover;\n  padding-bottom: 350px; }\n\n.home-slide--one {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/image/viz1.jpg") + "); }\n\n.home-slide--second {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/image/viz2.jpg") + "); }\n\n.home-slide--third {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/image/viz3.jpg") + "); }\n\n.home-txt {\n  padding-top: 120px;\n  margin: 0 auto;\n  width: 75%;\n  max-height: 100%;\n  overflow: hidden;\n  color: white; }\n\n.home-txt__title {\n  font-size: 26px; }\n\n.home-txt__description {\n  font-size: 18px;\n  font-weight: bold; }\n\n.home-button-select {\n  width: 100%;\n  height: 100%; }\n\n.home-button-select__inner {\n  width: 200px;\n  height: auto;\n  background-color: blueviolet;\n  border: none;\n  color: white;\n  border-radius: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 10px 0;\n  margin-left: 12%; }\n\n.home-nav {\n  position: absolute;\n  top: 468px;\n  width: 100%;\n  height: 100%; }\n\n.home-nav__selected {\n  padding: 0;\n  margin: 0;\n  text-align: center; }\n\n.home-nav__item {\n  display: inline-block;\n  position: relative;\n  max-width: 73px;\n  width: 15%;\n  min-width: 55px;\n  padding-top: 66px; }\n  .home-nav__item:after {\n    content: '';\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    left: 0;\n    border-radius: 50%;\n    background-color: white; }\n\n.home-offer {\n  height: 150px;\n  width: 100%;\n  background-color: rgba(192, 192, 192, 0.8);\n  overflow: hidden;\n  position: absolute;\n  top: 650px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_animations_router_animations__ = __webpack_require__("../../../../../src/app/core/animations/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 900,
            point: {
                visible: true,
                pointStyles: ".ngxcarouselPoint {\n          list-style-type: none;\n          text-align: center;\n          padding: 12px;\n          margin: 0;\n          white-space: nowrap;\n          overflow: auto;\n          position: absolute;\n          width: 100%;\n          bottom: 0px;\n          left: 0;\n          z-index: 1000;\n          box-sizing: border-box;\n        }\n        .ngxcarouselPoint li {\n          display: inline-block;\n          border-radius: 999px;\n          background: rgba(255, 255, 255, 0.55);\n          padding: 4px;\n          margin: 0 5px;\n          transition: .4s ease all;\n        }\n        .ngxcarouselPoint li.active {\n            background: white;\n            width: 3px;\n        }\n        @media (min-width: 768px) {\n          .ngxcarouselPoint {\n            display: none;\n          }\n        }\n      }"
            },
            load: 2,
            touch: true,
            custom: 'banner'
        };
    };
    HomeComponent.prototype.myfunc = function (event) {
    };
    HomeComponent.prototype.goTo = function (path) {
        this.route.navigate([path]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__core_animations_router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' },
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/housing/housing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"housing\">\n  <h1 class=\"housing-txt\">Страница Корпус</h1>\n</div>\n<app-table-tabs></app-table-tabs>  "

/***/ }),

/***/ "../../../../../src/app/housing/housing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.housing {\n  padding-top: 90px;\n  z-index: 100;\n  height: 500px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/image/viz6.jpg") + ");\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/housing/housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HousingComponent = /** @class */ (function () {
    function HousingComponent() {
    }
    HousingComponent.prototype.ngOnInit = function () {
    };
    HousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-housing',
            template: __webpack_require__("../../../../../src/app/housing/housing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/housing/housing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HousingComponent);
    return HousingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container header' [class.header-back]='background'>\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-2 header-logo\">Новые <span>Ватутники</span></div>\n    <div class=\"header-mobile-button only-mobile\"  (click)=\"showMenu = !showMenu\">\n      <span class=\"mobile-button\" [class.close]='showMenu'></span>\n    </div>\n    <div class=\"header__wrap\" *ngIf='showMenu'>\n      <div class=\"header-logo header-logo--menu\">Новые <span>Ватутники</span></div>\n      <div class=\"header-nav\">\n        <ul class=\"header-nav__inner\">\n          <li class=\"header-nav__item\">\n            <a (click)=\"goTo('/home')\"  class=\"header-nav__link\">О райне</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a (click)=\"goTo('/housing')\" class=\"header-nav__link\">Купить</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a href=\"\" class=\"header-nav__link\">Условия покупки</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a href=\"\" class=\"header-nav__link\">Контакты</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a href=\"\" class=\"header-nav__link\">vatutinki.life</a>\n            </li>  \n        </ul>     \n      </div>\n      <div class=\"header-right\">\n        <ul class=\"header-rigth__inner\">\n          <li class=\"haeder-right__item\">\n            <a href=\"\" class=\"header-right__link\">Сравнение</a>\n          </li>\n          <li class=\"haeder-right__item\">\n            <a href=\"\" class=\"header-right__link\">Личный кабинет</a>\n          </li>\n          <li class=\"haeder-right__item\">\n            <button class=\"header-right__phone\">+7 495 746-23-23</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-9 only-desktop\">\n      <div class=\"header-nav\">\n        <ul class=\"header-nav__inner\">\n          <li class=\"header-nav__item\">\n            <a (click)=\"goTo('/home')\" class=\"header-nav__link\">О райне</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a (click)=\"goTo('/housing')\" class=\"header-nav__link\">Купить</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a href=\"\" class=\"header-nav__link\">Условия покупки</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a href=\"\" class=\"header-nav__link\">Контакты</a>\n          </li>\n          <li class=\"header-nav__item\">\n              <a href=\"\" class=\"header-nav__link\">vatutinki.life</a>\n            </li>  \n        </ul>     \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 768px) {\n  :host .header-nav__item {\n    display: inline-block;\n    padding: 0 2%;\n    color: white; }\n  :host .header-nav__link {\n    cursor: pointer;\n    color: white !important;\n    text-decoration: none;\n    transition: box-shadow 0.5s ease; }\n    :host .header-nav__link:hover {\n      box-shadow: 0px 1px 0px 0px white; } }\n\n:host {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 100; }\n  :host .header {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    box-shadow: inset 1px 32px 45px -19px black; }\n  :host .header-back {\n    box-shadow: none;\n    background-color: silver; }\n  :host .header-logo {\n    color: white;\n    font-size: 20px;\n    font-weight: bold;\n    padding-left: 15px;\n    padding-top: 15px; }\n    :host .header-logo span {\n      display: block; }\n  :host .header-logo--menu {\n    color: black; }\n  :host .header-mobile-button {\n    position: absolute;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n    top: 20px;\n    cursor: pointer;\n    z-index: 100; }\n  :host .mobile-button {\n    position: relative;\n    display: inline-block;\n    height: 3px;\n    width: 30px;\n    background-color: white;\n    right: 0;\n    top: 0;\n    margin-right: 10px;\n    z-index: 99;\n    transition: all 0.5s ease; }\n    :host .mobile-button:before, :host .mobile-button:after {\n      content: '';\n      position: absolute;\n      height: 3px;\n      width: 30px;\n      background-color: white;\n      transition: all 0.5s ease; }\n    :host .mobile-button:before {\n      bottom: 10px; }\n    :host .mobile-button:after {\n      top: 10px; }\n  :host .close {\n    background-color: none;\n    top: 0; }\n    :host .close:before, :host .close:after {\n      background-color: silver; }\n    :host .close:before {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      top: 0px; }\n    :host .close:after {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      top: 0; }\n  :host .header__wrap {\n    position: absolute;\n    height: 100vh;\n    width: 100%;\n    background-color: white;\n    top: 0;\n    left: 0; }\n  :host .header-nav__inner, :host .header-rigth__inner {\n    width: 100%;\n    height: 100%;\n    padding: 0px 0px 0 15px;\n    list-style: none; }\n  :host .header-nav__link, :host .header-right__link {\n    color: black;\n    text-decoration: none;\n    display: inline-block;\n    padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.showMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                switch (val.url) {
                    case '/housing':
                        _this.background = true;
                        break;
                    case '/home':
                        _this.background = false;
                        break;
                }
            }
        });
    };
    HeaderComponent.prototype.goTo = function (path) {
        this.router.navigate([path]);
        this.showMenu = false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_tabs_table_tabs_component__ = __webpack_require__("../../../../../src/app/shared/table-tabs/table-tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatTableModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__table_tabs_table_tabs_component__["a" /* TableTabsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__table_tabs_table_tabs_component__["a" /* TableTabsComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatTableModule */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/table-tabs/table-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"table\">\n    <mat-tab label=\"По секциям\">\n        Таблица 1\n    </mat-tab>\n    <mat-tab label=\"Подобрать по параметрам\">\n        Таблица 2\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/shared/table-tabs/table-tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/table-tabs/table-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableTabsComponent = /** @class */ (function () {
    function TableTabsComponent() {
    }
    TableTabsComponent.prototype.ngOnInit = function () {
    };
    TableTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table-tabs',
            template: __webpack_require__("../../../../../src/app/shared/table-tabs/table-tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/table-tabs/table-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableTabsComponent);
    return TableTabsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/image/viz1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "viz1.bb10fc69d2d3b849e595.jpg";

/***/ }),

/***/ "../../../../../src/assets/image/viz2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "viz2.dd991b6906a15e93b175.jpg";

/***/ }),

/***/ "../../../../../src/assets/image/viz3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "viz3.66e4da56dbdaf784ab9f.jpg";

/***/ }),

/***/ "../../../../../src/assets/image/viz6.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "viz6.07ff24116301e153826d.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
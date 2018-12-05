(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-services/restaurant.service.ts":
/*!****************************************************!*\
  !*** ./src/app/api-services/restaurant.service.ts ***!
  \****************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
        this.url = "/api/restaurants";
    }
    RestaurantService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    RestaurantService.prototype.getMenu = function (restId) {
        var path = this.url + "/" + restId + "/menu";
        return this.http.get(path);
    };
    RestaurantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestaurantService);
    return RestaurantService;
}());



/***/ }),

/***/ "./src/app/api-services/review.service.ts":
/*!************************************************!*\
  !*** ./src/app/api-services/review.service.ts ***!
  \************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewService = /** @class */ (function () {
    function ReviewService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userUrl = '/api/users';
        this.reviewUrl = '/api/reviews';
    }
    ReviewService.prototype.getRecentReviews = function () {
        var userId = this.authService.getUser().id;
        var url = this.userUrl + "/" + userId + "/reviews/recent";
        return this.http.get(url);
    };
    ReviewService.prototype.getReviews = function (restId) {
        var userId = this.authService.getUser().id;
        var url = this.userUrl + "/" + userId + "/reviews/restaurants/" + restId;
        return this.http.get(url);
    };
    ReviewService.prototype.saveReview = function (review) {
        var authUser = this.authService.getUser();
        review.user = authUser;
        if (review.id) {
            var url = this.reviewUrl + "/" + authUser.id;
            return this.http.put(url, review);
        }
        else {
            return this.http.post(this.reviewUrl, review);
        }
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant-list/restaurant-list.component */ "./src/app/restaurant-list/restaurant-list.component.ts");
/* harmony import */ var _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant-detail/restaurant-detail.component */ "./src/app/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'signup', component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_7__["SignupFormComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'restaurant', component: _restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantListComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'restaurant/:id', component: _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantDetailComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  padding-top: 0px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent.prototype.isAuthenticated = function () {
        if (document.cookie.indexOf("JSESSION") >= 0) {
            return true;
        }
        localStorage.removeItem("user");
        return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var _restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant-list/restaurant-list.component */ "./src/app/restaurant-list/restaurant-list.component.ts");
/* harmony import */ var _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant-detail/restaurant-detail.component */ "./src/app/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantListComponent"],
                _restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_11__["RestaurantDetailComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_12__["SignupFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_9__["StarRatingModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authenticationService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.loginUrl = '/login';
        this.signupUrl = '/signup';
        this.userSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        this.userSub.subscribe(function (newUser) {
            _this.user = newUser;
        });
    }
    AuthenticationService.prototype.login = function (login) {
        return this.httpClient.post(this.loginUrl, login, this.httpOptions);
    };
    AuthenticationService.prototype.signup = function (signup) {
        return this.httpClient.post(this.signupUrl, signup, this.httpOptions);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        if (document.cookie.indexOf("JSESSION") >= 0) {
            this.userSub.next(JSON.parse(localStorage.getItem("user")));
            return true;
        }
        localStorage.removeItem("user");
        this.userSub.next(null);
        return false;
    };
    AuthenticationService.prototype.getUser = function () {
        return this.user;
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this.deleteCookie();
        this.userSub.next(null);
    };
    AuthenticationService.prototype.deleteCookie = function () {
        document.cookie = "JSESSION" + '=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.logo{\r\n  width: 50%;\r\n  height: 50%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.container-fluid {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n#recent{\r\n  background-color: #CF1E00;\r\n}\r\n\r\n#recent h1, #recent h3 {\r\n  color: white;\r\n}\r\n\r\n.main{\r\n  background-color: white;\r\n}\r\n\r\n.main > h1, .main > p {\r\n  color: #CF1E00;\r\n}\r\n\r\n.main > button, .main > button:active {\r\n  background-color: #CF1E00;\r\n  border-color: #CF1E00;\r\n  color: #fff;\r\n}\r\n\r\n.main > button:hover {\r\n  background-color: #fff;\r\n  border-color: #CF1E00;\r\n  color: #CF1E00;\r\n}\r\n\r\n.comp{\r\n  background-color: #b63a24;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.comp > h1, .comp > p {\r\n  color: white;\r\n}\r\n\r\n.comp > button:hover {\r\n  background-color: #b63a24;\r\n  border-color: #fff;\r\n  color: #fff;\r\n}\r\n\r\n.comp > button, .comp > button:active {\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n  color: #b63a24;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"recent\">\n  <h1 class=\"display-3\">Welcome,</h1>\n  <h3>Your Recent Reviews:</h3>\n  <div class=\"row card-deck\">\n    <div class=\"col-md-4 card text-center\" *ngFor=\"let review of reviews\">\n      <div class=\"card-body\">\n        <div class=\"logo\">\n          <img src=\"{{review.item.restaurant.logoPath}}\">\n        </div>\n        <h5 class=\"card-title\">{{review.item.name}}</h5>\n        <star-rating [readOnly]=\"true\" [rating]=\"review.rating\"></star-rating>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid main text-center\">\n  <h1 class=\"display-3\">Start Your Search</h1>\n  <p class=\"lead\">Review food you've already had from our list of restaurants. Doing so will help us find out what you like.</p>  \n  <button [routerLink]=\"['/restaurant']\" class=\"btn btn-primary main\">Find Restaurants</button>\n</div>\n<div class=\"container-fluid comp text-center\">\n    <h1 class=\"display-3\">Try Something New</h1>\n    <p class=\"lead\">We use the reviews that you give us to find users that have similar tastes. This allows us to predict and recommend foods that you may like, but haven't tried yet\n      Click below to find out. (Coming soon)\n    </p>  \n    <button class=\"btn btn-primary main disabled\">Give me some food!</button>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-services/review.service */ "./src/app/api-services/review.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(reviewService) {
        this.reviewService = reviewService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getRecentReviews();
    };
    DashboardComponent.prototype.getRecentReviews = function () {
        var _this = this;
        this.reviewService.getRecentReviews().subscribe(function (reviews) {
            return _this.reviews = reviews;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_api_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  /* background: url(\"\"); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 600px;\r\n}\r\n\r\n.container {\r\n  background-color: white;\r\n  border-radius: 2%;\r\n}\r\n\r\n.container > button, p{\r\n  display: inline-block;\r\n  justify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container col-md-3\">\n    <h1> Sign In</h1>\n    <form (ngSubmit)=\"onSubmit(login)\" #login=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input name=\"username\" ngModel #name=\"ngModel\" type=\"text\" class=\"form-control\" required>\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"text-danger\">\n          <div *ngIf=\"name.errors.required\">\n            *This field is required\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input name=\"password\" ngModel #password=\"ngModel\" type=\"password\" class=\"form-control\" required>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\n          <div *ngIf=\"password.errors.required\">\n            *This field is required\n          </div>\n        </div>\n      </div>\n      <div class=\"row text-danger container\" *ngIf=\"message\">\n        <p>{{message}}</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button> \n      <p>or <a routerLink=\"/signup\">Sign up</a></p>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function (ngform) {
        var _this = this;
        this.authenticationService.login(ngform.value).subscribe(function (user) {
            localStorage.setItem("user", JSON.stringify(user));
            _this.router.navigate(['']);
        }, function (err) {
            if (err.status == 401) {
                var body = err.error;
                _this.message = body.message;
            }
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background-color: #CF1E00;\r\n}\r\n\r\n\r\na.dropdown-toggle, a:hover.dropdown-toggle, a:visited.dropdown-toggle {\r\n  color: white;\r\n}\r\n\r\n\r\ndiv {\r\n  color: white;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Food Recommender System</a>\n  <div *ngIf=\"authService.user != null\" class=\"dropdown show\">\n    <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Hello, {{authService.user.username}}\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"menu\">\n        <a class=\"dropdown-item\" (click)=\"authService.logout()\" href=\"/\">Sign out</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.user = authService.user;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button, button:active {\r\n  background-color: #CF1E00;\r\n  border-color: #CF1E00;\r\n  color: #fff;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #fff;\r\n  border-color: #CF1E00;\r\n  color: #CF1E00;\r\n}\r\n\r\np {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.logo {\r\n  width: 250px;\r\n  height: 250px;\r\n  border-radius: 50px;\r\n  border-style: solid;\r\n  display: flex;\r\n}\r\n\r\nimg {\r\n  width: 200px;\r\n  height: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  margin-left: 0px;\r\n}"

/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"reviews && reviews.length === menu.length\">\n  <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"logo\" [style.border-color]=\"restaurant.primaryColor\">\n      <img src=\"{{restaurant.logoPath}}\"> \n    </div>\n    <div class=\"title\">\n        <h2 class=\"display-2\">\n            {{restaurant.name}}\n        </h2>\n    </div>      \n  </div>\n  </div>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let review of reviews\" class=\"list-group-item\">\n      <div class=\"row align-items-center\">\n          <p class=\"col-4\">{{review.item.name}}</p>\n          <star-rating [rating]=\"review.rating\" (ratingChange)=\"onRatingChange($event,review)\" class=\"col-4\"></star-rating>\n          <button class=\"btn btn-primary\" [hidden]=\"selectedReview!==review\" (click)=\"saveReview()\">Submit</button>\n          <p class=\"text-success\" id=\"{{review.item.name}}\"></p>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/restaurant-detail/restaurant-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/restaurant-detail/restaurant-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RestaurantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailComponent", function() { return RestaurantDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-services/review.service */ "./src/app/api-services/review.service.ts");
/* harmony import */ var _api_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-services/restaurant.service */ "./src/app/api-services/restaurant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review */ "./src/app/review.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(revService, restService, route) {
        this.revService = revService;
        this.restService = restService;
        this.route = route;
        this.selectedReview = new _review__WEBPACK_IMPORTED_MODULE_4__["Review"]();
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    RestaurantDetailComponent.prototype.addNotReviewed = function () {
        var _this = this;
        this.menu.forEach(function (item) {
            if (_this.reviews.filter(function (review) {
                return review.item.id === item.id;
            }).length == 0) {
                _this.reviews.push(new _review__WEBPACK_IMPORTED_MODULE_4__["Review"](null, item, 0));
            }
        });
    };
    RestaurantDetailComponent.prototype.getMenuReviews = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.revService.getReviews(id).subscribe(function (reviews) {
            _this.reviews = reviews;
            _this.addNotReviewed();
        });
    };
    RestaurantDetailComponent.prototype.getMenu = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.restService.getMenu(id).subscribe(function (menu) {
            _this.menu = menu;
            _this.restaurant = _this.menu[0].restaurant;
            _this.getMenuReviews();
        });
    };
    RestaurantDetailComponent.prototype.onRatingChange = function ($event, review) {
        if ($event.rating == review.rating) {
            return;
        }
        if (review.item != this.selectedReview.item) {
            var deselected = this.selectedReview;
            deselected.rating = this.selectedOrigRating;
            this.selectedReview = review;
            this.selectedOrigRating = review.rating;
        }
        this.selectedReview.rating = $event.rating;
    };
    RestaurantDetailComponent.prototype.saveReview = function () {
        var _this = this;
        this.revService.saveReview(this.selectedReview).subscribe(function (res) {
            var reviewCssId = _this.selectedReview.item.name;
            _this.selectedReview = new _review__WEBPACK_IMPORTED_MODULE_4__["Review"]();
            _this.selectedOrigRating = 0;
            document.getElementById(reviewCssId).innerHTML = res.message;
            setTimeout(function () {
                document.getElementById(reviewCssId).innerHTML = null;
            }, 5000);
        });
    };
    RestaurantDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurant-detail',
            template: __webpack_require__(/*! ./restaurant-detail.component.html */ "./src/app/restaurant-detail/restaurant-detail.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-detail.component.css */ "./src/app/restaurant-detail/restaurant-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_api_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"], _api_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());



/***/ }),

/***/ "./src/app/restaurant-list/restaurant-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/restaurant-list/restaurant-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n  height: 50px;\r\n  display: block;\r\n}\r\n\r\nimg {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/restaurant-list/restaurant-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/restaurant-list/restaurant-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n  <ul>\n    <li *ngFor=\"let restaurant of restaurants\">\n      <div class=\"logo\">\n        <img src=\"{{restaurant.logoPath}}\">\n      </div>\n      <p>{{restaurant.name}}</p>\n    </li> \n  </ul>\n</div> -->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-4 card text-center\" *ngFor=\"let restaurant of restaurants\" routerLink=\"/restaurant/{{restaurant.id}}\">\n        <div class=\"card-body\">\n          <div class=\"logo\">\n            <img src=\"{{restaurant.logoPath}}\">\n          </div>\n          <p>{{restaurant.name}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurant-list/restaurant-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurant-list/restaurant-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RestaurantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListComponent", function() { return RestaurantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-services/restaurant.service */ "./src/app/api-services/restaurant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantListComponent = /** @class */ (function () {
    function RestaurantListComponent(restaurantServ) {
        this.restaurantServ = restaurantServ;
    }
    RestaurantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantServ.getAll().subscribe(function (res) {
            _this.restaurants = res;
        });
    };
    RestaurantListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restaurant-list',
            template: __webpack_require__(/*! ./restaurant-list.component.html */ "./src/app/restaurant-list/restaurant-list.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-list.component.css */ "./src/app/restaurant-list/restaurant-list.component.css")]
        }),
        __metadata("design:paramtypes", [_api_services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]])
    ], RestaurantListComponent);
    return RestaurantListComponent;
}());



/***/ }),

/***/ "./src/app/review.ts":
/*!***************************!*\
  !*** ./src/app/review.ts ***!
  \***************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review(user, item, rating) {
        this.user = user;
        this.item = item;
        this.rating = rating;
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  /* background: url(\"\"); */\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 600px;\r\n}\r\n\r\n.container {\r\n  background-color: white;\r\n  border-radius: 2%;\r\n}\r\n\r\n.container > button, p{\r\n  display: inline-block;\r\n  justify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container col-md-3\">\n      <h1> Sign Up</h1>\n      <form (ngSubmit)=\"onSubmit(signup)\" #signup=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input name=\"username\" ngModel #name=\"ngModel\" type=\"text\" class=\"form-control\" pattern=\"[a-zA-Z0-9_]+\" required>\n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"text-danger\">\n            <div *ngIf=\"name.errors.required\">\n              *This field is required\n            </div>\n            <div *ngIf=\"name.errors.pattern\">\n              *Must contain only alphnumeric characters and underscores(_)\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input name=\"email\" #email=\"ngModel\" ngModel type=\"email\" class=\"form-control\" email required>\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text-danger\">\n              <div *ngIf=\"email.errors.required\">\n                  *This field is required\n              </div>\n              <div *ngIf=\"email.errors.email\">\n                  *Incorrect email format\n              </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input name=\"password\" ngModel #password=\"ngModel\" type=\"password\" class=\"form-control\" minlength=\"8\" maxlength=\"16\" pattern=\"[a-zA-Z0-9_!@#$%^&*-]+\" required>\n          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\n            <div *ngIf=\"password.errors.required\">\n              *This field is required\n            </div>\n            <div *ngIf=\"password.errors.pattern\">\n                *Must contain only alphnumeric characters and the following:_!@#$%^&*-\n            </div>\n            <div *ngIf=\"password.errors.minlength\">\n                *Minimum length of 8 required\n            </div>\n            <div *ngIf=\"password.errors.maxlength\">\n                *Maximum length of 16 required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"confirmPassword\">Confirm Password</label>\n          <input name=\"confirmPassword\" #confirmPassword=\"ngModel\" ngModel type=\"password\" class=\"form-control\" minlength=\"8\" maxlength=\"16\" pattern=\"[a-zA-Z0-9_!@#$%^&*-]+\" required>\n          <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched); else comparePass\" class=\"text-danger\">\n              <div *ngIf=\"confirmPassword.errors.required\">\n                  *This field is required\n              </div>\n              <div *ngIf=\"confirmPassword.errors.pattern\">\n                  *Must contain only alphnumeric characters and the following:_!@#$%^&*-\n              </div>\n              <div *ngIf=\"confirmPassword.errors.minlength\">\n                  *Minimum length of 8 required\n              </div>\n              <div *ngIf=\"confirmPassword.errors.maxlength\">\n                  *Maximum length of 16 required\n              </div>\n          </div>\n          <ng-template #comparePass>\n              <div *ngIf=\"confirmPassword.value !== password.value\" class=\"text-danger\">\n                *Passwords do not match\n              </div>\n          </ng-template>\n        </div>\n\n        <div class=\"row text-danger container\" *ngIf=\"message\">\n          <p>{{message}}</p>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signup.valid || confirmPassword.value !== password.value\">Sign up!</button> \n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.onSubmit = function (ngform) {
        var _this = this;
        this.authenticationService.signup(ngform.value).subscribe(function (user) {
            localStorage.setItem("user", JSON.stringify(user));
            _this.router.navigate(['']);
        }, function (err) {
            if (err.status == 401) {
                var body = err.error;
                _this.message = body.message;
            }
        });
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Documents\Coding\Spring-Projects\recommender-system\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
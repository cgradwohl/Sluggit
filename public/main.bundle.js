webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(178),
        styles: [__webpack_require__(168)]
    })
    // HomeComponent CONFIG
    ,
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(nativeAuthService, router, flashMessage) {
        this.nativeAuthService = nativeAuthService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // onNativeLoginSubmit()
    // grabs user data from login form and calls authenticateUser() using observables
    // stores user data in local storage on success
    LoginComponent.prototype.onNativeLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.nativeAuthService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.nativeAuthService.storeNativeUserData(data.token, data.user);
                _this.flashMessage.show('Successful login!', { cssClass: 'alert-success' });
                _this.router.navigate(['/feed']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(179),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__["a" /* NativeAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__["a" /* NativeAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(nativeAuthService, router, flashMessage) {
        this.nativeAuthService = nativeAuthService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    // onNativeLogoutClick()
    // calls nativeLogout() from the native auth service and displays success message
    NavbarComponent.prototype.onNativeLogoutClick = function () {
        this.nativeAuthService.nativeLogout();
        this.flashMessage.show('You have successfully logged out.', { cssClass: 'alert-success' });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__["a" /* NativeAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__["a" /* NativeAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularComponent = (function () {
    function PopularComponent() {
    }
    PopularComponent.prototype.ngOnInit = function () {
    };
    return PopularComponent;
}());
PopularComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-popular',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], PopularComponent);

//# sourceMappingURL=popular.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    // constructor()
    // injects front end router and native auth service
    function ProfileComponent(router, nativeAuthService) {
        this.router = router;
        this.nativeAuthService = nativeAuthService;
    }
    // ngOnInit()
    // initializes the component with user token data
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nativeAuthService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__["a" /* NativeAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_native_auth_service__["a" /* NativeAuthService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicFeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicFeedComponent = (function () {
    function PublicFeedComponent() {
    }
    PublicFeedComponent.prototype.ngOnInit = function () {
    };
    return PublicFeedComponent;
}());
PublicFeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-feed',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], PublicFeedComponent);

//# sourceMappingURL=public-feed.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_reg_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    // constructor()
    // injects the native register service into the component on constuction
    function RegisterComponent(nativeValidateService, nativeAuthService, flashMsgService, router) {
        this.nativeValidateService = nativeValidateService;
        this.nativeAuthService = nativeAuthService;
        this.flashMsgService = flashMsgService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    // onNativeRegisterSubmit()
    // creates user object from user input, validates user form input, and registers user
    RegisterComponent.prototype.onNativeRegisterSubmit = function () {
        var _this = this;
        // USER OBJECT
        // grabs user data from register form using two way data binding
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // FORM VALIDATION
        // checks user register form for missing entries
        var missingEntry = !this.nativeValidateService.nativeRegisterFormValidate(user);
        if (missingEntry) {
            this.flashMsgService.show('Please make sure all fields have valid entries!', { cssClass: 'alert-danger' });
            return false;
        }
        var invalidEmail = !this.nativeValidateService.nativeEmailValidate(user.email);
        if (invalidEmail) {
            this.flashMsgService.show('Please enter a valid email!', { cssClass: 'alert-danger' });
            return false;
        }
        // REGISTER USER
        // calls registerUser() which makes post request to user/register api endpoint
        this.nativeAuthService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMsgService.show('Success!', { cssClass: 'alert-success' });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMsgService.show('Register failed! Please try again!', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_native_reg_validate_service__["a" /* NativeRegisterValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_native_reg_validate_service__["a" /* NativeRegisterValidationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_native_auth_service__["a" /* NativeAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_native_auth_service__["a" /* NativeAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".fa-terminal {\n  color: #eb6864\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN APP HTML COMPONENT -->\n<!-- this is the meeting place for all other components -->\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <!-- router outlet contains all our routing info (see app.module.ts) -->\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Welcome to the Sluggit Home Page</h1>\n  <p class=\"lead\">A computer science blog and resource.</p>\n\n  <div>\n    <a class=\"btn btn-info btn-lg\" [routerLink]=\"['/register']\">Sign up now!</a>\n    <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Col1</h3>\n    <p>sjdc aicn asocie kdcnpw eoace coeqc cdk</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Col2</h3>\n    <p>sjdc aicn asocie kdcnpw eoace coeqc cdk</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>col4</h3>\n    <p>sjdc aicn asocie kdcnpw eoace coeqc cdk</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (submit)=\"onNativeLoginSubmit()\">\n  <fieldset>\n\n\n    <legend>Login to Sluggit.</legend>\n\n\n    <!-- AUTH LOGIN PROPERTIES -->\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Username</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Password</label>\n      <div class=\"col-lg-5\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n    </div>\n\n\n\n    <!-- BTN BAR -->\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n      </div>\n    </div>\n\n\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<!-- bootstrap navbar :) from http://getbootstrap.com/examples/starter-template/ -->\n<!-- uses angulars routerLink and selectors see this for details: https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html -->\n\n\n<!-- UPPER NAVBAR -->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-terminal\" aria-hidden=\"true\"></i> Sluggit</a>\n    </div>\n\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n      <!-- Angular RouterLink object injection -->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!nativeAuthService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Sign up</a></li>\n        <li *ngIf=\"!nativeAuthService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n\n        <li *ngIf=\"nativeAuthService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"nativeAuthService.loggedIn()\"><a (click)=\"onNativeLogoutClick()\" href=\"#\">Logout</a></li>\n\n      </ul>\n\n    </div><!--/.nav-collapse -->\n\n  </div>\n</nav>\n\n\n\n<!-- LOWER NAVBAR -->\n<nav class=\"navbar\" *ngIf=\"nativeAuthService.loggedIn()\" >\n  <div class=\"container\">\n    <div class=\"navbar-inner\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n      <!-- Angular RouterLink object injection -->\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/popular']\">Popular on Sluggit</a></li>\n      </ul>\n\n      <!-- Angular RouterLink object injection -->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/search']\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</a></li>\n      </ul>\n\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<p>\n  popular works!\n</p>\n\n<p>\n  same as public feed but blogs are shown by order of likes.\n</p>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<p>\n  public-feed works!\n</p>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<!-- DEV NOTES -->\n\n<!-- ngModel -->\n<!-- https://angular.io/docs/ts/latest/api/forms/index/NgModel-directive.html -->\n<!-- The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive. -->\n<!-- [()] syntax (also known as 'banana-box syntax') allows us to use two way data binding -->\n\n\n<!-- Event Binding -->\n<!-- https://angular.io/docs/ts/latest/guide/user-input.html -->\n<!-- use Angular event bindings to respond to any DOM event. <button (click)=\"onClickMe()\">Click me!</button> -->\n\n<!-- =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  = -->\n<form class=\"form-horizontal\" (submit)=\"onNativeRegisterSubmit()\">\n  <fieldset>\n\n\n    <legend>Sign up now to start connecting on Sluggit.</legend>\n\n\n    <!-- REGISTER PROPERTIES -->\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Name</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Username</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Email</label>\n      <div class=\"col-lg-5\">\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-lg-2 control-label\">Password</label>\n      <div class=\"col-lg-5\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n    </div>\n\n\n\n\n    <!-- BTN BAR -->\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n\n\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n\n<p>\n  this will be a drop down menu of available tags. user clicks a tag and sees blog post's that have thoses tags. NOT A TEXT SEARCH.\n</p>\n"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeAuthService; });
// NOTES
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// OBSERVABLES
// javascript has a more general array object called Collections.
// collection objects like Map, Set, and WeakMap store values and objects( think fancy arrays or hashmaps)
// this auth service is a perfect situation to use a special COllection object called Observables
// An Observable is a collection that arrives over time.
// A representation of any set of values over any amount of time. This the most basic building block of RxJS.
// see http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html for more info.
// RXJS OPERATOR/MAP
// Like Array.prototype.map(), it passes each source value through a transformation function to get corresponding output values.
// see http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map for more info
// ANGULAR2-JWT
// this is a service we will use to hide and show elements depending on wheather there is a valid JWT
// If the token is valid, tokenNotExpired returns true, otherwise it returns false.
// https://github.com/auth0/angular2-jwt




var NativeAuthService = (function () {
    // constructor()
    // injects the Http object
    function NativeAuthService(http) {
        this.http = http;
    }
    // registerUser()
    // makes a POST request to the /register api endpoint
    // returns success or failure on repsonse
    // sends the user object to ./users/register api endpoint
    // the map() method makes the post request an Observable
    NativeAuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // NOTE FOR LOCAL DEV comment out for heroku deployment
        // const userObservable = this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
        // NOTE FOR HEROKU comment out for local development
        var userObservable = this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
        return userObservable;
    };
    // authenticateUser()
    // makes a POST request to the /auth api endpoint
    // returns success and JWT or failure on repsonse
    // sends the user object to ./users/register api endpoint
    // the map() method makes the post request an Observable
    NativeAuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // NOTE FOR LOCAL DEV comment out for heroku deployment
        // const userObservable = this.http.post('http://localhost:3000/users/auth', user, {headers: headers}).map(res => res.json());
        // NOTE FOR HEROKU comment out for local development
        var userObservable = this.http.post('users/auth', user, { headers: headers }).map(function (res) { return res.json(); });
        return userObservable;
    };
    // getProfile()
    // makes a protected/authenticated get request, requires a valid token to access this endpoint
    // sends a valid auth token to the api endpoint
    NativeAuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.fetchToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // NOTE FOR LOCAL DEV comment out for heroku deployment
        // const userObservable = this.http.get('http://localhost:3000/users/profile', {headers: headers}).map(res => res.json());
        // NOTE FOR HEROKU comment out for local development
        var userObservable = this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
        return userObservable;
    };
    // storeNativeUserData()
    // stores the user data in local storage so that the browser remembers the user login info.
    NativeAuthService.prototype.storeNativeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // fetchToken()
    // gets user JWT token from localStroage if it exists
    // sets the class property authToken to the token it fetches
    NativeAuthService.prototype.fetchToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // loggedIn()
    // if the token is valid, tokenNotExpired returns true, otherwise it returns false
    // loggedIn() will be used in html to conditionally hide and show elements
    NativeAuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    // nativeLogout()
    // clears localStorage and removes JWT token
    NativeAuthService.prototype.nativeLogout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return NativeAuthService;
}());
NativeAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], NativeAuthService);

var _a;
//# sourceMappingURL=native-auth.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeRegisterValidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NativeRegisterValidationService = (function () {
    function NativeRegisterValidationService() {
    }
    // nativeRegFormValidate()
    // validates all register form fields are defined
    NativeRegisterValidationService.prototype.nativeRegisterFormValidate = function (user) {
        if (user.name === undefined ||
            user.username === undefined ||
            user.email === undefined ||
            user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
        ;
    };
    // nativeEmailValidate()
    // ensures the user entered a valid email address
    // borrowed from --> http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    NativeRegisterValidationService.prototype.nativeEmailValidate = function (email) {
        var regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // returns true if valid email and returns false otherwise
        return regExpression.test(email);
    };
    return NativeRegisterValidationService;
}());
NativeRegisterValidationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NativeRegisterValidationService);

//# sourceMappingURL=native-reg-validate.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(177),
        styles: [__webpack_require__(167)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_public_feed_public_feed_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_popular_popular_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_native_reg_validate_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_native_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// NG MODULES






// COMPONENTS









// SERVICES


// ROUTER CONFIG
// routing logic is exported as the <router-outlet> html tag
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'feed', component: __WEBPACK_IMPORTED_MODULE_11__components_public_feed_public_feed_component__["a" /* PublicFeedComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'popular', component: __WEBPACK_IMPORTED_MODULE_13__components_popular_popular_component__["a" /* PopularComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */] }
];
// NG MODULE CONFIG
// defines the set of injectable objects that are available in the injector of this module.
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_public_feed_public_feed_component__["a" /* PublicFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_popular_popular_component__["a" /* PopularComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_native_reg_validate_service__["a" /* NativeRegisterValidationService */],
            __WEBPACK_IMPORTED_MODULE_16__services_native_auth_service__["a" /* NativeAuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.bundle.js.map
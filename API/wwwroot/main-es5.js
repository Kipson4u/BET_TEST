function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/account/account.service.ts":
  /*!********************************************!*\
    !*** ./src/app/account/account.service.ts ***!
    \********************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppAccountAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(http, router) {
        _classCallCheck(this, AccountService);

        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.currentUser$ = this.currentUserSource.asObservable();
      }

      _createClass(AccountService, [{
        key: "loadCurrentUser",
        value: function loadCurrentUser(token) {
          var _this = this;

          if (token === null) {
            this.currentUserSource.next(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
          }

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers = headers.set('Authorization', "Bearer ".concat(token));
          return this.http.get(this.baseUrl + 'account', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user) {
              localStorage.setItem('token', user.token);

              _this.currentUserSource.next(user);
            }
          }));
        }
      }, {
        key: "login",
        value: function login(values) {
          var _this2 = this;

          return this.http.post(this.baseUrl + 'account/login', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user) {
              localStorage.setItem('token', user.token);

              _this2.currentUserSource.next(user);
            }
          }));
        }
      }, {
        key: "register",
        value: function register(values) {
          var _this3 = this;

          return this.http.post(this.baseUrl + 'account/register', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user) {
              localStorage.setItem('token', user.token);

              _this3.currentUserSource.next(user);
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          this.currentUserSource.next(null);
          this.router.navigateByUrl('/');
        }
      }, {
        key: "checkEmailExists",
        value: function checkEmailExists(email) {
          return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
        }
      }, {
        key: "getUserAddress",
        value: function getUserAddress() {
          return this.http.get(this.baseUrl + 'account/address');
        }
      }, {
        key: "updateUserAddress",
        value: function updateUserAddress(address) {
          return this.http.put(this.baseUrl + 'account/address', address);
        }
      }]);

      return AccountService;
    }();

    AccountService.??fac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AccountService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
      token: AccountService,
      factory: AccountService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _core_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core/Guards/auth.guard */
    "./src/app/core/Guards/auth.guard.ts");
    /* harmony import */


    var _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/server-error/server-error.component */
    "./src/app/core/server-error/server-error.component.ts");
    /* harmony import */


    var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/not-found/not-found.component */
    "./src/app/core/not-found/not-found.component.ts");
    /* harmony import */


    var _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/test-error/test-error.component */
    "./src/app/core/test-error/test-error.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      data: {
        breadcrumb: 'Home'
      }
    }, {
      path: 'test-error',
      component: _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_3__["TestErrorComponent"],
      data: {
        breadcrumb: 'Test Error'
      }
    }, {
      path: 'server-error',
      component: _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_1__["ServerErrorComponent"],
      data: {
        breadcrumb: 'Server Error'
      }
    }, {
      path: 'not-found',
      component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"],
      data: {
        breadcrumb: 'Not Found'
      }
    }, {
      path: 'shop',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | shop-shop-module */
        "shop-shop-module").then(__webpack_require__.bind(null,
        /*! ./shop/shop.module */
        "./src/app/shop/shop.module.ts")).then(function (m) {
          return m.ShopModule;
        });
      },
      data: {
        breadcrumb: 'Shop'
      }
    }, {
      path: 'basket',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | basket-basket-module */
        "basket-basket-module").then(__webpack_require__.bind(null,
        /*! ./basket/basket.module */
        "./src/app/basket/basket.module.ts")).then(function (m) {
          return m.BasketModule;
        });
      },
      data: {
        breadcrumb: 'Basket'
      }
    }, {
      path: 'checkout',
      canActivate: [_core_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | checkout-checkout-module */
        "checkout-checkout-module").then(__webpack_require__.bind(null,
        /*! ./checkout/checkout.module */
        "./src/app/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutModule;
        });
      },
      data: {
        breadcrumb: 'Checkout'
      }
    }, {
      path: 'orders',
      canActivate: [_core_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | orders-orders-module */
        "orders-orders-module").then(__webpack_require__.bind(null,
        /*! ./orders/orders.module */
        "./src/app/orders/orders.module.ts")).then(function (m) {
          return m.OrdersModule;
        });
      },
      data: {
        breadcrumb: 'Orders'
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ./account/account.module */
        "./src/app/account/account.module.ts")).then(function (m) {
          return m.AccountModule;
        });
      },
      data: {
        breadcrumb: {
          skip: true
        }
      }
    }, {
      path: '**',
      redirectTo: 'not-found',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./account/account.service */
    "./src/app/account/account.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/nav-bar/nav-bar.component */
    "./src/app/core/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _core_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/section-header/section-header.component */
    "./src/app/core/section-header/section-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(basketService, accountService) {
        _classCallCheck(this, AppComponent);

        this.basketService = basketService;
        this.accountService = accountService;
        this.title = 'BET E Store';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadBasket();
          this.loadCurrentUser();
        }
      }, {
        key: "loadCurrentUser",
        value: function loadCurrentUser() {
          var token = localStorage.getItem('token');
          this.accountService.loadCurrentUser(token).subscribe(function () {
            console.log('loaded user');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "loadBasket",
        value: function loadBasket() {
          var basketId = localStorage.getItem('basket_id');

          if (basketId) {
            this.basketService.getBasket(basketId).subscribe(function () {
              console.log('Initialized Basket');
            }, function (error) {
              console.log(error);
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-section-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _core_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__["SectionHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]
        }, {
          type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core/interceptors/jwt.interceptor */
    "./src/app/core/interceptors/jwt.interceptor.ts");
    /* harmony import */


    var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/interceptors/loading.interceptor */
    "./src/app/core/interceptors/loading.interceptor.ts");
    /* harmony import */


    var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/interceptors/error.interceptor */
    "./src/app/core/interceptors/error.interceptor.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_1__["LoadingInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_1__["LoadingInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/basket/basket.service.ts":
  /*!******************************************!*\
    !*** ./src/app/basket/basket.service.ts ***!
    \******************************************/

  /*! exports provided: BasketService */

  /***/
  function srcAppBasketBasketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketService", function () {
      return BasketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_models_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/models/basket */
    "./src/app/shared/models/basket.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BasketService = /*#__PURE__*/function () {
      function BasketService(http) {
        _classCallCheck(this, BasketService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.basketSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.basket$ = this.basketSource.asObservable();
        this.basketTotalSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.basketTotal$ = this.basketTotalSource.asObservable();
        this.shipping = 0;
      }

      _createClass(BasketService, [{
        key: "createPaymentIntent",
        value: function createPaymentIntent() {
          var _this4 = this;

          return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBasketValue().id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (basket) {
            _this4.basketSource.next(basket);
          }));
        }
      }, {
        key: "setShippingPrice",
        value: function setShippingPrice(deiveryMethod) {
          this.shipping = deiveryMethod.price;
          var basket = this.getCurrentBasketValue();
          basket.deliveryMethodId = deiveryMethod.id;
          basket.shippingPrice = deiveryMethod.price;
          this.calculateTotals();
          this.setBasket(basket);
        }
      }, {
        key: "getBasket",
        value: function getBasket(id) {
          var _this5 = this;

          return this.http.get(this.baseUrl + 'basket?id=' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (basket) {
            _this5.basketSource.next(basket);

            _this5.shipping = basket.shippingPrice;

            _this5.calculateTotals();
          }));
        }
      }, {
        key: "setBasket",
        value: function setBasket(basket) {
          var _this6 = this;

          return this.http.post(this.baseUrl + 'basket', basket).subscribe(function (response) {
            _this6.basketSource.next(response);

            _this6.calculateTotals();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCurrentBasketValue",
        value: function getCurrentBasketValue() {
          return this.basketSource.value;
        }
      }, {
        key: "addItemToBasket",
        value: function addItemToBasket(item) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var itemToAdd = this.mapProductItemToBasketItem(item, quantity);
          var basket = this.getCurrentBasketValue();

          if (basket === null) {
            basket = this.createBasket();
          }

          basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
          this.setBasket(basket);
        }
      }, {
        key: "incrementItemQuantity",
        value: function incrementItemQuantity(item) {
          var basket = this.getCurrentBasketValue();
          var foundItemIndex = basket.items.findIndex(function (x) {
            return x.id === item.id;
          });
          basket.items[foundItemIndex].quantity++;
          this.setBasket(basket);
        }
      }, {
        key: "decrementItemQuantity",
        value: function decrementItemQuantity(item) {
          var basket = this.getCurrentBasketValue();
          var foundItemIndex = basket.items.findIndex(function (x) {
            return x.id === item.id;
          });

          if (basket.items[foundItemIndex].quantity > 1) {
            basket.items[foundItemIndex].quantity--;
            this.setBasket(basket);
          } else {
            this.removeItemFromBasket(item);
          }
        }
      }, {
        key: "removeItemFromBasket",
        value: function removeItemFromBasket(item) {
          var basket = this.getCurrentBasketValue();

          if (basket.items.some(function (x) {
            return x.id === item.id;
          })) {
            basket.items = basket.items.filter(function (i) {
              return i.id !== item.id;
            });

            if (basket.items.length > 0) {
              this.setBasket(basket);
            } else {
              this.deleteBasket(basket);
            }
          }
        }
      }, {
        key: "deleteLocalBasket",
        value: function deleteLocalBasket(id) {
          this.basketSource.next(null);
          this.basketTotalSource.next(null);
          localStorage.removeItem('basket_id');
        }
      }, {
        key: "deleteBasket",
        value: function deleteBasket(basket) {
          var _this7 = this;

          return this.http["delete"](this.baseUrl + 'basket?id=' + basket.id).subscribe(function () {
            _this7.basketSource.next(null);

            _this7.basketTotalSource.next(null);

            localStorage.removeItem('basket_id');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "calculateTotals",
        value: function calculateTotals() {
          var basket = this.getCurrentBasketValue();
          var shipping = this.shipping;
          var subtotal = basket.items.reduce(function (a, b) {
            return b.price * b.quantity + a;
          }, 0);
          var total = subtotal + shipping;
          this.basketTotalSource.next({
            shipping: shipping,
            total: total,
            subtotal: subtotal
          });
        }
      }, {
        key: "addOrUpdateItem",
        value: function addOrUpdateItem(items, itemToAdd, quantity) {
          var index = items.findIndex(function (i) {
            return i.id === itemToAdd.id;
          });

          if (index === -1) {
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
          } else {
            items[index].quantity += quantity;
          }

          return items;
        }
      }, {
        key: "createBasket",
        value: function createBasket() {
          var basket = new _shared_models_basket__WEBPACK_IMPORTED_MODULE_4__["Basket"]();
          localStorage.setItem('basket_id', basket.id);
          return basket;
        }
      }, {
        key: "mapProductItemToBasketItem",
        value: function mapProductItemToBasketItem(item, quantity) {
          return {
            id: item.id,
            productName: item.name,
            price: item.price,
            pictureUrl: item.pictureUrl,
            quantity: quantity,
            brand: item.productBrand,
            type: item.productType
          };
        }
      }]);

      return BasketService;
    }();

    BasketService.??fac = function BasketService_Factory(t) {
      return new (t || BasketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    BasketService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: BasketService,
      factory: BasketService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/Guards/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/Guards/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../account/account.service */
    "./src/app/account/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(accountService, router) {
        _classCallCheck(this, AuthGuard);

        this.accountService = accountService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this8 = this;

          return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (auth) {
            if (auth) {
              return true;
            }

            _this8.router.navigate(['account/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/Services/busy.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/Services/busy.service.ts ***!
    \***********************************************/

  /*! exports provided: BusyService */

  /***/
  function srcAppCoreServicesBusyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusyService", function () {
      return BusyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var BusyService = /*#__PURE__*/function () {
      function BusyService(spinnerService) {
        _classCallCheck(this, BusyService);

        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
      }

      _createClass(BusyService, [{
        key: "busy",
        value: function busy() {
          this.busyRequestCount++;
          this.spinnerService.show(undefined, {
            type: 'pacman',
            bdColor: 'rgba(255,255,255,0.7)',
            color: '#333333'
          });
        }
      }, {
        key: "idle",
        value: function idle() {
          this.busyRequestCount--;

          if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
          }
        }
      }]);

      return BusyService;
    }();

    BusyService.??fac = function BusyService_Factory(t) {
      return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]));
    };

    BusyService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: BusyService,
      factory: BusyService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BusyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/core/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-error/test-error.component */
    "./src/app/core/test-error/test-error.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/core/not-found/not-found.component.ts");
    /* harmony import */


    var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./server-error/server-error.component */
    "./src/app/core/server-error/server-error.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./section-header/section-header.component */
    "./src/app/core/section-header/section-header.component.ts");
    /* harmony import */


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
      type: CoreModule
    });
    CoreModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](CoreModule, {
        declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__["TestErrorComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__["ServerErrorComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"]],
        exports: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__["TestErrorComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__["ServerErrorComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
          })],
          exports: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/interceptors/error.interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/interceptors/error.interceptor.ts ***!
    \********************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppCoreInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(router, toastr) {
        _classCallCheck(this, ErrorInterceptor);

        this.router = router;
        this.toastr = toastr;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this9 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            if (error) {
              if (error.status === 400) {
                if (error.error.errors) {
                  throw error.error;
                } else {
                  _this9.toastr.error(error.error.message, error.error.statusCode);
                }
              }

              if (error.status === 401) {
                _this9.toastr.error(error.error.message, error.error.statusCode);
              }

              if (error.status === 404) {
                _this9.router.navigateByUrl('/not-found');
              }

              if (error.status === 500) {
                var navigationExtras = {
                  state: {
                    error: error.error
                  }
                };

                _this9.router.navigateByUrl('/server-error', navigationExtras);
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    ErrorInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/interceptors/jwt.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppCoreInterceptorsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor() {
        _classCallCheck(this, JwtInterceptor);
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = localStorage.getItem('token');

          if (token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.??fac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)();
    };

    JwtInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/interceptors/loading.interceptor.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
    \**********************************************************/

  /*! exports provided: LoadingInterceptor */

  /***/
  function srcAppCoreInterceptorsLoadingInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function () {
      return LoadingInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _Services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../Services/busy.service */
    "./src/app/core/Services/busy.service.ts");

    var LoadingInterceptor = /*#__PURE__*/function () {
      function LoadingInterceptor(busyService) {
        _classCallCheck(this, LoadingInterceptor);

        this.busyService = busyService;
      }

      _createClass(LoadingInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this10 = this;

          if (request.method === 'POST' && request.url.includes('orders')) {
            return next.handle(request);
          }

          if (request.url.includes('emailexists')) {
            return next.handle(request);
          }

          this.busyService.busy();
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this10.busyService.idle();
          }));
        }
      }]);

      return LoadingInterceptor;
    }();

    LoadingInterceptor.??fac = function LoadingInterceptor_Factory(t) {
      return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_Services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]));
    };

    LoadingInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoadingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _Services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/nav-bar/nav-bar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppCoreNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../account/account.service */
    "./src/app/account/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");

    function NavBarComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var basket_r3 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", basket_r3.items.length, " ");
      }
    }

    function NavBarComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }
    }

    function NavBarComponent_ng_container_14_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " View Basket ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " View Orders ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavBarComponent_ng_container_14_div_6_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r6.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function NavBarComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, NavBarComponent_ng_container_14_div_6_Template, 11, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 1, ctx_r2.currentUser$).displayName, "");
      }
    }

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(basketService, accountService) {
        _classCallCheck(this, NavBarComponent);

        this.basketService = basketService;
        this.accountService = accountService;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.basket$ = this.basketService.basket$;
          this.currentUser$ = this.accountService.currentUser$;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.accountService.logout();
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.??fac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    NavBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 16,
      vars: 11,
      consts: [[1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "justify-content-between", "p-3", "px-md-4", "mb-3", "bg-white", "border-bottom", "shadow-sm", "fixed-top"], ["src", "/assets/images/logo.png", "routerLink", "/", "alt", "BET E Store", 1, "logo", 2, "max-height", "70px"], [1, "my-2", "my-md-0", "mr-md-3", "text-uppercase", 2, "font-size", "larger"], ["routerLink", "/", "routerLinkActive", "active", 1, "p-2", 3, "routerLinkActiveOptions"], ["routerLink", "/shop", "routerLinkActive", "active", 1, "p-2"], [1, "d-flex", "align-items-center"], ["routerLink", "/basket", 1, "position-relative"], [1, "fa", "fa-shopping-cart", "fa-2x", "mr-5", "text-dark"], ["class", "cart-no", 4, "ngIf"], [4, "ngIf"], [1, "cart-no"], ["routerLink", "/account/login", 1, "btn", "btn-outline-secondary", "mr-2"], ["routerLink", "/account/register", 1, "btn", "btn-outline-secondary", "mr-3"], ["dropdown", "", 1, "dropdown", "ml-3", "mr-5"], ["dropdownToggle", "", 1, "dropdown-toggle", 2, "cursor", "pointer"], ["class", "dropdown-menu dropdown-menu-right", "style", "cursor: pointer;", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-right", 2, "cursor", "pointer"], ["routerLink", "/basket", 1, "dropdown-item", "d-flex", "align-items-center", "py-2"], [1, "fa", "fa-shopping-cart", "mr-3"], ["routerLink", "/orders", 1, "dropdown-item", "d-flex", "align-items-center", "py-2"], [1, "fa", "fa-history", "mr-3"], [1, "dropdown-divider"], [1, "dropdown-item", "d-flex", "align-items-center", "py-2", 3, "click"], [1, "fa", "fa-sign-out", "mr-3"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, NavBarComponent_div_10_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, NavBarComponent_ng_container_12_Template, 5, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NavBarComponent_ng_container_14_Template, 7, 3, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 4, ctx.basket$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 6, ctx.currentUser$) === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 8, ctx.currentUser$));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownMenuDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".cart-no[_ngcontent-%COMP%] {\n  position: absolute;\n  min-height: 25px;\n  min-width: 25px;\n  border-radius: 50%;\n  font-size: 1em;\n  background: blue;\n  color: white;\n  text-align: center;\n  top: -12px;\n  right: 32px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #343a40;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYtYmFyL0M6XFxVc2Vyc1xcdHNoaWRpZmtcXERvd25sb2Fkc1xcQW4tRS1jb21tZXJjZS1hcHAtd2l0aC0uTmV0LUNvcmUtYW5kLUFuZ3VsYXItbWFzdGVyXFxBbi1FLWNvbW1lcmNlLWFwcC13aXRoLS5OZXQtQ29yZS1hbmQtQW5ndWxhci1tYXN0ZXJcXGNsaWVudC9zcmNcXGFwcFxcY29yZVxcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVJO0VBQ0ksYUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1ubyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAtMTJweDtcbiAgICByaWdodDogMzJweDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICAgIFxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICB9XG59XG5cbi5sb2dvIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59IiwiLmNhcnQtbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogLTEycHg7XG4gIHJpZ2h0OiAzMnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbmEuYWN0aXZlIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmxvZ28ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9nbzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.scss']
        }]
      }], function () {
        return [{
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]
        }, {
          type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/not-found/not-found.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/not-found/not-found.component.ts ***!
    \*******************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppCoreNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.??fac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/section-header/section-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/section-header/section-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SectionHeaderComponent */

  /***/
  function srcAppCoreSectionHeaderSectionHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function () {
      return SectionHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SectionHeaderComponent_ng_container_0_section_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "xng-breadcrumb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var breadcrumbs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 1, breadcrumbs_r1.length > 0 && breadcrumbs_r1[breadcrumbs_r1.length - 1].label), " ");
      }
    }

    function SectionHeaderComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SectionHeaderComponent_ng_container_0_section_1_Template, 9, 3, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var breadcrumbs_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", breadcrumbs_r1.length > 0 && breadcrumbs_r1[breadcrumbs_r1.length - 1].label != "Home");
      }
    }

    var SectionHeaderComponent = /*#__PURE__*/function () {
      function SectionHeaderComponent(breadcrumbService) {
        _classCallCheck(this, SectionHeaderComponent);

        this.breadcrumbService = breadcrumbService;
      }

      _createClass(SectionHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breadcrumb$ = this.breadcrumbService.breadcrumbs$;
        }
      }]);

      return SectionHeaderComponent;
    }();

    SectionHeaderComponent.??fac = function SectionHeaderComponent_Factory(t) {
      return new (t || SectionHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]));
    };

    SectionHeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SectionHeaderComponent,
      selectors: [["app-section-header"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "py-3", "style", "margin-top: 105px; background-color: #f5f5f5;", 4, "ngIf"], [1, "py-3", 2, "margin-top", "105px", "background-color", "#f5f5f5"], [1, "container"], [1, "row", "d-flex", "align-items-center"], [1, "col-9"], [1, "col-3"]],
      template: function SectionHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SectionHeaderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.breadcrumb$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-header',
          templateUrl: './section-header.component.html',
          styleUrls: ['./section-header.component.scss']
        }]
      }], function () {
        return [{
          type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/server-error/server-error.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/server-error/server-error.component.ts ***!
    \*************************************************************/

  /*! exports provided: ServerErrorComponent */

  /***/
  function srcAppCoreServerErrorServerErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
      return ServerErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ServerErrorComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Note: if you are seeing this then Angular is probably not responsible ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "What to do next?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Open chrome dev tools");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Inspect the network tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Check the failing request");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Examine this request URL - make sure this is correct");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Reproduce the error in postman - if we get the same reponse in Postman, then the issue is NOT with Angular ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Following is the stack trace - this is where your investigation should start! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "code", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Error: ", ctx_r0.error.message, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.error.details);
      }
    }

    var ServerErrorComponent = /*#__PURE__*/function () {
      function ServerErrorComponent(router) {
        _classCallCheck(this, ServerErrorComponent);

        this.router = router;
        var navigation = router.getCurrentNavigation();
        this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
      }

      _createClass(ServerErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerErrorComponent;
    }();

    ServerErrorComponent.??fac = function ServerErrorComponent_Factory(t) {
      return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ServerErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ServerErrorComponent,
      selectors: [["app-server-error"]],
      decls: 4,
      vars: 1,
      consts: [[1, "container", "mt-5"], [4, "ngIf"], [1, "text-danger"], [1, "font-weight-bold"], [1, "mt-5", 2, "background-color", "whitesmoke"]],
      template: function ServerErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Internal Server Error - refreshing the page will make the exception disappear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ServerErrorComponent_ng_container_3_Template, 22, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-server-error',
          templateUrl: './server-error.component.html',
          styleUrls: ['./server-error.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/test-error/test-error.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/test-error/test-error.component.ts ***!
    \*********************************************************/

  /*! exports provided: TestErrorComponent */

  /***/
  function srcAppCoreTestErrorTestErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestErrorComponent", function () {
      return TestErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestErrorComponent_div_9_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var error_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](error_r2);
      }
    }

    function TestErrorComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TestErrorComponent_div_9_li_2_Template, 2, 1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.validationErrors);
      }
    }

    var TestErrorComponent = /*#__PURE__*/function () {
      function TestErrorComponent(http) {
        _classCallCheck(this, TestErrorComponent);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
      }

      _createClass(TestErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "get404Error",
        value: function get404Error() {
          this.http.get(this.baseUrl + 'products/42').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "get500Error",
        value: function get500Error() {
          this.http.get(this.baseUrl + 'buggy/servererror').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "get400Error",
        value: function get400Error() {
          this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "get400ValidationError",
        value: function get400ValidationError() {
          var _this11 = this;

          this.http.get(this.baseUrl + 'products/fortytwo').subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
            _this11.validationErrors = error.errors;
          });
        }
      }]);

      return TestErrorComponent;
    }();

    TestErrorComponent.??fac = function TestErrorComponent_Factory(t) {
      return new (t || TestErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TestErrorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TestErrorComponent,
      selectors: [["app-test-error"]],
      decls: 10,
      vars: 1,
      consts: [[1, "container", "mt-5"], [1, "btn", "btn-outline-primary", "mr-3", 3, "click"], ["class", "row mt-5", 4, "ngIf"], [1, "row", "mt-5"], [1, "text-danger"], [4, "ngFor", "ngForOf"]],
      template: function TestErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TestErrorComponent_Template_button_click_1_listener() {
            return ctx.get500Error();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Test 500 Error ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TestErrorComponent_Template_button_click_3_listener() {
            return ctx.get404Error();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Test 404 Error ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TestErrorComponent_Template_button_click_5_listener() {
            return ctx.get400Error();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Test 400 Error ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TestErrorComponent_Template_button_click_7_listener() {
            return ctx.get400ValidationError();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Test 400 Validation Error ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, TestErrorComponent_div_9_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.validationErrors);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdGVzdC1lcnJvci90ZXN0LWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TestErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-error',
          templateUrl: './test-error.component.html',
          styleUrls: ['./test-error.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 0,
      consts: [["src", "assets/images/hero1.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/hero2.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/hero3.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], [1, "featured"], [1, "d-flex", "justify-content-center", "pt-4"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Welcome to the Shop!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]],
      styles: [".featured[_ngcontent-%COMP%] {\n  height: 250px;\n}\n\nimg[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHRzaGlkaWZrXFxEb3dubG9hZHNcXEFuLUUtY29tbWVyY2UtYXBwLXdpdGgtLk5ldC1Db3JlLWFuZC1Bbmd1bGFyLW1hc3RlclxcQW4tRS1jb21tZXJjZS1hcHAtd2l0aC0uTmV0LUNvcmUtYW5kLUFuZ3VsYXItbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVkIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG5pbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLmZlYXR1cmVkIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: HomeModule
    });
    HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/basket-summary/basket-summary.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/basket-summary/basket-summary.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BasketSummaryComponent */

  /***/
  function srcAppSharedComponentsBasketSummaryBasketSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketSummaryComponent", function () {
      return BasketSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BasketSummaryComponent_ng_container_0_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasketSummaryComponent_ng_container_0_tr_19_i_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasketSummaryComponent_ng_container_0_tr_19_i_16_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r7.decrementItemQuantity(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasketSummaryComponent_ng_container_0_tr_19_i_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasketSummaryComponent_ng_container_0_tr_19_i_19_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r10.incrementItemQuantity(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasketSummaryComponent_ng_container_0_tr_19_i_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasketSummaryComponent_ng_container_0_tr_19_i_26_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r13.removeBasketItem(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasketSummaryComponent_ng_container_0_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, BasketSummaryComponent_ng_container_0_tr_19_i_16_Template, 1, 0, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, BasketSummaryComponent_ng_container_0_tr_19_i_19_Template, 1, 0, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, BasketSummaryComponent_ng_container_0_tr_19_i_26_Template, 1, 0, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item_r3.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", item_r3.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/shop/", item_r3.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Type: ", item_r3.type, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 13, item_r3.price, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("justify-content-center", !ctx_r2.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r3.quantity, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](23, 16, item_r3.price * item_r3.quantity, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.isBasket);
      }
    }

    function BasketSummaryComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, BasketSummaryComponent_ng_container_0_th_17_Template, 3, 0, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, BasketSummaryComponent_ng_container_0_tr_19_Template, 27, 19, "tr", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-light", ctx_r0.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-light", ctx_r0.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-light", ctx_r0.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-light", ctx_r0.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isBasket);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](20, 10, ctx_r0.basket$).items);
      }
    }

    var BasketSummaryComponent = /*#__PURE__*/function () {
      function BasketSummaryComponent(basketService) {
        _classCallCheck(this, BasketSummaryComponent);

        this.basketService = basketService;
        this.decrement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.increment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBasket = true;
      }

      _createClass(BasketSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.basket$ = this.basketService.basket$;
        }
      }, {
        key: "decrementItemQuantity",
        value: function decrementItemQuantity(item) {
          this.decrement.emit(item);
        }
      }, {
        key: "incrementItemQuantity",
        value: function incrementItemQuantity(item) {
          this.increment.emit(item);
        }
      }, {
        key: "removeBasketItem",
        value: function removeBasketItem(item) {
          this.remove.emit(item);
        }
      }]);

      return BasketSummaryComponent;
    }();

    BasketSummaryComponent.??fac = function BasketSummaryComponent_Factory(t) {
      return new (t || BasketSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]));
    };

    BasketSummaryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasketSummaryComponent,
      selectors: [["app-basket-summary"]],
      inputs: {
        isBasket: "isBasket"
      },
      outputs: {
        decrement: "decrement",
        increment: "increment",
        remove: "remove"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "table-responsive"], [1, "table"], ["scope", "col", 1, "border-0"], [1, "p-2", "px-3", "text-uppercase"], [1, "py-2", "text-uppercase"], ["scope", "col", "class", "border-0", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "p-2"], [1, "img-fluid", 2, "max-height", "50px", 3, "src", "alt"], [1, "ml-3", "d-inline-block", "align-middle"], [1, "mb-0"], [1, "text-dark", 3, "routerLink"], [1, "text-muted", "font-weight-normal", "font-italic", "d-block"], [1, "align-middle"], [1, "d-flex", "align-items-center"], ["class", "fa fa-minus-circle text-warning mr-2", "style", "cursor: pointer; font-size: 2em;", 3, "click", 4, "ngIf"], [1, "font-weight-bold", 2, "font-size", "1.5em"], ["class", "fa fa-plus-circle text-warning mx-2", "style", "cursor: pointer; font-size: 2em;", 3, "click", 4, "ngIf"], [1, "align-middle", "text-center"], [1, "text-danger"], ["class", "fa fa-trash", "style", "font-size: 2em; cursor: pointer;", 3, "click", 4, "ngIf"], [1, "fa", "fa-minus-circle", "text-warning", "mr-2", 2, "cursor", "pointer", "font-size", "2em", 3, "click"], [1, "fa", "fa-plus-circle", "text-warning", "mx-2", 2, "cursor", "pointer", "font-size", "2em", 3, "click"], [1, "fa", "fa-trash", 2, "font-size", "2em", "cursor", "pointer", 3, "click"]],
      template: function BasketSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, BasketSummaryComponent_ng_container_0_Template, 21, 12, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.basket$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhc2tldC1zdW1tYXJ5L2Jhc2tldC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasketSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basket-summary',
          templateUrl: './basket-summary.component.html',
          styleUrls: ['./basket-summary.component.scss']
        }]
      }], function () {
        return [{
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]
        }];
      }, {
        decrement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        increment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isBasket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/order-totals/order-totals.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/order-totals/order-totals.component.ts ***!
    \**************************************************************************/

  /*! exports provided: OrderTotalsComponent */

  /***/
  function srcAppSharedComponentsOrderTotalsOrderTotalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderTotalsComponent", function () {
      return OrderTotalsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../basket/basket.service */
    "./src/app/basket/basket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrderTotalsComponent_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Order subtotal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Shipping and handling");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](14, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "strong", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](6, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 6, ctx_r0.basketTotal$).subtotal, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](14, 11, ctx_r0.basketTotal$).shipping, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](20, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 16, ctx_r0.basketTotal$).total, "R"));
      }
    }

    var OrderTotalsComponent = /*#__PURE__*/function () {
      function OrderTotalsComponent(basketService) {
        _classCallCheck(this, OrderTotalsComponent);

        this.basketService = basketService;
      }

      _createClass(OrderTotalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.basketTotal$ = this.basketService.basketTotal$;
        }
      }]);

      return OrderTotalsComponent;
    }();

    OrderTotalsComponent.??fac = function OrderTotalsComponent_Factory(t) {
      return new (t || OrderTotalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]));
    };

    OrderTotalsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: OrderTotalsComponent,
      selectors: [["app-order-totals"]],
      decls: 7,
      vars: 3,
      consts: [[1, "bg-light", "px-4", "py-3", "text-uppercase", "font-weight-bold"], [1, "p-4"], [1, "font-italic", "mb-4"], ["class", "list-unstyled mb-4", 4, "ngIf"], [1, "list-unstyled", "mb-4"], [1, "d-flex", "justify-content-between", "py-3", "border-bottom"], [1, "text-muted"]],
      template: function OrderTotalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Order Summary\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Shipping costs will be added depending on choices made during checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, OrderTotalsComponent_ul_5_Template, 22, 18, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 1, ctx.basketTotal$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLXRvdGFscy9vcmRlci10b3RhbHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderTotalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-totals',
          templateUrl: './order-totals.component.html',
          styleUrls: ['./order-totals.component.scss']
        }]
      }], function () {
        return [{
          type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/pager/pager.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/pager/pager.component.ts ***!
    \************************************************************/

  /*! exports provided: PagerComponent */

  /***/
  function srcAppSharedComponentsPagerPagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
      return PagerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");

    var PagerComponent = /*#__PURE__*/function () {
      function PagerComponent() {
        _classCallCheck(this, PagerComponent);

        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPagerChanged",
        value: function onPagerChanged(event) {
          this.pageChanged.emit(event.page);
        }
      }]);

      return PagerComponent;
    }();

    PagerComponent.??fac = function PagerComponent_Factory(t) {
      return new (t || PagerComponent)();
    };

    PagerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PagerComponent,
      selectors: [["app-pager"]],
      inputs: {
        totalCount: "totalCount",
        pageSize: "pageSize"
      },
      outputs: {
        pageChanged: "pageChanged"
      },
      decls: 1,
      vars: 3,
      consts: [["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "pageChanged"]],
      template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "pagination", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function PagerComponent_Template_pagination_pageChanged_0_listener($event) {
            return ctx.onPagerChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("boundaryLinks", true)("totalItems", ctx.totalCount)("itemsPerPage", ctx.pageSize);
        }
      },
      directives: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pager',
          templateUrl: './pager.component.html',
          styleUrls: ['./pager.component.scss']
        }]
      }], function () {
        return [];
      }, {
        totalCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/paging-header/paging-header.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PagingHeaderComponent */

  /***/
  function srcAppSharedComponentsPagingHeaderPagingHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagingHeaderComponent", function () {
      return PagingHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PagingHeaderComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Showing ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Results");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", (ctx_r0.pageNumber - 1) * ctx_r0.pageSize + 1, " - ", ctx_r0.pageNumber * ctx_r0.pageSize > ctx_r0.totalCount ? ctx_r0.totalCount : ctx_r0.pageNumber * ctx_r0.pageSize, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.totalCount);
      }
    }

    function PagingHeaderComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " There are ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " results for this filter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var PagingHeaderComponent = /*#__PURE__*/function () {
      function PagingHeaderComponent() {
        _classCallCheck(this, PagingHeaderComponent);
      }

      _createClass(PagingHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagingHeaderComponent;
    }();

    PagingHeaderComponent.??fac = function PagingHeaderComponent_Factory(t) {
      return new (t || PagingHeaderComponent)();
    };

    PagingHeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PagingHeaderComponent,
      selectors: [["app-paging-header"]],
      inputs: {
        pageNumber: "pageNumber",
        pageSize: "pageSize",
        totalCount: "totalCount"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function PagingHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PagingHeaderComponent_span_1_Template, 8, 3, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PagingHeaderComponent_span_2_Template, 5, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.totalCount && ctx.totalCount > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.totalCount === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luZy1oZWFkZXIvcGFnaW5nLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagingHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-paging-header',
          templateUrl: './paging-header.component.html',
          styleUrls: ['./paging-header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        pageNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/text-input/text-input.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/text-input/text-input.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TextInputComponent */

  /***/
  function srcAppSharedComponentsTextInputTextInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextInputComponent", function () {
      return TextInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["input"];

    function TextInputComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 7);
      }
    }

    function TextInputComponent_div_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r4.label, " is required");
      }
    }

    function TextInputComponent_div_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TextInputComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TextInputComponent_div_6_span_1_Template, 2, 1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TextInputComponent_div_6_span_2_Template, 2, 0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlDir.control.errors == null ? null : ctx_r2.controlDir.control.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.controlDir.control.errors == null ? null : ctx_r2.controlDir.control.errors.pattern);
      }
    }

    function TextInputComponent_div_7_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email address is in use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function TextInputComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TextInputComponent_div_7_span_1_Template, 2, 0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.controlDir.control.errors == null ? null : ctx_r3.controlDir.control.errors.emailExists);
      }
    }

    var TextInputComponent = /*#__PURE__*/function () {
      function TextInputComponent(controlDir) {
        _classCallCheck(this, TextInputComponent);

        this.controlDir = controlDir;
        this.type = 'text';
        this.controlDir.valueAccessor = this;
      }

      _createClass(TextInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var control = this.controlDir.control;
          var validators = control.validator ? [control.validator] : [];
          var asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];
          control.setValidators(validators);
          control.setAsyncValidators(asyncValidators);
          control.updateValueAndValidity();
        }
      }, {
        key: "onChange",
        value: function onChange(event) {}
      }, {
        key: "onTouched",
        value: function onTouched() {}
      }, {
        key: "writeValue",
        value: function writeValue(obj) {
          this.input.nativeElement.value = obj || '';
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }]);

      return TextInputComponent;
    }();

    TextInputComponent.??fac = function TextInputComponent_Factory(t) {
      return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 2));
    };

    TextInputComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TextInputComponent,
      selectors: [["app-text-input"]],
      viewQuery: function TextInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.input = _t.first);
        }
      },
      inputs: {
        type: "type",
        label: "label"
      },
      decls: 8,
      vars: 9,
      consts: [[1, "form-label-group"], [1, "form-control", 3, "ngClass", "type", "id", "placeholder", "input", "blur"], ["input", ""], ["class", "fa fa-spinner fa-spin loader", 4, "ngIf"], [3, "for"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "fa", "fa-spinner", "fa-spin", "loader"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", "d-block"]],
      template: function TextInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function TextInputComponent_Template_input_input_1_listener($event) {
            return ctx.onChange($event.target.value);
          })("blur", function TextInputComponent_Template_input_blur_1_listener() {
            return ctx.onTouched();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TextInputComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TextInputComponent_div_6_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, TextInputComponent_div_7_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("id", ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.controlDir && ctx.controlDir.control && ctx.controlDir.control.touched ? !ctx.controlDir.control.valid ? "is-invalid" : "is-valid" : null)("type", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.controlDir && ctx.controlDir.control && ctx.controlDir.control.status === "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("for", ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.controlDir && ctx.controlDir.control && !ctx.controlDir.control.valid && ctx.controlDir.control.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.controlDir && ctx.controlDir.control && !ctx.controlDir.control.valid && ctx.controlDir.control.dirty);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".form-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  \n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  \n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  width: auto;\n  top: 15px;\n  right: 10px;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC9DOlxcVXNlcnNcXHRzaGlkaWZrXFxEb3dubG9hZHNcXEFuLUUtY29tbWVyY2UtYXBwLXdpdGgtLk5ldC1Db3JlLWFuZC1Bbmd1bGFyLW1hc3RlclxcQW4tRS1jb21tZXJjZS1hcHAtd2l0aC0uTmV0LUNvcmUtYW5kLUFuZ3VsYXItbWFzdGVyXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdGV4dC1pbnB1dFxcdGV4dC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLHNDQUFBO0VBQ2xCLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUFjLG9DQUFBO0VBQ2QsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtBQ0dKOztBRElFO0VBQ0Usa0JBQUE7QUNHSjs7QURBRTtFQUNFLGtCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtBQ0dKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ0dKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDR0o7O0FEQUU7b0RBQUE7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUNHSjs7RURERTtJQUNFLFdBQUE7RUNJSjtBQUNGOztBRERFO29EQUFBOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VDR0o7O0VEREU7SUFDRSxXQUFBO0VDSUo7QUFDRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBoZWlnaHQ6IDMuMTI1cmVtO1xuICAgIHBhZGRpbmc6IC43NXJlbTtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7IC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiB0ZXh0OyAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxuICBcbiAgLyogRmFsbGJhY2sgZm9yIEVkZ2VcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cbiAgfVxuICBcbiAgLyogRmFsbGJhY2sgZm9yIElFXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuICB9XG4gIFxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn0iLCIuZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBpbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBoZWlnaHQ6IDMuMTI1cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0O1xuICAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBhdXRvO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TextInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-text-input',
          templateUrl: './text-input.component.html',
          styleUrls: ['./text-input.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, {
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input', {
            "static": true
          }]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/basket.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/models/basket.ts ***!
    \*****************************************/

  /*! exports provided: Basket */

  /***/
  function srcAppSharedModelsBasketTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Basket", function () {
      return Basket;
    }); //import uuid from 'uuid/v4';


    var Basket = function Basket() {
      _classCallCheck(this, Basket);

      this.id = Guid.newGuid();
      this.items = [];
    };

    var Guid = /*#__PURE__*/function () {
      function Guid() {
        _classCallCheck(this, Guid);
      }

      _createClass(Guid, null, [{
        key: "newGuid",
        value: function newGuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return Guid;
    }();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/paging-header/paging-header.component */
    "./src/app/shared/components/paging-header/paging-header.component.ts");
    /* harmony import */


    var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pager/pager.component */
    "./src/app/shared/components/pager/pager.component.ts");
    /* harmony import */


    var _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/order-totals/order-totals.component */
    "./src/app/shared/components/order-totals/order-totals.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/text-input/text-input.component */
    "./src/app/shared/components/text-input/text-input.component.ts");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./stepper/stepper.component */
    "./src/app/shared/stepper/stepper.component.ts");
    /* harmony import */


    var _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/basket-summary/basket-summary.component */
    "./src/app/shared/components/basket-summary/basket-summary.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: SharedModule
    });
    SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](SharedModule, {
        declarations: [_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_5__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__["OrderTotalsComponent"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"], _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_5__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__["OrderTotalsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_5__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__["OrderTotalsComponent"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"], _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_5__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__["OrderTotalsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/stepper/stepper.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/stepper/stepper.component.ts ***!
    \*****************************************************/

  /*! exports provided: StepperComponent */

  /***/
  function srcAppSharedStepperStepperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperComponent", function () {
      return StepperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StepperComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StepperComponent_li_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.onClick(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var step_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx_r0.selectedIndex === i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", step_r1.label, " ");
      }
    }

    var StepperComponent = /*#__PURE__*/function (_angular_cdk_stepper_) {
      _inherits(StepperComponent, _angular_cdk_stepper_);

      var _super = _createSuper(StepperComponent);

      function StepperComponent() {
        _classCallCheck(this, StepperComponent);

        return _super.apply(this, arguments);
      }

      _createClass(StepperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.linear = this.linearModeSelected;
        }
      }, {
        key: "onClick",
        value: function onClick(index) {
          this.selectedIndex = index;
        }
      }]);

      return StepperComponent;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

    StepperComponent.??fac = function StepperComponent_Factory(t) {
      return ??StepperComponent_BaseFactory(t || StepperComponent);
    };

    StepperComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StepperComponent,
      selectors: [["app-stepper"]],
      inputs: {
        linearModeSelected: "linearModeSelected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: StepperComponent
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container"], [1, "nav", "nav-pills", "nav-justified"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], [1, "nav-item"], [1, "nav-link", "py-3", "text-uppercase", "font-weight-bold", "btn-block", 3, "disabled", "click"]],
      template: function StepperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, StepperComponent_li_2_Template, 3, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](4, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.steps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", ctx.selected.content);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: ["button.nav-link[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  border-radius: 0;\n  border: none;\n}\nbutton.nav-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nbutton.nav-link.active[_ngcontent-%COMP%]:hover {\n  color: white;\n}\nbutton.nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\n  outline: none;\n}\nbutton.nav-link.active[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nbutton.nav-link[_ngcontent-%COMP%]:disabled:not(.active) {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0ZXBwZXIvQzpcXFVzZXJzXFx0c2hpZGlma1xcRG93bmxvYWRzXFxBbi1FLWNvbW1lcmNlLWFwcC13aXRoLS5OZXQtQ29yZS1hbmQtQW5ndWxhci1tYXN0ZXJcXEFuLUUtY29tbWVyY2UtYXBwLXdpdGgtLk5ldC1Db3JlLWFuZC1Bbmd1bGFyLW1hc3RlclxcY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXHN0ZXBwZXJcXHN0ZXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURDSTtFQUNJLFlBQUE7QUNDUjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURDSTtFQUNJLFdBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ubmF2LWxpbmsge1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgJi5hY3RpdmU6aG92ZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgICYgOmFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgICYuYWN0aXZlOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgJjpkaXNhYmxlZDpub3QoLmFjdGl2ZSkge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG59IiwiYnV0dG9uLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuYnV0dG9uLm5hdi1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbi5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5idXR0b24ubmF2LWxpbmsgOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b24ubmF2LWxpbmsuYWN0aXZlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbi5uYXYtbGluazpkaXNhYmxlZDpub3QoLmFjdGl2ZSkge1xuICBjb2xvcjogIzMzMztcbn0iXX0= */"]
    });

    var ??StepperComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](StepperComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stepper',
          templateUrl: './stepper.component.html',
          styleUrls: ['./stepper.component.scss'],
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: StepperComponent
          }]
        }]
      }], null, {
        linearModeSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://localhost:5001/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\tshidifk\Downloads\An-E-commerce-app-with-.Net-Core-and-Angular-master\An-E-commerce-app-with-.Net-Core-and-Angular-master\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
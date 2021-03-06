function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./src/app/orders/order-detailed/order-detailed.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/orders/order-detailed/order-detailed.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderDetailedComponent */

  /***/
  function srcAppOrdersOrderDetailedOrderDetailedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailedComponent", function () {
      return OrderDetailedComponent;
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


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
    /* harmony import */


    var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../orders.service */
    "./src/app/orders/orders.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrderDetailedComponent_div_1_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item_r2.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", item_r2.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r2.productName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](10, 6, item_r2.price, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r2.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](17, 9, item_r2.price * item_r2.quantity, "R"));
      }
    }

    function OrderDetailedComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, OrderDetailedComponent_div_1_tr_20_Template, 18, 12, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Order summary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "strong", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Order subtotal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Shipping and handling");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.order.orderItems);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](31, 4, ctx_r0.order.subtotal, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](37, 7, ctx_r0.order.shippingPrice, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](43, 10, ctx_r0.order.total, "R"));
      }
    }

    var OrderDetailedComponent = /*#__PURE__*/function () {
      function OrderDetailedComponent(route, breadcrumbService, ordersService) {
        _classCallCheck(this, OrderDetailedComponent);

        this.route = route;
        this.breadcrumbService = breadcrumbService;
        this.ordersService = ordersService;
        this.breadcrumbService.set('@OrderDetailed', '');
      }

      _createClass(OrderDetailedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id')).subscribe(function (order) {
            _this.order = order;

            _this.breadcrumbService.set('@OrderDetailed', "Order# ".concat(order.id, " - ").concat(order.status));
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OrderDetailedComponent;
    }();

    OrderDetailedComponent.??fac = function OrderDetailedComponent_Factory(t) {
      return new (t || OrderDetailedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]));
    };

    OrderDetailedComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: OrderDetailedComponent,
      selectors: [["app-order-detailed"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container", "mt-5"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-8"], [1, "table-responsive"], [1, "table"], ["scope", "col", 1, "border-0", "bg-light"], [1, "p-1", "text-uppercase"], [1, "py-1", "text-uppercase"], [4, "ngFor", "ngForOf"], [1, "col-4"], [1, "bg-light", "px-4", "py-3", "text-uppercase", "font-weight-bold"], [1, "p-4"], [1, "list-unstyled", "mb-1"], [1, "d-flex", "justify-content-between", "py-3", "border-bottom"], [1, "text-muted"], ["scope", "row"], [1, "p-2"], [1, "img-fluid", 2, "max-height", "50px", 3, "src", "alt"], [1, "ml-3", "d-inline-block", "align-middle"], [1, "mb-0"], [1, "align-middle"], [1, "font-weight-bold", "px-2"]],
      template: function OrderDetailedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrderDetailedComponent_div_1_Template, 44, 13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.order);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1kZXRhaWxlZC9vcmRlci1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderDetailedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-detailed',
          templateUrl: './order-detailed.component.html',
          styleUrls: ['./order-detailed.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]
        }, {
          type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
    });
    /* harmony import */


    var _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./order-detailed/order-detailed.component */
    "./src/app/orders/order-detailed/order-detailed.component.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _orders_component__WEBPACK_IMPORTED_MODULE_1__["OrdersComponent"]
    }, {
      path: ':id',
      component: _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_0__["OrderDetailedComponent"],
      data: {
        breadcrumb: {
          alias: 'OrderDetailed'
        }
      }
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
      type: OrdersRoutingModule
    });
    OrdersRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
      factory: function OrdersRoutingModule_Factory(t) {
        return new (t || OrdersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](OrdersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](OrdersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./orders.service */
    "./src/app/orders/orders.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function OrdersComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var order_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/orders/", order_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("# ", order_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](5, 5, order_r1.orderDate, "medium"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 8, order_r1.total, "R"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](order_r1.status);
      }
    }

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(orderService) {
        _classCallCheck(this, OrdersComponent);

        this.orderService = orderService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOrders();
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this2 = this;

          this.orderService.getOrdersForUser().subscribe(function (orders) {
            _this2.orders = orders;
            console.log(orders);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.??fac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]));
    };

    OrdersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 16,
      vars: 1,
      consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-12"], [1, "table", "table-hover", 2, "cursor", "pointer"], [1, "thead-light"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, OrdersComponent_tr_15_Template, 11, 11, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.orders);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.scss']
        }]
      }], function () {
        return [{
          type: _orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order-detailed/order-detailed.component */
    "./src/app/orders/order-detailed/order-detailed.component.ts");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: OrdersModule
    });
    OrdersModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function OrdersModule_Factory(t) {
        return new (t || OrdersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrdersModule, {
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.service.ts":
  /*!******************************************!*\
    !*** ./src/app/orders/orders.service.ts ***!
    \******************************************/

  /*! exports provided: OrdersService */

  /***/
  function srcAppOrdersOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
      return OrdersService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrdersService = /*#__PURE__*/function () {
      function OrdersService(http) {
        _classCallCheck(this, OrdersService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
      }

      _createClass(OrdersService, [{
        key: "getOrdersForUser",
        value: function getOrdersForUser() {
          return this.http.get(this.baseUrl + 'orders');
        }
      }, {
        key: "getOrderDetailed",
        value: function getOrderDetailed(id) {
          return this.http.get(this.baseUrl + 'orders/' + id);
        }
      }]);

      return OrdersService;
    }();

    OrdersService.??fac = function OrdersService_Factory(t) {
      return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    OrdersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: OrdersService,
      factory: OrdersService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map
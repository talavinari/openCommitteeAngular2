"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var bill_service_1 = require('./bill.service');
var bill_1 = require('./bill');
var BillDetailComponent = (function () {
    function BillDetailComponent(billService, route, location) {
        this.billService = billService;
        this.route = route;
        this.location = location;
    }
    BillDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.billService.getBill(+params['id']); })
            .subscribe(function (bill) { return _this.bill = bill; });
    };
    BillDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bill_1.Bill)
    ], BillDetailComponent.prototype, "bill", void 0);
    BillDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-hero-detail',
            templateUrl: 'bill-detail.component.html'
        }), 
        __metadata('design:paramtypes', [bill_service_1.BillService, router_1.ActivatedRoute, common_1.Location])
    ], BillDetailComponent);
    return BillDetailComponent;
}());
exports.BillDetailComponent = BillDetailComponent;
//# sourceMappingURL=bill-detail.component.js.map
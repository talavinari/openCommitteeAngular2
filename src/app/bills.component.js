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
var bill_service_1 = require('./bill.service');
var router_1 = require('@angular/router');
var BillsComponent = (function () {
    function BillsComponent(billService, router) {
        this.billService = billService;
        this.router = router;
    }
    BillsComponent.prototype.getBills = function () {
        var _this = this;
        this.billService.getBills().then(function (bills) { return _this.bills = bills; });
    };
    BillsComponent.prototype.ngOnInit = function () {
        this.getBills();
    };
    BillsComponent.prototype.gotoDetail = function (bill) {
        this.router.navigate(['/detail', bill.id]);
    };
    BillsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'bills.component.html'
        }), 
        __metadata('design:paramtypes', [bill_service_1.BillService, router_1.Router])
    ], BillsComponent);
    return BillsComponent;
}());
exports.BillsComponent = BillsComponent;
//# sourceMappingURL=bills.component.js.map
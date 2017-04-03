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
var minister_service_1 = require('./minister.service');
var minister_1 = require('./minister');
var MinisterDetailComponent = (function () {
    function MinisterDetailComponent(ministerService, route, location) {
        this.ministerService = ministerService;
        this.route = route;
        this.location = location;
    }
    MinisterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ministerService.getMinsterDetail(+params['id']); })
            .subscribe(function (minister) { return _this.minister = minister; });
        this.route.params
            .switchMap(function (params) { return _this.ministerService.getMinisterVotes(+params['id']); })
            .subscribe(function (votes) { return _this.votes = votes; });
    };
    MinisterDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', minister_1.Minister)
    ], MinisterDetailComponent.prototype, "minister", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MinisterDetailComponent.prototype, "votes", void 0);
    MinisterDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-minister-detail',
            templateUrl: 'minister-detail.component.html'
        }), 
        __metadata('design:paramtypes', [minister_service_1.MinisterService, router_1.ActivatedRoute, common_1.Location])
    ], MinisterDetailComponent);
    return MinisterDetailComponent;
}());
exports.MinisterDetailComponent = MinisterDetailComponent;
//# sourceMappingURL=minister-detail.component.js.map
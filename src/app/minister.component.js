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
var minister_service_1 = require('./minister.service');
var MinisterComponent = (function () {
    function MinisterComponent(ministerService) {
        this.ministerService = ministerService;
        this.ministers = [];
    }
    MinisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ministerService.getMinisters()
            .then(function (ministers) { return _this.ministers = ministers; });
    };
    MinisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'minister.component.html'
        }), 
        __metadata('design:paramtypes', [minister_service_1.MinisterService])
    ], MinisterComponent);
    return MinisterComponent;
}());
exports.MinisterComponent = MinisterComponent;
//# sourceMappingURL=minister.component.js.map
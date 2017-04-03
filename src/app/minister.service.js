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
var mock_minister_1 = require('./mock-minister');
var mock_vote_1 = require('./mock-vote');
var MinisterService = (function () {
    function MinisterService() {
    }
    MinisterService.prototype.getMinisters = function () {
        return Promise.resolve(mock_minister_1.MINISTERS);
    };
    MinisterService.prototype.getMinisterVotes = function (id) {
        return Promise.resolve(mock_vote_1.VOTES);
    };
    MinisterService.prototype.getMinistersWithDetails = function () {
        return Promise.resolve(mock_minister_1.MINISTERS_DETAILS);
    };
    MinisterService.prototype.getMinsterDetail = function (id) {
        return this.getMinistersWithDetails()
            .then(function (ministers) { return ministers.find(function (minister) { return minister.id === id; }); });
    };
    MinisterService.prototype.getMinister = function (id) {
        return this.getMinisters()
            .then(function (ministers) { return ministers.find(function (minister) { return minister.id === id; }); });
    };
    MinisterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MinisterService);
    return MinisterService;
}());
exports.MinisterService = MinisterService;
//# sourceMappingURL=minister.service.js.map
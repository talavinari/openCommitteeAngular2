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
var meeting_service_1 = require('./meeting.service');
var router_1 = require('@angular/router');
var MeetingsComponent = (function () {
    function MeetingsComponent(meetingsService, router) {
        this.meetingsService = meetingsService;
        this.router = router;
    }
    MeetingsComponent.prototype.getMeetings = function () {
        var _this = this;
        this.meetingsService.getMeetings().then(function (meetings) { return _this.meetings = meetings; });
    };
    MeetingsComponent.prototype.ngOnInit = function () {
        this.getMeetings();
    };
    MeetingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-meetings',
            templateUrl: 'meetings.component.html'
        }), 
        __metadata('design:paramtypes', [meeting_service_1.MeetingService, router_1.Router])
    ], MeetingsComponent);
    return MeetingsComponent;
}());
exports.MeetingsComponent = MeetingsComponent;
//# sourceMappingURL=meetings.component.js.map
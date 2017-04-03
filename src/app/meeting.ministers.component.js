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
var meeting_service_1 = require('./meeting.service');
var meeting_1 = require('./meeting');
var MeetingMinistersComponent = (function () {
    function MeetingMinistersComponent(meetingService, route, location) {
        this.meetingService = meetingService;
        this.route = route;
        this.location = location;
        this.showPlusButton = false;
    }
    MeetingMinistersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //var meetId = this.meetingId || params['id'];
        console.info(this.meetingId);
        if (typeof (this.meetingId) === "undefined") {
            this.route.params
                .switchMap(function (params) { return _this.meetingService.getMeetingDetail(+params['id']); })
                .subscribe(function (meeting) { return _this.meeting = meeting; });
        }
        else {
            this.route.params
                .switchMap(function (params) { return _this.meetingService.getMeetingDetail(_this.meetingId); })
                .subscribe(function (meeting) { return _this.meeting = meeting; });
        }
    };
    MeetingMinistersComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meeting_1.Meeting)
    ], MeetingMinistersComponent.prototype, "meeting", void 0);
    __decorate([
        core_1.Input('meetingId'), 
        __metadata('design:type', Number)
    ], MeetingMinistersComponent.prototype, "meetingId", void 0);
    __decorate([
        core_1.Input('showPlusButton'), 
        __metadata('design:type', Boolean)
    ], MeetingMinistersComponent.prototype, "showPlusButton", void 0);
    MeetingMinistersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'meeting-ministers',
            templateUrl: 'meeting.ministers.component.html'
        }), 
        __metadata('design:paramtypes', [meeting_service_1.MeetingService, router_1.ActivatedRoute, common_1.Location])
    ], MeetingMinistersComponent);
    return MeetingMinistersComponent;
}());
exports.MeetingMinistersComponent = MeetingMinistersComponent;
//# sourceMappingURL=meeting.ministers.component.js.map
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
var meeting_1 = require('./meeting');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(meetingService, route) {
        this.meetingService = meetingService;
        this.route = route;
        this.title = 'ועדת שרים פתוחה';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meetingService.getLastMeeting().then(function (last) { return _this.lastMeeting = last; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meeting_1.Meeting)
    ], AppComponent.prototype, "lastMeeting", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [meeting_service_1.MeetingService, router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
var mock_meetings_1 = require('./mock-meetings');
var mock_meetings_2 = require('./mock-meetings');
var MeetingService = (function () {
    function MeetingService() {
    }
    MeetingService.prototype.getMeetings = function () {
        return Promise.resolve(mock_meetings_1.MEETINGS);
    };
    MeetingService.prototype.getMeeting = function (id) {
        return this.getMeetings()
            .then(function (meetings) { return meetings.find(function (meeting) { return meeting.id === id; }); });
    };
    MeetingService.prototype.getMeetingsWithDetails = function () {
        return Promise.resolve(mock_meetings_2.DetailedMettings);
    };
    MeetingService.prototype.getMeetingDetail = function (id) {
        return this.getMeetingsWithDetails()
            .then(function (meetings) { return meetings.find(function (meeting) { return meeting.id === id; }); });
    };
    MeetingService.prototype.getLastMeeting = function () {
        return Promise.resolve(mock_meetings_1.MEETINGS[0]);
    };
    MeetingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MeetingService);
    return MeetingService;
}());
exports.MeetingService = MeetingService;
//# sourceMappingURL=meeting.service.js.map
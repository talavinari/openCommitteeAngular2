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
var minister_component_1 = require('./minister.component');
var bills_component_1 = require('./bills.component');
var about_component_1 = require('./about.component');
var bill_detail_component_1 = require('./bill-detail.component');
var minister_detail_component_1 = require('./minister-detail.component');
var meetings_component_1 = require('./meetings.component');
var index_component_1 = require('./index.component');
var meeting_detail_component_1 = require('./meeting-detail.component');
var routes = [
    { path: 'minister', component: minister_component_1.MinisterComponent },
    { path: 'minister/:id', component: minister_detail_component_1.MinisterDetailComponent },
    { path: 'bills/:id', component: bill_detail_component_1.BillDetailComponent },
    { path: 'bills', component: bills_component_1.BillsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'meetings', component: meetings_component_1.MeetingsComponent },
    { path: 'meetings/:id', component: meeting_detail_component_1.MeetingDetailComponent },
    { path: '', component: index_component_1.IndexComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
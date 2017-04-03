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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var bill_detail_component_1 = require('./bill-detail.component');
var minister_detail_component_1 = require('./minister-detail.component');
var meeting_detail_component_1 = require('./meeting-detail.component');
var bills_component_1 = require('./bills.component');
var minister_component_1 = require('./minister.component');
var about_component_1 = require('./about.component');
var meetings_component_1 = require('./meetings.component');
var index_component_1 = require('./index.component');
var meeting_ministers_component_1 = require('./meeting.ministers.component');
var meeting_service_1 = require('./meeting.service');
var bill_service_1 = require('./bill.service');
var minister_service_1 = require('./minister.service');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent,
                bill_detail_component_1.BillDetailComponent,
                bills_component_1.BillsComponent,
                minister_component_1.MinisterComponent,
                minister_detail_component_1.MinisterDetailComponent,
                about_component_1.AboutComponent,
                meetings_component_1.MeetingsComponent,
                meeting_detail_component_1.MeetingDetailComponent,
                index_component_1.IndexComponent,
                meeting_ministers_component_1.MeetingMinistersComponent
            ],
            providers: [bill_service_1.BillService,
                minister_service_1.MinisterService,
                meeting_service_1.MeetingService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
System.register(['angular2/core', 'angular2/router', './profile.service', './local_storage'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, profile_service_1, local_storage_1;
    var ConferenceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            }],
        execute: function() {
            ConferenceComponent = (function () {
                function ConferenceComponent(router, _localStorage, profileService) {
                    this.router = router;
                    this._localStorage = _localStorage;
                    this.profileService = profileService;
                    //o lista de conferinte
                    this.conferences = [];
                    this.myProfile = false;
                }
                ConferenceComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("making data request for conferences");
                    this.profileService.getConferences()
                        .subscribe(function (conferences) { _this.conferences = conferences; }, function () {
                    });
                    console.log("aici");
                    //aduc conferintele din baza de date... cum am facut si pentru retete
                };
                ConferenceComponent.prototype.setResponse = function () {
                };
                ConferenceComponent = __decorate([
                    core_1.Component({ selector: 'conference-component',
                        templateUrl: 'app/conferences-conference.component.html',
                        styleUrls: ['app/conferences-conference.component.css'],
                        providers: [local_storage_1.LocalStorage, profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, local_storage_1.LocalStorage, profile_service_1.ProfileService])
                ], ConferenceComponent);
                return ConferenceComponent;
            }());
            exports_1("ConferenceComponent", ConferenceComponent);
        }
    }
});
//# sourceMappingURL=conferences-conference.component.js.map
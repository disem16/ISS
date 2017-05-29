System.register(['angular2/core', 'angular2/router', './local_storage', './profile.service'], function(exports_1, context_1) {
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
    var core_1, router_1, local_storage_1, profile_service_1;
    var MenuBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            MenuBarComponent = (function () {
                function MenuBarComponent(router, _localStorage, profileService) {
                    this.router = router;
                    this._localStorage = _localStorage;
                    this.profileService = profileService;
                    this.userProfileData = new profile_service_1.User('', '', '', '', '', '');
                    this.onSuccess = false;
                    this.onError = false;
                    this.onExist = false;
                    this.message = "";
                }
                MenuBarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.evaluateFlags();
                    var accountName = this._localStorage.get("username");
                    console.log("ininte:  " + this._localStorage.get("username"));
                    console.log("profiledata");
                    console.log(this._localStorage.get("userData"));
                    if (!this._localStorage.get("userData")) {
                        console.log("setting data");
                        this.profileService.getUserData(accountName)
                            .subscribe(function (userProfileData) { _this.userProfileData = userProfileData; _this.setResponse(); });
                    }
                    else {
                        this.userProfileData = this._localStorage.getObject("userData");
                    }
                };
                MenuBarComponent.prototype.setResponse = function () {
                    this._localStorage.setObject("userData", this.userProfileData);
                    console.log(this._localStorage.getObject("userData"));
                };
                //set data functions:
                MenuBarComponent.prototype.evaluateFlags = function () {
                    if (this._localStorage.getObject("flags").login == 'ok') {
                        this.message = "Login successfull!";
                        this.onSuccess = true;
                        setTimeout(function () {
                            this.onSuccess = false;
                        }.bind(this), 5000);
                        this.flags = this._localStorage.getObject("flags");
                        this.flags.login = 'false';
                        this._localStorage.setObject("flags", this.flags);
                    }
                };
                MenuBarComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-bar-comp',
                        templateUrl: 'app/menu-bar.component.html',
                        styleUrls: ['app/menu-bar.component.css'],
                        providers: [profile_service_1.ProfileService, local_storage_1.LocalStorage]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, local_storage_1.LocalStorage, profile_service_1.ProfileService])
                ], MenuBarComponent);
                return MenuBarComponent;
            }());
            exports_1("MenuBarComponent", MenuBarComponent);
        }
    }
});
//# sourceMappingURL=menu-bar.component.js.map
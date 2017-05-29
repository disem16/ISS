System.register(['angular2/core', 'angular2/router', './profile.service', './login.service', './local_storage', './login-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, profile_service_1, login_service_1, local_storage_1, login_form_component_1;
    var ProfileDataComponent;
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
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            }],
        execute: function() {
            ProfileDataComponent = (function () {
                function ProfileDataComponent(_localStorage, loginFormComponent, loginService, router, profileService) {
                    this._localStorage = _localStorage;
                    this.loginFormComponent = loginFormComponent;
                    this.loginService = loginService;
                    this.router = router;
                    this.profileService = profileService;
                    this.userProfileData = new profile_service_1.User('', '', '', '', '', '');
                }
                ProfileDataComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var accountName = this._localStorage.get("username");
                    //this.myProfile=true;
                    //console.log(this._localStorage.get("userData"));
                    if (!this._localStorage.get("userData")) {
                        console.log("making data request:");
                        this.profileService.getUserData(accountName)
                            .subscribe(function (userProfileData) { _this.userProfileData = userProfileData; _this._localStorage.setObject("userData", _this.userProfileData); }, function () {
                            var flags = new login_service_1.Flags('false', 'error', 'false', 'false', 'false');
                            _this._localStorage.setObject("flags", flags);
                        });
                        //this.setResponse();  //adaugat de mine
                        console.log(this.userProfileData);
                    }
                    else {
                        console.log("no nead to make data request:");
                        this.userProfileData = this._localStorage.getObject("userData");
                        console.log(this.userProfileData);
                    }
                };
                ProfileDataComponent.prototype.setResponse = function () {
                    console.log(this.userProfileData);
                };
                ProfileDataComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-data-comp',
                        templateUrl: 'app/profile-data.component.html',
                        styleUrls: ['app/profile-body.component.css'],
                        providers: [profile_service_1.ProfileService, login_form_component_1.LoginFormComponent, local_storage_1.LocalStorage]
                    }), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage, login_form_component_1.LoginFormComponent, login_service_1.LoginService, router_1.Router, profile_service_1.ProfileService])
                ], ProfileDataComponent);
                return ProfileDataComponent;
            }());
            exports_1("ProfileDataComponent", ProfileDataComponent);
        }
    }
});
//# sourceMappingURL=profile-data.component.js.map
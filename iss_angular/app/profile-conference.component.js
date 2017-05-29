System.register(['angular2/core', './profile.service', './local_storage', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, profile_service_1, local_storage_1, common_1;
    var ProfileConferenceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ProfileConferenceComponent = (function () {
                function ProfileConferenceComponent(profileService, _localStorage) {
                    this.profileService = profileService;
                    this._localStorage = _localStorage;
                    this.conferences = [];
                    this.conf = new profile_service_1.Conference('', [], '');
                    this.confd = new profile_service_1.Conference('', [], '');
                    this.administrator = false;
                    this.user = false;
                }
                ProfileConferenceComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("administrator? " + this.administrator);
                    if (this._localStorage.get("canAdd") == "true") {
                        this.administrator = true;
                    }
                    else {
                        this.user = true;
                    }
                    console.log("administrator? " + this.administrator);
                    if (this.user == true) {
                        var accountName = this._localStorage.get("username");
                        console.log("making data request for (add) conferences");
                        this.profileService.getC(accountName)
                            .subscribe(function (conferences) { _this.conferences = conferences; }, function () { });
                    }
                    else
                        this.profileService.getConferences().subscribe(function (conferences) { _this.conferences = conferences; }, function () { });
                };
                ProfileConferenceComponent.prototype.onSubmit = function (conf) {
                    //console.log(conf);
                    //console.log(this.conferences[0].conference);
                    console.log("adaug o conferinta in lista mea");
                    console.log(this.conf.conference);
                    console.log(this.conf.deadline);
                    if (this.user == true) {
                        for (var i = 0; i < this.conferences.length; i++) {
                            if (this.conferences[i].conference === this.conf.conference)
                                var deadline = this.conferences[i].deadline;
                        }
                        this.conf.deadline = deadline;
                        console.log(this.conf.deadline);
                    }
                    this.conf.userList[0] = this._localStorage.get("username");
                    console.log(this.conf.userList[0]);
                    this.profileService.addConference(this.conf)
                        .subscribe(function (res) {
                        if (res.status == 201) {
                            console.log("success");
                        }
                    }, function () {
                    });
                };
                ProfileConferenceComponent.prototype.onDelete = function (confd) {
                    console.log("sterg o conferinta");
                    console.log(this.confd.conference);
                    for (var i = 0; i < this.conferences.length; i++) {
                        if (this.conferences[i].conference === this.confd.conference)
                            var deadline = this.conferences[i].deadline;
                    }
                    this.confd.deadline = deadline;
                    console.log(this.confd.deadline);
                    //this.conf.userList[0]=this._localStorage.get("username");
                    //console.log(this.conf.userList[0]);
                    this.profileService.deleteConference(this.confd)
                        .subscribe(function (res) {
                        if (res.status == 201) {
                            console.log("success");
                        }
                    }, function () {
                    });
                };
                ProfileConferenceComponent = __decorate([
                    core_1.Component({ selector: 'profile-conference-component',
                        templateUrl: 'app/profile-conference.component.html',
                        styleUrls: ['app/profile-body.component.css'],
                        providers: [profile_service_1.ProfileService, local_storage_1.LocalStorage],
                        directives: [common_1.COMMON_DIRECTIVES] }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, local_storage_1.LocalStorage])
                ], ProfileConferenceComponent);
                return ProfileConferenceComponent;
            }());
            exports_1("ProfileConferenceComponent", ProfileConferenceComponent);
        }
    }
});
//# sourceMappingURL=profile-conference.component.js.map
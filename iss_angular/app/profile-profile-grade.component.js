System.register(['angular2/core', './profile.service', './local_storage'], function(exports_1, context_1) {
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
    var core_1, profile_service_1, local_storage_1;
    var ProfileGradePComponent;
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
            }],
        execute: function() {
            ProfileGradePComponent = (function () {
                function ProfileGradePComponent(_localStorage, profileService) {
                    this._localStorage = _localStorage;
                    this.profileService = profileService;
                    this.proposals = [];
                    this.prop = new profile_service_1.Proposal('', '', '', '', '', '', '');
                    this.grades = [];
                    this.grade = new profile_service_1.Grade('', '', '');
                }
                ProfileGradePComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("making data request  for proposals");
                    this.profileService.getAllProposal().subscribe(function (proposal) { _this.proposals = proposal; }, function () { });
                    console.log("making data request  for grades");
                    this.profileService.getGrades().subscribe(function (grades) { _this.grades = grades; }, function () { });
                };
                ProfileGradePComponent.prototype.onSubmit = function () {
                    console.log("prop" + this.prop.id);
                    //this.grade.id=this.prop.averagemark;
                    console.log("grade" + this.grade.idgrade);
                    for (var i = 0; i < this.proposals.length; i++) {
                        if (this.proposals[i].id == this.prop.id) {
                            this.prop.document = this.proposals[i].document;
                            this.prop.averagemark = this.proposals[i].averagemark;
                            this.prop.domain = this.proposals[i].domain;
                            this.prop.user = this.proposals[i].user;
                            this.prop.userReviewer = this._localStorage.get("username");
                            this.prop.name = this.proposals[i].name;
                        }
                    }
                    for (var i = 0; i < this.grades.length; i++) {
                        if (this.grades[i].idgrade == this.grade.idgrade) {
                            this.grade.name = this.grades[i].name;
                            this.grade.number = this.grades[i].number;
                        }
                    }
                    if (this.prop.averagemark > 0)
                        this.prop.averagemark = (this.prop.averagemark + this.grade.number) / 2;
                    else
                        this.prop.averagemark = this.grade.number;
                    console.log(this.prop.user);
                    console.log(this.prop.domain);
                    console.log(this.prop.userReviewer);
                    console.log(this.prop.averagemark);
                    this.profileService.addProposal(this.prop)
                        .subscribe(function (res) {
                        if (res.status == 201) {
                            console.log("success");
                        }
                    }, function () {
                    });
                };
                ProfileGradePComponent = __decorate([
                    core_1.Component({ selector: 'profile-proposal-grade-component',
                        templateUrl: 'app/profile-proposal-grade.component.html',
                        styleUrls: ['app/profile-body.component.css'],
                        providers: [local_storage_1.LocalStorage, profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage, profile_service_1.ProfileService])
                ], ProfileGradePComponent);
                return ProfileGradePComponent;
            }());
            exports_1("ProfileGradePComponent", ProfileGradePComponent);
        }
    }
});
//# sourceMappingURL=profile-profile-grade.component.js.map
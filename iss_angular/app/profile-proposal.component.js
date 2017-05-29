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
    var ProfileProposalComponent;
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
            ProfileProposalComponent = (function () {
                //adaugare de proposal si administratorul vede toate propunerile  /le poate sterge
                function ProfileProposalComponent(_localStorage, profileService) {
                    this._localStorage = _localStorage;
                    this.profileService = profileService;
                    this.proposals = [];
                    this.proposals2 = [];
                    this.administrator = false;
                    this.prop = new profile_service_1.Proposal('', '', '', '', '', '', '');
                    this.pnew = new profile_service_1.Proposal('', '', '', '', '', '', '');
                }
                ProfileProposalComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._localStorage.get("canAdd") == "true") {
                        this.administrator = true;
                    }
                    if (this.administrator == false) {
                        var accountname = this._localStorage.get("username");
                        console.log("making data request  for proposals");
                        this.profileService.getProposals(accountname)
                            .subscribe(function (proposals) { _this.proposals = proposals; }, function () { });
                        console.log("dupa ce am vazut propunerile");
                    }
                    else
                        this.profileService.getAllProposal().subscribe(function (proposal) { _this.proposals = proposal; }, function () { });
                };
                ProfileProposalComponent.prototype.delete = function (prop) {
                    console.log("sterg o propunere");
                    console.log(this.prop.id);
                    // sa parcurg lista si sa il trimit in java
                    for (var i = 0; i < this.proposals.length; i++) {
                        if (this.proposals[i].id == this.prop.id) {
                            this.prop.averagemark = this.proposals[i].averagemark;
                            this.prop.document = this.proposals[i].document;
                            this.prop.name = this.proposals[i].name;
                            this.prop.user = this.proposals[i].user;
                            this.prop.userReviewer = this.proposals[i].userReviewer;
                            this.prop.domain = this.proposals[i].domain;
                        }
                    }
                    this.profileService.deleteProposal(this.prop)
                        .subscribe(function (res) {
                        if (res.status == 201) {
                            console.log("success");
                        }
                    }, function () {
                    });
                };
                ProfileProposalComponent.prototype.onSubmit = function (pnew) {
                    console.log("adaug o propunere");
                    console.log(this.pnew.name);
                    this.pnew.user = this._localStorage.get("username");
                    this.profileService.addProposal(this.pnew)
                        .subscribe(function (res) {
                        if (res.status == 201) {
                            console.log("success");
                        }
                    }, function () {
                    });
                    //sa o trimit in java 
                };
                ProfileProposalComponent = __decorate([
                    core_1.Component({ selector: 'profile-proposal-component',
                        templateUrl: 'app/profile-proposal.component.html',
                        styleUrls: ['app/profile-body.component.css'],
                        providers: [local_storage_1.LocalStorage, profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage, profile_service_1.ProfileService])
                ], ProfileProposalComponent);
                return ProfileProposalComponent;
            }());
            exports_1("ProfileProposalComponent", ProfileProposalComponent);
        }
    }
});
//# sourceMappingURL=profile-proposal.component.js.map
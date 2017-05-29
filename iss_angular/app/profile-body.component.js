System.register(['angular2/core', './profile-data.component', './profile-proposal.component', './local_storage', './profile-conference.component', './profile-profile-grade.component'], function(exports_1, context_1) {
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
    var core_1, profile_data_component_1, profile_proposal_component_1, local_storage_1, profile_conference_component_1, profile_profile_grade_component_1;
    var ProfileBodyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_data_component_1_1) {
                profile_data_component_1 = profile_data_component_1_1;
            },
            function (profile_proposal_component_1_1) {
                profile_proposal_component_1 = profile_proposal_component_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (profile_conference_component_1_1) {
                profile_conference_component_1 = profile_conference_component_1_1;
            },
            function (profile_profile_grade_component_1_1) {
                profile_profile_grade_component_1 = profile_profile_grade_component_1_1;
            }],
        execute: function() {
            ProfileBodyComponent = (function () {
                function ProfileBodyComponent(_localStorage) {
                    this._localStorage = _localStorage;
                    this.admin = false;
                }
                ProfileBodyComponent.prototype.ngOnInit = function () {
                    if (this._localStorage.get("canAdd") == "true") {
                        this.admin = true;
                    }
                };
                ProfileBodyComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-body-comp',
                        templateUrl: 'app/profile-body.component.html',
                        styleUrls: ['app/profile-body.component.css'],
                        directives: [profile_data_component_1.ProfileDataComponent, profile_proposal_component_1.ProfileProposalComponent, profile_profile_grade_component_1.ProfileGradePComponent, profile_conference_component_1.ProfileConferenceComponent],
                        providers: [local_storage_1.LocalStorage]
                    }), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage])
                ], ProfileBodyComponent);
                return ProfileBodyComponent;
            }());
            exports_1("ProfileBodyComponent", ProfileBodyComponent);
        }
    }
});
//# sourceMappingURL=profile-body.component.js.map
System.register(['angular2/core', './conferences-conference.component'], function(exports_1, context_1) {
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
    var core_1, conferences_conference_component_1;
    var ConferencesBodyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (conferences_conference_component_1_1) {
                conferences_conference_component_1 = conferences_conference_component_1_1;
            }],
        execute: function() {
            ConferencesBodyComponent = (function () {
                function ConferencesBodyComponent() {
                }
                ConferencesBodyComponent = __decorate([
                    core_1.Component({
                        selector: 'conferences-body-comp',
                        templateUrl: 'app/conferences-body.component.html',
                        styleUrls: ['app/conferences-body.component.css'],
                        directives: [conferences_conference_component_1.ConferenceComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConferencesBodyComponent);
                return ConferencesBodyComponent;
            }());
            exports_1("ConferencesBodyComponent", ConferencesBodyComponent);
        }
    }
});
//# sourceMappingURL=conferences-body.component.js.map
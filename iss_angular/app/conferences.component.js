System.register(['angular2/core', './menu-bar.component', './conferences-body.component', './login.service', './local_storage'], function(exports_1, context_1) {
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
    var core_1, menu_bar_component_1, conferences_body_component_1, login_service_1, local_storage_1;
    var ConferencesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_bar_component_1_1) {
                menu_bar_component_1 = menu_bar_component_1_1;
            },
            function (conferences_body_component_1_1) {
                conferences_body_component_1 = conferences_body_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            }],
        execute: function() {
            ConferencesComponent = (function () {
                function ConferencesComponent(_localStorage, loginService) {
                    this._localStorage = _localStorage;
                    this.loginService = loginService;
                }
                ConferencesComponent.prototype.ngOnInit = function () {
                    this.loginService.loginCheck();
                };
                ConferencesComponent.prototype.onLogOut = function () {
                    this.loginService.logOut();
                };
                ConferencesComponent = __decorate([
                    core_1.Component({ selector: 'conferences',
                        templateUrl: 'app/conferences.component.html',
                        directives: [menu_bar_component_1.MenuBarComponent, conferences_body_component_1.ConferencesBodyComponent],
                        providers: [local_storage_1.LocalStorage] }), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage, login_service_1.LoginService])
                ], ConferencesComponent);
                return ConferencesComponent;
            }());
            exports_1("ConferencesComponent", ConferencesComponent);
        }
    }
});
//# sourceMappingURL=conferences.component.js.map
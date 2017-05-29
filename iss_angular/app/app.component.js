System.register(['angular2/core', 'angular2/router', './profile.component', './login-form.component', './local_storage', './conferences.component'], function(exports_1, context_1) {
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
    var core_1, router_1, profile_component_1, login_form_component_1, local_storage_1, conferences_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            },
            function (conferences_component_1_1) {
                conferences_component_1 = conferences_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: login_form_component_1.LoginFormComponent, name: 'Login' },
                        { path: '/profile', component: profile_component_1.ProfileComponent, name: 'Profile' },
                        { path: '/dashboard', component: conferences_component_1.ConferencesComponent, name: 'Patients' }
                    ]),
                    core_1.Component({
                        selector: 'iss',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        providers: [local_storage_1.LocalStorage]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
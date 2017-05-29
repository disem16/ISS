System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1;
    var User, Flags, LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            User = (function () {
                function User(name, password) {
                    this.name = name;
                    this.password = password;
                }
                return User;
            }());
            exports_1("User", User);
            Flags = (function () {
                function Flags(insert, update, login, addUser, removeUser) {
                    this.insert = insert;
                    this.update = update;
                    this.login = login;
                    this.addUser = addUser;
                    this.removeUser = removeUser;
                }
                return Flags;
            }());
            exports_1("Flags", Flags);
            LoginService = (function () {
                function LoginService(router, http) {
                    this.router = router;
                    this.http = http;
                }
                LoginService.prototype.postData = function (user) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var stringified = JSON.stringify(user);
                    return this.http.post('http://localhost:9080/iss_rest/api/v1/user/getoneuser', stringified, { headers: headers });
                };
                LoginService.prototype.logOut = function () {
                    localStorage.clear();
                    this.router.navigate(['Login']);
                };
                LoginService.prototype.loginCheck = function () {
                    if (!("user" in localStorage)) {
                        this.router.navigate(['Login']);
                    }
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map
System.register(['angular2/core', 'angular2/router', 'angular2/common', './login.service', './local_storage'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, login_service_1, login_service_2, local_storage_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
                login_service_2 = login_service_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(_localStorage, formBuilder, router, loginService) {
                    this._localStorage = _localStorage;
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.loginService = loginService;
                    this.errorOccured = false;
                    this.user_name = 'Ceva';
                    this.alertt = true;
                    this.flag = new login_service_1.Flags('false', 'false', 'false', 'false', 'false');
                    this.login = new core_1.EventEmitter();
                    this.user = new login_service_2.User('', '');
                    this.errorMess = '';
                }
                LoginFormComponent.prototype.onSubmit = function (user) {
                    var _this = this;
                    this.loginService.postData(this.user).map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.loggedin = res.response;
                        console.log("VALUE RECEIVED: ", res.response);
                        if (res.response) {
                            _this.flag.login = 'ok';
                            _this._localStorage.setObject("flags", _this.flag);
                            _this.setPrivileg(res.title);
                            _this._localStorage.set("username", _this.user.name);
                            _this._localStorage.set("search", "false");
                            localStorage.setItem('user', user);
                            _this.router.navigate(['/Profile']);
                        }
                        else {
                            _this.errorMess = ' Invalid Username and/or Password!';
                            _this.errorOccured = true;
                            _this.alertt = true;
                            setTimeout(function () {
                                this.alertt = false;
                            }.bind(_this), 5000);
                        }
                    }, function () {
                        _this.errorMess = 'Server not responding! Try it again!';
                        _this.errorOccured = true;
                        _this.alertt = true;
                        setTimeout(function () {
                            this.alertt = false;
                        }.bind(_this), 5000);
                    });
                };
                LoginFormComponent.prototype.ngOnInit = function () {
                    localStorage.clear();
                    this._localStorage.remove("username");
                    this.form = this.formBuilder.group({
                        'name': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        'password': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ]))
                    });
                };
                LoginFormComponent.prototype.setPrivileg = function (title) {
                    var title2 = title.toUpperCase();
                    console.log("title " + title2);
                    if (title2 == 'ADMIN' || title2 == 'SUPERADMIN') {
                        this._localStorage.set("canAdd", "true");
                    }
                    else {
                        this._localStorage.set("canAdd", "false");
                    }
                    console.log("add " + this._localStorage.get("canAdd"));
                };
                __decorate([
                    core_1.Output('login'), 
                    __metadata('design:type', Object)
                ], LoginFormComponent.prototype, "login", void 0);
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login-form.component.html',
                        styleUrls: ['app/login-form.component.css'],
                        providers: [login_service_1.LoginService, local_storage_1.LocalStorage]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [local_storage_1.LocalStorage, common_1.FormBuilder, router_1.Router, login_service_1.LoginService])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=login-form.component.js.map
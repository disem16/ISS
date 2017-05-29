System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var User, Conference, Proposal, Grade, AccessLevel, ProfileService;
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
            function (_2) {},
            function (_3) {}],
        execute: function() {
            User = (function () {
                function User(name, maddress, address, photo, nationality, mobile) {
                    this.name = name;
                    this.maddress = maddress;
                    this.address = address;
                    this.photo = photo;
                    this.nationality = nationality;
                    this.mobile = mobile;
                }
                return User;
            }());
            exports_1("User", User);
            Conference = (function () {
                function Conference(conference, userList, deadline) {
                    this.conference = conference;
                    this.userList = userList;
                    this.deadline = deadline;
                }
                return Conference;
            }());
            exports_1("Conference", Conference);
            Proposal = (function () {
                function Proposal(id, user, userReviewer, document, domain, averagemark, name) {
                    this.id = id;
                    this.user = user;
                    this.userReviewer = userReviewer;
                    this.document = document;
                    this.domain = domain;
                    this.averagemark = averagemark;
                    this.name = name;
                }
                return Proposal;
            }());
            exports_1("Proposal", Proposal);
            Grade = (function () {
                function Grade(idgrade, name, number) {
                    this.idgrade = idgrade;
                    this.name = name;
                    this.number = number;
                }
                return Grade;
            }());
            exports_1("Grade", Grade);
            AccessLevel = (function () {
                function AccessLevel(idlevel, levelName) {
                    this.idlevel = idlevel;
                    this.levelName = levelName;
                }
                return AccessLevel;
            }());
            exports_1("AccessLevel", AccessLevel);
            ProfileService = (function () {
                function ProfileService(router, http) {
                    this.router = router;
                    this.http = http;
                }
                ProfileService.prototype.getUserData = function (username) {
                    console.log("la profile-service aduc datele personale: " + username);
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/user/getUserData/" + username).map(function (response) {
                        return response.json();
                    });
                };
                ProfileService.prototype.getConferences = function () {
                    console.log("aduc conferintele");
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/user/getConferences").map(function (response) { return response.json(); });
                };
                ProfileService.prototype.getGrades = function () {
                    console.log("aduc notele");
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/grade/getGrades").map(function (response) { return response.json(); });
                };
                ProfileService.prototype.getAL = function () {
                    console.log("aduc AL");
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/al/").map(function (response) { return response.json(); });
                };
                ProfileService.prototype.getProposals = function (username) {
                    console.log("la profile-service aduc propunerile unei persoane:" + username);
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/user/getProposals/" + username).map(function (response) {
                        return response.json();
                    });
                };
                ProfileService.prototype.getAllProposal = function () {
                    console.log("aduc propunerile");
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/proposal/getProposals").map(function (response) { return response.json(); }); //cred ca mearge asa cu"/"
                };
                ProfileService.prototype.getC = function (username) {
                    console.log("aduc conferintele la care " + username + "nu participa");
                    return this.http.get("http://localhost:9080/iss_rest/api/v1/user/getC/" + username).map(function (response) { return response.json(); });
                };
                ProfileService.prototype.addConference = function (conference) {
                    console.log("userul merge acum la aceasta conferinta " + conference.conference);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var stringified = JSON.stringify(conference);
                    console.log(stringified);
                    return this.http.post('http://localhost:9080/iss_rest/api/v1/user/addConference', stringified, { headers: headers });
                };
                ProfileService.prototype.deleteConference = function (conference) {
                    console.log("adminul stergere propunerea" + conference);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var stringified = JSON.stringify(conference);
                    return this.http.post('http://localhost:9080/iss_rest/api/v1/user/deleteConference', stringified, { headers: headers });
                };
                ProfileService.prototype.addProposal = function (proposal) {
                    console.log("userul adauga propunerea" + proposal);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var stringified = JSON.stringify(proposal);
                    return this.http.post('http://localhost:9080/iss_rest/api/v1/proposal/addProposal', stringified, { headers: headers });
                };
                ProfileService.prototype.deleteProposal = function (proposal) {
                    console.log("adminul stergere propunerea" + proposal);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var stringified = JSON.stringify(proposal);
                    return this.http.post('http://localhost:9080/iss_rest/api/v1/proposal/deleteProposal', stringified, { headers: headers });
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});
//# sourceMappingURL=profile.service.js.map
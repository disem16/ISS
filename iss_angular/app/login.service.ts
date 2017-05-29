import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {Response, Http, URLSearchParams, Headers,HTTP_PROVIDERS,RequestOptions,RequestMethod ,Request} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export class User {
  constructor(
    public name: string,
    public password: string) { }
}

export class Flags {
    constructor(
    public insert: string,
    public update: string,
    public login: string,
    public addUser: string,
    public removeUser: string) { }
}


@Injectable()
export class LoginService {

    constructor(
        private router: Router, 
        private http: Http) {}

    postData(user){ 
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var stringified = JSON.stringify(user);
        return this.http.post('http://localhost:9080/iss_rest/api/v1/user/getoneuser',stringified,{headers: headers});
    }

    logOut() {
        localStorage.clear();
        this.router.navigate(['Login']);
    }

    loginCheck(){
        if (!("user" in localStorage)){
            this.router.navigate(['Login']);
        }
    }     

}
import {Injectable, Component, Output, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';
import {Control, Validators, FormBuilder} from 'angular2/common';
import {LoginService, Flags} from './login.service'
import {User} from './login.service'
import {Response, Http, URLSearchParams, Headers,HTTP_PROVIDERS,RequestOptions,RequestMethod ,Request} from 'angular2/http';
import {LocalStorage} from './local_storage'


@Component({
    selector: 'login',
    templateUrl: 'app/login-form.component.html',
    styleUrls: ['app/login-form.component.css'],
    providers: [LoginService, LocalStorage]
})

@Injectable()
export class LoginFormComponent {
    form ;
    public errorOccured = false;
    public user_name: string = 'Ceva';
    public alertt = true;
    public flag = new Flags('false','false','false','false','false');

    @Output('login') login = new EventEmitter();
    loggedin: any;

    public user = new User('','');
    public errorMess = '';

    constructor(
      private _localStorage: LocalStorage,
      private formBuilder: FormBuilder, 
      private router: Router,  
      private loginService:LoginService) {}

    
   onSubmit(user) {


        this.loginService.postData(this.user).map(res => res.json())

        .subscribe(
          res => {
                this.loggedin = res.response;
                console.log("VALUE RECEIVED: ", res.response);

                if(res.response){
                    this.flag.login = 'ok';
                    this._localStorage.setObject("flags", this.flag);
                    this.setPrivileg(res.title);
                    this._localStorage.set("username", this.user.name);     
                    this._localStorage.set("search", "false");
                    localStorage.setItem('user', user);
                    this.router.navigate(['/Profile']); 
                }   
               else {
                    this.errorMess = ' Invalid Username and/or Password!';
                    this.errorOccured = true;
                    this.alertt = true;
                    setTimeout(function() {
                        this.alertt = false;
                    }.bind(this), 5000);


                }

            },
          () => {
                this.errorMess = 'Server not responding! Try it again!';
                this.errorOccured = true;
                this.alertt = true;
                setTimeout(function() {
                    this.alertt = false;
                }.bind(this), 5000);
          }
         );
    }

    ngOnInit() {

        localStorage.clear();
        this._localStorage.remove("username");
        this.form = this.formBuilder.group({
            'name': new Control('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
                ])),
            'password': new Control('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
                ]))
        });
    }

    setPrivileg(title) {
        var title2 = title.toUpperCase();
        console.log("title " + title2);
        if (title2 == 'ADMIN' || title2 == 'SUPERADMIN') {  
            this._localStorage.set("canAdd","true");
        }
        else {
            this._localStorage.set("canAdd","false");
        }
        console.log("add " + this._localStorage.get("canAdd"));
    }

}

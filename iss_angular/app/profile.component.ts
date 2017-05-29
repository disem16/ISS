import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {LoginService} from './login.service';
import {MenuBarComponent} from './menu-bar.component';
import {ProfileBodyComponent} from './profile-body.component';
import {LocalStorage} from './local_storage'


@Component({
    selector: 'profile',
    templateUrl: 'app/profile.component.html',
    styleUrls: ['app/profile.component.css'],
    directives: [MenuBarComponent,ProfileBodyComponent],
    providers: [LocalStorage]
})

export class ProfileComponent {

    constructor(
        private _localStorage: LocalStorage,
        private loginService:LoginService){}

    ngOnInit(){
        this._localStorage.set("search","false");
        this.loginService.loginCheck();
    }

    onLogOut() {
        this.loginService.logOut();
    }

}
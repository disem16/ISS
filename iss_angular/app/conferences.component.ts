import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {MenuBarComponent} from './menu-bar.component';
import {ConferencesBodyComponent} from './conferences-body.component';
import {LoginService} from './login.service';
import {LocalStorage} from './local_storage';

@Component({selector:'conferences',
 templateUrl:'app/conferences.component.html',
 directives:[MenuBarComponent, ConferencesBodyComponent],  //trebuie sa adaug si la directivee o chestie
providers:[LocalStorage]})

export class ConferencesComponent{
	constructor(
		private _localStorage:LocalStorage,
		private loginService:LoginService){}
	ngOnInit()
	{
		this.loginService.loginCheck();

	}
	onLogOut()
	{
		this.loginService.logOut();
	}

}

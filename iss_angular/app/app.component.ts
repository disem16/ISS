import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileComponent} from './profile.component';
import {LoginFormComponent} from './login-form.component';
import {LocalStorage} from './local_storage';
import {ConferencesComponent} from './conferences.component';

@RouteConfig([
	{ path: '/', component: LoginFormComponent, name: 'Login'},
	{ path: '/profile', component: ProfileComponent, name: 'Profile'},
	{ path: '/dashboard', component: ConferencesComponent, name: 'Patients'}
])

@Component({
	selector: 'iss',
	directives: [
    	ROUTER_DIRECTIVES
    	],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [LocalStorage]
})

export class AppComponent {
}

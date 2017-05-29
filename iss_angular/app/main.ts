import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LoginService} from './login.service';


bootstrap(AppComponent, [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        LoginService
    ]);

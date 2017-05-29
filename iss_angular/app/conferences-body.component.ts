import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ConferenceComponent} from './conferences-conference.component';

@Component({
    selector: 'conferences-body-comp',
    templateUrl: 'app/conferences-body.component.html',
    styleUrls: ['app/conferences-body.component.css'],
    directives:[ConferenceComponent]
})

export class ConferencesBodyComponent {
	
}
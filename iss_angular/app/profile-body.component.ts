import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProfileDataComponent} from './profile-data.component';
import {ProfileProposalComponent} from './profile-proposal.component'; 
import {LocalStorage} from './local_storage';
import {ProfileConferenceComponent} from './profile-conference.component';
import {ProfileGradePComponent} from './profile-profile-grade.component';

@Component({
    selector: 'profile-body-comp',
    templateUrl: 'app/profile-body.component.html',
    styleUrls: ['app/profile-body.component.css'],
     directives: [ProfileDataComponent,ProfileProposalComponent,ProfileGradePComponent,ProfileConferenceComponent],
     providers:[LocalStorage]
})

export class ProfileBodyComponent {
	public admin=false;
	constructor(
		private _localStorage:LocalStorage){}

	ngOnInit(){
		if(this._localStorage.get("canAdd")=="true")
		{
			this.admin=true;
			
		}
	}
	
}
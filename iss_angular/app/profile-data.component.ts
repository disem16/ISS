import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProfileService, User} from './profile.service';
import {LoginService,Flags} from './login.service';
import {LocalStorage} from './local_storage';
import {LoginFormComponent} from './login-form.component';

@Component({
	selector: 'profile-data-comp',
    templateUrl: 'app/profile-data.component.html',
    styleUrls:['app/profile-body.component.css'],
    providers:[ProfileService,LoginFormComponent,LocalStorage]	
})

export class ProfileDataComponent{
	public userProfileData=new User('','','','','','');
	//public myProfile=false;
	public dataBackup;

	constructor(
		private _localStorage:LocalStorage,
		private loginFormComponent:LoginFormComponent,
		private loginService:LoginService,
		private router:Router,
		private profileService:ProfileService
		){}
	ngOnInit(){
		var accountName=this._localStorage.get("username");
		//this.myProfile=true;
		//console.log(this._localStorage.get("userData"));
		if(!this._localStorage.get("userData"))
		{
			console.log("making data request:");
			this.profileService.getUserData(accountName)
			    .subscribe(
			    	userProfileData=>{this.userProfileData=userProfileData;this._localStorage.setObject("userData",this.userProfileData);},
			    	() =>{var flags=new Flags('false','error','false','false','false');
			              this._localStorage.setObject("flags",flags);
			        }
			    )
			//this.setResponse();  //adaugat de mine

			console.log(this.userProfileData);
		}
		else
		{
			console.log("no nead to make data request:");
			this.userProfileData=this._localStorage.getObject("userData");
            console.log(this.userProfileData);
		}

	}
	setResponse()
	{
		
		console.log(this.userProfileData);


	}
	

}
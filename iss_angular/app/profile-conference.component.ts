import {Component} from 'angular2/core';
import {ProfileService, Conference} from './profile.service';
import {LocalStorage} from './local_storage';
import {Control, Validators, FormBuilder} from 'angular2/common';
import {COMMON_DIRECTIVES} from 'angular2/common';
@Component({selector:'profile-conference-component',
templateUrl:'app/profile-conference.component.html',
styleUrls:['app/profile-body.component.css'],
providers:[ProfileService,LocalStorage],
directives:[COMMON_DIRECTIVES]})

export class ProfileConferenceComponent{

	public conferences: Conference[]=[];
	public conf= new Conference('',[],'');
	public confd=new Conference('',[],'');
	public administrator=false;
	public user=false;
	constructor(
		private profileService:ProfileService,
		private _localStorage:LocalStorage ){

	}
	ngOnInit(){
		console.log("administrator? "+this.administrator);
		if(this._localStorage.get("canAdd")=="true")
		{
			this.administrator=true;
			
		}
		else
		{
			this.user=true;
		}
		console.log("administrator? "+this.administrator);
		if(this.user==true)
		{
		var accountName=this._localStorage.get("username");
		console.log("making data request for (add) conferences");
		this.profileService.getC(accountName)
		.subscribe(
			conferences=>{this.conferences=conferences;},()=>{});
		}
		else
			this.profileService.getConferences().subscribe(conferences=>{this.conferences=conferences;},()=>{});
		
	}
	onSubmit(conf)
	{
		//console.log(conf);
		//console.log(this.conferences[0].conference);
		console.log("adaug o conferinta in lista mea");
		console.log(this.conf.conference);
		console.log(this.conf.deadline);
		if(this.user==true){
			for (var i = 0; i < this.conferences.length; i++) {  //parcurg lista sa vad data conferintei
        	     if(this.conferences[i].conference===this.conf.conference)
        	     	var deadline=this.conferences[i].deadline;
			}
			this.conf.deadline=deadline;
			console.log(this.conf.deadline);
		}
		this.conf.userList[0]=this._localStorage.get("username");
		console.log(this.conf.userList[0]);
		this.profileService.addConference(this.conf)
		.subscribe( res => {
              if(res.status == 201) {
                  console.log("success");
              }
                
            },
            () => {
             }
      );
    }
    onDelete(confd)
    {
    	console.log("sterg o conferinta");
		console.log(this.confd.conference);
		
		for (var i = 0; i < this.conferences.length; i++) {  //parcurg lista sa vad data conferintei
             if(this.conferences[i].conference===this.confd.conference)
             	var deadline=this.conferences[i].deadline;
		}
		this.confd.deadline=deadline;
		console.log(this.confd.deadline);
		//this.conf.userList[0]=this._localStorage.get("username");
		//console.log(this.conf.userList[0]);
		this.profileService.deleteConference(this.confd)
		.subscribe( res => {
              if(res.status == 201) {
                  console.log("success");
              }
                
            },
            () => {
             }
      );

    }
}
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProfileService, Conference} from './profile.service';
import {LocalStorage} from './local_storage';
import {Flags} from './login.service';


@Component({selector:'conference-component',
templateUrl:'app/conferences-conference.component.html',
styleUrls:['app/conferences-conference.component.css'],
providers:[LocalStorage,ProfileService]
})
export class ConferenceComponent{
  //o lista de conferinte

  public conferences: Conference[]=[];
  public myProfile = false;
 

	constructor(
        private router: Router,
        private _localStorage: LocalStorage,
        private profileService: ProfileService){
    }
    ngOnInit(){
        console.log("making data request for conferences");
        this.profileService.getConferences()
        .subscribe(conferences=>{this.conferences=conferences;},
            ()=>{// trebuia sa setez un obiect de tip flag
            });
        console.log("aici");
        //aduc conferintele din baza de date... cum am facut si pentru retete
    }
    setResponse()
    {
    }

}

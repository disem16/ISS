import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {LocalStorage} from './local_storage';
import {ProfileService, User} from './profile.service';
import {Flags} from './login.service'


@Component({
    selector: 'menu-bar-comp',
    templateUrl: 'app/menu-bar.component.html',
    styleUrls: ['app/menu-bar.component.css'],
    providers: [ProfileService, LocalStorage]
})

export class MenuBarComponent {
	public userProfileData = new User('','','','','','');
  
  public onSuccess = false;
  public onError = false;
  public onExist = false;
  public message = "";

  public flags: Flags;

	constructor(
        private router: Router,
        private _localStorage: LocalStorage,
        private profileService: ProfileService){
    }

    ngOnInit() { 
      
      this.evaluateFlags();

  		var accountName = this._localStorage.get("username");
          console.log("ininte:  " + this._localStorage.get("username"));
           

      console.log("profiledata");
      console.log(this._localStorage.get("userData"));
      if (!this._localStorage.get("userData")) {
          console.log("setting data");
          this.profileService.getUserData(accountName)
                               .subscribe(
                                   userProfileData => {this.userProfileData = userProfileData;this.setResponse()});
      }
      else {
        this.userProfileData = this._localStorage.getObject("userData");
      }

    }

    setResponse() {
          this._localStorage.setObject("userData", this.userProfileData);
          console.log(this._localStorage.getObject("userData")); 
    }

    //set data functions:

    evaluateFlags() {
      
      if (this._localStorage.getObject("flags").login == 'ok') {
          this.message = "Login successfull!";
          this.onSuccess = true;

          setTimeout(function() {
              this.onSuccess = false;
          }.bind(this), 5000);

          this.flags = this._localStorage.getObject("flags");
          this.flags.login = 'false'; 
          this._localStorage.setObject("flags", this.flags); 
      }

  }
}
import {Component} from 'angular2/core';
import {ProfileService, Proposal,Grade} from './profile.service';
import {LocalStorage} from './local_storage';


@Component({selector:'profile-proposal-grade-component',
templateUrl:'app/profile-proposal-grade.component.html',
styleUrls:['app/profile-body.component.css'],
providers:[LocalStorage,ProfileService]
})

export class ProfileGradePComponent{
	public proposals: Proposal[]=[];
	public prop= new Proposal('','','','','','','');
	public grades: Grade[]=[];
	public grade=new Grade('','','');
	constructor(
		private _localStorage:LocalStorage,
		private profileService:ProfileService){}
	ngOnInit()
	{
		console.log("making data request  for proposals");
		this.profileService.getAllProposal().subscribe(proposal=>{this.proposals=proposal;},()=>{});
        console.log("making data request  for grades");
		this.profileService.getGrades().subscribe(grades=>{this.grades=grades;},()=>{});
	}
	onSubmit()
	{
		console.log("prop"+this.prop.id);
		//this.grade.id=this.prop.averagemark;
		console.log("grade"+this.grade.idgrade);
		for(var i=0;i<this.proposals.length;i++){
			if(this.proposals[i].id==this.prop.id)
			{
				this.prop.document=this.proposals[i].document;
				this.prop.averagemark=this.proposals[i].averagemark;
				this.prop.domain=this.proposals[i].domain;
				this.prop.user=this.proposals[i].user;
				this.prop.userReviewer=this._localStorage.get("username");
				this.prop.name=this.proposals[i].name;
			}
		}
		for(var i=0;i<this.grades.length;i++){
			if(this.grades[i].idgrade==this.grade.idgrade)
			{
				this.grade.name=this.grades[i].name;
				this.grade.number=this.grades[i].number;
			}
		}
		if(this.prop.averagemark>0)
			this.prop.averagemark=(this.prop.averagemark+this.grade.number)/2;
		else
			this.prop.averagemark=this.grade.number;
        console.log(this.prop.user);
        console.log(this.prop.domain);
        console.log(this.prop.userReviewer);
		console.log(this.prop.averagemark);
		this.profileService.addProposal(this.prop)
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


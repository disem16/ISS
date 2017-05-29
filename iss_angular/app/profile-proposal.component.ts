import {Component} from 'angular2/core';
import {ProfileService, Proposal} from './profile.service';
import {LocalStorage} from './local_storage';

@Component({selector:'profile-proposal-component',
templateUrl:'app/profile-proposal.component.html',
styleUrls:['app/profile-body.component.css'],
providers:[LocalStorage,ProfileService]
})

export class ProfileProposalComponent{
	public proposals: Proposal[]=[];
	public proposals2: Proposal[]=[];
	public administrator=false;
	public prop=new Proposal('','','','','','','');
	public pnew=new Proposal('','','','','','','');
	//adaugare de proposal si administratorul vede toate propunerile  /le poate sterge
	constructor(
		private _localStorage:LocalStorage,
		private profileService:ProfileService){}
	ngOnInit(){

		if(this._localStorage.get("canAdd")=="true")
		{
			this.administrator=true;
			
		}
		if(this.administrator==false)
		{
			var accountname=this._localStorage.get("username");
			console.log("making data request  for proposals");
			this.profileService.getProposals(accountname)
				.subscribe(
					proposals=>{this.proposals=proposals;},
            		()=>{}

				);
			console.log("dupa ce am vazut propunerile");
		}
		else  //aici administratorul vede toate propunerile
			this.profileService.getAllProposal().subscribe(proposal=>{this.proposals=proposal;},()=>{});

	}
	delete(prop)
	{
		console.log("sterg o propunere");
		console.log(this.prop.id);
		// sa parcurg lista si sa il trimit in java
		for(var i=0;i<this.proposals.length;i++)
		{
			if(this.proposals[i].id==this.prop.id)
			{
				this.prop.averagemark=this.proposals[i].averagemark;
				this.prop.document=this.proposals[i].document;
				this.prop.name=this.proposals[i].name;
				this.prop.user=this.proposals[i].user;
				this.prop.userReviewer=this.proposals[i].userReviewer;
				this.prop.domain=this.proposals[i].domain;
			}
		}
		this.profileService.deleteProposal(this.prop)
		.subscribe( res => {
              if(res.status == 201) {
                  console.log("success");
              }
                
            },
            () => {
             }
      );
	}
	onSubmit(pnew)
	{
		console.log("adaug o propunere");
		console.log(this.pnew.name);
		this.pnew.user=this._localStorage.get("username");
		this.profileService.addProposal(this.pnew)
		.subscribe( res => {
              if(res.status == 201) {
                  console.log("success");
              }
                
            },
            () => {
             }
      );
		//sa o trimit in java 
	}
}


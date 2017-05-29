import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import { Response, Http, URLSearchParams, Headers,HTTP_PROVIDERS,RequestOptions,RequestMethod ,Request} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/Rx'

export class User{
  	constructor(
        public name:string,
        public maddress:string,
        public address:string,
        public photo:string,
        public nationality:string,
        public mobile:string
        ) { }
}

export class Conference{
	
	constructor(
        public conference:string,
        public userList:String[],
		public deadline : string
		) { }
}
export class Proposal{
    constructor(
        public id:number,
        public user:string,
        public userReviewer: string,
        public document:string,
        public domain:string,
        public averagemark: number,
        public name: string

        ){}
}
export class Grade{
    constructor(
        public idgrade:number,
        public name:string,
        public number:number){}
}
export class AccessLevel{
    constructor(
        public idlevel:number,
        public levelName:string){}
}

@Injectable()
export class ProfileService {
    constructor(
        private router: Router, private http: Http) {}

     getUserData(username) {
    	console.log("la profile-service aduc datele personale: " + username);

        return this.http.get(`http://localhost:9080/iss_rest/api/v1/user/getUserData/${username}`).map(response => {
        	return response.json();
        });

    }

    getConferences(){
        console.log("aduc conferintele");
        return this.http.get(`http://localhost:9080/iss_rest/api/v1/user/getConferences`).map(response =>{return response.json();});
    }
    getGrades(){
        console.log("aduc notele");
        return this.http.get(`http://localhost:9080/iss_rest/api/v1/grade/getGrades`).map(response =>{return response.json();});
    }
    getAL(){
        console.log("aduc AL");
        return this.http.get(`http://localhost:9080/iss_rest/api/v1/al/`).map(response =>{return response.json();});

    }
    getProposals(username)
    {
        console.log("la profile-service aduc propunerile unei persoane:" + username);

        return this.http.get(`http://localhost:9080/iss_rest/api/v1/user/getProposals/${username}`).map(response => {
            return response.json();
        });

    }
    getAllProposal()
    {
        console.log("aduc propunerile");
        return this.http.get(`http://localhost:9080/iss_rest/api/v1/proposal/getProposals`).map(response =>{return response.json();}); //cred ca mearge asa cu"/"

    }
    getC(username){
        console.log("aduc conferintele la care "+username +"nu participa");
        return this.http.get(`http://localhost:9080/iss_rest/api/v1/user/getC/${username}`).map(response =>{return response.json();});
    }
    addConference(conference)
    {

        console.log("userul merge acum la aceasta conferinta "+conference.conference);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var stringified = JSON.stringify(conference);
        console.log(stringified);
        return this.http.post('http://localhost:9080/iss_rest/api/v1/user/addConference',stringified,{headers: headers});
    }
    deleteConference(conference)
    {

        console.log("adminul stergere propunerea"+conference);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var stringified = JSON.stringify(conference);
        return this.http.post('http://localhost:9080/iss_rest/api/v1/user/deleteConference',stringified,{headers: headers});
    }
    addProposal(proposal)
    {

        console.log("userul adauga propunerea"+proposal);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var stringified = JSON.stringify(proposal);
        return this.http.post('http://localhost:9080/iss_rest/api/v1/proposal/addProposal',stringified,{headers: headers});
    }
    deleteProposal(proposal)
    {

        console.log("adminul stergere propunerea"+proposal);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var stringified = JSON.stringify(proposal);
        return this.http.post('http://localhost:9080/iss_rest/api/v1/proposal/deleteProposal',stringified,{headers: headers});
    }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UsersServiceService {

	constructor(private http: HttpClient) { }

	getUsers(): Observable<any>{
		let url: string = "http://localhost:8888/Users";
		let observable: Observable<any> = this.http.get(url);
		return observable;
	}

	createUser(mail:string, MDP:string, nom:string, prenom:string, ville:string, adresse:string, telephone:string) {
		var json = {"mail":mail,"MDP":MDP,"nom":nom,"prenom":prenom,"ville":ville,"adresse":adresse,"telephone": telephone};
		console.log(json);
		return this.http.post("http://localhost:8888/users", json);
	}


}

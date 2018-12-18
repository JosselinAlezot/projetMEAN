import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';



@Component({
	selector: 'app-auth-component',
	templateUrl: './auth-component.component.html',
	styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

	private login: string = "";
	private pass: string = "";
	private isLoggedIn: boolean = false;
	private users: Object[];
	private failedConnection = false;

	constructor(private research: UsersServiceService) { }

	ngOnInit() {
		this.research.getUsers().subscribe(users => this.users = users);
	}

	onSubmit(){
		for(let user of this.users){
			if(user['mail'] == this.login && user['MDP'] == this.pass)
				this.isLoggedIn = true;
			else{
				this.failedConnection = true;
			}
		}
	}

	testUser(){
		console.log(this.users);
		console.log(this.login);
	}

	logout(){
		this.isLoggedIn = false;
		this.failedConnection = false;
	}
}

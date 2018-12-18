import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';


@Component({
	selector: 'app-auth-component',
	templateUrl: './auth-component.component.html',
	styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {


	private login: string;
	private pass: string;
	private isLoggedIn: boolean = false;
	private users: Object[];

	constructor(private research: UsersServiceService) { }

	ngOnInit() {
		this.research.getUsers().subscribe(res => this.users = res);
		console.log(this.users);
	}

	onSubmit(){
		this.isLoggedIn = true;
	}

	logout(){
		this.isLoggedIn = false;
	}
}

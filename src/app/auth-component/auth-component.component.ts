import { Component, OnInit } from '@angular/core';



@Component({
	selector: 'app-auth-component',
	templateUrl: './auth-component.component.html',
	styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

	private login: string;
	private pass: string;
	private isLoggedIn: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	onSubmit(){
		this.isLoggedIn = true;
	}

	logout(){
		this.isLoggedIn = false;
	}
}

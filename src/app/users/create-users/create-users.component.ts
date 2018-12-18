import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
	selector: 'app-create-users',
	templateUrl: './create-users.component.html',
	styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

	productForm: FormGroup;
	mail:string="";
	MDP:string="";
	nom:string="";
	prenom:string="";
	ville:string="";
	adresse="";
	telephone="";
	isLoadingResults = false;

	constructor(private users: UsersServiceService, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.productForm = this.formBuilder.group({
			'mail' : [null,Validators.required],
			'MDP' : [null,Validators.required],
			'nom' : [null, Validators.required],
			'prenom' : [null,Validators.required],
			'ville' : [null,Validators.required],
			'adresse' : [null, Validators.required],
			'telephone': [null,Validators.required]
		});
	}

	onFormSubmit(form:NgForm) {
		this.isLoadingResults = true;
		this.users.createUser(this.mail, this.MDP, this.nom, this.prenom, this.ville, this.adresse,this.telephone)
		.subscribe(res => {
			this.isLoadingResults = false;
		}, (err) => {
			console.log(err);
			this.isLoadingResults = false;
		});
	}

}

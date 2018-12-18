import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'app-create-services',
	templateUrl: './create-services.component.html',
	styleUrls: ['./create-services.component.css']
})
export class CreateServicesComponent implements OnInit {

	productForm: FormGroup;
	nom:string="";
	descriptif:string="";
	prix:string="";
	type:string="";
	isLoadingResults = false;

	constructor(private services: ServicesService, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.productForm = this.formBuilder.group({
			'nom' : [null, Validators.required],
			'descriptif' : [null,Validators.required],
			'prix' : [null,Validators.required],
			'type' : [null, Validators.required],
		});
	}

	onFormSubmit(form:NgForm) {
		this.isLoadingResults = true;
		this.services.createService(this.nom, this.descriptif,this.prix,this.type)
		.subscribe(res => {
			this.isLoadingResults = false;
		}, (err) => {
			console.log(err);
			this.isLoadingResults = false;
		});
	}

}

import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';


import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-goods',
  templateUrl: './create-goods.component.html',
  styleUrls: ['./create-goods.component.css']
})
export class CreateGoodsComponent implements OnInit {

	productForm: FormGroup;
	nom:string="";
	prixNeuf:number=null;
	isLoadingResults = false;

    constructor(private router: Router, private goods: GoodsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.productForm = this.formBuilder.group({
    'nom' : [null, Validators.required],
    'prixNeuf' : [null, Validators.required]
  });
}

	onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  this.goods.createGood(this.nom, this.prixNeuf)
    .subscribe(res => {
        let id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['goods', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
}


}

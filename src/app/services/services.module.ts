import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateServicesComponent } from './create-services/create-services.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ListServicesComponent } from './list-services/list-services.component';

@NgModule({
  declarations: [CreateServicesComponent, ListServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
],
exports: [
  	CreateServicesComponent, ListServicesComponent],
})
export class ServicesModule { }

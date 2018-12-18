import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CreateUsersComponent } from './create-users/create-users.component';

@NgModule({
  declarations: [AuthComponentComponent, CreateUsersComponent],
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
  	AuthComponentComponent,CreateUsersComponent],
})
export class UsersModule { }

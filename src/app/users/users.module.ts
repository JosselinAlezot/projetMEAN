import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [AuthComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
  	AuthComponentComponent],
})
export class UsersModule { }

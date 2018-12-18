
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ListGoodsComponent } from './list-goods/list-goods.component';
import { GoodsComponent } from './goods.component';
import { CreateGoodsComponent } from './create-goods/create-goods.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [ListGoodsComponent, GoodsComponent, CreateGoodsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
], 
  exports: [ ListGoodsComponent, CreateGoodsComponent ],

})
export class GoodsModule { }

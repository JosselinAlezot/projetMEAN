
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGoodsComponent } from './list-goods/list-goods.component';

@NgModule({
  declarations: [ListGoodsComponent],
  imports: [
    CommonModule
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
], 
  exports: [ ListGoodsComponent ],

})
export class GoodsModule { }

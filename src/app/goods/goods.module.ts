
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGoodsComponent } from './list-goods/list-goods.component';
import { GoodsComponent } from './goods.component';

@NgModule({
  declarations: [ListGoodsComponent, GoodsComponent],
  imports: [
    CommonModule
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]

})
export class GoodsModule { }

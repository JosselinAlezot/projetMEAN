import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';

const routes: Routes = [
{path: 'goods', component: GoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

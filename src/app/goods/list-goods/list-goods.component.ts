import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-list-goods',
  templateUrl: './list-goods.component.html',
  styleUrls: ['./list-goods.component.css']
})
export class ListGoodsComponent implements OnInit {

	private goods:any;



  constructor(private goodsService: GoodsService) {
	 }

  ngOnInit() {
     this.goodsService.getGoods().subscribe(res => this.goods = res);
  }

}

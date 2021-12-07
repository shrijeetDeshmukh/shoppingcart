import { LoadLocalJsonService } from './../load-local-json.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list-page',
  templateUrl: './card-list-page.page.html',
  styleUrls: ['./card-list-page.page.scss'],
})
export class CardListPagePage implements OnInit {
  product_cartList;
  product_total: number;
  buy_button: boolean = true;
  shop_now: boolean = false;
  emptyCart:boolean=false;
  constructor(private router: Router, private load_local: LoadLocalJsonService) { }

  ngOnInit() {
    this.product_cartList = this.load_local.product_cart_list;
    this.product_total = this.product_cartList.map(item => Number(item.product_price)).reduce((prev, next) => prev + next);
  }

  buy() {
    this.load_local.presentToast('Item purchased successfully');
    // console.log()
  }

  delete_product(data) {
    this.load_local.cart_count = 0;
    this.product_total = 0;
    this.product_cartList = this.product_cartList.filter(product => product.product_id != data.product_id);
    this.load_local.product_cart_list=this.product_cartList;
    this.product_total = this.product_cartList.map(item => Number(item.product_price)).reduce((prev, next) => prev + next, 0);
    this.load_local.cart_count = this.product_cartList.length;
    console.log(this.load_local.cart_count);
    if (this.load_local.cart_count == 0) {
      this.shop_now = true;
      this.buy_button = false;
      this.emptyCart=true;
    } else {
      this.shop_now = false;
      this.buy_button = true;
      this.emptyCart=false;
    }
  }

  browse_product(){
    this.router.navigate(['/product-list', { item: {} }]);  
  }

}

import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadLocalJsonService } from '../load-local-json.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product_object;
  product_name: String;
  product_image: String;
  product_description: String;
  product_price: String;
  ifProductAdded: boolean = false;
  cart_count: number;
  constructor(private router: Router, private toast_msg: ToastController, private local_service: LoadLocalJsonService) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation().extras.queryParams);
    this.product_object = this.router.getCurrentNavigation().extras.queryParams;
    this.product_name = this.product_object.resp.product_name;
    this.product_image = this.product_object.resp.product_image_url;
    this.product_description = this.product_object.resp.product_description;
    this.product_price = this.product_object.resp.product_price;
  }

  add_to_cart() {
    this.ifProductAdded = true;
    console.log(this.product_object);
    this.local_service.cart_count++;
    this.cart_count = this.local_service.cart_count;
    this.local_service.product_cart_list.push(this.product_object.resp);
    this.local_service.presentToast('Product added to cart');
  }

  go_to_cart() {
    this.router.navigateByUrl('/card-list-page');
  }

  ionViewDidEnter() {
    this.cart_count = this.local_service.cart_count;
    if(this.cart_count>0){
      this.ifProductAdded=true;
    }
  }



}

import { Router, NavigationExtras } from '@angular/router';
import { LoadLocalJsonService } from './../load-local-json.service';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  product_list;
  username: String;
  constructor(private load_json: LoadLocalJsonService, private router: Router) { }

  ngOnInit() {
    this.load_json.getJSON().subscribe(data => {
      this.product_list = data;
      console.log('localStorage.getItem(user_data)', localStorage.getItem('user_data'));
      var bytes = CryptoJS.AES.decrypt(localStorage.getItem('user_data_obj'), 'shriv');
      console.log('bytes', bytes);
      // let username_decrypted = JSON.parse(decryptUsername_byte.toString(CryptoJS.enc.Utf8));
      // console.log('username_decrypted',username_decrypted);
    });


  }

  product_detail(data: {}) {
    console.log('data', data);
    // this.router.navigateByUrl('/product-detail')

    const navigationExtras: NavigationExtras = {
      queryParams: { "resp": data },
    };
    this.router.navigateByUrl('/product-detail', navigationExtras);
  }


}

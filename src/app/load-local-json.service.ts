import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadLocalJsonService {
 product_cart_list=[];
 cart_count:number=0;
  constructor(private http: HttpClient,private toastmsg:ToastController) { }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/product.json");
}

async presentToast(msg) {
  const toast = await this.toastmsg.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}
}

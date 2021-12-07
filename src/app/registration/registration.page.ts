import { Router } from '@angular/router';
import { LoadLocalJsonService } from './../load-local-json.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  register: FormGroup;
  defaultDate = "";
  constructor(public formBuilder: FormBuilder, private local_json: LoadLocalJsonService, private router: Router) { }

  ngOnInit() {

    this.register = this.formBuilder.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
      dob: [],
      phone: ['', [Validators.required,]],
      password: ['', [Validators.required]],
      pan: ['', [Validators.required]]
    })
  }


  register_user() {
    console.log(this.register.value);
    if (this.register.value.email != null && this.register.value.password != null && this.register.value.dob != null && this.register.value.name != null && this.register.value.phone != null && this.register.value.pan != null) {
      let encrypt_user_data = CryptoJS.AES.encrypt(JSON.stringify(this.register.value), 'shriv').toString();
      let username = CryptoJS.AES.encrypt(this.register.value.email, 'user_n').toString();
      let password = CryptoJS.AES.encrypt(this.register.value.password, 'pass_w').toString();
      localStorage.setItem('user_data_obj', encrypt_user_data);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      this.local_json.presentToast('Successfully registered. Please login now');
      this.router.navigateByUrl('/');
    } else {
      this.local_json.presentToast('Please enter all the details');
    }
  }
  fetchDate(date) {
    console.log(date);
  }
}

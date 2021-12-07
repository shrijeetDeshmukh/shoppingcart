import { LoadLocalJsonService } from './../load-local-json.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from "@angular/forms";
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router, private load_local: LoadLocalJsonService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: [],
    })
  }
  
  submitForm() {
    if(this.ionicForm.value.email !=null && this.ionicForm.value.password !=null){
    console.log(this.ionicForm.value.email);
    console.log(localStorage.getItem('username'));
    let decryptUsername_byte = CryptoJS.AES.decrypt(localStorage.getItem('username'), 'user_n');
    let username_decrypted = decryptUsername_byte.toString(CryptoJS.enc.Utf8);
    let decrytPass_bytes = CryptoJS.AES.decrypt(localStorage.getItem('password'), 'pass_w');
    let password_decrypted = decrytPass_bytes.toString(CryptoJS.enc.Utf8);
    if (this.ionicForm.value.email == username_decrypted && this.ionicForm.value.password == password_decrypted) {
      this.router.navigate(['/product-list', { item: {} }]);
    }
    else {
      this.load_local.presentToast('Wrong username or password');
    }
  }else{
    this.load_local.presentToast('Please enter username and password');
  }
  }

  register() {
    this.router.navigate(['/registration', { item: {} }]);
  }
}

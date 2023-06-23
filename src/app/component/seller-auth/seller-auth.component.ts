import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { login } from 'data-type';
import { SellersService } from 'src/app/service/sellers.service';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';
  ngOnInit(): void {}
  constructor(private _service: SellersService) {}
  // <!-- seller sign up -->
  form = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    this._service.userSignUp(this.form.value).subscribe((result) => {});
  }
  // <!-- seller log in -->
  sellerForm = new FormGroup({
    sellerEmail: new FormControl(''),
    sellerPassword: new FormControl(''),
  });
  getSellerData(data: login) {
    this.authError="";
    this._service.userLogin(data);
    this._service.isLoginError.subscribe((error) => {
      if (error) {
        this.authError = 'email and pass is not match';
      } 
    });
  }
  // toggle between log in and sign up
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}

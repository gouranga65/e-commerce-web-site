import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from 'data-type';
import { SellersService } from 'src/app/service/sellers.service';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';
  ngOnInit(): void {
    this._service.reLoadSeller();
  }
  constructor(private _service: SellersService, private _router: Router) {}
  // <!-- seller sign up -->
  onSubmit(data: signUp) {
    // console.log(data);
    this._service.userSignUp(data);
  }
  // <!-- seller log in -->
  getSellerData(data: login) {
    // this.authError = '';
    this._service.userLogin(data);
    // this._service.isLoginError.subscribe((error) => {
    //   if (error) {
    //     this.authError = 'email and pass is not match';
    //   }
    // });
    
  }
  // toggle between log in and sign up
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}

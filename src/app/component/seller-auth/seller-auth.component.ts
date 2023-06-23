import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellersService } from 'src/app/service/sellers.service';
import { SignUp } from 'data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  constructor(private _service: SellersService, private _router: Router) {}
  form = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  sellerForm = new FormGroup({
    sellerEmail: new FormControl(''),
    sellerPassword: new FormControl(''),
  });
  ngOnInit(): void {}

  onSubmit() {
    this._service.userSignUp(this.form.value).subscribe((result) => {});
  }
  onLogin() {
    console.log(this.sellerForm.value);
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SellersService } from 'src/app/service/sellers.service';
import {  SignUp} from "data-type";
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private _service: SellersService, private _router: Router) {}
  form = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {}

  onSubmit() {
    this._service.userSignUp(this.form.value).subscribe((result) => {
      if (result) {
        this._router.navigate(['sellerHome']);
      }
    });
  }
}

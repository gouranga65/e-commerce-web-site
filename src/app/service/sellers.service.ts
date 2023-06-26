import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from 'data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SellersService {
  isSellerLogin = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private _http: HttpClient, private _router: Router) {}
  userSignUp(data: signUp) {
    this._http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('seller', JSON.stringify(result.body)); //to save data in local storage
          this._router.navigate(['sellerHome']);
        }
      });
  }
  reLoadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogin.next(true);
      this._router.navigate(['sellerHome']);
    }
  }
  userLogin(data: login) {
    console.log(data);

    this._http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          console.log('user log in');
          localStorage.setItem('seller', JSON.stringify(result.body)); //to save data in local storage
          this._router.navigate(['sellerHome']);
        } else {
          console.log('user log in failed');
          this.isLoginError.emit(true);
        }
      });
  }
}

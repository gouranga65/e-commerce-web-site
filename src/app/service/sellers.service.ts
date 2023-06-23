import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from 'data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SellersService {
  isSellerLogin = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private _http: HttpClient, private _router: Router) {}
  userSignUp(data: any) {
    return this._http.post('http://localhost:3000/seller', data);
  }
  userLogin(data: login) {
    this._http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          console.log('user log in');
          localStorage.setItem('seller', JSON.stringify(result.body)); //to save data in local storage
          this._router.navigate(['/sellerHome']);
        } else {
          console.log('user log in failed');
          this.isLoginError.emit(true);
        }
      });
  }
}

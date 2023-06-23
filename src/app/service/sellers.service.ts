import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SellersService {
  isSellerLogIn = new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient) {}
  userSignUp(data: any) {
    return this._http.post('http://localhost:3000/seller', data);
  }
}

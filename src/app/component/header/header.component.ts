import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sellerName: string = '';
  menuType: string = 'default';
  constructor(private _router: Router) {}
  ngOnInit() {
    this._router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.userName;
          this.menuType = 'seller';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }
  logOut() {
    localStorage.removeItem('seller');
    this._router.navigate(['/']);
  }
}

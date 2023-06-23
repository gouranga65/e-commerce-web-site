import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType="default";
  constructor(private _router: Router) {}
  ngOnInit() {
    this._router.events.subscribe((result: any) => {
      if (result.url) {
        if (localStorage.getItem('seller') && result.url.includes('seller')) {
          console.log('in seller area');
          this.menuType="seller"
        } else {
          console.log('out seller area');
          this.menuType="default";
        }
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      email: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.form.value);
    
  }
}

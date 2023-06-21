import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"seller",component:SellerAuthComponent},
  {path:"**",component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

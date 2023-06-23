import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seller', component: SellerAuthComponent },
  { path: 'sellerHome', component: SellerHomeComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

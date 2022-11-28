import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {TglhariiniComponent} from './tglhariini/tglhariini.component';
import { ProductComponent } from './product/product.component';
import { CegahcovidComponent } from './cegahcovid/cegahcovid.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const appRoutes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'detail/:id', component: ProductdetailComponent},
  {path: 'covid', component: CegahcovidComponent},
];

@NgModule({
  declarations: [AppComponent, TglhariiniComponent, ProductComponent, CegahcovidComponent, ProductdetailComponent],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [ProductService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

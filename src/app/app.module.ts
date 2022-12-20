import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TglhariiniComponent } from './tglhariini/tglhariini.component';
import { ProductComponent } from './product/product.component';
import { CegahcovidComponent } from './cegahcovid/cegahcovid.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MovieComponent } from './movie/movie.component';
import { DetailmovieComponent } from './detailmovie/detailmovie.component';
import { ProductformComponent } from './productform/productform.component';
import { UserService } from './user.service';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'detail/:id', component: ProductdetailComponent },
  { path: 'covid', component: CegahcovidComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'detailmovie/:id', component: DetailmovieComponent },
];

@NgModule({
  declarations: [AppComponent, ProductformComponent, MovieComponent, DetailmovieComponent, TglhariiniComponent, ProductComponent, CegahcovidComponent, ProductdetailComponent],
  imports: [IonicStorageModule.forRoot(), HttpClientModule, RouterModule.forRoot(appRoutes), BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [Camera, Geolocation, UserService, ProductService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

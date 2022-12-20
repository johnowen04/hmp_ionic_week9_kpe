import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';

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
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'detail/:id', component: ProductdetailComponent },
  { path: 'covid', component: CegahcovidComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'detailmovie/:id', component: DetailmovieComponent },
];

@NgModule({
  declarations: [AppComponent, ProductformComponent, MovieComponent, DetailmovieComponent, TglhariiniComponent, ProductComponent, CegahcovidComponent, ProductdetailComponent],
  imports: [IonicStorageModule.forRoot(), HttpClientModule, RouterModule.forRoot(appRoutes), BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [Camera, UserService, ProductService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

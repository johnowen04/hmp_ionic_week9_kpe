import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {TglhariiniComponent} from './tglhariini/tglhariini.component';
import { ProductComponent } from './product/product.component';
import { CegahcovidComponent } from './cegahcovid/cegahcovid.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TglhariiniComponent, ProductComponent, CegahcovidComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

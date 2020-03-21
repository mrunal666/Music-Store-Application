import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { MusicComponent } from './component/music/music.component';
import { DetailsComponent } from './component/details/details.component';


import { MusicService } from './service/music.service';

 
@NgModule({
  declarations: [
    AppComponent,
	CartComponent,
	MusicComponent,
	DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [
	MusicService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ CartComponent } from './component/cart/cart.component';
import{ MusicComponent } from './component/music/music.component';
import{ DetailsComponent } from './component/details/details.component';


const routes: Routes = [
	{ path: '', component: MusicComponent },
	{ path: 'musics', component: MusicComponent },
	{ path: 'details', component: DetailsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

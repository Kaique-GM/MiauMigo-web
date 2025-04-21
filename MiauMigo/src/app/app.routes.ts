import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent},
    { path: 'about', component: AboutComponent },
    { path: 'anunciar', component: AnunciarComponent },

    
    { path: '**', component: NotFoundComponent }
];

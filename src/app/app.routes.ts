import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [


    // Main layout
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'about', component: AboutComponent },
            { path: 'anunciar', component: AnunciarComponent },
            { path: 'product-detail/:id', component: ProductDetailComponent },


        ],
    },

    // Login layout
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'cadastro-cliente', component: CadastroClienteComponent },
            { path: 'cadastro-vendedor', component: CadastroVendedorComponent },

        ],
    },

    { path: '**', component: NotFoundComponent }

];

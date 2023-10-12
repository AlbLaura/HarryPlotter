import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home-component', component: HomeComponent },
  { path: 'categorias-component', component: CategoriasComponent},
  { path: 'news-component', component: NewsComponent},
  { path: 'contact-component', component: ContactComponent},
  { path: 'login-component', component: LoginComponent},
  { path: 'cart-component', component: CartComponent},
  { path: 'product-component', component: ProductComponent},
  { path: 'announcement-component', component: AnnouncementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

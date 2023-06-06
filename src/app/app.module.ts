import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductComponent } from './components/product/product.component';
import { LatestProductComponent } from './components/latest-product/latest-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { QuestionComponent } from './components/question/question.component';
import { HomeComponent } from './home/home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { LatestAnnouncementComponent } from './components/latest-announcement/latest-announcement.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CartComponent } from './cart/cart.component';
import { FormCartComponent } from './form-cart/form-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FiltroComponent,
    PaginationComponent,
    ProductComponent,
    LatestProductComponent,
    ListProductComponent,
    QuestionComponent,
    HomeComponent,
    CarrouselComponent,
    LatestAnnouncementComponent,
    AnnouncementComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    CategoriasComponent,
    CartComponent,
    FormCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

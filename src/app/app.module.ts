import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './modules/home/contact/contact.component';
import { LoginComponent } from './modules/home/login/login.component';
import { CartComponent } from './modules/home/cart/cart.component';
import { FormCartComponent } from './modules/home/form-cart/form-cart.component';
import { CategoriesComponent } from '@modules/home/categories/categories.component';
import { NewsDetailComponent } from '@modules/home/news-detail/news-detail.component';
import { ProductDetailComponent } from '@modules/home/product-detail/product-detail.component';

import { SharedModule } from '@shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { NavigationComponent } from '@layout/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    HeaderComponent,
    FooterComponent, 
    NavigationComponent,
    ContactComponent,
    LoginComponent,
    CartComponent,
    FormCartComponent,
    CategoriesComponent,
    NewsDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    //Core
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

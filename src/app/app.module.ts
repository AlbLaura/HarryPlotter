// ! Acá se importa todos los modulos principales, las vistas de las paginas y el layout

// ? Modulos de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// ? Vistas de las paginas
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './modules/login/login.component';
import { CartComponent } from './modules/cart/cart.component';
import { FormCartComponent } from './modules/form-cart/form-cart.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { NewsComponent } from './modules/news/news.component';
import { NewsDetailComponent } from './modules/news-detail/news-detail.component';
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
// ? Layouts
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { NavigationComponent } from '@layout/navigation/navigation.component';
import { FormContactComponent } from './modules/form-contact/form-contact.component';
// ? Trae importado los componentes utilizados
import { SharedModule } from "./shared/shared.module";

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
    ProductDetailComponent,
    FormContactComponent,
    NewsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    //Core
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
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

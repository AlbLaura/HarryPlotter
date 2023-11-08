import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { QuestionComponent } from './shared/components/question/question.component';
import { CarrouselComponent } from './shared/components/carrousel/carrousel.component';
import { AnnouncementComponent } from './shared/components/announcement/announcement.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CartComponent } from './cart/cart.component';
import { FormCartComponent } from './form-cart/form-cart.component';
import { ProductoPageComponent } from './producto-page/producto-page.component';
import { NewPageComponent } from './new-page/new-page.component';

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
    //actualizar ubicacion de componentes V
    PaginationComponent,
    QuestionComponent,
    CarrouselComponent,
    AnnouncementComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    CategoriasComponent,
    CartComponent,
    FormCartComponent,
    ProductoPageComponent,
    NewPageComponent
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

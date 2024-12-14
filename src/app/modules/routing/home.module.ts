import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardListComponent } from "../../shared/components/cards/card-list/card-list.component";
import { CarrouselComponent } from "../../shared/components/carrousel/carrousel.component";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CardListComponent,
    CarrouselComponent
]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CarritoRoutingModule } from './carrito-routing.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CarritoRoutingModule,
    CommonModule
  ]
})
export class CarritoModule { }

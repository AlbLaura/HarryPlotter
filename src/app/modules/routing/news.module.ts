import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    NewsRoutingModule,
    CommonModule
  ]
})
export class NewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';
import { CardViewListaComponent } from './components/cards/card-view-lista/card-view-lista.component';
import { BadgeTazasComponent } from './components/badges/badge-tazas/badge-tazas.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...fromComponents.components, CardViewListaComponent, BadgeTazasComponent, ButtonComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }

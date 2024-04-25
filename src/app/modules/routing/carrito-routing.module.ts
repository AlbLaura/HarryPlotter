import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '@modules/cart/cart.component';
import { FormCartComponent } from '@modules/form-cart/form-cart.component';

const routes:Routes = [
  {
    path: '',
    component: CartComponent
  },
  {
    path: 'formulario',
    component: FormCartComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }

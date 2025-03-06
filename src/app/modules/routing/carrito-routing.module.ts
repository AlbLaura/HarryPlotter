import { Routes } from '@angular/router';

export const carritoRoutes:Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@modules/cart/cart.component').then( (m) => m.CartComponent)
  },
  {
    path: 'formulario',
    loadComponent: () =>
      import('@modules/form-cart/form-cart.component').then( (m) => m.FormCartComponent)
  }
];
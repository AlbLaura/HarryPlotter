import { Routes } from '@angular/router';

export const carritoRoutes:Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/cart/cart.component').then( (m) => m.CartComponent)
  },
  {
    path: 'formulario',
    loadComponent: () =>
      import('@features/form-cart/form-cart.component').then( (m) => m.FormCartComponent)
  }
];
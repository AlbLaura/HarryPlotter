import { Routes } from '@angular/router';

export const loginRoutes:Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@modules/login/login.component').then( (m) => m.LoginComponent)
  }
];
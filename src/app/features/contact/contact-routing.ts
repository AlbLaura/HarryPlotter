import { Routes } from '@angular/router';

export const contactoRoutes:Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contact.component').then( (m) => m.ContactComponent)
  }
];
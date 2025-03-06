import { Routes } from '@angular/router';

export const contactoRoutes:Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@modules/contact/contact.component').then( (m) => m.ContactComponent)
  }
];
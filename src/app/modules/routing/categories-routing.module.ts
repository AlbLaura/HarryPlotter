import { Routes } from '@angular/router';

export const categoriasRoutes:Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@modules/categories/categories.component').then( (m) => m.CategoriesComponent)
  }
];
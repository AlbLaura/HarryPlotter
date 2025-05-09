import { Routes } from '@angular/router';

export const anunciosRoutes:Routes = [
  {
    path: '',
    loadComponent: () => import('./news.component').then( (m) => m.NewsComponent)
  }
];
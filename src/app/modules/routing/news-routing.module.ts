import { Routes } from '@angular/router';

export const anunciosRoutes:Routes = [
  {
    path: '',
    loadComponent: () => import('@modules/news/news.component').then( (m) => m.NewsComponent)
  }
];
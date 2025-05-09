import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home.component').then(m => m.HomeComponent)
    },
    {
        path: 'producto-detalle/:id',
        loadComponent: () => import('@features/product-detail/product-detail.component').then(m => m.ProductDetailComponent) 
    },
    {
        path: 'anuncios-detalle/:id',
        loadComponent: () => import('@features/news-detail/news-detail.component').then(m => m.NewsDetailComponent) 
    }
];


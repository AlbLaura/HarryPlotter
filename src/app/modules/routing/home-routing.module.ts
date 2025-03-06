import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@modules/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'producto-detalle/:id',
        loadComponent: () => import('@modules/product-detail/product-detail.component').then(m => m.ProductDetailComponent) 
    },
    {
        path: 'anuncios-detalle/:id',
        loadComponent: () => import('@modules/news-detail/news-detail.component').then(m => m.NewsDetailComponent) 
    }
];


import { Routes } from '@angular/router';
import { carritoRoutes } from '@features/cart/carrito-routing';
import { categoriasRoutes } from '@features/categories/categories-routing';
import { contactoRoutes } from '@features/contact/contact-routing';
import { homeRoutes } from '@features/home/home-routing';
import { loginRoutes } from '@features/login/login-routing';
import { anunciosRoutes } from '@features/news/news-routing';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '',
    loadComponent: () => import('@layout/skeleton/skeleton.component').then(m => m.SkeletonComponent),
    children: [
      {
        path: 'home',
        children: homeRoutes
      },
      {
        path: 'categorias',
        children: categoriasRoutes
      },
      {
        path: 'contacto',
        children: contactoRoutes
      },
      {
        path: 'anuncios',
        children: anunciosRoutes
      },
      {
        path: 'login',
        children: loginRoutes
      },
      {
        path: 'carrito',
        children: carritoRoutes
      },
      {
        path: '**', /* personalizar pagina para error 404 */
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**', /* personalizar pagina para error 404 */
    redirectTo: '/home',
    pathMatch: 'full'
  }
]
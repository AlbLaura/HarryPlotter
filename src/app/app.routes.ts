import { Routes } from '@angular/router';
import { carritoRoutes } from '@modules/routing/carrito-routing.module';
import { categoriasRoutes } from '@modules/routing/categories-routing.module';
import { contactoRoutes } from '@modules/routing/contact-routing.module';
import { homeRoutes } from '@modules/routing/home-routing.module';
import { loginRoutes } from '@modules/routing/login-routing.module';
import { anunciosRoutes } from '@modules/routing/news-routing.module';

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
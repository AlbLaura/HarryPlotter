import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => 
          import('@modules/routing/home.module').then( (m) => m.HomeModule)
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('@modules/routing/categories.module').then( (m) => m.CategoriesModule)
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('@modules/routing/contact.module').then( (m) => m.ContactModule)
      },
      {
        path: 'anuncios',
        loadChildren: () =>
          import('@modules/routing/news.module').then( (m) => m.NewsModule)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@modules/routing/login.module').then( (m) => m.LoginModule)
      },
      {
        path: 'carrito',
        loadChildren: () =>
          import('@modules/routing/carrito.module').then( (m) => m.CarritoModule)
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
          import('@modules/home/home.module').then( (m) => m.HomeModule)
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('@modules/categories/categories.module').then( (m) => m.CategoriesModule)
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('@modules/contact/contact.module').then( (m) => m.ContactModule)
      },
      /* {
        path: 'anuncios',
        loadChildren: () =>
          import('@modules/home/routing/anuncios.module').then( (m) => m.AnunciosModule)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@modules/home/routing/login.module').then( (m) => m.LoginModule)
      },
      {
        path: 'carrito',
        loadChildren: () =>
          import('@modules/home/routing/cart.module').then( (m) => m.CartModule)
      }
      ,*/
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

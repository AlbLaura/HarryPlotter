//import componentes

import { TituloComponent } from './titulos/titulo/titulo.component';
import { TituloH2Component } from './titulos/titulo-h2/titulo-h2.component';
import { CardComponent } from './cards/card/card.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { ButtonComponent } from './button/button.component';
import { BadgeTazasComponent } from './badges/badge-tazas/badge-tazas.component';
import { CardViewListaComponent } from './cards/card-view-lista/card-view-lista.component';
import { CardNewsComponent } from './cards/card-news/card-news.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuestionComponent } from './question/question.component';
import { ModalComponent } from './button/modal/modal.component';
import { LoaderComponent } from './loader/loader.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FilterPipe } from 'app/pipes/filter.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

export const components: any[] = [
    TituloComponent,
    TituloH2Component,
    CardComponent,
    BuscadorComponent,
    CardListComponent,
    CardViewListaComponent,
    BadgeTazasComponent,
    ButtonComponent,
    CardNewsComponent,
    CarrouselComponent,
    PaginationComponent,
    QuestionComponent,
    ModalComponent,
    LoaderComponent,
    CategoriasComponent,
    FilterPipe,
    BreadcrumbComponent
];

//export all componentes

export * from './titulos/titulo/titulo.component';
export * from './titulos/titulo-h2/titulo-h2.component';
export * from './cards/card/card.component';
export * from './cards/card-list/card-list.component';
export * from './cards/card-view-lista/card-view-lista.component';
export * from './cards/card-news/card-news.component';
export * from './button/button.component';
export * from './badges/badge-tazas/badge-tazas.component';
export * from './button/modal/modal.component';
export * from './loader/loader.component';
export * from './question/question.component';
export * from './categorias/categorias.component';
export * from './cards/card-news/card-news.component'
export * from './carrousel/carrousel.component';
export * from './buscador/buscador.component';
export * from './pagination/pagination.component';
export * from './breadcrumb/breadcrumb.component';
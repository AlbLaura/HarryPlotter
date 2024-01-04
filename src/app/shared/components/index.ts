//import componentes

import { TituloComponent } from './titulos/titulo/titulo.component';
import { TituloH2Component } from './titulos/titulo-h2/titulo-h2.component';
import { CardComponent } from './cards/card/card.component';
import { CardListComponent } from './cards/card-list/card-list.component';
import { ButtonComponent } from './button/button.component';
import { BadgeTazasComponent } from './badges/badge-tazas/badge-tazas.component';
import { CardViewListaComponent } from './cards/card-view-lista/card-view-lista.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuestionComponent } from './question/question.component';
import { ModalComponent } from './button/modal/modal.component';

export const components: any[] = [
    TituloComponent,
    TituloH2Component,
    CardComponent,
    CardListComponent,
    CardViewListaComponent,
    BadgeTazasComponent,
    ButtonComponent,
    AnnouncementComponent,
    CarrouselComponent,
    PaginationComponent,
    QuestionComponent,
    ModalComponent
];

//export all componentes

export * from './titulos/titulo/titulo.component';
export * from './titulos/titulo-h2/titulo-h2.component';
export * from './cards/card/card.component';
export * from './cards/card-list/card-list.component';
export * from './cards/filtro/filtro.component';
export * from './cards/card-view-lista/card-view-lista.component';
export * from './button/button.component';
export * from './badges/badge-tazas/badge-tazas.component';
export * from './button/modal/modal.component';

export * from './announcement/announcement.component';
export * from './carrousel/carrousel.component';
export * from './pagination/pagination.component';
export * from './question/question.component';
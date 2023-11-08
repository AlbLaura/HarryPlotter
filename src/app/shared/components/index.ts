//import componentes

import { TituloComponent } from './titulos/titulo/titulo.component';
import { TituloH2Component } from './titulos/titulo-h2/titulo-h2.component';
import { CardComponent } from './cards/card/card.component';
import { CardListComponent } from './cards/card-list/card-list.component';

export const components: any[] = [
    TituloComponent,
    TituloH2Component,
    CardComponent,
    CardListComponent
];

//export all componentes

export * from './titulos/titulo/titulo.component';
export * from './titulos/titulo-h2/titulo-h2.component';
export * from './cards/card/card.component';
export * from './cards/card-list/card-list.component';
export * from './cards/filtro/filtro.component';
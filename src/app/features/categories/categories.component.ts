import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CardListComponent } from '@shared/components/cards/card-list/card-list.component';
import { CategoriasComponent } from '@shared/components/categorias/categorias.component';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
    standalone: true,
    imports: [BreadcrumbComponent, CardListComponent, CategoriasComponent]
})
export class CategoriesComponent implements OnInit{
  // ? Cuando se inicia este componente, se reinicia la posicion a 0,0
  constructor (private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  //ngAfterViewChecked es un metodo de ciclo de vida que se ejecuta DESPUÉS de que se actualicen los cambios en el DOM
  //ngOnInit se ejecuta una sola vez, cuando se inicializa el componente
  constructor (private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

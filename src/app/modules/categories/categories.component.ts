import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
    standalone: true
})
export class CategoriesComponent implements OnInit{
  // ? Cuando se inicia este componente, se reinicia la posicion a 0,0
  constructor (private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

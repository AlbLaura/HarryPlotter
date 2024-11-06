import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'HarryPlotter';
  scrollY = 0;

  //@hostlistener te permite escuchar eventos desde el host element, en este caso seria el scroll del 'window' o la ventana del navegador
  //['$event'] es un array que contiene el evento del objeto, que se pasara como parametro a la funcion 'onScroll'
  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

  constructor(private scroll: ViewportScroller) {};

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  };
}
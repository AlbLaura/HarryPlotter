import { ViewportScroller, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet, NgIf, RouterModule]
})
export class AppComponent{
  title = 'HarryPlotter';
  scrollY = 0;

  //@hostlistener te permite escuchar eventos desde el host element, en este caso seria el scroll del 'window' o la ventana del navegador
  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

  constructor(private scroll: ViewportScroller) {};

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  };
}
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CardListComponent } from '@shared/components/cards/card-list/card-list.component';
import { CarrouselComponent } from '@shared/components/carrousel/carrousel.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [CarrouselComponent, CardListComponent]
})
export class HomeComponent implements OnInit {
  
  constructor (private viewportScroller: ViewportScroller) {
  }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

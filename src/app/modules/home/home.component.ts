import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CarrouselComponent } from '../../shared/components/carrousel/carrousel.component';
import { CardListComponent } from '../../shared/components/cards/card-list/card-list.component';
import { CardComponent } from "../../shared/components/cards/card/card.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [CarrouselComponent, CardListComponent, CardComponent]
})
export class HomeComponent implements OnInit {
  
  constructor (private viewportScroller: ViewportScroller) {
    import('@components/components/carrousel/carrousel.component');
    import('@components/components/cards/card-list/card-list.component');
  }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

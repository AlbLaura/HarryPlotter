import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CardNewsComponent } from '@shared/components/cards/card-news/card-news.component';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    standalone: true,
    imports: [
      BreadcrumbComponent,
      CardNewsComponent
    ]
})
export class NewsComponent implements OnInit {
  constructor (private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

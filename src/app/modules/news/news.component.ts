import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    standalone: true
})
export class NewsComponent implements OnInit {
  constructor (private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

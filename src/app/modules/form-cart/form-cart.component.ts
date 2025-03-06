import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-form-cart',
    templateUrl: './form-cart.component.html',
    styleUrls: ['./form-cart.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class FormCartComponent implements OnInit{
  constructor (private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

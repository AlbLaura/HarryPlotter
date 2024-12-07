// ? Logica de negocio del carrito
// TODO: Terminar de implementar la logica

import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CartService } from '@data/services/api/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  //guarda los productos en el carrito
  //items = this.cartService.getItems();

  constructor (
    private viewportScroller: ViewportScroller,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

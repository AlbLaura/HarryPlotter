import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '@data/services/api/card.service';
import { CartService } from '@data/services/api/cartService/cart.service';
import { ICard } from '@shared/components/cards/card/icard.metadata';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products: ICard[];
  public id: number;
  public currentProduct: ICard;

  constructor(
    private scroll: ViewportScroller,
    private route: ActivatedRoute,
    private cardService: CardService,
    private cartService: CartService
  ){
    this.id = +this.route.snapshot.params["id"]; /* "id" viene como string, al agregarle un + adelante se convierte en number */
    //this.currentProduct = this.products.find(product => product.id === this.id);
  }

  //Desde el inicio desplaza la vista al punto 0,0 y si hay info de ese producto lo muestra, si no sale error.
  ngOnInit(): void {
    this.scroll.scrollToPosition([0, 0]);
    this.cardService.getProductosById(this.id).subscribe(r => {
      if (!r.error) {
        this.currentProduct = r.data;
      }
    });
  }

  //Evento que agrega un producto (data) al carrito y muestra un mensaje de aviso
  addToCart(data) {
    this.cartService.addToCart(data);
    window.alert('El producto ha sido agregado al carrito!');
  };
}

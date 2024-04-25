import { Injectable } from '@angular/core';
import { ICard } from '@shared/components/cards/card/icard.metadata';
/* ICard[] listado de los productos registrados en la base de datos */

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:ICard[] = [];

  /* Añanade un producto nuevo a la lista de productos */
  addToCart(product:ICard) {
    this.items.push(product);
  };

  /* Devuelve la lista de productos */
  getItems() {
    return this.items;
  };

  /* Limpia el listado del carrito */
  clearCart() {
    this.items = [];
    return this.items;
  };
}

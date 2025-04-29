//? listado de productos visualizados con el componente card
import { Component, inject, OnInit} from '@angular/core';
import { ICard } from '../../../interfaces/icard.metadata';
import { CartService } from '@data/services/api/cartService/cart.service';
import { CardService } from '@data/services/api/cardService/card.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class CardListComponent implements OnInit{
  //productsState = inject(ProductsStateService);

  // Guarda la info de los productos disponibles en la BD dentro de una variable
  public ICardProductos: ICard[] | null = null;

  //carrito
  cartState = inject(CartService).state;

  /* addToCart(product: ICard) {
    this; 
  };
 */
  // recibe la variable y devuelve una lista de los productos si es que no hay errores

  constructor ( private CardService: CardService ) { }

  ngOnInit() {
    this.CardService.getAllProductos().subscribe( r => {
      console.log("respuesta de getAllProductos()")
      if(!r.error) {
        this.ICardProductos = r.data;
      } else {
        console.error('Error al obtener el listado:', r.error);
      }
    });
  }
  /* changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  } */
}
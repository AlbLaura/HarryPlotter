import { Component, Input } from '@angular/core';
import { ICard } from '../cards/card/icard.metadata';
import { CardService } from '@data/services/api/card.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  public ICardProductos: ICard[] | null = null;

  public filterProducto: string = ''; // Campo de Búsqueda

  constructor (private CardService: CardService) {
    this.CardService.getAllProductos().subscribe(r => {
      if(!r.error) {
        this.ICardProductos = r.data;
        console.log(this.ICardProductos);
      } else {
        console.error('Error al obtener el listado:', r.error);
      }
    },
    (error) => {
      console.error('Error en la peticion:', error);
    });
  }
  
  //Metodo que se ejecuta al seleccionar un item del dropdown filtrado
  onSelectProduct(producto: ICard) {
    this.filterProducto = '';
  }
}

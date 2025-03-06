import { Component, Input } from '@angular/core';
import { ICard } from '../../interfaces/icard.metadata';
import { CardService } from '@data/services/api/cardService/card.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class BuscadorComponent {
  public ICardProductos: ICard[] | null = null;

  public filterProducto = ''; // Campo de Búsqueda

  constructor (private CardService: CardService) {
    this.CardService.getAllProductos().subscribe(r => {
      if(!r.error) {
        this.ICardProductos = r.data;
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

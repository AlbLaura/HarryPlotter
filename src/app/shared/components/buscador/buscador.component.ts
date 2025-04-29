import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../interfaces/icard.metadata';
import { CardService } from '@data/services/api/cardService/card.service';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'app/pipes/filter.pipe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FilterPipe]
})
export class BuscadorComponent implements OnInit{
  public ICardProductos: ICard[] | null = null;

  filterProducto: string = ''; // Campo de Búsqueda

  constructor (private CardService: CardService) { }

  ngOnInit() {
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
  onSelectProduct(producto: any) {
    this.filterProducto = '';
  }
}

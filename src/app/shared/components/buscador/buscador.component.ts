import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '@data/services/api/cardService/card.service';
import { ICard } from '@shared/interfaces/icard.metadata';
import { FilterPipe } from '@shared/pipes/filter.pipe';
import { sharedImports } from '@shared/shared';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  standalone: true,
  imports: [...sharedImports, FilterPipe]
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

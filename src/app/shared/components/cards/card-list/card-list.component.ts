import { Component} from '@angular/core';
import { ICard } from '../card/icard.metadata';
import { CardService } from '@data/services/api/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{

  public ICardProductos: ICard[];
  constructor (
    private CardService: CardService
  ) {
    this.CardService.getAllProductos().subscribe( r => {
      if(!r.error) {
        this.ICardProductos = r.data;
      }
    });
  }



}

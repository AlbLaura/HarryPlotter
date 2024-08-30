import { Component } from '@angular/core';
import { CardService } from '@data/services/api/card.service';
import { ICard } from '../card/icard.metadata';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent {
  public ICardAnuncios: ICard[] | null = null;

  constructor ( private CardService: CardService ) {
    this.CardService.getAllNoticias().subscribe( r => {
      if(!r.error) {
        this.ICardAnuncios = r.data;
      } else {
        console.error('Error al obtener el listado de noticias', r.error);
      }
    })
  }
}

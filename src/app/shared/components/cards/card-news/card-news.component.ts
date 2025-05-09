import { Component } from '@angular/core';
import { CardService } from '@data/services/api/cardService/card.service';
import { ICard } from '@shared/interfaces/icard.metadata';
import { sharedImports } from '@shared/shared';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css'],
  standalone: true,
  imports: [...sharedImports, CardComponent]
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

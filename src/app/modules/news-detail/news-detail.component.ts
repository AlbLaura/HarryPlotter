import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardService } from '@data/services/api/card.service';
import { ICard } from '@shared/components/cards/card/icard.metadata';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit{

  public ICardAnuncios: ICard[] | null = null;

  constructor ( private CardService: CardService, 
    private viewportScroller: ViewportScroller ) {
      this.CardService.getAllNoticias().subscribe( r => {
        if(!r.error) {
          this.ICardAnuncios = r.data;
        } else {
          console.error('Error al obtener el listado de noticias', r.error);
        }
    })
  }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}


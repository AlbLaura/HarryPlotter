import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '@data/services/api/cardService/card.service';
import { News } from '@components/interfaces/icard.metadata';
import { BreadcrumbComponent } from '@components/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css'],
    standalone: true,
    imports: [BreadcrumbComponent]
})
export class NewsDetailComponent implements OnInit{

  public id: number;
  public currentAnuncio: News | null = null;

  constructor ( 
    private scroll: ViewportScroller,
    private route: ActivatedRoute,
    private cardService: CardService
  ) { this.id = +this.route.snapshot.params["id"]; }

  ngOnInit(): void {

    this.scroll.scrollToPosition([0, 0]);

    this.cardService.getNoticiasById(this.id).subscribe(r => {
      if (!r.error) {
        this.currentAnuncio = r.data;
        console.log(r.data);
      } else {
        //manejamos el error aca
        console.log(r.data);
        console.error('Error al obtener el producto:', r.msg);
      };
    });

  };

}


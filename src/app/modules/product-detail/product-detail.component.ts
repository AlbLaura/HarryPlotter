import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '@data/services/api/card.service';
import { ICard } from '@shared/components/cards/card/icard.metadata';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products: ICard[];
  public id: number;
  public currentProduct: ICard;

  constructor(
    private scroll:ViewportScroller,
    private route:ActivatedRoute,
    private CardService:CardService
  ){
    this.id = +this.route.snapshot.params["id"]; /* "id" viene como string, al agregarle un + adelante se convierte en number */
    //this.currentProduct = this.products.find(product => product.id === this.id);
  }

  ngOnInit(): void {
    this.scroll.scrollToPosition([0, 0]);
    this.CardService.getProductosById(this.id).subscribe(r => {
      if (!r.error) {
        this.currentProduct = r.data;
      }
    });
  }
}

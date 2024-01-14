import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS_DATA } from '@data/constants/products.const';
import { ICard } from '@shared/components/cards/card/icard.metadata';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  public products: ICard[] = PRODUCTS_DATA;
  public id: number;
  public currentProduct: ICard;
  constructor(
    private route:ActivatedRoute
  ){
    this.id = +this.route.snapshot.params["id"]; /* "id" viene como string, al agregarle un + adelante se convierte en number */
    this.currentProduct = this.products.find(product => product.id === this.id); 
    console.log(this.currentProduct);
  }
}

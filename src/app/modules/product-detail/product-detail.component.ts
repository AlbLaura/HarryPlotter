import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS_DATA } from '@data/constants/products.const';
import { ProductoService } from '@data/services/api/producto.service';
import { ICard } from '@shared/components/cards/card/icard.metadata';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products: ICard[] = PRODUCTS_DATA;
  public id: number;
  public currentProduct: ICard;
  constructor(
    private route:ActivatedRoute,
    private productoService:ProductoService
  ){
    this.id = +this.route.snapshot.params["id"]; /* "id" viene como string, al agregarle un + adelante se convierte en number */
    //this.currentProduct = this.products.find(product => product.id === this.id);
  }

  ngOnInit(): void {
    this.productoService.getProductosById(this.id).subscribe(r => {
      if (!r.error) {
        this.currentProduct = r.data;
      }
    });
  }
}

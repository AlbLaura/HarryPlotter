import { Component} from '@angular/core';
import { ICard } from '../card/icard.metadata';
import { ProductoService } from '@data/services/api/producto.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{
  public products: ICard[]/* PRODUCTS_DATA */;
  
  constructor (
    private productService: ProductoService
  ) {
    this.productService.getAllProductos().subscribe( r => {
      if(!r.error) {
        this.products = r.data;
        console.log(r.data)
      }
    });
  }



}

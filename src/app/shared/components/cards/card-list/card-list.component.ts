import { Component} from '@angular/core';
import { ICard } from '../card/icard.metadata';
import {PRODUCTS_DATA} from '@data/constants/products.const';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{
  public products: ICard[] = PRODUCTS_DATA;

}

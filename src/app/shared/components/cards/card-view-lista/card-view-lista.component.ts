import { Component, Input } from '@angular/core';
import { ICard } from '../card/icard.metadata';

@Component({
  selector: 'app-card-view-lista',
  templateUrl: './card-view-lista.component.html',
  styleUrls: ['./card-view-lista.component.css']
})
export class CardViewListaComponent {
  @Input() data!: ICard;

}

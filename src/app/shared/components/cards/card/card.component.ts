import { Component, Input } from '@angular/core';
import { ICard } from './icard.metadata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data!: ICard;

}
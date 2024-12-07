import { Component, Input } from '@angular/core';
import { ICard } from '../../../interfaces/icard.metadata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true
})
export class CardComponent {

  @Input() data!: ICard;
  @Input() datadb: 'producto-detalle' | 'anuncios-detalle' = 'producto-detalle';

  constructor() {
    let prueba = this.datadb;
    console.log(prueba)
  }
}
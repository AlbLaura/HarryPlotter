import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../../interfaces/icard.metadata';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CardComponent implements OnInit{

  @Input() data!: ICard;
  @Input() datadb: 'producto-detalle' | 'anuncios-detalle' = 'producto-detalle';

  constructor() {
  }

  ngOnInit() {
    console.log("📌 Datos recibidos en CardComponent:", this.data);
  }
}
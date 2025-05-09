import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ICard } from '@shared/interfaces/icard.metadata';
import { sharedImports } from '@shared/shared';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [...sharedImports, ButtonComponent]
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
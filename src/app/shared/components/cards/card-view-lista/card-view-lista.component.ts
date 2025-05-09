import { Component, Input } from '@angular/core';
import { ICard } from '@shared/interfaces/icard.metadata';
import { sharedImports } from '@shared/shared';

@Component({
  selector: 'app-card-view-lista',
  templateUrl: './card-view-lista.component.html',
  styleUrls: ['./card-view-lista.component.css'],
  standalone: true,
  imports: [...sharedImports]
})
export class CardViewListaComponent {
  @Input() data!: ICard;

}

import { Component, Input } from '@angular/core';
import { IBadges } from '../../../interfaces/ibadges.metadata';

@Component({
  selector: 'app-badge-tazas',
  templateUrl: './badge-tazas.component.html',
  styleUrls: ['./badge-tazas.component.css'],
  standalone: true
})
export class BadgeTazasComponent {
  @Input() category!: IBadges;
}

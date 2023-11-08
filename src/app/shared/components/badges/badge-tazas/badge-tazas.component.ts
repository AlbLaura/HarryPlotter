import { Component, Input } from '@angular/core';
import { IBadges } from './ibadges.metadata';

@Component({
  selector: 'app-badge-tazas',
  templateUrl: './badge-tazas.component.html',
  styleUrls: ['./badge-tazas.component.css']
})
export class BadgeTazasComponent {
  @Input() category: IBadges;
}

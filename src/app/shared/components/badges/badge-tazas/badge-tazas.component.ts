import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBadges } from '@shared/interfaces/ibadges.metadata';

@Component({
  selector: 'app-badge-tazas',
  templateUrl: './badge-tazas.component.html',
  styleUrls: ['./badge-tazas.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BadgeTazasComponent {
  @Input() category!: IBadges;
}

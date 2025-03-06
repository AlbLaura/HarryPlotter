import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage]
})

export class CarrouselComponent {}

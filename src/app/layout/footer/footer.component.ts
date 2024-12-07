import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true
})
export class FooterComponent {
  // Año actual
  anio: number = new Date().getFullYear();
}

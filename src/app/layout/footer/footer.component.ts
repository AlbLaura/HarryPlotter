import { Component } from '@angular/core';
import { FormContactComponent } from '@modules/form-contact/form-contact.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [FormContactComponent]
})
export class FooterComponent {
  // Año actual
  anio: number = new Date().getFullYear();
}

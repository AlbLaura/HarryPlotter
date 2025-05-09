import { Component } from '@angular/core';
import { FormContactComponent } from '@features/form-contact/form-contact.component';
import { sharedImports } from '@shared/shared';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [...sharedImports, FormContactComponent]
})
export class FooterComponent {
  // Año actual
  anio: number = new Date().getFullYear();
}

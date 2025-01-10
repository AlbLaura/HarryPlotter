import { Component } from '@angular/core';
import { BuscadorComponent } from '@components/components/buscador/buscador.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [BuscadorComponent]
})
export class HeaderComponent {

}

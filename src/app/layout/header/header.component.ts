import { Component } from '@angular/core';
import { BuscadorComponent } from '@shared/components/buscador/buscador.component';
import { sharedImports } from '@shared/shared';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [...sharedImports, BuscadorComponent]
})
export class HeaderComponent {

}

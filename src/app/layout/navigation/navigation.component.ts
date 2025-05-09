import { Component } from '@angular/core';
import { sharedImports } from '@shared/shared';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    standalone: true,
    imports: [...sharedImports]
})
export class NavigationComponent {

}

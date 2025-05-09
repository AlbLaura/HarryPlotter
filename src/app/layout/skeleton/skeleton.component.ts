import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { NavigationComponent } from '@layout/navigation/navigation.component';

@Component({
    selector: 'app-skeleton',
    templateUrl: './skeleton.component.html',
    styleUrls: ['./skeleton.component.css'],
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, NavigationComponent, FooterComponent]
})
export class SkeletonComponent {

}

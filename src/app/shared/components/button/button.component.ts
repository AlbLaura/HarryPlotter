import { Component, Input } from '@angular/core';
import { IButton } from '../../interfaces/ibutton.metadata';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class ButtonComponent {
  @Input() routerLink!: IButton;
  @Input() routerLinkActive!: IButton;
  @Input() ariaActive!: IButton;
  @Input() colorButton!: IButton;
  @Input() textButton!: IButton;
}

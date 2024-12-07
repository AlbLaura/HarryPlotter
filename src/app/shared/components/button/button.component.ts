import { Component, Input } from '@angular/core';
import { IButton } from '../../interfaces/ibutton.metadata';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true
})
export class ButtonComponent {
  @Input() routerLink!: IButton;
  @Input() routerLinkActive!: IButton;
  @Input() ariaActive!: IButton;
  @Input() colorButton!: IButton;
  @Input() textButton!: IButton;
}

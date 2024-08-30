import { Component, Input } from '@angular/core';
import { IButton } from './ibutton.metadata';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() routerLink!: IButton;
  @Input() routerLinkActive!: IButton;
  @Input() ariaActive!: IButton;
  @Input() colorButton!: IButton;
  @Input() textButton!: IButton;
}

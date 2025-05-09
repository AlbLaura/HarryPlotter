import { Component, Input } from '@angular/core';
import { IButton } from '@shared/interfaces/ibutton.metadata';
import { sharedImports } from '@shared/shared';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [...sharedImports]
})
export class ButtonComponent {
  @Input() routerLink!: IButton;
  @Input() routerLinkActive!: IButton;
  @Input() ariaActive!: IButton;
  @Input() colorButton!: IButton;
  @Input() textButton!: IButton;
}

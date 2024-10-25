import { Component, Input } from '@angular/core';
import { ICard } from '../cards/card/icard.metadata';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
@Input() titulo!: ICard;
}

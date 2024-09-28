import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() type: 'add' | 'cancel' | 'edit' = 'add';
  @Input() crud: string = 'Agregar';
  @Input() modalTitle: string = 'Titulo del Modal';
}

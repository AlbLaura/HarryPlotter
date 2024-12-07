import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true
})
export class ModalComponent {
  @Input() type: 'add' | 'cancel' | 'edit' = 'add';
  @Input() crud = 'Agregar';
  @Input() modalTitle = 'Titulo del Modal';
}

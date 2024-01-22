import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  persona = {
    nombre: 'Laura',
    email: 'albornoz.laurasol@gmail.com',
    mensaje: 'holaaaa'
  };

  
}

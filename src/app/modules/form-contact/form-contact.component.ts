import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact, FormContactService } from '@data/services/api/contactService/form-contact.service';
@Component({
    selector: 'app-form-contact',
    templateUrl: './form-contact.component.html',
    styleUrls: ['./form-contact.component.css'],
    standalone: true
})
export class FormContactComponent implements OnInit{

  //creacion de un objeto para el formulario con sus validaciones
  applyForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor (
    private viewportScroller: ViewportScroller, 
    private formservice: FormContactService, 
    private fb: FormBuilder) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
  
  submitApplication() {
    if (this.applyForm.valid) {
      // Si el formulario es valido, carga los datos en la base de datos
      const contactData: Contact = {
        name: this.applyForm.get('name')?.value ?? '',
        email: this.applyForm.get('email')?.value ?? '',
        message: this.applyForm.get('message')?.value ?? ''
      }
      // devuelve respuesta al usuario cuando es enviado con EXITO y se resetean los datos o si tiene un ERROR
      const NOTIFICACION_USER = this.formservice.submitApplication(contactData).subscribe({
        next: (response) => {
          console.log('Contacto guardado', response);
          alert('Formulario enviado con exito!');
          // resetea los datos cargados visualmente en el formulario para que el usuario pueda cargar otros o tenga otro indicio de que se envio correctamente
          this.applyForm.reset();
        },
        error: (error) => {
          console.error('Error al guardar el contacto:', error);
          alert('Hubo un error al enviar el formulario. Por favor, intente de nuevo.')
        }
      });
      // Se elimina la subscripcion para que no se siga guardando en segundo plano (memory leak)
      NOTIFICACION_USER.unsubscribe;
    };
  };

}

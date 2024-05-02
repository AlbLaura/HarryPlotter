import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormContactService } from '@data/services/api/contactService/form-contact.service';
@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit{
  
  //creacion de un objeto para el formulario -> cambiar nombre del objeto por "applyFormContacto"
  applyForm = new FormGroup({
    name: new FormControl(''),
    message: new FormControl(''),
    email: new FormControl('')
  });

  constructor (private viewportScroller: ViewportScroller, private formservice: FormContactService) {}
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }

  //metodo al hacer click en submit - carga los datos en el objeto creado anteriormente
  submitApplication() {
    this.formservice.submitApplication(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.message ?? ''
    );
  };
}

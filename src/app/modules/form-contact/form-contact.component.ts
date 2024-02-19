import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit{
  persona = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  procesarMensaje() {
    return console.log(this.persona);
  }  

  constructor (private viewportScroller: ViewportScroller) {}
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}

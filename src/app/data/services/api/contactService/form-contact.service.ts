import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormContactService{

  //Metodo que recibe la data del formulario y lo muestra en la consola
  submitApplication(name: string, email: string, message: string){
    console.log(`Recibido = name: ${name}, email: ${email}, message: ${message}`);
  };

}

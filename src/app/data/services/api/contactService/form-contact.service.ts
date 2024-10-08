import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class FormContactService{
  private apiURL = 'http://localhost:3000/contacto_usuario';

  constructor(private http: HttpClient) {}

  //Metodo que recibe la data del formulario y lo muestra en la consola
  submitApplication(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.apiURL, contact);
  };

}

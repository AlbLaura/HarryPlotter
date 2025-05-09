// ? Servicio para el formulario de contacto que esta ubicado en el footer
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { Observable } from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class FormContactService extends ApiClass {
  private apiURL = this.url + 'contacto_usuario';

  /**
   * 
   * @param contact Recibe la información enviada por el formulario
   * @returns Lo guarda en la columna "contacto_usuario" de la base de datos
   */
  submitApplication(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.apiURL, contact);
  };

}

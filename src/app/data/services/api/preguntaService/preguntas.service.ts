// ? Servicio para las preguntas frecuentes de la sección Contacto
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { IQuestion } from '@shared/interfaces/iquestion.metadata';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService extends ApiClass {
  private apiUrl = this.url + 'preguntas';

  /**
   * Trae la lista de preguntas registradas en la base de datos
   */
  getAllPreguntas(): Observable<{
    error: boolean,
    msg: string,
    data: IQuestion[] | null
  }> {
    return this.http.get<IQuestion[]>(this.apiUrl)
      .pipe(
        //devuelve la lista de preguntas con un aviso de exito
        map (r => ({
          error: false,
          msg: 'Preguntas obtenidas con EXITO!',
          data: r
        })),
        catchError( err => {
          //devuelve en la consola un aviso con el error
          console.error('ERROR al obtener las preguntas: ', err);
          return of({
            error: true,
            msg: 'ERROR al obtener las preguntas!',
            data: null
          });
        })
      );
  }
}

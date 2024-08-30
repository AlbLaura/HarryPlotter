import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { IQuestion } from '@shared/components/question/iquestion.metadata';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService extends ApiClass {
  
  getAllPreguntas(): Observable<{
    error: boolean,
    msg: string,
    data: IQuestion[] | null
  }> {

    return this.http.get<{ error: boolean; msg: string; data: IQuestion[] | null; }>(this.url + 'preguntas');

    /* const response = {error: false, msg: '', data: null};

    return this.http.get<IQuestion[]>(this.url + 'preguntas')
    .pipe(
      map( r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    ); */
  }
}

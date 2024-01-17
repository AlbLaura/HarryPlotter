import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { ICard } from '@shared/components/cards/card/icard.metadata';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService extends ApiClass{
  //obtiene todos los productos de la api
  getAllProductos(): Observable<{
    error: boolean,
    msg: string,
    data: ICard[]
  }> {

    const response = {error: false, msg: '', data: null};

    return this.http.get<ICard[]>(this.url + 'productos')
    .pipe(
      map( r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }
}

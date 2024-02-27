import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { ICard } from '@shared/components/cards/card/icard.metadata';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService extends ApiClass{

  /**
  * Trae toda la lista de productos registrados
  */
  getAllProductos(): Observable<{
    error: boolean,
    msg: string,
    data: ICard[]
  }> {

    const response = {error: false, msg: '', data: null};

    return this.http.get<ICard[]>(this.url + 'products')
    .pipe(
      map( r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  };

  /**
    Trae un producto en base al ID registrado
    @param id number
  */
  getProductosById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICard
  }> {

    const response = {error: false, msg: '', data: null};

    return this.http.get<ICard>(this.url + 'products/' + id)
      .pipe(
        map( r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  };
}

import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { ICard } from '@shared/components/cards/card/icard.metadata';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardService extends ApiClass{

  /* Llamadas para la card de productos */

  /**
  * Trae toda la lista de productos registrados
  */
  getAllProductos(): Observable<{
    error: boolean,
    msg: string,
    data: ICard[] | null
  }> {

    return this.http.get<ICard[]>(this.url + 'products')
    .pipe(
      map(r => ({
        error: false,
        msg: 'Productos obtenidos con exito',
        data: r
      })),
      catchError(err => {
        console.error('Error al obtener los productos:', err);
        return of({
          error: true,
          msg: 'Error al obtener los productos',
          data: null
        });
      })
    );
  };

  /**
    Trae un producto en base al ID registrado
    @param id number
  */
  getProductosById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICard | null
  }> {

    return this.http.get<ICard>(this.url + 'products/' + id)
      .pipe(
        map( r => ({
          error: false,
          msg: 'Producto obtenido por id con exito',
          data: r
        })),
        catchError(err => {
          console.error('Error al obtener el producto por id:', err);
          //se utiliza return of para crear facilmente un observable en caso de error y poder manejar el tipo null
          return of({
            error: true,
            msg: 'Error al obtener el producto por id:',
            data: null
          })
        })
      ); 
  };
  /* Llamadas para la card de noticias */

  /**
  * Trae toda la lista de anuncios publicados
  */
  getAllNoticias(): Observable<{
    error: boolean,
    msg: string,
    data: ICard[] | null
  }> {

    return this.http.get<ICard[]>(this.url + 'news')
    .pipe(
      map(r => ({
        error: false,
        msg: 'Noticias obtenidas con exito',
        data: r
      })),
      catchError(err => {
        console.error('Error al obtener las noticias:', err);
        return of({
          error: true,
          msg: 'Error al obtener las noticias',
          data: null
        });
      })
    );
  };

  /**
    Trae una noticia en base al ID registrado
    @param id number
  */
    getNoticiasById(id: number): Observable<{
      error: boolean,
      msg: string,
      data: ICard[] | null
    }> {

      return this.http.get<ICard[]>(this.url + 'news/' + id)
      .pipe(
        map(r => ({
          error: false,
          msg: 'Noticia por id obtenida con exito',
          data: r
        })),
        catchError(err => {
          console.error('Error al obtener las noticias por id:', err);
          return of({
            error: true,
            msg: 'Error al obtener las noticias por id',
            data: null
          });
        })
      );
    };
}

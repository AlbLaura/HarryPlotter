import { Injectable } from '@angular/core';
import { ICard } from '@shared/components/cards/card/icard.metadata';
import { ApiClass } from '@data/schema/ApiClass.class';
import { Observable, catchError, map } from 'rxjs';
/* ICard[] listado de los productos registrados en la base de datos */

@Injectable({
  providedIn: 'root'
})
export class CartService extends ApiClass{

  items!:ICard[];

  /* Añade un producto nuevo a la lista de productos | "push" agrega un nuevo item al array*/
  addToCart(items: any): Observable<{
    error: boolean,
    msg: string,
    data: ICard[] | null
  }> {

    return this.http.get<{ error: boolean; msg: string; data: ICard[] | null; }>(this.url + 'products');

    /* const response = {error: false, msg: '', data:null};
    //se envia una solicitud POST al endpoint /products pasando el nuevo producto como cuerpo de la solicitud
    return this.http.post<ICard[]>(this.url + 'products', items)
    .pipe(
      map(r => {
        response.data = r;
        console.log('hola');
        return response;
      }),
      catchError(this.error)
    ); */
  };

  /* Devuelve la lista de productos */
  getItems() {
    return this.items;
  };

  /* Limpia el listado del carrito */
  clearCart() {
    this.items = [];
    return this.items;
  };
}

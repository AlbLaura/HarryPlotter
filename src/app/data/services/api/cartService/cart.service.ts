// ? Servicio para el carrito de compras, manejo de estado y local storage
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageClass } from '@data/services/api/storage.class';
import { ProductCart } from '@shared/interfaces/icard.metadata';

interface State {
  products: ProductCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartService{

  private _storageService = inject(StorageClass);
  private initialState: State = {
    products: [],
    loaded: false,
  }

  loadProducts$ = this._storageService
    .loadProducts()
    .pipe(
      map( (products) => ({ products, loaded: true}))
    );

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProducts$],
  })

}
  //---------------------------------------------

  // items!:ICard[];

  /* Añade un producto nuevo a la lista de productos | "push" agrega un nuevo item al array*/
/*   addToCart(items: any): Observable<{
    error: boolean,
    msg: string,
    data: ICard[] | null
  }> {

    return this.http.get<{ error: boolean; msg: string; data: ICard[] | null; }>(this.url + '/products');
 */
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
    ); 
  };*/

  /* Devuelve la lista de productos */
  /* getItems() {
    return this.items;
  }; */

  /* Limpia el listado del carrito */
  /* clearCart() {
    this.items = [];
    return this.items;
  }; 
}*/

// ? Maneja el Local Storage del navegador
import { Injectable } from "@angular/core";
import { ProductCart } from "@shared/interfaces/icard.metadata";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StorageClass {
    //cargar productos
    loadProducts(): Observable<ProductCart[]> {
        const RAW_PRODUCTS = localStorage.getItem('products');

        return of(RAW_PRODUCTS ? JSON.parse(RAW_PRODUCTS) : []);
    };
    //guardar productos
    saveProducts(productos: ProductCart): void {
        localStorage.setItem('products', JSON.stringify(productos));
    };
}
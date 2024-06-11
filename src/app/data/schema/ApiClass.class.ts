// Es una clase generica para extender desde los servicios, nos ayuda a ejecutar nuestros metodos
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

// Servicio general de la aplicación
@Injectable({
    providedIn: 'root'
})

export class ApiClass {
    public url = environment.url;
    public isProduction = environment.production;

    constructor (
        protected http: HttpClient
    ) { }

    //informa si hay algun error en la plataforma

    error(error: HttpErrorResponse) {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage:_${error.message}`;
        }
        return of({error: true, msg: errorMessage, data: null});
    }
}
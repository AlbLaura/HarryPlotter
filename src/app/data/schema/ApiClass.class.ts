// ? Es una clase generica para extender desde los servicios, nos ayuda a ejecutar nuestros metodos. Es el servicio general de la aplicación
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'any'
})

export class ApiClass {
    public url = environment.url; //URL del backend
    public isProduction = environment.production; //contiene si el proyecto esta en desarrollo o producción (desarrollo)

    constructor (
        protected http: HttpClient //Con HttpClient manejas los estados base como get, put, post y delete
    ) { }

    //? informa si hay algun error de estatus en la plataforma, devuelve el codigo de error

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
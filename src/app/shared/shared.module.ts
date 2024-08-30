// Contiene declaraciones y exportaciones de componentes, directivas y pipes (evitando importaciones)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import * as fromComponents from './components';
import { RouterModule } from '@angular/router';

@NgModule({ declarations: [...fromComponents.components],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        RouterModule,
        ...fromComponents.components
    ], imports: [FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }

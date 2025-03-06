/// <reference types="@angular/localize" />

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy, provideImageKitLoader } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter} from '@angular/router';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(appRoutes),
        importProvidersFrom(ReactiveFormsModule, BrowserModule, FormsModule),
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
.catch(err => console.error(err));

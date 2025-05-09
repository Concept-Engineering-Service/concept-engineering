import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes as appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withHashLocation())
  ]
};


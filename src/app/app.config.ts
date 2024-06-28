import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [{
    provide: HttpClientModule,
    useFactory: () => new HttpClientModule()
  },
  ]
  
};

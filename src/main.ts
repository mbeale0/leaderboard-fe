import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig, withComponentInputBinding())],
}).catch((err) => console.error(err));

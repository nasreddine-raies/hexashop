import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { MainComponent } from './app/main/main.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(MainComponent, {
  providers: [provideRouter(appRoutes)],
}).catch((err) => console.error(err));  





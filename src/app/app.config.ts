import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // Active le défilement vers l'ID
        scrollPositionRestoration: 'enabled'
      })
    
    )
  ]
};


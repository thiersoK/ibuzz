import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Services } from './services/services';
import { Galerie } from './galerie/galerie';
import { Testimonial } from './testimonial/testimonial';
import { Contact } from './contact/contact';
import { App } from './app';

// export const routes: Routes = [
//   // 
  
//   { 
//     path: '', 
//     loadComponent: () => import('./hero/hero').then(m => m.Hero) 
//   },
//   { 
//     path: 'about', 
//     loadComponent: () => import('./about/about').then(m => m.About) 
//   },
//   { 
//     path: 'services', 
//     loadComponent: () => import('./services/services').then(m => m.Services) 
//   },
//   { 
//     path: 'galerie', 
//     loadComponent: () => import('./galerie/galerie').then(m => m.Galerie) 
//   },
//   { 
//     path: 'testimonials', 
//     loadComponent: () => import('./testimonial/testimonial').then(m => m.Testimonial) 
//   },
//   { 
//     path: 'contact', 
//     loadComponent: () => import('./contact/contact').then(m => m.Contact) 
//   }
// ];

export const routes: Routes = [
  { path: '', component: App },
  { path: '**', redirectTo: '' } // Redirige n'importe quelle erreur vers l'accueil
];

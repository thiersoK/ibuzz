import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Services } from './services/services';
import { Galerie } from './galerie/galerie';
import { Testimonial } from './testimonial/testimonial';
import { Contact } from './contact/contact';
import { Stats } from './stats/stats';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
      Hero,
      About, 
      Services, 
      Galerie, 
      Testimonial, 
      Contact,
      Footer,
      Stats
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ibuzz');
}

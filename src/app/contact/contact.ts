import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // On centralise les infos pour une maintenance facile
  readonly contactInfo = signal({
    address: [
      '01, Caserne', 
      'C/Nzadi (Réf. Entrée Hopital Mabaku)', 
      'Boma/RDC'
    ],
    phones: '+243 82 42 10 425, +243 99 85 14 781',
    email: 'contact@ibuzz-rdc.com'
  });

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Données du formulaire :', form.value);
      // Ici, tu peux ajouter ton service d'envoi d'email
    }
  }
}

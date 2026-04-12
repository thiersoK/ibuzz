import { Component, HostListener, signal } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { RouterLink } from '@angular/router'; // Importation nécessaire

@Component({
  selector: 'app-footer',
  imports: [ScrollRevealDirective , RouterLink], // Ajoutez RouterLink ici
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  // --- Logique du bouton Scroll To Top ---
  readonly showScrollButton = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Affiche le bouton après 400px de scroll
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.showScrollButton.set(scrollOffset > 400);
  }
  
  scrollToTop(event?: MouseEvent): void {
  // Remonte en haut
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Sécurité TypeScript : si l'événement existe, on retire le focus
  if (event && event.currentTarget) {
    const element = event.currentTarget as HTMLElement;
    element.blur();
  }
}

  // Signaux pour les données
  readonly brandName = signal('iBuzz');
  readonly currentYear = signal(new Date().getFullYear());
  
  // Mise à jour des URLs vers les fragments correspondants aux IDs de la page
  readonly footerLinks = signal([
    { label: 'Accueil', fragment: 'hero' },
    { label: 'À propos', fragment: 'about' },
    { label: 'Nos Services', fragment: 'services' },
    { label: 'Galerie', fragment: 'galerie' }, // Optionnel : ajouté pour la cohérence
    { label: 'Témoignages', fragment: 'testimonials' }
  ]);

  readonly contactInfo = signal({
    address: [
      '01, avenue Caserne', 
      'C/Nzadi (Réf. Entrée Hopital Mabaku)', 
      'Boma/RDC'
    ],
    phones: '+243 82410425, 998514781',
    email: 'contact@ibuzz-rdc.com'
  });

// Utilisation des classes pi pi-xxx de PrimeIcons
  readonly socialIcons = signal([
    { name: 'twitter', url: '#', icon: 'pi pi-twitter' },
    { name: 'facebook', url: '#', icon: 'pi pi-facebook' },
    { name: 'instagram', url: '#', icon: 'pi pi-instagram' },
    { name: 'google', url: '#', icon: 'pi pi-google' },
    { name: 'linkedin', url: '#', icon: 'pi pi-linkedin' }
  ]);
  
}

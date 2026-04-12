import { CommonModule } from '@angular/common';
import { Component, computed, signal, HostListener } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

// Définition de l'interface pour nos images
interface Photo {
  src: string;        // Image grand format
  thumb: string;      // Miniature (peut être la même)
  alt: string;        // Texte alternatif
  title: string;      // Titre pour la légende (non affiché ici)
  description: string;// Le texte affiché sous l'image
}

@Component({
  selector: 'app-galerie',
  imports: [
    CommonModule, ScrollRevealDirective
  ],
  templateUrl: './galerie.html',
  styleUrl: './galerie.css',
})
export class Galerie {
  // 1. Définition de nos photos via un Signal
  readonly photos = signal<Photo[]>([
    {
      src: 'assets/img/1.jpg',
      thumb: 'assets/img/1.jpg',
      alt: 'Description Image 1',
      title: 'Accueil',
      description: 'Accueil chaleureux des premiers invités par l\'équipe protocole.'
    },
    {
      src: 'assets/img/2.jpg',
      thumb: 'assets/img/2.jpg',
      alt: 'Description Image 2',
      title: 'Vérification',
      description: 'Vérification rapide des invitations à l\'entrée principale.'
    },
    {
      src: 'assets/img/3.jpg',
      thumb: 'assets/img/3.jpg',
      alt: 'Description Image 3',
      title: 'Scan QR Code',
      description: 'Scan du QR code pour faciliter l\'accès aux invités et suivre les présences et absences.'
    },
        {
      src: 'assets/img/4.jpg',
      thumb: 'assets/img/4.jpg',
      alt: 'Description Image 4',
      title: 'Scan QR Code',
      description: 'Scan du QR code pour faciliter l\'accès aux invités et suivre les présences et absences.'
    },
        {
      src: 'assets/img/7.jpg',
      thumb: 'assets/img/7.jpg',
      alt: 'Description Image 7',
      title: 'Scan QR Code',
      description: 'Scan du QR code pour faciliter l\'accès aux invités et suivre les présences et absences.'
    },
        {
      src: 'assets/img/5.jpg',
      thumb: 'assets/img/5.jpg',
      alt: 'Description Image 5',
      title: 'Scan QR Code',
      description: 'Scan du QR code pour faciliter l\'accès aux invités et suivre les présences et absences.'
    },
    // Ajoute le reste de tes images ici...
  ]);

  // 2. Signaux pour gérer l'état de la Lightbox
  isLightboxOpen = signal(false); // Affiche/Cache la Lightbox
  currentPhotoIndex = signal(0);  // Index de la photo affichée

  // 3. Computed signal pour la photo actuellement affichée (Performance)
  currentPhoto = computed(() => this.photos()[this.currentPhotoIndex()]);

  // 4. Computed signal pour le texte du compteur "Image X of Y"
  counterText = computed(() => `Image ${this.currentPhotoIndex() + 1} of ${this.photos().length}`);

  // 5. Méthodes de navigation
  openLightbox(index: number) {
    this.currentPhotoIndex.set(index);
    this.isLightboxOpen.set(true);
    // Empêche le défilement de la page derrière la lightbox
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen.set(false);
    // Rétablit le défilement de la page
    document.body.style.overflow = 'auto';
  }

  nextPhoto(event?: Event) {
    event?.stopPropagation(); // Évite de fermer la lightbox en cliquant sur la flèche
    this.currentPhotoIndex.update(index => 
      (index + 1) % this.photos().length
    );
  }

  prevPhoto(event?: Event) {
    event?.stopPropagation();
    this.currentPhotoIndex.update(index => 
      (index - 1 + this.photos().length) % this.photos().length
    );
  }

  // 6. Gestion du clavier (Esc, Gauche, Droite)
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.isLightboxOpen()) return;

    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowRight':
        this.nextPhoto();
        break;
      case 'ArrowLeft':
        this.prevPhoto();
        break;
    }
  }
}

import { Component, computed, effect, inject, signal } from '@angular/core';
import { NavigationService } from '../navigation.service';

interface Slide {
  url: string;
  title: string;
  sub: string;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // //Données du carrousel
  // readonly slides = signal<Slide[]>([
  //   { url: 'luxury-resort.jpg', title: 'iBuzz', sub: 'Luxe & Détente' },
  //   { url: 'QR_Code.avif', title: 'iBuzz', sub: 'Évasion Sauvage' },
  //   { url: 'QR_2.jpg', title: 'iBuzz', sub: 'Évasion Sauvage' },
  //   { url: '7.jpg', title: 'iBuzz', sub: 'Évasion Sauvage' },
  //   { url: '4.jpg', title: 'iBuzz', sub: 'Évasion Sauvage' },
  //   { url: '9.jpg', title: 'iBuzz', sub: 'Évasion Sauvage' },
  //   { url: 'QR_3.jpg', title: 'iBuzz', sub: 'Évasion Sauvage' },
  //   { url: 'cozumel.jpg', title: 'iBuzz', sub: 'Très genial' }
  // ]);

  // // Index réactif
  // currentIndex = signal(0);

  // // Calcul automatique de la translation (Performance +++)
  // translateX = computed(() => `translateX(-${this.currentIndex() * 100}%)`);

  // next() {
  //   this.currentIndex.update(i => (i + 1) % this.slides().length);
  // }

  // prev() {
  //   this.currentIndex.update(i => (i - 1 + this.slides().length) % this.slides().length);
  // }

  // goTo(index: number) {
  //   this.currentIndex.set(index);
  // }

  // // Auto-play optionnel avec effet de nettoyage
  // constructor() {
  //   effect((onCleanup) => {
  //     const interval = setInterval(() => this.next(), 6000);
  //     onCleanup(() => clearInterval(interval));
  //   });
  // }

  // L'index actuel est le seul moteur de la transition
  currentIndex = signal(0);

    readonly slides = signal([
    { url: 'QR_Code.avif', title: 'Buzz', sub: 'La gestion digitale de vos événements, le professionnalisme en plus.' },
    { url: 'digital.jpg', title: 'Buzz', sub: 'L\'élégance numérique au service de vos moments d\'exception.' },
    { url: 'QR_2.jpg', title: 'Buzz', sub: 'Vos invitations réinventées : de l\'écran à l\'émotion.' },
    { url: 'QR_Code.avif', title: 'Buzz', sub: 'Connectez vos invités, simplifiez vos festivités.' },
    { url: 'salla_conf.avif', title: 'Buzz', sub: 'Organisez et vivez vos événements autrement.' },
    { url: 'salle_fete.jpg', title: 'Buzz', sub: 'iBuzz : Le futur de l\'invitation commence ici. Moins de papier, plus de fête : iBuzz met l\'ambiance dans vos écrans.' },
    { url: 'salle_fete2.jpg', title: 'Buzz', sub: 'Scannez, entrez, kiffez : l\'invitation qui fait bouger les lignes.' }
  ]);

  next() {
    this.currentIndex.update(i => (i + 1) % this.slides().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.slides().length) % this.slides().length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  // Auto-play optionnel avec effet de nettoyage
  constructor() {
    effect((onCleanup) => {
      const interval = setInterval(() => this.next(), 6000);
      onCleanup(() => clearInterval(interval));
    });
  }

  // 1. Injecter le service de navigation
  private navService = inject(NavigationService);

  //La méthode appelée par le bouton (click)="onStart()"
  onStart() {
    // Cette méthode utilise le service pour scroller vers la section "about" que le bouton utilise
    this.navService.scrollToSection('about');
  }
}

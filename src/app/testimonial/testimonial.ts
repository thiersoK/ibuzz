import { Component, computed, effect, signal } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface Porfolio {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

@Component({
  selector: 'app-testimonial',
  imports: [ScrollRevealDirective],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
})
export class Testimonial {
  // Index de la citation active
  currentIndex = signal(0);

  // Données du portfolio
  testimonials = signal<Porfolio[]>([
    {
      name: 'Thierry Kabadi',
      role: 'CEO & Founder',
      quote: "Innover pour servir, transformer pour valoriser.",
      imageUrl: 'porfolio.jpg'
    },
    {
      name: 'Abigael Kabadi',
      role: 'Lead Developer',
      quote: "La simplicité est la sophistication suprême.",
      imageUrl: 'porfolio2.jpg'
    }
  ]);

  // Calcul de la translation pour l'effet de glissement
  // Génère la transformation CSS : 0%, -100%, -200%, etc.
  translateX = computed(() => `translateX(-${this.currentIndex() * 100}%)`);

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  // Optionnel : Défilement automatique toutes le 6 secondes
  constructor() {
    effect((onCleanup) => {
      const timer = setInterval(() => {
        this.currentIndex.update(index => (index + 1) % this.testimonials().length);
      }, 6000);
      onCleanup(() => clearInterval(timer));
    });
  }
}

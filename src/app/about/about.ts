import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly brandName = signal('iBUZZ');

  readonly pillars = signal([
    {
      title: 'Objectif',
      icon: 'pi pi-list', // Icône PrimeIcons
      description: "Nous réinventons la gestion événementielle par le prisme du numérique, afin d'apporter une valeur ajoutée concrète et une fluidité totale à vos moments d'exception."
    },
    {
      title: 'Vision',
      icon: 'pi pi-eye',
      description: "Notre vision est de devenir une référence incontournable de l'événementiel digitalisé en Afrique et dans le monde à travers une union harmonieuse entre innovation technologique et service humain de qualité."
    },
    {
      title: 'Mission',
      icon: 'pi pi-gauge',
      description: "Notre mission est de révolutionner l'expérience des événements en la rendant plus innovante, raffinée et inoubliable, grâce à une combinaison unique du digital et de services humains professionnels."
    }
  ]);
}

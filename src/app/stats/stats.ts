import { Component, signal, OnInit, OnDestroy, inject, NgZone } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats implements OnInit, OnDestroy {
  private zone = inject(NgZone); // Pour les performances
  private intervals: any[] = [];

  readonly title = signal('NOS CHIFFRES');
  readonly subtitle = signal('Nous vous remercions pour la confiance que vous nous accordez.');

  readonly statsData = [
    { target: 349, label: 'Événements', current: signal(0) },
    { target: 276, label: 'Mariages', current: signal(0) },
    { target: 35978, label: 'Invitations électroniques', current: signal(0) },
    { target: 8253, label: 'Avis des invités', current: signal(0) }
  ];

  ngOnInit(): void {
    // Dans un vrai projet, on déclencherait ceci via un IntersectionObserver
    // Pour l'instant, on garde l'appel ici mais optimisé
    this.animateNumbers();
  }

  ngOnDestroy(): void {
    this.intervals.forEach(interval => clearInterval(interval));
  }

  animateNumbers(): void {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    // On sort de la zone Angular pour éviter de surcharger le moteur de rendu
    this.zone.runOutsideAngular(() => {
      this.statsData.forEach(stat => {
        const increment = stat.target / totalFrames;
        let frame = 0;

        const counter = setInterval(() => {
          frame++;
          const newValue = Math.floor(increment * frame);

          if (frame >= totalFrames) {
            // On rentre dans la zone uniquement pour mettre à jour le Signal final
            this.zone.run(() => stat.current.set(stat.target));
            clearInterval(counter);
          } else {
            // Mise à jour fluide du signal
            this.zone.run(() => stat.current.set(newValue));
          }
        }, frameRate);

        this.intervals.push(counter);
      });
    });
  }

  formatNumber(value: number): string {
    return value.toLocaleString('fr-FR').replace(/\s/g, '\u00A0');
  }
}
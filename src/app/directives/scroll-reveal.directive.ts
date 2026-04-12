import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() appScrollReveal = 'opacity-100 translate-y-0';
  @Input() initialClass = 'opacity-0 translate-y-12';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    
    // Configuration style de base
    this.renderer.setStyle(element, 'transition', 'all 1000ms ease-out');

    // Sécurisation des listes de classes
    const revealClasses = this.appScrollReveal.split(' ').filter(c => c.length > 0);
    const hiddenClasses = this.initialClass.split(' ').filter(c => c.length > 0);

    // État initial
    hiddenClasses.forEach(cls => this.renderer.addClass(element, cls));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // ON ENTRE : Retirer "caché", ajouter "révélé"
          hiddenClasses.forEach(cls => this.renderer.removeClass(element, cls));
          revealClasses.forEach(cls => this.renderer.addClass(element, cls));
        } else {
          // ON SORT : Retirer "révélé", ajouter "caché"
          revealClasses.forEach(cls => this.renderer.removeClass(element, cls));
          hiddenClasses.forEach(cls => this.renderer.addClass(element, cls));
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px' // Déclenche un peu avant pour plus de fluidité
    });

    observer.observe(element);
  }
}
/** architecture "multi-pages" */
//===============================
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
// import { RouterLink, RouterModule } from '@angular/router';

// interface NavItem {
//   label: string;
//   route: string;
//   icon?: string;
// }

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [CommonModule, RouterModule, RouterLink],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css',
// })
// export class Navbar implements OnInit, OnDestroy {
//   private platformId = inject(PLATFORM_ID);
//   private observer: IntersectionObserver | null = null;

//   // Signal pour la section active (synchronisé par le scroll)
//   activeSection = signal<string>('hero');
//   isMenuOpen = signal(false);

//   navigationItems = signal<NavItem[]>([
//     { label: 'Accueil', route: 'hero', icon: 'pi-home' },
//     { label: 'À Propos', route: 'about', icon: 'pi-info-circle' },
//     { label: 'Services', route: 'services', icon: 'pi-cog' },
//     { label: 'Galerie', route: 'galerie', icon: 'pi-images' },
//     { label: 'Témoignages', route: 'testimonials', icon: 'pi-comments' },
//     { label: 'Contact', route: 'contact', icon: 'pi-envelope' }
//   ]);

//   ngOnInit() {
//     // On initialise l'observeur uniquement côté navigateur
//     if (isPlatformBrowser(this.platformId)) {
//       this.initScrollObserver();
//     }
//   }

//   ngOnDestroy() {
//     if (this.observer) this.observer.disconnect();
//   }

//   private initScrollObserver() {
//     const options = {
//       root: null,
//       // Définit la zone de détection (ici le haut de l'écran)
//       rootMargin: '-20% 0px -70% 0px', 
//       threshold: 0
//     };

//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           this.activeSection.set(entry.target.id);
//         }
//       });
//     }, options);

//     // On observe chaque ID présent dans nos menus
//     this.navigationItems().forEach((item) => {
//       const element = document.getElementById(item.route);
//       if (element) this.observer?.observe(element);
//     });
//   }

//   toggleMenu() {
//     this.isMenuOpen.update((v) => !v);
//   }
// }

/** architecture "Single Page Application" (SPA)" */
//====================================================
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';

interface NavItem {
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  // Initialisation sur 'hero' pour que l'Accueil soit allumé au départ
  activeSection = signal<string>('hero');
  isMenuOpen = signal(false);

  navigationItems = signal<NavItem[]>([
    { label: 'Accueil', route: 'hero', icon: 'pi-home' },
    { label: 'À Propos', route: 'about', icon: 'pi-info-circle' },
    { label: 'Services', route: 'services', icon: 'pi-cog' },
    { label: 'Galerie', route: 'galerie', icon: 'pi-images' },
    { label: 'Témoignages', route: 'testimonials', icon: 'pi-comments' },
    { label: 'Contact', route: 'contact', icon: 'pi-envelope' }
  ]);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollObserver();
    }
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  // Méthode pour scroller manuellement lors d'un clic sur le menu
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(sectionId);
      this.isMenuOpen.set(false); // Ferme le menu mobile après clic
    }
  }

  private initScrollObserver() {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Zone de détection en haut de l'écran
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // On ne change le signal que si la section entre vraiment dans la zone
        if (entry.isIntersecting && entry.target.id) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    // On attend un petit délai pour être sûr que le DOM est rendu
    setTimeout(() => {
      this.navigationItems().forEach((item) => {
        const element = document.getElementById(item.route);
        if (element) this.observer?.observe(element);
      });
    }, 500);
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }
}

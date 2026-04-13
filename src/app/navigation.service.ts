import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection = signal<string>('hero');

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(sectionId);
    }
  }
}
import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  imports: [ScrollRevealDirective], // <--- Ajoute-la ici la directive pour l'animation
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {readonly services = signal([
    {
      title: 'INVITATION ELECTRONIQUE',
      description: 'Fini les impressions papier ! Vos invités reçoivent des invitations électroniques élégantes, avec confirmation de présence, choix des boissons, livre d\'or digital, rappel WhatsApp et SMS, etc.',
      icon: 'pi pi-qrcode'
    },
    {
      title: 'iBUZZ Check-in QR',
      description: 'Optimisez votre accueil avec notre système de check-in digital. Un simple scan du QR code à l\'entrée suffit pour valider vos convives, garantissant une entrée fluide et un événement entièrement sécurisé.',
      icon: 'pi pi-qrcode'
    },
    {
      title: 'iBUZZ Accueil Premium',
      description: 'Hospitalité premium et placement digital. Vos invités bénéficient d\'un accueil sur-mesure et d\'un accompagnement assisté vers leur table pour une organisation sans faille. Service IBUZZ CHECK-IN QR inclus.',
      icon: 'pi pi-qrcode'
    },
    {
      title: 'iBUZZ Bar Futuriste',
      description: 'Un service boisson qui repousse les limites. Fluidité absolue grâce à la commande digitale et rapidité d\'exécution : donnez à votre événement une signature technologique inoubliable.',
      icon: 'pi pi-qrcode'
    },
    {
      title: 'TOUT iBUZZ',
      description: 'La gestion complète de votre événement :',
      details: [
        'INVITATION ELECTRONIQUE inclus',
        'iBUZZ Check-in QR inclus',
        'iBUZZ Accueil Premium inclus',
        'iBUZZ Bar Futuriste inclus'
      ],
      icon: 'pi pi-qrcode'
    }
  ]);

  commander(serviceTitle: string) {
    console.log(`Commande pour : ${serviceTitle}`);
    // Logique de redirection ou d'ouverture de formulaire
  }

}

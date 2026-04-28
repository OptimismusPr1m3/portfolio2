import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';

interface PortfolioProject {
  image: string;
  title: string;
  gitLink: string;
  liveLink: string;
  descEN: string;
  descDE: string;
  tech: string;
  oldVersionLink?: string;
}

@Component({
  selector: 'app-pfsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pfsection.component.html',
  styleUrl: './pfsection.component.scss',
})
export class PfsectionComponent {
  projects: PortfolioProject[] = [
    {
      image: './assets/images/projectframes/Videoflix.png',
      title: 'VideoFlix',
      gitLink: 'https://github.com/OptimismusPr1m3/videoflix_front',
      liveLink: 'https://bastian-wolff.de/videoflix/',
      descEN: 'Stream videos and upload them, inspired by Youtube and Netflix. Discover VideoFLix now ! Database runs on a Raspberry PI5',
      descDE: 'Streamingplatform, inspiriert von Youtube und Netflix. Entdecke VideoFlix jetzt ! Die Datenbank läuft auf einem Raspberry PI5',
      tech: 'Angular | Django | PostgreSQL | SCSS',
    },
    {
      image: './assets/images/projectframes/DABubble.png',
      title: 'DABubble',
      gitLink: 'https://github.com/OptimismusPr1m3/DABubble_group',
      liveLink: 'https://bastian-wolff.de/bubble/',
      descEN: 'Chat messenger inspired by Slack. Stay in contact with colleagues, keep up to date, and share thoughts and ideas.',
      descDE: 'Chat-Messenger inspiriert con Slack/Discord. Halte Kontakt zu Kollegen, Freunden oder Bekannten. Bleibe auf dem neuesten Stand und teile deine Gedanken und Ideen.',
      tech: 'Angular | Firebase | SCSS',
    },
    {
      image: '/assets/images/projectframes/Sharkie_NG.png',
      title: 'Sharkie',
      gitLink: 'https://github.com/OptimismusPr1m3/sharkie_ng_phaser',
      liveLink: 'https://bastian-wolff.de/sharkie/',
      descEN: 'Take on the role of Sharkie, a brave little white shark, as you navigate through treacherous waters filled with enemies. Now completely revamped with Angular | Phaser, making it significantly more performant!',
      descDE: 'Schlüpfe in die Rolle von Sharkie, einem mutigen kleinen weißen Hai, und navigiere durch gefährliche Gewässer voller Feinde. Nun komplett überarbeitet mit Angular | Phaser und somit um ein vielfaches performanter!',
      tech: 'Angular | Phaser | SCSS',
      oldVersionLink: 'https://bastian-wolff.de/JumpNRun_SParkie/index.html',
    },
    {
      image: '/assets/images/projectframes/Join.png',
      title: 'Join',
      gitLink: 'https://github.com/OptimismusPr1m3/Join_b_end_frontend',
      liveLink: 'https://bastian-wolff.de/Join/index.html',
      descEN: 'Welcome to Join, your collaborative Kanban board designed for group productivity! With Join, you can sign up and gain instant access to your personalized task dashboard, where you will find all your assignments neatly organized.',
      descDE: 'Willkommen bei Join, deinem kollaborativen Kanban-Board, das für Gruppenproduktivität entwickelt wurde! Mit Join kannst du dich anmelden und sofort Zugriff auf dein personalisiertes Aufgaben-Dashboard erhalten, auf dem man all seine Aufgaben organisiert findet.',
      tech: 'JavaScript | Python | Django | API',
    },
  ];

  constructor(public lService: LanguageService) {}
}

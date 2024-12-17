import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';


@Component({
  selector: 'app-pfsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pfsection.component.html',
  styleUrl: './pfsection.component.scss',
})
export class PfsectionComponent {

  
  portfolioImages: string[] = [
    './assets/images/projectframes/Videoflix.png',
    './assets/images/projectframes/DABubble.png',
    '/assets/images/projectframes/Sharkie.png',
    '/assets/images/projectframes/Join.png',
    //'/assets/images/projectframes/Pokédex.png',
  ];
  portfolioGitLinks: string[] = [
    'https://github.com/OptimismusPr1m3/videoflix_front',
    'https://github.com/OptimismusPr1m3/DABubble_group',
    'https://github.com/OptimismusPr1m3/JumpNRun_Sparkie',
    'https://github.com/OptimismusPr1m3/Join',
    //'https://github.com/OptimismusPr1m3/Pokedex',
  ];
  portfolioLiveLinks: string[] = [
    'https://bastian-wolff.de/videoflix/',
    'https://bastian-wolff.de/bubble/',
    'https://bastian-wolff.de/JumpNRun_SParkie/index.html',
    'https://bastian-wolff.de/Join/login_index.html',
    //'https://bastian-wolff.de/Pok%C3%A9dex/index.html',
  ];
  portfolioTitles: string[] = [`VideoFlix`,'DABubble', 'Sharkie', 'Join'];
  portfolioInfosEN: string[] = [
    'Stream videos and upload them, inspired by Youtube and Netflix. Discover VideoFLix now ! Database runs on a Raspberry PI5',
    'Chat messenger inspired by Slack. Stay in contact with colleagues, keep up to date, and share thoughts and ideas.',
    'Take on the role of Sharkie, a brave little white shark, as you navigate through treacherous waters filled with enemies. But beware, the ultimate showdown awaits as you face off against the mighty great white shark.',
    'Welcome to Join, your collaborative Kanban board designed for group productivity! With Join, you can sign up and gain instant access to your personalized task dashboard, where you will find all your assignments neatly organized.',
    //'Introducing my Pokédex, powered by the PokeAPI! Explore, search, and learn about Pokémon with ease. Dive into stats and attacks for each Pokémon. The ultimate companion for Pokémon enthusiasts!',
  ];
  portfolioInfosDE: string[] = [
    'Streamingplatform, inspiriert von Youtube und Netflix. Entdecke VideoFlix jetzt ! Die Datenbank läuft auf einem Raspberry PI5',
    'Chat-Messenger inspiriert con Slack/Discord. Halte Kontakt zu Kollegen, Freunden oder Bekannten. Bleibe auf dem neuesten Stand und teile deine Gedanken und Ideen.',
    'Schlüpfe in die Rolle von Sharkie, einem mutigen kleinen weißen Hai, und navigiere durch gefährliche Gewässer voller Feinde. Aber Vorsicht, das ultimative Duell steht bevor, wenn du dem mächtigen Weißen Hai gegenübertrittst.',
    'Willkommen bei Join, deinem kollaborativen Kanban-Board, das für Gruppenproduktivität entwickelt wurde! Mit Join kannst du dich anmelden und sofort Zugriff auf dein personalisiertes Aufgaben-Dashboard erhalten, auf dem man all seine Aufgaben organisiert findet.',
    //'Hier ist mein Pokédex, angetrieben von der PokeAPI! Erkunde, suche und lerne Pokémon spielend leicht kennen. Tauche ein in Statistiken und Attacken für jedes Pokémon. Der ultimative Begleiter für Pokémon-Enthusiasten!',
  ]
  portfolioTech: string[] = [
    'Angular | Django | POSTGRESQL | SCSS',
    'Angular | Firebase | SCSS',
    'JavaScript | HTML | CSS',
    'JavaScript | HTML | CSS',
    //'JavaScript | HTML | CSS | API',
  ];

  constructor(public lService: LanguageService) {}

}

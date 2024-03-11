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
    '/assets/images/projectframes/Sharkie.png',
    '/assets/images/projectframes/Join.png',
    '/assets/images/projectframes/Pokédex.png',
    //'/assets/images/projectframes/Pollo loco 4.png',
  ];
  portfolioGitLinks: string[] = [
    'https://github.com/OptimismusPr1m3/JumpNRun_Sparkie',
    'https://github.com/StephanieWetzel/Join',
    'https://github.com/OptimismusPr1m3/Pokedex',
    //'https://github.com/OptimismusPr1m3/JumpNRun_Sparkie',
  ];
  portfolioLiveLinks: string[] = [
    'https://sebastian-wolff.developerakademie.net/JumpNRun_SParkie/index.html',
    'https://sebastian-wolff.developerakademie.net/Join/login_index.html',
    'https://sebastian-wolff.developerakademie.net/Pok%C3%A9dex/index.html',
  ];
  portfolioTitles: string[] = ['Sharkie', 'Join', 'Pokedéx', 'Placeholder'];
  portfolioInfosEN: string[] = [
    'Take on the role of Sharkie, a brave little white shark, as you navigate through treacherous waters filled with enemies. But beware, the ultimate showdown awaits as you face off against the mighty great white shark.',
    'Welcome to Join, your collaborative Kanban board designed for group productivity! With Join, you can sign up and gain instant access to your personalized task dashboard, where you will find all your assignments neatly organized.',
    'Introducing my Pokedex, powered by the PokeAPI! Explore, search, and learn about Pokemon with ease. Dive into stats and attacks for each Pokemon. The ultimate companion for Pokemon enthusiasts!',
    //'Placeholder',
  ];
  portfolioInfosDE: string[] = [
    'Nimm die Rolle von Sharkie ein, einem mutigen kleinen Weißen Hai, während du dich durch gefährliche Gewässer voller Feinde bewegst. Doch sei gewarnt, das ultimative Duell erwartet dich, wenn du dem mächtigen Weißen Hai gegenüberstehst.',
    'Willkommen bei Join, Ihrem kollaborativen Kanban-Board, das für Gruppenproduktivität entwickelt wurde! Mit Join können Sie sich anmelden und sofort Zugriff auf Ihr personalisiertes Aufgaben-Dashboard erhalten, auf dem Sie alle Ihre Aufgaben ordentlich organisiert finden.',
    'Hier ist mein Pokédex, angetrieben von der PokeAPI! Erkunde, suche und lerne Pokémon spielend leicht kennen. Tauche ein in Statistiken und Attacken für jedes Pokémon. Der ultimative Begleiter für Pokémon-Enthusiasten!',
    'Platzhalter',
  ]
  portfolioTech: string[] = [
    'Javascript | HTML | CSS',
    'Javascript | HTML | CSS',
    'Javascript | HTML | CSS | API',
    //'TypeScript | HTML | Firebase | CSS',
  ];

  constructor(public lService: LanguageService) {}

}

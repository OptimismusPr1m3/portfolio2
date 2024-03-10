import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';
import Aos from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  iconsFirstRow: string[] = [
    '/assets/images/icons/javascript.png',
    '/assets/images/icons/angular.png',
    '/assets/images/icons/typescript.png',
    '/assets/images/icons/html.png',
    //'/assets/images/icons/material_design.png',
  ];
  iconsSecondRow: string[] = [
    '/assets/images/icons/git.png',
    '/assets/images/icons/firebase.png',
    '/assets/images/icons/css.png',
  ];
  iconsThirdRow: string[] = [
    '/assets/images/icons/scrum.png',
    '/assets/images/icons/api.png',
  ];
  iconsNamesFirst: string[] = [
    'Javascript',
    'Angular',
    'TypeScript',
    'HTML',
    //'Material design',
  ];

  iconsNamesSecond: string[] = ['GIT',
  'Firebase',
  'CSS',];
  iconsNamesThird: string[] = ['Scrum',
  'Rest-Api',];

  ngOnInit() {
    Aos.init()
  }

  constructor(public lService: LanguageService) {}
}

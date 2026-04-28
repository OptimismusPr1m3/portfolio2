import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';

interface SkillIcon {
  icon: string;
  name: string;
}

interface SkillRow {
  animation: 'fade-down' | 'fade-up';
  skills: SkillIcon[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillRows: SkillRow[] = [
    {
      animation: 'fade-down',
      skills: [
        { icon: '/assets/images/icons/javascript.png', name: 'JavaScript' },
        { icon: '/assets/images/icons/angular.png', name: 'Angular' },
        { icon: '/assets/images/icons/typescript.png', name: 'TypeScript' },
        { icon: '/assets/images/icons/html.png', name: 'HTML' },
      ],
    },
    {
      animation: 'fade-up',
      skills: [
        { icon: '/assets/images/icons/git.png', name: 'GIT' },
        { icon: '/assets/images/icons/firebase.png', name: 'Firebase' },
        { icon: '/assets/images/icons/css.png', name: 'CSS' },
      ],
    },
    {
      animation: 'fade-down',
      skills: [
        { icon: '/assets/images/icons/scrum.png', name: 'Scrum' },
        { icon: '/assets/images/icons/api.png', name: 'Rest-Api' },
      ],
    },
    {
      animation: 'fade-up',
      skills: [
        { icon: '/assets/images/icons/material_design.png', name: 'Material design' },
      ],
    },
  ];

  constructor(public lService: LanguageService) {}
}

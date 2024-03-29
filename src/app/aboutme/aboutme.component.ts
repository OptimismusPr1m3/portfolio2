import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { AboutMeContentComponent } from '../shared/about-me-content/about-me-content.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, SkillsComponent, AboutMeContentComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
}

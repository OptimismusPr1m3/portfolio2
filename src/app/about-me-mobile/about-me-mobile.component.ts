import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { AboutMeContentComponent } from '../shared/about-me-content/about-me-content.component';

@Component({
  selector: 'app-about-me-mobile',
  standalone: true,
  imports: [AboutMeContentComponent,SkillsComponent],
  templateUrl: './about-me-mobile.component.html',
  styleUrl: './about-me-mobile.component.scss'
})
export class AboutMeMobileComponent {

}

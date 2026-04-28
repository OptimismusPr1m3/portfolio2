import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-about-me-content',
  standalone: true,
  imports: [],
  templateUrl: './about-me-content.component.html',
  styleUrl: './about-me-content.component.scss'
})
export class AboutMeContentComponent {
  constructor(public lService: LanguageService) {}
}

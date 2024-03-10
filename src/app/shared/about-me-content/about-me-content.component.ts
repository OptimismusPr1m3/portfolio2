import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../service/language.service';


@Component({
  selector: 'app-about-me-content',
  standalone: true,
  imports: [],
  templateUrl: './about-me-content.component.html',
  styleUrl: './about-me-content.component.scss'
})
export class AboutMeContentComponent {

  scrollHeight: number = 0;
  isOnPoint: boolean = false;

  constructor(public lService: LanguageService) {}

}

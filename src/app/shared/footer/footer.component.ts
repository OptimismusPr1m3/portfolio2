import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocilinksComponent } from '../socilinks/socilinks.component';
import { LanguageService } from '../../service/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public lService: LanguageService) {}

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  constructor(public lService: LanguageService){}
}

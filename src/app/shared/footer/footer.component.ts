import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocilinksComponent } from '../socilinks/socilinks.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocilinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

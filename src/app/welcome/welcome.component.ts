import { Component } from '@angular/core';
import { SocilinksComponent } from '../shared/socilinks/socilinks.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SocilinksComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import Aos from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio2';

  ngOnInit() {
    Aos.init()
  }
}

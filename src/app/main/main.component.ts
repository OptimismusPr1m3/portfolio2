import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { PfsectionComponent } from '../pfsection/pfsection.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { AboutMeMobileComponent } from '../about-me-mobile/about-me-mobile.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    WelcomeComponent,
    AboutmeComponent,
    PfsectionComponent,
    ContactformComponent,
    AboutMeMobileComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
/*
  isMobile: boolean = false;
  minWidthForMobile: number = 1450;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth <= this.minWidthForMobile) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }*/
}

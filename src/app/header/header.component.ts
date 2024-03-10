import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeadertemplateComponent } from '../shared/headertemplate/headertemplate.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeadertemplateComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  
  aboutMe: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
  barOpened: boolean = false;
  barWasOpened: boolean = false;
  barWasClosed: boolean = false;

  constructor() {}
  toggleActiveLink(aCategoryName: string) {
    this.aboutMe = aCategoryName === 'aboutMe';
    this.skills = aCategoryName === 'skills';
    this.portfolio = aCategoryName === 'portfolio';
  }
  toggleNavBar() {
    this.barWasClosed = false;
    this.barOpened = true;
    this.barWasOpened = true;
  }

  handleBarClosing(wasClosed: boolean) {
    if (wasClosed) {
      this.barWasClosed = true;
      setTimeout(() => {
        this.barOpened = false;
      }, 180)
    }
  }
}

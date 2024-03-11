import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadertemplateComponent } from '../shared/headertemplate/headertemplate.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeadertemplateComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  barOpened: boolean = false;
  barWasOpened: boolean = false;
  barWasClosed: boolean = false;

  constructor() {}
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

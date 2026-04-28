import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadertemplateComponent } from '../shared/headertemplate/headertemplate.component';

const NAV_CLOSE_DELAY_MS = 180;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeadertemplateComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  barOpened = false;
  barWasOpened = false;
  barWasClosed = false;

  toggleNavBar(): void {
    this.barWasClosed = false;
    this.barOpened = true;
    this.barWasOpened = true;
  }

  handleBarClosing(wasClosed: boolean): void {
    if (wasClosed) {
      this.barWasClosed = true;
      setTimeout(() => (this.barOpened = false), NAV_CLOSE_DELAY_MS);
    }
  }
}

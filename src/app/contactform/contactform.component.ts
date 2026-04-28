import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../service/language.service';
import { RouterLink } from '@angular/router';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const MAIL_ENDPOINT = 'https://bastian-wolff.de/sendMail.php';
const MESSAGE_SENT_TIMEOUT_MS = 2400;

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  http = inject(HttpClient);

  isInvalidName = false;
  isInvalidMail = false;
  isInvalidMessage = false;
  pPolicy = false;
  messageSent = false;
  submitError = false;

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
  };

  private post = {
    endPoint: MAIL_ENDPOINT,
    body: (payload: ContactData) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(public lService: LanguageService) {}

  onSubmit(ngForm: NgForm): void {
    if (ngForm.valid && ngForm.submitted) {
      this.submitError = false;
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            this.messageSent = true;
            ngForm.resetForm();
            setTimeout(() => (this.messageSent = false), MESSAGE_SENT_TIMEOUT_MS);
          },
          error: () => {
            this.submitError = true;
            setTimeout(() => (this.submitError = false), MESSAGE_SENT_TIMEOUT_MS);
          },
        });
    } else if (!ngForm.valid && ngForm.submitted) {
      this.checkNameValidation();
      this.checkEmailValidation();
      this.checkMessageValidation();
    }
  }

  checkMessageValidation(): void {
    if (this.contactData.message === '') {
      this.isInvalidMessage = true;
    }
  }

  checkNameValidation(): void {
    if (this.contactData.name === '') {
      this.isInvalidName = true;
    }
  }

  checkEmailValidation(): void {
    if (this.contactData.email === '') {
      this.isInvalidMail = true;
    }
  }
}

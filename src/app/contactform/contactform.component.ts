import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {

  http = inject(HttpClient);

  isInvalidName: boolean = false;
  isInvalidMail: boolean = false;
  isInvalidMessage: boolean = false;
  pPolicy: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: "",
  };
  
  post = {
    endPoint: 'https://bastian-wolff.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response: any) => {
          console.log(response)
          ngForm.resetForm();
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      })
    } else if (!ngForm.valid && ngForm.submitted) {
      this.checkNameValidation();
      this.checkEmailValidation();
      this.checkMessageValidation();
    }
  }
  
  checkMessageValidation() {
    if (this.contactData.message == '') {
      this.isInvalidMessage = true;
    }
  }

  checkNameValidation() {
    if (this.contactData.name == '') {
      this.isInvalidName = true;
    }
  }

  checkEmailValidation() {
    if (this.contactData.email == '') {
      this.isInvalidMail = true;
    }
  }

  constructor(public lService: LanguageService){}
}

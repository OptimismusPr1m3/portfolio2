import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../service/language.service';


@Component({
  selector: 'app-headertemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headertemplate.component.html',
  styleUrl: './headertemplate.component.scss'
})
export class HeadertemplateComponent {
  aboutMe: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
  contact: boolean = false;
  isdefaultLang: boolean = true;
  isGerLang: boolean = false;

  @Input() barIsOpen: boolean | undefined;
  @Output() barHasClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleActiveLink(aCategoryName: string) {
    this.aboutMe = aCategoryName === 'aboutMe';
    this.skills = aCategoryName === 'skills';
    this.portfolio = aCategoryName === 'portfolio';
    this.contact = aCategoryName === 'contact';
    //this.emitCloseBarEvent();
  }

  emitCloseBarEvent() {
    this.barHasClosed.emit(true);
  }

  changeLang(lang: string) {
    this.lService.changeLang(lang);
    this.isdefaultLang = lang === 'en'
    this.isGerLang = lang === 'de'
  }

  constructor(public lService: LanguageService) {}


}

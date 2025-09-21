import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class AppTranslateService {
  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    const lang = browserLang && ['es', 'en'].includes(browserLang) ? browserLang : 'en';
    translate.setDefaultLang('en');
    translate.use(lang);
  }

  useLanguage(lang: 'en' | 'es') {
    this.translate.use(lang);
  }
}

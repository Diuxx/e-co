import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// i18n
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  // variables
  title = 'e-co-angular';

  constructor(
    public translate: TranslateService,
    private meta: Meta // ceo: meta
    ) {
    // https://www.digitalocean.com/community/tutorials/angular-meta-tags
    this.meta.addTag({
      name: 'Description',
      content: 'e-co est un template d\'application ecommerce développé avec angular 9. testez les possibilités en terme d\'ecommerce avec angular dès maintenant!'
    });
    this.manageLang();
  }

  ngOnInit() {
  }

  /**
   * switch application langage
   * @param lang 
   */
  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  /**
   * https://www.positronx.io/angular-internationalization-i18n-with-ngx-translate-tutorial/
   * https://github.com/ngx-translate/core
   * manage application current langage
   */
  private manageLang(): void {
    this.translate.addLangs(['en', 'fr']);   // lang list
    let lang = localStorage.getItem('lang'); // get local stored lang id
    if(lang != null)
    {
      this.translate.setDefaultLang(lang);
    } else
    {
      this.translate.setDefaultLang('en');
      localStorage.setItem('lang', 'en');
    }
    return;
  }
}

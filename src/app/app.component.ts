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

  // ceo: meta
  private meta: Meta;

  constructor(public translate: TranslateService) {
    this.manageLang();
  }

  ngOnInit() {
    /*this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag({
      name: 'description',
      content: 'Cette application a été développée avec Angular version 9.1.7 et bootstrap 4.5.0' +
        ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
    });*/
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
   * manage application current langage
   */
  private manageLang(): void {
    this.translate.addLangs(['en', 'fr']);  // lang list
    // get local stored lang id
    let lang = localStorage.getItem('lang');
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

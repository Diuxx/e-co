import { Component, OnInit } from '@angular/core';

// primeng
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // variables
  public shop: SelectItem[];
  public menu: any = {
    deals:    'header.deals-title', 
    about:    'header.about-title',
    discount: 'header.discount-title',
    login:    'header.login-title'
  }

  public article_count: number; // acticle count
  public langs: SelectItem[];   // langs list
  public currentTrad: string;   // application current traduction

  constructor(
    private router: Router,
    public translate: TranslateService,
    ) {
    this.article_count = 23;

    // available traduction list
    this.langs = [
      { label: 'Français', value: 'fr', styleClass: 'flag-fr' },
      { label: 'Anglais', value: 'en', styleClass: 'flag-us' }
    ]

    // set selected lang
    let lang = localStorage.getItem('lang'); 
    if(lang != null)
    {
      this.currentTrad = lang;
    }
  }

  ngOnInit() {
    // --
  }

  /** route user to shopping page */
  public shoppingPage(): void {
    this.router.navigate(['/', 'shopping']);
  }

  /** Update website translation */
  public updateTraduction(): void {
    this.translate.use(this.currentTrad);
    localStorage.setItem('lang', this.currentTrad);
    return;
  }
}

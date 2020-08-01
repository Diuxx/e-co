import { Component, OnInit, Input } from '@angular/core';

// models
import { Article } from 'src/app/_models/article.model';
import { Currency } from 'src/app/_models/currency.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  // variable
  @Input() article: Article;

  currency: Currency[] = [
    new Currency('USD', '&#36;'),
    new Currency('EUR', '&#8364;'),
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.article);
  }

  /**
   * 
   * @param article 
   */
  public goToArticle(article: any) {
    console.log('go-to-article');
  }
}

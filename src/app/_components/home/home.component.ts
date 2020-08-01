import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from './../../_models/article.model';
import { ArticleService } from 'src/app/_services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variables
  public articles: Article[];

  constructor(
    private http: HttpClient,
    private acticleService: ArticleService) 
  { }

  ngOnInit() {
    this.getArticles();
  }

  /**
   * Get all articles
   */
  private getArticles() {
    this.acticleService.getArticles().subscribe(
      articles => {
        this.articles = articles;
      }
    )
  }

}

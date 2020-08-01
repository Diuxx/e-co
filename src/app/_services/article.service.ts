import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// service
import { AbstractService } from './abstract.service';

// models
import { Article } from '../_models/article.model'



@Injectable()
export class ArticleService extends AbstractService {
    
    private url = 'api/articles'

    constructor(http: HttpClient) {
        super(http);
    }

    /** get all articles */
    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(`${this.url}`);
    }
}
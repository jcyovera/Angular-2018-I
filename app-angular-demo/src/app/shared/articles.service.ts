import { Injectable } from '@angular/core';
import { Article } from '../_models/article.model';

@Injectable()
export class ArticlesService {
  articles:Article[];

  constructor() { 
    this.articles=[
      new Article("demo angular", "http://angular.io"),
      new Article("demo angular 2","http://angular.io"),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement){
    this.articles.push(new Article(title.value, link.value,0));
  }

}

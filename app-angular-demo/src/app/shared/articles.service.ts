import { Injectable } from '@angular/core';
import { Article } from '../_models/article.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  articles:Article[];

  constructor(private http:HttpClient) { 
   /* this.articles=[
      new Article("demo angular", "http://angular.io"),
      new Article("demo angular 2","http://angular.io"),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];*/
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement){
    this.articles.push(new Article(title.value, link.value,0));
  }
  getList():Observable<Article[]>{
    return this.http.get<Article[]>("http://localhost:3000/articles").pipe();
  }


}

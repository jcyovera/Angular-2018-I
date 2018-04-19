import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  title = 'awoifkashfk!';
  articles:Article[];

  constructor() { 
    this.articles=[
      new Article("demo angular", "http://angular.io"),
      new Article("demo angular 2","http://angular.io"),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ]
  }

  ngOnInit() {
  }
  

}

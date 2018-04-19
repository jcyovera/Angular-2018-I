import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  title = 'awoifkashfk!';
  articles:Article[];

  constructor(private articleService:ArticlesService) { 
  }

  ngOnInit() {
    this.articles=this.articleService.articles;
  }

  sortingByPoints(){
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
  

}

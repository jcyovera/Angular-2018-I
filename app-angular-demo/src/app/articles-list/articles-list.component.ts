import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  title = 'awoifkashfk!';
  articles:Article[];
  listObservable:any;

  constructor(private articleService:ArticlesService) { 
  }

  ngOnInit() {
    //this.articles=this.articleService.articles;
    this.loadList();
  }

  sortingByPoints(){
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
  loadList(){
    this.articleService.getList().subscribe(
      result=>{
        this.articles= result;
      },err=>{
        console.log("error");
      },
      ()=>{
        console.log("finished");
      }
    );
  }
  

}

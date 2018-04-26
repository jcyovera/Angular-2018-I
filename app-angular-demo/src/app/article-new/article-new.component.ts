import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {
  title = 'app works!';
  newItemObservable:any;
  constructor(private articleService:ArticlesService, private router: Router,) { }

  ngOnInit() {
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    //this.articleService.addArticle(title,link);
    this.newItemObservable = this.articleService.addArticle(title,link)
      .subscribe(result => {
        //this.articles=result;
        this.router.navigate(['/']);
      });
    
    return false;
  }

}

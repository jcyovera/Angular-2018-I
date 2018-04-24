import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../_models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit() {

  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
    // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(link): string {
      try {
        // e.g. http://foo.com/path/to/bar
        const domainAndPath: string = link.split('//')[1];
        // e.g. foo.com/path/to/bar
        return domainAndPath.split('/')[0];
      } catch (err) {
        return null;
      }
    }
}

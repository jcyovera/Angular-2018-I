import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { SortingValues } from '../_models/enumerations';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnChanges {
  articles: Article[]; // <-- component property
  sortValue: any = "";
  filters: MyApp.Models.IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  };
  filterObservable: any;
  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }

  constructor(private articleService: ArticlesService) { }
  sortedArticles(sortValue?: any): Article[] {
    let articlesSorted;
    console.log(this.articles);
    if (this.articles) {
      switch (sortValue) {
        case SortingValues.Title:
          articlesSorted = this.sortingByTitle(this.articles);
          break;
        case SortingValues.Points:
          articlesSorted = this.sortingByPoints(this.articles);
          break;
        default:
          articlesSorted = this.sortingByPoints(this.articles);
          break;

      }
    }
    return articlesSorted;
  }
  sortingByTitle(arrArticles) {
    return arrArticles.sort((a: Article, b: Article) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  }
  sortingByPoints(arrArticles) {
    return arrArticles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  ngOnInit() {
    //this.articles = this.articleService.articles;
    this.loadList();
  }
  ngOnChanges(): void {
    console.log("changing", this.filters.sortBy);
    //this.sortValue = this.filters.sortBy;
    this.loadList();
  }
  loadList() {
    this.filterObservable = this.articleService.getList(this.filters)
      .subscribe(result => {
        this.articles=result;
        console.log(this.articles);
      }, err => {
        console.log("error log");
      },
        () => {
          console.log("finish log");
        }
      );
  }

}

import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { SortingValues } from '../_models/enumerations';
import { Observable, Subscription } from "rxjs/Rx";
import { select } from '@angular-redux/store';
import { IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesListComponent implements OnInit, OnChanges {
  articles: Article[]; // <-- component property
  sortValue: any = "";
  filters: IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  };
  filterObservable: any;
  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }
  @select(['articleState', 'articles']) articles$: Observable<any>;
  articlesSubscription: Subscription;

  constructor(private articleService: ArticlesService,
    public cd: ChangeDetectorRef) { }
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
    //this.loadList();
    this.articlesSubscription = this.articles$.distinctUntilChanged().subscribe((availableColumns) => {
      this.articles = availableColumns;
      console.log("getting values from store");
			//this.cd.detectChanges() ;public cd: ChangeDetectorRef
		});
  }
  ngOnChanges(): void {
    console.log("changing", this.filters.sortBy);
    //this.sortValue = this.filters.sortBy;
    this.loadList();
    this.cd.detectChanges();
    this.cd.markForCheck();
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

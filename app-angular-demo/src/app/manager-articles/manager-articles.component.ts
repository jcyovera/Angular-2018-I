import { Component, OnInit } from '@angular/core';
import { CounterActions } from '../store/actions/app.action';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { InitialArticleStateActions } from '../store/actions/article.action';
import { IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-manager-articles',
  templateUrl: './manager-articles.component.html',
  styleUrls: ['./manager-articles.component.scss']
})
export class ManagerArticlesComponent implements OnInit {
  filters: IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
  @select(['countState','count']) readonly count$: Observable<number>;
  
  constructor(private actions: CounterActions, private articleActions:InitialArticleStateActions) { }

  ngOnInit() {
    this.articleActions.loadInitialState(1);
  }

  increment() {
    //this.ngRedux.dispatch(this.actions.increment()); // <- New
    this.actions.increment();
  }

  decrement() {
    //this.ngRedux.dispatch(this.actions.decrement()); // <- New
    this.actions.decrement()
  }

}

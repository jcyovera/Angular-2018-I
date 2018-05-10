import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SortingValues } from '../_models/enumerations';
import { IOptionElement, IArticleFilterParam } from '../_models/shared.model';

@Component({
  selector: 'app-articles-filter',
  templateUrl: './articles-filter.component.html',
  styleUrls: ['./articles-filter.component.scss']
})
export class ArticlesFilterComponent implements OnInit {
  sortListFilters: IOptionElement[]=[];
  filters: IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
  @Output() onUpdateFilters = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.sortListFilters.push({ text:"Title", value:"TITLE"});
    this.sortListFilters.push({ text:"Points", value:"POINTS"});
    this.onSelectSortBy("POINTS");
  }
  onSelectSortBy(sortbyId: string = "TITLE") {
    let sortValue:SortingValues;
    switch(sortbyId){
      case SortingValues.Title:
      sortValue= SortingValues.Title;
      break;
      case SortingValues.Points:
      sortValue= SortingValues.Points;
      break;
    }
    this.filters.sortBy = sortValue;
    console.log(sortbyId);
    this.updateList();
  }

  updateList() {
    this.onUpdateFilters.emit(this.filters);
  }

}

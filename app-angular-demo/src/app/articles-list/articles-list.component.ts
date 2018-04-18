import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  title = 'awoifkashfk!';
  articles:any[];

  constructor() { 
    this.articles=[
      { title:"demo angular", lin:"http://angular.io" },
      { title:"demo angular 2", lin:"http://angular.io" }
    ]
  }

  ngOnInit() {
  }
  

}

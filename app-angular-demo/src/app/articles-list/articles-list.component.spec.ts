import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListComponent } from './articles-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;
  let ArticlesServiceMock={};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListComponent ],
      providers:[
        ArticlesService,
        //{ provide: ArticlesService, useValue: ArticlesServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[HttpClientTestingModule,NgReduxTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFilterComponent } from './articles-filter.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ArticlesFilterComponent', () => {
  let component: ArticlesFilterComponent;
  let fixture: ComponentFixture<ArticlesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFilterComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNewComponent } from './article-new.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticlesService } from '../shared/articles.service';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';

describe('ArticleNewComponent', () => {
  let component: ArticleNewComponent;
  let fixture: ComponentFixture<ArticleNewComponent>;
  let ArticlesServiceMock={};
  let routerMock = <any> {
    navigate: (urls: String[]) => {},
    url:  {
            split:()=>{
                return ""
            }
        
    }
}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNewComponent ],
      providers:[
        { provide: ArticlesService, useValue: ArticlesServiceMock },
        { provide: Router, useValue: routerMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

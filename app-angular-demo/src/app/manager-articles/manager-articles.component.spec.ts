import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerArticlesComponent } from './manager-articles.component';

xdescribe('ManagerArticlesComponent', () => {
  let component: ManagerArticlesComponent;
  let fixture: ComponentFixture<ManagerArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

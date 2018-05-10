import { TestBed, inject } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));

  it('getList should return the data list',()=>{
    //Arrange
    let expectedList=[];

    let service = TestBed.get(ArticlesService);
    let http= TestBed.get(HttpTestingController);
    //Act
    service.getAll().subscribe((datalist)=>{
      expect(datalist).toEqual(expectedList);
    });
    //Assert
    const req= http.expectOne('http://localhost:3000/articles?_sort=votes&_order=desc');
    expect(req.request.method).toBe("GET");
    req.flush(expectedList);
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthenticationService, AlertService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
    let routerMock = <any> {
        navigate: (urls: String[]) => {},
        url:  {
                split:()=>{
                    return ""
                }
            
        },
        snapshot:{
          queryParams:
          {returnUrl:""}
        }
    }
  let activatedRouteMock={
			queryParams: Observable.of({})
  }
  let authenticationServiceMock={
    login(){
    },
    logout(){

    }
  }
  let alertServiceMock={
    error(){

    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        { provide:AlertService, useValue:alertServiceMock},
        { provide:AuthenticationService, useValue:authenticationServiceMock},
        { provide:ActivatedRoute, useValue:activatedRouteMock},
        { provide: Router, useValue: routerMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let authServiceStub = TestBed.get(AuthenticationService);
    spyOn(authServiceStub, 'logout');
    spyOn(authServiceStub, 'login').and.returnValue(Observable.of([]));
    expect(component).toBeTruthy();
  });
});

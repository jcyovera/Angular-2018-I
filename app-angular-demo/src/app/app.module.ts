import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesService } from './shared/articles.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ArticlesFilterComponent } from './articles-filter/articles-filter.component';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, } from './store/reducers/reducer';
import { CounterActions } from './store/actions/app.action';
import { IAppState } from './store/models/state';
import { InitialArticleStateActions } from './store/actions/article.action';
import { InitialArticleStateEpics } from './store/epics/article.epic';
import { createEpicMiddleware } from 'redux-observable';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register';
import { AlertComponent } from './_directives';
import { AppConfig } from './app.config';
import { AuthGuard } from './_guards';
import { AlertService, UserService, AuthenticationService } from './_services';
import { RouteComponent } from './shared/router.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleNewComponent,
    ArticleComponent,
    SearchBarComponent,
    ArticlesFilterComponent,
    ManagerArticlesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    RouteComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    HttpModule
  ],
  providers: [ArticlesService,CounterActions,
    InitialArticleStateActions,InitialArticleStateEpics,
    AppConfig,
    AuthGuard,
    AlertService,
    UserService,
    AuthenticationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( ngRedux:NgRedux<IAppState>, 
    private devTools:DevToolsExtension,private initialStateEpic:InitialArticleStateEpics){
    const middleWare = [
      createEpicMiddleware(this.initialStateEpic.loadInitialState)
    ]
    const enhancers = isDevMode() && devTools.isEnabled() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(
      rootReducer,
      {},middleWare,enhancers);
  }
 }

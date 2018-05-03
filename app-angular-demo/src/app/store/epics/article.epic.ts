import { Injectable } from "@angular/core";
import { ArticlesService } from "../../shared/articles.service";
import { InitialArticleStateActions } from "../actions/article.action";
import { ActionsObservable } from 'redux-observable';
import { Action } from "redux";
import { Observable } from "rxjs";
import { IArticleState } from "../models/articleState";
import { Article } from "../../_models/article.model";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InitialArticleStateEpics {
    constructor(private articleService: ArticlesService) { }
        
        loadInitialState = (action$: ActionsObservable<Action & { payload? }>): Observable<Action & { payload?}> => {
            return action$.ofType(InitialArticleStateActions.LOAD_INITIAL_ARTICLE_STATE)
                .mergeMap((action) => {
                    return this.articleService.getAll()
                        .flatMap((result: any) => ([(this.showInitialData(result)), this.finishLoading()]))
                        .catch(error => Observable.of({
                            type: InitialArticleStateActions.LOAD_INITIAL_ARTICLE_STATE_FAILED
                        }))
                });
        }

        showInitialData(result){
            return { 
                type: InitialArticleStateActions.LOAD_INITIAL_ARTICLE_STATE_SUCCESS,
                payload:{ articles:result, article:{ title:'',link:'',votes:0}}
            };
        }
        finishLoading(){
            return{
                type: InitialArticleStateActions.LOAD_INITIAL_ARTICLE_STATE_FINISHED
            }
        }
}

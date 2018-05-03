import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { Action } from 'redux';

@Injectable()
export class InitialArticleStateActions {

    static LOAD_INITIAL_ARTICLE_STATE = 'LOAD_INITIAL_ARTICLE_STATE';
    static LOAD_INITIAL_ARTICLE_STATE_SUCCESS = 'LOAD_INITIAL_ARTICLE_STATE_SUCCESS';
    static LOAD_INITIAL_ARTICLE_STATE_FAILED='LOAD_INITIAL_ARTICLE_STATE_FAILED';
    static LOAD_INITIAL_ARTICLE_STATE_FINISHED='LOAD_INITIAL_ARTICLE_STATE_FINISHED';

    @dispatch()
    loadInitialState = (mode: number): Action & { payload } => ({
        type: InitialArticleStateActions.LOAD_INITIAL_ARTICLE_STATE,
        payload: { mode }
    })
}

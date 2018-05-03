import { combineReducers } from 'redux'
import { Action, Reducer } from 'redux';
import { IArticleState } from '../models/articleState';
import { InitialArticleStateActions } from '../actions/article.action';

export const INITIAL_STATE: IArticleState = {
    article:{ title:'',link:'',votes:0},
    articles:[]
}

export const articleReducer: Reducer<IArticleState> = (state: IArticleState = INITIAL_STATE, action: Action & { payload?}): IArticleState => {
    switch (action.type) {
        case InitialArticleStateActions.LOAD_INITIAL_ARTICLE_STATE_SUCCESS:
            return loadInitialFormData(state, action);
        default:
            return state;
    }
}
function loadInitialFormData(state: IArticleState, action): IArticleState {
    let changedStateValues = {
        article:(action.payload.article)?action.payload.article:{},
        articles:action.payload.articles
    };
    return { ...state, ...changedStateValues };
}

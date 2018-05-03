import { Action, combineReducers, Reducer } from 'redux';
import { CounterActions } from '../actions/app.action';
import { IArticleState } from '../models/articleState';
import { articleReducer } from './article.reducer';
import { IAppState } from '../models/state';
import { counterReducer } from './counter.reducer';

const appReducer = combineReducers({
  articleState:articleReducer,
  countState:counterReducer
})

export const rootReducer: Reducer<IAppState> = (state, action) => {
  return appReducer(state, action);
};
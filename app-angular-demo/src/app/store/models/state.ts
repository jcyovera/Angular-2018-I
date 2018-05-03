import { IArticleState } from "./articleState";
export interface ICounterState {
    count: number;
  }

export interface IAppState {
    countState?: ICounterState;
    articleState?:IArticleState
  }
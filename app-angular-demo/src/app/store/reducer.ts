
import { Action} from 'redux';
import { CounterActions } from './app.action';
export interface IAppState{
    count:number;
}

export const INITIAL_STATE:IAppState={
    count:0
}

export function rootReducer(laststate:IAppState,action:Action):IAppState{
    switch(action.type){
        case CounterActions.INCREMENT: return { count: laststate.count+1};
        case CounterActions.DECREMENT: return { count: laststate.count-1};
    }
    return laststate;
}
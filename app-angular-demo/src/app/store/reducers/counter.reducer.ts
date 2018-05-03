import { CounterActions } from "../actions/app.action";
import { ICounterState } from "../models/state";
import { Action, Reducer } from "redux";

/*export const counterReducer: Reducer<ICounterState>=(lastState: ICounterState, action: Action): ICounterState {
  switch(action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1 };
    case CounterActions.DECREMENT: return { count: lastState.count - 1 };
  }
}*/

export const INITIAL_COUNTER_STATE: ICounterState = {
    count:0
}

export const counterReducer: Reducer<ICounterState> = (state: ICounterState = INITIAL_COUNTER_STATE, action: Action & { payload?}): ICounterState => {
    console.log(action.type);
    switch (action.type) {
        case CounterActions.INCREMENT: return { count: state.count + 1 };
        case CounterActions.DECREMENT: return { count: state.count - 1 };
        default:
            return state;
    }
}
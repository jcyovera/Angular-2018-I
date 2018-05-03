import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  @dispatch()
  increment(): Action {
    return { type: CounterActions.INCREMENT };
  }
  @dispatch()
  decrement(): Action {
    return { type: CounterActions.DECREMENT };
  }
}
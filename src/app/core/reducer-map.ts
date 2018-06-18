import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import * as app from './reducers';
import { environment } from '../../environments/environment.prod';

export interface State {
  app: app.AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: app.appReducers
};


/**
 * Helpers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('%c state', 'color: #33aa33', state);
    console.log('%c action', 'color: #aa33aa', action);
    return reducer(state, action);
  };
}

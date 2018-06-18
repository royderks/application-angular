import { State } from './reducer-map';
import { createSelector } from '@ngrx/store';
import { AppState } from './reducers';

const getState = (state: State) => state.app;

const loading = (state: AppState) => state.loading;
const data = (state: AppState) => state.data;

export const AppSelectors = {
  loading: createSelector(getState, loading),
  data: createSelector(getState, data),
};

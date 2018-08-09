import { State } from './reducer-map';
import { createSelector } from '@ngrx/store';
import { AppState } from './reducers';

const getState = (state: State) => state.app;

const loading = (state: AppState) => state.loading;
const query = (state: AppState) => state.query;
const initialData = (state: AppState) => state.data;

/* TODO: Move functions that mutate the state to different location, find out if they can be moved to Effects */
const data = (state: AppState) => {
  /* TODO: Define class to solve binding errors */
  const { search, gender, nat } = state.query ? state.query : {search: null, gender: null, nat: null}; 

  if (!state.loading) {
    let result = []; /* TODO: Define class */
    result = search ? state.data.filter(({name}) => `${name.first} ${name.last}`.includes(search)) : state.data;
    result = gender ? result.filter((user) => user.gender === gender) : result;
    result = nat ? result.filter((user) => user.nat === nat) : result;

    return result /* TODO: Add some handling of empy result */
  }
}

const filters = (state: AppState) => {
  return [ /* TODO: Populating this data should be done on backend */
    {name: "gender", value: ['female', 'male']},
    {name: "nat", value: ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US']}
  ]
}

export const AppSelectors = {
  loading: createSelector(getState, loading),
  query: createSelector(getState, query),
  initialData: createSelector(getState, initialData),
  data: createSelector(getState, data),
  filters: createSelector(getState, filters),
};

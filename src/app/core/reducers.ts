import { AppActions } from './actions';

export interface AppState {
  loading?: boolean;
  data?: Array<any>;
}

const initialState: AppState = {
  loading: false
};

export const appReducers = (state: AppState = initialState, action: any): AppState => {
  switch (action.type) {
    case AppActions.DATA_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case AppActions.DATA_FETCH:
    case AppActions.LOADING_START: {
      return {
        ...state,
        loading: true
      };
    }
    case AppActions.LOADING_STOP: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

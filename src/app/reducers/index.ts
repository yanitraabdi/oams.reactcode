import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { routerReducer, RouterState } from 'react-router-redux';
import { customerReducer } from 'app/reducers/customers';

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  todos: todoReducer as any,
  router: routerReducer as any,
  customers: customerReducer as any
});

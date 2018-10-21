import { TodoModel } from 'app/models';
import { CustomerModel } from 'app/models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  todos: RootState.TodoState;
  customers: RootState.CustomerState;
  router: RouterState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type CustomerState = CustomerModel[];
}

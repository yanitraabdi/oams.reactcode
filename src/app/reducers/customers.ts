import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { CustomerActions } from 'app/actions/customers';
import { CustomerModel } from 'app/models';

const initialState: RootState.CustomerState = [
  {
    customerId: 1,
    code: "",
    companyName: "",
    address: "",
    email: "",
    website: "",
    phone: "",
    mobile: "",
    fax: "",
    city: "",
    state: "",
    status: 0,
    createdBy: 0,
    createdDate: "",
    modifiedBy: 0,
    modifiedDate: "",
    completed: false
  }
];

export const customerReducer = handleActions<RootState.CustomerState, CustomerModel>(
  {
    [CustomerActions.Type.ADD_CUSTOMER]: (state, action) => {
      if (action.payload && action.payload.companyName) {
        return [
          {
            customerId: state.reduce((max, todo) => Math.max(todo.customerId || 1, max), 0) + 1,
            code: action.payload.code,
            companyName: action.payload.companyName,
            address: action.payload.address,
            email: action.payload.email,
            website: action.payload.website,
            phone: action.payload.phone,
            mobile: action.payload.mobile,
            fax: action.payload.fax,
            city: action.payload.city,
            state: action.payload.state,
            status: action.payload.status,
            createdBy: action.payload.createdBy,
            createdDate: action.payload.createdDate,
            modifiedBy: action.payload.modifiedBy,
            modifiedDate: action.payload.modifiedDate,
            completed: false
          },
          ...state
        ];
      } else {
        return state;
      }
    },
    [CustomerActions.Type.DELETE_CUSTOMER]: (state, action) => {
      return state.filter((todo) => todo.customerId !== (action.payload as any));
    },
    [CustomerActions.Type.EDIT_CUSTOMER]: (state, action) => {
      return state.map((todo) => {
        if (!todo || !action || !action.payload) {
          return todo;
        } else {
          return (todo.customerId || 0) === action.payload.customerId
            ? { ...todo, companyName: action.payload.companyName }
            : todo;
        }
      });
    },
    [CustomerActions.Type.COMPLETE_CUSTOMER]: (state, action) => {
      return state.map(
        (todo) => (todo.customerId === (action.payload as any) ? { ...todo, completed: !todo.completed } : todo)
      );
    },
    [CustomerActions.Type.COMPLETE_ALL]: (state, action) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    [CustomerActions.Type.CLEAR_COMPLETED]: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    }
  },
  initialState
);

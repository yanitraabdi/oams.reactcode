import { createAction } from 'redux-actions';
import { CustomerModel, CustomerContactModel } from 'app/models';

export namespace CustomerActions {
  export enum Type {
    GET_CUSTOMER = 'GET_CUSTOMER',
    GET_CUSTOMER_BY_ID = 'GET_CUSTOMER_BY_ID',
    ADD_CUSTOMER = 'ADD_CUSTOMER',
    ADD_CUSTOMER_CONTACT = 'ADD_CUSTOMER_CONTACT',
    EDIT_CUSTOMER = 'EDIT_CUSTOMER',
    EDIT_CUSTOMER_CONTACT = 'EDIT_CUSTOMER_CONTACT',
    DELETE_CUSTOMER = 'DELETE_CUSTOMER',
    DELETE_CUSTOMER_CONTACT = 'DELETE_CUSTOMER_CONTACT',
    COMPLETE_CUSTOMER = 'COMPLETE_CUSTOMER',
    COMPLETE_ALL = 'COMPLETE_ALL',
    CLEAR_COMPLETED = 'CLEAR_COMPLETED'
  }

  export const getCustomer = createAction<CustomerModel>(Type.GET_CUSTOMER);
  export const getCustomerById = createAction<PartialPick<CustomerModel, 'customerId'>>(Type.GET_CUSTOMER_BY_ID);
  export const addCustomer = createAction<PartialPick<CustomerModel, 'companyName'>>(Type.ADD_CUSTOMER);
  export const addCustomerContact = createAction<PartialPick<CustomerContactModel, 'name'>>(Type.ADD_CUSTOMER_CONTACT);
  export const editCustomer = createAction<PartialPick<CustomerModel, 'customerId'>>(Type.EDIT_CUSTOMER);
  export const editCustomerContact = createAction<PartialPick<CustomerContactModel, 'customerId'>>(Type.EDIT_CUSTOMER_CONTACT);
  export const deleteCustomer = createAction<CustomerModel['customerId']>(Type.DELETE_CUSTOMER);
  export const deleteCustomerContact = createAction<CustomerContactModel['customerContactId']>(Type.DELETE_CUSTOMER_CONTACT);
  export const completeCustomer = createAction<CustomerModel['customerId']>(Type.COMPLETE_CUSTOMER);
  export const completeAll = createAction(Type.COMPLETE_ALL);
  export const clearCompleted = createAction(Type.CLEAR_COMPLETED);
}

export type CustomerActions = Omit<typeof CustomerActions, 'Type'>;

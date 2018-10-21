/** CustomerMVC model definitions **/

export interface CustomerModel {
    customerId: number;
    code: string;
    companyName: string;
    address: string;
    email: string;
    website: string;
    phone: string;
    mobile: string;
    fax: string;
    city: string;
    state: string;
    status: number;
    createdBy: number;
    createdDate: string;
    modifiedBy: number;
    modifiedDate: string;
    completed: boolean;
}

export namespace CustomerModel {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active',
        SHOW_COMPLETED = 'completed'
    }
}

export interface CustomerContactModel {
    customerContactId: number,
    customerId:number,
    isPrimaryContact: boolean,
    name: string,
    address: string,
    email: string,
    phone: string,
    mobile: string,
    fax: string,
    city: string,
    state: string
}

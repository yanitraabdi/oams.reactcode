/** CustomerMVC model definitions **/

export interface RawMaterialModel {
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
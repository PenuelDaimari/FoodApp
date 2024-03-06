import { Entity } from '@loopback/repository';
export declare class Userdetails extends Entity {
    id?: string;
    contactNo: string;
    password: string;
    name: string;
    username?: string;
    token?: string;
    constructor(data?: Partial<Userdetails>);
}
export interface UserdetailsRelations {
}
export type UserdetailsWithRelations = Userdetails & UserdetailsRelations;

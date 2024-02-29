import { Entity } from '@loopback/repository';
export declare class Userdetails extends Entity {
    id?: string;
    contactNo: number;
    password: string;
    name: string;
    username?: string;
    constructor(data?: Partial<Userdetails>);
}
export interface UserdetailsRelations {
}
export type UserdetailsWithRelations = Userdetails & UserdetailsRelations;

import { Entity } from '@loopback/repository';
export declare class Userdetails extends Entity {
    id?: string;
    email: string;
    password: string;
    name: string;
    username?: string;
    hall?: string;
    constructor(data?: Partial<Userdetails>);
}
export interface UserdetailsRelations {
}
export type UserdetailsWithRelations = Userdetails & UserdetailsRelations;

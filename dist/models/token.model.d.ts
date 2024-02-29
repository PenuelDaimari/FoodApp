import { Entity } from '@loopback/repository';
export declare class Token extends Entity {
    email: string;
    id?: string;
    Token: string;
    constructor(data?: Partial<Token>);
}
export interface TokenRelations {
}
export type TokenWithRelations = Token & TokenRelations;

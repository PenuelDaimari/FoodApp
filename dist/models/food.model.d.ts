import { Entity } from '@loopback/repository';
export declare class Food extends Entity {
    foodID?: string;
    Name: string;
    Hall: string;
    Price: number;
    Description: string;
    image: string;
    constructor(data?: Partial<Food>);
}
export interface FoodRelations {
}
export type FoodWithRelations = Food & FoodRelations;

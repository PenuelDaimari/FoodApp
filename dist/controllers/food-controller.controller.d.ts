import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Food } from '../models';
import { FoodRepository } from '../repositories';
export declare class FoodControllerController {
    foodRepository: FoodRepository;
    constructor(foodRepository: FoodRepository);
    create(food: Food): Promise<Food>;
    count(where?: Where<Food>): Promise<Count>;
    find(filter?: Filter<Food>): Promise<Food[]>;
    updateAll(food: Food, where?: Where<Food>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Food>): Promise<Food>;
    updateById(id: string, food: Food): Promise<void>;
    replaceById(id: string, food: Food): Promise<void>;
    deleteById(id: string): Promise<void>;
}

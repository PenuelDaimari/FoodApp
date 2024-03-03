import { DefaultCrudRepository } from '@loopback/repository';
import { FoodDatasourceDataSource } from '../datasources';
import { Food, FoodRelations } from '../models';
export declare class FoodRepository extends DefaultCrudRepository<Food, typeof Food.prototype.foodID, FoodRelations> {
    constructor(dataSource: FoodDatasourceDataSource);
}

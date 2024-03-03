import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FoodDatasourceDataSource} from '../datasources';
import {Food, FoodRelations} from '../models';

export class FoodRepository extends DefaultCrudRepository<
  Food,
  typeof Food.prototype.foodID,
  FoodRelations
> {
  constructor(
    @inject('datasources.FoodDatasource') dataSource: FoodDatasourceDataSource,
  ) {
    super(Food, dataSource);
  }
}

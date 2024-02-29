import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TokenDataSource} from '../datasources';
import {Token, TokenRelations} from '../models';

export class TokenRepository extends DefaultCrudRepository<
  Token,
  typeof Token.prototype.id,
  TokenRelations
> {
  constructor(
    @inject('datasources.Token') dataSource: TokenDataSource,
  ) {
    super(Token, dataSource);
  }
}

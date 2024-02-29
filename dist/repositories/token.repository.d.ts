import { DefaultCrudRepository } from '@loopback/repository';
import { TokenDataSource } from '../datasources';
import { Token, TokenRelations } from '../models';
export declare class TokenRepository extends DefaultCrudRepository<Token, typeof Token.prototype.id, TokenRelations> {
    constructor(dataSource: TokenDataSource);
}

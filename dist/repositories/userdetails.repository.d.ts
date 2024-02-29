import { DefaultCrudRepository } from '@loopback/repository';
import { UserdetailsDataSource } from '../datasources';
import { Userdetails, UserdetailsRelations } from '../models';
export declare class UserdetailsRepository extends DefaultCrudRepository<Userdetails, typeof Userdetails.prototype.id, UserdetailsRelations> {
    constructor(dataSource: UserdetailsDataSource);
    authenticate(contactNo: number, password: string): Promise<Userdetails | null>;
}

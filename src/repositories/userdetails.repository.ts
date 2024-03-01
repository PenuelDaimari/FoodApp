import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserdetailsDataSource} from '../datasources';
import {Userdetails, UserdetailsRelations} from '../models';
import {compare} from 'bcrypt';

export class UserdetailsRepository extends DefaultCrudRepository<
  Userdetails,
  typeof Userdetails.prototype.id,
  UserdetailsRelations
> {
  constructor(
    @inject('datasources.Userdetails') dataSource: UserdetailsDataSource,
  ) {
    super(Userdetails, dataSource);
  }

  async authenticate(contactNo: string, password: string): Promise<Userdetails | null> {
    // Find user by email
    const user = await this.findOne({where: {contactNo}});
    if (!user) {
      return null; // User not found
    }
    // Verify password
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      return null; // Password doesn't match
    }
    return user; // User authenticated
  }
}

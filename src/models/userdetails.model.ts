import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    hiddenProperties: ['password','token'] // Remove password and token from response body
  }
})
export class Userdetails extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  contactNo: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  token?: string;

  constructor(data?: Partial<Userdetails>) {
    super(data);
  }
}

export interface UserdetailsRelations {
  // describe navigational properties here
}

export type UserdetailsWithRelations = Userdetails & UserdetailsRelations;

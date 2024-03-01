import {Entity, model, property} from '@loopback/repository';

@model()
export class Userdetails extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  contactNo: number;

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


  constructor(data?: Partial<Userdetails>) {
    super(data);
  }
}

export interface UserdetailsRelations {
  // describe navigational properties here
}

export type UserdetailsWithRelations = Userdetails & UserdetailsRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Food extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  foodID?: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
    required: true,
  })
  Hall: string;

  @property({
    type: 'number',
    required: true,
  })
  Price: number;

  @property({
    type: 'string',
    required: true,
  })
  Description: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;


  constructor(data?: Partial<Food>) {
    super(data);
  }
}

export interface FoodRelations {
  // describe navigational properties here
}

export type FoodWithRelations = Food & FoodRelations;

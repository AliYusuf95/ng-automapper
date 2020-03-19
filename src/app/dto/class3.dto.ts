import {AutoMap} from '@nartc/automapper';

export class Class3Dto {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

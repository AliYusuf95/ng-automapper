import {AutoMap} from '@nartc/automapper';

export class Class1Dto {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

import {AutoMap} from '@nartc/automapper';

export class Class2Dto {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

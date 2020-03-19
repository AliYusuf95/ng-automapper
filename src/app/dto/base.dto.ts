import {AutoMap} from '@nartc/automapper';

export class BaseDto {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

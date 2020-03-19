import {AutoMap, Mapper} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';

export class BaseModel {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

Mapper.createMap(BaseDto, BaseModel);

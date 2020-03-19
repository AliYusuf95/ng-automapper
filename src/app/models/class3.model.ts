import {AutoMap, Mapper} from '@nartc/automapper';
import {Class3Dto} from '../dto/class3.dto';

export class Class3Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

Mapper.createMap(Class3Dto, Class3Model);

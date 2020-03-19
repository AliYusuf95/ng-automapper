import {AutoMap, Mapper} from '@nartc/automapper';
import {Class2Dto} from '../dto/class2.dto';

export class Class2Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

Mapper.createMap(Class2Dto, Class2Model);

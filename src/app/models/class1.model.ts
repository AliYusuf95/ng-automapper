import {AutoMap, Mapper} from '@nartc/automapper';
import {Class1Dto} from '../dto/class1.dto';

export class Class1Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

Mapper.createMap(Class1Dto, Class1Model);

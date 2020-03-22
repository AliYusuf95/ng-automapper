import {AutoMap, AutoMapper, Mapper, MappingProfileBase} from '@nartc/automapper';
import {Class2Dto} from '../dto/class2.dto';

export class Class2Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

class Class2Profile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Class2Dto, Class2Model);
  }
}

Mapper.addProfile(Class2Profile);


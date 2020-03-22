import {AutoMap, AutoMapper, Mapper, MappingProfileBase} from '@nartc/automapper';
import {Class1Dto} from '../dto/class1.dto';

export class Class1Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

class Class1Profile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Class1Dto, Class1Model);
  }
}

Mapper.addProfile(Class1Profile);

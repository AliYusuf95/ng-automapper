import {AutoMap, AutoMapper, Mapper, ProfileBase} from '@nartc/automapper';
import {Class3Dto} from '../dto/class3.dto';

export class Class3Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

class Class3Profile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Class3Dto, Class3Model);
  }
}

Mapper.addProfile(Class3Profile);

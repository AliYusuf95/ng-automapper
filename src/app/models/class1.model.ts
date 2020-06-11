import {AutoMap, AutoMapper, Mapper, ProfileBase} from '@nartc/automapper';
import {Class1Dto} from '../dto/class1.dto';

export class Class1Model {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

class Class1Profile extends ProfileBase {
  profileName = 'Class1Profile';
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Class1Dto, Class1Model);
  }
}

console.log('Class1Profile', Class1Profile);
Mapper.addProfile(Class1Profile);

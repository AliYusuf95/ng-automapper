import {AutoMap, AutoMapper, Mapper, ProfileBase} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';

export class BaseModel {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

class BaseProfile extends ProfileBase {
  profileName = 'BaseProfile';
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(BaseDto, BaseModel);
  }
}
console.log('BaseProfile');
Mapper.addProfile(BaseProfile);

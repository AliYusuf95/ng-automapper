import {AutoMap, AutoMapper, Mapper, MappingProfileBase} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';

export class BaseModel {
  @AutoMap()
  id: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}

class BaseProfile extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(BaseDto, BaseModel);
  }
}

Mapper.addProfile(BaseProfile);

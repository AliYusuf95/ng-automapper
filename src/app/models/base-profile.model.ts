import {AutoMap, AutoMapper, Mapper, MappingProfileBase} from '@nartc/automapper';
import {BaseProfileDto} from '../dto/base-profile.dto';

export class BaseProfileModel {
  @AutoMap()
  logoUrl: string;
  @AutoMap()
  updatedAt: Date;
}

class BaseProfileMapping extends MappingProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(BaseProfileDto, BaseProfileModel);
  }
}

Mapper.addProfile(BaseProfileMapping);

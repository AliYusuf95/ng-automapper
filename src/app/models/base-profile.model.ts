import {AutoMap, AutoMapper, Mapper, ProfileBase} from '@nartc/automapper';
import {BaseProfileDto} from '../dto/base-profile.dto';

export class BaseProfileModel {
  @AutoMap()
  logoUrl: string;
  @AutoMap()
  updatedAt: Date;
}

class BaseProfileMapping extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(BaseProfileDto, BaseProfileModel);
  }
}

Mapper.addProfile(BaseProfileMapping);

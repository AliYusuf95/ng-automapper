import {BaseModel} from './base.model';
import {AutoMap, Mapper} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';
import {ProfileDto} from '../dto/profile.dto';

export class ProfileModel extends BaseModel {
  @AutoMap()
  logo: object;
}

Mapper.createMap(ProfileDto, ProfileModel, {includeBase: [BaseDto, BaseModel]});

import {BaseModel} from './base.model';
import {AutoMap, Mapper} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';
import {UserDto} from '../dto/user.dto';
import {ProfileModel} from './profile.model';

export class UserModel extends BaseModel {
  @AutoMap()
  name: string;
  @AutoMap()
  isAdult: boolean;
  @AutoMap(() => ProfileModel)
  profile: ProfileModel;
}

Mapper.createMap(UserDto, UserModel, {includeBase: [BaseDto, BaseModel]})
  .forMember(dist => dist.isAdult, opts => opts.mapFrom(src => src.age >= 18));

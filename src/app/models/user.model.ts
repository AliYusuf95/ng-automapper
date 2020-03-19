import {BaseModel} from './base.model';
import {AutoMap, Mapper} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';
import {UserDto} from '../dto/user.dto';

export class UserModel extends BaseModel {
  @AutoMap()
  name: string;
  @AutoMap()
  age: number;
}

Mapper.createMap(UserDto, UserModel, {includeBase: [BaseDto, BaseModel]});

import {BaseDto} from './base.dto';
import {AutoMap} from '@nartc/automapper';
import {ProfileDto} from './profile.dto';

export class UserDto extends BaseDto {
  @AutoMap()
  name: string;
  @AutoMap()
  age: number;
  @AutoMap(() => ProfileDto)
  profile: ProfileDto;
}

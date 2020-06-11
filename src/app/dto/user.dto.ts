import {BaseDto} from './base.dto';
import {AutoMap} from '@nartc/automapper';
import {ProfileDto} from './profile.dto';
import {Class1Dto} from './class1.dto';

export class UserDto extends BaseDto {
  @AutoMap()
  name: string;
  @AutoMap()
  age: number;
  @AutoMap(() => ProfileDto)
  profile: ProfileDto;
  // this is optional filed
  @AutoMap(() => Class1Dto)
  class1?: Class1Dto[];
}

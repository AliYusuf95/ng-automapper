import {BaseDto} from './base.dto';
import {AutoMap} from '@nartc/automapper';

export class UserDto extends BaseDto {
  @AutoMap()
  name: string;
  @AutoMap()
  age: number;
}

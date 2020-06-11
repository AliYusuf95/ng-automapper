import {UserDto} from './user.dto';
import {AutoMap} from '@nartc/automapper';
import {Class1Dto} from './class1.dto';

export class AdvanceUserDto extends UserDto {
  // override to be as required filed
  @AutoMap(() => Class1Dto)
  class1!: Class1Dto[];
  // some extra mapped fields to prevent error
  @AutoMap()
  advance: boolean;
}

export class AdvanceUserDto2 extends UserDto {
  // override to be as required filed
  @AutoMap(() => Class1Dto)
  class1!: Class1Dto[];
}
import {BaseProfileDto} from './base-profile.dto';
import {AutoMap} from '@nartc/automapper';
import {Class1Dto} from './class1.dto';

export class ProfileDto extends BaseProfileDto {
  @AutoMap(() => Class1Dto)
  class1: Class1Dto;
}

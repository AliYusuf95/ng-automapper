import {BaseDto} from './base.dto';
import {AutoMap} from '@nartc/automapper';

export class ProfileDto extends BaseDto {
  @AutoMap()
  logo: object;
}

import {AutoMap} from '@nartc/automapper';

export class BaseProfileDto {
  @AutoMap()
  logoUrl: string;
  @AutoMap()
  updatedAt: Date;
}

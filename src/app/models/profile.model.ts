import {AutoMap, ignore, Mapper} from '@nartc/automapper';
import {ProfileDto} from '../dto/profile.dto';
import {BaseProfileModel} from './base-profile.model';
import {BaseProfileDto} from '../dto/base-profile.dto';
import {Class1Model} from './class1.model';

export class ProfileModel extends BaseProfileModel {
  @AutoMap(() => Class1Model)
  class1: Class1Model;
}

Mapper.createMap(ProfileDto, ProfileModel, {includeBase: [BaseProfileDto, BaseProfileModel]});

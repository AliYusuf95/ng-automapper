import {ignore, Mapper} from '@nartc/automapper';
import {ProfileDto} from '../dto/profile.dto';
import {BaseProfileModel} from './base-profile.model';
import {BaseProfileDto} from '../dto/base-profile.dto';

export class ProfileModel extends BaseProfileModel {}

Mapper.createMap(ProfileDto, ProfileModel, {includeBase: [BaseProfileDto, BaseProfileModel]});

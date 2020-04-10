import {Mapper} from '@nartc/automapper';
import {ProfileDto} from '../dto/profile.dto';
import {BaseProfileModel} from './base-profile.model';

export class ProfileModel extends BaseProfileModel {}

Mapper.createMap(ProfileDto, ProfileModel);

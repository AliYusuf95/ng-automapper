import {BaseModel} from './base.model';
import {AutoMap, AutoMapper, mapFrom, Mapper, ProfileBase} from '@nartc/automapper';
import {BaseDto} from '../dto/base.dto';
import {UserDto} from '../dto/user.dto';
import {ProfileModel} from './profile.model';
import {AdvanceUserDto2, AdvanceUserDto} from '../dto/user2.dto';
import {Class1Model} from './class1.model';

export class UserModel extends BaseModel {
  @AutoMap()
  name: string;
  @AutoMap()
  isAdult: boolean;
  @AutoMap(() => ProfileModel)
  profile: ProfileModel;
  @AutoMap(() => Class1Model)
  class1: Class1Model[];
}

export class AdvanceUserModel extends UserModel {
  @AutoMap(() => Class1Model)
  cLass1?: Class1Model;
  @AutoMap(() => Class1Model)
  Class1?: Class1Model;
}

export class AdvanceUserModel2 extends AdvanceUserModel {
  @AutoMap(() => Class1Model)
  Class2?: Class1Model;
}

class UserProfile extends ProfileBase {
  profileName = 'UserProfile';

  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(UserDto, UserModel, {includeBase: [BaseDto, BaseModel]})
      .forMember(dist => dist.isAdult, mapFrom(src => src.age >= 18));

    mapper.createMap(AdvanceUserDto, AdvanceUserModel, {includeBase: [UserDto, UserModel]});

    mapper.createMap(AdvanceUserDto2, AdvanceUserModel2, {includeBase: [AdvanceUserDto, AdvanceUserModel]});
  }
}

Mapper.addProfile(UserProfile);

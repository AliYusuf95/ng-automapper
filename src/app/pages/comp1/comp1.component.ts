import {Component, OnInit} from '@angular/core';
import {Mapper} from '@nartc/automapper';
import {UserDto} from '../../dto/user.dto';
import {AdvanceUserModel, AdvanceUserModel2, UserModel} from '../../models/user.model';
import {AdvanceUserDto2, AdvanceUserDto} from '../../dto/user2.dto';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  user = {};

  constructor() {}

  ngOnInit(): void {

    const dto1: UserDto = {
      id: '2',
      name: 'user name',
      age: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
      profile: {
        logoUrl: '',
        updatedAt: new Date(),
        class1: {
          id: 'class 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }
    };

    const dto2: AdvanceUserDto = {
      ...dto1,
      class1: [{
        id: 'class 1 array',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      Class1: {
        id: 'Class1 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      cLass1: {
        id: 'cLass1 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      advance: false
    };

    const dto3: AdvanceUserDto2 = {
      ...dto2,
      Class2: {
        id: 'class 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    };

    // normal mapping works fine
    const user1 = Mapper.map(dto1, UserModel, UserDto);
    console.log('user1', user1);

    // extend mapping with extra filed works fine
    const user2 = Mapper.map(dto2, AdvanceUserModel, AdvanceUserDto);
    console.log('user2', user2);

    if (Array.isArray(user2.Class1)) {
      console.error('This should be an object', user2.Class1);
      if (user2.Class1[0].id !== dto2.Class1.id) {
        console.error('Wrong value (', user2.Class1[0].id , ' - ', dto2.Class1.id, ')');
      }
    }

    try {
      // extend mapping without extra filed has error
      const user3 = Mapper.map(dto3, AdvanceUserModel2, AdvanceUserDto2);
      console.log('user3', user3);
    } catch (e) {
      console.error(e);
    }

    this.user = user1;
  }
}

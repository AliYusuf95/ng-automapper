import {Component, OnInit} from '@angular/core';
import {Mapper} from '@nartc/automapper';
import {UserDto} from '../../dto/user.dto';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  user;

  constructor() {
  }

  ngOnInit(): void {

    const dto: UserDto = {
      id: '2',
      name: 'user name',
      age: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
      profile: {
        logoUrl: '',
        updatedAt: new Date(),
      }
    };

    this.user = Mapper.map(dto, UserModel, UserDto);

    console.log(this.user);
  }

}

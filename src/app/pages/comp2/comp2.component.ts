import { Component, OnInit } from '@angular/core';
import {BaseModel} from '../../models/base.model';
import {Class1Model} from '../../models/class1.model';
import {Class2Model} from '../../models/class2.model';
import {Class3Model} from '../../models/class3.model';
import {Mapper} from '@nartc/automapper';
import {BaseDto} from '../../dto/base.dto';
import {Class1Dto} from '../../dto/class1.dto';
import {Class2Dto} from '../../dto/class2.dto';
import {Class3Dto} from '../../dto/class3.dto';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const model: BaseModel | Class1Model | Class2Model | Class3Model = {
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const base = Mapper.map(model, BaseModel, BaseDto);
    const class1 = Mapper.map(model, Class1Model, Class1Dto);
    const class2 = Mapper.map(model, Class2Model, Class2Dto);
    const class3 = Mapper.map(model, Class3Model, Class3Dto);

    console.log(base, class1, class2, class3);

  }

}

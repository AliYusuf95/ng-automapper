import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Comp1Component
      }
    ])
  ],
})
export class Comp1Module { }

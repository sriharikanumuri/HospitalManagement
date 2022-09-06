import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './components/task2/task2.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';


@NgModule({
  declarations: [
    Task2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    Task2RoutingModule
  ]
})
export class Task2Module { }

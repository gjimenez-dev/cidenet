import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './services/employee.services';
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    EmployeeService,
    GlobalService
  ]
})
export class CoreModule {
  constructor () {}
}

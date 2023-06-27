import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './employee/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EmployeeListComponent,
    EmployeeDetailsComponent
  ]
})
export class EmployeeModule { }

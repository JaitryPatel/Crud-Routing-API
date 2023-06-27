import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFormComponent } from './employee/employee-list/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './employee/employee-list/template-form/template-form.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeComponent,
    ReactiveFormComponent,
    TemplateFormComponent
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

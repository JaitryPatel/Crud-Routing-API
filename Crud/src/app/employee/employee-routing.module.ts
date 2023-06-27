import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { ReactiveFormComponent } from './employee/reactive-form/reactive-form.component';


const routes: Routes = [ 
  {path:"", component: EmployeeComponent},
  {path:"emp-list", component:ReactiveFormComponent},
  // {path: "emp-details/:id", component:EmployeeDetailsComponent},
  // {path: "reactive-form", component: ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

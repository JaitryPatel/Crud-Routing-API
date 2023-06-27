import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  public headers = [
    {
      name: "NAME",
      email: "EMAIL",
      department: "DEPARTMENT",
      Address:"ADDRESS",
      // date: "DATE",
      password: "PASSWORD"
    }
  ]
  
  public employees = [
    {
      name : "Jaitry",
      email : "Jaitry@gmail.com",
      department: "Frontend",
      Address: "Vankal",
      password: "Jaitry@123",
    },
    {
      name : "Jeel",
      email : "Jeel@gmail.com",
      department: "Frontend",
      Address: "Chimla",
      password: "Jeel15",
    },
    {
      name : "Om",
      email : "Om@gmail.com",
      department: "Frontend",
      Address: "Chikhli",
      password: "Om1099",
    },
    {
      name : "Khushi",
      email : "Khushi@gmail.com",
      department: "Frontend",
      Address: "Chimla",
      password: "Khushi",
    },
    {
      name : "Sanvi",
      email : "Sanvi@gmail.com",
      department: "Frontend",
      Address: "Amdhara",
      password: "Sanvi",
    }
  ]
}


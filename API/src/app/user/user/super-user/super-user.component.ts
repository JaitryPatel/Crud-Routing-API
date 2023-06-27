import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperUserService } from 'src/app/super-user.service';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.scss']
})
export class SuperUserComponent {
  tableheader = [
    {
      "id": "Id",
      "name": "Name",
      "department": "Department",
      "age": "Age",
      "salary": "Salary",
      "country": "Country",
      // "date":"Date"

    }
  ]

  @Input() user: any;
  @Input() id: any;
  
  
  /** This property is used for emit data data to parent component for get updated data*/
  @Output() public getUpdatedData: EventEmitter<boolean>;
  constructor(
    private usersService: SuperUserService
  ) {
    // console.log(typeof(this.header));
    
    // this.header.forEach((element : any) => {
    //   console.log(element.this.id);
      
    // });
    this.getUpdatedData = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  removeUser(userId: number) {
    this.usersService.removeUser(userId).subscribe((response: any) => {
      debugger
      this.getUpdatedData.next(true);
    });
  }
}
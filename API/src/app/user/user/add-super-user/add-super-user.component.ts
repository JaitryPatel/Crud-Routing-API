import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SuperUserService } from 'src/app/super-user.service';

@Component({
  selector: 'app-add-super-user',
  templateUrl: './add-super-user.component.html',
  styleUrls: ['./add-super-user.component.scss']
})
export class AddSuperUserComponent {
  /** This property is used for emit data data to parent component for get updated data*/
  @Output() public getUpdatedData: EventEmitter<boolean>;
  
  constructor(private superUserService: SuperUserService) {
    this.getUpdatedData = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  onCreateUser( userName: string, department: string, age: any,  salary: any, country: string) {
    debugger
    this.superUserService.addUser( userName, department, age, salary , country).subscribe((response: any) => {
      console.log('response: ', response);
      this.getUpdatedData.next(true);
    });
  }

}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {
  constructor (private activeRoute: ActivatedRoute){

  }
  id: any;
  ngOnInit() : void{
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }
}

import { Component, OnInit } from '@angular/core';
import { SuperUserService } from 'src/app/super-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    // header : {id: string, name: string}[] = [];
  
    //create heroes array
    user: { id: number, name: string, department: string,age:number, salary: number, country: string   }[] = [];
    // department: string, age: number, salary: number, country: string
  
    //inject HeroesService as a constructor parameter
    constructor(private usersService: SuperUserService) { }
  
    ngOnInit() {
      this.getUsers();
    }
  
    getUsers() {
      this.usersService.getUsers().subscribe((data: any) => {
        this.user = data;
        console.log("users");
        
      });
    }
    // getHeaders() {
    //   this.usersService.getHeaders().subscribe((d: any) => {
    //     this.header = d;
    //     console.log(d);
        
    //   });
    // }
  
    getUpdatedData(event:any){
      this.getUsers();
    }
  }

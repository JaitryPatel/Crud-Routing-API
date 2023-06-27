import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperUserService {
  url='http://localhost:3000'
  constructor(private http: HttpClient) { }

  // getHeaders() {
  //   return this.http.get(this.url + '/Headers');
  // }

  getUsers() {
    return this.http.get(this.url + '/users');
  }

  addUser(userName: string, department: string, age: number, salary: number, country: string){
    debugger
    const requestBody = {
      id: Math.floor(Math.random() * 90 + 10),
      name: userName,
      department : department,
      age: age,
      salary: salary,
      country: country
    }
    return this.http.post(this.url + '/users', requestBody);
  }

  removeUser(id:number){
    return this.http.delete(this.url + '/users/' + id);
  }
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SuperUserComponent } from './user/super-user/super-user.component';
import { AddSuperUserComponent } from './user/add-super-user/add-super-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    SuperUserComponent,
    AddSuperUserComponent,
    UserComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ],
  exports:[
    SuperUserComponent,
    AddSuperUserComponent,
    UserComponent

    
  ]
})
export class UserModule { }

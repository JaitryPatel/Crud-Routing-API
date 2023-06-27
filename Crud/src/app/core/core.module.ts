import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }

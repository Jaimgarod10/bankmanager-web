import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersNewComponent } from './users-new/users-new.component';


@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersHomeComponent,
    UsersDetailComponent,
    UsersNewComponent
  ]
})
export class UsersModule { }

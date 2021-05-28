import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersHomeComponent } from "./users-home/users-home.component";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersHomeComponent
  ]
})
export class UsersModule {}

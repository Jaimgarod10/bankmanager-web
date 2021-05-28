import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { AuthorsRoutingModule } from "./authors-routing.module";
import { AuthorsHomeComponent } from "./authors-home/authors-home.component";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AuthorsRoutingModule
  ],
  declarations: [
    AuthorsHomeComponent
  ]
})
export class AuthorsModule {}

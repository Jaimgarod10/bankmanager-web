import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { AuthorsRoutingModule } from "./authors-routing.module";
import { AuthorsHomeComponent } from "./authors-home/authors-home.component";
import { AuthorsNewComponent } from './authors-new/authors-new.component';
import { AuthorsDetailComponent } from "./authors-detail/authors-detail.component";

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    AuthorsRoutingModule
  ],
  declarations: [
    AuthorsHomeComponent,
    AuthorsDetailComponent,
    AuthorsNewComponent
  ]
})
export class AuthorsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { LoansRoutingModule } from './loans-routing.module';
import { LoansHomeComponent } from './loans-home/loans-home.component';
import { LoansDetailComponent } from './loans-detail/loans-detail.component';
import { LoansNewComponent } from './loans-new/loans-new.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    LoansRoutingModule
  ],
  declarations: [
    LoansHomeComponent,
    LoansDetailComponent,
    LoansNewComponent
  ]
})
export class LoansModule { }

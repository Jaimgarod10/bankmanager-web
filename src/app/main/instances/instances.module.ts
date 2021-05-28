import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { InstancesRoutingModule } from './instances-routing.module';
import { InstancesHomeComponent } from './instances-home/instances-home.component';
import { InstancesDetailComponent } from './instances-detail/instances-detail.component';
import { InstancesNewComponent } from './instances-new/instances-new.component';


@NgModule({
  declarations: [
    InstancesHomeComponent,
    InstancesDetailComponent,
    InstancesNewComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    InstancesRoutingModule
  ]
})
export class InstancesModule { }

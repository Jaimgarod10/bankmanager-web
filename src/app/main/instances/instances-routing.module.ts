import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstancesHomeComponent } from './instances-home/instances-home.component';
import { InstancesDetailComponent } from "./instances-detail/instances-detail.component";
import { InstancesNewComponent } from './instances-new/instances-new.component';


const routes: Routes = [{
  path : '',
  component: InstancesHomeComponent
},
{
  path: "new",
  component: InstancesNewComponent
},{
  path: ":ID",
  component: InstancesDetailComponent
},
{
  path: ":ID/edit",
  component: InstancesDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstancesRoutingModule { }

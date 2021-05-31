import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansHomeComponent } from './loans-home/loans-home.component';
import { LoansDetailComponent } from "./loans-detail/loans-detail.component";
import { LoansNewComponent } from "./loans-new/loans-new.component";

const routes: Routes = [{
  path : '',
  component: LoansHomeComponent
},
{
  path: "new",
  component: LoansNewComponent
},
{
  path: ":ID",
  component: LoansDetailComponent
},
{
  path: ":ID/edit",
  component: LoansDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';
import { AuthorsHomeComponent } from "./authors-home/authors-home.component";
import { AuthorsNewComponent } from './authors-new/authors-new.component';

const routes: Routes = [{
  path : '',
  component: AuthorsHomeComponent
},
{
  path: "new",
  component: AuthorsNewComponent
},
{
  path: ":ID",
  component: AuthorsDetailComponent
},
{
  path: ":ID/edit",
  component: AuthorsDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }

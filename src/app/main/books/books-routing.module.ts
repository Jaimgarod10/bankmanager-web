import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksHomeComponent } from './books-home/books-home.component';
import { BooksDetailComponent } from "./books-detail/books-detail.component";
import { BooksNewComponent } from "./books-new/books-new.component";

const routes: Routes = [{
  path : '',
  component: BooksHomeComponent
},
{
  path: "new",
  component: BooksNewComponent
},
{
  path: ":ID",
  component: BooksDetailComponent
},
{
  path: ":ID/edit",
  component: BooksDetailComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

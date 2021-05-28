import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { InstancesModule } from './instances/instances.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadBooksModule(){
  return BooksModule;
}

export function loadInstancesModule(){
  return InstancesModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'books',
        loadChildren: loadBooksModule
      },
      {
        path: 'instances',
        loadChildren: loadInstancesModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { InstancesModule } from './instances/instances.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadBooksModule(){
  return BooksModule;
}

export function loadInstancesModule(){
  return InstancesModule;
}
export function loadAuthorsModule(){
  return AuthorsModule;
}
export function loadUsersModule(){
  return UsersModule;
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
      },
      {
        path: 'authors',
        loadChildren: loadAuthorsModule
      },
      {
        path: 'users',
        loadChildren: loadUsersModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
